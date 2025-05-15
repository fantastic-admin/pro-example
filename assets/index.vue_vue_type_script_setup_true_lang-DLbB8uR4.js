
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{bW as o,d as E,r,aa as I,Y as j,b3 as f,G as d,b_ as U,w,l as s,f as L,g as F,h as m,j as _}from"./index-KSDvm3cB.js";const u={list:e=>o.get("job/list",{params:e,baseURL:"/mock/"}),detail:e=>o.get("job/detail",{params:e,baseURL:"/mock/"}),create:e=>o.post("job/create",e,{baseURL:"/mock/"}),edit:e=>o.post("job/edit",e,{baseURL:"/mock/"}),delete:e=>o.post("job/delete",{id:e},{baseURL:"/mock/"})},C=E({__name:"index",props:{id:{default:""},departmentId:{default:""}},setup(e,{expose:b}){const c=e,i=r(!1),p=I("formRef"),t=r({id:c.id,department_id:c.departmentId,title:""}),v=r({title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]});j(()=>{t.value.id!==""&&g()});function g(){i.value=!0,u.detail({department_id:t.value.department_id,id:t.value.id}).then(a=>{i.value=!1,t.value.title=a.data.title})}return b({submit(){return new Promise(a=>{var l;(l=p.value)==null||l.validate(n=>{n&&(t.value.id===""?u.create(t.value).then(()=>{f.success("模拟新增成功"),a()}):u.edit(t.value).then(()=>{f.success("模拟编辑成功"),a()}))})})}}),(a,l)=>{const n=d("ElInput"),R=d("ElFormItem"),k=d("ElForm"),h=U("loading");return w((F(),L("div",null,[m(k,{ref_key:"formRef",ref:p,model:s(t),rules:s(v),"label-width":"120px","label-suffix":"："},{default:_(()=>[m(R,{label:"职位",prop:"title"},{default:_(()=>[m(n,{modelValue:s(t).title,"onUpdate:modelValue":l[0]||(l[0]=x=>s(t).title=x),placeholder:"请输入职位名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[h,s(i)]])}}});export{C as _,u as a};
