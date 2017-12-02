module.exports = grunt => {
    grunt.initConfig({
        copy: {
            uiLib: {
                files: [
                    {expand: true, flatten: true, src: ['node_modules/jquery/dist/*.min.*'], dest: 'server/public/lib/js'},
                    {expand: true, flatten: true, src: ['node_modules/jquery.cookie/jquery.cookie.js'], dest: 'server/public/lib/js'},
                    {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/js/bootstrap.min.js'], dest: 'server/public/lib/js'},
                    {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/fonts/*'], dest: 'server/public/lib/fonts/'},
                    {expand: true, flatten: true, src: ['node_modules/bootstrap/dist/css/*.min.css'], dest: 'server/public/lib/css/'}
                ]
            }
        },
        nodemon: {
            express: {
                script: 'index.js',
                options: {
                    watch: ['server/'],
                    cwd: 'server/src'
                }
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'blanketWrapper'
                },
                src: ['server/tests/*.js']
            },
            coverage: {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.html'
                },
                src: ['server/tests/*.js']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mocha-test');
    
    grunt.registerTask('serve', ['copy', 'nodemon:express']);
    grunt.registerTask('testServer', ['mochaTest']);
};
