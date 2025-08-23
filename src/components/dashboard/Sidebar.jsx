"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const pathname = usePathname();
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/dashboard" },
    { name: "APPS", icon: "📱", isHeader: true },
    {
      name: "Categories",
      icon: "📑",
      path: "/dashboard/categories",
      hasSubmenu: true,
      subItems: [
        { name: "Category List", path: "/dashboard/categories/list" },
        { name: "Sub-Category List", path: "/dashboard/categories/sub-list" },
        { name: "Sub-Category Service", path: "/dashboard/categories/service" },
      ],
    },
    { name: "Services", icon: "⚙️", path: "/dashboard/services" },
    { name: "Client", icon: "👥", path: "/dashboard/client" },
    { name: "Partner", icon: "🤝", path: "/dashboard/partner" },
    { name: "Testimonial", icon: "⭐", path: "/dashboard/testimonial" },
    { name: "CLASSIC CONTENTS", icon: "📚", isHeader: true },
    {
      name: "About Company",
      icon: "🏢",
      path: "/dashboard/about",
      hasSubmenu: true,
      subItems: [
        { name: "Company Details", path: "/dashboard/about/details" },
        { name: "Social Links", path: "/dashboard/about/social-links" },
      ],
    },
    { name: "Contact Form", icon: "📞", path: "/dashboard/contact" },
  ];

  // Check if categories should be open based on current path
  useEffect(() => {
    if (pathname?.startsWith("/categories")) {
      setIsCategoriesOpen(true);
    }
    if (pathname?.startsWith("/about")) {
      setIsAboutOpen(true);
    }
  }, [pathname]);

  const isActive = (path) => {
    return pathname === path;
  };

  const isSubItemActive = (subItems) => {
    return subItems.some((item) => pathname === item.path);
  };

  // Close sidebar when a link is clicked on mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden'
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed md:static top-0 left-0 z-30 w-64 h-full bg-[#FF6903] text-white flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}>
        <div className='p-4 border-b border-orange-600 flex items-center justify-between'>
          {/* Logo */}
          <Link
            href='/'
            className='flex items-center p-4 md:p-6 bg-white rounded-md'>
            <Image
              src='/logo/siteLogo/logo.svg'
              alt='IHRCHANE'
              height={40}
              width={160}
            />
          </Link>
          <button className='md:hidden text-white' onClick={toggleSidebar}>
            ✕
          </button>
        </div>

        <nav className='flex-1 overflow-y-auto pt-5'>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className='px-4'>
                {item.isHeader ? (
                  <div className='text-orange-100 text-xs uppercase tracking-wider mt-6 mb-2 px-2'>
                    {item.name}
                  </div>
                ) : item.hasSubmenu ? (
                  <div>
                    <button
                      onClick={() => {
                        if (item.name === "Categories")
                          setIsCategoriesOpen(!isCategoriesOpen);
                        if (item.name === "About Company")
                          setIsAboutOpen(!isAboutOpen);
                      }}
                      className={`w-full flex items-center p-2 rounded-lg transition-colors ${
                        isSubItemActive(item.subItems)
                          ? "bg-orange-700"
                          : "hover:bg-orange-600"
                      }`}>
                      <span className='mr-3'>{item.icon}</span>
                      <span className='flex-1 text-left'>{item.name}</span>
                      <span>
                        {(item.name === "Categories" && isCategoriesOpen) ||
                        (item.name === "About Company" && isAboutOpen)
                          ? "▲"
                          : "▼"}
                      </span>
                    </button>

                    {(item.name === "Categories" && isCategoriesOpen) ||
                    (item.name === "About Company" && isAboutOpen) ? (
                      <ul className='ml-6 mt-1 space-y-1'>
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.path}
                              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                                isActive(subItem.path)
                                  ? "bg-orange-700"
                                  : "hover:bg-orange-600"
                              }`}
                              onClick={handleLinkClick}> <FaArrowRightLong /> {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`flex items-center p-2 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? "bg-orange-700"
                        : "hover:bg-orange-600"
                    }`}
                    onClick={handleLinkClick}>
                    <span className='mr-3'>{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
