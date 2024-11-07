
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";import{d as _,p as f,I as p,J as g,b as h,o as w,l as B,g as n,w as o,e as S,f as b,h as k,z as s}from"./index-D4ACN76T.js";const v=_({__name:"menuswitch",setup(x){const a=f(),t=p(),i=g();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const l=m,u=h("ElButton"),r=d;return w(),B("div",null,[n(l,{title:"主导航切换",content:"可切换并激活指定的主导航"}),n(r,null,{default:o(()=>[e[1]||(e[1]=S("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(u,{disabled:!["side","head"].includes(b(a).settings.menu.mode),onClick:c},{default:o(()=>e[0]||(e[0]=[k(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof s=="function"&&s(v);export{v as default};
