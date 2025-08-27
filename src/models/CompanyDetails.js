import mongoose from "mongoose";

const companyDetailsSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    whatsAppNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.CompanyDetails ||
  mongoose.model("CompanyDetails", companyDetailsSchema);
