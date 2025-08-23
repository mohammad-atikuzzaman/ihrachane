import React from "react";

const page = async ({ params }) => {
  const { slug } = await params;
  console.log(slug);
  return (
    <div>
      thi is daynamic :<span className="text-blue-400">{slug}</span>
    </div>
  );
};

export default page;
