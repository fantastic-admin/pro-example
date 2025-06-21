
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as m}from"./index.vue_vue_type_script_setup_true_lang-iFov3akP.js";import{d as s,f as c,g as l,h as e,a8 as p,j as n,l as t,V as o}from"./index-Dv6GDtcN.js";import r from"./_demo1-fkvcRhby.js";import d from"./_demo2-DH7vRbUt.js";import f from"./_demo3-BRmRH6w2.js";import _ from"./_demo4-G_bEtl7H.js";import"./index-DNIjrW4p.js";import"./logo-A4CMGNjt.js";const g=`<template>
  <FaPageMain>
    PageMain 是最常用的页面组件，几乎所有页面都会使用到
  </FaPageMain>
</template>
`,u=`<template>
  <FaPageMain title="你可以设置一个自定义的标题">
    这里放页面内容
  </FaPageMain>
</template>
`,F=`<template>
  <FaPageMain>
    <template #title>
      <div class="flex-center-between">
        通过 slot 设置标题
        <FaButton variant="outline" size="sm">
          还可以放置自定义按钮
        </FaButton>
      </div>
    </template>
    这里放页面内容
  </FaPageMain>
</template>
`,P=`<template>
  <FaPageMain title="带展开/收起功能" collaspe height="100px">
    <div class="space-y-4">
      <h1 class="text-4xl font-bold">
        Fantastic-admin
      </h1>
      <img src="@/assets/images/logo.svg" class="w-20">
      <p>用过的人都说好！！！</p>
    </div>
  </FaPageMain>
</template>
`,M=s({__name:"index",setup(v){return(w,x)=>{const i=p,a=m;return l(),c("div",null,[e(i,{title:"内容块",description:"FaPageMain"}),e(a,{code:t(g)},{default:n(()=>[e(r)]),_:1},8,["code"]),e(a,{code:t(u)},{default:n(()=>[e(d)]),_:1},8,["code"]),e(a,{code:t(F)},{default:n(()=>[e(f)]),_:1},8,["code"]),e(a,{code:t(P)},{default:n(()=>[e(_)]),_:1},8,["code"])])}}});typeof o=="function"&&o(M);export{M as default};
