import SidebarItem from "./SidebarItem";
import { MdManageAccounts, MdOutlineUpdate, MdViewList } from "react-icons/md";
import { FaChevronRight, FaChevronLeft  } from "react-icons/fa";
//import useRenderHook from "../../hooks/useRenderHook";

const Sidebar = ({ isCollapsed, isMobileSidebarVisible, toggleSidebar }) => {
  //const {isMobile} = useRenderHook();
  const sidebarItems = [
    { href: "/", label: "Employees", icon: < MdManageAccounts className="text-white w-7 h-7"/>},
    { href: "/admin_dashboard/view_attendance", label: "View", icon: < MdViewList className="text-white w-7 h-7"/>},
    { href: "/admin_dashboard/update_attendance", label: "Update", icon: < MdOutlineUpdate className="text-white w-7 h-7"/>},
  ];

  return (
    <aside className={`${isCollapsed ? "md:w-14 w-10" : "md:w-64 w-51"} h-full relative bg-[#5d5ddb] transition-all duration-300 ${isMobileSidebarVisible ? "block" : "hidden"} md:block`}>
      <button title="toggle" onClick={toggleSidebar} className="absolute -right-[-0.1rem] border-0 hidden md:block top-0 w-6 h-6  rounded-full hover:bg-opacity-[0.5] transition cursor-pointer text-white">
                {
                  isCollapsed ? (
                    <FaChevronRight />
                  ) : (
                    <FaChevronLeft />
                  )
                }
      </button>
      <nav className="mt-[1.2rem] md:mt-[5rem]">
        <ul>
          {sidebarItems.map((item) => (
            <SidebarItem key={item.href} href={item.href} label={item.label} isCollapsed={isCollapsed} icon={item.icon} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;