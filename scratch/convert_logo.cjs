const fs = require('fs');
const path = require('path');

async function convert() {
  try {
    let sharp;
    try {
      sharp = require('sharp');
    } catch(e) {
      // Try to find it in next's node_modules
      sharp = require('next/node_modules/sharp');
    }
    
    const svgPath = path.join(__dirname, '../app/icon.svg');
    const pngPath = path.join(__dirname, '../public/tiyani-logo.png');
    
    await sharp(svgPath)
      .resize(512, 512)
      .png()
      .toFile(pngPath);
      
    console.log('Successfully converted icon.svg to tiyani-logo.png');
  } catch (err) {
    console.error('Error converting logo:', err);
    process.exit(1);
  }
}

convert();
