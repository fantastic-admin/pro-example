
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,O as n,Y as r,pt as i,w as a}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{F as o,bt as s}from"./components-CNfuk_zw.js";import{n as c}from"./vue-i18n.runtime-BkMmoySD.js";import{t as l}from"./_demo1-B5iIt-fJ.js";import{t as u}from"./_demo2-C3sJdjSP.js";import{t as d}from"./_demo3-D92yyCl0.js";var f=`<script setup lang="ts">
const message = ref('')
const mentions = ref<string[]>([])

const people = [
  { value: 'linyue', label: '林岳' },
  { value: 'olivia', label: 'Olivia Chen' },
  { value: 'jayden', label: 'Jayden Wu' },
  { value: 'cici', label: 'Cici Xu' },
  { value: 'mika', label: 'Mika Tan', disabled: true },
]

const selectedPeople = computed(() => {
  return people.filter(item => mentions.value.includes(item.value))
})
<\/script>

<template>
  <div class="space-y-4">
    <FaMention
      v-model="message"
      v-model:value="mentions"
      label="项目讨论"
      placeholder="输入 @ 选择协作者，例如 @lin"
      :items="people"
    />
    <div class="p-4 border rounded-lg border-dashed bg-muted/20 space-y-3">
      <div class="space-y-1">
        <div class="text-xs text-muted-foreground tracking-wide uppercase">
          当前输入
        </div>
        <div class="text-sm min-h-6">
          {{ message || '暂无内容' }}
        </div>
      </div>
      <div class="space-y-2">
        <div class="text-xs text-muted-foreground tracking-wide uppercase">
          命中的提及值
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in selectedPeople"
            :key="item.value"
            class="text-xs text-secondary-foreground px-2 py-0.5 rounded-full bg-secondary inline-flex items-center"
          >
            {{ item.label }} · {{ item.value }}
          </span>
          <span
            v-if="selectedPeople.length === 0"
            class="text-sm text-muted-foreground"
          >
            还没有选择任何成员
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
`,p=`<script setup lang="ts">
const content = ref('')
const mentions = ref<string[]>([])

const reviewers = [
  { value: 'lucas', label: 'Lucas He' },
  { value: 'nora', label: 'Nora Lin' },
  { value: 'stella', label: 'Stella Yang' },
  { value: 'harper', label: 'Harper Qiu' },
]

const directory: Record<string, { email: string, role: string }> = {
  lucas: {
    email: 'lucas.he@fantastic.dev',
    role: 'Frontend',
  },
  nora: {
    email: 'nora.lin@fantastic.dev',
    role: 'Design',
  },
  stella: {
    email: 'stella.yang@fantastic.dev',
    role: 'QA',
  },
  harper: {
    email: 'harper.qiu@fantastic.dev',
    role: 'PM',
  },
}

function getInitials(label: string) {
  return label
    .split(/\\s+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('')
}
<\/script>

<template>
  <div class="space-y-4">
    <FaMention
      v-model="content"
      v-model:value="mentions"
      label="Code Review"
      placeholder="在评论里 @ reviewer"
      :items="reviewers"
    >
      <template #item="{ item, selected, highlighted }">
        <div class="flex gap-3 w-full items-center">
          <div
            class="text-[11px] font-semibold border rounded-full flex-center size-8 transition-colors"
            :class="highlighted ? 'border-primary/40 bg-primary/12 text-primary' : 'border-border bg-background text-foreground'"
          >
            {{ getInitials(item.label ?? item.value) }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium truncate">
              {{ item.label ?? item.value }}
            </div>
            <div class="text-xs text-muted-foreground truncate">
              {{ directory[item.value]?.role }} · {{ directory[item.value]?.email }}
            </div>
          </div>
          <span
            v-if="selected"
            class="text-xs text-secondary-foreground px-2 py-0.5 rounded-full bg-secondary inline-flex items-center"
          >
            已选
          </span>
        </div>
      </template>
    </FaMention>
    <div class="text-sm text-muted-foreground p-4 border rounded-lg bg-card">
      自定义 \`#item\` 插槽后，可以保留基础键盘导航和插入逻辑，只重绘候选项外观。
    </div>
  </div>
</template>
`,m=`<script setup lang="ts">
const subject = ref('')
const linkedIssues = ref<string[]>([])

const issues = [
  { value: 'FE-128', label: 'FE-128 登录页联调' },
  { value: 'FE-204', label: 'FE-204 权限菜单重构' },
  { value: 'OPS-32', label: 'OPS-32 发布流水线巡检' },
  { value: 'UX-19', label: 'UX-19 暗色主题验收' },
]
<\/script>

<template>
  <div class="space-y-4">
    <FaMention
      v-model="subject"
      v-model:value="linkedIssues"
      input-as="input"
      trigger="#"
      label="更新标题"
      placeholder="输入 # 关联任务，例如 #FE"
      :items="issues"
    />
    <div class="flex flex-wrap gap-2">
      <span
        v-for="issue in linkedIssues"
        :key="issue"
        class="text-xs text-foreground px-2 py-0.5 border rounded-full bg-background inline-flex items-center"
      >
        {{ issue }}
      </span>
      <span
        v-if="linkedIssues.length === 0"
        class="text-sm text-muted-foreground"
      >
        尚未关联任务
      </span>
    </div>
  </div>
</template>
`,h=e({__name:`index`,setup(e){let{t:h}=c();return(e,c)=>{let g=o,_=s;return r(),a(`div`,null,[n(g,{title:t(h)(`route.component.mention`),description:`FaMention`},null,8,[`title`]),n(_,{code:t(f)},{default:i(()=>[n(l)]),_:1},8,[`code`]),n(_,{title:`自定义候选项`,code:t(p)},{default:i(()=>[n(u)]),_:1},8,[`code`]),n(_,{title:`单行输入与自定义触发词`,code:t(m)},{default:i(()=>[n(d)]),_:1},8,[`code`])])}}});export{h as default};