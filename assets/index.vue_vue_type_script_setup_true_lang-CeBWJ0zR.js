
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{ax as o,d as h,n as r,s as w,a7 as L,L as p,r as i,aw as U,W as I,e as s,c as F,o as V,g as u,w as f}from"./index-H6QnEWHf.js";const m={list:e=>o.get("standard_module/list",{params:e,baseURL:"/mock/"}),detail:e=>o.get("standard_module/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>o.post("standard_module/create",e,{baseURL:"/mock/"}),edit:e=>o.post("standard_module/edit",e,{baseURL:"/mock/"}),delete:e=>o.post("standard_module/delete",{id:e},{baseURL:"/mock/"})},B=h({__name:"index",props:{id:{default:""}},setup(e,{expose:_}){const v=e,d=r(!1),c=w("formRef"),t=r({id:v.id,title:""}),b=r({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});L(()=>{t.value.id!==""&&g()});function g(){d.value=!0,m.detail(t.value.id).then(a=>{d.value=!1,t.value.title=a.data.title})}return _({submit(){return new Promise(a=>{var l;(l=c.value)==null||l.validate(n=>{n&&(t.value.id===""?m.create(t.value).then(()=>{p.success("模拟新增成功"),a()}):m.edit(t.value).then(()=>{p.success("模拟编辑成功"),a()}))})})}}),(a,l)=>{const n=i("ElInput"),R=i("ElFormItem"),k=i("ElForm"),x=U("loading");return I((V(),F("div",null,[u(k,{ref_key:"formRef",ref:c,model:s(t),rules:s(b),"label-width":"120px","label-suffix":"："},{default:f(()=>[u(R,{label:"标题",prop:"title"},{default:f(()=>[u(n,{modelValue:s(t).title,"onUpdate:modelValue":l[0]||(l[0]=E=>s(t).title=E),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,s(d)]])}}});export{B as _,m as a};
