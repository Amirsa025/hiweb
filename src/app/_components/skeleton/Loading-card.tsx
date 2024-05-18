"use client";
import React from "react";
import SkeletonWrapper from "@/lib/skleton";
import Skeleton from "react-loading-skeleton";

const LoadingCard = () => {
  return (
    <SkeletonWrapper>
      <div className="relative p-1  rounded-[10px] mt-[24px]">
        <div className=" w-full h-[170px]  rounded-xl  object-cover transition-all">
          <Skeleton
            height="100%"
            containerClassName="w-full leading-3 h-full"
          />
        </div>
        <SkeletonWrapper>
          <section className="flex w-full py-[1.5rem] flex-col">
            <div className="w-full my-2 mx-2 h-[20px] rounded-full">
              <Skeleton
                height="100%"
                containerClassName="w-full leading-3 h-full"
              />
            </div>
            <div className="flex  items-center w-full  py-[0.5rem]">
              <div className="w-[20px] my-2 mx-2 h-[20px] rounded-full">
                <Skeleton
                  circle
                  height="100%"
                  containerClassName="w-full leading-3 h-full"
                />
              </div>
              <div className="w-full my-2 mx-2 h-[20px] rounded-full">
                <Skeleton
                  height="100%"
                  containerClassName="w-full leading-3 h-full"
                />
              </div>
            </div>
          </section>
        </SkeletonWrapper>
      </div>
    </SkeletonWrapper>
  );
};

export { LoadingCard };
