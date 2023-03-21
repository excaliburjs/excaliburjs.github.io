"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[46],{8992:function(e,t,a){a.r(t),a.d(t,{Head:function(){return k},default:function(){return v}});var n=a(1151),s=a(7294);function c(e){const t=Object.assign({h2:"h2",a:"a",span:"span",p:"p"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h2,{id:"fade",style:{position:"relative"}},s.createElement(t.a,{href:"#fade","aria-label":"fade permalink",className:"anchor before"},s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Fade"),"\n",s.createElement(t.p,null,"This action method will cause Actor or Entity ",s.createElement(t.a,{href:"/docs/api/edge/classes/GraphicsComponent.html",title:"View 'GraphicsComponent' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"GraphicsComponent")," opacity to change from its current value to the provided value by a specified time (in milliseconds). This method is part of the actor 'Action' fluent API allowing action chaining."),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  height<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  color<span class="token operator">:</span> ex<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// fade to invisible over 2000 ms</span>\nactor<span class="token punctuation">.</span>actions<span class="token punctuation">.</span><span class="token function">fade</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span></code></pre></div>'}}))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?s.createElement(t,e,s.createElement(c,e)):c(e)},o=a(4854),r=a(2436),i=a(2030),p=a(7306),m=a(2768),u=a(871),d=a(7924),h=a(9813);const f={Link:o.rU,Note:m.Z,Example:u.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:h.Z},E=e=>{let{toc:t,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of t)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((t=>s.createElement(s.Fragment,{key:t},s.createElement("section",null,s.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[t][0].frontmatter.path},t),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[t].map((e=>{let{frontmatter:t}=e;return s.createElement(o.rU,{key:t.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:t.path},t.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},g=()=>s.createElement("div",{className:"docs-search"},s.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),k=e=>{let{data:t}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,t.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(e){let{data:t,children:a}=e;const{page:c,toc:l,github:{data:{repository:{releases:o}}}}=t,{frontmatter:r}=c;return s.createElement(i.Z,null,s.createElement(p.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(g),s.createElement(E,{toc:l.edges.map((e=>e.node)),releases:o.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,r.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(n.Zo,{components:f},a))))))}function v(e){return s.createElement(b,e,s.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-06-3-actions-fade-mdx-ef61c5775211779d7084.js.map