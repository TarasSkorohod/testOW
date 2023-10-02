import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import { SliderPortfolio } from "@/components/sliderPortfolio/SliderPortfolio";
import { portfolioList } from "@/data/patriotLiner";

export default function PatriotLinerP() {
  return (
    <main className="container py-16">
      <Title tag="h2" cn="mb-16">
        Patriot Liner <span className="text-yellow-500">Portfolio</span>
      </Title>
      <SliderPortfolio portfolioList={portfolioList} />

      <Title tag="h4" cn="mb-10 mt-10">
        CONTACT US
      </Title>
      <CustomForm />
    </main>
  );
}
