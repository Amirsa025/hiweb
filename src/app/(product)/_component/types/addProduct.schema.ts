import { z } from "zod";
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const addProductSchema = z
  .object({
    ProductTitle: z
      .string()
      .min(1, { message: "فیلد   نام  محصول نمی تواند خالی باشد" }),
    ProductPrice: z
      .string()
      .min(1, { message: "فیلد قیمت نمی تواند خالی باشد" }),
    Description: z
      .string()
      .min(1, { message: "فیلد توضیحات  نمی تواند خالی باشد" })
      .optional(),
    file: z
      .instanceof(File, { message: "فایل انتخاب نشده است" })
      .optional()
      .refine((file) => {
        return !file || file.size <= MAX_FILE_SIZE;
      }, "فایل شما باید کم تر از ۳ مگابایت باشد")
      .refine((file) => {
        // @ts-ignore
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      }, "فایل انتخاب شده باید عکس باشد"),
  })
  .required({});
