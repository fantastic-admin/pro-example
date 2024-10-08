
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as E}from"./dictionary-CpdP3JL6.js";import{ak as S,r,d as b,aj as x,a as s,o as i,c as p,w as u,f,g as D,k as w,V as B,e as d,F as C,j as N,b as j,t as A}from"./index-DL7SpVKF.js";const F=S("dictionary",()=>{const a=r({});async function l(t){if(!a.value[t]){const n=await E.get(t);a.value[t]=n.data.list}return a.value[t]}return{get:l}}),L=F,U=b({__name:"index",props:{modelValue:{type:Boolean,default:!1},modelModifiers:{}},emits:["update:modelValue"],setup(a){const l=x(a,"modelValue"),t=r([{name:"证件",code:"user_card"},{name:"学历",code:"user_education"}]),n=r(""),y=L(),c=r([]);function v(m){y.get(m).then(e=>{c.value=e})}return(m,e)=>{const V=s("ElAlert"),_=s("ElOption"),g=s("ElSelect"),k=s("ElDialog");return i(),p(k,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value=o),title:"使用示例",width:"400px","close-on-click-modal":!1,"append-to-body":"","destroy-on-close":"",onClosed:e[2]||(e[2]=o=>l.value=!1)},{default:u(()=>[f(V,{closable:!1},{default:u(()=>e[3]||(e[3]=[D(" 如果全局状态中没有该字典，则会请求接口获取并存储在全局状态中。 ")])),_:1}),f(g,{modelValue:d(n),"onUpdate:modelValue":e[0]||(e[0]=o=>N(n)?n.value=o:null),style:{width:"100%"},onChange:v},{default:u(()=>[(i(!0),w(C,null,B(d(t),o=>(i(),p(_,{key:o.code,label:o.name,value:o.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),j("p",null,A(d(c)),1)]),_:1},8,["modelValue"])}}});export{U as _};
