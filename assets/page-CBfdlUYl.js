
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{t as e}from"./settings-C5dv8_eX.js";import{c as t}from"./auth-kZwluqcW.js";import{o as n,s as r}from"./vue-router-BQUwJa8X.js";import{t as i}from"./tabbar-BCvg-usb.js";function a(){let a=n(),o=r(),s=e(),c=t(),l=i();function u(){s.setIsReloading(!0),o.push({name:`reload`}).then(()=>{setTimeout(()=>{s.setIsReloading(!1)},100)})}function d(e){s.setCustomTitle(a.fullPath,e),s.settings.topbar.tabbar&&c.setCustomTitle({tabId:l.getId(),title:e})}function f(){s.resetCustomTitle(a.fullPath),s.settings.topbar.tabbar&&c.resetCustomTitle(l.getId())}function p(e){s.setMainPageMaximize(e)}return{reload:u,setCustomTitle:d,resetCustomTitle:f,maximize:p}}export{a as t};