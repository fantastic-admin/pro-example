
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c6 as l,d as I,r,a9 as h,X as U,a$ as f,E as d,ca as j,w,k as s,e as L,f as F,g as m,i as _}from"./index-H6KsPIiT.js";const u={list:e=>l.get("job/list",{params:e,baseURL:"/mock/"}),detail:e=>l.get("job/detail",{params:e,baseURL:"/mock/"}),create:e=>l.post("job/create",e,{baseURL:"/mock/"}),edit:e=>l.post("job/edit",e,{baseURL:"/mock/"}),delete:e=>l.post("job/delete",{id:e},{baseURL:"/mock/"})},C=I({__name:"index",props:{id:{default:""},departmentId:{default:""}},setup(e,{expose:b}){const c=e,i=r(!1),p=h("formRef"),t=r({id:c.id,department_id:c.departmentId,title:""}),v=r({title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]});U(()=>{t.value.id!==""&&g()});function g(){i.value=!0,u.detail({department_id:t.value.department_id,id:t.value.id}).then(a=>{i.value=!1,t.value.title=a.data.title})}return b({submit(){return new Promise(a=>{var o;(o=p.value)==null||o.validate(n=>{n&&(t.value.id===""?u.create(t.value).then(()=>{f.success("模拟新增成功"),a()}):u.edit(t.value).then(()=>{f.success("模拟编辑成功"),a()}))})})}}),(a,o)=>{const n=d("ElInput"),R=d("ElFormItem"),k=d("ElForm"),E=j("loading");return w((F(),L("div",null,[m(k,{ref_key:"formRef",ref:p,model:s(t),rules:s(v),"label-width":"120px","label-suffix":"："},{default:_(()=>[m(R,{label:"职位",prop:"title"},{default:_(()=>[m(n,{modelValue:s(t).title,"onUpdate:modelValue":o[0]||(o[0]=x=>s(t).title=x),placeholder:"请输入职位名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[E,s(i)]])}}});export{C as _,u as a};
