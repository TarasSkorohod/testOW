import {AboutSection} from "@/components/aboutSection/AboutSection";
import {Contact} from "@/components/contact/Contact";
import React from "react";
import CommercialSlider from "@/components/commercialPages/CommercialSlider";

export default function Financing() {
  return (
      <div>
          <CommercialSlider />
          <AboutSection />
          <Contact />
      </div>
  );
}
