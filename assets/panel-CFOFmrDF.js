
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as _,v as h,x as y,b2 as b,J as w,a as C,L as P,o as n,l as r,e as i,f as t,F as m,c,n as x,g as d,w as I,W as S,t as R,i as $,P as z,Q as B,h as v,aD as D,_ as F,y as N}from"./index-D4ACN76T.js";import{S as V}from"./sortable.esm-Cw1ESr5Y.js";const A={class:"favorites-container w-80"},T={class:"flex items-center justify-between px-4 py-3"},j=["title","onClick"],H={class:"name flex-1 truncate pe-4"},L={class:"right-1 h-5 w-6 rounded-full text-stone-3 !absolute dark-text-stone-7 hover-text-stone-7 dark-hover-text-stone-3"},M={key:1,flex:"center col","py-6":"","text-stone-5":""},E={"m-0":"","flex-center":"","text-sm":"","op-75":""},J=_({name:"FavoritesPanel",__name:"panel",setup(Q){const l=h(),g=y(),s=b(),{generateI18nTitle:f}=w(),p=C("favoritesContainerRef");return P(()=>p.value,u=>{u&&new V(u,{animation:200,ghostClass:"draggable-ghost",draggable:".draggable-item",onUpdate:e=>{e.newIndex!==void 0&&e.oldIndex!==void 0&&s.sort(e.newIndex,e.oldIndex)}})}),(u,e)=>{const a=F;return n(),r("div",A,[i("div",T,[e[2]||(e[2]=i("div",{class:"text-sm font-bold"}," 我的收藏夹 ",-1)),t(s).canAdd(t(l).fullPath)?(n(),r(m,{key:0},[t(s).isAdd(t(l).fullPath)?(n(),c(a,{key:1,class:"cursor-pointer text-xl",name:"i-mdi:star-remove",title:"从收藏夹删除",onClick:e[1]||(e[1]=o=>t(s).remove(t(l).fullPath))})):(n(),c(a,{key:0,class:"cursor-pointer text-xl",name:"i-mdi:star-plus-outline",title:"添加到收藏夹",onClick:e[0]||(e[0]=o=>t(s).add(t(l)))}))],64)):x("",!0)]),d(t(D),{options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"max-h-220px"},{default:I(()=>[t(s).list.length>0?(n(),r("div",{key:0,ref_key:"favoritesContainerRef",ref:p,class:"flex flex-wrap items-center justify-between gap-2 px-4 pb-4"},[(n(!0),r(m,null,S(t(s).list,o=>(n(),r("div",{key:o.fullPath,title:t(f)(o.title),class:"draggable-item relative w-[calc(50%-0.25rem)] flex cursor-pointer items-center gap-1 rounded px-2 py-2 ring-1 ring-stone-3 ring-inset hover-bg-stone-1 dark-ring-stone-7 dark-hover-bg-dark/50",onClick:k=>t(g).push(o.fullPath)},[o.icon?(n(),c(a,{key:0,name:o.icon,size:18},null,8,["name"])):x("",!0),i("div",H,R(t(f)(o.title)),1),i("div",L,[d(a,{name:"i-ep:delete",size:14,onClick:$(k=>t(s).remove(o.fullPath),["stop"])},null,8,["onClick"])])],8,j))),128))],512)):(n(),r("div",M,[d(a,{name:"i-tabler:mood-empty",size:40}),e[5]||(e[5]=i("p",{"m-2":"","text-base":""}," 收藏夹是空的 ",-1)),z(i("p",E,[e[3]||(e[3]=v(" 点击右上角 ")),d(a,{name:"i-mdi:star-plus-outline",size:20,"mx-1":"","text-stone-6":"","dark-text-stone-4":""}),e[4]||(e[4]=v(" 将当前页面添加到收藏夹 "))],512),[[B,t(s).canAdd(t(l).fullPath)]])]))]),_:1})])}}}),q=N(J,[["__scopeId","data-v-933cf451"]]);export{q as default};