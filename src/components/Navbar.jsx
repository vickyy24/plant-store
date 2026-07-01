import { useState } from "react";
import { NavLink } from "react-router-dom";

import { FiSearch, FiShoppingBag, FiChevronDown, FiX } from "react-icons/fi";

import { HiOutlineMenuAlt4 } from "react-icons/hi";

import logo from "../assets/images/logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <nav className="absolute inset-x-0 top-0 z-50">

            <div className="mx-auto flex h-24 max-w-[1728px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">

                {/* Logo */}
                <div className="flex items-center gap-2">

                    <img src={logo} alt="FloraVision" className="h-8 w-auto sm:h-9 md:h-11 lg:h-12"/>

                    <h1 className="font-['Inter'] text-[18px] font-black text-white sm:text-[20px] md:text-[24px] lg:text-[28px] opacity-75">
                        FloraVision.
                    </h1>

                </div>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-14 lg:flex">

                    <li>
                        <NavLink to="/" className="font-['Indie_Flower'] text-[22px] text-white transition duration-300 hover:text-green-300">
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className="flex items-center gap-1 font-['Indie_Flower'] text-[22px] text-white transition duration-300 hover:text-green-300">
                            Plants Type
                            <FiChevronDown className="text-base" />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className="font-['Indie_Flower'] text-[22px] text-white transition duration-300 hover:text-green-300">
                            More
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/" className="font-['Indie_Flower'] text-[22px] text-white transition duration-300 hover:text-green-300">
                            Contact
                        </NavLink>
                    </li>

                </ul>

                {/* Icons */}
                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-5">

                    <FiSearch className="cursor-pointer text-[22px] text-white transition duration-300 hover:text-green-300 sm:text-[24px] md:text-[26px] lg:text-3xl opacity-75" />

                    <FiShoppingBag className="cursor-pointer text-[22px] text-white transition duration-300 hover:text-green-300 sm:text-[24px] md:text-[26px] lg:text-3xl opacity-75" />

                    {isMenuOpen ? (
                        <FiX
                            onClick={toggleMenu}
                            className="cursor-pointer text-[22px] text-white transition duration-300 hover:text-green-300 sm:text-[24px] md:text-[26px] lg:hidden"
                        />
                    ) : (
                        <HiOutlineMenuAlt4 onClick={toggleMenu}
                            className="cursor-pointer text-[22px] text-white transition duration-300 hover:text-green-300 sm:text-[24px] md:text-[26px] lg:hidden"
                        />
                    )}

                </div>

            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-[#1B4332]/95 backdrop-blur-md lg:hidden">

                    <ul className="flex flex-col items-center gap-6 py-8">

                        <li>
                            <NavLink to="/" onClick={toggleMenu} className="font-['Indie_Flower'] text-xl text-white transition duration-300 hover:text-green-300">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/" onClick={toggleMenu} className="flex items-center gap-1 font-['Indie_Flower'] text-xl text-white transition duration-300 hover:text-green-300">
                                Plants Type
                                <FiChevronDown className="text-sm" />
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/" onClick={toggleMenu} className="font-['Indie_Flower'] text-xl text-white transition duration-300 hover:text-green-300">
                                More
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/" onClick={toggleMenu} className="font-['Indie_Flower'] text-xl text-white transition duration-300 hover:text-green-300">
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                </div>
            )}

        </nav>
    );
}

export default Navbar;