"use client";
import React from "react";

const services = [
  { icon: "🎨", name: "Design" },
  { icon: "🖌️", name: "Screen Printing" },
  { icon: "🔵", name: "Pad Printing" },
  { icon: "🌈", name: "Digital Printing" },
  { icon: "🔥", name: "Laser Engraving" },
  { icon: "🧵", name: "Sublimation" },
  { icon: "👕", name: "Heat Transfer" },
  { icon: "✨", name: "UV DTF Printing" },
];

export const ServicesCarousel = () => {
  // Duplicate services multiple times for seamless infinite loop
  const duplicatedServices = [...services, ...services, ...services];

  return (
    <div className="relative w-full overflow-hidden py-8 group">
      {/* Gradient overlays for fade effect on edges */}
      <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-white via-white to-transparent dark:from-trueGray-900 dark:via-trueGray-900 pointer-events-none"></div>
      <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-white via-white to-transparent dark:from-trueGray-900 dark:via-trueGray-900 pointer-events-none"></div>
      
      <div className="flex gap-6 services-scroll">
        {duplicatedServices.map((service, index) => (
          <div
            key={`${service.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center justify-center min-w-[180px] px-8 py-6 bg-white dark:bg-trueGray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-trueGray-700 hover:scale-105 hover:border-indigo-300 dark:hover:border-indigo-600 group-hover:[animation-play-state:paused]"
          >
            <div className="text-6xl mb-3 transform hover:scale-125 transition-transform duration-300">
              {service.icon}
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-gray-100 text-center whitespace-nowrap">
              {service.name}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-180px * 8 - 24px * 8));
          }
        }
        .services-scroll {
          animation: scroll 35s linear infinite;
          display: flex;
          width: fit-content;
        }
        .group:hover .services-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
