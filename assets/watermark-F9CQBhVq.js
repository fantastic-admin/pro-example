
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as B}from"./index.vue_vue_type_script_setup_true_lang--ThJjcg9.js";import{_ as R}from"./index.vue_vue_type_script_setup_true_lang-DWmqi8aT.js";import{d as W,q as C,J as V,a as n,o as b,k as x,f as e,w as o,e as r,j as Y,g as s,O as d,P as f,cR as y,y as _}from"./index-DL7SpVKF.js";import{u as D}from"./watermark-CeC-idaX.js";const H=W({__name:"watermark",setup(M){const l=C(),u=D(),a=V({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function c(){u.update({content:y().format(`YYYY-MM-DD
HH:mm:ss`)})}function k(){u.update()}return(m,t)=>{const E=R,p=n("ElRadioButton"),g=n("ElRadioGroup"),i=n("ElButton"),S=n("ElSpace"),v=B;return b(),x("div",null,[e(E,{title:"页面水印",content:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(v,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:o(()=>[e(S,null,{default:o(()=>[e(g,{modelValue:r(a),"onUpdate:modelValue":t[0]||(t[0]=w=>Y(a)?a.value=w:null)},{default:o(()=>[e(p,{value:!0},{default:o(()=>t[1]||(t[1]=[s(" 开启 ")])),_:1}),e(p,{value:!1},{default:o(()=>t[2]||(t[2]=[s(" 关闭 ")])),_:1})]),_:1},8,["modelValue"]),d(e(i,{onClick:c},{default:o(()=>t[3]||(t[3]=[s(" 更新水印 ")])),_:1},512),[[f,r(a)]]),d(e(i,{onClick:k},{default:o(()=>t[4]||(t[4]=[s(" 重置水印 ")])),_:1},512),[[f,r(a)]])]),_:1})]),_:1})])}}});typeof _=="function"&&_(H);export{H as default};
