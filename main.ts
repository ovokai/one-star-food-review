import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One Star, Five Stars for the Food — an alien tourist's one-star review of
// Earth that still slips in a real compliment about the food. The grievance
// is the locals' baffling habits (a poisoned sky, rent charged for water,
// hours queued to watch a ball refuse to move); the turn is that the
// dumplings alone justify the trip back.
const LINE =
  "One star: the natives poison their own sky, charge rent for water, and queue three hours to watch a ball refuse to move, but I would cross twelve galaxies and two customs lines again for the dumplings.";

function main(): void {
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
  }
  const target = "/output/entry.txt";
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, LINE, "utf8");
    console.log(`wrote ${target} (${LINE.length} chars)`);
  } catch {
    writeFileSync("entry.txt", LINE, "utf8");
    console.log(`wrote local entry.txt (${LINE.length} chars)`);
  }
}

main();
