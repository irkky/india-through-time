/* Manual maintenance tool, never executed by the website. Downloads only Met public-domain images. */
const { execFileSync } = require("node:child_process");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const directory = path.join(root, "public/assets/images/classical");
fs.mkdirSync(directory, { recursive: true });
const ids = [39328, 38965];
const manifest = [];
for (const id of ids) {
  const object = JSON.parse(
    execFileSync(
      "curl.exe",
      [
        "-sSL",
        "--fail",
        "--max-time",
        "45",
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`,
      ],
      { encoding: "utf8" },
    ),
  );
  if (!object.isPublicDomain || !object.primaryImageSmall)
    throw new Error(`Unverified image rights: ${id}`);
  const filename = `met-${id}.jpg`;
  execFileSync("curl.exe", [
    "-sSL",
    "--fail",
    "--max-time",
    "60",
    object.primaryImageSmall,
    "-o",
    path.join(directory, filename),
  ]);
  manifest.push({
    id,
    filename,
    title: object.title,
    date: object.objectDate,
    accession: object.accessionNumber,
    medium: object.medium,
    credit: object.creditLine,
    culture: object.culture,
    sourceUrl: object.objectURL,
    downloadUrl: object.primaryImageSmall,
    license: "Public Domain / CC0",
    verified: "2026-10-24",
  });
  console.log(`Downloaded ${id}: ${object.title}`);
}
fs.writeFileSync(
  path.join(root, "docs/classical-media-manifest.json"),
  JSON.stringify(manifest, null, 2) + "\n",
);
