"use client";
import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import React, { useState } from 'react';
import InvestmentComparisonCalculator from './InvestmentComparisonCalculator';

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

export default function Calculator() {
  return (
    <div className="tm-editorial-page tm-compare-page tm-site-page">
      {/* Hero Section */}
      <section className="tm-editorial-hero">
        <img src="/images/calculator-investment-planning.png" alt="" aria-hidden="true" className="tm-editorial-hero-image" />
        <div className="tm-editorial-hero-overlay" />
        <div className="tm-editorial-shell tm-editorial-hero-content">
            <FadeIn className="tm-editorial-hero-copy">
              <h1>
                Compare Investment Options
              </h1>
              <p>
                Enter an amount and compare estimated outcomes across the available investment options before submitting an enquiry.
              </p>
              <div className="tm-editorial-hero-actions">
                <a href="#calculator" className="tm-editorial-button tm-editorial-button-primary group">
                  Start Calculating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/investments" className="tm-editorial-button tm-editorial-button-secondary">
                  View Investment Options
                </Link>
              </div>
            </FadeIn>
        </div>
      </section>

      {/* Calculator Intro Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Investments</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-8 leading-tight">
                One calculator for all investment categories.
              </h2>
              <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
                The calculator allows visitors to select an investment option, enter an amount and choose a period. The result gives a detailed breakdown estimate to help visitors compare investment categories before submitting an enquiry.
              </p>
            </FadeIn>
          </div>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border-grey pt-12">
            {[
              { title: "Product selection", desc: "Choose from the available investment categories." },
              { title: "Estimated result", desc: "View a detailed breakdown estimate based on the selected amount and period." },
              { title: "Next step", desc: "Submit an enquiry if you would like the team to follow up." }
            ].map((point, i) => (
              <FadeInStaggerItem key={i}>
                <h3 className="text-lg font-serif text-ink mb-3">{point.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{point.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Main Calculator Engine Injection */}
      <InvestmentComparisonCalculator />

      {/* Product Guidance Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">How to read your result</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Estimated value", desc: "The estimated value gives a basic view of how the selected option could perform using placeholder assumptions." },
              { title: "Income estimate", desc: "Income-focused options may show estimated monthly income and estimated total income over the selected period." },
              { title: "Product terms", desc: "Final terms, fees, access rules and eligibility requirements must be confirmed in formal documentation." },
              { title: "Enquiry required", desc: "The calculator is only a guide. Visitors should submit an enquiry before taking any next step." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[240px]">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Product Comparison CTA */}
      <section className="relative bg-navy py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/investment-enquiry-banner.png" 
            alt="Client and adviser reviewing investment information" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-4 block">Investment Options</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need to compare the categories first?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Review the full investment options page to understand the purpose of each category before using the calculator.
            </p>
            <Link href="/investments" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center justify-center w-full sm:w-auto inline-flex uppercase tracking-wider">
              View Investment Options
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Enquiry Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">What happens after calculating?</h2>
          </FadeIn>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-border-grey z-0"></div>
            
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: "1", title: "Choose an option", desc: "Select the investment category you want to estimate." },
                { step: "2", title: "Enter your details", desc: "Add an investment amount and period." },
                { step: "3", title: "Review the estimate", desc: "Use the result as a basic guide only." },
                { step: "4", title: "Submit an enquiry", desc: "Contact the team to request more information." }
              ].map((item, i) => (
                <FadeInStaggerItem key={i} className="relative z-10 flex flex-row lg:flex-col gap-6 lg:gap-0">
                  <div className="w-12 h-12 bg-navy text-white font-serif flex items-center justify-center text-xl flex-shrink-0 shadow-[0_0_0_12px_#ffffff] lg:mb-6 lg:mx-auto">
                    {item.step}
                  </div>
                  <div className="text-left lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg font-serif text-ink mb-3">{item.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{item.desc}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Calculator FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white border-y border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about the calculator</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Are calculator and comparison results final?",
                a: "No. Calculator results are estimates only and do not represent guaranteed outcomes or confirmed product figures."
              },
              {
                q: "Why do income options show different results?",
                a: "Income-focused options show estimated income values, while growth-focused options show estimated future value and estimated growth."
              },
              {
                q: "Can I calculate all investment options?",
                a: "Yes. The main Compare Investments page allows visitors to choose from all available investment categories."
              },
              {
                q: "What should I do after calculating?",
                a: "You can submit an enquiry so the team can follow up with the relevant information and next steps."
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to take the next step?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Use your estimate as a starting point, then submit an enquiry so the team can follow up with the relevant information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/investments" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View Investment Options
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
