import mongoose from "mongoose";

const subCategoryServiceSchema = new mongoose.Schema({
  subCategoryServiceName: {
    type: String,
    required: true,
  },
  subCategorySelect: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubCategory", // Relation with SubCategory
    required: true,
  },
  subCategoryServiceBannerImg: {
    type: String,
  },
  subCategoryServiceDescription: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.models.SubCategoryService || mongoose.model("SubCategoryService", subCategoryServiceSchema);
