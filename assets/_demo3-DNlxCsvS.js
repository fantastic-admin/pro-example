
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Nt as t,S as n,Y as r,wt as i}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{n as a}from"./components-Dvnhr4Ep.js";var o=e({__name:`_demo3`,setup(e){let o=i([{id:`1`,label:`根目录`,children:[{id:`1-1`,label:`文件夹1`,type:`folder`,children:[{id:`1-1-1`,label:`文件1.txt`,type:`file`},{id:`1-1-2`,label:`文件2.txt`,type:`file`},{id:`1-1-3`,label:`文件3.txt`,type:`file`}]},{id:`1-2`,label:`文件夹2`,type:`folder`,children:[{id:`1-2-1`,label:`文件3.txt`,type:`file`}]}]}]);function s(e,t){return e===`file`&&t.type===`file`||e===`folder`&&t.type===`folder`?!0:t.label.toLowerCase().includes(e.toLowerCase())}return(e,i)=>{let c=a;return r(),n(c,{data:t(o),filterable:``,"filter-placeholder":`搜索...(输入 folder 或 file 可过滤节点类型)`,"filter-method":s},null,8,[`data`])}}});export{o as t};