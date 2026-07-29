/**
 * Build-time environment variable validation.
 *
 * Reads `.env.example` to identify required (uncommented) vs optional
 * (commented) vars, then loads `.env.local` (if present) and checks
 * the merged state.
 *
 * - **Required** vars that are missing → build FAILS (exit 1).
 * - **Optional** vars that are missing → warning, build continues.
 *
 * The app gracefully degrades when optional vars are absent (e.g. the
 * contact form returns a 500 instead of crashing, rate limiting falls
 * back to in-memory instead of Redis).
 */

import { readFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ENV_EXAMPLE = resolve(ROOT, ".env.example");
const ENV_LOCAL = resolve(ROOT, ".env.local");

/* ── Load .env.local into process.env ───────────────────────
 * next build loads env files internally via @next/env, but this
 * script runs as a separate process BEFORE next build, so it
 * must load .env.local manually.                          */
function loadDotEnvLocal() {
  if (!existsSync(ENV_LOCAL)) return;

  const content = readFileSync(ENV_LOCAL, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    // KEY=VALUE or KEY="VALUE" or KEY='VALUE'
    const match = trimmed.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);
    if (match) {
      let value = match[2];
      // Strip surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      if (!process.env[match[1]]) {
        process.env[match[1]] = value;
      }
    }
  }
}

/* ── Parse .env.example ───────────────────────────────────── */
function parseEnvExample(filePath) {
  if (!existsSync(filePath)) {
    console.warn(`  ⚠  .env.example not found at ${filePath}`);
    return { required: [], optional: [] };
  }

  const content = readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const required = [];
  const optional = [];

  for (const line of lines) {
    const trimmed = line.trim();

    // Skip blanks, section headers, template markers
    if (!trimmed || trimmed === "[TEMPLATE]" || trimmed.match(/^# [─━]/)) continue;

    // Commented-out env var → optional
    const optionalMatch = trimmed.match(/^#\s*([A-Z_][A-Z0-9_]*)=/);
    if (optionalMatch) {
      optional.push(optionalMatch[1]);
      continue;
    }

    // Uncommented env var → required
    const requiredMatch = trimmed.match(/^([A-Z_][A-Z0-9_]*)=/);
    if (requiredMatch) {
      required.push(requiredMatch[1]);
    }
  }

  return { required, optional };
}

/* ── Main ─────────────────────────────────────────────────── */
loadDotEnvLocal();
const { required, optional } = parseEnvExample(ENV_EXAMPLE);

const failures = [];

console.log("\n  ── Environment variable check ──\n");

for (const name of required) {
  if (!process.env[name] || process.env[name].trim() === "") {
    failures.push(`  ❌ ${name} is unset or empty (required for production)`);
  }
}

for (const name of optional) {
  if (!process.env[name] || process.env[name].trim() === "") {
    console.warn(`  ⚠  ${name} is unset (optional — feature will fall back gracefully)`);
  }
}

if (failures.length === 0) {
  console.log("  ✅  All required environment variables are set.\n");
} else {
  for (const f of failures) console.error(f);
  console.error(`\n  ❌ ${failures.length} required variable(s) missing — set them in .env.local\n`);
  process.exit(1);
}

const summary = [];
if (required.length) summary.push(`${required.length} required`);
if (optional.length) summary.push(`${optional.length} optional`);
console.log(`  Scanned ${summary.join(", ")} variables from .env.example\n`);

process.exit(0);
