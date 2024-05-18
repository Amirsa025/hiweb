import { ProductResponse } from "@/app/(product)/_api/add-product";

interface Product {
  id: string;
  title: string;
}

export interface ProductListProps {
  data: {
    data: {
      list: ProductResponse[];
    };
  };
}
