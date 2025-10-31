
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{cg as l,d as I,g as r,ac as h,Z as U,b9 as f,a4 as d,ck as j,w,a as s,c as L,o as F,k as m,m as _}from"./index-Bnionyve.js";const u={list:e=>l.get("job/list",{params:e,baseURL:"/mock/"}),detail:e=>l.get("job/detail",{params:e,baseURL:"/mock/"}),create:e=>l.post("job/create",e,{baseURL:"/mock/"}),edit:e=>l.post("job/edit",e,{baseURL:"/mock/"}),delete:e=>l.post("job/delete",{id:e},{baseURL:"/mock/"})},C=I({__name:"index",props:{id:{default:""},departmentId:{default:""}},setup(e,{expose:b}){const c=e,i=r(!1),p=h("formRef"),t=r({id:c.id,department_id:c.departmentId,title:""}),v=r({title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]});U(()=>{t.value.id!==""&&g()});function g(){i.value=!0,u.detail({department_id:t.value.department_id,id:t.value.id}).then(a=>{i.value=!1,t.value.title=a.data.title})}return b({submit(){return new Promise(a=>{var o;(o=p.value)==null||o.validate(n=>{n&&(t.value.id===""?u.create(t.value).then(()=>{f.success("模拟新增成功"),a()}):u.edit(t.value).then(()=>{f.success("模拟编辑成功"),a()}))})})}}),(a,o)=>{const n=d("ElInput"),k=d("ElFormItem"),R=d("ElForm"),x=j("loading");return w((F(),L("div",null,[m(R,{ref_key:"formRef",ref:p,model:s(t),rules:s(v),"label-width":"120px","label-suffix":"："},{default:_(()=>[m(k,{label:"职位",prop:"title"},{default:_(()=>[m(n,{modelValue:s(t).title,"onUpdate:modelValue":o[0]||(o[0]=E=>s(t).title=E),placeholder:"请输入职位名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,s(i)]])}}});export{C as _,u as a};
