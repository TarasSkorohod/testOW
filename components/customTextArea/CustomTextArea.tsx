"use client";

import { FC, forwardRef, TextareaHTMLAttributes } from "react";

interface CustomTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const CustomTextArea: FC<CustomTextAreaProps> = forwardRef<
  HTMLTextAreaElement,
  CustomTextAreaProps
>(function TextArea({ name, ...props }, ref) {
  return (
    <textarea
      style={{ resize: "none" }}
      {...props}
      name={name}
      ref={ref}
      rows={7}
      className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-zinc-800 focus:border-zinc-800"
      placeholder="Leave a comment..."
    ></textarea>
  );
});

CustomTextArea.displayName = "CustomTextArea";
