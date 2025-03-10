
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,J as g,r as a,K as m,G as h,L as d,g as o,l as e,Q as _,j as f,f as r,M as l,k,U as w}from"./index-C1X-Si6V.js";const x=["src"],L={key:1,class:"block truncate font-bold"},C=u({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(b){const t=g(),s=a("Fantastic-admin 专业版"),i=a(w),c=m(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,y)=>{const p=h("RouterLink");return o(),d(p,{to:e(c),class:_(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(t).settings.home.enable}]),title:e(s)},{default:f(()=>[n.showLogo?(o(),r("img",{key:0,src:e(i),class:"logo h-[30px] w-[30px] object-contain"},null,8,x)):l("",!0),n.showTitle?(o(),r("span",L,k(e(s)),1)):l("",!0)]),_:1},8,["to","class","title"])}}});export{C as _};
