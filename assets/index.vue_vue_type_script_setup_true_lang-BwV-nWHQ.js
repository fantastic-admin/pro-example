
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as u}from"./logo-A4CMGNjt.js";import{d as p,a as g,r as h,l as d,o,e,z as f,p as a,B as _,w as x,c as r,b as l,t as k}from"./index-Bhq0NWKR.js";const w=["src"],b={key:1,class:"block truncate font-bold"},S=p({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(s){const t=g(),n=a("Fantastic-admin 专业版"),i=a(u),c=_(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(y,B)=>{const m=h("RouterLink");return o(),d(m,{to:e(c),class:f(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-primary no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(n)},{default:x(()=>[s.showLogo?(o(),r("img",{key:0,src:e(i),class:"logo h-[30px] w-[30px] object-contain"},null,8,w)):l("",!0),s.showTitle?(o(),r("span",b,k(e(n)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
