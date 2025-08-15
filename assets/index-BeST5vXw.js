
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as a}from"./index.vue_vue_type_script_setup_true_lang-D9W61kN3.js";import{d as e,e as c,f as s,g as n,a7 as f,i as r,k as p,U as t}from"./index-DQdGVpLy.js";import{_ as m}from"./_demo1.vue_vue_type_script_setup_true_lang-_r0wsfOQ.js";import"./index-B7psu-zk.js";const l="<script setup lang=\"ts\">\nimport { faNotification } from '@/ui/components/FaNotification'\n\nfunction showNotification(type?: 'html') {\n  if (type === 'html') {\n    faNotification({\n      title: 'Fantastic-admin 杰出的管理系统框架',\n      description: h('null', {\n        innerHTML: '<p class=\"text-red-500\">开箱即用，提供舒适开发体验</p>',\n      }),\n      duration: 3000,\n    })\n  }\n  else {\n    faNotification({\n      title: 'Fantastic-admin 杰出的管理系统框架',\n      description: '开箱即用，提供舒适开发体验',\n      duration: 3000,\n    })\n  }\n}\n<\/script>\n\n<template>\n  <div class=\"flex gap-4\">\n    <FaButton @click=\"showNotification()\">\n      默认\n    </FaButton>\n    <FaButton @click=\"showNotification('html')\">\n      支持 HTML 代码\n    </FaButton>\n  </div>\n</template>\n",d=e({__name:"index",setup(_){return(u,F)=>{const i=f,o=a;return s(),c("div",null,[n(i,{title:"通知",description:"FaNotification"}),n(o,{code:p(l)},{default:r(()=>[n(m)]),_:1},8,["code"])])}}});typeof t=="function"&&t(d);export{d as default};
