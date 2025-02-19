
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{G as m,H as l,I as f,W as c}from"./index-xcJMzuCA.js";import{u as g}from"./useTabbar-B-6bgSs3.js";function d(){const s=m(),u=l(),t=f(),a=c(),o=g();function r(){u.push({name:"reload"})}function n(e){t.setCustomTitle(s.fullPath,e),t.settings.tabbar.enable&&a.setCustomTitle({tabId:o.getId(),title:e})}function i(){t.resetCustomTitle(s.fullPath),t.settings.tabbar.enable&&a.resetCustomTitle(o.getId())}function b(e){t.setMainPageMaximize(e)}return{reload:r,setCustomTitle:n,resetCustomTitle:i,maximize:b}}export{d as u};
