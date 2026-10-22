
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{t as e}from"./settings-B7NlgBbQ.js";import{c as t}from"./auth-9jimfUaX.js";import{g as n,h as r}from"./useApi-BPuI6ZR9-C1R0DeuL.js";import{t as i}from"./tabbar-BwIy3vCC.js";function a(){let a=r(),o=n(),s=e(),c=t(),l=i();function u(){s.setIsReloading(!0),o.push({name:`reload`}).then(()=>{setTimeout(()=>{s.setIsReloading(!1)},100)})}function d(e){s.setCustomTitle(a.fullPath,e),s.settings.topbar.tabbar&&c.setCustomTitle({tabId:l.getId(),title:e})}function f(){s.resetCustomTitle(a.fullPath),s.settings.topbar.tabbar&&c.resetCustomTitle(l.getId())}function p(e){s.setMainPageMaximize(e)}return{reload:u,setCustomTitle:d,resetCustomTitle:f,maximize:p}}export{a as t};