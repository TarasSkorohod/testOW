"use client";
import { FC, InputHTMLAttributes, forwardRef, useState } from "react";

interface UploadFile extends InputHTMLAttributes<HTMLInputElement> {}

export const CustomUploadFile: FC<UploadFile> = forwardRef<
  HTMLInputElement,
  UploadFile
>(function InputComponent({ name, value, ...props }, ref) {
  const [fileName, setFileName] = useState("");

  return (
    <div className="overflow-hidden flex focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-zinc-800 focus:border-zinc-800 w-full">
      <input
        type="file"
        {...props}
        name={name}
        ref={ref}
        className="absolute opacity-0 w-[164px] left-0"
        onChange={(event) => {
          if (event.target.files !== null) {
            const file = event.target.files[0];
            setFileName(file ? file.name : "");
            console.log(event.target.files[0]);
          }
        }}
      ></input>
      <div className="cursor-pointer relative box-border h-full font-normal text-sm text-center border-r-[1px] border-zinc-800 text-slate-50 bg-zinc-800 w-[240px] p-2 mr-4">
        Upload File
      </div>
      <div className="flex items-center w-full">
        {fileName ? (
          <span className="text-zinc-800">{fileName}</span>
        ) : (
          <span className="text-sm text-gray-400">Upload your file</span>
        )}
      </div>
    </div>
  );
});

CustomUploadFile.displayName = "CustomUploadFile";
