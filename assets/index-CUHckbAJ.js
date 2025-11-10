
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as o}from"./index.vue_vue_type_script_setup_true_lang-B6jzPZTN.js";import{d as c,c as s,o as r,k as e,aa as i,m,a as f,W as n}from"./index-B13-Jify.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-BMUq1920.js";import"./index-SDO31BjC.js";const l='<script lang="ts" setup>\nimport { toast } from \'vue-sonner\'\n\nfunction handleComplete() {\n  toast.success(\'恭喜你刮中了\')\n}\n<\/script>\n\n<template>\n  <FaScratchOff\n    :width="250"\n    :height="250"\n    :min-scratch-percentage="30"\n    class="flex items-center justify-center overflow-hidden border-2 rounded-2xl bg-gray-100"\n    @complete="handleComplete"\n  >\n    <div class="text-8xl">\n      🥳\n    </div>\n  </FaScratchOff>\n</template>\n',d=c({__name:"index",setup(_){return(u,h)=>{const t=i,a=o;return r(),s("div",null,[e(t,{title:"刮刮卡",description:"FaScratchOff"}),e(a,{code:f(l)},{default:m(()=>[e(p)]),_:1},8,["code"])])}}});typeof n=="function"&&n(d);export{d as default};
