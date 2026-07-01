import { FiPlay } from "react-icons/fi";
import heroBg from "../assets/images/heroBg.jpg";
import trendyPlant1 from "../assets/images/trendyPlant1.png";
import trendyPlant2 from "../assets/images/trendyPlant2.png";

import HeroReviewCard from "./HeroReviewCard";
import HeroPlantCard from "./HeroPlantCard";
import TrendyPlants from "./TrendyPlants";

function Hero() {
    const plants = [
        {
        id: 1,
        name: "Aglaonema plant",
        description:
            "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
        price: "Rs. 300/-",
        image: trendyPlant1,
        },
        {
        id: 2,
        name: "Plantain Lilies",
        description:
            "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.",
        price: "Rs. 380/-",
        image: trendyPlant1,
        },
        {
        id: 3,
        name: "Cactus",
        description:
            "It is known for their ability to thrive in arid environments.",
        price: "Rs. 259/-",
        image: trendyPlant1,
        },
        {
        id: 3,
        name: "Cactus",
        description:
            "It is known for their ability to thrive in arid environments.",
        price: "Rs. 259/-",
        image: trendyPlant1,
        },
        {
        id: 3,
        name: "Cactus",
        description:
            "It is known for their ability to thrive in arid environments.",
        price: "Rs. 259/-",
        image: trendyPlant1,
        },
        {
        id: 3,
        name: "Cactus",
        description:
            "It is known for their ability to thrive in arid environments.",
        price: "Rs. 259/-",
        image: trendyPlant1,
        },
    ];

    return (
        <section className="relative min-h-screen  bg-[#1B2316]">
            {/* Background Image */}
            <img src={heroBg} alt="Hero Background" className="absolute top-0 left-0 h-full w-full object-cover lg:h-648 lg:w-432 lg:-top-50 lg:left-1/2 lg:-translate-x-1/2"/>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-[#1B2316]/30"></div>

            {/* Main Container */}
            <div className="relative z-10 mx-auto grid min-h-screen grid-cols-1 max-w-[1728px] px-4 pt-24 sm:px-6 sm:pt-28 md:px-8 md:pt-32 lg:grid-cols-2 lg:px-10 lg:pt-0">

                {/* Left Section */}
                <div className="flex flex-col justify-start pt-20 sm:pt-24 md:pt-28 lg:justify-center lg:pt-50">

                    {/* Hero Content */}
                    <div className="w-full lg:w-180">

                        <h1 className="font-['Inter'] text-[48px] font-semibold leading-[0.92] tracking-[-1px] text-white/80 sm:text-[60px] md:text-[76px] lg:text-[100px] lg:tracking-[-3px]">
                            Earth's Exhale
                        </h1>

                        <p className="mt-3 w-full max-w-full font-['Inter'] text-[15px] font-normal leading-relaxed text-white/75 sm:text-[17px] md:max-w-130 md:text-[18px] lg:mt-4 lg:w-160 lg:max-w-none lg:text-[19px] lg:leading-tight">
                            "Earth Exhale" symbolizes the purity and vitality of the Earth's
                            natural environment and its essential role in sustaining life.
                        </p>

                        <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 lg:mt-4">
                            <button className="flex h-10 w-32 items-center justify-center rounded-lg border-2 border-white text-base font-normal text-white/75 transition duration-300 hover:bg-white hover:text-black sm:h-11 sm:w-36 sm:text-lg lg:h-14 lg:w-50 lg:text-[28px]">
                                Buy Now
                            </button>

                            <button className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white/75 transition duration-300 hover:bg-white hover:text-black sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16">
                                <FiPlay className="text-base sm:text-lg lg:text-[34px]" />
                            </button>

                            <span className="font-['Indie_Flower'] text-[18px] text-white/75 sm:text-[20px] md:text-[22px] lg:text-[25px]">
                                Live Demo...
                            </span>
                        </div>
                    </div>

                    {/* Review Card */}
                    <div className="mt-10 lg:mt-20">
                        <HeroReviewCard />
                    </div>

                </div>

                {/* Right Section */}
                <div className="hidden lg:flex items-start justify-end pt-40">
                    <HeroPlantCard />
                </div>

            </div>
            <TrendyPlants />
        </section>
        
    );
}

export default Hero;
