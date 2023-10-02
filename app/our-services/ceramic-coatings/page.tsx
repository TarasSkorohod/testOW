import { Metadata } from "next";
import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import { TextPage } from "@/components/textPage/TextPage";
import { ImagePage } from "@/components/imagePage/ImagePage";
import smmax from "@/public/SX-Max.png";
import { CeramicCoatingsPages } from "@/components/ourServices/vehiclePreservation/ceramicCoatings/CeramicCoatingsPages";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { listXpel } from "@/data/xpelData";
export const metadata: Metadata = {
  title: "Ceramic Coatings",
  description:
    "Discover the ultimate car body protection with System X®, one of the finest and most durable ceramic coatings originally designed for the aviation industry, trusted by renowned names like Sikorsky, Bombardier, and leading international airlines. This revolutionary nano-ceramic breakthrough has paved the way for a comprehensive line of products.",
};

export default function CeramicCoatings() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Ceramic <span className="text-yellow-500">Coatings</span>
      </Title>
      <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 mb-16 auto-rows-min">
        <div>
          <h6 className="text-start text-[#111827] font-semibold leading-7 mb-4">
            HAVE A GREAT RIDE, RAIN OR SHINE !{" "}
          </h6>
          <TextPage cn="mb-8">
            Discover the ultimate car body protection with{" "}
            <strong>System X®</strong>, one of the finest and most durable
            ceramic coatings originally designed for the aviation industry,
            trusted by renowned names like Sikorsky, Bombardier, and leading
            international airlines. This revolutionary nano-ceramic breakthrough
            has paved the way for a comprehensive line of products.
          </TextPage>
          <div>
            With its exceptional hydrophobic properties,{" "}
            <strong>System X®</strong> offers:
            <ul className="py-4 px-8">
              <li className="text-[#111827] font-medium leading-7">
                • The ability to repel dirt, water, dust, and debris, keeping
                the surface immaculate.
              </li>
              <li className="text-[#111827] font-medium leading-7">
                • Effective prevention of car body corrosion.
              </li>
              <li className="text-[#111827] font-medium leading-7">
                • Impressive protection against external elements, unaffected by
                washing or detailing.
              </li>
              <li className="text-[#111827] font-medium leading-7">
                • A noticeable reduction in the frequency of washing and
                detailing required.
              </li>
            </ul>
          </div>
        </div>

        <ImagePage img={smmax} />
      </div>
      <CeramicCoatingsPages />
      <DoubleSidedCard title="title" list={listXpel} />
      <div className="flex items-center justify-center ">
        <iframe
          width="1000"
          height="600"
          src="https://www.youtube.com/embed/VbJRRIUCPjA"
          title="System X Aircraft (Brief)"
          className="rounded-[10px]"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <TextPage cn="mt-16 mb-32 ">
        A single application of <strong>System X®</strong> ceramic car coating
        ensures years of lasting performance. Its remarkable shine adds to the
        protective qualities, leaving your car looking stunning. Rest assured,
        the ceramic coating has no adverse impact on your car, and it seamlessly
        complements PPF protection. When you choose{" "}
        <strong className="text-yellow-500 font-extrabold ">
          Capital Upfitters&apos;
        </strong>{" "}
        ceramic car coating, you can trust that your car&apos;s surface will
        remain safe while exuding remarkable aesthetics and providing effective
        protection for your vehicle. We offer a range of packages for all types
        of vehicles, starting from 1-year options to 5-year and even lifetime
        coatings.
      </TextPage>

      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </div>
  );
}
