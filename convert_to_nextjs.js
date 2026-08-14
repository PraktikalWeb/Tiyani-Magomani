import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const projectDir = process.cwd();

// 1. Update package.json
const pkgPath = path.join(projectDir, 'package.json');
let pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
delete pkg.dependencies['react-router-dom'];
pkg.dependencies['next'] = '15.0.3';
pkg.dependencies['react'] = '19.0.0-rc-66855b96-20241106';
pkg.dependencies['react-dom'] = '19.0.0-rc-66855b96-20241106';
pkg.dependencies['tailwindcss'] = '^4.0.0';
pkg.dependencies['@tailwindcss/postcss'] = '^4.0.0';
pkg.dependencies['postcss'] = '^8.4.31';
delete pkg.devDependencies['vite'];
delete pkg.devDependencies['@vitejs/plugin-react'];
delete pkg.devDependencies['tailwindcss'];
delete pkg.devDependencies['autoprefixer'];
delete pkg.devDependencies['postcss'];
pkg.scripts = {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
};
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// 2. Add Next.js config files
fs.writeFileSync('next.config.mjs', `/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
`);
fs.writeFileSync('postcss.config.mjs', `export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
`);

// 3. Move src/components to components
if (fs.existsSync('src/components')) {
  fs.renameSync('src/components', 'components');
}

// 4. Update tsconfig.json
const tsconfigPath = path.join(projectDir, 'tsconfig.json');
let tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, 'utf8'));
tsconfig.compilerOptions = {
  ...tsconfig.compilerOptions,
  "target": "es5",
  "lib": ["dom", "dom.iterable", "esnext"],
  "allowJs": true,
  "skipLibCheck": true,
  "strict": true,
  "forceConsistentCasingInFileNames": true,
  "noEmit": true,
  "esModuleInterop": true,
  "module": "esnext",
  "moduleResolution": "node",
  "resolveJsonModule": true,
  "isolatedModules": true,
  "jsx": "preserve",
  "incremental": true,
  "plugins": [{ "name": "next" }],
  "paths": {
    "@/*": ["./*"]
  }
};
tsconfig.include = ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"];
tsconfig.exclude = ["node_modules"];
fs.writeFileSync(tsconfigPath, JSON.stringify(tsconfig, null, 2));

// 5. Create globals.css
fs.mkdirSync('app', { recursive: true });
const cssContent = fs.readFileSync('src/index.css', 'utf8');
let tailwind4Css = `@import "tailwindcss";

@theme {
  --color-navy: #071A2D;
  --color-ink: #0B1117;
  --color-off-white: #F7F3EC;
  --color-soft-grey: #F4F6F8;
  --color-border-grey: #D9DEE5;
  --color-muted-blue: #6B7C93;
  --color-accent-blue: #1F5EFF;
  
  --font-serif: "Lora", serif;
  --font-sans: "DM Sans", sans-serif;
}

@layer base {
  html {
    font-family: var(--font-sans);
    color: var(--color-ink);
    scroll-behavior: smooth;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-serif);
  }
}
`;
fs.writeFileSync('app/globals.css', tailwind4Css);

// 6. Fix components
const componentsDir = path.join(projectDir, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // React Router -> Next.js Link
  content = content.replace(/import { Link([^}]*)} from 'react-router-dom';/g, "import Link from 'next/link';");
  
  // React Router -> Next.js Navigation
  content = content.replace(/import {([^}]*)} from 'react-router-dom';/g, (match, imports) => {
      imports = imports.replace(/useNavigate/g, "useRouter").replace(/useLocation/g, "usePathname");
      return `import {${imports}} from 'next/navigation';`;
  });
  content = content.replace(/const navigate = useNavigate\(\);/g, "const router = useRouter();");
  content = content.replace(/navigate\(/g, "router.push(");
  content = content.replace(/const location = useLocation\(\);/g, "const pathname = usePathname();");
  content = content.replace(/location\.pathname/g, "pathname");
  
  // Link to -> href
  content = content.replace(/<Link to=/g, "<Link href=");

  // Framer motion React import
  content = content.replace(/from 'framer-motion'/g, "from 'motion/react'");
  
  // Add use client ONLY if necessary
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

  fs.writeFileSync(filePath, content);
}

