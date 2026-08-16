const fs = require('fs');

let contactContent = fs.readFileSync('components/Contact.tsx', 'utf8');

// 1. Update useEffect logic for amount mapping
const useEffectRegex = /if \(source === 'compare-investments'\) \{\s+setFormData\(prev => \(\{\s+\.\.\.prev,\s+calculatorType: 'Comparison Tool',\s+amount: paramAmount \? \`R\$\{\parseInt\(paramAmount\)\.toLocaleString\('en-US'\)\}\` : prev\.amount,\s+term: paramTerm \|\| prev\.term,\s+interestType: paramInterest \|\| prev\.interestType,\s+productName: paramProduct \|\| prev\.productName,\s+\}\)\);\s+\}/g;

const newUseEffectLogic = `
      if (source === 'compare-investments' || source === 'product-calculator') {
        const parsedAmount = paramAmount ? parseInt(paramAmount) : null;
        let mappedAmount = prev.amount;
        
        if (parsedAmount !== null) {
          if (parsedAmount >= 1000000) mappedAmount = 'R1,000,000+';
          else if (parsedAmount >= 500000) mappedAmount = 'R500,000 - R999,999';
          else if (parsedAmount >= 250000) mappedAmount = 'R250,000 - R499,999';
          else if (parsedAmount >= 100000) mappedAmount = 'R100,000 - R249,999';
          else if (parsedAmount >= 50000) mappedAmount = 'R50,000 - R99,999';
          else mappedAmount = 'Prefer not to say';
        }

        setFormData(prev => ({
          ...prev,
          calculatorType: source === 'compare-investments' ? 'Comparison Tool' : 'Product Calculator',
          amount: mappedAmount,
          term: paramTerm || prev.term,
          interestType: paramInterest || prev.interestType,
          productName: paramProduct || prev.productName,
        }));
      }
`;

// Wait, the current useEffect only checks for `source === 'compare-investments'`. Let's just find the whole block inside useEffect.
const regexFindUseEffect = /const source = searchParams\.get\('source'\);[\s\S]*?if \(source === 'compare-investments'\) \{[\s\S]*?\}\s+\}\s+\}, \[searchParams\]\);/g;

contactContent = contactContent.replace(regexFindUseEffect, `const source = searchParams.get('source');
      const paramAmount = searchParams.get('amount');
      const paramTerm = searchParams.get('term');
      const paramInterest = searchParams.get('interest');
      const paramProduct = searchParams.get('product');

      if (source === 'compare-investments' || source === 'product-calculator') {
        const parsedAmount = paramAmount ? parseInt(paramAmount) : null;
        let mappedAmount = 'Prefer not to say';
        
        if (parsedAmount !== null) {
          if (parsedAmount >= 1000000) mappedAmount = 'R1,000,000+';
          else if (parsedAmount >= 500000) mappedAmount = 'R500,000 - R999,999';
          else if (parsedAmount >= 250000) mappedAmount = 'R250,000 - R499,999';
          else if (parsedAmount >= 100000) mappedAmount = 'R100,000 - R249,999';
          else if (parsedAmount >= 50000) mappedAmount = 'R50,000 - R99,999';
        }

        setFormData(prev => ({
          ...prev,
          calculatorType: source === 'compare-investments' ? 'Comparison Tool' : 'Product Calculator',
          amount: mappedAmount,
          term: paramTerm || prev.term,
          interestType: paramInterest || prev.interestType,
          productName: paramProduct || prev.productName,
        }));
      }
    }
  }, [searchParams]);`);


// 2. Update handleChange to clear R50,000 - R99,999 if not offshore
const regexFindHandleChange = /const handleChange = \(e: React\.ChangeEvent<HTMLInputElement \| HTMLSelectElement \| HTMLTextAreaElement>\) => \{[\s\S]*?setFormData\(prev => \(\{ \.\.\.prev, \[name\]: value \}\)\);\s+\}/g;

contactContent = contactContent.replace(regexFindHandleChange, `const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => {
        const newData = { ...prev, [name]: value };
        if (name === 'interest') {
          const isOffshore = value === 'Offshore Global Option';
          if (!isOffshore && newData.amount === 'R50,000 - R99,999') {
            newData.amount = 'Prefer not to say';
          }
        }
        return newData;
      });
    }`);

// 3. Update the dropdown rendering
const dropdownRegex = /<select \s+id="amount"[\s\S]*?<\/select>/g;

const newDropdown = `{formData.interest === 'Offshore Global Option' ? (
                          <select 
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Prefer not to say">Prefer not to say</option>
                            <option value="R50,000 - R99,999">R50,000 - R99,999</option>
                            <option value="R100,000 - R249,999">R100,000 - R249,999</option>
                            <option value="R250,000 - R499,999">R250,000 - R499,999</option>
                            <option value="R500,000 - R999,999">R500,000 - R999,999</option>
                            <option value="R1,000,000+">R1,000,000+</option>
                          </select>
                          ) : (
                          <select 
                            id="amount"
                            name="amount"
                            value={formData.amount}
                            onChange={handleChange}
                            className="w-full bg-soft-grey border border-border-grey p-4 font-sans text-ink focus:outline-none focus:border-navy transition-colors appearance-none cursor-pointer"
                          >
                            <option value="Prefer not to say">Prefer not to say</option>
                            <option value="R100,000 - R249,999">R100,000 - R249,999</option>
                            <option value="R250,000 - R499,999">R250,000 - R499,999</option>
                            <option value="R500,000 - R999,999">R500,000 - R999,999</option>
                            <option value="R1,000,000+">R1,000,000+</option>
                          </select>
                          )}`;

contactContent = contactContent.replace(dropdownRegex, newDropdown);

// 4. Update the helper text
// The helper text should be placed under the select div.
const dropdownContainerRegex = /(<div className="relative">\s*\{formData\.interest === 'Offshore Global Option' \? \([\s\S]*?<\/div>\s*<\/div>)/g;

contactContent = contactContent.replace(dropdownContainerRegex, `$1
                        {formData.interest === 'Offshore Global Option' ? (
                          <p className="text-xs text-muted-blue mt-2 font-sans">Minimum investment for Offshore Global is R50,000.</p>
                        ) : (
                          <p className="text-xs text-muted-blue mt-2 font-sans">Minimum investment for this option is R100,000.</p>
                        )}`);

fs.writeFileSync('components/Contact.tsx', contactContent, 'utf8');
console.log('Fixed Contact.tsx');
