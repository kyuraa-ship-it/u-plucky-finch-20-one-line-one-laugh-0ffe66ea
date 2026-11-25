import { mkdirSync, writeFileSync } from "node:fs";

// One Line, One Laugh — a single funny line, 1-200 chars, fast punchline,
// fresh angle, tight wording. The toaster's "second setting" twist lands
// inside the line with no setup the reader has to supply.
const entry =
  "My toaster has one setting: 'burnt,' and a second setting: 'also burnt, but with confidence.'";

// Gate: 1-200 chars, not only whitespace, single line of UTF-8 text.
if (entry.length < 1 || entry.length > 200 || !entry.trim() || entry.includes("\n")) {
  throw new Error(`gate failed: entry is ${entry.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars`);
