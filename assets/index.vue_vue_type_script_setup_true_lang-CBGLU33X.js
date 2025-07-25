
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,J as l,e as s,f as a,P as u,k as r,L as i,h as d,g as m,j as t,M as _}from"./index-DODNO_Fi.js";const x={key:0,class:"prefix"},y={class:"text"},h={key:1,class:"suffix"},B=f({name:"FaTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(p){const n=p,o=l(()=>{let e=n.type==="up";return n.reverse&&(e=!e),e});return(e,k)=>{const c=_;return a(),s("div",{class:u(["flex items-center transition",`${r(o)?"c-green":"c-red"}`])},[e.prefix?(a(),s("span",x,t(e.prefix),1)):i("",!0),d("span",y,t(e.value),1),e.suffix?(a(),s("span",h,t(e.suffix),1)):i("",!0),m(c,{name:"i-ep:caret-top",rotate:r(o)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}});export{B as _};
