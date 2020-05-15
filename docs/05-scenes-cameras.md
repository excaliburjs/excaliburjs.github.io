---
title: Scenes
path: /docs/scenes
---

## Adding actors to the scene

For an [Actor](/docs/actors) to be drawn and updated, it needs to be part of the "scene graph".
The [Engine](/docs/engine) provides several easy ways to quickly add/remove actors from the
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

You can also add actors to a scene instance specifically using [[Scene.add]]:

```js
var game = new ex.Engine()
var level1 = new ex.Scene()
var player = new ex.Actor()
var enemy = new ex.Actor()
// add actors to level1
level1.add(player)
level1.add(enemy)
// add level1 to the game
game.add('level1', level1)
// start the game
game.start()
// after player clicks start game, for example
game.goToScene('level1')
```

## Scene lifecycle

A scene has a basic lifecycle that dictates how it is initialized, updated, and drawn. Once a scene is added to
the engine it will follow this lifecycle:

![Scene Lifecycle](/assets/images/docs/SceneLifecycle.png)

For more complex games, you might want more control over a scene in which
case you can extend [[Scene]]. This is useful for menus, custom loaders,
and levels.

### Adding a scene

Use [[Engine.add]] to add a new scene to the game. Each scene has a `string` key you can assign. You can then use
[[Engine.goToScene]] to switch scenes which runs the scene lifecycle hooks.

```ts
class MainMenu extends ex.Scene {}
// add to game and activate it
game.add('mainmenu', new MainMenu())
game.goToScene('mainmenu')
```

### onInitialize

<docs-note>This is the recommended hook for setting up scene state</docs-note>

[[Scene.onInitialize]] is called **once** when the scene is created for use in the game. It is called _before_ [[Scene.onActivate]] and can be used to set up the scene state. This is typically where you'd add any actors to the scene, set up initial state, and other startup tasks.

```ts
class MainMenu extends Scene {
  private startButton: StartButton

  /**
   * Start-up logic, called once
   */
  public onInitialize(engine: Engine) {
    this.startButton = new StartButton()
    this.add(this.startButton)
  }
}
```

### onActivate

[[Scene.onActivate]] is called when the engine switches to the scene. It may be called more than once during the lifetime of a game, if you switch back and forth between scenes. It is useful for taking action before showing the scene. You may use this hook over `onInitialize` for anything specific to the context in which the scene was activated.

```ts
class MainMenu extends Scene {
  private startButton: StartButton

  /**
   * Each time the scene is entered (Engine.goToScene)
   */
  public onActivate(oldScene: Scene, newScene: Scene) {
    if (oldScene instanceof Level) {
      this.startButton.text = 'Resume game'
    } else {
      this.startButton.text = 'Start game'
    }
  }
}
```

### onDeactivate

[[Scene.onDeactivate]] is called when the engine exits a scene and is typically used for cleanup, exit tasks, and garbage collection.

```ts
class Level extends Scene {
  /**
   * Each time the scene is exited (Engine.goToScene)
   */
  public onDeactivate(oldScene: Scene, newScene: Scene) {
    this.saveState()
  }
}
```

## Cameras

Cameras are attached to scenes and can be changed by
setting [[Scene.camera]]. By default, a [[Scene]] is initialized with a
[[Camera]] that doesn't move and is centered on the screen.

### Focus

Cameras have a position ([[Camera.x|x]], [[Camera.y|y]]) which means they center around a specific
[point](/docs/math#vectors).

If a camera is following an [Actor](/docs/actors), it will ensure the actor is always at the
center of the screen. You can use [[Camera.x]] and [[Camera.y]] instead if you wish to
offset the focal point.

### Camera strategies

Cameras can implement a number of strategies to track, follow, or exhibit custom behavior in relation to a target. A common reason to use a
strategy is to have the [[Camera]] follow an [[Actor]].

In order to user the different built-in strategies, you can access `Camera.strategy`

Lock the camera exactly to the center of the actor's bounding box

```typescript
game.currentScene.camera.strategy.lockToActor(actor)
```

Lock the camera to one axis of the actor, in this case follow the actors x position

```typescript
game.currentScene.camera.strategy.lockToActorAxis(actor, ex.Axis.X)
```

Elastically move the camera to an actor in a smooth motion see [[ElasticToActorStrategy]] for details

```typescript
game.currentScene.camera.strategy.elasticToActor(
  actor,
  cameraElasticity,
  cameraFriction
)
```

Keep the actor within a circle around the focus

```typescript
game.currentScene.camera.strategy.radiusAroundActor(actor, radius)
```

Keep the camera limited within camera constraints.  
Make sure that the camera bounds are at least as large as the viewport size.

```typescript
let boundingBox = new BoundingBox(
  leftBorder,
  topBorder,
  rightBorder,
  bottomBorder
)
game.currentScene.camera.strategy.limitCameraBounds(boundingBox)
```

### Custom strategies

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
  target: T

  /**
   * Camera strategies perform an action to calculate a new focus returned out of the strategy
   */
  action: (target: T, camera: Camera, engine: Engine, delta: number) => Vector
}
```

### Camera shake

To add some fun effects to your game, the [[shake]] method
will do a random shake. This is great for explosions, damage, and other
in-game effects.

### Camera lerp

"Lerp" is short for [Linear Interpolation](http://en.wikipedia.org/wiki/Linear_interpolation)
and it enables the camera focus to move smoothly between two points using timing functions.
Use [[move]] to ease to a specific point using a provided [[EasingFunction]].

### Camera zooming

To adjust the zoom for your game, use [[zoom]] which will scale the
game accordingly. You can pass a duration to transition between zoom levels.

## Known Issues

**Actors following a path will wobble when camera is moving**  
[Issue #276](https://github.com/excaliburjs/Excalibur/issues/276)
