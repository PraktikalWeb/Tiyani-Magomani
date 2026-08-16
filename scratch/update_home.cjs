const fs = require('fs');

let content = fs.readFileSync('components/Home.tsx', 'utf8');

// Replace 1: the CalcIcon import
content = content.replace(/,\s*Calculator as CalcIcon/, '');

// Replace 2: The entire Calculator section.
const newSection = `      {/* 7. Calculator / Comparison Section */}
      <section className="py-24 bg-white" id="calculator">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Options</span>
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
      </section>`;

const sectionStart = content.indexOf('{/* 7. Calculator / Comparison Section */}');
const sectionEndStr = '      {/* 8. Trust and Compliance Section */}';
const sectionEnd = content.indexOf(sectionEndStr);

if (sectionStart === -1 || sectionEnd === -1) {
  console.log("Could not find section boundaries");
  process.exit(1);
}

// Ensure proper spacing by using last indexOf spaces before the start of comment
const realStart = content.lastIndexOf('      ', sectionStart);

const beforeSection = content.slice(0, realStart);
const afterSection = content.slice(sectionEnd);

content = beforeSection + newSection + '\n\n' + afterSection;
fs.writeFileSync('components/Home.tsx', content, 'utf8');
console.log("Replaced successfully");
