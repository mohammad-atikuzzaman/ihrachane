import mongoose from "mongoose";

const companyDetailsSchema = new mongoose.Schema({
  companyAddress: {
    type: String,
    required: true,
  },
  companyPhoneNumber: {
    type: String,
    required: true,
  },
  companyEmail: {
    type: String,
    required: true,
  },
  companyWhatsAppNumber: {
    type: String,
  },
}, { timestamps: true });

export default mongoose.models.CompanyDetails || mongoose.model("CompanyDetails", companyDetailsSchema);
