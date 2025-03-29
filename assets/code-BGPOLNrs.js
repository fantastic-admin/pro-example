
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as g,J as w,u as F,b3 as $,f as C,g as r,R as m,l as e,ae as u,i as l,L as B,M as N,C as p,k as f,j as k,h as a,N as S,D as V,U as z,a9 as I,a8 as D,V as y}from"./index-Dpu-vvoM.js";const M={class:"w-full overflow-auto whitespace-pre-line"},P={class:"whitespace-pre",tabindex:"0"},h=g({__name:"index",props:{code:{}},setup(n){const t=w(),{t:d}=F(),{copy:c,copied:s,isSupported:i}=$();return(_,o)=>{const x=S,v=V;return r(),C("div",{class:m(e(u)("group relative w-full rounded-lg bg-dark p-4 text-light",{"bg-dark":e(t).mode==="mobile"}))},[l("pre",M,[o[1]||(o[1]=p("      ")),l("code",P,f(_.code),1),o[2]||(o[2]=p(`
    `))]),e(i)?(r(),B(v,{key:0,variant:"secondary",class:m(e(u)("border border-light/20 px-2.5",{"absolute end-3 top-3 opacity-0 transition-opacity group-hover:opacity-100":e(t).mode==="pc","w-full mt-4":e(t).mode==="mobile"})),onClick:o[0]||(o[0]=L=>e(c)(_.code))},{default:k(()=>[p(f(e(s)?e(d)("copied"):"")+" ",1),a(x,{name:e(s)?"i-tabler:clipboard-check":"i-tabler:clipboard",class:"size-4"},null,8,["name"])]),_:1},8,["class"])):N("",!0)],2)}}});function b(n){const t=n;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{"zh-cn":{copied:{type:0,body:{type:2,items:[{type:3}],static:"已复制"}}},"zh-tw":{copied:{type:0,body:{type:2,items:[{type:3}],static:"已複製"}}},en:{copied:{type:0,body:{type:2,items:[{type:3}],static:"Copied"}}}}})}typeof b=="function"&&b(h);const j=z(h,[["__scopeId","data-v-ca403f97"]]),E={class:"flex gap-4"},H=`<FaCard title="卡片标题" description="卡片描述" class="w-80">
  卡片内容
  <template #footer>
    卡片底部
  </template>
</FaCard>`,J=g({__name:"code",setup(n){return(t,d)=>{const c=I,s=j,i=D;return r(),C("div",null,[a(c,{title:"代码块",description:"FaCode"}),a(i,{title:"轻量级代码块，不依赖任何第三方库"},{default:k(()=>[l("div",E,[a(s,{code:H,class:"flex-1"})])]),_:1})])}}});typeof y=="function"&&y(J);export{J as default};
