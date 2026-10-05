"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';

const principles = [
  {
    number: '1',
    title: 'Clarity first',
    description: 'Investment information should be easy to understand before any decision is made.',
  },
  {
    number: '2',
    title: 'Useful choice',
    description: 'Clients can explore growth, income, flexible access, fixed return and offshore options in one place.',
  },
  {
    number: '3',
    title: 'Real support',
    description: 'Digital tools provide a starting point, with human follow up available when a client is ready.',
  },
  {
    number: '4',
    title: 'Responsible guidance',
    description: 'Clear information and formal product documentation remain central to every next step.',
  },
];

const pathway = [
  'Explore the available investment options',
  'Review product information and estimates',
  'Compare the options that suit your goals',
  'Submit an enquiry for personal follow up',
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
            <h1>About Tiyani Magomani.</h1>
            <p>
              A modern investment company helping individuals and businesses explore clear, accessible ways to grow and manage their money.
            </p>
            <div className="tm-about-actions">
              <Link href="/investments" className="tm-about-button tm-about-button-gold">
                Explore Investments
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
            <p className="tm-about-label">Who we are</p>
            <h2>Built for today&apos;s investor.</h2>
          </FadeIn>
          <FadeIn delay={0.12} className="tm-about-intro-copy">
            <p>
              Tiyani Magomani was founded on a simple idea: investing should not be reserved for the old guard. We are building a company for people who want real products, clear information and a straightforward way to take the next step.
            </p>
            <p>
              Our website brings investment options, practical calculators and a guided enquiry process together so clients can begin with better context and greater confidence.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="tm-about-story">
        <div className="tm-about-shell tm-about-story-grid">
          <FadeIn className="tm-about-story-image">
            <img src="/images/about-team-discussion.png" alt="A professional team discussing investment options" />
            <div className="tm-about-story-caption">
              <span>Johannesburg</span>
              <span>Limpopo Province</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.12} className="tm-about-story-copy">
            <p className="tm-about-label">Our purpose</p>
            <h2>A clearer path into investing.</h2>
            <p>
              Financial products can feel distant and unnecessarily complicated. Our purpose is to make the first part of the journey simpler: understand the options, see how the numbers may work and know what to ask next.
            </p>
            <p>
              The result is a measured, informative experience that gives clients room to consider their goals before speaking with the team.
            </p>
            <Link href="/digital-investing" className="tm-about-text-link">
              Explore Digital Investing
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="tm-about-principles">
        <div className="tm-about-shell">
          <FadeIn className="tm-about-section-heading">
            <div>
              <p className="tm-about-label">What guides us</p>
              <h2>Simple principles. Better conversations.</h2>
            </div>
            <p>
              Every part of the experience is designed to help clients understand their choices without pressure or unnecessary complexity.
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
            <p className="tm-about-label">How it works</p>
            <h2>Move forward at your own pace.</h2>
            <p>
              Begin online, take time to review the information and contact the team when you are ready for a more personal conversation.
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
        <p className="tm-home-eyebrow">Your Future Doesn&apos;t Wait</p>
        <h2>Neither Should You.</h2>
        <p>See exactly what your money could grow into. Try the calculator, then let&apos;s build a plan around it.</p>
        <div className="tm-home-actions">
          <a href="#calculator" className="tm-home-button tm-home-button-navy">Try the Calculator</a>
          <Link href="/contact" className="tm-home-button tm-home-button-outline-dark">Book a Consultation</Link>
        </div>
      </section>
    </main>
  );
}
