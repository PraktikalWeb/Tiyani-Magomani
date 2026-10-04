import Home from '@/components/Home';
import { IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google';

const homeDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-home-display',
});

const homeBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-home-body',
});

const homeMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-home-mono',
});

export const metadata = {
  title: 'Tiyani Magomani — Investing, Built for Right Now',
  description: 'Modern, accessible investment products for individuals and businesses.',
};

export default function Page() {
  return (
    <div className={`${homeDisplay.variable} ${homeBody.variable} ${homeMono.variable}`}>
      <Home />
    </div>
  );
}
