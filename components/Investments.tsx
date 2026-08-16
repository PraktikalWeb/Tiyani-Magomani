"use client";
import { ArrowRight, TrendingUp, Wallet, SlidersHorizontal, Lock, Globe } from 'lucide-react';import { investmentProducts } from '../src/lib/investment-products';

import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
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
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function Investments() {
  return (
    <main className="flex-grow pt-20">
      {/* 1. Page Hero */}
      <section className="bg-white border-b border-border-grey overflow-hidden relative flex flex-col lg:block">
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-off-white to-white opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
          
          <FadeIn delay={0.2} className="w-full lg:w-[55%] relative z-20">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block mt-4 lg:mt-0">Investment Options</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8 text-ink">
              Explore structured investment pathways built around growth, income and flexibility.
            </h1>
            <p className="text-lg md:text-xl font-sans text-[#4B5563] leading-relaxed mb-10 max-w-2xl font-normal">
              Tiyani Magomani presents a clear range of investment categories for clients considering growth-focused, income-focused, flexible-access, fixed-return and offshore opportunities. Each option is designed to help visitors understand the purpose of the investment before submitting an enquiry.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8 lg:mb-0">
              <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/compare" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-sm flex items-center justify-center w-full sm:w-auto">Compare Investments</Link>
            </div>
          </FadeIn>

          {/* Mobile/Tablet Image */}
          <FadeIn delay={0.4} className="w-full lg:hidden relative z-10 mt-8 mb-4">
             <div className="relative w-full aspect-video">
                <img 
                  src="/images/investment-options-team.png" 
                  alt="Clients discussing investment options with an adviser" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/5 mix-blend-multiply"></div>
             </div>
          </FadeIn>
        </div>

        {/* Desktop Absolute Image */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[42vw] h-[70%] z-10">
          <img 
            src="/images/investment-options-team.png" 
            alt="Clients discussing investment options with an adviser" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/5 mix-blend-multiply"></div>
        </div>
      </section>

      {/* 2. Investment Category Intro */}
      <section className="py-24 bg-soft-grey">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/3">
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Structured Choices</span>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Different goals need different investment routes.</h2>
              <p className="text-muted-blue font-sans leading-relaxed text-lg mb-8">
                Some clients may be looking for long-term capital growth, while others may prefer income potential, flexible access, defined terms or offshore exposure. This page groups the main investment options into clear categories so visitors can compare them before making an enquiry.
              </p>
            </div>
            
            <div className="w-full lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-t border-border-grey pt-6">
                  <h3 className="text-lg font-serif text-ink mb-2">Growth</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed">For clients considering long-term value creation and capital growth.</p>
                </div>
                <div className="border-t border-border-grey pt-6">
                  <h3 className="text-lg font-serif text-ink mb-2">Income</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed">For clients interested in regular income potential.</p>
                </div>
                <div className="border-t border-border-grey pt-6">
                  <h3 className="text-lg font-serif text-ink mb-2">Flexibility</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed">For clients who may need a more adaptable investment route.</p>
                </div>
                <div className="border-t border-border-grey pt-6">
                  <h3 className="text-lg font-serif text-ink mb-2">Global Exposure</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed">For clients exploring offshore-focused opportunities.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 3. Main Investment Option Cards */}
      <section className="py-24 bg-off-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: "growth",
                category: "Capital Growth",
                title: "Private Equity Growth Option",
                desc: "For clients considering long-term growth-focused investment exposure through a structured private-equity-style category.",
                focus: "Long-term capital growth",
                suited: "Clients looking for future value creation and a longer investment horizon.",
                route: "/investments/private-equity-growth",
                icon: <TrendingUp className="w-5 h-5" />
              },
              {
                id: "income",
                category: "Regular Income",
                title: "Private Equity Income Option",
                desc: "For clients interested in income-focused investment structures and regular income potential.",
                focus: "Income potential",
                suited: "Clients who want an investment category positioned around income generation.",
                route: "/investments/private-equity-income",
                icon: <Wallet className="w-5 h-5" />
              },
              {
                id: "flexible-access",
                category: "Flexible Access",
                title: "Private Equity Flexible Access Option",
                desc: "For clients who want a more adaptable investment route with flexible-access positioning.",
                focus: "Flexibility and access",
                suited: "Clients who may need more flexibility while still exploring structured investment opportunities.",
                route: "/investments/private-equity-flexible-access",
                icon: <SlidersHorizontal className="w-5 h-5" />
              },
              {
                id: "fixed-return",
                category: "Structured Growth",
                title: "Fixed Return Growth Option",
                desc: "For clients interested in structured growth with defined investment terms and fixed-return style positioning.",
                focus: "Defined terms and growth positioning",
                suited: "Clients who prefer a clearer investment structure and a defined investment period.",
                route: "/investments/fixed-return-growth",
                icon: <Lock className="w-5 h-5" />
              },
              {
                category: "Fixed Income",
                title: "Fixed Return Income Option",
                desc: "For clients looking at fixed-income style positioning and regular income potential.",
                focus: "Income structure",
                suited: "Clients considering an income-focused route with defined terms.",
                route: "/investments/fixed-return-income",
                icon: <Lock className="w-5 h-5" /> // both fixed return get lock
              },
              {
                id: "offshore",
                category: "Global Exposure",
                title: "Offshore Global Option",
                desc: "For clients exploring offshore investment opportunities and international market exposure.",
                focus: "Offshore and global exposure",
                suited: "Clients looking to diversify beyond local investment exposure.",
                route: "/investments/offshore-global",
                icon: <Globe className="w-5 h-5" />
              }
            ].map((product, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 hover:border-navy/30 transition-colors flex flex-col h-full group" id={product.id}>
                <div className="mb-auto">
                  <div className="flex justify-between items-start mb-6">
                    <span className="inline-block bg-soft-grey text-navy px-3 py-1 text-xs font-sans uppercase tracking-wider">
                      {product.category}
                    </span>
                    <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif text-ink mb-4">{product.title}</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed mb-6">
                    {product.desc}
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue">Key Focus</span>
                      <p className="text-sm text-ink m-0">{product.focus}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue">Best Suited For</span>
                      <p className="text-sm text-ink m-0">{product.suited}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border-grey">
                  <Link href={product.route} className="inline-flex items-center text-sm font-medium text-navy uppercase tracking-wider group-hover:opacity-70 transition-opacity">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </FadeIn>
      </section>

            {/* 4. Compare key product figures */}
      <section className="py-24 bg-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Investments</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Compare key product figures</h2>
            <p className="text-muted-blue font-sans text-lg max-w-3xl leading-relaxed">
              Use this comparison as a high-level guide before reviewing each product page or submitting an enquiry. Formal details, risks, terms and eligibility requirements are subject to official product documentation.
            </p>
          </div>
          
          <div className="w-full">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto pb-6">
              <table className="w-full text-left border-collapse border border-border-grey min-w-[900px]">
                <thead>
                  <tr className="bg-soft-grey text-xs uppercase tracking-widest text-muted-blue border-b border-border-grey">
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Investment Option</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Minimum</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Rate / Performance</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Term</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Income / Growth Focus</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Risk Profile</th>
                    <th className="p-4 font-sans font-semibold whitespace-nowrap">Access / Capital Protection</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-sans text-ink">
                  {[
                    {
                      name: "Private Equity Growth Option",
                      min: "R100,000",
                      rate: "13.2% p.a.",
                      term: "5 years",
                      focus: "Growth on capital",
                      risk: "Medium–High",
                      access: "Long-term private-equity-style exposure"
                    },
                    {
                      name: "Private Equity Income Option",
                      min: "R100,000",
                      rate: "13.2% p.a.",
                      term: "5 years",
                      focus: "Monthly income",
                      risk: "Medium–High",
                      access: "1% annual bonus over R1 million"
                    },
                    {
                      name: "Private Equity Flexible Access Option",
                      min: "R100,000",
                      rate: "11% p.a.",
                      term: "12 months",
                      focus: "Growth or monthly dividend",
                      risk: "Medium–High",
                      access: "Access to available accrued interest, subject to terms"
                    },
                    {
                      name: "Fixed Return Growth Option",
                      min: "R100,000",
                      rate: "12.6% p.a.",
                      term: "5 years",
                      focus: "Growth on capital",
                      risk: "Low–Medium",
                      access: "100% capital protection at maturity, subject to terms"
                    },
                    {
                      name: "Fixed Return Income Option",
                      min: "R100,000",
                      rate: "12.6% p.a.",
                      term: "5 years",
                      focus: "Monthly income",
                      risk: "Low–Medium",
                      access: "100% capital protection at maturity, subject to terms"
                    },
                    {
                      name: "Offshore Global Option",
                      min: "R50,000",
                      rate: "Scenario-based, 7% p.a. average return assumption",
                      term: "5 years",
                      focus: "Offshore / USD-linked exposure",
                      risk: "Subject to offshore and currency exposure",
                      access: "100% capital return at maturity, subject to terms"
                    }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border-grey hover:bg-off-white transition-colors">
                      <td className="p-4 border-r border-border-grey font-medium whitespace-nowrap">{row.name}</td>
                      <td className="p-4 border-r border-border-grey">{row.min}</td>
                      <td className="p-4 border-r border-border-grey">{row.rate}</td>
                      <td className="p-4 border-r border-border-grey">{row.term}</td>
                      <td className="p-4 border-r border-border-grey">{row.focus}</td>
                      <td className="p-4 border-r border-border-grey">{row.risk}</td>
                      <td className="p-4">{row.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile/Tablet Stacked Cards */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  name: "Private Equity Growth Option",
                  min: "R100,000",
                  rate: "13.2% p.a.",
                  term: "5 years",
                  focus: "Growth on capital",
                  risk: "Medium–High",
                  access: "Long-term private-equity-style exposure"
                },
                {
                  name: "Private Equity Income Option",
                  min: "R100,000",
                  rate: "13.2% p.a.",
                  term: "5 years",
                  focus: "Monthly income",
                  risk: "Medium–High",
                  access: "1% annual bonus over R1 million"
                },
                {
                  name: "Private Equity Flexible Access Option",
                  min: "R100,000",
                  rate: "11% p.a.",
                  term: "12 months",
                  focus: "Growth or monthly dividend",
                  risk: "Medium–High",
                  access: "Access to available accrued interest, subject to terms"
                },
                {
                  name: "Fixed Return Growth Option",
                  min: "R100,000",
                  rate: "12.6% p.a.",
                  term: "5 years",
                  focus: "Growth on capital",
                  risk: "Low–Medium",
                  access: "100% capital protection at maturity, subject to terms"
                },
                {
                  name: "Fixed Return Income Option",
                  min: "R100,000",
                  rate: "12.6% p.a.",
                  term: "5 years",
                  focus: "Monthly income",
                  risk: "Low–Medium",
                  access: "100% capital protection at maturity, subject to terms"
                },
                {
                  name: "Offshore Global Option",
                  min: "R50,000",
                  rate: "Scenario-based, 7% p.a. average return assumption",
                  term: "5 years",
                  focus: "Offshore / USD-linked exposure",
                  risk: "Subject to offshore and currency exposure",
                  access: "100% capital return at maturity, subject to terms"
                }
              ].map((row, i) => (
                <div key={i} className="bg-soft-grey border border-border-grey p-6">
                  <h3 className="text-xl font-serif text-ink mb-6 border-b border-border-grey pb-4">{row.name}</h3>
                  <div className="space-y-4 text-sm font-sans">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Minimum</span>
                      <span className="text-ink">{row.min}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Rate / Performance</span>
                      <span className="text-ink">{row.rate}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Term</span>
                      <span className="text-ink">{row.term}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Income / Growth Focus</span>
                      <span className="text-ink">{row.focus}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Risk Profile</span>
                      <span className="text-ink">{row.risk}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Access / Capital Protection</span>
                      <span className="text-ink">{row.access}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </FadeIn>
      </section>

      {/* 5. Calculator CTA Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/investment-calculator-planning.png" 
            alt="Two people reviewing investment options together" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-navy/50"></div>
        </div>
        <FadeIn className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-sans uppercase tracking-widest text-soft-grey mb-6 block">Compare Investments</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Estimate before you enquire.</h2>
          <p className="text-soft-grey/90 font-sans leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
            Compare Investments to select an investment amount, choose a category and view an estimate before submitting an enquiry. Estimates are estimates only and do not represent guaranteed outcomes.
          </p>
          <Link href="/compare" className="inline-block bg-transparent border border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-navy transition-colors relative overflow-hidden group">
            <span className="relative z-10">Compare Investments</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </Link>
        </FadeIn>
      </section>

      {/* 6. Enquiry Guidance Section */}
      <section className="py-24 bg-soft-grey">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Guided Enquiry Process</span>
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Not sure which option fits your goals?</h2>
              <p className="text-muted-blue font-sans text-lg mb-8 leading-relaxed">
                You can start with a simple enquiry. The team can follow up with the relevant information and help you understand which investment category may be most appropriate for your needs.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Choose the investment category you are interested in",
                  "Submit your basic contact details",
                  "Receive follow-up from the team",
                  "Review the relevant information before continuing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-navy mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-blue font-sans">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact" className="inline-block bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors">
                Speak to the Team
              </Link>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white border border-border-grey p-8 md:p-12 h-full flex flex-col justify-center">
                <div className="border-l-4 border-navy pl-6 mb-6">
                  <h3 className="text-xl font-serif text-ink mb-2">A clear pathway</h3>
                  <p className="text-muted-blue font-sans leading-relaxed">
                    We believe in providing transparent, structured information so you can make considered decisions about your financial future.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 7. Responsible Information Notice */}
      <section className="py-12 bg-off-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-border-grey p-8 md:p-10 text-center max-w-4xl mx-auto">
            <h3 className="text-lg font-serif text-ink mb-4">Important information</h3>
            <p className="text-sm font-sans text-muted-blue leading-relaxed">
              The investment categories shown on this page are for general information and enquiry purposes only. They do not represent financial advice or guaranteed outcomes. Product details, risks, terms, eligibility requirements and final figures are subject to formal documentation.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 8. FAQ Preview */}
      <section className="py-24 bg-white">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-ink text-center mb-16">Questions about investment options?</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Which investment option should I choose?",
                a: "The right option depends on your goals, investment horizon, income needs and risk considerations. You can start by reviewing the categories and submitting an enquiry for follow-up."
              },
              {
                q: "Are returns guaranteed?",
                a: "No. Any figures or estimates shown on the website are estimates only unless confirmed in formal product documentation. Investments may carry risk."
              },
              {
                q: "Can I compare the options before enquiring?",
                a: "Yes. The comparison section and calculator are designed to help visitors understand the available categories before submitting an enquiry."
              },
              {
                q: "What happens after I submit an enquiry?",
                a: "The team can follow up with the relevant information and guide you through the next appropriate step."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/faqs" className="inline-block bg-white border border-border-grey text-navy px-8 py-3 font-medium hover:border-navy transition-colors">
              View All FAQs
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 9. Final CTA */}
      <section className="py-24 bg-soft-grey text-center">
        <FadeIn className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to explore your investment options?</h2>
          <p className="text-muted-blue font-sans text-lg mb-10 leading-relaxed">
            Start with a simple enquiry or Compare Investments to compare estimates across the available investment categories.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center justify-center group">
              Start an Enquiry
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/compare" className="bg-white border border-border-grey text-navy px-8 py-4 font-medium hover:border-navy transition-colors flex items-center justify-center">Compare Investments</Link>
          </div>
        </FadeIn>
      </section>
      
    </main>
  );
}
