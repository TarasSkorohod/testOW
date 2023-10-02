"use client";
import { FC, forwardRef, SelectHTMLAttributes } from "react";
import { ISelectProps } from "@/interfaces/form";

interface CustomSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  datas: ISelectProps[];
}

export const CustomSelect: FC<CustomSelectProps> = forwardRef<
  HTMLSelectElement,
  CustomSelectProps
>(function CustomSelectComponent({ name, datas, ...props }, ref) {
  return (
    <select
      {...props}
      name={name}
      ref={ref}
      className={`text-sm focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-zinc-800 focus:border-zinc-800 block w-full p-2.5 hite h-[40px] ${
        datas[0].disabled ? "pointer-events-none appearance-none" : ""
      } `}
    >
      {datas.map((item) => {
        return (
          <option
            value={item.value}
            hidden={item.hidden ? true : false}
            key={item.value}
          >
            {item.text}
          </option>
        );
      })}
    </select>
  );
});

CustomSelect.displayName = "CustomSelect";
