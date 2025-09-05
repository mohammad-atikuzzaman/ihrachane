"use client";
import SocialLinksTable from "@/components/dashboard/social-links/SocialLinksTable";
import { useRouter } from "next/navigation";

const CompanySocialLinksPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className='bg-white rounded-lg shadow p-6'>
        <div className='text-end py-3'>
          <button
            onClick={() => router.push("/dashboard/about/social-links/create-new")}
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 cursor-pointer'>
            Add Social Media
          </button>
        </div>
        <SocialLinksTable />
      </div>
    </div>
  );
};

export default CompanySocialLinksPage;
