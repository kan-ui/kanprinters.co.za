import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Transform Your Ideas Into Lasting Impressions
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Through creative, reliable, and high-quality printing solutions. Contact us today for a free quotation 
            and let&apos;s empower your brand together.
          </p>
        </div>
        <div className="flex flex-col flex-shrink-0 w-full gap-3 text-center lg:w-auto lg:flex-row">
          <a
            href="mailto:kanprinters@mweb.co.za"
            className="inline-block py-3 mx-auto text-lg font-bold text-center text-white bg-indigo-700 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-indigo-800 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            Get Free Quote
          </a>
          <a
            href="tel:+27216910170"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-white border-2 border-white/80 rounded-md px-7 lg:px-10 lg:py-5 hover:bg-white/10 hover:border-white transition-colors"
          >
            Call: 021 691 0170
          </a>
        </div>
      </div>
    </Container>
  );
};
