"use client";

import { FC, InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  function InputComponent({ name, ...props }, ref) {
    return (
      <input
        type="text"
        {...props}
        name={name}
        ref={ref}
        className="focus:outline-none text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 "
      ></input>
    );
  }
);

Input.displayName = "Input";
