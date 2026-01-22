
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-BHyjy1V-.js";import{d as e,c,o as s,g as n,am as f,w as r,e as m,k as t}from"./index-H6QnEWHf.js";import{_ as p}from"./_demo1.vue_vue_type_script_setup_true_lang-CC0qLPV3.js";import"./index-ok7mAVWN.js";const l="<script setup lang=\"ts\">\nimport { faNotification } from '@/ui/components/FaNotification'\n\nfunction showNotification(type?: 'html') {\n  if (type === 'html') {\n    faNotification({\n      title: 'Fantastic-admin 杰出的管理系统框架',\n      description: h('null', {\n        innerHTML: '<p class=\"text-red-500\">开箱即用，提供舒适开发体验</p>',\n      }),\n      duration: 3000,\n    })\n  }\n  else {\n    faNotification({\n      title: 'Fantastic-admin 杰出的管理系统框架',\n      description: '开箱即用，提供舒适开发体验',\n      duration: 3000,\n    })\n  }\n}\n<\/script>\n\n<template>\n  <div class=\"flex gap-4\">\n    <FaButton @click=\"showNotification()\">\n      默认\n    </FaButton>\n    <FaButton @click=\"showNotification('html')\">\n      支持 HTML 代码\n    </FaButton>\n  </div>\n</template>\n",d=e({__name:"index",setup(_){return(u,F)=>{const i=f,o=a;return s(),c("div",null,[n(i,{title:"通知",description:"FaNotification"}),n(o,{code:m(l)},{default:r(()=>[n(p)]),_:1},8,["code"])])}}});typeof t=="function"&&t(d);export{d as default};
