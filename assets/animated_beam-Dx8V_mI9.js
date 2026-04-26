
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-Cb6_ZjET.js";import{t as u}from"./_demo2-12_DXTQM.js";import{t as d}from"./_demo3-BstmhD_E.js";var f=`<script setup lang="ts">
import logo from '@/assets/images/logo.svg'

const containerRef = useTemplateRef('containerRef')
const logoRef = useTemplateRef('logoRef')
const viteRef = useTemplateRef('viteRef')
const vueRef = useTemplateRef('vueRef')
const vueuseRef = useTemplateRef('vueuseRef')
const piniaRef = useTemplateRef('piniaRef')
const unocssRef = useTemplateRef('unocssRef')
const tsRef = useTemplateRef('tsRef')
<\/script>

<template>
  <div ref="containerRef" class="p-10 flex h-100 w-full items-center justify-center relative overflow-hidden">
    <div class="flex flex-col gap-10 size-full max-w-2xl items-stretch justify-between">
      <div class="flex flex-row items-center justify-between">
        <div ref="viteRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:vitejs" class="size-8" />
        </div>
        <div ref="piniaRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:pinia" class="size-8" />
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <div ref="vueRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:vue" class="size-8" />
        </div>
        <div ref="logoRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon :name="logo" class="size-20" />
        </div>
        <div ref="unocssRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:unocss" class="size-8" />
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <div ref="vueuseRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:vueuse" class="size-8" />
        </div>
        <div ref="tsRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:typescript-icon" class="size-8" />
        </div>
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="viteRef"
      :to-ref="logoRef"
      :curvature="-75"
      :end-y-offset="-10"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="vueRef"
      :to-ref="logoRef"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="vueuseRef"
      :to-ref="logoRef"
      :curvature="75"
      :end-y-offset="10"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="piniaRef"
      :to-ref="logoRef"
      :curvature="-75"
      :end-y-offset="-10"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="unocssRef"
      :to-ref="logoRef"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="tsRef"
      :to-ref="logoRef"
      :curvature="75"
      :end-y-offset="10"
    />
  </div>
</template>
`,p=`<script setup lang="ts">
import logo from '@/assets/images/logo.svg'

const containerRef = useTemplateRef('containerRef')
const logoRef = useTemplateRef('logoRef')
const epRef = useTemplateRef('epRef')
const antdvRef = useTemplateRef('antdvRef')
const arcoRef = useTemplateRef('arcoRef')
const naiveRef = useTemplateRef('naiveRef')
const tdesignRef = useTemplateRef('tdesignRef')
const vexipRef = useTemplateRef('vexipRef')
const iduxRef = useTemplateRef('iduxRef')
<\/script>

<template>
  <div ref="containerRef" class="p-10 flex h-100 w-full items-center justify-center relative overflow-hidden">
    <div class="flex flex-col gap-10 size-full max-w-2xl items-stretch justify-between">
      <div class="flex flex-row items-center justify-center">
        <div ref="logoRef" class="p-4 border-2 rounded-12 bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon :name="logo" class="size-20" />
        </div>
      </div>
      <div class="flex flex-row items-end justify-between">
        <div ref="epRef" class="mb-12 p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:element" class="size-8" />
        </div>
        <div ref="antdvRef" class="mb-6 p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:ant-design" class="size-8" />
        </div>
        <div ref="arcoRef" class="mb-2 p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="https://unpkg.byted-static.com/latest/byted/arco-config/assets/favicon.ico" class="size-8" />
        </div>
        <div ref="naiveRef" class="p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="i-logos:naiveui" class="size-8" />
        </div>
        <div ref="tdesignRef" class="mb-2 p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="https://static.tdesign.tencent.com/favicon.ico" class="size-8" />
        </div>
        <div ref="vexipRef" class="mb-6 p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="https://www.vexipui.com/vexip-ui.svg" class="size-8" />
        </div>
        <div ref="iduxRef" class="mb-12 p-3 border-2 rounded-3xl bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
          <FaIcon name="https://idux.site/favicon.ico" class="size-8" />
        </div>
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="epRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="antdvRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="arcoRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="naiveRef"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="tdesignRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="vexipRef"
      :curvature="-150"
      dotted
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="logoRef"
      :to-ref="iduxRef"
      :curvature="-150"
      dotted
    />
  </div>
</template>
`,m=`<script setup lang="ts">
const containerRef = useTemplateRef('containerRef')
const githubRef = useTemplateRef('githubRef')
const googleRef = useTemplateRef('googleRef')
<\/script>

<template>
  <div ref="containerRef" class="p-10 flex w-full items-center justify-center relative overflow-hidden">
    <div class="flex size-full justify-between">
      <div ref="githubRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
        <FaIcon name="i-logos:github" class="size-20" />
      </div>
      <div ref="googleRef" class="p-4 border-2 rounded-full bg-card flex shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] items-center justify-center z-10">
        <FaIcon name="i-logos:google" class="size-20" />
      </div>
    </div>
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="githubRef"
      :to-ref="googleRef"
      :curvature="-50"
      :start-y-offset="20"
      :end-y-offset="20"
    />
    <FaAnimatedBeam
      :container-ref="containerRef"
      :from-ref="githubRef"
      :to-ref="googleRef"
      :curvature="50"
      :start-y-offset="-20"
      :end-y-offset="-20"
      reverse
    />
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.animatedBeam`),description:`FaAnimatedBeam`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`虚线`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`反向`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};