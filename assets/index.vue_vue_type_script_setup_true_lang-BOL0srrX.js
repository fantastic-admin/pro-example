
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as E}from"./dictionary-DT-73YUi.js";import{al as b,r,d as x,ak as S,b as s,o as u,c as p,w as d,g as f,h as w,l as B,W as C,f as i,F as D,k as N,e as A,t as F}from"./index-D4ACN76T.js";const L=b("dictionary",()=>{const l=r({});async function a(t){if(!l.value[t]){const n=await E.get(t);l.value[t]=n.data.list}return l.value[t]}return{get:a}}),U=x({__name:"index",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(l){const a=S(l,"modelValue"),t=r([{name:"证件",code:"user_card"},{name:"学历",code:"user_education"}]),n=r(""),y=L(),c=r([]);function v(m){y.get(m).then(e=>{c.value=e})}return(m,e)=>{const V=s("ElAlert"),_=s("ElOption"),g=s("ElSelect"),k=s("ElDialog");return u(),p(k,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),title:"使用示例",width:"400px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":"",onClosed:e[2]||(e[2]=o=>a.value=!1)},{default:d(()=>[f(V,{closable:!1},{default:d(()=>e[3]||(e[3]=[w(" 如果全局状态中没有该字典，则会请求接口获取并存储在全局状态中。 ")])),_:1}),f(g,{modelValue:i(n),"onUpdate:modelValue":e[0]||(e[0]=o=>N(n)?n.value=o:null),style:{width:"100%"},onChange:v},{default:d(()=>[(u(!0),B(D,null,C(i(t),o=>(u(),p(_,{key:o.code,label:o.name,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),A("p",null,F(i(c)),1)]),_:1},8,["modelValue"])}}});export{U as _};
