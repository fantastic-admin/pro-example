
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{_ as ae}from"./index.vue_vue_type_script_setup_true_lang-BfWgUk_T.js";import{d as oe,r as f,D as le,V as B,aq as ie,b as s,cg as se,o as _,l as re,g as t,w as a,f as n,m as ue,h as r,t as de,c as C,n as y,P as me,q as pe,cU as fe,E as ce,_ as ge,y as _e,z as S}from"./index-D4ACN76T.js";import{_ as be}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";import{a as V}from"./department-CigpwRTD.js";import{_ as ve}from"./index.vue_vue_type_script_setup_true_lang-nAQZSD_N.js";import{u as Ce}from"./usePagination-5T-WevXD.js";import{u as Ee}from"./useTabbar-Bv3Yz9WK.js";import"./index.vue_vue_type_script_setup_true_lang-c_2O4j_k.js";const L=oe({name:"PagesExampleDepartmentList",__name:"list",setup(ye){const{pagination:c,getParams:P,onSizeChange:I,onCurrentChange:M,onSortChange:T}=Ce(),k=Ee(),G=f(!1),u=f("router"),d=f({visible:!1,id:""}),w={title:""},g=f({...w});function F(){Object.assign(g.value,w)}const m=f({enable:!0,selectionDataList:[]}),z=f(!1),$=f([]);le(()=>{p(),u.value==="router"&&B.on("get-data-list",()=>{p()})}),ie(()=>{u.value==="router"&&B.off("get-data-list")});function p(){z.value=!0;const o={...P(),...g.value.title&&{title:g.value.title}};V.list(o).then(e=>{z.value=!1,$.value=e.data.list,c.value.total=e.data.total})}function U(o){I(o).then(()=>p())}function b(o=1){M(o).then(()=>p())}function N({prop:o,order:e}){T(o,e).then(()=>p())}function q(){u.value==="router"?k.open({name:"pagesExampleGeneralDepartmentCreate"}):(d.value.id="",d.value.visible=!0)}function H(o){u.value==="router"?k.open({name:"pagesExampleGeneralDepartmentEdit",params:{id:o.id}}):(d.value.id=o.id,d.value.visible=!0)}function J(o){fe.confirm(`确认删除「${o.title}」吗？`,"确认信息").then(()=>{V.delete(o.id).then(()=>{p(),ce.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}function K(o){k.open({name:"pagesExampleGeneralJobList",params:{department_id:o.id}})}return(o,e)=>{const j=be,A=s("ElInput"),x=s("ElFormItem"),l=s("ElButton"),D=ge,O=s("ElForm"),R=ae,Q=s("ElDivider"),W=s("ElButtonGroup"),X=s("ElSpace"),h=s("ElTableColumn"),Y=s("ElTable"),Z=s("ElPagination"),ee=ne,te=se("loading");return _(),re("div",{class:pe({"absolute-container":n(G)})},[t(j,{title:"部门管理",content:"页面数据为 Mock 示例数据，非真实数据。"}),t(ee,null,{default:a(()=>[t(R,{"show-toggle":!1},{default:a(({fold:i,toggle:E})=>[t(O,{model:n(g),size:"default","label-width":"100px","inline-message":"",inline:"",class:"search-form"},{default:a(()=>[t(x,{label:"部门"},{default:a(()=>[t(A,{modelValue:n(g).title,"onUpdate:modelValue":e[0]||(e[0]=v=>n(g).title=v),placeholder:"请输入部门，支持模糊查询",clearable:"",onKeydown:e[1]||(e[1]=ue(v=>b(),["enter"])),onClear:e[2]||(e[2]=v=>b())},null,8,["modelValue"])]),_:1}),t(x,null,{default:a(()=>[t(l,{onClick:e[3]||(e[3]=v=>{F(),b()})},{default:a(()=>e[7]||(e[7]=[r(" 重置 ")])),_:1}),t(l,{type:"primary",onClick:e[4]||(e[4]=v=>b())},{icon:a(()=>[t(D,{name:"i-ep:search"})]),default:a(()=>[e[8]||(e[8]=r(" 筛选 "))]),_:1}),t(l,{link:"",disabled:"",onClick:E},{icon:a(()=>[t(D,{name:i?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])]),default:a(()=>[r(" "+de(i?"展开":"收起"),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["model"])]),_:1}),t(Q,{"border-style":"dashed"}),t(X,{wrap:""},{default:a(()=>[t(l,{type:"primary",size:"default",onClick:q},{icon:a(()=>[t(D,{name:"i-ep:plus"})]),default:a(()=>[e[9]||(e[9]=r(" 新增部门 "))]),_:1}),n(m).enable?(_(),C(l,{key:0,size:"default",disabled:!n(m).selectionDataList.length},{default:a(()=>e[10]||(e[10]=[r(" 单个批量操作按钮 ")])),_:1},8,["disabled"])):y("",!0),n(m).enable?(_(),C(W,{key:1},{default:a(()=>[t(l,{size:"default",disabled:!n(m).selectionDataList.length},{default:a(()=>e[11]||(e[11]=[r(" 批量操作按钮组1 ")])),_:1},8,["disabled"]),t(l,{size:"default",disabled:!n(m).selectionDataList.length},{default:a(()=>e[12]||(e[12]=[r(" 批量操作按钮组2 ")])),_:1},8,["disabled"])]),_:1})):y("",!0)]),_:1}),me((_(),C(Y,{class:"my-4",data:n($),stripe:"","highlight-current-row":"",border:"",height:"100%",onSortChange:N,onSelectionChange:e[5]||(e[5]=i=>n(m).selectionDataList=i)},{default:a(()=>[n(m).enable?(_(),C(h,{key:0,type:"selection",width:"40"})):y("",!0),t(h,{prop:"title",label:"部门"}),t(h,{label:"操作",width:"250",align:"center"},{default:a(i=>[t(l,{type:"info",size:"small",plain:"",onClick:E=>K(i.row)},{default:a(()=>e[13]||(e[13]=[r(" 查看职位 ")])),_:2},1032,["onClick"]),t(l,{type:"primary",size:"small",plain:"",onClick:E=>H(i.row)},{default:a(()=>e[14]||(e[14]=[r(" 编辑 ")])),_:2},1032,["onClick"]),t(l,{type:"danger",size:"small",plain:"",onClick:E=>J(i.row)},{default:a(()=>e[15]||(e[15]=[r(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[te,n(z)]]),t(Z,{"current-page":n(c).page,total:n(c).total,"page-size":n(c).size,"page-sizes":n(c).sizes,layout:n(c).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:U,onCurrentChange:b},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),n(u)==="dialog"||n(u)==="drawer"?(_(),C(ve,{key:0,id:n(d).id,modelValue:n(d).visible,"onUpdate:modelValue":e[6]||(e[6]=i=>n(d).visible=i),mode:n(u),onSuccess:p},null,8,["id","modelValue","mode"])):y("",!0)],2)}}});typeof S=="function"&&S(L);const Ve=_e(L,[["__scopeId","data-v-3f417080"]]);export{Ve as default};