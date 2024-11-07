
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{d as p,cY as f,b as d,o as b,l as g,g as e,w as t,e as B,t as k,f as C,h as i,_ as N,z as m}from"./index-D4ACN76T.js";import{_ as v}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";const x=p({__name:"number",setup(S){const n=f();function u(){n.setNumber(n.number+1)}function r(){n.setNumber(n.number-1)}return(E,o)=>{const c=v,a=N,s=d("ElButton"),l=_;return b(),g("div",null,[e(c,{title:"数字标记",content:"搭配 Pinia 可实现动态设置。请控制数字展示长度，避免导航标记覆盖导航标题，为 0 时则隐藏"}),e(l,null,{default:t(()=>[B("div",null,"当前 badge 值："+k(C(n).number),1),e(s,{onClick:u},{icon:t(()=>[e(a,{name:"i-ep:plus"})]),default:t(()=>[o[0]||(o[0]=i(" 1 "))]),_:1}),e(s,{onClick:r},{icon:t(()=>[e(a,{name:"i-ep:minus"})]),default:t(()=>[o[1]||(o[1]=i(" 1 "))]),_:1})]),_:1})])}}});typeof m=="function"&&m(x);export{x as default};
