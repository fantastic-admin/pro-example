
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-Nx9bjpdv.js";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-CeEQmTy4.js";import{d as _,r as u,X as p,E as d,f as v,g as x,k as n,m as V,l as k,j as w,bO as B,V as a}from"./index-DMc4HI8f.js";const C=_({__name:"leavetips",setup(E){const e=u(!0),s=B();return p((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=f,i=d("ElSwitch"),c=m;return x(),v("div",null,[n(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(c,null,{default:V(()=>[n(i,{modelValue:w(e),"onUpdate:modelValue":o[0]||(o[0]=r=>k(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(C);export{C as default};
