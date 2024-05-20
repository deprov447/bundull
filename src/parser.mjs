import { bundle } from "./bundle.mjs";
import { LOG, genCode, genCodeFile, parseCodeFile } from "./utils.mjs";

const entrypoint = "test/asset/index.mjs"
const exitpoint = "test/asset/build/main.js"

LOG.info(`bundull started with entrypoint: ${entrypoint}`)

const root = parseCodeFile(entrypoint)
const bundled_root = bundle(root)

// @TODO: Remove
    // genCodeFile(bundled_root, exitpoint)
    genCode(bundled_root)