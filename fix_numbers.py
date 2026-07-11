import os
import re

def fix_numbers(directory):
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".md") and not file.startswith("Extra") and not file.startswith("News"):
                filepath = os.path.join(root, file)
                match = re.match(r"^(\d+)-", file)
                if match:
                    number = int(match.group(1))
                    with open(filepath, "r") as f:
                        content = f.read()
                    
                    new_content = re.sub(r"(sectionNumber:\s*)\d+", fr"\g<1>{number}", content, count=1)
                    
                    if content != new_content:
                        with open(filepath, "w") as f:
                            f.write(new_content)
                        print(f"Updated {filepath} to sectionNumber: {number}")

fix_numbers("src/pages/en/guide")
fix_numbers("src/pages/fr/guide")
print("Done!")
