
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{_ as B}from"./index.vue_vue_type_script_setup_true_lang-BhriyXWf.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-CPy6wrQi.js";import{d as W,I as C,J as R,E as n,f as b,g as x,k as e,m as a,w as d,l as Y,j as r,B as s,v as f,aF as D,V as _}from"./index-Db5JpCpC.js";import{u as F}from"./watermark-BgsqiaiC.js";const H=W({__name:"watermark",setup(M){const l=C(),u=F(),o=R({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function c(){u.update({content:D().format(`YYYY-MM-DD
HH:mm:ss`)})}function k(){u.update()}return(m,t)=>{const E=V,i=n("ElRadioButton"),g=n("ElRadioGroup"),p=n("ElButton"),v=n("ElSpace"),S=B;return x(),b("div",null,[e(E,{title:"页面水印",description:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(S,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:a(()=>[e(v,null,{default:a(()=>[e(g,{modelValue:r(o),"onUpdate:modelValue":t[0]||(t[0]=w=>Y(o)?o.value=w:null)},{default:a(()=>[e(i,{value:!0},{default:a(()=>t[1]||(t[1]=[s(" 开启 ")])),_:1}),e(i,{value:!1},{default:a(()=>t[2]||(t[2]=[s(" 关闭 ")])),_:1})]),_:1},8,["modelValue"]),d(e(p,{onClick:c},{default:a(()=>t[3]||(t[3]=[s(" 更新水印 ")])),_:1},512),[[f,r(o)]]),d(e(p,{onClick:k},{default:a(()=>t[4]||(t[4]=[s(" 重置水印 ")])),_:1},512),[[f,r(o)]])]),_:1})]),_:1})])}}});typeof _=="function"&&_(H);export{H as default};
