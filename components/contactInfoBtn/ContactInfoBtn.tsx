import { FC } from "react";
import { motion } from "framer-motion";

interface IContactInfoBtn {
  handleContactInfo: (status: boolean) => void;
}

export const ContactInfoBtn: FC<IContactInfoBtn> = ({ handleContactInfo }) => {
  return (
    <div
      className="flex items-center justify-end order-3 w-full h-full cursor-pointer"
      onClick={() => handleContactInfo(true)}
    >
      <motion.div className="h-full flex items-center justify-center w-[80px]">
        <div className="grid grid-cols-3 gap-1 w-6 h-6">
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
          <span className="w-[6px] h-[6px] rounded-full border-white border-[1px]"></span>
        </div>
      </motion.div>
    </div>
  );
};
