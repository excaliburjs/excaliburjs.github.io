---
title: Assets
path: /docs/assets
---

Almost every game is more than just boxes and circles. Excalibur provides an asset loading feature that can help you preload things like JSON files, images, and sounds.

## Creating an asset loader

When calling [[Engine.start]], you can optionally pass an asset [[Loader]]. This loader will contain a reference to any [[Loadable|"loadables"]] you want to load.

```ts
const loader = new ex.Loader([
  /* add Loadables here */
])
```

[[Loadable|Loadables]] are different kinds of assets such as textures, sounds, and generic resources.

<docs-note>**Anytime** you call `game.start(loader)`, the game will pause and the engine will load assets. This means that you _do not have to load every asset at once_! Instead you may want to call `game.start(loader)` initially with core assets and then again when [initializing a Scene](/docs/scenes#initialization).</docs-note>

## Using a web server

The asset loader **only works with a web server** since it loads assets with [XHR](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest). That means you cannot use the loader when double-clicking and running an HTML file in the browser. The browser throws errors that will prevent you from loading assets.

The fastest way to serve a folder of files is by using the [serve](https://npmjs.org/package/serve) NPM package.

```bash
# Serve the current directory
npx serve .

# Serve a folder
npx serve ./dist
```

If you are developing a game using Excalibur with Webpack, Parcel, or another bundler, these typically already come with dev servers for running your game.

### Relative vs. absolute paths

Given this directory structure:

```
/root
  src/
    game.js
  assets/
    textures/
      map.png
  index.html
```

And you serve from the `root` directory like this:

```
> cd root
> npx serve .

Now serving on http://localhost:3000/
```

The path to your assets doesn't matter as much because both absolute and relative paths will work:

- `/assets/textures/map.png => HTTP 200 OK`
- `assets/textures/map.png => HTTP 200 OK`

But if you are serving under a sub-directory, like `http://localhost:3000/root/index.html` then the format of your paths matter:

- `/assets/textures/map.png => HTTP 404 Not Found`
- `assets/textures/map.png => HTTP 200 OK`

The first path will fail to load as the absolute asset path would now be `/root/assets` and not `/assets`. Use a relative path to load assets _relative_ to the HTML file serving your game.

## Asset types

### Images and textures

Textures are the raw images that back [sprites](/docs/drawings#sprites). Excalibur supports loading most formats that browsers natively support like PNG, BMP, and JPEG. GIFs are even converted to [Excalibur animations](/docs/drawings#animations).

Pass an instance of [[Texture]] to a [[Loader]] to preload it. Once a texture
is loaded, you can generate a sprite with it:

```js
var txPlayer = new ex.Texture('/assets/tx/player.png')
var loader = new ex.Loader([txPlayer])
game.start(loader).then(function () {
  var player = new ex.Actor()
  player.addDrawing(txPlayer)
  game.add(player)
})
```

### Sounds

Excalibur supports audio assets like WAV and MP3. Any audio codec or container [supported by browsers](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs) should be able to work with Excalibur. For the widest compatibility, typically we recommend MP3 as it combines quality and compression for the best results.

Pass an instance of [[Sound]] to a [[Loader]] to preload it. Once a sound
is loaded, you can [[Sound.play|play]] it. You can pass an argument from 0.0 - 1.0
into [[Sound.play|play]] in order to play the sound at that volume.

```js
// define multiple sources (such as mp3/wav/ogg) as a browser fallback
var sndPlayerDeath = new ex.Sound(
  '/assets/snd/player-death.mp3',
  '/assets/snd/player-death.wav'
)
var loader = new ex.Loader(sndPlayerDeath)
game.start(loader).then(function () {
  sndPlayerDeath.play()
})
```

See the [examples](https://excaliburjs.com/examples/?path=/docs/audio) or API documentation for [[Sound]] for additional features available such as looping, volume setting, and more.

<docs-example story="audio"></docs-example>

### Generic resources

[[Resource]] is a generic [[Loadable]] like JSON files, compressed files, or binary files. It passes the raw data interpreted by browser based on the MIME type. See [XHLHttpRequest.response](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response) for the different kinds of data to expect when loading. This response is passed to a [[Resource.processData]] method you need to implement:

```js
var resLevel1 = new ex.Resource('/assets/levels/1.json', 'application/json')
var loader = new ex.Loader(resLevel1)
// attach a handler to process once loaded
resLevel1.processData = function (data) {
  // process JSON
  var json = JSON.parse(data)
  // create a new level (inherits Scene) with the JSON configuration
  var level = new Level(json)
  // add a new scene
  game.add(level.name, level)
}
game.start(loader)
```

For a more complex example of using generic resources, see the [Excalibur Tiled](https://github.com/excaliburjs/excalibur-tiled) plug-in that loads [Tiled](https://www.mapeditor.org/) map editor files.

## Custom loadables

You can implement the [[Loadable]] interface to create your own custom loadables.

This is an advanced feature, as the [Resource](#generic-resources) class already wraps logic around
blob/plain data for usages like JSON, configuration, levels, etc through XHR (Ajax).

However, as long as you implement the facets of a loadable, you can create your
own.
