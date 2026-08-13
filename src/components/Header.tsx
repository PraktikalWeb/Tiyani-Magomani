import { Menu, X, ChevronDown, TrendingUp, Wallet, SlidersHorizontal, Lock, Globe, Calculator, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Investments', path: '/investments' },
  { name: 'Digital Investing', path: '/digital-investing' },
  { name: 'Calculator', path: '/calculator' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

let menuTimeout: NodeJS.Timeout;

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileInvestmentsExpanded, setMobileInvestmentsExpanded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setHoveredPath(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (pathname: string, linkPath: string) => {
    if (linkPath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(linkPath);
  };

  const closeMenus = () => {
    setActiveMenu(null);
    setHoveredPath(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white border-b border-border-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center h-full">
            <Link to="/" className="flex items-center" onClick={closeMenus}>
              <img src="/tiyani_logo.png" alt="Tiyani Magomani" className="h-12 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling?.classList.remove('hidden'); }} />
              <span className="hidden font-serif text-3xl text-navy">Tiyani Magomani</span>
            </Link>
          </div>
          
          <div className="hidden xl:flex items-center space-x-8 h-full">
            <nav 
              className="flex space-x-8 items-center h-full"
              onMouseLeave={() => {
                  menuTimeout = setTimeout(() => {
                      setHoveredPath(null);
                      setActiveMenu(null);
                  }, 150);
              }}
            >
              {navLinks.map((link) => {
                const active = isActive(location.pathname, link.path);
                const isHovered = hoveredPath === link.path;
                const showIndicator = isHovered || (hoveredPath === null && active);
                
                return (
                  <div 
                    key={link.path} 
                    className="relative h-full flex items-center"
                    onMouseEnter={() => {
                        clearTimeout(menuTimeout);
                        setHoveredPath(link.path);
                        if (link.name === 'Investments') {
                            setActiveMenu(link.path);
                        } else {
                            setActiveMenu(null);
                        }
                    }}
                  >
                    <Link 
                      to={link.path} 
                      className={`text-[13px] font-sans font-bold uppercase tracking-widest text-ink transition-opacity ${active ? 'opacity-70' : 'hover:opacity-70'}`}
                      onClick={closeMenus}
                    >
                      {link.name}
                    </Link>
                    {showIndicator && (
                      <motion.div
                        layoutId="header-nav-indicator"
                        className="absolute bottom-[-1px] left-0 right-0 h-[3px] bg-navy z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </div>
                );
              })}
            </nav>
            
            <Link to="/contact" className="bg-navy text-white px-6 py-3 text-[13px] font-bold hover:bg-ink transition-colors flex-shrink-0" onClick={closeMenus}>
              Start Investing
            </Link>
          </div>

          <div className="xl:hidden flex items-center h-full">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink hover:text-navy p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      <AnimatePresence>
        {activeMenu === '/investments' && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden xl:block absolute top-full left-0 w-full bg-white border-b border-border-grey shadow-sm overflow-hidden z-40"
            onMouseEnter={() => {
                clearTimeout(menuTimeout);
                setActiveMenu('/investments');
                setHoveredPath('/investments');
            }}
            onMouseLeave={() => {
                menuTimeout = setTimeout(() => {
                    setActiveMenu(null);
                    setHoveredPath(null);
                }, 150);
            }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="grid grid-cols-12 gap-8">
                {/* Column 1 */}
                <div className="col-span-4">
                  <h3 className="text-sm font-serif text-ink mb-6 border-b border-border-grey pb-3">Explore by Goal</h3>
                  <div className="space-y-6">
                    <Link to="/investments#growth" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Growth Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients focused on long-term value creation.</span>
                      </div>
                    </Link>
                    
                    <Link to="/investments#income" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Wallet className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Income Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients interested in income-focused positioning.</span>
                      </div>
                    </Link>
                    
                    <Link to="/investments#flexible-access" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <SlidersHorizontal className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Flexible Access</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who may need a more adaptable route.</span>
                      </div>
                    </Link>

                    <Link to="/investments#fixed-return" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Lock className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Fixed Return Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients who prefer defined-term positioning.</span>
                      </div>
                    </Link>

                    <Link to="/investments#offshore" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Offshore Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">For clients exploring global exposure.</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="col-span-4 pl-4">
                  <h3 className="text-sm font-serif text-ink mb-6 border-b border-border-grey pb-3">Useful Tools</h3>
                  <div className="space-y-6">
                    <Link to="/investments" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-navy">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">All Investment Options</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">View the full investment options page.</span>
                      </div>
                    </Link>

                    <Link to="/calculator" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <Calculator className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Investment Calculator</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">Calculate estimates across available categories.</span>
                      </div>
                    </Link>

                    <Link to="/digital-investing" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 bg-soft-grey flex items-center justify-center flex-shrink-0 text-navy group-hover:bg-navy group-hover:text-white transition-colors">
                        <MonitorSmartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Digital Investing</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">Understand the online enquiry pathway.</span>
                      </div>
                    </Link>

                    <Link to="/faqs" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-navy">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">FAQs</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">Read common questions before enquiring.</span>
                      </div>
                    </Link>

                    <Link to="/contact" className="group flex gap-4 items-start hover:opacity-70 transition-opacity" onClick={closeMenus}>
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-navy">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block font-sans font-medium text-ink mb-1 text-sm">Contact the Team</span>
                        <span className="block text-xs text-muted-blue leading-relaxed font-normal">Submit an enquiry for follow-up.</span>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* Column 3 / CTA Panel */}
                <div className="col-span-4 border-l border-border-grey">
                  <div className="bg-soft-grey p-8 h-full flex flex-col justify-between border border-border-grey/50 ml-6">
                    <div>
                      <h3 className="text-lg font-serif text-ink mb-3">Compare before you enquire.</h3>
                      <p className="text-sm text-muted-blue font-normal leading-relaxed mb-8">
                        Use the Investment Calculator to compare estimates across the available investment categories before submitting an enquiry.
                      </p>
                    </div>
                    <div>
                      <Link to="/calculator" className="bg-navy text-white px-6 py-4 text-[13px] font-bold hover:bg-ink transition-colors flex items-center justify-center group mb-4 uppercase tracking-wider w-full" onClick={closeMenus}>
                        Use Calculator
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link to="/investments" className="text-[13px] text-navy hover:text-ink font-medium underline underline-offset-2 text-center block w-full" onClick={closeMenus}>
                        View all investment options
                      </Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="xl:hidden bg-white border-b border-border-grey overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = isActive(location.pathname, link.path);
                
                if (link.name === 'Investments') {
                  return (
                    <div key={link.path} className="flex flex-col">
                      <button 
                        onClick={() => setMobileInvestmentsExpanded(!mobileInvestmentsExpanded)}
                        className={`w-full flex justify-between items-center py-3 text-[13px] font-sans font-bold uppercase tracking-widest transition-all ${
                          active || mobileInvestmentsExpanded
                            ? 'border-l-[3px] border-navy pl-3 text-navy bg-off-white/50' 
                            : 'border-l-[3px] border-transparent pl-3 text-ink hover:opacity-70'
                        }`}
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileInvestmentsExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {mobileInvestmentsExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex flex-col pl-6 pr-2 py-2 space-y-4 border-l-[3px] border-border-grey/30 ml-[3px] mt-1 bg-soft-grey/30">
                              <Link to="/investments" onClick={closeMenus} className="text-[13px] font-sans font-bold text-navy hover:opacity-70">
                                All Investment Options
                              </Link>
                              
                              <Link to="/investments#growth" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Growth Options
                              </Link>
                              <Link to="/investments#income" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Income Options
                              </Link>
                              <Link to="/investments#flexible-access" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Flexible Access
                              </Link>
                              <Link to="/investments#fixed-return" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Fixed Return Options
                              </Link>
                              <Link to="/investments#offshore" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Offshore Options
                              </Link>
                              <Link to="/calculator" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Investment Calculator
                              </Link>
                              <Link to="/digital-investing" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Digital Investing
                              </Link>
                              <Link to="/contact" onClick={closeMenus} className="text-xs font-sans text-ink hover:text-navy">
                                Contact
                              </Link>
                              
                              <div className="pt-3 border-t border-border-grey/50 mt-2">
                                <Link to="/calculator" onClick={closeMenus} className="flex items-center text-[12px] font-bold uppercase tracking-widest text-navy hover:opacity-70 group">
                                  Use Calculator
                                  <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link 
                    key={link.path}
                    to={link.path} 
                    onClick={closeMenus} 
                    className={`block py-3 text-[13px] font-sans font-bold uppercase tracking-widest transition-all ${
                      active 
                        ? 'border-l-[3px] border-navy pl-3 text-navy bg-off-white/50' 
                        : 'border-l-[3px] border-transparent pl-3 text-ink hover:opacity-70'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-6 mt-2 border-t border-border-grey">
                <Link to="/contact" onClick={closeMenus} className="block w-full bg-navy text-white text-center px-6 py-4 text-[13px] font-bold hover:bg-ink transition-colors uppercase tracking-wider">
                  Start Investing
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
