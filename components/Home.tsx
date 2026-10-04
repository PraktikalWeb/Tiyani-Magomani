"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import {
  calculateCompoundGrowth,
  calculateFixedReturnIncome,
  calculateMonthlyIncome,
  formatCurrency,
  roundTo2,
} from '../src/lib/calculators';

const heroSlides = [
  {
    src: '/images/investment-options-team.png',
    alt: 'Investment professionals discussing a client strategy',
    position: 'center',
    title: 'Investing, Built for Right Now.',
    text: 'Modern, accessible investment products for individuals and businesses without the outdated gatekeeping of traditional finance.',
    primaryLabel: 'Start Investing',
    primaryHref: '#calculator',
    secondaryLabel: 'Explore Our Products',
    secondaryHref: '#products',
  },
  {
    src: '/images/investment-solutions-advisory.png',
    alt: 'An adviser and client reviewing investment information',
    position: 'center',
    title: 'From Private Equity to Fixed Returns. Pick Your Path.',
    text: 'Growth, income, or flexibility. Choose the product that matches how you want your money to work.',
    primaryLabel: 'View All Products',
    primaryHref: '#products',
    secondaryLabel: 'Try the Returns Calculator',
    secondaryHref: '#calculator',
  },
  {
    src: '/images/contact-advisory-meeting.png',
    alt: 'An adviser meeting with clients in a bright office',
    position: 'center',
    title: "Wealth That's Protected. Investments You Can Reach Anytime.",
    text: "Insurance to safeguard what you've built, and digital tools to manage it, all in one place and on your terms.",
    primaryLabel: 'Explore Our Services',
    primaryHref: '#services',
  },
  {
    src: '/images/calculator-investment-planning.png',
    alt: 'Clients reviewing an investment estimate together',
    position: 'center',
    title: 'What Could Your Money Grow To?',
    text: 'Enter an amount, choose a term, and get an instant estimate across every product we offer.',
    primaryLabel: 'Try the Calculator',
    primaryHref: '#calculator',
  },
];

const investmentLinks = [
  { label: 'Private Equity Growth', href: '/investments/private-equity-growth' },
  { label: 'Private Equity Income', href: '/investments/private-equity-income' },
  { label: 'Private Equity Flexible Access', href: '/investments/private-equity-flexible-access' },
  { label: 'Fixed Return Growth', href: '/investments/fixed-return-growth' },
  { label: 'Fixed Return Income', href: '/investments/fixed-return-income' },
  { label: 'Offshore Global', href: '/investments/offshore-global' },
];

const products = [
  {
    number: '1',
    title: 'Private Equity Growth',
    tag: 'Growth · Compounding',
    rate: '13.2% p.a.',
    description: 'Long term capital growth by investing in high potential private businesses.',
    href: '/investments/private-equity-growth',
  },
  {
    number: '2',
    title: 'Private Equity Income',
    tag: 'Income · Paid Out',
    rate: '13.2% p.a.',
    description: 'Regular income generated from private equity holdings, paid out along the way.',
    href: '/investments/private-equity-income',
  },
  {
    number: '3',
    title: 'Private Equity Flexible Access',
    tag: 'Growth · Flexible',
    rate: '11% p.a.',
    description: 'Private equity exposure with easier access to your capital when you need it.',
    href: '/investments/private-equity-flexible-access',
  },
  {
    number: '4',
    title: 'Fixed Return Growth',
    tag: 'Fixed · Compounding',
    rate: '12.6% p.a.',
    description: 'A set growth rate over your chosen term. Predictable. Compounding. No surprises.',
    href: '/investments/fixed-return-growth',
  },
  {
    number: '5',
    title: 'Fixed Return Income',
    tag: 'Fixed · Paid Out',
    rate: '12.6% p.a.',
    description: 'A fixed, regular income paid out over your chosen term for investors who want certainty.',
    href: '/investments/fixed-return-income',
  },
];

const services = [
  {
    number: '1',
    title: 'Asset Management',
    description: 'Portfolios built and managed around your goals, not a generic model.',
  },
  {
    number: '2',
    title: 'Investment Fund Management',
    description: 'Pooled investment solutions giving you access to opportunities designed for scale.',
  },
  {
    number: '3',
    title: 'Insurance',
    description: 'Protection built into your financial plan, so growth is never undone by the unexpected.',
  },
  {
    number: '4',
    title: 'Digital Investing',
    description: 'Manage, track, and grow your investments online. Built for how you invest today.',
  },
  {
    number: '5',
    title: 'Portfolio Advisory',
    description: 'Ongoing guidance to keep your strategy aligned as markets and goals shift.',
  },
];

