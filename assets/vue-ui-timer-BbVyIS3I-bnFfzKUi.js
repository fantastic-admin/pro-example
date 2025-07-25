
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-BrZUdhZl-DqxjIyP8.js","./index-DODNO_Fi.js","./index-8otZT6Er.css"])))=>i.map(i=>d[i]);
import{r as v,cs as K,X as ae,J as D,ac as le,$ as se,e as o,f as s,L as h,h as M,Q as f,K as re,k as Q,g as _,co as oe,ah as H,x as X,z as V,A as G,j as ue,cp as ie}from"./index-DODNO_Fi.js";import{c as ne}from"./useNestedProp-DpGVxlm5-Br7U0VIE.js";import{p as ce,e as ve,B as he,z as J}from"./vue-data-ui-z3baaeZD.js";import{E as pe,M as de}from"./useResponsive-DfdjqQps-DzVAt69W.js";import{o as we}from"./useChartAccessibility-9icAAmYg-B9KCwz5-.js";import fe from"./Title-C6IPIA3g-BDBijMm0.js";import I from"./BaseIcon-CIwIBC3F-C0b5NAU8.js";import{s as ke}from"./_plugin-vue_export-helper-CHgC5LLL-lGy7RumW.js";import"./alert-DPI0rmvY.js";import"./command.vue_vue_type_script_setup_true_lang-CWspqyXQ.js";import"./index.vue_vue_type_script_setup_true_lang-th40GE7B.js";class me{constructor(j,A,R,F=!0,T=!0){this.interval=A,this.elapsed=0,this.isPaused=!1;const m=`
            let interval;
            let elapsed = 0;
            let paused = false;
            let startTime;
            let tickInterval;

            onmessage = function(e) {
                const { action, data } = e.data;

                switch(action) {
                    case 'start':
                        startTime = Date.now();
                        tickInterval = data.interval;
                        elapsed = 0;
                        paused = false;
                        interval = setInterval(() => {
                            elapsed += tickInterval;
                            postMessage({ elapsed, timestamp: Date.now() });
                        }, tickInterval);
                        break;
                    
                    case 'pause':
                        paused = true;
                        clearInterval(interval);
                        elapsed = Date.now() - startTime;
                        break;

                    case 'resume':
                        if (paused) {
                            startTime = Date.now() - elapsed;
                            interval = setInterval(() => {
                                elapsed += tickInterval;
                                postMessage({ elapsed, timestamp: Date.now() });
                            }, tickInterval);
                        }
                        paused = false;
                        break;

                    case 'stop':
                        clearInterval(interval);
                        elapsed = 0;
                        postMessage({ elapsed });
                        break;

                    case 'reset':
                        elapsed = 0;
                        clearInterval(interval);
                        postMessage({ elapsed });
                        break;

                    case 'lap':
                        postMessage({
                            elapsed,
                            timestamp: Date.now(),
                            action: 'lap'
                        });
                        break;

                    default:
                        break;
                }
            };
        `,P=new Blob([m],{type:"application/javascript"}),z=URL.createObjectURL(P),i=new Worker(z);function c(r){let p=Math.floor(r/1e3),k=Math.floor(r%1e3/10),g=Math.floor(p/3600),e=Math.floor(p%3600/60),C=p%60,d="";return T&&(d+=String(g).padStart(2,"0")+":"),d+=String(e).padStart(2,"0")+":",d+=String(C).padStart(2,"0"),F&&(d+="."+String(k).padStart(2,"0")),d}this.start=()=>{this.isPaused=!1,i.postMessage({action:"start",data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,i.postMessage({action:"pause"}))},this.resume=()=>{this.isPaused&&(i.postMessage({action:"resume"}),this.isPaused=!1)},this.stop=()=>{i.postMessage({action:"stop"}),this.isPaused=!1},this.reset=()=>{i.postMessage({action:"reset"}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(r=>{i.postMessage({action:"lap"});const p=k=>{const{elapsed:g,timestamp:e,action:C}=k.data;if(C==="lap"){const d=c(g);r({timestamp:e||0,elapsed:g,formatted:d})}};i.addEventListener("message",p,{once:!0})}),i.onmessage=r=>{const{elapsed:p,timestamp:k}=r.data;this.elapsed=p,j({timestamp:k||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},i.onerror=r=>{R&&R(r)}}}const ge=["xmlns","viewBox"],ye=["width","height"],be={key:1},xe=["id"],$e=["stop-color"],Me=["stop-color"],_e=["cx","cy","r","fill","stroke","stroke-width"],Pe=["d","stroke","stroke-width"],Ce=["r","fill","stroke","stroke-width"],Se=["r","fill","stroke","stroke-width"],Ie=["x","y"],Re=["x","y","font-size","fill","font-weight"],Te={key:0,class:"vue-ui-timer-controls"},ze=["title"],Be=["title"],De=["title"],He=["title"],je=["title"],Ae={__name:"vue-ui-timer",props:{config:{type:Object,default(){return{}}}},emits:["start","pause","reset","restart","lap"],setup(q,{expose:j,emit:A}){const R=oe(()=>ie(()=>import("./PackageVersion-BrZUdhZl-DqxjIyP8.js"),__vite__mapDeps([0,1,2]),import.meta.url)),{vue_ui_timer:F}=ce(),T=q,m=A,P=v(null),z=v(null),i=v(null),c=K(null),r=K(null),p=v(ve()),k=v(0);ae(()=>{g()});function g(){if(e.value.responsive){const a=pe(()=>{const{width:u,height:n}=de({chart:P.value,title:e.value.style.title.text?z.value:null,legend:i.value});requestAnimationFrame(()=>{t.value.width=u,t.value.height=n,e.value.responsiveProportionalSizing?(t.value.tracker.core=J({relator:Math.min(u,n),adjuster:e.value.style.width,source:6*e.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),t.value.tracker.aura=J({relator:Math.min(u,n),adjuster:e.value.style.width,source:12*e.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),t.value.label=J({relator:Math.min(u,n),adjuster:e.value.style.width,source:e.value.stopwatch.label.fontSize,threshold:10,fallback:10})):t.value.label=e.value.stopwatch.label.fontSize})});c.value&&(r.value&&c.value.unobserve(r.value),c.value.disconnect()),c.value=new ResizeObserver(a),r.value=P.value.parentNode,c.value.observe(r.value)}}le(()=>{c.value&&(r.value&&c.value.unobserve(r.value),c.value.disconnect())});const e=D({get:()=>d(),set:a=>a}),{svgRef:C}=we({config:e.value.style.title});function d(){return ne({userConfig:T.config,defaultConfig:F})}se(()=>T.config,a=>{e.value=d(),g(),k.value+=1},{deep:!0});const Z=D(()=>{if(e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00:00.00";if(e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00:00";if(!e.value.stopwatch.showHours&&e.value.stopwatch.showHundredth)return"00:00.00";if(!e.value.stopwatch.showHours&&!e.value.stopwatch.showHundredth)return"00:00"}),t=v({height:e.value.style.height,width:e.value.style.width,tracker:{core:6*e.value.stopwatch.tracker.radiusRatio,aura:12*e.value.stopwatch.tracker.aura.radiusRatio},label:e.value.stopwatch.label.fontSize}),y=v(0),S=new me(a=>Y(a),10,"",e.value.stopwatch.showHundredth,e.value.stopwatch.showHours),L=v(!0),l=v(!1),w=v(!1);function O(){m("start"),L.value&&S.start(),L.value=!1,l.value=!0}function W(){l.value&&(m("reset"),S.stop(),x.value=[],L.value=!0,l.value=!1)}function E(){w.value=!w.value,m("pause",y.value),S.pause()}function N(){l.value&&(w.value=!1,m("restart"),x.value=[],S.restart())}const x=v([]);async function B(){if(!l.value||w.value)return;const a=await S.lap();a&&(x.value.push(a),m("lap",x.value))}function Y({timestamp:a,elapsed:u,formatted:n}){y.value={timestamp:a,elapsed:u,formatted:n}}const b=D(()=>Math.min(t.value.width,t.value.height)/2.5*e.value.stopwatch.track.radiusRatio);function ee(a,u){const n=360/(u*1e3);return a*n%360}function te(a){let u=a*(Math.PI/180),n=t.value.width/2+b.value*Math.cos(u),U=t.value.height/2+b.value*Math.sin(u);return{cx:n,cy:U}}const $=D(()=>{const a=ee(y.value.elapsed,e.value.stopwatch.cycleSeconds),{cx:u,cy:n}=te(a-90),U=a>180?1:0;return{cx:u||t.value.width/2,cy:n||t.value.height/2-b.value,largeArcFlag:U,sweepFlag:1}});return j({start:O,pause:E,reset:W,restart:N,lap:B}),(a,u)=>(s(),o("div",{ref_key:"timerChart",ref:P,class:"vue-ui-timer",style:f({fontFamily:e.value.style.fontFamily,width:"100%",height:e.value.responsive?"100%":"auto",textAlign:"center"})},[e.value.style.title.text?(s(),o("div",{key:0,ref_key:"chartTitle",ref:z,style:f({width:"100%",background:e.value.style.backgroundColor})},[(s(),re(fe,{key:`title_${k.value}`,config:{title:{cy:"title",...e.value.style.title},subtitle:{cy:"subtitle",...e.value.style.title.subtitle}}},null,8,["config"]))],4)):h("",!0),(s(),o("svg",{ref_key:"svgRef",ref:C,xmlns:Q(he),viewBox:`0 0 ${t.value.width<=0?10:t.value.width} ${t.value.height<=0?10:t.value.height}`,style:f({maxWidth:"100%",overflow:"visible",background:e.value.style.backgroundColor})},[_(Q(R)),a.$slots["chart-background"]?(s(),o("foreignObject",{key:0,x:0,y:0,width:t.value.width<=0?10:t.value.width,height:t.value.height<=0?10:t.value.height,style:{pointerEvents:"none"}},[H(a.$slots,"chart-background",{},void 0,!0)],8,ye)):h("",!0),e.value.stopwatch.tracker.gradient.show?(s(),o("defs",be,[M("radialGradient",{id:`tracker_gradient_${p.value}`,cx:"50%",cy:"50%",r:"50%",fx:"50%",fy:"50%"},[M("stop",{offset:"0%","stop-color":e.value.stopwatch.tracker.gradient.color},null,8,$e),M("stop",{offset:"100%","stop-color":e.value.stopwatch.tracker.fill},null,8,Me)],8,xe)])):h("",!0),M("circle",{cx:t.value.width/2,cy:t.value.height/2,r:b.value,fill:e.value.stopwatch.track.fill,stroke:e.value.stopwatch.track.stroke,"stroke-width":e.value.stopwatch.track.strokeWidth},null,8,_e),e.value.stopwatch.cycleTrack.show?(s(),o("path",{key:2,d:`M ${t.value.width/2},${t.value.height/2-b.value} A ${b.value},${b.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:e.value.stopwatch.cycleTrack.stroke,"stroke-width":e.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":"round",fill:"none"},null,8,Pe)):h("",!0),M("circle",X($.value,{r:t.value.tracker.core,fill:e.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${p.value})`:e.value.stopwatch.tracker.fill,stroke:e.value.stopwatch.tracker.stroke,"stroke-width":e.value.stopwatch.tracker.strokeWidth}),null,16,Ce),e.value.stopwatch.tracker.aura.show?(s(),o("circle",X({key:3},$.value,{r:t.value.tracker.aura,fill:`${e.value.stopwatch.tracker.aura.fill}20`,stroke:e.value.stopwatch.tracker.aura.stroke,"stroke-width":e.value.stopwatch.tracker.aura.strokeWidth}),null,16,Se)):h("",!0),a.$slots.time?(s(),o("foreignObject",{key:4,x:t.value.width/2,y:t.value.height/2,height:"0.1",width:"0.1",style:{overflow:"visible"}},[H(a.$slots,"time",V(G({...y.value})),void 0,!0)],8,Ie)):(s(),o("text",{key:5,x:t.value.width/2,y:t.value.height/2+t.value.label/4,"font-size":t.value.label,"text-anchor":"middle",fill:e.value.stopwatch.label.color,"font-weight":e.value.stopwatch.label.bold?"bold":"normal",style:{"font-variant-numeric":"tabular-nums !important"}},ue(y.value.formatted||Z.value),9,Re))],12,ge)),M("div",{ref_key:"chartLegend",ref:i,style:f({width:"100%",backgroundColor:e.value.stopwatch.legend.backgroundColor})},[a.$slots.controls?h("",!0):(s(),o("div",Te,[e.value.stopwatch.legend.buttons.start?(s(),o("button",{key:0,title:e.value.stopwatch.legend.buttonTitles.start,onClick:O,class:"vue-ui-timer-button",style:f({opacity:l.value?.2:1,cursor:l.value?"default":"pointer"})},[_(I,{name:"play",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,ze)):h("",!0),e.value.stopwatch.legend.buttons.pause?(s(),o("button",{key:1,title:w.value?e.value.stopwatch.legend.buttonTitles.resume:e.value.stopwatch.legend.buttonTitles.pause,onClick:E,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(I,{name:"pause",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,Be)):h("",!0),e.value.stopwatch.legend.buttons.reset?(s(),o("button",{key:2,title:e.value.stopwatch.legend.buttonTitles.reset,onClick:W,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(I,{name:"stop",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,De)):h("",!0),e.value.stopwatch.legend.buttons.restart?(s(),o("button",{key:3,title:e.value.stopwatch.legend.buttonTitles.restart,onClick:N,class:"vue-ui-timer-button",style:f({opacity:l.value?1:.2,cursor:l.value?"pointer":"default"})},[_(I,{name:"restart",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,He)):h("",!0),e.value.stopwatch.legend.buttons.lap?(s(),o("button",{key:4,title:e.value.stopwatch.legend.buttonTitles.lap,onClick:B,class:"vue-ui-timer-button",style:f({opacity:l.value&&!w.value?1:.2,cursor:l.value&&!w.value?"pointer":"default"})},[_(I,{name:"lap",stroke:e.value.stopwatch.legend.buttons.iconColor},null,8,["stroke"])],12,je)):h("",!0)])),H(a.$slots,"controls",V(G({start:O,pause:E,reset:W,restart:N,lap:B,laps:x.value,isRunning:l.value,isPaused:w.value,...y.value})),void 0,!0),H(a.$slots,"laps",V(G({laps:x.value,lap:B,isRunning:l.value,isPaused:w.value,...y.value})),void 0,!0)],4)],4))}},Ke=ke(Ae,[["__scopeId","data-v-5e3deab2"]]);export{Ke as default};
