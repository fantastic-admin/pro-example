
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as w,r as s,a9 as I,X as R,a$ as m,E as n,ca as k,w as F,k as l,e as V,f as C,g as r,i as d}from"./index-DOTJNdHl.js";import{a as i}from"./department-Bb3ZMqfd.js";const q=w({__name:"index",props:{id:{default:""}},setup(f,{expose:c}){const p=f,a=s(!1),u=I("formRef"),e=s({id:p.id,title:""}),_=s({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});R(()=>{e.value.id!==""&&v()});function v(){a.value=!0,i.detail(e.value.id).then(t=>{a.value=!1,e.value.title=t.data.title})}return c({submit(){return new Promise(t=>{u.value?.validate(o=>{o&&(e.value.id===""?i.create(e.value).then(()=>{m.success("模拟新增成功"),t()}):i.edit(e.value).then(()=>{m.success("模拟编辑成功"),t()}))})})}}),(t,o)=>{const g=n("ElInput"),E=n("ElFormItem"),x=n("ElForm"),h=k("loading");return F((C(),V("div",null,[r(x,{ref_key:"formRef",ref:u,model:l(e),rules:l(_),"label-width":"120px","label-suffix":"："},{default:d(()=>[r(E,{label:"部门",prop:"title"},{default:d(()=>[r(g,{modelValue:l(e).title,"onUpdate:modelValue":o[0]||(o[0]=b=>l(e).title=b),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[h,l(a)]])}}});export{q as _};
