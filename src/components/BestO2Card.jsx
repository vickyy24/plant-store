import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import aglaonemaPlant from "../assets/images/aglaonemaPlant.png";

function BestO2Card() {
    return (
        <>
            <section className="relative mx-10 mt-40">

                <div className="relative h-120 rounded-[80px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] backdrop-blur-[10px]">

                    {/* Plant Image */}
                    <img
                        src={aglaonemaPlant}
                        alt="Aglaonema Plant"
                        className="absolute -top-22 h-140 w-140 object-contain"
                    />

                    {/* Content */}
                    <div className="absolute right-10 top-24">

                        <h2 className="w-200 font-['Inter'] text-[55px] font-semibold leading-[100%] text-white">
                            We Have Small And Best O2 Plants Collection's
                        </h2>

                        <p className="mt-6 w-180 font-['Inter'] text-[20px] font-normal leading-[100%] text-white/75">
                            Bring freshness into your home with our carefully selected oxygen-rich plants. They improve air quality, enhance your interior, and create a calm and healthy environment for everyday living.
                        </p>

                        <div className="mt-10 flex items-end justify-between">

                            <button className="h-16 w-54.25 rounded-xl border-2 border-white text-[28px] text-white transition hover:bg-white hover:text-black">
                                Explore
                            </button>

                            <div className="flex items-center gap-8">

                                <FiChevronLeft className="cursor-pointer text-[30px] text-white/75" />

                                <span className="font-['Inter'] text-[20px] text-white/75">
                                    01/04
                                </span>

                                <FiChevronRight className="cursor-pointer text-[30px] text-white/75" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Bottom Dots */}
            <div className="mt-8 flex justify-center gap-3">

                <span className="h-2 w-8 rounded-full bg-white"></span>

                <span className="h-2 w-2 rounded-full bg-white"></span>

                <span className="h-2 w-2 rounded-full bg-white"></span>

            </div>
        </>
    );
}

export default BestO2Card;