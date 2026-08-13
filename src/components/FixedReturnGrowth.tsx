import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Link } from 'react-router-dom';
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
  const [amount, setAmount] = useState<string>('500000');
  const [period, setPeriod] = useState<string>('5');

  // Simple calculation logic for calculator estimate only (Placeholder logic)
  const numericAmount = parseFloat(amount) || 0;
  const numericPeriod = parseInt(period) || 0;
  // Estimate growth: ~9.5% fixed growth for placeholder estimate
  const estimatedFutureValue = numericAmount * Math.pow(1.095, numericPeriod);
  const estimatedGrowth = estimatedFutureValue - numericAmount;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(val);
  };

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
                <Link to="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[15px]">
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
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional corporate architecture" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Product Summary Strip */}
      <section className="bg-white border-y border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">Main Goal</span>
              <span className="text-lg font-serif text-ink">Structured growth</span>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">Income Positioning</span>
              <span className="text-lg font-serif text-ink">Low to moderate</span>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">Flexibility</span>
              <span className="text-lg font-serif text-ink">Lower</span>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">Suggested Horizon</span>
              <span className="text-lg font-serif text-ink">Defined term</span>
            </div>
          </div>
          <p className="text-sm font-sans text-muted-blue border-t border-border-grey pt-6 m-0">
            This information is for general guidance only and does not represent financial advice or guaranteed returns.
          </p>
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
              The Fixed Return Growth Option is shown for general information and enquiry purposes only. Fixed-return-style positioning does not mean all outcomes are guaranteed unless confirmed in formal product documentation. Investment values may rise or fall, and calculator results shown on the website do not represent guaranteed returns. Clients should review formal product documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Product Calculator Section */}
      <section className="py-20 lg:py-32 bg-off-white border-y border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Product Calculator</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Estimate your Fixed Return Growth Option</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Use the calculator to enter an investment amount and period for the Fixed Return Growth Option. The result is an estimate only and does not represent a guaranteed return.
            </p>
          </FadeIn>
          
          <FadeIn className="max-w-4xl mx-auto bg-white border border-border-grey p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">Investment Amount (ZAR)</label>
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">Investment Period (Years)</label>
                  <input 
                    type="number" 
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors"
                  />
                </div>
              </div>
              
              <div className="bg-navy text-white p-8 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Starting Amount</span>
                    <span className="block text-xl font-serif">{formatCurrency(numericAmount)}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Selected Period</span>
                    <span className="block text-xl font-serif">{numericPeriod} Years</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Estimated Growth</span>
                    <span className="block text-xl font-serif text-green-400">{formatCurrency(estimatedGrowth)}</span>
                  </div>
                  <div>
                    <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Estimated Future Value</span>
                    <span className="block text-3xl font-serif text-white">{formatCurrency(estimatedFutureValue)}</span>
                  </div>
                  <div className="pt-4 border-t border-white/20">
                    <p className="text-xs font-sans text-soft-grey/90 leading-relaxed m-0 italic">
                      Term note: Final terms are subject to formal product documentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 border-t border-border-grey pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-xl">
                Calculator results are estimates only and do not represent guaranteed returns. Final figures, terms and timelines are subject to formal product terms and documentation.
              </p>
              <Link to="/contact" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center justify-center flex-shrink-0 w-full md:w-auto">
                Start an Enquiry
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

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
                q: "Does fixed return mean guaranteed return?",
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
                <Link to={card.link} className="inline-flex items-center text-sm font-bold text-navy uppercase tracking-wider group-hover:opacity-70 transition-opacity">
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
              <Link to="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto">
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
