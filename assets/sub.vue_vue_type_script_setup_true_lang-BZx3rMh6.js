
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as K,a as C,ab as T,K as c,b as I,o as p,l as f,g as m,f as n,c as b,w,P as S,Q as F,aD as $,q as W,F as g,W as _,n as x,Z as L,b1 as N,T as O,at as A,R as H,aH as z}from"./index-D4ACN76T.js";import{I as J,r as j}from"./item-BpRfR-jb.js";const Q=K({name:"SubMenu",__name:"sub",props:{uniqueKey:{},menu:{},level:{default:0}},setup(R){const i=R,d=i.menu.path??JSON.stringify(i.menu),h=C("itemRef"),a=C("subMenuRef"),t=T(j),y=c(()=>t.openedMenus.includes(i.uniqueKey.at(-1))),v=c(()=>t.alwaysOpenedsMenus.includes(i.uniqueKey.at(-1))),k=c(()=>t.isMenuPopup?{enter(e){e.offsetHeight>window.innerHeight&&(e.style.height=`${window.innerHeight}px`)},afterEnter:()=>{},beforeLeave:e=>{e.style.overflow="hidden",e.style.maxHeight=`${e.offsetHeight}px`},leave:e=>{e.style.maxHeight="0"},afterLeave(e){e.style.overflow="",e.style.maxHeight=""}}:{enter(e){const s=e.offsetHeight;e.style.maxHeight="0",e.style.overflow="hidden",e.offsetHeight,e.style.maxHeight=`${s}px`},afterEnter(e){e.style.overflow="",e.style.maxHeight=""},beforeLeave(e){e.style.overflow="hidden",e.style.maxHeight=`${e.offsetHeight}px`},leave(e){e.style.maxHeight="0"},afterLeave(e){e.style.overflow="",e.style.maxHeight=""}}),q=c(()=>t.isMenuPopup?{enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0 translate-x-4",enterToClass:"opacity-100",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100",leaveToClass:"opacity-0"}:{enterActiveClass:"ease-in-out duration-300",enterFromClass:"opacity-0 translate-y-4 scale-95 blur-4",enterToClass:"opacity-100 translate-y-0 scale-100 blur-0",leaveActiveClass:"ease-in-out duration-300",leaveFromClass:"opacity-100 translate-y-0 scale-100 blur-0",leaveToClass:"opacity-0 translate-y-4 scale-95 blur-4"}),r=c(()=>{let e=!0;return i.menu.children?i.menu.children.every(s=>{var l;return((l=s.meta)==null?void 0:l.menu)===!1})&&(e=!1):e=!1,e});function P(){v.value||t.isMenuPopup&&r.value||(r.value?t.handleSubMenuClick(d,i.uniqueKey):t.handleMenuItemClick(d))}let o;function E(){t.isMenuPopup&&(t.mouseInMenu=i.uniqueKey,o==null||o(),{stop:o}=H(()=>{if(r.value)t.openMenu(d,i.uniqueKey),z(()=>{var u;const e=(u=h.value)==null?void 0:u.ref;if(!e)return;let s=0,l=0;t.props.mode==="vertical"||i.level!==0?(s=e.getBoundingClientRect().top+e.scrollTop,l=(t.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right)+e.getBoundingClientRect().width,s+a.value.getElement().offsetHeight>window.innerHeight&&(s=window.innerHeight-a.value.getElement().offsetHeight)):(s=e.getBoundingClientRect().top+e.getBoundingClientRect().height,l=t.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right,s+a.value.getElement().offsetHeight>window.innerHeight&&(a.value.getElement().style.height=`${window.innerHeight-s}px`)),l+a.value.getElement().offsetWidth>document.documentElement.clientWidth&&(l=(t.props.direction==="ltr"?e.getBoundingClientRect().left:document.documentElement.clientWidth-e.getBoundingClientRect().right)-e.getBoundingClientRect().width),a.value.getElement().style.top=`${s}px`,a.value.getElement().style.insetInlineStart=`${l}px`});else{const e=i.menu.children?t.subMenus[d].indexPath.at(-1):t.items[d].indexPath.at(-1);t.openMenu(e,t.subMenus[e].indexPath)}},300))}function B(){t.isMenuPopup&&(t.mouseInMenu=[],o==null||o(),{stop:o}=H(()=>{t.mouseInMenu.length===0?t.closeMenu(i.uniqueKey):r.value&&!t.mouseInMenu.includes(i.uniqueKey.at(-1))&&t.closeMenu(i.uniqueKey.at(-1))},300))}return(e,s)=>{const l=I("SubMenu");return p(),f(g,null,[m(J,{ref_key:"itemRef",ref:h,"unique-key":e.uniqueKey,item:e.menu,level:e.level,"sub-menu":n(r),expand:n(y),"always-expand":n(v),onClick:P,onMouseenter:E,onMouseleave:B},null,8,["unique-key","item","level","sub-menu","expand","always-expand"]),n(r)?(p(),b(A,{key:0,to:"body",disabled:!n(t).isMenuPopup},[m(O,L(n(q),N(n(k))),{default:w(()=>[S(m(n($),{ref_key:"subMenuRef",ref:a,options:{scrollbars:{visibility:"hidden"}},defer:"",class:W(["sub-menu static",{"bg-[var(--g-sub-sidebar-bg)]":n(t).isMenuPopup,"ring-1 ring-stone-2 dark-ring-stone-8 shadow-xl fixed! z-3000 w-[200px]":n(t).isMenuPopup,"mx-1":n(t).isMenuPopup&&(n(t).props.mode==="vertical"||e.level!==0),"py-1":n(t).isMenuPopup,"rounded-lg":n(t).props.rounded}])},{default:w(()=>[(p(!0),f(g,null,_(e.menu.children,u=>{var M;return p(),f(g,{key:u.path??JSON.stringify(u)},[((M=u.meta)==null?void 0:M.menu)!==!1?(p(),b(l,{key:0,"unique-key":[...e.uniqueKey,u.path??JSON.stringify(u)],menu:u,level:e.level+1},null,8,["unique-key","menu","level"])):x("",!0)],64)}),128))]),_:1},8,["class"]),[[F,n(y)]])]),_:1},16)],8,["disabled"])):x("",!0)],64)}}});export{Q as _};