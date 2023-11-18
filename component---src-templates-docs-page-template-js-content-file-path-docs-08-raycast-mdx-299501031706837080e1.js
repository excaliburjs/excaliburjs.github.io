"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[1597],{1113:function(e,n,a){a.r(n),a.d(n,{Head:function(){return E},default:function(){return b}});var t=a(1151),s=a(7294);function c(e){const n=Object.assign({p:"p",span:"span"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"You may need to test if other colliders are nearby for your game, this might be for line of sight, for certain graphics effects, or for more complicated physics simulations."),"\n",s.createElement(n.p,null,'You may arbitrarily ray cast into a scene and get a list of "hits"'),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">  <span class="token keyword">const</span> engine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> enemyGroup <span class="token operator">=</span> ex<span class="token punctuation">.</span>CollisionGroupManager<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">\'enemy\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> ray <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Ray</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span>Vector<span class="token punctuation">.</span>Right<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> hits <span class="token operator">=</span> engine<span class="token punctuation">.</span>currentScene<span class="token punctuation">.</span>physics<span class="token punctuation">.</span><span class="token function">rayCast</span><span class="token punctuation">(</span>ray<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token comment">/**\n      * Optionally specify to search for all colliders that intersect the ray cast, not just the first which is the default\n      */</span>\n    searchAllColliders<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">/**\n      * Optionally specify the maximum distance in pixels to ray cast, default is Infinity\n      */</span>\n    maxDistance<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n    <span class="token comment">/**\n      * Optionally specify a collision group to consider in the ray cast, default is All\n      */</span>\n    collisionGroup<span class="token operator">:</span> enemyGroup\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(c,e)):c(e)},l=a(4160),p=a(2640),r=a(2030),i=a(7306),u=a(2768),m=a(871),d=a(7924),k=a(9813);const f={Link:l.rU,Note:u.Z,Example:m.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:k.Z},h=e=>{let{toc:n,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>s.createElement(s.Fragment,{key:n},s.createElement("section",null,s.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return s.createElement(l.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"},"Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},g=()=>s.createElement("div",{className:"docs-search"},s.createElement(p.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),E=e=>{let{data:n}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,n.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function y(e){let{data:n,children:a}=e;const{page:c,toc:o,github:{data:{repository:{releases:l}}}}=n,{frontmatter:p}=c;return s.createElement(r.Z,null,s.createElement(i.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(g),s.createElement(h,{toc:o.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,p.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:f},a))))))}function b(e){return s.createElement(y,e,s.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-08-raycast-mdx-299501031706837080e1.js.map