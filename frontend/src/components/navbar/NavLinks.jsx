import { NavLink } from "react-router-dom";
import { FaHome, FaBookOpen, FaInfo } from "react-icons/fa";


const NavLinks = ({ toggle }) => {
  const baseClasses = "flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200";
  const activeClasses = "bg-blue-600 text-white shadow";
  const inactiveClasses = "text-gray-700 hover:bg-blue-100 hover:text-blue-600";

  return (
    <>
      <li onClick={toggle}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li onClick={toggle}>
        <NavLink
          to="/entries"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaBookOpen />
          Your Entries
        </NavLink>
      </li>
      <li onClick={toggle}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`
          }
        >
          <FaInfo />
          About
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;