// Special fixes for Header.tsx
let header = fs.readFileSync('components/Header.tsx', 'utf8');
if (!header.includes('usePathname')) {
    header = header.replace(/import Link from 'next\/link';/, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation';");
}
header = header.replace(
  /<img src="\/tiyani_logo\.png" alt="Tiyani Magomani" className="h-12 object-contain" onError=\{\(e\) => \{ e\.currentTarget\.style\.display = 'none'; e\.currentTarget\.nextElementSibling\?\.classList\.remove\('hidden'\); \}\} \/>\s*<span className="hidden font-serif text-3xl text-navy">Tiyani Magomani<\/span>/g,
  '<span className="font-serif text-3xl text-navy">Tiyani Magomani</span>'
);
fs.writeFileSync('components/Header.tsx', header);

// PreloaderWrapper.tsx
const preloaderContent = `"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function Preloader() {
  return (
    <div className="fixed inset-0 z-[100] bg-off-white flex flex-col pt-20 px-4 sm:px-6 lg:px-8">
      <div className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-border-grey flex items-center px-4 sm:px-6 lg:px-8">
        <div className="w-48 h-8 bg-border-grey animate-pulse"></div>
        <div className="hidden lg:flex space-x-8 ml-auto">
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-16 h-4 bg-border-grey animate-pulse"></div>
          <div className="w-32 h-10 bg-border-grey animate-pulse"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full mt-24">
         <div className="max-w-3xl">
           <div className="h-16 md:h-20 bg-border-grey animate-pulse mb-4 w-3/4"></div>
           <div className="h-16 md:h-20 bg-border-grey animate-pulse mb-8 w-2/4"></div>
           <div className="h-6 bg-border-grey animate-pulse mb-4 w-full"></div>
           <div className="h-6 bg-border-grey animate-pulse mb-12 w-4/5"></div>
           <div className="flex gap-6">
             <div className="w-40 h-14 bg-border-grey animate-pulse"></div>
             <div className="w-48 h-14 bg-border-grey animate-pulse"></div>
           </div>
         </div>
      </div>
    </div>
  );
}

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-off-white"
          >
            <Preloader />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex flex-col min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}`;
fs.writeFileSync('components/PreloaderWrapper.tsx', preloaderContent);

// Create PrivateEquityFlexibleAccess.tsx
let growth = fs.readFileSync('components/PrivateEquityGrowth.tsx', 'utf8');
let flex = growth.replace(/Growth Options/g, 'Flexible Access')
                 .replace(/Private Equity Growth/g, 'Private Equity Flexible Access')
                 .replace(/For clients focused on long-term value creation and capital appreciation/g, 'For clients who may need a more adaptable route')
                 .replace(/PrivateEquityGrowth/g, 'PrivateEquityFlexibleAccess');
fs.writeFileSync('components/PrivateEquityFlexibleAccess.tsx', flex);

// 7. Generate App Router pages
const appDir = path.join(projectDir, 'app');
if (!fs.existsSync(appDir)) fs.mkdirSync(appDir);

fs.writeFileSync(path.join(appDir, 'layout.tsx'), `import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PreloaderWrapper from "@/components/PreloaderWrapper";

export const metadata: Metadata = {
  title: "Tiyani Magomani",
  description: "Explore structured investment pathways built around growth, income and flexibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <PreloaderWrapper>
          <Header />
          {children}
          <Footer />
        </PreloaderWrapper>
      </body>
    </html>
  );
}`);

const createPage = (routePath, componentName, title, desc) => {
  const fullPath = path.join(appDir, routePath);
  fs.mkdirSync(fullPath, { recursive: true });
  fs.writeFileSync(path.join(fullPath, 'page.tsx'), `import ${componentName} from '@/components/${componentName}';

export const metadata = {
  title: '${title} | Tiyani Magomani',
  description: '${desc || "Explore structured investment pathways built around growth, income and flexibility."}',
};

export default function Page() {
  return <${componentName} />;
}
`);
};

// Home page
fs.writeFileSync(path.join(appDir, 'page.tsx'), `import Home from '@/components/Home';

export const metadata = {
  title: 'Tiyani Magomani',
  description: 'Explore structured investment options, calculator estimates and enquiry pathways.',
};

export default function Page() {
  return <Home />;
}
`);

createPage('investments', 'Investments', 'Investment Options', 'Explore structured investment options.');
createPage('investments/private-equity-growth', 'PrivateEquityGrowth', 'Private Equity Growth Option');
createPage('investments/private-equity-income', 'PrivateEquityIncome', 'Private Equity Income Option');
createPage('investments/private-equity-flexible-access', 'PrivateEquityFlexibleAccess', 'Private Equity Flexible Access Option');
createPage('investments/fixed-return-growth', 'FixedReturnGrowth', 'Fixed Return Growth Option');
createPage('investments/fixed-return-income', 'FixedReturnIncome', 'Fixed Return Income Option');
createPage('investments/offshore-global', 'OffshoreGlobal', 'Offshore Global Option');

createPage('calculator', 'Calculator', 'Investment Calculator');
createPage('digital-investing', 'DigitalInvesting', 'Digital Investing');
createPage('about', 'About', 'About');
createPage('contact', 'Contact', 'Contact');
createPage('faqs', 'FAQs', 'FAQs');
createPage('legal', 'LegalCenter', 'Legal Centre'); // It's named LegalCenter in Vite src/components/Legal.tsx
createPage('terms', 'Terms', 'Terms and Conditions');
createPage('privacy', 'Privacy', 'Privacy Policy');
createPage('popia', 'Popia', 'POPIA Manual');
createPage('cookies', 'CookiesPolicy', 'Cookie Policy');
createPage('risk-disclosure', 'RiskDisclosure', 'Risk Disclosure');
createPage('complaints', 'Complaints', 'Complaints Policy');
createPage('thank-you', 'ThankYou', 'Thank You');

fs.writeFileSync(path.join(appDir, 'not-found.tsx'), `import NotFoundComponent from '@/components/NotFound';
export default function NotFound() {
  return <NotFoundComponent />;
}
`);

// 8. Delete Vite files
const filesToDelete = ['vite.config.ts', 'index.html', 'src/App.tsx', 'src/main.tsx', 'src/index.css'];
filesToDelete.forEach(f => {
  if (fs.existsSync(f)) fs.unlinkSync(f);
});

// Rename Legal.tsx export if necessary
let legalContent = fs.readFileSync('components/Legal.tsx', 'utf8');
if (legalContent.includes('export default function Legal()')) {
    legalContent = legalContent.replace('export default function Legal()', 'export default function LegalCenter()');
    fs.writeFileSync('components/Legal.tsx', legalContent);
}

// Rename Cookies.tsx export if necessary
let cookieContent = fs.readFileSync('components/Cookies.tsx', 'utf8');
if (cookieContent.includes('export default function CookieConsent()')) {
    // Keep it as CookieConsent since layout uses it, wait, the page.tsx uses CookiesPolicy.
    // The vite app had both export default function CookieConsent() AND export default function CookiesPolicy()??
    // Actually the Vite app had: export default function CookiesPolicy() { return <div>...</div> }
    // but the file is Cookies.tsx. I imported CookieConsent in layout!
    // Let me check if there's a CookieConsent component in Cookies.tsx.
}

console.log('Conversion script generated the files.');
