"use client";
import { useState, useEffect } from "react";
import { Logo } from "../logo/Logo";
import { BurgerMenu } from "../burgerMenu/BurgerMenu";
import { Menu } from "../menu/Menu";
import { ContactInfo } from "../contactInfo/ContactInfo";
import { ContactInfoBtn } from "../contactInfoBtn/ContactInfoBtn";
import Link from "next/link";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openContactInfo, setOpenContactInfo] = useState<boolean>(false);
  const [openServices, setOpenServices] = useState<boolean>(false);
  const [openPreservation, setOpenPreservation] = useState<boolean>(false);
  const [openFleet, setOpenFleet] = useState<boolean>(false);
  const [openStyling, setOpenStyling] = useState<boolean>(false);

  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  const handleMenu = (status: boolean) => {
    setOpenMenu(status);
  };
  const handleContactInfo = (status: boolean) => {
    setOpenContactInfo(status);
  };
  const handleServices = (statusServices: boolean) => {
    setOpenServices(statusServices);
  };
  const handlePreservation = (statusPreservation: boolean) => {
    setOpenPreservation(statusPreservation);
  };
  const handleFleet = (statusFleet: boolean) => {
    setOpenFleet(statusFleet);
  };
  const handleStyling = (statusStyling: boolean) => {
    setOpenStyling(statusStyling);
  };

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1023 ? true : false);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isDesktop = window.innerWidth > 1023;
      setIsDesktop(isDesktop);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-30 overflow-x-hidden lg:overflow-visible px-8 pr-0 lg:px-0 bg-[#111827] sticky top-0 lg:z-30 grid grid-cols-3 justify-between lg:grid-cols-[auto_1fr_auto] shadow-yellow-200 shadow-md hover:shadow-lg hover:shadow-yellow-300 transition">
      <BurgerMenu openMenu={openMenu} handleMenu={handleMenu} />
      <div className="lg:order-1 flex items-center justify-center py-2">
        <Link href={`/`}>
          {" "}
          <Logo />
        </Link>
      </div>
      <Menu
        openMenu={openMenu}
        handleMenu={handleMenu}
        openServices={openServices}
        handleServices={handleServices}
        openPreservation={openPreservation}
        handlePreservation={handlePreservation}
        openFleet={openFleet}
        handleFleet={handleFleet}
        openStyling={openStyling}
        handleStyling={handleStyling}
        isDesktop={isDesktop}
      />
      <ContactInfoBtn handleContactInfo={handleContactInfo} />
      <ContactInfo openContactInfo={openContactInfo} handleContactInfo={handleContactInfo} />
    </header>
  );
};
