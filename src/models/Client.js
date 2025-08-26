import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: true,
  },
  clientImg: {
    type: String, // Image URL
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Client || mongoose.model("Client", clientSchema);
