
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as P}from"./index.vue_vue_type_script_setup_true_lang-BfWgUk_T.js";import{d as j,aK as A,u as G,j as L,r as I,D as K,s as E,a as W,L as q,o as g,c as N,w as t,e as x,t as S,f as o,g as e,l as V,F as Q,W as X,i as Y,aD as Z,$ as ee,h as k,am as te,_ as F,G as oe,y as le,b as u,E as ae,z as H}from"./index-D4ACN76T.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import se from"./HDropdown-Brcdi43h.js";import{_ as ie}from"./HDialog.vue_vue_type_script_setup_true_lang-0BJtjt41.js";import{_ as re}from"./HInput.vue_vue_type_script_setup_true_lang-6PVEEFJ7.js";import{S as de}from"./sortable.esm-Cw1ESr5Y.js";import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";const ce={class:"w-40"},me={class:"flex items-center justify-between px-4 py-3"},pe={class:"text-sm font-bold"},_e=["title","onClick"],fe={class:"name flex-1 truncate pe-4"},be={class:"right-1 h-5 w-6 rounded-full text-stone-3 !absolute dark-text-stone-7 hover-text-stone-7 dark-hover-text-stone-3"},ge={key:1,flex:"center col","py-6":"","text-stone-5":""},ve={"m-2":"","text-base":""},J=j({name:"StorageBox",__name:"index",props:{data:{},name:{},title:{}},emits:["takeOut"],setup(h,{emit:b}){const n=h,w=b,D=A(),{t:_}=G(),l=L(),m=I([]),r=I({visible:!1,name:""});K(()=>{y()});function C(){r.value.name?(m.value.push({title:r.value.name,content:JSON.stringify(n.data)}),p(),r.value.visible=!1,r.value.name=""):te.warning("名称不能为空",{zIndex:2e3})}function B(a){w("takeOut",JSON.parse(a))}function O(a){m.value.splice(a,1),p()}function f(a,s){m.value.splice(a,0,m.value.splice(s,1)[0]),p()}function p(){const a=E.session.has("storageBoxData")?JSON.parse(E.session.get("storageBoxData")):{};a[l.account]=a[l.account]||{},a[l.account][n.name]=m.value,E.session.set("storageBoxData",JSON.stringify(a))}function y(){E.session.has("storageBoxData")&&(m.value=JSON.parse(E.session.get("storageBoxData"))[l.account][n.name]||[])}const c=W("containerRef");return q(()=>c.value,a=>{a&&new de(a,{animation:200,ghostClass:"draggable-ghost",draggable:".draggable-item",onUpdate:s=>{s.newIndex!==void 0&&s.oldIndex!==void 0&&f(s.newIndex,s.oldIndex)}})}),(a,s)=>{const v=F,U=re,$=oe,T=ie,z=se;return g(),N(z,{placement:"bottom"},{dropdown:t(()=>[x("div",ce,[x("div",me,[x("div",pe,S(a.title??o(_)("title")),1),e(v,{name:"i-ep:plus",class:"cursor-pointer text-base",onClick:s[3]||(s[3]=d=>o(r).visible=!0)})]),e(o(Z),{options:{scrollbars:{autoHide:"leave",autoHideDelay:300}},defer:"",class:"max-h-200px"},{default:t(()=>[o(m).length>0?(g(),V("div",{key:0,ref_key:"containerRef",ref:c,class:"flex flex-col gap-2 px-4 pb-4"},[(g(!0),V(Q,null,X(o(m),(d,i)=>(g(),V("div",{key:`${i}_${d.title}`,title:d.title,class:"draggable-item relative flex cursor-pointer items-center rounded px-2 py-2 ring-1 ring-stone-3 ring-inset hover-bg-stone-1 dark-ring-stone-7 dark-hover-bg-dark/50",onClick:M=>B(d.content)},[x("div",fe,S(d.title),1),x("div",be,[e(v,{name:"i-ep:delete",size:14,onClick:Y(M=>O(i),["stop"])},null,8,["onClick"])])],8,_e))),128))],512)):(g(),V("div",ge,[e(v,{name:"i-tabler:mood-empty",size:40}),x("p",ve,S(o(_)("empty")),1)]))]),_:1})])]),default:t(()=>[o(D).default?ee(a.$slots,"default",{key:0},void 0,!0):(g(),N(v,{key:1,name:"i-ep:message-box",size:16})),e(T,{modelValue:o(r).visible,"onUpdate:modelValue":s[2]||(s[2]=d=>o(r).visible=d),title:o(_)("dialogTitle")},{footer:t(()=>[e($,{outline:"",class:"mr-2",onClick:s[1]||(s[1]=d=>o(r).visible=!1)},{default:t(()=>[k(S(o(_)("cancel")),1)]),_:1}),e($,{onClick:C},{default:t(()=>[k(S(o(_)("confirm")),1)]),_:1})]),default:t(()=>[e(U,{modelValue:o(r).name,"onUpdate:modelValue":s[0]||(s[0]=d=>o(r).name=d),class:"w-full!"},null,8,["modelValue"])]),_:1},8,["modelValue","title"])]),_:3})}}});function R(h){const b=h;b.__i18n=b.__i18n||[],b.__i18n.push({locale:"",resource:{"zh-cn":{title:{t:0,b:{t:2,i:[{t:3}],s:"储存箱"}},dialogTitle:{t:0,b:{t:2,i:[{t:3}],s:"请输入一个方便记忆的名称"}},confirm:{t:0,b:{t:2,i:[{t:3}],s:"确认"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"取消"}},empty:{t:0,b:{t:2,i:[{t:3}],s:"空空如也"}}},"zh-tw":{title:{t:0,b:{t:2,i:[{t:3}],s:"儲存箱"}},dialogTitle:{t:0,b:{t:2,i:[{t:3}],s:"請輸入一個方便記憶的名稱"}},confirm:{t:0,b:{t:2,i:[{t:3}],s:"確認"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"取消"}},empty:{t:0,b:{t:2,i:[{t:3}],s:"空空如也"}}},en:{title:{t:0,b:{t:2,i:[{t:3}],s:"Storage Box"}},dialogTitle:{t:0,b:{t:2,i:[{t:3}],s:"Please enter a name that is easy to remember"}},confirm:{t:0,b:{t:2,i:[{t:3}],s:"Confirm"}},cancel:{t:0,b:{t:2,i:[{t:3}],s:"Cancel"}},empty:{t:0,b:{t:2,i:[{t:3}],s:"Empty"}}}}})}typeof R=="function"&&R(J);const xe=le(J,[["__scopeId","data-v-8a8f2b5b"]]),ke=j({name:"ComponentExampleStorageBox",__name:"storagebox",setup(h){const b=I([]),n=I({name:"",department_id:"",department_job_id:"",role_id:"",check1:!1,check2:!1});function w(){ae.info("模拟触发搜索")}function D(_){n.value=_,w()}return(_,l)=>{const m=ue,r=u("ElAlert"),C=xe,B=ne,O=u("ElInput"),f=u("ElFormItem"),p=u("ElCol"),y=u("ElRow"),c=u("ElOption"),a=u("ElSelect"),s=u("ElCheckbox"),v=F,U=u("ElButton"),$=u("ElText"),T=u("ElSpace"),z=u("ElForm"),d=P;return g(),V("div",null,[e(m,{title:"储存箱",content:"StorageBox"}),e(B,{title:"你可以将页面中的数据（object/array）储存到该组件内，并在需要的时候取出来"},{default:t(()=>[e(r,{"show-icon":"",title:"该组件需要搭配业务场景使用。",closable:!1}),e(C,{data:o(b),name:"box1",style:{"margin-top":"10px"}},null,8,["data"])]),_:1}),e(B,{title:"推荐场景：具有复杂筛选项的页面，并记录常用的筛选条件"},{default:t(()=>[e(d,{"show-toggle":!1},{default:t(()=>[e(z,{model:o(n),size:"default","label-width":"120px"},{default:t(()=>[e(y,null,{default:t(()=>[e(p,{span:12},{default:t(()=>[e(f,{label:"姓名 / 手机号"},{default:t(()=>[e(O,{modelValue:o(n).name,"onUpdate:modelValue":l[0]||(l[0]=i=>o(n).name=i),placeholder:"请输入姓名或者手机号，支持模糊查询",clearable:""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p,{span:6},{default:t(()=>[e(f,{label:"部门"},{default:t(()=>[e(a,{modelValue:o(n).department_id,"onUpdate:modelValue":l[1]||(l[1]=i=>o(n).department_id=i),clearable:"",placeholder:"请选择部门"},{default:t(()=>[e(c,{label:"技术部",value:1}),e(c,{label:"设计部",value:2}),e(c,{label:"行政部",value:3})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(f,{label:"职位"},{default:t(()=>[e(a,{modelValue:o(n).department_job_id,"onUpdate:modelValue":l[2]||(l[2]=i=>o(n).department_job_id=i),clearable:"",placeholder:"请选择职位"},{default:t(()=>[e(c,{label:"程序员",value:1}),e(c,{label:"设计师",value:2}),e(c,{label:"人事",value:3})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(p,{span:6},{default:t(()=>[e(f,{label:"角色"},{default:t(()=>[e(a,{modelValue:o(n).role_id,"onUpdate:modelValue":l[3]||(l[3]=i=>o(n).role_id=i),clearable:"",placeholder:"请选择角色"},{default:t(()=>[e(c,{label:"主管",value:1}),e(c,{label:"普通职员",value:2})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(y,null,{default:t(()=>[e(p,{span:24},{default:t(()=>[e(f,{label:"角色"},{default:t(()=>[e(s,{modelValue:o(n).check1,"onUpdate:modelValue":l[4]||(l[4]=i=>o(n).check1=i)},{default:t(()=>l[6]||(l[6]=[k(" 备选项 ")])),_:1},8,["modelValue"]),e(s,{modelValue:o(n).check2,"onUpdate:modelValue":l[5]||(l[5]=i=>o(n).check2=i)},{default:t(()=>l[7]||(l[7]=[k(" 备选项 ")])),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(f,null,{default:t(()=>[e(T,null,{default:t(()=>[e(U,{type:"primary",onClick:w},{icon:t(()=>[e(v,{name:"i-ep:search"})]),default:t(()=>[l[8]||(l[8]=k(" 筛选 "))]),_:1}),e(C,{data:o(n),name:"box2",title:"我的快捷筛选",onTakeOut:D},{default:t(()=>[e($,null,{default:t(()=>l[9]||(l[9]=[k(" 保存当前筛选 ")])),_:1})]),_:1},8,["data"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})])}}});typeof H=="function"&&H(ke);export{ke as default};