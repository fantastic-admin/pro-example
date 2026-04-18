
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a,x as o}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as s,bt as c}from"./components-CNfuk_zw.js";import{n as l}from"./vue-i18n.runtime-BkMmoySD.js";import{t as u}from"./_demo1-CScgG7rR.js";import{t as d}from"./_demo2-BDdrFlGa.js";import{t as f}from"./_demo3-xhCGJ_7F.js";var p=`<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Default 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" />
        <FaTrend value="12.3%" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Filled 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="+12.3%" variant="filled" />
        <FaTrend value="-12.3%" variant="filled" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Soft 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" variant="soft" />
        <FaTrend value="12.3%" variant="soft" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Outline 风格
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" variant="outline" />
        <FaTrend value="12.3%" variant="outline" type="down" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        尺寸对比
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="12.3%" size="small" />
        <FaTrend value="12.3%" size="medium" />
        <FaTrend value="12.3%" size="large" />
      </div>
    </div>
  </div>
</template>
`,m=`<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        Reverse 模式（用于成本、错误率等下降是好事的场景）
      </p>
      <div class="flex gap-2 items-center">
        <FaTrend value="错误率 -12.3%" type="down" reverse variant="filled" />
        <FaTrend value="成本节省 15%" type="down" reverse variant="soft" prefix="↓" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        不同风格对比
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="12.3%" reverse />
        <FaTrend value="12.3%" reverse variant="filled" />
        <FaTrend value="12.3%" reverse variant="soft" />
        <FaTrend value="12.3%" reverse variant="outline" />
      </div>
    </div>
  </div>
</template>
`,h=`<template>
  <div class="space-y-4">
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        前缀和后缀
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="12.3" prefix="$" variant="soft" />
        <FaTrend value="12.3" suffix="%" variant="soft" />
        <FaTrend value="1,234" prefix="¥" variant="outline" />
        <FaTrend value="45.6" suffix="kg" variant="outline" />
      </div>
    </div>
    <div>
      <p class="text-sm text-muted-foreground mb-2">
        组合使用
      </p>
      <div class="flex flex-wrap gap-2 items-center">
        <FaTrend value="2,345" prefix="$" suffix=".00" variant="filled" />
        <FaTrend value="98.5" suffix="%" variant="filled" />
        <FaTrend value="+123" prefix="↑" variant="soft" />
        <FaTrend value="-45" prefix="↓" variant="soft" type="down" />
      </div>
    </div>
  </div>
</template>
`,g=e({__name:`index`,setup(e){let{t:g}=l();return(e,l)=>{let _=s,v=c;return r(),a(`div`,null,[n(_,{title:t(g)(`route.component.trend`)},{description:i(()=>[...l[0]||(l[0]=[o(`div`,{class:`space-y-2`},[o(`p`,null,`FaTrend`),o(`p`,null,`标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外`)],-1)])]),_:1},8,[`title`]),n(v,{code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(v,{title:`颜色反转`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(v,{title:`前缀后缀`,code:t(h)},{default:i(()=>[n(f)]),_:1},8,[`code`])])}}});export{g as default};