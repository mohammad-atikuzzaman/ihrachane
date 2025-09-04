import Hero from "@/components/shared/Hero";
import SourcingSection from "@/components/sourcing/SourcingSection";

const page = () => {
  return (
    <div>
      <Hero
        img={"/asset/1.png"}
        info={{
          span: "Home",
          title: `This is home page`,
          details: `This is the details page of home`,
        }}
      />
      <SourcingSection />
    </div>
  );
};

export default page;
