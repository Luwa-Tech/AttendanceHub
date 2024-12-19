import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarToggle, setIsMobileSidebarToggle] = useState(false);

  const toggleMobileSidebar = () => setIsMobileSidebarToggle(prev => !prev);
  const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);

  return (
    <div className="h-screen flex flex-col">
      <AdminNavbar isMobileSidebarCollapsed={isMobileSidebarToggle} toggleMobileSidebar={toggleMobileSidebar} />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar isCollapsed={isSidebarCollapsed} isMobileSidebarVisible={isMobileSidebarToggle} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow p-4 transition-all duration-300 ${isSidebarCollapsed ? "md:ml-5 ml-3" : "ml-50"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;