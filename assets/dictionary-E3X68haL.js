
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{g as e}from"./auth-kZwluqcW.js";var t={list:()=>e.get(`dictionary/list`,{fake:!0}),detail:t=>e.get(`dictionary/detail`,{params:{id:t},fake:!0}),create:t=>e.post(`dictionary/create`,t,{fake:!0}),edit:t=>e.post(`dictionary/edit`,t,{fake:!0}),delete:t=>e.post(`dictionary/delete`,{id:t},{fake:!0}),itemList:t=>e.get(`dictionary/item/list`,{params:t,fake:!0}),itemDetail:t=>e.get(`dictionary/item/detail`,{params:{id:t},fake:!0}),itemCreate:t=>e.post(`dictionary/item/create`,t,{fake:!0}),itemEdit:t=>e.post(`dictionary/item/edit`,t,{fake:!0}),itemDelete:t=>e.post(`dictionary/item/delete`,{id:t},{fake:!0}),itemChangeEnable:t=>e.post(`dictionary/item/change/enable`,t,{fake:!0}),get:t=>e.get(`dictionary/get`,{params:{code:t},fake:!0})};export{t};