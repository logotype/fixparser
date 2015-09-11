var babel = require('babel');

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'node_modules/babel/node_modules/babel-core/browser-polyfill.js', instrument: false},
            'src/*.js'
        ],

        tests: [
            'test/Test-*.js'
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                babel: babel,
                stage: 0
            })
        }
    };
};