import { z } from "zod";

export const signInSchema = z
  .object({
    userName: z
      .string()
      .min(1, { message: "نام کاربری را وارد کنید" })
      .email({ message: "برای نام کاربری ایمیل خود را وارد کنید" }),
    passWord: z.string().min(1, { message: "رمز عبور را وارد کنید" }),
    rememberMe: z
      .boolean()
      .refine((val) => val, {
        message: "",
      })
      .optional(),
  })
  .required({});
