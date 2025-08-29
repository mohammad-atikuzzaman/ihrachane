import Hero from "@/components/shared/Hero";
import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <div>
      <Hero />
      this is page : {slug}
    </div>
  );
};

export default page;
