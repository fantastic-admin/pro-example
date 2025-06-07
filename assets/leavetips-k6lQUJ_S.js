
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,r as u,X as m,G as _,f as p,g as d,h as a,a8 as v,j as x,n as V,l as h,a7 as w,bO as B,V as n}from"./index-D4ShR5zg.js";const C=f({__name:"leavetips",setup(F){const e=u(!0),s=B();return m((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=v,i=_("ElSwitch"),c=w;return d(),p("div",null,[a(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),a(c,null,{default:x(()=>[a(i,{modelValue:h(e),"onUpdate:modelValue":o[0]||(o[0]=r=>V(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof n=="function"&&n(C);export{C as default};
