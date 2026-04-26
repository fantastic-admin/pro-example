
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{g as e}from"./auth-DED7SAC_.js";var t={list:t=>e.get(`table/list`,{params:t,fake:!0}),detail:t=>e.get(`table/detail`,{params:{id:t},fake:!0}),create:t=>e.post(`table/create`,t,{fake:!0}),edit:t=>e.post(`table/edit`,t,{fake:!0}),delete:t=>e.post(`table/delete`,{id:t},{fake:!0}),preview:t=>e.get(`table/preview`,{params:t,fake:!0})};export{t};