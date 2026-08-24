import { ProductFigure } from '../src/lib/investment-products';
import { FadeInStagger, FadeInStaggerItem } from './FadeIn';

function gridClassName(figures: ProductFigure[]) {
  if (figures.length === 5) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:items-stretch gap-6 mb-16';
  if (figures.length === 6) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16';
  if (figures.length === 4) return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-16';
  return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16';
}

function cardClassName(figure: ProductFigure, index: number, figures: ProductFigure[]) {
  const base = 'bg-soft-grey border border-border-grey p-6 flex flex-col justify-center';

  if (figures.length !== 5) return base;
  if (figure.label === 'Where We Invest') return `${base} sm:col-span-2 lg:col-span-8 lg:h-full`;
  if (index < 3 || figure.label === 'Risk Level') return `${base} lg:col-span-4 lg:h-full`;

  return `${base} lg:col-span-4 lg:h-full`;
}

export default function ProductFiguresGrid({ figures }: { figures: ProductFigure[] }) {
  return (
    <FadeInStagger className={gridClassName(figures)}>
      {figures.map((figure, index) => (
        <FadeInStaggerItem key={`${figure.label}-${index}`} className={cardClassName(figure, index, figures)}>
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-blue block mb-2">{figure.label}</span>
          <span className="text-2xl font-serif text-ink">{figure.value}</span>
          {figure.subtext && <span className="text-sm font-sans text-muted-blue mt-2">{figure.subtext}</span>}
        </FadeInStaggerItem>
      ))}
    </FadeInStagger>
  );
}
