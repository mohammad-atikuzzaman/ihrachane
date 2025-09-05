import UpdateCategories from "@/components/dashboard/categories/UpdateCategories";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <UpdateCategories categoryId={params.id} />
    </div>
  );
};

export default page;
