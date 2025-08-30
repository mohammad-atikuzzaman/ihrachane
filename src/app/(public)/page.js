import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Supplier from "@/components/Home/Supplier";
import Form from "@/components/shared/Form";
import Hero from "@/components/shared/Hero";
import SupplyChain from "@/components/Home/SupplyChain";
import OurServices from "@/components/Home/OurServices";
import OurCustomers from "@/components/Home/OurCustomers";

export default async function Home() {
  return (
    <div className="">
      <Hero />
      <Features />
      <OurServices/>
      <SupplyChain />
      <Supplier />
      <OurCustomers/>
      <Clients />
      <Form />
    </div>
  );
}
