import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function ReviewCard({ review }) {
    return (
        <div className="relative h-59.25 w-102.25 rounded-[40px] border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_100%)] p-6 backdrop-blur-[14px]">

            {/* Top */}
            <div className="flex items-center gap-4">

                <img
                    src={review.image}
                    alt={review.name}
                    className="h-16 w-16 rounded-full object-cover"
                />

                <div>

                    <h3 className="font-['Inter'] text-[22px] font-normal text-white/75">
                        {review.name}
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-[#FFF84E]">

                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        {review.rating === 5 ? <FaStar /> : <FaStarHalfAlt />}

                    </div>

                </div>

            </div>

            {/* Review */}
            <p className="mt-6 font-['Inter'] text-[17px] font-normal leading-tight text-white/75">
                {review.review}
            </p>

        </div>
    );
}

export default ReviewCard;