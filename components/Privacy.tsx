import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import LegalHero from './LegalHero';

export default function Privacy() {
  return (
    <div className="pt-20 tm-legal-page tm-site-page">
      <LegalHero
        eyebrow="Privacy Policy"
        title="How we handle your information."
        description="See how information shared through this website is collected, used and protected."
        imageSrc="/images/digital-investing-planning.png"
        imageAlt="Two people reviewing information together"
        primaryLink={{ href: '/contact', label: 'Contact Us' }}
        secondaryLink={{ href: '/popia', label: 'View POPIA Policy' }}
      />

      {/* Policy Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Information</span>
              <span className="text-sm font-sans text-muted-blue">Details submitted through forms</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Purpose</span>
              <span className="text-sm font-sans text-muted-blue">Responding to enquiries</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Protection</span>
              <span className="text-sm font-sans text-muted-blue">Responsible handling of information</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Rights</span>
              <span className="text-sm font-sans text-muted-blue">Visitors may request information updates</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              This policy is provided for website content purposes and should be reviewed by the client or a qualified legal/compliance professional before publication.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <FadeIn className="mb-16">
            <h2 className="text-3xl font-serif text-ink mb-6">Introduction</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none">
              <p>
                Tiyani Magomani respects the privacy of visitors who use this website. This Privacy Policy explains how personal information may be collected, used and handled when visitors browse the website, use the Compare Investments, submit an enquiry or contact the team.
              </p>
              <div className="bg-white border border-border-grey p-6 mt-8">
                <p className="text-sm font-sans text-muted-blue m-0">
                  <span className="font-semibold text-ink">Note:</span> This website provides general investment information and an enquiry pathway only. It does not include a client portal, account login or direct investment application process.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Information We May Collect */}
          <FadeIn className="mb-16">
            <h2 className="text-3xl font-serif text-ink mb-6">Information we may collect</h2>
            <div className="prose prose-lg prose-p:text-muted-blue prose-p:font-sans prose-p:leading-relaxed max-w-none mb-8">
              <p>
                When visitors use the website or submit an enquiry, the following information may be collected:
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
                  "Basic website usage information",
                  "Calculator inputs entered by the visitor"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-muted-blue font-sans text-base">
                    <span className="text-navy mr-3 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <p className="text-sm font-sans text-muted-blue">
              <span className="font-semibold text-ink">Note:</span> The website should not request sensitive personal documents through the enquiry form.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How Information May Be Used */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">How information may be used</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal">
              Information submitted through the website may be used for the following purposes:
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Responding to enquiries", desc: "To contact visitors who submit an enquiry through the website." },
              { title: "Providing relevant information", desc: "To share information related to the investment category selected by the visitor." },
              { title: "Improving the website", desc: "To understand how visitors use the website and improve the user experience." },
              { title: "Calculator support", desc: "To help visitors compare estimated results before submitting an enquiry." },
              { title: "Administrative purposes", desc: "To manage website communication and enquiry records." },
              { title: "Legal and compliance purposes", desc: "To meet applicable legal, regulatory or administrative requirements where relevant." }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[200px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Sections 6 to 14 */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Calculator information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              The Compare Investments is provided for general information only. Any information entered into the calculator is used to generate a basic estimate on the website. Calculator results are estimates only and do not represent guaranteed outcomes, financial advice or confirmed product terms.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> If calculator information is not stored, make this clear. If the website later stores calculator inputs, the policy must be updated accordingly.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Enquiry form information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              When a visitor submits the enquiry form, the information provided may be used so that the team can follow up with relevant information and next steps. Submitting an enquiry does not represent a completed application, financial advice or an investment commitment.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Sharing of information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Personal information should not be sold. Information may only be shared where necessary to respond to enquiries, operate the website, meet legal requirements or support legitimate administrative processes.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> Final sharing arrangements must be confirmed by the client before publication.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Data protection and security</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              Reasonable measures should be used to protect personal information submitted through the website. However, no website or electronic communication method can be guaranteed to be completely secure.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Retention of information</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              Personal information should only be kept for as long as reasonably necessary for the purpose for which it was collected, unless a longer period is required for legal, regulatory or administrative reasons.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Visitor rights</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              Visitors may request access to, correction of or deletion of their personal information where applicable. Requests can be submitted through the contact page.
            </p>
            <Link href="/contact" className="inline-flex items-center text-[13px] font-bold text-navy uppercase tracking-widest hover:opacity-70 transition-opacity">
              Contact Us <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Cookies and website analytics</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              This website may use cookies or analytics tools to understand website traffic, improve performance and enhance the visitor experience. Visitors can manage cookie settings through their browser.
            </p>
            <p className="text-sm font-sans text-muted-blue border-l-2 border-border-grey pl-4">
              <span className="font-semibold text-ink">Note:</span> If analytics tools such as Google Analytics or Microsoft Clarity are used later, the client must confirm this and the policy should be updated.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Links to other websites</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              This website may contain links to third-party websites. Tiyani Magomani is not responsible for the privacy practices or content of external websites.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Updates to this policy</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed">
              This Privacy Policy may be updated from time to time. Visitors should review this page periodically for any changes.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="text-2xl font-serif text-ink mb-4">Privacy questions</h2>
            <p className="text-base font-sans text-muted-blue leading-relaxed mb-6">
              For questions about this Privacy Policy or how personal information is handled, visitors can contact the team through the contact page.
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
              This Privacy Policy is provided as website content for general information purposes. It should not be treated as final legal advice. The final policy must be reviewed and approved by the client or a qualified legal/compliance professional before publication.
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
              { title: "POPIA Policy", desc: "Information about personal information rights and processing.", link: "/popia" },
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need help or have a privacy question?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Contact the team if you have questions about the website, enquiry process or information submitted through the contact form.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/popia" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View POPIA Policy
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
