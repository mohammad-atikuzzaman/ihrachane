import Hero from "@/components/shared/Hero";
import Wrapper from "@/components/shared/Wrapper";
import Service from "@/components/sourcing/Service";
import SourcingSection from "@/components/sourcing/SourcingSection";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <Wrapper slug={slug} />
      <SourcingSection />
    </div>
  );
};

export default page;
