import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';

export default function Terms() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Terms and Conditions</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Terms for using this website.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                These Terms and Conditions explain the general rules for using the Tiyani Magomani website, including investment information, calculator estimates and enquiry pathways.
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
                  src="/images/about-advisory-team.png" 
                  alt="Professional finance documents and advisory" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Terms Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Website Use</span>
              <span className="text-sm font-sans text-muted-blue">General public information</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Calculator</span>
              <span className="text-sm font-sans text-muted-blue">Estimates only</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Enquiries</span>
              <span className="text-sm font-sans text-muted-blue">No investment commitment</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Legal Review</span>
              <span className="text-sm font-sans text-muted-blue">Final wording requires approval</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              These Terms and Conditions are provided for website content purposes and must be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Introduction</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none">
              <p>
                These Terms and Conditions apply to the use of the Tiyani Magomani website. By using this website, visitors agree to use the information, calculator and enquiry pathways responsibly and in line with these terms.
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

      {/* Website Information Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">Website information</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              The information on this website is provided for general guidance and enquiry purposes only. It should not be treated as financial advice, investment advice, a product recommendation or a confirmed offer to invest.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "General guidance", desc: "Website content is intended to help visitors understand broad investment categories." },
              { title: "No financial advice", desc: "The website does not replace professional financial advice or formal product documentation." },
              { title: "No guaranteed outcomes", desc: "Website content and calculator results do not represent guaranteed outcomes." },
              { title: "Formal documents required", desc: "Final product terms, risks, fees and eligibility requirements are subject to formal documentation." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[220px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Sections 5 to 14 */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Use Of The Website */}
          <FadeIn>
            <h2 className="text-3xl font-serif text-ink mb-6">Use of the website</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
              Visitors agree to use this website for lawful and appropriate purposes only. Visitors should not misuse the website, attempt to interfere with its functionality or submit false, misleading or harmful information through any form.
            </p>
            
            <ul className="space-y-3">
              {[
                "Use the website only for lawful purposes",
                "Do not submit false or misleading information",
                "Do not attempt to access restricted systems",
                "Do not interfere with website performance or security",
                "Do not submit sensitive documents through public enquiry forms"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-muted-blue font-sans text-base">
                  <span className="text-navy mr-3 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Investment Information */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Investment information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Investment categories shown on this website are provided for general information and enquiry purposes only. Product details, risks, terms, fees, timelines, income assumptions and eligibility requirements must be confirmed in formal product documentation.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Investment values may rise or fall. Past performance, where mentioned, should not be treated as a guarantee of future performance.
            </p>
          </FadeIn>

          {/* Calculator Terms */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Investment Calculator</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
              The Investment Calculator is provided as a general estimate tool only. Calculator results are based on placeholder or supplied assumptions and do not represent guaranteed outcomes, financial advice or confirmed product figures.
            </p>
            
            <ul className="space-y-3">
              {[
                "Calculator results are estimates only",
                "Results may differ from final product figures",
                "No result should be treated as a guarantee",
                "Final figures are subject to formal product documentation",
                "Visitors should seek appropriate financial guidance before making decisions"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-muted-blue font-sans text-base">
                  <span className="text-navy mr-3 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Enquiry Form Terms */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Enquiry form</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Submitting an enquiry through the website does not represent a completed application, financial advice, product approval or investment commitment. The enquiry form is used only to request follow-up information.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Visitors should not submit identity documents, bank statements or other sensitive personal documents through the public enquiry form.
            </p>
          </FadeIn>

          {/* Accuracy Of Information */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Accuracy of information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Reasonable efforts should be made to keep website information accurate and up to date. However, Tiyani Magomani does not guarantee that all website content will always be complete, current or error-free.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Final product details must always be confirmed through formal documentation.
            </p>
          </FadeIn>

          {/* Third-Party Links */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Third-party links</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              This website may contain links to third-party websites or services. Tiyani Magomani is not responsible for the content, security, privacy practices or availability of third-party websites.
            </p>
          </FadeIn>

          {/* Privacy And Personal Information */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Privacy and personal information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-8">
              Personal information submitted through the website may be handled according to the Privacy Policy and POPIA Policy. Visitors should review those pages to understand how information may be collected, used and protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/privacy" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
                View Privacy Policy <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/popia" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
                View POPIA Policy <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </FadeIn>

          {/* Limitation Of Liability */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Limitation of liability</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              To the extent permitted by applicable law, Tiyani Magomani should not be held liable for losses arising from the use of website information, calculator results, third-party links or decisions made without reviewing formal documentation and seeking appropriate guidance.
            </p>
          </FadeIn>

          {/* Changes To These Terms */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Changes to these terms</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              These Terms and Conditions may be updated from time to time. Visitors should review this page periodically for any changes.
            </p>
          </FadeIn>

          {/* Contact Section */}
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Questions about these terms?</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Visitors who have questions about these Terms and Conditions can contact the team through the contact page.
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
              These Terms and Conditions are provided as website content for general information purposes. They should not be treated as final legal advice. The final terms must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
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
              { title: "POPIA Policy", desc: "Information about personal information rights and processing.", link: "/popia" },
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need help understanding these terms?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Contact the team if you have questions about the website, enquiry process or information shown on this site.
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
