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
  desc: "Where timeless printing expertise meets cutting-edge innovation. We transform your vision into stunning reality—from bold screen prints that command attention to vibrant digital graphics that captivate. Whether you need 10 pieces or 10,000, we deliver exceptional results with unwavering precision and unmatched quality that elevates your brand.",
  image: benefitOneImg,
  bullets: [
    {
      title: "🎨 Design",
      desc: "Unleash your brand's true colors! Our creative wizards turn your wildest ideas into jaw-dropping visuals that stop people in their tracks. We don't just design—we craft visual experiences that make hearts race and wallets open. From logos that scream 'look at me!' to complete brand worlds that tell your story, we paint success in every pixel and stroke.",
      icon: <LightBulbIcon />,
    },
    {
      title: "🖌️ Screen Printing",
      desc: "Colors that pop, prints that last! Our screen printing magic delivers eye-popping vibrancy that stays brilliant wash after wash, year after year. Whether you're outfitting a team of 10 or launching a campaign of 10,000, every single piece gets the star treatment. Bold, beautiful, and built to impress—that's the Kan Printers promise!",
      icon: <PrinterIcon />,
    },
    {
      title: "🔵 Pad Printing",
      desc: "Think it can't be printed? Challenge accepted! We're the masters of the impossible—turning pens, USB drives, key rings, and even the quirkiest shapes into branded masterpieces. Our precision pad printing conquers curves, angles, and surfaces that make others say 'no way.' Your brand, anywhere, beautifully!",
      icon: <PaintBrushIcon />,
    },
    {
      title: "🌈 Digital Printing",
      desc: "Fast, furious, and absolutely fabulous! Watch your ideas explode into life with our lightning-fast digital printing. From vibrant vinyl stickers that grab attention to massive banners that dominate spaces, we deliver color-soaked, high-resolution magic at breakneck speed. Perfect for campaigns that can't wait and brands that demand the extraordinary!",
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
