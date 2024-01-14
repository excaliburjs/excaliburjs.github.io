"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[3706],{6148:function(n,a,s){s.r(a),s.d(a,{Head:function(){return b},default:function(){return v}});var e=s(1151),t=s(7294);function c(n){const a=Object.assign({h2:"h2",a:"a",span:"span",p:"p",h3:"h3",code:"code"},(0,e.ah)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.h2,{id:"actions",style:{position:"relative"}},t.createElement(a.a,{href:"#actions","aria-label":"actions permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Actions"),"\n",t.createElement(a.p,null,"Actions can be chained together and can be set to repeat,\nor can be interrupted to change."),"\n",t.createElement(a.p,null,"Actor actions are available off of ",t.createElement(a.a,{href:"/docs/api/edge/classes/Actor.html#actions",title:"View 'Actor.actions' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Actor.actions"),"."),"\n",t.createElement(a.h3,{id:"chaining-actions",style:{position:"relative"}},t.createElement(a.a,{href:"#chaining-actions","aria-label":"chaining actions permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Chaining Actions"),"\n",t.createElement(a.p,null,"You can chain actions to create a script because the action\nmethods return the context, allowing you to build a queue of\nactions that get executed as part of an ",t.createElement(a.a,{href:"/docs/api/edge/classes/ActionQueue.html",title:"View 'ActionQueue' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ActionQueue"),"."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">class</span> <span class="token class-name">Enemy</span> <span class="token keyword">extends</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>Actor <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">patrol</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// clear existing queue</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>actions<span class="token punctuation">.</span><span class="token function">clearActions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token comment">// guard a choke point</span>\n    <span class="token comment">// move to 100, 100 and take 1.2s</span>\n    <span class="token comment">// wait for 3s</span>\n    <span class="token comment">// move back to 0, 100 and take 1.2s</span>\n    <span class="token comment">// wait for 3s</span>\n    <span class="token comment">// repeat</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>actions<span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n      ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"example-follow-a-path",style:{position:"relative"}},t.createElement(a.a,{href:"#example-follow-a-path","aria-label":"example follow a path permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Example: Follow a Path"),"\n",t.createElement(a.p,null,"You can use ",t.createElement(a.a,{href:"/docs/api/edge/classes/ActionContext.html#moveTo",title:"View 'ActionContext.moveTo' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Actor.actions.moveTo")," to move to a specific point,\nallowing you to chain together actions to form a path."),"\n",t.createElement(a.p,null,"This example has a ",t.createElement(a.code,null,"Ship")," follow a path that it guards by\nspawning at the start point, moving to the end, then reversing\nitself and repeating that forever."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">public</span> Ship <span class="token keyword">extends</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>Actor <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Vector</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Vector</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Vector</span><span class="token punctuation">(</span><span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Vector</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// spawn at start point</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">repeatForever</span><span class="token punctuation">(</span>ctx <span class="token operator">=></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>\n      <span class="token comment">// create action queue</span>\n      <span class="token comment">// forward path (skip first spawn point)</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> path<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n\n      <span class="token comment">// reverse path (skip last point)</span>\n      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> path<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        ctx<span class="token punctuation">.</span><span class="token function">moveTo</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">,</span> path<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"While this is a trivial example, the Action API allows complex\nroutines to be programmed for Actors. For example, using the\n",t.createElement(a.a,{href:"http://mapeditor.org"},"Tiled Map Editor")," you can create a map that\nuses polylines to create paths, load in the JSON using a\n",t.createElement(a.a,{href:"/docs/api/edge/classes/Resource.html",title:"View 'Resource' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Generic Resource"),", create a ",t.createElement(a.a,{href:"/docs/api/edge/classes/TileMap.html",title:"View 'TileMap' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"TileMap"),",\nand spawn ships programmatically while utilizing the polylines\nto automatically generate the actions needed to do pathing."),"\n",t.createElement(a.h3,{id:"custom-actions",style:{position:"relative"}},t.createElement(a.a,{href:"#custom-actions","aria-label":"custom actions permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Custom Actions"),"\n",t.createElement(a.p,null,"The API does allow you to implement new actions by implementing the ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/Action.html",title:"View 'Action' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Action"),"\ninterface, but this will be improved in future versions as right now it\nis meant for the Excalibur team and can be advanced to implement."),"\n",t.createElement(a.p,null,"You can manually manipulate an Actor's ",t.createElement(a.a,{href:"/docs/api/edge/classes/ActionQueue.html",title:"View 'ActionQueue' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ActionQueue")," using\n",t.createElement(a.a,{href:"",title:"Missing link to 'Actor.actionQueue' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing",target:"_blank"},"Actor.actionQueue"),". For example, using ",t.createElement(a.a,{href:"/docs/api/edge/classes/ActionQueue.html#add",title:"View 'ActionQueue.add' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ActionQueue.add")," for\ncustom actions."),"\n",t.createElement(a.h3,{id:"future-plans",style:{position:"relative"}},t.createElement(a.a,{href:"#future-plans","aria-label":"future plans permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Future Plans"),"\n",t.createElement(a.p,null,"The Excalibur team is working on extending and rebuilding the Action API\nin future versions to support multiple timelines/scripts, better eventing,\nand a more robust API to allow for complex and customized actions."))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.ah)(),n.components);return a?t.createElement(a,n,t.createElement(c,n)):c(n)},p=s(4160),l=s(2640),i=s(2030),u=s(7306),r=s(2768),m=s(871),k=s(7924),d=s(9813);const h={Link:p.rU,Note:r.Z,Example:m.Z,IFrameEmbed:k.Z,CodeSandboxEmbed:d.Z},g=n=>{let{toc:a,releases:s}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const n={};for(let s of a)n[s.frontmatter.section]||(n[s.frontmatter.section]=[]),n[s.frontmatter.section].push(s);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(p.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(p.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"},"Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),s.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),b=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function E(n){let{data:a,children:s}=n;const{page:c,toc:o,github:{data:{repository:{releases:p}}}}=a,{frontmatter:l}=c;return t.createElement(i.Z,null,t.createElement(u.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(g,{toc:o.edges.map((n=>n.node)),releases:p.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(e.Zo,{components:h},s))))))}function v(n){return t.createElement(E,n,t.createElement(o,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-06-1-actions-mdx-ed82dec5fc08bb9cc773.js.map