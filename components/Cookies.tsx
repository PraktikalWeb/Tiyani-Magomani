"use client";
import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import React, { useState } from 'react';
import LegalHero from './LegalHero';

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

export default function CookiesPolicy() {
  return (
    <div className="pt-20 tm-legal-page tm-site-page">
      <LegalHero
        eyebrow="Cookie Policy"
        title="How this website uses cookies."
        description="Learn how cookies may support functionality, preferences and website insights."
        imageSrc="/images/digital-investing-planning.png"
        imageAlt="Two people reviewing website information together"
        primaryLink={{ href: '/privacy', label: 'View Privacy Policy' }}
        secondaryLink={{ href: '/contact', label: 'Contact Us' }}
      />

      {/* Cookie Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Functionality</span>
              <span className="text-sm font-sans text-muted-blue">Supports website use</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Analytics</span>
              <span className="text-sm font-sans text-muted-blue">May help understand traffic</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Preferences</span>
              <span className="text-sm font-sans text-muted-blue">May remember settings</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Control</span>
              <span className="text-sm font-sans text-muted-blue">Visitors can manage browser settings</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This Cookie Policy is provided for website information purposes and must be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Introduction</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                This Cookie Policy explains how cookies and similar technologies may be used when visitors browse the Tiyani Magomani website, use the Compare Investments, view investment information or submit an enquiry.
              </p>
            </div>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4 max-w-4xl">
              <span className="font-semibold text-ink">Note:</span> This website provides general investment information and an enquiry pathway only. It does not include a client portal, account login or direct investment onboarding system.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Are Cookies Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">What are cookies?</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Cookies are small files or pieces of information that may be stored on a visitor’s device when they use a website. Cookies can help websites function properly, remember certain preferences, understand general visitor behaviour and improve user experience.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Types Of Cookies Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Types of cookies that may be used</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Essential cookies", desc: "These may be needed for basic website functionality, navigation and security." },
              { title: "Preference cookies", desc: "These may remember visitor choices such as display preferences or form-related settings." },
              { title: "Analytics cookies", desc: "These may help understand how visitors use the website, which pages are viewed and how the website can be improved." },
              { title: "Performance cookies", desc: "These may help measure website performance, loading behaviour and general usability." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* How Cookies May Be Used Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">How cookies may be used</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal mb-8">
              Cookies and similar technologies may be used for the following purposes:
            </p>
            
            <ul className="space-y-4">
              {[
                "To support basic website functionality",
                "To improve website performance",
                "To understand general website traffic",
                "To improve the visitor experience",
                "To support calculator and enquiry pathway usability",
                "To detect technical issues",
                "To manage visitor preferences where applicable"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-navy rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                  <span className="text-base font-sans text-ink leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Analytics And Tracking Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Analytics and website improvement</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                The website may use analytics tools to understand general visitor behaviour, improve content, monitor page performance and make the website easier to use. Analytics information should be used in an aggregated or general way where possible.
              </p>
            </div>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4 max-w-4xl">
              <span className="font-semibold text-ink">Note:</span> If tools such as Google Analytics, Microsoft Clarity, Meta Pixel or other tracking tools are added later, this policy must be updated to reflect the tools being used.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Calculator And Enquiry Pathway Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Calculator and enquiry pathway</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                Cookies or similar technologies may support the user experience when visitors use the Compare Investments or submit an enquiry. Calculator results are estimates only and do not represent guaranteed outcomes, financial advice or confirmed product terms.
              </p>
            </div>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4 max-w-4xl">
              <span className="font-semibold text-ink">Note:</span> If calculator inputs or enquiry form details are stored in future, the Privacy Policy, POPIA Policy and Cookie Policy must be updated accordingly.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Third-Party Cookies Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Third-party cookies</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                Some cookies may be set by third-party services used to support website functionality, analytics, hosting, security or embedded content. Tiyani Magomani is not responsible for the cookie practices of third-party websites or services.
              </p>
            </div>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4 max-w-4xl">
              <span className="font-semibold text-ink">Note:</span> Final third-party tools and service providers must be confirmed by the client before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Managing Cookies Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 max-w-4xl">
            <h2 className="text-3xl font-serif text-ink mb-6">Managing cookies</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Visitors can usually manage or block cookies through their browser settings. Blocking certain cookies may affect how parts of the website function.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Browser settings", desc: "Visitors can adjust cookie settings in their browser." },
              { title: "Cookie blocking", desc: "Some browsers allow visitors to block all or selected cookies." },
              { title: "Deleting cookies", desc: "Visitors may delete stored cookies from their browser." },
              { title: "Website functionality", desc: "Some features may not work correctly if certain cookies are disabled." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[200px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Privacy And Personal Information Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Cookies and personal information</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal mb-10">
              Where cookies or similar technologies involve personal information, that information should be handled according to the Privacy Policy and POPIA Policy.
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

      {/* Updates To This Policy Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Updates to this Cookie Policy</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              This Cookie Policy may be updated from time to time to reflect changes in website functionality, analytics tools, legal requirements or business processes. Visitors should review this page periodically for updates.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Important Legal Notice */}
      <section className="py-20 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-white border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important notice</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This Cookie Policy is provided as website content for general information purposes only. It should not be treated as final legal advice. The final policy must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cookie Policy FAQ Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about cookies</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Do cookies track my investments?",
                a: "No. This website provides general investment information and an enquiry pathway only. It does not include a client portal or direct investment account tracking."
              },
              {
                q: "Can I block cookies?",
                a: "Yes. Visitors can usually manage, block or delete cookies through their browser settings."
              },
              {
                q: "Will the website still work if I disable cookies?",
                a: "Some parts of the website may still work, but certain functionality, preferences or performance features may be affected."
              },
              {
                q: "Are calculator and comparison results stored through cookies?",
                a: "Calculator results should not be treated as stored financial information unless storage functionality is specifically added. If calculator inputs are stored in future, the relevant policies must be updated."
              },
              {
                q: "Where can I learn more about personal information?",
                a: "Visitors can review the Privacy Policy and POPIA Policy to understand how personal information may be handled."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Legal Pages Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink">Related policies</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Privacy Policy", desc: "How visitor information may be collected, used and protected.", link: "/privacy" },
              { title: "POPIA Policy", desc: "Information about personal information rights and processing.", link: "/popia" },
              { title: "Terms and Conditions", desc: "The general terms for using this website.", link: "/terms" },
              { title: "Legal Centre", desc: "Find all website legal and policy information.", link: "/legal" }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{card.desc}</p>
                <Link href={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity group">
                  View Page
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Have a question about cookies or privacy?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Contact the team if you have questions about cookies, personal information or the website enquiry pathway.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/privacy" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View Privacy Policy
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
