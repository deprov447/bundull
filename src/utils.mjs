import fs from "fs"
import path from "path"
import pino from "pino"
import * as acorn from "acorn"
import escodegen from "escodegen"

const LOG = pino()

const genCode = (root) => {
    const code = escodegen.generate(root)
    LOG.info(`Code generated: \n${code}`)
    return code
}

const genCodeFile = (root, file) => {
    const code = genCode(root)
    const dir = path.dirname(file)
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(file, code)
    LOG.info(`File written to ${file}`)
}

const parseCode = (code, conf) => {
    const parserConf = {
        ecmaVersion: 2020,
        ...conf
    }
    const root = acorn.parse(code, parserConf)
    LOG.info(root)
    return root
}

const parseCodeFile = (file) => {
    LOG.info(`Reading file ${file}`)
    const fileData = String(fs.readFileSync(file))
    const conf = {
        sourceType: "script"
    }
    if (path.extname(file) == '.mjs')
        conf.sourceType = "module"
    const root = parseCode(fileData, conf)
    return root
}

export {
    genCode,
    genCodeFile,
    parseCode,
    parseCodeFile,
    LOG
}