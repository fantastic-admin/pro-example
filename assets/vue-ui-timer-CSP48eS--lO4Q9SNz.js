
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./PackageVersion-Dx81ZIAL-CCwUDIWO.js","./vue.runtime.esm-bundler-BVTUj4HC.js","./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js"])))=>i.map(i=>d[i]);
import{C as e,Ct as t,D as n,Et as r,Ft as i,It as a,Lt as o,Mt as s,O as c,R as l,S as u,V as ee,W as te,X as d,b as f,j as p,q as m,st as ne,x as re,y as h}from"./vue.runtime.esm-bundler-BVTUj4HC.js";import{t as ie}from"./preload-helper-DYl5dUZ5.js";import{t as g}from"./rolldown-runtime-Dy4uBu1J-DK3Fl9T5.js";import{H as _,b as ae,j as v}from"./lib-CXicicWN-DgTMSYNU.js";import{t as y}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";import{n as b}from"./BaseIcon-DEtwcvEH-DVm7RIaL.js";import{n as oe,t as se}from"./useConfig-Bf_EBbe3-ElriT-rU.js";import{n as ce}from"./Title-CVYf1f8m-9dUtV6k6.js";import{n as le,t as ue}from"./useResponsive-BfnK0KxU-DBo-jDzL.js";import{t as de}from"./useChartAccessibility-DYqac8yF-B5qGMV1S.js";var fe=class{constructor(e,t,n,r=!0,i=!0){this.interval=t,this.elapsed=0,this.isPaused=!1;let a=new Blob([`
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
        `],{type:`application/javascript`}),o=URL.createObjectURL(a),s=new Worker(o);function c(e){let t=Math.floor(e/1e3),n=Math.floor(e%1e3/10),a=Math.floor(t/3600),o=Math.floor(t%3600/60),s=t%60,c=``;return i&&(c+=String(a).padStart(2,`0`)+`:`),c+=String(o).padStart(2,`0`)+`:`,c+=String(s).padStart(2,`0`),r&&(c+=`.`+String(n).padStart(2,`0`)),c}this.start=()=>{this.isPaused=!1,s.postMessage({action:`start`,data:{interval:this.interval}})},this.pause=()=>{this.isPaused?this.resume():(this.isPaused=!0,s.postMessage({action:`pause`}))},this.resume=()=>{this.isPaused&&(this.isPaused=(s.postMessage({action:`resume`}),!1))},this.stop=()=>{s.postMessage({action:`stop`}),this.isPaused=!1},this.reset=()=>{s.postMessage({action:`reset`}),this.elapsed=0,this.isPaused=!1},this.restart=()=>{this.stop(),this.start()},this.lap=()=>new Promise(e=>{s.postMessage({action:`lap`}),s.addEventListener(`message`,t=>{let{elapsed:n,timestamp:r,action:i}=t.data;if(i===`lap`){let t=c(n);e({timestamp:r||0,elapsed:n,formatted:t})}},{once:!0})}),s.onmessage=t=>{let{elapsed:n,timestamp:r}=t.data;this.elapsed=n,e({timestamp:r||0,elapsed:this.elapsed,formatted:c(this.elapsed)})},s.onerror=e=>{n&&n(e)}}},x=g({default:()=>T}),pe=[`xmlns`,`viewBox`],me=[`width`,`height`],he={key:1},ge=[`id`],_e=[`stop-color`],ve=[`stop-color`],ye=[`cx`,`cy`,`r`,`fill`,`stroke`,`stroke-width`],be=[`d`,`stroke`,`stroke-width`],xe=[`r`,`fill`,`stroke`,`stroke-width`],Se=[`r`,`fill`,`stroke`,`stroke-width`],Ce=[`x`,`y`],we={key:5},Te=[`x`,`y`,`font-size`,`fill`,`font-weight`],Ee={key:0,class:`vue-ui-timer-controls`},De=[`title`],Oe=[`title`],S=[`title`],C=[`title`],w=[`title`],T=y({__name:`vue-ui-timer`,props:{config:{type:Object,default(){return{}}}},emits:[`start`,`pause`,`reset`,`restart`,`lap`],setup(g,{expose:y,emit:x}){let T=c(()=>ie(()=>import(`./PackageVersion-Dx81ZIAL-CCwUDIWO.js`).then(e=>e.t),__vite__mapDeps([0,1,2]),import.meta.url)),{vue_ui_timer:ke}=se(),E=g,D=x,O=t(null),k=t(null),A=t(null),j=r(null),M=r(null),N=t(v()),P=t(0);te(()=>{F()});function F(){if(I.value.responsive){let e=le(()=>{let{width:e,height:t}=ue({chart:O.value,title:I.value.style.title.text?k.value:null,legend:A.value});requestAnimationFrame(()=>{z.value.width=e,z.value.height=t,I.value.responsiveProportionalSizing?(z.value.tracker.core=_({relator:Math.min(e,t),adjuster:I.value.style.width,source:6*I.value.stopwatch.tracker.radiusRatio,threshold:1,fallback:1}),z.value.tracker.aura=_({relator:Math.min(e,t),adjuster:I.value.style.width,source:12*I.value.stopwatch.tracker.aura.radiusRatio,threshold:1,fallback:1}),z.value.label=_({relator:Math.min(e,t),adjuster:I.value.style.width,source:I.value.stopwatch.label.fontSize,threshold:10,fallback:10})):z.value.label=I.value.stopwatch.label.fontSize})});j.value&&(M.value&&j.value.unobserve(M.value),j.value.disconnect()),j.value=new ResizeObserver(e),M.value=O.value.parentNode,j.value.observe(M.value)}}ee(()=>{j.value&&(M.value&&j.value.unobserve(M.value),j.value.disconnect())});let I=h({get:()=>R(),set:e=>e}),L=h(()=>I.value.useCursorPointer),{svgRef:Ae}=de({config:I.value.style.title});function R(){return oe({userConfig:E.config,defaultConfig:ke})}ne(()=>E.config,e=>{I.value=R(),F(),P.value+=1},{deep:!0});let je=h(()=>{if(I.value.stopwatch.showHours&&I.value.stopwatch.showHundredth)return`00:00:00.00`;if(I.value.stopwatch.showHours&&!I.value.stopwatch.showHundredth)return`00:00:00`;if(!I.value.stopwatch.showHours&&I.value.stopwatch.showHundredth)return`00:00.00`;if(!I.value.stopwatch.showHours&&!I.value.stopwatch.showHundredth)return`00:00`}),z=t({height:I.value.style.height,width:I.value.style.width,tracker:{core:6*I.value.stopwatch.tracker.radiusRatio,aura:12*I.value.stopwatch.tracker.aura.radiusRatio},label:I.value.stopwatch.label.fontSize}),B=t(0),V=new fe(e=>Me(e),10,``,I.value.stopwatch.showHundredth,I.value.stopwatch.showHours),H=t(!0),U=t(!1),W=t(!1);function G(){D(`start`),H.value&&V.start(),H.value=!1,U.value=!0}function K(){U.value&&(U.value=(D(`reset`),V.stop(),Y.value=[],H.value=!0,!1))}function q(){W.value=!W.value,D(`pause`,B.value),V.pause()}function J(){U.value&&(W.value=!1,D(`restart`),Y.value=[],V.restart())}let Y=t([]);async function X(){if(!U.value||W.value)return;let e=await V.lap();e&&(Y.value.push(e),D(`lap`,Y.value))}function Me({timestamp:e,elapsed:t,formatted:n}){B.value={timestamp:e,elapsed:t,formatted:n}}let Z=h(()=>Math.min(z.value.width,z.value.height)/2.5*I.value.stopwatch.track.radiusRatio);function Ne(e,t){return e*(360/(t*1e3))%360}function Q(e){let t=Math.PI/180*e;return{cx:z.value.width/2+Z.value*Math.cos(t),cy:z.value.height/2+Z.value*Math.sin(t)}}let $=h(()=>{let e=Ne(B.value.elapsed,I.value.stopwatch.cycleSeconds),{cx:t,cy:n}=Q(e-90),r=+(e>180);return{cx:t||z.value.width/2,cy:n||z.value.height/2-Z.value,largeArcFlag:r,sweepFlag:1}});return y({start:G,pause:q,reset:K,restart:J,lap:X}),(t,r)=>(m(),e(`div`,{ref_key:`timerChart`,ref:O,class:`vue-data-ui-component vue-ui-timer`,style:a({fontFamily:I.value.style.fontFamily,width:`100%`,height:I.value.responsive?`100%`:`auto`,textAlign:`center`})},[I.value.style.title.text?(m(),e(`div`,{key:0,ref_key:`chartTitle`,ref:k,style:a({width:`100%`,background:I.value.style.backgroundColor})},[(m(),re(ce,{key:`title_${P.value}`,config:{title:{cy:`title`,...I.value.style.title},subtitle:{cy:`subtitle`,...I.value.style.title.subtitle}}},null,8,[`config`]))],4)):u(``,!0),(m(),e(`svg`,{ref_key:`svgRef`,ref:Ae,xmlns:s(ae),viewBox:`0 0 ${z.value.width<=0?10:z.value.width} ${z.value.height<=0?10:z.value.height}`,style:a({maxWidth:`100%`,overflow:`visible`,background:I.value.style.backgroundColor})},[n(s(T)),t.$slots[`chart-background`]?(m(),e(`foreignObject`,{key:0,x:0,y:0,width:z.value.width<=0?10:z.value.width,height:z.value.height<=0?10:z.value.height,style:{pointerEvents:`none`}},[d(t.$slots,`chart-background`,{},void 0,!0)],8,me)):u(``,!0),I.value.stopwatch.tracker.gradient.show?(m(),e(`defs`,he,[f(`radialGradient`,{id:`tracker_gradient_${N.value}`,cx:`50%`,cy:`50%`,r:`50%`,fx:`50%`,fy:`50%`},[f(`stop`,{offset:`0%`,"stop-color":I.value.stopwatch.tracker.gradient.color},null,8,_e),f(`stop`,{offset:`100%`,"stop-color":I.value.stopwatch.tracker.fill},null,8,ve)],8,ge)])):u(``,!0),f(`circle`,{cx:z.value.width/2,cy:z.value.height/2,r:Z.value,fill:I.value.stopwatch.track.fill,stroke:I.value.stopwatch.track.stroke,"stroke-width":I.value.stopwatch.track.strokeWidth},null,8,ye),I.value.stopwatch.cycleTrack.show?(m(),e(`path`,{key:2,d:`M ${z.value.width/2},${z.value.height/2-Z.value} A ${Z.value},${Z.value} 0 ${$.value.largeArcFlag},${$.value.sweepFlag} ${$.value.cx},${$.value.cy}`,stroke:I.value.stopwatch.cycleTrack.stroke,"stroke-width":I.value.stopwatch.cycleTrack.strokeWidth,"stroke-linecap":`round`,fill:`none`},null,8,be)):u(``,!0),f(`circle`,l($.value,{r:z.value.tracker.core,fill:I.value.stopwatch.tracker.gradient.show?`url(#tracker_gradient_${N.value})`:I.value.stopwatch.tracker.fill,stroke:I.value.stopwatch.tracker.stroke,"stroke-width":I.value.stopwatch.tracker.strokeWidth}),null,16,xe),I.value.stopwatch.tracker.aura.show?(m(),e(`circle`,l({key:3},$.value,{r:z.value.tracker.aura,fill:`${I.value.stopwatch.tracker.aura.fill}20`,stroke:I.value.stopwatch.tracker.aura.stroke,"stroke-width":I.value.stopwatch.tracker.aura.strokeWidth}),null,16,Se)):u(``,!0),t.$slots.time?(m(),e(`foreignObject`,{key:4,x:z.value.width/2,y:z.value.height/2,height:`0.1`,width:`0.1`,style:{overflow:`visible`}},[d(t.$slots,`time`,i(p({...B.value,...z.value})),void 0,!0)],8,Ce)):t.$slots.timeSvg?(m(),e(`g`,we,[d(t.$slots,`timeSvg`,i(p({...B.value,...z.value})),void 0,!0)])):(m(),e(`text`,{key:6,x:z.value.width/2,y:z.value.height/2+z.value.label/4,"font-size":z.value.label,"text-anchor":`middle`,fill:I.value.stopwatch.label.color,"font-weight":I.value.stopwatch.label.bold?`bold`:`normal`,style:{"font-variant-numeric":`tabular-nums !important`}},o(B.value.formatted||je.value),9,Te))],12,pe)),f(`div`,{ref_key:`chartLegend`,ref:A,style:a({width:`100%`,backgroundColor:I.value.stopwatch.legend.backgroundColor})},[t.$slots.controls?u(``,!0):(m(),e(`div`,Ee,[I.value.stopwatch.legend.buttons.start?(m(),e(`button`,{key:0,title:I.value.stopwatch.legend.buttonTitles.start,onClick:G,class:`vue-ui-timer-button`,style:a({opacity:U.value?.2:1,cursor:U.value?`default`:L.value?`pointer`:`default`})},[n(b,{name:`play`,stroke:I.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,De)):u(``,!0),I.value.stopwatch.legend.buttons.pause?(m(),e(`button`,{key:1,title:W.value?I.value.stopwatch.legend.buttonTitles.resume:I.value.stopwatch.legend.buttonTitles.pause,onClick:q,class:`vue-ui-timer-button`,style:a({opacity:U.value?1:.2,cursor:U.value&&L.value?`pointer`:`default`})},[n(b,{name:`pause`,stroke:I.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,Oe)):u(``,!0),I.value.stopwatch.legend.buttons.reset?(m(),e(`button`,{key:2,title:I.value.stopwatch.legend.buttonTitles.reset,onClick:K,class:`vue-ui-timer-button`,style:a({opacity:U.value?1:.2,cursor:U.value&&L.value?`pointer`:`default`})},[n(b,{name:`stop`,stroke:I.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,S)):u(``,!0),I.value.stopwatch.legend.buttons.restart?(m(),e(`button`,{key:3,title:I.value.stopwatch.legend.buttonTitles.restart,onClick:J,class:`vue-ui-timer-button`,style:a({opacity:U.value?1:.2,cursor:U.value&&L.value?`pointer`:`default`})},[n(b,{name:`restart`,stroke:I.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,C)):u(``,!0),I.value.stopwatch.legend.buttons.lap?(m(),e(`button`,{key:4,title:I.value.stopwatch.legend.buttonTitles.lap,onClick:X,class:`vue-ui-timer-button`,style:a({opacity:U.value&&!W.value?1:.2,cursor:U.value&&!W.value&&L.value?`pointer`:`default`})},[n(b,{name:`lap`,stroke:I.value.stopwatch.legend.buttons.iconColor},null,8,[`stroke`])],12,w)):u(``,!0)])),d(t.$slots,`controls`,i(p({start:G,pause:q,reset:K,restart:J,lap:X,laps:Y.value,isRunning:U.value,isPaused:W.value,...B.value})),void 0,!0),d(t.$slots,`laps`,i(p({laps:Y.value,lap:X,isRunning:U.value,isPaused:W.value,...B.value})),void 0,!0)],4)],4))}},[[`__scopeId`,`data-v-7cc009e4`]]);export{x as n};