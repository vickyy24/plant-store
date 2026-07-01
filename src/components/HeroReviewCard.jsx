import reviewerAvatar from "../assets/images/reviewerAvatar.png";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

function HeroReviewCard() {
    return (
        <div
            className="
                w-67.5 rounded-[28px]
                border border-white/20
                bg-white/8
                backdrop-blur-[14px]
                p-4

                sm:w-77.5

                lg:h-59.25
                lg:w-102.25
                lg:rounded-[40px]
                lg:p-6
            "
        >
            {/* Top */}
            <div className="flex items-center gap-4">

                <img
                    src={reviewerAvatar}
                    alt="Reviewer"
                    className="
                        h-12 w-12 rounded-full object-cover

                        lg:h-16
                        lg:w-16
                    "
                />

                <div>

                    <h3
                        className="
                            font-['Inter']
                            text-[18px]
                            font-normal
                            text-white

                            lg:text-[22px]
                        "
                    >
                        Ronnie Hamill
                    </h3>

                    <div className="mt-1 flex items-center gap-1 text-[#FFF84E]">

                        <FaStar className="text-[11px] lg:text-[15px]" />
                        <FaStar className="text-[11px] lg:text-[15px]" />
                        <FaStar className="text-[11px] lg:text-[15px]" />
                        <FaStar className="text-[11px] lg:text-[15px]" />
                        <FaStarHalfAlt className="text-[11px] lg:text-[15px]" />

                    </div>

                </div>

            </div>

            {/* Review */}

            <p
                className="
                    mt-4
                    font-['Inter']
                    text-[14px]
                    font-normal
                    leading-[1.4]
                    text-white/75

                    lg:mt-6
                    lg:text-[17px]
                    lg:leading-tight
                "
            >
                I can't express how thrilled I am with my new natural plants!
                They bring such a fresh and vibrant energy to my home.
            </p>

        </div>
    );
}

export default HeroReviewCard;