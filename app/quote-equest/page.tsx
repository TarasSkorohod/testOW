import { Title } from "@/components/title/Title";
import { CustomForm } from "@/components/customForm/CustomForm";
import { TextPage } from "@/components/textPage/TextPage";

export default function QuoteRequest() {
  return (
    <main className="container py-16">
      <Title tag="h1" cn="mb-16">
        Quote <span className="text-yellow-500">Request</span>
      </Title>
      <TextPage cn="mb-32 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
        aspernatur nulla quidem velit! Dolor vero expedita ea ullam architecto
        alias odio, sed asperiores quis. Fugiat minus aliquam adipisci quibusdam
        obcaecati?
      </TextPage>
      <Title tag="h4" cn="mb-10">
        Contact us
      </Title>
      <CustomForm />
    </main>
  );
}
