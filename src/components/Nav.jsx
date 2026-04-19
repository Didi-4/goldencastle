import { useState } from "react";

import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";



function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutUs" },
    { name: "Gallery", path: "/Gallery" },
    { name: "Contact", path: "/Contact" },
  ];  

    const toggleMenu = () => {
        // Logic to toggle the menu visibility
        console.log("Menu toggled");
        setIsMenuOpen(!isMenuOpen);

    }
  
  return (

  

    <>
      {/* SMALL SCREENS DISPLAY */}
      <nav onClick={toggleMenu} className=" z-10 md:hidden">
        <FaBars className="text-2xl h-full justify-center text-accent cursor-pointer" />
        {isMenuOpen && (<div className="absolute w-50 h-full top-0 right-0 bg-secondary">
                          <FaBarsStaggered className="text-2xl absolute top-8 right-5 text-accent cursor-pointer"/>
                          <div className="flex flex-col h-full justify-center items-center space-y-6  text-accent font-logoFont text-base font-bold">
                            {links.map((link) => {
                              return(
                                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} key={link.name} to={link.path}>{link.name}</NavLink>
                              )
                            })}
                          </div>
                      </div>)}
      </nav>





        {/* LARGE SCREENS DISPLAY */}
        <nav className="hidden md:flex items-center space-x-4 text-accent font-logoFont text-base font-bold">
            {links.map((link) => {
              return(
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} key={link.name} to={link.path}>{link.name}</NavLink>
              )
            })}
        </nav>
    
    </>
  );
}


export default Nav;