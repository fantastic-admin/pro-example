
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,J as f,e as p,f as u,h as a,ah as d,P as r,k as e,ad as s,g as m,i as h,b4 as b}from"./index-DOTJNdHl.js";const v={class:"[backface-visibility:hidden] absolute size-full overflow-hidden border rounded-2xl bg-card"},k=c({name:"FaFlipCard",__name:"index",props:{rotate:{default:"y"},class:{}},setup(n){const o=n,t=f(()=>({x:["group-hover/flipcard:[transform:rotateX(180deg)]","[transform:rotateX(180deg)]"],y:["group-hover/flipcard:[transform:rotateY(180deg)]","[transform:rotateY(180deg)]"]})[o.rotate]);return(l,_)=>{const i=b;return u(),p("div",{class:r(e(s)("group/flipcard h-72 w-56 [perspective:1000px]",o.class))},[a("div",{class:r(e(s)("relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",e(t)[0]))},[a("div",v,[d(l.$slots,"default")]),a("div",{class:r(e(s)("[backface-visibility:hidden] absolute size-full overflow-hidden border rounded-2xl bg-card",e(t)[1]))},[m(i,{scrollbar:!1,mask:"",class:"h-full"},{default:h(()=>[d(l.$slots,"back")]),_:3})],2)],2)],2)}}});export{k as _};
