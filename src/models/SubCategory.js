import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  subTitle: {
    type: String,
    required: true,
  },
  selectCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category", // Relation with Category
    required: true,
  },
  bannerImg: {
    type: String,
  },
  subCategoryDescription: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.models.SubCategory || mongoose.model("SubCategory", subCategorySchema);
