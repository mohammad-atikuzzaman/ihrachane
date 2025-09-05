import UpdateSubCategory from "@/components/dashboard/categories/UpdateSubCategory";

const EditSubCategoryPage = ({ params }) => {
  return (
    <div>
      <UpdateSubCategory categoryId={params.id} />
    </div>
  );
};

export default EditSubCategoryPage;
