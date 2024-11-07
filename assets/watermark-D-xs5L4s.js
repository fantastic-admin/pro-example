
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-BI6i3Xj9.js";import{_ as W}from"./index.vue_vue_type_script_setup_true_lang-B4BTvh-f.js";import{d as b,p as C,K as R,b as n,o as V,l as x,g as e,w as o,f as r,k as Y,h as s,P as d,Q as f,aw as D,z as _}from"./index-D4ACN76T.js";import{u as H}from"./watermark-OCT8CjaB.js";const M=b({__name:"watermark",setup(P){const l=C(),u=H(),a=R({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function c(){u.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function k(){u.update()}return(m,t)=>{const E=W,p=n("ElRadioButton"),g=n("ElRadioGroup"),i=n("ElButton"),w=n("ElSpace"),S=B;return V(),x("div",null,[e(E,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(S,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:o(()=>[e(w,null,{default:o(()=>[e(g,{modelValue:r(a),"onUpdate:modelValue":t[0]||(t[0]=v=>Y(a)?a.value=v:null)},{default:o(()=>[e(p,{value:!0},{default:o(()=>t[1]||(t[1]=[s(" 开启 ")])),_:1}),e(p,{value:!1},{default:o(()=>t[2]||(t[2]=[s(" 关闭 ")])),_:1})]),_:1},8,["modelValue"]),d(e(i,{onClick:c},{default:o(()=>t[3]||(t[3]=[s(" 更新水印 ")])),_:1},512),[[f,r(a)]]),d(e(i,{onClick:k},{default:o(()=>t[4]||(t[4]=[s(" 重置水印 ")])),_:1},512),[[f,r(a)]])]),_:1})]),_:1})])}}});typeof _=="function"&&_(M);export{M as default};
