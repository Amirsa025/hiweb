import React from "react";
import { getCookies } from "next-client-cookies/server";
import { redirect } from "next/navigation";
import { Header } from "@/app/(product)/_component/Header/Header";
import { Product } from "../_component/Product-page";
export default function ProductPage() {
  const cookie = getCookies();
  const token = cookie.get("token");

  if (!token) {
    redirect("/");
  }
  return (
    <div className="bg-white lg:px-[100px]">
      <Header />
      <hr className="text-gray-200" />
      <Product />
    </div>
  );
}
