// models/SubCategory.js
import { Schema, models, model } from "mongoose";

const subCategorySchema = new Schema(
  {
    title: { type: String, required: true },
    selectedCategory: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    bannerImg: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const SubCategory =
  models.SubCategory || model("SubCategory", subCategorySchema);
export default SubCategory;
