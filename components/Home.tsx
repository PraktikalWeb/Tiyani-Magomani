"use client";

import { useEffect, useRef, useState } from 'react';
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
import { HomeFooterLinks } from './HomeStyleChrome';

const heroSlides = [
  {
    src: '/images/investment-options-team.png',
    alt: 'Investment professionals discussing a client strategy',
    position: 'center',
    title: "We Don't Just See Capital. We See Potential, Opportunity and Generational Wealth.",
    text: "Your money is not just what you have today. It is the businesses you could back, the independence you could secure and the legacy you could leave. Your capital was built to do more than sit still.",
    primaryLabel: 'Explore Investments',
    primaryHref: '#products',
    secondaryLabel: 'About Us',
    secondaryHref: '/about',
  },
  {
    src: '/images/investment-solutions-advisory.png',
    alt: 'An adviser and client reviewing investment information',
    position: 'center',
    title: 'Your Money. Your Ambitions. Your Strategy.',
    text: 'From private equity to fixed-return investments, five solutions give you the power to choose growth, income or flexibility. Pick the path that matches your goals.',
    primaryLabel: 'View All Products',
    primaryHref: '#products',
    secondaryLabel: 'Try the Calculator',
    secondaryHref: '#calculator',
  },
  {
    src: '/images/contact-advisory-meeting.png',
    alt: 'An adviser meeting with clients in a bright office',
    position: 'center',
    title: 'Building Wealth Is the Start. Managing It Is What Makes It Last.',
    text: 'Asset management. Investment funds. Insurance. Digital investing. Portfolio advisory. One connected approach to your entire financial journey.',
    primaryLabel: 'Explore Our Services',
    primaryHref: '#services',
  },
  {
    src: '/images/calculator-investment-planning.png',
    alt: 'Clients reviewing an investment estimate together',
    position: 'center',
    title: 'What Could Your Money Grow To?',
    text: "Choose a product. Enter your amount. See what your capital could become over time. Your next big financial decision starts with seeing what's possible.",
    primaryLabel: 'Calculate Your Potential Returns',
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
    tag: 'Long-term growth · Your Capital Could Be Part of Something Bigger',
    rate: '13.2% p.a.',
    description: 'Why watch businesses grow when your capital could grow with them? Private Equity Growth gives you exposure to selected private businesses with strong long-term potential. Through a compounding approach, it is built to accumulate capital over time.',
    href: '/investments/private-equity-growth',
  },
  {
    number: '2',
    title: 'Private Equity Income',
    tag: 'Additional income · Let Your Investment Do More Than Grow',
    rate: '13.2% p.a.',
    description: 'Financial independence means making your money support the life you want. Private Equity Income takes an income-focused approach to private business investing, with the objective of generating periodic distributions from eligible investments.',
    href: '/investments/private-equity-income',
  },
  {
    number: '3',
    title: 'Private Equity Flexible Access',
    tag: 'Growth with conditional access · Ambitions Change. Your Investment Should Be Ready.',
    rate: '11% p.a.',
    description: 'You want your capital to grow, and you know life can shift your priorities. Private Equity Flexible Access combines exposure to private equity opportunities with defined arrangements for accessing your invested capital.',
    href: '/investments/private-equity-flexible-access',
  },
  {
    number: '4',
    title: 'Fixed Return Growth',
    tag: 'Structured capital growth · Give Your Goals a Clear Direction',
    rate: '12.6% p.a.',
    description: 'Building wealth takes planning, patience and consistency. Fixed Return Growth offers a defined-rate structure for investors who want compounding growth over an agreed term. See what time and compounding could do for your goals.',
    href: '/investments/fixed-return-growth',
  },
  {
    number: '5',
    title: 'Fixed Return Income',
    tag: 'Defined income structure · Create Another Stream of Income',
    rate: '12.6% p.a.',
    description: 'Your goals may call for more than long-term growth. Fixed Return Income is built for investors who want scheduled income payments under a defined-rate arrangement.',
    href: '/investments/fixed-return-income',
  },
];

