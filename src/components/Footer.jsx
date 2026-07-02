import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/images/logo.png";

function Footer() {
    return (
        <footer className="mt-40 mx-10 pb-10">

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.7fr_1.3fr]">

                {/* Left */}
                <div>

                    <div className="flex items-center gap-3">

                        <img
                            src={logo}
                            alt="FloraVision"
                            className="h-12 w-12 object-contain lg:h-16 lg:w-16"
                        />

                        <h2 className="font-['Inter'] text-[26px] font-bold text-white lg:text-[42px]">
                            FloraVision.
                        </h2>

                    </div>

                    <p className="mt-8 max-w-105 font-['Inter'] text-[16px] leading-relaxed text-white/75 lg:text-[24px]">
                        "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
                    </p>

                    <div className="mt-14 flex gap-8">

                        <a href="#" className="text-white transition hover:text-green-400">
                            <FaFacebookF className="text-[22px] lg:text-[30px]" />
                        </a>

                        <a href="#" className="text-white transition hover:text-green-400">
                            <FaTwitter className="text-[22px] lg:text-[30px]" />
                        </a>

                        <a href="#" className="text-white transition hover:text-green-400">
                            <FaLinkedinIn className="text-[22px] lg:text-[30px]" />
                        </a>

                    </div>

                </div>

                {/* Center */}
                <div className="lg:justify-self-center">

                    <h3 className="font-['Inter'] text-[22px] font-semibold text-white lg:text-[28px]">
                        Quick Link's
                    </h3>

                    <div className="mt-8 flex flex-col gap-5">

                        <a href="#" className="font-['Inter'] text-[18px] text-white underline lg:text-[22px]">
                            Home
                        </a>

                        <a href="#" className="font-['Inter'] text-[18px] text-white underline lg:text-[22px]">
                            Type's Of plant's
                        </a>

                        <a href="#" className="font-['Inter'] text-[18px] text-white underline lg:text-[22px]">
                            Contact
                        </a>

                        <a href="#" className="font-['Inter'] text-[18px] text-white underline lg:text-[22px]">
                            Privacy
                        </a>

                    </div>

                </div>

                {/* Right */}
                <div className="w-full lg:justify-self-end">

                    <h3 className="font-['Inter'] text-[22px] font-semibold text-white lg:text-[28px]">
                        For Every Update.
                    </h3>

                    <div className="mt-8 flex w-full max-w-135">

                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="h-12 flex-1 rounded-l-lg border border-r-0 border-white bg-transparent px-4 font-['Inter'] text-[16px] text-white placeholder:text-white/60 outline-none lg:h-16 lg:text-[20px]"
                        />

                        <button
                            className="flex h-12 w-40 items-center justify-center rounded-r-lg border border-white bg-white font-['Inter'] text-[16px] font-semibold text-[#182114] lg:h-16 lg:w-44 lg:text-[18px]">
                            SUBSCRIBE
                        </button>

                    </div>

                    <p className="mt-20 font-['Inter'] text-[16px] text-white/75 lg:text-[20px]">
                        FloraVision © all right reserve
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;