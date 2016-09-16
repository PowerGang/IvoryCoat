
module.exports = function(grunt) {
  
  var env = grunt.option('env');
  
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    dirs: {
      assetPath: 'assets'
    },
    
    watch: {
      options: {
        livereload: true,
      },
      
      sass: {
        files: ['<%= dirs.assetPath %>/sass/**/*.scss'],
        tasks: [
          'sass'
        ]
      }
    },
  
    sass: {
      build: {
        options: {
          sourceMap: true,
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/app.css': 'assets/sass/master.scss'
        }
      },
    },

    connect: {
      dev: {
        port: 1337,
        base: '.'
      }
    }

  });
 

  // Depedencies.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-connect');

  
  grunt.registerTask('build', 'Build project for execution', function() {
   grunt.task.run('sass');
 });
 
};