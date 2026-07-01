import { FiShoppingBag } from "react-icons/fi";

import aglaonemaPlant from "../assets/images/aglaonemaPlant.png";
import trendyPlant1 from "../assets/images/trendyPlant1.png";
import cactus from "../assets/images/cactus.png";
import swissCheese from "../assets/images/swissCheese.png";
import sansevieria from "../assets/images/sansevieria.png";
import agave from "../assets/images/agave.png";

const plants = [
    {
        id: 1,
        name: "Aglaonema plant",
        description:
            "The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care.",
        price: "Rs. 300/-",
        image: aglaonemaPlant,
        icon: FiShoppingBag,
    },
    {
        id: 2,
        name: "Plantain Lilies",
        description:
            "Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes and sizes.",
        price: "Rs. 380/-",
        image: trendyPlant1,
        icon: FiShoppingBag,
    },
    {
        id: 3,
        name: "Cactus",
        description:
            "It is known for their ability to thrive in arid environments.",
        price: "Rs. 259/-",
        image: cactus,
        icon: FiShoppingBag,
    },
    {
        id: 4,
        name: "Swiss cheese Plant",
        description:
            "It is a popular tropical houseplant known for its distinctive perforated leaves.",
        price: "Rs. 400/-",
        image: swissCheese,
        icon: FiShoppingBag,
    },
    {
        id: 5,
        name: "Sansevieria plant",
        description:
            "It is a popular indoor plant admired for its striking appearance and low-maintenance nature.",
        price: "Rs. 450/-",
        image: sansevieria,
        icon: FiShoppingBag,
    },
    {
        id: 6,
        name: "Agave plant",
        description:
            "The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.",
        price: "Rs. 359/-",
        image: agave,
        icon: FiShoppingBag,
    },
];

export default plants;