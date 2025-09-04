import dbConnect from "@/lib/mongodb";
import Category from "@/models/Category";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    await dbConnect();

    const data = await request.formData();

    const categoryName = data.get("categoryName");
    const contentTitle = data.get("contentTitle");
    const mainBannerSpan = data.get("mainBannerSpan");
    const mainBannerHeader = data.get("mainBannerHeader");
    const mainBannerParagraph = data.get("mainBannerParagraph");

    const bannerFile = data.get("bannerImage");
    const contentSlideFile = data.get("contentSlideImage");

    // Banner Image Upload
    const bannerBuffer = Buffer.from(await bannerFile.arrayBuffer());
    const bannerResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: "categories" }, (error, result) => {
          if (error) reject(error);
          else resolve(result);
        })
        .end(bannerBuffer);
    });

    // Content Slide Image Upload
    let contentSlideResult = null;
    if (contentSlideFile && contentSlideFile.size > 0) {
      const contentBuffer = Buffer.from(await contentSlideFile.arrayBuffer());
      contentSlideResult = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "categories" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(contentBuffer);
      });
    }

    // Save category in DB
    const category = await Category.create({
      name: categoryName,
      bannerImg: bannerResult.secure_url,
      contentSideImg: contentSlideResult ? contentSlideResult.secure_url : "",
      contentTitle,
      mainBannerSpan,
      mainBannerHeader,
      mainBannerDescription: mainBannerParagraph,
    });

    return NextResponse.json(
      { success: true, data: category },
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
