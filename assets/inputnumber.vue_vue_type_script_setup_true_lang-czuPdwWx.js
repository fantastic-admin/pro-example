
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{d as x,g as u,a4 as v,c as b,o as E,k as e,m,G as s,a,v as d}from"./index-DFNzsyWB.js";const C=x({__name:"inputnumber",setup(U){const i=u(1),p=u(1),r=u(5),V=u(1),f=u(1);return(N,l)=>{const o=v("ElDivider"),t=v("ElInputNumber");return E(),b("div",null,[e(o,{"content-position":"left"},{default:m(()=>[...l[5]||(l[5]=[s(" 基础用法 ",-1)])]),_:1}),e(t,{modelValue:a(i),"onUpdate:modelValue":l[0]||(l[0]=n=>d(i)?i.value=n:null),min:1,max:10,label:"描述文字"},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>[...l[6]||(l[6]=[s(" 禁用状态 ",-1)])]),_:1}),e(t,{modelValue:a(p),"onUpdate:modelValue":l[1]||(l[1]=n=>d(p)?p.value=n:null),disabled:!0},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>[...l[7]||(l[7]=[s(" 步数 ",-1)])]),_:1}),e(t,{modelValue:a(r),"onUpdate:modelValue":l[2]||(l[2]=n=>d(r)?r.value=n:null),step:2},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>[...l[8]||(l[8]=[s(" 精度 ",-1)])]),_:1}),e(t,{modelValue:a(V),"onUpdate:modelValue":l[3]||(l[3]=n=>d(V)?V.value=n:null),precision:2,step:.1,max:10},null,8,["modelValue"]),e(o,{"content-position":"left"},{default:m(()=>[...l[9]||(l[9]=[s(" 按钮位置 ",-1)])]),_:1}),e(t,{modelValue:a(f),"onUpdate:modelValue":l[4]||(l[4]=n=>d(f)?f.value=n:null),"controls-position":"right",min:1,max:10},null,8,["modelValue"])])}}});export{C as _};
