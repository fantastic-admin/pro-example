
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as x,r as u,E as v,f as E,g as b,k as e,m,B as s,j as d,l as a}from"./index-Db5JpCpC.js";const B=x({__name:"inputnumber",setup(U){const i=u(1),p=u(1),r=u(5),f=u(1),V=u(1);return(N,l)=>{const o=v("ElDivider"),t=v("ElInputNumber");return b(),E("div",null,[e(o,{"content-position":"left"},{default:m(()=>l[5]||(l[5]=[s(" 基础用法 ")])),_:1}),e(t,{modelValue:d(i),"onUpdate:modelValue":l[0]||(l[0]=n=>a(i)?i.value=n:null),min:1,max:10,label:"描述文字"},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>l[6]||(l[6]=[s(" 禁用状态 ")])),_:1}),e(t,{modelValue:d(p),"onUpdate:modelValue":l[1]||(l[1]=n=>a(p)?p.value=n:null),disabled:!0},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>l[7]||(l[7]=[s(" 步数 ")])),_:1}),e(t,{modelValue:d(r),"onUpdate:modelValue":l[2]||(l[2]=n=>a(r)?r.value=n:null),step:2},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>l[8]||(l[8]=[s(" 精度 ")])),_:1}),e(t,{modelValue:d(f),"onUpdate:modelValue":l[3]||(l[3]=n=>a(f)?f.value=n:null),precision:2,step:.1,max:10},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>l[9]||(l[9]=[s(" 按钮位置 ")])),_:1}),e(t,{modelValue:d(V),"onUpdate:modelValue":l[4]||(l[4]=n=>a(V)?V.value=n:null),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])}}});export{B as _};
