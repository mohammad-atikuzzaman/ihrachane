"use client"
import TestimonialTable from "@/components/dashboard/testimonial/TestimonialTable";
import { useRouter } from "next/navigation";

const TestimonialPage = () => {
    const router = useRouter()
  return (
    <div>
      <div className='bg-white rounded-lg shadow p-6'>
        <div className='text-end py-3'>
          <button
            onClick={() => router.push("/dashboard/testimonial/create-new")}
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>
            Add Testimonial
          </button>
        </div>
        <TestimonialTable />
      </div>
    </div>
  );
};

export default TestimonialPage;
