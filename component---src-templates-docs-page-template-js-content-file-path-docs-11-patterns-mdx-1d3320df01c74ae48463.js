"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[6419],{5128:function(e,n,a){a.r(n),a.d(n,{Head:function(){return E},default:function(){return y}});var t=a(1151),s=a(7294);function c(e){const n=Object.assign({p:"p",h2:"h2",a:"a",span:"span",code:"code"},(0,t.ah)(),e.components),{IFrameEmbed:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IFrameEmbed",!0),s.createElement(s.Fragment,null,s.createElement(n.p,null,"Here are a few patterns and guidelines that you can use in your Excalibur projects."),"\n",s.createElement(n.h2,{id:"project-structure",style:{position:"relative"}},s.createElement(n.a,{href:"#project-structure","aria-label":"project structure permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Project Structure"),"\n",s.createElement(n.p,null,"We have found this structure to work pretty well for games, see an ",s.createElement(n.a,{href:"https://github.com/excaliburjs/ludum-50"},"example game")),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">game/\n  images/\n    image1.png\n    image2.png\n  sounds/\n    sound1.mp3\n    sound2.mp3\n  src/\n    main.ts\n    level1.ts\n    level2.ts\n    config.ts\n    resources.ts\n    preferences.ts</code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"entry-point",style:{position:"relative"}},s.createElement(n.a,{href:"#entry-point","aria-label":"entry point permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Entry Point"),"\n",s.createElement(n.p,null,"Define a ",s.createElement(n.code,null,"main.ts"),' file to serve as the "main" entrypoint into your game.'),"\n",s.createElement(n.p,null,"Keep the ",s.createElement(n.code,null,"main.ts")," entrypoint as small as possible (this is where we create a new ",s.createElement(n.code,null,"ex.Engine()")," and configure anything else at the engine level)"),"\n",s.createElement(n.h2,{id:"resource-loading",style:{position:"relative"}},s.createElement(n.a,{href:"#resource-loading","aria-label":"resource loading permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Resource Loading"),"\n",s.createElement(n.p,null,"Keep all of our assets/resources in one file ",s.createElement(n.code,null,"resources.ts")," and load them all at once in the ",s.createElement(n.code,null,"main.ts")),"\n",s.createElement(n.p,null,s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token comment">// Because snippets uses a bunder we load the image with an import</span>\n<span class="token keyword">import</span> playerUrl <span class="token keyword">from</span> <span class="token string">\'./player.png\'</span><span class="token punctuation">;</span>\n\n<span class="token comment">// If you aren\'t using a bundler like parcel or webpack you can do this:</span>\n<span class="token comment">// const imagePlayer = new ex.ImageSource(\'./player.png\')</span>\n<span class="token keyword">const</span> Resources <span class="token operator">=</span> <span class="token punctuation">{</span>\n    ImagePlayer<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ImageSource</span><span class="token punctuation">(</span>playerUrl<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token comment">//... more resources</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Loader</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>Resources<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token keyword">extends</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>Actor <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token function">onInitialize</span><span class="token punctuation">(</span>engine<span class="token operator">:</span> ex<span class="token punctuation">.</span>Engine<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// set as the "default" drawing</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Resources<span class="token punctuation">.</span>ImagePlayer<span class="token punctuation">.</span><span class="token function">toSprite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}})),"\n",s.createElement(a,{src:"https://excaliburjs.com/excalibur-snippets/resources/"}),"\n",s.createElement(n.h2,{id:"configuration",style:{position:"relative"}},s.createElement(n.a,{href:"#configuration","aria-label":"configuration permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Configuration"),"\n",s.createElement(n.p,null,"Keep a ",s.createElement(n.code,null,"config.ts")," for tweaking global constant values easily, we've wired up things like ",s.createElement(n.a,{href:"https://github.com/dataarts/dat.gui"},"dat.gui")," or ",s.createElement(n.a,{href:"https://cocopon.github.io/tweakpane/"},"tweakpane")," that make changing config during development easy"),"\n",s.createElement(n.h2,{id:"prefer-oninitialize-to-the-constructor",style:{position:"relative"}},s.createElement(n.a,{href:"#prefer-oninitialize-to-the-constructor","aria-label":"prefer oninitialize to the constructor permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Prefer ",s.createElement(n.code,null,"onInitialize")," to the constructor"),"\n",s.createElement(n.p,null,"Where possible we use ",s.createElement(n.code,null,"onInitialize()")," for initialization logic over the constructor, this saves CPU cycles because it's called before the first update an entity is needed and makes it easy to restart a game or reusing something by manually calling ",s.createElement(n.code,null,"onInitialize()"),"."),"\n",s.createElement(n.h2,{id:"use-exscene-as-the-composition-root",style:{position:"relative"}},s.createElement(n.a,{href:"#use-exscene-as-the-composition-root","aria-label":"use exscene as the composition root permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Use ",s.createElement(n.code,null,"ex.Scene")," as the ",s.createElement(n.a,{href:"https://freecontent.manning.com/dependency-injection-in-net-2nd-edition-understanding-the-composition-root/"},"Composition Root")),"\n",s.createElement(n.p,null,"Generally it is useful to extend ex.Scene (like in ",s.createElement(n.a,{href:"https://github.com/excaliburjs/ludum-50/blob/main/src/level.ts"},"level.ts"),") and use ",s.createElement(n.code,null,"onInitialize()")," to assemble all the different bits of your game."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">class</span> <span class="token class-name">MyLevel</span> <span class="token keyword">extends</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>Scene <span class="token punctuation">{</span>\n\n  <span class="token function">onInitialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token keyword">const</span> myActor1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>myActor1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n     <span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">TileMap</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n     <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>'}}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(c,e)):c(e)};var l=a(4160),p=a(2640),r=a(2030),i=a(7306),u=a(2768),m=a(871),d=a(7924),h=a(9813);const k={Link:l.rU,Note:u.Z,Example:m.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:h.Z},g=e=>{let{toc:n,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>s.createElement(s.Fragment,{key:n},s.createElement("section",null,s.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return s.createElement(l.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"},"Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},f=()=>s.createElement("div",{className:"docs-search"},s.createElement(p.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),E=e=>{let{data:n}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,n.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function v(e){let{data:n,children:a}=e;const{page:c,toc:o,github:{data:{repository:{releases:l}}}}=n,{frontmatter:p}=c;return s.createElement(r.Z,null,s.createElement(i.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(f),s.createElement(g,{toc:o.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,p.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:k},a))))))}function y(e){return s.createElement(v,e,s.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-11-patterns-mdx-1d3320df01c74ae48463.js.map