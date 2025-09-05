"use client";

import { getData } from "@/utils/axiosPublic";
import { useEffect, useState } from "react";
import Hero from "./Hero";

const SubWrapper = ({ id }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await getData(`/api/sub-categories/${id}`);
      console.log(data);
    }
    fetchData();
  }, [id]);
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
    </div>
  );
};

export default SubWrapper;
