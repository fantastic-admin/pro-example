
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as l,f as u,c as d,o as k,k as e,m as o,H as x,G as i,P as $,aa as g,a9 as P,ck as b,b6 as v,W as r}from"./index-CphCexG_.js";const C=l({__name:"index",setup(F){const a=u();function c(){a.getPermissions().then(()=>{b().toast({title:"当前用户权限",description:v("div",{innerHTML:a.permissions.map(t=>"<p>".concat(t,"</p>")).join("")}),duration:3e3})})}function _(t){window.open(t,"_blank")}return(t,n)=>{const f=$,s=x,p=g,m=P;return k(),d("div",null,[e(p,{title:"Mock",description:"通过拦截 Ajax 请求，返回模拟的响应数据，可以让前端工程师独立于后端进行开发，本演示站的登录和权限获取就是通过 faker 实现的。更多语法规则请查询官方文档"},{default:o(()=>[e(s,{variant:"outline",onClick:n[0]||(n[0]=j=>_("https://github.com/faker-js/faker"))},{default:o(()=>[e(f,{name:"i-ep:link"}),n[1]||(n[1]=i(" faker 官网 ",-1))]),_:1})]),_:1}),e(m,null,{default:o(()=>[e(s,{onClick:c},{default:o(()=>[...n[2]||(n[2]=[i(" 测试：获取用户权限 ",-1)])]),_:1})]),_:1})])}}});typeof r=="function"&&r(C);export{C as default};
