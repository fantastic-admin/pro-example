
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as W,a as B,x,r as n,c as C,o as R,g as e,am as V,w as a,W as d,p as b,e as r,i as s,X as f,j as Y,a$ as $,k as c}from"./index-H6QnEWHf.js";import{u as D}from"./watermark-B6OY5Jwq.js";const H=W({__name:"watermark",setup(M){const l=B(),u=D(),o=x({get(){return l.settings.app.enableWatermark},set(m){l.$patch(t=>{t.settings.app.enableWatermark=m})}});function _(){u.update({content:$().format("YYYY-MM-DD\nHH:mm:ss")})}function k(){u.update()}return(m,t)=>{const E=V,i=n("ElRadioButton"),g=n("ElRadioGroup"),p=n("ElButton"),S=n("ElSpace"),v=Y;return R(),C("div",null,[e(E,{title:"页面水印",description:"在某些场景下，不希望用户将系统里的信息随意截图并转发，这时可开启页面水印，以减少这种情况发生"}),e(v,{title:"可在 /src/store/modules/watermark.ts 文件里定制水印文案内容"},{default:a(()=>[e(S,null,{default:a(()=>[e(g,{modelValue:r(o),"onUpdate:modelValue":t[0]||(t[0]=w=>b(o)?o.value=w:null)},{default:a(()=>[e(i,{value:!0},{default:a(()=>[...t[1]||(t[1]=[s(" 开启 ",-1)])]),_:1}),e(i,{value:!1},{default:a(()=>[...t[2]||(t[2]=[s(" 关闭 ",-1)])]),_:1})]),_:1},8,["modelValue"]),d(e(p,{onClick:_},{default:a(()=>[...t[3]||(t[3]=[s(" 更新水印 ",-1)])]),_:1},512),[[f,r(o)]]),d(e(p,{onClick:k},{default:a(()=>[...t[4]||(t[4]=[s(" 重置水印 ",-1)])]),_:1},512),[[f,r(o)]])]),_:1})]),_:1})])}}});typeof c=="function"&&c(H);export{H as default};
