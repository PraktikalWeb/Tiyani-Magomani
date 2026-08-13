import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Link } from 'react-router-dom';
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

export default function Calculator() {
  const [option, setOption] = useState<string>('Private Equity Growth Option');
  const [amount, setAmount] = useState<string>('');
  const [period, setPeriod] = useState<string>('60');

  const [hasCalculated, setHasCalculated] = useState(false);
  const [resultData, setResultData] = useState<{
    option: string;
    amount: number;
    months: number;
    isIncome: boolean;
    futureValue?: number;
    growth?: number;
    monthlyIncome?: number;
    totalIncome?: number;
  } | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;

    const numAmount = parseFloat(amount) || 0;
    const numMonths = parseInt(period) || 0;
    const numYears = numMonths / 12;
    
    const isIncome = option.includes('Income');

    let futureValue = 0;
    let growth = 0;
    let monthlyIncome = 0;
    let totalIncome = 0;

    if (isIncome) {
      // Placeholder: ~8.5% annual income
      const annualRate = 0.085;
      const annualIncome = numAmount * annualRate;
      monthlyIncome = annualIncome / 12;
      totalIncome = monthlyIncome * numMonths;
    } else {
      // Placeholder: ~9.5% annual growth
      const annualRate = 0.095;
      futureValue = numAmount * Math.pow(1 + annualRate, numYears);
      growth = futureValue - numAmount;
    }

    setResultData({
      option,
      amount: numAmount,
      months: numMonths,
      isIncome,
      futureValue,
      growth,
      monthlyIncome,
      totalIncome
    });
    setHasCalculated(true);
  };

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
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Investment Calculator</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Estimate your investment options before you enquire.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Use the calculator to compare estimated outcomes across Tiyani Magomani’s investment categories. Results are estimates only and do not represent guaranteed returns.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a href="#calculator" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[15px]">
                  Start Calculating
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link to="/investments" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  View Investment Options
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional finance planning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Calculator Intro Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Options</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-8 leading-tight">
                One calculator for all investment categories.
              </h2>
              <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
                The calculator allows visitors to select an investment option, enter an amount and choose a period. The result gives a basic estimate to help visitors compare investment categories before submitting an enquiry.
              </p>
            </FadeIn>
          </div>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border-grey pt-12">
            {[
              { title: "Product selection", desc: "Choose from the available investment categories." },
              { title: "Estimated result", desc: "View a basic estimate based on the selected amount and period." },
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

      {/* Main Calculator Section */}
      <section id="calculator" className="py-20 lg:py-32 bg-off-white border-y border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Investment Calculator</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Calculate an estimated result.</h2>
          </FadeIn>
          
          <FadeIn className="max-w-4xl mx-auto bg-white border border-border-grey p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <form onSubmit={handleCalculate} className="space-y-8 flex flex-col justify-center">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">Investment Option</label>
                  <div className="relative">
                    <select 
                      value={option}
                      onChange={(e) => setOption(e.target.value)}
                      className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                    >
                      <option value="Private Equity Growth Option">Private Equity Growth Option</option>
                      <option value="Private Equity Income Option">Private Equity Income Option</option>
                      <option value="Private Equity Flexible Access Option">Private Equity Flexible Access Option</option>
                      <option value="Fixed Return Growth Option">Fixed Return Growth Option</option>
                      <option value="Fixed Return Income Option">Fixed Return Income Option</option>
                      <option value="Offshore Global Option">Offshore Global Option</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">Investment Amount</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <span className="text-muted-blue font-sans">R</span>
                    </div>
                    <input 
                      type="number" 
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      className="w-full bg-soft-grey border border-border-grey p-4 pl-10 font-sans text-ink focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">Investment Period</label>
                  <div className="relative">
                    <select 
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                    >
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                      <option value="36">36 months</option>
                      <option value="60">60 months</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center justify-center cursor-pointer uppercase tracking-wider"
                >
                  Calculate Estimate
                </button>
              </form>
              
              <div className="bg-navy text-white p-8 flex flex-col justify-center min-h-[400px]">
                {hasCalculated && resultData ? (
                  <div className="space-y-6">
                    <div>
                      <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Selected Option</span>
                      <span className="block text-lg font-serif">{resultData.option}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Starting Amount</span>
                      <span className="block text-xl font-serif">{formatCurrency(resultData.amount)}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Selected Period</span>
                      <span className="block text-xl font-serif">{resultData.months} months</span>
                    </div>
                    
                    <div className="pt-4 border-t border-white/20">
                      {resultData.isIncome ? (
                        <>
                          <div className="mb-6">
                            <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Estimated Monthly Income</span>
                            <span className="block text-xl font-serif text-green-400">{formatCurrency(resultData.monthlyIncome || 0)}</span>
                          </div>
                          <div>
                            <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Estimated Total Income</span>
                            <span className="block text-3xl font-serif text-white">{formatCurrency(resultData.totalIncome || 0)}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="mb-6">
                            <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Estimated Growth</span>
                            <span className="block text-xl font-serif text-green-400">{formatCurrency(resultData.growth || 0)}</span>
                          </div>
                          <div>
                            <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-1">Estimated Future Value</span>
                            <span className="block text-3xl font-serif text-white">{formatCurrency(resultData.futureValue || 0)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center h-full opacity-70">
                    <p className="text-sm font-sans uppercase tracking-widest mb-4">Awaiting Calculation</p>
                    <p className="font-sans text-sm max-w-[200px] leading-relaxed">Enter your details and click calculate to view an estimated result.</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-8 border-t border-border-grey pt-8">
              <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-4xl">
                Calculator results are estimates only and do not represent guaranteed returns. Final figures, terms, income assumptions, fees, timelines and eligibility requirements are subject to formal product documentation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

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
      <section className="py-24 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-xs font-sans uppercase tracking-widest text-soft-grey/70 mb-4 block">Investment Options</span>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need to compare the categories first?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Review the full investment options page to understand the purpose of each category before using the calculator.
            </p>
            <Link to="/investments" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center justify-center w-full sm:w-auto inline-flex uppercase tracking-wider">
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

      {/* Important Information Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This calculator is provided for general information and enquiry purposes only. Results are estimates and do not represent financial advice, guaranteed returns or confirmed product terms. Investment values may rise or fall. Clients should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
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
                q: "Are calculator results guaranteed?",
                a: "No. Calculator results are estimates only and do not represent guaranteed returns or confirmed product figures."
              },
              {
                q: "Why do income options show different results?",
                a: "Income-focused options show estimated income values, while growth-focused options show estimated future value and estimated growth."
              },
              {
                q: "Can I calculate all investment options?",
                a: "Yes. The main calculator page allows visitors to choose from all available investment categories."
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
              <Link to="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/investments" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View Investment Options
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
