import babelPresetEnv from "@babel/preset-env";
import babelPluginTransformRuntime from "@babel/plugin-transform-runtime";

export default {
    "browserslistConfigFile": true,

    // NOTE https://github.com/babel/babel/issues/9903
    // NOTE https://github.com/babel/babel/discussions/13826
    "exclude": [ /@babel(\/|\\)runtime/, /core-js/ ],

    "sourceType": "unambiguous",

    "compact": false,
    "minified": false,
    "comments": true,

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

                // "useBuiltIns": "usage",
                // "corejs": 3,
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
};
