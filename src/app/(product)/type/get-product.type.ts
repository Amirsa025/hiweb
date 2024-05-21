type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export type ProductResponse = {
  data: {
    items: Product[];
    totalRowCount: number;
  };
};
export type UseSignInOptions = {
  onSuccess?: () => void;
};
