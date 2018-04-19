/*globals module */
const path = require('path');
const fs = require('fs');

module.exports = grunt => {
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
        release: {
          tag: process.env.GH_RELEASE_TAG,
          size: (Number.parseInt(process.env.GH_RELEASE_SIZE, 10) / 1024) + 'kb',
          gzip: (Number.parseInt(process.env.GH_RELEASE_GZIP, 10) / 1024) + 'kb'
        },

        // Register Swig extensions
        helpers: ['extensions/*.js'],
        
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
      // Samples
      samples: {
        files: [
          {
            expand: true,
            cwd: 'pages/samples',
            src: ['**/*.html'],
            dest: '<%= dest %>/samples/'
          }
        ]
      },  

      //
      // Gallery
      gallery: {
        files: [
          {
            expand: true,
            cwd: 'pages/gallery',
            src: ['**/*.html'],
            dest: '<%= dest %>/gallery/'
          }
        ]
      },    
    },
    
    //
    // Copy static files over
    //
    copy: {

      // asset files
      assets: {
        files: [		  
          { expand: true, cwd: 'showcase', src: ['**'], dest: '<%= dest %>/samples/' },
          { expand: true, cwd: 'assets', src: ['**'], dest: '<%= assemble.options.assets %>' },
          { '<%= dest %>/': 'favicon.png' },
          { '<%= dest %>/': 'CNAME' },
          { '<%= dest %>/': '.gitattributes' },
          { '<%= dest %>/': '.nojekyll' }
        ]
      },

      api: {
        files: [{ expand: true, cwd: 'pages/api/', src: '**', dest: '<%= dest %>/docs/api' }]
      }      

    },

    //
    // Clean before assembling
    //
    clean: {
      html: ['<%= dest %>/**/*.html', '!<%= dest %>/docs/api/**/*.html'],
      assets: ['<%= dest %>/assets/**/*.{js,css,png,jpg,gif,eot,svg,woff,ttf,woff2}']
    },

    //
    // Configure live reload and a static server
    connect: {
      options: {
        port: 1774,
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
          'pages/**/*.html',
          'layouts/**/*.html',
          'partials/**/*.html',
          'extensions/**/*.js',
          'ui/src/site/**/*.overrides',
          'ui/src/site/**/*.variables'
        ],
        tasks: ['clean', 'shell:ui', 'copy', 'assemble']
      }
    },
    
    //
    // Shell
    //
    shell: {
      docs: {        
        command: 'node docs.js'
      },

      ui: {
        command: 'gulp build --cwd ui'
      }
    }
  });

  // Load npm plugins to provide necessary tasks
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');

  // Default task to be run
  grunt.registerTask('default', ['clean', 'shell:ui', 'copy', 'assemble']);

  // Task for development that reloads browser when you make changes
  grunt.registerTask('design', ['default', 'connect', 'watch']);
  
  // Docs generation
  grunt.registerTask('docs', ['shell:docs']);

  // Travis CI
  grunt.registerTask('travis', ['docs', 'default']);
};
