import { readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const packagesDir = path.join(rootDir, "packages");
const dependencyFields = [
  "dependencies",
  "devDependencies",
  "peerDependencies",
  "optionalDependencies",
];

const readJson = async (filePath) => JSON.parse(await readFile(filePath, "utf8"));

const getPackageJsonPaths = async () => {
  const entries = await readdir(packagesDir, { withFileTypes: true });

  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(packagesDir, entry.name, "package.json"));
};

const getWorkspaceVersions = async (packageJsonPaths) => {
  const versions = new Map();

  for (const packageJsonPath of packageJsonPaths) {
    const packageJson = await readJson(packageJsonPath);

    if (packageJson.name?.startsWith("@lowerdeck/") && packageJson.version) {
      versions.set(packageJson.name, packageJson.version);
    }
  }

  return versions;
};

const syncManifest = (packageJson, workspaceVersions) => {
  let changed = false;

  for (const field of dependencyFields) {
    const dependencies = packageJson[field];

    if (!dependencies) {
      continue;
    }

    for (const [name, currentRange] of Object.entries(dependencies)) {
      const workspaceVersion = workspaceVersions.get(name);

      if (!workspaceVersion) {
        continue;
      }

      const nextRange = `^${workspaceVersion}`;

      if (currentRange !== nextRange) {
        dependencies[name] = nextRange;
        changed = true;
      }
    }
  }

  return changed;
};

const main = async () => {
  const rootPackageJsonPath = path.join(rootDir, "package.json");
  const packageJsonPaths = [rootPackageJsonPath, ...(await getPackageJsonPaths())];
  const workspaceVersions = await getWorkspaceVersions(packageJsonPaths.slice(1));
  const updatedFiles = [];

  for (const packageJsonPath of packageJsonPaths) {
    const packageJson = await readJson(packageJsonPath);

    if (!syncManifest(packageJson, workspaceVersions)) {
      continue;
    }

    await writeFile(packageJsonPath, `${JSON.stringify(packageJson, null, 2)}\n`);
    updatedFiles.push(path.relative(rootDir, packageJsonPath));
  }

  if (updatedFiles.length === 0) {
    console.log("All local package versions are already in sync.");
    return;
  }

  console.log(`Updated ${updatedFiles.length} package.json file(s):`);

  for (const filePath of updatedFiles) {
    console.log(`- ${filePath}`);
  }
};

await main();
