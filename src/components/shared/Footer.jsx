import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp,
  } from 'react-icons/fa';
  
  export default function Footer() {
    return (
      <footer className="bg-[#000d26] text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Left Side - Logo & Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">İHRAÇHANE</h2>
  
            {/* Social Icons */}
            <div className="flex space-x-4 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
            </div>
  
            {/* Address & Contact Info */}
            <div className="text-sm space-y-1">
              <p>Company Address, Street 123, City, Country</p>
              <p>+800 1234567890</p>
              <p>info@company.com</p>
              <p className="flex items-center gap-2">
                <FaWhatsapp className="text-green-500" /> +880 1234567890
              </p>
            </div>
          </div>
  
          {/* Right Side - Links */}
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="text-sm space-y-1">
              <li>Sourcing</li>
              <li>Dropshipping</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="text-sm space-y-1">
              <li>Contact Us</li>
            </ul>
          </div>
  
          <div>
            <h4 className="font-semibold mb-2">Corporate</h4>
            <ul className="text-sm space-y-1">
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  