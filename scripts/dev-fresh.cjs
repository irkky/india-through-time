// Optional recovery command; never runs as part of normal website rendering.
const fs = require("node:fs");
const path = require("node:path");
const { spawn } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const build = path.join(root, ".next");
const dev = path.join(build, "dev");

try {
  if (fs.existsSync(path.join(dev, "lock"))) {
    throw new Error(
      "A Next.js development lock exists. Stop the running dev server with Ctrl+C before running dev:fresh.",
    );
  }
  // Only generated development output is removed. Refuse redirected/symlinked paths.
  for (const target of [build, dev]) {
    if (fs.existsSync(target) && fs.realpathSync(target).toLowerCase() !== target.toLowerCase()) {
      throw new Error(`Refusing to clean a redirected build directory: ${target}`);
    }
  }
  if (path.dirname(dev) !== build || path.dirname(build) !== root)
    throw new Error("Invalid development output path.");
  fs.rmSync(dev, { recursive: true, force: true });
  console.log("Cleared .next/dev. Source files, assets and production build output are preserved.");
  const child = spawn(
    process.execPath,
    [require.resolve("next/dist/bin/next"), "dev", ...process.argv.slice(2)],
    {
      cwd: root,
      stdio: "inherit",
      windowsHide: true,
    },
  );
  child.on("error", (error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
  child.on("exit", (code) => {
    process.exitCode = code ?? 1;
  });
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
