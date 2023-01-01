"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[6707],{2736:function(e,n,a){a.r(n),a.d(n,{Head:function(){return f},default:function(){return v}});var t=a(1151),s=a(7294);function c(e){const n=Object.assign({p:"p",a:"a",div:"div",ol:"ol",li:"li",img:"img",ul:"ul",code:"code",h2:"h2"},(0,t.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,s.createElement(n.a,{href:"https://github.com/excaliburjs/excalibur-aseprite"},"This extension")," adds support for ",s.createElement(n.a,{href:"https://www.aseprite.org/"},"Aseprite")," SpriteSheets and Animations exported to json."),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="text"><pre class="language-text"><code class="language-text">> npm install @excaliburjs/plugin-aseprite</code></pre></div>'}}),"\n",s.createElement(n.ol,null,"\n",s.createElement(n.li,null,"Export using the ",s.createElement(n.a,{href:"https://www.aseprite.org/docs/cli/"},"aseprite cli")," or through the UI"),"\n"),"\n",s.createElement(n.img,{src:"https://github.com/excaliburjs/excalibur-aseprite/raw/main/export.gif",alt:"Export as JSON in Aseprite"}),"\n",s.createElement(n.ol,{start:"2"},"\n",s.createElement(n.li,null,"Load the Aseprite resource via the json and voila ✨"),"\n"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"Use ",s.createElement(n.code,null,"AsepriteResource.getAnimation(name)")," to retrieve animations by the name in aseprite"),"\n",s.createElement(n.li,null,"Use ",s.createElement(n.code,null,"AsepriteResource.getSpriteSheet()")," to get the equivalent Excalibur SpriteSheet"),"\n",s.createElement(n.li,null,"Use ",s.createElement(n.code,null,"Aseprite.rawAseprite")," to access the raw data structure from Aseprite"),"\n",s.createElement(n.li,null,"Use ",s.createElement(n.code,null,"Aseprite.image")," to access the source image for the SpriteSheet"),"\n"),"\n",s.createElement(n.h2,{id:"example",style:{position:"relative"}},s.createElement(n.a,{href:"#example","aria-label":"example permalink",className:"anchor before"},s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Example:"),"\n",s.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">import</span> <span class="token punctuation">{</span> AsepriteResource <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@excaliburjs/plugin-aseprite\'</span>\n\n<span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  width<span class="token operator">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n  height<span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>\n  displayMode<span class="token operator">:</span> DisplayMode<span class="token punctuation">.</span>FitScreen<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> asepriteSpriteSheet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AsepriteResource</span><span class="token punctuation">(</span><span class="token string">\'./beetle.json\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> loader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Loader</span><span class="token punctuation">(</span><span class="token punctuation">[</span>asepriteSpriteSheet<span class="token punctuation">]</span><span class="token punctuation">)</span>\ngame<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>loader<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> anim <span class="token operator">=</span> asepriteSpriteSheet<span class="token punctuation">.</span><span class="token function">getAnimation</span><span class="token punctuation">(</span><span class="token string">\'Loop\'</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pos<span class="token operator">:</span> <span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  actor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>anim<span class="token punctuation">)</span>\n\n  game<span class="token punctuation">.</span>currentScene<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>actor<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.img,{src:"https://github.com/excaliburjs/excalibur-aseprite/raw/main/example.gif",alt:"Example running"}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?s.createElement(n,e,s.createElement(c,e)):c(e)},l=a(4854),p=a(2436),r=a(2030),i=a(7306),u=a(2768),m=a(871),d=a(7924),k=a(9813);const h={Link:l.rU,Note:u.Z,Example:m.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:k.Z},g=e=>{let{toc:n,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>s.createElement(s.Fragment,{key:n},s.createElement("section",null,s.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return s.createElement(l.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"}," Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},E=()=>s.createElement("div",{className:"docs-search"},s.createElement(p.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),f=e=>{let{data:n}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,n.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(e){let{data:n,children:a}=e;const{page:c,toc:o,github:{data:{repository:{releases:l}}}}=n,{frontmatter:p}=c;return s.createElement(r.Z,null,s.createElement(i.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(E),s.createElement(g,{toc:o.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,p.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(t.Zo,{components:h},a))))))}function v(e){return s.createElement(b,e,s.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-15-aseprite-plugin-mdx-57e5edc6171c02a51bd3.js.map