/*global desc, task, jake, fail, complete */

"use strict";


desc("build and test");
task('default', ['lint']);


desc('lint everything');
task('lint', [], function() {
    var lint = require('./build/lint/lint_runner.js');
    var files = new jake.FileList();
    files.include('**/*.js');
    files.exclude('node_modules');


    function nodeLintOptions() {
        return {
            node: true,
            bitwise: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            undef: true,
            strict: true
        };
    }

    lint.validateFileList(files.toArray(), nodeLintOptions(), {});
});

desc('integrate!');
task('integrate', ['default'], function() {
    console.log('1. make sure git status is clean');
    console.log('2. build on integration box');
    console.log('\na. walk to integration box.');
    console.log('\nb. git pull');
    console.log('\nc. jake');
    console.log('c. git checkout integration');
    console.log('4. git merge master --no-ff --log');
    console.log('5. switch back to master');



    console.log('integration logic here');
});
