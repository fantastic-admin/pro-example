
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{b2 as g,r as p,K as v,d as C,f as $,g as k,h as o,i as _,E as x,j as s,C as a,D as N,N as B}from"./index-CsSDrlYc.js";const F=g("notification",()=>{const i=p(0),e=p(0),d=v(()=>i.value+e.value);function c(){f(),m()}function f(){i.value=9}function m(){e.value=0}return{message:i,todo:e,total:d,init:c}}),M={class:"flex-center"},S={class:"flex-center"},D=C({__name:"all",setup(i){const e=F();function d(){e.$patch(t=>{t.message+=1})}function c(){e.$patch(t=>{t.message-=t.message>0?1:0})}function f(){e.$patch(t=>{t.todo+=1})}function m(){e.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const r=x,l=B,u=N;return k(),$("div",null,[o(r,null,{default:s(()=>n[0]||(n[0]=[a(" 消息 ")])),_:1}),_("div",M,[o(u,{onClick:d},{default:s(()=>[o(l,{name:"i-ep:plus"}),n[1]||(n[1]=a(" 1 "))]),_:1}),o(u,{"ml-2":"",onClick:c},{default:s(()=>[o(l,{name:"i-ep:minus"}),n[2]||(n[2]=a(" 1 "))]),_:1})]),o(r,null,{default:s(()=>n[3]||(n[3]=[a(" 待办 ")])),_:1}),_("div",S,[o(u,{onClick:f},{default:s(()=>[o(l,{name:"i-ep:plus"}),n[4]||(n[4]=a(" 1 "))]),_:1}),o(u,{"ml-2":"",onClick:m},{default:s(()=>[o(l,{name:"i-ep:minus"}),n[5]||(n[5]=a(" 1 "))]),_:1})])])}}});export{D as _,F as u};
