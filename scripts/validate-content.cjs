require("./register-typescript.cjs");
const fs = require("node:fs");
const path = require("node:path");
const { compileHistory } = require("../src/lib/content/compile.ts");
const { indianHistoryTimeline } = require("../src/data/timeline/indian-history.ts");
const { scenePresentations } = require("../src/data/scenes/scene-presentations.ts");

try {
  const model = compileHistory(indianHistoryTimeline, scenePresentations);
  let missing = 0;
  for (const scene of model.scenes) {
    for (const layer of scene.layers) {
      for (const src of [layer.asset?.src, layer.asset?.poster]) {
        if (src?.startsWith("/") && !fs.existsSync(path.join(__dirname, "../public", src))) {
          console.error(`ERROR ${scene.id}/${layer.id}: Missing local asset ${src}`);
          missing++;
        }
      }
    }
  }
  for (const issue of model.issues)
    console.log(`${issue.severity.toUpperCase()} ${issue.path}: ${issue.message}`);
  console.log(
    `${model.events.length} events, ${model.scenes.length} scenes, ${model.navigation.length} eras; ${model.issues.length} content warnings.`,
  );
  if (missing || (process.argv.includes("--strict") && model.issues.length)) process.exitCode = 1;
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
