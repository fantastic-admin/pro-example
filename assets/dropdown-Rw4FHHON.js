
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-ChjzYOX8.js";import{t as u}from"./_demo2-BBXKY2lA.js";import{t as d}from"./_demo3-DBf-fJqm.js";var f=`<script setup lang="ts">
function handleClick(text: string) {
  faToast(text)
}
<\/script>

<template>
  <FaDropdown
    :items="[
      [
        { label: 'Open', handle: () => handleClick('Open') },
        { label: 'Edit', icon: 'i-ep:edit', handle: () => handleClick('Edit') },
        { label: 'Copy', disabled: true, handle: () => handleClick('Copy') },
      ],
      [
        { label: 'Delete', variant: 'destructive', handle: () => handleClick('Delete') },
      ],
    ]"
  >
    <FaButton>
      Actions
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,p=`<script setup lang="ts">
function handleClick(text: string) {
  faToast(text)
}
<\/script>

<template>
  <FaDropdown
    :items="[
      [
        { label: 'Open', handle: () => handleClick('Open') },
        {
          label: 'More',
          items: [
            [
              { label: 'Save Page...', handle: () => handleClick('Save Page...') },
            ],
          ],
        },
      ],
    ]"
  >
    <FaButton>
      Actions
      <FaIcon name="i-ep:caret-bottom" />
    </FaButton>
  </FaDropdown>
</template>
`,m=`<script setup lang="ts">
const modal = shallowRef(false)

function handleClick(text: string) {
  faToast(text)
}

const items = [
  [
    { label: 'Preview', icon: 'i-lucide:eye', handle: () => handleClick('Preview') },
    { label: 'Duplicate', icon: 'i-lucide:copy', handle: () => handleClick('Duplicate') },
  ],
  [
    {
      label: 'More',
      items: [
        [
          { label: 'Share', handle: () => handleClick('Share') },
        ],
        [
          { label: 'Delete', variant: 'destructive' as const, handle: () => handleClick('Delete') },
        ],
      ],
    },
  ],
]
<\/script>

<template>
  <div>
    <FaButton @click="modal = true">
      打开
    </FaButton>
    <FaModal
      v-model="modal"
      title="FaModal 中的下拉菜单"
      description="在模态框内容区内触发 FaDropdown"
      :footer="false"
      class="sm:max-w-2xl"
      content-class="min-h-auto"
    >
      <div class="py-6 flex-center">
        <FaDropdown :items="items">
          <FaButton>
            Actions
            <FaIcon name="i-ep:caret-bottom" />
          </FaButton>
        </FaDropdown>
      </div>
    </FaModal>
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.dropdown`),description:`FaDropdown`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`嵌套`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`在 FaModal 里展示`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};