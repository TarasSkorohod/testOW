"use client";
// import { Build } from "@/components/aboutSection/Build";
import { TextAbout } from "@/components/aboutSection/TextAbout";
import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";
import { ImageAboutSection } from "./ImageAbotSection";
export const AboutSection = () => {
  return (
    <section className="container py-16 relative h-full ">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px] mb-14">
        Our Past <span className="text-[#203055]">Clients</span>
      </Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
        <ImageAboutSection />
        <TextAbout />
      </div>
      <TitleBg>About</TitleBg>
    </section>
  );
};
