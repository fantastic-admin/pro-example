
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-G8mBMKDY.js";import{d as c,e as s,f as r,g as e,a7 as i,i as f,k as m,U as n}from"./index-H6KsPIiT.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-Cz8ozwUB.js";import"./index-9dZpJgz5.js";const l='<script lang="ts" setup>\nimport { toast } from \'vue-sonner\'\n\nfunction handleComplete() {\n  toast.success(\'恭喜你刮中了\')\n}\n<\/script>\n\n<template>\n  <FaScratchOff\n    :width="250"\n    :height="250"\n    :min-scratch-percentage="30"\n    class="flex items-center justify-center overflow-hidden border-2 rounded-2xl bg-gray-100"\n    @complete="handleComplete"\n  >\n    <div class="text-8xl">\n      🥳\n    </div>\n  </FaScratchOff>\n</template>\n',d=c({__name:"index",setup(_){return(u,h)=>{const t=i,a=o;return r(),s("div",null,[e(t,{title:"刮刮卡",description:"FaScratchOff"}),e(a,{code:m(l)},{default:f(()=>[e(p)]),_:1},8,["code"])])}}});typeof n=="function"&&n(d);export{d as default};
