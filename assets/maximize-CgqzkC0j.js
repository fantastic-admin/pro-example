
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,I as p,E as _,e as f,f as g,g as t,a7 as d,i as n,h as o,B as x,j as B,k as P,a6 as S,U as s}from"./index-H6KsPIiT.js";import{u as k}from"./useMainPage-CdQP_qLo.js";import"./useTabbar-BDFQpfao.js";const z=c({__name:"maximize",setup(C){const a=p(),i=k();function m(){i.maximize(!a.mainPageMaximizeStatus)}return(E,e)=>{const l=d,r=_("ElButton"),u=S;return g(),f("div",null,[t(l,{title:"主页面最大化",description:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),t(u,null,{default:n(()=>[e[0]||(e[0]=o("p",null,"可通过在标签页上右键并选择“最大化”进入。",-1)),e[1]||(e[1]=o("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1)),t(r,{onClick:m},{default:n(()=>[x(B(P(a).mainPageMaximizeStatus?"退出":"开启")+"最大化 ",1)]),_:1})]),_:1,__:[0,1]})])}}});typeof s=="function"&&s(z);export{z as default};
