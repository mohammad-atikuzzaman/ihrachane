import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Services from "@/components/Home/Services";
import Supplier from "@/components/Home/Supplier";

export default function Home() {
  return (
    <div className="">
      <Features />
      <Services />
      <Supplier />
      <Clients />
    </div>
  );
}
