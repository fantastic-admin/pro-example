
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{cg as t}from"./index-Bnionyve.js";const s={list:()=>t.get("menu/list",{baseURL:"/mock/"}),detail:e=>t.get("menu/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("menu/create",e,{baseURL:"/mock/"}),edit:e=>t.post("menu/edit",e,{baseURL:"/mock/"}),delete:e=>t.post("menu/delete",{id:e},{baseURL:"/mock/"})};export{s as a};
