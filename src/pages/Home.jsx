import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

import plants from "../data/plants";
import TopPlantCard from "../components/TopPlantCard";

function Home() {
    return (
        <div className=" bg-[#182114]">

            <Navbar />
            <Hero />

            <section className="relative lg:mt-50">

                <h2 className="text-center font-['Inter'] text-[55px] font-semibold text-white">
                    Our Top Selling Plants
                </h2>

                <div className="mx-10 mt-20 grid grid-cols-3 gap-10">
                    {plants.map((plant) => (
                        <TopPlantCard key={plant.id} plant={plant} />
                    ))}
                </div>

            </section>
        </div>
    );
}

export default Home;