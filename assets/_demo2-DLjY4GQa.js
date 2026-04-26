
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{A as e,D as t,Nt as n,O as r,Y as i,pt as a,st as o,w as s,wt as c,x as l,yt as u}from"./vue.runtime.esm-bundler-31VjfBU5.js";import{D as d,Tt as f,Y as p}from"./components-C_d7Trg8.js";var m={class:`flex flex-col gap-4`},h={class:`flex gap-4 items-center`},g=e({__name:`_demo2`,setup(e){let g=o(`qrcodeRef`),_=c(`https://fantastic-admin.hurui.me`);return(e,o)=>{let c=p,v=f,y=d;return i(),s(`div`,m,[l(`div`,h,[r(c,{modelValue:n(_),"onUpdate:modelValue":o[0]||(o[0]=e=>u(_)?_.value=e:null),placeholder:`输入二维码内容`,class:`w-64`},null,8,[`modelValue`]),r(v,{variant:`secondary`,onClick:o[1]||(o[1]=e=>n(g)?.download(`my-qrcode.png`))},{default:a(()=>[...o[2]||(o[2]=[t(` 下载 `,-1)])]),_:1})]),r(y,{ref_key:`qrcodeRef`,ref:g,value:n(_),size:200},null,8,[`value`])])}}});export{g as t};