import { z } from "zod";
import { signInSchema } from "./signin.schema";
export type SignIn = z.infer<typeof signInSchema>;
export interface AccessToken {
  access_token: string;
  refresh_token: string;
  expire_refresh_token: string;
  expire_access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SignInResponse {
  data: { userName: string; accessToken: AccessToken };
  error: string | null;
  hasError: boolean;
}
