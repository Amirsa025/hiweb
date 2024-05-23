import React from "react";
import ReactPaginate from "react-paginate";
import { IconLeft, IconRight } from "@/app/_components/icons/icons";
import { useSearchParams } from "next/navigation";
const Pagination = ({
  onPageChange,
  pageCount,
}: {
  pageCount: number;
  onPageChange?(selectedItem: { selected: number }): void;
}) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10) - 1;
  return (
    <div lang="fa">
      <ReactPaginate
        breakLabel="..."
        forcePage={currentPage}
        breakClassName="font-bold"
        pageCount={pageCount}
        onPageChange={onPageChange}
        pageRangeDisplayed={3}
        renderOnZeroPageCount={null}
        nextLabel={<IconRight className="w-3 pt-1 " />}
        previousLabel={<IconLeft className="w-3 pt-1 " />}
        containerClassName="flex mt-4"
        pageClassName="mx-1"
        pageLinkClassName="block w-[41px] h-[41px] flex items-center justify-center rounded border border-gray-400 rounded text-neutral font-vazir"
        previousClassName="mx-1 text-gray-100  rounded  border"
        previousLinkClassName="block px-4 py-2  rounded-md text-neutral font-vazir"
        nextLinkClassName="block px-4 py-2  rounded-md text-neutral font-vazir"
        nextClassName="mx-1 border  rounded border-gray-200 font-vazir"
        breakLinkClassName="block px-4 py-2 border border-gray-100 rounded   font-vazir  text-neutral"
        activeClassName="border-0 text-black font-bold rounded-md font-vazir cursor-not-allowed"
        disabledClassName="border-0 text-gray-100 bg-[#E6E6E6] font-vazir rounded-md cursor-not-allowed"
      />
    </div>
  );
};

export { Pagination };
