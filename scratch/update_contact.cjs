const fs = require('fs');
let content = fs.readFileSync('components/Contact.tsx', 'utf8');

// 1. Add Suspense and useSearchParams imports
content = content.replace("import { useRouter } from 'next/navigation';", "import { useRouter, useSearchParams } from 'next/navigation';\nimport { Suspense, useEffect } from 'react';");

// 2. Wrap Contact with Suspense
content = content.replace("export default function Contact() {", "function ContactContent() {");
content += "\n\nexport default function Contact() {\n  return (\n    <Suspense fallback={<div className=\"pt-32 text-center text-navy font-sans\">Loading form...</div>}>\n      <ContactContent />\n    </Suspense>\n  );\n}\n";

// 3. Update state to include honeypot, and context from params
const stateSectionRegex = /const \[formData, setFormData\] = useState\(\{[^}]+\}\);/s;
const newStateSection = `const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Not sure yet',
    amount: 'Prefer not to say',
    contactMethod: 'Phone call',
    message: '',
    terms: false,
    companyWebsite: '', // honeypot
    calculatorType: '',
    term: '',
    interestType: '',
    productName: '',
    calculatedResult: ''
  });

  useEffect(() => {
    if (searchParams) {
      const source = searchParams.get('source');
      const paramAmount = searchParams.get('amount');
      const paramTerm = searchParams.get('term');
      const paramInterest = searchParams.get('interest');
      const paramProduct = searchParams.get('product');

      if (source === 'compare-investments') {
        setFormData(prev => ({
          ...prev,
          calculatorType: 'Comparison Tool',
          amount: paramAmount ? \`R\${parseInt(paramAmount).toLocaleString('en-US')}\` : prev.amount,
          term: paramTerm || prev.term,
          interestType: paramInterest || prev.interestType,
          productName: paramProduct || prev.productName,
        }));
      }
    }
  }, [searchParams]);`;
content = content.replace(stateSectionRegex, newStateSection);

// 4. Update handleSubmit
const submitRegex = /const handleSubmit = \(e: React\.FormEvent\) => \{[\s\S]*?router\.push\('\/thank-you'\);\n\s*\}, 1000\);\n\s*\};/;
const newSubmit = `const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.companyWebsite) {
      // Honeypot tripped
      router.push('/thank-you');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone || !formData.interest || !formData.contactMethod || !formData.terms) {
      setError('Please complete all required fields before submitting your enquiry.');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submissionType: 'contact_enquiry',
          sourcePage: window.location.href,
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit');
      }

      router.push('/thank-you');
    } catch (err: any) {
      setError('Something went wrong while sending your enquiry. Please try again.');
      setIsSubmitting(false);
    }
  };`;
content = content.replace(submitRegex, newSubmit);

// 5. Add Honeypot field HTML just before the terms checkbox or at the top of the form
const honeypotHtml = `
                    <div className="hidden" aria-hidden="true">
                      <label htmlFor="companyWebsite">Company Website</label>
                      <input 
                        type="text" 
                        id="companyWebsite"
                        name="companyWebsite"
                        value={formData.companyWebsite}
                        onChange={handleChange}
                        tabIndex={-1}
                        autoComplete="off"
                      />
                    </div>
`;
content = content.replace(/<div className="flex items-start">/g, honeypotHtml + '                    <div className="flex items-start">');

// 6. Update Button text for loading
// It already has: {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
content = content.replace(/{isSubmitting \? 'Submitting\.\.\.' : 'Submit Enquiry'}/g, "{isSubmitting ? 'Sending...' : 'Submit Enquiry'}");

fs.writeFileSync('components/Contact.tsx', content, 'utf8');
console.log('Contact.tsx updated successfully');
