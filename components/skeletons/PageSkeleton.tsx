import { SkeletonBlock, SkeletonLine } from "./SkeletonBlock";

export default function PageSkeleton() {
  return (
    <div className="bg-off-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col items-start">
          <SkeletonBlock className="w-24 h-6 mb-6" />
          <SkeletonBlock className="w-full h-12 md:h-16 mb-4" />
          <SkeletonBlock className="w-5/6 h-12 md:h-16 mb-8" />
          
          <SkeletonLine className="mb-3 w-full" />
          <SkeletonLine className="mb-3 w-11/12" />
          <SkeletonLine className="mb-10 w-4/5" />
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <SkeletonBlock className="w-full sm:w-48 h-14" />
            <SkeletonBlock className="w-full sm:w-48 h-14" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <SkeletonBlock className="w-full max-w-md h-[280px] md:h-[450px]" />
        </div>
      </section>

      {/* Summary Strip */}
      <section className="bg-white border-y border-border-grey py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border-grey">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className={`flex flex-col items-center text-center ${i > 1 ? 'pt-8 sm:pt-0 sm:pl-8' : ''}`}>
              <SkeletonBlock className="w-12 h-12 mb-4" />
              <SkeletonBlock className="w-24 h-6 mb-2" />
              <SkeletonLine className="w-32" />
            </div>
          ))}
        </div>
      </section>

      {/* Main Content / Card Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <SkeletonBlock className="w-32 h-6 mb-4" />
          <SkeletonBlock className="w-3/4 h-10 mb-6" />
          <SkeletonLine className="w-full mb-2" />
          <SkeletonLine className="w-5/6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-8 border border-border-grey flex flex-col">
              <SkeletonBlock className="w-10 h-10 mb-6" />
              <SkeletonBlock className="w-20 h-5 mb-4" />
              <SkeletonBlock className="w-48 h-8 mb-4" />
              <SkeletonLine className="w-full mb-2" />
              <SkeletonLine className="w-full mb-2" />
              <SkeletonLine className="w-2/3 mb-8" />
              <SkeletonBlock className="w-full h-12 mt-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-border-grey">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <SkeletonBlock className="w-48 h-10 mb-4" />
          </div>
          <div className="space-y-0 border-t border-border-grey">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="py-6 flex justify-between items-center border-b border-border-grey">
                <SkeletonBlock className="w-3/4 sm:w-2/3 h-6" />
                <SkeletonBlock className="w-6 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <SkeletonBlock className="w-full md:w-3/4 h-12 bg-white/20 mb-6" />
          <SkeletonBlock className="w-full md:w-2/3 h-6 bg-white/10 mb-2" />
          <SkeletonBlock className="w-full md:w-1/2 h-6 bg-white/10 mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <SkeletonBlock className="w-full sm:w-48 h-14 bg-white/20" />
            <SkeletonBlock className="w-full sm:w-48 h-14 bg-white/10" />
          </div>
        </div>
      </section>
    </div>
  );
}
