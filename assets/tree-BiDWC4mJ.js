
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{P as o,vt as s}from"./components-Dvnhr4Ep.js";import{n as c}from"./vue-i18n.runtime-pGyDsL5y.js";import{t as l}from"./_demo1-CWoTD0Bv.js";import{t as u}from"./_demo2-_vJCPi0o.js";import{t as d}from"./_demo3-DNlxCsvS.js";import{t as f}from"./_demo4-BsiBuTtJ.js";import{t as p}from"./_demo5-VVS-LEnZ.js";var m=`<script setup lang="ts">
import type { TreeNode } from '@fantastic-admin/components'

const data = ref<TreeNode[]>([
  {
    id: '1',
    label: '根目录',
    children: [
      {
        id: '1-1',
        label: '文件夹1',
        children: [
          { id: '1-1-1', label: '文件1.txt' },
          { id: '1-1-2', label: '文件2.txt' },
          { id: '1-1-3', label: '文件3.txt' },
        ],
      },
      {
        id: '1-2',
        label: '文件夹2',
        children: [
          { id: '1-2-1', label: '文件3.txt' },
        ],
      },
    ],
  },
])

const selectedNode = ref<TreeNode | null>(null)
function handleSelectionChange(node: TreeNode | null) {
  selectedNode.value = node
}
<\/script>

<template>
  <FaTree :data @selection-change="handleSelectionChange" />
  <div class="text-sm text-gray-500 mt-4">
    <div>
      当前选中节点：
    </div>
    <div>
      {{ selectedNode?.label }}
    </div>
  </div>
</template>
`,h=`<script setup lang="ts">
import type { TreeNode } from '@fantastic-admin/components'

const data = ref<TreeNode[]>([
  {
    id: '1',
    label: '根目录',
    children: [
      {
        id: '1-1',
        label: '文件夹1',
        children: [
          { id: '1-1-1', label: '文件1.txt' },
          { id: '1-1-2', label: '文件2.txt' },
          { id: '1-1-3', label: '文件3.txt' },
        ],
      },
      {
        id: '1-2',
        label: '文件夹2',
        children: [
          { id: '1-2-1', label: '文件3.txt' },
        ],
      },
    ],
  },
])

const checkedNodes = ref<TreeNode[]>([])

function handleCheckChange(nodes: TreeNode[]) {
  checkedNodes.value = nodes
}
<\/script>

<template>
  <FaTree :data checkable @check-change="handleCheckChange" />
  <div class="text-sm text-gray-500 mt-4">
    <div>
      当前选中节点：
    </div>
    <div v-for="node in checkedNodes" :key="node.id">
      {{ node.label }}
    </div>
  </div>
</template>
`,g=`<script setup lang="ts">
import type { TreeNode } from '@fantastic-admin/components'

const data = ref<TreeNode[]>([
  {
    id: '1',
    label: '根目录',
    children: [
      {
        id: '1-1',
        label: '文件夹1',
        type: 'folder',
        children: [
          { id: '1-1-1', label: '文件1.txt', type: 'file' },
          { id: '1-1-2', label: '文件2.txt', type: 'file' },
          { id: '1-1-3', label: '文件3.txt', type: 'file' },
        ],
      },
      {
        id: '1-2',
        label: '文件夹2',
        type: 'folder',
        children: [
          { id: '1-2-1', label: '文件3.txt', type: 'file' },
        ],
      },
    ],
  },
])

function customFilter(query: string, node: TreeNode) {
  // 按类型过滤
  if (query === 'file' && node.type === 'file') {
    return true
  }
  if (query === 'folder' && node.type === 'folder') {
    return true
  }
  // 按名称过滤
  return node.label.toLowerCase().includes(query.toLowerCase())
}
<\/script>

<template>
  <FaTree :data filterable filter-placeholder="搜索...(输入 folder 或 file 可过滤节点类型)" :filter-method="customFilter" />
</template>
`,_=`<script setup lang="ts">
import type { TreeNode } from '@fantastic-admin/components'

const checkable = ref(false)

const data = ref<TreeNode[]>([
  {
    id: '1',
    label: '根目录',
    children: [
      {
        id: '1-1',
        label: '文件夹1',
        children: [
          { id: '1-1-1', label: '文件1.txt' },
          { id: '1-1-2', label: '文件2.txt' },
          { id: '1-1-3', label: '文件3.txt' },
        ],
      },
      {
        id: '1-2',
        label: '文件夹2',
        children: [
          { id: '1-2-1', label: '文件3.txt' },
        ],
      },
    ],
  },
])

const treeRef = useTemplateRef('treeRef')

function handleExpand(ids?: string[]) {
  treeRef.value?.expand(ids)
}

function handleCollapse(ids?: string[]) {
  treeRef.value?.collapse(ids)
}

function handleSetSelection(id: string) {
  treeRef.value?.setSelection(id)
}

function handleClearSelection() {
  treeRef.value?.clearSelection()
}

function handleCheckAll(bool: boolean) {
  treeRef.value?.checkAll(bool)
}
<\/script>

<template>
  <div class="mb-4 flex gap-2 items-center">
    开启复选框
    <FaSwitch v-model="checkable" />
  </div>
  <div class="mb-4 flex gap-2">
    <FaButton variant="outline" @click="handleExpand()">
      展开所有
    </FaButton>
    <FaButton variant="outline" @click="handleExpand(['1'])">
      展开根目录
    </FaButton>
    <FaButton variant="outline" @click="handleCollapse()">
      收起所有
    </FaButton>
    <FaButton variant="outline" @click="handleCollapse(['1'])">
      收起根目录
    </FaButton>
    <FaButtonGroup>
      <FaButton variant="outline" :disabled="checkable" @click="handleSetSelection('1-1-1')">
        选中 1-1-1
      </FaButton>
      <FaButton variant="outline" :disabled="checkable" @click="handleClearSelection">
        取消选中
      </FaButton>
    </FaButtonGroup>
    <FaButtonGroup>
      <FaButton variant="outline" :disabled="!checkable" @click="handleCheckAll(true)">
        全选
      </FaButton>
      <FaButton variant="outline" :disabled="!checkable" @click="handleCheckAll(false)">
        取消全选
      </FaButton>
    </FaButtonGroup>
  </div>
  <FaTree ref="treeRef" :data node-key="id" :checkable />
</template>
`,v=`<script setup lang="ts">
import type { TreeNode } from '@fantastic-admin/components'

const data = ref<TreeNode[]>([
  {
    id: '1',
    label: '根目录',
    icon: 'i-lucide:folder',
    expandedIcon: 'i-lucide:folder-open',
    children: [
      {
        id: '1-1',
        label: '文件夹1',
        icon: 'i-lucide:folder',
        expandedIcon: 'i-lucide:folder-open',
        children: [
          { id: '1-1-1', label: '文件1.txt', icon: 'i-lucide:file' },
          { id: '1-1-2', label: '文件2.txt', icon: 'i-lucide:file' },
          { id: '1-1-3', label: '文件3.txt', icon: 'i-lucide:file' },
        ],
      },
      {
        id: '1-2',
        label: '文件夹2',
        icon: 'i-lucide:folder',
        expandedIcon: 'i-lucide:folder-open',
        children: [
          { id: '1-2-1', label: '文件3.txt', icon: 'i-lucide:file' },
        ],
      },
    ],
  },
])
<\/script>

<template>
  <FaTree :data>
    <template #default="{ node, expanded }">
      <div class="group flex-center-between">
        <div class="flex gap-2 items-center">
          <FaIcon :name="expanded ? node.expandedIcon : node.icon" />
          <div class="text-sm">
            {{ node.label }}
          </div>
        </div>
        <FaButton variant="outline" size="icon" class="opacity-0 size-6 transition-opacity group-hover:opacity-100" @click.stop>
          <FaIcon name="i-ep:edit" />
        </FaButton>
      </div>
    </template>
  </FaTree>
</template>
`,y=e({__name:`index`,setup(e){let{t:y}=c();return(e,c)=>{let b=o,x=s;return r(),a(`div`,null,[n(b,{title:t(y)(`route.component.tree`),description:`FaTree`},null,8,[`title`]),n(x,{code:t(m)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(x,{title:`复选框`,code:t(h)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(x,{title:`自定义过滤`,code:t(g)},{default:i(()=>[n(d)]),_:1},8,[`code`]),n(x,{title:`外部事件`,code:t(_)},{default:i(()=>[n(f)]),_:1},8,[`code`]),n(x,{title:`自定义节点`,code:t(v)},{default:i(()=>[n(p)]),_:1},8,[`code`])])}}});export{y as default};