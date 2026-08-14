import { SkeletonBlock, SkeletonLine } from "./SkeletonBlock";

export default function CalculatorSkeleton() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <SkeletonBlock className="w-24 h-6 mb-6" />
          <SkeletonBlock className="w-full h-12 md:h-16 mb-4" />
          <SkeletonLine className="mb-3 w-full" />
          <SkeletonLine className="mb-8 w-4/5" />
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <SkeletonBlock className="w-full sm:w-48 h-14" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <SkeletonBlock className="w-full max-w-md h-[280px] md:h-[400px]" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-y border-border-grey">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center">
          <SkeletonBlock className="w-64 h-8 mb-4" />
          <SkeletonLine className="w-full max-w-2xl mb-2" />
          <SkeletonLine className="w-3/4 max-w-xl mb-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center p-6 bg-soft-grey border border-border-grey">
                <SkeletonBlock className="w-10 h-10 mb-4" />
                <SkeletonBlock className="w-32 h-6 mb-2" />
                <SkeletonLine className="w-48" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Side */}
          <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 border border-border-grey">
            <SkeletonBlock className="w-48 h-8 mb-8" />
            
            <div className="space-y-6">
              <div>
                <SkeletonBlock className="w-32 h-5 mb-2" />
                <SkeletonBlock className="w-full h-12" />
              </div>
              <div>
                <SkeletonBlock className="w-32 h-5 mb-2" />
                <SkeletonBlock className="w-full h-12" />
              </div>
              <div>
                <SkeletonBlock className="w-32 h-5 mb-2" />
                <SkeletonBlock className="w-full h-12" />
              </div>
              
              <SkeletonBlock className="w-full h-14 mt-8" />
            </div>
          </div>
          
          {/* Results Side */}
          <div className="w-full lg:w-1/2 bg-navy p-6 md:p-10 text-white flex flex-col">
            <SkeletonBlock className="w-48 h-8 bg-white/20 mb-8" />
            <SkeletonBlock className="w-full h-6 bg-white/10 mb-2" />
            <SkeletonBlock className="w-3/4 h-6 bg-white/10 mb-8" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <SkeletonBlock className="w-full h-24 bg-white/20" />
              <SkeletonBlock className="w-full h-24 bg-white/20" />
            </div>
            
            <SkeletonBlock className="w-full h-32 bg-white/20 mt-auto" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-border-grey">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <SkeletonBlock className="w-full md:w-3/4 h-12 mb-6" />
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <SkeletonBlock className="w-full sm:w-48 h-14" />
          </div>
        </div>
      </section>
    </div>
  );
}
