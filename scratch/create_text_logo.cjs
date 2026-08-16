const path = require('path');

async function createTextLogo() {
  let sharp;
  try {
    sharp = require('sharp');
  } catch (e) {
    sharp = require('next/node_modules/sharp');
  }

  // A wide SVG to hold the text logo, matching the Header style (Navy color)
  // We use a standard serif fallback (Georgia/Times) since the system might not have the custom web font
  const svgText = `
    <svg width="600" height="120" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="80" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="#061D31" font-weight="normal">Tiyani Magomani</text>
    </svg>
  `;

  const pngPath = path.join(__dirname, '../public/tiyani-logo.png');

  await sharp(Buffer.from(svgText))
    .png()
    .toFile(pngPath);

  console.log('Created text logo at', pngPath);
}

createTextLogo().catch(console.error);
