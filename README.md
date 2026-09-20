# 🏠 Home Sweet Home — Module Template

One template, every module. Clone it (or use the CLI) to stamp out a consistent
**Home Sweet Home** module repo — docs, packaging, CI/CD, Dockerfiles, tooling, and Spec Kit
setup, all generated from a single `module.config.yaml`.

## 🧰 What this is

Every Home Sweet Home module lives in its own repository. This template is the shared source
those repos are stamped from:

- **`module.config.yaml`** — the single source of truth for a module's identity
  (name, slug, packages, stack, registries, theme).
- **`*.tpl` templates** — tokenized files (`README.md.tpl`, `setup.md.tpl`, workflows,
  Dockerfiles, …) rendered from the config.
- **`scripts/scaffold.mjs`** — the renderer: `render` writes the module files, `--check`
  verifies they match the config (also enforced in CI).

## 🚀 Create a new module

**Option A — the CLI (recommended):**

```bash
pnpm add -g @sousa99/homesweethome
homesweethome create my-module --repo sousa99/my-module
```

**Option B — GitHub's "Use this template":**

1. Click **Use this template** → **Create a new repository**.
2. Fill in `module.config.yaml` (name, slug, npm scope, repo, GHCR org, packages, stack).
3. Run `node scripts/scaffold.mjs` to generate the module files.
4. Verify with `node scripts/scaffold.mjs --check` (also enforced in CI).

## 📁 Repo layout

```text
module.config.yaml            # single source of truth for a module's identity
scripts/scaffold.mjs          # renders .tpl files from the config; --check mode
*.tpl                         # tokenized templates → module files
```

## 📚 Where to learn more

- **Per-module setup guide** — generated as `setup.md` (gates, pipelines, package org).
- **Foundational clarify** — generated as `docs/clarify.md` (decisions to settle at creation).
- **Tools** — the CLI + shared config presets live in
  [home-sweet-home-tools](https://github.com/sousa99/home-sweet-home-tools).