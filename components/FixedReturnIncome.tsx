"use client";
import { ArrowRight } from 'lucide-react';import { investmentProducts } from '../src/lib/investment-products';

import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import CalculatorEngine from './CalculatorEngine';
import ProductFiguresGrid from './ProductFiguresGrid';
import { useState } from 'react';

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

export default function FixedReturnIncome() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Investment Option</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Fixed Return Income Portfolio
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                A structured income-focused investment category for clients considering defined-term positioning with regular income potential.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[15px]">
                  Start an Enquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#calculator" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">Calculate</Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="/images/fixed-return-income-hero.png" 
                  alt="Clients discussing income planning with a financial adviser" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

            {/* Key Product Figures */}
      <section className="bg-white border-y border-border-grey py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Indicative Product Figures</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Review the core figures for this option before submitting an enquiry.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal max-w-3xl">
              Final product terms, risks and eligibility requirements are confirmed through formal documentation.
            </p>
          </FadeIn>
          
          <ProductFiguresGrid figures={investmentProducts["fixed-return-income"].figures} />
          
          <FadeIn className="bg-soft-grey border border-border-grey p-6 md:p-8">
            <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">
              Capital protection applies to the original investment amount at maturity, subject to the terms of the product. Expected yields are projections based on prevailing market conditions and are not guaranteed. Historical performance offers no assurance of future outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Overview</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-8 leading-tight">
              Built for clients seeking income-focused positioning with defined terms.
            </h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Fixed Return Income Portfolio is positioned for clients who are considering a structured investment route with regular income potential and defined-term positioning. It is suited to visitors who want to explore an income-focused category with clearer investment terms before submitting an enquiry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who This Option May Suit */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Who this option may suit</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Income-focused clients", desc: "For clients who are interested in investment options positioned around regular income potential." },
              { title: "Defined-term investors", desc: "For clients who prefer clearer term-based investment positioning." },
              { title: "Structure-conscious clients", desc: "For clients who want to review formal terms before making an investment decision." },
              { title: "Clients comparing income routes", desc: "For clients comparing private-equity income and fixed-return-style income options." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[240px]">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            <FadeIn className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-serif text-ink">Key features</h2>
            </FadeIn>
            <div className="lg:col-span-2">
              <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {[
                  { title: "Structured income positioning", desc: "Designed around income-focused investment positioning with defined-term considerations." },
                  { title: "Fixed-return-style category", desc: "Presented as a structured category for clients who prefer clearer investment terms." },
                  { title: "Defined investment period", desc: "Best understood as an option for clients comfortable with a defined investment horizon." },
                  { title: "Lower flexibility", desc: "This option may have less flexibility than flexible-access investment categories." },
                  { title: "Product calculator", desc: "Clients can estimate a basic income-focused result before submitting an enquiry." },
                  { title: "Formal documentation required", desc: "Final product details, risks, terms, income assumptions, fees, timelines and eligibility requirements are subject to formal documentation." }
                ].map((feature, i) => (
                  <FadeInStaggerItem key={i} className="border-t border-border-grey pt-6">
                    <h3 className="text-lg font-serif text-ink mb-3">{feature.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{feature.desc}</p>
                  </FadeInStaggerItem>
                ))}
              </FadeInStagger>
            </div>
          </div>
        </div>
      </section>

      {/* Important Considerations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important considerations</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              Capital protection applies to the original investment amount at maturity, subject to the terms of the product. Expected yields are projections based on prevailing market conditions and are not guaranteed. Historical performance offers no assurance of future outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Calculator Section */}
      <CalculatorEngine lockedProduct={true} productId="fixed-return-income" />

      {/* Enquiry Process Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">How to enquire about this option</h2>
          </FadeIn>
          
          <div className="relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-border-grey z-0"></div>
            
            <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { step: "1", title: "Review the option", desc: "Understand the purpose, income positioning and defined-term considerations." },
                { step: "2", title: "Compare Investments", desc: "View a basic estimate based on your selected amount and period." },
                { step: "3", title: "Submit an enquiry", desc: "Send your contact details so the team can follow up." },
                { step: "4", title: "Review formal information", desc: "The team can provide the relevant information, income assumptions, terms and next steps." }
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

      {/* Product FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about the Fixed Return Income Portfolio</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Is this option focused on growth?",
                a: "The primary focus of this option is structured income. Clients interested in growth-focused positioning may prefer to review the Fixed Return Growth Portfolio or Private Equity: Growth."
              },
              {
                q: "Does fixed return mean guaranteed income?",
                a: "No. Website wording and calculator and comparison results are for general information only. Any confirmed terms, figures, income assumptions or guarantees must be stated in formal product documentation."
              },
              {
                q: "Is this option flexible?",
                a: "This option is positioned around defined terms and may have lower flexibility than flexible-access investment categories."
              },
              {
                q: "What happens after I enquire?",
                a: "The team can follow up with the relevant information and guide you through the next appropriate step."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Options Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink text-center lg:text-left">You may also want to compare</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fixed Return Growth Portfolio",
                desc: "For clients considering structured growth with defined terms.",
                link: "/investments/fixed-return-growth"
              },
              {
                title: "Private Equity: Income",
                desc: "For clients interested in private-equity-style income positioning.",
                link: "/investments/private-equity-income"
              },
              {
                title: "Private Equity: Flexi Access",
                desc: "For clients who may need a more adaptable investment route.",
                link: "/investments/private-equity-flexible-access"
              }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="border border-border-grey p-8 flex flex-col hover:border-navy/30 transition-colors group">
                <h3 className="text-xl font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed mb-8 flex-grow">{card.desc}</p>
                <Link href={card.link} className="inline-flex items-center text-sm font-bold text-navy uppercase tracking-wider group-hover:opacity-70 transition-opacity">
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to explore the Fixed Return Income Portfolio?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Start with a simple enquiry or Compare Investments to view an estimated result before taking the next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/compare" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">Compare Investments</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
