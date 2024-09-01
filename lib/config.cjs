const babelPresetEnv = require( "@babel/preset-env" );
const babelPluginSyntaxImportAssertions = require( "@babel/plugin-syntax-import-assertions" );
const babelPluginTransformRuntime = require( "@babel/plugin-transform-runtime" );

module.exports = {
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
        babelPluginSyntaxImportAssertions,

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
    ],
};
