import { FiShoppingBag } from "react-icons/fi";

function TopPlantCard({ plant }) {
    return (
        <div className="relative h-160 w-108 mb-20  rounded-[50px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] backdrop-blur-[10px]">

            {/* Plant Image */}
            <div className="flex justify-center">
                <img
                    src={plant.image}
                    alt={plant.name}
                    className="-mt-30 h-114.75 w-114.75 object-contain"
                />
            </div>

            {/* Content */}
            <div className="px-15">

                <h3 className="font-['Inter'] text-[38px] font-normal leading-[100%] text-white/75">
                    {plant.name}
                </h3>

                <p className="mt-4 text-[24px] leading-[100%] text-white/75">
                    {plant.description}
                </p>

                <div className="mt-8 flex items-center justify-between">

                    <h4 className="font-['Inter'] text-[38px] font-normal leading-[100%] text-white/75">
                        {plant.price}
                    </h4>

                    <button className="flex h-13.75 w-13.75 items-center justify-center rounded-xl border-2 border-white/20 text-white/75 transition hover:bg-white hover:text-black">
                        <FiShoppingBag className="text-[24px]" />
                    </button>

                </div>

            </div>

        </div>
    );
}

export default TopPlantCard;