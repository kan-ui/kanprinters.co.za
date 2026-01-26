"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

interface FaqProps {
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
}

export const Faq = ({ faqData }: FaqProps) => {
  const [faqs, setFaqs] = useState(faqData || faqdata);

  useEffect(() => {
    if (!faqData) {
      // Client-side fetch if needed
      fetch('/api/faqs')
        .then(res => res.json())
        .then(data => {
          if (data && data.length > 0) {
            setFaqs(data);
          }
        })
        .catch(() => {
          // Fallback to default
          setFaqs(faqdata);
        });
    }
  }, [faqData]);
  
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqs.map((item: any, index: number) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What types of items can you print on?",
    answer: "We can print on most corporate gifts and promotional items including bags, folders, umbrellas, T-shirts, mugs, pens, USB drives, key rings, water bottles, mouse pads, and many more. Contact us with your specific item and we'll let you know if we can print on it.",
  },
  {
    question: "Do you offer free quotations?",
    answer: "Yes, we offer free quotations for all projects. Simply contact us via email at kanprinters@mweb.co.za or call us at 021 691 0170 / 021 691 0168, and we'll provide you with a detailed quote for your printing needs.",
  },
  {
    question: "What printing methods do you offer?",
    answer: "We offer multiple printing methods including screen printing, pad printing, digital printing, laser engraving, sublimation, and heat transfer. The best method depends on your item and requirements - we'll recommend the most suitable option for your project.",
  },
  {
    question: "Do you provide graphic design services?",
    answer: "Yes, we offer a complete graphic design service. Our team can help create and refine your branding materials before printing, ensuring your design looks perfect on your chosen promotional items.",
  },
  {
    question: "What is your minimum order quantity?",
    answer: "We handle printing jobs of any size, from small orders to large-scale production. Contact us with your requirements and we'll provide pricing for your specific quantity needs.",
  },
  {
    question: "Where are you located?",
    answer: "We are located at Unit 14 Regency Park, 6 Induland Crescent, Lansdowne, Cape Town. We serve clients throughout Cape Town and can arrange delivery for larger orders.",
  },
];
