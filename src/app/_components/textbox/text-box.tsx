import React, { forwardRef } from "react";
import { Size } from "@/app/_components/types/size.type";
import { textboxProps } from "./type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  tiny: "textbox-xs",
  small: "textbox-sm",
  normal: "textbox-md",
  large: "textbox-lg",
};

// eslint-disable-next-line react/display-name
export const TextBox: React.FC<textboxProps> = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  textboxProps
>(
  (
    { variant = "ghost", type = "text", className, size = "normal", ...rest },
    ref,
  ) => {
    let classes = classNames(
      "textbox",
      "w-full",
      className,
      { [`textbox-${variant}`]: variant },
      { [`${sizeClasses[size]}`]: size },
    );
    if (type === "file") {
      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          {...rest}
        ></input>
      );
    }
    if (type === "checkbox") {
      const sizeClasses: Record<Size, string> = {
        tiny: "checkbox-xs",
        small: "checkbox-sm",
        normal: "checkbox-md",
        large: "checkbox-lg",
      };
      classes = classNames(
        "checkbox",
        className,
        { [`checkbox-${variant}`]: variant },
        { [`${sizeClasses[size]}`]: size },
      );

      return (
        <>
          {/*// @ts-ignore*/}
          <input ref={ref} type={type} className={classes} {...rest} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-6 h-6 mx-auto pointer-events-none stroke-white fill-none peer-checked:fill-gray-400 "
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </>
      );
    } else if (type === "textarea") {
      return (
        // @ts-ignore
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={classes}
          {...rest}
        />
      );
    } else {
      return (
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          className={classes}
          {...rest}
        />
      );
    }
  },
);
