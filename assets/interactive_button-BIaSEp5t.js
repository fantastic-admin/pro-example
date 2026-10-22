
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,wt as t,yt as n}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as r,_ as i,b as a,bt as o,k as s,mt as c,o as l,qt as u,v as d,wt as f}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{T as p,un as m}from"./src-XafWzjth.js";import{n as h}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as g}from"./page-header-DeO2joBq.js";var _={class:`flex gap-2 items-center`},v={class:`inline-block whitespace-nowrap transition-all duration-300 group-hover:opacity-0 group-hover:translate-x-12 rtl:group-hover:-translate-x-12`},y={class:`text-primary-foreground opacity-0 flex gap-2 size-full translate-x-12 transition-all duration-300 items-center top-0 justify-center absolute z-10 group-hover:opacity-100 group-hover:-translate-x-5 rtl:-translate-x-12 rtl:group-hover:translate-x-5`},b={class:`whitespace-nowrap`},x=s({name:`BuiltInInteractiveButton`,__name:`index`,props:{text:{},class:{type:[Boolean,null,String,Object,Array]}},setup(r){let o=r;return(s,l)=>(c(),a(`button`,{class:n(e(m)(`group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold`,o.class))},[i(`div`,_,[l[0]||(l[0]=i(`div`,{class:`rounded-lg bg-primary size-2 scale-100 transition-all duration-300 group-hover:scale-[100.8]`},null,-1)),i(`span`,v,t(r.text),1)]),i(`div`,y,[i(`span`,b,t(r.text),1),l[1]||(l[1]=i(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`24`,height:`24`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,class:`lucide lucide-arrow-right rtl:rotate-180`},[i(`path`,{d:`M5 12h14`}),i(`path`,{d:`m12 5 7 7-7 7`})],-1))])],2))}}),S={class:`flex flex-wrap gap-4`},C=[{title:`基础`,component:s({__name:`_basic`,setup(e){return(e,t)=>(c(),a(`div`,S,[r(x,{text:`Fantastic-admin`}),r(x,{text:`Vue.js`})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaInteractiveButton from '../index.vue'
<\/script>

<template>
  <div class="flex flex-wrap gap-4">
    <FaInteractiveButton text="Fantastic-admin" />
    <FaInteractiveButton text="Vue.js" />
  </div>
</template>
`}],w=s({__name:`interactive_button`,setup(t){let{t:n}=h();return(t,i)=>{let s=g,m=p;return c(),a(`div`,null,[r(s,{title:e(n)(`route.componentPro.interactiveButton`),description:`FaInteractiveButton`},null,8,[`title`]),(c(!0),a(l,null,o(e(C),e=>(c(),d(m,{key:e.title,code:e.componentRaw,title:e.title},{default:u(()=>[(c(),d(f(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{w as default};