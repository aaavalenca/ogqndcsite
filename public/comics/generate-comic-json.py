import os
import json
import re

# Path configuration
base_dir = os.path.dirname(os.path.abspath(__file__))
json_path = os.path.join(base_dir, "comic-pages-bv.json")
desc_dir = os.path.join(base_dir, "descricao")

# Load existing data
with open(json_path, "r", encoding="utf-8") as f:
    comics = json.load(f)

# Update descriptions
for comic in comics:
    try:
        # Extract number from any path format
        num = re.search(r"(\d+)\.jpg$", comic["path"], re.IGNORECASE)
        if not num:
            continue

        desc_path = os.path.join(desc_dir, f"{num.group(1)}.txt")
        if os.path.exists(desc_path):
            with open(desc_path, "r", encoding="utf-8") as f:
                comic["description"] = f.read().strip()
    except Exception as e:
        print(f"Error processing {comic.get('path')}: {str(e)}")

# Save updated file
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(comics, f, indent=2, ensure_ascii=False)

print(f"Updated {json_path} with descriptions from {desc_dir}")
