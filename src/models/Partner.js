import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema(
  {
    partnerName: {
      type: String,
      required: true,
    },
    partnerImage: {
      type: String, // Image URL
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Partner ||
  mongoose.model("Partner", partnerSchema);
