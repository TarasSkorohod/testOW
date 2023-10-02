import { Title } from "../title/Title";
import { TitleBg } from "../titleBg/TitleBg";
import { CustomForm } from "../customForm/CustomForm";

export const Contact = () => {
  return (
    <section className="container py-16 relative h-full" id="form">
      <Title tag="h2" cn="mt-24 sm:mt-[6px] md:mt-[112px] lg:mt-[198px] mb-14">
        Start Your Service <span className="text-yellow-500">Today</span>
        {/* Start Your Service <span className="text-[]">Today</span> */}
      </Title>
      <div className="flex items-center justify-center mb-8">
        <p className="text-base text-center w-[80%]">
          Please fill out the required information below and we will reach out to help schedule your service. If you have any questions or
          would like to get started sooner, please call.
        </p>
      </div>
      <CustomForm />
      <TitleBg>Contact</TitleBg>
    </section>
  );
};
