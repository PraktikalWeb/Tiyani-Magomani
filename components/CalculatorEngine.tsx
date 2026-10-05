"use client";

import React, { useEffect, useMemo, useRef, useState } from 'react';
import FadeIn from './FadeIn';
import ProductCalculatorEnquiryForm, { ProductCalculatorEnquiryContext } from './ProductCalculatorEnquiryForm';
import { calculateCompoundGrowth, calculateFixedReturnIncome, calculateMonthlyIncome, calculateOffshoreScenarios, formatCurrency, roundTo2 } from '../src/lib/calculators';

interface CalculatorEngineProps {
  productId?: string;
  lockedProduct?: boolean;
  showGrowthChart?: boolean;
  presentation?: 'default' | 'homepage';
}

type ProductId = 'private-equity-growth' | 'private-equity-income' | 'private-equity-flexible-access' | 'fixed-return-growth' | 'fixed-return-income' | 'offshore-global';
type Row = { label: string; value: string };
type ChartPoint = { label: string; value: number };
type Result = { productName: string; rateHeading: string; term: string; calculationType: string; rows: Row[]; summaryLabel: string; summaryValue: string; disclaimer: string; chartPoints?: ChartPoint[] };

const productNames: Record<ProductId, string> = {
  'private-equity-growth': 'Private Equity: Growth',
  'private-equity-income': 'Private Equity: Income',
  'private-equity-flexible-access': 'Private Equity: Flexi Access',
  'fixed-return-growth': 'Fixed Return Growth Portfolio',
  'fixed-return-income': 'Fixed Return Income Portfolio',
  'offshore-global': 'Offshore Global Option',
};

const fixedTerms: Record<ProductId, string> = {
  'private-equity-growth': '5 years',
  'private-equity-income': '5 years',
  'private-equity-flexible-access': '12 months',
  'fixed-return-growth': '5 years',
  'fixed-return-income': '5 years',
  'offshore-global': '5 years',
};

const calculatorPresentationCopy: Record<ProductId, { title: string; description: string }> = {
  'private-equity-growth': {
    title: 'Estimate your potential growth.',
    description: 'Enter an investment amount to view the five year projection and yearly breakdown.',
  },
  'private-equity-income': {
    title: 'Estimate your potential income.',
    description: 'Enter an investment amount to view the income estimate and result breakdown.',
  },
  'private-equity-flexible-access': {
    title: 'Estimate this flexible access option.',
    description: 'Enter an investment amount and choose a calculation mode to view the estimate.',
  },
  'fixed-return-growth': {
    title: 'Estimate your fixed return growth.',
    description: 'Enter an investment amount and select a term to view the result breakdown.',
  },
  'fixed-return-income': {
    title: 'Estimate your fixed return income.',
    description: 'Enter an investment amount and select a term to view the income estimate.',
  },
  'offshore-global': {
    title: 'Estimate your offshore projection.',
    description: 'Enter an investment amount to view the indicative result breakdown.',
  },
};

const privateEquityDisclaimer = 'Expected yields are projections based on prevailing market conditions and are not guaranteed. Historical performance offers no assurance of future outcomes, and investor capital remains subject to risk, including the potential loss of principal.';
const fixedReturnDisclaimer = 'Capital protection applies to the original investment amount at maturity, subject to the terms of the product. Expected yields are projections based on prevailing market conditions and are not guaranteed. Historical performance offers no assurance of future outcomes.';
const offshoreDisclaimer = 'Calculator results are estimates based on the information entered and the selected product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation. Nett figures use an assumed 20% tax deduction and are shown for estimate purposes only. Final tax treatment depends on formal product documentation and the client’s tax position.';
const afterTaxEstimateNote = 'After-tax figures are estimates using an assumed 20% deduction. Final tax treatment may depend on formal product terms and the investor’s tax position.';

const money = formatCurrency;
function getMinimum(productId: ProductId) { return productId === 'offshore-global' ? 50000 : 100000; }
function getDisclaimer(productId: ProductId) { return productId === 'offshore-global' ? offshoreDisclaimer : productId.startsWith('fixed-return') ? fixedReturnDisclaimer : privateEquityDisclaimer; }

