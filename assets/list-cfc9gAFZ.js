
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{_ as pe}from"./index.vue_vue_type_script_setup_true_lang-BfWgUk_T.js";import{d as fe,x as ge,p as be,r as v,D as ve,V as c,aq as Ee,b as u,cg as Ce,o as C,l as ye,g as t,w as l,e as y,h as o,f as n,k as G,m as w,P as B,t as Ve,c as k,n as S,q as _e,cU as ke,E as ze,_ as xe,Q as P,y as $e,z as N}from"./index-D4ACN76T.js";import{_ as we}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";import{a as q}from"./index.vue_vue_type_script_setup_true_lang-Dnf4J-Az.js";import{_ as Be}from"./index.vue_vue_type_script_setup_true_lang-9JA7Wjas.js";import{u as Se}from"./usePagination-5T-WevXD.js";import{u as De}from"./useTabbar-Bv3Yz9WK.js";const Me={style:{display:"flex","align-items":"center"}},Te={style:{display:"flex","align-items":"center","margin-bottom":"0"}},H=fe({name:"PagesExampleFormModeList",__name:"list",setup(Ue){const L=ge(),{pagination:E,getParams:j,onSizeChange:A,onCurrentChange:O,onSortChange:Q}=Se(),R=De(),z=be(),x=v(!1),m=v("router"),f=v({visible:!1,id:""}),I={title:"",title2:"",title3:"",title4:""},r=v({...I});function J(){Object.assign(r.value,I)}const g=v({enable:!0,selectionDataList:[]}),D=v(!1),F=v([]);ve(()=>{b(),m.value==="router"&&c.on("get-data-list",()=>{b()})}),Ee(()=>{m.value==="router"&&c.off("get-data-list")});function b(){D.value=!0;const i={...j(),...r.value.title&&{title:r.value.title}};q.list(i).then(e=>{D.value=!1,F.value=e.data.list,E.value.total=e.data.total})}function W(i){A(i).then(()=>b())}function d(i=1){O(i).then(()=>b())}function X({prop:i,order:e}){Q(i,e).then(()=>b())}function Y(){m.value==="router"?z.settings.tabbar.enable&&z.settings.tabbar.mergeTabsBy!=="activeMenu"?R.open({name:"standardModuleExampleCreate"}):L.push({name:"standardModuleExampleCreate"}):(f.value.id="",f.value.visible=!0)}function Z(i){m.value==="router"?z.settings.tabbar.enable&&z.settings.tabbar.mergeTabsBy!=="activeMenu"?R.open({name:"standardModuleExampleEdit",params:{id:i.id}}):L.push({name:"standardModuleExampleEdit",params:{id:i.id}}):(f.value.id=i.id,f.value.visible=!0)}function h(i){ke.confirm(`确认删除「${i.title}」吗？`,"确认信息").then(()=>{q.delete(i.id).then(()=>{b(),ze.success({message:"模拟删除成功",center:!0})})}).catch(()=>{})}return(i,e)=>{const ee=u("ElTag"),V=u("ElRadioButton"),K=u("ElRadioGroup"),te=we,$=u("ElInput"),_=u("ElFormItem"),p=u("ElButton"),M=xe,le=u("ElForm"),ne=pe,ae=u("ElDivider"),oe=u("ElButtonGroup"),se=u("ElSpace"),T=u("ElTableColumn"),ie=u("ElTable"),ue=u("ElPagination"),re=me,de=Ce("loading");return C(),ye("div",{class:_e({"absolute-container":n(x)})},[t(te,{title:"标准模块"},{content:l(()=>[y("p",null,[e[19]||(e[19]=o("标准模块即包含 CRUD (增查改删) 操作的基础模块，开发者可通过 ")),t(ee,null,{default:l(()=>e[18]||(e[18]=[o("pnpm run new")])),_:1}),e[20]||(e[20]=o(" 命令快速生成一个标准模块，并在此基础上完善业务模块所需要的功能。"))]),e[28]||(e[28]=y("p",null,"同时，标准模块还提供了两个优秀的特性：",-1)),y("p",Me,[e[23]||(e[23]=y("span",{style:{"margin-inline-end":"20px"}},"特性1：列表展示模式",-1)),t(K,{modelValue:n(x),"onUpdate:modelValue":e[0]||(e[0]=s=>G(x)?x.value=s:null),size:"default"},{default:l(()=>[t(V,{value:!1},{default:l(()=>e[21]||(e[21]=[o(" 默认 ")])),_:1}),t(V,{value:!0},{default:l(()=>e[22]||(e[22]=[o(" 列表高度自适应 ")])),_:1})]),_:1},8,["modelValue"])]),y("p",Te,[e[27]||(e[27]=y("span",{style:{"margin-inline-end":"20px"}},"特性2：表单展示模式",-1)),t(K,{modelValue:n(m),"onUpdate:modelValue":e[1]||(e[1]=s=>G(m)?m.value=s:null),size:"default"},{default:l(()=>[t(V,{value:"router"},{default:l(()=>e[24]||(e[24]=[o(" 路由跳转 ")])),_:1}),t(V,{value:"dialog"},{default:l(()=>e[25]||(e[25]=[o(" 对话框 ")])),_:1}),t(V,{value:"drawer"},{default:l(()=>e[26]||(e[26]=[o(" 抽屉 ")])),_:1})]),_:1},8,["modelValue"])])]),_:1}),t(re,null,{default:l(()=>[t(ne,{"show-toggle":!1},{default:l(({fold:s,toggle:U})=>[t(le,{model:n(r),size:"default","label-width":"100px","inline-message":"",inline:"",class:"search-form"},{default:l(()=>[t(_,{label:"标题"},{default:l(()=>[t($,{modelValue:n(r).title,"onUpdate:modelValue":e[2]||(e[2]=a=>n(r).title=a),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[3]||(e[3]=w(a=>d(),["enter"])),onClear:e[4]||(e[4]=a=>d())},null,8,["modelValue"])]),_:1}),B(t(_,{label:"标题2"},{default:l(()=>[t($,{modelValue:n(r).title2,"onUpdate:modelValue":e[5]||(e[5]=a=>n(r).title2=a),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[6]||(e[6]=w(a=>d(),["enter"])),onClear:e[7]||(e[7]=a=>d())},null,8,["modelValue"])]),_:2},1536),[[P,!s]]),B(t(_,{label:"标题3"},{default:l(()=>[t($,{modelValue:n(r).title3,"onUpdate:modelValue":e[8]||(e[8]=a=>n(r).title3=a),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[9]||(e[9]=w(a=>d(),["enter"])),onClear:e[10]||(e[10]=a=>d())},null,8,["modelValue"])]),_:2},1536),[[P,!s]]),B(t(_,{label:"标题4"},{default:l(()=>[t($,{modelValue:n(r).title4,"onUpdate:modelValue":e[11]||(e[11]=a=>n(r).title4=a),placeholder:"请输入标题，支持模糊查询",clearable:"",onKeydown:e[12]||(e[12]=w(a=>d(),["enter"])),onClear:e[13]||(e[13]=a=>d())},null,8,["modelValue"])]),_:2},1536),[[P,!s]]),t(_,null,{default:l(()=>[t(p,{onClick:e[14]||(e[14]=a=>{J(),d()})},{default:l(()=>e[29]||(e[29]=[o(" 重置 ")])),_:1}),t(p,{type:"primary",onClick:e[15]||(e[15]=a=>d())},{icon:l(()=>[t(M,{name:"i-ep:search"})]),default:l(()=>[e[30]||(e[30]=o(" 筛选 "))]),_:1}),t(p,{link:"",onClick:U},{icon:l(()=>[t(M,{name:s?"i-ep:caret-bottom":"i-ep:caret-top"},null,8,["name"])]),default:l(()=>[o(" "+Ve(s?"展开":"收起"),1)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["model"])]),_:1}),t(ae,{"border-style":"dashed"}),t(se,{wrap:""},{default:l(()=>[t(p,{type:"primary",size:"default",onClick:Y},{icon:l(()=>[t(M,{name:"i-ep:plus"})]),default:l(()=>[e[31]||(e[31]=o(" 新增 "))]),_:1}),n(g).enable?(C(),k(p,{key:0,size:"default",disabled:!n(g).selectionDataList.length},{default:l(()=>e[32]||(e[32]=[o(" 单个批量操作按钮 ")])),_:1},8,["disabled"])):S("",!0),n(g).enable?(C(),k(oe,{key:1},{default:l(()=>[t(p,{size:"default",disabled:!n(g).selectionDataList.length},{default:l(()=>e[33]||(e[33]=[o(" 批量操作按钮组1 ")])),_:1},8,["disabled"]),t(p,{size:"default",disabled:!n(g).selectionDataList.length},{default:l(()=>e[34]||(e[34]=[o(" 批量操作按钮组2 ")])),_:1},8,["disabled"])]),_:1})):S("",!0)]),_:1}),B((C(),k(ie,{class:"my-4",data:n(F),stripe:"","highlight-current-row":"",border:"",height:"100%",onSortChange:X,onSelectionChange:e[16]||(e[16]=s=>n(g).selectionDataList=s)},{default:l(()=>[n(g).enable?(C(),k(T,{key:0,type:"selection",align:"center",fixed:""})):S("",!0),t(T,{prop:"title",label:"标题"}),t(T,{label:"操作",width:"250",align:"center",fixed:"right"},{default:l(s=>[t(p,{type:"primary",size:"small",plain:"",onClick:U=>Z(s.row)},{default:l(()=>e[35]||(e[35]=[o(" 编辑 ")])),_:2},1032,["onClick"]),t(p,{type:"danger",size:"small",plain:"",onClick:U=>h(s.row)},{default:l(()=>e[36]||(e[36]=[o(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[de,n(D)]]),t(ue,{"current-page":n(E).page,total:n(E).total,"page-size":n(E).size,"page-sizes":n(E).sizes,layout:n(E).layout,"hide-on-single-page":!1,class:"pagination",background:"",onSizeChange:W,onCurrentChange:d},null,8,["current-page","total","page-size","page-sizes","layout"])]),_:1}),n(m)==="dialog"||n(m)==="drawer"?(C(),k(Be,{key:0,id:n(f).id,modelValue:n(f).visible,"onUpdate:modelValue":e[17]||(e[17]=s=>n(f).visible=s),mode:n(m),onSuccess:b},null,8,["id","modelValue","mode"])):S("",!0)],2)}}});typeof N=="function"&&N(H);const Ne=$e(H,[["__scopeId","data-v-325986d6"]]);export{Ne as default};