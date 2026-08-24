"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export interface ProductCalculatorEnquiryContext {
  productId: string;
  productName: string;
  sourcePage: string;
  initialInvestment: string;
  selectedTerm: string;
  selectedMode?: string;
  selectedRate: string;
  calculationType: string;
  resultSummary: string;
  resultRows: Array<{ label: string; value: string }>;
}

export default function ProductCalculatorEnquiryForm({ context }: { context: ProductCalculatorEnquiryContext }) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', contactMethod: 'Phone call', message: '', companyWebsite: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formData.companyWebsite) {
      router.push('/thank-you');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          terms: true,
          interest: context.productName,
          amount: context.initialInvestment,
          submissionType: 'product_calculator_enquiry',
          productName: context.productName,
          productId: context.productId,
          sourcePage: context.sourcePage,
          term: context.selectedTerm,
          selectedMode: context.selectedMode,
          selectedRate: context.selectedRate,
          calculationType: context.calculationType,
          calculatedResult: context.resultSummary,
          resultRows: context.resultRows,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.emailIds?.internal || !data.emailIds?.confirmation) throw new Error();
      router.push('/thank-you');
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 border border-border-grey bg-white p-6 md:p-8 space-y-5">
      <div>
        <span className="text-xs font-sans uppercase tracking-widest text-muted-blue block mb-3">Request follow-up on this estimate</span>
        <h3 className="font-serif text-2xl text-ink">Discuss this investment option</h3>
        <p className="mt-2 text-sm font-sans text-muted-blue">Submit your details and the team will contact you about this investment option.</p>
      </div>
      {status === 'error' && <p className="border border-red-200 bg-red-50 p-4 text-sm font-sans text-red-700">Something went wrong while sending your enquiry. Please try again.</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <label className="text-xs font-sans uppercase tracking-widest text-muted-blue">Full Name *
          <input required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="mt-2 w-full border border-border-grey bg-soft-grey p-3 text-base normal-case tracking-normal text-ink focus:outline-none focus:border-navy" />
        </label>
        <label className="text-xs font-sans uppercase tracking-widest text-muted-blue">Email *
          <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="mt-2 w-full border border-border-grey bg-soft-grey p-3 text-base normal-case tracking-normal text-ink focus:outline-none focus:border-navy" />
        </label>
        <label className="text-xs font-sans uppercase tracking-widest text-muted-blue">Phone *
          <input required type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="mt-2 w-full border border-border-grey bg-soft-grey p-3 text-base normal-case tracking-normal text-ink focus:outline-none focus:border-navy" />
        </label>
        <label className="text-xs font-sans uppercase tracking-widest text-muted-blue">Preferred Contact Method
          <select value={formData.contactMethod} onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })} className="mt-2 w-full border border-border-grey bg-soft-grey p-3 text-base normal-case tracking-normal text-ink focus:outline-none focus:border-navy">
            <option>Phone call</option><option>Email</option><option>WhatsApp</option>
          </select>
        </label>
      </div>
      <label className="block text-xs font-sans uppercase tracking-widest text-muted-blue">Message <span className="normal-case tracking-normal">(optional)</span>
        <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="mt-2 w-full border border-border-grey bg-soft-grey p-3 text-base normal-case tracking-normal text-ink focus:outline-none focus:border-navy" />
      </label>
      <input name="companyWebsite" aria-hidden="true" tabIndex={-1} autoComplete="off" className="hidden" value={formData.companyWebsite} onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })} />
      <button disabled={isSubmitting} className="bg-navy px-7 py-4 text-[13px] font-sans font-bold uppercase tracking-wider text-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-70">{isSubmitting ? 'Sending...' : 'Submit Enquiry'}</button>
    </form>
  );
}
