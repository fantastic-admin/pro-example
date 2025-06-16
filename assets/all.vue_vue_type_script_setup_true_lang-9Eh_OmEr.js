
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{a_ as g,r,K as v,d as C,f as $,g as k,h as o,i as p,E as x,j as s,C as a,D as N,N as B}from"./index-Cm5PYwOf.js";const F=g("notification",()=>{const i=r(0),e=r(0),_=v(()=>i.value+e.value);function d(){c(),f()}function c(){i.value=9}function f(){e.value=0}return{message:i,todo:e,total:_,init:d}}),M={class:"flex-center"},S={class:"flex-center"},D=C({__name:"all",setup(i){const e=F();function _(){e.$patch(t=>{t.message+=1})}function d(){e.$patch(t=>{t.message-=t.message>0?1:0})}function c(){e.$patch(t=>{t.todo+=1})}function f(){e.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const m=x,l=B,u=N;return k(),$("div",null,[o(m,null,{default:s(()=>n[0]||(n[0]=[a(" 消息 ")])),_:1,__:[0]}),p("div",M,[o(u,{onClick:_},{default:s(()=>[o(l,{name:"i-ep:plus"}),n[1]||(n[1]=a(" 1 "))]),_:1,__:[1]}),o(u,{"ml-2":"",onClick:d},{default:s(()=>[o(l,{name:"i-ep:minus"}),n[2]||(n[2]=a(" 1 "))]),_:1,__:[2]})]),o(m,null,{default:s(()=>n[3]||(n[3]=[a(" 待办 ")])),_:1,__:[3]}),p("div",S,[o(u,{onClick:c},{default:s(()=>[o(l,{name:"i-ep:plus"}),n[4]||(n[4]=a(" 1 "))]),_:1,__:[4]}),o(u,{"ml-2":"",onClick:f},{default:s(()=>[o(l,{name:"i-ep:minus"}),n[5]||(n[5]=a(" 1 "))]),_:1,__:[5]})])])}}});export{D as _,F as u};
