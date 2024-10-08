import babelPluginTransformRuntime from "@babel/plugin-transform-runtime";
import babelPresetEnv from "@babel/preset-env";

export * from "@babel/core";

export function createConfig ( options = {} ) {

    // NOTE https://babeljs.io/docs/options
    return {

        // config loading options
        "configFile": false,
        "babelrc": false,

        // output targets
        "browserslistConfigFile": true,

        // config merging options
        // NOTE https://github.com/babel/babel/issues/9903
        // NOTE https://github.com/babel/babel/discussions/13826
        "exclude": [ /@babel[/\\]runtime/, /core-js/ ],
        "overrides": null,

        // misc options
        "sourceType": "unambiguous",

        // code generator options
        "compact": false,
        "minified": false,
        "comments": true,

        // plugin and preset options
        "presets": [

            // NOTE https://babeljs.io/docs/babel-preset-env
            [
                babelPresetEnv,
                {
                    "modules": "auto",
                    "bugfixes": true,
                    "ignoreBrowserslistConfig": false,
                    "shippedProposals": true,
                    "useBuiltIns": false,
                },
            ],
        ],

        "plugins": [

            // NOTE https://babeljs.io/docs/babel-plugin-transform-runtime
            [
                babelPluginTransformRuntime,
                {
                    "absoluteRuntime": true,
                    "corejs": 3,
                    "useESModules": true,
                },
            ],
        ],
        ...options,
    };
}
