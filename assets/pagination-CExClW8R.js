
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{wt as e}from"./vue.runtime.esm-bundler-EJiOFDNb.js";function t(){let t=e({page:1,size:10,total:0,sort:null,order:null});function n(){return{page:t.value.page,size:t.value.size,from:(t.value.page-1)*t.value.size,limit:t.value.size,...t.value.sort&&t.value.order&&{sort:t.value.sort,order:t.value.order}}}async function r(e){t.value.size=e}async function i(e){t.value.page=e}async function a(e,n){t.value.sort=e,t.value.order=n===`ascending`?`asc`:`desc`}return{pagination:t,getParams:n,onSizeChange:r,onCurrentChange:i,onSortChange:a}}export{t};