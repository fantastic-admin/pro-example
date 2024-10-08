
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,ai as n,aj as m,K as b,o as a,k as t,F as o,V as _,v as p,c as g,g as v,t as f,_ as h}from"./index-DL7SpVKF.js";const k={class:"inline-flex select-none items-center justify-center of-hidden rounded-md bg-stone-3 dark-bg-stone-7"},y=["disabled","onClick"],B=u({__name:"HCheckList",props:n({options:{},disabled:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:n(["change"],["update:modelValue"]),setup(i,{emit:d}){const r=d,l=m(i,"modelValue");return b(l,s=>{r("change",s)}),(s,x)=>{const c=h;return a(),t("div",k,[(a(!0),t(o,null,_(s.options,e=>(a(),t("button",{key:e.value,disabled:s.disabled||e.disabled,class:p(["flex cursor-pointer items-center truncate border-size-0 bg-inherit px-2 py-1.5 text-sm disabled-cursor-not-allowed disabled-opacity-50 hover-not-disabled-bg-ui-primary hover-not-disabled-text-ui-text",{"text-ui-text bg-ui-primary":l.value===e.value}]),onClick:C=>l.value=e.value},[e.icon?(a(),g(c,{key:0,name:e.icon},null,8,["name"])):(a(),t(o,{key:1},[v(f(e.label),1)],64))],10,y))),128))])}}});export{B as _};
