import babelPresetEnv from "@babel/preset-env";
import babelPluginTransformRuntime from "@babel/plugin-transform-runtime";
import babelPluginSyntaxImportAssertions from "@babel/plugin-syntax-import-assertions";

export default {
    "compact": false,
    "sourceType": "unambiguous",

    // NOTE https://github.com/babel/babel/issues/9903
    // NOTE https://github.com/babel/babel/discussions/13826
    "exclude": [ /@babel(\/|\\)runtime/, /core-js/ ],

    "presets": [

        // NOTE https://babeljs.io/docs/babel-preset-env
        [
            babelPresetEnv,
            {
                "bugfixes": true,
                "corejs": "3.38",
                "loose": false,
                "debug": false,
                "modules": false,
                "targets": {},
                "useBuiltIns": "usage",
                "ignoreBrowserslistConfig": undefined,
                "exclude": [ "es.array.iterator", "es.promise", "es.object.assign", "es.promise.finally" ],
                "shippedProposals": true,
            },
        ],
    ],

    "plugins": [

        // NOTE https://babeljs.io/docs/babel-plugin-transform-runtime
        [
            babelPluginTransformRuntime,
            {
                "regenerator": false, // useBuiltIns !== "usage"
                "corejs": false, // 3, polyfills are injected by preset-env & polyfillsPlugin, so no need to add them again
                "helpers": true, // useBuiltIns === "usage",
                "useESModules": true, // !process.env.VUE_CLI_BABEL_TRANSPILE_MODULES,
            },
        ],

        babelPluginSyntaxImportAssertions,
    ],
};
