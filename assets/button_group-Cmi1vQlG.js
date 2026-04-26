
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-BGii4Pc2.js";import{t as u}from"./_demo2-DVX8COXH.js";import{t as d}from"./_demo3-DkvBdIND.js";import{t as f}from"./_demo4-BZTKeIam.js";import{t as p}from"./_demo5-u1zg0YqC.js";var m=`<template>
  <FaButtonGroup>
    <FaButton>
      <FaIcon name="i-mdi:eye" class="size-4" />
      查看详情
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:pencil" class="size-4" />
      编辑
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:delete" class="size-4" />
      删除
    </FaButton>
  </FaButtonGroup>
</template>
`,h=`<template>
  <FaButtonGroup orientation="vertical">
    <FaButton>
      <FaIcon name="i-mdi:eye" class="size-4" />
      查看详情
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:pencil" class="size-4" />
      编辑
    </FaButton>
    <FaButton>
      <FaIcon name="i-mdi:delete" class="size-4" />
      删除
    </FaButton>
  </FaButtonGroup>
</template>
`,g=`<template>
  <div class="flex flex-col gap-4 items-start">
    <FaButtonGroup separator>
      <FaButton>
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup orientation="vertical" separator>
      <FaButton>
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton>
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
    <p>按钮如果为 outline 则无需设置分割线</p>
    <FaButtonGroup>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:eye" class="size-4" />
        查看详情
      </FaButton>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:pencil" class="size-4" />
        编辑
      </FaButton>
      <FaButton variant="outline">
        <FaIcon name="i-mdi:delete" class="size-4" />
        删除
      </FaButton>
    </FaButtonGroup>
  </div>
</template>
`,_=`<template>
  <FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline">
        1
      </FaButton>
      <FaButton variant="outline">
        2
      </FaButton>
      <FaButton variant="outline">
        3
      </FaButton>
      <FaButton variant="outline">
        4
      </FaButton>
      <FaButton variant="outline">
        5
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:arrow-left" />
      </FaButton>
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:arrow-right" />
      </FaButton>
    </FaButtonGroup>
  </FaButtonGroup>
</template>
`,v=`<script setup lang="ts">
const currency = ref('CNY')
<\/script>

<template>
  <div class="flex flex-col gap-4 items-start">
    <FaButtonGroup>
      <FaInput />
      <FaButton variant="outline" size="icon">
        <FaIcon name="i-ep:search" />
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaSelect
        v-model="currency"
        :options="[
          { label: '¥', value: 'CNY' },
          { label: '$', value: 'USD' },
          { label: '€', value: 'EUR' },
        ]"
        class="gap-1 w-inherit"
      />
      <FaInput placeholder="10.00" />
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline">
        关注
      </FaButton>
      <FaDropdown
        :items="[
          [
            { label: '加入黑名单' },
            { label: '分享到群聊' },
            { label: '反馈举报' },
          ],
          [
            { label: '取消关注' },
          ],
        ]"
      >
        <FaButton variant="outline" size="icon">
          <FaIcon name="i-ep:caret-bottom" />
        </FaButton>
      </FaDropdown>
    </FaButtonGroup>
  </div>
</template>
`,y=e({__name:`index`,setup(e){let{t:y}=c();return(e,c)=>{let b=o,x=s;return r(),a(`div`,null,[n(b,{title:t(y)(`route.component.buttonGroup`),description:`FaButtonGroup`},null,8,[`title`]),n(x,{code:t(m)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(x,{title:`垂直`,code:t(h)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(x,{title:`分割线`,code:t(g)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(x,{title:`嵌套`,code:t(_)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(x,{title:`与其他组件组合`,code:t(v)},{default:i(()=>[n(p)]),_:1},8,[`code`])])}}});export{y as default};