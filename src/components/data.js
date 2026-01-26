import {
  PrinterIcon,
  PaintBrushIcon,
  SparklesIcon,
  CubeIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  LightBulbIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Core Printing Services",
  desc: "We blend traditional screen-printing expertise with modern digital technologies. From durable screen prints to vibrant digital graphics, we handle jobs of any size with precision, craftsmanship, and quality.",
  image: benefitOneImg,
  bullets: [
    {
      title: "🎨 Design",
      desc: "Creative concepts and layouts tailored to your branding needs. Our design team crafts expressive and strategic designs that bring your vision to life.",
      icon: <LightBulbIcon />,
    },
    {
      title: "🖌️ Screen Printing",
      desc: "Durable prints on apparel, signage, and promotional items. Perfect for bulk orders with consistent, high-quality results that stand the test of time.",
      icon: <PrinterIcon />,
    },
    {
      title: "🔵 Pad Printing",
      desc: "Precision printing for irregular or curved surfaces. Ideal for pens, USB drives, key rings, lighters, clocks, and specialty promotional items.",
      icon: <PaintBrushIcon />,
    },
    {
      title: "🌈 Digital Printing",
      desc: "Full-colour, high-resolution prints for marketing and branding. Fast and versatile for vinyl stickers, roll-up banners, posters, and canvas prints.",
      icon: <SparklesIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Advanced & Specialized Services",
  desc: "Beyond traditional printing, we offer cutting-edge technologies and specialized techniques. From permanent laser engraving to vibrant UV DTF printing, we provide solutions for every need.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "🔥 Laser Engraving",
      desc: "Permanent, detailed engraving on metals, wood, perspex, and other substrates. Perfect for custom invitations, awards, and personalized keepsakes.",
      icon: <FireIcon />,
    },
    {
      title: "🧵 Sublimation & 👕 Heat Transfer",
      desc: "Vivid, long-lasting prints on fabrics, ceramics, and specialty items. Sublimation for mugs, clocks, tiles, and plates. Heat transfer for flexible printing on apparel and promotional products.",
      icon: <DocumentTextIcon />,
    },
    {
      title: "✨ UV DTF Printing",
      desc: "Advanced direct-to-film printing for vibrant, durable graphics. This cutting-edge technology delivers exceptional quality and versatility for modern branding needs.",
      icon: <CheckBadgeIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
