python3 - <<'PY'
import os, uuid

DRY_RUN = True

root = "."
for entry in sorted(os.listdir(root)):
    d = os.path.join(root, entry)
    if not os.path.isdir(d):
        continue

    parent = os.path.basename(d)
    files = []
    for name in os.listdir(d):
        p = os.path.join(d, name)
        if os.path.isfile(p) and ("plan" not in name):
            files.append(name)

    files.sort()  # lexicographic order
    if not files:
        continue

    print(f"\n[{parent}]")
    mapping = []
    for i, name in enumerate(files, start=1):
        base = name
        ext = ""
        if "." in base and not base.startswith("."):
            ext = "." + base.rsplit(".", 1)[1]
        src = os.path.join(d, name)
        dst = os.path.join(d, f"{parent}{i}{ext}")
        mapping.append((src, dst))

    for src, dst in mapping:
        print(f"{src} -> {dst}")
PY