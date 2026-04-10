
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-Do_ynYp7.js";var u=`<script setup lang="ts">
function handleComplete() {
  faToast.success('恭喜你刮中了')
}
<\/script>

<template>
  <FaScratchOff
    :width="250"
    :height="250"
    :min-scratch-percentage="30"
    class="border-2 rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden"
    @complete="handleComplete"
  >
    <div class="text-8xl">
      🥳
    </div>
  </FaScratchOff>
</template>
`,d=e({__name:`index`,setup(e){let{t:d}=c();return(e,c)=>{let f=o,p=s;return r(),a(`div`,null,[n(f,{title:t(d)(`route.component.scratchOff`),description:`FaScratchOff`},null,8,[`title`]),n(p,{code:t(u)},{default:i(()=>[n(l)]),_:1},8,[`code`])])}}});export{d as default};