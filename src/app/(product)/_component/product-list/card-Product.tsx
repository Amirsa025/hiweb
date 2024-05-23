import React, { Fragment } from "react";

import { ProductListProps } from "@/app/(product)/_component/types/product-list.type";
import Image from "next/image";
import { getBlurDataURL } from "@/helper";
type CardProduct = Partial<ProductListProps>;
export const CardProduct: React.FC<CardProduct> = ({ data }) => {
  const product = data?.data;
  return (
    <>
      {product?.list.map((item, id: React.Key) => {
        return (
          <Fragment key={id}>
            <div className="relative flex flex-col ">
              <div className="max-w-[25.75rem] max-h-[10.5rem] ">
                <Image
                  width={0}
                  height={0}
                  src={`${item?.imageUrl}`}
                  className="rounded-[0.5rem] shadow-card  w-full h-full  relative z-10"
                  alt={item.title}
                  placeholder="blur"
                  blurDataURL={getBlurDataURL()}
                />
              </div>
              <div
                className="rounded-br-[0.8rem] rounded-bl-[0.8rem] bg-white mt-[-1.5rem] shadow-card px-[18px]"
                dir="rtl"
              >
                <div className="pt-10 text-black font-normal">{item.title}</div>
                <p className="pt-[14px] text-right text-gray-200 font-light text-[12px] leading-8">
                  {item.description}
                </p>
                <div className="pb-[20px] pt-[41px]">
                  <span className="text-gray-200 text-[12px]"> قیمت:</span>{" "}
                  <span>{new Intl.NumberFormat().format(item.price)}</span>
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
};
