"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[8606],{2767:function(n,a,s){s.r(a),s.d(a,{Head:function(){return E},default:function(){return x}});var e=s(1151),t=s(7294);function p(n){const a=Object.assign({h2:"h2",a:"a",div:"div",p:"p",h3:"h3",code:"code"},(0,e.ah)(),n.components),{Note:s}=a;return s||function(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),t.createElement(t.Fragment,null,t.createElement(a.h2,{id:"why-graphics",style:{position:"relative"}},t.createElement(a.a,{href:"#why-graphics","aria-label":"why graphics permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Why Graphics?"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"/docs/api/edge/interfaces/ExcaliburGraphicsContext.html",title:"View 'ExcaliburGraphicsContext' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContext")," is the abstraction over the underlying drawing mechanism used to displaying images and graphics to the screen. It is recommended to use ",t.createElement(a.a,{href:"/docs/graphics"},"ex.Graphics")," objects with ",t.createElement(a.a,{href:"",title:"Missing link to 'Actors' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing",target:"_blank"},"Actors"),"/",t.createElement(a.a,{href:"",title:"Missing link to 'Entities' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing",target:"_blank"},"Entities")," but the ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/ExcaliburGraphicsContext.html",title:"View 'ExcaliburGraphicsContext' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContext")," can be directly drawn to."),"\n",t.createElement(a.p,null,"The default implementation in Excalibur uses WebGL, however Excalibur can fallback to the 2D Canvas implementation if WebGL isn't supported or there isn't browser hardware acceleration. ",t.createElement(a.a,{href:"#performance"},"Read more")),"\n",t.createElement(a.h3,{id:"canvas-support",style:{position:"relative"}},t.createElement(a.a,{href:"#canvas-support","aria-label":"canvas support permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Canvas support"),"\n",t.createElement(a.p,null,"If you have need to switch to 2D canvas based rendering turn on the flag before engine construction."),"\n",t.createElement(s,{variant:"warning"},t.createElement("div",null,t.createElement(a.p,null,"Some features like"),t.createElement("a",{href:"#custom-renderer"},t.createElement(a.p,null,"custom renderers")),t.createElement(a.p,null,"and"),t.createElement("a",{href:"/docs/postprocessors"},t.createElement(a.p,null,"post processors")),t.createElement(a.p,null,"do not work with the Canvas 2D implementation!"))),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">ex<span class="token punctuation">.</span>Flags<span class="token punctuation">.</span><span class="token function">useCanvasGraphicsContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"drawing-to-the-context",style:{position:"relative"}},t.createElement(a.a,{href:"#drawing-to-the-context","aria-label":"drawing to the context permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Drawing to the Context"),"\n",t.createElement(a.p,null,"The graphics context automatically batches draw calls and flushes them to the screen at the end of every frame. It is therefore recommended you draw in one of the supported drawing lifecycle events."),"\n",t.createElement(a.p,null,"Either directly by extending the Excalibur Scene"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">MyScene</span> <span class="token keyword">extends</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>Scene <span class="token punctuation">{</span>\n    <span class="token function">onPreDraw</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">onPostDraw</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\ngame<span class="token punctuation">.</span><span class="token function">addScene</span><span class="token punctuation">(</span><span class="token string">\'myscene\'</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MyScene</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ngame<span class="token punctuation">.</span><span class="token function">goToScene</span><span class="token punctuation">(</span><span class="token string">\'myscene\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ngame<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Or as an event on the the Excalibur Scene"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ngame<span class="token punctuation">.</span>currentScene<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'predraw\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Or as part of an Actor/Entity graphics component"),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\ngame<span class="token punctuation">.</span>currentScene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>actor<span class="token punctuation">)</span><span class="token punctuation">;</span>\ngame<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Draw before graphics component but after the transform for actor pos/rotation/scale</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function-variable function">onPreDraw</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Draw after graphics component but after the transform for actor pos/rotation/scale</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function-variable function">onPostDraw</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"save-and-restore",style:{position:"relative"}},t.createElement(a.a,{href:"#save-and-restore","aria-label":"save and restore permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Save and Restore"),"\n",t.createElement(a.p,null,"The ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/ExcaliburGraphicsContext.html",title:"View 'ExcaliburGraphicsContext' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContext")," emulates other graphics context APIs by providing a save/restore feature. These are used to save the state of the context before you modify its global state, and then restore it back after you are finished drawing. If you do not, modifications to ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/ExcaliburGraphicsContext.html",title:"View 'ExcaliburGraphicsContext' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContext")," will affect other draw calls."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token function">onPostDraw</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">translate</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">rotate</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token constant">PI</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"setting-z-index",style:{position:"relative"}},t.createElement(a.a,{href:"#setting-z-index","aria-label":"setting z index permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Setting z-index"),"\n",t.createElement(a.p,null,"Excalibur allows you to set the z-index of any draw call by setting the ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/ExcaliburGraphicsContext.html#z",title:"View 'ExcaliburGraphicsContext.z' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContext.z")," property on the context."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token function">onPostDraw</span><span class="token punctuation">(</span>ctx<span class="token operator">:</span> ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">drawRectangle</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"snap-to-pixel",style:{position:"relative"}},t.createElement(a.a,{href:"#snap-to-pixel","aria-label":"snap to pixel permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Snap To pixel"),"\n",t.createElement(a.p,null,"Excalibur has built in snap to pixel support, this can be useful if you are building a game with a pixel aesthetic."),"\n",t.createElement(a.p,null,"To enable snap to pixel, enable ",t.createElement(a.code,null,"snapToPixel")," in the engine constructor parameter. By default ",t.createElement(a.code,null,"snapToPixel")," is not enabled."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    snapToPixel<span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}),"\n",t.createElement(a.h2,{id:"custom-renderer",style:{position:"relative"}},t.createElement(a.a,{href:"#custom-renderer","aria-label":"custom renderer permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Custom Renderer"),"\n",t.createElement(a.p,null,"Custom renderers are a way to extend what the ",t.createElement(a.a,{href:"/docs/api/edge/classes/ExcaliburGraphicsContextWebGL.html",title:"View 'ExcaliburGraphicsContextWebGL' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContextWebGL")," can draw by default. In fact all of the things that the graphics context can draw are implemented this way internally."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">\n<span class="token keyword">const</span> MyRenderer <span class="token keyword">implements</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>RendererPlugin <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> graphicsContextWebGL <span class="token operator">=</span> game<span class="token punctuation">.</span>graphicsContext <span class="token keyword">as</span> ExcaliburGraphicsContextWebGL<span class="token punctuation">;</span>\ngraphicsContextWebGL<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">MyRenderer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngraphicsContextWebGL<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">draw</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyRenderer<span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>'}}),"\n",t.createElement(a.p,null,"Read a more in-depth example ",t.createElement(a.a,{href:"/docs/custom-renderer-plugins"},"here")),"\n",t.createElement(a.h2,{id:"performance",style:{position:"relative"}},t.createElement(a.a,{href:"#performance","aria-label":"performance permalink",className:"anchor before"},t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Performance"),"\n",t.createElement(a.p,null,"Excalibur's performance fallback behavior can be configured by developers to help players experiencing poor performance in non-standard browser configurations"),"\n",t.createElement(a.p,null,"This will fallback to the Canvas2D rendering graphics context which usually performs better on non hardware accelerated browsers, currently postprocessing effects are unavailable in this fallback."),"\n",t.createElement(a.p,null,"By default if a game is running at 20fps or lower for 100 frames or more after the game has started it will be triggered, the developer can optionally show a player message that is off by default."),"\n",t.createElement(a.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">var</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    configurePerformanceCanvas2DFallback<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// opt-out of the fallback</span>\n        allow<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// opt-in to a player pop-up message</span>\n        showPlayerMessage<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token comment">// configure the threshold to trigger the fallback</span>\n        threshold<span class="token operator">:</span> <span class="token punctuation">{</span> fps<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> numberOfFrames<span class="token operator">:</span> <span class="token number">100</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}))}var c=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.ah)(),n.components);return a?t.createElement(a,n,t.createElement(p,n)):p(n)};var o=s(4854),l=s(2436),r=s(2030),i=s(7306),u=s(2768),k=s(871),d=s(7924),h=s(9813);const m={Link:o.rU,Note:u.Z,Example:k.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:h.Z},g=n=>{let{toc:a,releases:s}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const n={};for(let s of a)n[s.frontmatter.section]||(n[s.frontmatter.section]=[]),n[s.frontmatter.section].push(s);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(o.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),s.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),E=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(n){let{data:a,children:s}=n;const{page:p,toc:c,github:{data:{repository:{releases:o}}}}=a,{frontmatter:l}=p;return t.createElement(r.Z,null,t.createElement(i.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(g,{toc:c.edges.map((n=>n.node)),releases:o.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(e.Zo,{components:m},s))))))}function x(n){return t.createElement(b,n,t.createElement(c,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-04-4-graphics-context-mdx-5873dc22afa8c0f3c15a.js.map