import Hero from "@/components/shared/Hero";
import Service from "@/components/sourcing/Service";
import SourcingSection from "@/components/sourcing/SourcingSection";
import React from "react";

const page = async ({ params }) => {
  const { slug } =await params;
  return (
    <div>
      <Hero
        img={"/asset/1.png"}
        info={{
          span: slug,
          title: `This is ${slug} page`,
          details: `This is the details page of ${slug}`,
        }}
      />
      <Service />
      <SourcingSection />
    </div>
  );
};

export default page;
