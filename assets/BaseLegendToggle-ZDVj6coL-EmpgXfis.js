
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c as a,o as s,f as i,g as l,a4 as d,aG as c,z as g}from"./index-Bhq0NWKR.js";import{s as p,q as u}from"./vue-data-ui-DgR7njeq.js";const m={__name:"BaseLegendToggle",props:{backgroundColor:{type:String,default:"#CCCCCC"},color:{type:String,default:"#2D353C"},fontSize:{type:Number,default:14},checked:{type:Boolean},isCursorPointer:{type:Boolean}},emits:["toggle"],setup(e,{emit:r}){const t=r;return(C,o)=>(s(),a("div",{class:g({"vue-ui-legend-toggle-wrapper":e.isCursorPointer}),"data-dom-to-png-ignore":""},[i("div",{class:"vue-ui-legend-toggle",role:"button",tabindex:"0",onClick:o[0]||(o[0]=n=>t("toggle")),onKeydown:o[1]||(o[1]=c(n=>t("toggle"),["enter"])),style:d({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.backgroundColor,padding:e.fontSize/4+"px"})},[l(u,{name:e.checked?"minus":"check",stroke:e.color,size:e.fontSize*.6,"stroke-width":e.fontSize/4},null,8,["name","stroke","size","stroke-width"])],36)],2))}},y=p(m,[["__scopeId","data-v-7d3908a2"]]);export{y as v};
