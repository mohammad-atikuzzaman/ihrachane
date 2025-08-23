"use client";

import { useState } from "react";

const CreateSubCategoryForm = () => {
  const [formData, setFormData] = useState({
    subCategoryTitle: "",
    selectedCategory: "",
    bannerImage: null,
    subTitle: "",
  });

  // Sample categories - in a real app, these would come from your database/API
  const categories = [
    { id: "1", name: "Product Sourcing" },
    { id: "2", name: "Supplier Verification" },
    { id: "3", name: "Air Freight" },
    { id: "4", name: "Sea Freight" },
  ];

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className='bg-white rounded-lg shadow p-6'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6'>
        Create New Sub Category
      </h1>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Sub Category Title */}
        <div>
          <label
            htmlFor='subCategoryTitle'
            className='block text-sm font-medium text-gray-700 mb-2'>
            SUB CATEGORY TITLE
          </label>
          <input
            type='text'
            id='subCategoryTitle'
            name='subCategoryTitle'
            value={formData.subCategoryTitle}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
            placeholder='Enter Sub Category Title Text'
          />
        </div>

        {/* Select Category */}
        <div>
          <label
            htmlFor='selectedCategory'
            className='block text-sm font-medium text-gray-700 mb-2'>
            SELECT CATEGORY
          </label>
          <select
            id='selectedCategory'
            name='selectedCategory'
            value={formData.selectedCategory}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'>
            <option value=''>Choose a Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Banner Image Upload */}
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            UPLOAD BANNER IMAGE (IMAGE DIMENSION: 1080×720)
          </label>
          <div className='mt-1 flex items-center'>
            <label className='relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500'>
              <span className='px-4 py-2 border border-gray-300 rounded-md'>
                Choose File
              </span>
              <input
                type='file'
                name='bannerImage'
                onChange={handleChange}
                className='sr-only'
                accept='image/*'
              />
            </label>
            <span className='ml-3 text-sm text-gray-500'>
              {formData.bannerImage
                ? formData.bannerImage.name
                : "No file chosen"}
            </span>
          </div>
        </div>

        {/* Sub Title */}
        <div>
          <label
            htmlFor='subTitle'
            className='block text-sm font-medium text-gray-700 mb-2'>
            SUB TITLE
          </label>
          <input
            type='text'
            id='subTitle'
            name='subTitle'
            value={formData.subTitle}
            onChange={handleChange}
            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
            placeholder='Enter Text'
          />
        </div>

        {/* Buttons */}
        <div className='flex justify-between pt-4'>
          <button
            type='button'
            className='inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>
            Back
          </button>
          <button
            type='submit'
            className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSubCategoryForm;
