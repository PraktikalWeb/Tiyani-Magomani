const fs = require('fs');
const { execSync } = require('child_process');

execSync('git show HEAD:src/components/Footer.tsx > components/Footer.tsx');
let content = fs.readFileSync('components/Footer.tsx', 'utf8');

// nextjs link fix
content = content.replace(/import { Link } from 'react-router-dom';/g, "import Link from 'next/link';");
content = content.replace(/(<Link[^>]*?)\bto=/gs, "$1href=");

// fix logo
content = content.replace(/<img src="\/tiyani_logo\.png"[^>]*\/>\s*<span className="hidden /g, '<span className="');

content = '"use client";\n' + content;

fs.writeFileSync('components/Footer.tsx', content);
console.log('Footer fixed');
