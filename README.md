> WIP
# Bundull

A bun based toy js bundler

> PS: I know nothing

## Requirements
- bun
- import
    - internal dep
    - hoisted
    - read only
    - live binding
    - types to support:
        ```
            Side effect import:     import "module-name";
            Named import:           import { export1, export2 } from "module-name";
                - multiple imports
                - renamed imports
                    - `default` as 
                - string literal imports
            Default import:         import defaultExport from "module-name";
            Namespace import:       import * as name from "module-name";
                - sealed obj
                - null prototype
                - ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import#module_namespace_object
            Combined import:        import defa_exp, {exp1}, *, from "module-name"
        ```
    - external dep

- require
    - internal dep
    - external dep
- circular dep warning
- loader.. atleast md
- Only single quoted and double quoted Strings are allowed in `module-name`
- extry point {both terminal and default in config file}
- output {both terminal and default in config file}
