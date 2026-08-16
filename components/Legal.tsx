"use client";
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import React, { useState } from 'react';

function FAQItem(props: { faq: { q: string, a: string }, key?: string | number }) {
  const { faq } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-soft-grey border border-border-grey mb-4 last:mb-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left cursor-pointer p-6 font-sans font-medium text-ink flex justify-between items-center focus:outline-none"
      >
        <span className="pr-4 block">{faq.q}</span>
        <span className="text-navy font-bold text-xl flex-shrink-0">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 font-sans text-muted-blue leading-relaxed border-t border-border-grey/50">
          <p className="m-0">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function LegalCenter() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Legal Centre</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Important website policies and legal information.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Find the key policies that explain how the Tiyani Magomani website should be used, how visitor information may be handled, and how concerns can be raised.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/terms" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  View Terms
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  Contact Us
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="/images/about-advisory-team.png" 
                  alt="Professional legal and compliance documents" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Legal Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Terms</span>
              <span className="text-sm font-sans text-muted-blue">Website use rules</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Privacy</span>
              <span className="text-sm font-sans text-muted-blue">Information handling</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">POPIA</span>
              <span className="text-sm font-sans text-muted-blue">Personal information rights</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Complaints</span>
              <span className="text-sm font-sans text-muted-blue">Raise a concern</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              Legal and policy content is provided for website information purposes and must be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Legal Pages Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Policies</span>
            <h2 className="text-3xl font-serif text-ink">Choose the policy you want to review.</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Privacy Policy",
                desc: "Explains how visitor information may be collected, used and protected when using the website, calculator or enquiry form.",
                button: "View Privacy Policy",
                link: "/privacy"
              },
              {
                title: "POPIA Policy",
                desc: "Explains how personal information may be processed in line with POPIA principles and visitor rights.",
                button: "View POPIA Policy",
                link: "/popia"
              },
              {
                title: "Terms and Conditions",
                desc: "Explains the general terms for using the website, investment information, calculator and enquiry pathway.",
                button: "View Terms",
                link: "/terms"
              },
              {
                title: "Complaints Policy",
                desc: "Explains how visitors can raise a concern about the website, enquiry process, calculator or communication received.",
                button: "View Complaints Policy",
                link: "/complaints"
              }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-xl font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-base font-sans text-muted-blue leading-relaxed m-0 mb-8 flex-grow">{card.desc}</p>
                <Link href={card.link} className="bg-navy text-white px-6 py-3 text-[13px] font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-max uppercase tracking-wider mt-auto">
                  {card.button}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Website Use Notice */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">General website information</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal max-w-4xl">
              The Tiyani Magomani website provides general investment information and an enquiry pathway only. Website content, calculator and comparison results and product summaries should not be treated as financial advice, guaranteed outcomes, confirmed product terms or a completed investment application.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General guidance only", desc: "Website content is provided to help visitors understand broad investment categories." },
              { title: "Calculator estimates", desc: "Calculator results are estimates only and do not represent guaranteed outcomes." },
              { title: "Formal documents required", desc: "Final product details, risks, fees, terms and eligibility requirements are subject to formal documentation." },
              { title: "Enquiry-led process", desc: "Submitting an enquiry does not represent an investment commitment or completed application." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center">
                <h3 className="text-base font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Personal information and privacy</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal mb-10">
              Visitors who submit an enquiry or use the website may provide personal information such as contact details, investment interest and enquiry details. The Privacy Policy and POPIA Policy explain how this information may be handled.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/privacy" className="bg-navy text-white px-8 py-4 font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                View Privacy Policy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/popia" className="text-navy font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                View POPIA Policy
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Complaints And Concerns Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Raising a concern</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal mb-10">
              Visitors can raise concerns about website information, calculator and comparison results, enquiry communication or privacy-related matters through the contact page. The Complaints Policy explains how concerns may be reviewed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/complaints" className="bg-navy text-white px-8 py-4 font-bold hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                View Complaints Policy
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="text-navy font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-white border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              The information on this Legal Centre page is provided for general website information purposes only. It should not be treated as legal advice, financial advice or final compliance wording. Final legal and policy content must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Legal FAQ Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about website policies</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Which policy explains how my information is handled?",
                a: "The Privacy Policy explains how visitor information may be collected, used and protected. The POPIA Policy explains personal information processing and visitor rights."
              },
              {
                q: "Where can I find the website terms?",
                a: "The Terms and Conditions page explains the general rules for using the website, calculator and enquiry pathway."
              },
              {
                q: "How do I raise a concern?",
                a: "You can use the contact page to raise a concern. The Complaints Policy explains how complaints may be handled."
              },
              {
                q: "Is this legal advice?",
                a: "No. The legal and policy pages are provided for website information purposes only and must be reviewed by the client or a qualified legal/compliance professional."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need help with a policy or website concern?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Contact the team if you have questions about the website, enquiry process, personal information or legal pages.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/terms" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View Terms
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
