
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{n as s}from"./index-H6QnEWHf.js";function l(){const e=s({page:1,size:10,total:0,sizes:[10,20,50,100],layout:"total, sizes, ->, prev, pager, next, jumper",sort:null,order:null});function n(){return{page:e.value.page,size:e.value.size,from:(e.value.page-1)*e.value.size,limit:e.value.size,...e.value.sort&&e.value.order&&{sort:e.value.sort,order:e.value.order}}}async function r(a){e.value.size=a}async function o(a){e.value.page=a}async function t(a,u){e.value.sort=a,e.value.order=u==="ascending"?"asc":"desc"}return{pagination:e,getParams:n,onSizeChange:r,onCurrentChange:o,onSortChange:t}}export{l as u};
