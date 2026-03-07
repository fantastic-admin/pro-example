
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as u,aW as m,W as p,ac as f,e as o,c as b,o as d,z as r,A as V,n as g,ap as x,aq as v,l as y}from"./index-Bhq0NWKR.js";const B=u({__name:"Textarea",props:{class:{type:[Boolean,null,String,Object,Array]},defaultValue:{},modelValue:{}},emits:["update:modelValue"],setup(a,{emit:s}){const e=a,l=m(e,"modelValue",s,{passive:!0,defaultValue:e.defaultValue});return(t,n)=>p((d(),b("textarea",{"onUpdate:modelValue":n[0]||(n[0]=c=>g(l)?l.value=c:null),class:r(o(V)("flex min-h-20 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e.class))},null,2)),[[f,o(l)]])}}),M=u({name:"FaTextarea",__name:"index",props:x({disabled:{type:Boolean},class:{type:[Boolean,null,String,Object,Array]}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const s=a,e=v(a,"modelValue");return(i,l)=>(d(),y(o(B),{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),disabled:a.disabled,class:r(s.class)},null,8,["modelValue","disabled","class"]))}});export{M as _};
