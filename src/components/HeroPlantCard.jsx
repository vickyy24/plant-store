import { FiArrowRight } from "react-icons/fi";
import heroPlant from "../assets/images/aglaonemaPlant.png";

function HeroPlantCard() {
    return (
        <div className="relative h-161 w-lg  rounded-[80px] border border-white/5 bg-white/5 backdrop-blur-[15px]">
            

            {/* Plant Image */}
            <img src={heroPlant} alt="Aglaonema Plant"
                className=" absolute -top-20 left-1/2 h-114.75 w-114.75 -translate-x-1/2 object-contain pointer-events-none select-none"
            />

            {/* Content */}
            <div className="absolute left-15.25 top-96.5">

                <p className="font-['Inter'] text-[23px] font-normal leading-none text-white/75">
                    Indoor Plant
                </p>

                <div className="mt-3 flex items-center gap-10">

                    <h3 className="font-['Inter'] text-[38px] font-normal leading-none text-white/75">
                        Aglaonema plant
                    </h3>

                    <FiArrowRight className="text-[34px] text-white/75" />

                </div>

                <button
                    className="mt-7 h-16 w-54.25 rounded-xl border-2 border-white font-['Inter'] text-[28px] font-normal text-white/75 transition hover:bg-white hover:text-black">
                    Buy Now
                </button>

                <div className="mt-8.5 flex justify-center gap-3">

                    <span className="h-1.5 w-7 rounded-full bg-white"></span>

                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

                    <span className="h-1.5 w-1.5 rounded-full bg-white"></span>

                </div>

            </div>
        </div>
    );
}

export default HeroPlantCard;