
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a as r}from"./department-D_Te8mTM.js";import{d as w,r as n,aa as I,Y as R,bT as d,G as i,b_ as F,w as V,l as a,f as k,g as C,h as u,j as f}from"./index-BFPO48W4.js";const M=w({__name:"index",props:{id:{default:""}},setup(c,{expose:p}){const _=c,o=n(!1),m=I("formRef"),e=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入部门名称",trigger:"blur"}]});R(()=>{e.value.id!==""&&g()});function g(){o.value=!0,r.detail(e.value.id).then(t=>{o.value=!1,e.value.title=t.data.title})}return p({submit(){return new Promise(t=>{var l;(l=m.value)==null||l.validate(s=>{s&&(e.value.id===""?r.create(e.value).then(()=>{d.success({message:"模拟新增成功",center:!0}),t()}):r.edit(e.value).then(()=>{d.success({message:"模拟编辑成功",center:!0}),t()}))})})}}),(t,l)=>{const s=i("ElInput"),E=i("ElFormItem"),b=i("ElForm"),h=F("loading");return V((C(),k("div",null,[u(b,{ref_key:"formRef",ref:m,model:a(e),rules:a(v),"label-width":"120px","label-suffix":"："},{default:f(()=>[u(E,{label:"部门",prop:"title"},{default:f(()=>[u(s,{modelValue:a(e).title,"onUpdate:modelValue":l[0]||(l[0]=x=>a(e).title=x),placeholder:"请输入部门名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[h,a(o)]])}}});export{M as _};
