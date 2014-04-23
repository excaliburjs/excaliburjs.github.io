---
title: Quick Start
---

# Quick Start : Build your first game

Please check out the [API Reference](/docs/api) for specific API methods.


### Download and Install Excalibur 

Review the [install guide](/docs/install.html) for instructions.


### Build your game script

Create a script in your project, here I've named it `game.js`. Excalibur games are built off of the ex.Engine container. It is important to start the engine once you are done buildig your game.

>ProTip&trade;  Call `game.start()` right away so you don't forget


```javascript
// game.js

// Create an instance of the engine. 
// I'm specifying that the game be 800 pixels wide by 600 tall. 
// If no dimensions are specified the game will be fullscreen.
var game = new ex.Engine(800, 600);
// todo build awesome game here

// Start the engine to begin the game.
game.start();
```

Include your game script after your source.

```html
...
<script src="excalibur-version.js"></script>
<script src="game.js"></script>
...

```

Open a browser and view the blank blue screen of goodness.


### Hello Excalibur: Building Breakout!

Thats cool, but lets make something more interesting on the screen.

To do this Excalibur uses a primitive called an `Actor`, and places them into a `Scene`. Think of actors like you would the actors in a play. Actors are the primary way to draw things to the screen.


> ProTip&trade; Actors must be added to a scene to be drawn or updated! `game.addChild(actor)` Will add an actor to the current scene.

```javascript
// game.js

// Create an instance of the engine. 
var game = new ex.Engine(800, 600);

// Create an actor at with a x position of 100px,
// y position of 40px from the bottom of the screen,
// width of 200px, height and a height of 20px
var paddle = new ex.Actor(100, game.getHeight() - 40, 200, 20);

// Lets give it some color with one of the predefinied
// color constants
paddle.color = ex.Color.Chartreuse;

// `game.addChild` is the same as calling 
// `game.currentScene.addChild`
game.addChild(paddle);

// Start the engine to begin the game.
game.start();

```

Open up your favorite browser and you should see something like this
![Hello World Excalibur](images/quickstart/breakoutPartial.png "Hello World Excalibur")


That's neat, but break is way more fun if things move around. Let's make the paddle follow the mouse around in the x direction.
   
```javascript
// Add a mouse move listener
game.on('mousemove', function (ev) {
    paddle.x = ev.x - paddle.getWidth()/2;
});
```

What's breakout without the ball? To make the ball bounce, Excalibur comes prebuilt with an "elastic" collision type the does naive elastic collisions, which is sufficient for breakout.

```javascript
// Create a "ball"
var ball = new ex.Actor(100, 300, 20, 20);

// Set the color
ball.color = ex.Color.Red;

// Set the x velocity in pixels per second
ball.dx = 100;

// Set the y velocity in pixels per second
ball.dy = 100;

// Set the collision Type to elastic so 
ball.collisionType = ex.CollisionType.Elastic;

// Add the ball to the current scene
game.addChild(ball);

```

The ball will now bounce off of the paddle, but does not bounce with the side of the screen to fix that lets take advantage of the `update` event.

```javascript
// Wire up to the update event
ball.on('update', function () {
    // If the ball collides with the left side 
    // of the screen reverse the x velocity
    if (this.x < 0) {
        this.dx *= -1;
    }

    // If the ball collides with the right side
    // of the screen revese the x velocity
    if (this.x + this.getWidth() > game.getWidth()) {
        this.dx *= -1;
    }

    // If the ball collides with the top
    // of the screen reverse the y velocity
    if (this.y < 0) {
        this.dy *= -1;
    }    
});

```

Don't like square balls, me neither. You can create your own custom drawing function like so


```javascript
// Draw is passed a rendering context and a delta in milliseconds since the last frame
ball.draw = function (ctx, delta) {
	// Optionally call original 'base' method
	// ex.Actor.prototype.draw.call(this, ctx, delta)

	// Custom draw code
    ctx.fillStyle = this.color.toString();
    ctx.beginPath();
    ctx.arc(this.x+this.getWidth()/2, this.y+this.getHeight()/2, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

```
> ProTip&trade; Overriding a method like this will remove any built in excalibur functionality. If you would like to call the original draw for example `ex.Actor.prototype.draw.call(this, ctx, delta)`


Breakout needs some bricks to break. To do this we calculate our brick layout and add them to the current scene.

