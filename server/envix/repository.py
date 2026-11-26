from pathlib import Path

def read_requirements(file_path: str) -> list[str]:
    dependencies = []
    try:
        for line in Path(file_path).read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if line and line[0]!="#":
                dependencies.append(line)
        return dependencies
    except FileNotFoundError:
        print(f"Error reading requirements file: {file_path}")
        return []
dependencies = read_requirements("missing_requirements.txt")
print(dependencies)
print("Total dependencies:", len(dependencies))
