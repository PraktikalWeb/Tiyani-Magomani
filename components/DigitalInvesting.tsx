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

export default function DigitalInvesting() {
  return (
    <div className="tm-editorial-page tm-digital-investing-page tm-site-page">
      {/* Hero Section */}
      <section className="tm-editorial-hero">
        <img src="/images/digital-investing-planning.png" alt="Two people exploring investment information online" className="tm-editorial-hero-image" />
        <div className="tm-editorial-hero-overlay" />
        <div className="tm-editorial-shell tm-editorial-hero-content">
          <FadeIn className="tm-editorial-hero-copy">
            <h1>A simpler way to explore investment options online.</h1>
            <p>
              Review investment categories, compare estimates and submit an enquiry when you are ready for the next step.
            </p>
            <div className="tm-editorial-hero-actions">
              <Link href="/contact" className="tm-editorial-button tm-editorial-button-primary group">
                Start an Enquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/compare" className="tm-editorial-button tm-editorial-button-secondary">
                Compare Investments
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Digital Pathway Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Explore</span>
              <span className="text-sm font-sans text-muted-blue">View investment categories</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Compare</span>
              <span className="text-sm font-sans text-muted-blue">Use the Compare Investments</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Enquire</span>
              <span className="text-sm font-sans text-muted-blue">Submit your details</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Follow Up</span>
              <span className="text-sm font-sans text-muted-blue">Receive relevant information</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This digital pathway is for general information and enquiry purposes only. It does not represent financial advice, real onboarding or guaranteed outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Overview</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Designed to help visitors understand before they enquire.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The Digital Investing page gives visitors a simple way to explore Tiyani Magomani’s investment categories online. Instead of starting with complex paperwork, visitors can first review the available options, compare basic estimates using the calculator and submit an enquiry for follow-up.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How Digital Investing Works */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">How the digital investing pathway works</h2>
          </FadeIn>
          
          <div className="max-w-5xl mx-auto">
            <FadeInStagger className="tm-digital-pathway-grid">
              {[
                { title: "Explore the options", desc: "Review the available investment categories, including growth, income, flexible-access, fixed-return and offshore-focused options." },
                { title: "Compare the categories", desc: "Use the Investment Options page to understand the purpose, flexibility and positioning of each category." },
                { title: "Compare Investments", desc: "Enter an amount, select a period and compare estimated results across the available investment categories." },
                { title: "Submit an enquiry", desc: "Send your contact details so the team can follow up with the relevant information." },
                { title: "Review formal information", desc: "The team can provide the relevant product details, risks, terms and next steps before any decision is made." }
              ].map((step, index) => (
                <FadeInStaggerItem key={index} className="tm-digital-pathway-step">
                  <span>{index + 1}</span>
                  <div>
                    <h3 className="text-lg font-serif text-ink mb-3">{step.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 font-normal">{step.desc}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </section>

      {/* Why Use The Digital Pathway */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Why start online?</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Clear starting point", desc: "Begin by understanding the available investment categories before submitting an enquiry." },
              { title: "Easy comparison", desc: "Compare broad investment routes such as growth, income, flexible access and offshore exposure." },
              { title: "Calculator support", desc: "Use the Compare Investments to view basic estimates before speaking to the team." },
              { title: "Enquiry-led process", desc: "The online journey helps visitors request follow-up without completing a full investment application." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[240px]">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Investment Categories Preview */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Available Categories</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-10">Explore the investment categories online.</h2>
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
                    <h3 className="text-xl font-serif text-ink mb-4">{product.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-8 flex-grow">{product.desc}</p>
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

      {/* Calculator CTA Section */}
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
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-4 block">Compare Investments</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Compare estimates before you enquire.</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Use the Compare Investments to select an investment category, enter an amount and view a basic estimate. Calculator results are estimates only and do not represent guaranteed outcomes.
            </p>
            <Link href="/compare" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center justify-center w-full sm:w-auto inline-flex uppercase tracking-wider">Compare Investments<ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Trust And Safety Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <FadeIn className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6 leading-tight">A guided digital process, not a rushed decision.</h2>
              <p className="text-lg font-sans text-muted-blue leading-relaxed">
                The digital pathway is designed to give visitors general information before they submit an enquiry. It does not replace formal advice, product documentation or suitability checks.
              </p>
            </FadeIn>
            
            <FadeInStagger className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "General information only", desc: "The website helps visitors understand investment categories at a high level." },
                { title: "No guaranteed outcomes", desc: "Calculator results and website content are estimates and general information only." },
                { title: "Formal documents required", desc: "Final product details, terms, risks, fees and eligibility requirements are subject to formal documentation." },
                { title: "Human follow-up", desc: "Visitors can submit an enquiry so the team can provide the relevant next steps." }
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

      {/* Important Information Section */}
      <section className="py-20 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              Digital investing information on this website is provided for general guidance and enquiry purposes only. It does not represent financial advice, a completed application, confirmed product terms or guaranteed outcomes. Investment values may rise or fall. Clients should review formal product documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Digital Investing FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about digital investing</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Can I invest directly on the website?",
                a: "No. The website provides a digital enquiry pathway only. Visitors can explore options, Compare Investments and submit an enquiry for follow-up."
              },
              {
                q: "Are calculator and comparison results guaranteed?",
                a: "No. Calculator results are estimates only and do not represent guaranteed outcomes or confirmed product figures."
              },
              {
                q: "What happens after I submit an enquiry?",
                a: "The team can follow up with the relevant information, product details and next steps."
              },
              {
                q: "Do I need to choose a product before enquiring?",
                a: "No. You can submit a general enquiry if you are unsure which investment category best fits your goals."
              },
              {
                q: "Is this financial advice?",
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Start your digital investment enquiry.</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Explore the available investment categories, Compare Investments and submit an enquiry when you are ready for the team to follow up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
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