```javascript
// Build Bricks

// Padding between bricks
var padding = 20;//px

var columns = 5;
var rows = 3;

var brickColor = [ex.Color.Violet, ex.Color.Orange, ex.Color.Yellow];

// Individual brick width with padding factored in
var brickWidth = game.getWidth() / columns - padding - padding/columns; // px
var brickHeight = 30;// px
var bricks = [];
for (var j = 0; j < rows; j++) {
    for (var i = 0; i < columns; i++) {
        bricks.push(new ex.Actor(i * (brickWidth + padding) + padding, j * (brickHeight + padding) + padding, brickWidth, brickHeight, brickColor[j % brickColor.length]));
    }
}


bricks.forEach(function (brick) {
    // Add the brick to the current scene to be drawn
    game.addChild(brick);
});
```

When the ball collides with bricks, we want to remove them from the scene.
```javascript
// On collision remove the brick
ball.on('collision', function (ev) {
    if (bricks.indexOf(ev.other) > -1) {
        // kill removes an actor from the current scene
        // therefore it will no longer be drawn or updated
        ev.other.kill();
    }
});
```

Finally, if the ball leaves the screen, the player loses!
```javascript
ball.on('exitviewport', function(){
	alert('You lose!');
});

```

![Breakout Example Excalibur](images/quickstart/breakoutFinal.png "Breakout Example Excalibur")
Congratualtions! You have just created your first game in Excalibur! Please review the documentation for more examples and api reference


The final code reference:
```
// game.js

// Create an instance of the engine. 
var game = new ex.Engine(800, 600);

// Create an actor at with a x position of 100px,
// y position of 40px from the bottom of the screen,
// width of 200px, height and a height of 20px
var paddle = new ex.Actor(100, game.getHeight() - 40, 200, 20);

// Lets give it some color with one of the predefinied
// color constants
paddle.color = ex.Color.Chartreuse;

// add a mouse move listener
game.on('mousemove', function (ev: ex.MouseMove) {
    paddle.x = ev.x - paddle.getWidth()/2;
});

// `game.addChild` is the same as calling 
// `game.currentScene.addChild`
game.addChild(paddle);


// Create a "ball"
var ball = new ex.Actor(100, 300, 20, 20);

// Set the color
ball.color = ex.Color.Red;

// Set the x velocity in pixels per second
ball.dx = 100;

// Set the y velocity in pixels per second
ball.dy = 100;

// Set the collision Type to elastic so 
ball.collisionType = ex.CollisionType.Elastic;

// Wire up to the update event
ball.on('update', function () {
    // If the ball collides with the left side 
    // of the screen reverse the x velocity
    if (this.x < 0) {
        this.dx *= -1;
    }

    // If the ball collides with the right side
    // of the screen revese the x velocity
    if (this.x + this.getWidth() > game.getWidth()) {
        this.dx *= -1;
    }

    // If the ball collides with the top
    // of the screen reverse the y velocity
    if (this.y < 0) {
        this.dy *= -1;
    }    
});

// Draw is passed a rendering context and a delta in milliseconds since the last frame
ball.draw = function (ctx: CanvasRenderingContext2D, delta: number) {
    // Optionally call original 'base' method
	//ex.Actor.prototype.draw.call(this, ctx, delta)

    // Custom draw code
    ctx.fillStyle = this.color.toString();
    ctx.beginPath();
    ctx.arc(this.x+this.getWidth()/2, this.y+this.getHeight()/2, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}




// Add the ball to the current scene
game.addChild(ball);


// Build Bricks

// Padding between bricks
var padding = 20;//px

var columns = 5;
var rows = 3;

var brickColor = [ex.Color.Violet, ex.Color.Orange, ex.Color.Yellow];

// Individual brick width with padding factored in
var brickWidth = game.getWidth() / columns - padding - padding/columns; // px
var brickHeight = 30;// px
var bricks = [];
for (var j = 0; j < rows; j++) {
    for (var i = 0; i < columns; i++) {
        bricks.push(new ex.Actor(i * (brickWidth + padding) + padding, j * (brickHeight + padding) + padding, brickWidth, brickHeight, brickColor[j % brickColor.length]));
    }
}


bricks.forEach(function (brick) {
    // Add the brick to the current scene to be drawn
    game.addChild(brick);
});


// On collision remove the brick
ball.on('collision', function (ev: ex.CollisionEvent) {
    if (bricks.indexOf(ev.other) > -1) {
        // kill removes an actor from the current scene
        // therefore it will no longer be drawn or updated
        ev.other.kill();
    }
});

// When the ball leaves the viewport the player lo
ball.on('exitviewport', function () {
    alert('You lose!');
});

// Start the engine to begin the game.
game.start();

```





