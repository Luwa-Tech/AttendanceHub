import { NavLink} from "react-router-dom";

const SidebarItem = ({ href, label, isCollapsed, icon }) => {

  return (
    <li className={`group`}>
      <NavLink to={href} className=  {({ isActive }) => `flex items-center py-2.5 px-4 hover:bg-secondary-500 transition-all duration-300  ${ isActive ? 'bg-secondary-500' : '' }`}>
        {icon}
        <span title={label} className={`text-white text-[.76rem] ml-4 ${isCollapsed ? "hidden" : "block"} transition-all duration-300`}>{label}</span>
      </NavLink>
    </li>
  );
};

export default SidebarItem;