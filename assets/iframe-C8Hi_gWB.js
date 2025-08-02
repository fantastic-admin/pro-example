
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as g,G as w,I as x,b7 as b,b3 as v,a9 as I,$ as P,aC as S,e as r,f as i,N as T,O as k,P as C,k as a,g as u,w as p,T as L,i as R,h as d,v as m,M,S as V}from"./index-De8Oh0HC.js";import{u as z}from"./useMainPage-bM_pxkB0.js";import"./useTabbar-tDPw7_O_.js";const B={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},N=["data-path","src"],y={class:"absolute left-0 top-0 h-full w-full flex-center bg-popover/75"},E=g({name:"IframeView",__name:"iframe",setup(F){const o=w(),f=x(),n=b(),{setCustomTitle:h}=z(),{generateI18nTitle:_}=v(),c=I("iframeRef");return P(()=>o.fullPath,t=>{S(()=>{c.value?.forEach(l=>{if(l.dataset.path===t){const s=n.openedList.find(e=>e.path===t)?.title;s&&h(_(s)),l.onload=()=>{n.closeLoading(t)}}})})},{immediate:!0}),(t,l)=>{const s=M;return i(),r("div",B,[(i(!0),r(T,null,k(a(n).openedList,e=>(i(),r("div",{key:e.path,class:C(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(o).fullPath===e.path}])},[u(L,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:R(()=>[p(d("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,N),[[m,a(o).fullPath===e.path]])]),_:2},1032,["name"]),p(d("div",y,[u(s,{name:"i-line-md:loading-twotone-loop",class:"size-10"})],512),[[m,e.isLoading]])],2))),128))])}}}),O=V(E,[["__scopeId","data-v-0e759187"]]);export{O as default};
