import React from 'react';

const UpdateClient = () => {
    
    return (
        <div className='bg-white rounded-lg shadow p-6'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>
          Create New Client
        </h1>
  
        <form  className='space-y-6'>
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
              
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border'
              placeholder='Enter Client Name'
            />
          </div>
  
          {/* Client Logo Upload */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-2'>
              UPLOAD CLIENT LOGO (IMAGE DIMENSION: 300×250)
            </label>
  
            {/* Format indication */}
            <div className='mb-2'>
              <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800'>
                JPG
              </span>
            </div>
  
            <div className='mt-1 flex items-center'>
              <label className='relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500'>
                <span className='px-4 py-2 border border-gray-300 rounded-md'>
                  Choose File
                </span>
                <input
                  type='file'
                  name='clientLogo'
               
                  className='sr-only'
                  accept='.jpg,.jpeg'
                />
              </label>
              <span className='ml-3 text-sm text-gray-500'>
                
              </span>
            </div>
  
            <p className='mt-1 text-sm text-gray-500'>
              Accepted format: JPG only
            </p>
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

export default UpdateClient;