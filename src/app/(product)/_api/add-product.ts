import Cookies from "universal-cookie";
import { useMutation } from "@tanstack/react-query";
import { createData } from "@/core/http-service/http-service";
import { addProduct } from "@/app/(product)/_component/types/addproduct.types";
type uploadFile = {
  Authorization: string;
  "Content-Type"?: string;
};
export interface ProductResponse {
  description: string;
  id: string;
  imageUrl: string;
  price: number;
  title: string;
}
const uploadfile = (model: addProduct): Promise<ProductResponse> => {
  const cookie = new Cookies();
  const token = cookie.get("token");

  // Construct payload
  const payload: addProduct & { Authorization: string } = {
    ProductTitle: model.ProductTitle,
    ProductPrice: model.ProductPrice,
    Description: model.Description,
    file: model.file,
    Authorization: token,
  };

  const headers: any = {
    Authorization: token,
    "Content-Type": "multipart/form-data",
  };

  return createData<addProduct, ProductResponse>(
    "General/Product/AddProduct",
    payload,
    headers,
  );
};
type UseSignInOptions = {
  onSuccess?: () => void;
};
const useAddProduct = ({ onSuccess }: UseSignInOptions) => {
  return useMutation({
    mutationFn: uploadfile,
    onSuccess,
  });
};
export { useAddProduct };
