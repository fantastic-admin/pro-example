
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as T,v as B,p as $,I as A,a as C,r as M,K as k,L as y,aH as z,D as I,f as e,o as m,l as p,g as u,q as r,e as b,w as N,F as O,W as P,P as x,Q as R,aI as V,n as H,_ as j,y as q}from"./index-D4ACN76T.js";import{a as D}from"./index-B5qMq6jW.js";import{_ as E}from"./index.vue_vue_type_script_setup_true_lang-h72LL7Br.js";import{_ as F}from"./index.vue_vue_type_script_setup_true_lang-BSR2KRox.js";import"./logo-W9uVms6l.js";import"./item-BpRfR-jb.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-BY7WzcVS.js";import"./HBadge.vue_vue_type_script_setup_true_lang-D8O4Q_1y.js";import"./sub.vue_vue_type_script_setup_true_lang-BZx3rMh6.js";const L=T({name:"SubSidebar",__name:"index",setup(G){const v=B(),s=$(),o=A(),d=C("subSidebarRef"),h=M(!1),S=M(!1);function f(){var i,l,w;const n=((i=d.value)==null?void 0:i.scrollTop)??0;h.value=n>0;const t=((l=d.value)==null?void 0:l.clientHeight)??0,c=((w=d.value)==null?void 0:w.scrollHeight)??0;S.value=Math.ceil(n+t)<c}const g=k(()=>s.mode==="mobile"||["side","head","single"].includes(s.settings.menu.mode)&&o.sidebarMenus.length!==0&&!o.sidebarMenus.every(n=>{var t;return((t=n.meta)==null?void 0:t.menu)===!1}));y(g,n=>{n&&z(()=>{f()})},{immediate:!0});const _=C("menuRef");I(()=>{if(g.value){const{height:n}=D(_);y(()=>n.value,()=>{n.value>0&&f()},{immediate:!0})}});const a=k(()=>s.mode==="pc"?!!(s.settings.menu.subMenuCollapse&&(!s.isHoverSidebar||s.isHoverSidebar&&!s.settings.menu.subMenuAutoCollapse)):s.settings.menu.subMenuCollapse);return(n,t)=>{const c=j;return e(g)?(m(),p("div",{key:0,class:r(["sub-sidebar-container",{"is-collapse":e(a),"shadow-side":e(s).isHoverSidebar&&e(s).settings.menu.subMenuAutoCollapse&&e(s).settings.menu.subMenuCollapse}])},[u(E,{"show-logo":e(s).settings.menu.mode==="single",class:r(["sidebar-logo",{"sidebar-logo-bg":e(s).settings.menu.mode==="single"}])},null,8,["show-logo","class"]),b("div",{ref_key:"subSidebarRef",ref:d,class:r(["sub-sidebar flex-1 transition-shadow-300 scrollbar-none",{"shadow-top":e(h),"shadow-bottom":e(S)}]),onScroll:f},[b("div",{ref_key:"menuRef",ref:_},[u(V,{name:"sub-sidebar"},{default:N(()=>[(m(!0),p(O,null,P(e(o).allMenus,(i,l)=>x((m(),p("div",{key:l},[u(F,{menu:i.children,value:e(v).meta.activeMenu||e(v).path,"default-openeds":e(o).defaultOpenedPaths,"always-openeds":e(o).alwaysOpenedPaths,accordion:e(s).settings.menu.subMenuUniqueOpened,collapse:e(a),rounded:e(s).settings.menu.isRounded,direction:e(s).settings.app.direction,class:r(["menu",{"-mt-2":!(e(a)||["head","single"].includes(e(s).settings.menu.mode))}])},null,8,["menu","value","default-openeds","always-openeds","accordion","collapse","rounded","direction","class"])],512)),[[R,l===e(o).actived]])),128))]),_:1})],512)],34),e(s).mode==="pc"&&e(s).settings.menu.enableSubMenuCollapseButton?(m(),p("div",{key:0,class:r(["relative flex items-center px-4 py-3",{"justify-center":e(a),"justify-between":!e(a)}])},[x(b("span",{class:"flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark-bg-stone-9 hover-bg-stone-2 dark-hover-bg-stone-8",onClick:t[0]||(t[0]=i=>e(s).toggleSidebarAutoCollapse())},[u(c,{name:e(s).settings.menu.subMenuAutoCollapse?"i-lucide:pin-off":"i-lucide:pin"},null,8,["name"])],512),[[R,!e(a)]]),b("span",{class:r(["flex-center cursor-pointer rounded bg-stone-1 p-2 transition dark-bg-stone-9 hover-bg-stone-2 dark-hover-bg-stone-8",{"-rotate-z-180":e(s).settings.menu.subMenuCollapse}]),onClick:t[1]||(t[1]=i=>e(s).toggleSidebarCollapse())},[u(c,{name:"toolbar-collapse"})],2)],2)):H("",!0)],2)):H("",!0)}}}),se=q(L,[["__scopeId","data-v-f2628b0c"]]);export{se as default};