
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,J as m,$ as _,a$ as f,G as p,f as g,g as h,h as n,a8 as B,j as s,i as C,l as S,C as k,a7 as v,V as o}from"./index-CkXBA4BI.js";const w=r({__name:"menuswitch",setup(x){const a=m(),t=_(),i=f();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(M,e)=>{const l=B,u=p("ElButton"),d=v;return h(),g("div",null,[n(l,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=C("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(u,{disabled:!["side","head"].includes(S(a).settings.menu.mode),onClick:c},{default:s(()=>e[0]||(e[0]=[k(" 切换下一个 ")])),_:1},8,["disabled"])]),_:1})])}}});typeof o=="function"&&o(w);export{w as default};
