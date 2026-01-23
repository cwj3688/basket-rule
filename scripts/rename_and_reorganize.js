const fs = require('fs');
const path = require('path');

const signalsDir = path.resolve(__dirname, '../public/images/signals');

// Mapping of current relationships
// For files already in subdirectories, we just rename them.
// For files in root, we move and rename them.

const operations = [
    // Game Clock (already in subfolder)
    { dir: 'game-clock', old: 'img21.jpg', new: 'stop-the-clock.jpg' },
    { dir: 'game-clock', old: 'img22.jpg', new: 'stop-the-clock-foul.jpg' },
    { dir: 'game-clock', old: 'img23.jpg', new: 'start-clock.jpg' },

    // Scoring (already in subfolder)
    { dir: 'scoring', old: 'img24.jpg', new: '1-point.jpg' },
    { dir: 'scoring', old: 'img25.jpg', new: '2-points.jpg' },
    { dir: 'scoring', old: 'img26.jpg', new: '3-points-attempt.jpg' },
    { dir: 'scoring', old: 'img26.jpg', new: '3-points-successful.jpg', copy: true }, // DUPLICATE
    { dir: 'scoring', old: 'img25.jpg', new: 'cancel-score.jpg', copy: true }, // Check if img25 is cancel score? 
    // Wait, user table says: 
    // 5: 2 POINTS -> img25
    // 9: CANCEL SCORE -> img34 (Wait, user table says img34 for cancel score)
    // Let's re-verify user table vs my finding.

    // User table:
    // 4: 1 POINT -> img24
    // 5: 2 POINTS -> img25
    // 6: 3 POINTS (Attempt) -> img26
    // 7: 3 POINTS (Successful) -> img26 (Duplicate)
    // 12: CANCEL SCORE -> img34 (Informative category in user table, but user moved it to Informative folder?)
    // Let's check where img34 is.
];

// Let's refine the list based on User Table + Directory Listing + Missing info
// I need to find where img30, img31... are.

// Helper to find file
function findFile(filename) {
    const dirs = ['game-clock', 'scoring', 'substitution-and-time-out', 'informative', 'violations', 'number-of-players', 'fouls', 'special-fouls', 'free-throw-penalty-administration', 'free-throw-administration'];
    for (const d of dirs) {
        if (fs.existsSync(path.join(signalsDir, d, filename))) {
            return path.join(d, filename);
        }
    }
    if (fs.existsSync(path.join(signalsDir, filename))) {
        return filename;
    }
    return null;
}

