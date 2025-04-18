
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as c}from"./index.vue_vue_type_script_setup_true_lang-CimuGHFd.js";import{d as i,r as o,L as l,g as m,l as e}from"./index-DuOv7Qep.js";const g=i({__name:"_demo4",setup(u){const n=o(0),a=o(0),t=["en-US","en-US","fr-FR","en-US","en-US","zh-CN","en-US","en-US","fr-FR"],s=[{},{minimumFractionDigits:2},{style:"currency",currency:"USD",currencySign:"accounting",signDisplay:"always"},{style:"percent",signDisplay:"always"},{style:"unit",unit:"meter",notation:"compact",minimumFractionDigits:2,maximumFractionDigits:2,signDisplay:"never"},{style:"currency",currency:"CNY"},{signDisplay:"always"}];return setInterval(()=>{a.value+=Math.floor(Math.random()*1e3)*(Math.random()>.5?1:-1),n.value+=1},2e3),(y,p)=>{const r=c;return m(),l(r,{value:e(a),format:s[e(n)%s.length],locales:t[e(n)%t.length],"will-change":"",class:"text-4xl font-bold"},null,8,["value","format","locales"])}}});export{g as _};
