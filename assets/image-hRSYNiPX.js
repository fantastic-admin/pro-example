
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{d as B,r,b as d,o as $,l as z,g as t,w as n,e,f as l,h as a,k as v,_ as b,G as I,z as g}from"./index-D4ACN76T.js";import{_ as U}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";const G={class:"space-x-2"},L=B({__name:"image",setup(M){const m=r("https://picsum.photos/50");function V(){m.value="",m.value=`https://picsum.photos/50?random=${Math.random()}`}const C=new URL(""+new URL("logo-CLz_KCqM.png",import.meta.url).href,import.meta.url).href,s=r(),u=r(0);return(N,o)=>{const E=U,f=b,_=I,i=d("ElRadioButton"),R=d("ElRadioGroup"),k=d("ElSlider"),w=x;return $(),z("div",null,[t(E,{title:"Image Icon",content:"可以使用本地或网络图片"}),t(w,null,{default:n(()=>[o[11]||(o[11]=e("p",null,"网络图片",-1)),t(f,{name:l(m),size:48,flip:l(s),rotate:l(u)},null,8,["name","flip","rotate"]),e("div",G,[t(_,{onClick:V},{default:n(()=>o[3]||(o[3]=[a(" 更改图片 ")])),_:1}),t(_,{onClick:o[0]||(o[0]=p=>m.value="")},{default:n(()=>o[4]||(o[4]=[a(" 创建错误 ")])),_:1})]),o[12]||(o[12]=e("p",null,"本地图片",-1)),t(f,{name:l(C),size:48,flip:l(s),rotate:l(u)},null,8,["name","flip","rotate"]),e("div",null,[o[9]||(o[9]=e("p",null,"翻转：",-1)),t(R,{modelValue:l(s),"onUpdate:modelValue":o[1]||(o[1]=p=>v(s)?s.value=p:null)},{default:n(()=>[t(i,{value:""},{default:n(()=>o[5]||(o[5]=[a(" 无 ")])),_:1}),t(i,{value:"horizontal"},{default:n(()=>o[6]||(o[6]=[a(" 水平翻转 ")])),_:1}),t(i,{value:"vertical"},{default:n(()=>o[7]||(o[7]=[a(" 垂直翻转 ")])),_:1}),t(i,{value:"both"},{default:n(()=>o[8]||(o[8]=[a(" 水平垂直翻转 ")])),_:1})]),_:1},8,["modelValue"]),o[10]||(o[10]=e("p",null,"旋转：",-1)),t(k,{modelValue:l(u),"onUpdate:modelValue":o[2]||(o[2]=p=>v(u)?u.value=p:null),min:0,max:360,style:{width:"50%"}},null,8,["modelValue"])])]),_:1})])}}});typeof g=="function"&&g(L);export{L as default};