import { defineConfig } from "tsup";
import * as path from "path";
import { totalist } from "totalist/sync";

const files: string[] = [];
totalist(path.join(__dirname, "src/primitives"), (name: string, abs, stats) => {
  if (name.endsWith(".tsx") && !name.endsWith(".stories.tsx")) {
    files.push("./src/primitives/" + name.replace(/\\/g, "/"));
  }
});

export default defineConfig({
  entry: files,
  outDir: "primitives",
});
