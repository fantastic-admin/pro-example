
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-DH61lGxQ.js";import{t as u}from"./_demo2-BeptU18m.js";var d=`<script setup lang="ts">
function handleClick(text: string) {
  faToast(text)
}
<\/script>

<template>
  <FaContextMenu
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
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,f=`<script setup lang="ts">
function handleClick(text: string) {
  faToast(text)
}
<\/script>

<template>
  <FaContextMenu
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
    <div class="text-sm border rounded-md border-dashed flex h-[150px] w-[300px] items-center justify-center">
      <FaIcon name="i-hugeicons:mouse-right-click-06" class="op-50 size-12" />
    </div>
  </FaContextMenu>
</template>
`,p=e({__name:`index`,setup(e){let{t:p}=c();return(e,c)=>{let m=o,h=s;return r(),a(`div`,null,[n(m,{title:t(p)(`route.component.contextMenu`),description:`FaContextMenu`},null,8,[`title`]),n(h,{code:t(d)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(h,{title:`嵌套`,code:t(f)},{default:i(()=>[n(u)]),_:1},8,[`code`])])}}});export{p as default};