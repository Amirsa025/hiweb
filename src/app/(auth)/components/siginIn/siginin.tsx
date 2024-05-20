"use client";
import Image from "next/image";
import { Button } from "@/app/_components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signInSchema } from "@/app/(auth)/types/signin.schema";
import { SignIn } from "@/app/(auth)/types/siginin.types";
import { TextInput } from "@/app/_components/form-input";
import { useRouter } from "next/navigation";
import { useSignIn } from "@/app/(auth)/_api/auth";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/store/auth/store";
import Cookies from "universal-cookie";
import { useRefreshToken } from "@/app/(auth)/_api/refresh-token";
import { useEffect, useState } from "react";
import { wait } from "next/dist/lib/wait";
import { getUserName } from "@/store/auth/authSlice";
import { isTokenExpired } from "@/helper";

export const SiginInPage = () => {
  const { submittion } = useRefreshToken();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.auth.getUserName);
  const dispatch = useAppDispatch();
  const cookie = new Cookies();
  const refreshToken = cookie.get("refreshToken");

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<SignIn>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = (data: SignIn) => {
    submit(data);
  };

  // submit data
  const {
    submit,
    isPending,
    isSuccess,
    data: response,
  } = useSignIn({
    onSuccess: (response) => {},
  });
  if (response && isSuccess) {
    setTimeout(() => {
      router.replace("/product");
    }, 1000);
  }

  // username req
  const [userName, setUserName] = useState("");
  useEffect(() => {
    dispatch(getUserName());
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      setUserName(user);
    }
  }, [user]);

  useEffect(() => {
    const accessTokenExpiry = response?.data.accessToken.expire_access_token;
    const refreshTokenExpiry = response?.data.accessToken.expire_refresh_token;

    if (accessTokenExpiry && refreshTokenExpiry) {
      if (
        isTokenExpired(accessTokenExpiry) &&
        !isTokenExpired(refreshTokenExpiry) &&
        refreshToken
      ) {
        submittion({ userName, refreshToken });
      } else if (isTokenExpired(refreshTokenExpiry)) {
        cookie.remove("token");
        cookie.remove("refreshToken");
        router.replace("/login");
      }
    }
  }, [isTokenExpired]);

  return (
    <div className="h-full flex items-center   flex-col space-y-[118px]">
      <div className="flex mt-[6.2rem]">
        <Image
          src="./images/logo.svg"
          alt=""
          width={0}
          height={0}
          className="object-cover w-[136px] h-[91px]"
        />
      </div>
      <div className="border  border-gray-300  rounded-md  py-[53px] px-[48px] w-11/12 lg:w-[482px] ">
        {isSuccess ? (
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-[48px]">
              <Image
                src="/images/success.svg"
                width={50}
                height={50}
                alt="success"
              />
              <div className="text-success text-[20px]" dir="rtl">
                ورود شما با موفقیت انجام شد.
              </div>
              <Image
                src="/images/loading.svg"
                width={50}
                height={50}
                alt="success"
              />
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            dir="rtl"
            className="space-y-[28px]"
          >
            <section className="flex flex-col space-y-4">
              <label htmlFor="username" className="text-gray-200">
                نام کاربری
              </label>
              <TextInput<SignIn>
                register={register}
                name={"userName"}
                variant="neutral"
                errors={errors}
                className="placeholder:text-[16px]"
                placeholder="نام کاربری..."
              />
            </section>
            <section className="flex flex-col space-y-4">
              <label htmlFor="username" className="text-gray-200">
                رمز عبور
              </label>
              <TextInput<SignIn>
                register={register}
                name={"passWord"}
                variant="neutral"
                errors={errors}
                className="placeholder:text-[16px]"
                placeholder="رمز عبور..."
              />
            </section>
            <section className="flex items-center gap-1">
              <label
                htmlFor="remmberMe"
                className="text-info font-medium relative flex cursor-pointer items-center p-1 rounded-md"
              >
                <TextInput<SignIn>
                  register={register}
                  name={"rememberMe"}
                  errors={errors}
                  size="small"
                  className="peer"
                  type="checkbox"
                />
              </label>

              <span id="remmberMe" className="inline-block text-info">
                من را به خاطر بسپار{" "}
              </span>
            </section>
            <Button
              type="submit"
              variant="success"
              className="w-full"
              isDisabled={!isValid}
              isLoading={isPending}
              loadingType="spinner"
            >
              ورود
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
