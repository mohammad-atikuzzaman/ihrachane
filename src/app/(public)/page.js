import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Services from "@/components/Home/Services";
import Supplier from "@/components/Home/Supplier";

export default async function Home() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Loading promise resolved");
    }, 2000);
  });
  
  return (
    <div className="">
      <Features />
      <Services />
      <Supplier />
      <Clients />
    </div>
  );
}
