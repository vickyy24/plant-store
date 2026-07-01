import { FiShoppingBag } from "react-icons/fi";

import TrendyPlant1 from "../assets/images/trendyPlant1.png";
import TrendyPlant2 from "../assets/images/trendyPlant2.png";

function TrendyPlants() {
    return (
        <section className="relative lg:mt-40">

            {/* Heading */}
            <h2 className="relative z-20 text-center font-['Inter'] text-[34px] font-semibold text-white sm:text-[44px] lg:text-[55px]">
                Our Trendy plants
            </h2>

            {/* Cards Wrapper */}
            <div className="mt-4 grid grid-cols-2 gap-3 mx-4 lg:block">

                {/* First Card */}
                <div className="relative rounded-3xl border-2 border-white/5 bg-white/5 backdrop-blur-2xl lg:mx-auto lg:mt-20 lg:flex lg:h-120 lg:w-[92%] lg:max-w-[1619px] lg:flex-row lg:items-center lg:rounded-[151px]">

                    {/* Plant */}
                    <div className="relative flex h-28 w-full items-center justify-center lg:block lg:h-auto lg:w-[42%]">

                        <img
                            src={TrendyPlant1}
                            alt="Trendy Plant"
                            className="relative z-10 -mt-2 h-24 object-contain sm:h-28 md:h-32 lg:absolute lg:-left-2 lg:-top-105 lg:h-183 lg:w-150.25"
                        />

                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-2 text-center lg:flex-1 lg:px-0 lg:pr-28 lg:text-left">

                        <h3 className="font-['Inter'] text-[12px] font-semibold text-white sm:text-[14px] lg:text-[38px]">
                            For Your Desks Decorations
                        </h3>

                        <p className="mt-2 text-[9px] leading-relaxed text-white/80 sm:text-[10px] lg:w-183 lg:text-[20px]">
                            I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!
                        </p>

                        <h4 className="mt-2 font-['Inter'] text-[14px] font-semibold text-white sm:text-[16px] lg:mt-6 lg:text-[38px]">
                            Rs. 599/-
                        </h4>

                        <div className="mt-3 flex items-center justify-center gap-2 lg:mt-7 lg:justify-start">

                            <button className="h-7 w-18 rounded-md border-2 border-white text-[10px] text-white transition hover:bg-white hover:text-black lg:h-16 lg:w-54.25 lg:rounded-xl lg:text-[28px]">
                                Explore
                            </button>

                            <button className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-white text-white transition hover:bg-white hover:text-black lg:h-16 lg:w-16 lg:rounded-xl">
                                <FiShoppingBag className="text-[10px] lg:text-[28px]" />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Second Card */}
                <div className="relative rounded-3xl border-2 border-white/5 bg-white/5 backdrop-blur-2xl lg:mx-auto lg:mt-24 lg:flex lg:h-120 lg:w-[92%] lg:max-w-[1619px] lg:flex-row lg:items-center lg:rounded-[151px]">

                    {/* Plant */}
                    <div className="relative flex h-28 w-full items-center justify-center lg:order-2 lg:block lg:h-auto lg:w-[42%]">

                        <img
                            src={TrendyPlant2}
                            alt="Trendy Plant"
                            className="relative z-30 mt-1 h-24 object-contain sm:h-28 md:h-32 lg:absolute lg:right-16 lg:-top-85 lg:mt-0 lg:h-140"
                        />

                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-2 text-center lg:order-1 lg:flex-1 lg:px-20 lg:pt-0 lg:text-left">

                        <h3 className="font-['Inter'] text-[12px] font-semibold text-white sm:text-[14px] lg:text-[38px]">
                            For Your Desks Decorations
                        </h3>

                        <p className="mt-2 text-[9px] leading-relaxed text-white/80 sm:text-[10px] lg:w-183 lg:text-[20px]">
                            The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming.
                        </p>

                        <h4 className="mt-2 font-['Inter'] text-[14px] font-semibold text-white sm:text-[16px] lg:mt-6 lg:text-[38px]">
                            Rs. 399/-
                        </h4>

                        <div className="mt-3 flex items-center justify-center gap-2 lg:mt-7 lg:justify-start">

                            <button className="h-7 w-18 rounded-md border-2 border-white text-[10px] text-white transition hover:bg-white hover:text-black lg:h-16 lg:w-54.25 lg:rounded-xl lg:text-[28px]">
                                Explore
                            </button>

                            <button className="flex h-7 w-7 items-center justify-center rounded-md border-2 border-white text-white transition hover:bg-white hover:text-black lg:h-16 lg:w-16 lg:rounded-xl">
                                <FiShoppingBag className="text-[10px] lg:text-[28px]" />
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default TrendyPlants;