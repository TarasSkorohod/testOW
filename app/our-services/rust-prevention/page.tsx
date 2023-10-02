import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import Image from "next/image";
import { Metadata } from "next";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { TextPage } from "@/components/textPage/TextPage";
import rp from "@/public/images/rust-prevention/rp.png";
import { rustPreventionContent, rustPreventionSlider } from "@/data/rustPrevention";

export const metadata: Metadata = {
  title: "RUST PREVENTION",
  description:
    "Here at Capital Upfitters we specialized in preventative methods against Rust and Corrosion. We always strive to provide our client with the best and most innovative solutions for their needs.",
};

export default function RustPrevention() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Rust <span className="text-yellow-500">Prevention</span>
      </Title>
      <TextPage cn="text-2xl mb-12">{rustPreventionContent.text[0]}</TextPage>
      <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 mb-16">
        <div>
          <h5 className="mb-2 text-lg font-semibold text-gray-900 ">{rustPreventionContent.ecoClear.title}</h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside mb-8">
            {rustPreventionContent.ecoClear.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h5 className="mb-2 text-lg font-semibold text-gray-900 ">{rustPreventionContent.waxoylHardwax.title}</h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside mb-8">
            {rustPreventionContent.waxoylHardwax.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h5 className="mb-2 text-lg font-semibold text-gray-900 ">{rustPreventionContent.woolwaxInhibitor.title}</h5>
          <ul className="space-y-1 text-gray-500 list-disc list-inside mb-8">
            {rustPreventionContent.woolwaxInhibitor.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-md flex justify-center items-start lg:justify-end">
          <Image src={rp} width={700} height={1000} alt="Our Services" className="rounded-md" />
        </div>
      </div>
      <DoubleSidedCard title="Rust Prevention Methods" list={rustPreventionSlider} />
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </div>
  );
}
