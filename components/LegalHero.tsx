import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import FadeIn from './FadeIn';

type LegalHeroLink = {
  href: string;
  label: string;
};

type LegalHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryLink: LegalHeroLink;
  secondaryLink: LegalHeroLink;
};

export default function LegalHero({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  primaryLink,
  secondaryLink,
}: LegalHeroProps) {
  return (
    <section className="tm-legal-hero">
      <div className="tm-legal-hero-inner">
        <FadeIn className="tm-legal-hero-copy">
          <span className="tm-legal-hero-eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="tm-legal-hero-actions">
            <Link href={primaryLink.href} className="tm-legal-hero-button tm-legal-hero-button-primary group">
              {primaryLink.label}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href={secondaryLink.href} className="tm-legal-hero-button tm-legal-hero-button-secondary">
              {secondaryLink.label}
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="tm-legal-hero-media">
          <img src={imageSrc} alt={imageAlt} />
        </FadeIn>
      </div>
    </section>
  );
}
