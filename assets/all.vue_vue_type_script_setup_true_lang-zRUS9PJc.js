
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aS as g,r as p,y as v,d as k,c as $,o as x,f as t,b as _,k as C,g as s,j as a,_ as B,B as N}from"./index-Bbf2k3Iz.js";const S=g("notification",()=>{const i=p(0),e=p(0),c=v(()=>i.value+e.value);function d(){f(),m()}function f(){i.value=9}function m(){e.value=0}return{message:i,todo:e,total:c,init:d}}),F={class:"flex-center"},M={class:"flex-center"},P=k({__name:"all",setup(i){const e=S();function c(){e.$patch(o=>{o.message+=1})}function d(){e.$patch(o=>{o.message-=o.message>0?1:0})}function f(){e.$patch(o=>{o.todo+=1})}function m(){e.$patch(o=>{o.todo-=o.todo>0?1:0})}return(o,n)=>{const r=C,l=N,u=B;return x(),$("div",null,[t(r,null,{default:s(()=>n[0]||(n[0]=[a(" 消息 ")])),_:1}),_("div",F,[t(u,{onClick:c},{default:s(()=>[t(l,{name:"i-ep:plus"}),n[1]||(n[1]=a(" 1 "))]),_:1}),t(u,{"ml-2":"",onClick:d},{default:s(()=>[t(l,{name:"i-ep:minus"}),n[2]||(n[2]=a(" 1 "))]),_:1})]),t(r,null,{default:s(()=>n[3]||(n[3]=[a(" 待办 ")])),_:1}),_("div",M,[t(u,{onClick:f},{default:s(()=>[t(l,{name:"i-ep:plus"}),n[4]||(n[4]=a(" 1 "))]),_:1}),t(u,{"ml-2":"",onClick:m},{default:s(()=>[t(l,{name:"i-ep:minus"}),n[5]||(n[5]=a(" 1 "))]),_:1})])])}}});export{P as _,S as u};
