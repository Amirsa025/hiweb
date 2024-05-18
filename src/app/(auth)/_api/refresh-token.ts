import { useMutation } from "@tanstack/react-query";
import { createData } from "@/core/http-service/http-service";
import { SignInResponse } from "@/app/(auth)/types/siginin.types";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useAppDispatch } from "@/store/auth/store";
import { setTokens, userName } from "@/store/auth/authSlice";
interface RefreshTokenProps {
  refreshToken?: string | null;
  userName: string | null;
}
const RefreshToken = ({
  userName,
  refreshToken,
}: RefreshTokenProps): Promise<SignInResponse> => {
  return createData<RefreshTokenProps, SignInResponse>(
    "Security/UserLogin/RefreshToken",
    {
      userName,
      refreshToken,
    },
  );
};
export const useRefreshToken = () => {
  const dispatch = useAppDispatch();
  const onError = (error: AxiosError<{ error: string }>) => {
    if (error.response && error.response.data) {
      toast.error(`${error.response.data.error ?? "Unknown error"}`);
    } else {
      toast.error("An unknown error occurred");
    }
  };

  const {
    mutate: submittion,
    isPending,
    data,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: RefreshToken,
    onError,
    onSuccess: () => {
      if (isSuccess) {
        dispatch(
          setTokens({
            token: data?.data?.accessToken?.access_token!,
            refreshToken: data?.data?.accessToken?.access_token!,
          }),
        );
        dispatch(userName({ userName: data?.data?.userName }));
      }
    },
  });

  return { submittion, isPending, data, isSuccess };
};
