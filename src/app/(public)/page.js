import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Supplier from "@/components/Home/Supplier";
import Form from "@/components/shared/Form";
import Hero from "@/components/shared/Hero";
import SupplyChain from "@/components/Home/SupplyChain";
import OurServices from "@/components/Home/OurServices";
import Testimonials from "@/components/Home/Testimonials";

export default async function Home() {
  return (
    <div className="">
      <Hero
        img={"https://i.ibb.co.com/6JX5JVzG/1.png"}
        info={{
          span: "Home",
          title: `This is home page`,
          details: `This is the details page of home`,
        }}
      />
      <Features />
      <OurServices />
      <SupplyChain />
      <Supplier />
      <Testimonials />
      <Clients />
      <Form />
    </div>
  );
}
