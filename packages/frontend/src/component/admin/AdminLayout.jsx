import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AdminNavbar from "./AdminNavbar";
import axios from "axios";

const AdminLayout = () => {
  const [userData, setUserData] = useState([]);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarToggle, setIsMobileSidebarToggle] = useState(false);

  const toggleMobileSidebar = () => setIsMobileSidebarToggle(prev => !prev);
  const toggleSidebar = () => setIsSidebarCollapsed(prev => !prev);

  const getData = async () => {
    try {
      const res = await axios.get("https://cities-qd9i.onrender.com/agents")
      console.log(res)
      setUserData(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="h-screen flex flex-col">
      <AdminNavbar isMobileSidebarCollapsed={isMobileSidebarToggle} toggleMobileSidebar={toggleMobileSidebar} />
      <div className="flex flex-grow overflow-hidden">
        <Sidebar isCollapsed={isSidebarCollapsed} isMobileSidebarVisible={isMobileSidebarToggle} toggleSidebar={toggleSidebar} />
        <div className={`flex-grow p-4 transition-all duration-300 ${isSidebarCollapsed ? "md:ml-5 ml-3" : "ml-50"}`}>
          <Outlet context={userData}/>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;