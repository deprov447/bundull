import sideEffectImport from "./Imports/side-effect.mjs"
import { LOG, hoistImports, parseCodeFile } from "./utils.mjs"

const bundle = (root) => {
    LOG.info(`Bundling`)
    if (root.type == 'Program') {
        if (root.sourceType == 'module') {
            LOG.info("Is module")
            hoistImports(root)
            // find all import statements
            root.body
                .filter(childNode => childNode.type == 'ImportDeclaration')
                .forEach((childNode, index) => {
                    // @TODO: source should be const
                    let source = childNode.source.value
                    LOG.info(`Sourcing ${source}`)
                    // @TODO: find full source path
                    // @HACK
                    source = "test/asset" + source.slice(1)
                    const sourceTree = parseCodeFile(source)
                    LOG.info(sourceTree)
                    if(/* childNode.importType.side_effect == */ 1)
                        root.body[index] = sideEffectImport(sourceTree)
                });
        }
    }
    // LOG.info(root)
    return root
}

export {
    bundle,
}