import { ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-20 min-h-screen flex items-center bg-off-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center">
        <FadeIn>
          <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-6 block">404 Error</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight mb-8 text-ink">
            Page not found.
          </h1>
          <p className="text-lg font-sans text-muted-blue leading-relaxed mb-12 max-w-2xl mx-auto font-normal">
            The page you are looking for may have been moved, deleted or does not exist. Please check the URL or return to the homepage to explore the investment categories.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/" className="bg-navy text-white px-8 py-4 font-medium hover:bg-ink transition-colors flex items-center group justify-center w-full sm:w-auto uppercase tracking-wider text-[13px]">
              Return to Homepage
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="text-navy font-bold hover:opacity-70 transition-opacity uppercase tracking-wider text-[13px] flex items-center justify-center w-full sm:w-auto border border-navy px-8 py-4">
              Contact the Team
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
