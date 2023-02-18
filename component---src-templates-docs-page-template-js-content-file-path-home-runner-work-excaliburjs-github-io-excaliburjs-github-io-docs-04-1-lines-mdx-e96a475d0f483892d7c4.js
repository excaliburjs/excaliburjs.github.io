"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[5750],{6095:function(e,n,a){a.r(n),a.d(n,{Head:function(){return g},default:function(){return N}});var t=a(1151),s=a(7294);function c(e){const n=Object.assign({p:"p",a:"a",span:"span"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"The line graphic object can be used to draw lines using Excalibur. The Actor ",s.createElement(n.a,{href:"/docs/api/edge/classes/GraphicsComponent.html",title:"View 'GraphicsComponent' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"GraphicsComponent")," centers graphics by default, so it might be desireable to set the ",s.createElement(n.a,{href:"/docs/graphics-component/#component-specific-overrides"},"anchor")," to (0, 0);"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> lineActor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nlineActor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>anchor <span class="token operator">=</span> ex<span class="token punctuation">.</span>Vector<span class="token punctuation">.</span>Zero\nlineActor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Line</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    start<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    end<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    color<span class="token operator">:</span> ex<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>Green<span class="token punctuation">,</span>\n    thickness<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\ngame<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>lineActor<span class="token punctuation">)</span></code></pre></div>'}}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(c,e)):c(e)},p=a(4854),l=a(2436),r=a(2030),i=a(7306),u=a(2768),m=a(871),k=a(7924),d=a(9813);const E={Link:p.rU,Note:u.Z,Example:m.Z,IFrameEmbed:k.Z,CodeSandboxEmbed:d.Z},h=e=>{let{toc:n,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>s.createElement(s.Fragment,{key:n},s.createElement("section",null,s.createElement(p.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return s.createElement(p.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},f=()=>s.createElement("div",{className:"docs-search"},s.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),g=e=>{let{data:n}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,n.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(e){let{data:n,children:a}=e;const{page:c,toc:o,github:{data:{repository:{releases:p}}}}=n,{frontmatter:l}=c;return s.createElement(r.Z,null,s.createElement(i.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(f),s.createElement(h,{toc:o.edges.map((e=>e.node)),releases:p.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,l.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:E},a))))))}function N(e){return s.createElement(b,e,s.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-04-1-lines-mdx-e96a475d0f483892d7c4.js.map