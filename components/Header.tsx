"use client";

import { usePathname } from 'next/navigation';
import { HomeStyleHeader } from './HomeStyleChrome';

export default function Header() {
  const pathname = usePathname();

  if (pathname === '/' || pathname.startsWith('/investments/')) {
    return null;
  }

  return <HomeStyleHeader />;
}
