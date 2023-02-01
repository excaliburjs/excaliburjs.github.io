"use strict";(self.webpackChunkexcaliburjs_github_io=self.webpackChunkexcaliburjs_github_io||[]).push([[6564],{1932:function(e,n,a){a.r(n),a.d(n,{Head:function(){return f},default:function(){return A}});var s=a(1151),t=a(7294);function o(e){const n=Object.assign({p:"p",a:"a",h2:"h2",span:"span",ul:"ul",li:"li",h3:"h3",ol:"ol",code:"code"},(0,s.ah)(),e.components),{Note:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Note",!0),t.createElement(t.Fragment,null,t.createElement(n.p,null,t.createElement(n.a,{href:"/docs/api/edge/interfaces/PostProcessor.html",title:"View 'PostProcessor' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"PostProcessors")," are a way to quickly modify every pixel on the screen with WebGL fragment shaders. This can be useful to give your game a certain aesthetic or effect."),"\n",t.createElement(n.h2,{id:"color-blindness",style:{position:"relative"}},t.createElement(n.a,{href:"#color-blindness","aria-label":"color blindness permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Color Blindness"),"\n",t.createElement(n.p,null,"Choosing colors that are friendly to players with color blindness is an important consideration when making a game."),"\n",t.createElement(n.p,null,"There is a significant portion of the population that has some form of color blindness,\nand choosing bad colors can make your game unplayable."),"\n",t.createElement(n.p,null,"The three most common forms of ",t.createElement(n.a,{href:"https://en.wikipedia.org/wiki/Color_blindness"},"color blindness")," can be simulated or corrected. By default the ",t.createElement(n.a,{href:"/docs/api/edge/classes/ColorBlindnessPostProcessor.html",title:"View 'ColorBlindnessPostProcessor' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ColorBlindnessPostProcessor")," corrects. The algorithm is originally sourced from http://www.daltonize.org/."),"\n",t.createElement(n.ul,null,"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"/docs/api/edge/enums/ColorBlindnessMode.html#Protanope",title:"View 'ColorBlindnessMode.Protanope' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Protanope")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"/docs/api/edge/enums/ColorBlindnessMode.html#Deuteranope",title:"View 'ColorBlindnessMode.Deuteranope' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Deuteranope")),"\n",t.createElement(n.li,null,t.createElement(n.a,{href:"/docs/api/edge/enums/ColorBlindnessMode.html#Tritanope",title:"View 'ColorBlindnessMode.Tritanope' in Excalibur.js Edge API docs",className:"tsdoc-link tsdoc-link--aliased",target:"_blank"},"Tritanope")),"\n"),"\n",t.createElement(a,null,t.createElement(n.p,null,"The color blindness correction is only an attempt to bump the colors into differentiable range. It is still best when designing to pick color blind friendly colors and to not use color to communicate information in your games without something else like a glyph. Remember, the best practice is to design with color blindness in mind.")),"\n",t.createElement(n.h3,{id:"original",style:{position:"relative"}},t.createElement(n.a,{href:"#original","aria-label":"original permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Original"),"\n",t.createElement(n.p,null,"Here is the original game with no postprocessing applied."),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/0592f166a2e34963788ad607b07c9eb6/e3189/original.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAADN0lEQVR42m2S728TdRzH7z/wD5gaQtmcUR9NkWiiT9SQ6Jxug0E365Qn0l6v117Htm4LxvAEZjAafw59gJqAbDMsgwZdy8p+IND1913v+rtdu4GGoH+Aycv0uo4R9+CVz32/77v359cJn33s4PTUBXyXrjIwH+DYfJAP5n7HNn2FwVk/XUPjvHVcptOh0Onw0C2P0C0P8658gh5plFfcA3T4DtIx9DpvnHIjnPl5nk9n/PjuaEhaGVcihyueQ4pnkWNZxNU4juUojpUG9bO4GsOxEsH9h8Gbc2fp+LGb/T/10uX/GuFk8BbjyxG8iRzudAWPVsZTj+kKUv4unkwNxaiiGM34KF5jE0W/i6Jv4tU3EORMDbdRNY3casnEsxV/+GKKExED2dSK2/puNL8RRLXER6kirvrllqmcXsetlZlYWkNJFc1nz5bepGFS/p+xcDFqsFa5x+l0GWf9Ml1hctaPkiog6VWcEQPnmo6cyCPe0cz51tk23ZGkjpBU86AXOFfY4HiqiKKVGYplTVFO5JBiWVyxDFLUwBXPIkUzZgJXIo8znDbPcrKAGNYaFcZKm2AU+S6Zw66VUepVao3lSJEMg+Eg7yUC2BIBjkWWEMPpRnva7rMUJjPrfG9UGK9X0pzVzkFn7yH9FsLuD+DJ1ZDiBmI0jazmt9/dieBMlbCbi2iYmQsws5dxpwqMrv+J9/xZXOe+YrzwL2PJ+4ypfzOmPth9KfXWlK3KHgpN0xKv+R/wwpcl9k/PcSAzzIHUBC+qPl5WP8Gp51D0DTz6Oh69iluvIrhTJR5SbER1q/VUAcu3//DYKbBMnsFyWWDvtMATMwLPXBK4fvIgiyPvEPK9TWC4k+BoF4K3UOMR8rXGL6FVsOf+QizeR4wZhOwvsXC4lZX3n2PZ9ixB69OEjzxJrK+Fpd7HCfW0sNjTgnBo6CJNepUL9E3MIEXyeJNZpn49zzdXfuHza5dR7c+jWfdws28Pif69FAdbuTnQRsjaxm3bU9y2tRPob0dwXE+yTTCJuJhE1qqM3IrgF19lob+dVauFq337uGZtZeHoPmYPWZg5bGFloA3/kTZuHLUQt7WS+7Cd/wBc0GoePjN/CwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Original Game with no postprocessing"\n        title=""\n        src="/static/0592f166a2e34963788ad607b07c9eb6/1d69c/original.png"\n        srcset="/static/0592f166a2e34963788ad607b07c9eb6/4dcb9/original.png 188w,\n/static/0592f166a2e34963788ad607b07c9eb6/5ff7e/original.png 375w,\n/static/0592f166a2e34963788ad607b07c9eb6/1d69c/original.png 750w,\n/static/0592f166a2e34963788ad607b07c9eb6/e3189/original.png 1035w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(n.h3,{id:"simulation",style:{position:"relative"}},t.createElement(n.a,{href:"#simulation","aria-label":"simulation permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Simulation"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// simulate deuteranope</span>\n<span class="token keyword">const</span> colorblind <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ColorBlindnessPostProcessor</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>ColorBlindnessMode<span class="token punctuation">.</span>Deuteranope<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngame<span class="token punctuation">.</span>graphicsContext<span class="token punctuation">.</span><span class="token function">addPostProcessor</span><span class="token punctuation">(</span>colorblind<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>'}}),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/446253472250a86aeb8f19f6bb6e8aa0/0d1a4/simulate.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAAC/UlEQVR42nWTy08bVxSH58+oGlWhhERtkSpFlaJssqjUVGrVbrJrV10hIagDjGUDGgyqLYvihCyiSInzwjhS7JB4rj0ez8OYkJhu2hVSC8TFMLYJFCrUdN1IXzQTM9C0WXw6o3vP43fOmSv9mAiSTD4ilapw584SqdQSt28/IZmskLxZYUiO09c/xveBcfoD4wzKMQaHogwM/YA8EOeC/B2fKl9ybvg8fbEJpJvJPOm0gaatUSo1KBbraNq6T05dIZf7zUdVV1HVFR6pv2LkHYKz03x16xu+vvUt8ftppIcPf0GIZUqlTSyrhWm2POti2zvY9nNse8vHsraw21j2FhV7lwVrz2Pe2kGy7W0vyDSbGEbDwzQddL3GtWvX0fUNDOPw7r84R2ggvW7TaSdqtu0+hvE3QtQ9x8PzN+z/FJKq1Rrr67s8ftzwZmiaW+j6RXT9LKVSCCGaFArPvNmq6ppnXY4mP4q0vFzHcTZZWmqg667DNsViN5omIcRpCoVdNG2VQqGGpv1OPl8jnz8osOotrljc8Ip5Cmu1bRzHYWGhTqnUbCvsQde7UdVe5uZ+QggLIcrkck8Q4hmm2XjrTKWnT1tUq267G23ZrsrnnlI3ebm8x8xMhdnZRebnd9A0V6GrZtNfxL8Sum2+bvVgwM22Atd5g2r1T65cmeTq1bssLr7Esvax7RcelrXnx/gJD1S9Wck90/VNpqf/QpYdJicFmUyAdDrEvXsh0ukAc3Mz2PYfWFbT/4elt83CdTCMfUZG/qGnBwKBMWIxiWj0kKmpd7h8+QsSic+4dOk8icTnSOWyO6ejtNqLqZHNpv1lRKOfoCgfMjr6AaHQKWT5FJHI+4yNHWN4uINw+BiK8i5SX18Gl/7+LL299wkGcxSLLYT4mfHxMyjKR8Ri3ShKB4ryHtFoBxMTJwiHuwgGO5HlTiKR44RCnQwOdiJlsysckMms8ODBmv+kNK2O+9Zv3EihKB8zMHDcCxodPUE83kUkcpJw+KSXbGSky/t+Bc9PhlaBRHqQAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Deuteranope Color Blindness Simulated"\n        title=""\n        src="/static/446253472250a86aeb8f19f6bb6e8aa0/1d69c/simulate.png"\n        srcset="/static/446253472250a86aeb8f19f6bb6e8aa0/4dcb9/simulate.png 188w,\n/static/446253472250a86aeb8f19f6bb6e8aa0/5ff7e/simulate.png 375w,\n/static/446253472250a86aeb8f19f6bb6e8aa0/1d69c/simulate.png 750w,\n/static/446253472250a86aeb8f19f6bb6e8aa0/0d1a4/simulate.png 1036w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(n.h3,{id:"correction",style:{position:"relative"}},t.createElement(n.a,{href:"#correction","aria-label":"correction permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Correction"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">Engine</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// correct deuteranope</span>\n<span class="token keyword">const</span> colorblind <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ColorBlindnessPostProcessor</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>ColorBlindnessMode<span class="token punctuation">.</span>Deuteranope<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngame<span class="token punctuation">.</span>graphicsContext<span class="token punctuation">.</span><span class="token function">addPostProcessor</span><span class="token punctuation">(</span>colorblind<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>'}}),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/7fb5ac763f59e28e28ad330bd2617007/0d1a4/correct.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 74.46808510638299%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAADCElEQVR42oWSyW8bZRiH54YUceVfqHroqVRc4FCJC+qhYmtip1moKYlie8az2FkcqiJQoxaIaJsNwlKWjJfxjI2dzY7tGS+JnVAKgoKQWgkoN4TEGQmkB83YSWlL4fDo/Ubfp+f9zft9wtzsOWavJZhOf8awsciIuczZ9BJn9DkC+gK+qSh9SoQ+TfYYmIxxeiLqMRib4OmJXo6dP87R+FOcmDmL8NYHCd7WdSa3MkhOBrmaJuJSSSNX0kjFBNKmfkCklPCQijralsXJdJQnPj7Bk5+c5HkrjnCukCa+aaA5JmrDQq1bndrIojSzqP9DrFkg1lgj1lgl2swjKNtZ1O2cJ1JqJmrNRKmbRB2Dj+auEa1mvG937+FkDtZCsJpitKwTcTIHUqVuIdoF4iUDtdZN/R8o3RCeMH/9C7796WcutjYRHaN7wOLq1xeQalnEUgJxK4FcNQgXV7rzTd0V3Ydw6/Yd+PUvFr50CDlJRHudK1/NAAKX2m8yVsoiVxJIW0mkcsqrbhO3gVjUiZRTyLbbTO8If7jzC/z2J/OtCuFaR5i7fYbf/3iM5M2X8a+/x1B1lsHKOwRK80il5D0zvT+pcKldZL5dZcrJIdfdA+5GlrC96v26spNHTC0STC2itQres3JT7ovkmnEPQtg2CNqprqwzP9VbZ1CdDJM3VtEWxgnPx1Hbayju5e2nq1nEG5tMN4rEuwha3UL7x23drSayY3L8/Q2OvLrCM+8mGN/LIzdyKM0cajNPqJ7k2Jqfo6u9PL7W5yE88Ay87p2Uim1y6LUNHolUeUVb5MZMkMYFFft1keYbCpWLQY5cfpTDV3s4fKWHQ5d7HhQq+9K6RXD7c8K7BaTyCs2pAPboC+zJA+xIfuyxU+xKPq6rw9Sk01RC/ZRD/ockrFvEqmk+NJZYyi4zZy3z/fkgN6PDtKR+vom+xI/To+woAziSnz1tiF1tiLLo+3eh3MwR3/iU4mSAiuijFelnfexFNkKnKIV7MUeeIzP6LG1tkJLoYzvSz3fjAW5NjfA3hx09BXXzNcoAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Deuteranope Color Blindness Correct"\n        title=""\n        src="/static/7fb5ac763f59e28e28ad330bd2617007/1d69c/correct.png"\n        srcset="/static/7fb5ac763f59e28e28ad330bd2617007/4dcb9/correct.png 188w,\n/static/7fb5ac763f59e28e28ad330bd2617007/5ff7e/correct.png 375w,\n/static/7fb5ac763f59e28e28ad330bd2617007/1d69c/correct.png 750w,\n/static/7fb5ac763f59e28e28ad330bd2617007/0d1a4/correct.png 1036w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}),"\n",t.createElement(n.h2,{id:"custom-shader-based-post-processors",style:{position:"relative"}},t.createElement(n.a,{href:"#custom-shader-based-post-processors","aria-label":"custom shader based post processors permalink",className:"anchor before"},t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Custom Shader based Post Processors"),"\n",t.createElement(n.p,null,"Post processors can also be use to produce some interesting custom effects."),"\n",t.createElement(n.p,null,"There is a helper class ",t.createElement(n.a,{href:"/docs/api/edge/classes/ScreenShader.html",title:"View 'ScreenShader' in Excalibur.js Edge API docs",className:"tsdoc-link",target:"_blank"},"ScreenShader")," to help build shaders for post processing. The only things that come predefined are the:"),"\n",t.createElement(n.ol,null,"\n",t.createElement(n.li,null,t.createElement(n.code,null,"v_texcoord")," representing the current UV from [0, 1]"),"\n",t.createElement(n.li,null,t.createElement(n.code,null,"u_texture")," which is the texture representing the screen pixels"),"\n"),"\n",t.createElement(n.p,null,"In this example we can make the entire game gray scale:"),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="typescript"><pre class="language-typescript"><code class="language-typescript"><span class="token keyword">class</span> <span class="token class-name">GrayScalePostProcessor</span> <span class="token keyword">implements</span> <span class="token class-name">ex</span><span class="token punctuation">.</span>PostProcessor <span class="token punctuation">{</span>\n  <span class="token keyword">private</span> _shader<span class="token operator">:</span> ex<span class="token punctuation">.</span>ScreenShader\n  <span class="token function">initialize</span><span class="token punctuation">(</span>gl<span class="token operator">:</span> WebGLRenderingContext<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_shader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ex</span><span class="token punctuation">.</span><span class="token function">ScreenShader</span><span class="token punctuation">(</span>\n      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#version 300 es\n    precision mediump float;\n\n    // our texture\n    uniform sampler2D u_image;\n\n    // the texCoords passed in from the vertex shader.\n    in vec2 v_texcoord;\n\n    out vec4 fragColor;\n\n    void main() {\n      vec4 tex = texture(u_image, v_texcoord);\n      float avg = 0.2126 * tex.r + 0.7152 * tex.g + 0.0722 * tex.b;\n      fragColor = vec4(avg, avg, avg, 1.0);\n    }</span><span class="token template-punctuation string">`</span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ex<span class="token punctuation">.</span>VertexLayout <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_shader<span class="token punctuation">.</span><span class="token function">getLayout</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">getShader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ex<span class="token punctuation">.</span>Shader <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_shader<span class="token punctuation">.</span><span class="token function">getShader</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre></div>'}}),"\n",t.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 750px; "\n    >\n      <a\n    class="gatsby-resp-image-link"\n    href="/static/be4758507f64fb3055cd8ec94c5b3e37/76823/grayscale.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n    <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 75.53191489361703%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAABYlAAAWJQFJUiTwAAACXElEQVR42nWTXWsaQRSG928VWuhvaMDrNjZJm/00WWOt9QtpKAgh0LUgAa2gIYqQRhPcVRPXXTVRwYtc6EWu8kveck5cUZNcPJyZszPvnDnvrPDz1yFOTk5QLJVQKpVwenqKYrGIfD6PQqGA4EEYsrIHVdOhaDr2g2Hs69+wp4cQ3Ivgg+7Dux/v8Sb0FtKhCiGfy7NQs9mEbdu4vr5+ot3maJoWTNNcYFlNWJaFhmXCbnURK8ew8XcDvoIPR+dHEOr1OhqNBjqdDrrd7gLHcRjXXWWRn8db9xZDZ4g75w59pw/BdV0QJEIVEjSmAwzD4CqXv63TsTsLaC7Qxpubm4WQF4lWq8XCxPJhr2F3bQjj8RgPDw9cvreBhKhfFAk6kKBcu93mHK2lnHeYV5Qwm80wnU4xmUw4SYK0kXp7eXnJm3O5HOfo+mQeQWvJHDrAG7Pg/f09Hh8fMRwOF8aQCC0g0Vqtxq/g6uqKIWGv53SrZRMpsimj0ehZ/zwGgwEqlQq/TxpTRd4TewmBnZr3Yd1NylMrMpkMQ/1+ekouer3eSoUewopLa06TYDabRSwWw/HxMarVKs7OzlAulzlSW9aLEJ5Zv/YW0+k0C+q6jng8zkSjUc6lUikkEgmG5pFI5OnKr9Gf94xMCYe/Q5IkKIqCQCAAURR5Tvj9fmxtbfM34aVfq9/rsdOG8RvJZJKr0zQNAU2DLMvQVBWh0AEkSWSRoK5DVRUosgzBtJpYpmFasJotXNTqiCeSMDJ/cP7vAqIkY9P/GV93RXz8tMljWVGxvfMFu6LEbG3v4D8rGIp78+PqpAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Gray Scale PostProcessor"\n        title=""\n        src="/static/be4758507f64fb3055cd8ec94c5b3e37/1d69c/grayscale.png"\n        srcset="/static/be4758507f64fb3055cd8ec94c5b3e37/4dcb9/grayscale.png 188w,\n/static/be4758507f64fb3055cd8ec94c5b3e37/5ff7e/grayscale.png 375w,\n/static/be4758507f64fb3055cd8ec94c5b3e37/1d69c/grayscale.png 750w,\n/static/be4758507f64fb3055cd8ec94c5b3e37/76823/grayscale.png 1038w"\n        sizes="(max-width: 750px) 100vw, 750px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n  </a>\n    </span>'}}))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?t.createElement(n,e,t.createElement(o,e)):o(e)};var l=a(4854),r=a(2436),i=a(2030),p=a(7306),d=a(2768),m=a(871),u=a(7924),g=a(9813);const k={Link:l.rU,Note:d.Z,Example:m.Z,IFrameEmbed:u.Z,CodeSandboxEmbed:g.Z},h=e=>{let{toc:n,releases:a}=e;return t.createElement("div",{id:"docs-toc",className:"ui fluid vertical docs text menu"},t.createElement("a",{id:"open-toc",className:"ui button docs-open",href:"#open-toc"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-closed"},"Open")," Table of Contents"),t.createElement("a",{className:"ui button docs-close",href:"#docs-content"},t.createElement("i",{className:"hamburger icon"})," ",t.createElement("span",{className:"toc-opened"},"Close")," Table of Contents"),t.createElement("div",{id:"user-guides",className:"header item"}," Documentation"),(()=>{const e={};for(let a of n)e[a.frontmatter.section]||(e[a.frontmatter.section]=[]),e[a.frontmatter.section].push(a);return Object.keys(e).map((n=>t.createElement(t.Fragment,{key:n},t.createElement("section",null,t.createElement(l.rU,{className:"item active",style:{fontSize:"1.2em"},to:e[n][0].frontmatter.path},n),t.createElement("div",{className:"sub item"},t.createElement("div",{className:"menu"},e[n].map((e=>{let{frontmatter:n}=e;return t.createElement(l.rU,{key:n.path,activeClassName:"active",className:"item",style:{fontSize:"1em"},to:n.path},n.title)}))))))))})(),t.createElement("a",{className:"item",href:"/examples/"}," Examples"),t.createElement("div",{className:"header item"},"API Reference"),t.createElement("a",{className:"item",href:"/docs/api/edge/"}," Edge (latest)"),a.map((e=>t.createElement("a",{key:e.tag.name,className:"item",href:"/docs/api/"+e.tag.name+"/"},e.tag.name))))},b=()=>t.createElement("div",{className:"docs-search"},t.createElement(r.F,{apiKey:"f8e274d9f62a3088bb54ab80f766d740",appId:"IVI5ONIKWP",indexName:"excaliburjs"})),f=e=>{let{data:n}=e;return t.createElement(t.Fragment,null,t.createElement("title",null,n.page.frontmatter.title),t.createElement("link",{rel:"preconnect",href:"https://IVI5ONIKWP-dsn.algolia.net",crossOrigin:"true"}),t.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700"}))};function y(e){let{data:n,children:a}=e;const{page:o,toc:c,github:{data:{repository:{releases:l}}}}=n,{frontmatter:r}=o;return t.createElement(i.Z,null,t.createElement(p.Z),t.createElement("div",{className:"ui page stackable relaxed grid"},t.createElement("div",{className:"four wide column"},t.createElement(b),t.createElement(h,{toc:c.edges.map((e=>e.node)),releases:l.edges.map((e=>e.node))})),t.createElement("div",{className:"twelve wide column"},t.createElement("div",{className:"ui left aligned container"},t.createElement("h1",null,r.title),t.createElement("div",{id:"docs-content",className:"docs-content"},t.createElement(s.Zo,{components:k},a))))))}function A(e){return t.createElement(y,e,t.createElement(c,e))}}}]);
//# sourceMappingURL=component---src-templates-docs-page-template-js-content-file-path-home-runner-work-excaliburjs-github-io-excaliburjs-github-io-docs-12-postprocessors-mdx-7a683bd76f455ed90922.js.map