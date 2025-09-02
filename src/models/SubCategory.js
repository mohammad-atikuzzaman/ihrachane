import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  selectedCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  bannerImg: {
    type: String,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.models.SubCategory || mongoose.model("SubCategory", subCategorySchema);
