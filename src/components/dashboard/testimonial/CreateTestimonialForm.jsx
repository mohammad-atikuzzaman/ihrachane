"use client";

import { useState } from "react";

const CreateTestimonialForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    clientLogo: null,
    clientName: "",
    clientDesignation: "",
    clientFeedback: "",
    clientProfileImage: null,
  });

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
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='max-w-2xl mx-auto bg-white rounded-lg shadow p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
          Create New Testimonial
        </h1>

        <form onSubmit={handleSubmit} className='space-y-6'>
          {/* Company Name */}
          <div>
            <label
              htmlFor='companyName'
              className='block text-sm font-medium text-gray-700 mb-2'>
              COMPANY NAME
            </label>
            <input
              type='text'
              id='companyName'
              name='companyName'
              value={formData.companyName}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Company Name'
            />
          </div>

          {/* Client Logo Upload */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              UPLOAD CLIENT LOGO (IMAGE DIMENSION: 300×30)
            </label>

            <div className='mt-1 flex items-center'>
              <label className='relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500'>
                <span className='px-4 py-2 border border-gray-300 rounded-md'>
                  Choose File
                </span>
                <input
                  type='file'
                  name='clientLogo'
                  onChange={handleChange}
                  className='sr-only'
                  accept='.jpg,.jpeg'
                />
              </label>
              <span className='ml-3 text-sm text-gray-500'>
                {formData.clientLogo
                  ? formData.clientLogo.name
                  : "No file chosen"}
              </span>
            </div>

            <div className='mt-2'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800'>
                JPG
              </span>
            </div>
          </div>

          {/* Client Name */}
          <div>
            <label
              htmlFor='clientName'
              className='block text-sm font-medium text-gray-700 mb-2'>
              CLIENT NAME
            </label>
            <input
              type='text'
              id='clientName'
              name='clientName'
              value={formData.clientName}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Client Name'
            />
          </div>

          {/* Client Designation */}
          <div>
            <label
              htmlFor='clientDesignation'
              className='block text-sm font-medium text-gray-700 mb-2'>
              CLIENT DESIGNATION
            </label>
            <input
              type='text'
              id='clientDesignation'
              name='clientDesignation'
              value={formData.clientDesignation}
              onChange={handleChange}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Client Designation'
            />
          </div>

          {/* Client Feedback */}
          <div>
            <label
              htmlFor='clientFeedback'
              className='block text-sm font-medium text-gray-700 mb-2'>
              CLIENT FEEDBACK
            </label>
            <textarea
              id='clientFeedback'
              name='clientFeedback'
              value={formData.clientFeedback}
              onChange={handleChange}
              rows={4}
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Client Feedback'
            />
          </div>

          {/* Client Profile Image Upload */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              UPLOAD CLIENT PROFILE IMAGE (IMAGE DIMENSION: 500×500)
            </label>

            <div className='mt-1 flex items-center'>
              <label className='relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500'>
                <span className='px-4 py-2 border border-gray-300 rounded-md'>
                  Choose File
                </span>
                <input
                  type='file'
                  name='clientProfileImage'
                  onChange={handleChange}
                  className='sr-only'
                  accept='.jpg,.jpeg'
                />
              </label>
              <span className='ml-3 text-sm text-gray-500'>
                {formData.clientProfileImage
                  ? formData.clientProfileImage.name
                  : "No file chosen"}
              </span>
            </div>

            <div className='mt-2'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800'>
                JPG
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex justify-between pt-6'>
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

export default CreateTestimonialForm;
