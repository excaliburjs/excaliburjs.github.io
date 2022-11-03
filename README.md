# Excalibur.js Site & Docs

[![Build Status](https://travis-ci.org/excaliburjs/excaliburjs.github.io.svg?branch=site)](https://travis-ci.org/excaliburjs/excaliburjs.github.io)

# Contributing

## Running the Site

    # Install dependencies
    npm install

    # Initialize sub repos
    git submodule init
    git submodule update

    # Run site for docs or development
    npm run develop

### `GH_TOKEN` GitHub Personal Access Token

You will need a `GH_TOKEN` environment variable for the site to start. The scope can be `repo:public`. See [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in GitHub documentation for details.

You can specify the token in your system environment variables on [Windows](https://www.youtube.com/watch?v=bEroNNzqlF4) or [Linux](https://www.youtube.com/watch?v=Y6_7xaxkPik).

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
<Note> An info variant note </Note>
<Note variant="warning"> A warning variant note </Note>
<Note variant="error"> A error variant note </Note>
<Note variant="success"> A success variant note </Note>
```

> **Note:** The blank line after `<Note>` is important to format the body as Markdown. Prettier will handle this for you, if you forget.

## Embedding Examples

To embed an iframe pointing to our [Storybook-based examples](https://excaliburjs.com/examples), use the `<Example />` component:

```html
<Example story="id_of_story" />
```

The `story` prop takes the Storybook ID to navigate to.

_TODO:_ Allow embedding just the canvas.

# Show Off a Game

Have a game you've made with Excalibur? Submit a PR! Edit the `src/data/showcase.js` file. Upload an image to `src/assets/images/showcase` as a PNG. Import it like the other images in
the showcase module.

# Build Environment

## Requirements

- Node.js (16.x)
- `GH_TOKEN` defined with your GitHub Personal Access Token that has access to excaliburjs org

## Packages we use

- [Gatsby](http://gatsbyjs.org) for static site generation
- gh-pages for deployment
- Semantic UI framework

Once you've cloned the repository, run the following commands:

    # Install dependencies
    npm install

    # Run site for local development
    npm run develop

    # Watch for style changes (css)
    npm run styles

    # Compile API reference documentation for each Excalibur tag
    npm run docs

We recommend using the free [Visual Studio Code](http://code.visualstudio.com) editor since it's easy to use and works on any platform.

## Building styles

For building Semantic UI:

- Ruby 2.2.x (ensure it's in PATH)
- Ruby Gems 2.6.x ([fix SSL error on Windows x64](https://gist.github.com/luislavena/f064211759ee0f806c88#gistcomment-1916808))
- Sass (`gem install sass`)
- Windows or Unix-like

  # Build styles (outputs css)

  npm run build:styles

  # Watch for style changes

  npm run styles

During local development, you'd open two terminals with `npm start` and `npm run styles` at the same time. The CI build will ensure any unbuilt styles
are built and deployed so you don't have to remember to compile CSS before commit.

## Compiling documentation

GitHub will automatically compile `master` (edge) and any tagged releases. If a release folder already exists, the GitHub release is ignored and the source controlled version is used.

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
