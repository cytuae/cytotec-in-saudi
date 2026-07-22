#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

function countWords(text) {
  return text
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/[\/\|\[\]\(\)\{\}<>#*`_~=+\-.,:;!؟?«»"""''0-9A-Za-z]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function arabicStringsFrom(block) {
  if (!block) return [];
  return [...block.matchAll(/"((?:\\.|[^"\\])*)"/g)]
    .map((m) => m[1].replace(/\\n/g, " "))
    .filter((t) => /[\u0600-\u06FF]/.test(t));
}

function countMoneyPage(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  const introMatch = source.match(/intro:\s*\[([\s\S]*?)\],\s*\n\s*lastUpdated/);
  const sectionsMatch = source.match(/sections:\s*\[([\s\S]*?)\],\s*\n\s*faqs:/);
  const faqsMatch = source.match(/faqs:\s*\[([\s\S]*?)\],\s*\n\s*sources:/);
  const sourcesMatch = source.match(/sources:\s*([\s\S]*?),\s*\n\s*related:/);
  const relatedMatch = source.match(/related:\s*\[([\s\S]*?)\],\s*\n\s*cta:/);
  const h1Match = source.match(/h1:\s*"([^"]+)"/);
  const chunks = [];
  if (h1Match) chunks.push(h1Match[1]);
  for (const block of [
    introMatch?.[1],
    sectionsMatch?.[1],
    faqsMatch?.[1],
    sourcesMatch?.[1],
    relatedMatch?.[1],
  ]) {
    chunks.push(...arabicStringsFrom(block));
  }
  return countWords(chunks.join(" "));
}

function countHome(filePath) {
  const source = fs.readFileSync(filePath, "utf8");
  // Count all Arabic string literals except city name list alone is fine to include
  const strings = arabicStringsFrom(source);
  // Exclude very short city names only? Include them - they're visible in main
  return countWords(strings.join(" "));
}

const targets = [
  { file: "src/content/home.ts", min: 1400, max: 1700, name: "homepage", fn: countHome },
  { file: "src/content/price.ts", min: 1500, max: 1900, name: "cytotec-price-saudi", fn: countMoneyPage },
  { file: "src/content/misoprostol.ts", min: 1600, max: 2000, name: "misoprostol-saudi", fn: countMoneyPage },
  { file: "src/content/original.ts", min: 1400, max: 1800, name: "original-cytotec", fn: countMoneyPage },
  { file: "src/content/availability.ts", min: 1300, max: 1700, name: "availability", fn: countMoneyPage },
];

let ok = true;
for (const t of targets) {
  const words = t.fn(path.join(root, t.file));
  const status = words >= t.min && words <= t.max + 150 ? (words >= t.min ? "OK" : "LOW") : words < t.min ? "LOW" : "HIGH";
  // soft max: warn but only fail on min for deploy gate
  if (words < t.min) ok = false;
  console.log(`${t.name}: ${words} words (min ${t.min}, target max ~${t.max}) [${words < t.min ? "LOW" : words > t.max ? "HIGH*" : "OK"}]`);
}

process.exit(ok ? 0 : 1);
