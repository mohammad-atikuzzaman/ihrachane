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

const Partner =
  mongoose.models.Partner || mongoose.model("Partner", partnerSchema);
export default Partner;
