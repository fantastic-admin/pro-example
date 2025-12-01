
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{s as A}from"./vue-data-ui-Cvi9u-NE.js";import{n as d,x as I,e as n,y,c as C,o as E}from"./index-COkggZqL.js";function B({config:t,dataset:a,skeletonDataset:o,skeletonConfig:s,FINAL_CONFIG:g,prepareConfig:m,callback:r=null,dsIsNumber:p=!1}){const c=d(!1),l=I(()=>{var i,f;const v=(f=(i=n(t))==null?void 0:i.loading)!=null?f:!1,e=n(a),k=p?[null,void 0].includes(e):e==null||Array.isArray(e)&&e.length===0||Object.keys(e).length===0;return c.value||v||k}),u=d(n(a));return y(()=>{u.value=l.value?o:n(a),g.value=l.value?s:m(),r&&r()}),{loading:l,FINAL_DATASET:u,manualLoading:c,skeletonDataset:o,skeletonConfig:s}}const L={},N={class:"vue-data-ui-scanner"};function _(t,a){return E(),C("div",N)}const D=A(L,[["render",_],["__scopeId","data-v-d6376e44"]]);export{B as S,D as T};
