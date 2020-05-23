---
title: Utilities
path: /docs/utilities
---

## Constructor Arguments

In Excalibur there are option bag constructors available on most types. These support any public property or member, methods are not supported. The API documentation does not provide an exhaustive list of possible properties but a list of commonly used properties.

For example instead of doing this:

```typescript
const actor = new ex.Actor(1, 2, 100, 100, ex.Color.Red)
actor.body.collider.type = ex.CollisionType.Active
```

This is possible:

```typescript
const options: ActorArgs = {
   pos: new ex.Vector(1,2);
   width: 100,
   height: 100,
   color: ex.Color.Red,
}

const actor = new ex.Actor(options);
actor.body.collider.type = ex.CollisionType.Active;
```

In fact you can create a duplicate this way

```typescript
const actor = new ex.Actor({
  pos: new ex.Vector(1, 2),
})
const actorClone = new ex.Actor(actor)

expect(actor.pos).toBe(actorClone.pos) // true;
```

Types that support option bags can have their properties mass assigned using the assign method.

```typescript
const actor = new ex.Actor(options)

actor.assign({
  pos: new ex.Vector(100, 100),
  width: 1000,
  color: ex.Color.Red,
})
```

## Colors

Excalibur provides some color static helpers you can use to work with Hex, RGBA and HSL colors. Colors expose different operations that allow you to change them such as lighten and darken.

### Creating colors

```js
// RGBA
new ex.Color(r, g, b, a)
ex.Color.fromRGB(r, g, b, a)

// HSLA
ex.Color.fromHSL(h, s, l, a)
// Hex, alpha optional
ex.Color.fromHex('#000000')
ex.Color.fromHex('#000000FF')

// String representation of a color with rgb as default
// Options include rgb,hsl,hex
ex.Color.toString('rgb')
```

## Working with colors

Since Javascript does not support structs, if you change a color "constant" like [[Color.Black]]
it will change it across the entire game. You can safely use the color operations
like [[Color.lighten]] and [[Color.darken]] because they `clone` the color to
return a new color. However, be aware that this can use up memory if used excessively.

Just be aware that if you directly alter properties (i.e. [[Color.r]], etc.) , this will change it
for all the code that uses that instance of Color.

## Timers

Timers in Excalibur hook into the main loop so they should be used instead of `setTimeout` as they will
start and stop accordingly with the loop.

<docs-note>Timers must be added to the game so they are updated!</docs-note>

```js
const game = new ex.Engine()
const timer = new ex.Timer(() => {
  // do something every 1000ms
}, 1000)

// Add the timer to the current scene
game.add(timer)

// start the game and the timer
game.start().then(() => {
  // start the timer
  timer.start()

  // reset the timer
  timer.reset()

  // stop the timer
  timer.stop()
})
```

## Logging

Rather than using `console.log` you can use Excalibur's native logging provider which can be controlled
with engine options and eventually will support different output mechanisms.

### Example: Logging

```js
// set default log level (default: Info)
ex.Logger.getInstance().defaultLevel = ex.LogLevel.Warn
// this will not be shown because it is below Warn
ex.Logger.getInstance().info('This will be logged as Info')
// this will show because it is Warn
ex.Logger.getInstance().warn('This will be logged as Warn')
// this will show because it is above Warn
ex.Logger.getInstance().error('This will be logged as Error')
// this will show because it is above Warn
ex.Logger.getInstance().fatal('This will be logged as Fatal')
```

## Async Promises

Promises can be chained together and can be useful for creating a queue
of functions to be called when something is done.
The first [[Promise]] you will encounter is probably [[Engine.start]]
which resolves when the game has finished loading.

```js
const game = new ex.Engine()
// perform start-up logic once game is ready
game.start().then(function () {
  // start-up & initialization logic
})
```

### Differences from Native Promises

We are working on rewriting Excalibur to use native ES2015 Promises but until then,
you may notice inconsistencies. You should still be able to use `async` / `await`.

### Handling errors

You can optionally pass an error handler to [[Promise.then]] which will handle
any errors that occur during Promise execution.

```js
const game = new ex.Engine()
game.start().then(
  // success handler
  function () {},
  // error handler
  function (err) {}
)
```

Any errors that go unhandled will be bubbled up to the browser.
