import React from "react";
import { Container } from "@/components/Container";

interface CtaProps {
  ctaData?: {
    headline?: string;
    description?: string;
    primaryCTA?: { text?: string; link?: string };
    secondaryCTA?: { text?: string; link?: string };
  };
}

export const Cta = ({ ctaData }: CtaProps) => {
  const headline = ctaData?.headline || "Transform Your Ideas Into Lasting Impressions";
  const description = ctaData?.description || "Through creative, reliable, and high-quality printing solutions. Contact us today for a free quotation and let's empower your brand together.";
  const primaryCTA = ctaData?.primaryCTA || { text: "Get Free Quote", link: "mailto:kanprinters@mweb.co.za" };
  const secondaryCTA = ctaData?.secondaryCTA || { text: "Call: 021 691 0170", link: "tel:+27216910170" };

  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            {headline}
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            {description}
          </p>
        </div>
        <div className="flex flex-col flex-shrink-0 w-full gap-3 text-center lg:w-auto lg:flex-row">
          <a
            href={primaryCTA.link || "mailto:kanprinters@mweb.co.za"}
            className="inline-block py-3 mx-auto text-lg font-bold text-center text-white bg-indigo-700 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-indigo-800 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            {primaryCTA.text || "Get Free Quote"}
          </a>
          <a
            href={secondaryCTA.link || "tel:+27216910170"}
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-white border-2 border-white/80 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white/10 hover:border-white transition-colors"
          >
            {secondaryCTA.text || "Call: 021 691 0170"}
          </a>
        </div>
      </div>
    </Container>
  );
};
