
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-DAmkWWdh.js";import{_ as C}from"./index.vue_vue_type_script_setup_true_lang-B6TBok1e.js";import{d as W,J as b,K as R,G as n,f as V,g as x,h as e,j as a,w as d,n as Y,l as r,C as s,v as f,bp as D,X as _}from"./index-C1X-Si6V.js";import{u as G}from"./watermark-puIoYWZU.js";const H=W({__name:"watermark",setup(M){const l=b(),u=G(),o=R({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function c(){u.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function k(){u.update()}return(m,t)=>{const E=C,p=n("ElRadioButton"),g=n("ElRadioGroup"),i=n("ElButton"),v=n("ElSpace"),S=B;return x(),V("div",null,[e(E,{title:"页面水印",description:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(S,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:a(()=>[e(v,null,{default:a(()=>[e(g,{modelValue:r(o),"onUpdate:modelValue":t[0]||(t[0]=w=>Y(o)?o.value=w:null)},{default:a(()=>[e(p,{value:!0},{default:a(()=>t[1]||(t[1]=[s(" 开启 ")])),_:1}),e(p,{value:!1},{default:a(()=>t[2]||(t[2]=[s(" 关闭 ")])),_:1})]),_:1},8,["modelValue"]),d(e(i,{onClick:c},{default:a(()=>t[3]||(t[3]=[s(" 更新水印 ")])),_:1},512),[[f,r(o)]]),d(e(i,{onClick:k},{default:a(()=>t[4]||(t[4]=[s(" 重置水印 ")])),_:1},512),[[f,r(o)]])]),_:1})]),_:1})])}}});typeof _=="function"&&_(H);export{H as default};
