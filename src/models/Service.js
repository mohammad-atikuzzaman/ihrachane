import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  serviceTitle: {
    type: String,
    required: true,
  },
  serviceDescription: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.Service || mongoose.model("Service", serviceSchema);
