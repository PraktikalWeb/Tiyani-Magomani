import { ArrowRight, ArrowUpRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <FadeIn>
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">Enquiry Submitted</span>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
                Thank you. Your enquiry has been received.
              </h1>
              <p className="text-lg font-sans text-[#4B5563] leading-relaxed mb-10 max-w-xl font-normal">
                Thank you for contacting Tiyani Magomani. Your enquiry has been submitted, and the team can follow up with relevant information about the investment category you selected.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link to="/investments" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                  View Investment Options
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/calculator" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                  Use Calculator
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-full flex justify-end">
              <div className="w-full lg:w-[90%] aspect-video lg:aspect-[4/3.5] bg-border-grey relative overflow-hidden lg:h-[75%] lg:my-auto">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Professional advisory and planning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/10"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Confirmation Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Received</span>
              <span className="text-sm font-sans text-muted-blue">Your enquiry has been submitted</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Review</span>
              <span className="text-sm font-sans text-muted-blue">The selected interest can be reviewed</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Follow Up</span>
              <span className="text-sm font-sans text-muted-blue">The team can respond with information</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Next Step</span>
              <span className="text-sm font-sans text-muted-blue">Review options while you wait</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              Submitting an enquiry does not represent financial advice, a completed application or an investment commitment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-serif text-ink mb-6">What happens next?</h2>
          </FadeIn>
          
          <div className="space-y-6">
            {[
              { step: "Step 1: Enquiry received", desc: "Your enquiry has been submitted through the website." },
              { step: "Step 2: Interest reviewed", desc: "The investment category or message you selected can be reviewed." },
              { step: "Step 3: Follow-up provided", desc: "The team can follow up with relevant information and next steps." },
              { step: "Step 4: Formal information reviewed", desc: "Product details, risks, terms and eligibility requirements must be reviewed before any decision is made." }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white border border-border-grey p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-serif text-ink mb-2">{item.step}</h4>
                    <p className="text-base font-sans text-muted-blue leading-relaxed m-0">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Next Steps Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <h2 className="text-3xl font-serif text-ink">While you wait, you can continue exploring.</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Investment Options",
                desc: "Compare growth, income, flexible-access, fixed-return and offshore-focused categories.",
                button: "View Options",
                link: "/investments"
              },
              {
                title: "Investment Calculator",
                desc: "Calculate a basic estimate across the available investment categories.",
                button: "Use Calculator",
                link: "/calculator"
              },
              {
                title: "Digital Investing",
                desc: "Understand how the online enquiry pathway works.",
                button: "View Digital Investing",
                link: "/digital-investing"
              },
              {
                title: "FAQs",
                desc: "Read common questions about investment options, calculator results and enquiries.",
                button: "View FAQs",
                link: "/faqs"
              }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[240px]">
                <h3 className="text-lg font-serif text-ink mb-3">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-8 flex-grow">{card.desc}</p>
                <Link to={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity group">
                  {card.button}
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-white border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This confirmation page confirms that an enquiry has been submitted through the website. It does not represent financial advice, a completed investment application, product approval, confirmed product terms or an investment commitment. Investment values may rise or fall. Clients should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Want to review the options again?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              You can return to the investment options page or use the calculator to compare estimated results before the team follows up.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/investments" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                View Investment Options
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/calculator" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                Use Calculator
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
