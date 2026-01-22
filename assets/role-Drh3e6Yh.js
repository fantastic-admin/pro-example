
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ax as a}from"./index-H6QnEWHf.js";const o={list:e=>a.get("role/list",{params:e,baseURL:"/mock/"}),detail:e=>a.get("role/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>a.post("role/create",e,{baseURL:"/mock/"}),edit:e=>a.post("role/edit",e,{baseURL:"/mock/"}),delete:e=>a.post("role/delete",{id:e},{baseURL:"/mock/"}),allList:()=>a.get("role/allList",{baseURL:"/mock/"})};export{o as a};
