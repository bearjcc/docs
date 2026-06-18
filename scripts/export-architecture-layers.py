"""Export Understand-Anything layer file nodes to Mintlify architecture-layers JSON."""
import json
import os
import re
import sys

WORKSPACE = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
GRAPH_PATH = os.path.join(WORKSPACE, "Autex Toolkit", ".understand-anything", "knowledge-graph.json")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "snippets", "toolkit", "architecture-layers")

SLUG_MAP = {
    "layer:plugin-entry": "plugin-entry",
    "layer:core-services": "core-services",
    "layer:data-models": "data-models",
    "layer:scripts": "scripts",
    "layer:webview-ui": "webview-ui",
    "layer:wpf-views": "wpf-views",
    "layer:rules-builder": "rules-builder",
    "layer:assets-and-services": "assets-and-services",
    "layer:build-infra": "build-infra",
}


def load_graph(path: str) -> dict:
    raw = open(path, encoding="utf-8-sig").read()
    fixed = re.sub(r"\\(?![\\\"/bfnrtu])", r"\\\\", raw)
    return json.loads(fixed)


def normalize_path(path: str) -> str:
    path = path.replace("\\", "/")
    if path and not path.startswith("Autex Toolkit/"):
        path = "Autex Toolkit/" + path.lstrip("/")
    return path


def main() -> int:
    graph = load_graph(GRAPH_PATH)
    node_map = {n["id"]: n for n in graph["nodes"]}
    os.makedirs(OUT_DIR, exist_ok=True)

    rows_by_slug = {}
    for layer in graph["layers"]:
        slug = SLUG_MAP.get(layer["id"])
        if not slug:
            continue
        rows = []
        for node_id in layer["nodeIds"]:
            node = node_map.get(node_id)
            if not node or node.get("type") != "file":
                continue
            rows.append(
                {
                    "name": node.get("name", "").replace("\\", "/"),
                    "type": node.get("type", ""),
                    "sourcePath": normalize_path(node.get("filePath", "") or ""),
                    "summary": node.get("summary", ""),
                }
            )
        rows.sort(key=lambda r: r["name"].lower())
        rows_by_slug[slug] = rows
        out_path = os.path.join(OUT_DIR, slug + ".json")
        with open(out_path, "w", encoding="utf-8") as out:
            json.dump(rows, out, indent=2, ensure_ascii=False)
        print(f"{slug}: {len(rows)} rows -> {out_path}")

    layers_js = os.path.join(OUT_DIR, "layers.js")
    with open(layers_js, "w", encoding="utf-8") as out:
        out.write("export const LAYERS = ")
        json.dump(rows_by_slug, out, indent=2, ensure_ascii=False)
        out.write(";\n")
    print(f"layers.js: {len(rows_by_slug)} layers -> {layers_js}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
