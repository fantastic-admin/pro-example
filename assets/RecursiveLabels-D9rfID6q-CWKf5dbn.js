
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{C as e,Ct as t,Lt as n,S as r,Y as i,Z as a,m as o,q as s,st as c,x as l}from"./vue.runtime.esm-bundler-BVTUj4HC.js";var u=[`x`,`y`,`fill`,`font-size`],d={__name:`RecursiveLabels`,props:{color:{type:String,default:`#000000`},dataset:{type:Array,default:()=>[]},hoveredUid:{type:String,default:null}},emits:[`zoom`,`hover`],setup(d,{emit:f}){let p=d,m=t([]);return c(()=>p.dataset,e=>{m.value=e||[]},{immediate:!0}),(t,c)=>{let f=a(`RecursiveLabels`,!0);return s(!0),e(o,null,i(m.value,(t,a)=>(s(),e(o,{key:`level_${a}`},[t.polygonPath&&t.polygonPath.coordinates?(s(),e(o,{key:0},[(s(!0),e(o,null,i(t.polygonPath.coordinates,(r,i)=>(s(),e(`text`,{key:`node_${a}_${i}`,x:r.x,y:r.y+t.circleRadius*2,fill:d.color,"font-size":t.circleRadius,"text-anchor":`middle`,style:{opacity:`0.8`,"pointer-events":`none`}},n(t.name),9,u))),128)),t.nodes&&t.nodes.length>0?(s(),l(f,{key:0,dataset:t.nodes,color:d.color,hoveredUid:d.hoveredUid},null,8,[`dataset`,`color`,`hoveredUid`])):r(``,!0)],64)):r(``,!0)],64))),128)}}};export{d as default};