---
title: Installation Guide
path: /docs/installation
---

### Getting Excalibur

There are several ways you can get Excalibur: as standalone packages, using a script generator, or as raw script files you can download.

#### npm Package

<docs-note>Best for JavaScript/TypeScript projects</docs-note>

If you’re using Node.js or intend to use Excalibur in a primarily JavaScript project, you can install it via [npm](https://docs.npmjs.com/getting-started/what-is-npm).

With [Node installed](https://nodejs.org/en/download/), run the following on the command-line:

```bash
npm install excalibur
```

This will add excalibur to your package.json as a project dependency and will create a folder structure like:

```
/node_modules
    /excalibur
        /dist
            excalibur.js
            excalibur.min.js
            excalibur.d.ts
            ...other files
```

See below for how to reference these files in your project after Excalibur is installed.

View the [excalibur](https://www.npmjs.com/package/excalibur) package on npm.

#### Nuget Package

<docs-note>Best for .NET projects</docs-note>

If you intend to use Excalibur in a primarily .NET-based project (like Xamarin, Windows 10, etc.), you can use [Nuget](https://www.nuget.org/).

With the [.NET SDK installed](https://docs.microsoft.com/en-us/dotnet/framework/install/), run the following on the command-line:

    Install-Package Excalibur

Nuget will automatically place the Excalibur files in the `Content/Scripts` folder of your project:

```
/Content
    /Scripts
        excalibur.js
        excalibur.min.js
        excalibur.d.ts
        ...other files
```

See below for how to reference these files in your project after Excalibur is installed.

View the [Excalibur](https://www.nuget.org/packages/Excalibur/) package on Nuget.

#### Yeoman Generator

You can use the [Excalibur Yeoman generator](https://github.com/excaliburjs/generator-excalibur) to spin up a blank, ready-to-go Excalibur game:

```bash
# Install Yeoman globally
npm install -g yo
# Install the Excalibur generator globally
npm install -g @excaliburjs/generator-excalibur
# Create the folder you want your game to be in
mkdir my-game
# Go into the folder
cd my-game
# Run the excalibur generator
yo @excaliburjs/excalibur
```

The Yeoman generator will automatically create the appropriate package.json and bower.json files and install the needed dependencies for your project.

#### Raw Script Files via CDN or Download

Excalibur is available via [unpkg](https://unpkg.com/) CDN, with the latest version at the following URL:

- https://unpkg.com/excalibur@latest/dist/excalibur.js

You can also download the raw Javascript files from the [Excalibur Distribution repository](https://github.com/excaliburjs/excalibur-dist/releases).

<docs-note>
  Remember, Excalibur is a client-side library and cannot be used in a server-side Node.js
</docs-note>

#### Unstable Builds

If you want to live on the edge and get unstable builds, you can add the Excalibur Appveyor Nuget feed to your project, see [Unstable Builds](https://excaliburjs.com/docs/api/edge/?no-cache=1).

#### Example Project Templates

The excaliburjs organization on GitHub has several example projects:

- [TypeScript, Angular2 & SystemJS](https://github.com/excaliburjs/example-ts-angular2)
- [TypeScript & Webpack][example-webpack]
- [TypeScript & Browserify](https://github.com/excaliburjs/example-ts-browserify)
- [Universal Windows Platform (UWP)](https://github.com/excaliburjs/example-uwp)
- [Apache Cordova](https://github.com/excaliburjs/example-cordova)
- [Xamarin Forms](https://github.com/excaliburjs/example-xamarin)
- [Electron](https://github.com/excaliburjs/example-electron)

These examples allow you to simply clone and start building your game!

#### Referencing Excalibur Standalone

Just include the `excalibur.min.js` file on your page and you’ll be set.

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <script src="excalibur.min.js"></script>
  </body>
</html>
```

<docs-note>
If you used `npm` to install Excalibur, you can use the `node_modules/excalibur/dist/excalibur.min.js` path above in the HTML. We [recommend webpack](https://github.com/excaliburjs/example-ts-webpack) for more sophisticated projects.
</docs-note>

#### Referencing Excalibur via Triple-Slash Reference

For a simple TypeScript-based game, using triple-slash references works great. It requires no extra module system or loaders.

```js
/// <reference path="node_modules/excalibur/dist/excalibur.d.ts" />

const game = new ex.Engine({ ... });
```

Make sure the path is relative to the current TS file. You only need to include the reference on your “entrypoint” file. Then simply include `excalibur.min.js` as mentioned above in your HTML page.

You can also reference Excalibur through the `tsconfig.json`.

```json
{
  "compilerOptions": {
    "target": "es5",
    "outFile": "game.js",
    "types": ["excalibur"]
  }
}
```

#### Module Loaders and Bundlers

Excalibur is built using webpack and ES2015 modules. The standalone files excalibur.js or excalibur.min.js support bundlers, module loaders, and browsers. In the browser, Excalibur is attached to the `window.ex` global namespace. These are the recommended files to use for production deployments.

To get started, first install Excalibur through npm (TypeScript typings are best supported in npm):

    npm install excalibur -D

In a TypeScript project, you can reference Excalibur with the ES6 import style syntax:

```js
// Excalibur is loaded into the ex global namespace
import * as ex from 'excalibur'
```

In a module loader system, such as Webpack, it will automatically bundle Excalibur. See the [webpack example repo][example-webpack]

To support tree-shaking, you should use _named imports_:

```js
import { Actor } from 'excalibur'
```

<docs-note variant="warning">
Excalibur doesn't do the best optimization to support tree-shaking--likely you'll end up importing everything.
</docs-note>

[example-webpack]: https://github.com/excaliburjs/example-ts-webpack
