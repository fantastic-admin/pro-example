
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e}from"./reactivity.esm-bundler-DQLEWij_.js";import{D as t,b as n,bt as r,k as i,mt as a,o,qt as s,v as c,wt as l}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{$ as u,T as d}from"./src-XafWzjth.js";import{n as f}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as p}from"./avatar-C4snFjBQ.js";import{t as m}from"./page-header-DeO2joBq.js";var h=i({__name:`_basic`,setup(e){return(e,t)=>(a(),c(p,{src:`https://fantastic-admin.hurui.me/logo.svg`}))}}),g=`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="https://fantastic-admin.hurui.me/logo.svg" />
</template>
`,_={class:`flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background`},v=[{title:`基础`,component:h,componentRaw:g},{title:`回退显示`,component:i({__name:`_fallback`,setup(e){return(e,t)=>(a(),c(p,{src:``,fallback:`Hooray`}))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaAvatar from '../index.vue'
<\/script>

<template>
  <FaAvatar src="" fallback="Hooray" />
</template>
`},{title:`自定义样式`,component:i({__name:`_custom-style`,setup(e){return(e,r)=>(a(),n(`div`,_,[t(u,{text:`Fantastic-admin`},{default:s(()=>[t(p,{src:`https://github.com/fantastic-admin.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),t(u,{text:`Hooray`},{default:s(()=>[t(p,{src:`https://github.com/hooray.png`,class:`transition hover:scale-110 hover:z-1`})]),_:1}),t(u,{text:`Admin`},{default:s(()=>[t(p,{src:`https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin`,class:`transition hover:scale-110 hover:z-1`})]),_:1})]))}}),componentRaw:`<script setup lang="ts">
// 组件实际使用时无需手动导入，框架会自动导入
import FaTooltip from '../../tooltip/index.vue'
import FaAvatar from '../index.vue'
<\/script>

<template>
  <div class="flex space-x--2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background">
    <FaTooltip text="Fantastic-admin">
      <FaAvatar src="https://github.com/fantastic-admin.png" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
    <FaTooltip text="Hooray">
      <FaAvatar src="https://github.com/hooray.png" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
    <FaTooltip text="Admin">
      <FaAvatar src="https://api.dicebear.com/9.x/bottts-neutral/svg?seed=admin" class="transition hover:scale-110 hover:z-1" />
    </FaTooltip>
  </div>
</template>
`}],y=i({__name:`avatar`,setup(i){let{t:u}=f();return(i,f)=>{let p=m,h=d;return a(),n(`div`,null,[t(p,{title:e(u)(`route.component.avatar`),description:`FaAvatar`},null,8,[`title`]),(a(!0),n(o,null,r(e(v),e=>(a(),c(h,{key:e.title,code:e.componentRaw,title:e.title},{default:s(()=>[(a(),c(l(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{y as default};