import Image from "next/image";
import team from "@/public/aboutPageImg/IMG_6641.png";

export const AboutImage = () => {
  return (
    <div className="mx-auto relative max-w-[95%] max-h-[600px] w-auto flex items-center justify-center rounded-[20px] overflow-hidden shadow-lg shadow-slate-700 hover:shadow-xl hover:shadow-yellow-500 transition duration-00 rounded-tr-[80px] rounded-bl-[80px]">
      <Image
        src={team}
        alt="our team"
        width={1000}
        height={700}
        className="max-w-full rounded-xl w-full h-full object-cover brightness-95"
      />
      <div className="opacity-100 absolute top-0 w-full h-full hover:opacity-0 transition duration-300 backdrop-blur-[3px] hover:translate-y-6">
        <h2 className="absolute top-[20%] left-[2%] text-[38px] md:text-[58px] lg:text-[108px] text-slate-50 font-black text-center px-4">
          Capital Upfitters
        </h2>
      </div>
    </div>
  );
};
