import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
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
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
