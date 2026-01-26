import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { AnimatedValueCard } from "@/components/AnimatedValueCard";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <div id="services" className="scroll-mt-20">
        <SectionTitle
          preTitle="Our Services"
          title="Complete Printing & Branding Solutions"
        >
          We blend traditional screen-printing expertise with modern digital technologies. 
          From creative design to final production, we handle any printing job with precision, 
          craftsmanship, and quality. Contact us for a free quotation7 tailored to your needs.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </div>

      <div className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle="Who We Serve"
          title="Serving Diverse Markets with Inclusivity"
        >
          We believe in inclusivity and accessibility—serving corporates, communities, and individuals equally. 
          Our commitment to empowerment through customization means every client co-creates their products.
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Corporate Clients</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Branded apparel, signage, and promotional materials for businesses of all sizes.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Small Businesses</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Affordable, high-impact printing solutions for local enterprises.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Educational Institutions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Uniforms, event branding, and merchandise for schools and universities.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Events & Organizations</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Conferences, festivals, sports events, and community initiatives.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Individuals</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Personalized keepsakes and gifts for special occasions.</p>
            </div>
            <div className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Religious Institutions</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Dignified, custom branding for faith-based organizations.</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle="Our Values"
          title="Brand Identity & Core Values"
        >
          Our reputation, built since 2000, is founded on consistent quality, trust, and reliability. 
          We are a community-centred partner with strong ties to schools, religious institutions, and local events.
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedValueCard
              icon="🎯"
              title="Precision & Craftsmanship"
              description="Every print reflects technical excellence and attention to detail."
              delay={0}
            />
            <AnimatedValueCard
              icon="✨"
              title="Creativity with Purpose"
              description="Designs are expressive and strategic, tailored to your needs."
              delay={100}
            />
            <AnimatedValueCard
              icon="🤝"
              title="Inclusivity & Accessibility"
              description="Serving corporates, communities, and individuals equally."
              delay={200}
            />
            <AnimatedValueCard
              icon="🛡️"
              title="Trust & Reliability"
              description="Reputation built since 2000 for consistent quality and dependability."
              delay={300}
            />
            <AnimatedValueCard
              icon="💪"
              title="Empowerment through Customization"
              description="Clients co-create their products, bringing their vision to life."
              delay={400}
            />
            <AnimatedValueCard
              icon="🏘️"
              title="Community-Centred"
              description="Strong ties to schools, religious institutions, and local events."
              delay={500}
            />
          </div>
        </Container>
      </div>

      <div id="portfolio" className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle="Our Work"
          title="Portfolio & Showcase"
        >
          Explore our past projects and see the quality craftsmanship we deliver. 
          From corporate branding to event merchandise, each piece reflects our commitment to excellence.
        </SectionTitle>

        <Container className="mt-8">
          <div className="text-center py-12 px-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-trueGray-800 dark:to-trueGray-900 rounded-2xl border border-gray-200 dark:border-trueGray-700">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Our portfolio gallery is coming soon. In the meantime, contact us to see examples of our work.
            </p>
            <a
              href="mailto:kanprinters@mweb.co.za"
              className="inline-block px-8 py-3 text-base font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
            >
              View Our Work
            </a>
          </div>
        </Container>
      </div>

      <div id="about" className="scroll-mt-20">
        <SectionTitle
          preTitle="Our Story"
          title="From Family Garage to Trusted Printing Hub"
        >
          Founded in 2000 by brothers Mario and Bradley Kanasashi, Kan Screenprinters 
          have grown from a family garage in Manenberg into a trusted printing hub in Lansdowne. 
          Rooted in craftsmanship, loyalty, and community trust, the company blends traditional 
          screen-printing expertise with modern digital technologies.
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-lg dark:bg-trueGray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Journey</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span><strong>Origins:</strong> Started in a family garage, driven by craftsmanship and family values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span><strong>Growth:</strong> Expanded to Hyde Park, Ottery, then secured a permanent site in Lansdowne (2014)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span><strong>Innovation:</strong> Invested in digital printing, laser engraving, and UV DTF technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span><strong>Resilience:</strong> Survived challenges through loyalty, client trust, and adaptability</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg dark:bg-trueGray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Identity</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                More than a printing company—Kan Screenprinters is a community-centred partner 
                that empowers staff and uplifts clients. Under Mario&apos;s leadership, we stand as 
                a resilient, innovative brand dedicated to quality, dignity, and long-term client relationships.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Our Team</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• <strong>Mario Kanasashi</strong> – Founder & Managing Director</li>
                  <li>• Office Leadership – Workflows & client communications</li>
                  <li>• Design Leadership – Creative artwork & adaptations</li>
                  <li>• Screenprinting Technicians – Skilled artisans</li>
                  <li>• Quality Control Specialist – Ensuring excellence</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>

        <Video videoId="fZ0D0cnR88E" />
      </div>

      <SectionTitle
        preTitle="Customer Testimonials"
        title="What Our Clients Say"
      >
        Our reputation, built since 2000, is founded on consistent quality, trust, and reliability. 
        We take pride in delivering exceptional printing services to businesses, organizations, 
        and individuals across Cape Town. Here&apos;s what our satisfied clients have to say.
      </SectionTitle>

      <Testimonials />

      <div className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle="Future Vision"
          title="Looking Ahead (2–5 Years)"
        >
          We&apos;re committed to continuous innovation and growth, blending automation with artisanal craftsmanship 
          while maintaining our core values of quality, dignity, and community partnership.
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Innovation & Technology</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Hybrid Production Model: Blend automation with artisanal craftsmanship</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Smart Equipment Investment: Eco-friendly, high-efficiency machines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Digital Ordering Platform: Online customization and ordering portal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Creative Studio Services: Brand consulting, packaging design, campaign support</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">People & Sustainability</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>People-centred Growth: Upskilling staff, profit-sharing, inclusive hiring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Sustainability Commitment: Eco-friendly inks, recyclable packaging, carbon-conscious logistics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">•</span>
                  <span>Showroom & Experience Centre: Interactive space for clients to explore and co-design</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      <div id="faq" className="scroll-mt-20">
        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Have questions about our printing services? Find answers to common
          questions about our processes, pricing, and capabilities.
        </SectionTitle>

        <Faq />
      </div>
      
      <div id="contact" className="scroll-mt-20">
        <Cta />
      </div>
    </Container>
  );
}
