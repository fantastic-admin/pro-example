
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d,f as C,g as w,h as i,D as p,j as e,C as s,bO as r,b0 as t}from"./index-xj0hzzoN.js";const k={class:"flex gap-4"},x=d({__name:"_demo2",setup(M){function l(){r().info({title:"温馨提醒",content:"这是 info 弹窗",onConfirm:()=>{t.info("你点了确定")}})}function a(){r().success({title:"温馨提醒",content:"这是 success 弹窗",onConfirm:()=>{t.info("你点了确定")}})}function m(){r().warning({title:"温馨提醒",content:"这是 warning 弹窗",onConfirm:()=>{t.info("你点了确定")}})}function c(){r().error({title:"温馨提醒",content:"这是 confirm 弹窗",onConfirm:()=>{t.info("你点了确定")}})}function u(){r().confirm({title:"温馨提醒",content:"这是 confirm 弹窗",onConfirm:()=>{t.info("你点了确定")}})}function _(){r().confirm({title:"温馨提醒",content:"这是 confirm 弹窗",confirmButtonText:"确认（随机成功或失败）",beforeClose:async(f,o)=>{f==="confirm"?(await new Promise(n=>setTimeout(n,1e3)),Math.random()>.5?(t.success("成功了！"),o()):t.error("失败了！")):o()}})}return(f,o)=>{const n=p;return w(),C("div",k,[i(n,{onClick:l},{default:e(()=>o[0]||(o[0]=[s(" Info ")])),_:1,__:[0]}),i(n,{onClick:a},{default:e(()=>o[1]||(o[1]=[s(" Success ")])),_:1,__:[1]}),i(n,{onClick:m},{default:e(()=>o[2]||(o[2]=[s(" Warning ")])),_:1,__:[2]}),i(n,{onClick:c},{default:e(()=>o[3]||(o[3]=[s(" Error ")])),_:1,__:[3]}),i(n,{onClick:u},{default:e(()=>o[4]||(o[4]=[s(" Confirm ")])),_:1,__:[4]}),i(n,{onClick:_},{default:e(()=>o[5]||(o[5]=[s(" Confirm with promise ")])),_:1,__:[5]})])}}});export{x as _};
