// models/Category.js
import { Schema, models, model } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    bannerImg: { type: String, required: true },
    contentSideImg: { type: String },
    contentTitle: { type: String, required: true },
    mainBannerSpan: { type: String },
    mainBannerHeader: { type: String },
    mainBannerDescription: { type: String },
    subCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubCategory", // SubCategory এর reference
      },
    ],
  },
  { timestamps: true }
);

const Category = models.Category || model("Category", categorySchema);
export default Category;
