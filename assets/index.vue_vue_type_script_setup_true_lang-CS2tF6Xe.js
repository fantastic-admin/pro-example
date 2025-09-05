
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,M as f,c as s,o as a,n as u,a as r,O as i,l as d,k as m,p as t,P as _}from"./index-CngbNVLW.js";const x={key:0,class:"prefix"},y={class:"text"},k={key:1,class:"suffix"},B=l({name:"FaTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(p){const n=p,o=f(()=>{let e=n.type==="up";return n.reverse&&(e=!e),e});return(e,v)=>{const c=_;return a(),s("div",{class:u(["flex items-center transition","".concat(r(o)?"c-green":"c-red")])},[e.prefix?(a(),s("span",x,t(e.prefix),1)):i("",!0),d("span",y,t(e.value),1),e.suffix?(a(),s("span",k,t(e.suffix),1)):i("",!0),m(c,{name:"i-ep:caret-top",rotate:r(o)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}});export{B as _};
