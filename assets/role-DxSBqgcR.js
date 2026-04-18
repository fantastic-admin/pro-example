
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{g as e}from"./auth-kZwluqcW.js";var t={list:t=>e.get(`role/list`,{params:t,fake:!0}),detail:t=>e.get(`role/detail`,{params:{id:t},fake:!0}),create:t=>e.post(`role/create`,t,{fake:!0}),edit:t=>e.post(`role/edit`,t,{fake:!0}),delete:t=>e.post(`role/delete`,{id:t},{fake:!0}),allList:()=>e.get(`role/allList`,{fake:!0})};export{t};