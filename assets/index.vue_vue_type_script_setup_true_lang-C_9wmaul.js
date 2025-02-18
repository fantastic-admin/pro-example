
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as r}from"./department-BeE-pzoK.js";import{d as w,r as n,aT as I,M as R,b$ as d,l as i,c6 as F,w as V,e as o,c as k,o as C,f as u,g as c}from"./index-Bbf2k3Iz.js";const B=w({__name:"index",props:{id:{default:""}},setup(f,{expose:p}){const _=f,a=n(!1),m=I("formRef"),e=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});R(()=>{e.value.id!==""&&g()});function g(){a.value=!0,r.detail(e.value.id).then(t=>{a.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(s=>{s&&(e.value.id===""?r.create(e.value).then(()=>{d.success({message:"模拟新增成功",center:!0}),t()}):r.edit(e.value).then(()=>{d.success({message:"模拟编辑成功",center:!0}),t()}))})})}}),(t,l)=>{const s=i("ElInput"),E=i("ElFormItem"),x=i("ElForm"),b=F("loading");return V((C(),k("div",null,[u(x,{ref_key:"formRef",ref:m,model:o(e),rules:o(v),"label-width":"120px","label-suffix":"："},{default:c(()=>[u(E,{label:"部门",prop:"title"},{default:c(()=>[u(s,{modelValue:o(e).title,"onUpdate:modelValue":l[0]||(l[0]=h=>o(e).title=h),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[b,o(a)]])}}});export{B as _};
