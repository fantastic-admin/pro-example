
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,I as u,r as a,J as g,E as h,K as d,g as o,j as e,P as _,m as f,f as r,L as i,i as k,R as w}from"./index-Db5JpCpC.js";const x=["src"],L={key:1,class:"block truncate font-bold"},C=m({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(b){const t=u(),s=a("Fantastic-admin 专业版"),l=a(w),c=g(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,y)=>{const p=h("RouterLink");return o(),d(p,{to:e(c),class:_(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-inherit no-underline",{"cursor-pointer":e(t).settings.home.enable}]),title:e(s)},{default:f(()=>[n.showLogo?(o(),r("img",{key:0,src:e(l),class:"logo h-[30px] w-[30px] object-contain"},null,8,x)):i("",!0),n.showTitle?(o(),r("span",L,k(e(s)),1)):i("",!0)]),_:1},8,["to","class","title"])}}});export{C as _};
