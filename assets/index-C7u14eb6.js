
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang-EgipfE_5.js";import{d as c,e as i,f as m,g as e,i as a,h as t,a7 as p,k as o,U as r}from"./index-De8Oh0HC.js";import f from"./_demo1-Dx1ztJK6.js";import u from"./_demo2-ClQDLYtg.js";import _ from"./_demo3-DkYLg1GC.js";import"./index-CRjmYGFS.js";import"./index.vue_vue_type_script_setup_true_lang-mLYCJdiq.js";const v=`<template>
  <div class="flex flex-col gap-2">
    <FaTrend value="12.3" />
    <FaTrend value="12.3" type="down" />
  </div>
</template>
`,x=`<template>
  <div class="flex flex-col gap-2">
    <FaTrend value="12.3" reverse />
    <FaTrend value="12.3" type="down" reverse />
  </div>
</template>
`,F=`<template>
  <div class="flex flex-col gap-2">
    <FaTrend value="12.3" prefix="$" />
    <FaTrend value="12.3" suffix="%" />
  </div>
</template>
`,w=c({__name:"index",setup(T){return(D,l)=>{const s=p,n=d;return m(),i("div",null,[e(s,{title:"趋势符号"},{description:a(()=>l[0]||(l[0]=[t("div",{class:"space-y-2"},[t("p",null,"FaTrend"),t("p",null,"标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外")],-1)])),_:1}),e(n,{code:o(v)},{default:a(()=>[e(f)]),_:1},8,["code"]),e(n,{title:"颜色反转",code:o(x)},{default:a(()=>[e(u)]),_:1},8,["code"]),e(n,{title:"前缀后缀",code:o(F)},{default:a(()=>[e(_)]),_:1},8,["code"])])}}});typeof r=="function"&&r(w);export{w as default};