const reasons = [
  {
    title: "Built for Today's Investor",
    description: 'Modern products designed for how people actually invest now, not decades ago.',
  },
  {
    title: 'Your Goals First',
    description: 'No generic portfolios. Every strategy starts with a conversation about you.',
  },
  {
    title: 'Rooted, Not Remote',
    description: 'Based in Johannesburg and Limpopo Province. We understand this market because we live in it.',
  },
  {
    title: 'Committed to Compliance',
    description: 'Actively completing our FSCA registration, because trust is earned through accountability.',
  },
];

const calculatorProducts = [
  { id: 'pe-growth', name: 'Private Equity Growth', type: 'Growth · Compounding', rate: 0.132, termYears: 5, mode: 'compound' },
  { id: 'pe-income', name: 'Private Equity Income', type: 'Income · Paid Out', rate: 0.132, termYears: 5, mode: 'income' },
  { id: 'pe-flex', name: 'Private Equity Flexible', type: 'Growth · Flexible', rate: 0.11, termYears: 1, mode: 'compound' },
  { id: 'fixed-growth', name: 'Fixed Return Growth', type: 'Fixed · Compounding', rate: 0.126, termYears: 5, mode: 'compound' },
  { id: 'fixed-income', name: 'Fixed Return Income', type: 'Fixed · Paid Out', rate: 0.126, termYears: 5, mode: 'income' },
] as const;

const formatAxisCurrency = (value: number) => {
  if (value >= 1000000) return `R${(value / 1000000).toFixed(1)}m`;
  if (value >= 1000) return `R${Math.round(value / 1000)}k`;
  return `R${Math.round(value)}`;
};

