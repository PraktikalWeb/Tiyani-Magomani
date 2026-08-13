import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Link } from 'react-router-dom';
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

export default function GrowthOptions() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Growth Options</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Investment routes focused on long-term value creation.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Explore growth-focused investment categories for clients considering future value creation, structured investment positioning and a longer-term approach before submitting an enquiry.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  Start an Enquiry
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/calculator" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  Use Calculator
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional financial planning and business growth" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Growth Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Goal</span>
              <span className="text-sm font-sans text-muted-blue">Capital growth</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Focus</span>
              <span className="text-sm font-sans text-muted-blue">Future value creation</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Horizon</span>
              <span className="text-sm font-sans text-muted-blue">Medium to long term</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Next Step</span>
              <span className="text-sm font-sans text-muted-blue">Compare growth options</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              Growth-focused investment information is provided for general guidance only and does not represent financial advice or guaranteed returns.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Growth Investing</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Built for clients thinking beyond short-term outcomes.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Growth-focused investment categories are designed for visitors who want to explore investment routes positioned around future value creation. These options may suit clients who are comfortable considering a medium to long-term view and who want to compare structured growth categories before making an enquiry.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Growth Options Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Available growth-focused options</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInStaggerItem className="bg-soft-grey border border-border-grey p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-ink mb-4">Private Equity Growth Option</h3>
                <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
                  For clients considering long-term capital growth through structured private-equity-style exposure.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex flex-col border-b border-border-grey/50 pb-4">
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-1">Key Focus</span>
                    <span className="text-base font-medium text-ink">Long-term capital growth</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-1">Best Suited For</span>
                    <span className="text-base font-medium text-ink">Clients looking for future value creation and a longer investment horizon.</span>
                  </div>
                </div>
              </div>
              <Link to="/investments/private-equity-growth" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full uppercase tracking-wider">
                View Details
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInStaggerItem>

            <FadeInStaggerItem className="bg-soft-grey border border-border-grey p-8 lg:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-serif text-ink mb-4">Fixed Return Growth Option</h3>
                <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
                  For clients considering structured growth with defined-term investment positioning.
                </p>
                <div className="space-y-4 mb-10">
                  <div className="flex flex-col border-b border-border-grey/50 pb-4">
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-1">Key Focus</span>
                    <span className="text-base font-medium text-ink">Structured growth</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-1">Best Suited For</span>
                    <span className="text-base font-medium text-ink">Clients who prefer clearer investment terms and defined-period positioning.</span>
                  </div>
                </div>
              </div>
              <Link to="/investments/fixed-return-growth" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full uppercase tracking-wider">
                View Details
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInStaggerItem>
          </FadeInStagger>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Growth Routes</span>
            <h2 className="text-3xl font-serif text-ink">Private-equity-style growth vs fixed-return-style growth.</h2>
          </FadeIn>
          
          <FadeIn>
            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border-grey">
                    <th className="py-4 px-6 text-sm font-sans uppercase tracking-widest text-muted-blue font-normal bg-soft-grey w-1/4">Option</th>
                    <th className="py-4 px-6 text-sm font-sans uppercase tracking-widest text-muted-blue font-normal bg-soft-grey">Main Goal</th>
                    <th className="py-4 px-6 text-sm font-sans uppercase tracking-widest text-muted-blue font-normal bg-soft-grey">Flexibility</th>
                    <th className="py-4 px-6 text-sm font-sans uppercase tracking-widest text-muted-blue font-normal bg-soft-grey">Suggested Horizon</th>
                    <th className="py-4 px-6 text-sm font-sans uppercase tracking-widest text-muted-blue font-normal bg-soft-grey w-1/3">Best Suited For</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-border-grey">
                    <td className="py-6 px-6 font-serif text-ink text-lg font-medium">Private Equity Growth Option</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Long-term capital growth</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Moderate</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Longer term</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Growth-focused clients exploring private-equity-style exposure</td>
                  </tr>
                  <tr>
                    <td className="py-6 px-6 font-serif text-ink text-lg font-medium">Fixed Return Growth Option</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Structured growth</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Lower</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Defined term</td>
                    <td className="py-6 px-6 font-sans text-muted-blue">Clients who prefer clearer term-based positioning</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-6">
              <div className="bg-white border border-border-grey p-6">
                <h3 className="text-xl font-serif text-ink mb-4 pb-4 border-b border-border-grey">Private Equity Growth Option</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Main Goal</span>
                    <span className="text-sm font-sans text-ink">Long-term capital growth</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Flexibility</span>
                    <span className="text-sm font-sans text-ink">Moderate</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Suggested Horizon</span>
                    <span className="text-sm font-sans text-ink">Longer term</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Best Suited For</span>
                    <span className="text-sm font-sans text-ink">Growth-focused clients exploring private-equity-style exposure</span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-border-grey p-6">
                <h3 className="text-xl font-serif text-ink mb-4 pb-4 border-b border-border-grey">Fixed Return Growth Option</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Main Goal</span>
                    <span className="text-sm font-sans text-ink">Structured growth</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Flexibility</span>
                    <span className="text-sm font-sans text-ink">Lower</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Suggested Horizon</span>
                    <span className="text-sm font-sans text-ink">Defined term</span>
                  </div>
                  <div>
                    <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-1">Best Suited For</span>
                    <span className="text-sm font-sans text-ink">Clients who prefer clearer term-based positioning</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who Growth Options May Suit Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Who growth options may suit</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Long-term investors", desc: "For clients who are comfortable considering a longer investment horizon." },
              { title: "Future-focused clients", desc: "For clients whose main objective is capital growth rather than regular income." },
              { title: "Structured investment seekers", desc: "For clients who want to understand defined investment categories before enquiring." },
              { title: "Clients comparing routes", desc: "For clients comparing private-equity-style and fixed-return-style growth options." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Investment Calculator CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey mb-4 block">Investment Calculator</span>
            <h2 className="text-4xl font-serif mb-6">Calculate a growth-focused estimate.</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed font-normal mb-10">
              Use the Investment Calculator to select a growth option, enter an amount and choose a period. Calculator results are estimates only and do not represent guaranteed returns.
            </p>
            <Link to="/calculator" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors inline-flex items-center group justify-center uppercase tracking-wider">
              Use Calculator
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Important Considerations Section */}
      <section className="py-20 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-white border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important considerations</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              Growth-focused investment categories are shown for general information and enquiry purposes only. Investment values may rise or fall, and calculator results do not represent guaranteed returns. Final product details, risks, fees, terms, timelines and eligibility requirements are subject to formal documentation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Growth Options FAQ Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about growth options</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Are growth options suitable for short-term investing?",
                a: "Growth-focused options are generally positioned for clients considering a medium to long-term view. Visitors who need short-term access should review the relevant formal product information before making any decision."
              },
              {
                q: "Do growth options provide regular income?",
                a: "The primary focus is capital growth. Clients interested in regular income may prefer to review income-focused options."
              },
              {
                q: "Are growth returns guaranteed?",
                a: "No. Website content and calculator results are estimates only and do not represent guaranteed returns."
              },
              {
                q: "Which growth option should I choose?",
                a: "The right option depends on your goals, investment horizon, flexibility needs and risk considerations. You can compare the options and submit an enquiry for follow-up."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">You may also want to compare</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Income Options", desc: "For clients interested in regular income potential.", link: "/investments/income-options" },
              { title: "Flexible Access", desc: "For clients who may need a more adaptable investment route.", link: "/investments/flexible-access" },
              { title: "Offshore Options", desc: "For clients exploring offshore and international exposure.", link: "/investments/offshore-options" }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-between min-h-[200px]">
                <div>
                  <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                  <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6">{card.desc}</p>
                </div>
                <Link to={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center hover:opacity-70 transition-opacity group">
                  View Option
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to explore growth-focused investment options?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Compare the available growth options, use the calculator or submit an enquiry so the team can follow up with relevant information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/calculator" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                Use Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
