# Excalibur.js Site

[![Build Status](https://travis-ci.org/excaliburjs/excaliburjs.github.io.svg?branch=site)](https://travis-ci.org/excaliburjs/excaliburjs.github.io)

## Contributing and Editing Content

User documentation can be contributed to in the core repository [excalibur](https://github.com/excaliburjs/Excalibur) under the `docs` folder.

## Build Environment

### Requirements

- Node.js (8.x)
- `GH_TOKEN` defined with your GitHub Personal Access Token that has access to excaliburjs org

For building Semantic UI (optional):

- Ruby 2.2.x (ensure it's in PATH)
- Ruby Gems 2.6.x ([fix SSL error on Windows x64](https://gist.github.com/luislavena/f064211759ee0f806c88#gistcomment-1916808))
- Sass (`gem install sass`)
- Windows or Unix-like

### Packages we use

- [Gatsby](http://gatsbyjs.org) for static site generation
- gh-pages for deployment
- Semantic UI framework

Once you've cloned the repository, run the following commands:

    # Install dependencies
    npm install

    # Run site for local development
    npm develop

    # Compile documentation
    npm run docs

We recommend using the free [Visual Studio Code](http://code.visualstudio.com) editor since it's easy to use and works on any platform.

### Compiling documentation

Travis will automatically compile `master` (edge) and any tagged releases. If a release folder already exists, the GitHub release is ignored and the source controlled version is used.

Compiled documentation lives in `static/docs/api/[version]`. The documentation generation works by cloning each version of Excalibur and running the `npm run apidocs` script. API documentation is generated in `ex/[version]/docs/api` and then copied to the corresponding `static/docs/api/[version]` folder.

**Generating locally**

To generate documentation locally, you can run the following command:

    # Compile edge (master)
    npm run docs

    # Compile specific version
    npm run docs -- [version]

If a `version` is passed, the documentation will build and output to that version's location (`static/docs/api/[version]`). Excalibur versions v0.10.0 and prior will not build locally and are already generated.

## Adding to Showcase

Edit the `src/pages/showcase.js` file. Upload an image to `src/assets/images/showcase` as a PNG.

### Git Submodules

If the showcase is in Git and can be run in a sub-directory, you can initialize
a submodule in the `showcase` directory.

    git submodule add {clone url} showcase/{showcase name}
    
Example:

    git submodule add https://github.com/eonarheim/Excalibur-Shmup showcase/shmup
    
This is how we can include the Shoot 'Em Up demo without maintaining two versions.