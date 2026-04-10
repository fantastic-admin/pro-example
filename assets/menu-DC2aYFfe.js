
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{t as e}from"./settings-B3UcGEBm.js";import{n as t}from"./vue-i18n.runtime-pGyDsL5y.js";import{a as n}from"./auth-c8MfoAMr.js";import{s as r}from"./vue-router-DJWCNE0K.js";function i(){let i=r(),{t:a,te:o}=t({useScope:`global`}),s=e(),c=n();function l(e=a(`app.route.undefined`)){return typeof e==`function`?e():o(e)?a(e):e}function u(e){c.setActived(e),(s.settings.menu.mainMenuClickMode===`jump`||s.settings.menu.mainMenuClickMode===`smart`&&c.sidebarMenusHasOnlyMenu)&&i.push(c.sidebarMenusFirstDeepestPath)}return{generateI18nTitle:l,switchTo:u}}export{i as t};