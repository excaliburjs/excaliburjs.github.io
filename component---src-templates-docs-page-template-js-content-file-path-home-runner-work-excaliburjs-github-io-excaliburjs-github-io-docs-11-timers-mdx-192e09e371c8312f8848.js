"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[7246],{7916:function(e,n,a){a.r(n),a.d(n,{Head:function(){return g},default:function(){return b}});var t=a(1151),s=a(7294);function c(e){const n=Object.assign({p:"p",code:"code",h2:"h2",a:"a",div:"div"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"Timers are useful for running tasks synchronized with the Excalibur update and framerate, using the browser ",s.createElement(n.code,null,"setTimeout()")," or ",s.createElement(n.code,null,"setInterval()"),"."),"\n",s.createElement(n.h2,{id:"timer",style:{position:"relative"}},s.createElement(n.a,{href:"#timer","aria-label":"timer permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Timer"),"\n",s.createElement(n.p,null,"Timers can be created to repeat forever or for a fixed number of repeats."),"\n",s.createElement(n.p,null,"Timers do not start until they are explicitly started with ",s.createElement(n.code,null,".start()")," and added to a ",s.createElement(n.code,null,"Scene")),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function-variable function">fcn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Every 100 ms\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  repeats<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  interval<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\ngame<span class="token punctuation">.</span>currentScene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n\ntimer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"random-intervals",style:{position:"relative"}},s.createElement(n.a,{href:"#random-intervals","aria-label":"random intervals permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Random Intervals"),"\n",s.createElement(n.p,null,"Timers can be created with random intervals."),"\n",s.createElement(n.p,null,"For example, this timer will repeat every 500 milliseconds with an added random interval between 0-500 milliseconds."),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Random</span><span class="token punctuation">(</span><span class="token number">1337</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Timer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  random<span class="token punctuation">,</span>\n  randomRange<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  interval<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span>\n  repeats<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h2,{id:"one-off-callbacks",style:{position:"relative"}},s.createElement(n.a,{href:"#one-off-callbacks","aria-label":"one off callbacks permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"One off callbacks"),"\n",s.createElement(n.p,null,"Instead of using the browser ",s.createElement(n.code,null,"setTimeout"),", check out ",s.createElement(n.a,{href:"/docs/api/edge/classes/Clock.html#schedule",title:"View 'Clock.schedule' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Clock.schedule")," you can read more in the ",s.createElement(n.a,{href:"/docs/clock"},"clock documentation")))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(c,e)):c(e)},o=a(4854),r=a(2436),p=a(2030),i=a(7306),m=a(2768),u=a(871),d=a(7924),k=a(9813);const h={Link:o.rU,Note:m.Z,Example:u.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:k.Z},f=e=>{let{toc:n,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>s.createElement(s.Fragment,{key:n},s.createElement("section",null,s.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return s.createElement(o.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},E=()=>s.createElement("div",{className:"docs-search"},s.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),g=e=>{let{data:n}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,n.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function v(e){let{data:n,children:a}=e;const{page:c,toc:l,github:{data:{repository:{releases:o}}}}=n,{frontmatter:r}=c;return s.createElement(p.Z,null,s.createElement(i.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(E),s.createElement(f,{toc:l.edges.map((e=>e.node)),releases:o.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,r.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:h},a))))))}function b(e){return s.createElement(v,e,s.createElement(l,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-11-timers-mdx-192e09e371c8312f8848.js.map