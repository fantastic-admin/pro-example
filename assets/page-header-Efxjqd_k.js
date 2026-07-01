
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,E as t,Lt as n,Mt as r,Pt as i,S as a,X as o,b as s,it as c,k as l,q as u}from"./vue.runtime.esm-bundler-BVTUj4HC.js";import{rn as d}from"./src-BKeb4UGC.js";var f={class:`text-2xl`},p={class:`text-sm text-secondary-foreground/50 mt-2 empty-hidden`},m=l({name:`BuiltInPageHeader`,__name:`index`,props:{title:{},description:{},class:{type:[Boolean,null,String,Object,Array]},mainClass:{type:[Boolean,null,String,Object,Array]},defaultClass:{type:[Boolean,null,String,Object,Array]}},setup(l){let m=l,h=c();return(c,g)=>(u(),e(`div`,{class:i(r(d)(`mb-4 flex flex-wrap items-center justify-between gap-5 border-b bg-background px-5 py-4`,m.class))},[s(`div`,{class:i(r(d)(`flex-[1_1_70%]`,m.mainClass))},[s(`div`,f,[o(c.$slots,`title`,{},()=>[t(n(l.title),1)])]),s(`div`,p,[o(c.$slots,`description`,{},()=>[t(n(l.description),1)])])],2),h.default?(u(),e(`div`,{key:0,class:i(r(d)(`ml-a flex-none`,m.defaultClass))},[o(c.$slots,`default`)],2)):a(``,!0)],2))}});export{m as t};