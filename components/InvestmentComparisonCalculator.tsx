"use client";
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';
import { comparisonProducts, TermCategory, InterestType, ComparisonProduct } from '../src/lib/investment-comparison';
import { calculateCompoundGrowth, calculateFixedReturnIncome, calculateMonthlyIncome, calculateOffshoreScenarios, formatCurrency, roundTo2 } from '../src/lib/calculators';

const calculatorDisclaimerNotice = 'Calculator results are estimates based on the information entered and the selected product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.';
const comparisonDisclaimerNotice = 'Calculator results are estimates based on the information entered and the displayed product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.';
const afterTaxEstimateNote = 'After-tax figures are estimates using an assumed 20% deduction. Final tax treatment may depend on formal product terms and the investor’s tax position.';

export default function InvestmentComparisonCalculator() {
  const [step, setStep] = useState(1);
  const [amountInput, setAmountInput] = useState<string>('100000');
  const [term, setTerm] = useState<TermCategory>('short');
  const [interest, setInterest] = useState<InterestType>('growth');
  const resultsRef = useRef<HTMLDivElement | null>(null);
  
  const amount = parseFloat(amountInput.replace(/,/g, ''));
  const isValidAmount = !isNaN(amount) && amount >= 100000;

  const handleNextStep = () => {
    if (step === 1 && !isValidAmount) return;
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => setStep(prev => prev - 1);
  
  const handleStartOver = () => {
    setStep(1);
    setAmountInput('100000');
    setTerm('short');
    setInterest('growth');
  };

  const calculateResult = (product: ComparisonProduct, principal: number) => {
    switch (product.calculationType) {
      case 'simple-growth':
        return roundTo2(principal + (principal * product.rate));
      case 'compound-growth':
        return calculateCompoundGrowth(principal, product.rate, product.termMonths / 12).estimatedFutureValue;
      case 'monthly-income':
        return product.id.startsWith('fixed-')
          ? calculateFixedReturnIncome(principal, product.rate, product.termMonths / 12).grossMonthly
          : calculateMonthlyIncome(principal, product.rate, product.termMonths / 12).grossMonthly;
      case 'monthly-dividend':
        return calculateMonthlyIncome(principal, product.rate, product.termMonths / 12).grossMonthly;
      case 'offshore-scenario':
        return calculateOffshoreScenarios(principal).scenario1Value;
      default:
        return 0;
    }
  };

  const matchedProducts = comparisonProducts.filter(
    p => p.termCategory === term && p.interestType === interest
  );

  useEffect(() => {
    if (step !== 4 || !resultsRef.current) return;

    const frame = window.requestAnimationFrame(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [amount, interest, step, term]);

  return (
    <div className="bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* WIZARD CONTAINER */}
        <div className="max-w-3xl mx-auto">
          {step < 4 && (
            <div className="bg-soft-grey border border-border-grey p-8 md:p-12">
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-2 block">
                Step {step} of 3
              </span>
              
              {/* STEP 1 */}
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl md:text-3xl font-serif text-ink mb-6">What is your initial investment?</h3>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-blue font-sans text-lg">R</span>
                    <input
                      type="text"
                      value={amountInput}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9.]/g, '');
                        setAmountInput(val);
                      }}
                      className="w-full bg-white border border-border-grey text-ink font-sans text-lg px-12 py-4 focus:outline-none focus:border-navy transition-colors"
                      placeholder="100000"
                    />
                  </div>
                  {!isValidAmount && amountInput !== '' && (
                    <p className="text-red-700 text-sm font-sans mt-3">Minimum investment for comparison is R100,000.</p>
                  )}
                  {isValidAmount && (
                    <p className="text-muted-blue text-sm font-sans mt-3">Minimum investment of R100,000 required.</p>
                  )}
                  
                  <div className="mt-10 flex justify-end">
                    <button 
                      onClick={handleNextStep}
                      disabled={!isValidAmount}
                      className="bg-navy text-white px-8 py-4 font-bold text-[13px] hover:bg-ink transition-colors uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl md:text-3xl font-serif text-ink mb-6">What term do you require?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => setTerm('short')}
                      className={`border p-6 text-center transition-colors cursor-pointer ${term === 'short' ? 'bg-navy border-navy text-white' : 'bg-white border-border-grey text-ink hover:border-navy'}`}
                    >
                      <span className="font-serif text-xl block mb-2">Short Term</span>
                      <span className={`text-sm font-sans ${term === 'short' ? 'text-soft-grey' : 'text-muted-blue'}`}>Up to 2 years</span>
                    </button>
                    <button
                      onClick={() => setTerm('long')}
                      className={`border p-6 text-center transition-colors cursor-pointer ${term === 'long' ? 'bg-navy border-navy text-white' : 'bg-white border-border-grey text-ink hover:border-navy'}`}
                    >
                      <span className="font-serif text-xl block mb-2">Long Term</span>
                      <span className={`text-sm font-sans ${term === 'long' ? 'text-soft-grey' : 'text-muted-blue'}`}>5 years or more</span>
                    </button>
                  </div>
                  
                  <div className="mt-10 flex justify-between">
                    <button 
                      onClick={handlePrevStep}
                      className="text-navy font-bold text-[13px] hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                    </button>
                    <button 
                      onClick={handleNextStep}
                      className="bg-navy text-white px-8 py-4 font-bold text-[13px] hover:bg-ink transition-colors uppercase tracking-wider cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <h3 className="text-2xl md:text-3xl font-serif text-ink mb-6">What are you interested in?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={() => setInterest('growth')}
                      className={`border p-6 text-center transition-colors cursor-pointer ${interest === 'growth' ? 'bg-navy border-navy text-white' : 'bg-white border-border-grey text-ink hover:border-navy'}`}
                    >
                      <span className="font-serif text-xl block mb-2">Growth</span>
                      <span className={`text-sm font-sans ${interest === 'growth' ? 'text-soft-grey' : 'text-muted-blue'}`}>Capital appreciation</span>
                    </button>
                    <button
                      onClick={() => setInterest('income')}
                      className={`border p-6 text-center transition-colors cursor-pointer ${interest === 'income' ? 'bg-navy border-navy text-white' : 'bg-white border-border-grey text-ink hover:border-navy'}`}
                    >
                      <span className="font-serif text-xl block mb-2">Income</span>
                      <span className={`text-sm font-sans ${interest === 'income' ? 'text-soft-grey' : 'text-muted-blue'}`}>Regular distributions</span>
                    </button>
                  </div>
                  
                  <div className="mt-10 flex justify-between">
                    <button 
                      onClick={handlePrevStep}
                      className="text-navy font-bold text-[13px] hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                    </button>
                    <button 
                      onClick={handleNextStep}
                      className="bg-navy text-white px-8 py-4 font-bold text-[13px] hover:bg-ink transition-colors uppercase tracking-wider flex items-center cursor-pointer"
                    >Compare Investments<ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* STEP 4: RESULTS */}
        {step === 4 && (
          <div ref={resultsRef} className="tm-compare-results animate-in fade-in duration-500 scroll-mt-24">
            <div className="tm-compare-results-header flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-border-grey pb-6">
              <div>
                <h3 className="text-2xl font-serif text-ink mb-2">Comparison Estimate</h3>
                <p className="text-muted-blue font-sans text-sm">
                  Comparing {term} term {interest} options for {formatCurrency(amount)}
                </p>
              </div>
              <div className="tm-compare-results-controls flex gap-4 mt-4 md:mt-0">
                <button 
                  onClick={handlePrevStep}
                  className="tm-compare-results-back text-navy font-bold text-[13px] hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
                <button 
                  onClick={handleStartOver}
                  className="tm-compare-results-reset text-navy font-bold text-[13px] hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center border border-border-grey px-4 py-2 bg-soft-grey cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Start Over
                </button>
              </div>
            </div>

            <div className="tm-compare-results-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {matchedProducts.length === 0 && <div className="md:col-span-2 lg:col-span-3 border border-border-grey bg-soft-grey p-8 text-center text-sm font-sans text-muted-blue">No document-supported options are available for this selection. Please choose another term or investment focus.</div>}
              {matchedProducts.map(product => {
                const estimatedValue = calculateResult(product, amount);
                const isOffshore = product.calculationType === 'offshore-scenario';
                const isIncomeProduct = product.calculationType === 'monthly-income' || product.calculationType === 'monthly-dividend';
                const isDividendProduct = product.calculationType === 'monthly-dividend';
                const income = isIncomeProduct
                  ? (product.id.startsWith('fixed-')
                    ? calculateFixedReturnIncome(amount, product.rate, product.termMonths / 12)
                    : calculateMonthlyIncome(amount, product.rate, product.termMonths / 12))
                  : null;
                const scenarios = isOffshore ? calculateOffshoreScenarios(amount) : null;
                
                return (
                  <div key={product.id} className="tm-compare-result-card bg-soft-grey border border-border-grey p-8 flex flex-col hover:border-navy transition-colors">
                    <div className="tm-compare-result-main">
                      <div className="tm-compare-result-info">
                        <h4 className="text-xl font-serif text-ink mb-2">{product.name}</h4>
                        <p className="text-sm font-sans text-muted-blue mb-4 leading-relaxed">{product.description}</p>
                        <div className="tm-compare-result-tags flex gap-3 flex-wrap">
                          <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{product.termMonths === 12 ? '12 Months' : `${product.termMonths / 12} Years`}</span>
                          <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{(product.rate * 100).toFixed(1)}% p.a.</span>
                        </div>
                        {product.capitalProtection && (
                          <p className="tm-compare-result-protection text-xs font-sans text-muted-blue">
                            * Capital protection: {product.capitalProtection}
                          </p>
                        )}
                      </div>

                      {isOffshore ? (
                        <div className="tm-compare-result-metrics tm-compare-result-metrics-double grid grid-cols-2 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Scenario 1: Rand Stays Flat</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(scenarios!.scenario1Value)}</span>
                            <span className="block text-sm font-sans text-muted-blue">As ZAR Value</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Scenario 2: Rand Depreciates</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(scenarios!.scenario2Value)}</span>
                            <span className="block text-sm font-sans text-muted-blue">As ZAR Value</span>
                          </div>
                        </div>
                      ) : isIncomeProduct ? (
                        <div className="tm-compare-result-metrics tm-compare-result-metrics-double grid grid-cols-2 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{isDividendProduct ? 'Monthly Dividend Before Tax' : 'Monthly Income Before Tax'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(income!.grossMonthly)}</span>
                            <span className="block text-sm font-sans text-muted-blue">Estimated from the selected target return</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{isDividendProduct ? 'Monthly Dividend After Tax Estimate' : 'Monthly Income After Tax Estimate'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(income!.netMonthly)}</span>
                            <span className="block text-sm font-sans text-muted-blue">May depend on final product terms and applicable tax treatment</span>
                          </div>
                        </div>
                      ) : (
                        <div className="tm-compare-result-metrics">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{product.resultLabel}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(estimatedValue)}</span>
                            <span className="block text-sm font-sans text-muted-blue">{product.supportingLabel}</span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="tm-compare-result-action">
                      <Link 
                        href={product.route === '/contact' ? `/contact?source=compare-investments&amount=${amount}&term=${term}&interest=${interest}&product=${encodeURIComponent(product.name)}` : product.route}
                        className="tm-compare-result-cta bg-navy text-white text-center w-full block py-4 text-[13px] font-bold hover:bg-ink transition-colors uppercase tracking-wider"
                      >
                        {product.route === '/contact' ? 'Start an Enquiry' : 'View Product'}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="tm-compare-results-disclaimer bg-soft-grey border border-border-grey p-8 text-center max-w-4xl mx-auto">
              <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal mb-4">
                Calculator results are estimates based on the information entered and the displayed product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.
              </p>
              {matchedProducts.some(p => p.calculationType === 'monthly-income' || p.calculationType === 'monthly-dividend') && (
                <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal mb-4">{afterTaxEstimateNote}</p>
              )}
              {false && interest === 'income' && (
                <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal mb-4">
                  Income and dividend estimates are shown before tax unless marked otherwise. Final tax treatment may differ. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.
                </p>
              )}
              {matchedProducts.some(p => p.capitalProtection) && (
                <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal mb-4">
                  Capital protection at maturity, subject to formal product terms.
                </p>
              )}
              {matchedProducts.some(p => p.calculationType === 'offshore-scenario') && (
                <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal mb-4">
                  Offshore investment outcomes may be affected by currency movement, market performance, product structure and formal product terms.
                </p>
              )}
            </div>
          </div>
        )}
        <p className="mt-8 text-xs font-sans leading-relaxed text-muted-blue max-w-4xl mx-auto"><strong className="font-semibold text-ink">Disclaimer:</strong> {comparisonDisclaimerNotice}</p>
        
      </div>
    </div>
  );
}
