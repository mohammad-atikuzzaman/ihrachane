"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import HamburgerMenu from "./HamburgerMenu";
import { MdFullscreen } from "react-icons/md";
import { useSession } from "next-auth/react";
import UserAvatar from "./UserAvatar";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session, status } = useSession();

  const user = session?.user || {};
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className='flex-1 flex flex-col overflow-hidden'>
        {/* Mobile header */}
        <header className='bg-white shadow-sm z-10'>
          <div className='flex items-center justify-between md:justify-end p-4 '>
            <div className={"md:hidden"}>
              <HamburgerMenu toggleSidebar={toggleSidebar} />
            </div>
            <div className='flex gap-6 items-center'>
              <MdFullscreen className='text-3xl hover:text-4xl' />
              <div className='flex items-center gap-4'>
                <div>
                  <h2 className='font-semibold'>{user?.name}</h2>
                  <p className='text-gray-600 text-sm'>{user?.email}</p>
                </div>
                <div>
                  <UserAvatar user={user} size={40} />
                </div>
              </div>
            </div>
            <div className='w-6'></div> {/* For spacing balance */}
          </div>
        </header>
        <div className='flex-1 overflow-y-auto p-4 md:p-6 bg-white'>
          {children}
        </div>
      </div>
    </div>
  );
}
