# Home Sweet Home — Module Template

The single template for creating a consistent Home Sweet Home module repository.

## What this is

Every Home Sweet Home module lives in its own repository. This template repository is the
shared source those repos are stamped from: it ships a `module.config.yaml` manifest plus a
set of `.tpl` template files, and a `scripts/scaffold.mjs` script that renders them into a
fully-formed module repo (README, packaging, CI/CD, Dockerfiles, tooling, Spec Kit setup).

## How to create a new module

1. Use this repository as a template (GitHub "Use this template") — or run
   `homesweethome create <module>` from the `home-sweet-home-tools` CLI.
2. Fill in `module.config.yaml` with the module's identity (name, slug, npm scope, repo,
   GHCR org, packages, stack, umbrella link).
3. Run `node scripts/scaffold.mjs` to generate the module files.
4. Verify with `node scripts/scaffold.mjs --check` (also enforced in CI).

## Repo layout

```text
module.config.yaml            # single source of truth for a module's identity
scripts/scaffold.mjs          # renders .tpl files from the config; --check mode
*.tpl                         # tokenized templates → module files (see specs/000-module-readme)
```

See `docs/clarify.md` (generated per module) for the foundational decisions to settle when
creating a module, and `setup.md` (generated) for the module setup guide.