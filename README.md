# Excalibur.js Site

[![Build Status](https://travis-ci.org/excaliburjs/excaliburjs.github.io.svg?branch=site)](https://travis-ci.org/excaliburjs/excaliburjs.github.io)

## Contributing and Editing Content

Be sure to fork the repository and make all your changes in the `site` branch. Send us a pull request with your changes!

All authored tutorials and documentation is under `content/docs` and are in [Markdown](http://daringfireball.net/projects/markdown/) format. The name of the Markdown file will be the name of the HTML file that gets generated at http://excaliburjs.com/docs. YAML configuration (such as navigation) is under `data` folder.

If you want to contribute a tutorial (or other documentation), all you need to know is Markdown! Create your Markdown tutorial in the `content/docs` folder (pending organizational changes) and send us a pull request to review it. We will add it to the navigation.

Tutorials can be organized into parts like so:
- quickstart.md
- quickstart-appendix1.md
- quickstart-appendix2.md

You can name them however, but it would be best to keep the same prefix. We can then add the additional steps as sub-navigation items to the menu so they'll only display when you view your tutorial.

**Note:** We do support [GHFM](https://help.github.com/articles/github-flavored-markdown) for fenced code blocks. 

## Contributing to the Codebase

### Requirements

- Node.js (0.4.x)
- Ruby 2.2.x (ensure it's in PATH)
- Ruby Gems 2.6.x ([fix SSL error on Windows x64](https://gist.github.com/luislavena/f064211759ee0f806c88#gistcomment-1916808))
- Sass (`gem install sass`)
- Windows or Unix-like

### Packages we use

- Assemble for static site generation
- Grunt for tasks
- Typedoc for API documentation
- Semantic UI framework

Once you've cloned the repository, run the following commands:

    # If not already installed, install grunt globally
    npm install grunt -g

    # Install dependencies
    npm install

    # Run site for local development
    grunt design

We recommend using the free [Visual Studio Code](http://code.visualstudio.com) editor since it's easy to use and works on any platform.

## Adding to Showcase

Edit the `showcase.json` file in `data`. Upload an image to `assets/images/showcase` as a PNG.

### Git Submodules

If the showcase is in Git and can be run in a sub-directory, you can initialize
a submodule in the `showcase` directory.

    git submodule add {clone url} showcase/{showcase name}
    
Example:

    git submodule add https://github.com/eonarheim/Excalibur-Shmup showcase/shmup
    
This is how we can include the Shoot 'Em Up demo without maintaining two versions.

### Compiling documentation

Travis will automatically compile `master` and place it into the edge API documentation.

**Release compiling**

TypeDoc is used to compile docs for Excalibur 0.2+. You should only need to perform the generation once per release and then copy the compiled docs to **_ghpages/docs/api**.

To generate documentation with TypeDoc, you can run the following command:

    node docs.js

Edit docs.js and modify the `git checkout` command to use a specific branch when testing API docs. e.g.

    git checkout -b issue-foo https://...

You will also need to modify the output folder from `edge` to a version for specific version building (or copy the edge to a new folder).