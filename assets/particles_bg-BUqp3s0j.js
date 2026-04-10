
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-oY8y9ajr.js";import{t as u}from"./_demo2-C7EtmeF3.js";import{t as d}from"./_demo3-BZkXwbVg.js";var f=`<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <FaParticlesBg
      class="inset-0 absolute"
      :color="appSettingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
    />
  </div>
</template>
`,p=`<template>
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
`,m=`<script setup lang="ts">
const appSettingsStore = useAppSettingsStore()
<\/script>

<template>
  <div class="p-2 bg-background flex flex-col h-50 w-full items-center justify-center relative overflow-hidden">
    <span class="text-8xl text-transparent leading-none font-semibold text-center pointer-events-none whitespace-pre-wrap from-black to-gray-300/80 bg-gradient-to-b bg-clip-text dark:from-white dark:to-slate-900/10">
      Fantastic-admin
    </span>
    <FaParticlesBg
      class="inset-0 absolute"
      :color="appSettingsStore.currentColorScheme === 'dark' ? '#FFF' : '#000'"
      :quantity="100"
      :ease="100"
      :staticity="10"
    />
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.particlesBg`),description:`FaParticlesBg`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`颜色、数量、速度`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`搭配文案`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};