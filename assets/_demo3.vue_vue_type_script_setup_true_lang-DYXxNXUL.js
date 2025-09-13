
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as i}from"./index.vue_vue_type_script_setup_true_lang-DJsbYJOR.js";import{d as o,g as l,N as f,o as d,a as m}from"./index-BHkWVPDT.js";const _=o({__name:"_demo3",setup(c){const r=l([{id:"1",name:"根目录",children:[{id:"1-1",name:"文件夹1",type:"folder",children:[{id:"1-1-1",name:"文件1.txt",type:"file"},{id:"1-1-2",name:"文件2.txt",type:"file"},{id:"1-1-3",name:"文件3.txt",type:"file"}]},{id:"1-2",name:"文件夹2",type:"folder",children:[{id:"1-2-1",name:"文件3.txt",type:"file"}]}]}]);function a(e,t){return e==="file"&&t.type==="file"||e==="folder"&&t.type==="folder"?!0:t.name.toLowerCase().includes(e.toLowerCase())}return(e,t)=>{const n=i;return d(),f(n,{data:m(r),filterable:"","filter-placeholder":"搜索...(输入 folder 或 file 可过滤节点类型)","filter-method":a},null,8,["data"])}}});export{_};
