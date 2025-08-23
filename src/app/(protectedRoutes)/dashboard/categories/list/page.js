"use client";
import AddCategoryForm from "@/components/dashboard/categories/AddCategoryForm";
import CategoriesDataTable from "@/components/dashboard/categories/CategoriesDataTable";
import { useRouter } from "next/navigation";

const CategoryListPage = () => {
  const router = useRouter();
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-lg shadow p-6'>
        <div className='text-end'>
          <button
            onClick={() => router.push("/dashboard/categories/list/create-new")}
            className='text-sm bg-[#FF6903] text-white font-semibold px-4 py-2 rounded-lg my-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-[#e55b00] active:scale-95'>
            Add Category
          </button>
        </div>
        <CategoriesDataTable />
      </div>
      <div className='bg-white rounded-lg shadow p-6'>
        <h2 className='text-lg font-semibold mb-4'>Add Stab Category</h2>
        <AddCategoryForm />
      </div>
    </div>
  );
};

export default CategoryListPage;
