import fs from 'fs';
import { execSync } from 'child_process';

const original = execSync('git show HEAD:src/components/Contact.tsx').toString();

let content = original;
content = content.replace(/import { Link([^}]*)} from 'react-router-dom';/g, "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';");
content = content.replace(/import {([^}]*)} from 'react-router-dom';/g, (match, imports) => {
    imports = imports.replace(/useNavigate/g, "useRouter").replace(/useLocation/g, "usePathname");
    return `import {${imports}} from 'next/navigation';`;
});
content = content.replace(/const navigate = useNavigate\(\);/g, "const router = useRouter();");
content = content.replace(/navigate\(/g, "router.push(");
content = content.replace(/<Link to=/g, "<Link href=");
content = content.replace(/from 'framer-motion'/g, "from 'motion/react'");

if (!content.includes('import { useRouter }')) {
    content = content.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport { useRouter } from 'next/navigation';");
}

const requiresClient = content.includes('useState') || 
                       content.includes('useEffect') || 
                       content.includes('useRef') || 
                       content.includes('usePathname') || 
                       content.includes('useRouter') || 
                       content.includes('motion/react') || 
                       content.includes('framer-motion') ||
                       content.includes('onClick=') ||
                       content.includes('onSubmit=') ||
                       content.includes('onChange=');
if (requiresClient) {
  content = '"use client";\n' + content;
}

fs.writeFileSync('components/Contact.tsx', content);
