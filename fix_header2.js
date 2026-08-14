import fs from 'fs';
let content = fs.readFileSync('components/Header.tsx', 'utf8');
if (!content.includes('import { usePathname }')) {
    content = content.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
    fs.writeFileSync('components/Header.tsx', content);
}
