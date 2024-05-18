import React from "react";
import { Product } from "./card.type";

export function Card({ proudct }: { proudct: Product }) {
  return (
    <div className="relative flex flex-col ">
      <div className="max-w-[25.75rem] max-h-[10.5rem] ">
        <img
          src={`${proudct?.imageUrl}`}
          className="rounded-[0.5rem] shadow-card  w-full h-full  relative z-10"
          alt={proudct.title}
        />
      </div>
      <div
        className="rounded-br-[0.8rem] rounded-bl-[0.8rem] bg-white mt-[-1.5rem] shadow-card px-[18px]"
        dir="rtl"
      >
        <div className="pt-10 text-black font-normal">{proudct.title}</div>
        <p className="pt-[14px] text-right text-gray-200 font-light text-[12px] leading-8">
          {proudct.description}
        </p>
        <div className="pb-[20px] pt-[41px]">
          <span className="text-gray-200 text-[12px]"> قیمت:</span>{" "}
          <span>{new Intl.NumberFormat().format(proudct.price)}</span>
        </div>
      </div>
    </div>
  );
}
