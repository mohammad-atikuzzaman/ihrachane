import { model, models, Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bannerImg: {
      type: String,
      required: true,
    },
    contentSideImg: {
      type: String,
    },
    contentTitle: {
      type: String,
      required: true,
    },
    mainBannerSpan: {
      type: String,
    },
    mainBannerHeader: {
      type: String,
    },
    mainBannerDescription: {
      type: String,
    },
    subCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubCategory",
      },
    ],
  },
  { timestamps: true }
);

export default models.Category || model("Category", categorySchema);
