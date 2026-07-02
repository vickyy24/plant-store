import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import plants from "../data/plants";
import TopPlantCard from "../components/TopPlantCard";

import reviews from "../data/reviews";
import ReviewCard from "../components/ReviewCard";

import BestO2Card from "../components/BestO2Card";

import Footer from "../components/Footer";

function Home() {
    return (
        <div className=" bg-[#182114]">

            <Navbar />
            <Hero />

            <section className="relative mt-20 lg:mt-50">

                <h2 className="text-center font-['Inter'] text-[34px] font-semibold text-white sm:text-[42px] md:text-[48px] lg:text-[55px]">
                    Our Top Selling Plants
                </h2>

                <div className="mx-4 mt-10 grid grid-cols-2 gap-4 sm:mx-6 sm:mt-12 sm:gap-6 md:mx-8 md:mt-16 md:gap-8 lg:mx-10 lg:mt-20 lg:grid-cols-3 lg:gap-10">

                    {plants.map((plant) => (
                        <TopPlantCard
                            key={plant.id}
                            plant={plant}
                        />
                    ))}

                </div>

            </section>

            <h2 className="mt-8 text-center font-['Inter'] text-[55px] font-semibold text-white">
                Customer Review
            </h2>

            <div className="mx-10 mt-20 flex justify-between">

                {reviews.map((review) => (
                    <ReviewCard
                        key={review.id}
                        review={review}
                    />
                ))}

            </div>

            <BestO2Card/>
            <Footer />

        </div>
    );
}

export default Home;