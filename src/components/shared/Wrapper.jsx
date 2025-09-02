"use client";

import { useEffect, useState } from "react";
import Hero from "./Hero";
import Service from "../sourcing/Service";
import { getData } from "@/utils/axiosPublic";

const Wrapper = ({ slug }) => {
  console.log(slug);

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await getData("/api/categories");
      console.log(data);
    }
    fetchData();
  }, [slug]);

  return (
    <>
      <Hero
        img={"/asset/1.png"}
        info={{
          span: slug,
          title: `This is ${slug} page`,
          details: `This is the details page of ${slug}`,
        }}
      />
      <Service />
    </>
  );
};

export default Wrapper;
