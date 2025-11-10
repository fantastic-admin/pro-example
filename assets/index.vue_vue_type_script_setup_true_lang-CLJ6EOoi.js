
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as f,M as u,c as s,o as a,n as p,a as c,O as i,l as d,k as m,p as n,P as x}from"./index-B13-Jify.js";const _={key:0,class:"prefix"},y={class:"text"},k={key:1,class:"suffix"},B=f({name:"FaTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(e){const o=e,r=u(()=>{let t=o.type==="up";return o.reverse&&(t=!t),t});return(t,v)=>{const l=x;return a(),s("div",{class:p(["flex items-center transition","".concat(c(r)?"c-green":"c-red")])},[e.prefix?(a(),s("span",_,n(e.prefix),1)):i("",!0),d("span",y,n(e.value),1),e.suffix?(a(),s("span",k,n(e.suffix),1)):i("",!0),m(l,{name:"i-ep:caret-top",rotate:c(r)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}});export{B as _};
