import babelPresetEnv from "@babel/preset-env";
import babelPluginTransformRuntime from "@babel/plugin-transform-runtime";

export default {
    "browserslistConfigFile": true,

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
            },
        ],
    ],

    "plugins": [

        // NOTE https://babeljs.io/docs/babel-plugin-transform-runtime
        [
            babelPluginTransformRuntime,
            {
                "corejs": 3,
                "useESModules": true,
            },
        ],
    ],
};
