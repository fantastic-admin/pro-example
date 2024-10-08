
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as r}from"./index.vue_vue_type_script_setup_true_lang--ThJjcg9.js";import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-DWmqi8aT.js";import{d as f,r as _,A as u,a as p,o as d,k as v,f as n,w as x,e as w,j as B,cU as h,y as a}from"./index-DL7SpVKF.js";const g=f({__name:"leavetips",setup(k){const e=_(!0);return u((s,o,t)=>{e.value?h.confirm("当前页面还没有保存，是否确定要离开？","温馨提醒",{confirmButtonText:"确定离开",cancelButtonText:"取消",type:"warning"}).then(()=>{t()}).catch(()=>{}):t()}),(s,o)=>{const t=m,l=p("ElSwitch"),c=r;return d(),v("div",null,[n(t,{title:"页面离开提醒",content:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),n(c,null,{default:x(()=>[n(l,{modelValue:w(e),"onUpdate:modelValue":o[0]||(o[0]=i=>B(e)?e.value=i:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof a=="function"&&a(g);export{g as default};
