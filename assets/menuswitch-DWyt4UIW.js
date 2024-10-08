
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang--ThJjcg9.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-DWmqi8aT.js";import{d as _,q as f,H as p,I as g,a as k,o as w,k as B,f as n,w as o,b as S,e as b,g as h,y as s}from"./index-DL7SpVKF.js";const v=_({__name:"menuswitch",setup(x){const a=f(),t=p(),i=g();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const u=m,l=k("ElButton"),r=d;return w(),B("div",null,[n(u,{title:"主导航切换",content:"可切换并激活指定的主导航"}),n(r,null,{default:o(()=>[e[1]||(e[1]=S("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(b(a).settings.menu.mode),onClick:c},{default:o(()=>e[0]||(e[0]=[h(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof s=="function"&&s(v);export{v as default};
