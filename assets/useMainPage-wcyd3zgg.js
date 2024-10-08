
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{n as m,p as l,q as f,z as c}from"./index-DL7SpVKF.js";import{u as g}from"./useTabbar-iWQBBnUi.js";function d(){const s=m(),u=l(),t=f(),a=c(),o=g();function n(){u.push({name:"reload"})}function r(e){t.setCustomTitle(s.fullPath,e),t.settings.tabbar.enable&&a.setCustomTitle({tabId:o.getId(),title:e})}function i(){t.resetCustomTitle(s.fullPath),t.settings.tabbar.enable&&a.resetCustomTitle(o.getId())}function b(e){t.setMainPageMaximize(e)}return{reload:n,setCustomTitle:r,resetCustomTitle:i,maximize:b}}export{d as u};
