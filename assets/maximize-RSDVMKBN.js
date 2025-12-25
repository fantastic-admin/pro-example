
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,a as p,r as _,c as f,o as g,g as t,al as d,w as n,f as o,i as x,t as P,e as S,j as k,k as s}from"./index-DRFMav3n.js";import{u as B}from"./useMainPage-DjS_NAa9.js";import"./useTabbar-CJ6TaB4D.js";const z=c({__name:"maximize",setup(C){const a=p(),i=B();function m(){i.maximize(!a.mainPageMaximizeStatus)}return(M,e)=>{const l=d,r=_("ElButton"),u=k;return g(),f("div",null,[t(l,{title:"主页面最大化",description:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),t(u,null,{default:n(()=>[e[0]||(e[0]=o("p",null,"可通过在标签页上右键并选择“最大化”进入。",-1)),e[1]||(e[1]=o("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1)),t(r,{onClick:m},{default:n(()=>[x(P(S(a).mainPageMaximizeStatus?"退出":"开启")+"最大化 ",1)]),_:1})]),_:1})])}}});typeof s=="function"&&s(z);export{z as default};
