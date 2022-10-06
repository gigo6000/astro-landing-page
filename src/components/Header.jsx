import NavMenu from "./NavMenu.jsx";
import { useState } from "react";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="container">
      <div className="flex py-5 px-3">
        <div className="flex items-center pt-3">
          <img src="images/logo.svg" alt="Snap Logo" />
        </div>
        <div className="flex-grow flex items-center z-20">
          <NavMenu />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls="sidebar"
            aria-label="Open Menu"
          >
            <img
              className="block lg:hidden"
              src="images/icon-menu.svg"
              alt="Menu"
            />
          </button>
          <Sidebar open={open} setOpen={setOpen} />
          <div className="hidden lg:flex lg:space-x-10 lg:items-center">
            <div className="hover:text-almost-black cursor-pointer">Login</div>
            <div>
              <button className="border-2 hover:border-almost-black hover:text-almost-black rounded-xl px-4 py-2">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
