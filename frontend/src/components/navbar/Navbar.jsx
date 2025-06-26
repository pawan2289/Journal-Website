import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ThemeController from "../ThemeController";
import NavProfile from "./NavProfile";
import SearchBox from "./SearchBox";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 w-full sticky top-0 z-10">
      <div className="navbar-start">
        <div className="lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
          </label>
        </div>
        <Link className="btn btn-ghost text-xl pl-0" to="/">
          <img className="w-50 h-15" src={logo} alt="logo" />
        </Link>
      </div>

      <div className="hidden lg:flex items-center justify-center flex-none">
        <ul className="menu menu-horizontal space-x-4">
          <NavLinks />
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <div className="hidden md:flex">
          <SearchBox />
        </div>
        <ThemeController />
        <NavProfile />
      </div>
    </div>
  );
};
export default Navbar;
