'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CreateCategoryForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    categoryName: '',
    bannerImage: null,
    contentSlideImage: null,
    contentTitle: '',
    mainBannerSpan: '',
    mainBannerHeader: '',
    mainBannerParagraph: '',
    upg1: '',
    upg2: '',
    upg3: ''
  })

  const handleChange = (e) => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Category</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Name */}
        <div>
          <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700 mb-2">
            CATEGORY NAME
          </label>
          <input
            type="text"
            id="categoryName"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
            placeholder="Enter Category Name"
          />
        </div>
        <div className='flex gap-6 justify-between flex-wrap'>

        {/* Banner Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            UPLOAD BANNER IMAGE (IMAGE DIMENSION: 1080×720)
          </label>
          <div className="mt-1 flex items-center">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500">
              <span className="px-4 py-2 border border-gray-300 rounded-md">Choose File</span>
              <input
                type="file"
                name="bannerImage"
                onChange={handleChange}
                className="sr-only"
                accept="image/*"
              />
            </label>
            <span className="ml-3 text-sm text-gray-500">
              {formData.bannerImage ? formData.bannerImage.name : 'No file chosen'}
            </span>
          </div>
        </div>
        
        {/* Content Side Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            UPLOAD Content Side IMAGE (IMAGE DIMENSION: 1080×720)
          </label>
          <div className="mt-1 flex items-center">
            <label className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500">
              <span className="px-4 py-2 border border-gray-300 rounded-md">Choose File</span>
              <input
                type="file"
                name="contentSlide"
                onChange={handleChange}
                className="sr-only"
                accept="image/*"
              />
            </label>
            <span className="ml-3 text-sm text-gray-500">
              {formData.bannerImage ? formData.bannerImage.name : 'No file chosen'}
            </span>
          </div>
        </div>
        </div>
        
        {/* Content Title */}
        <div>
          <label htmlFor="contentTitle" className="block text-sm font-medium text-gray-700 mb-2">
            CONTENT TITLE
          </label>
          <input
            type="text"
            id="contentTitle"
            name="contentTitle"
            value={formData.contentTitle}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
            placeholder="Enter Content Title Text"
          />
        </div>
        
        {/* Main Banner Span */}
        <div>
          <label htmlFor="mainBannerSpan" className="block text-sm font-medium text-gray-700 mb-2">
            MAIN BANNER SPAN
          </label>
          <input
            type="text"
            id="mainBannerSpan"
            name="mainBannerSpan"
            value={formData.mainBannerSpan}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
            placeholder="Enter Main Banner Span text"
          />
        </div>
        
        {/* Main Banner Header */}
        <div>
          <label htmlFor="mainBannerHeader" className="block text-sm font-medium text-gray-700 mb-2">
            MAIN BANNER HEADER
          </label>
          <input
            type="text"
            id="mainBannerHeader"
            name="mainBannerHeader"
            value={formData.mainBannerHeader}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
            placeholder="Enter Main Banner Header Text"
          />
        </div>
        
        {/* Main Banner Paragraph */}
        <div>
          <label htmlFor="mainBannerParagraph" className="block text-sm font-medium text-gray-700 mb-2">
            MAIN BANNER PARAGRAPH
          </label>
          <textarea
            id="mainBannerParagraph"
            name="mainBannerParagraph"
            value={formData.mainBannerParagraph}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
            placeholder="Enter Main Banner Paragraph Text"
          />
        </div>
        
        {/* UPG Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="upg1" className="block text-sm font-medium text-gray-700 mb-2">
              UPG
            </label>
            <input
              type="text"
              id="upg1"
              name="upg1"
              value={formData.upg1}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="UPG 1"
            />
          </div>
          <div>
            <label htmlFor="upg2" className="block text-sm font-medium text-gray-700 mb-2">
              UPG
            </label>
            <input
              type="text"
              id="upg2"
              name="upg2"
              value={formData.upg2}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="UPG 2"
            />
          </div>
          <div>
            <label htmlFor="upg3" className="block text-sm font-medium text-gray-700 mb-2">
              UPG
            </label>
            <input
              type="text"
              id="upg3"
              name="upg3"
              value={formData.upg3}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="UPG 3"
            />
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => router.back() }
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Back
          </button>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateCategoryForm;