// components/CreateServiceForm.jsx
"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateServiceForm = () => {
  const [formData, setFormData] = useState({
    serviceTitle: "",
    serviceParagraph: "",
  });

  const router = useRouter();

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
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 flex items-center justify-center p-4'>
        <div className='bg-white rounded-lg shadow p-6 w-full max-w-md'>
          <h1 className='text-2xl font-bold text-gray-800 mb-6 text-center'>
            Create New Service
          </h1>

          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Service Title */}
            <div>
              <label
                htmlFor='serviceTitle'
                className='block text-sm font-medium text-gray-700 mb-2'>
                SERVICE TITLE
              </label>
              <input
                type='text'
                id='serviceTitle'
                name='serviceTitle'
                value={formData.serviceTitle}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
                placeholder='Enter Service Title'
              />
            </div>

            {/* Service Paragraph */}
            <div>
              <label
                htmlFor='serviceParagraph'
                className='block text-sm font-medium text-gray-700 mb-2'>
                SERVICE PARAGRAPH
              </label>
              <textarea
                id='serviceParagraph'
                name='serviceParagraph'
                value={formData.serviceParagraph}
                onChange={handleChange}
                rows={4}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
                placeholder='Enter Service Paragraph Text'
              />
            </div>

            {/* Buttons */}
            <div className='flex justify-between pt-4'>
              <button
                type='button'
                onClick={() => router.back()}
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

      {/* Footer */}
      <footer className='py-4 text-center text-sm text-gray-500'>
        2024 © Irhachan
      </footer>
    </div>
  );
};

export default CreateServiceForm;
