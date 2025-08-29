import React from "react";

const MoreInfo = () => {
  return (
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
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">
                Verified Suppliers
              </h4>
              <p className="text-gray-600 text-sm">
                All suppliers are thoroughly vetted and verified
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3 mt-0.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Quality Assurance</h4>
              <p className="text-gray-600 text-sm">
                Comprehensive quality control and inspection
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-orange-100 text-orange-600 rounded-full p-2 mr-3 mt-0.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Global Network</h4>
              <p className="text-gray-600 text-sm">
                Access to suppliers in 50+ countries
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Need Help?</h3>
        <p className="mb-4 text-orange-100">
          Our sourcing experts are available 24/7 to assist you with your
          requirements.
        </p>
        <div className="space-y-2 text-orange-50">
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            info@sourcespotlight.com
          </p>
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            +1 (555) 123-4567
          </p>
          <p className="flex items-center">
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            Live chat available
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;
