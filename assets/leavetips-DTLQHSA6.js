
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-DXnSJe_z.js";import{_ as f}from"./index.vue_vue_type_script_setup_true_lang-DgGeXOC9.js";import{d as _,r as u,Y as p,G as d,f as v,g as x,h as n,j as h,n as w,l as B,bR as C,W as a}from"./index-BIIATpY8.js";const F=_({__name:"leavetips",setup(V){const e=u(!0),s=C();return p((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=f,i=d("ElSwitch"),c=m;return x(),v("div",null,[n(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(c,null,{default:h(()=>[n(i,{modelValue:B(e),"onUpdate:modelValue":o[0]||(o[0]=r=>w(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(F);export{F as default};
