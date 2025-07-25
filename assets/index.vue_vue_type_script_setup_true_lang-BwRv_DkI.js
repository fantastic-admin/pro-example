
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c4 as o,d as I,r as n,a9 as h,X as U,a$ as p,E as r,c8 as j,w,k as l,e as L,f as F,g as d,i as f}from"./index-DODNO_Fi.js";const m={list:e=>o.get("job/list",{params:e,baseURL:"/mock/"}),detail:e=>o.get("job/detail",{params:e,baseURL:"/mock/"}),create:e=>o.post("job/create",e,{baseURL:"/mock/"}),edit:e=>o.post("job/edit",e,{baseURL:"/mock/"}),delete:e=>o.post("job/delete",{id:e},{baseURL:"/mock/"})},C=I({__name:"index",props:{id:{default:""},departmentId:{default:""}},setup(e,{expose:_}){const u=e,i=n(!1),c=h("formRef"),t=n({id:u.id,department_id:u.departmentId,title:""}),b=n({title:[{required:!0,message:"请输入职位名称",trigger:"blur"}]});U(()=>{t.value.id!==""&&v()});function v(){i.value=!0,m.detail({department_id:t.value.department_id,id:t.value.id}).then(a=>{i.value=!1,t.value.title=a.data.title})}return _({submit(){return new Promise(a=>{c.value?.validate(s=>{s&&(t.value.id===""?m.create(t.value).then(()=>{p.success("模拟新增成功"),a()}):m.edit(t.value).then(()=>{p.success("模拟编辑成功"),a()}))})})}}),(a,s)=>{const g=r("ElInput"),R=r("ElFormItem"),k=r("ElForm"),E=j("loading");return w((F(),L("div",null,[d(k,{ref_key:"formRef",ref:c,model:l(t),rules:l(b),"label-width":"120px","label-suffix":"："},{default:f(()=>[d(R,{label:"职位",prop:"title"},{default:f(()=>[d(g,{modelValue:l(t).title,"onUpdate:modelValue":s[0]||(s[0]=x=>l(t).title=x),placeholder:"请输入职位名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[E,l(i)]])}}});export{C as _,m as a};
