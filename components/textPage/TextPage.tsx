import { FC, ReactNode } from "react";

interface ITextPage {
  children: ReactNode;
  cn?: string;
}
export const TextPage: FC<ITextPage> = ({ children, cn }) => {
  return (
    <p className={`text-[#111827] font-medium leading-7  ${cn ? cn : ""}`}>
      {children}
    </p>
  );
};
