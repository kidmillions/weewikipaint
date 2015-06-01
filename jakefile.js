desc('Example!');

task('example', ['dependency'], function() {
    console.log('This is an example');
});

task('dependency', function() {
    console.log('dependency run.');
});