import mongoose from "mongoose";

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String, // Image URL
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Client || mongoose.model("Client", clientSchema);
