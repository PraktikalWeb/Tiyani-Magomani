"use client";

import { usePathname } from 'next/navigation';
import { HomeStyleFooter } from './HomeStyleChrome';

export default function Footer() {
  const pathname = usePathname();

  if (pathname === '/' || pathname.startsWith('/investments/')) {
    return null;
  }

  return <HomeStyleFooter />;
}
