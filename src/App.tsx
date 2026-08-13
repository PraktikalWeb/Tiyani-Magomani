/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Investments from './components/Investments';
import PrivateEquityGrowth from './components/PrivateEquityGrowth';
import PrivateEquityIncome from './components/PrivateEquityIncome';
import FixedReturnGrowth from './components/FixedReturnGrowth';
import FixedReturnIncome from './components/FixedReturnIncome';
import OffshoreGlobal from './components/OffshoreGlobal';
import Calculator from './components/Calculator';
import DigitalInvesting from './components/DigitalInvesting';
import About from './components/About';
import Contact from './components/Contact';
import FAQs from './components/FAQs';
import Privacy from './components/Privacy';
import Popia from './components/Popia';
import Terms from './components/Terms';
import Complaints from './components/Complaints';
import HowItWorks from './components/HowItWorks';
import LegalCenter from './components/Legal';
import ThankYou from './components/ThankYou';
import RiskDisclosure from './components/RiskDisclosure';
import CookiesPolicy from './components/Cookies';
import GrowthOptions from './components/GrowthOptions';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Preloader() {
  return (
    <div className="fixed inset-0 z-50 bg-off-white flex flex-col pt-20 px-4 sm:px-6 lg:px-8">
      {/* Header skeleton */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-border-grey flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-48 h-8 bg-border-grey animate-pulse"></div>
        <div className="hidden lg:flex space-x-8 ml-auto">
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-32 h-10 bg-border-grey animate-pulse"></div>
        </div>
      </div>
      
      {/* Hero Skeleton */}
      <div className="max-w-7xl mx-auto w-full mt-24">
         <div className="max-w-3xl">
           <div className="h-16 md:h-20 bg-border-grey animate-pulse mb-4 w-3/4"></div>
           <div className="h-16 md:h-20 bg-border-grey animate-pulse mb-8 w-2/4"></div>
           
           <div className="h-6 bg-border-grey animate-pulse mb-4 w-full"></div>
           <div className="h-6 bg-border-grey animate-pulse mb-12 w-4/5"></div>
           
           <div className="flex gap-6">
             <div className="w-40 h-14 bg-border-grey animate-pulse"></div>
             <div className="w-48 h-14 bg-border-grey animate-pulse"></div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader briefly to give a polished feel before revealing the page
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-off-white flex flex-col font-sans">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="preloader"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Preloader />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col min-h-screen"
            >
              <Header />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/investments" element={<Investments />} />
                  <Route path="/investments/growth-options" element={<GrowthOptions />} />
                  <Route path="/investments/private-equity-growth" element={<PrivateEquityGrowth />} />
                  <Route path="/investments/private-equity-income" element={<PrivateEquityIncome />} />
                  <Route path="/investments/fixed-return-growth" element={<FixedReturnGrowth />} />
                  <Route path="/investments/fixed-return-income" element={<FixedReturnIncome />} />
                  <Route path="/investments/offshore-global" element={<OffshoreGlobal />} />
                  <Route path="/calculator" element={<Calculator />} />
                  <Route path="/digital-investing" element={<DigitalInvesting />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/popia" element={<Popia />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/complaints" element={<Complaints />} />
                  <Route path="/how-it-works" element={<HowItWorks />} />
                  <Route path="/legal" element={<LegalCenter />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="/risk-disclosure" element={<RiskDisclosure />} />
                  <Route path="/cookies" element={<CookiesPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

