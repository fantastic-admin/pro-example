
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{cZ as s,d as h,r,B as U,E as p,a as i,ce as w,O as I,e as o,o as L,k as F,f as u,w as f}from"./index-DL7SpVKF.js";const m={list:e=>s.get("standard_module/list",{params:e,baseURL:"/mock/"}),detail:e=>s.get("standard_module/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>s.post("standard_module/create",e,{baseURL:"/mock/"}),edit:e=>s.post("standard_module/edit",e,{baseURL:"/mock/"}),delete:e=>s.post("standard_module/delete",{id:e},{baseURL:"/mock/"})},B=h({__name:"index",props:{id:{default:""}},setup(e,{expose:_}){const v=e,d=r(!1),c=r(),t=r({id:v.id,title:""}),g=r({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});U(()=>{t.value.id!==""&&b()});function b(){d.value=!0,m.detail(t.value.id).then(a=>{d.value=!1,t.value.title=a.data.title})}return _({submit(){return new Promise(a=>{var l;(l=c.value)==null||l.validate(n=>{n&&(t.value.id===""?m.create(t.value).then(()=>{p.success({message:"模拟新增成功",center:!0}),a()}):m.edit(t.value).then(()=>{p.success({message:"模拟编辑成功",center:!0}),a()}))})})}}),(a,l)=>{const n=i("ElInput"),k=i("ElFormItem"),E=i("ElForm"),R=w("loading");return I((L(),F("div",null,[u(E,{ref_key:"formRef",ref:c,model:o(t),rules:o(g),"label-width":"120px","label-suffix":"："},{default:f(()=>[u(k,{label:"标题",prop:"title"},{default:f(()=>[u(n,{modelValue:o(t).title,"onUpdate:modelValue":l[0]||(l[0]=x=>o(t).title=x),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[R,o(d)]])}}});export{B as _,m as a};
