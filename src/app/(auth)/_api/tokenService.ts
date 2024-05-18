import Cookies from "universal-cookie";
const cookies = new Cookies();

export const setToken = (token: string) => {
  cookies.set("token", token, {
    path: "/",
    maxAge: 60 * 60 * 60,
    secure: true,
    sameSite: "lax",
  });
};
export const setRefreshToken = (refreshToken: string) => {
  cookies.set("refreshToken", refreshToken, {
    path: "/",
    maxAge: 60 * 60 * 60,
    secure: true,
    sameSite: "lax",
  });
};
export const clear = () => {
  cookies.remove("refreshToken");
  cookies.remove("token");
};
