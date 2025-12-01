
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,aV as c,V as p,ab as f,e as o,c as V,o as n,A as i,B as b,p as x,ao as v,ap as g,l as k}from"./index-COkggZqL.js";const B=u({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(l,{emit:s}){const e=l,a=c(e,"modelValue",s,{passive:!0,defaultValue:e.defaultValue});return(t,d)=>p((n(),V("textarea",{"onUpdate:modelValue":d[0]||(d[0]=m=>x(a)?a.value=m:null),class:i(o(b)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[f,o(a)]])}}),_=u({name:"FaTextarea",__name:"index",props:v({disabled:{type:Boolean},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const s=l,e=g(l,"modelValue");return(r,a)=>(n(),k(o(B),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=t=>e.value=t),disabled:l.disabled,class:i(s.class)},null,8,["modelValue","disabled","class"]))}});export{_};
