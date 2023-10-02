"use client";
import { FC, useState, InputHTMLAttributes, forwardRef } from "react";
import { IService } from "@/interfaces/form";
import { InfoServices } from "../infoServices/InfoServices";
import { TbInfoSquareFilled } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";

interface CustomServiceProps extends InputHTMLAttributes<HTMLInputElement> {
  service: IService;
  register: Function;
}

export const CustomService: FC<CustomServiceProps> = forwardRef<
  HTMLInputElement,
  CustomServiceProps
>(function InputComponent({ name, service, register, ...props }, ref) {
  const [statusInfo, setStatusInfo] = useState<boolean>(false);
  const handleStatusInfo = () => {
    setStatusInfo(!statusInfo);
  };
  return (
    <li key={service.value} className="relative">
      <input
        {...register("services")}
        name="services"
        type="checkbox"
        value={service.value}
        className="hidden peer"
        id={service.value}
      />
      <label
        htmlFor={service.value}
        className="inline-flex items-center justify-between w-full p-2.5 shadow-lg text-gray-500 bg-slate-50 border-2 border-gray-200 rounded-lg cursor-pointer   peer-checked:border-[#111827] peer-checked:text-[#111827] peer-checked:bg-slate-400 hover:text-gray-600 hover:bg-gray-50 "
      >
        <div className="block p-1">
          <div className="w-full font-semibold text-sm">{service.text}</div>
        </div>
      </label>
      <div
        className="absolute top-[25%] right-2 inline cursor-pointer bg-white rounded-md"
        onMouseEnter={handleStatusInfo}
        onMouseLeave={handleStatusInfo}
      >
        <TbInfoSquareFilled size={26} color="#111827" />
      </div>
      <AnimatePresence>
        {statusInfo && <InfoServices info={service.info} />}
      </AnimatePresence>
    </li>
  );
});

CustomService.displayName = "CustomService";
