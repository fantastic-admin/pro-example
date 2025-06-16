
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as W,J as B,K as C,G as n,f as V,g as R,h as e,a8 as b,j as a,w as d,n as x,l as r,C as s,v as _,a7 as Y,aW as D,V as f}from"./index-Cm5PYwOf.js";import{u as G}from"./watermark-CPogrUGV.js";const H=W({__name:"watermark",setup(M){const l=B(),u=G(),o=C({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function c(){u.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function k(){u.update()}return(m,t)=>{const E=b,i=n("ElRadioButton"),g=n("ElRadioGroup"),p=n("ElButton"),v=n("ElSpace"),S=Y;return R(),V("div",null,[e(E,{title:"页面水印",description:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(S,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:a(()=>[e(v,null,{default:a(()=>[e(g,{modelValue:r(o),"onUpdate:modelValue":t[0]||(t[0]=w=>x(o)?o.value=w:null)},{default:a(()=>[e(i,{value:!0},{default:a(()=>t[1]||(t[1]=[s(" 开启 ")])),_:1,__:[1]}),e(i,{value:!1},{default:a(()=>t[2]||(t[2]=[s(" 关闭 ")])),_:1,__:[2]})]),_:1},8,["modelValue"]),d(e(p,{onClick:c},{default:a(()=>t[3]||(t[3]=[s(" 更新水印 ")])),_:1,__:[3]},512),[[_,r(o)]]),d(e(p,{onClick:k},{default:a(()=>t[4]||(t[4]=[s(" 重置水印 ")])),_:1,__:[4]},512),[[_,r(o)]])]),_:1})]),_:1})])}}});typeof f=="function"&&f(H);export{H as default};
