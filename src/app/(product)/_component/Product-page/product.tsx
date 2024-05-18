"use client";
import React, { Fragment } from "react";
import { useGetProduct } from "@/app/(product)/_api/get-product";
import { Pagination } from "@/app/(product)/_component/pagination";
import { ProductList } from "@/app/(product)/_component/product-list";
import EmptyList from "@/app/(product)/_component/empty-list/empty-list";
import { ProductResponse } from "@/app/(product)/_api/add-product";
import { LoadingCard } from "@/app/_components/skeleton";
import { Loading } from "@/app/_components/loading";

export function Product() {
  const {
    data,
    pageCount,
    setItemOffset,
    isPlaceholderData,
    isLoading,
    isRefetching,
  } = useGetProduct();
  const handlePageClick = (event: any) => {
    const newOffset = event.selected * 8;
    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col justify-between h-full ">
      {isLoading && (
        <div className="flex items-center justify-center min-h-[75vh]">
          <Loading size="large" variant="success" />
        </div>
      )}
      <EmptyList data={data} />
      <div className="card-wrapper">
        {isPlaceholderData || isRefetching ? (
          <>
            {data?.data?.list.map((item: ProductResponse, id: React.Key) => {
              return (
                <Fragment key={id}>
                  <LoadingCard />
                </Fragment>
              );
            })}
          </>
        ) : (
          <ProductList data={data} />
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
