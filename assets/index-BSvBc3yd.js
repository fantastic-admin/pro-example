
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-D9xYUDNr.js";import{d as c,f as s,g as r,h as e,a8 as i,j as f,l as m,V as n}from"./index-BFPO48W4.js";import{_ as l}from"./_demo1.vue_vue_type_script_setup_true_lang-Bo7jtFo6.js";import"./index-CdK171Ue.js";const p=`<script lang="ts" setup>
import { toast } from 'vue-sonner'

function handleComplete() {
  toast.success('恭喜你刮中了')
}
<\/script>

<template>
  <FaScratchOff
    :width="250"
    :height="250"
    :min-scratch-percentage="30"
    class="flex items-center justify-center overflow-hidden border-2 rounded-2xl bg-gray-100"
    @complete="handleComplete"
  >
    <div class="text-8xl">
      🥳
    </div>
  </FaScratchOff>
</template>
`,d=c({__name:"index",setup(_){return(u,h)=>{const t=i,a=o;return r(),s("div",null,[e(t,{title:"刮刮卡",description:"FaScratchOff"}),e(a,{code:m(p)},{default:f(()=>[e(l)]),_:1},8,["code"])])}}});typeof n=="function"&&n(d);export{d as default};
