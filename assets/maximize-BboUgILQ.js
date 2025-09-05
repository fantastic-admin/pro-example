
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,L as p,a4 as _,c as f,o as d,k as t,aa as g,m as n,l as o,G as x,p as P,a as S,a9 as k,W as s}from"./index-CngbNVLW.js";import{u as B}from"./useMainPage-BE7oFYWT.js";import"./useTabbar-DNDm2UQ9.js";const z=c({__name:"maximize",setup(C){const a=p(),i=B();function m(){i.maximize(!a.mainPageMaximizeStatus)}return(M,e)=>{const l=g,r=_("ElButton"),u=k;return d(),f("div",null,[t(l,{title:"主页面最大化",description:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),t(u,null,{default:n(()=>[e[0]||(e[0]=o("p",null,"可通过在标签页上右键并选择“最大化”进入。",-1)),e[1]||(e[1]=o("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1)),t(r,{onClick:m},{default:n(()=>[x(P(S(a).mainPageMaximizeStatus?"退出":"开启")+"最大化 ",1)]),_:1})]),_:1})])}}});typeof s=="function"&&s(z);export{z as default};
