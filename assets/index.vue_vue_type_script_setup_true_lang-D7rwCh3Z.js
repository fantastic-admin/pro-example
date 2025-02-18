
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as k}from"./dictionary-B0ruroFf.js";import{aS as S,r,d as b,a4 as x,l as s,z as p,o as i,g as u,f,b as C,j as B,e as d,i as D,c as w,F as N,C as A,t as F}from"./index-Bbf2k3Iz.js";const L=S("dictionary",()=>{const l=r({});async function a(t){if(!l.value[t]){const n=await k.get(t);l.value[t]=n.data.list}return l.value[t]}return{get:a}}),U=b({__name:"index",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(l){const a=x(l,"modelValue"),t=r([{name:"证件",code:"user_card"},{name:"学历",code:"user_education"}]),n=r(""),y=L(),c=r([]);function v(m){y.get(m).then(e=>{c.value=e})}return(m,e)=>{const V=s("ElAlert"),_=s("ElOption"),g=s("ElSelect"),E=s("ElDialog");return i(),p(E,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),title:"使用示例",width:"400px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":"",onClosed:e[2]||(e[2]=o=>a.value=!1)},{default:u(()=>[f(V,{closable:!1},{default:u(()=>e[3]||(e[3]=[B(" 如果全局状态中没有该字典，则会请求接口获取并存储在全局状态中。 ")])),_:1}),f(g,{modelValue:d(n),"onUpdate:modelValue":e[0]||(e[0]=o=>D(n)?n.value=o:null),style:{width:"100%"},onChange:v},{default:u(()=>[(i(!0),w(N,null,A(d(t),o=>(i(),p(_,{key:o.code,label:o.name,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),C("p",null,F(d(c)),1)]),_:1},8,["modelValue"])}}});export{U as _};
