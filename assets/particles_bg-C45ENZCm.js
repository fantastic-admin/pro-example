
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,x as n,yt as r}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as i,Ht as a,_ as o,b as s,bt as c,ct as l,g as u,it as d,k as f,mt as p,o as m,qt as h,v as g,wt as _}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as v,bn as y,gn as b,un as x,xn as S}from"./src-XafWzjth.js";import{n as C}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as w}from"./page-header-DeO2joBq.js";var T=f({name:`BuiltInParticlesBg`,__name:`index`,props:{color:{default:`#FFF`},quantity:{default:100},staticity:{default:50},ease:{default:50},class:{type:[Boolean,null,String,Object,Array]}},setup(i){let c=i,f=t(null),m=t(null),h=t(null),g=t([]),_=n({x:0,y:0}),v=n({w:0,h:0}),{x:C,y:w}=y(),{pixelRatio:T}=b(),E=null,D=u(()=>{let e=c.color.replace(/^#/,``);e.length===3&&(e=e.split(``).map(e=>e+e).join(``));let t=Number.parseInt(e,16);return`${t>>16&255} ${t>>8&255} ${t&255}`});l(()=>{f.value&&(h.value=f.value.getContext(`2d`)),O(),I()}),d(()=>{E!==null&&window.cancelAnimationFrame(E)}),a([C,w],()=>{k()}),a(T,()=>{O()}),S(m,()=>{O()});function O(){A(),P()}function k(){if(f.value){let e=f.value.getBoundingClientRect(),{w:t,h:n}=v,r=C.value-e.left-t/2,i=w.value-e.top-n/2;r<t/2&&r>-t/2&&i<n/2&&i>-n/2&&(_.x=r,_.y=i)}}function A(){if(m.value&&f.value&&h.value){let e=m.value.offsetWidth,t=m.value.offsetHeight;if(e<=0||t<=0)return;g.value.length=0,v.w=e,v.h=t,f.value.width=v.w*T.value,f.value.height=v.h*T.value,h.value.setTransform(T.value,0,0,T.value,0,0)}}function j(){return{x:Math.floor(Math.random()*v.w),y:Math.floor(Math.random()*v.h),translateX:0,translateY:0,size:Math.floor(Math.random()*2)+1,alpha:0,targetAlpha:Number.parseFloat((Math.random()*.6+.1).toFixed(1)),dx:(Math.random()-.5)*.2,dy:(Math.random()-.5)*.2,magnetism:.1+Math.random()*4}}function M(e,t=!1){if(h.value){let{x:n,y:r,translateX:i,translateY:a,size:o,alpha:s}=e;h.value.translate(i,a),h.value.beginPath(),h.value.arc(n,r,o,0,2*Math.PI),h.value.fillStyle=`rgba(${D.value.split(` `).join(`, `)}, ${s})`,h.value.fill(),h.value.setTransform(T.value,0,0,T.value,0,0),t||g.value.push(e)}}function N(){h.value&&h.value.clearRect(0,0,v.w,v.h)}function P(){N();let e=c.quantity;for(let t=0;t<e;t++)M(j())}function F(e,t,n,r,i){let a=(e-t)*(i-r)/(n-t)+r;return a>0?a:0}function I(){N(),g.value.forEach((e,t)=>{let n=[e.x+e.translateX-e.size,v.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,v.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),r=Number.parseFloat(F(n,0,20,0,1).toFixed(2));r>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*r,e.x+=e.dx,e.y+=e.dy,e.translateX+=(_.x/(c.staticity/e.magnetism)-e.translateX)/c.ease,e.translateY+=(_.y/(c.staticity/e.magnetism)-e.translateY)/c.ease,e.x<-e.size||e.x>v.w+e.size||e.y<-e.size||e.y>v.h+e.size?(g.value.splice(t,1),M(j())):M({...e,x:e.x,y:e.y,translateX:e.translateX,translateY:e.translateY,alpha:e.alpha},!0)}),E=window.requestAnimationFrame(I)}return(t,n)=>(p(),s(`div`,{ref_key:`canvasContainerRef`,ref:m,class:r(e(x)(`size-full`,c.class)),"aria-hidden":`true`},[o(`canvas`,{ref_key:`canvasRef`,ref:f,class:`size-full block`},null,512)],2))}}),E={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},D=`#64748B`,O=f({__name:`_basic`,setup(e){return(e,t)=>(p(),s(`div`,E,[i(T,{class:`inset-0 absolute`,color:D})]))}}),k=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaParticlesBg from '../index.vue'

const particleColor = '#64748B'
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <FaParticlesBg
      class="inset-0 absolute"
      :color="particleColor"
    />
  </div>
</template>
`,A={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},j=f({__name:`_config`,setup(e){return(e,t)=>(p(),s(`div`,A,[i(T,{class:`inset-0 absolute`,color:`#2563EB`,quantity:1e3,ease:100,staticity:5})]))}}),M=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaParticlesBg from '../index.vue'
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <FaParticlesBg
      class="inset-0 absolute"
      color="#2563EB"
      :quantity="1000"
      :ease="100"
      :staticity="5"
    />
  </div>
</template>
`,N={class:`p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden`},P=`#64748B`,F=[{title:`基础`,component:O,componentRaw:k},{title:`颜色、数量、速度`,component:j,componentRaw:M},{title:`搭配文案`,component:f({__name:`_copy`,setup(e){return(e,t)=>(p(),s(`div`,N,[t[0]||(t[0]=o(`span`,{class:`text-8xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10`},` Fantastic-admin `,-1)),i(T,{class:`inset-0 absolute`,color:P,quantity:100,ease:100,staticity:10})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaParticlesBg from '../index.vue'

const particleColor = '#64748B'
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <span class="text-8xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10">
      Fantastic-admin
    </span>
    <FaParticlesBg
      class="inset-0 absolute"
      :color="particleColor"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`}],I=f({__name:`particles_bg`,setup(t){let{t:n}=C();return(t,r)=>{let a=w,o=v;return p(),s(`div`,null,[i(a,{title:e(n)(`route.componentPro.particlesBg`),description:`FaParticlesBg`},null,8,[`title`]),(p(!0),s(m,null,c(e(F),e=>(p(),g(o,{key:e.title,code:e.componentRaw,title:e.title},{default:h(()=>[(p(),g(_(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{I as default};