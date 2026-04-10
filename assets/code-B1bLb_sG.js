
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-BFy5xSDx.js";var u=`<script setup lang="ts">
const code = \`<FaCard title="卡片标题" description="卡片描述" class="w-80">
  卡片内容
  <template #footer>
    卡片底部
  </template>
</FaCard>\`
<\/script>

<template>
  <FaCode :code class="flex-1" />
</template>
`,d=e({__name:`index`,setup(e){let{t:d}=c();return(e,c)=>{let f=o,p=s;return r(),a(`div`,null,[n(f,{title:t(d)(`route.component.code`),description:`FaCode`},null,8,[`title`]),n(p,{title:`轻量级代码块，不依赖任何第三方库`,code:t(u)},{default:i(()=>[n(l)]),_:1},8,[`code`])])}}});export{d as default};