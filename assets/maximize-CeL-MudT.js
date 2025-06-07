
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as c,J as p,G as _,f,g,h as t,a8 as d,j as n,i as o,C as x,k as P,l as S,a7 as k,V as s}from"./index-D4ShR5zg.js";import{u as B}from"./useMainPage-DifUZ9G3.js";import"./useTabbar-QI8KtCMP.js";const C=c({__name:"maximize",setup(z){const a=p(),i=B();function m(){i.maximize(!a.mainPageMaximizeStatus)}return(M,e)=>{const l=d,r=_("ElButton"),u=k;return g(),f("div",null,[t(l,{title:"主页面最大化",description:"扩大可视范围和操作区域，能更专注于主页面上的操作"}),t(u,null,{default:n(()=>[e[0]||(e[0]=o("p",null,"可通过在标签页上右键并选择“最大化”进入。",-1)),e[1]||(e[1]=o("p",null,"同时框架还提供全局函数，可自由控制主页面是否最大化。",-1)),t(r,{onClick:m},{default:n(()=>[x(P(S(a).mainPageMaximizeStatus?"退出":"开启")+"最大化 ",1)]),_:1})]),_:1,__:[0,1]})])}}});typeof s=="function"&&s(C);export{C as default};
