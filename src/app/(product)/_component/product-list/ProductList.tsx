import React, { Fragment } from "react";
import { Card } from "@/app/(product)/_component/card";
import { ProductResponse } from "@/app/(product)/_api/add-product";
import { ProductListProps } from "@/app/(product)/_component/product-list/type";

export const ProductList: React.FC<ProductListProps> = ({ data }) => {
  const product = data?.data;
  return (
    <>
      {product?.list.map((item: ProductResponse, id: React.Key) => {
        return (
          <Fragment key={id}>
            <Card proudct={item} />
          </Fragment>
        );
      })}
    </>
  );
};
