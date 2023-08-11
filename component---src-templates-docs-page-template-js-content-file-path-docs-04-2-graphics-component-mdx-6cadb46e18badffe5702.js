"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[3079],{4215:function(n,a,e){e.r(a),e.d(a,{Head:function(){return E},default:function(){return y}});var s=e(1151),t=e(7294);function c(n){const a=Object.assign({p:"p",code:"code",h2:"h2",a:"a",span:"span",ol:"ol",li:"li",h3:"h3",ul:"ul"},(0,s.ah)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"There is a new component, ",t.createElement(a.code,null,"ex.GraphicsComponent")," to work with these graphics with ",t.createElement(a.code,null,"ex.Actor"),"'s and other ",t.createElement(a.code,null,"ex.Entity"),"'s"),"\n",t.createElement(a.p,null,"The ",t.createElement(a.code,null,"ex.GraphicsComponent")," allows users to manage graphics with Actors and Entities in an easy way"),"\n",t.createElement(a.h2,{id:"how-to-use-the-graphics-component",style:{position:"relative"}},t.createElement(a.a,{href:"#how-to-use-the-graphics-component","aria-label":"how to use the graphics component permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"How to use the Graphics Component"),"\n",t.createElement(a.ol,null,"\n",t.createElement(a.li,null,"Graphics using ",t.createElement(a.a,{href:"/docs/api/edge/classes/ImageSource.html",title:"View 'ImageSource' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"images")," (and any ",t.createElement(a.a,{href:"/docs/api/edge/classes/Resource.html",title:"View 'Resource' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Resource"),") must be ",t.createElement(a.a,{href:"assets"},"loaded")," before use"),"\n",t.createElement(a.li,null,"Graphics like ",t.createElement(a.a,{href:"/docs/api/edge/classes/Sprite.html",title:"View 'Sprite' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Sprites")," are like a window into an ",t.createElement(a.a,{href:"/docs/api/edge/classes/ImageSource.html",title:"View 'ImageSource' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"image")),"\n",t.createElement(a.li,null,"Graphics like ",t.createElement(a.a,{href:"/docs/api/edge/classes/Canvas.html",title:"View 'Canvas' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Canvas")," produce internal bitmap's which are large in memory and should be used sparingly or cached"),"\n",t.createElement(a.li,null,"Graphics can be added to the ",t.createElement(a.a,{href:"/docs/api/edge/classes/GraphicsComponent.html",title:"View 'GraphicsComponent' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"GraphicsComponent")," on an ",t.createElement(a.a,{href:"/docs/api/edge/classes/Actor.html",title:"View 'Actor' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Actor")," or ",t.createElement(a.a,{href:"/docs/api/edge/classes/Entity.html",title:"View 'Entity' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"Entity")),"\n",t.createElement(a.li,null,"Direct access to the ",t.createElement(a.a,{href:"/docs/api/edge/interfaces/ExcaliburGraphicsContext.html",title:"View 'ExcaliburGraphicsContext' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ExcaliburGraphicsContext")),"\n"),"\n",t.createElement(a.p,null,"For most games, you will be using the graphics component off of ",t.createElement(a.a,{href:"/docs/api/edge/classes/Actor.html",title:"View 'Actor' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Actors")," or plain ",t.createElement(a.a,{href:"/docs/api/edge/classes/Entity.html",title:"View 'Entity' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Entities"),"."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> image <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ImageSource</span><span class="token punctuation">(</span><span class="token string">\'./path/to/my/image.png\'</span><span class="token punctuation">)</span>\n<span class="token keyword">await</span> game<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  x<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  y<span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>\n  anchor<span class="token operator">:</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// Optional value that controls the position of the image.</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>image<span class="token punctuation">.</span><span class="token function">toSprite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"addingshowing-graphics",style:{position:"relative"}},t.createElement(a.a,{href:"#addingshowing-graphics","aria-label":"addingshowing graphics permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Adding/Showing graphics"),"\n",t.createElement(a.p,null,"The graphics component allows developers to save named graphics to avoid passing around graphic object references if desired. These can be used to show specific graphics."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'jump\'</span><span class="token punctuation">,</span> jumpAnimation<span class="token punctuation">)</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">\'jump\'</span><span class="token punctuation">)</span> <span class="token comment">// display the graphic</span>\n<span class="token comment">// equivalent to</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>jumpAnimation<span class="token punctuation">)</span> <span class="token comment">// display the graphic</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// hide the graphic</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"If no name is specified when added to the graphics component it is considered the 'default' graphic and is shown automatically."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token comment">// graphic considered \'default\' and displayed automatically</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>jumpAnimation<span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"flipping-graphics",style:{position:"relative"}},t.createElement(a.a,{href:"#flipping-graphics","aria-label":"flipping graphics permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Flipping Graphics"),"\n",t.createElement(a.p,null,"The graphics component allows flipping all the graphics at once without modifying the original graphics."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">\'walk\'</span><span class="token punctuation">,</span> leftAnimation<span class="token punctuation">)</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">\'walk\'</span><span class="token punctuation">)</span> <span class="token comment">// display the graphic</span>\n<span class="token comment">// flip the graphics to go right</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>flipHorizontal <span class="token operator">=</span> <span class="token boolean">true</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"component-specific-overrides",style:{position:"relative"}},t.createElement(a.a,{href:"#component-specific-overrides","aria-label":"component specific overrides permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Component Specific Overrides"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.code,null,"flipHorizontal")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Flips all the graphics in the component horizontally"),"\n"),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.code,null,"flipVertical")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Flips all the graphics in the component vertically"),"\n"),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.code,null,"visible: boolean")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Shows or hides the all the graphics for this component"),"\n"),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.code,null,"opacity: number")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Applies an opacity to all the graphics shown for this component"),"\n"),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.code,null,"offset: Vector")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Offset in pixels to shift the graphics for this component"),"\n"),"\n"),"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,t.createElement(a.code,null,"anchor: Vector")),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"\n",t.createElement(a.p,null,"Anchor to apply to all drawings in this component if set, if null the drawing's anchor is respected by default (.5, .5) which centers the drawing."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 741px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/7590b5c201ceddfacd6f5cb0de82dcac/13e20/anchor.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 110.63829787234043%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAADZUlEQVR42pWUS28bVRTH/YnYs0FiDxISO1gixIZPQLeVUBo1KFAJkKhSWFBESSTUQh0ndh52rOBHYifx2/U4jh8zSfyMPTN3Xj8013Fpq4SkRzozd+ae87/n8T83wGviyadwBCWtQEbZJ6Pskaom2a+lKWlFdGtyaelxlQSu+mm7Nu1hk0I7T1WtUFNfoJzWaPTrCNvk/+RKQMe1aQ1OOJ+cym//fXa57us9TvoNaXMj4CyNoTlgIx/hqHnIxBgTK0bZrcbRTZ3M8R7R8jYDoz/18bybI3Q9l86gzYU58j1kVGqvw8ryCr8tP6bTb79dDX3j84szDEuXfRKeQSQW5sF3D0juJ+mOz28HOAt/oPfZKmyRqe5yplbYPIzydOdPqrUKRbXAVmFT2tw6ZdM2UHonHOXXWL77LqG1JapaTe5pww4VtSSpdRV9rk7ZdfF7mP1jicefv0Pop08ZDrQpAxxbNupWtJmd5jcj2dhj6/nPNHNp/qnEZXeFZVJWSySVxLRhN6U8A/SnYb+xR2vcwXY9CmqRXPsIy7Y57ipkm5lrJyZwXeiu52AKQW8k5NrXwdhB2C6uZ99+UvwUZmnowmFsOC/3/LVuOreb5VkpmtqQRLFLvmWTa1pUVYHjelLTRZXDhkm+aXHYEJyP7Nd8JaDruvjqOK48t9rWCR30SCpFosVjogUd2/EBXTaPLtgq1EkoRULZc2qqIX1s578sArquI4TANAWeKzisT/h1M0+uHWenkuVpajAFdDyepYbESvvkWnGWdxUOaiNwLRmMpml0u10CpulfR67kly+R2B5f31vg0bMNFp83+DHYlo3wQb8Pdvj2b4VHGyXu/q6QKE2nJZPJMjc3RyqVmgFOJZVK883CfYLBIJFUi8jBkGR5KOvneh7J8ohIdsBa+oztwgRt4JBOJrg3P084HGY0GhEwTEGvdUQ8tsn8wiKh0Cr+IX4Z3iTtbIqEZXPROSAeDTN/f5FIOIxt29InYFoe20uf8fCr91gN/sUsYl03cDyfj69yE1kvw4a1Hz7h4Z33WQ+tYlnW9A4wTQKnL8qsfPkxawsfUtj55ZIGLq+W4s3bSC3nefLFB6wvfkQl8eQl74QPqNVK1GPrmIYu1Y/AcRwMw7gWsFPOUd8JIywLw5hIe1/9CP8FjcF36cwStzcAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Behavior per anchor setting"\n        title=""\n        src="/static/7590b5c201ceddfacd6f5cb0de82dcac/13e20/anchor.png"\n        srcset="/static/7590b5c201ceddfacd6f5cb0de82dcac/4dcb9/anchor.png 188w,\n/static/7590b5c201ceddfacd6f5cb0de82dcac/5ff7e/anchor.png 375w,\n/static/7590b5c201ceddfacd6f5cb0de82dcac/13e20/anchor.png 741w"\n        sizes="(max-width: 741px) 100vw, 741px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n"),"\n"),"\n"),"\n"),"\n",t.createElement(a.h3,{id:"accessing-the-graphics-context",style:{position:"relative"}},t.createElement(a.a,{href:"#accessing-the-graphics-context","aria-label":"accessing the graphics context permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Accessing the Graphics context"),"\n",t.createElement(a.p,null,"The graphics component allows access to the underlying graphics context."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Actor</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function-variable function">onPostDraw</span> <span class="token operator">=</span> <span class="token punctuation">(</span>ctx<span class="token operator">:</span> ex<span class="token punctuation">.</span>ExcaliburGraphicsContext<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  ctx<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">99</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">drawLine</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span><span class="token function">vec</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">,</span> ex<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>Green<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ctx<span class="token punctuation">.</span><span class="token function">restore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"layers",style:{position:"relative"}},t.createElement(a.a,{href:"#layers","aria-label":"layers permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Layers"),"\n",t.createElement(a.p,null,"The layer's component adds a way for multiple ",t.createElement(a.a,{href:"#graphics"},"graphics")," to be on top or behind each other for a certain actor or entity."),"\n",t.createElement(a.p,null,"Layers can be ordered numerically, larger negative layers behind, and positive layers in front."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>layers<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'background\'</span><span class="token punctuation">,</span> order<span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>layers<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">\'foreground\'</span><span class="token punctuation">,</span> order<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>layers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'background\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>myBackground<span class="token punctuation">)</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>layers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'foreground\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>myForeground<span class="token punctuation">)</span>\n\n<span class="token comment">// no longer display the background</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>layers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'background\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"There is always a layer named ",t.createElement(a.code,null,"'default'")," at ",t.createElement(a.code,null,"order: 0")),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript">actor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>myAnimation<span class="token punctuation">)</span>\n<span class="token comment">// is equivalent to</span>\nactor<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>layers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">\'default\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>myAnimation<span class="token punctuation">)</span></code></pre></div>'}}))}var p=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,s.ah)(),n.components);return a?t.createElement(a,n,t.createElement(c,n)):c(n)},o=e(4160),l=e(2640),i=e(2030),r=e(7306),u=e(2768),m=e(871),d=e(7924),h=e(9813);const g={Link:o.rU,Note:u.Z,Example:m.Z,IFrameEmbed:d.Z,CodeSandboxEmbed:h.Z},k=n=>{let{toc:a,releases:e}=n;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"},"Documentation"),(()=>{const n={};for(let e of a)n[e.frontmatter.section]||(n[e.frontmatter.section]=[]),n[e.frontmatter.section].push(e);return Object.keys(n).map((a=>t.createElement(t.Fragment,{key:a},t.createElement("section",null,t.createElement(o.rU,{className:"item active",style:{fontSize:"1.2em"},to:n[a][0].frontmatter.path},a),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},n[a].map((n=>{let{frontmatter:a}=n;return t.createElement(o.rU,{key:a.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:a.path},a.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"},"Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"},"Edge (latest)"),e.map((n=>t.createElement("a",{key:n.tag.name,className:"item",href:"/docs/api/"+n.tag.name+"/"},n.tag.name))))},f=()=>t.createElement("div",{className:"docs-search"},t.createElement(l.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),E=n=>{let{data:a}=n;return t.createElement(t.Fragment,null,t.createElement("title",null,a.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function b(n){let{data:a,children:e}=n;const{page:c,toc:p,github:{data:{repository:{releases:o}}}}=a,{frontmatter:l}=c;return t.createElement(i.Z,null,t.createElement(r.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(f),t.createElement(k,{toc:p.edges.map((n=>n.node)),releases:o.edges.map((n=>n.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,l.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(s.Zo,{components:g},e))))))}function y(n){return t.createElement(b,n,t.createElement(p,n))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-docs-04-2-graphics-component-mdx-6cadb46e18badffe5702.js.map