
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{J as b,K as m,L as f,X as c}from"./index-Bnionyve.js";import{u as g}from"./useTabbar-DQUDAxhI.js";function C(){const s=b(),u=m(),t=f(),a=c(),o=g();function n(){t.setIsReloading(!0),u.push({name:"reload"}).then(()=>{setTimeout(()=>{t.setIsReloading(!1)},100)})}function i(e){t.setCustomTitle(s.fullPath,e),t.settings.tabbar.enable&&a.setCustomTitle({tabId:o.getId(),title:e})}function r(){t.resetCustomTitle(s.fullPath),t.settings.tabbar.enable&&a.resetCustomTitle(o.getId())}function l(e){t.setMainPageMaximize(e)}return{reload:n,setCustomTitle:i,resetCustomTitle:r,maximize:l}}export{C as u};
