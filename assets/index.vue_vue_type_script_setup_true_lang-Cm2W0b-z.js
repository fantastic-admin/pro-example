
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as r}from"./department-B3qKSAZQ.js";import{d as w,r as a,B as I,E as d,a as i,ce as k,O as F,e as o,o as V,k as B,f as u,w as c}from"./index-DL7SpVKF.js";const R=w({__name:"index",props:{id:{default:""}},setup(f,{expose:p}){const _=f,s=a(!1),m=a(),e=a({id:_.id,title:""}),v=a({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});I(()=>{e.value.id!==""&&g()});function g(){s.value=!0,r.detail(e.value.id).then(t=>{s.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(n=>{n&&(e.value.id===""?r.create(e.value).then(()=>{d.success({message:"模拟新增成功",center:!0}),t()}):r.edit(e.value).then(()=>{d.success({message:"模拟编辑成功",center:!0}),t()}))})})}}),(t,l)=>{const n=i("ElInput"),E=i("ElFormItem"),x=i("ElForm"),h=k("loading");return F((V(),B("div",null,[u(x,{ref_key:"formRef",ref:m,model:o(e),rules:o(v),"label-width":"120px","label-suffix":"："},{default:c(()=>[u(E,{label:"部门",prop:"title"},{default:c(()=>[u(n,{modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=b=>o(e).title=b),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[h,o(s)]])}}});export{R as _};
