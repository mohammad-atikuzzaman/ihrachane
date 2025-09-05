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

const Client =mongoose.models.Client || mongoose.model("Client", clientSchema);
export default Client;
