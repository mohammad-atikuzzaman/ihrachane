import Clients from "@/components/Home/Clients";
import Features from "@/components/Home/Features";
import Services from "@/components/Home/Services";
import Supplier from "@/components/Home/Supplier";
import Form from "@/components/shared/Form";

export default async function Home() {
<<<<<<< HEAD




=======
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Loading promise resolved");
    }, 2000);
  });
  
>>>>>>> ec9e0e719cae99a32378245be64080ea1d1afae6
  return (
    <div className="">
    
      <Features />
      <Services />
      <Supplier />
      <Clients />
      <Form/>
    </div>
  );
}
