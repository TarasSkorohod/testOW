import Sliders from "@/components/slider/Sliders";
import React from "react";
import { AboutSection } from "@/components/aboutSection/AboutSection";
import { Brands } from "@/components/brands/Brands";
import { Contact } from "@/components/contact/Contact";
import { Reviews } from "@/components/reviews/Reviews";

export default function Home() {
  return (
    <div>
      <Sliders />
      <AboutSection />
      <Contact />
      <Reviews />
    </div>
  );
}
