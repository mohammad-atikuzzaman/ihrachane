import UpdateSocialLinks from "@/components/dashboard/social-links/UpdateSocialLinks";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <UpdateSocialLinks socialId={id} />
    </div>
  );
};

export default page;
