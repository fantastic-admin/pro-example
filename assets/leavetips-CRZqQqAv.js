
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as m,g as u,Y as f,a4 as _,c as p,o as d,k as o,aa as v,m as x,v as k,a as w,a9 as B,bW as C,W as n}from"./index-CphCexG_.js";const F=m({__name:"leavetips",setup(V){const e=u(!0),s=C();return f((l,a,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,a)=>{const t=v,c=_("ElSwitch"),i=B;return d(),p("div",null,[o(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),o(i,null,{default:x(()=>[o(c,{modelValue:w(e),"onUpdate:modelValue":a[0]||(a[0]=r=>k(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof n=="function"&&n(F);export{F as default};
