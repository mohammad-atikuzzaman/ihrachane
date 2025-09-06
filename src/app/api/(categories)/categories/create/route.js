import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";
import { NextResponse } from "next/server";
import { uploadToCloudinary } from "@/utils/uploadToCloudinary";

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.formData();

    const name = data.get("name");
    const contentTitle = data.get("contentTitle");
    const mainBannerSpan = data.get("mainBannerSpan");
    const mainBannerHeader = data.get("mainBannerHeader");
    const mainBannerDescription = data.get("mainBannerDescription");
    
    const bannerImgFile = data.get("bannerImg");
    const contentSideImgFile = data.get("contentSideImg");

    // ✅ Uploads with helper
    const bannerResult = await uploadToCloudinary(bannerImgFile, "categories");
    const contentSideResult = await uploadToCloudinary(
      contentSideImgFile,
      "categories"
    );

    // Save category in DB
    const category = await Category.create({
      name,
      bannerImg: bannerResult?.secure_url || "",
      contentSideImg: contentSideResult?.secure_url || "",
      contentTitle,
      mainBannerSpan,
      mainBannerHeader,
      mainBannerDescription,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Category Created Successfully!",
        data: category,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 400 }
    );
  }
}