const plan = [
    // Game Clock
    { id: 'stop-the-clock', targetDir: 'game-clock', targetName: 'stop-the-clock.jpg', source: 'img21.jpg' },
    { id: 'stop-the-clock-foul', targetDir: 'game-clock', targetName: 'stop-the-clock-foul.jpg', source: 'img22.jpg' },
    { id: 'start-clock', targetDir: 'game-clock', targetName: 'start-clock.jpg', source: 'img23.jpg' },
    { id: 'shot-clock-reset', targetDir: 'informative', targetName: 'shot-clock-reset.jpg', source: 'img37.jpg' }, // User table: 15 SHOT CLOCK RESET -> img37 (Informative)

    // Scoring
    { id: '1-point', targetDir: 'scoring', targetName: '1-point.jpg', source: 'img24.jpg' },
    { id: '2-points', targetDir: 'scoring', targetName: '2-points.jpg', source: 'img25.jpg' },
    { id: '3-points-attempt', targetDir: 'scoring', targetName: '3-points-attempt.jpg', source: 'img26.jpg' },
    { id: '3-points-successful', targetDir: 'scoring', targetName: '3-points-successful.jpg', source: 'img26.jpg', copy: true },
    { id: 'cancel-score', targetDir: 'informative', targetName: 'cancel-score.jpg', source: 'img34.jpg' }, // User table: 12 CANCEL SCORE -> img34 (Informative)

    // Substitution
    { id: 'substitution', targetDir: 'substitution-and-time-out', targetName: 'substitution.jpg', source: 'img30.jpg' },
    { id: 'beckoning-in', targetDir: 'substitution-and-time-out', targetName: 'beckoning-in.jpg', source: 'img31.jpg' },
    { id: 'charged-timeout', targetDir: 'substitution-and-time-out', targetName: 'charged-timeout.jpg', source: 'img32.jpg' },
    { id: 'media-timeout', targetDir: 'substitution-and-time-out', targetName: 'media-timeout.jpg', source: 'img33.jpg' },

    // Informative
    { id: 'visible-count', targetDir: 'informative', targetName: 'visible-count.jpg', source: 'img35.jpg' },
    { id: 'communication', targetDir: 'informative', targetName: 'communication.jpg', source: 'img36.jpg' },
    { id: 'direction-of-play', targetDir: 'informative', targetName: 'direction-of-play.jpg', source: 'img38.jpg' },
    { id: 'held-ball', targetDir: 'informative', targetName: 'held-ball.jpg', source: 'img39.jpg' },

    // Violations
    { id: 'travelling', targetDir: 'violations', targetName: 'travelling.jpg', source: 'img42.jpg' },
    { id: 'double-dribble', targetDir: 'violations', targetName: 'double-dribble.jpg', source: 'img43.jpg' },
    { id: 'carrying', targetDir: 'violations', targetName: 'carrying.jpg', source: 'img44.jpg' },
    { id: '3-seconds', targetDir: 'violations', targetName: '3-seconds.jpg', source: 'img45.jpg' },
    { id: '5-seconds', targetDir: 'violations', targetName: '5-seconds.jpg', source: 'img46.jpg' },
    { id: '8-seconds', targetDir: 'violations', targetName: '8-seconds.jpg', source: 'img47.jpg' },
    { id: '24-seconds', targetDir: 'violations', targetName: '24-seconds.jpg', source: 'img48.jpg' },
    { id: 'ball-return', targetDir: 'violations', targetName: 'ball-return.jpg', source: 'img49.jpg' },
    { id: 'foot-ball', targetDir: 'violations', targetName: 'foot-ball.jpg', source: 'img50.jpg' },

    // Number of Players
    { id: 'number-00', targetDir: 'number-of-players', targetName: 'number-00.jpg', source: 'img53.jpg' },
    { id: 'number-1-5', targetDir: 'number-of-players', targetName: 'number-1-5.jpg', source: 'img54.jpg' },
    { id: 'number-6-10', targetDir: 'number-of-players', targetName: 'number-6-10.jpg', source: 'img55.jpg' },
    { id: 'number-11-15', targetDir: 'number-of-players', targetName: 'number-11-15.jpg', source: 'img56.jpg' },
    { id: 'number-16', targetDir: 'number-of-players', targetName: 'number-16.jpg', source: 'img57.jpg' },
    { id: 'number-24', targetDir: 'number-of-players', targetName: 'number-24.jpg', source: 'img58.jpg' },
    { id: 'number-40', targetDir: 'number-of-players', targetName: 'number-40.jpg', source: 'img61.jpg' },
    { id: 'number-62', targetDir: 'number-of-players', targetName: 'number-62.jpg', source: 'img62.jpg' },
    { id: 'number-78', targetDir: 'number-of-players', targetName: 'number-78.jpg', source: 'img63.jpg' },
    { id: 'number-99', targetDir: 'number-of-players', targetName: 'number-99.jpg', source: 'img64.jpg' },

    // Fouls
    { id: 'holding', targetDir: 'fouls', targetName: 'holding.jpg', source: 'img65.jpg' },
    { id: 'blocking', targetDir: 'fouls', targetName: 'blocking.jpg', source: 'img66.jpg' },
    { id: 'pushing', targetDir: 'fouls', targetName: 'pushing.jpg', source: 'img67.jpg' },
    { id: 'handchecking', targetDir: 'fouls', targetName: 'handchecking.jpg', source: 'img68.jpg' },
    { id: 'illegal-use-of-hands', targetDir: 'fouls', targetName: 'illegal-use-of-hands.jpg', source: 'img71.jpg' },
    { id: 'charging-with-ball', targetDir: 'fouls', targetName: 'charging-with-ball.jpg', source: 'img72.jpg' },
    { id: 'illegal-contact-hand', targetDir: 'fouls', targetName: 'illegal-contact-hand.jpg', source: 'img73.jpg' },
    { id: 'excessive-swinging-elbow', targetDir: 'fouls', targetName: 'excessive-swinging-elbow.jpg', source: 'img74.jpg' },
    { id: 'hit-head', targetDir: 'fouls', targetName: 'hit-head.jpg', source: 'img75.jpg' },
    { id: 'foul-by-team-control', targetDir: 'fouls', targetName: 'foul-by-team-control.jpg', source: 'img76.jpg' },
    { id: 'foul-on-act-of-shooting', targetDir: 'fouls', targetName: 'foul-on-act-of-shooting.jpg', source: 'img77.jpg' },
    { id: 'foul-not-on-act-of-shooting', targetDir: 'fouls', targetName: 'foul-not-on-act-of-shooting.jpg', source: 'img78.jpg' },

    // Special Fouls
    { id: 'double-foul', targetDir: 'special-fouls', targetName: 'double-foul.jpg', source: 'img81.jpg' },
    { id: 'technical-foul', targetDir: 'special-fouls', targetName: 'technical-foul.jpg', source: 'img80.jpg' },
    { id: 'unsportsmanlike-foul', targetDir: 'special-fouls', targetName: 'unsportsmanlike-foul.jpg', source: 'img81.jpg', copy: true }, // Double foul and Unsportsmanlike both img81?
    // User table: 49 Double Foul -> img81, 51 Unsportsmanlike -> img81. Yes.
    { id: 'disqualifying-foul', targetDir: 'special-fouls', targetName: 'disqualifying-foul.jpg', source: 'img82.jpg' },

    // Foul Penalty Admin
    { id: 'after-foul-without-free-throw', targetDir: 'free-throw-penalty-administration', targetName: 'after-foul-without-free-throw.png', source: 'after-foul-without-free-throw.png' },
    { id: 'after-foul-by-team-in-control-of-ball', targetDir: 'free-throw-penalty-administration', targetName: 'after-foul-by-team-in-control-of-ball.png', source: 'after-foul-by-team-in-control-of-ball.png' },

    // 55: 1 FREE THROW -> img85
    { id: 'free-throw-1', targetDir: 'free-throw-penalty-administration', targetName: '1-free-throw.jpg', source: 'img85.jpg' },
    { id: 'free-throw-2', targetDir: 'free-throw-penalty-administration', targetName: '2-free-throws.jpg', source: 'img86.jpg' },
    { id: 'free-throw-3', targetDir: 'free-throw-penalty-administration', targetName: '3-free-throws.jpg', source: 'img87.jpg' },

    // Free Throw Admin (Lead)
    { id: 'free-throw-lead-1', targetDir: 'free-throw-administration', targetName: 'lead-1.jpg', source: 'img90.jpg' },
    { id: 'free-throw-lead-2', targetDir: 'free-throw-administration', targetName: 'lead-2.jpg', source: 'img91.jpg' },
    { id: 'free-throw-lead-3', targetDir: 'free-throw-administration', targetName: 'lead-3.jpg', source: 'img92.jpg' },

    // Free Throw Admin (Trail/Centre)
    { id: 'free-throw-trail-1', targetDir: 'free-throw-administration', targetName: 'trail-1.jpg', source: 'img93.jpg' },
    { id: 'free-throw-trail-2', targetDir: 'free-throw-administration', targetName: 'trail-2.jpg', source: 'img94.jpg' },
    { id: 'free-throw-trail-3', targetDir: 'free-throw-administration', targetName: 'trail-3.jpg', source: 'img95.jpg' },
];

