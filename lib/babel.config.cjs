const config = require( "#lib/config" );

module.exports = function ( api ) {
    api.cache( false );

    return config;
};
