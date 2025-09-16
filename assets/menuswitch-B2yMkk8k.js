
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,L as m,a0 as _,bd as p,a4 as f,c as g,o as k,k as n,aa as B,m as s,l as S,a as b,G as h,a9 as v,W as a}from"./index-CphCexG_.js";const w=r({__name:"menuswitch",setup(x){const o=m(),t=_(),i=p();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const l=B,u=f("ElButton"),d=v;return k(),g("div",null,[n(l,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=S("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(u,{disabled:!["side","head"].includes(b(o).settings.menu.mode),onClick:c},{default:s(()=>[...e[0]||(e[0]=[h(" 切换下一个 ",-1)])]),_:1},8,["disabled"])]),_:1})])}}});typeof a=="function"&&a(w);export{w as default};
