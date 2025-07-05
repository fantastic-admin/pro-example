
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as g,G as w,I as x,b6 as b,b2 as v,a9 as I,$ as P,aB as S,e as r,f as i,N as T,O as k,P as L,k as a,g as u,w as p,T as R,i as B,h as d,v as m,M as C,S as M}from"./index-BLSV4yIg.js";import{u as V}from"./useMainPage-DRQ_7lzc.js";import"./useTabbar-CEUTi0y7.js";const z={class:"iframe-view absolute left-0 top-0 h-full w-full flex flex-col"},N=["data-path","src"],y={class:"absolute left-0 top-0 h-full w-full flex-center bg-popover/75"},E=g({name:"IframeView",__name:"iframe",setup(F){const o=w(),f=x(),n=b(),{setCustomTitle:h}=V(),{generateI18nTitle:_}=v(),c=I("iframeRef");return P(()=>o.fullPath,t=>{S(()=>{c.value?.forEach(l=>{if(l.dataset.path===t){const s=n.openedList.find(e=>e.path===t)?.title;s&&h(_(s)),l.onload=()=>{n.closeLoading(t)}}})})},{immediate:!0}),(t,l)=>{const s=C;return i(),r("div",z,[(i(!0),r(T,null,k(a(n).openedList,e=>(i(),r("div",{key:e.path,class:L(["absolute left-0 top-0 h-full w-full flex flex-col",{"z-1":a(o).fullPath===e.path}])},[u(R,{name:a(f).settings.mainPage.enableTransition?a(f).settings.mainPage.transitionMode:"",mode:"out-in",appear:""},{default:B(()=>[p(d("iframe",{ref_for:!0,ref_key:"iframeRef",ref:c,"data-path":e.path,src:e.src,frameborder:"0",class:"h-full w-full flex-1"},null,8,N),[[m,a(o).fullPath===e.path]])]),_:2},1032,["name"]),p(d("div",y,[u(s,{name:"i-line-md:loading-twotone-loop",class:"size-10"})],512),[[m,e.isLoading]])],2))),128))])}}}),O=M(E,[["__scopeId","data-v-0e759187"]]);export{O as default};
