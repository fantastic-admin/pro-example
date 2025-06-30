
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as r,I as _,Z as m,b2 as f,E as p,e as g,f as B,g as n,a7 as h,i as s,h as k,k as S,B as b,a6 as v,U as o}from"./index-CkQ8ZzMl.js";const w=r({__name:"menuswitch",setup(x){const a=_(),t=m(),i=f();function c(){i.switchTo(t.actived+1<t.allMenus.length?t.actived+1:0)}return(C,e)=>{const u=h,l=p("ElButton"),d=v;return B(),g("div",null,[n(u,{title:"主导航切换",description:"可切换并激活指定的主导航"}),n(d,null,{default:s(()=>[e[1]||(e[1]=k("p",null,"该特性只有在导航模式为 side 和 head 时生效。",-1)),n(l,{disabled:!["side","head"].includes(S(a).settings.menu.mode),onClick:c},{default:s(()=>e[0]||(e[0]=[b(" 切换下一个 ")])),_:1,__:[0]},8,["disabled"])]),_:1,__:[1]})])}}});typeof o=="function"&&o(w);export{w as default};
