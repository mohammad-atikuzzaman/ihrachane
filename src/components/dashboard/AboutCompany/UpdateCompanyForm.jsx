// components/UpdateCompanyForm.jsx
'use client'

import { useState } from 'react'

const UpdateCompanyForm = () => {
  const [formData, setFormData] = useState({
    companyAddress: 'Company Address, Street 123, City, Country',
    phoneNumber: '+880 1234567890',
    companyEmail: 'info@company.com',
    whatsappNumber: '+880 1234567890'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Update Company</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Address */}
          <div>
            <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700 mb-2">
              COMPANY ADDRESS
            </label>
            <textarea
              id="companyAddress"
              name="companyAddress"
              value={formData.companyAddress}
              onChange={handleChange}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="Enter Company Address"
            />
          </div>
          
          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              PHONE NUMBER
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="Enter Phone Number"
            />
          </div>
          
          {/* Company Email */}
          <div>
            <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700 mb-2">
              COMPANY EMAIL
            </label>
            <input
              type="email"
              id="companyEmail"
              name="companyEmail"
              value={formData.companyEmail}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="Enter Company Email"
            />
          </div>
          
          {/* WhatsApp Number */}
          <div>
            <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-2">
              COMPANY WHAT'S APP NUMBER
            </label>
            <input
              type="tel"
              id="whatsappNumber"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 sm:text-sm p-3 border"
              placeholder="Enter WhatsApp Number"
            />
          </div>
          
          {/* Submit Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateCompanyForm