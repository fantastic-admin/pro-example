
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as n,bv as c,w as p,bw as f,k as o,e as b,f as r,Q as i,ad as V,m as v,aA as x,aB as g,K as k}from"./index-DQdGVpLy.js";const _=n({__name:"Textarea",props:{class:{},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(l,{emit:s}){const e=l,a=c(e,"modelValue",s,{passive:!0,defaultValue:e.defaultValue});return(d,u)=>p((r(),b("textarea",{"onUpdate:modelValue":u[0]||(u[0]=m=>v(a)?a.value=m:null),class:i(o(V)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[f,o(a)]])}}),B=n({name:"FaTextarea",__name:"index",props:x({disabled:{type:Boolean},class:{}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const s=l,e=g(l,"modelValue");return(t,a)=>(r(),k(o(_),{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=d=>e.value=d),disabled:t.disabled,class:i(s.class)},null,8,["modelValue","disabled","class"]))}});export{B as _};
