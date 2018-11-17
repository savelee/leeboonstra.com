module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
        all: ['Gruntfile.js', '_assets/js/**/*.js']
      },
      concat: {
        options: {
          separator: ';',
        },
        dist: {
          src: [
             '_assets/js/libs/ext-core.min.js',
              '_assets/js/libs/ace/ace.min.js',
          'assets/js/script.min.js'],
          dest: 'assets/js/allscripts.js',
        },
      },
      uglify: {
          mangle: {
            except: ['Ext']
          },
          options: {
              beautify: false,
              report: 'min'
          },
          build: {
              src: ['_assets/js/*.js'],
              dest: 'assets/js/script.min.js'
          }
      },
      validation: {
        options: {
                reset: grunt.option('reset') || false,
                stoponerror: false,
                remotePath: "http://localhost/wordpress/",
        }
        //,files: {
        //        src: ['_assets/html/*.html']
        //}
      },
      compass: {
        dist: {
              options: {
                sassDir: '_assets/sass/',
                cssDir: 'assets/css/',
                environment: 'production'
              }
        }
      },
      watch: {
        sass: {
          files: ['_assets/sass/**/*.scss'],
          tasks: ['compass']
        },
        css: {
          files: ['_assets/sass/*.scss'],
          tasks: ['compass'],
        },
        scripts: {
          files: ['_assets/js/**/*.js'],
          tasks: ['jshint','uglify']
        },
        html: {
          files: ['_assets/html/*.html'],
          task: ['validation']
        }
      },
      imagemin: {
        dynamic: {
          files: [{
            expand: true,
            cwd: '_assets/img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'assets/img/'
          }]
        }
      }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('build', ['jshint', 'validation','uglify', 'compass','imagemin']);
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('image', ['imagemin']);

};
