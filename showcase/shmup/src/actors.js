// Actors 

var HealthBar = Label.extend({
   init: function(){
      this.preventCollisions = true;
      this.text = "HP ";
      this.font = Config.font;
      this.scale = 3;
      this.x = 20;
      this.y = game.height - Config.healthBarHeight - 20;
      this.width = Config.healthBarWidth;
      this.height = Config.healthBarHeight;
      this.color = Color.Green;
   },
   draw : function(ctx, delta){
      this.super.draw.call(this, ctx, delta);

      ctx.fillStyle = this.color.toString();
      ctx.strokeStyle = this.color.toString();
      ctx.fillRect(this.x + 50, this.y - this.height, this.width, this.height);
      ctx.strokeRect(this.x + 50, this.y - this.height, Config.healthBarWidth, this.height);
   }
});

var Ship = Actor.extend({
   init : function(){
      this.fixed = true;
      var sprite = new Drawing.Sprite(fighter, 0, 0, 40, 40);
      var spriteAnim = gameSheet.getAnimationByIndices(game, [0, 1, 2], 100);
      spriteAnim.loop = true;
      spriteAnim.setScale(4);
      sprite.setScale(3);
      this.setCenterDrawing(true);
      sprite.transformAboutPoint(new Point(60, 60));
      sprite.setRotation(-Math.PI/2);
      this.addDrawing("default", spriteAnim);


      this.hp = Config.totalHp;

      // Add event listeners
      this.addEventListener('space', function(){
         var b = flipFire(this.x + (flipBarrel?80:0), this.y, 0, Config.playerBulletVelocity, Color.Green);         
         if(b) b.owner = this;
      });

      this.addEventListener('up', function(){
         this.dy = -Config.playerSpeed;
      });

      this.addEventListener('down', function(){
         this.dy = Config.playerSpeed;
      });

      this.addEventListener('left', function(){
         this.dx = -Config.playerSpeed;
      });

      this.addEventListener('right', function(){
         this.dx = Config.playerSpeed;
      });

      this.addEventListener('keyup', function(evt){
         if(InputKey.Up == evt.key || InputKey.Down == evt.key){
            this.dy = 0;
         }
         if(InputKey.Left == evt.key || InputKey.Right == evt.key){
            this.dx = 0;
         }
      });

      this.addEventListener('keydown', function(evt){
         if(InputKey.F == evt.key){
            var m = fireMissile(this.getCenter().x-10, this.getCenter().y - 100);
            m.owner = this;
         }
      });

      this.addEventListener('collision', function(evt){
         if(evt.other instanceof Baddie || evt.other.owner !== this){
            hitSound.play();
            this.blink(3, 1000, 100);
            this.hp -= Config.enemyDamage;
            healthBar.width = Config.healthBarWidth * (this.hp / Config.totalHp);           
         }
      });
   },
   update : function(engine, delta){
      // Call super update
      this.super.update.call(this, engine, delta);

      if(this.hp <= 0){
         // update game to display game over
         gameOver = true;
         var explodeAnim = spriteSheet.getAnimationForAll(game, 40);
         explodeAnim.setScale(3);
         explodeAnim.play(this.x, this.y);
         explodeSound.play();
         this.kill();
      }

      // Keep player in the viewport
      if(this.x < 0) this.x = 0;
      if(this.y < 0) this.y = 0;
      if(this.x > engine.width - this.getWidth()) this.x = (engine.width - this.getWidth());
      if(this.y > engine.height - this.getHeight()) this.y = (engine.height - this.getHeight());

      // Custom collision for enemy bullets
   }
});

var Missile = Actor.extend({
   init : function() {
      var anim = gameSheet.getAnimationByIndices(game, [13, 14, 15], 50);
      anim.loop = true;
      this.setHeight(60);
      this.setWidth(20);
      this.setCenterDrawing(true);
      this.addDrawing("default", anim);
      anim.setScale(3);
      rocketSound.play();

      this.addEventListener('collision', function(evt){
         if(evt.other !== this.owner && !(evt.other instanceof Bullet)){
            rocketSound.stop();
            explodeSound.play();
            this.kill();
         }
      });
   },
   update : function(engine, delta){
      this.super.update.call(this, engine, delta);

      // Clean up if bullets leave the viewport
      if(this.x > engine.width || 
         this.x < 0 || 
         this.y > engine.height || 
         this.y < 0){
         rocketSound.stop();
         this.kill(); 
      }
   }
});

var Bullet = Actor.extend({
   init : function(){
      this.addEventListener('collision', function(evt){
         if(evt.other !== this.owner && !(evt.other instanceof Bullet)){
            this.kill();
         }
      });
   },
   update : function(engine, delta){
      this.super.update.call(this, engine, delta);

      // Clean up if bullets leave the viewport
      if(this.x > engine.width || 
         this.x < 0 || 
         this.y > engine.height || 
         this.y < 0){
         this.kill(); 
      }

      // Custom collision for player bullets
   },/*
   draw : function(ctx, delta){
      ctx.fillStyle = this.color.toString();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.width, 0, 2*Math.PI);
      ctx.closePath();
      ctx.fill();

   },*/
   debugDraw : function(ctx, delta){
      this.super.draw.call(this, ctx, delta);
      var index = this.parent.children.indexOf(this);
      ctx.fillStyle = Color.Yellow.toString();
      ctx.fillText(index, this.x, this.y);
   }
});

var Baddie = Actor.extend({
   init : function(){
      // Set sprite orientation
      var sprite = new Drawing.Sprite(enemyPink, 0, 0, 40, 40);

      var spriteAnim = gameSheet.getAnimationByIndices(game, [10, 11, 12], 100);
      spriteAnim.loop = true;
      spriteAnim.setScale(4);
      this.addDrawing("default", spriteAnim);
      this.setCenterDrawing(true);

      // Define throttled fire function
      this.throttledFire = throttle(enemyFire, 200);

      // Build behavior
      this.moveTo(this.x, this.y + 800, Config.enemySpeed);
      this.moveTo(this.x + 800, this.y, Config.enemySpeed);
      this.moveTo(this.x + 800, this.y + 800, Config.enemySpeed);
      this.moveTo(this.x, this.y, Config.enemySpeed).repeatForever();

      this.angle = 0;
      this.vel = Config.enemyBulletVelocity;

      // add event listeners
      this.addEventListener('collision', function(evt){
         if(!(evt.other.owner instanceof Baddie) && !(evt.other instanceof Baddie)){
            explodeSound.play();
            var explodeAnim = spriteSheet.getAnimationForAll(game, 40);
            explodeAnim.setScale(3);
            explodeAnim.play(this.x, this.y);
            score += 100;
            this.kill(); 

         }
      });
   },
   update : function(engine, delta){
      this.super.update.call(this, engine, delta);
      
      this.angle += Math.PI/20;
      var dx = this.vel * Math.cos(this.angle);
      var dy = this.vel * Math.sin(this.angle);
      var b = this.throttledFire(this.getCenter().x, this.getCenter().y+25, dx, dy);
      if(b){
         //enemyFireSound.play();
         b.owner = this;
      }
   }
});