const services = [
  {
    number: '1',
    title: 'Asset Management — Your Wealth Deserves Direction.',
    description: 'Your money should be managed with a clear view of where you are headed. Our approach combines investment strategy, diversification, risk assessment and long-term objectives, because your future deserves more than guesswork.',
  },
  {
    number: '2',
    title: 'Investment Fund Management — Access Opportunities Through a Structured Approach.',
    description: 'Some opportunities are best approached through carefully designed capital structures. Our fund management vision connects pooled capital with selected investments, backed by oversight and disciplined management.',
  },
  {
    number: '3',
    title: 'Insurance — Build Your Wealth. Protect What Matters.',
    description: 'You have worked hard to build your financial future. Protecting that progress means preparing for the unexpected. Explore insurance solutions designed to help you manage risks to your family, business and assets.',
  },
  {
    number: '4',
    title: 'Digital Investing — Your Financial Future, Closer to You.',
    description: 'Investing should be clear, convenient and within reach. Our digital experience helps you explore products, understand projections and keep track of your investments through modern online tools.',
  },
  {
    number: '5',
    title: 'Portfolio Advisory — Make Every Decision an Informed One.',
    description: 'Goals evolve. Markets move. Strategy has to keep up. Our portfolio advisory approach helps you evaluate opportunities, understand risk and align every investment choice with what you want to achieve.',
  },
];

