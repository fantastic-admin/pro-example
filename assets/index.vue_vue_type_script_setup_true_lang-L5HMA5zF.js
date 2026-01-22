
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as b,n,s as I,a7 as R,L as d,r,aw as F,W as V,e as o,c as k,o as C,g as i,w as f}from"./index-H6QnEWHf.js";import{a as u}from"./department-DhmKQvGG.js";const q=b({__name:"index",props:{id:{default:""}},setup(c,{expose:p}){const _=c,a=n(!1),m=I("formRef"),e=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});R(()=>{e.value.id!==""&&g()});function g(){a.value=!0,u.detail(e.value.id).then(t=>{a.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(s=>{s&&(e.value.id===""?u.create(e.value).then(()=>{d.success("模拟新增成功"),t()}):u.edit(e.value).then(()=>{d.success("模拟编辑成功"),t()}))})})}}),(t,l)=>{const s=r("ElInput"),x=r("ElFormItem"),E=r("ElForm"),h=F("loading");return V((C(),k("div",null,[i(E,{ref_key:"formRef",ref:m,model:o(e),rules:o(v),"label-width":"120px","label-suffix":"："},{default:f(()=>[i(x,{label:"部门",prop:"title"},{default:f(()=>[i(s,{modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=w=>o(e).title=w),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[h,o(a)]])}}});export{q as _};
