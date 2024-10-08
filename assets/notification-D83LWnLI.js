
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as d}from"./index.vue_vue_type_script_setup_true_lang--ThJjcg9.js";import{d as g,k,f as o,w as e,o as $,g as m,_ as C,D as P,y as c}from"./index-DL7SpVKF.js";import{_ as x}from"./index.vue_vue_type_script_setup_true_lang-DWmqi8aT.js";import{u as N}from"./notification-B1rv3ew-.js";const B=g({name:"PersonalNotification",__name:"notification",setup(M){const i=N();function l(){i.$patch(t=>{t.message+=1})}function u(){i.$patch(t=>{t.message-=t.message>0?1:0})}function p(){i.$patch(t=>{t.todo+=1})}function _(){i.$patch(t=>{t.todo-=t.todo>0?1:0})}return(t,n)=>{const r=x,s=C,a=P,f=d;return $(),k("div",null,[o(r,{title:"通知中心",content:"本页面仅模拟右上角通知数变化，具体业务逻辑请到 /src/store/modules/notification.ts 文件中编写"}),o(f,{title:"消息"},{default:e(()=>[o(a,{onClick:l},{default:e(()=>[o(s,{name:"i-ep:plus"}),n[0]||(n[0]=m(" 1 "))]),_:1}),o(a,{"ml-2":"",onClick:u},{default:e(()=>[o(s,{name:"i-ep:minus"}),n[1]||(n[1]=m(" 1 "))]),_:1})]),_:1}),o(f,{title:"待办"},{default:e(()=>[o(a,{onClick:p},{default:e(()=>[o(s,{name:"i-ep:plus"}),n[2]||(n[2]=m(" 1 "))]),_:1}),o(a,{"ml-2":"",onClick:_},{default:e(()=>[o(s,{name:"i-ep:minus"}),n[3]||(n[3]=m(" 1 "))]),_:1})]),_:1})])}}});typeof c=="function"&&c(B);export{B as default};
