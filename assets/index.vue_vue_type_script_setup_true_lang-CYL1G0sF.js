
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as r}from"./department-KW6eq5l4.js";import{d as w,r as n,aa as I,$ as R,cd as d,G as i,ck as k,w as F,l as a,f as V,g as C,h as u,j as c}from"./index-C1X-Si6V.js";const M=w({__name:"index",props:{id:{default:""}},setup(f,{expose:p}){const _=f,o=n(!1),m=I("formRef"),e=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});R(()=>{e.value.id!==""&&g()});function g(){o.value=!0,r.detail(e.value.id).then(t=>{o.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(s=>{s&&(e.value.id===""?r.create(e.value).then(()=>{d.success({message:"模拟新增成功",center:!0}),t()}):r.edit(e.value).then(()=>{d.success({message:"模拟编辑成功",center:!0}),t()}))})})}}),(t,l)=>{const s=i("ElInput"),E=i("ElFormItem"),h=i("ElForm"),x=k("loading");return F((C(),V("div",null,[u(h,{ref_key:"formRef",ref:m,model:a(e),rules:a(v),"label-width":"120px","label-suffix":"："},{default:c(()=>[u(E,{label:"部门",prop:"title"},{default:c(()=>[u(s,{modelValue:a(e).title,"onUpdate:modelValue":l[0]||(l[0]=b=>a(e).title=b),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,a(o)]])}}});export{M as _};
