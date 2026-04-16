import fs from 'fs';

const filePath = 'e:/My Projects/eae-com/src/data/products.ts';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Remove from interface
content = content.replace(/  gallery: string\[\];\n/, '');

// 2. Remove from products array
// This regex tries to find 'gallery: [ ... ],' or 'gallery: [...],' or 'gallery: '...', '
// Note: We need to handle multi-line arrays.
// A common pattern is gallery: [ (anything) ],
content = content.replace(/    gallery: \[[^\]]*\],\n/g, '');

fs.writeFileSync(filePath, content);
console.log('Finished removing gallery field.');
