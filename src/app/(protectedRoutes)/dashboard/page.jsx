import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  // const session = await getServerSession(authOptions);

  // if (!session) return redirect("/login");
  // if (session?.user?.role !== "admin") return redirect("/unauthorized");

  return (
    <div>
      <h2>this is dashboard page</h2>
    </div>
  );
};

export default page;
