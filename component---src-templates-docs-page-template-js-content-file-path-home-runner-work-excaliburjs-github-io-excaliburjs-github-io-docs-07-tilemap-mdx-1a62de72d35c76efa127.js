"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[2341],{4310:function(n,a,s){s.r(a),s.d(a,{Head:function(){return b},default:function(){return y}});var e=s(1151),t=s(7294);function p(n){const a=Object.assign({p:"p",a:"a",h2:"h2",span:"span",code:"code"},(0,e.ah)(),n.components),{IFrameEmbed:s}=a;return s||function(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("IFrameEmbed",!0),t.createElement(t.Fragment,null,t.createElement(a.p,null,"TileMaps can be useful tools to build levels for platformers or top down games."),"\n",t.createElement(a.p,null,'Excalibur supports building tile based games, often referred to as "TileMaps." Excalibur has a ',t.createElement(a.a,{href:"https://github.com/excaliburjs/excalibur-tiled/pull/162"},"Tiled plugin")," to support the popular ",t.createElement(a.a,{href:"https://www.mapeditor.org/"},"Tiled")," editor map files."),"\n",t.createElement(a.h2,{id:"tilemap",style:{position:"relative"}},t.createElement(a.a,{href:"#tilemap","aria-label":"tilemap permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Tilemap"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"",title:"Missing link to 'Tilemap' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"Tilemaps")," consist of a uniform grid of cells that can be solid or not. Each cell can have it's own graphics."),"\n",t.createElement(a.p,null,"Tile maps are made up of ",t.createElement(a.a,{href:"",title:"Missing link to 'Cell' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"Cells")," which can draw ",t.createElement(a.a,{href:"",title:"Missing link to 'Graphics' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing",target:"_blank"},"Graphics"),". Tile\nmaps support multiple layers of Graphics and work well for building tile-based games such as RPGs,\nadventure games, strategy games, and others. Cells can be ",t.createElement(a.a,{href:"",title:"Missing link to 'Cell.solid' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"solid")," so\nthat Actors can't pass through them."),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// Load your favorite tileset (maybe from Kenny.nl)</span>\n<span class="token keyword">const</span> kennyRougeLikePack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ImageSource</span><span class="token punctuation">(</span>rougeLikeImageSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Create a sprite sheet</span>\n<span class="token keyword">const</span> rougeLikeSpriteSheet <span class="token operator">=</span> ex<span class="token punctuation">.</span>SpriteSheet<span class="token punctuation">.</span><span class="token function">fromImageSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    image<span class="token operator">:</span> kennyRougeLikePack<span class="token punctuation">,</span>\n    grid<span class="token operator">:</span> <span class="token punctuation">{</span>\n        rows<span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>\n        columns<span class="token operator">:</span> <span class="token number">51</span><span class="token punctuation">,</span>\n        spriteHeight<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n        spriteWidth<span class="token operator">:</span> <span class="token number">16</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    spacing<span class="token operator">:</span> <span class="token punctuation">{</span>\n        margin<span class="token operator">:</span> <span class="token punctuation">{</span>\n            x<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            y<span class="token operator">:</span> <span class="token number">1</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Create a tilemap</span>\n<span class="token keyword">const</span> tilemap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">TileMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    rows<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    columns<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    tileWidth<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n    tileHeight<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// loop through tilemap cells</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> cell <span class="token keyword">of</span> tilemap<span class="token punctuation">.</span>tiles<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> sprite <span class="token operator">=</span> rougeLikeSpriteSheet<span class="token punctuation">.</span><span class="token function">getSprite</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sprite<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        cell<span class="token punctuation">.</span><span class="token function">addGraphic</span><span class="token punctuation">(</span>sprite<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}})),"\n",t.createElement(s,{src:"https://excaliburjs.com/excalibur-snippets/tilemap/"}),"\n",t.createElement(a.h2,{id:"tiled-plugin",style:{position:"relative"}},t.createElement(a.a,{href:"#tiled-plugin","aria-label":"tiled plugin permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Tiled plugin"),"\n",t.createElement(a.p,null,"Excalibur has a Tiled map plugin https://github.com/excaliburjs/excalibur-tiled/ for loading ",t.createElement(a.code,null,".tmx")," maps."),"\n",t.createElement(a.p,null,"We recommend using the ",t.createElement(a.a,{href:"http://www.mapeditor.org/"},"Tiled map editor")," to build your maps\nand export them to JSON. You can then load them using a ",t.createElement(a.a,{href:"/docs/api/edge/classes/Resource.html",title:"View 'Resource' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Generic Resource"),"\nand process them to create your levels. A ",t.createElement(a.a,{href:"/docs/api/edge/classes/TileMap.html",title:"View 'TileMap' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"TileMap")," can then be used as part of a\nlevel or map class that adds enemies and builds game objects from the Tiled map."),"\n",t.createElement(a.p,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> ex <span class="token keyword">from</span> <span class="token string">\'excalibur\'</span>\n<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> tiled <span class="token keyword">from</span> <span class="token string">\'@excaliburjs/plugin-tiled\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> exampleCityUrl <span class="token keyword">from</span> <span class="token string">\'./example-city.tmx\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> tileset <span class="token keyword">from</span> <span class="token string">\'./assets/kenny-rpg-urban-pack/tilemap_packed.png\'</span><span class="token punctuation">;</span> \n\n<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n    height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n    displayMode<span class="token operator">:</span> ex<span class="token punctuation">.</span>DisplayMode<span class="token punctuation">.</span>FitScreen\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> tiledMapResource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">tiled</span><span class="token punctuation">.</span><span class="token function">TiledMapResource</span><span class="token punctuation">(</span>exampleCityUrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Only necessary for parcel v2 rearranging assets at the root</span>\n<span class="token comment">// or if you have a build system that moves resources linked by the .tmx</span>\ntiledMapResource<span class="token punctuation">.</span><span class="token function-variable function">convertPath</span> <span class="token operator">=</span> <span class="token punctuation">(</span>tmxLocation<span class="token punctuation">,</span> relativePath<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> resourceName <span class="token operator">=</span> relativePath<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">at</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">?.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'.\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token comment">// for each linked tileset</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>tileset<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>resourceName<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> tileset<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Loader</span><span class="token punctuation">(</span><span class="token punctuation">[</span>tiledMapResource<span class="token punctuation">]</span><span class="token punctuation">)</span>\ngame<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    tiledMapResource<span class="token punctuation">.</span><span class="token function">addTiledMapToScene</span><span class="token punctuation">(</span>game<span class="token punctuation">.</span>currentScene<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    game<span class="token punctuation">.</span>currentScene<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>zoom <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(s,{src:"https://excaliburjs.com/excalibur-snippets/tiled/"}),"\n",t.createElement(a.h2,{id:"currently-unsupported",style:{position:"relative"}},t.createElement(a.a,{href:"#currently-unsupported","aria-label":"currently unsupported permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Currently unsupported"),"\n",t.createElement(a.p,null,"Hexagonal and Isometric TileMaps are not yet supported out of the box (but they are in our plans), but with some engenuity you can replicate them."),"\n",t.createElement(a.p,null,"We recommend reading some of the ",t.createElement(a.a,{href:"https://www.redblobgames.com/"},"material on Red Blob Games")," for algorithms around Hexagonal and Isometric"))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.ah)(),n.components);return a?t.createElement(a,n,t.createElement(p,n)):p(n)};var c=s(4854),l=s(2436),i=s(2030),r=s(7306),u=s(2768),k=s(871),m=s(7924),d=s(9813);const h={Link:c.rU,Note:u.Z,Example:k.Z,IFrameEmbed:m.Z,CodeSandboxEmbed:d.Z},g=n=>{let{toc:a,releases:s}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const n={};for(let s of a)n[s.frontmatter.section]||(n[s.frontmatter.section]=[]),n[s.frontmatter.section].push(s);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(c.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(c.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),s.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),b=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function E(n){let{data:a,children:s}=n;const{page:p,toc:o,github:{data:{repository:{releases:c}}}}=a,{frontmatter:l}=p;return t.createElement(i.Z,null,t.createElement(r.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(g,{toc:o.edges.map((n=>n.node)),releases:c.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(e.Zo,{components:h},s))))))}function y(n){return t.createElement(E,n,t.createElement(o,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-07-tilemap-mdx-1a62de72d35c76efa127.js.map