"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

const investmentLinks = [
  { label: 'Private Equity Growth', href: '/investments/private-equity-growth' },
  { label: 'Private Equity Income', href: '/investments/private-equity-income' },
  { label: 'Private Equity Flexible Access', href: '/investments/private-equity-flexible-access' },
  { label: 'Fixed Return Growth', href: '/investments/fixed-return-growth' },
  { label: 'Fixed Return Income', href: '/investments/fixed-return-income' },
  { label: 'Offshore Global', href: '/investments/offshore-global' },
];

export function HomeStyleHeader() {
  const [investmentMenuOpen, setInvestmentMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileInvestmentsOpen, setMobileInvestmentsOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const previousScrollPosition = useRef(0);
  const pathname = usePathname();

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
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, [investmentMenuOpen, mobileMenuOpen]);

  const closeNavigation = () => {
    setInvestmentMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileInvestmentsOpen(false);
  };

  return (
    <header className={`tm-home-header${headerHidden ? ' is-hidden' : ''}`}>
      <div className="tm-home-nav">
        <Link href="/" className="tm-home-logo" aria-label="Tiyani Magomani home" onClick={closeNavigation}>
          <img src="/tiyani-logo.png" alt="Tiyani Magomani" />
        </Link>

        <nav className="tm-home-nav-links" aria-label="Primary navigation">
          <Link href="/" className={`tm-home-nav-link${pathname === '/' ? ' is-active' : ''}`} onClick={closeNavigation}>Home</Link>
          <div
            className="tm-home-investment-menu"
            onMouseEnter={() => setInvestmentMenuOpen(true)}
            onMouseLeave={() => setInvestmentMenuOpen(false)}
          >
            <button
              type="button"
              className={`tm-home-nav-link${pathname.startsWith('/investments') ? ' is-active' : ''}`}
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

          <Link href="/digital-investing" className={`tm-home-nav-link${pathname === '/digital-investing' ? ' is-active' : ''}`} onClick={closeNavigation}>Digital Investing</Link>
          <Link href="/about" className={`tm-home-nav-link${pathname === '/about' ? ' is-active' : ''}`} onClick={closeNavigation}>About Us</Link>
          <Link href="/contact" className={`tm-home-nav-link${pathname === '/contact' ? ' is-active' : ''}`} onClick={closeNavigation}>Contact Us</Link>
        </nav>

        <Link href="/contact" className="tm-home-header-cta" onClick={closeNavigation}>Start Investing</Link>

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
          <Link href="/" className={pathname === '/' ? 'is-active' : ''} onClick={closeNavigation}>Home</Link>
          <button
            type="button"
            className={`tm-home-mobile-investments${pathname.startsWith('/investments') ? ' is-active' : ''}`}
            aria-expanded={mobileInvestmentsOpen}
            onClick={() => setMobileInvestmentsOpen((open) => !open)}
          >
            Investments
            <ChevronDown aria-hidden="true" className={mobileInvestmentsOpen ? 'is-open' : ''} size={17} />
          </button>
          {mobileInvestmentsOpen && (
            <div className="tm-home-mobile-products">
              <Link href="/investments" className={pathname === '/investments' ? 'is-active' : ''} onClick={closeNavigation}>All Investment Options</Link>
              {investmentLinks.map((item) => (
                <Link href={item.href} key={item.href} className={pathname === item.href ? 'is-active' : ''} onClick={closeNavigation}>{item.label}</Link>
              ))}
            </div>
          )}
          <Link href="/digital-investing" className={pathname === '/digital-investing' ? 'is-active' : ''} onClick={closeNavigation}>Digital Investing</Link>
          <Link href="/about" className={pathname === '/about' ? 'is-active' : ''} onClick={closeNavigation}>About Us</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'is-active' : ''} onClick={closeNavigation}>Contact Us</Link>
          <Link href="/contact" className="tm-home-mobile-cta" onClick={closeNavigation}>Start Investing</Link>
        </div>
      )}
    </header>
  );
}

export function HomeFooterLinks({ useHomeAnchors = false }: { useHomeAnchors?: boolean }) {
  const [openSections, setOpenSections] = useState({ explore: false, information: false });

  const toggleSection = (section: 'explore' | 'information') => {
    setOpenSections((current) => ({ ...current, [section]: !current[section] }));
  };

  return (
    <div className="tm-home-footer-links">
      <div className="tm-home-footer-group">
        <button
          type="button"
          className="tm-home-footer-link-toggle"
          aria-expanded={openSections.explore}
          aria-controls="tm-footer-explore-links"
          onClick={() => toggleSection('explore')}
        >
          <span>Explore</span>
          <ChevronDown aria-hidden="true" className={openSections.explore ? 'is-open' : ''} size={18} />
        </button>
        <div
          id="tm-footer-explore-links"
          className={`tm-home-footer-link-list${openSections.explore ? ' is-open' : ''}`}
        >
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href={useHomeAnchors ? '#products' : '/investments'}>Investment Products</Link>
          <Link href={useHomeAnchors ? '#services' : '/digital-investing'}>Our Services</Link>
          <Link href={useHomeAnchors ? '#calculator' : '/calculator'}>Investment Calculator</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="tm-home-footer-group">
        <button
          type="button"
          className="tm-home-footer-link-toggle"
          aria-expanded={openSections.information}
          aria-controls="tm-footer-information-links"
          onClick={() => toggleSection('information')}
        >
          <span>Information</span>
          <ChevronDown aria-hidden="true" className={openSections.information ? 'is-open' : ''} size={18} />
        </button>
        <div
          id="tm-footer-information-links"
          className={`tm-home-footer-link-list${openSections.information ? ' is-open' : ''}`}
        >
          <Link href="/terms">Product Terms</Link>
          <Link href="/risk-disclosure">Investment Risks</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/legal">Regulatory Disclosures</Link>
        </div>
      </div>
    </div>
  );
}

export function HomeStyleFooter() {
  return (
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
        <HomeFooterLinks />
      </div>
      <p className="tm-home-footer-note">
        Investments involve risk, including possible loss of capital. Target and projected returns are not guaranteed. Product availability, eligibility, fees, liquidity and applicable terms must be confirmed in formal documentation. © Tiyani Magomani Capital. All rights reserved.
      </p>
    </footer>
  );
}
