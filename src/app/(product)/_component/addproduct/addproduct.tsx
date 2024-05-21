import React, { useState } from "react";
import { TextInput } from "@/app/_components/form-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProduct } from "../types/addproduct.types";
import { Button } from "@/app/_components/button";
import { addProductSchema } from "@/app/(product)/_component/types/addProduct.schema";
import { useAddProduct } from "@/app/(product)/_api/add-product";
import toast from "react-hot-toast";
import { useGetProduct } from "@/app/(product)/_api/get-product";
import { revalidatePath } from "next/cache";

export function AddProduct({
  onClose,
  setIsModalOpen,
}: {
  onClose: () => void;
  setIsModalOpen: (b: boolean) => boolean | any;
}) {
  const [selectedFile, setSelectedFile] = useState<string>("انتخاب فایل");
  const {
    setValue,
    register,
    clearErrors,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<addProduct>({
    resolver: zodResolver(addProductSchema),
  });
  const { refetch } = useGetProduct();
  const { mutate: submit, isPending } = useAddProduct({
    onSuccess: async () => {
      await refetch();
      toast.success("محصول شما با موفقیت اضافه شد");
      setTimeout(() => setIsModalOpen(false), 1000);
    },
  });

  const onSubmit = (data: addProduct) => {
    const formData: FormData = new FormData();
    formData.append("ProductTitle", data?.ProductTitle!);
    formData.append("ProductPrice", data?.ProductPrice ?? "");
    formData.append("Description", data.Description ?? "");
    if (data.file) formData.append("file", data.file);
    const submitData = {
      ProductTitle: formData.get("ProductTitle") as string,
      ProductPrice: formData.get("ProductPrice") as string,
      Description: formData.get("Description") as string | undefined,
      file: formData.get("file") as File | undefined,
    };
    submit(submitData);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const file = files[0];
      setSelectedFile(file.name);
      setValue("file", file);
      clearErrors("file");
    } else {
      setSelectedFile("");
      setValue("file", undefined);
    }
  };
  return (
    <div className="relative ">
      <div className="mt-4 lg:px-[214px] min-h-[10rem] space-y-[28px]">
        <div dir="rtl">افزودن محصول</div>
        <form onSubmit={handleSubmit(onSubmit)} dir="rtl">
          <div className="space-y-3">
            <label className="text-gray-200 text-[14px]">نام محصول</label>
            <TextInput<addProduct>
              register={register}
              name={"ProductTitle"}
              variant="neutral"
              errors={errors}
              className="w-[24.125rem] placeholder:text-[16px]"
              placeholder="نام محصول..."
            />
          </div>
          <div className="space-y-2 pt-[18px]">
            <label className="text-gray-200 text-[14px]">قیمت محصول</label>
            <TextInput<addProduct>
              register={register}
              name={"ProductPrice"}
              variant="neutral"
              type="number"
              errors={errors}
              className="w-[24.125rem] placeholder:text-[16px]"
              placeholder="قیمت محصول..."
            />
          </div>
          <div className="space-y-2 pt-[18px]">
            <label className="text-gray-200 text-[14px]">توضیحات</label>
            <TextInput<addProduct>
              register={register}
              name={"Description"}
              variant="neutral"
              type="textarea"
              errors={errors}
              className="w-[24.125rem] !h-[121px] placeholder:text-[16px]"
              placeholder="..."
            />
          </div>
          <div className="space-y-2 pt-[18px]">
            <label className="text-gray-200 text-[14px] ">
              بارگزاری عکس محصول
            </label>
            <div dir="ltr">
              <TextInput<addProduct>
                onChange={handleFileChange}
                register={register}
                name={"file"}
                variant="neutral"
                type="file"
                errors={errors}
                id="custom-input"
                hidden
                placeholder="..."
              />
              <div className="flex items-center relative ">
                <label htmlFor="custom-input" className="file">
                  انتخاب فایل
                </label>
                <label className="file-title" htmlFor="custom-input">
                  <div dir="rtl" className="px-3  text-[14px] text-gray-200">
                    {" "}
                    {selectedFile}
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-around pb-[71px] pt-[31px]">
            <div onClick={onClose} className="cursor-pointer hover:underline">
              انصراف
            </div>
            <Button
              type="submit"
              isDisabled={isValid}
              isLoading={isPending}
              loadingType="spinner"
            >
              ثبت محصول
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
