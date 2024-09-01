const babelPresetEnv = require( "@babel/preset-env" );
const babelPluginSyntaxImportAssertions = require( "@babel/plugin-syntax-import-assertions" );

module.exports = function ( api ) {
    api.cache( false );

    return {
        "presets": [
            [
                babelPresetEnv,
                {
                    "bugfixes": true,
                    "corejs": 3,
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

            //
            babelPluginSyntaxImportAssertions,
        ],
    };
};
