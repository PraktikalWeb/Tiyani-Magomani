import { SkeletonBlock, SkeletonLine } from "./SkeletonBlock";

export default function ContactSkeleton() {
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
            <SkeletonBlock className="w-full sm:w-48 h-14" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <SkeletonBlock className="w-full max-w-md h-[280px] md:h-[400px]" />
        </div>
      </section>

      {/* Process Strip */}
      <section className="bg-navy py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i > 1 ? 'pt-8 sm:pt-0 sm:pl-8' : ''}`}>
              <SkeletonBlock className="w-12 h-12 mb-4 bg-white/20" />
              <SkeletonBlock className="w-24 h-5 mb-2 bg-white/20" />
              <SkeletonLine className="w-32 bg-white/10" />
            </div>
          ))}
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
          {/* Form Side */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white p-6 sm:p-10 border border-border-grey shadow-sm">
              <SkeletonBlock className="w-48 h-8 mb-4" />
              <SkeletonLine className="w-3/4 mb-10" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <SkeletonBlock className="w-24 h-5 mb-2" />
                  <SkeletonBlock className="w-full h-12" />
                </div>
                <div>
                  <SkeletonBlock className="w-24 h-5 mb-2" />
                  <SkeletonBlock className="w-full h-12" />
                </div>
              </div>

              <div className="mb-6">
                <SkeletonBlock className="w-24 h-5 mb-2" />
                <SkeletonBlock className="w-full h-12" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <SkeletonBlock className="w-32 h-5 mb-2" />
                  <SkeletonBlock className="w-full h-12" />
                </div>
                <div>
                  <SkeletonBlock className="w-32 h-5 mb-2" />
                  <SkeletonBlock className="w-full h-12" />
                </div>
              </div>

              <div className="mb-6">
                <SkeletonBlock className="w-48 h-5 mb-2" />
                <SkeletonBlock className="w-full h-12" />
              </div>

              <div className="mb-8">
                <SkeletonBlock className="w-24 h-5 mb-2" />
                <SkeletonBlock className="w-full h-32" />
              </div>

              <div className="flex items-start gap-4 mb-10">
                <SkeletonBlock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div className="w-full">
                  <SkeletonLine className="w-full mb-1" />
                  <SkeletonLine className="w-3/4" />
                </div>
              </div>

              <SkeletonBlock className="w-full sm:w-48 h-14" />
            </div>
          </div>
          
          {/* Right Side Cards */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-soft-grey p-8 border border-border-grey">
              <SkeletonBlock className="w-32 h-6 mb-6" />
              <div className="space-y-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex gap-4">
                    <SkeletonBlock className="w-8 h-8 flex-shrink-0 rounded-full" />
                    <div className="w-full mt-1">
                      <SkeletonBlock className="w-24 h-5 mb-2" />
                      <SkeletonLine className="w-full" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 border border-border-grey">
              <SkeletonBlock className="w-32 h-6 mb-4" />
              <SkeletonLine className="w-full mb-2" />
              <SkeletonLine className="w-full mb-2" />
              <SkeletonLine className="w-3/4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
