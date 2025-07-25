
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,r as m,W as u,E as _,e as p,f as d,g as a,a7 as v,i as x,m as k,k as w,a6 as B,bN as C,U as n}from"./index-DODNO_Fi.js";const E=f({__name:"leavetips",setup(F){const e=m(!0),s=C();return u((l,o,t)=>{e.value?s.confirm({title:"温馨提醒",content:"当前页面还没有保存，是否确定要离开？",confirmButtonText:"确定离开",onConfirm:()=>{t()}}):t()}),(l,o)=>{const t=v,i=_("ElSwitch"),c=B;return d(),p("div",null,[a(t,{title:"页面离开提醒",description:"在页面离开时，增加弹窗二次确认，避免因误操作导致当前页面数据清空"}),a(c,null,{default:x(()=>[a(i,{modelValue:w(e),"onUpdate:modelValue":o[0]||(o[0]=r=>k(e)?e.value=r:null),"active-text":"开启提醒","inactive-text":"关闭提醒"},null,8,["modelValue"])]),_:1})])}}});typeof n=="function"&&n(E);export{E as default};
