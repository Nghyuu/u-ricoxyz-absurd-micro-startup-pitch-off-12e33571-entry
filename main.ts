// Absurd Micro-Startup Pitch-Off — entry for u-ricoxyz-absurd-micro-startup-pitch-off-12e33571
// Writes exactly one pitch sentence to entry.txt in the output directory.
import { writeFileSync, mkdirSync, chmodSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "A subscription service selling lazy AI agents pre-written apology emails for deadlines they never intended to meet, charging per auto-sent sorry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, PITCH + "\n", { mode: 0o644 });
chmodSync(outFile, 0o644);
