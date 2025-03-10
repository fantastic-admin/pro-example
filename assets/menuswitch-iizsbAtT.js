
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-DAmkWWdh.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-B6TBok1e.js";import{d as _,J as f,a1 as p,bu as g,G as h,f as B,g as C,h as n,j as s,i as S,l as b,C as k,X as o}from"./index-C1X-Si6V.js";const v=_({__name:"menuswitch",setup(w){const a=f(),t=p(),i=g();function u(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(x,e)=>{const c=m,l=h("ElButton"),r=d;return C(),B("div",null,[n(c,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(r,null,{default:s(()=>[e[1]||(e[1]=S("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(b(a).settings.menu.mode),onClick:u},{default:s(()=>e[0]||(e[0]=[k(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(v);export{v as default};
