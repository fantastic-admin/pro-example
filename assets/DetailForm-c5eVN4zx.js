
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{$ as e,A as t,K as n,Nt as r,O as i,Y as a,et as o,mt as s,pt as c,st as l,w as u,wt as d}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{a as f,q as p}from"./components-Dvnhr4Ep.js";import{t as m}from"./department-fNTgi2kx.js";var h=t({__name:`index`,props:{id:{default:``}},setup(t,{expose:h}){let g=t,_=d(!1),v=l(`formRef`),y=d({id:g.id,title:``}),b=d({title:[{required:!0,message:`请输入部门名称`,trigger:`blur`}]});n(()=>{y.value.id!==``&&x()});function x(){_.value=!0,m.detail(y.value.id).then(e=>{_.value=!1,y.value.title=e.data.title})}return h({submit(){return new Promise(e=>{v.value?.validate(t=>{t&&(y.value.id===``?m.create(y.value).then(()=>{f.success(`模拟新增成功`),e()}):m.edit(y.value).then(()=>{f.success(`模拟编辑成功`),e()}))})})}}),(t,n)=>{let l=p,d=e(`ElFormItem`),f=e(`ElForm`),m=o(`loading`);return s((a(),u(`div`,null,[i(f,{ref_key:`formRef`,ref:v,model:r(y),rules:r(b),"label-width":`120px`,"label-suffix":`：`,size:`default`},{default:c(()=>[i(d,{label:`部门`,prop:`title`},{default:c(()=>[i(l,{modelValue:r(y).title,"onUpdate:modelValue":n[0]||(n[0]=e=>r(y).title=e),placeholder:`请输入部门名称`,class:`w-full`},null,8,[`modelValue`])]),_:1})]),_:1},8,[`model`,`rules`])])),[[m,r(_)]])}}});export{h as t};