
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as R,aj as j,ak as G,r as O,b as p,o as n,l as f,P as z,Q as B,c as u,w as t,e as Q,g as s,h as m,n as g,F as V,W as E,t as c,f as _,cR as b,E as W,y as q}from"./index-D4ACN76T.js";const A={key:0},H={key:0},J={key:0},K={key:0},X={key:0},Y={key:0,style:{padding:"10px"}},Z=R({__name:"index",props:j({type:{default:1},readonly:{type:Boolean,default:!1}},{modelValue:{default:[]},modelModifiers:{}}),emits:["update:modelValue"],setup(D){const d=G(D,"modelValue"),o=O({index:"",visible:!1,checkList:[],disableList:[]});function C(){o.value.index="",o.value.checkList=[],o.value.disableList=U(),o.value.visible=!0}function F(){o.value.checkList.length===0?W({message:"请勾选区域",type:"warning"}):(o.value.index!==""?d.value[o.value.index].list=o.value.checkList:d.value.push({list:o.value.checkList,first_step:"",first_price:"",continued_step:"",continued_price:""}),o.value.visible=!1)}function T(l){o.value.index=l,o.value.checkList=d.value[l].list,o.value.disableList=U(l),o.value.visible=!0}function $(l){d.value.splice(l,1)}function M(l,a){d.value[l].list.splice(d.value[l].list.indexOf(a),1),d.value[l].list.length===0&&d.value.splice(l,1)}function L(l){let a="";for(const r in b)b[r].code===l&&(a=b[r].name);return a}function U(l){const a=[];for(let r=0;r<d.value.length;r++)l!==r&&a.push(...d.value[r].list);return a}return(l,a)=>{const r=p("ElTag"),h=p("ElCol"),v=p("ElButton"),x=p("ElRow"),y=p("ElTableColumn"),k=p("ElInput"),N=p("ElTable"),S=p("ElCheckbox"),I=p("ElCheckboxGroup"),P=p("ElDialog");return n(),f("div",null,[l.readonly&&d.value.length===0?g("",!0):z((n(),u(N,{key:0,data:d.value,border:"",class:"freight"},{empty:t(()=>a[4]||(a[4]=[Q("span",null,null,-1)])),append:t(()=>[l.readonly?g("",!0):(n(),f("div",Y,[s(v,{type:"primary",size:"small",plain:"",style:{width:"100%"},onClick:C},{default:t(()=>a[5]||(a[5]=[m(" 新增一条运费模版 ")])),_:1})]))]),default:t(()=>[s(y,{label:"运送到"},{default:t(e=>[l.readonly?(n(),f("div",A,[(n(!0),f(V,null,E(e.row.list,(i,w)=>(n(),u(r,{key:w,type:"info"},{default:t(()=>[m(c(L(i)),1)]),_:2},1024))),128))])):(n(),u(x,{key:1,type:"flex",align:"middle",justify:"space-between"},{default:t(()=>[s(h,null,{default:t(()=>[(n(!0),f(V,null,E(e.row.list,(i,w)=>(n(),u(r,{key:w,"disable-transitions":!0,type:"info",closable:"",onClose:ee=>M(e.$index,i)},{default:t(()=>[m(c(L(i)),1)]),_:2},1032,["onClose"]))),128))]),_:2},1024),s(h,{style:{width:"100px","text-align":"right"}},{default:t(()=>[s(v,{size:"small",plain:"",onClick:i=>T(e.$index)},{default:t(()=>a[2]||(a[2]=[m(" 编 辑 ")])),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))]),_:1}),s(y,{label:l.type===1?"首件数（件）":"首重量（kg）",width:"150",align:"center"},{default:t(e=>[l.readonly?(n(),f("span",H,c(e.row.first_step),1)):(n(),u(k,{key:1,modelValue:e.row.first_step,"onUpdate:modelValue":i=>e.row.first_step=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1},8,["label"]),s(y,{label:"首费（元）",width:"150",align:"center"},{default:t(e=>[l.readonly?(n(),f("span",J,c(e.row.first_price),1)):(n(),u(k,{key:1,modelValue:e.row.first_price,"onUpdate:modelValue":i=>e.row.first_price=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1}),s(y,{label:l.type===1?"续件数（件）":"续重量（kg）",width:"150",align:"center"},{default:t(e=>[l.readonly?(n(),f("span",K,c(e.row.continued_step),1)):(n(),u(k,{key:1,modelValue:e.row.continued_step,"onUpdate:modelValue":i=>e.row.continued_step=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1},8,["label"]),s(y,{label:"续费（元）",width:"150",align:"center"},{default:t(e=>[l.readonly?(n(),f("span",X,c(e.row.continued_price),1)):(n(),u(k,{key:1,modelValue:e.row.continued_price,"onUpdate:modelValue":i=>e.row.continued_price=i,size:"small"},null,8,["modelValue","onUpdate:modelValue"]))]),_:1}),l.readonly?g("",!0):(n(),u(y,{key:0,label:"操作",width:"100",align:"center"},{default:t(e=>[s(v,{type:"danger",size:"small",plain:"",onClick:i=>$(e.$index)},{default:t(()=>a[3]||(a[3]=[m(" 删 除 ")])),_:2},1032,["onClick"])]),_:1}))]),_:1},8,["data"])),[[B,d.value.length!==0]]),l.readonly?g("",!0):z((n(),u(v,{key:1,type:"primary",size:"default",plain:"",onClick:C},{default:t(()=>a[6]||(a[6]=[m(" 为指定地区设置运费模版 ")])),_:1},512)),[[B,d.value.length===0]]),s(P,{modelValue:_(o).visible,"onUpdate:modelValue":a[1]||(a[1]=e=>_(o).visible=e),title:"选择地区",width:"800px","append-to-body":""},{footer:t(()=>[s(v,{type:"primary",onClick:F},{default:t(()=>a[7]||(a[7]=[m(" 确 定 ")])),_:1})]),default:t(()=>[s(I,{modelValue:_(o).checkList,"onUpdate:modelValue":a[0]||(a[0]=e=>_(o).checkList=e),style:{"margin-inline-start":"50px"}},{default:t(()=>[s(x,null,{default:t(()=>[(n(!0),f(V,null,E(_(b),(e,i)=>(n(),u(h,{key:i,span:6},{default:t(()=>[s(S,{value:e.code,disabled:_(o).disableList.includes(e.code)},{default:t(()=>[m(c(e.name),1)]),_:2},1032,["value","disabled"])]),_:2},1024))),128))]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}}),te=q(Z,[["__scopeId","data-v-0f3e0b59"]]);export{te as default};