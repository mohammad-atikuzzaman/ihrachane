"use client";

import { useState } from "react";
import { countries } from "./countries";
import Header from "./Header";
import MoreInfo from "./MoreInfo";

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
    preferredContact: "", // 👈 new field
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
    <div
      id="contact"
      className="container mx-auto bg-gradient-to-b from-orange-50 to-white py-12 px-4 sm:px-6 lg:px-8 rounded-2xl"
    >
      {/* Top Section */}
      <Header />

      {/* Main Form & Info Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form */}
        <form
          className="lg:col-span-2 bg-white shadow-xl rounded-2xl p-10 space-y-8 border border-orange-100"
          onSubmit={handleSubmit}
        >
          {/* Form Heading */}
          <div className="pb-4 border-b border-orange-200">
            <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Product Sourcing Request
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Submit your product requirements and we'll connect you with{" "}
              <span className="font-medium text-orange-600">
                verified suppliers worldwide.
              </span>
            </p>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
          </div>

          {/* Company & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Company *
              </label>
              <input
                type="text"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Country *
              </label>
              <select
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                <option disabled value="">
                  Select your country
                </option>
                {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone Number *
              </label>
              <div className="flex">
                <select
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-l-xl px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
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
                  className="border border-gray-300 border-l-0 rounded-r-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                  placeholder="123 456 7890"
                />
              </div>
            </div>
          </div>

          {/* Preferred Contact */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Preferred Contact Method *
            </label>
            <div className="flex items-center gap-6">
              {["Phone", "WhatsApp", "Email"].map((method) => (
                <label
                  key={method}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method.toLowerCase()}
                    checked={formData.preferredContact === method.toLowerCase()}
                    onChange={handleChange}
                    className="text-orange-600 focus:ring-orange-500"
                    required
                  />
                  <span className="text-gray-700">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Product Requirements */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Product Requirements
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <select
                  name="productCategory"
                  required
                  value={formData.productCategory}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
                >
                  <option disabled value="">
                    Select category *
                  </option>
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
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
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
                className="border border-gray-300 rounded-xl px-4 py-3 w-full h-32 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              ></textarea>
            </div>
          </div>

          {/* Budget & Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Budget Range
              </label>
              <select
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                <option disabled value="">
                  Select budget range
                </option>
                <option value="<$1000">&lt;$1000</option>
                <option value="$1000-$5000">$1000-$5000</option>
                <option value=">$5000">&gt;$5000</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Required Timeline
              </label>
              <select
                name="requiredTimeline"
                value={formData.requiredTimeline}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 w-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
              >
                <option disabled value="">
                  When do you need this?
                </option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="1 month">1 month</option>
                <option value="2+ months">2+ months</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg font-semibold py-4 px-6 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Submit Sourcing Request
          </button>
        </form>

        {/* Right Info Section */}
        <MoreInfo />
      </div>
    </div>
  );
}
