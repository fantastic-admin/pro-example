
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-B4qtdlJM.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-CZ8uheV8.js";import{d as _,x as f,O as p,P as g,l as x,c as B,o as S,f as n,g as o,b,e as h,j as k,J as s}from"./index-Bbf2k3Iz.js";const v=_({__name:"menuswitch",setup(w){const a=f(),t=p(),i=g();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const l=m,u=x("ElButton"),r=d;return S(),B("div",null,[n(l,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(r,null,{default:o(()=>[e[1]||(e[1]=b("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(u,{disabled:!["side","head"].includes(h(a).settings.menu.mode),onClick:c},{default:o(()=>e[0]||(e[0]=[k(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof s=="function"&&s(v);export{v as default};
