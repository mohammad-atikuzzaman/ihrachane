"use client";
import SubCategoriesDataTable from "@/components/dashboard/categories/SubCategoriesDataTable";
import { useRouter } from "next/navigation";

const SubCategoryPageList = () => {
  const router = useRouter();
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-lg shadow p-6'>
        <div className='text-end'>
          <button
            onClick={() =>
              router.push("/dashboard/categories/sub-list/create-new")
            }
            className='text-sm bg-[#FF6903] text-white font-semibold px-4 py-2 rounded-lg my-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#e55b00] active:scale-95'>
            Add Sub Category
          </button>
        </div>
        <SubCategoriesDataTable />
      </div>
    </div>
  );
};

export default SubCategoryPageList;
