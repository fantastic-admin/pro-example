
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ax as t}from"./index-H6QnEWHf.js";const a={list:()=>t.get("dictionary/list",{baseURL:"/mock/"}),detail:e=>t.get("dictionary/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>t.post("dictionary/create",e,{baseURL:"/mock/"}),edit:e=>t.post("dictionary/edit",e,{baseURL:"/mock/"}),delete:e=>t.post("dictionary/delete",{id:e},{baseURL:"/mock/"}),itemList:e=>t.get("dictionary/item/list",{params:e,baseURL:"/mock/"}),itemDetail:e=>t.get("dictionary/item/detail",{params:{id:e},baseURL:"/mock/"}),itemCreate:e=>t.post("dictionary/item/create",e,{baseURL:"/mock/"}),itemEdit:e=>t.post("dictionary/item/edit",e,{baseURL:"/mock/"}),itemDelete:e=>t.post("dictionary/item/delete",{id:e},{baseURL:"/mock/"}),itemChangeEnable:e=>t.post("dictionary/item/change/enable",e,{baseURL:"/mock/"}),get:e=>t.get("dictionary/get",{params:{code:e},baseURL:"/mock/"})};export{a};
