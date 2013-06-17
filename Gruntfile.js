module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      testSrc : {
        src : 'src/**/*.js',
        options : {
          specs : 'test/tests/**/*.js'
        }
      },
      testBuild : {
        src : 'build/**/*.js',
        options : {
          specs : 'test/tests/**/*.js'
        }
      }
    },
    jshint: {
      all: [
        // 'Gruntfile.js',
        'src/**/*.js',
        'test/tests/**/*.js'
      ],
      options: {
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/** <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>\n'
          + ' * Copyright (c) 2013 testproject\n'
          + ' * Distributed under the MIT license\n'
          + '**/\n',
        compress: true
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('test', ['jshint', 'jasmine:testSrc']);
  grunt.registerTask('testBuild', ['jshint', 'jasmine:testBuild']);

  grunt.registerTask('default', ['test', 'uglify', 'testBuild']);

};
