import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { getTestimonials, getSectionContent } from "@/lib/sanity.api";
import Image from "next/image";
import { urlFor } from "@/lib/sanity.image";
import type { Metadata } from "next";

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Customer Testimonials | Kan Screenprinters",
  description: "Read what our satisfied clients have to say about Kan Screenprinters. Real testimonials from businesses, organizations, and individuals across Cape Town who trust us for their printing needs.",
};

export default async function TestimonialsPage() {
  const [testimonials, sectionData] = await Promise.allSettled([
    getTestimonials(),
    getSectionContent("testimonials"),
  ]).then(results => results.map(result => 
    result.status === 'fulfilled' ? result.value : null
  ));

  const testimonialsData = testimonials || [];
  const sectionInfo = sectionData || {
    preTitle: "Customer Testimonials",
    title: "What Our Clients Say",
    description: "Our reputation, built since 2000, is founded on consistent quality, trust, and reliability. We take pride in delivering exceptional printing services to businesses, organizations, and individuals across Cape Town. Here's what our satisfied clients have to say.",
  };

  return (
    <Container>
      <div className="py-16">
        <SectionTitle
          preTitle={sectionInfo.preTitle || "Customer Testimonials"}
          title={sectionInfo.title || "What Our Clients Say"}
        >
          {sectionInfo.description || "Our reputation, built since 2000, is founded on consistent quality, trust, and reliability. We take pride in delivering exceptional printing services to businesses, organizations, and individuals across Cape Town. Here's what our satisfied clients have to say."}
        </SectionTitle>

        {testimonialsData.length > 0 ? (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonialsData.map((testimonial: any, index: number) => (
              <TestimonialCard key={testimonial._id || index} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-trueGray-800 dark:to-trueGray-900 rounded-2xl border border-gray-200 dark:border-trueGray-700">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              No testimonials available yet. Check back soon!
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 text-base font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </Container>
  );
}

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    image?: any;
  };
}

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const imageSrc = testimonial.image?.asset 
    ? urlFor(testimonial.image).width(80).height(80).url()
    : "/img/user1.jpg";

  return (
    <div className="flex flex-col justify-between w-full h-full bg-gray-100 dark:bg-trueGray-800 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex-grow">
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-200 mb-6">
          "{testimonial.quote}"
        </p>
      </div>
      
      <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-trueGray-700">
        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
          <Image
            src={imageSrc}
            width={56}
            height={56}
            alt={`${testimonial.author} avatar`}
            className="object-cover"
            placeholder={typeof imageSrc === 'string' && imageSrc.startsWith('/') ? "blur" : undefined}
          />
        </div>
        <div className="flex-grow">
          <div className="text-base font-semibold text-gray-900 dark:text-white">
            {testimonial.author}
          </div>
          {testimonial.role && (
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.role}
            </div>
          )}
          {testimonial.company && (
            <div className="text-sm text-gray-500 dark:text-gray-500">
              {testimonial.company}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
