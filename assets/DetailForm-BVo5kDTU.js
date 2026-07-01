
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,Ct as t,D as n,Q as r,Vt as i,W as a,at as o,dt as s,ft as c,k as l,q as u}from"./vue.runtime.esm-bundler-BVTUj4HC.js";import{V as d,ot as f}from"./src-BKeb4UGC.js";import{nt as p,rt as m}from"./index-CzpIPJyc.js";import{t as h}from"./department-CfW-u8Vn.js";var g=l({__name:`index`,props:{id:{default:``}},setup(i,{expose:l}){let g=i,_=t(!1),v=o(`formRef`),y=t({id:g.id,title:``}),b={title(e){return e.trim()?!0:`请输入部门名称`}};a(()=>{y.value.id!==``&&x()});function x(){_.value=!0,h.detail(y.value.id).then(e=>{_.value=!1,y.value.title=e.data.title}).catch(()=>{_.value=!1})}async function S(){return(await v.value?.validate())?.valid?(y.value.id===``?(await h.create(y.value),d().success(`模拟新增成功`)):(await h.edit(y.value),d().success(`模拟编辑成功`)),!0):!1}return l({submit:S}),(t,i)=>{let a=f,o=m,l=p,d=r(`loading`);return c((u(),e(`div`,null,[n(l,{ref_key:`formRef`,ref:v,model:y.value,"validation-schema":b,"label-placement":`right`,"label-width":120},{default:s(()=>[n(o,{name:`title`,label:`部门`,required:``},{default:s(()=>[n(a,{placeholder:`请输入部门名称`,class:`w-full`})]),_:1})]),_:1},8,[`model`])])),[[d,_.value]])}}}),_=i({default:()=>v}),v=g;export{_ as n,v as t};