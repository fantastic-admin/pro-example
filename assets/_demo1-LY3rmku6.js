
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Nt as n,O as r,Rt as i,Y as a,pt as o,w as s,wt as c}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{L as l,Tt as u,a as d}from"./components-CNfuk_zw.js";var f={class:`flex gap-4`},p=e({__name:`_demo1`,setup(e){let p=c(!1),m=[{text:`获取用户数据`,afterText:`获取用户数据成功`,name:`user`,action:async()=>(await new Promise(e=>setTimeout(e,1e3)),{id:1,name:`张三`})},{text:`获取用户订单（这一步会模拟随机错误）`,afterText:`获取用户订单成功`,name:`orders`,action:async e=>{if(await new Promise(e=>setTimeout(e,1500)),Math.random()>.5)throw Error(`获取订单数据失败：网络连接超时`);return[{id:1,userId:e.user.id,product:`商品A`},{id:2,userId:e.user.id,product:`商品B`}]}},{text:`处理订单数据`,action:async e=>(await new Promise(e=>setTimeout(e,2e3)),{user:e.user,orders:e.orders,totalAmount:e.orders.length*100})}];function h(e){d.info(`当前步骤：${e+1}`)}function g(){d.success(`所有步骤已完成`),p.value=!1}function _(e,t){d.error(`步骤 ${t+1} 执行失败: ${e.message}`),p.value=!1}return(e,c)=>{let d=u,v=l;return a(),s(`div`,f,[r(d,{onClick:c[0]||(c[0]=e=>p.value=!n(p))},{default:o(()=>[t(i(n(p)?`停止`:`开始`),1)]),_:1}),r(v,{loading:n(p),steps:m,"prevent-close":``,onStateChange:h,onComplete:g,onError:_},null,8,[`loading`])])}}});export{p as t};