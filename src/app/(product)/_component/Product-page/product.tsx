"use client";
import React, { Fragment, useCallback, useEffect } from "react";
import { useGetProduct } from "@/app/(product)/_api/get-product";
import { Pagination } from "@/app/(product)/_component/pagination";

import EmptyList from "@/app/(product)/_component/empty-list/empty-list";

import { LoadingCard } from "@/app/_components/skeleton";
import { Loading } from "@/app/_components/loading";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductResponse } from "@/app/(product)/type/get-product.type";
import { CardProduct } from "@/app/(product)/_component/product-list";

interface PaginationEvent {
  selected: number;
}

export function Product() {
  const {
    data,
    pageCount,
    setItemOffset,
    isPlaceholderData,
    isLoading,
    isRefetching,
  } = useGetProduct();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    const newOffset = (currentPage - 1) * 8;
    setItemOffset(newOffset);
  }, [currentPage, setItemOffset]);

  const handlePageClick = useCallback(
    (event: PaginationEvent) => {
      const params = new URLSearchParams(searchParams.toString());
      const selectedPage = event.selected + 1;
      params.set("page", selectedPage.toString());
      const newOffset = event.selected * 8;
      setItemOffset(newOffset);
      router.replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, setItemOffset, router, pathname],
  );

  return (
    <div className="flex flex-col justify-between h-full">
      {isLoading && (
        <div className="flex items-center justify-center min-h-[75vh]">
          <Loading size="large" variant="success" />
        </div>
      )}
      <EmptyList data={data} />
      <div className="card-wrapper">
        {isPlaceholderData || isRefetching ? (
          <>
            {data?.data?.list.map((item: ProductResponse, id: React.Key) => (
              <Fragment key={id}>
                <LoadingCard />
              </Fragment>
            ))}
          </>
        ) : (
          <CardProduct data={data} />
        )}
      </div>
      <div className="mt-[24px]">
        <hr />
        <div
          lang="fa"
          className="flex items-center justify-center sm:justify-start py-4 sm:py-0"
        >
          <Pagination pageCount={pageCount} onPageChange={handlePageClick} />
        </div>
      </div>
    </div>
  );
}
