
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as k,g as n,ac as w,Z as I,b9 as d,a4 as r,ck as R,w as F,a as o,c as V,o as C,k as i,m as c}from"./index-28uxndRW.js";import{a as u}from"./department-Dc7CdecR.js";const q=k({__name:"index",props:{id:{default:""}},setup(f,{expose:p}){const _=f,a=n(!1),m=w("formRef"),e=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});I(()=>{e.value.id!==""&&g()});function g(){a.value=!0,u.detail(e.value.id).then(t=>{a.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(s=>{s&&(e.value.id===""?u.create(e.value).then(()=>{d.success("模拟新增成功"),t()}):u.edit(e.value).then(()=>{d.success("模拟编辑成功"),t()}))})})}}),(t,l)=>{const s=r("ElInput"),x=r("ElFormItem"),E=r("ElForm"),b=R("loading");return F((C(),V("div",null,[i(E,{ref_key:"formRef",ref:m,model:o(e),rules:o(v),"label-width":"120px","label-suffix":"："},{default:c(()=>[i(x,{label:"部门",prop:"title"},{default:c(()=>[i(s,{modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=h=>o(e).title=h),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[b,o(a)]])}}});export{q as _};
