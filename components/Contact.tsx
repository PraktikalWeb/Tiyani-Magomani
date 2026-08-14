"use client";
import { ArrowRight } from 'lucide-react';
import FadeIn, { FadeInStagger, FadeInStaggerItem } from './FadeIn';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

function FAQItem(props: { faq: { q: string, a: string }, key?: string | number }) {
  const { faq } = props;
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-soft-grey border border-border-grey">
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

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Not sure yet',
    amount: 'Prefer not to say',
    contactMethod: 'Phone call',
    message: '',
    terms: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    // Clear error when user makes changes
    if (error) setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Frontend validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.interest || !formData.contactMethod || !formData.terms) {
      setError('Please complete all required fields before submitting your enquiry.');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    // Simulate network request for UI purposes only
    setTimeout(() => {
      setIsSubmitting(false);
      router.push('/thank-you');
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-white border-b border-border-grey overflow-hidden relative flex flex-col lg:block">
        <div className="absolute inset-0 z-0 hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-r from-off-white to-white opacity-80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 flex flex-col lg:flex-row items-center">          
          <FadeIn delay={0.2} className="w-full lg:w-[55%] relative z-20">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block mt-4 lg:mt-0">Contact Tiyani Magomani</span>
            <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-8 text-ink">
              Start with a simple investment enquiry.
            </h1>
            <p className="text-lg md:text-xl font-sans text-[#4B5563] leading-relaxed mb-10 max-w-2xl font-normal">
              Submit your details and the team can follow up with the relevant information about Tiyani Magomani’s investment categories, calculator estimates and next steps.
            </p>
            <div className="flex flex-wrap items-center gap-6 mb-8 lg:mb-0">
              <a href="#enquiry-form" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto text-[13px] uppercase tracking-wider">
                Start Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/investments" className="text-navy font-medium hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto">
                View Investment Options
              </Link>
            </div>
          </FadeIn>

          {/* Mobile/Tablet Image */}
          <FadeIn delay={0.4} className="w-full lg:hidden relative z-10 mt-8 mb-4"> 
             <div className="relative w-full aspect-video">
                <img 
                  src="/images/contact-advisory-meeting.png" 
                  alt="Clients meeting with a financial adviser" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy/5 mix-blend-multiply"></div>
             </div>
          </FadeIn>
        </div>

        {/* Desktop Absolute Image */}
        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-0 w-[42vw] h-[70%] z-10">
          <img 
            src="/images/contact-advisory-meeting.png" 
            alt="Clients meeting with a financial adviser" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy/5 mix-blend-multiply"></div>
        </div>
      </section>

      {/* Contact Summary Strip */}
      <section className="bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <FadeInStagger className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x-0 md:divide-x divide-border-grey mb-8">
            <FadeInStaggerItem className="flex flex-col md:pl-6 first:md:pl-0">
              <span className="text-lg font-serif text-ink mb-1">Step 1</span>
              <span className="text-sm font-sans text-muted-blue">Choose an option</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Step 2</span>
              <span className="text-sm font-sans text-muted-blue">Submit your details</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Step 3</span>
              <span className="text-sm font-sans text-muted-blue">Receive follow-up</span>
            </FadeInStaggerItem>
            <FadeInStaggerItem className="flex flex-col md:pl-6">
              <span className="text-lg font-serif text-ink mb-1">Step 4</span>
              <span className="text-sm font-sans text-muted-blue">Review formal information</span>
            </FadeInStaggerItem>
          </FadeInStagger>
          
          <FadeIn>
            <p className="text-xs font-sans text-muted-blue pt-6 border-t border-border-grey/50 max-w-4xl font-normal leading-relaxed">
              Submitting an enquiry does not represent a completed application, financial advice or an investment commitment.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 lg:py-32 bg-off-white border-b border-border-grey scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Investment Enquiry</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Tell us what you would like to explore.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal max-w-3xl">
              Complete the enquiry form and select the investment category you are interested in. If you are not sure which option fits your goals, you can choose “Not sure yet”.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Left Side */}
            <FadeIn className="lg:col-span-7">
              <div className="bg-white border border-border-grey p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 p-4 text-sm font-sans">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                        Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="interest" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                        Investment Interest *
                      </label>
                      <div className="relative">
                        <select 
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                        >
                          <option value="Not sure yet">Not sure yet</option>
                          <option value="Private Equity Growth Option">Private Equity Growth Option</option>
                          <option value="Private Equity Income Option">Private Equity Income Option</option>
                          <option value="Private Equity Flexible Access Option">Private Equity Flexible Access Option</option>
                          <option value="Fixed Return Growth Option">Fixed Return Growth Option</option>
                          <option value="Fixed Return Income Option">Fixed Return Income Option</option>
                          <option value="Offshore Global Option">Offshore Global Option</option>
                          <option value="General investment enquiry">General investment enquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="amount" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                          Estimated Investment Amount
                        </label>
                        <div className="relative">
                          <select 
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Prefer not to say">Prefer not to say</option>
                            <option value="Under R10,000">Under R10,000</option>
                            <option value="R10,000 - R50,000">R10,000 - R50,000</option>
                            <option value="R50,000 - R100,000">R50,000 - R100,000</option>
                            <option value="R100,000 - R250,000">R100,000 - R250,000</option>
                            <option value="R250,000+">R250,000+</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="contactMethod" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                          Preferred Contact Method *
                        </label>
                        <div className="relative">
                          <select 
                            id="contactMethod"
                            name="contactMethod"
                            value={formData.contactMethod}
                            onChange={handleChange}
                            className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Phone call">Phone call</option>
                            <option value="Email">Email</option>
                            <option value="WhatsApp">WhatsApp</option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-blue">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-widest text-muted-blue mb-3">
                        Message
                      </label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Tell us what you would like to understand or which investment option you are considering."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors resize-y"
                      ></textarea>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5 mt-1">
                        <input 
                          id="terms" 
                          name="terms"
                          type="checkbox" 
                          checked={formData.terms}
                          onChange={handleChange}
                          className="w-5 h-5 border-border-grey bg-soft-grey focus:ring-navy accent-navy cursor-pointer" 
                        />
                      </div>
                      <div className="ml-3">
                        <label htmlFor="terms" className="text-sm font-sans text-muted-blue cursor-pointer leading-relaxed">
                          I understand that this enquiry is for general information only and does not represent financial advice or a completed investment application. *
                        </label>
                      </div>
                    </div>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-navy text-white px-8 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center justify-center cursor-pointer uppercase tracking-wider disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </form>
              </div>
            </FadeIn>
            
            {/* Guidance Card Right Side */}
            <FadeIn delay={0.2} className="lg:col-span-5">
              <div className="bg-white border border-border-grey p-8 lg:p-10 sticky top-32">
                <h3 className="text-2xl font-serif text-ink mb-8">What happens next?</h3>
                
                <div className="space-y-8">
                  {[
                    { step: "1. We review your enquiry", desc: "The team can review the investment category you selected." },
                    { step: "2. We follow up", desc: "You can receive relevant information based on your enquiry." },
                    { step: "3. You review formal details", desc: "Product details, risks, terms and eligibility requirements are subject to formal documentation." },
                    { step: "4. You decide the next step", desc: "Submitting an enquiry does not commit you to any investment." }
                  ].map((item, index) => (
                    <div key={index} className="pb-8 border-b border-border-grey/50 last:border-0 last:pb-0">
                      <h4 className="text-lg font-serif text-ink mb-2">{item.step}</h4>
                      <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 font-normal">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 lg:py-32 bg-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink">Other ways to start</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Explore investments",
                desc: "Review the full investment options before submitting an enquiry.",
                btnText: "View Investments",
                link: "/investments"
              },
              {
                title: "Use the calculator",
                desc: "Compare estimated results across available investment categories.",
                btnText: "Use Calculator",
                link: "/calculator"
              },
              {
                title: "Digital investing pathway",
                desc: "Learn how the online enquiry process works.",
                btnText: "View Digital Investing",
                link: "/digital-investing"
              }
            ].map((card, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-8 flex flex-col justify-center min-h-[280px]">
                <h3 className="text-xl font-serif text-ink mb-4">{card.title}</h3>
                <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-8 flex-grow">{card.desc}</p>
                <Link href={card.link} className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto hover:opacity-70 transition-opacity">
                  {card.btnText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Investment Categories Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Investment Categories</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Choose the option you want to ask about.</h2>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Private Equity Growth Option",
                desc: "For clients focused on long-term capital growth.",
                link: "/investments/private-equity-growth"
              },
              {
                title: "Private Equity Income Option",
                desc: "For clients interested in income-focused investment positioning.",
                link: "/investments/private-equity-income"
              },
              {
                title: "Private Equity Flexible Access Option",
                desc: "For clients who may need a more adaptable investment route.",
                link: "/investments/private-equity-flexible-access"
              },
              {
                title: "Fixed Return Growth Option",
                desc: "For clients considering structured growth with defined terms.",
                link: "/investments/fixed-return-growth"
              },
              {
                title: "Fixed Return Income Option",
                desc: "For clients considering income-focused positioning with defined terms.",
                link: "/investments/fixed-return-income"
              },
              {
                title: "Offshore Global Option",
                desc: "For clients exploring offshore and international exposure.",
                link: "/investments/offshore-global"
              }
            ].map((product, i) => (
              <FadeInStaggerItem key={i}>
                <Link href={product.link} className="block group h-full">
                  <div className="bg-white border border-border-grey p-8 h-full flex flex-col group-hover:border-navy transition-colors">
                    <h3 className="text-lg font-serif text-ink mb-3">{product.title}</h3>
                    <p className="text-sm font-sans text-muted-blue leading-relaxed m-0 mb-6 flex-grow">{product.desc}</p>
                    <div className="text-navy text-[13px] uppercase tracking-widest font-bold flex items-center mt-auto">
                      View Option
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="py-20 bg-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="bg-soft-grey border border-border-grey p-8 md:p-12 text-center">
            <h2 className="text-xl font-serif text-ink mb-4">Important information</h2>
            <p className="text-sm font-sans text-muted-blue leading-relaxed font-normal m-0 max-w-2xl mx-auto">
              This contact page is provided for general enquiry purposes only. Submitting an enquiry does not represent financial advice, a completed application, confirmed product terms or an investment commitment. Investment values may rise or fall. Clients should review formal documentation and seek appropriate financial guidance before making any investment decision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact FAQ Section */}
      <section className="py-20 lg:py-32 bg-off-white border-b border-border-grey">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Questions before you enquire?</h2>
          </FadeIn>
          
          <div className="space-y-4">
            {[
              {
                q: "Do I need to know which investment option I want?",
                a: "No. You can select “Not sure yet” and submit a general enquiry. The team can follow up with relevant information."
              },
              {
                q: "Does submitting an enquiry mean I have applied?",
                a: "No. Submitting an enquiry only requests follow-up information. It does not represent a completed application or investment commitment."
              },
              {
                q: "Can I use the calculator before enquiring?",
                a: "Yes. You can use the Investment Calculator to compare estimated results before submitting an enquiry."
              },
              {
                q: "Are the calculator results guaranteed?",
                a: "No. Calculator results are estimates only and do not represent guaranteed outcomes or confirmed product figures."
              },
              {
                q: "Should I upload documents here?",
                a: "No. Do not submit sensitive personal documents through this form. Formal documentation requirements can be handled through the appropriate process after enquiry."
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
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to submit your enquiry?</h2>
            <p className="text-lg font-sans text-soft-grey/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Start with a simple enquiry and the team can follow up with the relevant information about the investment category you are interested in.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#enquiry-form" className="bg-white text-navy px-8 py-4 text-[13px] font-bold hover:bg-off-white transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider">
                Start Enquiry
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/investments" className="text-white font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-white/30 px-8 py-4">
                View Investment Options
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
