
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,c as s,o as a,z as u,e as c,B as p,b as i,f as d,g as m,t as n,_ as x}from"./index-Bhq0NWKR.js";const _={key:0,class:"prefix"},y={class:"text"},v={key:1,class:"suffix"},k=l({name:"FaTrend",__name:"index",props:{value:{},type:{default:"up"},prefix:{default:""},suffix:{default:""},reverse:{type:Boolean,default:!1}},setup(e){const o=e,r=p(()=>{let t=o.type==="up";return o.reverse&&(t=!t),t});return(t,B)=>{const f=x;return a(),s("div",{class:u(["flex items-center transition","".concat(c(r)?"c-green":"c-red")])},[e.prefix?(a(),s("span",_,n(e.prefix),1)):i("",!0),d("span",y,n(e.value),1),e.suffix?(a(),s("span",v,n(e.suffix),1)):i("",!0),m(f,{name:"i-ep:caret-top",rotate:c(r)?0:180,class:"ml-1 transition"},null,8,["rotate"])],2)}}});export{k as _};
