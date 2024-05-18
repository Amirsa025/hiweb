import React from "react";
import { textInputProps } from "@/app/_components/form-input/text-input.types";
import { FieldValues, get } from "react-hook-form";
import { TextBox } from "@/app/_components/textbox";

const TextInput = <TFormValues extends FieldValues>({
  name,
  register,
  errors,
  variant,
  ...rest
}: textInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;
  return (
    <>
      <TextBox
        type="text"
        {...register(name)}
        {...(hasError ? { variant: "error" } : { variant: variant })}
        {...rest}
      />
      {hasError && <p className="mt-1 text-sm text-error">{error.message}</p>}
    </>
  );
};

export default TextInput;
