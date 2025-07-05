
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{b7 as g,r,J as v,d as C,e as $,f as k,g as e,h as p,D as x,i as s,B as a,C as B,M}from"./index-BLSV4yIg.js";const N=g("notification",()=>{const i=r(0),o=r(0),_=v(()=>i.value+o.value);function d(){c(),f()}function c(){i.value=9}function f(){o.value=0}return{message:i,todo:o,total:_,init:d}}),F={class:"flex-center"},S={class:"flex-center"},D=C({__name:"all",setup(i){const o=N();function _(){o.$patch(t=>{t.message+=1})}function d(){o.$patch(t=>{t.message-=t.message>0?1:0})}function c(){o.$patch(t=>{t.todo+=1})}function f(){o.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const m=x,l=M,u=B;return k(),$("div",null,[e(m,null,{default:s(()=>n[0]||(n[0]=[a(" 消息 ")])),_:1,__:[0]}),p("div",F,[e(u,{onClick:_},{default:s(()=>[e(l,{name:"i-ep:plus"}),n[1]||(n[1]=a(" 1 "))]),_:1,__:[1]}),e(u,{"ml-2":"",onClick:d},{default:s(()=>[e(l,{name:"i-ep:minus"}),n[2]||(n[2]=a(" 1 "))]),_:1,__:[2]})]),e(m,null,{default:s(()=>n[3]||(n[3]=[a(" 待办 ")])),_:1,__:[3]}),p("div",S,[e(u,{onClick:c},{default:s(()=>[e(l,{name:"i-ep:plus"}),n[4]||(n[4]=a(" 1 "))]),_:1,__:[4]}),e(u,{"ml-2":"",onClick:f},{default:s(()=>[e(l,{name:"i-ep:minus"}),n[5]||(n[5]=a(" 1 "))]),_:1,__:[5]})])])}}});export{D as _,N as u};
