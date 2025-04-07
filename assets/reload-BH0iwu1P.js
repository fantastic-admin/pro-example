
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,r as c,G as t,f as _,g as V,h as n,a8 as x,j as a,i as E,n as g,l as B,C,a7 as k,V as l}from"./index-CkXBA4BI.js";import{u as P}from"./useMainPage-CaUPwiU4.js";import"./useTabbar-BNv_7Pa-.js";const v=f({name:"FeatureExampleReload",__name:"reload",setup(F){const s=P(),o=c("");function r(){s.reload()}return(N,e)=>{const u=x,m=t("ElInput"),i=t("ElButton"),p=k;return V(),_("div",null,[n(u,{title:"主页面刷新",description:"重新渲染当前页面"}),n(p,null,{default:a(()=>[e[2]||(e[2]=E("p",null,"该特性无视页面缓存，意味着即便当前页面开启了页面缓存，手动刷新也会强制清除当前页面内的组件和数据的状态。",-1)),n(m,{modelValue:B(o),"onUpdate:modelValue":e[0]||(e[0]=d=>g(o)?o.value=d:null)},null,8,["modelValue"]),n(i,{onClick:r},{default:a(()=>e[1]||(e[1]=[C(" 刷新 ")])),_:1})]),_:1})])}}});typeof l=="function"&&l(v);export{v as default};
