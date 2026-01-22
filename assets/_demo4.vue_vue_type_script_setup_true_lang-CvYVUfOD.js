
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang-DK3yGJfW.js";import{d as i,n as s,l,o as m,e}from"./index-H6QnEWHf.js";const g=i({__name:"_demo4",setup(u){const n=s(0),a=s(0),t=["en-US","en-US","fr-FR","en-US","en-US","zh-CN","en-US","en-US","fr-FR"],o=[{},{minimumFractionDigits:2},{style:"currency",currency:"USD",currencySign:"accounting",signDisplay:"always"},{style:"percent",signDisplay:"always"},{style:"unit",unit:"meter",notation:"compact",minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:"never"},{style:"currency",currency:"CNY"},{signDisplay:"always"}];return setInterval(()=>{a.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),n.value+=1},2e3),(y,p)=>{const c=r;return m(),l(c,{value:e(a),format:o[e(n)%o.length],locales:t[e(n)%t.length],"will-change":"",class:"text-4xl font-bold"},null,8,["value","format","locales"])}}});export{g as _};
