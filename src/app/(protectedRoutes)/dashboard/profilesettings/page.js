"use client";
import React from "react";

const ProfileSettings = () => {
  return (
    <div className=" max-w-6xl mx-auto">
      {/* Profile Information */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Profile Information
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Update your account’s profile information and email address.
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              defaultValue="Ashraful Islam"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              defaultValue="ashrafulislamtusar@gmail.com"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="px-5 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-800"
          >
            SAVE
          </button>
        </form>
      </div>

      {/* Update Password */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Update Password
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Ensure your account is using a long, random password to stay secure.
        </p>

        <form className="space-y-5">
          {/* Current Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="px-5 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-800"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
