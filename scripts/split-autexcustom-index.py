"""One-off splitter: autexcustom/index.mdx -> hub + category pages."""
from pathlib import Path

root = Path(__file__).resolve().parent.parent / "driveworks" / "plugins" / "autexcustom"
text = (root / "index.mdx").read_text(encoding="utf-8")
lines = text.splitlines()

fm_end = 0
if lines and lines[0].strip() == "---":
    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            fm_end = i
            break

imports = "\n".join(lines[fm_end + 1 : fm_end + 4]).strip()

sections = {
    "core-functions": (29, 318),
    "colors": (321, 385),
    "table-by-column": (389, 655),
    "specification-flow-tasks": (659, 738),
    "documents": (742, 754),
}

pages = {
    "core-functions": (
        "AutexCustom — Core custom functions",
        "Core functions",
        "Sanity flags, user/team helpers, images, localisation, geometry, and slab packing Rule functions.",
    ),
    "colors": (
        "AutexCustom — Color catalog lookups",
        "Color lookups",
        "Pantone and RAL custom functions that return hex color values for Rules.",
    ),
    "table-by-column": (
        "AutexCustom — Table by column name",
        "Table by column",
        "Custom functions that read DriveWorks table columns by name for Rules and Specification Flow.",
    ),
    "specification-flow-tasks": (
        "AutexCustom — Specification Flow tasks",
        "Specification Flow tasks",
        "Task-only AutexCustom operations for Specification Flow (slab packing, form control type changes).",
    ),
    "documents": (
        "AutexCustom — Document types",
        "Document types",
        "DXF nest and PDF Project document types registered by AutexCustom.",
    ),
}

header_tpl = """---
title: {title}
sidebarTitle: {sidebar}
description: {desc}
type: reference
audience: operator
---

{imports}

"""

for slug, (title, sidebar, desc) in pages.items():
    lo, hi = sections[slug]
    body = "\n".join(lines[lo - 1 : hi]).strip()
    related = "\n## Related\n\n- [AutexCustom hub](/driveworks/plugins/autexcustom)\n"
    content = header_tpl.format(title=title, sidebar=sidebar, desc=desc, imports=imports) + body + related
    (root / f"{slug}.mdx").write_text(content, encoding="utf-8")

hub = """---
title: AutexCustom
sidebarTitle: AutexCustom
description: Autex assembly adding custom functions for Rules, Specification Flow tasks, and Project output types (DXF, PDF integration).
type: reference
audience: operator
---

**AutexCustom** extends DriveWorks with **custom functions** for **Rule Builder**, **Specification Flow** tasks, and **Project document** output types. It is a **separate deployable** from Autex Toolkit (`AutexCustom.dll`); install and register per your Autex deployment process.

## Where it appears

- **Rules:** **Functions** list in **Rule Builder**
- **Specification Flow:** task and condition property pickers
- **Project outputs:** DXF nest and PDF document designers

## Function reference

<CardGroup cols={2}>
  <Card title="Core custom functions" icon="function-square" href="/driveworks/plugins/autexcustom/core-functions">
    Sanity flags, user/team helpers, images, localisation, geometry, slab packing Rules.
  </Card>
  <Card title="User country and region" icon="globe" href="/driveworks/plugins/autexcustom/user-country-and-region">
    Deep reference for country, state, and team-based region resolution.
  </Card>
  <Card title="Now Local" icon="clock" href="/driveworks/plugins/autexcustom/now-local">
    Regional clock strings from team membership.
  </Card>
  <Card title="Machine movement time" icon="gauge" href="/driveworks/plugins/autexcustom/machine-movement-time">
    Trapezoidal motion timing for machine Rules.
  </Card>
  <Card title="Color catalog lookups" icon="palette" href="/driveworks/plugins/autexcustom/colors">
    Pantone and RAL hex lookups.
  </Card>
  <Card title="Table by column name" icon="table" href="/driveworks/plugins/autexcustom/table-by-column">
    Read table columns by name in Rules.
  </Card>
  <Card title="Specification Flow tasks" icon="workflow" href="/driveworks/plugins/autexcustom/specification-flow-tasks">
    Slab packing tasks and form control type changes.
  </Card>
  <Card title="Document types" icon="file-output" href="/driveworks/plugins/autexcustom/documents">
    DXF nest and PDF document types.
  </Card>
</CardGroup>

## Related plugins

- [AutexPdfExport](/driveworks/plugins/autexpdfexport) — PDF generation assembly referenced by the PDF document type
- [Icons](/driveworks/plugins/icons) — embedded icon custom functions
- [ConvertUnits](/driveworks/plugins/convertunits) — generic unit conversion custom functions
- [Plugins hub](/driveworks/plugins)
"""
(root / "index.mdx").write_text(hub, encoding="utf-8")
print("split complete")
