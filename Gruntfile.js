module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        compass: {
            options: {
                importPath: ['bower_components/foundation/scss']
            },
            dist: {
                options: {
                    sassDir: ['assets/scss/'],
                    cssDir: ['assets/css/'],
                    environment: 'development',
                    outputStyle: 'expanded'
                }
            }
        },

        notify: {
            compile: {
                options: {
                    title: 'Compile Success!',
                    message: 'w/ Compass + Bless'
                }
            }
        },

        clean: ['dist/'],

        bless: {
            css: {
                options: {},
                files: {
                    'assets/css/app.css': 'assets/css/lt-ie10.css'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js'],
                tasks: ['build']
            },

            compass: {
                files: ['assets/scss/**/*.scss'],
                tasks: ['compass']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bless');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('build', ['clean','compass','bless','notify:compile']);
    grunt.registerTask('default', ['build','watch']);

}