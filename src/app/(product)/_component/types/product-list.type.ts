import { ProductResponse } from "@/app/(product)/type/get-product.type";

interface ProductItem {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

export interface ProductListProps {
  data: {
    data: {
      list: ProductItem[];
    };
  };
}
