import { Title } from "@/components/title/Title";
import { MainPortfolio } from "@/components/mainPortfolio/MainPortfolio";
import { TextPage } from "@/components/textPage/TextPage";
import { CustomForm } from "@/components/customForm/CustomForm";
import ProjectsGrid from "@/components/mainPortfolioFix/projects/ProjectsGrid";
import React from "react";
export default function Portfolio() {
  return (
    <main className="py-16 container">
      <Title tag="h2" cn="mb-16">
        Our <span className="text-yellow-500">Portfolio</span>
      </Title>
        <ProjectsGrid />

      <Title tag="h4" cn="mb-10 mt-16">
        CONTACT US
      </Title>
      <CustomForm />
      {/*<TextPage>*/}
      {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam*/}
      {/*  laborum autem mollitia omnis aliquid unde repellendus vitae, temporibus*/}
      {/*  consectetur quaerat repudiandae dolorum! Inventore, aliquam saepe? Velit*/}
      {/*  obcaecati rerum a esse, commodi facilis explicabo voluptas! Odio*/}
      {/*  reiciendis a dolore maiores dolor. Iste dicta magnam repudiandae ratione*/}
      {/*  fugit eaque libero voluptas officia in, ipsa sint. Earum soluta a*/}
      {/*  recusandae distinctio accusamus quam, dolores eaque illum fugiat minus*/}
      {/*  sequi molestias dolorum necessitatibus commodi id est dolorem ipsum*/}
      {/*  facere ipsa nemo possimus debitis eum? Maiores, voluptates! Maiores esse*/}
      {/*  ab praesentium odio, cupiditate, vel illo dolores doloribus fugiat*/}
      {/*  excepturi, eligendi sit necessitatibus expedita? Aperiam!*/}
      {/*</TextPage>*/}

    </main>
  );
}
