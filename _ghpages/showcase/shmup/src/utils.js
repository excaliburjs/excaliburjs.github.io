// utilities 
var throttle = function(func, throttle){
   var lastTime = Date.now();
   var throttle = throttle;
   return function(){
      var currentTime = Date.now();
      if(currentTime - lastTime > throttle){
         var val = func.apply(this, Array.prototype.slice.call(arguments,0));
         lastTime = currentTime;
         return val;
      }
   }
}

var fireBullet = function(x, y, velx, vely, color){
   var b = new Bullet(x, y, 5, 5, color || Color.Red);
   b.dx = velx;
   b.dy = vely;
   game.addChild(b);
   return b;
};

var fireMissile = function(x, y){
   var m = new Missile(x, y);
   m.dy = Config.missileSpeed;
   game.addChild(m);
   return m;
};

var flipBarrel = false;
var flipFire = throttle(function(){
   var b = fireBullet.apply(this, Array.prototype.slice.call(arguments,0));
   flipBarrel = !flipBarrel;
   laserSound.play();
   return b;
}, Config.playerFireThrottle);

var getEnemyBulletAnim = function(){
   var anim = gameSheet.getAnimationByIndices(game, [3, 4, 5, 6, 7, 8, 7, 6, 5, 4], 100);
   anim.setScale(2);
   anim.loop = true;   
   return anim;
};

var enemyFire = function(x, y, velx, vely){
   var b = new Bullet(x, y, 5, 5);
   b.color = Color.White;
   b.dx = velx;
   b.dy = vely;
   b.addDrawing("default", getEnemyBulletAnim());
   b.setCenterDrawing(true);
   game.addChild(b);
   return b;
};