// components/CreateSocialMediaForm.jsx
"use client";

import { useState } from "react";

const CreateSocialMediaForm = () => {
  const [formData, setFormData] = useState({
    socialName: "",
    socialIcon: "",
    socialLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-2xl mx-auto bg-white rounded-lg shadow p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
          Create New Social Media
        </h1>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Social Media Name */}
          <div>
            <label
              htmlFor='socialName'
              className='block text-sm font-medium text-gray-700 mb-2'>
              SOCIAL MEDIA NAME
            </label>
            <input
              type='text'
              id='socialName'
              name='socialName'
              value={formData.socialName}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Social Name'
            />
          </div>

          {/* Social Media Icon */}
          <div>
            <label
              htmlFor='socialIcon'
              className='block text-sm font-medium text-gray-700 mb-2'>
              SOCIAL MEDIA ICON
            </label>
            <input
              type='text'
              id='socialIcon'
              name='socialIcon'
              value={formData.socialIcon}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Social Icon (e.g., FaFacebook, FaTwitter)'
            />
            <p className='mt-1 text-sm text-gray-500'>
              Enter icon class name (e.g., for FontAwesome: "FaFacebook",
              "FaTwitter", "FaInstagram")
            </p>
          </div>

          {/* Social Media Link */}
          <div>
            <label
              htmlFor='socialLink'
              className='block text-sm font-medium text-gray-700 mb-2'>
              SOCIAL MEDIA LINK
            </label>
            <input
              type='url'
              id='socialLink'
              name='socialLink'
              value={formData.socialLink}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Social Link (https://...)'
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
    </div>
  );
};

export default CreateSocialMediaForm;
