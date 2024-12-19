import { useState } from "react";
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';

const AdminNavbar = ({ isMobileSidebarCollapsed, toggleMobileSidebar }) => {

  return (
    <header className="w-full bg-secondary-500 shadow p-4 sticky top-0 z-10">
      <nav className="flex justify-between text-white items-center">
        <div className="text-2xl font-bold">Dashboard</div>

        <span className="hidden md:block font-medium">John Richard</span>

        {
          isMobileSidebarCollapsed ? (
            <AiOutlineClose onClick={toggleMobileSidebar} className="md:hidden  w-8 h-8 z-[25] transition-all duration-300" />
          ) : (
            <RxHamburgerMenu onClick={toggleMobileSidebar} className="md:hidden w-8 h-8 z-[25] transition-all duration-300" />
          )
        }

      </nav>
    </header>
  );
};

export default AdminNavbar;