plan.forEach(item => {
    // 1. Locate source
    const relativeSource = findFile(item.source);
    if (!relativeSource) {
        console.warn(`Source not found: ${item.source} (for ${item.id})`);
        return;
    }

    const srcPath = path.join(signalsDir, relativeSource);
    const destDir = path.join(signalsDir, item.targetDir);
    const destPath = path.join(destDir, item.targetName);

    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    try {
        if (item.copy) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${item.source} -> ${item.targetDir}/${item.targetName}`);
        } else {
            // Rename/Move
            // If it's already in the target dir with a different name, we rename.
            // If it's in a different dir, we move.
            // BUT: If the source is used by multiple items (and one is a copy), we must handle carefully.
            // In my plan, only img26 and img81 are duplicates. I marked them with copy=true for the SECOND usage.
            // So the first usage should be a RENAME/MOVE, and subsequent usages should be COPY?
            // Wait, if I rename first, the source for the copy is gone.
            // Better to COPY for ALL duplicates, and only remove the original at the very end?
            // Or just check:

            // If the source path is different from dest path
            if (srcPath !== destPath) {
                // Check if we already moved it (e.g. if the source was already renamed)
                if (fs.existsSync(destPath)) {
                    console.log(`Target already exists: ${item.targetDir}/${item.targetName}`);
                } else {
                    if (item.copy) {
                        fs.copyFileSync(srcPath, destPath);
                        console.log(`Copied ${item.source} -> ${item.targetDir}/${item.targetName}`);
                    } else {
                        fs.renameSync(srcPath, destPath);
                        console.log(`Moved ${item.source} -> ${item.targetDir}/${item.targetName}`);
                    }
                }
            }
        }
    } catch (e) {
        console.error(`Failed to process ${item.id}:`, e.message);
    }
});
