import { createData } from "@/core/http-service/http-service";
import { useMutation } from "@tanstack/react-query";
import { SignIn, SignInResponse } from "@/app/(auth)/types/siginin.types";
import { setTokens, userName } from "@/store/auth/authSlice";
import { useAppDispatch } from "@/store/auth/store";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
type UseSignInOptions = {
  onSuccess?: (data: SignInResponse) => void;
};

const sigIn = (model: SignIn): Promise<SignInResponse> => {
  return createData<SignIn, SignInResponse>("/Security/UserLogin/Login", {
    userName: model?.userName,
    passWord: model?.passWord,
  });
};
export const useSignIn = ({ onSuccess }: UseSignInOptions) => {
  const onError = (error: AxiosError<{ error: string }>) => {
    if (error.response && error.response.data) {
      toast.error(`${error.response.data.error ?? "Unknown error"}`);
    } else {
      toast.error("An unknown error occurred");
    }
  };
  const dispatch = useAppDispatch();
  const {
    mutate: submit,
    isPending,
    data,
    isSuccess,
  } = useMutation({
    mutationFn: sigIn,
    onSuccess,
    onError,
  });

  if (isSuccess) {
    dispatch(
      setTokens({
        token: data?.data?.accessToken?.access_token!,
        refreshToken: data?.data?.accessToken?.access_token!,
      }),
    );
    dispatch(userName({ userName: data?.data?.userName }));
  }

  return {
    submit,
    isPending,
    isSuccess,
    data,
  };
};
