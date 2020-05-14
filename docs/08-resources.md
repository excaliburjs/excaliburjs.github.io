---
title: Assets
path: /docs/assets
---

[[Resource]] is an [[ILoadable]] so it can be passed to a [[Loader]] to pre-load before
a level or game.

Example usages: JSON, compressed files, blobs.

## Textures and Bitmaps

Textures are the raw image so to add a drawing to a game, you must create
a [[Sprite]]. You can use [[Texture.asSprite]] to quickly generate a Sprite
instance.

### Pre-loading textures

Pass the [[Texture]] to a [[Loader]] to pre-load the asset. Once a [[Texture]]
is loaded, you can generate a [[Sprite]] with it.

```js
var txPlayer = new ex.Texture('/assets/tx/player.png');
var loader = new ex.Loader([txPlayer]);
game.start(loader).then(function() {
  var player = new ex.Actor();
  player.addDrawing(txPlayer);
  game.add(player);
});
```


## Sounds

Pass the [[Sound]] to a [[Loader]] to pre-load the asset. Once a [[Sound]]
is loaded, you can [[Sound.play|play]] it. You can pass an argument from 0.0 - 1.0
into [[Sound.play|play]] in order to play the sound at that volume.

```js
// define multiple sources (such as mp3/wav/ogg) as a browser fallback
var sndPlayerDeath = new ex.Sound('/assets/snd/player-death.mp3', '/assets/snd/player-death.wav');
var loader = new ex.Loader(sndPlayerDeath);
game.start(loader).then(function() {
  sndPlayerDeath.play();
});
```


## Generic Resources

```js
var resLevel1 = new ex.Resource('/assets/levels/1.json', 'application/json');
var loader = new ex.Loader(resLevel1);
// attach a handler to process once loaded
resLevel1.processData = function(data) {
  // process JSON
  var json = JSON.parse(data);
  // create a new level (inherits Scene) with the JSON configuration
  var level = new Level(json);
  // add a new scene
  game.add(level.name, level);
};
game.start(loader);
```

## Advanced: Custom Loadables

You can implement the [[ILoadable]] interface to create your own custom loadables.

This is an advanced feature, as the [[Resource]] class already wraps logic around
blob/plain data for usages like JSON, configuration, levels, etc through XHR (Ajax).

However, as long as you implement the facets of a loadable, you can create your
own.
