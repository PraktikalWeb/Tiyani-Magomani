import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';

export default function Popia() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">POPIA Policy</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Responsible handling of personal information.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                This POPIA Policy explains how personal information submitted through the Tiyani Magomani website may be collected, processed, protected and managed when visitors explore investment options, Compare Investments or submit an enquiry.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/privacy" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  View Privacy Policy
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="/images/digital-investing-planning.png" 
                  alt="Professional finance and privacy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* POPIA Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Collection</span>
              <span className="text-sm font-sans text-muted-blue">Information submitted by visitors</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Processing</span>
              <span className="text-sm font-sans text-muted-blue">Used for enquiry follow-up</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Protection</span>
              <span className="text-sm font-sans text-muted-blue">Handled responsibly</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Rights</span>
              <span className="text-sm font-sans text-muted-blue">Access, correction and deletion requests</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This POPIA Policy is provided for website content purposes and must be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Introduction */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Introduction</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none">
              <p>
                Tiyani Magomani respects the privacy of visitors and aims to handle personal information responsibly. This POPIA Policy explains how personal information may be processed when visitors use the website, submit an enquiry, use the Compare Investments or request follow-up information.
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

      {/* Purpose Of This Policy */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">Purpose of this policy</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The purpose of this policy is to explain how personal information may be collected, used, stored, protected and managed when visitors interact with the public website.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Transparency", desc: "To explain what information may be collected and why." },
              { title: "Responsible processing", desc: "To support responsible handling of personal information." },
              { title: "Visitor rights", desc: "To explain that visitors may request access, correction or deletion where applicable." },
              { title: "Clear contact pathway", desc: "To direct privacy or POPIA-related questions to the contact page." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Personal Information We May Process */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Personal information we may process</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                When visitors use the website or submit an enquiry, the following types of personal information may be processed:
              </p>
            </div>
            
            <div className="bg-white border border-border-grey p-8 mb-8">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 m-0 p-0 list-none">
                {[
                  "Full name",
                  "Email address",
                  "Phone number",
                  "Investment interest",
                  "Estimated investment amount range",
                  "Preferred contact method",
                  "Message or enquiry details",
                  "Calculator inputs entered by the visitor",
                  "Website usage information",
                  "Communication records related to the enquiry"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-muted-blue font-sans text-base">
                    <span className="text-navy mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-sm font-sans text-muted-blue">
              <span className="font-semibold text-ink">Note:</span> Visitors should not submit sensitive personal documents through the enquiry form.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Information May Be Processed */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">Why information may be processed</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Personal information submitted through the website may be processed for the following purposes:
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Responding to enquiries", desc: "To respond to visitors who submit an investment enquiry." },
              { title: "Providing relevant information", desc: "To share information related to the investment category selected by the visitor." },
              { title: "Managing communication", desc: "To contact visitors using their preferred contact method." },
              { title: "Calculator support", desc: "To help visitors view basic estimates before submitting an enquiry." },
              { title: "Website improvement", desc: "To improve the website experience and understand general visitor behaviour." },
              { title: "Legal or administrative requirements", desc: "To meet applicable legal, regulatory, administrative or record-keeping requirements where relevant." }
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
          
          {/* Lawful Processing Principles */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Lawful processing principles</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-10">
              Personal information should be processed in a responsible, lawful and reasonable manner. Processing should be limited to information that is relevant to the purpose for which it is collected.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Accountability", desc: "Personal information should be handled responsibly by the relevant party." },
                { title: "Processing limitation", desc: "Only information that is necessary for the intended purpose should be requested." },
                { title: "Purpose specification", desc: "Information should be collected for a clear and specific purpose." },
                { title: "Further processing limitation", desc: "Information should not be used for unrelated purposes without a valid reason." },
                { title: "Information quality", desc: "Reasonable steps should be taken to keep information accurate and up to date." },
                { title: "Openness", desc: "Visitors should be informed about how their information may be used." },
                { title: "Security safeguards", desc: "Reasonable measures should be used to protect personal information." },
                { title: "Data subject participation", desc: "Visitors may request access to, correction of or deletion of their personal information where applicable." }
              ].map((principle, index) => (
                <div key={index} className="pb-8 border-b border-border-grey/50 last:border-0 last:pb-0">
                  <h4 className="text-lg font-serif text-ink mb-2">{principle.title}</h4>
                  <p className="text-base font-sans text-muted-blue leading-relaxed m-0">{principle.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Visitor Rights */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Visitor rights</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
              Visitors may have the right to request access to their personal information, request correction of inaccurate information, request deletion where applicable, or object to certain processing where permitted by law.
            </p>
            
            <ul className="mb-8 space-y-3">
              {[
                "Request access to personal information",
                "Request correction of inaccurate information",
                "Request deletion of information where applicable",
                "Object to certain processing where permitted",
                "Ask questions about how information is handled"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-muted-blue font-sans text-base">
                  <span className="text-navy mr-3 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <Link href="/contact" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
              Submit a Privacy Request <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </FadeIn>

          {/* Sections 9 to 15 */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Enquiry form processing</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              When visitors submit the enquiry form, the information provided may be used to respond to the enquiry and provide relevant follow-up information. Submitting an enquiry does not represent financial advice, a completed application or an investment commitment.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> The enquiry form should not be used to submit identity documents, bank statements or other sensitive personal documents.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Calculator information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              The Compare Investments is provided for general information only. Any information entered into the calculator is used to generate a basic estimate on the website. Calculator results are estimates only and do not represent guaranteed outcomes, financial advice or confirmed product terms.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> If calculator inputs are not stored, make this clear. If the website later stores calculator inputs, this policy must be updated accordingly.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Sharing of personal information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Personal information should not be sold. Personal information may only be shared where necessary to respond to enquiries, operate the website, meet legal requirements or support legitimate administrative processes.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Final third-party sharing arrangements must be confirmed by the client before publication.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Security safeguards</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              Reasonable technical and organisational measures should be used to protect personal information submitted through the website. However, no website, form or electronic communication method can be guaranteed to be completely secure.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Retention of information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              Personal information should only be kept for as long as reasonably necessary for the purpose for which it was collected, unless a longer retention period is required for legal, regulatory, administrative or record-keeping purposes.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Direct marketing</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              If Tiyani Magomani sends marketing communication in future, it should be done in line with applicable consent and opt-out requirements. Visitors should be able to unsubscribe or request that marketing communication stops.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Do not activate direct marketing language unless the client confirms how marketing communication will be handled.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Cross-border processing</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              If personal information is transferred, stored or processed outside South Africa through website tools, hosting providers or service providers, this should be handled in line with applicable data protection requirements.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Final hosting, analytics and third-party service arrangements must be confirmed before publication.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Questions or complaints</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Visitors who have questions about this POPIA Policy or how their personal information is handled can contact the team through the contact page.
            </p>
            <Link href="/contact" className="bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors inline-flex items-center uppercase tracking-wider">
              Contact Us
            </Link>
          </FadeIn>

        </div>
      </section>

      {/* Important Legal Notice Section */}
      <section className="py-20 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important notice</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This POPIA Policy is provided as website content for general information purposes. It should not be treated as final legal advice. The final policy must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Related Legal Pages Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-serif text-ink">Related policies</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Privacy Policy", desc: "How visitor information may be collected, used and protected.", link: "/privacy" },
              { title: "Terms and Conditions", desc: "The general terms for using this website.", link: "/terms" },
              { title: "Complaints Policy", desc: "How website visitors can raise a concern.", link: "/complaints" }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{card.desc}</p>
                <Link href={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity group">
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Have a POPIA or privacy question?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Contact the team if you have questions about personal information submitted through the website, enquiry form or calculator.
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
