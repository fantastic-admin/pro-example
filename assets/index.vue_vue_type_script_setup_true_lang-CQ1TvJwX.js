
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as k}from"./dictionary-Cq4U_slW.js";import{aL as x,r,d as B,ae as S,E as s,K as p,g as i,m as u,k as f,h as b,B as C,l as D,j as d,f as w,N,O as L,i as O}from"./index-DMc4HI8f.js";const A=x("dictionary",()=>{const l=r({});async function a(t){if(!l.value[t]){const n=await k.get(t);l.value[t]=n.data.list}return l.value[t]}return{get:a}}),j=B({__name:"index",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(l){const a=S(l,"modelValue"),t=r([{name:"证件",code:"user_card"},{name:"学历",code:"user_education"}]),n=r(""),y=A(),c=r([]);function v(m){y.get(m).then(e=>{c.value=e})}return(m,e)=>{const V=s("ElAlert"),_=s("ElOption"),E=s("ElSelect"),g=s("ElDialog");return i(),p(g,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),title:"使用示例",width:"400px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":"",onClosed:e[2]||(e[2]=o=>a.value=!1)},{default:u(()=>[f(V,{closable:!1},{default:u(()=>e[3]||(e[3]=[C(" 如果全局状态中没有该字典，则会请求接口获取并存储在全局状态中。 ")])),_:1}),f(E,{modelValue:d(n),"onUpdate:modelValue":e[0]||(e[0]=o=>D(n)?n.value=o:null),style:{width:"100%"},onChange:v},{default:u(()=>[(i(!0),w(N,null,L(d(t),o=>(i(),p(_,{key:o.code,label:o.name,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),b("p",null,O(d(c)),1)]),_:1},8,["modelValue"])}}});export{j as _};
