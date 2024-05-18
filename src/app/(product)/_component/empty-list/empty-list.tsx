import React from "react";
import Image from "next/image";
import { ProductListProps } from "@/app/(product)/_component/product-list/type";

const EmptyList: React.FC<ProductListProps> = ({ data }) => {
  return (
    <>
      {data?.data?.list.length === 0 && (
        <div className="mt-[200px] flex items-center justify-center">
          <div className="text-center">
            <Image src="./images/bascket.svg" width={297} height={297} alt="" />
            <div dir="rtl" className="text-gray-200 text-[1rem]">
              محصول خود را وارد نمایید.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmptyList;
