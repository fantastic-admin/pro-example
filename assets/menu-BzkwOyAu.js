
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{g as e}from"./auth-c8MfoAMr.js";var t={list:()=>e.get(`menu/list`,{fake:!0}),detail:t=>e.get(`menu/detail`,{params:{id:t},fake:!0}),create:t=>e.post(`menu/create`,t,{fake:!0}),edit:t=>e.post(`menu/edit`,t,{fake:!0}),delete:t=>e.post(`menu/delete`,{id:t},{fake:!0})};export{t};