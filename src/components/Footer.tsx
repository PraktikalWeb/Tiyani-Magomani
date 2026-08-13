import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

function FooterSection({ title, children }: { title: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 sm:border-none py-4 sm:py-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between sm:hidden text-left"
      >
        <h4 className="text-xs font-sans uppercase tracking-widest text-soft-grey">{title}</h4>
        <ChevronDown className={`w-4 h-4 text-soft-grey transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <h4 className="hidden sm:block text-xs font-sans uppercase tracking-widest text-soft-grey mb-6">{title}</h4>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:block mt-4 sm:mt-0`}>
        {children}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1 mb-8 sm:mb-0">
            <Link to="/">
              <img src="/tiyani_logo.png" alt="Tiyani Magomani" className="h-12 object-contain mb-6 invert brightness-0" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden font-serif text-3xl text-white block mb-6">Tiyani Magomani</span>
            </Link>
            <p className="text-sm text-soft-grey/80 leading-relaxed font-sans pr-4">
              Public-facing investment website presenting structured investment options, calculator estimates and enquiry pathways.
            </p>
          </div>
          
          <FooterSection title="Investments">
            <ul className="space-y-4 text-sm text-soft-grey/80">
              <li><Link to="/digital-investing" className="hover:text-white transition-colors">Digital Investing</Link></li>
              <li><Link to="/investments" className="hover:text-white transition-colors">Growth Options</Link></li>
              <li><Link to="/investments" className="hover:text-white transition-colors">Income Options</Link></li>
              <li><Link to="/investments" className="hover:text-white transition-colors">Flexible Access</Link></li>
              <li><Link to="/investments" className="hover:text-white transition-colors">Fixed Return Options</Link></li>
              <li><Link to="/investments" className="hover:text-white transition-colors">Offshore Options</Link></li>
            </ul>
          </FooterSection>

          <FooterSection title="Support">
            <ul className="space-y-4 text-sm text-soft-grey/80">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/calculator" className="hover:text-white transition-colors">Calculator</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Enquiry Process</Link></li>
            </ul>
          </FooterSection>

          <FooterSection title="Legal">
            <ul className="space-y-4 text-sm text-soft-grey/80">
              <li><Link to="/legal" className="hover:text-white transition-colors">Legal Centre</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/popia" className="hover:text-white transition-colors">POPIA Policy</Link></li>
              <li><Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/risk-disclosure" className="hover:text-white transition-colors">Risk Disclosure</Link></li>
              <li><Link to="/complaints" className="hover:text-white transition-colors">Complaints Policy</Link></li>
            </ul>
          </FooterSection>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-soft-grey/60 font-sans text-center max-w-3xl mx-auto leading-relaxed">
            Investment information is provided for general guidance only. Calculator results are estimates and do not represent guaranteed returns. Product details, risks, terms and eligibility requirements are subject to formal documentation.
          </p>
        </div>
      </div>
    </footer>
  );
}
