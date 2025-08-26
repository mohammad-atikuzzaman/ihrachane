import mongoose from "mongoose";

const socialLinkSchema = new mongoose.Schema({
  socialMediaName: {
    type: String,
    required: true,
  },
  socialMediaIcon: {
    type: String, // এখানে icon এর জন্য URL বা icon class (যেমন FontAwesome) রাখতে পারো
    required: true,
  },
  socialMediaLink: {
    type: String, // social media profile/page link
    required: true,
  },
}, { timestamps: true });

export default mongoose.models.SocialLink || mongoose.model("SocialLink", socialLinkSchema);
