import Cookies from "universal-cookie";
import { useMutation } from "@tanstack/react-query";
import { createData } from "@/core/http-service/http-service";
import { addProduct } from "@/app/(product)/_component/types/addproduct.types";
import { UseSignInOptions } from "@/app/(product)/type/get-product.type";
import { AddProductResponse } from "@/app/(product)/type/product.type";

const uploadfile = (model: addProduct): Promise<AddProductResponse> => {
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

  return createData<addProduct, AddProductResponse>(
    "General/Product/AddProduct",
    payload,
    headers,
  );
};

const useAddProduct = ({ onSuccess }: UseSignInOptions) => {
  return useMutation({
    mutationFn: uploadfile,
    onSuccess,
  });
};
export { useAddProduct };
