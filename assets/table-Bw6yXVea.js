
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ax as a}from"./index-H6QnEWHf.js";const s={list:e=>a.get("table/list",{params:e,baseURL:"/mock/"}),detail:e=>a.get("table/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>a.post("table/create",e,{baseURL:"/mock/"}),edit:e=>a.post("table/edit",e,{baseURL:"/mock/"}),delete:e=>a.post("table/delete",{id:e},{baseURL:"/mock/"}),preview:e=>a.get("table/preview",{params:e,baseURL:"/mock/"})};export{s as a};
