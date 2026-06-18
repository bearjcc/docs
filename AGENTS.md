# Agents — Mintlify docs router

Short pointer for agents editing this Mintlify site. Policy and conventions live in scoped rules and reference pages.

## Where to read next

| Area | Start here |
| --- | --- |
| **MDX authoring rule** | [`.cursor/rules/mintlify-mdx.mdc`](.cursor/rules/mintlify-mdx.mdc) — components, snippets, nav, DriveWorks terms |
| **Component examples** | [reference/mdx-tips.mdx](reference/mdx-tips.mdx) |
| **Page structure and links** | [reference/authoring-conventions.mdx](reference/authoring-conventions.mdx) |
| **Reference hub** | [reference/index.mdx](reference/index.mdx) |
| **Wiki → Mintlify batch convert** | [`../.cursor/scripts/Convert-WikiToMintlify.ps1`](../.cursor/scripts/Convert-WikiToMintlify.ps1) — run from Autex workspace root; see [`.cursor/scripts/README.md`](../.cursor/scripts/README.md#convert-wikitomintlify) |

## Local checks

- Preview: `mintlify dev` from this folder (`mintlify/`).
- Navigation: register new pages in `docs.json`.
- Assets: host under `images/wiki/`; site paths `/images/wiki/...`.
