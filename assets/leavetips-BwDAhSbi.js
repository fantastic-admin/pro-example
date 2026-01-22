
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,n as u,aP as f,r as _,c as p,o as d,g as a,am as v,w,p as x,e as k,j as B,aa as C,k as n}from"./index-H6QnEWHf.js";const F=m({__name:"leavetips",setup(V){const e=u(!0),s=C();return f((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=v,c=_("ElSwitch"),i=B;return d(),p("div",null,[a(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),a(i,null,{default:w(()=>[a(c,{modelValue:k(e),"onUpdate:modelValue":o[0]||(o[0]=r=>x(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof n=="function"&&n(F);export{F as default};
