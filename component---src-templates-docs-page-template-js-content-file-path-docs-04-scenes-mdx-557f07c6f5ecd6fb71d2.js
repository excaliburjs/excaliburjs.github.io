"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[5977],{6429:function(n,a,e){e.r(a),e.d(a,{Head:function(){return E},default:function(){return y}});var s=e(1151),t=e(7294);function c(n){const a=Object.assign({h2:"h2",a:"a",span:"span",p:"p",img:"img",h3:"h3",code:"code",strong:"strong",em:"em"},(0,s.ah)(),n.components),{Note:e}=a;return e||function(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),t.createElement(t.Fragment,null,t.createElement(a.h2,{id:"adding-actors-to-the-scene",style:{position:"relative"}},t.createElement(a.a,{href:"#adding-actors-to-the-scene","aria-label":"adding actors to the scene permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Adding actors to the scene"),"\n",t.createElement(a.p,null,"For an ",t.createElement(a.a,{href:"/docs/actors"},"Actor"),' to be drawn and updated, it needs to be part of the "scene graph".\nThe ',t.createElement(a.a,{href:"/docs/engine"},"Engine")," provides several easy ways to quickly add/remove actors from the\ncurrent scene."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> game   <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Engine</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Actor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> enemy  <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Actor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// add them to the "root" scene</span>\ngame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span><span class="token punctuation">;</span>\ngame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// start game</span>\ngame<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"You can also add actors to a scene instance specifically using ",t.createElement(a.a,{href:"/docs/api/edge/classes/Scene.html#add",title:"View 'Scene.add' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Scene.add"),":"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="js"><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Engine</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> level1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Scene</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Actor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> enemy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex<span class="token punctuation">.</span>Actor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// add actors to level1</span>\nlevel1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>player<span class="token punctuation">)</span>\nlevel1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>enemy<span class="token punctuation">)</span>\n<span class="token comment">// add level1 to the game</span>\ngame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'level1\'</span><span class="token punctuation">,</span> level1<span class="token punctuation">)</span>\n<span class="token comment">// start the game</span>\ngame<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token comment">// after player clicks start game, for example</span>\n  game<span class="token punctuation">.</span><span class="token function">goToScene</span><span class="token punctuation">(</span><span class="token string">\'level1\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"scene-lifecycle",style:{position:"relative"}},t.createElement(a.a,{href:"#scene-lifecycle","aria-label":"scene lifecycle permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Scene lifecycle"),"\n",t.createElement(a.p,null,"A scene has a basic lifecycle that dictates how it is initialized, updated, and drawn. Once a scene is added to\nthe engine it will follow this lifecycle:"),"\n",t.createElement(a.img,{src:"/assets/images/docs/SceneLifecycle.png",alt:"Scene Lifecycle"}),"\n",t.createElement(a.p,null,"For more complex games, you might want more control over a scene in which\ncase you can extend ",t.createElement(a.a,{href:"/docs/api/edge/classes/Scene.html",title:"View 'Scene' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Scene"),". This is useful for menus, custom loaders,\nand levels."),"\n",t.createElement(a.h3,{id:"adding-a-scene",style:{position:"relative"}},t.createElement(a.a,{href:"#adding-a-scene","aria-label":"adding a scene permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Adding a scene"),"\n",t.createElement(a.p,null,"Use ",t.createElement(a.a,{href:"/docs/api/edge/classes/Engine.html#add",title:"View 'Engine.add' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Engine.add")," to add a new scene to the game. Each scene has a ",t.createElement(a.code,null,"string")," key you can assign. You can then use\n",t.createElement(a.a,{href:"/docs/api/edge/classes/Engine.html#goToScene",title:"View 'Engine.goToScene' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Engine.goToScene")," to switch scenes which runs the scene lifecycle hooks."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">MainMenu</span> <span class="token keyword">extends</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>Scene <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token comment">// add to game and activate it</span>\ngame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'mainmenu\'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MainMenu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\ngame<span class="token punctuation">.</span><span class="token function">goToScene</span><span class="token punctuation">(</span><span class="token string">\'mainmenu\'</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"initialization",style:{position:"relative"}},t.createElement(a.a,{href:"#initialization","aria-label":"initialization permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Initialization"),"\n",t.createElement(e,null,t.createElement(a.p,null,"This is the recommended hook for setting up scene state")),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/classes/Scene.html#onInitialize",title:"View 'Scene.onInitialize' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Scene.onInitialize")," is called ",t.createElement(a.strong,null,"once")," when the scene is created for use in the game. It is called ",t.createElement(a.em,null,"before")," ",t.createElement(a.a,{href:"/docs/api/edge/classes/Scene.html#onActivate",title:"View 'Scene.onActivate' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Scene.onActivate")," and can be used to set up the scene state. This is typically where you'd add any actors to the scene, set up initial state, and other startup tasks."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">MainMenu</span> <span class="token keyword">extends</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> _startButton<span class="token operator">:</span> StartButton\n\n  <span class="token comment">/**\n   * Start-up logic, called once\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span>engine<span class="token operator">:</span> Engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// initialize scene actors</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_startButton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StartButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_startButton<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"You can even call ",t.createElement(a.a,{href:"/docs/api/edge/classes/Engine.html#start",title:"View 'Engine.start' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Engine.start")," to preload assets for your scene, to avoid having to load them at game initialization time:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">MainMenu</span> <span class="token keyword">extends</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> _loaded<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n\n  <span class="token comment">/**\n   * Start-up logic, called once\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span>engine<span class="token operator">:</span> Engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// load scene-specific assets</span>\n    engine<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>sceneLoader<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_loaded <span class="token operator">=</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"activation",style:{position:"relative"}},t.createElement(a.a,{href:"#activation","aria-label":"activation permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Activation"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/classes/Scene.html#onActivate",title:"View 'Scene.onActivate' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Scene.onActivate")," is called when the engine switches to the scene. It may be called more than once during the lifetime of a game, if you switch back and forth between scenes. It is useful for taking action before showing the scene. You may use this hook over ",t.createElement(a.code,null,"onInitialize")," for anything specific to the context in which the scene was activated."),"\n",t.createElement(a.p,null,"Data can be passed to a scene during activation via the ",t.createElement(a.code,null,"goToScene('sceneKey', { some: 'data' })"),"."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">interface</span> <span class="token class-name">MyLevelData</span> <span class="token punctuation">{</span>\n  spawnLocation<span class="token operator">:</span> Vector\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MainMenu</span> <span class="token keyword">extends</span> <span class="token class-name">Scene<span class="token operator">&lt;</span>MyLevelData<span class="token operator">></span></span> <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> startButton<span class="token operator">:</span> StartButton\n\n  <span class="token comment">/**\n   * Each time the scene is entered (Engine.goToScene)\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onActivate</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> SceneActivationContext<span class="token operator">&lt;</span>MyLevelData<span class="token operator">></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> spawnLocation <span class="token punctuation">}</span> <span class="token operator">=</span> ctx<span class="token punctuation">.</span>data\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>spawnLocation<span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">.</span>previousScene <span class="token keyword">instanceof</span> <span class="token class-name">Level</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>startButton<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">\'Resume game\'</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>startButton<span class="token punctuation">.</span>text <span class="token operator">=</span> <span class="token string">\'Start game\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"deactivation",style:{position:"relative"}},t.createElement(a.a,{href:"#deactivation","aria-label":"deactivation permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Deactivation"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/classes/Scene.html#onDeactivate",title:"View 'Scene.onDeactivate' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Scene.onDeactivate")," is called when the engine exits a scene and is typically used for cleanup, exit tasks, and garbage collection."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">Level</span> <span class="token keyword">extends</span> <span class="token class-name">Scene</span> <span class="token punctuation">{</span>\n  <span class="token comment">/**\n   * Each time the scene is exited (Engine.goToScene)\n   */</span>\n  <span class="token keyword">public</span> <span class="token function">onDeactivate</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> SceneActivationContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">saveState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.ah)(),n.components);return a?t.createElement(a,n,t.createElement(c,n)):c(n)};var p=e(4854),l=e(2436),i=e(2030),r=e(7306),u=e(2768),d=e(871),k=e(7924),m=e(9813);const h={Link:p.rU,Note:u.Z,Example:d.Z,IFrameEmbed:k.Z,CodeSandboxEmbed:m.Z},g=n=>{let{toc:a,releases:e}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const n={};for(let e of a)n[e.frontmatter.section]||(n[e.frontmatter.section]=[]),n[e.frontmatter.section].push(e);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(p.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(p.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),e.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),E=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function v(n){let{data:a,children:e}=n;const{page:c,toc:o,github:{data:{repository:{releases:p}}}}=a,{frontmatter:l}=c;return t.createElement(i.Z,null,t.createElement(r.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(g,{toc:o.edges.map((n=>n.node)),releases:p.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(s.Zo,{components:h},e))))))}function y(n){return t.createElement(v,n,t.createElement(o,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-04-scenes-mdx-557f07c6f5ecd6fb71d2.js.map