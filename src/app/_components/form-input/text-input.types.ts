import {
  FieldValues,
  UseFormRegister,
  Path,
  DeepMap,
  FieldError,
} from "react-hook-form";
import { textboxProps } from "@/app/_components/textbox/type";

export type textInputProps<TFormValues extends FieldValues> = textboxProps & {
  register: UseFormRegister<TFormValues>;
  name: Path<TFormValues>;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
};
