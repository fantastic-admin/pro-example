
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,Ft as t,Rt as n,S as r,Y as i,pt as a,x as o}from"./vue.runtime.esm-bundler-EJiOFDNb.js";import{C as s}from"./components-Dvnhr4Ep.js";var c={class:`py-1 flex gap-2 w-full items-center`},l={class:`text-sm truncate`},u=e({__name:`_demo4`,setup(e){let u=[{tag:`紧急`,text:`系统将于今晚 22:00 进行维护升级`,type:`error`},{tag:`新功能`,text:`支持批量导出数据，欢迎体验`,type:`success`},{tag:`提示`,text:`请及时更新您的账户安全信息`,type:`warning`}];return(e,d)=>{let f=s;return i(),r(f,{items:u.map(e=>e.text)},{item:a(({index:e})=>[o(`div`,c,[o(`span`,{class:t([`text-xs font-medium px-1.5 py-0.5 rounded shrink-0`,{"bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400":u[e].type===`error`,"bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400":u[e].type===`success`,"bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400":u[e].type===`warning`}])},n(u[e].tag),3),o(`span`,l,n(u[e].text),1)])]),_:1},8,[`items`])}}});export{u as t};