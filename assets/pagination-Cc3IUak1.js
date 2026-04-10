
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-MvRJsJdj.js";import{t as u}from"./_demo2-ltFEhV0g.js";var d=`<script setup lang="ts">
const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <FaPagination :page="page" :size="size" :total="total" />
</template>
`,f=`<script setup lang="ts">
const page = ref(1)
const size = ref(10)
const total = ref(100)
<\/script>

<template>
  <FaPagination :page="page" :size="size" :total="total" layout="jumper, pager, ->, total, sizes" />
  <div class="my-4 border-t" />
  <FaPagination :page="page" :size="size" :total="total" layout="pager" />
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.pagination`),description:`FaPagination`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`布局`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};