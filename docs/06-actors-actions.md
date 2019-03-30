---
title: Actors
path: /docs/actors
---

## Actors

For quick and dirty games, you can just create an instance of an `Actor`
and manipulate it directly.

Actors (and other entities) must be added to a [[Scene]] to be drawn
and updated on-screen.

```ts
var player = new ex.Actor();

// move the player
player.vel.x = 5;

// add player to the current scene
game.add(player);
```

`game.add` is a convenience method for adding an `Actor` to the current scene. The equivalent verbose call is `game.currentScene.add`.

### Actor Lifecycle

An [[Actor|actor]] has a basic lifecycle that dictates how it is initialized, updated, and drawn. Once an actor is part of a
[[Scene|scene]], it will follow this lifecycle.

![Actor Lifecycle](/assets/images/docs/ActorLifecycle.png)

### Extending actors

For "real-world" games, you'll want to `extend` the `Actor` class.
This gives you much greater control and encapsulates logic for that
actor.

You can override the [[onInitialize]] method to perform any startup logic
for an actor (such as configuring state). [[onInitialize]] gets called
**once** before the first frame an actor is drawn/updated. It is passed
an instance of [[Engine]] to access global state or perform coordinate math.

**TypeScript**

```ts
class Player extends ex.Actor {
  public level = 1;
  public endurance = 0;
  public fortitude = 0;

  constructor() {
    super();
  }

  public onInitialize(engine: ex.Engine) {
    this.endurance = 20;
    this.fortitude = 16;
  }

  public getMaxHealth() {
    return 0.4 * this.endurance + 0.9 * this.fortitude + this.level * 1.2;
  }
}
```

**Javascript**

In Javascript you can use the [[extend]] method to override or add
methods to an `Actor`.

```js
var Player = ex.Actor.extend({
  level: 1,
  endurance: 0,
  fortitude: 0,

  onInitialize: function(engine) {
    this.endurance = 20;
    this.fortitude = 16;
  },

  getMaxHealth: function() {
    return 0.4 * this.endurance + 0.9 * this.fortitude + this.level * 1.2;
  }
});
```

### Updating actors

Override the [[update]] method to update the state of your actor each frame.
Typically things that need to be updated include state, drawing, or position.

Remember to call `super.update` to ensure the base update logic is performed.
You can then write your own logic for what happens after that.

The [[update]] method is passed an instance of the Excalibur engine, which
can be used to perform coordinate math or access global state. It is also
passed `delta` which is the time in milliseconds since the last frame, which can be used
to perform time-based movement or time-based math (such as a timer).

**TypeScript**

```ts
class Player extends Actor {
  public update(engine: ex.Engine, delta: number) {
    super.update(engine, delta); // call base update logic

    // check if player died
    if (this.health <= 0) {
      this.emit('death');
      this.onDeath();
      return;
    }
  }
}
```

**Javascript**

```js
var Player = ex.Actor.extend({
  update: function(engine, delta) {
    ex.Actor.prototype.update.call(this, engine, delta); // call base update logic

    // check if player died
    if (this.health <= 0) {
      this.emit('death');
      this.onDeath();
      return;
    }
  }
});
```

### Drawing actors

Override the [[draw]] method to perform any custom drawing. For simple games,
you don't need to override `draw`, instead you can use [[addDrawing]] and [[setDrawing]]
to manipulate the [[Sprite|sprites]]/[[Animation|animations]] that the actor is using.

### Working with Textures & Sprites

Think of a [[Texture|texture]] as the raw image file that will be loaded into Excalibur. In order for it to be drawn
it must be converted to a [[Sprite]].

A common usage is to load a [[Texture]] and convert it to a [[Sprite]] for an actor. If you are using the [[Loader]] to
pre-load assets, you can simply assign an actor a [[Sprite]] to draw. You can also create a
[[Texture.asSprite|sprite from a Texture]] to quickly create a [[Sprite]] instance.

```ts
// assume Resources.TxPlayer is a 80x80 png image

public onInitialize(engine: ex.Engine) {

   // set as the "default" drawing
   this.addDrawing(Resources.TxPlayer);

   // you can also set a Sprite instance to draw
   this.addDrawing(Resources.TxPlayer.asSprite());
}
```

### Working with Animations

A [[SpriteSheet]] holds a collection of sprites from a single [[Texture]].
Use [[SpriteSheet.getAnimationForAll]] to easily generate an [[Animation]].

```ts
// assume Resources.TxPlayerIdle is a texture containing several frames of an animation

public onInitialize(engine: ex.Engine) {

   // create a SpriteSheet for the animation
   var playerIdleSheet = new ex.SpriteSheet(Resources.TxPlayerIdle, 5, 1, 80, 80);

   // create an animation
   var playerIdleAnimation = playerIdleSheet.getAnimationForAll(engine, 120);

   // the first drawing is always the current
   this.addDrawing("idle", playerIdleAnimation);
}
```

### Custom drawing

You can always override the default drawing logic for an actor in the [[draw]] method,
for example, to draw complex shapes or to use the raw
[[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D|Canvas API]].

Usually you should call `super.draw` to perform the base drawing logic, but other times
you may want to take over the drawing completely.

```ts
public draw(ctx: CanvasRenderingContext2D, delta: number) {

   super.draw(ctx, delta); // perform base drawing logic

   // custom drawing
   ctx.lineTo(...);
}
```


### Collision Detection

