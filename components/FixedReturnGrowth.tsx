"use client";
import { ArrowRight } from 'lucide-react';import { investmentProducts } from '../src/lib/investment-products';

import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import CalculatorEngine from './CalculatorEngine';
import ProductFiguresGrid from './ProductFiguresGrid';
import { HomeStyleFooter, HomeStyleHeader } from './HomeStyleChrome';

export default function FixedReturnGrowth() {
  return (
    <div className="tm-growth-page tm-site-page">
      <HomeStyleHeader />
      <main>
      {/* Hero Section */}
      <section className="tm-growth-hero bg-off-white">
        <div className="tm-growth-hero-backdrop">
          <img
            src="/images/fixed-return-growth-hero.png"
            alt="Clients discussing structured long-term planning with an adviser"
          />
          <div className="tm-growth-hero-overlay" aria-hidden="true" />
        </div>
        <div className="tm-growth-hero-content">
          <FadeIn className="tm-growth-hero-copy">
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
              Fixed Return Growth Portfolio
            </h1>
            <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
              A structured growth investment category for clients considering defined-term investment positioning with a focus on future value creation.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[15px]">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#calculator" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">Calculate</Link>
            </div>
          </FadeIn>
        </div>
      </section>


            {/* Key Product Figures */}
      <section className="tm-growth-section tm-growth-figures-section bg-white border-y border-border-grey py-16 lg:py-24">
        <div className="tm-growth-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="tm-growth-section-heading mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Review the core figures for this option before submitting an enquiry.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal max-w-3xl">
              Final product terms, risks and eligibility requirements are confirmed through formal documentation.
            </p>
          </FadeIn>
          
          <div className="tm-growth-figures">
            <ProductFiguresGrid figures={investmentProducts["fixed-return-growth"].figures} />
          </div>
          
          <FadeIn className="bg-soft-grey border border-border-grey p-6 md:p-8">
            <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">
              Capital protection applies to the original investment amount at maturity, subject to the terms of the product. Expected yields are projections based on prevailing market conditions and are not guaranteed. Historical performance offers no assurance of future outcomes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview Section */}
      <section className="tm-growth-section tm-growth-overview py-20 lg:py-32 bg-off-white">
        <div className="tm-growth-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="tm-growth-overview-content max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-ink mb-8 leading-tight">
              Built for clients who prefer defined growth positioning.
            </h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Fixed Return Growth Portfolio is positioned for clients who are considering a structured investment route with a defined-term approach and a focus on capital growth. It is suited to visitors who want clearer investment positioning while still reviewing all formal product details before making a decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Who This Option May Suit */}
      <section className="tm-growth-section tm-growth-suit py-20 lg:py-32 bg-white">
        <div className="tm-growth-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="tm-growth-section-heading mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Who this option may suit</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Defined-term investors", desc: "For clients who prefer an investment route with clearer term-based positioning." },
              { title: "Growth-focused clients", desc: "For clients whose primary objective is future value creation rather than regular income." },
              { title: "Structure-conscious clients", desc: "For clients who want to understand the investment terms before enquiring." },
              { title: "Clients comparing growth routes", desc: "For clients comparing private-equity growth and fixed-return-style growth options." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="tm-growth-card bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[240px]">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>



      {/* Product Calculator Section */}
      <CalculatorEngine lockedProduct={true} productId="fixed-return-growth" presentation="homepage" />



      {/* Final CTA Section */}
      <section className="tm-growth-final-cta py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to explore the Fixed Return Growth Portfolio?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Start with a simple enquiry or Compare Investments to view an estimated result before taking the next step.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto">
                Start an Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/compare" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">Compare Investments</Link>
            </div>
          </FadeIn>
        </div>
      </section>
      </main>
      <HomeStyleFooter />
    </div>
  );
}
