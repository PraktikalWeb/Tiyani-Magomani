"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';
import { comparisonProducts, TermCategory, InterestType, ComparisonProduct } from '../src/lib/investment-comparison';

export default function InvestmentComparisonCalculator() {
  const [step, setStep] = useState(1);
  const [amountInput, setAmountInput] = useState<string>('100000');
  const [term, setTerm] = useState<TermCategory>('short');
  const [interest, setInterest] = useState<InterestType>('growth');
  
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

  const formatCurrency = (val: number) => {
    return 'R' + val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const calculateResult = (product: ComparisonProduct, principal: number) => {
    switch (product.calculationType) {
      case 'simple-growth':
        return principal + (principal * product.rate);
      case 'compound-growth':
        return principal * Math.pow(1 + product.rate, product.termMonths / 12);
      case 'monthly-income':
        return (principal * product.rate) / 12;
            case 'offshore-scenario':
        const baseRet = 0.07 * 5 * 2;
        return principal * (1 + baseRet); // Defaulting to Scenario 1 value for sorting/general needs
      default:
        return 0;
    }
  };

  const matchedProducts = comparisonProducts.filter(
    p => p.termCategory === term && p.interestType === interest
  );

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
          <div className="animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-border-grey pb-6">
              <div>
                <h3 className="text-2xl font-serif text-ink mb-2">Comparison Estimate</h3>
                <p className="text-muted-blue font-sans text-sm">
                  Comparing {term} term {interest} options for {formatCurrency(amount)}
                </p>
              </div>
              <div className="flex gap-4 mt-4 md:mt-0">
                <button 
                  onClick={handlePrevStep}
                  className="text-navy font-bold text-[13px] hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </button>
                <button 
                  onClick={handleStartOver}
                  className="text-navy font-bold text-[13px] hover:opacity-70 transition-opacity uppercase tracking-wider flex items-center border border-border-grey px-4 py-2 bg-soft-grey cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4 mr-2" /> Start Over
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {matchedProducts.map(product => {
                const estimatedValue = calculateResult(product, amount);
                const hasBonus = product.bonusRule && amount >= 1000000;
                
                const isFixedReturnIncome = product.id === 'fixed-income' || product.id === 'fixed-2yr-income';
                const is2Year = product.id === 'fixed-2yr-income';
                const isNettMode = product.id === 'private-equity-income' || product.id === 'private-equity-flexible-access' || isFixedReturnIncome;
                const isFlexibleAccessIncome = product.id === 'private-equity-flexible-access';
                const isOffshore = product.calculationType === 'offshore-scenario';
                
                let offshoreScenario1 = 0;
                let offshoreScenario2 = 0;
                
                if (isOffshore) {
                  const baseRet = 0.07 * 5 * 2;
                  const curFactor = 21 / 18;
                  const ret2 = baseRet * curFactor;
                  offshoreScenario1 = amount * (1 + baseRet);
                  offshoreScenario2 = amount * (1 + ret2);
                }
                
                let grossMonthlyCents = 0;
                let nettMonthlyCents = 0;
                
                if (isNettMode) {
                  grossMonthlyCents = Math.round(estimatedValue * 100) / 100;
                  nettMonthlyCents = Math.round(grossMonthlyCents * 0.8 * 100) / 100;
                }
                
                return (
                  <div key={product.id} className="bg-soft-grey border border-border-grey p-8 flex flex-col hover:border-navy transition-colors">
                    <div className="mb-6 flex-grow">
                      <h4 className="text-xl font-serif text-ink mb-2">{product.name}</h4>
                      <p className="text-sm font-sans text-muted-blue mb-4 leading-relaxed">{product.description}</p>
                      <div className="flex gap-3 mb-6 flex-wrap">
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{product.termMonths / 12} Years</span>
                        <span className="text-xs font-sans uppercase tracking-widest bg-white border border-border-grey px-3 py-1 text-ink">{(product.rate * 100).toFixed(1)}% p.a.</span>
                      </div>
                      
                                            {isOffshore ? (
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Scenario 1: Rand Stays Flat</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(offshoreScenario1)}</span>
                            <span className="block text-sm font-sans text-muted-blue">As ZAR Value</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Scenario 2: Rand Depreciates</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(offshoreScenario2)}</span>
                            <span className="block text-sm font-sans text-muted-blue">As ZAR Value</span>
                          </div>
                        </div>
                      ) : isNettMode ? (
                        <div className="grid grid-cols-1 gap-4">
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Gross Monthly {isFlexibleAccessIncome ? 'Dividend' : 'Income'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(grossMonthlyCents)}</span>
                            <span className="block text-sm font-sans text-muted-blue">before tax</span>
                          </div>
                          <div className="bg-white border border-border-grey p-6 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">Nett Monthly {isFlexibleAccessIncome ? 'Dividend' : 'Income'}</span>
                            <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(nettMonthlyCents)}</span>
                            <span className="block text-sm font-sans text-muted-blue">after 20% tax est.</span>
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white border border-border-grey p-6 text-center">
                          <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-2">{product.resultLabel}</span>
                          <span className="block text-3xl font-serif text-navy mb-2">{formatCurrency(estimatedValue)}</span>
                          <span className="block text-sm font-sans text-muted-blue">{product.supportingLabel}</span>
                        </div>
                      )}
                      
                      {hasBonus && !isFlexibleAccessIncome && !isFixedReturnIncome && (
                        <div className="bg-white border border-t-0 border-border-grey p-4 text-center">
                          <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Estimated Annual Bonus</span>
                          <span className="block text-xl font-serif text-navy">{formatCurrency(amount * 0.01)}</span>
                        </div>
                      )}
                      
                      {isFixedReturnIncome && (
                        <div className="grid grid-cols-1 gap-4 mt-4">
                          <div className="bg-white border border-border-grey p-4 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Gross Annual Bonus @ {is2Year ? '0.6%' : '1%'}</span>
                            <span className="block text-xl font-serif text-navy">{formatCurrency(Math.round((amount * (is2Year ? 0.006 : 0.01)) * 100) / 100)}</span>
                          </div>
                          <div className="bg-white border border-border-grey p-4 text-center">
                            <span className="block text-xs font-sans text-muted-blue uppercase tracking-widest mb-1">Nett Annual Bonus @ {is2Year ? '0.6%' : '1%'}</span>
                            <span className="block text-xl font-serif text-navy">{formatCurrency(Math.round(Math.round((amount * (is2Year ? 0.006 : 0.01)) * 100) / 100 * 0.8 * 100) / 100)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {product.capitalProtection && (
                      <p className="text-xs font-sans text-muted-blue mb-6">
                        * Capital protection: {product.capitalProtection}
                      </p>
                    )}

                    <div className="mt-auto">
                      <Link 
                        href={product.route === '/contact' ? `/contact?source=compare-investments&amount=${amount}&term=${term}&interest=${interest}&product=${encodeURIComponent(product.name)}` : product.route}
                        className="bg-navy text-white text-center w-full block py-4 text-[13px] font-bold hover:bg-ink transition-colors uppercase tracking-wider"
                      >
                        {product.route === '/contact' ? 'Start an Enquiry' : 'View Product'}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-soft-grey border border-border-grey p-8 text-center max-w-4xl mx-auto">
              <p className="text-xs font-sans text-muted-blue leading-relaxed font-normal mb-4">
                Calculator results are estimates based on the information entered and the displayed product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.
              </p>
              {interest === 'income' && (
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
        
      </div>
    </div>
  );
}
