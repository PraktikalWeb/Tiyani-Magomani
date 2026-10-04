"use client";

import { useState } from 'react';
import Link from 'next/link';
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

  const closeNavigation = () => {
    setInvestmentMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileInvestmentsOpen(false);
  };

  return (
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

          <Link href="/digital-investing" className="tm-home-nav-link" onClick={closeNavigation}>Digital Investing</Link>
          <Link href="/about" className="tm-home-nav-link" onClick={closeNavigation}>About</Link>
          <a href="#calculator" className="tm-home-nav-link" onClick={closeNavigation}>Calculator</a>
        </nav>

        <Link href="/contact" className="tm-home-header-cta" onClick={closeNavigation}>Contact Us</Link>

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
                <Link href={item.href} key={item.href} onClick={closeNavigation}>{item.label}</Link>
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
  );
}

export function HomeStyleFooter() {
  return (
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
            <Link href="/#products">Products</Link>
            <Link href="/#services">Services</Link>
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
  );
}
