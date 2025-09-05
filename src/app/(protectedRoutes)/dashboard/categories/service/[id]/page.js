import UpdateSubCategoryService from "@/components/dashboard/categories/UpdateSubCategoryService";

const EditServicePage = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <UpdateSubCategoryService categoryId={id} />
    </div>
  );
};

export default EditServicePage;
