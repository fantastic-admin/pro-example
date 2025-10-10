
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as u}from"./logo-A4CMGNjt.js";import{d as g,L as p,g as a,M as h,a4 as d,N as f,o,a as e,n as _,m as x,c as r,O as l,p as k}from"./index-28uxndRW.js";const w=["src"],L={key:1,class:"block truncate font-bold"},S=g({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const t=p(),n=a("Fantastic-admin 专业版"),i=a(u),c=h(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(b,y)=>{const m=d("RouterLink");return o(),f(m,{to:e(c),class:_(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-primary no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(n)},{default:x(()=>[s.showLogo?(o(),r("img",{key:0,src:e(i),class:"logo h-[30px] w-[30px] object-contain"},null,8,w)):l("",!0),s.showTitle?(o(),r("span",L,k(e(n)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
