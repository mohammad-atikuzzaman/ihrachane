import React from "react";

const Form = () => {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#000d26] mb-8 text-center">
          SUBMIT THE FORM TO HAVE OUR EXPERTS SOLUTION
        </h2>

        {/* Content Box */}
        <div className="bg-orange-500 rounded p-6 md:p-10">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">First Name *</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 bg-white focus:ring-orange-300"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Last Name *</label>
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Phone Number *</label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="text-white text-sm mb-2">Email *</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="text-white text-sm mb-2">Your Message *</label>
              <textarea
                placeholder="Enter your message"
                rows={5}
                className="p-3 bg-white rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-black text-white px-8 py-3 rounded-full cursor-pointer hover:bg-gray-900 transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