function calculate(productId: ProductId, amount: number, selectedTerm: '24' | '60', flexMode: 'growth' | 'dividend'): Result {
  const productName = productNames[productId];

  if (productId === 'private-equity-growth') {
    const projection = calculateCompoundGrowth(amount, 0.132, 5);
    let projectedValue = amount;
    const chartPoints: ChartPoint[] = [
      { label: 'Start', value: amount },
      ...projection.yearlyGrowth.map((growth, index) => {
        projectedValue = roundTo2(projectedValue + growth);
        return { label: `Year ${index + 1}`, value: projectedValue };
      }),
    ];
    const rows: Row[] = [
      { label: 'Initial Investment', value: money(amount) },
      { label: 'Target Return', value: '13.2% p.a.' },
      { label: 'Term', value: '5 years' },
      ...projection.yearlyGrowth.map((growth, index) => ({ label: `Year ${index + 1} Growth`, value: money(growth) })),
      { label: 'Total Estimated Growth', value: money(projection.totalGrowth) },
    ];
    return { productName, rateHeading: 'Target Return of 13.2% p.a.', term: '5 years', calculationType: 'five-year compound projection using rounded annual growth amounts', rows, summaryLabel: 'Estimated Future Value', summaryValue: money(projection.estimatedFutureValue), disclaimer: privateEquityDisclaimer, chartPoints };
  }

  if (productId === 'private-equity-income') {
    const income = calculateMonthlyIncome(amount, 0.132, 5);
    const bonus = amount >= 1000000 ? roundTo2(amount * 0.01) : null;
    const afterTaxBonus = bonus === null ? null : roundTo2(bonus * 0.8);
    return {
      productName, rateHeading: 'Target Return of 13.2% p.a.', term: '5 years', calculationType: 'gross income projection based on target return',
      rows: [
        { label: 'Initial Investment', value: money(amount) },
        { label: 'Target Return', value: '13.2% p.a.' },
        { label: 'Term', value: '5 years' },
        { label: 'Monthly Income Before Tax', value: money(income.grossMonthly) },
        { label: 'Monthly Income After Tax Estimate', value: money(income.netMonthly) },
        { label: 'Annual Income Before Tax', value: money(income.grossAnnual) },
        { label: 'Annual Income After Tax Estimate', value: money(income.netAnnual) },
        { label: 'Total Income Before Tax Over Term', value: money(income.grossTotalIncome) },
        { label: 'Total Income After Tax Estimate Over Term', value: money(income.netTotalIncome) },
        ...(bonus === null || afterTaxBonus === null ? [] : [{ label: 'Annual Bonus Before Tax', value: money(bonus) }, { label: 'Annual Bonus After Tax Estimate', value: money(afterTaxBonus) }]),
      ],
      summaryLabel: 'Monthly Income Before Tax', summaryValue: money(income.grossMonthly), disclaimer: privateEquityDisclaimer,
    };
  }

  if (productId === 'private-equity-flexible-access') {
    const projectedYield = roundTo2(amount * 0.11);

    if (flexMode === 'growth') {
      return {
        productName, rateHeading: 'Target Return of 11% p.a.', term: '12 months', calculationType: '12-month growth on capital projection',
        rows: [
          { label: 'Initial Investment', value: money(amount) },
          { label: 'Selected Mode', value: 'Growth on Capital' },
          { label: 'Target Return', value: '11% p.a.' },
          { label: 'Term', value: '12 months' },
          { label: 'Estimated 12-Month Growth', value: money(projectedYield) },
        ],
        summaryLabel: 'Estimated Value After 12 Months', summaryValue: money(roundTo2(amount + projectedYield)), disclaimer: privateEquityDisclaimer,
      };
    }

    const dividends = calculateMonthlyIncome(amount, 0.11, 1);
    return {
      productName, rateHeading: 'Target Return of 11% p.a.', term: '12 months', calculationType: '12-month monthly dividend on capital estimate',
      rows: [
        { label: 'Initial Investment', value: money(amount) },
        { label: 'Selected Mode', value: 'Monthly Dividend on Capital' },
        { label: 'Target Return', value: '11% p.a.' },
        { label: 'Term', value: '12 months' },
        { label: 'Monthly Dividend Before Tax', value: money(dividends.grossMonthly) },
        { label: 'Monthly Dividend After Tax Estimate', value: money(dividends.netMonthly) },
        { label: 'Annual Dividend Before Tax', value: money(dividends.grossAnnual) },
        { label: 'Annual Dividend After Tax Estimate', value: money(dividends.netAnnual) },
      ],
      summaryLabel: 'Monthly Dividend Before Tax', summaryValue: money(dividends.grossMonthly), disclaimer: privateEquityDisclaimer,
    };
  }

  if (productId === 'fixed-return-growth') {
    const years = selectedTerm === '24' ? 2 : 5;
    const rate = selectedTerm === '24' ? 0.118 : 0.126;
    const projection = calculateCompoundGrowth(amount, rate, years);
    const rows: Row[] = [
      { label: 'Initial Investment', value: money(amount) },
      { label: 'Selected Term', value: `${years} years` },
      { label: 'Target Return', value: `${(rate * 100).toFixed(1)}% p.a.` },
      ...projection.yearlyGrowth.map((growth, index) => ({ label: `Year ${index + 1} Growth`, value: money(growth) })),
      { label: 'Total Estimated Growth', value: money(projection.totalGrowth) },
      { label: 'Capital Protection Note', value: 'Capital protection applies to the original investment amount at maturity, subject to the terms of the product.' },
    ];
    return { productName, rateHeading: `Target Return of ${(rate * 100).toFixed(1)}% p.a.`, term: `${years} years`, calculationType: `${years}-year compound projection using rounded annual growth amounts`, rows, summaryLabel: 'Estimated Future Value', summaryValue: money(projection.estimatedFutureValue), disclaimer: fixedReturnDisclaimer };
  }

  if (productId === 'fixed-return-income') {
    const years = selectedTerm === '24' ? 2 : 5;
    const rate = selectedTerm === '24' ? 0.118 : 0.126;
    const income = calculateFixedReturnIncome(amount, rate, years);
    return {
      productName, rateHeading: `Target Return of ${(rate * 100).toFixed(1)}% p.a.`, term: `${years} years`, calculationType: `${years}-year gross and net monthly income projection based on target return`,
      rows: [
        { label: 'Initial Investment', value: money(amount) },
        { label: 'Selected Term', value: `${years} years` },
        { label: 'Target Return', value: `${(rate * 100).toFixed(1)}% p.a.` },
        { label: 'Monthly Income Before Tax', value: money(income.grossMonthly) },
        { label: 'Monthly Income After Tax Estimate', value: money(income.netMonthly) },
        { label: 'Annual Income Before Tax', value: money(income.grossAnnual) },
        { label: 'Annual Income After Tax Estimate', value: money(income.netAnnual) },
        { label: 'Total Income Before Tax Over Term', value: money(income.grossTotalIncome) },
        { label: 'Total Income After Tax Estimate Over Term', value: money(income.netTotalIncome) },
        { label: 'Annual Bonus Before Tax', value: money(income.grossAnnualBonus) },
        { label: 'Annual Bonus After Tax Estimate', value: money(income.netAnnualBonus) },
        { label: 'Capital Protection Note', value: 'Capital protection applies to the original investment amount at maturity, subject to the terms of the product.' },
      ],
      summaryLabel: 'Monthly Income Before Tax', summaryValue: money(income.grossMonthly), disclaimer: `${fixedReturnDisclaimer} After-tax figures are estimates using an assumed 20% deduction. Final tax treatment may depend on formal product terms and the investor’s tax position.`,
    };
  }

  const scenarios = calculateOffshoreScenarios(amount);
  return {
    productName, rateHeading: 'Scenario Assumption of 7% p.a.', term: '5 years', calculationType: 'offshore scenario estimate',
    rows: [
      { label: 'Scenario 1: Rand Stays Flat', value: money(scenarios.scenario1Value) },
      { label: 'Scenario 2: Rand Depreciates', value: money(scenarios.scenario2Value) },
    ],
    summaryLabel: 'Scenario 2 estimated value', summaryValue: money(scenarios.scenario2Value),
    disclaimer: `${offshoreDisclaimer} Offshore investment outcomes may be affected by currency movement, market performance, product structure and formal product terms.`,
  };
}

