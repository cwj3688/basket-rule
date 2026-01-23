// scripts/update_signals_with_images.js
const fs = require('fs');
const path = require('path');

const signalsPath = path.resolve(__dirname, '../data/signals.ts');
const imagesRoot = path.resolve(__dirname, '../public/images/signals');

// Load signals file content
let fileContent = fs.readFileSync(signalsPath, 'utf-8');
// Extract signal objects using a simple regex (not perfect but works for this file)
const signalRegex = /{\s*id:\s*'([^']+)',\s*name:[^,]*,\s*category:\s*'([^']+)'[^}]*}/g;
let match;
const signals = [];
while ((match = signalRegex.exec(fileContent)) !== null) {
    signals.push({ id: match[1], category: match[2] });
}

const categoryMap = {
    'Scoring': 'scoring',
    'Game Clock': 'game-clock',
    'Substitution and Time-out': 'substitution-and-time-out',
    'Violations': 'violations',
    'Fouls': 'fouls',
    'Special Fouls': 'special-fouls',
    'Informative': 'informative',
};

// Rename images per category to match signal ids
for (const [catName, folder] of Object.entries(categoryMap)) {
    const dir = path.join(imagesRoot, folder);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpg|jpeg|png|gif)$/i)).sort();
    const signalsInCat = signals.filter(s => s.category === catName);
    for (let i = 0; i < Math.min(files.length, signalsInCat.length); i++) {
        const oldPath = path.join(dir, files[i]);
        const ext = path.extname(files[i]);
        const newPath = path.join(dir, `${signalsInCat[i].id}${ext}`);
        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${files[i]} -> ${signalsInCat[i].id}${ext} in ${folder}`);
    }
}

// Build new signals file with imageUrl field
let newContent = fileContent.replace(/export const signals: Signal\[\] = \[/, 'export const signals: Signal[] = [\n');
let outputLines = [];
let idx = 0;
let pos = 0;
while ((match = signalRegex.exec(fileContent)) !== null) {
    const before = fileContent.slice(pos, match.index);
    outputLines.push(before);
    const id = match[1];
    const category = match[2];
    const folder = categoryMap[category] || 'informative';
    const imageUrl = `/images/signals/${folder}/${id}.jpg`;
    // Insert imageUrl property after description (or before closing brace)
    const blockStart = match.index;
    const blockEnd = fileContent.indexOf('},', blockStart) + 1; // position of closing brace
    const block = fileContent.slice(blockStart, blockEnd);
    const withImage = block.replace(/}\s*$/, `,\n        imageUrl: '${imageUrl}'\n    }`);
    outputLines.push(withImage);
    pos = blockEnd;
    idx++;
}
outputLines.push(fileContent.slice(pos));
const finalContent = outputLines.join('');
fs.writeFileSync(signalsPath, finalContent, 'utf-8');
console.log('Updated signals.ts with imageUrl fields.');
