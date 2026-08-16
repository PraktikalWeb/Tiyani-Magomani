import { 
  ArrowRight, 
  BarChart3, 
  ChevronRight, 
  FileText, 
  Globe, 
  HelpCircle, 
  Lock, 
  Mail, 
  MessageSquare, 
  Phone, 
  PieChart, 
  ShieldCheck, 
  MonitorSmartphone,
  TrendingUp,
  Wallet,
  SlidersHorizontal
} from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="pt-20">
      
      {/* 2. Hero Section */}
      <section className="relative bg-navy text-white min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/investment-hero.png" 
            alt="Two financial professionals discussing investment planning" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-navy/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <FadeIn delay={0.2} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Investment solutions for growth, income and long-term clarity.
            </h1>
            <p className="text-lg md:text-xl font-sans text-soft-grey/90 leading-relaxed mb-12 max-w-2xl">
              Tiyani Magomani helps clients explore structured investment options across growth, income, flexible-access, fixed-return and offshore-focused categories through a clear public enquiry process.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link href="/contact" className="bg-white text-navy px-8 py-4 font-medium hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto">
                Start Investing
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/investments" className="text-white px-8 py-4 font-medium border border-white/30 hover:bg-white/10 transition-colors justify-center w-full sm:w-auto text-center flex items-center">
                View Investment Options
              </Link>
            </div>
            <div className="mt-8 text-center sm:text-left">
              <Link href="/investments" className="text-sm font-sans text-soft-grey/80 hover:text-white underline underline-offset-4 transition-colors">
                Compare Investment Solutions
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Quick Action Tiles */}
      <section className="py-24 bg-soft-grey" id="options">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">What would you like to explore?</h2>
          </div>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <MonitorSmartphone className="w-8 h-8 text-navy" />,
                title: "Digital Investing",
                desc: "Begin with a simple online enquiry process designed to help you explore available investment options before speaking to the team.",
                linkText: "Start an Enquiry"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-navy" />,
                title: "Growth Investments",
                desc: "Explore growth-focused investment options designed for clients considering long-term value creation.",
                linkText: "View Growth Options"
              },
              {
                icon: <Wallet className="w-8 h-8 text-navy" />,
                title: "Income Investments",
                desc: "Review income-focused investment options for clients interested in regular income potential.",
                linkText: "View Income Options"
              },
              {
                icon: <SlidersHorizontal className="w-8 h-8 text-navy" />,
                title: "Flexible Access",
                desc: "Consider flexible-access investment options for clients who may need a more adaptable investment route.",
                linkText: "View Flexible Options"
              },
              {
                icon: <Lock className="w-8 h-8 text-navy" />,
                title: "Fixed Return Options",
                desc: "Explore structured investment options built around defined terms and fixed-return style positioning, subject to formal product documentation.",
                linkText: "View Fixed Options"
              },
              {
                icon: <Globe className="w-8 h-8 text-navy" />,
                title: "Offshore Opportunities",
                desc: "Learn more about offshore-focused investment options and international exposure opportunities.",
                linkText: "Explore Offshore Options"
              }
            ].map((tile, i) => (
              <FadeInStaggerItem key={i} className="bg-white p-10 border border-border-grey hover:border-navy/30 transition-colors group">
                <div className="mb-6">{tile.icon}</div>
                <h3 className="text-sm font-sans uppercase tracking-widest text-ink mb-4">{tile.title}</h3>
                <p className="text-muted-blue font-sans mb-8 leading-relaxed text-sm">
                  {tile.desc}
                </p>
                <Link href={tile.linkText.includes('Enquiry') ? '/contact' : '/investments'} className="inline-flex items-center text-sm font-medium text-navy border-b border-navy pb-1 group-hover:opacity-70 transition-opacity">
                  {tile.linkText}
                  <ChevronRight className="ml-1 w-4 h-4" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </FadeIn>
      </section>

      {/* 4. Dark Navy CTA Band */}
      <section className="relative bg-navy py-24 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/investment-enquiry-banner.png" 
            alt="Client and adviser reviewing investment information" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-navy/60"></div>
        </div>
        <FadeIn className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-sans uppercase tracking-widest text-soft-grey mb-6 block">Digital access. Clear guidance.</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6">Explore investment options before taking the next step.</h2>
          <p className="text-soft-grey/90 font-sans leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
            The website introduces key investment categories, estimates and enquiry pathways so visitors can make informed enquiries before continuing with a formal process.
          </p>
          <a href="#enquire" className="inline-block bg-transparent border border-white text-white px-8 py-4 font-medium hover:bg-white hover:text-navy transition-colors">
            Start an Investment Enquiry
          </a>
        </FadeIn>
      </section>

      {/* 5. Investment Solutions Editorial Section */}
      <section className="py-24 bg-white" id="solutions">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Investment Solutions</span>
              <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6 leading-tight">A structured range of investment pathways.</h2>
              <p className="text-muted-blue font-sans leading-relaxed mb-10 text-lg">
                Tiyani Magomani presents investment pathways across private-equity-style growth, income-focused structures, flexible-access options, fixed-return style products and offshore opportunities. Each category should help visitors understand the purpose of the option before submitting an enquiry.
              </p>
              <Link href="/investments" className="inline-block bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors">
                View Investment Options
              </Link>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="aspect-[4/3] bg-soft-grey w-full relative overflow-hidden">
                <img 
                  src="/images/investment-solutions-advisory.png" 
                  alt="Client meeting with a financial adviser" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. Product Preview Section */}
      <section className="py-24 bg-off-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink text-center">Investment options at a glance.</h2>
          </div>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Private Equity Growth Option",
                desc: "For clients considering long-term growth-focused investment exposure.",
                focus: "Capital growth"
              },
              {
                title: "Private Equity Income Option",
                desc: "For clients interested in income-focused investment structures and regular income potential.",
                focus: "Income potential"
              },
              {
                title: "Private Equity Flexible Access Option",
                desc: "For clients who want a more adaptable investment route with flexible-access positioning.",
                focus: "Flexibility"
              },
              {
                title: "Fixed Return Growth Option",
                desc: "For clients interested in structured growth with defined investment terms and fixed-return style positioning.",
                focus: "Structured growth"
              },
              {
                title: "Fixed Return Income Option",
                desc: "For clients looking at fixed-income style positioning and regular income potential.",
                focus: "Income structure"
              },
              {
                title: "Offshore Global Option",
                desc: "For clients exploring offshore investment opportunities and international market exposure.",
                focus: "Global exposure"
              }
            ].map((product, i) => (
              <FadeInStaggerItem key={i} className="bg-white border border-border-grey p-8 hover:border-navy/30 transition-colors flex flex-col h-full">
                <div className="mb-auto">
                  <span className="inline-block bg-soft-grey text-navy px-3 py-1 text-xs font-sans uppercase tracking-wider mb-6">
                    {product.focus}
                  </span>
                  <h3 className="text-xl font-serif text-ink mb-4">{product.title}</h3>
                  <p className="text-muted-blue font-sans text-sm leading-relaxed">
                    {product.desc}
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-border-grey">
                  <Link href="/investments" className="inline-flex items-center text-sm font-medium text-navy hover:opacity-70 transition-opacity group">
                    View Details
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </FadeIn>
      </section>

      {/* 7. Calculator / Comparison Section */}
      <section className="py-24 bg-white" id="calculator">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Investments</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Compare Investment Options</h2>
            <p className="text-muted-blue font-sans text-lg leading-relaxed">
              Use the Compare Investments page to enter your initial investment and compare estimated growth or income across available options.
            </p>
          </div>

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                title: "Compare by Term",
                desc: "Short-term and long-term investment options."
              },
              {
                title: "Compare by Goal",
                desc: "Growth-focused and income-focused options."
              },
              {
                title: "View Estimated Results",
                desc: "See estimated values, monthly income and scenario outputs."
              },
              {
                title: "Make an Enquiry",
                desc: "Submit your details for follow-up after comparing options."
              }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center text-center h-full">
                <h3 className="text-lg font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">{card.desc}</p>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <Link href="/compare" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors text-center uppercase tracking-wider text-[13px]">
              Compare Investments
            </Link>
            <Link href="/contact" className="border border-border-grey text-navy px-8 py-4 font-medium hover:bg-soft-grey transition-colors text-center uppercase tracking-wider text-[13px]">
              Start an Enquiry
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center border-t border-border-grey pt-8">
            <p className="text-xs font-sans text-muted-blue leading-relaxed">
              Comparison results are estimates based on displayed product assumptions and are shown for general information only. Final figures are subject to formal product documentation.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 8. Trust and Compliance Section */}
      <section className="py-24 bg-off-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Trust and Transparency</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Clear information for considered investment decisions.</h2>
            <p className="text-muted-blue font-sans text-lg">
              The website supports a trust-first investment journey by presenting investment categories, enquiry routes, important notices and policy links in a clear public-facing format.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileText className="w-6 h-6 text-navy" />,
                title: "Clear Product Information",
                desc: "Investment categories are presented in a structured way so visitors can understand the purpose of each option."
              },
              {
                icon: <MessageSquare className="w-6 h-6 text-navy" />,
                title: "Guided Enquiry Process",
                desc: "Visitors can move from interest to enquiry without being pushed into a rushed decision."
              },
              {
                icon: <Lock className="w-6 h-6 text-navy" />,
                title: "Policy and Legal Centre",
                desc: "Policy pages and important notices help support transparency and responsible communication."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-navy" />,
                title: "Estimate Before Enquiry",
                desc: "Calculator estimates help visitors understand possible scenarios before speaking to the team."
              }
            ].map((card, i) => (
              <div key={i} className="bg-white p-8 border border-border-grey text-center">
                <div className="mx-auto w-12 h-12 bg-soft-grey flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-base font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 9. Online Investing Process */}
      <section className="py-24 bg-white border-t border-border-grey">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-ink text-center">A simple digital-first enquiry journey.</h2>
          </div>
          
          <div className="max-w-3xl lg:max-w-none mx-auto relative mt-12">
            {/* Vertical line for mobile/tablet */}
            <div className="absolute top-6 bottom-6 left-6 w-px bg-border-grey z-0 lg:hidden"></div>
            
            {/* Horizontal line for desktop */}
            <div className="hidden lg:block absolute top-6 left-12 right-12 h-px bg-border-grey z-0"></div>
            
            <FadeInStagger className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
              {[
                {
                  step: "1",
                  title: "Explore the options",
                  desc: "Review available investment categories and key information."
                },
                {
                  step: "2",
                  title: "Use the calculator",
                  desc: "Generate a basic estimate using your selected inputs."
                },
                {
                  step: "3",
                  title: "Submit an enquiry",
                  desc: "Send your details and selected area of interest."
                },
                {
                  step: "4",
                  title: "Speak to the team",
                  desc: "Receive guidance and the relevant formal product information."
                },
                {
                  step: "5",
                  title: "Continue through the approved process",
                  desc: "Proceed only once the correct information, terms and requirements have been reviewed."
                }
              ].map((step, i) => (
                <FadeInStaggerItem key={i} className="relative z-10 flex flex-row lg:flex-col gap-6 lg:gap-0">
                  <div className="w-12 h-12 bg-navy text-white font-serif flex items-center justify-center text-xl flex-shrink-0 shadow-[0_0_0_12px_#ffffff] lg:mb-6 lg:mx-auto">
                    {step.step}
                  </div>
                  <div className="text-left lg:text-center pt-1 lg:pt-0">
                    <h3 className="text-lg font-serif text-ink mb-3">{step.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed">{step.desc}</p>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </FadeIn>
      </section>

      {/* 10. Optional Insurance/Protection Preview */}
      <section className="py-20 bg-soft-grey border-y border-border-grey">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Additional Services</span>
          <h2 className="text-3xl font-serif text-ink mb-6">Protection and insurance-related support.</h2>
          <p className="text-muted-blue font-sans text-lg mb-8 leading-relaxed">
            Where applicable, Tiyani Magomani can also introduce protection, insurance-related or broader financial support services as part of the public website offering.
          </p>
          <Link href="/contact" className="inline-block bg-white border border-border-grey text-navy px-8 py-3 font-medium hover:border-navy transition-colors">
            Enquire About Services
          </Link>
        </FadeIn>
      </section>

      {/* 11. Stay in Touch Strip */}
      <section className="bg-white border-b border-border-grey">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-serif text-ink">Stay connected with Tiyani Magomani</h3>
            </div>
            <div className="w-full md:w-1/3 text-center md:text-left">
              <p className="text-sm font-sans text-muted-blue">Leave your details and the team will follow up with the next step.</p>
            </div>
            <div className="w-full md:w-1/3 flex justify-start md:justify-end">
              <Link href="/contact" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors w-full md:w-auto text-center">
                Submit Enquiry
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 12. Lower Utility Cards */}
      <section className="py-16 bg-off-white" id="contact">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 border border-border-grey flex flex-col h-full">
              <Mail className="w-6 h-6 text-navy mb-4" />
              <h3 className="text-lg font-serif text-ink mb-2">Investment Enquiries</h3>
              <p className="text-sm font-sans text-muted-blue mb-6 flex-grow">Submit your interest and receive follow-up from the team.</p>
              <Link href="/contact" className="text-sm font-medium text-navy underline underline-offset-4 hover:opacity-70 transition-opacity">Contact us</Link>
            </div>
            <div className="bg-white p-8 border border-border-grey flex flex-col h-full">
              <PieChart className="w-6 h-6 text-navy mb-4" />
              <h3 className="text-lg font-serif text-ink mb-2">Product Information</h3>
              <p className="text-sm font-sans text-muted-blue mb-6 flex-grow">Review available investment categories and important notes.</p>
              <Link href="/investments" className="text-sm font-medium text-navy underline underline-offset-4 hover:opacity-70 transition-opacity">View categories</Link>
            </div>
            <div className="bg-white p-8 border border-border-grey flex flex-col h-full">
              <ShieldCheck className="w-6 h-6 text-navy mb-4" />
              <h3 className="text-lg font-serif text-ink mb-2">Legal and Policies</h3>
              <p className="text-sm font-sans text-muted-blue mb-6 flex-grow">Access policy pages and important public information.</p>
              <Link href="/policies" className="text-sm font-medium text-navy underline underline-offset-4 hover:opacity-70 transition-opacity">View Policies</Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 13. FAQ Preview */}
      <section className="py-24 bg-white" id="faq">
        <FadeIn className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-ink text-center mb-16">Questions before you invest?</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Are investment returns guaranteed?",
                a: "No. Any figures shown on the website are illustrative only unless confirmed in formal product documentation. Investments may carry risk."
              },
              {
                q: "Can I invest fully online?",
                a: "The website supports public information, calculator estimates and enquiries. Formal onboarding or investment completion happens through the appropriate approved process."
              },
              {
                q: "What investment options are available?",
                a: "The website introduces growth, income, flexible-access, fixed-return and offshore-focused investment categories."
              },
              {
                q: "How do I take the next step?",
                a: "Start by reviewing the investment options, using the calculator and submitting an enquiry so the team can follow up."
              }
            ].map((faq, i) => (
              <details key={i} className="group bg-soft-grey border border-border-grey [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-serif text-lg text-ink">
                  {faq.q}
                  <span className="ml-6 flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-navy group-open:rotate-90 transition-transform" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted-blue font-sans leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/faqs" className="inline-block bg-transparent border border-navy text-navy px-8 py-3 font-medium hover:bg-navy hover:text-white transition-colors">
              View All FAQs
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* 14. Final CTA */}
      <section className="py-24 bg-navy text-white text-center">
        <FadeIn className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to explore your investment options?</h2>
          <p className="text-soft-grey/90 font-sans text-lg mb-10 leading-relaxed">
            Start with a simple enquiry and take the next step with clear information and professional guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="bg-white text-navy px-8 py-4 font-medium hover:bg-off-white transition-colors w-full sm:w-auto">
              Start Investing
            </Link>
            <Link href="/compare" className="bg-transparent border border-white text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors w-full sm:w-auto">Compare Investments</Link>
          </div>
        </FadeIn>
      </section>
      
    </main>
  );
}
