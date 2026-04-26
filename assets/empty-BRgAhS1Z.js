
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-fys_8iWf.js";import{t as u}from"./_demo2-DHVJTRzg.js";import{t as d}from"./_demo3-CSd4HEf1.js";import{t as f}from"./_demo4-CxQ2KcwM.js";var p=`<template>
  <FaEmpty icon="i-lucide:folder-open" title="没有项目" description="您尚未创建任何项目，请从创建第一个项目开始">
    <div class="flex gap-2">
      <FaButton>
        创建项目
      </FaButton>
      <FaButton variant="outline">
        导入项目
      </FaButton>
    </div>
    <FaButton variant="link" class="text-muted-foreground" size="sm">
      了解更多 <FaIcon name="i-lucide:arrow-up-right" />
    </FaButton>
  </FaEmpty>
</template>
`,m=`<template>
  <FaEmpty icon="i-lucide:cloud" title="云盘为空" description="将文件上传到云盘，随时随地访问" class="border border-dashed">
    <FaButton variant="outline" size="sm">
      上传文件
    </FaButton>
  </FaEmpty>
</template>
`,h=`<template>
  <FaEmpty icon="i-lucide:bell" title="无通知" description="您已收到所有通知。新通知将出现在这里" class="h-full from-muted/50 to-transparent from-30% bg-gradient-to-b">
    <FaButton variant="outline" size="sm">
      <FaIcon name="i-lucide:refresh-ccw" />
      刷新
    </FaButton>
  </FaEmpty>
</template>
`,g=`<template>
  <FaEmpty>
    <template #icon>
      <FaAvatar src="https://github.com/hooray.png" class="size-20 grayscale" />
    </template>
    <template #title>
      <div class="text-xl">
        用户离线
      </div>
    </template>
    <template #description>
      <div>该用户目前离线</div>
      <div>您可以留言通知他或稍后再试</div>
    </template>
    <FaButton>
      留言
    </FaButton>
  </FaEmpty>
</template>
`,_=e({__name:`index`,setup(e){let{t:_}=c();return(e,c)=>{let v=o,y=s;return r(),a(`div`,null,[n(v,{title:t(_)(`route.component.empty`),description:`FaEmpty`},null,8,[`title`]),n(y,{code:t(p)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(y,{title:`边框`,code:t(m)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(y,{title:`背景`,code:t(h)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(y,{title:`插槽`,code:t(g)},{default:i(()=>[n(f)]),_:1},8,[`code`])])}}});export{_ as default};