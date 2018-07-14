# Excalibur.js Site

[![Build Status](https://travis-ci.org/excaliburjs/excaliburjs.github.io.svg?branch=site)](https://travis-ci.org/excaliburjs/excaliburjs.github.io)

## Contributing and Editing Content

User documentation can be contributed to in the core repository [excalibur](https://github.com/excaliburjs/Excalibur) under the `docs` folder.

## Build Environment

### Requirements

- Node.js (8.11.x)
- Ruby 2.2.x (ensure it's in PATH)
- Ruby Gems 2.6.x ([fix SSL error on Windows x64](https://gist.github.com/luislavena/f064211759ee0f806c88#gistcomment-1916808))
- Sass (`gem install sass`)
- Windows or Unix-like

### Packages we use

- Assemble for static site generation
- Grunt for tasks
- Semantic UI framework

Once you've cloned the repository, run the following commands:

    # Install dependencies
    npm install

    # Run site for local development
    npm start

    # Run all Grunt tasks
    npm run all

    # Compile documentation
    npm run docs

We recommend using the free [Visual Studio Code](http://code.visualstudio.com) editor since it's easy to use and works on any platform.

### Compiling documentation

Travis will automatically compile `master` (edge) and any tagged releases. If a release folder already exists, the GitHub release is ignored and the source controlled version is used.

Compiled documentation lives in `pages/api/[version]`. The documentation generation works by cloning each version of Excalibur and running the `npm run apidocs` script. API documentation is generated in `ex/[version]/docs/api` and then copied to the corresponding `pages/api/[version]` folder.

**Generating locally**

To generate documentation locally, you can run the following command:

    # Compile edge (master)
    npm run docs

    # Compile specific version
    npm run docs -- [version]

If a `version` is passed, the documentation will build and output to that version's location (`pages/api/[version]`). Excalibur versions v0.10.0 and prior will not build locally and are already generated.


### Updating npm dependencies

When you update npm dependencies, we use [shrinkpack](https://github.com/JamieMason/shrinkpack) to pack up
and cache all npm packages.

Run the following to update the shrinkwrap when packages are updated:

```sh
# Install shrinkpack globally
npm install -g shrinkpack
# Run npm shrinkwrap and update npm_shrinkwrap.json
npm shrinkwrap --dev
# Run shrinkpack and download/update dependencies locally
shrinkpack .
```

If you run into errors with `npm shrinkwrap --dev` command, run the following:

```
npm install
npm prune
npm dedupe
npm install
npm shrinkwrap --dev
```

## Adding to Showcase

Edit the `showcase.json` file in `data`. Upload an image to `assets/images/showcase` as a PNG.

### Git Submodules

If the showcase is in Git and can be run in a sub-directory, you can initialize
a submodule in the `showcase` directory.

    git submodule add {clone url} showcase/{showcase name}
    
Example:

    git submodule add https://github.com/eonarheim/Excalibur-Shmup showcase/shmup
    
This is how we can include the Shoot 'Em Up demo without maintaining two versions.