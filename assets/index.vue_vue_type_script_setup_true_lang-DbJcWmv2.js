
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,K as l,f as s,g as a,Q as u,l as r,M as i,i as d,h as m,k as t,N as _}from"./index-Cm5PYwOf.js";const x={key:0,class:"prefix"},y={class:"text"},h={key:1,class:"suffix"},B=f({name:"FaTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(p){const n=p,o=l(()=>{let e=n.type==="up";return n.reverse&&(e=!e),e});return(e,k)=>{const c=_;return a(),s("div",{class:u(["flex items-center transition",`${r(o)?"c-green":"c-red"}`])},[e.prefix?(a(),s("span",x,t(e.prefix),1)):i("",!0),d("span",y,t(e.value),1),e.suffix?(a(),s("span",h,t(e.suffix),1)):i("",!0),m(c,{name:"i-ep:caret-top",rotate:r(o)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}});export{B as _};
