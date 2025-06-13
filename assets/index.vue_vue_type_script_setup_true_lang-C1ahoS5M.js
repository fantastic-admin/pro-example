
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as w,r as n,aa as I,Y as R,b0 as d,G as r,b$ as F,w as V,l as o,f as k,g as C,h as i,j as f}from"./index-xj0hzzoN.js";import{a as u}from"./department-CboztPX1.js";const j=w({__name:"index",props:{id:{default:""}},setup(c,{expose:p}){const _=c,a=n(!1),m=I("formRef"),e=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});R(()=>{e.value.id!==""&&g()});function g(){a.value=!0,u.detail(e.value.id).then(t=>{a.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(s=>{s&&(e.value.id===""?u.create(e.value).then(()=>{d.success("模拟新增成功"),t()}):u.edit(e.value).then(()=>{d.success("模拟编辑成功"),t()}))})})}}),(t,l)=>{const s=r("ElInput"),b=r("ElFormItem"),h=r("ElForm"),x=F("loading");return V((C(),k("div",null,[i(h,{ref_key:"formRef",ref:m,model:o(e),rules:o(v),"label-width":"120px","label-suffix":"："},{default:f(()=>[i(b,{label:"部门",prop:"title"},{default:f(()=>[i(s,{modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=E=>o(e).title=E),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,o(a)]])}}});export{j as _};
