import os
import re

directories = ["src/pages/en/guide", "src/pages/fr/guide"]

for directory in directories:
    for filename in os.listdir(directory):
        if filename.endswith(".md") and not filename.startswith("Extra"):
            # extract the number from the filename
            match = re.match(r"^(\d+)-", filename)
            if match:
                number = int(match.group(1))
                filepath = os.path.join(directory, filename)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                # replace sectionNumber: X with sectionNumber: <number>
                new_content = re.sub(r'sectionNumber:\s*\d+', f'sectionNumber: {number}', content)
                
                with open(filepath, 'w') as f:
                    f.write(new_content)
print("Done")
