
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-CHNfLQ9Q-DOAA35rl.js","./vue.runtime.esm-bundler-EJiOFDNb.js"])))=>i.map(i=>d[i]);
import{C as e,Dt as t,It as n,K as r,Lt as i,M as a,Nt as o,O as s,Q as c,Rt as ee,S as te,U as ne,Y as l,b as u,k as d,ut as f,w as p,wt as m,x as h,z as g}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{t as re}from"./preload-helper-CEjJHDWr.js";import{Nt as ie,U as _,bt as ae}from"./lib-DMzrGQHK-BUE9xUg8.js";import{t as oe}from"./useConfig-B70q17MC-4zxr7vi3.js";import{t as v}from"./_plugin-vue_export-helper-CHgC5LLL-HZ05Fpxz.js";import{t as se}from"./useNestedProp-DH0BEVVS-B2dPpuVT.js";import{t as ce}from"./Title-BbKoiBk2-BScB5379.js";import{a as le,n as ue}from"./useResponsive-DfdjqQps-BeD-Lw47.js";import{t as y}from"./BaseIcon-DX0hTWa--BX8Tv8rD.js";import{t as de}from"./useChartAccessibility-cp6XQtqi-BG8IqoU_.js";var fe=class{constructor(e,t,n,r=!0,i=!0){this.interval=t,this.elapsed=0,this.isPaused=!1;let a=new Blob([`
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
        `],{type:`application/javascript`}),o=URL.createObjectURL(a),s=new Worker(o);function c(e){let t=Math.floor(e/1e3),n=Math.floor(e%1e3/10),a=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60,c=``;return i&&(c+=String(a).padStart(2,`0`)+`:`),c+=String(o).padStart(2,`0`)+`:`,c+=String(s).padStart(2,`0`),r&&(c+=`.`+String(n).padStart(2,`0`)),c}this.start=()=>{this.isPaused=!1,s.postMessage({action:`start`,data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,s.postMessage({action:`pause`}))},this.resume=()=>{this.isPaused&&(s.postMessage({action:`resume`}),this.isPaused=!1)},this.stop=()=>{s.postMessage({action:`stop`}),this.isPaused=!1},this.reset=()=>{s.postMessage({action:`reset`}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(e=>{s.postMessage({action:`lap`}),s.addEventListener(`message`,t=>{let{elapsed:n,timestamp:r,action:i}=t.data;if(i===`lap`){let t=c(n);e({timestamp:r||0,elapsed:n,formatted:t})}},{once:!0})}),s.onmessage=t=>{let{elapsed:n,timestamp:r}=t.data;this.elapsed=n,e({timestamp:r||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},s.onerror=e=>{n&&n(e)}}},pe=[`xmlns`,`viewBox`],me=[`width`,`height`],he={key:1},ge=[`id`],_e=[`stop-color`],ve=[`stop-color`],ye=[`cx`,`cy`,`r`,`fill`,`stroke`,`stroke-width`],be=[`d`,`stroke`,`stroke-width`],xe=[`r`,`fill`,`stroke`,`stroke-width`],Se=[`r`,`fill`,`stroke`,`stroke-width`],Ce=[`x`,`y`],we=[`x`,`y`,`font-size`,`fill`,`font-weight`],Te={key:0,class:`vue-ui-timer-controls`},Ee=[`title`],De=[`title`],b=[`title`],x=[`title`],S=[`title`],C=v({__name:`vue-ui-timer`,props:{config:{type:Object,default(){return{}}}},emits:[`start`,`pause`,`reset`,`restart`,`lap`],setup(v,{expose:C,emit:w}){let T=d(()=>re(()=>import(`./PackageVersion-CHNfLQ9Q-DOAA35rl.js`),__vite__mapDeps([0,1]),import.meta.url)),{vue_ui_timer:E}=oe(),D=v,O=w,k=m(null),A=m(null),j=m(null),M=t(null),N=t(null),P=m(ie()),F=m(0);r(()=>{I()});function I(){if(L.value.responsive){let e=ue(()=>{let{width:e,height:t}=le({chart:k.value,title:L.value.style.title.text?A.value:null,legend:j.value});requestAnimationFrame(()=>{B.value.width=e,B.value.height=t,L.value.responsiveProportionalSizing?(B.value.tracker.core=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:6*L.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),B.value.tracker.aura=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:12*L.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),B.value.label=_({relator:Math.min(e,t),adjuster:L.value.style.width,source:L.value.stopwatch.label.fontSize,threshold:10,fallback:10})):B.value.label=L.value.stopwatch.label.fontSize})});M.value&&(N.value&&M.value.unobserve(N.value),M.value.disconnect()),M.value=new ResizeObserver(e),N.value=k.value.parentNode,M.value.observe(N.value)}}ne(()=>{M.value&&(N.value&&M.value.unobserve(N.value),M.value.disconnect())});let L=u({get:()=>z(),set:e=>e}),R=u(()=>L.value.useCursorPointer),{svgRef:Oe}=de({config:L.value.style.title});function z(){return se({userConfig:D.config,defaultConfig:E})}f(()=>D.config,e=>{L.value=z(),I(),F.value+=1},{deep:!0});let ke=u(()=>{if(L.value.stopwatch.showHours&&L.value.stopwatch.showHundredth)return`00:00:00.00`;if(L.value.stopwatch.showHours&&!L.value.stopwatch.showHundredth)return`00:00:00`;if(!L.value.stopwatch.showHours&&L.value.stopwatch.showHundredth)return`00:00.00`;if(!L.value.stopwatch.showHours&&!L.value.stopwatch.showHundredth)return`00:00`}),B=m({height:L.value.style.height,width:L.value.style.width,tracker:{core:6*L.value.stopwatch.tracker.radiusRatio,aura:12*L.value.stopwatch.tracker.aura.radiusRatio},label:L.value.stopwatch.label.fontSize}),V=m(0),H=new fe(e=>Ae(e),10,``,L.value.stopwatch.showHundredth,L.value.stopwatch.showHours),U=m(!0),W=m(!1),G=m(!1);function K(){O(`start`),U.value&&H.start(),U.value=!1,W.value=!0}function q(){W.value&&(O(`reset`),H.stop(),X.value=[],U.value=!0,W.value=!1)}function J(){G.value=!G.value,O(`pause`,V.value),H.pause()}function Y(){W.value&&(G.value=!1,O(`restart`),X.value=[],H.restart())}let X=m([]);async function Z(){if(!W.value||G.value)return;let e=await H.lap();e&&(X.value.push(e),O(`lap`,X.value))}function Ae({timestamp:e,elapsed:t,formatted:n}){V.value={timestamp:e,elapsed:t,formatted:n}}let Q=u(()=>Math.min(B.value.width,B.value.height)/2.5*L.value.stopwatch.track.radiusRatio);function je(e,t){return e*(360/(t*1e3))%360}function Me(e){let t=Math.PI/180*e;return{cx:B.value.width/2+Q.value*Math.cos(t),cy:B.value.height/2+Q.value*Math.sin(t)}}let $=u(()=>{let e=je(V.value.elapsed,L.value.stopwatch.cycleSeconds),{cx:t,cy:n}=Me(e-90),r=+(e>180);return{cx:t||B.value.width/2,cy:n||B.value.height/2-Q.value,largeArcFlag:r,sweepFlag:1}});return C({start:K,pause:J,reset:q,restart:Y,lap:Z}),(t,r)=>(l(),p(`div`,{ref_key:`timerChart`,ref:k,class:`vue-data-ui-component vue-ui-timer`,style:i({fontFamily:L.value.style.fontFamily,width:`100%`,height:L.value.responsive?`100%`:`auto`,textAlign:`center`})},[L.value.style.title.text?(l(),p(`div`,{key:0,ref_key:`chartTitle`,ref:A,style:i({width:`100%`,background:L.value.style.backgroundColor})},[(l(),te(ce,{key:`title_${F.value}`,config:{title:{cy:`title`,...L.value.style.title},subtitle:{cy:`subtitle`,...L.value.style.title.subtitle}}},null,8,[`config`]))],4)):e(``,!0),(l(),p(`svg`,{ref_key:`svgRef`,ref:Oe,xmlns:o(ae),viewBox:`0 0 ${B.value.width<=0?10:B.value.width} ${B.value.height<=0?10:B.value.height}`,style:i({maxWidth:`100%`,overflow:`visible`,background:L.value.style.backgroundColor})},[s(o(T)),t.$slots[`chart-background`]?(l(),p(`foreignObject`,{key:0,x:0,y:0,width:B.value.width<=0?10:B.value.width,height:B.value.height<=0?10:B.value.height,style:{pointerEvents:`none`}},[c(t.$slots,`chart-background`,{},void 0,!0)],8,me)):e(``,!0),L.value.stopwatch.tracker.gradient.show?(l(),p(`defs`,he,[h(`radialGradient`,{id:`tracker_gradient_${P.value}`,cx:`50%`,cy:`50%`,r:`50%`,fx:`50%`,fy:`50%`},[h(`stop`,{offset:`0%`,"stop-color":L.value.stopwatch.tracker.gradient.color},null,8,_e),h(`stop`,{offset:`100%`,"stop-color":L.value.stopwatch.tracker.fill},null,8,ve)],8,ge)])):e(``,!0),h(`circle`,{cx:B.value.width/2,cy:B.value.height/2,r:Q.value,fill:L.value.stopwatch.track.fill,stroke:L.value.stopwatch.track.stroke,"stroke-width":L.value.stopwatch.track.strokeWidth},null,8,ye),L.value.stopwatch.cycleTrack.show?(l(),p(`path`,{key:2,d:`M ${B.value.width/2},${B.value.height/2-Q.value} A ${Q.value},${Q.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:L.value.stopwatch.cycleTrack.stroke,"stroke-width":L.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":`round`,fill:`none`},null,8,be)):e(``,!0),h(`circle`,g($.value,{r:B.value.tracker.core,fill:L.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${P.value})`:L.value.stopwatch.tracker.fill,stroke:L.value.stopwatch.tracker.stroke,"stroke-width":L.value.stopwatch.tracker.strokeWidth}),null,16,xe),L.value.stopwatch.tracker.aura.show?(l(),p(`circle`,g({key:3},$.value,{r:B.value.tracker.aura,fill:`${L.value.stopwatch.tracker.aura.fill}20`,stroke:L.value.stopwatch.tracker.aura.stroke,"stroke-width":L.value.stopwatch.tracker.aura.strokeWidth}),null,16,Se)):e(``,!0),t.$slots.time?(l(),p(`foreignObject`,{key:4,x:B.value.width/2,y:B.value.height/2,height:`0.1`,width:`0.1`,style:{overflow:`visible`}},[c(t.$slots,`time`,n(a({...V.value})),void 0,!0)],8,Ce)):(l(),p(`text`,{key:5,x:B.value.width/2,y:B.value.height/2+B.value.label/4,"font-size":B.value.label,"text-anchor":`middle`,fill:L.value.stopwatch.label.color,"font-weight":L.value.stopwatch.label.bold?`bold`:`normal`,style:{"font-variant-numeric":`tabular-nums !important`}},ee(V.value.formatted||ke.value),9,we))],12,pe)),h(`div`,{ref_key:`chartLegend`,ref:j,style:i({width:`100%`,backgroundColor:L.value.stopwatch.legend.backgroundColor})},[t.$slots.controls?e(``,!0):(l(),p(`div`,Te,[L.value.stopwatch.legend.buttons.start?(l(),p(`button`,{key:0,title:L.value.stopwatch.legend.buttonTitles.start,onClick:K,class:`vue-ui-timer-button`,style:i({opacity:W.value?.2:1,cursor:W.value?`default`:R.value?`pointer`:`default`})},[s(y,{name:`play`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Ee)):e(``,!0),L.value.stopwatch.legend.buttons.pause?(l(),p(`button`,{key:1,title:G.value?L.value.stopwatch.legend.buttonTitles.resume:L.value.stopwatch.legend.buttonTitles.pause,onClick:J,class:`vue-ui-timer-button`,style:i({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[s(y,{name:`pause`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,De)):e(``,!0),L.value.stopwatch.legend.buttons.reset?(l(),p(`button`,{key:2,title:L.value.stopwatch.legend.buttonTitles.reset,onClick:q,class:`vue-ui-timer-button`,style:i({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[s(y,{name:`stop`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,b)):e(``,!0),L.value.stopwatch.legend.buttons.restart?(l(),p(`button`,{key:3,title:L.value.stopwatch.legend.buttonTitles.restart,onClick:Y,class:`vue-ui-timer-button`,style:i({opacity:W.value?1:.2,cursor:W.value&&R.value?`pointer`:`default`})},[s(y,{name:`restart`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,x)):e(``,!0),L.value.stopwatch.legend.buttons.lap?(l(),p(`button`,{key:4,title:L.value.stopwatch.legend.buttonTitles.lap,onClick:Z,class:`vue-ui-timer-button`,style:i({opacity:W.value&&!G.value?1:.2,cursor:W.value&&!G.value&&R.value?`pointer`:`default`})},[s(y,{name:`lap`,stroke:L.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,S)):e(``,!0)])),c(t.$slots,`controls`,n(a({start:K,pause:J,reset:q,restart:Y,lap:Z,laps:X.value,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0),c(t.$slots,`laps`,n(a({laps:X.value,lap:Z,isRunning:W.value,isPaused:G.value,...V.value})),void 0,!0)],4)],4))}},[[`__scopeId`,`data-v-595aa4b2`]]);export{C as default};