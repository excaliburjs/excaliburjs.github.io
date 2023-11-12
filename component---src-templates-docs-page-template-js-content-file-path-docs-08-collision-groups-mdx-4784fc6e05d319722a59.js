"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[4325],{2434:function(n,a,e){e.r(a),e.d(a,{Head:function(){return y},default:function(){return f}});var s=e(1151),t=e(7294);function o(n){const a=Object.assign({p:"p",h2:"h2",a:"a",span:"span",ol:"ol",li:"li",code:"code"},(0,s.ah)(),n.components),{Note:e}=a;return e||function(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),t.createElement(t.Fragment,null,t.createElement(a.p,null,"Collision groups are useful when you want to filter the collision that are possible between colliders\non a granular level above and beyond collision type. This idea is also known as collision layers, collision filters, or collision filtering."),"\n",t.createElement(a.p,null,"Collision groups provide an efficient way optimized in Excalibur to sort colliders into possible colliders."),"\n",t.createElement(a.h2,{id:"motivating-example",style:{position:"relative"}},t.createElement(a.a,{href:"#motivating-example","aria-label":"motivating example permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Motivating example"),"\n",t.createElement(a.p,null,"To help demonstrate how collision groups work to filter collisions, let's consider a simple platformer that has players, enemies, and floors."),"\n",t.createElement(a.p,null,"The rules of our game:"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Players do not collide with each other, but players do collide with enemies and the floor."),"\n",t.createElement(a.li,null,"Enemies do not collide with each other, but they collide with players and the floor."),"\n"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 482px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/24ad8e3488e9788b367dc539d19a78a0/05b37/collision-filtering.jpg"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 36.702127659574465%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAHABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHVgLCP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAQITABL/2gAIAQEAAQUCUOGFORTf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGhAAAwADAQAAAAAAAAAAAAAAAAECITFBcf/aAAgBAQAGPwKs+FKmtHGf/8QAGRABAQEAAwAAAAAAAAAAAAAAAREAMVFh/9oACAEBAAE/IUWUbDg+pCZxz7b/2gAMAwEAAgADAAAAEAf/AP/EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAEDAQE/EKr/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAaEAEBAAMBAQAAAAAAAAAAAAABEQAhQWGR/9oACAEBAAE/EBPWqFHlckhKuRH3zLJIMNi6Ofc//9k=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Example image of our rules"\n        title=""\n        src="/static/24ad8e3488e9788b367dc539d19a78a0/05b37/collision-filtering.jpg"\n        srcset="/static/24ad8e3488e9788b367dc539d19a78a0/bc01b/collision-filtering.jpg 188w,\n/static/24ad8e3488e9788b367dc539d19a78a0/bf173/collision-filtering.jpg 375w,\n/static/24ad8e3488e9788b367dc539d19a78a0/05b37/collision-filtering.jpg 482w"\n        sizes="(max-width: 482px) 100vw, 482px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(a.p,null,"Additional info: see Aurelien's ",t.createElement(a.a,{href:"https://www.aurelienribon.com/post/2011-07-box2d-tutorial-collision-filtering"},"post")," on the subject of collision filtering as it applies to other libraries."),"\n",t.createElement(a.h2,{id:"how-collision-groups-work",style:{position:"relative"}},t.createElement(a.a,{href:"#how-collision-groups-work","aria-label":"how collision groups work permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"How Collision Groups Work"),"\n",t.createElement(e,{variant:"warning"},t.createElement(a.p,null,"By default in Excalibur, collision groups created with ",t.createElement(a.a,{href:"/docs/api/edge/classes/CollisionGroupManager.html#create",title:"View 'CollisionGroupManager.create' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"CollisionGroupManager.create")," do not collide with themselves. Except for the special default group ",t.createElement(a.code,null,"CollisionGroup.All")),t.createElement(a.p,null,"This default behavior can by altered by providing the ",t.createElement(a.code,null,"category")," and ",t.createElement(a.code,null,"mask")," to the the ",t.createElement(a.code,null,"new CollisionGroup(...)")," constructor or by using the ",t.createElement(a.code,null,"CollisionGroup.collidesWith")," helper.")),"\n",t.createElement(a.p,null,'Think about collision groups is as different "categories" (other engines like Unity call collision groups "layers"). Each group is represented by a unique 32 bit integer represented by a power of 2. ',t.createElement(a.a,{href:"/docs/api/edge/classes/CollisionGroupManager.html#create",title:"View 'CollisionGroupManager.create' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"CollisionGroupManager.create")," works by assigning a unique power of 2 to each group (meaning only 32 groups are possible)."),"\n",t.createElement(a.p,null,"So the group bit categories in our example are"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">playersGroupCategory <span class="token operator">=</span> <span class="token number">0b0001</span>\nenemyGroupCategory <span class="token operator">=</span> <span class="token number">0b0010</span>\nfloorGroupCategory <span class="token operator">=</span> <span class="token number">0b0100</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Each group also contains a ",t.createElement(a.code,null,"mask"),", this mask has the bit position of the groups it can collided with set to 1. The player group category is the least significant bit (furthest right), if a collision group mask has that bit set to 1 it means it collides with the player group."),"\n",t.createElement(a.p,null,"By default the mask for a collision group is set to collide with every group apart from itself."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">playersGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111110</span>\nenemyGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111101</span>\nfloorGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111011</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"In Excalibur, the ",t.createElement(a.code,null,"CollisionGroup.canCollide")," logic works by performing a bitwise ",t.createElement(a.code,null,"AND")," between the current group ",t.createElement(a.code,null,"category")," and the target groups's ",t.createElement(a.code,null,"mask")),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// Create a group for each distinct category of "collidable" in your game</span>\n<span class="token keyword">const</span> playerGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'player\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> enemyGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'enemyGroup\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> floorGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'floorGroup\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 0b0001 &amp; 0b11111111_11111111_11111111_11111110 = 0</span>\n<span class="token comment">// the mask is set to collide with all groups except player</span>\nplayerGroup<span class="token punctuation">.</span><span class="token function">canCollide</span><span class="token punctuation">(</span>playerGroup<span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n<span class="token comment">// 0b0001 &amp; 0b11111111_11111111_11111111_11111101 = 1</span>\n<span class="token comment">// the enemy mask has the player bit and floor bit set, so enemy and player can collide</span>\nplayerGroup<span class="token punctuation">.</span><span class="token function">canCollide</span><span class="token punctuation">(</span>enemyGroup<span class="token punctuation">)</span> <span class="token comment">// true</span>\n\n<span class="token comment">// 0b0001 &amp; 0b11111111_11111111_11111111_11111011 = 1</span>\n<span class="token comment">// the floor mask has the player bit and enemy bit set, so player and floor can collide</span>\nplayerGroup<span class="token punctuation">.</span><span class="token function">canCollide</span><span class="token punctuation">(</span>floorGroup<span class="token punctuation">)</span> <span class="token comment">// true</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"using-collision-groups",style:{position:"relative"}},t.createElement(a.a,{href:"#using-collision-groups","aria-label":"using collision groups permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Using Collision Groups"),"\n",t.createElement(a.p,null,"Collision groups can be supplied at constructor time when building an actor. Here is a pattern you can follow"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// player.ts</span>\n\n<span class="token comment">// Export the collision group, useful for referencing in other actors</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> PlayerCollisionGroup <span class="token operator">=</span> CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'player\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token keyword">extends</span> <span class="token class-name">Actor</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      name<span class="token operator">:</span> <span class="token string">\'player\'</span><span class="token punctuation">,</span>\n      pos<span class="token operator">:</span> <span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      collisionType<span class="token operator">:</span> CollisionType<span class="token punctuation">.</span>Active<span class="token punctuation">,</span>\n      collisionGroup<span class="token operator">:</span> PlayerCollisionGroup<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"collideswith-helper",style:{position:"relative"}},t.createElement(a.a,{href:"#collideswith-helper","aria-label":"collideswith helper permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"CollidesWith Helper"),"\n",t.createElement(a.p,null,"The collides with helper can assist in crafting groups that collide with other groups without needing to provide bitmasks."),"\n",t.createElement(a.p,null,"To make sense of this helper let's take a look at the new group ",t.createElement(a.code,null,"playersCanCollideWith"),"."),"\n",t.createElement(a.p,null,"In the example below here are the collision group category bits."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">playersGroup <span class="token operator">=</span> <span class="token number">0b0001</span>\nnpcGroup <span class="token operator">=</span> <span class="token number">0b0010</span>\nfloorGroup <span class="token operator">=</span> <span class="token number">0b0100</span>\nenemyGroup <span class="token operator">=</span> <span class="token number">0b1000</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"And the masks"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">playersGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111110</span>\nnpcGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111101</span>\nfloorGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111011</span>\nenemyGroupMask <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11110111</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"The ",t.createElement(a.code,null,"CollisionGroup.collidesWith(...)")," helper makes a new group that is all of the categories OR'd together then inverted. So in the example below creating the const playersCanCollideWith = CollisionGroup.collidesWith([ playersGroup, floorGroup, enemyGroup,]) group."),"\n",t.createElement(a.p,null,"Working out how the helper works"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">playersCanCollideWith <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">0b0001</span> <span class="token operator">|</span> <span class="token number">0b0100</span> <span class="token operator">|</span> <span class="token number">0b1000</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0b0010</span>\nplayersCanCollideWithMask <span class="token operator">=</span> <span class="token operator">~</span><span class="token punctuation">(</span><span class="token number">0b0010</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0b11111111_11111111_11111111_11111101</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Note the group 'playersCanCollideWith' is equivalent to the npc group. playersCanCollideWith collides with playersGroup, floorGroup, and enemyGroup"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// Create a group for each distinct category of "collidable" in your game</span>\n\n<span class="token keyword">const</span> playerGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'player\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> npcGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'npcGroup\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> floorGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'floorGroup\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> enemyGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'enemyGroup\'</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Define your rules</span>\n<span class="token comment">// playersCanCollideWith = ~(0b0001 | 0b0100 | 0b1000) = 0b0010</span>\n<span class="token comment">// playersCanCollideWithMask = ~(0b0010) = 0b11111111_11111111_11111111_11111101</span>\n<span class="token comment">// Note the group \'playersCanCollideWith\' is equivalent to the npc group. playersCanCollideWith collides with playersGroup, floorGroup, and enemyGroup</span>\n<span class="token keyword">const</span> playersCanCollideWith <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroup<span class="token punctuation">.</span><span class="token function">collidesWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  playersGroup<span class="token punctuation">,</span> <span class="token comment">// collide with other players</span>\n  floorGroup<span class="token punctuation">,</span> <span class="token comment">// collide with the floor</span>\n  enemyGroup<span class="token punctuation">,</span> <span class="token comment">// collide with enemies</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> enemiesCanCollideWith <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroup<span class="token punctuation">.</span><span class="token function">collidesWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  playerGroup<span class="token punctuation">,</span> <span class="token comment">// collide with players</span>\n  floorGroup<span class="token punctuation">,</span> <span class="token comment">// collide with the floor</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> npcGroupCanCollideWith <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroup<span class="token punctuation">.</span><span class="token function">collidesWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  floorGroup<span class="token punctuation">,</span> <span class="token comment">// only collides with the floor</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  collisionGroup<span class="token operator">:</span> playersCanCollideWith<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> npc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  collisionGroup<span class="token operator">:</span> npcGroupCanCollideWith<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> enemy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  collisionGroup<span class="token operator">:</span> enemiesCanCollideWith<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> floor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  height<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>\n  collisionType<span class="token operator">:</span> ex<span class="token punctuation">.</span>CollisionType<span class="token punctuation">.</span>Fixed\n  collisionGroup<span class="token operator">:</span> floorGroup<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}))}var p=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.ah)(),n.components);return a?t.createElement(a,n,t.createElement(o,n)):o(n)};var l=e(4160),c=e(2640),r=e(2030),i=e(7306),u=e(2768),k=e(871),m=e(7924),d=e(9813);const g={Link:l.rU,Note:u.Z,Example:k.Z,IFrameEmbed:m.Z,CodeSandboxEmbed:d.Z},h=n=>{let{toc:a,releases:e}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const n={};for(let e of a)n[e.frontmatter.section]||(n[e.frontmatter.section]=[]),n[e.frontmatter.section].push(e);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(l.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"},"Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),e.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},A=()=>t.createElement("div",{className:"docs-search"},t.createElement(c.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),y=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(n){let{data:a,children:e}=n;const{page:o,toc:p,github:{data:{repository:{releases:l}}}}=a,{frontmatter:c}=o;return t.createElement(r.Z,null,t.createElement(i.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(A),t.createElement(h,{toc:p.edges.map((n=>n.node)),releases:l.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,c.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(s.Zo,{components:g},e))))))}function f(n){return t.createElement(b,n,t.createElement(p,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-08-collision-groups-mdx-4784fc6e05d319722a59.js.map