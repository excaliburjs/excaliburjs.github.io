"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[9959],{9651:function(e,n,a){a.r(n),a.d(n,{Head:function(){return v},default:function(){return y}});var t=a(1151),s=a(7294);function o(e){const n=Object.assign({h2:"h2",a:"a",div:"div",img:"img",h3:"h3",p:"p",strong:"strong",em:"em"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.h2,{id:"collision-event-lifecycle",style:{position:"relative"}},s.createElement(n.a,{href:"#collision-event-lifecycle","aria-label":"collision event lifecycle permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Collision Event Lifecycle"),"\n",s.createElement(n.img,{src:"/assets/images/docs/collisioneventdiagram.png",alt:"Collision Events Diagram"}),"\n",s.createElement(n.h3,{id:"collision-start-collisionstart",style:{position:"relative"}},s.createElement(n.a,{href:"#collision-start-collisionstart","aria-label":"collision start collisionstart permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'Collision Start "collisionstart"'),"\n",s.createElement(n.p,null,"The ",s.createElement(n.strong,null,"collisionstart")," event is fired when a ",s.createElement(n.a,{href:"",title:"Missing link to 'Body' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"physics body"),", usually attached to an actor, first starts colliding with another ",s.createElement(n.a,{href:"",title:"Missing link to 'Body' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"body"),", and will not fire again while in contact until the the pair separates and collides again."),"\n",s.createElement(n.p,null,"Use cases for the ",s.createElement(n.strong,null,"collisionstart")," event may be detecting when an actor has touch a surface (like landing) or if a item has been touched and needs to be picked up."),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'collisionstart\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// or</span>\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>collider<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'collisionstart\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h3,{id:"collision-end-collisionend",style:{position:"relative"}},s.createElement(n.a,{href:"#collision-end-collisionend","aria-label":"collision end collisionend permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'Collision End "collisionend"'),"\n",s.createElement(n.p,null,"The ",s.createElement(n.strong,null,"collisionend")," event is fired when two ",s.createElement(n.a,{href:"",title:"Missing link to 'Body' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing tsdoc-link--aliased",target:"_blank"},"physics bodies")," are no longer in contact. This event will not fire again until another collision and separation."),"\n",s.createElement(n.p,null,"Use cases for the ",s.createElement(n.strong,null,"collisionend")," event might be to detect when an actor has left a surface (like jumping) or has left an area."),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'collisionend\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// or</span>\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>collider<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'collisionend\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h3,{id:"pre-collision-precollision",style:{position:"relative"}},s.createElement(n.a,{href:"#pre-collision-precollision","aria-label":"pre collision precollision permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'Pre Collision "precollision"'),"\n",s.createElement(n.p,null,"The ",s.createElement(n.strong,null,"precollision")," event is fired ",s.createElement(n.strong,null,"every frame")," where a collision pair is found and two bodies are intersecting."),"\n",s.createElement(n.p,null,"This event is useful for building in custom collision resolution logic in Passive-Passive or Active-Passive scenarios. For example in a breakout game you may want to tweak the angle of ricochet of the ball depending on which side of the paddle you hit."),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'precollision\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// or</span>\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>collider<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'precollision\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h3,{id:"post-collision-postcollision",style:{position:"relative"}},s.createElement(n.a,{href:"#post-collision-postcollision","aria-label":"post collision postcollision permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),'Post Collision "postcollision"'),"\n",s.createElement(n.p,null,"The ",s.createElement(n.strong,null,"postcollision")," event is fired for ",s.createElement(n.strong,null,"every frame")," where collision resolution was performed. Collision resolution is when two bodies influence each other and cause a response like bouncing off one another. It is only possible to have ",s.createElement(n.em,null,"postcollision")," event in Active-Active and Active-Fixed type collision pairs."),"\n",s.createElement(n.p,null,"Post collision would be useful if you need to know that collision resolution is happening or need to tweak the default resolution."),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'postcollision\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// or</span>\nactor<span class="token punctuation">.</span>body<span class="token punctuation">.</span>collider<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">\'postcollision\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(o,e)):o(e)},c=a(4854),i=a(2436),p=a(2030),r=a(7306),u=a(2768),d=a(871),m=a(7924),h=a(9813);const k={Link:c.rU,Note:u.Z,Example:d.Z,IFrameEmbed:m.Z,CodeSandboxEmbed:h.Z},g=e=>{let{toc:n,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>s.createElement(s.Fragment,{key:n},s.createElement("section",null,s.createElement(c.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return s.createElement(c.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},f=()=>s.createElement("div",{className:"docs-search"},s.createElement(i.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),v=e=>{let{data:n}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,n.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function E(e){let{data:n,children:a}=e;const{page:o,toc:l,github:{data:{repository:{releases:c}}}}=n,{frontmatter:i}=o;return s.createElement(p.Z,null,s.createElement(r.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(f),s.createElement(g,{toc:l.edges.map((e=>e.node)),releases:c.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,i.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:k},a))))))}function y(e){return s.createElement(E,e,s.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-08-collision-events-mdx-6c8c8e62c16ad5a02ee7.js.map