By default Actors do not participate in collisions. If you wish to make
an actor participate, you need to switch from the default [[CollisionType.PreventCollision|prevent collision]]
to [[CollisionType.Active|active]], [[CollisionType.Fixed|fixed]], or [[CollisionType.Passive|passive]] collision type.

```ts
public Player extends ex.Actor {
   constructor() {
      super();
      // set preferred CollisionType
      this.collisionType = ex.CollisionType.Active;
   }
}

// or set the collisionType

var actor = new ex.Actor();
actor.collisionType = ex.CollisionType.Active;
```

### Traits

Traits describe actor behavior that occurs every update. If you wish to build a generic behavior
without needing to extend every actor you can do it with a trait, a good example of this may be
plugging in an external collision detection library like [[https://github.com/kripken/box2d.js/|Box2D]] or
[[http://wellcaffeinated.net/PhysicsJS/|PhysicsJS]] by wrapping it in a trait. Removing traits can also make your
actors more efficient.

Default traits provided by Excalibur are [["Traits/CapturePointer"|pointer capture]],
[["Traits/TileMapCollisionDetection"|tile map collision]],
and [["Traits/OffscreenCulling"|offscreen culling]].

### Using Groups

Groups can be used to detect collisions across a large number of actors. For example
perhaps a large group of "enemy" actors.

```typescript
var enemyShips = engine.currentScene.createGroup("enemy");
var enemies = [...]; // Large array of enemies;
enemyShips.add(enemies);
var player = new Actor();
engine.currentScene.add(player);
enemyShips.on('precollision', function(ev: CollisionEvent){
  if (e.other === player) {
      //console.log("collision with player!");
  }
});
```



### Adding actors to the scene

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

## Actions

Actions can be chained together and can be set to repeat,
or can be interrupted to change.

Actor actions are available off of [[Actor.actions]].

### Chaining Actions

You can chain actions to create a script because the action
methods return the context, allowing you to build a queue of
actions that get executed as part of an [[ActionQueue]].

```ts
class Enemy extends ex.Actor {
  public patrol() {
    // clear existing queue
    this.actions.clearActions();
    // guard a choke point
    // move to 100, 100 and take 1.2s
    // wait for 3s
    // move back to 0, 100 and take 1.2s
    // wait for 3s
    // repeat
    this.actions
      .moveTo(100, 100, 1200)
      .delay(3000)
      .moveTo(0, 100, 1200)
      .delay(3000)
      .repeatForever();
  }
}
```

### Example: Follow a Path

You can use [[ActionContext.moveTo|Actor.actions.moveTo]] to move to a specific point,
allowing you to chain together actions to form a path.

This example has a `Ship` follow a path that it guards by
spawning at the start point, moving to the end, then reversing
itself and repeating that forever.

```ts
public Ship extends ex.Actor {
  public onInitialize() {
    var path = [
      new ex.Vector(20, 20),
      new ex.Vector(50, 40),
      new ex.Vector(25, 30),
      new ex.Vector(75, 80)
    ];
    // spawn at start point
    this.x = path[0].x;
    this.y = path[0].y;
    // create action queue
    // forward path (skip first spawn point)
    for (var i = 1; i < path.length; i++) {
      this.actions.moveTo(path[i].x, path[i].y, 300);
    }

    // reverse path (skip last point)
    for (var j = path.length - 2; j >= 0; j--) {
      this.actions.moveTo(path[j].x, path[j].y, 300);
    }
    // repeat
    this.actions.repeatForever();
  }
}
```

While this is a trivial example, the Action API allows complex
routines to be programmed for Actors. For example, using the
[Tiled Map Editor](http://mapeditor.org) you can create a map that
uses polylines to create paths, load in the JSON using a
[[Resource|Generic Resource]], create a [[TileMap]],
and spawn ships programmatically while utilizing the polylines
to automatically generate the actions needed to do pathing.

### Custom Actions

The API does allow you to implement new actions by implementing the [[IAction]]
interface, but this will be improved in future versions as right now it
is meant for the Excalibur team and can be advanced to implement.

You can manually manipulate an Actor's [[ActionQueue]] using
[[Actor.actionQueue]]. For example, using [[ActionQueue.add]] for
custom actions.

### Future Plans

The Excalibur team is working on extending and rebuilding the Action API
in future versions to support multiple timelines/scripts, better eventing,
and a more robust API to allow for complex and customized actions.


## Triggers

```js
// Start the engine
var game = new ex.Engine({ width: 800, height: 600, displayMode: ex.DisplayMode.FullScreen });

// Uncomment next line to make the trigger box visible
// game.isDebug = true;

// create a handler
function onTrigger() {
  // `this` will be the Trigger instance
  ex.Logger.getInstance().info('Trigger was triggered!', this);
}

// set a trigger at (100, 100) that is 40x40px that can only be fired once
var trigger = new ex.Trigger({
  width: 40,
  height: 40,
  pos: new ex.Vector(100, 100),
  repeat: 1,
  target: actor,
  action: onTrigger
});

// create an actor above the trigger
var actor = new ex.Actor(100, 0, 40, 40, ex.Color.Red);

// Enable collision on actor (else trigger won't fire)
actor.collisionType = ex.CollisionType.Active;

// tell the actor to move across the trigger with a velocity of 100
actor.actions.moveTo(100, 200, 100);

// Add trigger and actor to our scene and start the scene
game.add(trigger);
game.add(actor);
game.start();
```
