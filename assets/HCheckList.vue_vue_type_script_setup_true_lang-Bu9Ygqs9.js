
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,aj as n,ak as m,L as b,o as a,l as t,F as o,W as _,q as p,c as h,h as f,t as g,_ as k}from"./index-D4ACN76T.js";const v={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark-bg-stone-7"},y=["disabled","onClick"],V=u({__name:"HCheckList",props:n({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:n(["change"],["update:modelValue"]),setup(i,{emit:d}){const r=d,l=m(i,"modelValue");return b(l,s=>{r("change",s)}),(s,x)=>{const c=k;return a(),t("div",v,[(a(!0),t(o,null,_(s.options,e=>(a(),t("button",{key:e.value,disabled:s.disabled||e.disabled,class:p(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled-cursor-not-allowed disabled-opacity-50 hover-not-disabled-bg-ui-primary hover-not-disabled-text-ui-text",{"text-ui-text bg-ui-primary":l.value===e.value}]),onClick:C=>l.value=e.value},[e.icon?(a(),h(c,{key:0,name:e.icon},null,8,["name"])):(a(),t(o,{key:1},[f(g(e.label),1)],64))],10,y))),128))])}}});export{V as _};
