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

export default function RiskDisclosure() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Risk Disclosure</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Important information before exploring investment options.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Investment decisions should be made carefully. This page explains key risks and considerations related to investment categories, calculator estimates, offshore exposure, income assumptions and enquiry-based information.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/investments" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  View Investment Options
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  Contact Us
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional finance documents and planning" 
                  className="w-full h-full object-cover grayscale-[20%]"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Risk Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Market Risk</span>
              <span className="text-sm font-sans text-muted-blue">Values may rise or fall</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Calculator</span>
              <span className="text-sm font-sans text-muted-blue">Estimates only</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Documentation</span>
              <span className="text-sm font-sans text-muted-blue">Formal terms apply</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Advice</span>
              <span className="text-sm font-sans text-muted-blue">Guidance may be needed</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This risk disclosure is provided for website information purposes and must be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">General investment risk</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                Investment categories shown on this website are provided for general information and enquiry purposes only. Investment values may rise or fall, and visitors should not rely only on website content or calculator results when making financial decisions.
              </p>
            </div>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4 max-w-4xl">
              <span className="font-semibold text-ink">Note:</span> Final product details, risks, fees, timelines, income assumptions and eligibility requirements are subject to formal product documentation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* No Financial Advice Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 max-w-4xl">
            <h2 className="text-3xl font-serif text-ink mb-6">No financial advice</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Information on this website should not be treated as financial advice, investment advice, a product recommendation or a confirmed offer to invest. Visitors should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General information only", desc: "Website content helps visitors understand broad investment categories." },
              { title: "No personal recommendation", desc: "The website does not assess personal circumstances, suitability or risk profile." },
              { title: "Formal review required", desc: "Final product terms and risks must be reviewed before any decision is made." },
              { title: "Enquiry-led process", desc: "Submitting an enquiry does not represent an investment commitment." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Main Risk Categories Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Key risks to consider</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Market risk", desc: "Investment values may rise or fall depending on market conditions and other factors." },
              { title: "Liquidity risk", desc: "Some investment categories may limit when or how funds can be accessed." },
              { title: "Income risk", desc: "Income-focused estimates may change and do not represent guaranteed income." },
              { title: "Term risk", desc: "Defined-term options may have conditions, timelines or restrictions that must be reviewed." },
              { title: "Currency risk", desc: "Offshore-focused categories may be affected by exchange-rate movement and international market conditions." },
              { title: "Information risk", desc: "Website summaries are high-level and may not include all formal product details." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Calculator Risk Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Investment Calculator results</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal mb-8">
              The Investment Calculator is provided as a general estimate tool only. Calculator results are based on placeholder or supplied assumptions and do not represent guaranteed returns, confirmed product figures or financial advice.
            </p>
            
            <ul className="space-y-4 mb-12">
              {[
                "Calculator results are estimates only",
                "Final figures may differ from website results",
                "Results do not represent guaranteed returns",
                "Income estimates are not guaranteed income",
                "Offshore estimates may be affected by currency movements",
                "Final figures are subject to formal product documentation"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-navy rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                  <span className="text-base font-sans text-ink leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            
            <Link to="/calculator" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-max uppercase tracking-wider">
              Use Calculator
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Product-Specific Considerations Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Product category considerations</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Private Equity Growth Option",
                desc: "Growth-focused categories may involve longer investment horizons and market-related risk.",
                link: "/investments/private-equity-growth"
              },
              {
                title: "Private Equity Income Option",
                desc: "Income-focused categories may involve income assumptions that must be confirmed formally.",
                link: "/investments/private-equity-income"
              },
              {
                title: "Private Equity Flexible Access Option",
                desc: "Flexible access does not mean instant access or guaranteed liquidity.",
                link: "/investments/private-equity-flexible-access"
              },
              {
                title: "Fixed Return Growth Option",
                desc: "Fixed-return-style positioning does not mean returns are guaranteed unless confirmed in formal documentation.",
                link: "/investments/fixed-return-growth"
              },
              {
                title: "Fixed Return Income Option",
                desc: "Income estimates and defined terms must be confirmed through formal product documentation.",
                link: "/investments/fixed-return-income"
              },
              {
                title: "Offshore Global Option",
                desc: "Offshore exposure may involve currency risk, international market risk and regulatory considerations.",
                link: "/investments/offshore-global"
              }
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

      {/* Enquiry Process Notice */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">Before taking the next step</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Visitors should use the website as a starting point only. Before making any decision, visitors should review formal information, understand the relevant risks and seek appropriate guidance where needed.
            </p>
          </FadeIn>
          
          <div className="space-y-6">
            {[
              { step: "Step 1: Explore the category", desc: "Review the broad purpose of the investment option." },
              { step: "Step 2: Use the calculator carefully", desc: "Treat calculator results as estimates only." },
              { step: "Step 3: Submit an enquiry", desc: "Request follow-up information from the team." },
              { step: "Step 4: Review formal documents", desc: "Confirm product details, risks, fees, timelines and terms before any decision." }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-soft-grey border border-border-grey p-6 md:p-8">
                  <h4 className="text-lg font-serif text-ink mb-2">{item.step}</h4>
                  <p className="text-base font-sans text-muted-blue leading-relaxed m-0">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Important Legal Notice */}
      <section className="py-20 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-white border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important notice</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This Risk Disclosure page is provided as website content for general information purposes only. It should not be treated as legal advice, financial advice or final compliance wording. The final disclosure must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Risk Disclosure FAQ Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about investment risk</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Are investment returns guaranteed?",
                a: "No. Website information and calculator results do not represent guaranteed returns. Any confirmed terms must be stated in formal product documentation."
              },
              {
                q: "Can investment values go down?",
                a: "Yes. Investment values may rise or fall depending on the product category, market conditions and other risks."
              },
              {
                q: "Are calculator results final?",
                a: "No. Calculator results are estimates only and may differ from final product figures."
              },
              {
                q: "Does flexible access mean instant access?",
                a: "No. Access terms, timelines and conditions are subject to formal product documentation."
              },
              {
                q: "Should I seek financial guidance?",
                a: "Yes. Visitors should review formal documentation and seek appropriate financial guidance before making any investment decision."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Legal Pages Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Related information</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Legal Centre", desc: "Find all website legal and policy information.", link: "/legal" },
              { title: "Terms and Conditions", desc: "Review the general terms for using the website.", link: "/terms" },
              { title: "Privacy Policy", desc: "Understand how visitor information may be handled.", link: "/privacy" },
              { title: "Complaints Policy", desc: "Learn how to raise a concern.", link: "/complaints" }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{card.desc}</p>
                <Link to={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity group">
                  View Page
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to explore with the right context?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Review the investment options, use the calculator carefully or submit an enquiry for follow-up information.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/investments" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                View Investment Options
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                Start an Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
