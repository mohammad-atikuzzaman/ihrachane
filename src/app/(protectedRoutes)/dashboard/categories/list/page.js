import AddCategoryForm from "@/components/dashboard/categories/AddCategoryForm";
import CategoriesDataTable from "@/components/dashboard/categories/CategoriesDataTable";

const CategoryListPage = () => {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-bold'>Dashboard</h1>

      <div className='bg-white rounded-lg shadow p-6'>
        <h2 className='text-lg font-semibold mb-4'>S.L. NO</h2>
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
