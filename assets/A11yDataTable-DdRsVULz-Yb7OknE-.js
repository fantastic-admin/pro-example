
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,E as t,Lt as n,X as r,Y as i,b as a,m as o,q as s}from"./vue.runtime.esm-bundler-BVTUj4HC.js";import{t as c}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";var l=[`id`],u={scope:`row`},d=c({__name:`A11yDataTable`,props:{uid:{String,required:!0},head:{Array,default:()=>[]},body:{Array,default:()=>[]},caption:{String,default:`Data table`},notice:{String,default:`A data table is available below.`}},setup(c){return(d,f)=>(s(),e(`div`,{id:`chart-data-table-${c.uid}`,class:`sr-only`,"data-dom-to-png-ignore":``},[a(`p`,null,n(c.notice),1),a(`table`,null,[a(`caption`,null,n(c.caption),1),a(`thead`,null,[a(`tr`,null,[(s(!0),e(o,null,i(c.head,(i,a)=>(s(),e(`th`,{role:`cell`,key:`a11y-head-${a}-${c.uid}`,scope:`col`},[r(d.$slots,`th`,{th:i},()=>[t(n(i),1)],!0)]))),128))])]),a(`tbody`,null,[(s(!0),e(o,null,i(c.body,(l,f)=>(s(),e(`tr`,{key:`a11y-body-${f}-${c.uid}`},[a(`th`,u,n(l[0]),1),(s(!0),e(o,null,i(l.slice(1),(i,a)=>(s(),e(`td`,{key:`a11y-cell-${f}-${a}-${c.uid}`},[r(d.$slots,`td`,{td:i},()=>[t(n(i),1)],!0)]))),128))]))),128))])])],8,l))}},[[`__scopeId`,`data-v-1090a7c5`]]);export{d as t};