const formatRate = (rate: number) => {
  const percentage = rate * 100;
  return `${percentage.toFixed(Number.isInteger(percentage) ? 0 : 1)}% p.a.`;
};

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [investmentMenuOpen, setInvestmentMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInvestmentsOpen, setMobileInvestmentsOpen] = useState(false);
  const [calculatorProductId, setCalculatorProductId] = useState('pe-growth');
  const [calculatorAmount, setCalculatorAmount] = useState(100000);
  const [hoveredChartPoint, setHoveredChartPoint] = useState<number | null>(null);

  const calculatorProduct = calculatorProducts.find((product) => product.id === calculatorProductId) ?? calculatorProducts[0];
  const calculatorYears = calculatorProduct.termYears;
  const compoundProjection = calculatorProduct.mode === 'compound'
    ? calculateCompoundGrowth(calculatorAmount, calculatorProduct.rate, calculatorYears)
    : null;
  const incomeProjection = calculatorProduct.mode === 'income'
    ? calculatorProduct.id === 'fixed-income'
      ? calculateFixedReturnIncome(calculatorAmount, calculatorProduct.rate, calculatorYears)
      : calculateMonthlyIncome(calculatorAmount, calculatorProduct.rate, calculatorYears)
    : null;
  const calculatorChartValues = compoundProjection
    ? compoundProjection.yearlyGrowth.reduce<number[]>((values, growth) => {
        values.push(roundTo2(values[values.length - 1] + growth));
        return values;
      }, [calculatorAmount])
    : Array.from({ length: calculatorYears + 1 }, (_, year) => roundTo2((incomeProjection?.grossAnnual ?? 0) * year));
  const calculatorResultLabel = compoundProjection ? 'Estimated Future Value' : 'Monthly Income Before Tax';
  const calculatorResultValue = compoundProjection
    ? compoundProjection.estimatedFutureValue
    : incomeProjection?.grossMonthly ?? 0;
  const calculatorTotalLabel = compoundProjection ? 'Total Estimated Growth' : 'Total Income Before Tax Over Term';
  const calculatorTotalValue = compoundProjection
    ? compoundProjection.totalGrowth
    : incomeProjection?.grossTotalIncome ?? 0;
  const chartWidth = 560;
  const chartHeight = 230;
  const chartLeft = 74;
  const chartRight = 18;
  const chartTop = 18;
  const chartBottom = 44;
  const chartInnerWidth = chartWidth - chartLeft - chartRight;
  const chartInnerHeight = chartHeight - chartTop - chartBottom;
  const chartMaximum = Math.max(...calculatorChartValues, 1) * 1.12;
  const calculatorChartPoints = calculatorChartValues.map((value, index) => ({
    year: index,
    value,
    x: chartLeft + (index / Math.max(calculatorChartValues.length - 1, 1)) * chartInnerWidth,
    y: chartTop + chartInnerHeight - (value / chartMaximum) * chartInnerHeight,
  }));
  const calculatorLinePoints = calculatorChartPoints.map((point) => `${point.x.toFixed(1)},${point.y.toFixed(1)}`).join(' ');
  const chartTicks = Array.from({ length: 5 }, (_, index) => {
    const ratio = index / 4;
    return {
      value: chartMaximum * (1 - ratio),
      y: chartTop + chartInnerHeight * ratio,
    };
  });

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [activeSlide]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setInvestmentMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const closeNavigation = () => {
    setInvestmentMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileInvestmentsOpen(false);
  };

  const showPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <div className="tm-home">
      <header className="tm-home-header">
        <div className="tm-home-nav">
          <Link href="/" className="tm-home-logo" aria-label="Tiyani Magomani home" onClick={closeNavigation}>
            <img src="/tiyani-logo.png" alt="Tiyani Magomani" />
          </Link>

          <nav className="tm-home-nav-links" aria-label="Primary navigation">
            <div
              className="tm-home-investment-menu"
              onMouseEnter={() => setInvestmentMenuOpen(true)}
              onMouseLeave={() => setInvestmentMenuOpen(false)}
            >
              <button
                type="button"
                className="tm-home-nav-link"
                aria-expanded={investmentMenuOpen}
                aria-haspopup="true"
                onClick={() => setInvestmentMenuOpen((open) => !open)}
              >
                Investments
                <ChevronDown aria-hidden="true" size={15} />
              </button>

              {investmentMenuOpen && (
                <div className="tm-home-dropdown">
                  <div className="tm-home-dropdown-heading">
                    <span>Investment options</span>
                    <Link href="/investments" onClick={closeNavigation}>
                      View all
                      <ArrowRight aria-hidden="true" size={14} />
                    </Link>
                  </div>
                  <div className="tm-home-dropdown-links">
                    {investmentLinks.map((item, index) => (
                      <Link href={item.href} key={item.href} onClick={closeNavigation}>
                        <span>{index + 1}</span>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                  <Link href="/compare" className="tm-home-dropdown-tool" onClick={closeNavigation}>
                    Compare investment estimates
                    <ArrowRight aria-hidden="true" size={15} />
                  </Link>
                </div>
              )}
            </div>

            <Link href="/digital-investing" className="tm-home-nav-link" onClick={closeNavigation}>
              Digital Investing
            </Link>
            <Link href="/about" className="tm-home-nav-link" onClick={closeNavigation}>
              About
            </Link>
            <a href="#calculator" className="tm-home-nav-link" onClick={closeNavigation}>
              Calculator
            </a>
          </nav>

          <Link href="/contact" className="tm-home-header-cta" onClick={closeNavigation}>
            Contact Us
          </Link>

          <button
            type="button"
            className="tm-home-menu-button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="tm-home-mobile-nav">
            <button
              type="button"
              className="tm-home-mobile-investments"
              aria-expanded={mobileInvestmentsOpen}
              onClick={() => setMobileInvestmentsOpen((open) => !open)}
            >
              Investments
              <ChevronDown aria-hidden="true" className={mobileInvestmentsOpen ? 'is-open' : ''} size={17} />
            </button>
            {mobileInvestmentsOpen && (
              <div className="tm-home-mobile-products">
                <Link href="/investments" onClick={closeNavigation}>All Investment Options</Link>
                {investmentLinks.map((item) => (
                  <Link href={item.href} key={item.href} onClick={closeNavigation}>
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/digital-investing" onClick={closeNavigation}>Digital Investing</Link>
            <Link href="/about" onClick={closeNavigation}>About</Link>
            <a href="#calculator" onClick={closeNavigation}>Calculator</a>
            <Link href="/contact" className="tm-home-mobile-cta" onClick={closeNavigation}>Contact Us</Link>
          </div>
        )}
      </header>

      <main>
        <section className="tm-home-hero" aria-label="Tiyani Magomani introduction">
          <div className="tm-home-hero-copy">
            <h1 key={heroSlides[activeSlide].title}>{heroSlides[activeSlide].title}</h1>
            <p className="tm-home-hero-intro">
              {heroSlides[activeSlide].text}
            </p>
            <div className="tm-home-actions">
              <Link href={heroSlides[activeSlide].primaryHref} className="tm-home-button tm-home-button-gold">
                {heroSlides[activeSlide].primaryLabel}
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              {heroSlides[activeSlide].secondaryHref && (
                <Link href={heroSlides[activeSlide].secondaryHref} className="tm-home-button tm-home-button-outline-light">
                  {heroSlides[activeSlide].secondaryLabel}
                </Link>
              )}
            </div>
          </div>

          <div className="tm-home-hero-visual" aria-live="polite">
            <div className="tm-home-hero-blue-layer" aria-hidden="true" />
            {heroSlides.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={index === activeSlide ? image.alt : ''}
                className={'tm-home-hero-image ' + (index === activeSlide ? 'is-active' : '')}
                style={{ objectPosition: image.position }}
                aria-hidden={index !== activeSlide}
              />
            ))}
            <div className="tm-home-hero-controls">
              <button type="button" onClick={showPreviousSlide} aria-label="Previous hero image">
                <ChevronLeft aria-hidden="true" />
              </button>
              <span>{activeSlide + 1} / {heroSlides.length}</span>
              <button type="button" onClick={showNextSlide} aria-label="Next hero image">
                <ChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        <section className="tm-home-section tm-home-about" id="about">
          <div className="tm-home-about-copy">
            <p className="tm-home-eyebrow">A New Way to Invest</p>
            <h2>Built for Today&apos;s Investor, Not Yesterday&apos;s Rules.</h2>
            <div className="tm-home-copy-columns">
              <p>
                Tiyani Magomani was founded on a simple idea: investing shouldn&apos;t be reserved for the old guard. We&apos;re building a company for today&apos;s investor, someone who wants real products, real transparency, and real growth without the outdated gatekeeping of traditional finance.
              </p>
              <p>
                Based in Johannesburg and Limpopo Province, we&apos;re bringing a fresh, digitally driven approach to asset management, investment funds, insurance, and more.
              </p>
            </div>
            <Link href="/about" className="tm-home-text-link">
              Discover Our Story
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="tm-home-about-image">
            <img src="/images/investment-options-team.png" alt="Investment professionals in conversation" />
            <div className="tm-home-about-caption">
              <span>Johannesburg</span>
              <span>Limpopo Province</span>
            </div>
          </div>
        </section>

        <section className="tm-home-section tm-home-products" id="products">
          <div className="tm-home-section-heading">
            <div>
              <p className="tm-home-eyebrow">Choose How You Grow</p>
              <h2>Our Products</h2>
            </div>
            <p>Five ways to put your money to work. Pick the balance of growth, income, and access that fits you.</p>
          </div>

          <div className="tm-home-product-list">
            {products.map((product) => (
              <Link href={product.href} key={product.href} className="tm-home-product-row">
                <span className="tm-home-product-number">{product.number}</span>
                <div className="tm-home-product-title">
                  <span>{product.tag}</span>
                  <h3>{product.title}</h3>
                </div>
                <p>{product.description}</p>
                <strong className="tm-home-product-rate">{product.rate}</strong>
                <span className="tm-home-row-arrow" aria-hidden="true">
                  <ArrowRight size={19} />
                </span>
              </Link>
            ))}
          </div>

          <div className="tm-home-calculator-prompt">
            <div>
              <p className="tm-home-eyebrow">See Your Numbers</p>
              <h3>Estimate Your Return in Seconds.</h3>
              <p>Choose a product, set your amount and term, and get an instant estimate.</p>
            </div>
            <a href="#calculator" className="tm-home-button tm-home-button-navy">
              Try the Calculator
              <ArrowRight aria-hidden="true" size={17} />
            </a>
          </div>
          <p className="tm-home-product-disclaimer">Target returns are projections based on prevailing market conditions and are not guaranteed.</p>
        </section>

        <section className="tm-home-services" id="services">
          <div className="tm-home-services-image">
            <img src="/images/investment-solutions-advisory.png" alt="A client and adviser reviewing financial documents" />
            <div aria-hidden="true" />
          </div>
          <div className="tm-home-services-content">
            <p className="tm-home-eyebrow">More Than Products</p>
            <h2>Our Services</h2>
            <p className="tm-home-services-intro">A full financial partner, from managing your money to protecting it.</p>
            <div className="tm-home-service-list">
              {services.map((service) => (
                <div className="tm-home-service-row" key={service.title}>
                  <span>{service.number}</span>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/contact" className="tm-home-text-link tm-home-text-link-light">
              Explore All Services
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>

        <section className="tm-home-calculator-section" id="calculator">
          <div className="tm-home-calculator-heading">
            <p className="tm-home-eyebrow">See Your Numbers</p>
            <h2>Estimate Your Return in Seconds.</h2>
            <p>Choose a product, set your amount and term, and get an instant estimate.</p>
          </div>

          <div className="tm-home-calculator-grid">
            <div className="tm-home-calculator-panel">
              <p className="tm-home-calculator-label">1 Choose a Product</p>
              <div className="tm-home-calculator-products">
                {calculatorProducts.map((product) => (
                  <button
                    type="button"
                    key={product.id}
                    className={product.id === calculatorProductId ? 'is-active' : ''}
                    onClick={() => {
                      setCalculatorProductId(product.id);
                      setHoveredChartPoint(null);
                    }}
                  >
                    <strong>{product.name}</strong>
                    <span>{product.type}</span>
                  </button>
                ))}
              </div>

              <label className="tm-home-calculator-field">
                <span className="tm-home-calculator-label">2 Investment Amount</span>
                <span className="tm-home-calculator-amount">
                  <span>R</span>
                  <input
                    type="number"
                    min="100000"
                    step="500"
                    value={calculatorAmount}
                    onChange={(event) => setCalculatorAmount(Math.max(0, Number(event.target.value) || 0))}
                    onBlur={() => setCalculatorAmount((amount) => Math.max(100000, amount))}
                    aria-label="Investment amount"
                  />
                </span>
                <small>Minimum investment: R100,000.00</small>
              </label>

              <div className="tm-home-calculator-field">
                <span className="tm-home-calculator-term-heading">
                  <span className="tm-home-calculator-label">3 Term</span>
                  <strong>{calculatorYears} {calculatorYears === 1 ? 'year' : 'years'}</strong>
                </span>
                <p className="tm-home-calculator-fixed-term">The term is fixed for the selected product.</p>
              </div>
            </div>

            <div className="tm-home-calculator-result" aria-live="polite">
              <div>
                <span className="tm-home-calculator-badge">
                  {calculatorProduct.mode === 'compound' ? 'Growth Product' : 'Income Product'}
                </span>
                <p className="tm-home-calculator-result-label">
                  {calculatorResultLabel}
                </p>
                <strong className="tm-home-calculator-figure">
                  {formatCurrency(calculatorResultValue)}
                </strong>
                <p className="tm-home-calculator-range">
                  {calculatorTotalLabel}: {formatCurrency(calculatorTotalValue)}
                </p>
                <div className="tm-home-calculator-chart">
                  <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} role="img" aria-label={`${calculatorProduct.name} projection by year`}>
                    <g className="tm-home-calculator-grid-lines">
                      {chartTicks.map((tick) => (
                        <line key={tick.y} x1={chartLeft} y1={tick.y} x2={chartWidth - chartRight} y2={tick.y} />
                      ))}
                      {calculatorChartPoints.map((point) => (
                        <line key={point.year} x1={point.x} y1={chartTop} x2={point.x} y2={chartTop + chartInnerHeight} />
                      ))}
                    </g>
                    <g className="tm-home-calculator-axis-labels">
                      {chartTicks.map((tick) => (
                        <text key={tick.y} x={chartLeft - 10} y={tick.y + 4} textAnchor="end">{formatAxisCurrency(tick.value)}</text>
                      ))}
                      {calculatorChartPoints.map((point) => (
                        <text key={point.year} x={point.x} y={chartHeight - 18} textAnchor="middle">{point.year}</text>
                      ))}
                      <text className="tm-home-calculator-x-title" x={chartLeft + chartInnerWidth / 2} y={chartHeight - 2} textAnchor="middle">Year</text>
                      <text className="tm-home-calculator-y-title" transform={`translate(14 ${chartTop + chartInnerHeight / 2}) rotate(-90)`} textAnchor="middle">
                        {compoundProjection ? 'Projected value' : 'Cumulative income'}
                      </text>
                    </g>
                    <polyline className="tm-home-calculator-series" points={calculatorLinePoints} />
                    {calculatorChartPoints.map((point, index) => (
                      <g
                        key={point.year}
                        className="tm-home-calculator-point"
                        tabIndex={0}
                        onMouseEnter={() => setHoveredChartPoint(index)}
                        onMouseLeave={() => setHoveredChartPoint(null)}
                        onFocus={() => setHoveredChartPoint(index)}
                        onBlur={() => setHoveredChartPoint(null)}
                      >
                        <circle className="tm-home-calculator-point-hit" cx={point.x} cy={point.y} r="13" />
                        {hoveredChartPoint === index && (
                          <g className="tm-home-calculator-tooltip" transform={`translate(${Math.min(Math.max(point.x, 92), chartWidth - 92)} ${Math.max(point.y - 48, 28)})`}>
                            <rect x="-78" y="-22" width="156" height="34" rx="2" />
                            <text x="0" y="0" textAnchor="middle">Year {point.year}: {formatCurrency(point.value)}</text>
                          </g>
                        )}
                      </g>
                    ))}
                  </svg>
                </div>
              </div>

              <div className="tm-home-calculator-meta">
                <div><span>Target return</span><strong>{formatRate(calculatorProduct.rate)}</strong></div>
                <div><span>Term</span><strong>{calculatorYears} {calculatorYears === 1 ? 'year' : 'years'}</strong></div>
                <div><span>Initial investment</span><strong>{formatCurrency(calculatorAmount)}</strong></div>
                <div><span>{calculatorTotalLabel}</span><strong>{formatCurrency(calculatorTotalValue)}</strong></div>
              </div>
            </div>
          </div>

          <p className="tm-home-calculator-disclaimer">
            <strong>Important:</strong> Calculator results are estimates based on the information entered and the selected product assumptions. They are shown for general information and enquiry purposes only and do not constitute financial advice or a guaranteed return. Final figures, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.
          </p>
        </section>

        <section className="tm-home-section tm-home-why">
          <div className="tm-home-why-heading">
            <p className="tm-home-eyebrow">Why Clients Choose Us</p>
            <h2>Built Differently, On Purpose.</h2>
          </div>
          <div className="tm-home-reason-grid">
            {reasons.map((reason, index) => (
              <article className="tm-home-reason" key={reason.title}>
                <span>{index + 1}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="tm-home-final-cta">
          <p className="tm-home-eyebrow">Your Future Doesn&apos;t Wait</p>
          <h2>Neither Should You.</h2>
          <p>See exactly what your money could grow into. Try the calculator, then let&apos;s build a plan around it.</p>
          <div className="tm-home-actions">
            <a href="#calculator" className="tm-home-button tm-home-button-navy">Try the Calculator</a>
            <Link href="/contact" className="tm-home-button tm-home-button-outline-dark">Book a Consultation</Link>
          </div>
        </section>
      </main>

      <footer className="tm-home-footer">
        <div className="tm-home-footer-main">
          <div>
            <Link href="/" className="tm-home-footer-logo" aria-label="Tiyani Magomani home">
              <img src="/tiyani-logo.png" alt="Tiyani Magomani" />
            </Link>
            <p>Johannesburg | Limpopo Province, South Africa</p>
            <a href="mailto:office@tiyanimagomani.com">office@tiyanimagomani.com</a>
            <a href="https://tiyanimagomani.com">tiyanimagomani.com</a>
          </div>
          <div className="tm-home-footer-links">
            <div>
              <span>Explore</span>
              <a href="#products">Products</a>
              <a href="#services">Services</a>
              <a href="#calculator">Calculator</a>
              <Link href="/about">About</Link>
            </div>
            <div>
              <span>Information</span>
              <Link href="/legal">Legal Centre</Link>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/risk-disclosure">Risk Disclosure</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <p className="tm-home-footer-note">
          Tiyani Magomani is in the process of registering as a Financial Services Provider (FSP) with the Financial Sector Conduct Authority (FSCA). Return estimates shown on this site are illustrative only and not guaranteed.
        </p>
      </footer>
    </div>
  );
}
