
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{aL as g,r as p,J as v,d as k,f as C,g as $,k as o,h as _,D as x,m as s,B as a,C as B,M}from"./index-xcJMzuCA.js";const N=g("notification",()=>{const i=p(0),e=p(0),d=v(()=>i.value+e.value);function m(){c(),f()}function c(){i.value=9}function f(){e.value=0}return{message:i,todo:e,total:d,init:m}}),F={class:"flex-center"},S={class:"flex-center"},D=k({__name:"all",setup(i){const e=N();function d(){e.$patch(t=>{t.message+=1})}function m(){e.$patch(t=>{t.message-=t.message>0?1:0})}function c(){e.$patch(t=>{t.todo+=1})}function f(){e.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const r=x,l=M,u=B;return $(),C("div",null,[o(r,null,{default:s(()=>n[0]||(n[0]=[a(" 消息 ")])),_:1}),_("div",F,[o(u,{onClick:d},{default:s(()=>[o(l,{name:"i-ep:plus"}),n[1]||(n[1]=a(" 1 "))]),_:1}),o(u,{"ml-2":"",onClick:m},{default:s(()=>[o(l,{name:"i-ep:minus"}),n[2]||(n[2]=a(" 1 "))]),_:1})]),o(r,null,{default:s(()=>n[3]||(n[3]=[a(" 待办 ")])),_:1}),_("div",S,[o(u,{onClick:c},{default:s(()=>[o(l,{name:"i-ep:plus"}),n[4]||(n[4]=a(" 1 "))]),_:1}),o(u,{"ml-2":"",onClick:f},{default:s(()=>[o(l,{name:"i-ep:minus"}),n[5]||(n[5]=a(" 1 "))]),_:1})])])}}});export{D as _,N as u};
