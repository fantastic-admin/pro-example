
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{i as p}from"./logo-A4CMGNjt.js";import{d as u,I as g,r as a,J as h,E as d,K as f,f as o,k as e,Q as _,i as k,e as r,L as i,j as w}from"./index-DQdGVpLy.js";const x=["src"],L={key:1,class:"block truncate font-bold"},S=u({name:"Logo",__name:"index",props:{showLogo:{type:Boolean,default:!0},showTitle:{type:Boolean,default:!0}},setup(b){const t=g(),s=a("Fantastic-admin 专业版"),l=a(p),c=h(()=>t.settings.home.enable?t.settings.home.fullPath:"");return(n,y)=>{const m=d("RouterLink");return o(),f(m,{to:e(c),class:_(["h-[var(--g-sidebar-logo-height)] w-inherit flex-center gap-2 px-3 text-primary no-underline",{"cursor-default":!e(t).settings.home.enable}]),title:e(s)},{default:k(()=>[n.showLogo?(o(),r("img",{key:0,src:e(l),class:"logo h-[30px] w-[30px] object-contain"},null,8,x)):i("",!0),n.showTitle?(o(),r("span",L,w(e(s)),1)):i("",!0)]),_:1},8,["to","class","title"])}}});export{S as _};