function formatAxisValue(value: number) {
  if (value >= 1000000) return `R${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}m`;
  if (value >= 1000) return `R${Math.round(value / 1000)}k`;
  return `R${Math.round(value)}`;
}

function GrowthResultChart({ points }: { points: ChartPoint[] }) {
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const width = 560;
  const height = 230;
  const left = 74;
  const right = 18;
  const top = 18;
  const bottom = 44;
  const innerWidth = width - left - right;
  const innerHeight = height - top - bottom;
  const values = points.map((point) => point.value);
  const highestValue = Math.max(...values);
  const axisMax = Math.max(highestValue, 1) * 1.12;
  const chartPoints = points.map((point, index) => ({
    ...point,
    x: left + (index / Math.max(points.length - 1, 1)) * innerWidth,
    y: top + innerHeight - (point.value / axisMax) * innerHeight,
  }));
  const ticks = Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4;
    return {
      value: axisMax * (1 - ratio),
      y: top + innerHeight * ratio,
    };
  });

  return (
    <div className="tm-growth-result-chart">
      <div className="tm-growth-chart-heading">
        <span>Projected Value</span>
        <strong>Five year growth</strong>
      </div>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Projected investment value from the initial investment through year five">
        <g className="tm-growth-chart-grid">
          {ticks.map((tick) => <line key={tick.y} x1={left} y1={tick.y} x2={width - right} y2={tick.y} />)}
          {chartPoints.map((point) => <line key={point.label} x1={point.x} y1={top} x2={point.x} y2={top + innerHeight} />)}
        </g>
        <g className="tm-growth-chart-labels">
          {ticks.map((tick) => <text key={tick.y} x={left - 12} y={tick.y + 4} textAnchor="end">{formatAxisValue(tick.value)}</text>)}
          {chartPoints.map((point) => <text key={point.label} x={point.x} y={height - 20} textAnchor="middle">{point.label}</text>)}
          <text className="tm-growth-chart-axis-title" x={left + innerWidth / 2} y={height - 2} textAnchor="middle">Year</text>
          <text className="tm-growth-chart-axis-title" transform={`translate(14 ${top + innerHeight / 2}) rotate(-90)`} textAnchor="middle">Projected value</text>
        </g>
        <polyline className="tm-growth-chart-line" points={chartPoints.map((point) => `${point.x},${point.y}`).join(' ')} />
        {chartPoints.map((point, index) => (
          <g
            key={point.label}
            className="tm-growth-chart-point"
            tabIndex={0}
            onMouseEnter={() => setActivePoint(index)}
            onMouseLeave={() => setActivePoint(null)}
            onFocus={() => setActivePoint(index)}
            onBlur={() => setActivePoint(null)}
          >
            <circle cx={point.x} cy={point.y} r="16" />
            {activePoint === index && (
              <g className="tm-growth-chart-tooltip" transform={`translate(${Math.min(Math.max(point.x, 105), width - 105)} ${Math.max(point.y - 48, 28)})`}>
                <rect x="-94" y="-22" width="188" height="34" />
                <text x="0" y="0" textAnchor="middle">{point.label}: {money(point.value)}</text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function CalculatorEngine({ productId = 'private-equity-growth', lockedProduct = false, showGrowthChart = false, presentation = 'default' }: CalculatorEngineProps) {
  const initialProduct = productId as ProductId;
  const [selectedProduct, setSelectedProduct] = useState<ProductId>(initialProduct);
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState<'24' | '60'>('24');
  const [flexMode, setFlexMode] = useState<'growth' | 'dividend'>('dividend');
  const [hasCalculated, setHasCalculated] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);

  const activeProduct = lockedProduct ? initialProduct : selectedProduct;
  const numericAmount = Number(amount.replace(/,/g, ''));
  const minimum = getMinimum(activeProduct);
  const isAmountEntered = amount.trim() !== '';
  const isValid = Number.isFinite(numericAmount) && numericAmount >= minimum;
  const validationError = isAmountEntered && !isValid ? `Minimum investment for this option is ${minimum === 50000 ? 'R50,000' : 'R100,000'}.` : '';
  const result = useMemo(() => hasCalculated && isValid ? calculate(activeProduct, numericAmount, term, flexMode) : null, [activeProduct, flexMode, hasCalculated, isValid, numericAmount, term]);
  const canSelectTerm = activeProduct === 'fixed-return-growth' || activeProduct === 'fixed-return-income';
  const canSelectFlexMode = activeProduct === 'private-equity-flexible-access';
  const showsAfterTaxEstimate = activeProduct === 'private-equity-income' || activeProduct === 'fixed-return-income' || (activeProduct === 'private-equity-flexible-access' && flexMode === 'dividend');

  useEffect(() => {
    if (!result || !resultsRef.current) return;

    const frame = window.requestAnimationFrame(() => {
      const panel = resultsRef.current;
      if (!panel) return;
      const bounds = panel.getBoundingClientRect();
      const comfortablyVisible = bounds.top >= 96 && bounds.top < window.innerHeight * 0.65 && bounds.bottom > 96;
      if (!comfortablyVisible) panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [result]);

  const enquiryContext: ProductCalculatorEnquiryContext | null = result && lockedProduct ? {
    productId: activeProduct,
    productName: result.productName,
    sourcePage: `/investments/${activeProduct}`,
    initialInvestment: money(numericAmount),
    selectedTerm: result.term,
    selectedMode: canSelectFlexMode ? (flexMode === 'growth' ? 'Growth on Capital' : 'Monthly Dividend on Capital') : undefined,
    selectedRate: result.rateHeading,
    calculationType: result.calculationType,
    resultSummary: `${result.summaryLabel}: ${result.summaryValue}`,
    resultRows: result.rows,
  } : null;

  return (
    <section id="calculator" className={`scroll-mt-24 border-y border-border-grey bg-off-white py-20 lg:py-32 ${presentation === 'homepage' ? 'tm-product-calculator' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {presentation === 'homepage' && (
          <div className="tm-product-calculator-heading">
            <h2>{calculatorPresentationCopy[activeProduct].title}</h2>
            <p>{calculatorPresentationCopy[activeProduct].description}</p>
          </div>
        )}
        <FadeIn className="tm-product-calculator-entry border border-border-grey bg-white p-6 md:p-10 lg:p-12">
          <form onSubmit={(event) => { event.preventDefault(); setHasCalculated(true); }} className="space-y-6 max-w-2xl">
            {!lockedProduct && <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-muted-blue">Investment Category
              <select value={selectedProduct} onChange={(event) => { setSelectedProduct(event.target.value as ProductId); setHasCalculated(false); }} className="mt-3 w-full border border-border-grey bg-white p-4 text-base normal-case tracking-normal text-ink focus:outline-none focus:border-navy">
                {Object.entries(productNames).map(([id, name]) => <option value={id} key={id}>{name}</option>)}
              </select>
            </label>}
            <label className="tm-product-calculator-amount-field block text-xs font-sans font-semibold uppercase tracking-widest text-muted-blue">Estimated Amount (ZAR)
              <input type="number" min="0" inputMode="decimal" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="e.g. 500000" className="mt-3 w-full border border-border-grey p-4 text-base normal-case tracking-normal text-ink placeholder:text-muted-blue/50 focus:outline-none focus:border-navy" />
            </label>
            {validationError && <p className="tm-product-calculator-validation text-sm font-sans text-red-600">{validationError}</p>}
            {canSelectFlexMode && <div className="tm-product-calculator-mode-selector"><span className="block text-xs font-sans font-semibold uppercase tracking-widest text-muted-blue mb-3">Select Calculation Mode</span><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {([['growth', 'Growth on Capital'], ['dividend', 'Monthly Dividend on Capital']] as const).map(([value, label]) => <label key={value} className={`flex cursor-pointer items-center gap-3 border p-4 text-sm font-sans font-medium ${flexMode === value ? 'border-navy bg-navy/5 text-navy' : 'border-border-grey text-muted-blue'}`}><input type="radio" name={`flex-mode-${activeProduct}`} checked={flexMode === value} onChange={() => setFlexMode(value)} className="accent-navy" />{label}</label>)}
            </div></div>}
            {canSelectTerm ? <div className="tm-product-calculator-term-selector"><span className="block text-xs font-sans font-semibold uppercase tracking-widest text-muted-blue mb-3">Select Term</span><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(['24', '60'] as const).map((value) => <label key={value} className={`flex cursor-pointer items-center gap-3 border p-4 text-sm font-sans font-medium ${term === value ? 'border-navy bg-navy/5 text-navy' : 'border-border-grey text-muted-blue'}`}><input type="radio" name={`term-${activeProduct}`} checked={term === value} onChange={() => setTerm(value)} className="accent-navy" />{value === '24' ? '2 Year Term' : '5 Year Term'}</label>)}
            </div></div> : <p className="tm-product-calculator-fixed-term text-sm font-sans text-muted-blue">Term: {fixedTerms[activeProduct]}</p>}
            <button type="submit" className="tm-product-calculator-submit bg-navy px-8 py-4 text-[13px] font-sans font-bold uppercase tracking-wider text-white cursor-pointer">Calculate</button>
          </form>
        </FadeIn>
        {result && <>
          <div ref={resultsRef} className="scroll-mt-24">
            <FadeIn className="tm-product-calculator-results mt-6 bg-navy p-6 md:p-10 text-white">
              <span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/70">{result.productName}</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-serif">{result.rateHeading}</h3>
              <p className="mt-2 text-sm font-sans text-soft-grey/80">Term: {result.term}</p>
              {showGrowthChart && result.chartPoints ? (
                <div className="tm-product-calculator-result-grid">
                  <div className="tm-product-calculator-breakdown">
                    <div className="tm-product-calculator-rows space-y-3">
                      {result.rows.map((row) => <div key={row.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm font-sans"><span className="text-soft-grey">{row.label}</span><span className="font-medium text-white">{row.value}</span></div>)}
                    </div>
                    <div className="tm-product-calculator-summary mt-8 border border-white/20 bg-white/10 p-5"><span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80">{result.summaryLabel}</span><span className="mt-2 block text-3xl font-serif">{result.summaryValue}</span></div>
                  </div>
                  <GrowthResultChart points={result.chartPoints} />
                </div>
              ) : (
                <>
                  <div className="tm-product-calculator-rows mt-8 space-y-3">
                    {result.rows.map((row) => <div key={row.label} className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 text-sm font-sans"><span className="text-soft-grey">{row.label}</span><span className="font-medium text-white">{row.value}</span></div>)}
                  </div>
                  <div className="tm-product-calculator-summary mt-8 border border-white/20 bg-white/10 p-5"><span className="block text-xs font-sans uppercase tracking-widest text-soft-grey/80">{result.summaryLabel}</span><span className="mt-2 block text-3xl font-serif">{result.summaryValue}</span></div>
                </>
              )}
            </FadeIn>
          </div>
          <p className="mt-5 text-xs font-sans leading-relaxed text-muted-blue"><strong className="font-semibold text-ink">Disclaimer:</strong> {getDisclaimer(activeProduct)}{showsAfterTaxEstimate && <> {afterTaxEstimateNote}</>}</p>
          {enquiryContext && <ProductCalculatorEnquiryForm context={enquiryContext} />}
        </>}
      </div>
    </section>
  );
}
