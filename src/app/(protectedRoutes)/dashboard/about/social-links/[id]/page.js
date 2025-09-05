import UpdateSocialLinks from "@/components/dashboard/social-links/UpdateSocialLinks";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <UpdateSocialLinks socialId={params.id} />
    </div>
  );
};

export default page;
