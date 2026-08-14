const fs = require('fs');
const path = require('path');

const products = [
  { file: 'components/PrivateEquityGrowth.tsx', id: 'private-equity-growth', disclaimerType: 'standard' },
  { file: 'components/PrivateEquityIncome.tsx', id: 'private-equity-income', disclaimerType: 'standard' },
  { file: 'components/PrivateEquityFlexibleAccess.tsx', id: 'private-equity-flexible-access', disclaimerType: 'standard' },
  { file: 'components/FixedReturnGrowth.tsx', id: 'fixed-return-growth', disclaimerType: 'protection' },
  { file: 'components/FixedReturnIncome.tsx', id: 'fixed-return-income', disclaimerType: 'protection' },
  { file: 'components/OffshoreGlobal.tsx', id: 'offshore-global', disclaimerType: 'offshore' }
];

const standardDisclaimer = `Figures are shown for general information and enquiry purposes only. They do not constitute financial advice or a guaranteed return. Final product details, risks, fees, tax treatment, eligibility requirements and terms are subject to formal product documentation.`;

const protectionDisclaimer = `${standardDisclaimer} Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity. The relevant security is not guaranteed by any party.`;

const offshoreDisclaimer = `${standardDisclaimer} Capital protection applies only where expressly stated in the formal product documentation and only if the product is held until maturity. The relevant security is not guaranteed by any party. Offshore investment outcomes may be affected by currency movement, market performance, product structure and formal product terms.`;

products.forEach(p => {
  const filePath = path.join(__dirname, p.file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add import if not exists
  if (!content.includes('investmentProducts')) {
    content = content.replace(/(import .*?;[\r\n]+)(?!import)/, `$1import { investmentProducts } from '../src/lib/investment-products';\n`);
  }

  // Generate Key Figures Section
  let disclaimer = p.disclaimerType === 'offshore' ? offshoreDisclaimer : p.disclaimerType === 'protection' ? protectionDisclaimer : standardDisclaimer;
  
  const keyFiguresSection = `      {/* Key Product Figures */}
      <section className="bg-white border-y border-border-grey py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12">
            <span className="text-xs font-sans uppercase tracking-widest text-muted-blue mb-4 block">Indicative Product Figures</span>
            <h2 className="text-3xl md:text-4xl font-serif text-ink mb-6">Review the core figures for this option before submitting an enquiry.</h2>
            <p className="text-lg font-sans text-muted-blue leading-relaxed font-normal max-w-3xl">
              Final product terms, risks and eligibility requirements are confirmed through formal documentation.
            </p>
          </FadeIn>
          
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {investmentProducts["${p.id}"].figures.map((fig, i) => (
              <FadeInStaggerItem key={i} className="bg-soft-grey border border-border-grey p-6 flex flex-col justify-center">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">{fig.label}</span>
                <span className="text-2xl font-serif text-ink">{fig.value}</span>
                {fig.subtext && <span className="text-sm font-sans text-muted-blue mt-2">{fig.subtext}</span>}
              </FadeInStaggerItem>
            ))}
          </FadeInStagger>
          
          <FadeIn className="bg-soft-grey border border-border-grey p-6 md:p-8">
            <p className="text-sm font-sans text-muted-blue leading-relaxed m-0">
              ${disclaimer}
            </p>
          </FadeIn>
        </div>
      </section>`;

  // Regex to replace existing Product Summary Strip (from {/* Product Summary Strip */} to </section>)
  const regex = /\{\/\* Product Summary Strip \*\/\}[\s\S]*?<\/section>/;
  if (regex.test(content)) {
    content = content.replace(regex, keyFiguresSection);
  } else {
    // If it doesn't exist, insert after Hero Section
    const heroRegex = /(\{\/\* Hero Section \*\/\}[\s\S]*?<\/section>)/;
    content = content.replace(heroRegex, `$1\n\n${keyFiguresSection}`);
  }

  // Fix public wording in hero sections
  if (p.id === 'private-equity-growth') {
    content = content.replace(/A growth-focused investment category for clients considering long-term value creation through structured private-equity-style exposure./, 'Designed for clients seeking long-term capital growth through private-equity-style exposure.');
  } else if (p.id === 'private-equity-income') {
    content = content.replace(/An income-focused investment category for clients exploring structured private-equity-style exposure with regular income potential./, 'Designed for clients who want monthly income potential while maintaining exposure to private-equity-style opportunities.');
  } else if (p.id === 'private-equity-flexible-access') {
    content = content.replace(/An adaptable investment category for clients looking for structured private-equity-style exposure with shorter-term access options./, 'Designed for clients who want a shorter-term private-equity-style option with a flexible payout structure.');
  } else if (p.id === 'fixed-return-growth') {
    content = content.replace(/A structured investment category for clients focused on defined growth over a set term./, 'Designed for clients seeking structured growth with a defined term and capital protection at maturity, subject to formal product documentation.');
  } else if (p.id === 'fixed-return-income') {
    content = content.replace(/A structured investment category for clients focused on defined regular income over a set term./, 'Designed for clients seeking structured monthly income with a defined term and capital protection at maturity, subject to formal product documentation.');
  } else if (p.id === 'offshore-global') {
    content = content.replace(/A structured investment category for clients looking to explore international market exposure./, 'Global fixed-income portfolio exposure. USD-linked offshore exposure.');
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${p.file}`);
});
