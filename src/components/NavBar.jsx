"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import LoginForm from "./register/LoginForm";
import RegisterForm from "./register/RegisterForm";
function NavBar() {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [regIsOpen, setRegIsOpen] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleRegister = () => {
    setRegIsOpen(!regIsOpen);
    setIsOpen(false);
  };
  const handleLogin = () => {
    setIsOpen(!isOpen);
    setRegIsOpen(false);
  };
  const handleCloseLoginForm = () => {
    setIsOpen(false);
  };
  const handleCloseRegisterForm = () => {
    setRegIsOpen(false);
  };
  const handleClose = () => {
    setRegIsOpen(false);
    setIsOpen(false);
  };

  return (
    <div className=" w-full h-20 shadow-lg shadow-zinc-400   ">
      <div className=" flex  items-center justify-between w-full h-full px-2 2xl:px-16 ">
        <Link href="/" onClick={handleClose}>
          <img
            className=" w-28 h-20 object-fill"
            src="./log.png"
            alt="logo"
            onClick={handleClose}
          />
        </Link>
        <div className=" hidden md:flex ">
          <ul className=" hidden md:flex items-center">
            <Link href="/categories" onClick={handleClose}>
              <li className="list-none hover:border-b-purple-800 uppercase ml-6 text-sm hover:border-b-2">
                categorias
              </li>
            </Link>
            <Link href="/contact" onClick={handleClose}>
              <li className="list-none  hover:border-b-2 uppercase ml-6 text-sm hover:border-purple-800">
                contacto
              </li>
            </Link>{" "}
            <Link href="/about" onClick={handleClose}>
              <li className="list-none  hover:border-b-purple-800  uppercase text-sm mx-6 hover:border-b-2">
                About
              </li>
            </Link>
          </ul>
          <div className=" hidden md:flex items-center  justify-center ">
            <button
              className="  px-4  py-1 rounded-sm"
              onClick={handleRegister}
            >
              Registrarse
            </button>
            {regIsOpen && <RegisterForm onClose={handleCloseRegisterForm} />}
            <button onClick={handleLogin} className="  px-4  py-1 rounded-sm">
              ingresar
            </button>
            {isOpen && <LoginForm onClose={handleCloseLoginForm} />}
          </div>
        </div>
        <div
          onClick={handleNav}
          className=" md:hidden  text-purple-800 cursor-pointer"
        >
          <GiHamburgerMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav
            ? "md:hidden fixed z-[100] left-0 top-0 w-full h-screen bg-purple-900/80  "
            : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 z-[100] top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-gray-200 p-10 ease-in  dark:bg-slate-800  duration-500 overflow-auto   "
              : " fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between ">
              <div>
                <img
                  className=" w-20 h-18 object-fill"
                  src="./log.png"
                  alt="logo"
                />
              </div>
              <div
                onClick={handleNav}
                className=" rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer dark:text-gray-200 dark:bg-gray-900 dark:shadow-gray-700"
              >
                <IoMdClose className=" text-violet-700" />
              </div>
            </div>
          </div>
          <div className=" flex flex-col py-4">
            <ul className=" uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700"
                >
                  Home
                </li>
              </Link>
              <Link href="/categories">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700 "
                >
                  Categories
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700 "
                >
                  products
                </li>
              </Link>
              <Link href="/about">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700"
                >
                  About
                </li>
              </Link>
              <Link href="/contact">
                <li
                  onClick={() => setNav(false)}
                  className=" py-4 text-sm text-purple-700"
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default NavBar;
