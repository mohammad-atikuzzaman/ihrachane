"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateCategoryForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    categoryName: "",
    bannerImage: null,
    contentSlideImage: null,
    contentTitle: "",
    mainBannerSpan: "",
    mainBannerHeader: "",
    mainBannerParagraph: "",
    upg1: "",
    upg2: "",
    upg3: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (let key in formData) {
      if (formData[key]) formDataToSend.append(key, formData[key]);
    }

    const res = await fetch("/api/categories/create", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await res.json();
    if (data.success) {
      alert("Category created successfully!");
      router.push("/dashboard/categories/list"); // redirect page
    } else {
      alert("Error: " + data.error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Category</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CATEGORY NAME</label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 p-3"
            placeholder="Enter Category Name"
          />
        </div>

        <div className="flex gap-6 flex-wrap">
          {/* Banner Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              UPLOAD BANNER IMAGE (1080x720)
            </label>
            <input type="file" name="bannerImage" onChange={handleChange} accept="image/*" />
            <span>{formData.bannerImage ? formData.bannerImage.name : "No file chosen"}</span>
          </div>

          {/* Content Slide Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              UPLOAD Content Slide IMAGE (1080x720)
            </label>
            <input type="file" name="contentSlideImage" onChange={handleChange} accept="image/*" />
            <span>
              {formData.contentSlideImage ? formData.contentSlideImage.name : "No file chosen"}
            </span>
          </div>
        </div>

        {/* Content Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CONTENT TITLE</label>
          <input
            type="text"
            name="contentTitle"
            value={formData.contentTitle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 p-3"
            placeholder="Enter Content Title"
          />
        </div>

        {/* Main Banner Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">MAIN BANNER SPAN</label>
          <input
            type="text"
            name="mainBannerSpan"
            value={formData.mainBannerSpan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 p-3"
            placeholder="Main Banner Span"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">MAIN BANNER HEADER</label>
          <input
            type="text"
            name="mainBannerHeader"
            value={formData.mainBannerHeader}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 p-3"
            placeholder="Main Banner Header"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">MAIN BANNER PARAGRAPH</label>
          <textarea
            name="mainBannerParagraph"
            value={formData.mainBannerParagraph}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 p-3"
            placeholder="Main Banner Paragraph"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-md bg-gray-100"
          >
            Back
          </button>
          <button type="submit" className="px-4 py-2 rounded-md bg-orange-600 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategoryForm;
