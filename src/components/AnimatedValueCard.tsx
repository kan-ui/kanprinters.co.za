"use client";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedValueCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

export const AnimatedValueCard: React.FC<AnimatedValueCardProps> = ({
  icon,
  title,
  description,
  delay,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={cardRef}
      className={`p-6 bg-gray-50 rounded-lg dark:bg-trueGray-800 transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-95"
      }`}
      style={{
        transitionTimingFunction: isVisible ? "cubic-bezier(0.34, 1.56, 0.64, 1)" : "ease-out",
      }}
    >
      <div
        className={`text-2xl mb-3 transform transition-all duration-500 ${
          isVisible ? "scale-100 rotate-0" : "scale-75 rotate-12"
        } hover:scale-110 hover:rotate-0`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </div>
  );
};
