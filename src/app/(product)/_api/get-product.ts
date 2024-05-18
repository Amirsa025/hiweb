import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { readData } from "@/core/http-service/http-service";
import Cookies from "universal-cookie";
import { useState } from "react";

const getProduct = (count: number, skip: number) => {
  const cookie = new Cookies();
  const token = cookie.get("token");
  const headers = {
    Authorization: `${token}`,
  };
  return readData<any>(
    `/General/Product/ProductList?count=${count}&skip=${skip}`,
    headers,
  );
};

export const useGetProduct = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  const { data, isPlaceholderData, refetch, isLoading, isRefetching } =
    useQuery({
      queryKey: ["product", itemOffset],
      queryFn: () => getProduct(itemsPerPage, itemOffset),
      placeholderData: keepPreviousData,
      staleTime: 5000,
    });

  const totalCount = data?.data?.totalRowCount ?? 0;
  const pageCount = Math.ceil(totalCount / itemsPerPage);
  return {
    data,
    pageCount,
    itemOffset,
    setItemOffset,
    isPlaceholderData,
    refetch,
    isRefetching,
    isLoading,
  };
};
