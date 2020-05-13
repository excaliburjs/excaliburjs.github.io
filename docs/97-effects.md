---
title: Effects
path: /docs/fx
---

## Particle Emission

The easiest way to create a `ParticleEmitter` is to use the
[Particle Tester](http://excaliburjs.com/particle-tester/) to generate code for emitters.

### Example: Adding an emitter

```js
var actor = new ex.Actor(...);
var emitter = new ex.ParticleEmitter(...);
emitter.emitterType = ex.EmitterType.Circle; // Shape of emitter nozzle
emitter.radius = 5;
emitter.minVel = 100;
emitter.maxVel = 200;
emitter.minAngle = 0;
emitter.maxAngle = Math.PI * 2;
emitter.emitRate = 300; // 300 particles/second
emitter.opacity = 0.5;
emitter.fadeFlag = true; // fade particles overtime
emitter.particleLife = 1000; // in milliseconds = 1 sec
emitter.maxSize = 10; // in pixels
emitter.minSize = 1;
emitter.particleColor = ex.Color.Rose;
// set emitter settings
emitter.isEmitting = true;  // should the emitter be emitting
// add the emitter as a child actor, it will draw on top of the parent actor
// and move with the parent
actor.add(emitter);
// or, alternatively, add it to the current scene
engine.add(emitter);
```

## Post Processors

Sometimes it is necessary to apply an effect to the canvas after the engine has completed its drawing pass. A few reasons to do
this might be creating a blur effect, adding a lighting effect, or changing how colors and pixels look.

### Basic post processors

To create and use a post processor you just need to implement a class that implements [[IPostProcessor]], which has one method
[[IPostProcessor.process]]. Set the `out` canvas parameter to the final result, using the `image` pixel data.

Click to read more about [[https://developer.mozilla.org/en-US/docs/Web/API/ImageData|ImageData]] on MDN.

For example:

```typescript
// simple way to grayscale, a faster way would be to implement using a webgl fragment shader
class GrayscalePostProcessor implements IPostProcessor {
  process(image: ImageData, out: CanvasRenderingContext2D) {
     for(var i = 0; i < (image.height * image.width), i+=4){
        // for pixel "i""
        var r = image.data[i+0]; //0-255
        var g = image.data[i+1]; //g
        var b = image.data[i+2]; //b
        image.data[i+3]; //a
        var result = Math.floor((r + g + b) / 3.0) | 0; // only valid on 0-255 integers `| 0` forces int
        image.data[i+0] = result;
        image.data[i+1] = result;
        image.data[i+2] = result;
     }
     // finish processing and write result
     out.putImageData(image, 0, 0);
  }
}
```

### Color Blind Corrector Post Processor

Choosing colors that are friendly to players with color blindness is an important consideration when making a game.

There is a significant portion of the population that has some form of color blindness,
and choosing bad colors can make your game unplayable. We have built
a post processors that can shift your colors into as more visible range for the 3 most common types of
[[https://en.wikipedia.org/wiki/Color_blindness|color blindness]].

- [[ColorBlindness.Protanope|Protanope]]
- [[ColorBlindness.Deuteranope|Deuteranope]]
- [[ColorBlindness.Tritanope|Tritanope]]

This post processor can correct colors, and simulate color blindness. The algorithm is originally sourced from http://www.daltonize.org/.

It is possible to use this on every game, but the game's performance
will suffer measurably. It's better to use it as a helpful tool while developing your game.

Remember, the best practice is to design with color blindness in mind.

Example:

```typescript
var game = new ex.Engine();

var colorBlindPostProcessor = new ex.ColorBlindCorrector(game, false, ColorBlindness.Protanope);

// post processors evaluate left to right
game.postProcessors.push(colorBlindPostProcessor);
game.start();
```

## Sprite effects

You can add [["Drawing/SpriteEffects"|sprite effects]] to an animation through methods
like [[Animation.invert]] or [[Animation.lighten]]. Keep in mind, since this
manipulates the raw pixel values of a [[Sprite]], it can have a performance impact.
"Animations will loop by default. You can use [[Animation.loop]] to change this behavior.

Excalibur offers many sprite effects such as [[Colorize]] to let you manipulate
sprites. Keep in mind, more effects requires more power and can lead to memory or CPU
constraints and hurt performance. Each effect must be reprocessed every frame for each sprite.

It's still recommended to create an [[Animation]] or build in your effects to the sprites
for optimal performance. Because these manipulate raw pixels, there is a performance impact to applying
too many effects. Excalibur tries its best to by using caching to mitigate
performance issues.

There are a number of convenience methods available to perform sprite effects. Sprite effects are
side-effecting.

```typescript
var playerSprite = new ex.Sprite(txPlayer, 0, 0, 80, 80);

// darken a sprite by a percentage
playerSprite.darken(0.2); // 20%

// lighten a sprite by a percentage
playerSprite.lighten(0.2); // 20%
// saturate a sprite by a percentage
playerSprite.saturate(0.2); // 20%
// implement a custom effect
class CustomEffect implements ex.EffectsISpriteEffect {
  updatePixel(x: number, y: number, imageData: ImageData) {
    // modify ImageData
  }
}
playerSprite.addEffect(new CustomEffect());
```

### Custom Effects

Create your own effects by implementing [[ISpriteEffect]].