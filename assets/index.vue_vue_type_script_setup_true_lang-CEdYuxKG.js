
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{c2 as o,d as h,r,aT as U,M as w,aR as f,l as i,c6 as I,w as L,e as s,c as F,o as V,f as u,g as p}from"./index-Bbf2k3Iz.js";const m={list:e=>o.get("standard_module/list",{params:e,baseURL:"/mock/"}),detail:e=>o.get("standard_module/detail",{params:{id:e},baseURL:"/mock/"}),create:e=>o.post("standard_module/create",e,{baseURL:"/mock/"}),edit:e=>o.post("standard_module/edit",e,{baseURL:"/mock/"}),delete:e=>o.post("standard_module/delete",{id:e},{baseURL:"/mock/"})},M=h({__name:"index",props:{id:{default:""}},setup(e,{expose:_}){const v=e,d=r(!1),c=U("formRef"),t=r({id:v.id,title:""}),R=r({title:[{required:!0,message:"请输入标题",trigger:"blur"}]});w(()=>{t.value.id!==""&&b()});function b(){d.value=!0,m.detail(t.value.id).then(a=>{d.value=!1,t.value.title=a.data.title})}return _({submit(){return new Promise(a=>{var l;(l=c.value)==null||l.validate(n=>{n&&(t.value.id===""?m.create(t.value).then(()=>{f.success("模拟新增成功"),a()}):m.edit(t.value).then(()=>{f.success("模拟编辑成功"),a()}))})})}}),(a,l)=>{const n=i("ElInput"),g=i("ElFormItem"),k=i("ElForm"),x=I("loading");return L((V(),F("div",null,[u(k,{ref_key:"formRef",ref:c,model:s(t),rules:s(R),"label-width":"120px","label-suffix":"："},{default:p(()=>[u(g,{label:"标题",prop:"title"},{default:p(()=>[u(n,{modelValue:s(t).title,"onUpdate:modelValue":l[0]||(l[0]=E=>s(t).title=E),placeholder:"请输入标题"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[x,s(d)]])}}});export{M as _,m as a};