const reasons = [
  {
    title: 'Investment Choice That Reflects Your Ambitions',
    description: 'Structures built for different goals, from compounding growth to income-focused investing.',
  },
  {
    title: 'A Long-Term View of Wealth',
    description: 'Real wealth takes discipline and patience, and the vision to look beyond immediate returns.',
  },
  {
    title: 'More Than Investment Products',
    description: 'Investments, asset management, protection, digital tools and portfolio guidance, working together.',
  },
  {
    title: 'Investment Information You Can Understand',
    description: 'Options that are easy to explore, compare and evaluate before you commit.',
  },
  {
    title: 'A Commitment to Responsible Investing',
    description: 'Every opportunity is weighed against risk, liquidity, suitability and your long-term objectives.',
  },
  {
    title: 'A Vision That Thinks Beyond Generations',
    description: 'We are building valuable assets and financial opportunities for tomorrow.',
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
  const [headerHidden, setHeaderHidden] = useState(false);
  const [calculatorProductId, setCalculatorProductId] = useState('pe-growth');
  const [calculatorAmount, setCalculatorAmount] = useState(100000);
  const [hoveredChartPoint, setHoveredChartPoint] = useState<number | null>(null);
  const previousScrollPosition = useRef(0);

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

  useEffect(() => {
    previousScrollPosition.current = window.scrollY;
    let animationFrame: number | null = null;

    const updateHeaderVisibility = () => {
      const currentScrollPosition = window.scrollY;
      const scrollDifference = currentScrollPosition - previousScrollPosition.current;

      if (currentScrollPosition <= 24 || investmentMenuOpen || mobileMenuOpen) {
        setHeaderHidden(false);
      } else if (Math.abs(scrollDifference) >= 6) {
        setHeaderHidden(scrollDifference > 0);
      }

      previousScrollPosition.current = currentScrollPosition;
      animationFrame = null;
    };

    const handleScroll = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateHeaderVisibility);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [investmentMenuOpen, mobileMenuOpen]);

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
      <header className={`tm-home-header${headerHidden ? ' is-hidden' : ''}`}>
        <div className="tm-home-nav">
          <Link href="/" className="tm-home-logo" aria-label="Tiyani Magomani home" onClick={closeNavigation}>
            <img src="/tiyani-logo.png" alt="Tiyani Magomani" />
          </Link>

          <nav className="tm-home-nav-links" aria-label="Primary navigation">
            <Link href="/" className="tm-home-nav-link is-active" onClick={closeNavigation}>
              Home
            </Link>
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
                onClick={() => setInvestmentMenuOpen(true)}
              >
                Investments
                <ChevronDown aria-hidden="true" size={15} />
              </button>

              {investmentMenuOpen && (
                <div className="tm-home-dropdown">
                  <div className="tm-home-dropdown-inner">
                    <div className="tm-home-dropdown-products">
                      <div className="tm-home-dropdown-heading">
                        <div>
                          <span>Investment options</span>
                          <p>Explore the available growth, income, flexible access and offshore routes.</p>
                        </div>
                        <Link href="/investments" onClick={closeNavigation}>
                          View all options
                          <ArrowRight aria-hidden="true" size={14} />
                        </Link>
                      </div>
                      <div className="tm-home-dropdown-links">
                        {investmentLinks.map((item, index) => (
                          <Link href={item.href} key={item.href} onClick={closeNavigation}>
                            <span>{index + 1}</span>
                            {item.label}
                            <ArrowRight aria-hidden="true" size={14} />
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="tm-home-dropdown-feature">
                      <div>
                        <span>Useful tool</span>
                        <h3>Compare before you enquire.</h3>
                        <p>Review estimates across the available investment categories before taking the next step.</p>
                      </div>
                      <Link href="/compare" className="tm-home-dropdown-tool" onClick={closeNavigation}>
                        Compare Investments
                        <ArrowRight aria-hidden="true" size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/digital-investing" className="tm-home-nav-link" onClick={closeNavigation}>
              Digital Investing
            </Link>
            <Link href="/about" className="tm-home-nav-link" onClick={closeNavigation}>
              About Us
            </Link>
            <Link href="/contact" className="tm-home-nav-link" onClick={closeNavigation}>
              Contact Us
            </Link>
          </nav>

          <Link href="/contact" className="tm-home-header-cta" onClick={closeNavigation}>
            Start Investing
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
            <Link href="/" className="is-active" onClick={closeNavigation}>Home</Link>
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
            <Link href="/about" onClick={closeNavigation}>About Us</Link>
            <Link href="/contact" onClick={closeNavigation}>Contact Us</Link>
            <Link href="/contact" className="tm-home-mobile-cta" onClick={closeNavigation}>Start Investing</Link>
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
            <p className="tm-home-eyebrow">Invest Around Your Ambitions</p>
            <h2>What Do You Want Your Money to Do for You?</h2>
            <div className="tm-home-copy-columns">
              <p>
                Grow it. Earn from it. Keep it flexible. Protect it. Pass it on. Whatever your goal, the right investment journey starts with knowing your options. Tiyani Magomani Capital connects ambitious people with investment opportunities built for long-term growth, additional income and lasting prosperity.
              </p>
              <p>
                <strong>Grow My Wealth:</strong> Put your capital to work through long-term strategies built for compounding growth. <strong>Earn Investment Income:</strong> Explore income-focused investments designed around your financial objectives.
              </p>
              <p>
                <strong>Invest With Greater Flexibility:</strong> Choose solutions that respect how your needs for access may change. <strong>Manage and Protect My Wealth:</strong> Tap into management, advisory and protection solutions that safeguard the bigger picture.
              </p>
            </div>
            <Link href="/investments" className="tm-home-text-link">
              Find Your Investment Path
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="tm-home-about-image">
            <img src="/images/investment-options-team.png" alt="Investment professionals in conversation" />
            <div className="tm-home-about-caption">
              <span>Your Capital. Your Ambitions.</span>
              <span>Your Future.</span>
            </div>
          </div>
        </section>

        <section className="tm-home-section tm-home-products" id="products">
          <div className="tm-home-section-heading">
            <div>
              <p className="tm-home-eyebrow">Our Investment Products</p>
              <h2>Don&apos;t Just Save for the Future. Invest in Its Potential.</h2>
            </div>
            <p>Five investment solutions. Different goals. One financial future. Your ambitions are personal, and your investment choices should be too.</p>
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
              <p className="tm-home-eyebrow">Not Sure Which Investment Fits?</p>
              <h3>Compare Objectives, Terms, Risks and Access Conditions.</h3>
              <p>Never choose on a headline percentage alone. Compare objectives, terms, risks and access conditions, then move forward with confidence.</p>
            </div>
            <Link href="/compare" className="tm-home-button tm-home-button-navy">
              Compare Products
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <p className="tm-home-product-disclaimer">Investments involve risk, including possible loss of capital. Target and projected returns are not guaranteed. Product availability, eligibility, fees, liquidity and applicable terms must be confirmed in formal documentation.</p>
        </section>

        <section className="tm-home-services" id="services">
          <div className="tm-home-services-image">
            <img src="/images/investment-solutions-advisory.png" alt="A client and adviser reviewing financial documents" />
            <div aria-hidden="true" />
          </div>
          <div className="tm-home-services-content">
            <p className="tm-home-eyebrow">Our Financial Services</p>
            <h2>Your Wealth Deserves More Than an Investment Product.</h2>
            <p className="tm-home-services-intro">Solutions for every stage of your wealth journey. Growing wealth matters. So does managing it responsibly, planning for uncertainty and making informed decisions along the way.</p>
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
            <Link href="/digital-investing" className="tm-home-text-link tm-home-text-link-light">
              Discover Our Financial Solutions
              <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </section>

        <section className="tm-home-calculator-section" id="calculator">
          <div className="tm-home-calculator-heading">
            <p className="tm-home-eyebrow">Investment Calculator · Your Money Has Potential. See the Numbers.</p>
            <h2>What Could Your Money Grow To?</h2>
            <p>What could R100,000 become in five years? How much difference could compounding make? What could an income-focused investment add to your goals? Stop wondering. Our calculator shows illustrative outcomes based on your chosen product, amount and investment term.</p>
          </div>

          <div className="tm-home-calculator-grid">
            <div className="tm-home-calculator-panel">
              <p className="tm-home-calculator-label">Step 1 | Choose Your Investment Product</p>
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
                <span className="tm-home-calculator-label">Step 2 | Enter Your Investment Amount</span>
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
                  <span className="tm-home-calculator-label">Step 3 | See Your Potential Outcome (Term)</span>
                  <strong>{calculatorYears} {calculatorYears === 1 ? 'year' : 'years'}</strong>
                </span>
                <p className="tm-home-calculator-fixed-term">Review estimated growth or income based on the product&apos;s stated assumptions.</p>
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
            <strong>Important:</strong> Calculator results are estimates, not guarantees or personalised investment advice. Actual outcomes depend on product terms, risks, fees, taxes and other factors.
          </p>
        </section>

        <section className="tm-home-section tm-home-why">
          <div className="tm-home-why-heading">
            <p className="tm-home-eyebrow">Why Tiyani Magomani Capital?</p>
            <h2>Your Future Deserves More Than One-Size-Fits-All.</h2>
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
          <p className="tm-home-eyebrow">Your Financial Goals Matter. Let&apos;s Explore What&apos;s Possible.</p>
          <h2>Your Next Financial Chapter Starts With a Decision.</h2>
          <p>The opportunities are here. Whether you want to grow capital, earn additional income or build a long-term strategy, the first step is knowing your options. Tell us what you want to achieve and we will direct you to the right investment information.</p>
          <div className="tm-home-actions">
            <Link href="/investments" className="tm-home-button tm-home-button-navy">Explore Investment Products</Link>
            <Link href="/contact" className="tm-home-button tm-home-button-outline-dark">Start Your Investment Journey</Link>
          </div>
        </section>
      </main>

      <footer className="tm-home-footer">
        <div className="tm-home-footer-main">
          <div>
            <Link href="/" className="tm-home-footer-logo" aria-label="Tiyani Magomani home">
              <img src="/tiyani-logo.png" alt="Tiyani Magomani Capital" />
            </Link>
            <p><strong>Where Capital Meets Opportunity.</strong></p>
            <p>We Don&apos;t Just See Capital. We See Potential, Opportunity and Generational Wealth. Access to Investments That Protect and Grow Your Wealth.</p>
            <p>Johannesburg | Limpopo Province, South Africa</p>
            <a href="mailto:office@tiyanimagomani.com">office@tiyanimagomani.com</a>
            <a href="https://tiyanimagomani.com">tiyanimagomani.com</a>
          </div>
          <HomeFooterLinks useHomeAnchors />
        </div>
        <p className="tm-home-footer-note">
          Investments involve risk, including possible loss of capital. Target and projected returns are not guaranteed. Product availability, eligibility, fees, liquidity and applicable terms must be confirmed in formal documentation. © Tiyani Magomani Capital. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

