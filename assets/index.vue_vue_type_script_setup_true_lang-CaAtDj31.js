
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{cZ as m,d as q,r as c,a as y,D as C,E,b as i,cg as D,P as M,f as o,o as b,l as V,g as t,w as n,h as v,F as S,W as G,c as N}from"./index-D4ACN76T.js";import{a as O}from"./role-drlJy3vm.js";const f={list:l=>m.get("manager/list",{params:l,baseURL:"/mock/"}),detail:l=>m.get("manager/detail",{params:{id:l},baseURL:"/mock/"}),create:l=>m.post("manager/create",l,{baseURL:"/mock/"}),edit:l=>m.post("manager/edit",l,{baseURL:"/mock/"}),delete:l=>m.post("manager/delete",{id:l},{baseURL:"/mock/"}),passwordReset:l=>m.post("manager/password/reset",{id:l},{baseURL:"/mock/"}),changeStatus:l=>m.post("manager/change/status",l,{baseURL:"/mock/"}),check:l=>m.post("manager/check",l,{baseURL:"/mock/"})},W=q({__name:"index",props:{id:{default:""}},setup(l,{expose:k}){const x=l,_=c([]);O.allList().then(r=>{_.value=r.data.list});const g=c(!1),R=y("formRef"),e=c({id:x.id,account:"",name:"",mobile:"",sex:"2",role_id:""}),U=c({account:[{required:!0,message:"请输入帐号",trigger:"blur"}],name:[{required:!0,message:"请输入姓名",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"},{validator:(r,a,u)=>{const d={key:"mobile",value:a};e.value.id!==""&&(d.id=e.value.id),f.check(d).then(p=>{p.data.exist?u(new Error("手机号已存在")):u()})},trigger:"blur"}]});C(()=>{e.value.id!==""&&L()});function L(){g.value=!0,f.detail(e.value.id).then(r=>{g.value=!1,e.value.account=r.data.account,e.value.name=r.data.name,e.value.mobile=r.data.mobile})}return k({submit(){return new Promise(r=>{var a;(a=R.value)==null||a.validate(u=>{u&&(e.value.id===""?f.create(e.value).then(()=>{E.success({message:"模拟新增成功",center:!0}),r()}):f.edit(e.value).then(()=>{E.success({message:"模拟编辑成功",center:!0}),r()}))})})}}),(r,a)=>{const u=i("ElInput"),d=i("ElFormItem"),p=i("ElRadioButton"),w=i("ElRadioGroup"),F=i("ElOption"),B=i("ElSelect"),I=i("ElForm"),h=D("loading");return M((b(),V("div",null,[t(I,{ref_key:"formRef",ref:R,model:o(e),rules:o(U),"label-width":"120px","label-suffix":"："},{default:n(()=>[t(d,{label:"帐号",prop:"account"},{default:n(()=>[t(u,{modelValue:o(e).account,"onUpdate:modelValue":a[0]||(a[0]=s=>o(e).account=s),placeholder:"请输入帐号"},null,8,["modelValue"])]),_:1}),t(d,{label:"姓名",prop:"name"},{default:n(()=>[t(u,{modelValue:o(e).name,"onUpdate:modelValue":a[1]||(a[1]=s=>o(e).name=s),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),t(d,{label:"手机号",prop:"mobile"},{default:n(()=>[t(u,{modelValue:o(e).mobile,"onUpdate:modelValue":a[2]||(a[2]=s=>o(e).mobile=s),placeholder:"请输入手机号"},null,8,["modelValue"])]),_:1}),t(d,{label:"性别",prop:"sex"},{default:n(()=>[t(w,{modelValue:o(e).sex,"onUpdate:modelValue":a[3]||(a[3]=s=>o(e).sex=s)},{default:n(()=>[t(p,{value:"2"},{default:n(()=>a[5]||(a[5]=[v(" 保密 ")])),_:1}),t(p,{value:"1"},{default:n(()=>a[6]||(a[6]=[v(" 男 ")])),_:1}),t(p,{value:"0"},{default:n(()=>a[7]||(a[7]=[v(" 女 ")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(d,{label:"角色",prop:"role_id"},{default:n(()=>[t(B,{modelValue:o(e).role_id,"onUpdate:modelValue":a[4]||(a[4]=s=>o(e).role_id=s),placeholder:"请选择角色",clearable:""},{default:n(()=>[(b(!0),V(S,null,G(o(_),s=>(b(),N(F,{key:s.id,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])])),[[h,o(g)]])}}});export{W as _,f as a};