// app/sourcing/page.js
"use client";

import { useState } from "react";
import { countries } from "./countries";

export default function SourcingPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "",
    email: "",
    phoneCode: "+1",
    phoneNumber: "",
    productCategory: "",
    expectedQuantity: "",
    productDescription: "",
    budgetRange: "",
    requiredTimeline: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! (check console)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Tell Us Your <span className="text-orange-600">Sourcing Needs</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto">
          Submit your product requirements and we'll connect you with verified
          suppliers worldwide. Get competitive quotes and streamline your supply
          chain.
        </p>
      </div>

      {/* Main Form & Info Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <form
          className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-8 space-y-6 border border-orange-100"
          onSubmit={handleSubmit}
        >
          <div className="pb-4 border-b border-orange-200">
            <h2 className="text-2xl font-bold text-gray-900">
              Product Sourcing Request
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Please fill in the details below and we'll discuss your requirements
              as soon as possible.
            </p>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
          </div>

          {/* Company & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country *
              </label>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                <option value="">Select your country</option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="flex">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-l-lg px-3 py-3 w-1/4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.phone}>
                      {country.phone}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  required
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border border-gray-300 border-l-0 rounded-r-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="123 456 7890"
                />
              </div>
            </div>
          </div>

          {/* Product Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Product Requirements
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <select
                  name="productCategory"
                  required
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                >
                  <option value="">Select category *</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Apparel">Apparel</option>
                  <option value="Furniture">Furniture</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="expectedQuantity"
                  placeholder="Expected Quantity e.g., 1000 units"
                  value={formData.expectedQuantity}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                />
              </div>
            </div>
            <div>
              <textarea
                name="productDescription"
                placeholder="Product Description *"
                required
                value={formData.productDescription}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              ></textarea>
            </div>
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                <option value="">Select budget range</option>
                <option value="<$1000">&lt;$1000</option>
                <option value="$1000-$5000">$1000-$5000</option>
                <option value=">$5000">&gt;$5000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Timeline
              </label>
              <select
                name="requiredTimeline"
                value={formData.requiredTimeline}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                <option value="">When do you need this?</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2+ months">2+ months</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
          >
            Submit Sourcing Request
          </button>
        </form>

        {/* Right Info Section */}
        <div className="space-y-6">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-orange-100 text-orange-600 p-2 rounded-lg mr-3">
                ✓
              </span>
              Why Choose Us?
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Verified Suppliers</h4>
                  <p className="text-gray-600 text-sm">All suppliers are thoroughly vetted and verified</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
                  <p className="text-gray-600 text-sm">Comprehensive quality control and inspection</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3 mt-0.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Global Network</h4>
                  <p className="text-gray-600 text-sm">Access to suppliers in 50+ countries</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="mb-4 text-orange-100">
              Our sourcing experts are available 24/7 to assist you with your requirements.
            </p>
            <div className="space-y-2 text-orange-50">
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                info@sourcespotlight.com
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                Live chat available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}