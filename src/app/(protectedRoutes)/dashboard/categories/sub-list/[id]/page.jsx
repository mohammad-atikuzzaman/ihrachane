import UpdateSubCategory from "@/components/dashboard/categories/UpdateSubCategory";

const EditSubCategoryPage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <UpdateSubCategory categoryId={id} />
    </div>
  );
};

export default EditSubCategoryPage;
