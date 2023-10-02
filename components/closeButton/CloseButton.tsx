import { FC } from "react";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

interface ICloseButton {
  handleMenu: () => void;
}

export const CloseButton: FC<ICloseButton> = ({ handleMenu }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="cursor-pointer"
      onClick={handleMenu}
    >
      <RxCross2 size={25} color="#ffffff" />
    </motion.div>
  );
};
