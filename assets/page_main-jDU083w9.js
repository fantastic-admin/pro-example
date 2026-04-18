
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BpXDCvuF.js";import{t as u}from"./_demo2-qdMjfkUi.js";import{t as d}from"./_demo3-2h99riyj.js";import{t as f}from"./_demo4-Dh4cDNGC.js";var p=`<template>
  <FaPageMain>
    PageMain 是最常用的页面组件，几乎所有页面都会使用到
  </FaPageMain>
</template>
`,m=`<template>
  <FaPageMain title="你可以设置一个自定义的标题">
    这里放页面内容
  </FaPageMain>
</template>
`,h=`<template>
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
`,g=`<template>
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
`,_=e({__name:`index`,setup(e){let{t:_}=c();return(e,c)=>{let v=o,y=s;return r(),a(`div`,null,[n(v,{title:t(_)(`route.component.pageMain`),description:`FaPageMain`},null,8,[`title`]),n(y,{code:t(p)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(y,{code:t(m)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(y,{code:t(h)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(y,{code:t(g)},{default:i(()=>[n(f)]),_:1},8,[`code`])])}}});export{_ as default};