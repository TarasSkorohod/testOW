import React from "react";
import { Title } from "@/components/title/Title";
import { TextPage } from "@/components/textPage/TextPage";
import { CustomForm } from "@/components/customForm/CustomForm";
import { AboutImage } from "@/components/aboutImage/AboutImage";
import { AboutIcons } from "@/components/aboutIcons/AboutIcons";

export default function About() {
  return (
    <main className="py-16 container">
      <Title tag="h1" cn="mb-16">
        About <span className="text-yellow-500">Us</span>
      </Title>
      <AboutImage />
      <div className="grid grid-cols-1 gap-14 md:gap-32 justify-between lg:justify-center lg:grid-cols-2 auto-rows-auto mb-16 pt-24">
        <TextPage>
          Welcome to{" "}
          <strong className="text-yellow-500">Capital Upfitters</strong>, the
          family-owned epicenter of top-tier auto customization, vehicle
          preservation, and performance enhancements. With a heritage of over 35
          years in the industry, we proudly deliver unparalleled fleet
          customization services and robust protection coatings to a diverse
          range of clients, from municipal to retail sectors. Our reputation as
          a trailblazer stems from our continuous commitment to superior
          craftsmanship, delivering innovative auto customization and
          performance solutions that truly redefine automotive excellence.
        </TextPage>
        <AboutIcons />
      </div>
      <TextPage cn="mb-32">
        We&apos;re not just about personal vehicles, our commitment to deliver
        exceptional service spans across government, commercial, and residential
        projects. Every vehicle that rolls into our shop receives the same
        degree of attention and commitment to quality. For additional
        information about our services at Capital Upfitters or to discuss your
        specific customization and performance enhancement needs, we welcome you
        to reach us at 301-304-1419 or explore our webpage. Choose Capital
        Upfitters for an automotive experience that goes beyond service to
        deliver a transformation, redefining your ride.
      </TextPage>
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </main>
  );
}
