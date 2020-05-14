---
title: Scenes
path: /docs/scenes
---

## Adding actors to the scene

For an [[Actor]] to be drawn and updated, it needs to be part of the "scene graph".
The [[Engine]] provides several easy ways to quickly add/remove actors from the
current scene.

```js
var game   = new ex.Engine(...);
var player = new ex.Actor();
var enemy  = new ex.Actor();
// add them to the "root" scene
game.add(player);
game.add(enemy);
// start game
game.start();
```

You can also add actors to a [[Scene]] instance specifically.

```js
var game = new ex.Engine();
var level1 = new ex.Scene();
var player = new ex.Actor();
var enemy = new ex.Actor();
// add actors to level1
level1.add(player);
level1.add(enemy);
// add level1 to the game
game.add('level1', level1);
// start the game
game.start();
// after player clicks start game, for example
game.goToScene('level1');
```

## Scene Lifecycle

A [[Scene|scene]] has a basic lifecycle that dictates how it is initialized, updated, and drawn. Once a [[Scene|scene]] is added to
the [[Engine|engine]] it will follow this lifecycle.

![Scene Lifecycle](/assets/images/docs/SceneLifecycle.png)

## Extending scenes

For more complex games, you might want more control over a scene in which
case you can extend [[Scene]]. This is useful for menus, custom loaders,
and levels.

Just use [[Engine.add]] to add a new scene to the game. You can then use
[[Engine.goToScene]] to switch scenes which calls [[Scene.onActivate]] for the
new scene and [[Scene.onDeactivate]] for the old scene. Use [[Scene.onInitialize]]
to perform any start-up logic, which is called once.

**TypeScript**

```ts
class MainMenu extends ex.Scene {
  // start-up logic, called once
  public onInitialize(engine: ex.Engine) {}
  // each time the scene is entered (Engine.goToScene)
  public onActivate() {}
  // each time the scene is exited (Engine.goToScene)
  public onDeactivate() {}
}
// add to game and activate it
game.add('mainmenu', new MainMenu());
game.goToScene('mainmenu');
```

**Javascript**

```js
var MainMenu = ex.Scene.extend({
  // start-up logic, called once
  onInitialize: function(engine) {},
  // each time the scene is activated by Engine.goToScene
  onActivate: function() {},
  // each time the scene is deactivated by Engine.goToScene
  onDeactivate: function() {}
});
game.add('mainmenu', new MainMenu());
game.goToScene('mainmenu');
```

## Scene camera

By default, a [[Scene]] is initialized with a [[Camera]] which
does not move and centers the game world.

Learn more about [[Camera|Cameras]] and how to modify them to suit
your game.

## Cameras

Cameras are attached to [[Scene|Scenes]] and can be changed by
setting [[Scene.camera]]. By default, a [[Scene]] is initialized with a
[[Camera]] that doesn't move and is centered on the screen.

## Focus

Cameras have a position ([[x]], [[y]]) which means they center around a specific
[[Vector|point]].

If a camera is following an [[Actor]], it will ensure the [[Actor]] is always at the
center of the screen. You can use [[x]] and [[y]] instead if you wish to
offset the focal point.

## Camera strategies

Cameras can implement a number of strategies to track, follow, or exhibit custom behavior in relation to a target. A common reason to use a
strategy is to have the [[Camera]] follow an [[Actor]].

In order to user the different built-in strategies, you can access `Camera.strategy`

Lock the camera exactly to the center of the actor's bounding box

```typescript
game.currentScene.camera.strategy.lockToActor(actor);
```

Lock the camera to one axis of the actor, in this case follow the actors x position

```typescript
game.currentScene.camera.strategy.lockToActorAxis(actor, ex.Axis.X);
```

Elastically move the camera to an actor in a smooth motion see [[ElasticToActorStrategy]] for details

```typescript
game.currentScene.camera.strategy.elasticToActor(actor, cameraElasticity, cameraFriction);
```

Keep the actor within a circle around the focus

```typescript
game.currentScene.camera.strategy.radiusAroundActor(actor, radius);
```

Keep the camera limited within camera constraints.  
Make sure that the camera bounds are at least as large as the viewport size.

```typescript
let boundingBox = new BoundingBox(leftBorder, topBorder, rightBorder, bottomBorder);
game.currentScene.camera.strategy.limitCameraBounds(boundingBox);
```

## Custom strategies

Custom strategies can be implemented by extending the [[CameraStrategy]] interface and added to cameras to build novel behavior with `ex.Camera.addStrategy<T>(new MyCameraStrategy<T>())`.

As shown below a camera strategy calculates a new camera position (`ex.Vector`) every frame given a target type, camera, engine, and elapsed delta in milliseconds.

```typescript
/**
 * Interface that describes a custom camera strategy for tracking targets
 */
export interface CameraStrategy<T> {
  /**
   * Target of the camera strategy that will be passed to the action
   */
  target: T;

  /**
   * Camera strategies perform an action to calculate a new focus returned out of the strategy
   */
  action: (target: T, camera: Camera, engine: Engine, delta: number) => Vector;
}
```

## Camera Shake

To add some fun effects to your game, the [[shake]] method
will do a random shake. This is great for explosions, damage, and other
in-game effects.

## Camera Lerp

"Lerp" is short for [Linear Interpolation](http://en.wikipedia.org/wiki/Linear_interpolation)
and it enables the camera focus to move smoothly between two points using timing functions.
Use [[move]] to ease to a specific point using a provided [[EasingFunction]].

## Camera Zooming

To adjust the zoom for your game, use [[zoom]] which will scale the
game accordingly. You can pass a duration to transition between zoom levels.

## Known Issues

**Actors following a path will wobble when camera is moving**  
[Issue #276](https://github.com/excaliburjs/Excalibur/issues/276)
