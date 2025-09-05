import UpdateSubCategoryService from "@/components/dashboard/categories/UpdateSubCategoryService";


const EditServicePage = ({ params }) => {
  return (
    <div>
      <UpdateSubCategoryService categoryId={params.id} />
    </div>
  );
};

export default EditServicePage;
