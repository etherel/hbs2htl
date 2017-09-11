/*
 * assemble-examples <https://github.com/assemble/assemble-examples>
 *
 * Copyright (c) 2014 Jon Schlinkert, Brian Woodward, contributors.
 * Licensed under the MIT license.
 */


module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    assemble: {
      options: {
        flatten: true,
        partials: ['templates/components/content/**/*.hbs'],
        data: 'templates/components/**/*.json',
        layoutdir: 'templates/components/structure',
        version: '0.1.0',
        helpers: ['helpers/*.js'],
      },
      site: {
        files: {'site/': ['templates/components/content/**/*.hbs']},
        options : {
            layout: 'page.hbs'
        }
      },
      dist: {
          files: [ {
              expand: true,
              dest: 'dist',
              src: 'templates/components/content/**/*.hbs'
          }
      ],



      }

    },
    clean : ['dist', 'site'],
});

  // Load the Assemble plugin.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // The default task to run with the `grunt` command.
  grunt.registerTask('default', ['clean','assemble']);
};
