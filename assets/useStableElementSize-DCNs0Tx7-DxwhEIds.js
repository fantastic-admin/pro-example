
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{p as m,y as z,C as N}from"./index-Bhq0NWKR.js";function O(i,u){return Number.isFinite(i)&&Number.isFinite(u)}function S(i,u){return i.width===u.width&&i.height===u.height}function C({elementRef:i,minimumWidth:u=2,minimumHeight:F=2,stableFramesRequired:A=2,once:c=!1,onSizeAccepted:d}){const g=m(0),w=m(0),r=m(!1);let n=null,o=0,h={width:0,height:0},a=0,l=!1;function v(){o&&(cancelAnimationFrame(o),o=0)}function R(e,t){return!(!O(e,t)||e<u||t<F)}function f(){v(),n&&(n.disconnect(),n=null)}function q(e,t){g.value=e,w.value=t,r.value=!0,typeof d=="function"&&d({width:e,height:t}),l=!0,c&&f()}function x(e,t){if(c&&l)return;if(!R(e,t)){r.value=!1,a=0,h={width:0,height:0};return}const s={width:e,height:t};S(s,h)?a+=1:(a=1,h=s),a>=A&&q(e,t)}function b(){const e=i.value;if(!e){r.value=!1;return}const t=e.getBoundingClientRect();x(Math.round(t.width),Math.round(t.height))}function p(e=2){v();let t=e;const s=()=>{b(),t-=1,t>0?o=requestAnimationFrame(s):o=0};o=requestAnimationFrame(s)}async function y(){await N(),p(2);const e=i.value;e&&(n&&(n.disconnect(),n=null),n=new ResizeObserver(()=>{c&&l||(r.value=!1,a=0,p(2))}),n.observe(e))}return z(f),{width:g,height:w,isStable:r,start:y,stop:f,measureOnce:b}}export{C as I};
