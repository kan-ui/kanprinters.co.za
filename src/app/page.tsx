import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { AnimatedValueCard } from "@/components/AnimatedValueCard";
import {
  getHeroSection,
  getBenefitSections,
  getTargetMarkets,
  getBrandValues,
  getCompanyHistory,
  getVideoContent,
  getFutureVision,
  getCTASection,
  getSectionContent,
  getFAQs,
  getTestimonials,
} from "@/lib/sanity.api";
import { benefitOne, benefitTwo } from "@/components/data";

// Add revalidation to ensure fresh data
export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  // Fetch all Sanity data with error handling
  console.log('🔄 Fetching data from Sanity...')
  
  const [
    heroData,
    benefitSections,
    targetMarkets,
    brandValues,
    companyHistory,
    videoData,
    futureVision,
    ctaData,
    servicesSection,
    targetMarketsSection,
    valuesSection,
    portfolioSection,
    aboutSection,
    testimonialsSection,
    futureVisionSection,
    faqSection,
  ] = await Promise.allSettled([
    getHeroSection(),
    getBenefitSections(),
    getTargetMarkets(),
    getBrandValues(),
    getCompanyHistory(),
    getVideoContent("about"),
    getFutureVision(),
    getCTASection(),
    getSectionContent("services"),
    getSectionContent("target-markets"),
    getSectionContent("values"),
    getSectionContent("portfolio"),
    getSectionContent("about"),
    getSectionContent("testimonials"),
    getSectionContent("future-vision"),
    getSectionContent("faq"),
  ]).then(results => results.map(result => 
    result.status === 'fulfilled' ? result.value : null
  ));
  
  console.log('✅ Data fetch completed')

  // Log what data we received
  if (heroData) {
    console.log('📝 Using Sanity data for hero section')
  } else {
    console.warn('⚠️ Using fallback data for hero section')
  }

  // Fallback to hardcoded data if Sanity data is not available
  const hero = heroData || {
    headline: "Transform Ideas Into Lasting Impressions",
    description: "Creative, reliable, high-quality printing solutions.\nEmpowering clients, uplifting communities, honouring craftsmanship.",
    primaryCTA: { text: "Get Free Quotation", link: "mailto:kanprinters@mweb.co.za" },
    secondaryCTA: { text: "Call Us: 021 691 0170", link: "tel:+27216910170" },
    trustLine: "From a family garage in Manenberg to a trusted printing hub in Lansdowne • Rooted in craftsmanship, loyalty, and community trust",
  };

  const servicesSectionData = servicesSection || {
    preTitle: "Our Services",
    title: "Complete Printing & Branding Solutions",
    description: "Bold colors. Brilliant designs. Unforgettable impressions. We're not just printers—we're your creative partners in making brands come alive! With vibrant inks, cutting-edge technology, and a passion for perfection, we turn every project into a masterpiece. From dazzling screen prints that pop off the page to stunning digital graphics that wow your audience, we bring energy, excitement, and excellence to every job. Let's make your brand impossible to ignore!",
  };

  const targetMarketsSectionData = targetMarketsSection || {
    preTitle: "Who We Serve",
    title: "Serving Diverse Markets with Inclusivity",
    description: "Every brand deserves to shine in full color—and we make it happen! From Fortune 500 giants to local startups, from school events to community celebrations, we bring the same vibrant energy and top-tier quality to every project. No matter your size, budget, or vision, you're not just a client—you're a creative collaborator. Together, we'll design, print, and deliver products that burst with personality and make your brand unforgettable. Your story, your colors, your way—that's the Kan Printers promise!",
  };

  const valuesSectionData = valuesSection || {
    preTitle: "Our Values",
    title: "Brand Identity & Core Values",
    description: "For over two decades, we've painted Cape Town with vibrant colors, bold designs, and unforgettable brand experiences! Our reputation isn't just built on trust—it's built on passion, precision, and the pure joy of bringing your wildest creative visions to life. We're not just printers; we're color enthusiasts, design fanatics, and your partners in making every project a masterpiece. From corporate powerhouses to community celebrations, we bring the same electric energy and unwavering commitment to excellence. Quality that dazzles, service that wows, and results that make you proud—that's the Kan Printers way!",
  };

  const portfolioSectionData = portfolioSection || {
    preTitle: "Our Work",
    title: "Portfolio & Showcase",
    description: "Explore our past projects and see the quality craftsmanship we deliver. From corporate branding to event merchandise, each piece reflects our commitment to excellence.",
  };

  const aboutSectionData = aboutSection || {
    preTitle: "Our Story",
    title: "From Family Garage to Trusted Printing Hub",
    description: "Founded in 2000 by brothers Mario and Bradley Kanasashi, Kan Screenprinters have grown from a family garage in Manenberg into a trusted printing hub in Lansdowne. Rooted in craftsmanship, loyalty, and community trust, the company blends traditional screen-printing expertise with modern digital technologies.",
  };

  const testimonialsSectionData = testimonialsSection || {
    preTitle: "Customer Testimonials",
    title: "What Our Clients Say",
    description: "Our reputation, built since 2000, is founded on consistent quality, trust, and reliability. We take pride in delivering exceptional printing services to businesses, organizations, and individuals across Cape Town. Here's what our satisfied clients have to say.",
  };

  const futureVisionSectionData = futureVisionSection || {
    preTitle: "Future Vision",
    title: "Where We're Headed",
    description: "The future is bursting with color—and Kan Printers is painting it! We're revolutionizing print with cutting-edge tech, eco-friendly inks that pop, and game-changing innovations that turn your wildest visions into reality. Imagine ordering online with a click, collaborating in our vibrant creative studio, and walking through a showroom where every wall screams possibility! We're not just keeping up—we're setting the pace. Bigger, bolder, brighter—that's our promise. The canvas is ready, and we're bringing the paint!",
  };

  const faqSectionData = faqSection || {
    preTitle: "FAQ",
    title: "Frequently Asked Questions",
    description: "Have questions about our printing services? Find answers to common questions about our processes, pricing, and capabilities.",
  };

  // Default target markets if not in Sanity
  const defaultTargetMarkets = [
    { title: "Corporate Clients", description: "Branded apparel, signage, and promotional materials for businesses of all sizes." },
    { title: "Small Businesses", description: "Affordable, high-impact printing solutions for local enterprises." },
    { title: "Educational Institutions", description: "Uniforms, event branding, and merchandise for schools and universities." },
    { title: "Events & Organizations", description: "Conferences, festivals, sports events, and community initiatives." },
    { title: "Individuals", description: "Personalized keepsakes and gifts for special occasions." },
    { title: "Religious Institutions", description: "Dignified, custom branding for faith-based organizations." },
  ];

  const markets = targetMarkets && targetMarkets.length > 0 ? targetMarkets : defaultTargetMarkets;

  // Default brand values if not in Sanity
  const defaultValues = [
    { icon: "🎯", title: "Precision & Craftsmanship", description: "Every print reflects technical excellence and attention to detail.", delay: 0 },
    { icon: "✨", title: "Creativity with Purpose", description: "Designs are expressive and strategic, tailored to your needs.", delay: 100 },
    { icon: "🤝", title: "Inclusivity & Accessibility", description: "Serving corporates, communities, and individuals equally.", delay: 200 },
    { icon: "🛡️", title: "Trust & Reliability", description: "Reputation built since 2000 for consistent quality and dependability.", delay: 300 },
    { icon: "💪", title: "Empowerment through Customization", description: "Clients co-create their products, bringing their vision to life.", delay: 400 },
    { icon: "🏘️", title: "Community-Centred", description: "Strong ties to schools, religious institutions, and local events.", delay: 500 },
  ];

  const values = brandValues && brandValues.length > 0 
    ? brandValues.map((v: any, i: number) => ({ ...v, delay: i * 100 }))
    : defaultValues;

  return (
    <Container>
      <Hero heroData={hero} />
      <div id="services" className="scroll-mt-20">
        <SectionTitle
          preTitle={servicesSectionData.preTitle || "Our Services"}
          title={servicesSectionData.title || "Complete Printing & Branding Solutions"}
        >
          {servicesSectionData.description || "Bold colors. Brilliant designs. Unforgettable impressions. We're not just printers—we're your creative partners in making brands come alive! With vibrant inks, cutting-edge technology, and a passion for perfection, we turn every project into a masterpiece. From dazzling screen prints that pop off the page to stunning digital graphics that wow your audience, we bring energy, excitement, and excellence to every job. Let's make your brand impossible to ignore!"}
        </SectionTitle>

        {benefitSections && benefitSections.length > 0 ? (
          benefitSections.map((benefit: any, index: number) => (
            <Benefits 
              key={benefit._id || index} 
              data={benefit} 
              imgPos={benefit.imagePosition || (index % 2 === 0 ? "left" : "right")} 
            />
          ))
        ) : (
          <>
            <Benefits data={benefitOne} />
            <Benefits imgPos="right" data={benefitTwo} />
          </>
        )}
      </div>

      <div className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle={targetMarketsSectionData.preTitle || "Who We Serve"}
          title={targetMarketsSectionData.title || "Serving Diverse Markets with Inclusivity"}
        >
          {targetMarketsSectionData.description || "Every brand deserves to shine in full color—and we make it happen! From Fortune 500 giants to local startups, from school events to community celebrations, we bring the same vibrant energy and top-tier quality to every project. No matter your size, budget, or vision, you're not just a client—you're a creative collaborator. Together, we'll design, print, and deliver products that burst with personality and make your brand unforgettable. Your story, your colors, your way—that's the Kan Printers promise!"}
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {markets.map((market: any, index: number) => (
              <div key={market._id || index} className="p-6 bg-indigo-50 rounded-lg dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{market.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{market.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <div className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle={valuesSectionData.preTitle || "Our Values"}
          title={valuesSectionData.title || "Brand Identity & Core Values"}
        >
          {valuesSectionData.description || "For over two decades, we've painted Cape Town with vibrant colors, bold designs, and unforgettable brand experiences! Our reputation isn't just built on trust—it's built on passion, precision, and the pure joy of bringing your wildest creative visions to life. We're not just printers; we're color enthusiasts, design fanatics, and your partners in making every project a masterpiece. From corporate powerhouses to community celebrations, we bring the same electric energy and unwavering commitment to excellence. Quality that dazzles, service that wows, and results that make you proud—that's the Kan Printers way!"}
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value: any, index: number) => (
              <AnimatedValueCard
                key={value._id || index}
                icon={value.icon || "✨"}
                title={value.title}
                description={value.description}
                delay={value.delay || index * 100}
              />
            ))}
          </div>
        </Container>
      </div>

      <div id="portfolio" className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle={portfolioSectionData.preTitle || "Our Work"}
          title={portfolioSectionData.title || "Portfolio & Showcase"}
        >
          {portfolioSectionData.description || "Explore our past projects and see the quality craftsmanship we deliver. From corporate branding to event merchandise, each piece reflects our commitment to excellence."}
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
          preTitle={aboutSectionData.preTitle || "Our Story"}
          title={aboutSectionData.title || "From Family Garage to Trusted Printing Hub"}
        >
          {aboutSectionData.description || "Founded in 2000 by brothers Mario and Bradley Kanasashi, Kan Screenprinters have grown from a family garage in Manenberg into a trusted printing hub in Lansdowne. Rooted in craftsmanship, loyalty, and community trust, the company blends traditional screen-printing expertise with modern digital technologies."}
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-50 rounded-lg dark:bg-trueGray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Journey</h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {companyHistory?.journeyItems && companyHistory.journeyItems.length > 0 ? (
                  companyHistory.journeyItems.map((item: any, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span><strong>{item.label}:</strong> {item.text}</span>
                    </li>
                  ))
                ) : (
                  <>
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
                  </>
                )}
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg dark:bg-trueGray-800">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Our Identity</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {companyHistory?.identity || "More than a printing company—Kan Screenprinters is a community-centred partner that empowers staff and uplifts clients. Under Mario's leadership, we stand as a resilient, innovative brand dedicated to quality, dignity, and long-term client relationships."}
              </p>
              {companyHistory?.teamRoles && companyHistory.teamRoles.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Our Team</h4>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    {companyHistory.teamRoles.map((role: string, index: number) => (
                      <li key={index}>• {role}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>

        <Video videoId={videoData?.videoId || "fZ0D0cnR88E"} />
      </div>

      <SectionTitle
        preTitle={testimonialsSectionData.preTitle || "Customer Testimonials"}
        title={testimonialsSectionData.title || "What Our Clients Say"}
      >
        {testimonialsSectionData.description || "Our reputation, built since 2000, is founded on consistent quality, trust, and reliability. We take pride in delivering exceptional printing services to businesses, organizations, and individuals across Cape Town. Here's what our satisfied clients have to say."}
      </SectionTitle>

      <Testimonials testimonialsData={await getTestimonials().catch(() => null) || undefined} />

      <div className="scroll-mt-20 mt-16">
        <SectionTitle
          preTitle={futureVisionSectionData.preTitle || "Future Vision"}
          title={futureVisionSectionData.title || "Where We're Headed"}
        >
          {futureVisionSectionData.description || "The future is bursting with color—and Kan Printers is painting it! We're revolutionizing print with cutting-edge tech, eco-friendly inks that pop, and game-changing innovations that turn your wildest visions into reality. Imagine ordering online with a click, collaborating in our vibrant creative studio, and walking through a showroom where every wall screams possibility! We're not just keeping up—we're setting the pace. Bigger, bolder, brighter—that's our promise. The canvas is ready, and we're bringing the paint!"}
        </SectionTitle>

        <Container className="mt-8">
          <div className="grid gap-6 md:grid-cols-2">
            {futureVision && futureVision.length > 0 ? (
              futureVision.map((vision: any, index: number) => (
                <div key={vision._id || index} className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{vision.title}</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    {vision.items && vision.items.length > 0 ? (
                      vision.items.map((item: any, itemIndex: number) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-indigo-600 mr-2">•</span>
                          <span>{item.text}</span>
                        </li>
                      ))
                    ) : null}
                  </ul>
                </div>
              ))
            ) : (
              <>
                <div className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-100 dark:border-indigo-800">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Innovation & Technology</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>Hybrid Production Model: Smart automation meets hands-on quality</span>
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
                      <span>People-centred Growth: Upskilling staff, inclusive hiring</span>
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
              </>
            )}
          </div>
        </Container>
      </div>

      <div id="faq" className="scroll-mt-20">
        <SectionTitle 
          preTitle={faqSectionData.preTitle || "FAQ"} 
          title={faqSectionData.title || "Frequently Asked Questions"}
        >
          {faqSectionData.description || "Have questions about our printing services? Find answers to common questions about our processes, pricing, and capabilities."}
        </SectionTitle>

        <Faq faqData={await getFAQs().catch(() => null) || undefined} />
      </div>
      
      <div id="contact" className="scroll-mt-20">
        <Cta ctaData={ctaData} />
      </div>
    </Container>
  );
}
