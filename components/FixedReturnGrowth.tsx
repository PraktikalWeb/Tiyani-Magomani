"use client";
import { ArrowRight } from 'lucide-react';import { investmentProducts } from '../src/lib/investment-products';

import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import CalculatorEngine from './CalculatorEngine';
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

export default function FixedReturnGrowth() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Investment Option</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Fixed Return Growth Option
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                A structured growth investment category for clients considering defined-term investment positioning with a focus on future value creation.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[15px]">
                  Start an Enquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/calculator" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  Use Calculator
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="/images/fixed-return-growth-hero.png" 
                  alt="Clients discussing structured long-term planning with an adviser" 
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
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {investmentProducts["fixed-return-growth"].figures.map((fig, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-6 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">{fig.label}</span>
                <span className="text-2xl font-serif text-ink">{fig.value}</span>
                {fig.subtext && <span className="text-sm font-sans text-muted-blue mt-2">{fig.subtext}</span>}
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          
          <FadeIn className="bg-soft-grey border border-border-grey p-6 md:p-8">
            <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">
              Figures are shown for general information and enquiry purposes only. They do not constitute financial advice or a guaranteed outcome. Final product details, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation. Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity. The relevant security is not guaranteed by any party.
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
              Built for clients who prefer defined growth positioning.
            </h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The Fixed Return Growth Option is positioned for clients who are considering a structured investment route with a defined-term approach and a focus on capital growth. It is suited to visitors who want clearer investment positioning while still reviewing all formal product details before making a decision.
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
              { title: "Defined-term investors", desc: "For clients who prefer an investment route with clearer term-based positioning." },
              { title: "Growth-focused clients", desc: "For clients whose primary objective is future value creation rather than regular income." },
              { title: "Structure-conscious clients", desc: "For clients who want to understand the investment terms before enquiring." },
              { title: "Clients comparing growth routes", desc: "For clients comparing private-equity growth and fixed-return-style growth options." }
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
                  { title: "Structured growth positioning", desc: "Designed around future value creation with defined-term investment positioning." },
                  { title: "Fixed-return-style category", desc: "Presented as a structured category for clients who prefer clearer investment terms." },
                  { title: "Defined investment period", desc: "Best understood as an option for clients who are comfortable with a defined investment horizon." },
                  { title: "Lower flexibility", desc: "This option may have less flexibility than flexible-access investment categories." },
                  { title: "Product calculator", desc: "Clients can estimate a basic growth-focused result before submitting an enquiry." },
                  { title: "Formal documentation required", desc: "Final product details, risks, terms, fees, timelines and eligibility requirements are subject to formal documentation." }
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
              The Fixed Return Growth Option is shown for general information and enquiry purposes only. Fixed-return-style positioning does not mean all outcomes are guaranteed unless confirmed in formal product documentation. Investment values may rise or fall, and calculator results shown on the website do not represent guaranteed outcomes. Clients should review formal product documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Calculator Section */}
      <CalculatorEngine lockedProduct={true} productId="fixed-return-growth" />

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
                { step: "1", title: "Review the option", desc: "Understand the purpose, positioning and defined-term considerations." },
                { step: "2", title: "Use the calculator", desc: "View a basic estimate based on your selected amount and period." },
                { step: "3", title: "Submit an enquiry", desc: "Send your contact details so the team can follow up." },
                { step: "4", title: "Review formal information", desc: "The team can provide the relevant information, terms and next steps." }
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
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about the Fixed Return Growth Option</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Is this option focused on income?",
                a: "The primary focus of this option is structured growth. Clients interested in regular income may prefer to review the Fixed Return Income Option or Private Equity Income Option."
              },
              {
                q: "Does fixed return mean guaranteed outcome?",
                a: "No. Website wording and calculator results are for general information only. Any confirmed terms, figures or guarantees must be stated in formal product documentation."
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
                title: "Fixed Return Income Option",
                desc: "For clients considering income-focused positioning with defined terms.",
                link: "/investments/fixed-return-income"
              },
              {
                title: "Private Equity Growth Option",
                desc: "For clients focused on long-term capital growth.",
                link: "/investments/private-equity-growth"
              },
              {
                title: "Offshore Global Option",
                desc: "For clients exploring offshore and international exposure.",
                link: "/investments/offshore-global"
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to explore the Fixed Return Growth Option?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Start with a simple enquiry or use the calculator to view an estimated result before taking the next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/calculator" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                Use Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
