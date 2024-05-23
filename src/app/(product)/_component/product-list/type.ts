import { AddProductResponse } from "@/app/(product)/type/product.type";

interface Product {
  id: string;
  title: string;
}

export interface ProductListProps {
  data: {
    data: {
      list: AddProductResponse[];
    };
  };
}
