"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const UpdateSubCategoryService = ({ categoryId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    categoryName: "",
    contentTitle: "",
    mainBannerSpan: "",
    mainBannerHeader: "",
    mainBannerParagraph: "",
  });

  // category data fetch
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(`/api/categories/${categoryId}`);
        const data = await res.json();
        if (data.success) {
          setFormData({
            categoryName: data.category.categoryName,
            contentTitle: data.category.contentTitle,
            mainBannerSpan: data.category.mainBannerSpan || "",
            mainBannerHeader: data.category.mainBannerHeader || "",
            mainBannerParagraph: data.category.mainBannerParagraph || "",
          });
        }
      } catch (error) {
        console.error("Error fetching category:", error);
      }
    };
    fetchCategory();
  }, [categoryId]);

  // input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`/api/categories/update/${categoryId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if (data.success) {
      alert("Category updated successfully!");
      router.push("/dashboard/categories/list");
    } else {
      alert("Error updating category");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white">
          <h1 className="text-3xl font-bold">Update Category</h1>
          <p className="text-orange-100 mt-2">Modify your product category details</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Category Name */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CATEGORY NAME <span className="text-orange-600">*</span>
              <span className="text-xs text-gray-500 ml-2">(must be lowercase with no spaces)</span>
            </label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              required
            />
          </div>

          {/* Content Title */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              CONTENT TITLE <span className="text-orange-600">*</span>
            </label>
            <input
              type="text"
              name="contentTitle"
              value={formData.contentTitle}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              placeholder="Enter Content Title"
              required
            />
          </div>

          {/* Main Banner Fields */}
          <div className="space-y-6 p-4 bg-orange-50 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">Main Banner Content</h3>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                MAIN BANNER SPAN TEXT
              </label>
              <input
                type="text"
                name="mainBannerSpan"
                value={formData.mainBannerSpan}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                placeholder="e.g., New Collection, Limited Time, etc."
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                MAIN BANNER HEADER
              </label>
              <input
                type="text"
                name="mainBannerHeader"
                value={formData.mainBannerHeader}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                placeholder="Enter a compelling headline"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                MAIN BANNER PARAGRAPH
              </label>
              <textarea
                name="mainBannerParagraph"
                value={formData.mainBannerParagraph}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                placeholder="Describe your category or promotion"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
              Back
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 transition shadow-md hover:shadow-lg flex items-center"
            >
              Update Category
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateSubCategoryService;
