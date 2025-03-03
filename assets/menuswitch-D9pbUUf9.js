
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-Nx9bjpdv.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-CeEQmTy4.js";import{d as _,I as f,$ as p,aK as g,E as B,f as h,g as k,k as n,m as s,h as S,j as v,B as w,V as o}from"./index-DMc4HI8f.js";const x=_({__name:"menuswitch",setup(C){const a=f(),t=p(),i=g();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(E,e)=>{const u=m,l=B("ElButton"),r=d;return k(),h("div",null,[n(u,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(r,null,{default:s(()=>[e[1]||(e[1]=S("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(v(a).settings.menu.mode),onClick:c},{default:s(()=>e[0]||(e[0]=[w(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(x);export{x as default};
