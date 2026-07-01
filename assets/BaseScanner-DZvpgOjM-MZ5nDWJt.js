
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,Ct as t,Mt as n,ct as r,q as i,y as a}from"./vue.runtime.esm-bundler-BVTUj4HC.js";import{t as o}from"./_plugin-vue_export-helper-B3ysoDQm-BDNMzG2s.js";function s({config:e,dataset:i,skeletonDataset:o,skeletonConfig:s,FINAL_CONFIG:c,prepareConfig:l,callback:u=null,dsIsNumber:d=!1,allowEmptyDataset:f=!1}){let p=t(!1),m=a(()=>{let t=n(e)?.loading??!1,r=n(i),a=f?!1:d?[null,void 0].includes(r):r==null||Array.isArray(r)&&r.length===0||Object.keys(r).length===0;return p.value||t||a}),h=t(n(i));return r(()=>{h.value=m.value?o:n(i),c.value=m.value?s:l(),u&&u()}),{loading:m,FINAL_DATASET:h,manualLoading:p,skeletonDataset:o,skeletonConfig:s}}var c={},l={class:`vue-data-ui-scanner`};function u(t,n){return i(),e(`div`,l)}var d=o(c,[[`render`,u],[`__scopeId`,`data-v-8c8b2e12`]]);export{s as n,d as t};