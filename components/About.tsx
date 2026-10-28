"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';

const principles = [
  {
    number: '1',
    title: 'Capital Preservation Objectives',
    description: 'Every opportunity is weighed against risk, liquidity, suitability and long-term capital protection objectives before deployment.',
  },
  {
    number: '2',
    title: 'Strategic Allocation',
    description: 'Connecting capital with strategic opportunities backed by commercial fundamentals and disciplined structures.',
  },
  {
    number: '3',
    title: 'Responsible Risk-Taking',
    description: 'Successful investing is not about chasing the highest advertised return, but understanding opportunities and respecting risk.',
  },
  {
    number: '4',
    title: 'Sustainable Value Creation',
    description: 'Staying committed to the long term to build valuable assets, open doors and support generations to come.',
  },
];

const pathway = [
  'Identify & Evaluate — We look for opportunities with real long-term potential and test their commercial fundamentals.',
  'Structure & Invest — We assess the risks and build structures that serve our objectives. Capital is never deployed without a clear purpose.',
  'Manage & Grow — Grounded in entrepreneurship and disciplined investing, we focus on enduring value and generational wealth.',
  'Governance & Responsibility — Our governance framework covers investment due diligence, capital allocation controls, risk assessment, regulatory compliance, financial reporting and ethical business practice.',
];

export default function About() {
  return (
    <main className="tm-about-page tm-site-page">
      <section className="tm-about-hero">
        <img
          src="/images/about-advisory-team.png"
          alt="Tiyani Magomani advisers in conversation"
          className="tm-about-hero-image"
        />
        <div className="tm-about-hero-overlay" />
        <div className="tm-about-shell tm-about-hero-inner">
          <FadeIn className="tm-about-hero-copy">
            <h1>Built on Vision. Driven by Opportunity. Focused on Legacy.</h1>
            <p>
              Tiyani Magomani Capital is a diversified investment company with a bold mission: to connect capital with opportunity and help individuals, families and businesses build lasting financial prosperity.
            </p>
            <div className="tm-about-actions">
              <Link href="/investments" className="tm-about-button tm-about-button-gold">
                Explore Our Investment Solutions
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <Link href="/contact" className="tm-about-button tm-about-button-outline">
                Start Investing
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="tm-about-intro">
        <div className="tm-about-shell tm-about-intro-grid">
          <FadeIn className="tm-about-intro-heading">
            <p className="tm-about-label">About Us</p>
            <h2>We See More Than Money. We See What It Could Become.</h2>
          </FadeIn>
          <FadeIn delay={0.12} className="tm-about-intro-copy">
            <p>
              We believe wealth creation is not a privilege reserved for people who already speak the language of complex markets. Investment opportunities should be explained clearly, backed by responsible strategy and aligned with the ambitions of the people behind the capital.
            </p>
            <p>
              Our offering spans private equity, fixed-return investments, asset management, investment fund management, insurance, digital investing and portfolio advisory.
            </p>
            <p>
              But we are not here to simply sell financial products. We are here to change how you think about money: not just as income to spend or savings to hold, but as capital that can build assets, open doors and support generations to come.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="tm-about-story">
        <div className="tm-about-shell tm-about-story-grid">
          <FadeIn className="tm-about-story-image">
            <img src="/images/about-team-discussion.png" alt="A professional team discussing investment options" />
            <div className="tm-about-story-caption">
              <span>Beyond Capital</span>
              <span>Towards Generational Wealth</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} className="tm-about-story-copy">
            <p className="tm-about-label">Vision, Mission &amp; Purpose</p>
            <h2>Building Wealth That Outlives Generations.</h2>
            <p>
              <strong>Our Vision — Building Wealth That Outlives Generations:</strong> To be a respected investment company known for connecting people and businesses with strategic opportunities, responsible capital management and long-term financial value.
            </p>
            <p>
              <strong>Our Mission — Turning Financial Ambition Into Investment Opportunity:</strong> To deliver accessible investment solutions, pursue strategic opportunities and equip people to make informed financial decisions through disciplined investing, innovation and long-term thinking.
            </p>
            <p>
              <strong>Our Purpose — Your Future Deserves More Than Ambition. It Deserves a Strategy:</strong> We exist to connect capital with opportunity, champion responsible wealth creation and help investors pursue goals that truly matter.
            </p>
            <Link href="/investments" className="tm-about-text-link">
              Explore Our Investment Solutions
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="tm-about-principles">
        <div className="tm-about-shell">
          <FadeIn className="tm-about-section-heading">
            <div>
              <p className="tm-about-label">Investment Philosophy</p>
              <h2>Invest With Purpose. Grow With Vision. Build for Generations.</h2>
            </div>
            <p>
              Great investing begins with discipline. We approach capital with ambition and manage it with responsibility. Our philosophy rests on four pillars: capital preservation objectives, strategic allocation, responsible risk-taking and sustainable value creation.
            </p>
          </FadeIn>
          <FadeInStagger className="tm-about-principle-grid">
            {principles.map((principle) => (
              <FadeInStaggerItem key={principle.number} className="tm-about-principle">
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="tm-about-pathway">
        <div className="tm-about-shell tm-about-pathway-grid">
          <FadeIn className="tm-about-pathway-copy">
            <p className="tm-about-label">Leadership, Approach &amp; Governance</p>
            <h2>The Vision Behind Tiyani Magomani Capital.</h2>
            <p>
              Capital, directed with purpose and discipline, can create opportunities far greater than its starting value. Our vision is rooted in entrepreneurship, disciplined investing and the power of owning valuable assets. Tiyani Magomani Capital is committed to sound governance, financial accountability, rigorous investment evaluation and transparent communication with investors.
            </p>
          </FadeIn>
          <FadeInStagger className="tm-about-pathway-list">
            {pathway.map((step, index) => (
              <FadeInStaggerItem key={step} className="tm-about-pathway-step">
                <span>{index + 1}</span>
                <p>{step}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="tm-home tm-home-final-cta">
        <p className="tm-home-eyebrow">Ambition in Our Vision. Discipline in Our Decisions.</p>
        <h2>Confidence Begins With Responsibility.</h2>
        <p>Your capital deserves serious care. Every investment decision should rest on clear information, responsible oversight and a real understanding of risk.</p>
        <div className="tm-home-actions">
          <Link href="/investments" className="tm-home-button tm-home-button-navy">Discover Our Investment Opportunities</Link>
          <Link href="/contact" className="tm-home-button tm-home-button-outline-dark">Start Your Investment Journey</Link>
        </div>
      </section>
    </main>
  );
}
