
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as C,J as y,u as F,b3 as $,f as k,g as l,R as u,l as e,ae as m,i as p,L as B,M as N,C as r,k as f,j as h,h as a,N as S,D as V,U as z,a9 as I,a8 as D,V as b}from"./index-CsSDrlYc.js";const M={class:"w-full overflow-auto whitespace-pre-line"},P={class:"whitespace-pre",tabindex:"0"},x=C({__name:"index",props:{code:{}},setup(n){const t=y(),{t:d}=F(),{copy:c,copied:s,isSupported:i}=$();return(_,o)=>{const v=S,w=V;return l(),k("div",{class:u(e(m)("group relative w-full rounded-lg bg-dark p-4 text-light",{"bg-dark":e(t).mode==="mobile"}))},[p("pre",M,[o[1]||(o[1]=r("      ")),p("code",P,f(_.code),1),o[2]||(o[2]=r(`
    `))]),e(i)?(l(),B(w,{key:0,variant:"secondary",class:u(e(m)("border border-light/20 px-2.5",{"absolute end-3 top-3 opacity-0 transition-opacity group-hover:opacity-100":e(t).mode==="pc","w-full mt-4":e(t).mode==="mobile"})),onClick:o[0]||(o[0]=L=>e(c)(_.code))},{default:h(()=>[r(f(e(s)?e(d)("copied"):"")+" ",1),a(v,{name:e(s)?"i-tabler:clipboard-check":"i-tabler:clipboard",class:"size-4"},null,8,["name"])]),_:1},8,["class"])):N("",!0)],2)}}});function g(n){const t=n;t.__i18n=t.__i18n||[],t.__i18n.push({locale:"",resource:{"zh-cn":{copied:{t:0,b:{t:2,i:[{t:3}],s:"已复制"}}},"zh-tw":{copied:{t:0,b:{t:2,i:[{t:3}],s:"已複製"}}},en:{copied:{t:0,b:{t:2,i:[{t:3}],s:"Copied"}}}}})}typeof g=="function"&&g(x);const j=z(x,[["__scopeId","data-v-ca403f97"]]),E={class:"flex gap-4"},H=`<FaCard title="卡片标题" description="卡片描述" class="w-80">
  卡片内容
  <template #footer>
    卡片底部
  </template>
</FaCard>`,J=C({__name:"code",setup(n){return(t,d)=>{const c=I,s=j,i=D;return l(),k("div",null,[a(c,{title:"代码块",description:"FaCode"}),a(i,{title:"轻量级代码块，不依赖任何第三方库"},{default:h(()=>[p("div",E,[a(s,{code:H,class:"flex-1"})])]),_:1})])}}});typeof b=="function"&&b(J);export{J as default};
