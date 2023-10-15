"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[3085],{4734:function(e,n,a){a.r(n),a.d(n,{Head:function(){return b},default:function(){return E}});var s=a(1151),t=a(7294);function p(e){const n=Object.assign({p:"p",span:"span",h2:"h2",a:"a"},(0,s.ah)(),e.components),{IFrameEmbed:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("IFrameEmbed",!0),t.createElement(t.Fragment,null,t.createElement(n.p,null,"SpriteSheet is really an ordered collection of sprites from the same base image."),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> spriteSheet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">SpriteSheet</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  image<span class="token operator">:</span> imageRun<span class="token punctuation">,</span>\n  sprites<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(n.h2,{id:"uniform-grid-based-spritesheet",style:{position:"relative"}},t.createElement(n.a,{href:"#uniform-grid-based-spritesheet","aria-label":"uniform grid based spritesheet permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Uniform Grid Based Spritesheet"),"\n",t.createElement(n.p,null,"If you spritesheet is a neat grid there is a static builder for you to slice up that image source. Most sprite sheets are tightly packed like so."),"\n",t.createElement(n.p,null,"Some source spritesheets may have margin between sprites and an offset, like these ",t.createElement(n.a,{href:"https://www.kenney.nl/assets/playing-cards-pack"},"playing cards from Kenny.nl")),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/619ea577f49c881bd2c001e26bd16267/b3ad9/kenny-cards.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 28.723404255319153%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABiklEQVR42hXOO5PTMBSGYf94llSxc8VObCebBQYK/gdDwQKJb7Ks+7EU25In1dIiinek03zzBKO6f3D9eHasv1hpEkfV2XXyxXVibxv6+YH5yRY4dtf24l6r8/haJu77rwtt1ZmXLPE9syt5Ntzs397+fgsmaSILQ2KFPk5wX8+8j22nUkdkNCJ6momKh4qsp5ocx1ubDAVe25/lgbcykRVbi5IdwA9TDCEG9ylwetzMZkpnNeT+v3vAcJyFPjkGGz96eTCdeu12xjyfa5paRHePP3UmOp0KpHa+TCGRNQ2sf9TDl6A3U2iMjUEPB9DTSqkhlmCOvpDyPpf+JgxWRMABUxkjIldNSw43DEmBYXXz0v8hJEPo+o+BgPvWj2VC3U/KC4U2KZX6TAVsOwYvQpm0pWqHiTqhTmQI832FaF5hyOpW7W5I5IUXlq3aMH7/GmgzPQ2TXfo30qNdqH5Yet1Kgn6iTG25MsuOy/deF9WIhojwxe+ijsquD0sCiyuSkdeGDe3fYTkm/wDp9YOA7DX65wAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Kenney.nl pixel art playing cards"\n        title=""\n        src="/static/619ea577f49c881bd2c001e26bd16267/1d69c/kenny-cards.png"\n        srcset="/static/619ea577f49c881bd2c001e26bd16267/4dcb9/kenny-cards.png 188w,\n/static/619ea577f49c881bd2c001e26bd16267/5ff7e/kenny-cards.png 375w,\n/static/619ea577f49c881bd2c001e26bd16267/1d69c/kenny-cards.png 750w,\n/static/619ea577f49c881bd2c001e26bd16267/b3ad9/kenny-cards.png 909w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(n.p,null,t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="ts"><pre class="language-ts"><code class="language-ts"><span class="token keyword">const</span> kennyCardsImage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ImageSource</span><span class="token punctuation">(</span>kennyCardsImageSrc<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> spriteSheet <span class="token operator">=</span> ex<span class="token punctuation">.</span>SpriteSheet<span class="token punctuation">.</span><span class="token function">fromImageSource</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    image<span class="token operator">:</span> kennyCardsImage<span class="token punctuation">,</span>\n    grid<span class="token operator">:</span> <span class="token punctuation">{</span>\n        rows<span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>\n        columns<span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>\n        spriteWidth<span class="token operator">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n        spriteHeight<span class="token operator">:</span> <span class="token number">60</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    spacing<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// Optionally specify the offset from the top left of sheet to start parsing</span>\n        originOffset<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token comment">// Optionally specify the margin between each sprite</span>\n        margin<span class="token operator">:</span> <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div>'}})),"\n",t.createElement(a,{src:"https://excaliburjs.com/excalibur-snippets/spritesheet/"}),"\n",t.createElement(n.h2,{id:"sparse-spritesheet",style:{position:"relative"}},t.createElement(n.a,{href:"#sparse-spritesheet","aria-label":"sparse spritesheet permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Sparse Spritesheet"),"\n",t.createElement(n.p,null,"You can also build a spritesheet from a list of different sized source views using ",t.createElement(n.a,{href:"/docs/api/edge/classes/SpriteSheet.html#fromImageSourceWithSourceViews",title:"View 'SpriteSheet.fromImageSourceWithSourceViews' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"SpriteSheet.fromImageSourceWithSourceViews")," method"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> ss <span class="token operator">=</span> ex<span class="token punctuation">.</span>SpriteSheet<span class="token punctuation">.</span><span class="token function">fromImageSourceWithSourceViews</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  image<span class="token punctuation">,</span>\n  sourceViews<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span> x<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> width<span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">50</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?t.createElement(n,e,t.createElement(p,e)):p(e)};var c=a(4160),r=a(2640),l=a(2030),i=a(7306),u=a(2768),m=a(871),d=a(7924),k=a(9813);const g={Link:c.rU,Note:u.Z,Example:m.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:k.Z},h=e=>{let{toc:n,releases:a}=e;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>t.createElement(t.Fragment,{key:n},t.createElement("section",null,t.createElement(c.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return t.createElement(c.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"},"Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),a.map((e=>t.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),b=e=>{let{data:n}=e;return t.createElement(t.Fragment,null,t.createElement("title",null,n.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function y(e){let{data:n,children:a}=e;const{page:p,toc:o,github:{data:{repository:{releases:c}}}}=n,{frontmatter:r}=p;return t.createElement(l.Z,null,t.createElement(i.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(h,{toc:o.edges.map((e=>e.node)),releases:c.edges.map((e=>e.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,r.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(s.Zo,{components:g},a))))))}function E(e){return t.createElement(y,e,t.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-04-1-spritesheets-mdx-4db01d3fe770b1e56b02.js.map