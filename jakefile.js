/*global desc, task, jake, fail, complete */

"use strict";

task('default', ['lint']);


desc('lint everything');
task('lint', [], function() {
    var lint = require('./build/lint/lint_runner.js');
    var files = new jake.FileList();
    files.include('**/*.js');
    files.exclude('node_modules');


    var options = {
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

    lint.validateFileList(files.toArray(), options, {});
});
