import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";
import { urlFor } from "@/lib/sanity.image";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

interface TestimonialsProps {
  testimonialsData?: Array<{
    quote: string;
    author: string;
    role?: string;
    company?: string;
    image?: any;
  }>;
}

export const Testimonials = ({ testimonialsData }: TestimonialsProps) => {
  // Default testimonials if no Sanity data
  const defaultTestimonials = [
    {
      quote: "Share a real testimonial that hits some of your benefits from one of your popular customer.",
      author: "Sarah Steiner",
      role: "VP Sales at Google",
      image: userOneImg,
    },
    {
      quote: "Make sure you only pick the right sentence to keep it short and simple.",
      author: "Dylan Ambrose",
      role: "Lead marketer at Netflix",
      image: userTwoImg,
    },
    {
      quote: "This is an awesome landing page template I've seen. I would use this for anything.",
      author: "Gabrielle Winn",
      role: "Co-founder of Acme Inc",
      image: userThreeImg,
    },
  ];

  const testimonials = testimonialsData && testimonialsData.length > 0 
    ? testimonialsData.map((t: any) => ({
        quote: t.quote,
        author: t.author,
        role: t.role || "",
        company: t.company || "",
        image: t.image?.asset ? urlFor(t.image).width(40).height(40).url() : userOneImg,
      }))
    : defaultTestimonials;
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((testimonial: any, index: number) => (
          <div key={index} className={index === 0 ? "lg:col-span-2 xl:col-auto" : ""}>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <p className="text-2xl leading-normal">
                {testimonial.quote}
              </p>

              <Avatar
                image={testimonial.image}
                name={testimonial.author}
                title={testimonial.role}
                company={testimonial.company}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
  company?: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
        {props.company && (
          <div className="text-gray-500 dark:text-gray-500 text-sm mt-0.5">{props.company}</div>
        )}
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
