import { Amphora, CalendarCheck2, Croissant, Flame, Ham, Milk, PackagePlus, TentTree } from "lucide-react";
import { GiFarmer, GiPowder } from "react-icons/gi";
import { PiDogFill } from "react-icons/pi";

// Navbar Tabs
export const navTabs = [
  { tabName: "Home", name: "home" },
  { tabName: "Services", name: "services" },
  { tabName: "About", name: "about" },
  { tabName: "Offer", name: "offer" },
];

// Services
export const serviceCategories = [
  {
    serviceNo: 1,
    title: "Daily Products",
    icon: CalendarCheck2,
    services: [
      {
        service: "Premium Quality Milk",
        examples: "(Goat, Desi Cow, Sahiwal, Coconut)",
        description:
          "Fresh, unadulterated milk from trusted sources. Each variety brings unique nutrition and taste to your home.",
        icon: Milk,
      },
      {
        service: "Fresh Eggs and Meat",
        examples: "(Desi, RIR, Black Australorp, Kadaknath)",
        description:
          "Naturally raised eggs and meat, rich in protein and taste — clean, healthy, and responsibly sourced.",
        icon: Ham,
      },
      {
        service: "Pure Natural Oils",
        examples: "(Groundnut, Coconut, Mustard, Sesame)",
        description:
          "Cold-pressed oils extracted from seeds and nuts, retaining full aroma and nutrients — chemical-free and pure.",
        icon: Amphora,
      },
    ],
  },
  {
    serviceNo: 2,
    title: "Speciality Products",
    icon: Flame,
    services: [
      {
        service: "Dry Powders",
        examples: "(Moringa, Curry Leaves, etc.)",
        description:
          "Natural, sun-dried powders rich in nutrients — ideal for cooking, health supplements, and traditional remedies.",
        icon: GiPowder,
      },
      {
        service: "Silage Supply across India",
        description:
          "High-quality, fermented green fodder for livestock — delivered reliably to ensure year-round nutrition.",
        icon: Croissant,
      },
      {
        service: "Premium Dog Breeds",
        description:
          "Well-bred, healthy, and pure pedigree dogs — sourced with proper care and documentation.",
        icon: PiDogFill,
      },
    ],
  },
  {
    serviceNo: 3,
    title: "Additional Services",
    icon: PackagePlus,
    services: [
      {
        service: "Dog Keep Service",
        examples: "(₹500/day)",
        description:
          "Secure and caring boarding services for your dogs while you’re away — daily care, feeding, and monitoring.",
        icon: PiDogFill,
      },
      {
        service: "Professional Training Services",
        description:
          "Expert-led training for pets or livestock — from obedience to advanced behavioral training.",
        icon: GiFarmer,
      },
      {
        service: "Tourism & Resort Facilities",
        description:
          "Relax, explore, and enjoy countryside experiences with our nature-integrated resort and eco-tourism offerings.",
        icon: TentTree,
      },
    ],
  },
];
