// scripts/restore_signal_images.js
const fs = require('fs');
const path = require('path');

const imagesRoot = path.resolve(__dirname, '../public/images/signals');

// Mapping from original filename to new location (generated during previous rename)
const restoreMap = [
    // Scoring
    { original: 'img21.jpg', newPath: 'scoring/1-point.jpg' },
    { original: 'img22.jpg', newPath: 'scoring/2-points.jpg' },
    { original: 'img23.jpg', newPath: 'scoring/3-points-attempt.jpg' },
    { original: 'img24.jpg', newPath: 'scoring/3-points-successful.jpg' },
    { original: 'img25.jpg', newPath: 'scoring/cancel-score.jpg' },
    // Game Clock
    { original: 'img26.jpg', newPath: 'game-clock/stop-the-clock.jpg' },
    { original: 'img27.jpg', newPath: 'game-clock/stop-the-clock-foul.jpg' },
    { original: 'img30.jpg', newPath: 'game-clock/start-clock.jpg' },
    { original: 'img31.jpg', newPath: 'game-clock/shot-clock-reset.jpg' },
    // Substitution & Time-out
    { original: 'img32.jpg', newPath: 'substitution-and-time-out/substitution.jpg' },
    { original: 'img33.jpg', newPath: 'substitution-and-time-out/beckoning-in.jpg' },
    { original: 'img34.jpg', newPath: 'substitution-and-time-out/charged-timeout.jpg' },
    { original: 'img35.jpg', newPath: 'substitution-and-time-out/media-timeout.jpg' },
    // Violations
    { original: 'img36.jpg', newPath: 'violations/travelling.jpg' },
    { original: 'img37.jpg', newPath: 'violations/double-dribble.jpg' },
    { original: 'img38.jpg', newPath: 'violations/carrying.jpg' },
    { original: 'img39.jpg', newPath: 'violations/3-seconds.jpg' },
    { original: 'img42.jpg', newPath: 'violations/5-seconds.jpg' },
    { original: 'img43.jpg', newPath: 'violations/8-seconds.jpg' },
    { original: 'img44.jpg', newPath: 'violations/24-seconds.jpg' },
    { original: 'img45.jpg', newPath: 'violations/ball-return.jpg' },
    { original: 'img46.jpg', newPath: 'violations/foot-ball.jpg' },
    { original: 'img47.jpg', newPath: 'violations/out-of-bounds.jpg' },
    { original: 'img48.jpg', newPath: 'violations/jump-ball.jpg' },
    // Fouls
    { original: 'img49.jpg', newPath: 'fouls/holding.jpg' },
    { original: 'img50.jpg', newPath: 'fouls/blocking.jpg' },
    { original: 'img53.jpg', newPath: 'fouls/pushing.jpg' },
    { original: 'img54.jpg', newPath: 'fouls/charging-with-ball.jpg' },
    { original: 'img55.jpg', newPath: 'fouls/illegal-contact-hand.jpg' },
    { original: 'img56.jpg', newPath: 'fouls/hooking.jpg' },
    { original: 'img57.jpg', newPath: 'fouls/elbow.jpg' },
    { original: 'img58.jpg', newPath: 'fouls/hit-head.jpg' },
    // Special Fouls
    { original: 'img61.jpg', newPath: 'special-fouls/double-foul.jpg' },
    { original: 'img62.jpg', newPath: 'special-fouls/technical-foul.jpg' },
    { original: 'img63.jpg', newPath: 'special-fouls/unsportsmanlike-foul.jpg' },
];

restoreMap.forEach(entry => {
    const src = path.join(imagesRoot, entry.newPath);
    const dest = path.join(imagesRoot, entry.original);
    if (fs.existsSync(src)) {
        fs.renameSync(src, dest);
        console.log(`Restored ${entry.original} from ${entry.newPath}`);
    } else {
        console.warn(`Source not found: ${src}`);
    }
});

console.log('All possible images have been restored to their original filenames in the root signals folder.');
