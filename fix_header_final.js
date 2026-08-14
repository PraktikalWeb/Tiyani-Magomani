import fs from 'fs';
import { execSync } from 'child_process';

// Get original from git
let content = execSync('git show HEAD:src/components/Header.tsx').toString();

// Apply nextjs conversions
content = content.replace(/import { Link([^}]*)} from 'react-router-dom';/g, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
content = content.replace(/import {([^}]*)} from 'react-router-dom';/g, (match, imports) => {
    imports = imports.replace(/useNavigate/g, "useRouter").replace(/useLocation/g, "usePathname");
    return `import {${imports}} from 'next/navigation';`;
});
content = content.replace(/const location = useLocation\(\);/g, "const pathname = usePathname();");
content = content.replace(/location\.pathname/g, "pathname");
content = content.replace(/(<Link[^>]*?)\bto=/gs, "$1href=");
content = content.replace(/from 'framer-motion'/g, "from 'motion/react'");

if (!content.includes('import { usePathname }')) {
    content = content.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
}

content = '"use client";\n' + content;

// Remove calculator link from navLinks
content = content.replace(/\{ name: 'Calculator', path: '\/calculator' \},\n\s*/g, "");

fs.writeFileSync('components/Header.tsx', content);
console.log('Fixed Header.tsx completely');
