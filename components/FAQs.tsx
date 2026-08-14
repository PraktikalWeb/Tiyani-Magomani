"use client";
import { ArrowRight } from 'lucide-react';
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

export default function FAQs() {
  const groups = [
    {
      heading: "General Questions",
      items: [
        {
          q: "What does Tiyani Magomani offer?",
          a: "Tiyani Magomani presents structured investment categories, calculator estimates and enquiry pathways for visitors who want to explore investment options before taking the next step."
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
          q: "Do I need to know which investment option I want?",
          a: "No. You can submit a general enquiry if you are not sure which investment category best fits your goals."
        }
      ]
    },
    {
      heading: "Investment Options",
      items: [
        {
          q: "What investment options can I explore?",
          a: "Visitors can explore Private Equity Growth, Private Equity Income, Private Equity Flexible Access, Fixed Return Growth, Fixed Return Income and Offshore Global options."
        },
        {
          q: "Which investment option should I choose?",
          a: "The right option depends on your goals, investment horizon, income needs, access needs and risk considerations. You can review the categories and submit an enquiry for follow-up."
        },
        {
          q: "What is the difference between growth and income options?",
          a: "Growth-focused options are positioned around future value creation, while income-focused options are positioned around regular income potential."
        },
        {
          q: "What does flexible access mean?",
          a: "Flexible access means the category may have more adaptable access positioning than fully defined-term options. Access terms, timelines and conditions are subject to formal product documentation."
        },
        {
          q: "What does offshore global mean?",
          a: "The Offshore Global Option is positioned for visitors exploring international exposure and broader diversification beyond local investment opportunities."
        }
      ]
    },
    {
      heading: "Calculator Questions",
      items: [
        {
          q: "What is the Investment Calculator for?",
          a: "The Investment Calculator allows visitors to select an investment option, enter an amount and choose a period to view a basic estimate before submitting an enquiry."
        },
        {
          q: "Are calculator results guaranteed?",
          a: "No. Calculator results are estimates only and do not represent guaranteed outcomes or confirmed product figures."
        },
        {
          q: "Can I calculate all investment options?",
          a: "Yes. The main calculator page allows visitors to choose from all available investment categories."
        },
        {
          q: "Why do income options show different results?",
          a: "Income-focused options may show estimated monthly income and estimated total income, while growth-focused options may show estimated future value and estimated growth."
        },
        {
          q: "Should I use the calculator before enquiring?",
          a: "Yes, if you want a basic estimate first. The calculator can help you compare categories, but it does not replace formal product information."
        }
      ]
    },
    {
      heading: "Digital Investing",
      items: [
        {
          q: "What is the digital investing pathway?",
          a: "The digital pathway allows visitors to explore investment categories, compare estimates and submit an enquiry online before receiving follow-up information."
        },
        {
          q: "Does digital investing mean there is a client portal?",
          a: "No. The current website provides a public enquiry pathway only. It does not include a login, client portal or real investment onboarding system."
        },
        {
          q: "Can I complete a full investment application online?",
          a: "No. The website allows visitors to submit an enquiry only. Any formal application or documentation process must happen through the appropriate follow-up process."
        },
        {
          q: "What happens after I submit an enquiry?",
          a: "The team can follow up with relevant information, product details and next steps based on the investment category you selected."
        }
      ]
    },
    {
      heading: "Risk And Documentation",
      items: [
        {
          q: "Are returns guaranteed?",
          a: "No. Website information and calculator results do not represent guaranteed outcomes. Any confirmed terms or figures must be stated in formal product documentation."
        },
        {
          q: "Can investment values go down?",
          a: "Yes. Investment values may rise or fall depending on the product category, market conditions and other relevant risks."
        },
        {
          q: "Where can I find the final product terms?",
          a: "Final product details, risks, terms, fees, timelines and eligibility requirements are subject to formal product documentation provided through the appropriate process."
        },
        {
          q: "Should I seek financial guidance before investing?",
          a: "Yes. Visitors should review formal documentation and seek appropriate financial guidance before making any investment decision."
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">FAQs</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Questions about exploring investment options online.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Find answers about Tiyani Magomani’s investment categories, calculator estimates, digital enquiry pathway and what happens after you submit an enquiry.
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
                  src="/images/faqs-advisory-conversation.png" 
                  alt="Clients receiving answers from a financial adviser" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Category Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Investment Options</span>
              <span className="text-sm font-sans text-muted-blue">Growth, income, flexible-access, fixed-return and offshore categories</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Calculator</span>
              <span className="text-sm font-sans text-muted-blue">Basic estimates before enquiry</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Digital Pathway</span>
              <span className="text-sm font-sans text-muted-blue">Explore, compare and submit an enquiry online</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Next Steps</span>
              <span className="text-sm font-sans text-muted-blue">Follow-up and formal information</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              Website information is provided for general guidance and enquiry purposes only. It does not represent financial advice or guaranteed outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Intro Section & FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Start with the information most visitors ask first.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The FAQs below explain how the website works, what the investment categories mean, how the calculator should be used and what visitors can expect after submitting an enquiry.
            </p>
          </FadeIn>
          
          <div className="space-y-16">
            {groups.map((group, groupIndex) => (
              <FadeIn key={groupIndex} delay={0.1 * groupIndex}>
                <h3 className="text-2xl font-serif text-ink mb-8 pb-4 border-b border-border-grey">{group.heading}</h3>
                <div>
                  {group.items.map((faq, faqIndex) => (
                    <FAQItem key={`${groupIndex}-${faqIndex}`} faq={faq} />
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
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
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey mb-4 block">Need Help?</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Still have questions about the investment categories?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Submit an enquiry and the team can follow up with relevant information based on the option you are interested in.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group uppercase tracking-wider">
                Contact the Team
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Helpful Links Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Explore the next step.</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Investment Options",
                desc: "Compare all available investment categories.",
                btnText: "View Options",
                link: "/investments"
              },
              {
                title: "Investment Calculator",
                desc: "Calculate a basic estimate before enquiring.",
                btnText: "Use Calculator",
                link: "/calculator"
              },
              {
                title: "Digital Investing",
                desc: "Understand the online enquiry pathway.",
                btnText: "View Digital Investing",
                link: "/digital-investing"
              },
              {
                title: "Contact",
                desc: "Submit an enquiry for follow-up.",
                btnText: "Start Enquiry",
                link: "/contact"
              }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[260px]">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-8 flex-grow">{card.desc}</p>
                <Link href={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity">
                  {card.btnText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              The information on this FAQs page is provided for general guidance and enquiry purposes only. It does not represent financial advice, a completed application, confirmed product terms or guaranteed outcomes. Investment values may rise or fall. Clients should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Ready to explore your investment options?</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Review the investment categories or submit an enquiry so the team can follow up with relevant information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/investments" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                View Investment Options
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="text-navy font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-navy px-8 py-4">
                Start an Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
