/*globals module */
var path = require('path');
var fs = require('fs');

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dest: "_ghpages",

    //
    // Global assemble options
    //
    assemble: {

      // Globals
      options: {
        pkg: grunt.file.readJSON('package.json'),
        
        // Register Swig extensions
        helpers: ['extensions/*.js', 'extensions/filters/*.js'],
        
        flatten: true,
        prettify: {
          indent: 2,
          condense: true,
          newlines: true
        },

        // Helper options
        markdown: { convert: true, toc: false },
        marked: {
          process: true
        },

        // Templates and data
        data: 'data/*.{json,yml}',
        assets: '<%= dest %>/assets',
        partials: 'partials/*.{html,md}',
        layoutdir: 'layouts',
        layoutext: '.html',
        layout: 'default',

        // global vars
        year: "<%= new Date().getFullYear() %>",
        googleGroup: "https://groups.google.com/forum/#!forum/excaliburjs"
      },

      //
      // Main site
      site: {
        files: {
          '<%= dest %>/': ['pages/*.html']
        }
      },
      
      //
      // Showcase
      showcase: {
        files: [
          {
            expand: true,
            cwd: 'pages/showcase',
            src: ['**/*.html'],
            dest: '<%= dest %>/showcase/'
          }
        ]
      },

      //
      // Docs (Markdown)
      // @todo Have to use handlebars because swig doesn't work. See:
      //       https://github.com/assemble/assemble/issues/494
      docs: {
        options: {
          ext: '.html',
          engine: 'handlebars',
          layout: 'docs'
        },
        files: { '<%= dest %>/docs/': 'content/docs/**/*.md' }
      }
    },

    //
    // Copy static files over
    //
    copy: {

      // asset files
      assets: {
        files: [
		  { expand: true, cwd: 'content/docs/images', src: ['**'], dest: '<%= dest %>/docs/images' },
          { expand: true, cwd: 'showcase', src: ['**'], dest: '<%= dest %>/showcase/' },
          { expand: true, cwd: 'assets', src: ['**'], dest: '<%= assemble.options.assets %>' },
          { '<%= dest %>/': 'favicon.png' },
          { '<%= dest %>/': 'CNAME' }
        ]
      }      

    },

    // Compile Less to CSS
    less: {
      site: {
        src: ['less/main.less'],
        dest: '<%= assemble.options.assets %>/css/main.css'
      }
    },

    //
    // Clean before assembling
    //
    clean: ['<%= dest %>/**/*.html'],

    //
    // Configure live reload and a static server
    connect: {
      options: {
        port: 3000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: ['<%= dest %>']
        }
      }
    },

    //
    // Reload browser when assets change
    //
    watch: {
      options: { livereload: true },
      site: {
        files: [
          'assets/**/*.js',
          'less/**/*.less',
          'pages/**/*.html',
          'layouts/**/*.html',
          'content/**/*.md',
          'partials/**/*.html',
          'extensions/**/*.js'
        ],
        tasks: ['clean', 'copy', 'less', 'assemble']
      }
    },
    
    //
    // Shell
    //
    shell: {
      docs: {        
        command: 'node docs.js'
      }
    },
    
    //
    // Git Commands
    //
    'gh-pages': {
      
      options: {
        base: '<%= dest %>',
        branch: 'master',
        repo: '<%= pkg.repository.url %>',
        message: 'Site updated at <%= new Date().toString() %>'
      },
      
      src: '**/*'
      
    }
  });

  // Assemble API tasks
  (function () {
    var out = {};

    // get all API doc folders
    var folders = fs.readdirSync('./data/yui');

    folders.forEach(function (folder) {

      // create grunt cmd for each one
      out[folder] = { 
        options: {
          plugins: ['plugins/yui.js'],
          layout: 'api',
          engine: 'handlebars',
          yui: {
            data: 'data/yui/' + folder + '/data.json',
            dest: '<%= dest %>/docs/api/' + folder + '/'
          }
        }        
      };
      out[folder].files = {};
      out[folder].files['<%= dest %>/docs/api/'] = 'pages/api/*.html';
    });

    grunt.config.merge({
      assemble: out
    });

  })();

  // Load npm plugins to provide necessary tasks
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('assemble-less');
  grunt.loadNpmTasks('grunt-gh-pages');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Default task to be run
  grunt.registerTask('default', ['clean', 'copy:assets', 'less', 'assemble']);

  // Task for development that reloads browser when you make changes
  grunt.registerTask('design', ['clean', 'copy:assets', 'less', 'assemble', 'connect', 'watch']);
  
  // YUI doc generation
  grunt.registerTask('docs', ['shell:docs']);
  
  // Task to deploy to GH (only contributors)
  grunt.registerTask('deploy', ['default', 'gh-pages']);
};
