import { NavLink} from "react-router-dom";

const SidebarItem = ({ href, label, isCollapsed, icon, end }) => {

  return (
    <li className={`group`}>
      <NavLink to={href} end={end} className={({ isActive }) => `flex items-center py-2.5 px-4 hover:bg-[#c0c0c0] transition-all duration-300  ${ isActive ? 'bg-[#c0c0c0]' : '' }`}>
        {icon}
        <span title={label} className={`text-button-400 font-medium text-[.76rem] ml-4 ${isCollapsed ? "hidden" : "block"} transition-all duration-300`}>{label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;