#!/usr/bin/env node
// Scaffold — render module templates from module.config.yaml (or check for drift).
//
// Contracts: specs/005-module-docs-templatization/contracts/scaffold.md
//   render (default): read module.config.yaml, render the enabled template set, write files.
//   --check:          render in memory, compare to disk, never write.
//   --help:           print usage.
//
// Exit codes:
//   0  render succeeded / check passed
//   1  render failed (invalid config, unresolved token) / check found drift
//   2  usage error

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const CONFIG_FILE = 'module.config.yaml';

const USAGE = `Usage: node scripts/scaffold.mjs [--check] [--help]

render (default)  Read module.config.yaml, render the enabled template set, write files.
--check           Render in memory and compare each expected output to disk. Never writes.
--help            Show this help.

Exit codes:
  0  render succeeded / check passed
  1  render failed (invalid config, unresolved token) / check found drift
  2  usage error`;

function parseArgs(argv) {
  const flags = { check: false, help: false };
  for (const arg of argv) {
    if (arg === '--check') flags.check = true;
    else if (arg === '--help' || arg === '-h') flags.help = true;
    else return { error: `unknown option '${arg}'` };
  }
  return { flags };
}

function repoRoot() {
  return resolve(new URL('..', import.meta.url).pathname);
}

function loadConfig(root) {
  // Placeholder: full config validation lands in Phase 2 (T004).
  const file = resolve(root, CONFIG_FILE);
  let raw;
  try {
    raw = readFileSync(file, 'utf8');
  } catch {
    return { error: `config not found: expected ${CONFIG_FILE} at repo root` };
  }
  if (!raw.trim()) return { error: `config is empty: ${CONFIG_FILE}` };
  return { config: { raw } };
}

function main() {
  const { flags, error } = parseArgs(process.argv.slice(2));
  if (error) {
    console.error(`error: ${error}`);
    console.error(USAGE);
    process.exit(2);
  }
  if (flags.help) {
    console.log(USAGE);
    process.exit(0);
  }

  const root = repoRoot();
  const { config, error: loadError } = loadConfig(root);
  if (loadError) {
    console.error(`error: ${loadError}`);
    process.exit(1);
  }

  if (flags.check) {
    // Placeholder: drift check lands in Phase 2 (T006).
    console.error('error: --check is not implemented yet (Phase 2)');
    process.exit(1);
  }

  // Placeholder: render lands in Phase 2 (T005/T006).
  console.error('error: render is not implemented yet (Phase 2)');
  process.exit(1);
}

main();