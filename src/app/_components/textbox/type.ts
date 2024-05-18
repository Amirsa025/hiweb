import { InputHTMLAttributes } from "react";
import { ComponentBase } from "@/app/_components/types/component-base.type";

export type TextboxType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "checkbox"
  | "textarea"
  | "file";

export type textboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  ComponentBase & {
    type?: TextboxType;
  };
