"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[3429],{3e3:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return k}});var n=a(1151),s=a(7294);function c(e){const t=Object.assign({p:"p",a:"a",img:"img",code:"code",span:"span"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.p,null,"Sometimes it's useful to apply a custom shader to an ",s.createElement(t.a,{href:"/docs/api/edge/classes/Actor.html",title:"View 'Actor' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Actor")," to give some kind of graphical effect! This can be done with ",s.createElement(t.a,{href:"/docs/api/edge/classes/Material.html",title:"View 'Material' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Material"),"'s!"),"\n",s.createElement(t.p,null,"Example swirling code ",s.createElement(t.a,{href:"https://github.com/excaliburjs/Excalibur/tree/main/sandbox/tests/material"},"here"),"\n",s.createElement(t.img,{src:"/cdef316f7da138d5acc2d59d9b526600/swirl2.gif",alt:"Example Swirling Shader Effect"})),"\n",s.createElement(t.p,null,"This feature cant be applied using the ",s.createElement(t.code,null,"ex.Actor.graphics.material = material")," property or by setting the material property on the ",s.createElement(t.code,null,"ex.ExcaliburGraphicsContext.material = material")," with ",s.createElement(t.code,null,".save()/.restore()")),"\n",s.createElement(t.p,null,"This feature opt out of the default batch rendering and issues a separate draw call, which can incur a performance penalty depending on how many calls/types of shaders you are running."),"\n",s.createElement(t.p,null,"Pre-built varyings: * ",s.createElement(t.code,null,"in vec2 v_uv")," - UV coordinate"),"\n",s.createElement(t.p,null,"Pre-built uniforms:\n_ ",s.createElement(t.code,null,"uniform sampler2D u_graphic")," - The current graphic displayed by the GraphicsComponent\n_ ",s.createElement(t.code,null,"uniform vec2 u_resolution")," - The current resolution of the screen\n_ ",s.createElement(t.code,null,"uniform vec2 u_size;")," - The current size of the graphic\n_ ",s.createElement(t.code,null,"uniform vec4 u_color")," - The current color of the material * ",s.createElement(t.code,null,"uniform float u_opacity")," - The current opacity of the graphics context"),"\n",s.createElement(t.p,null,"A custom vertex shader can be provided, otherwise a default will be provided"),"\n",s.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> material <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Material</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">\'test\'</span><span class="token punctuation">,</span>\n  color<span class="token operator">:</span> ex<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>Red<span class="token punctuation">,</span>\n  fragmentSource<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#version 300 es\n  precision mediump float;\n  // UV coord\n  in vec2 v_uv;\n  uniform sampler2D u_graphic;\n  uniform vec4 u_color;\n  uniform float u_opacity;\n  out vec4 fragColor;\n  void main() {\n    vec4 color = u_color;\n    color = texture(u_graphic, v_uv);\n    color.rgb = color.rgb * u_opacity;\n    color.a = color.a * u_opacity;\n    fragColor = color * u_color;\n  }</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?s.createElement(t,e,s.createElement(c,e)):c(e)},l=a(4160),o=a(2640),i=a(2030),m=a(7306),p=a(2768),u=a(871),d=a(7924),h=a(9813);const f={Link:l.rU,Note:p.Z,Example:u.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:h.Z},g=e=>{let{toc:t,releases:a}=e;return s.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},s.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),s.createElement("a",{className:"ui button docs-close",href:"#docs-content"},s.createElement("i",{className:"hamburger icon"})," ",s.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),s.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const e={};for(let a of t)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((t=>s.createElement(s.Fragment,{key:t},s.createElement("section",null,s.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[t][0].frontmatter.path},t),s.createElement("div",{className:"sub item"},s.createElement("div",{className:"menu"},e[t].map((e=>{let{frontmatter:t}=e;return s.createElement(l.rU,{key:t.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:t.path},t.title)}))))))))})(),s.createElement("a",{className:"item",href:"/examples/"},"Examples"),s.createElement("div",{className:"header item"},"API Reference"),s.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),a.map((e=>s.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},E=()=>s.createElement("div",{className:"docs-search"},s.createElement(o.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),b=e=>{let{data:t}=e;return s.createElement(s.Fragment,null,s.createElement("title",null,t.page.frontmatter.title),s.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),s.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function v(e){let{data:t,children:a}=e;const{page:c,toc:r,github:{data:{repository:{releases:l}}}}=t,{frontmatter:o}=c;return s.createElement(i.Z,null,s.createElement(m.Z),s.createElement("div",{className:"ui page stackable relaxed grid"},s.createElement("div",{className:"four wide column"},s.createElement(E),s.createElement(g,{toc:r.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),s.createElement("div",{className:"twelve wide column"},s.createElement("div",{className:"ui left aligned container"},s.createElement("h1",null,o.title),s.createElement("div",{id:"docs-content",className:"docs-content"},s.createElement(n.Zo,{components:f},a))))))}function k(e){return s.createElement(v,e,s.createElement(r,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-04-2-materials-mdx-0bedbbd1ab30dfd40914.js.map