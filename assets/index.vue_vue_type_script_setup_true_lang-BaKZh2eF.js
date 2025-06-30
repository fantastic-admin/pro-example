
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c1 as l,d as h,r as n,a9 as U,X as w,a_ as c,E as r,c5 as I,w as L,k as o,e as F,f as V,g as i,i as f}from"./index-CkQ8ZzMl.js";const u={list:e=>l.get("standard_module/list",{params:e,baseURL:"/mock/"}),detail:e=>l.get("standard_module/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>l.post("standard_module/create",e,{baseURL:"/mock/"}),edit:e=>l.post("standard_module/edit",e,{baseURL:"/mock/"}),delete:e=>l.post("standard_module/delete",{id:e},{baseURL:"/mock/"})},B=h({__name:"index",props:{id:{default:""}},setup(e,{expose:p}){const _=e,d=n(!1),m=U("formRef"),t=n({id:_.id,title:""}),v=n({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});w(()=>{t.value.id!==""&&b()});function b(){d.value=!0,u.detail(t.value.id).then(a=>{d.value=!1,t.value.title=a.data.title})}return p({submit(){return new Promise(a=>{m.value?.validate(s=>{s&&(t.value.id===""?u.create(t.value).then(()=>{c.success("模拟新增成功"),a()}):u.edit(t.value).then(()=>{c.success("模拟编辑成功"),a()}))})})}}),(a,s)=>{const g=r("ElInput"),R=r("ElFormItem"),k=r("ElForm"),E=I("loading");return L((V(),F("div",null,[i(k,{ref_key:"formRef",ref:m,model:o(t),rules:o(v),"label-width":"120px","label-suffix":"："},{default:f(()=>[i(R,{label:"标题",prop:"title"},{default:f(()=>[i(g,{modelValue:o(t).title,"onUpdate:modelValue":s[0]||(s[0]=x=>o(t).title=x),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[E,o(d)]])}}});export{B as _,u as a};
