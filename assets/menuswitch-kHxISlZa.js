
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-DFlTa5Ps.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-uJp-mfbj.js";import{d as _,J as f,a1 as p,bv as g,G as h,f as v,g as B,h as n,j as s,i as C,l as S,C as b,X as o}from"./index-ChHFYeJP.js";const k=_({__name:"menuswitch",setup(w){const a=f(),t=p(),i=g();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(x,e)=>{const l=m,u=h("ElButton"),r=d;return B(),v("div",null,[n(l,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(r,null,{default:s(()=>[e[1]||(e[1]=C("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(u,{disabled:!["side","head"].includes(S(a).settings.menu.mode),onClick:c},{default:s(()=>e[0]||(e[0]=[b(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(k);export{k as default};
