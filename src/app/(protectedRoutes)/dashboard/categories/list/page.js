"use client";
import CategoriesDataTable from "@/components/dashboard/categories/CategoriesDataTable";
import { useRouter } from "next/navigation";

const CategoryListPage = () => {
  const router = useRouter();
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-lg shadow p-6'>
        <div className='text-end py-3'>
          <button
            onClick={() => router.push("/dashboard/categories/list/create-new")}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Add Category
          </button>
        </div>
        <CategoriesDataTable />
      </div>
    </div>
  );
};

export default CategoryListPage;
