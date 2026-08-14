const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'components/Investments.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add import if not exists
if (!content.includes('investmentProducts')) {
  content = content.replace(/(import .*?;[\r\n]+)(?!import)/, `$1import { investmentProducts } from '../src/lib/investment-products';\n`);
}

const comparisonSection = `      {/* 4. Compare key product figures */}
      <section className="py-24 bg-white">
        <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Compare Options</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Compare key product figures</h2>
            <p className="text-muted-blue font-sans text-lg max-w-3xl leading-relaxed">
              Use this comparison as a high-level guide before reviewing each product page or submitting an enquiry. Formal details, risks, terms and eligibility requirements are subject to official product documentation.
            </p>
          </div>
          
          <div className="w-full">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto pb-6">
              <table className="w-full text-left border-collapse border border-border-grey min-w-[900px]">
                <thead>
                  <tr className="bg-soft-grey text-xs uppercase tracking-widest text-muted-blue border-b border-border-grey">
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Investment Option</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Minimum</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Rate / Performance</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Term</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Income / Growth Focus</th>
                    <th className="p-4 border-r border-border-grey font-sans font-semibold whitespace-nowrap">Risk Profile</th>
                    <th className="p-4 font-sans font-semibold whitespace-nowrap">Access / Capital Protection</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-sans text-ink">
                  {[
                    {
                      name: "Private Equity Growth Option",
                      min: "R100,000",
                      rate: "13.2% p.a.",
                      term: "5 years",
                      focus: "Growth on capital",
                      risk: "Medium–High",
                      access: "Long-term private-equity-style exposure"
                    },
                    {
                      name: "Private Equity Income Option",
                      min: "R100,000",
                      rate: "13.2% p.a.",
                      term: "5 years",
                      focus: "Monthly income",
                      risk: "Medium–High",
                      access: "1% annual bonus over R1 million"
                    },
                    {
                      name: "Private Equity Flexible Access Option",
                      min: "R100,000",
                      rate: "11% p.a.",
                      term: "12 months",
                      focus: "Growth or monthly dividend",
                      risk: "Medium–High",
                      access: "Access to available accrued interest, subject to terms"
                    },
                    {
                      name: "Fixed Return Growth Option",
                      min: "R100,000",
                      rate: "12.6% p.a.",
                      term: "5 years",
                      focus: "Growth on capital",
                      risk: "Low–Medium",
                      access: "100% capital protection at maturity, subject to terms"
                    },
                    {
                      name: "Fixed Return Income Option",
                      min: "R100,000",
                      rate: "12.6% p.a.",
                      term: "5 years",
                      focus: "Monthly income",
                      risk: "Low–Medium",
                      access: "100% capital protection at maturity, subject to terms"
                    },
                    {
                      name: "Offshore Global Option",
                      min: "R50,000",
                      rate: "Scenario-based, 7% p.a. average return assumption",
                      term: "5 years",
                      focus: "Offshore / USD-linked exposure",
                      risk: "Subject to offshore and currency exposure",
                      access: "100% capital return at maturity, subject to terms"
                    }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border-grey hover:bg-off-white transition-colors">
                      <td className="p-4 border-r border-border-grey font-medium whitespace-nowrap">{row.name}</td>
                      <td className="p-4 border-r border-border-grey">{row.min}</td>
                      <td className="p-4 border-r border-border-grey">{row.rate}</td>
                      <td className="p-4 border-r border-border-grey">{row.term}</td>
                      <td className="p-4 border-r border-border-grey">{row.focus}</td>
                      <td className="p-4 border-r border-border-grey">{row.risk}</td>
                      <td className="p-4">{row.access}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Mobile/Tablet Stacked Cards */}
            <div className="lg:hidden space-y-6">
              {[
                {
                  name: "Private Equity Growth Option",
                  min: "R100,000",
                  rate: "13.2% p.a.",
                  term: "5 years",
                  focus: "Growth on capital",
                  risk: "Medium–High",
                  access: "Long-term private-equity-style exposure"
                },
                {
                  name: "Private Equity Income Option",
                  min: "R100,000",
                  rate: "13.2% p.a.",
                  term: "5 years",
                  focus: "Monthly income",
                  risk: "Medium–High",
                  access: "1% annual bonus over R1 million"
                },
                {
                  name: "Private Equity Flexible Access Option",
                  min: "R100,000",
                  rate: "11% p.a.",
                  term: "12 months",
                  focus: "Growth or monthly dividend",
                  risk: "Medium–High",
                  access: "Access to available accrued interest, subject to terms"
                },
                {
                  name: "Fixed Return Growth Option",
                  min: "R100,000",
                  rate: "12.6% p.a.",
                  term: "5 years",
                  focus: "Growth on capital",
                  risk: "Low–Medium",
                  access: "100% capital protection at maturity, subject to terms"
                },
                {
                  name: "Fixed Return Income Option",
                  min: "R100,000",
                  rate: "12.6% p.a.",
                  term: "5 years",
                  focus: "Monthly income",
                  risk: "Low–Medium",
                  access: "100% capital protection at maturity, subject to terms"
                },
                {
                  name: "Offshore Global Option",
                  min: "R50,000",
                  rate: "Scenario-based, 7% p.a. average return assumption",
                  term: "5 years",
                  focus: "Offshore / USD-linked exposure",
                  risk: "Subject to offshore and currency exposure",
                  access: "100% capital return at maturity, subject to terms"
                }
              ].map((row, i) => (
                <div key={i} className="bg-soft-grey border border-border-grey p-6">
                  <h3 className="text-xl font-serif text-ink mb-6 border-b border-border-grey pb-4">{row.name}</h3>
                  <div className="space-y-4 text-sm font-sans">
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Minimum</span>
                      <span className="text-ink">{row.min}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Rate / Performance</span>
                      <span className="text-ink">{row.rate}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Term</span>
                      <span className="text-ink">{row.term}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Income / Growth Focus</span>
                      <span className="text-ink">{row.focus}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Risk Profile</span>
                      <span className="text-ink">{row.risk}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs uppercase tracking-widest text-muted-blue mb-1">Access / Capital Protection</span>
                      <span className="text-ink">{row.access}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </FadeIn>
      </section>`;

const regex = /\{\/\* 4\. Comparison Section \*\/\}[\s\S]*?<\/section>/;
if (regex.test(content)) {
  content = content.replace(regex, comparisonSection);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated Investments.tsx');
