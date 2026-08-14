"use client";
import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import React, { useState } from 'react';

function FAQItem(props: { faq: { q: string, a: string }, key?: string | number }) {
  const { faq } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-soft-grey border border-border-grey">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left cursor-pointer p-6 font-sans font-medium text-ink flex justify-between items-center focus:outline-none"
      >
        <span className="pr-4 block">{faq.q}</span>
        <span className="text-navy font-bold text-xl flex-shrink-0">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 font-sans text-muted-blue leading-relaxed border-t border-border-grey/50">
          <p className="m-0">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-border-grey overflow-hidden relative flex flex-col lg:block">
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-off-white to-white opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">          
          <FadeIn delay={0.2} className="w-full lg:w-[55%] relative z-20">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block mt-4 lg:mt-0">About Tiyani Magomani</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
              Structured investment information for considered financial decisions.
            </h1>
            <p className="text-lg md:text-xl font-sans text-[#4B5563] leading-relaxed mb-10 max-w-2xl font-normal">
              Tiyani Magomani presents clear investment categories, calculator support and enquiry pathways for clients who want to explore growth, income, flexible-access, fixed-return and offshore-focused options before taking the next step.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8 lg:mb-0">
              <Link href="/investments" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                Explore Investments
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                Contact the Team
              </Link>
            </div>
          </FadeIn>

          {/* Mobile/Tablet Image */}
          <FadeIn delay={0.4} className="w-full lg:hidden relative z-10 mt-8 mb-4"> 
             <div className="relative w-full aspect-video">
                <img 
                  src="/images/about-advisory-team.png" 
                  alt="Clients discussing investment information with an adviser" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/5 mix-blend-multiply"></div>
             </div>
          </FadeIn>
        </div>

        {/* Desktop Absolute Image */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[42vw] h-[70%] z-10">
          <img 
            src="/images/about-advisory-team.png" 
            alt="Clients discussing investment information with an adviser" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/5 mix-blend-multiply"></div>
        </div>
      </section>

      {/* About Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Focus</span>
              <span className="text-sm font-sans text-muted-blue">Structured investment categories</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Support</span>
              <span className="text-sm font-sans text-muted-blue">Calculator and enquiry pathway</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Approach</span>
              <span className="text-sm font-sans text-muted-blue">Clear, measured information</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Next Step</span>
              <span className="text-sm font-sans text-muted-blue">Human follow-up after enquiry</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              Website information is provided for general guidance and enquiry purposes only. It does not represent financial advice or guaranteed outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Who We Are</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">A clear starting point for exploring investment options.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Tiyani Magomani is presented as a public-facing investment website designed to help visitors understand available investment categories before submitting an enquiry. The website brings together structured information, product pages, calculator estimates and a guided enquiry process so visitors can make a more informed first step.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Our purpose</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The purpose of Tiyani Magomani is to make investment information easier to understand. Visitors can explore different categories, compare broad positioning and submit an enquiry when they are ready to receive more information.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clarity", desc: "We present investment categories in a structured way so visitors can understand the purpose of each option." },
              { title: "Comparison", desc: "We help visitors compare growth, income, flexible-access, fixed-return and offshore-focused categories." },
              { title: "Guidance", desc: "The website supports an enquiry-led process so visitors can request follow-up before making any decision." },
              { title: "Responsibility", desc: "We avoid guaranteed-return claims and direct visitors to formal product documentation before any next step." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[240px]">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Simple information before serious decisions.</h2>
              <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal max-w-3xl">
                Investment decisions should not be rushed. Tiyani Magomani’s digital pathway gives visitors a calm, structured way to review options, use the Investment Calculator and submit an enquiry for follow-up.
              </p>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <h3 className="text-2xl font-serif text-ink mb-6">A structured digital pathway</h3>
              <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
                Visitors can begin by reviewing the investment options page, then explore product-specific pages and use the calculator to estimate possible outcomes. From there, they can submit an enquiry for more information.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-white border border-border-grey p-8 lg:p-12">
                <ol className="space-y-6">
                  {[
                    "Explore options",
                    "Compare categories",
                    "Use the calculator",
                    "Submit an enquiry",
                    "Review formal information"
                  ].map((step, index) => (
                    <li key={index} className="flex items-center text-lg font-serif text-ink">
                      <span className="w-10 h-10 bg-navy text-white flex items-center justify-center flex-shrink-0 mr-6 text-sm font-bold">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Investment Categories Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Investment categories presented clearly.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The website groups investment information into clear categories so visitors can understand the broad purpose of each route before enquiring.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Private Equity Growth Option",
                desc: "For clients focused on long-term capital growth.",
                link: "/investments/private-equity-growth"
              },
              {
                title: "Private Equity Income Option",
                desc: "For clients interested in income-focused investment positioning.",
                link: "/investments/private-equity-income"
              },
              {
                title: "Private Equity Flexible Access Option",
                desc: "For clients who may need a more adaptable investment route.",
                link: "/investments/private-equity-flexible-access"
              },
              {
                title: "Fixed Return Growth Option",
                desc: "For clients considering structured growth with defined terms.",
                link: "/investments/fixed-return-growth"
              },
              {
                title: "Fixed Return Income Option",
                desc: "For clients considering income-focused positioning with defined terms.",
                link: "/investments/fixed-return-income"
              },
              {
                title: "Offshore Global Option",
                desc: "For clients exploring offshore and international exposure.",
                link: "/investments/offshore-global"
              }
            ].map((product, i) => (
              <FadeInStaggerItem key={i}>
                <Link href={product.link} className="block group h-full">
                  <div className="bg-soft-grey border border-border-grey p-8 h-full flex flex-col group-hover:border-navy transition-colors">
                    <h3 className="text-lg font-serif text-ink mb-3">{product.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{product.desc}</p>
                    <div className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto">
                      View Option
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <FadeIn className="text-center">
            <Link href="/investments" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors inline-flex items-center uppercase tracking-wider">
              View All Investment Options
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Trust And Responsibility Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6 leading-tight">Responsible information, clear next steps.</h2>
              <p className="text-lg font-sans text-muted-blue leading-relaxed">
                Tiyani Magomani’s website is designed to provide general information before enquiry. It does not replace formal product documentation, suitability checks or professional financial guidance.
              </p>
            </FadeIn>
            
            <FadeInStagger className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "General information only", desc: "Website content is for general guidance and enquiry purposes." },
                { title: "No guaranteed outcomes", desc: "Calculator results and investment information do not represent guaranteed outcomes." },
                { title: "Formal documentation required", desc: "Final product details, risks, terms, fees and eligibility requirements are subject to formal documentation." },
                { title: "Enquiry-led process", desc: "Visitors can submit an enquiry so the team can follow up with relevant information." }
              ].map((point, i) => (
                <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center">
                  <h3 className="text-lg font-serif text-ink mb-3">{point.title}</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{point.desc}</p>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Digital Pathway CTA Section */}
      <section className="relative bg-navy py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/about-team-discussion.png" 
            alt="A team in a professional discussion" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-4 block">Digital Investing</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Explore the investment pathway online.</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Use the digital investing pathway to review the available categories, compare estimates and submit an enquiry when you are ready for follow-up.
            </p>
            <Link href="/digital-investing" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center justify-center w-full sm:w-auto inline-flex uppercase tracking-wider">
              View Digital Investing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              Information on this website is provided for general guidance and enquiry purposes only. It does not represent financial advice, a completed application, confirmed product terms or guaranteed outcomes. Investment values may rise or fall. Clients should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about Tiyani Magomani</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "What does Tiyani Magomani offer?",
                a: "The website presents structured investment categories, calculator estimates and enquiry pathways for visitors who want to explore investment options before taking the next step."
              },
              {
                q: "Can I invest directly on the website?",
                a: "No. The website provides information and an enquiry pathway only. Visitors can explore options, use the calculator and submit an enquiry for follow-up."
              },
              {
                q: "Is the website information financial advice?",
                a: "No. Website information is for general guidance only and does not replace formal financial advice or product documentation."
              },
              {
                q: "Are calculator results guaranteed?",
                a: "No. Calculator results are estimates only and do not represent guaranteed outcomes or confirmed product figures."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to explore your investment options?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Start by reviewing the investment categories or submit an enquiry so the team can follow up with relevant information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/investments" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                View Investment Options
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                Contact the Team
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
