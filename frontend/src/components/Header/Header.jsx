import { useContext, useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";

import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user,role,token}=useContext(authContext);

  const handleStickyHeader = ()=>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }
  useEffect(()=>{
    handleStickyHeader();

    return ()=>window.removeEventListener('scroll',handleStickyHeader);
  });
  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')
  return (
    <header className="header flex items-center ref={headerRef}">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" className="mx-auto" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-blue"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {
              token&&user ? <div>
              <Link to={`${  role==='doctor'?'/doctors/profile/me': '/users/profile/me'}`}>
              <figure className="flex flex-col items-center">
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 text-gray-600 cursor-pointer mb-2">
    {user?.photo ? (
      <img src={user.photo} className="w-full h-full object-cover rounded-full" alt="Profile" />
    ) : (
      <span className="text-xl font-bold">{user?.name ? user.name[0].toUpperCase() : 'U'}</span>
    )}
  </div>
  <h1 className="text-sm font-medium"></h1>
</figure>

               
              </Link>
            </div> : <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex-items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>
            }
            
            
            

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
