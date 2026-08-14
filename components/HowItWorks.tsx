"use client";
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import React, { useState } from 'react';

function FAQItem(props: { faq: { q: string, a: string }, key?: string | number }) {
  const { faq } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-soft-grey border border-border-grey mb-4 last:mb-0">
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

export default function HowItWorks() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">How It Works</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                A clear pathway from exploring options to submitting an enquiry.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Tiyani Magomani gives visitors a structured way to explore investment categories, compare basic estimates using the Investment Calculator and submit an enquiry for follow-up information.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  Start an Enquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/investments" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  View Investment Options
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="/images/contact-advisory-meeting.png" 
                  alt="Professional advisory and client meeting" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Explore</span>
              <span className="text-sm font-sans text-muted-blue">Review the investment categories</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Compare</span>
              <span className="text-sm font-sans text-muted-blue">Understand the main differences</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Calculate</span>
              <span className="text-sm font-sans text-muted-blue">Use the Investment Calculator</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Enquire</span>
              <span className="text-sm font-sans text-muted-blue">Submit your details for follow-up</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This website provides general information and an enquiry pathway only. It does not represent financial advice, a completed application or guaranteed outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">The Process</span>
            <h2 className="text-3xl font-serif text-ink mb-6">Start with information before taking the next step.</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none">
              <p>
                The Tiyani Magomani website is designed to help visitors understand the available investment categories before submitting an enquiry. Visitors can review the investment options, compare broad positioning, use the Investment Calculator and then request follow-up information from the team.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Process Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-3xl font-serif text-ink">How the enquiry pathway works</h2>
          </FadeIn>
          
          <div className="space-y-12">
            {[
              {
                step: "Step 1",
                title: "Explore the investment options",
                desc: "Review the available categories, including growth, income, flexible-access, fixed-return and offshore-focused options."
              },
              {
                step: "Step 2",
                title: "Compare the categories",
                desc: "Use the Investment Options page to understand the purpose, flexibility, income positioning and suggested horizon of each option."
              },
              {
                step: "Step 3",
                title: "Use the Investment Calculator",
                desc: "Enter an investment amount, choose a period and view a basic estimate across the available investment categories."
              },
              {
                step: "Step 4",
                title: "Submit an enquiry",
                desc: "Complete the enquiry form with your contact details and the investment category you are interested in."
              },
              {
                step: "Step 5",
                title: "Review formal information",
                desc: "The team can follow up with relevant product details, risks, terms and next steps before any decision is made."
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <div className="w-16 h-16 bg-navy text-white flex items-center justify-center font-serif text-2xl flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-ink mb-3">{item.title}</h3>
                    <p className="text-base font-sans text-muted-blue leading-relaxed m-0">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Explore Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Investment Categories</span>
            <h2 className="text-3xl font-serif text-ink">Choose the investment route you want to understand.</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Private Equity Growth Option", desc: "For clients focused on long-term capital growth.", link: "/investments/private-equity-growth" },
              { title: "Private Equity Income Option", desc: "For clients interested in income-focused investment positioning.", link: "/investments/private-equity-income" },
              { title: "Private Equity Flexible Access Option", desc: "For clients who may need a more adaptable investment route.", link: "/investments/private-equity-flexible-access" },
              { title: "Fixed Return Growth Option", desc: "For clients considering structured growth with defined terms.", link: "/investments/fixed-return-growth" },
              { title: "Fixed Return Income Option", desc: "For clients considering income-focused positioning with defined terms.", link: "/investments/fixed-return-income" },
              { title: "Offshore Global Option", desc: "For clients exploring offshore and international exposure.", link: "/investments/offshore-global" }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{card.desc}</p>
                <Link href={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity group">
                  View Option
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          
          <FadeIn>
            <Link href="/investments" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
              View All Investment Options <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 lg:py-32 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey/80 mb-4 block">Investment Calculator</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Calculate an estimate before you enquire.</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Use the Investment Calculator to compare estimated results across the available investment categories. Calculator results are estimates only and do not represent guaranteed outcomes.
            </p>
            <Link href="/calculator" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors inline-flex items-center uppercase tracking-wider">
              Use Calculator
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Enquiry Form Guidance Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">What to prepare before submitting an enquiry</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Your contact details", desc: "You will need to provide your name, email address and phone number." },
              { title: "Investment interest", desc: 'You can choose a specific option or select "Not sure yet".' },
              { title: "Estimated investment amount", desc: "You may provide a broad amount range if you are comfortable doing so." },
              { title: "Preferred contact method", desc: "You can indicate whether you prefer phone, email or WhatsApp follow-up." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4 max-w-4xl">
              <span className="font-semibold text-ink">Note:</span> Do not submit sensitive personal documents through the public enquiry form.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Happens After Enquiry Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-8">What happens after you submit an enquiry?</h2>
            <div className="space-y-6">
              {[
                { step: "Step 1: Enquiry received", desc: "Your enquiry is received through the website contact pathway." },
                { step: "Step 2: Interest reviewed", desc: "The investment category or message you selected is reviewed." },
                { step: "Step 3: Follow-up provided", desc: "The team can follow up with relevant information and next steps." },
                { step: "Step 4: Formal information reviewed", desc: "Product details, risks, terms and eligibility requirements must be reviewed before any decision is made." }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-border-grey p-6">
                  <h4 className="text-lg font-serif text-ink mb-2">{item.step}</h4>
                  <p className="text-base font-sans text-muted-blue leading-relaxed m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Responsible Information Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <FadeIn>
              <h2 className="text-3xl font-serif text-ink mb-6">A guided process, not a rushed decision.</h2>
              <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
                The enquiry pathway is designed to give visitors a structured starting point. Website content, calculator results and product summaries are provided for general guidance only and should not be treated as financial advice, guaranteed outcomes or confirmed product terms.
              </p>
            </FadeIn>
            
            <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "General guidance only", desc: "The website helps visitors understand broad investment categories." },
                { title: "No guaranteed outcomes", desc: "Calculator results and website information do not represent guaranteed outcomes." },
                { title: "Formal documentation required", desc: "Final product details, risks, fees, timelines and eligibility requirements are subject to formal documentation." },
                { title: "Enquiry before next steps", desc: "Visitors can submit an enquiry before receiving further information." }
              ].map((card, i) => (
                <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-6 flex flex-col justify-center">
                  <h3 className="text-base font-serif text-ink mb-2">{card.title}</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-white border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This page explains the general website enquiry pathway only. It does not represent financial advice, a completed application, confirmed product terms or an investment commitment. Investment values may rise or fall. Clients should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How It Works FAQ Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about how it works</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Can I invest directly on the website?",
                a: "No. The website provides general investment information and an enquiry pathway only. It does not include direct investment onboarding."
              },
              {
                q: "Do I need to know which option I want?",
                a: 'No. You can submit a general enquiry or choose "Not sure yet" if you are still comparing options.'
              },
              {
                q: "Should I use the calculator first?",
                a: "You can use the Investment Calculator before enquiring if you want a basic estimate across the available investment categories."
              },
              {
                q: "What happens after I submit an enquiry?",
                a: "The team can follow up with relevant information, product details and next steps based on your enquiry."
              },
              {
                q: "Is the information on the website financial advice?",
                a: "No. Website information is for general guidance only and does not replace formal financial advice or product documentation."
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to start the enquiry pathway?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Explore the investment categories, use the calculator or submit an enquiry so the team can follow up with relevant information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/investments" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                View Investment Options
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                Start an Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
