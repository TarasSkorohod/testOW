import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import imageAuto from "@/public/TestLi.jpeg";
import mainImagePatriotLiner from "@/public/images/patriotLiner/Patriot-Liner-Main-Photo.jpg";
import { TextPage } from "@/components/textPage/TextPage";
import { ImagePage } from "@/components/imagePage/ImagePage";
import { Metadata } from "next";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { patriotLinerSlider } from "@/data/patriotLiner";

export const metadata: Metadata = {
  title: "Patriot Liner",
  description:
    "Auto & Truck Accessories, our dedication to superior quality and customer satisfaction has been our guiding principle. For many years, we have been recognized for our impeccable installations of the Bullet Liner brand in the DMV Area. Yet, since 2022, we have turned a new leaf, aligning ourselves with Patriot Liner, the newest and most promising product in the sprayed-on application sector.",
};

export default function PatriotLiner() {
  return (
    <div className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Patriot <span className="text-yellow-500">Liner</span>
      </Title>
      <div className="grid grid-cols-1 gap-10 justify-between lg:justify-center lg:grid-cols-2 mb-32">
        <div>
          <TextPage cn="mb-8">
            Here, at <strong className="text-yellow-500 font-extrabold ">Capital Upfitters</strong> Auto & Truck Accessories, our dedication
            to superior quality and customer satisfaction has been our guiding principle. For many years, we have been recognized for our
            impeccable installations of the Bullet Liner brand in the DMV Area. Yet, since 2022, we have turned a new leaf, aligning
            ourselves with Patriot Liner, the newest and most promising product in the sprayed-on application sector.
          </TextPage>
          <TextPage>
            We are thrilled to present{" "}
            <a href="https://patriotlinerrockville.com" className="underline">
              <strong>PATRIOT LINER</strong>
            </a>{" "}
            , our innovative new protective coating brand. Crafted by veterans and proudly made in America, Patriot Liner carries more than
            30 years of industry experience. It&apos;s not just setting a new benchmark as the fastest growing brand in the field, but also
            redefining customer relationships. We reject the cold, impersonal treatment of customers as mere numbers on a spreadsheet. Our
            business is driven by relationships, and it&apos;s in this regard that Patriot Liner truly intends to shine. Come join us and
            experience this game-changing product for yourself.
          </TextPage>
        </div>

        <ImagePage img={mainImagePatriotLiner} />
      </div>
      <DoubleSidedCard title="Patriot liner options" list={patriotLinerSlider} />
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </div>
  );
}
