
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,St as t,yt as n}from"./reactivity.esm-bundler-DQLEWij_.js";import{g as r,k as i,mt as a,qt as o,v as s,xt as c}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{un as l}from"./src-XafWzjth.js";import{t as u}from"./motion-CDQXWAK6.js";var d=i({name:`BuiltInTextShiny`,__name:`index`,props:{duration:{default:1.5},delay:{default:1.5},class:{type:[Boolean,null,String,Object,Array]}},setup(i){let d=i,f=r(()=>({WebkitTextFillColor:`transparent`,backgroundColor:`currentColor`,backgroundImage:`linear-gradient(to right, currentColor 0%, var(--shimmer-contrast) 40%, var(--shimmer-contrast) 60%, currentColor 100%)`,WebkitBackgroundClip:`text`,backgroundClip:`text`,backgroundRepeat:`no-repeat`,backgroundSize:`50% 200%`})),p=r(()=>({duration:d.duration,delay:d.delay,repeat:1/0,repeatDelay:1.5,ease:`linear`}));return(r,i)=>(a(),s(e(u),{as:`span`,class:n(e(l)(`inline-block [--shimmer-contrast:rgba(255,255,255,0.6)] dark:[--shimmer-contrast:rgba(0,0,0,0.5)]`,d.class)),style:t(f.value),initial:{backgroundPositionX:`250%`},animate:{backgroundPositionX:[`-100%`,`250%`]},transition:p.value},{default:o(()=>[c(r.$slots,`default`)]),_:3},8,[`class`,`style`,`transition`]))}});export{d as t};