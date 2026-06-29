import { useState } from "react";
import { FiSearch, FiShoppingBag, FiChevronDown, FiX,} from "react-icons/fi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import logo from "../assets/images/logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <nav className="absolute top-0 left-0 z-50 w-full">

            <div className="flex h-24 items-center justify-between px-4 md:px-8 lg:px-14 xl:px-20">

                <div className="flex cursor-pointer items-center gap-2">

                    <img  src={logo}  alt="FloraVision"  className="h-10 w-auto md:h-11 lg:h-12"/>

                    <h1 className="font-['Inter'] text-xl font-black text-white opacity-75 md:text-2xl lg:text-[28px]">
                        FloraVision.
                    </h1>

                </div>

                <ul className="hidden items-center gap-8 lg:flex xl:gap-12">

                    <li className="cursor-pointer font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300">
                        Home
                    </li>

                    <li className="flex cursor-pointer items-center gap-1 font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300">

                        Plants Type

                        <FiChevronDown className="text-base" />

                    </li>

                    <li className="cursor-pointer font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300">
                        More
                    </li>

                    <li className="cursor-pointer font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300">
                        Contact
                    </li>

                </ul>

                <div className="flex items-center gap-3 md:gap-5 lg:gap-6">

                    <FiSearch className="cursor-pointer text-xl text-white transition hover:text-green-300 md:text-2xl" />

                    <FiShoppingBag className="cursor-pointer text-xl text-white transition hover:text-green-300 md:text-2xl" />

                    {isMenuOpen ? (
                        <FiX
                            onClick={toggleMenu}
                            className="cursor-pointer text-2xl text-white transition hover:text-green-300 md:text-3xl lg:hidden"
                        />
                    ) : (
                        <HiOutlineMenuAlt4
                            onClick={toggleMenu}
                            className="cursor-pointer text-2xl text-white transition hover:text-green-300 md:text-3xl lg:hidden"
                        />
                    )}

                </div>

            </div>

            {isMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-[#1B4332]/95 backdrop-blur-md lg:hidden">

                    <ul className="flex flex-col items-center gap-8 py-8">

                        <li
                            onClick={toggleMenu}
                            className="cursor-pointer font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300"
                        >
                            Home
                        </li>

                        <li
                            onClick={toggleMenu}
                            className="flex cursor-pointer items-center gap-1 font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300"
                        >
                            Plants Type

                            <FiChevronDown className="text-base" />

                        </li>

                        <li
                            onClick={toggleMenu}
                            className="cursor-pointer font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300"
                        >
                            More
                        </li>

                        <li
                            onClick={toggleMenu}
                            className="cursor-pointer font-['Indie_Flower'] text-2xl text-white transition hover:text-green-300"
                        >
                            Contact
                        </li>

                    </ul>

                </div>
            )}

        </nav>
    );
}

export default Navbar;