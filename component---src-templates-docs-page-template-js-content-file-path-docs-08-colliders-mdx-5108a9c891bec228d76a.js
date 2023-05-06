"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[448],{4943:function(n,a,s){s.r(a),s.d(a,{Head:function(){return b},default:function(){return y}});var e=s(1151),t=s(7294);function o(n){const a=Object.assign({p:"p",a:"a",strong:"strong",h3:"h3",span:"span",code:"code"},(0,e.ah)(),n.components),{Note:s}=a;return s||function(n,a){throw new Error("Expected "+(a?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),t.createElement(t.Fragment,null,t.createElement(a.p,null,"Colliders are abstractions over geometry in Excalibur, they implement the ",t.createElement(a.a,{href:"/docs/api/edge/classes/Collider.html",title:"View 'Collider' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Collider")," interface and know how\nto detect intersecions with other colliders, test ray casts, check point containment, etc. Related but not the same are ",t.createElement(a.a,{href:"/docs/bodies"},"bodies")," which are abstractions over the collision response"),"\n",t.createElement(a.p,null,"Colliders attached to an ",t.createElement(a.a,{href:"/docs/api/edge/classes/Entity.html",title:"View 'Entity' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Entity")," will have a ",t.createElement(a.a,{href:"",title:"Missing link to 'Entity.owner' docs. We will happily accept a PR to fix this! 🙏",className:"tsdoc-link tsdoc-link--missing",target:"_blank"},"Entity.owner")," populated."),"\n",t.createElement(s,null,t.createElement(a.p,null,t.createElement(a.strong,null,"Keep in mind")," colliders are relative to the owner ",t.createElement(a.a,{href:"/docs/api/edge/classes/TransformComponent.html",title:"View 'TransformComponent' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"TransformComponent"),", they only represent geometry relative to an entity ",t.createElement(a.a,{href:"/docs/api/edge/classes/TransformComponent.html",title:"View 'TransformComponent' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"TransformComponent"),". Colliders can be shifted using the ",t.createElement(a.a,{href:"/docs/api/edge/classes/Collider.html#offset",title:"View 'Collider.offset' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Collider.offset"),"."),t.createElement(a.p,null,"Colliders don't have a position in the world without an Actor/Entity with a position")),"\n",t.createElement(a.h3,{id:"circlecollider",style:{position:"relative"}},t.createElement(a.a,{href:"#circlecollider","aria-label":"circlecollider permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"CircleCollider"),"\n",t.createElement(a.p,null,"The ",t.createElement(a.a,{href:"/docs/api/edge/classes/CircleCollider.html",title:"View 'CircleCollider' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"CircleCollider")," defines a circular geometry and can be created and added to an actor"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// Actors have a built in circle collider if radius is set</span>\n<span class="token keyword">const</span> actorWithCircleCollider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  radius<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Alternatively you can define and set a collider yourself</span>\n\n<span class="token keyword">const</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">CircleCollider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  radius<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token comment">// 10 pixel radius</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// or</span>\n\n<span class="token keyword">const</span> circle <span class="token operator">=</span> ex<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span><span class="token function">Circle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token comment">// 10 pixel radius</span>\n\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  collider<span class="token operator">:</span> circle<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Change the collider afterwards</span>\nactor<span class="token punctuation">.</span>collider<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>circle<span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"box-and-polygoncollider",style:{position:"relative"}},t.createElement(a.a,{href:"#box-and-polygoncollider","aria-label":"box and polygoncollider permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Box and PolygonCollider"),"\n",t.createElement(a.p,null,"The ",t.createElement(a.a,{href:"/docs/api/edge/classes/PolygonCollider.html",title:"View 'PolygonCollider' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"PolygonCollider")," allows the definition of arbitrary ",t.createElement(a.strong,null,"convex"),' polygons. Convex meaning there are no dents in the shape, for example "Pac-Man" would be a non-convex shape.'),"\n",t.createElement(a.p,null,"A box collider is created using the PolygonCollider, there is a ",t.createElement(a.a,{href:"/docs/api/edge/classes/Shape.html#Box",title:"View 'Shape.Box' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Shape.Box")," helper to build these."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// Actors have a built in box collider if width/height are set</span>\n<span class="token keyword">const</span> actorWithBoxCollider <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  width<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  height<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// Alternatively you can define and set a collider yourself</span>\n<span class="token keyword">const</span> box <span class="token operator">=</span> ex<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span><span class="token function">Box</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  collider<span class="token operator">:</span> box<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,'A polygon collider can be defined using a set of points specified in clockwise order (also known as "winding").'),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> triangle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">PolygonCollider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  points<span class="token operator">:</span> <span class="token punctuation">[</span>ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"edgecollider",style:{position:"relative"}},t.createElement(a.a,{href:"#edgecollider","aria-label":"edgecollider permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"EdgeCollider"),"\n",t.createElement(a.p,null,"An ",t.createElement(a.a,{href:"/docs/api/edge/classes/EdgeCollider.html",title:"View 'EdgeCollider' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"EdgeCollider")," can be used to define a single line collider."),"\n",t.createElement(a.p,null,"They are useful for creating walls, barriers, or platforms in your game."),"\n",t.createElement(a.p,null,"Edge points are relative to the Entity position, so begin of ",t.createElement(a.code,null,"(0, 0)")," means it starts right on the top of the Entity ",t.createElement(a.a,{href:"/docs/api/edge/classes/TransformComponent.html",title:"View 'TransformComponent' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"TransformComponent")),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> edge <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">EdgeCollider</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  begin<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  end<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  collider<span class="token operator">:</span> edge<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"compositecollider",style:{position:"relative"}},t.createElement(a.a,{href:"#compositecollider","aria-label":"compositecollider permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"CompositeCollider"),"\n",t.createElement(a.p,null,"CompositeCollider can be used to attach multiple colliders to an entity at once. This can be useful when generating complex shapes, like for\nexample a capsule collider for a player Actor."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// Capsule Collider</span>\n<span class="token keyword">const</span> capsule <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">CompositeCollider</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  ex<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span><span class="token function">Circle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  ex<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span><span class="token function">Box</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  ex<span class="token punctuation">.</span>Shape<span class="token punctuation">.</span><span class="token function">Circle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> player <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  pos<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  collider<span class="token operator">:</span> capsule<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre></div>'}}))}var p=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.ah)(),n.components);return a?t.createElement(a,n,t.createElement(o,n)):o(n)};var c=s(4854),l=s(3539),i=s(2030),r=s(7306),u=s(2768),k=s(871),d=s(7924),m=s(9813);const h={Link:c.rU,Note:u.Z,Example:k.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:m.Z},g=n=>{let{toc:a,releases:s}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const n={};for(let s of a)n[s.frontmatter.section]||(n[s.frontmatter.section]=[]),n[s.frontmatter.section].push(s);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(c.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(c.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),s.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),b=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function E(n){let{data:a,children:s}=n;const{page:o,toc:p,github:{data:{repository:{releases:c}}}}=a,{frontmatter:l}=o;return t.createElement(i.Z,null,t.createElement(r.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(g,{toc:p.edges.map((n=>n.node)),releases:c.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(e.Zo,{components:h},s))))))}function y(n){return t.createElement(E,n,t.createElement(p,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-08-colliders-mdx-5108a9c891bec228d76a.js.map