# Excalibur.js Site & Docs

[![Build Status](https://travis-ci.org/excaliburjs/excaliburjs.github.io.svg?branch=site)](https://travis-ci.org/excaliburjs/excaliburjs.github.io)

# Contributing

## Running the Site

    # Install dependencies
    npm install

    # Run site for docs or development
    npm run develop

You will need some kind of `GH_TOKEN` environment variable but we're working on removing that restriction for contributors.

## Writing Docs

User documentation can be contributed to in the `/docs` folder in this repository! It's written in Markdown and follows a very simple format:

**xx-cool-docs.md**

```md
title: "My Cool Documentation Page Title"
url: /cool-docs
---

Just some neat docs that are super awesome and helpful, this is just Markdown-formatted.

A relative-path image embed:

![screenshot](xx-cool-docs/cool-screenshot.png)
```

The `xx` in the filename helps determine the sort order of the navigation (until we come up with a better structure).

Everything else is taken care of--table of contents, image generation, code embedding, etc.

## Linking to Images

To embed an image, we recommend creating a corresponding folder next to your documentation file named the same and put images there. Then you can reference them like:

    ![screenshot](xx-cool-docs/cool-screenshot.png)
    
This is just a relative path to your image, as simple as that!

## Adding Notes

You can embed a "note" block element like:

```html
<docs-note>An info variant note</docs-note>
<docs-note variant="warning">A warning variant note</docs-note>
<docs-note variant="error">A error variant note</docs-note>
<docs-note variant="success">A success variant note</docs-note>
```

# Show Off a Game

Have a game you've made with Excalibur? Submit a PR! Edit the `src/data/showcase.js` file. Upload an image to `src/assets/images/showcase` as a PNG. Import it like the other images in
the showcase module.

# Build Environment

## Requirements

- Node.js (8.x)
- `GH_TOKEN` defined with your GitHub Personal Access Token that has access to excaliburjs org

For building Semantic UI (optional):

- Ruby 2.2.x (ensure it's in PATH)
- Ruby Gems 2.6.x ([fix SSL error on Windows x64](https://gist.github.com/luislavena/f064211759ee0f806c88#gistcomment-1916808))
- Sass (`gem install sass`)
- Windows or Unix-like

## Packages we use

- [Gatsby](http://gatsbyjs.org) for static site generation
- gh-pages for deployment
- Semantic UI framework

Once you've cloned the repository, run the following commands:

    # Install dependencies
    npm install

    # Run site for local development
    npm run develop

    # Compile API reference documentation for each Excalibur tag
    npm run docs

We recommend using the free [Visual Studio Code](http://code.visualstudio.com) editor since it's easy to use and works on any platform.

## Compiling documentation

Travis will automatically compile `master` (edge) and any tagged releases. If a release folder already exists, the GitHub release is ignored and the source controlled version is used.

Compiled documentation lives in `static/docs/api/[version]`. The documentation generation works by cloning each version of Excalibur and running the `npm run apidocs` script. API documentation is generated in `ex/[version]/docs/api` and then copied to the corresponding `static/docs/api/[version]` folder.

**Generating locally**

To generate documentation locally, you can run the following command:

    # Compile edge (master)
    npm run docs

    # Compile specific version
    npm run docs -- [version]

If a `version` is passed, the documentation will build and output to that version's location (`static/docs/api/[version]`). Excalibur versions v0.10.0 and prior will not build locally and are already generated.

### Git Submodules

If the showcase is in Git and can be run in a sub-directory, you can initialize
a submodule in the `showcase` directory.

    git submodule add {clone url} showcase/{showcase name}
    
Example:

    git submodule add https://github.com/eonarheim/Excalibur-Shmup showcase/shmup
    
This is how we can include the Shoot 'Em Up demo without maintaining two versions.
