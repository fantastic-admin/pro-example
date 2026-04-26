
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-C_d7Trg8.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-DEiHxmPR.js";import{t as u}from"./_demo2-r-3rpE34.js";import{t as d}from"./_demo3-DuIrcM2u.js";import{t as f}from"./_demo4-CW8cQUdu.js";import{t as p}from"./_demo5-PGVmcVv-.js";var m=`<script setup lang="ts">
import rawData from './pcas-code.json'

const value = ref<string | number>()

function transform(nodes: any[]): any[] {
  return nodes.map(n => ({
    label: n.name,
    value: n.code,
    ...(n.children?.length ? { children: transform(n.children) } : {}),
  }))
}

const options = transform(rawData)
<\/script>

<template>
  <FaCascader
    v-model="value"
    :options
    placeholder="请选择地区"
  />
</template>
`,h=`<script setup lang="ts">
import rawData from './pcas-code.json'

const value = ref<string | number>()

function transform(nodes: any[]): any[] {
  return nodes.map(n => ({
    label: n.name,
    value: n.code,
    ...(n.children?.length ? { children: transform(n.children) } : {}),
  }))
}

// 随机禁用一半的一级节点
const options = transform(rawData).map((n, i) => ({
  ...n,
  disabled: i % 2 === 1,
}))
<\/script>

<template>
  <FaCascader
    v-model="value"
    :options
    placeholder="请选择地区"
    clearable
  />
</template>
`,g=`<script setup lang="ts">
import rawData from './pcas-code.json'

const value = ref<string | number>()

function transform(nodes: any[]): any[] {
  return nodes.map(n => ({
    label: n.name,
    value: n.code,
    ...(n.children?.length ? { children: transform(n.children) } : {}),
  }))
}

const options = transform(rawData)
<\/script>

<template>
  <FaCascader
    v-model="value"
    :options
    placeholder="请选择地区"
    :leaf-only="false"
    clearable
  />
</template>
`,_=`<script setup lang="ts">
import rawData from './pcas-code.json'

const value = ref<string | number>()

function transform(nodes: any[]): any[] {
  return nodes.map(n => ({
    label: n.name,
    value: n.code,
    ...(n.children?.length ? { children: transform(n.children) } : {}),
  }))
}

const options = transform(rawData)
<\/script>

<template>
  <FaCascader
    v-model="value"
    :options
    placeholder="请选择地区"
    trigger-mode="hover"
  />
</template>
`,v=`<script setup lang="ts">
import rawData from './pcas-code.json'

const value = ref<string | number>()

function transform(nodes: any[]): any[] {
  return nodes.map(n => ({
    label: n.name,
    value: n.code,
    ...(n.children?.length ? { children: transform(n.children) } : {}),
  }))
}

const options = transform(rawData)
<\/script>

<template>
  <FaCascader
    v-model="value"
    :options
    placeholder="请选择地区"
    panel-mode="single"
  />
</template>
`,y=e({__name:`index`,setup(e){let{t:y}=c();return(e,c)=>{let b=o,x=s;return r(),a(`div`,null,[n(b,{title:t(y)(`route.component.cascader`),description:`FaCascader`},null,8,[`title`]),n(x,{code:t(m)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(x,{title:`可清除 / 禁用选项`,code:t(h)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(x,{title:`父节点可选`,code:t(g)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(x,{title:`鼠标悬停展开`,code:t(_)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(x,{title:`单列模式`,code:t(v)},{default:i(()=>[n(p)]),_:1},8,[`code`])])}}});export{y as default};