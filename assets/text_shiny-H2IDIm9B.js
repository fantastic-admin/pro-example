
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BZDlCT0z.js";import{t as u}from"./_demo2-B5dK9lFl.js";import{t as d}from"./_demo3-BcH2vaSo.js";var f=`<template>
  <FaTextShiny>
    Fantastic-admin
  </FaTextShiny>
</template>
`,p=`<template>
  <div>
    适合做
    <FaTextShiny class="text-rose-600 font-bold dark:text-rose-400">
      行内重点强调
    </FaTextShiny>
    ，也可以通过文字颜色类控制成
    <FaTextShiny class="text-emerald-600 font-bold dark:text-emerald-400">
      品牌高亮
    </FaTextShiny>
    。
  </div>
</template>
`,m=`<template>
  <div>
    <FaTextShiny
      :duration="1.1"
      :delay="0"
      class="text-4xl text-amber-600 tracking-tight font-black dark:text-amber-400"
    >
      快速扫光
    </FaTextShiny>
    <FaTextShiny
      :duration="2.4"
      :delay="0.4"
      class="text-4xl text-violet-600 tracking-tight font-black dark:text-violet-400"
    >
      更慢一点的节奏
    </FaTextShiny>
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.textShiny`),description:`FaTextShiny`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`颜色`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`速度与延迟`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};