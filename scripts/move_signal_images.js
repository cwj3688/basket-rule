// scripts/move_signal_images.js
const fs = require('fs');
const path = require('path');

const signalsFile = path.resolve(__dirname, '../data/signals.ts');
const imagesDir = path.resolve(__dirname, '../public/images/signals');

// Read signals file
const content = fs.readFileSync(signalsFile, 'utf-8');
// Extract signal objects in order
const signalRegex = /{\s*id:\s*'([^']+)',\s*name:[^,]*,\s*category:\s*'([^']+)'[^}]*}/g;
let match;
const signals = [];
while ((match = signalRegex.exec(content)) !== null) {
    signals.push({ id: match[1], category: match[2] });
}

// Get list of image files (jpg, png, gif)
let images = fs.readdirSync(imagesDir).filter(f => f.match(/\.(jpg|jpeg|png|gif)$/i));
// Sort images to have deterministic order
images.sort();

if (images.length < signals.length) {
    console.error('Not enough images to assign to signals');
    process.exit(1);
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

signals.forEach((signal, idx) => {
    const img = images[idx];
    const targetDir = path.join(imagesDir, categoryMap[signal.category] || 'informative');
    const src = path.join(imagesDir, img);
    const dest = path.join(targetDir, img);
    fs.renameSync(src, dest);
    console.log(`Moved ${img} -> ${categoryMap[signal.category]}`);
});

console.log('All images have been moved according to signal categories.');
