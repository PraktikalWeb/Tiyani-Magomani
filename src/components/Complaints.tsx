import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Link } from 'react-router-dom';
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

export default function Complaints() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Complaints Policy</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                How to raise a concern or complaint.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                This Complaints Policy explains how visitors can raise concerns about the Tiyani Magomani website, enquiry pathway, investment information or communication received through the website.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/terms" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  View Terms
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional advisory and client support" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Complaints Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Raise</span>
              <span className="text-sm font-sans text-muted-blue">Submit your concern</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Review</span>
              <span className="text-sm font-sans text-muted-blue">The concern is assessed</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Respond</span>
              <span className="text-sm font-sans text-muted-blue">Follow-up is provided</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Resolve</span>
              <span className="text-sm font-sans text-muted-blue">Next steps are communicated</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This Complaints Policy is provided for website content purposes and must be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction Section */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Introduction</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none">
              <p>
                Tiyani Magomani aims to handle website-related concerns and complaints in a clear, respectful and responsible manner. This policy explains how visitors can raise a concern about the website, enquiry process, investment information, calculator estimates or communication received after submitting an enquiry.
              </p>
              <div className="bg-white border border-border-grey p-6 mt-8">
                <p className="text-sm font-sans text-muted-blue m-0">
                  <span className="font-semibold text-ink">Note:</span> This website provides general investment information and an enquiry pathway only. It does not include a client portal, account login, direct investment onboarding or document upload process.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* What Can Be Raised */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">What concerns can be raised?</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Visitors may raise a concern or complaint about their experience with the website or enquiry process.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Website information", desc: "Concerns about unclear, outdated or confusing website information." },
              { title: "Calculator results", desc: "Concerns about how calculator estimates are presented or understood." },
              { title: "Enquiry process", desc: "Concerns about submitting an enquiry or receiving follow-up." },
              { title: "Communication", desc: "Concerns about communication received after submitting an enquiry." },
              { title: "Privacy concerns", desc: "Concerns about personal information submitted through the website." },
              { title: "General website experience", desc: "Concerns about usability, accessibility or website functionality." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[200px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* How To Submit A Complaint */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">How to submit a complaint</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
              Visitors can submit a concern through the contact page. The complaint should include enough information for the team to understand and review the matter.
            </p>
            
            <div className="bg-white border border-border-grey p-8 mb-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-0 p-0 list-none">
                {[
                  "Full name",
                  "Contact details",
                  "Description of the concern",
                  "Page or service the concern relates to",
                  "Date of the issue, where relevant",
                  "Any relevant reference or communication details",
                  "Preferred contact method"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-muted-blue font-sans text-base">
                    <span className="text-navy mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <Link to="/contact" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
                Submit Through Contact Page <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Visitors should not submit sensitive personal documents through the public contact form.
            </p>
          </FadeIn>

          {/* Complaints Process */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-8">How complaints may be handled</h2>
            <div className="space-y-6">
              {[
                { step: "Step 1: Complaint received", desc: "The concern is received through the contact page or another approved communication channel." },
                { step: "Step 2: Initial review", desc: "The concern is reviewed to understand what happened and what information may be needed." },
                { step: "Step 3: Follow-up", desc: "The team may contact the visitor for more information or clarification." },
                { step: "Step 4: Response and next steps", desc: "A response or next step may be provided based on the nature of the complaint." }
              ].map((item, index) => (
                <div key={index} className="bg-white border border-border-grey p-6">
                  <h4 className="text-lg font-serif text-ink mb-2">{item.step}</h4>
                  <p className="text-base font-sans text-muted-blue leading-relaxed m-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Response Times */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Response times</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              The team should aim to respond to complaints within a reasonable period. Final response timelines must be confirmed by the client before publication.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Do not state a fixed response timeline unless the client confirms it.
            </p>
          </FadeIn>

          {/* Privacy And Complaint Information */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Privacy and complaint information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
              Information submitted as part of a complaint may be used to review and respond to the concern. Personal information should be handled according to the Privacy Policy and POPIA Policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/privacy" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
                View Privacy Policy <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/popia" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
                View POPIA Policy <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </FadeIn>

          {/* Escalation */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Escalation</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              If a complaint cannot be resolved through the initial process, the visitor may request further review. Any formal escalation route, regulator details or ombud process must be confirmed by the client before being published on the website.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Important:</span> Do not add regulator names, ombud details, FSP details or licence numbers unless supplied by the client.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This Complaints Policy is provided for general website information purposes only. It does not replace formal legal, regulatory or contractual complaint procedures. Final complaint handling procedures, escalation routes and response timelines must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Complaints FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions about complaints</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "How do I submit a complaint?",
                a: "You can raise a concern through the contact page. Include your contact details and a clear description of the issue so the matter can be reviewed."
              },
              {
                q: "Can I complain about calculator results?",
                a: "Yes. You can raise a concern if calculator results were unclear or confusing. Calculator results are estimates only and do not represent guaranteed returns."
              },
              {
                q: "Should I upload documents with my complaint?",
                a: "No. Do not upload or submit sensitive personal documents through the public contact form."
              },
              {
                q: "Will submitting a complaint affect an enquiry?",
                a: "Submitting a complaint should not prevent you from asking for information. The concern can be reviewed separately from the general enquiry pathway."
              },
              {
                q: "Can a complaint be escalated?",
                a: "Where applicable, a complaint may be reviewed further. Any formal escalation route must be confirmed by the client before publication."
              }
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Legal Pages Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-serif text-ink">Related policies</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Terms and Conditions", desc: "The general terms for using this website.", link: "/terms" },
              { title: "Privacy Policy", desc: "How visitor information may be collected, used and protected.", link: "/privacy" },
              { title: "POPIA Policy", desc: "Information about personal information rights and processing.", link: "/popia" }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{card.desc}</p>
                <Link to={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity group">
                  View Policy
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need to raise a concern?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Use the contact page to submit your concern and the team can review the matter and follow up where appropriate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/terms" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View Terms
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
