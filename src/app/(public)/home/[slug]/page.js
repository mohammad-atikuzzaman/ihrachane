import Hero from "@/components/shared/Hero";
import Service from "@/components/sourcing/Service";
import SourcingSection from "@/components/sourcing/SourcingSection";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <Hero />
      <Service/>
      this is page : {slug}
      <SourcingSection />
    </div>
  );
};

export default page;
