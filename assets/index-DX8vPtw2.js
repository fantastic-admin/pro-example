
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
    
import{au as wt,av as It,d as Wt,b0 as Ot,f as I,v as Nt,x as Rt,p as Et,A as jt,u as Tt,J as Vt,K as we,r as Ge,a as Xe,D as qe,L as Je,aH as Ht,s as Qe,am as Lt,M as et,N as _t,o as oe,l as fe,e as me,g as _e,w as Ft,F as At,W as zt,q as Fe,c as tt,n as Ae,h as Dt,t as nt,i as be,P as $t,Q as Kt,aI as Zt,_ as Ut,y as Yt}from"./index-D4ACN76T.js";import{r as Gt}from"./vue.runtime.esm-bundler-DmqCrKoq.js";import{b as Xt}from"./index-B5qMq6jW.js";import{S as qt}from"./sortable.esm-Cw1ESr5Y.js";import Jt from"./moreAction-5qb-r9On.js";import{u as Qt}from"./useTabbar-Bv3Yz9WK.js";import{u as en}from"./useMainPage-A2nFFMMn.js";import"./HDropdown-Brcdi43h.js";import"./HTooltip.vue_vue_type_script_setup_true_lang-BY7WzcVS.js";var ze={exports:{}};(function(ot,Ie){(function(E,e){e(Ie,Gt)})(wt,function(E,e){let h=null;function H(){return h!==null}function ge(t){h&&$(),h=t}function ke(t){t===h&&(h=null)}function $(){h&&(h.closeMenu(),h=null)}const _={defaultDirection:"br",defaultMinWidth:100,defaultMaxWidth:600,defaultZindex:100,defaultZoom:1,defaultAdjustPadding:{x:0,y:10}};function P(t,n){let s=t.offsetTop;return t.offsetParent!=null&&t.offsetParent!=n&&(s-=t.offsetParent.scrollTop,s+=P(t.offsetParent,n)),s}function q(t,n){let s=t.offsetLeft;return t.offsetParent!=null&&t.offsetParent!=n&&(s-=t.offsetParent.scrollLeft,s+=q(t.offsetParent,n)),s}function le(t,n,s,d){return{x:q(t,d)+n,y:P(t,d)+s}}const ae="mx-menu-default-container",ee="mx-menu-container-";let We=0;function Ce(t){const{getContainer:n,zIndex:s}=t;if(n){const v=typeof n=="function"?n():n;if(v){let p=v.getAttribute("id");return p||(p=ee+We++,v.setAttribute("id",p)),{eleId:p,container:v,isNew:!1}}}let d=document.getElementById(ae);return d||(d=document.createElement("div"),d.setAttribute("id",ae),d.setAttribute("class","mx-menu-ghost-host fullscreen"),document.body.appendChild(d)),d.style.zIndex=(s==null?void 0:s.toString())||_.defaultZindex.toString(),{eleId:ae,container:d,isNew:!0}}function ce(t){return typeof t=="number"?`${t}px`:t}const F=e.defineComponent({props:{vnode:{type:null},data:{type:null,default:null}},setup(t){const{vnode:n,data:s}=e.toRefs(t);return()=>typeof n.value=="function"?n.value(s.value):n.value}}),ie=(t,n)=>{const s=t.__vccOpts||t;for(const[d,v]of n)s[d]=v;return s},Oe={},Ne={class:"mx-checked-mark","aria-hidden":"true",viewBox:"0 0 1024 1024"},Re=[e.createElementVNode("path",{d:"M129.3,428.6L52,512l345,372.5l575-620.8l-69.5-75L400.4,718.2L129.3,428.6z"},null,-1)];function Ee(t,n){return e.openBlock(),e.createElementBlock("svg",Ne,Re)}const xe=ie(Oe,[["render",Ee]]),c={},l={class:"mx-right-arrow","aria-hidden":"true",viewBox:"0 0 1024 1024"},N=[e.createElementVNode("path",{d:"M307.018 49.445c11.517 0 23.032 4.394 31.819 13.18L756.404 480.18c8.439 8.438 13.181 19.885 13.181 31.82s-4.741 23.38-13.181 31.82L338.838 961.376c-17.574 17.573-46.065 17.573-63.64-0.001-17.573-17.573-17.573-46.065 0.001-63.64L660.944 512 275.198 126.265c-17.574-17.573-17.574-46.066-0.001-63.64C283.985 53.839 295.501 49.445 307.018 49.445z"},null,-1)];function u(t,n){return e.openBlock(),e.createElementBlock("svg",l,N)}const L=ie(c,[["render",u]]),Y={class:"mx-item-row"},J=["xlink:href"],G={key:1,class:"label"},lt={class:"mx-item-row"},at={class:"mx-shortcut"},ye=e.defineComponent({__name:"ContextMenuItem",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},customRender:{type:Function,default:null},customClass:{type:String,default:""},clickHandler:{type:Function,default:null},label:{type:[String,Object,Function],default:""},icon:{type:[String,Object,Function],default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},hasChildren:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},clickableWhenHasChildren:{type:Boolean,default:!1},rawMenuItem:{type:Object,default:void 0}},emits:["click","subMenuOpen","subMenuClose"],setup(t,{expose:n,emit:s}){const d=t,v=s,{clickHandler:p,clickClose:B,clickableWhenHasChildren:r,disabled:g,hidden:C,label:o,icon:S,iconFontClass:j,showRightArrow:W,shortcut:K,hasChildren:D}=e.toRefs(d),y=e.ref(!1),a=e.ref(!1),f=e.ref(),k=e.inject("globalOptions"),x=e.inject("globalHasSlot"),T=e.inject("globalRenderSlot"),m=e.inject("globalCloseMenu"),M=e.inject("menuContext"),R={getSubMenuInstance:()=>{},showSubMenu:()=>y.value?(M.markActiveMenuItem(R,!0),!0):D.value?(X(),!0):!1,hideSubMenu:()=>{M.closeOtherSubMenu()},isDisabledOrHidden:()=>g.value||C.value,getElement:()=>f.value,focus:()=>a.value=!0,blur:()=>a.value=!1,click:Z};e.provide("menuItemInstance",R),e.onMounted(()=>{M.isMenuItemDataCollectedFlag()?e.nextTick(()=>{let b=0;const V=M.getElement();if(V){let Q=0;for(let te=0;te<V.children.length;te++){const re=V.children[te];if(re.getAttribute("data-type")==="ContextMenuItem"){if(re===f.value){b=Q;break}Q++}}}M.addChildMenuItem(R,b)}):M.addChildMenuItem(R)}),e.onBeforeUnmount(()=>{M.removeChildMenuItem(R)});function Z(b){if(!g.value){if(b){const V=b.target;if(V.classList.contains("mx-context-no-clickable")||k.value.ignoreClickClassName&&V.classList.contains(k.value.ignoreClickClassName))return;if(k.value.clickCloseClassName&&V.classList.contains(k.value.clickCloseClassName)){b.stopPropagation(),m(d.rawMenuItem);return}}D.value?r.value?(typeof p.value=="function"&&p.value(b),v("click",b)):y.value||X():(typeof p.value=="function"&&p.value(b),v("click",b),B.value&&m(d.rawMenuItem))}}function X(b){a.value=!1,M.checkCloseOtherSubMenuTimeOut()||M.closeOtherSubMenu(),g.value||(M.markActiveMenuItem(R),D.value&&(b||M.markThisOpenedByKeyBoard(),M.addOpenedSubMenu(se),y.value=!0,e.nextTick(()=>v("subMenuOpen",R))))}function se(){a.value=!1,y.value=!1,v("subMenuClose",R)}function A(){return{disabled:g.value,label:o.value,icon:S.value,iconFontClass:j.value,showRightArrow:W.value,clickClose:B.value,clickableWhenHasChildren:r.value,shortcut:K.value,theme:k.value.theme,isOpen:y,hasChildren:D,onClick:Z,onMouseEnter:X,closeMenu:m}}return n(R),(b,V)=>e.unref(C)?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",{key:0,class:"mx-context-menu-item-wrapper",ref_key:"menuItemRef",ref:f,"data-type":"ContextMenuItem"},[e.unref(x)("itemRender")?(e.openBlock(),e.createBlock(e.unref(F),{key:0,vnode:()=>e.unref(T)("itemRender",A())},null,8,["vnode"])):t.customRender?(e.openBlock(),e.createBlock(e.unref(F),{key:1,vnode:t.customRender,data:A()},null,8,["vnode","data"])):(e.openBlock(),e.createElementBlock("div",{key:2,class:e.normalizeClass(["mx-context-menu-item",e.unref(g)?"disabled":"",a.value?"keyboard-focus":"",t.customClass?" "+t.customClass:"",y.value?"open":""]),onClick:Z,onMouseenter:X},[e.renderSlot(b.$slots,"default",{},()=>[e.createElementVNode("div",Y,[e.createElementVNode("div",{class:e.normalizeClass(["mx-icon-placeholder",t.preserveIconWidth?"preserve-width":""])},[e.renderSlot(b.$slots,"icon",{},()=>[e.unref(x)("itemIconRender")?(e.openBlock(),e.createBlock(e.unref(F),{key:0,vnode:()=>e.unref(T)("itemIconRender",A())},null,8,["vnode"])):typeof t.svgIcon=="string"&&t.svgIcon?(e.openBlock(),e.createElementBlock("svg",e.mergeProps({key:1,class:"icon svg"},t.svgProps),[e.createElementVNode("use",{"xlink:href":t.svgIcon},null,8,J)],16)):typeof e.unref(S)!="string"?(e.openBlock(),e.createBlock(e.unref(F),{key:2,vnode:e.unref(S),data:e.unref(S)},null,8,["vnode","data"])):typeof e.unref(S)=="string"&&e.unref(S)!==""?(e.openBlock(),e.createElementBlock("i",{key:3,class:e.normalizeClass(e.unref(S)+" icon "+e.unref(j)+" "+e.unref(k).iconFontClass)},null,2)):e.createCommentVNode("",!0)]),t.checked?e.renderSlot(b.$slots,"check",{key:0},()=>[e.unref(x)("itemCheckRender")?(e.openBlock(),e.createBlock(e.unref(F),{key:0,vnode:()=>e.unref(T)("itemCheckRender",A())},null,8,["vnode"])):e.createCommentVNode("",!0),e.createVNode(xe)]):e.createCommentVNode("",!0)],2),e.renderSlot(b.$slots,"label",{},()=>[e.unref(x)("itemLabelRender")?(e.openBlock(),e.createBlock(e.unref(F),{key:0,vnode:()=>e.unref(T)("itemLabelRender",A())},null,8,["vnode"])):typeof e.unref(o)=="string"?(e.openBlock(),e.createElementBlock("span",G,e.toDisplayString(e.unref(o)),1)):(e.openBlock(),e.createBlock(e.unref(F),{key:2,vnode:e.unref(o),data:e.unref(o)},null,8,["vnode","data"]))])]),e.createElementVNode("div",lt,[e.unref(K)?e.renderSlot(b.$slots,"shortcut",{key:0},()=>[e.unref(x)("itemShortcutRender")?(e.openBlock(),e.createBlock(e.unref(F),{key:0,vnode:()=>e.unref(T)("itemShortcutRender",A())},null,8,["vnode"])):e.createCommentVNode("",!0),e.createElementVNode("span",at,e.toDisplayString(e.unref(K)),1)]):e.createCommentVNode("",!0),e.unref(W)?e.renderSlot(b.$slots,"rightArrow",{key:1},()=>[e.unref(x)("itemRightArrowRender")?(e.openBlock(),e.createBlock(e.unref(F),{key:0,vnode:()=>e.unref(T)("itemRightArrowRender",A())},null,8,["vnode"])):e.createCommentVNode("",!0),e.createVNode(L)]):e.createCommentVNode("",!0)])])],34)),e.unref(k).menuTransitionProps?(e.openBlock(),e.createBlock(e.Transition,e.normalizeProps(e.mergeProps({key:3},e.unref(k).menuTransitionProps)),{default:e.withCtx(()=>[y.value?e.renderSlot(b.$slots,"submenu",{key:0}):e.createCommentVNode("",!0)]),_:3},16)):y.value?e.renderSlot(b.$slots,"submenu",{key:4}):e.createCommentVNode("",!0)],512))}}),it=e.defineComponent({name:"ContextMenuSperator",components:{VNodeRender:F},setup(){const t=e.inject("globalHasSlot"),n=e.inject("globalRenderSlot");return{globalHasSlot:t,globalRenderSlot:n}}}),st={key:1,class:"mx-context-menu-item-sperator mx-context-no-clickable"};function rt(t,n,s,d,v,p){const B=e.resolveComponent("VNodeRender");return t.globalHasSlot("separatorRender")?(e.openBlock(),e.createBlock(B,{key:0,vnode:()=>t.globalRenderSlot("separatorRender",{})},null,8,["vnode"])):(e.openBlock(),e.createElementBlock("div",st))}const Me=ie(it,[["render",rt]]),ut=e.defineComponent({name:"ContextSubMenu",components:{ContextMenuItem:ye,ContextMenuSeparator:Me,ContextMenuIconRight:L},props:{items:{type:Object,default:null},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0},adjustPosition:{type:Boolean,default:!0},direction:{type:String,default:"br"}},setup(t){const n=e.inject("menuContext"),s=e.inject("globalOptions"),d=e.inject("globalHasSlot"),v=e.inject("globalRenderSlot"),{zIndex:p,getParentWidth:B,getParentHeight:r,getZoom:g}=n,{adjustPosition:C}=e.toRefs(t),o=e.ref(),S=e.ref(),j=e.ref(),W=e.ref(),K=[],D=e.inject("globalSetCurrentSubMenu"),y=[];let a=null,f=0;function k(){a&&a.blur()}function x(i,O){if(i){for(let U=O!==void 0?O:0;U<y.length;U++)if(!y[U].isDisabledOrHidden()){T(U);break}}else for(let U=O!==void 0?O:y.length-1;U>=0;U--)if(!y[U].isDisabledOrHidden()){T(U);break}}function T(i){if(a&&k(),i!==void 0&&(a=y[Math.max(0,Math.min(i,y.length-1))]),!!a&&(a.focus(),ue.value)){const O=a.getElement();O&&(b.value=Math.min(Math.max(-V.value,-O.offsetTop-O.offsetHeight+ne.value),0))}}function m(){D(M)}const M={isTopLevel:()=>n.getParentContext()===null,closeSelfAndActiveParent:()=>{const i=X.getParentContext();if(i){i.closeOtherSubMenu();const O=i.getSubMenuInstanceContext();if(O)return O.focusCurrentItem(),!0}return!1},closeCurrentSubMenu:()=>{var i;return(i=X.getParentContext())==null?void 0:i.closeOtherSubMenu()},moveCurrentItemFirst:()=>x(!0),moveCurrentItemLast:()=>x(!1),moveCurrentItemDown:()=>x(!0,a?y.indexOf(a)+1:0),moveCurrentItemUp:()=>x(!1,a?y.indexOf(a)-1:0),focusCurrentItem:()=>T(),openCurrentItemSubMenu:()=>a?a==null?void 0:a.showSubMenu():!1,triggerCurrentItemClick:i=>a==null?void 0:a.click(i)};let R=!1,Z=!1;const X={zIndex:p+1,container:n.container,adjustPadding:s.value.adjustPadding||_.defaultAdjustPadding,getParentWidth:()=>{var i;return((i=S.value)==null?void 0:i.offsetWidth)||0},getParentHeight:()=>{var i;return((i=S.value)==null?void 0:i.offsetHeight)||0},getParentX:()=>w.value.x,getParentY:()=>w.value.y,getParentAbsX:()=>S.value?q(S.value,n.container):0,getParentAbsY:()=>S.value?P(S.value,n.container):0,getPositon:()=>[0,0],getZoom:()=>s.value.zoom||_.defaultZoom,addOpenedSubMenu(i){K.push(i)},closeOtherSubMenu(){K.forEach(i=>i()),K.splice(0,K.length),D(M)},checkCloseOtherSubMenuTimeOut(){return f?(clearTimeout(f),f=0,!0):!1},closeOtherSubMenuWithTimeOut(){f=setTimeout(()=>{f=0,this.closeOtherSubMenu()},200)},addChildMenuItem:(i,O)=>{O===void 0?y.push(i):y.splice(O,0,i)},removeChildMenuItem:i=>{y.splice(y.indexOf(i),1),i.getSubMenuInstance=()=>{}},markActiveMenuItem:(i,O=!1)=>{k(),a=i,O&&T()},markThisOpenedByKeyBoard:()=>{R=!0},isOpenedByKeyBoardFlag:()=>R?(R=!1,!0):!1,isMenuItemDataCollectedFlag:()=>Z,getElement:()=>S.value||null,getParentContext:()=>n,getSubMenuInstanceContext:()=>M};e.provide("menuContext",X);const se={getChildItem:i=>y[i],getMenuDimensions:()=>o.value?{width:o.value.offsetWidth,height:o.value.offsetHeight}:{width:0,height:0},getSubmenuRoot:()=>o.value,getMenu:()=>S.value,getScrollValue:()=>b.value,setScrollValue:i=>b.value=i,getScrollHeight:()=>V.value,getMaxHeight:()=>ne.value,getPosition:()=>w.value,setPosition:(i,O)=>{w.value.x=i,w.value.y=O}},A=e.inject("menuItemInstance",void 0);A&&(A.getSubMenuInstance=()=>se);const b=e.ref(0),V=e.ref(0);function Q(i){i?b.value=Math.min(Math.max(b.value-50,-V.value),0):b.value=Math.min(b.value+50,0)}function te(i){i.preventDefault(),i.stopPropagation(),Q(i.deltaY>0)}function re(i){s.value.mouseScroll&&(i.preventDefault(),i.stopPropagation(),Q(i.deltaY>0))}const ue=e.ref(!1),w=e.ref({x:0,y:0}),ne=e.ref(0);return e.onMounted(()=>{const i=n.getPositon();w.value={x:(i[0]??s.value.xOffset??0)/g(),y:(i[1]??s.value.yOffset??0)/g()},D(M),e.nextTick(()=>{var O,U;const z=S.value;if(z&&j.value){const{container:de}=n,Te=(B==null?void 0:B())??0,Ue=(r==null?void 0:r())??0,Be=typeof n.adjustPadding=="number"?n.adjustPadding:((O=n.adjustPadding)==null?void 0:O.x)??0,Pe=typeof n.adjustPadding=="number"?n.adjustPadding:((U=n.adjustPadding)==null?void 0:U.y)??0,ve=Ue>0?Pe:0,Mt=document.documentElement.scrollHeight/g(),St=document.documentElement.scrollWidth/g(),Bt=Math.min(St,de.offsetWidth),Ve=Math.min(Mt,de.offsetHeight);let He=q(z,de),Le=P(z,de);t.direction.includes("l")?w.value.x-=z.offsetWidth+Be:t.direction.includes("r")?w.value.x+=Te+Be:(w.value.x+=Te/2,w.value.x-=(z.offsetWidth+Be)/2),t.direction.includes("t")?w.value.y-=(z.offsetHeight+Pe*2)/g():t.direction.includes("b")?w.value.y-=Pe/g():(w.value.y+=Ue/2/g(),w.value.y-=(z.offsetHeight+Pe)/2/g()),C.value&&e.nextTick(()=>{He=q(z,de),Le=P(z,de);const Pt=He+z.offsetWidth-Bt,Ye=Le+z.offsetHeight+ve*2-Ve;if(ue.value=Ye>0,V.value=z.offsetHeight-Ve+ve*2,Pt>0){const pe=Te+z.offsetWidth-Be,he=He;pe>he?w.value.x-=he:w.value.x-=pe}if(ue.value){const pe=Ye,he=Le;pe>he?w.value.y-=he-ve:w.value.y-=pe-ve,ne.value=Ve-ve*2}else ne.value=0})}z==null||z.focus({preventScroll:!0}),n.isOpenedByKeyBoardFlag()&&x(!0),Z=!0})}),e.onBeforeUnmount(()=>{A&&(A.getSubMenuInstance=()=>{})}),{submenuRoot:o,menu:S,scroll:j,options:s,zIndex:p,constOptions:_,scrollValue:b,upScrollButton:W,overflow:ue,position:w,scrollHeight:V,maxHeight:ne,...se,globalHasSlot:d,globalRenderSlot:v,onScroll:Q,onSubMenuBodyClick:m,onMouseWhell:re,onMouseWhellMx:te,solveNumberOrStringSize:ce}}}),ct={key:0,class:"mx-context-menu-updown placeholder"},dt={key:1,class:"mx-context-menu-updown placeholder"},ft={class:"mx-context-menu-scroll",ref:"scroll"};function mt(t,n,s,d,v,p){const B=e.resolveComponent("ContextMenuSeparator"),r=e.resolveComponent("ContextSubMenu",!0),g=e.resolveComponent("ContextMenuItem"),C=e.resolveComponent("ContextMenuIconRight");return e.openBlock(),e.createElementBlock("div",{ref:"submenuRoot",class:e.normalizeClass(["mx-context-menu",t.options.customClass?t.options.customClass:"",t.options.theme??""]),style:e.normalizeStyle({maxWidth:t.maxWidth?t.solveNumberOrStringSize(t.maxWidth):`${t.constOptions.defaultMaxWidth}px`,minWidth:t.minWidth?t.solveNumberOrStringSize(t.minWidth):`${t.constOptions.defaultMinWidth}px`,maxHeight:t.overflow&&t.maxHeight>0?`${t.maxHeight}px`:void 0,zIndex:t.zIndex,left:`${t.position.x}px`,top:`${t.position.y}px`}),"data-type":"ContextSubMenu",onClick:n[4]||(n[4]=(...o)=>t.onSubMenuBodyClick&&t.onSubMenuBodyClick(...o)),onWheel:n[5]||(n[5]=(...o)=>t.onMouseWhell&&t.onMouseWhell(...o))},[e.createElementVNode("div",{class:e.normalizeClass(["mx-context-menu-items"]),ref:"menu",style:e.normalizeStyle({top:`${t.scrollValue}px`})},[e.renderSlot(t.$slots,"default",{},()=>[t.overflow&&t.options.updownButtonSpaceholder?(e.openBlock(),e.createElementBlock("div",ct)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.items,(o,S)=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:S},[o.hidden!==!0&&o.divided==="up"?(e.openBlock(),e.createBlock(B,{key:0})):e.createCommentVNode("",!0),o.hidden!==!0&&o.divided==="self"?(e.openBlock(),e.createBlock(B,{key:1})):(e.openBlock(),e.createBlock(g,{key:2,clickHandler:o.onClick?j=>o.onClick(j):void 0,disabled:o.disabled,hidden:o.hidden,icon:o.icon,iconFontClass:o.iconFontClass,svgIcon:o.svgIcon,svgProps:o.svgProps,label:o.label,customRender:o.customRender,customClass:o.customClass,checked:o.checked,shortcut:o.shortcut,clickClose:o.clickClose,clickableWhenHasChildren:o.clickableWhenHasChildren,preserveIconWidth:o.preserveIconWidth!==void 0?o.preserveIconWidth:t.options.preserveIconWidth,showRightArrow:o.children&&o.children.length>0,hasChildren:o.children&&o.children.length>0,rawMenuItem:o,onSubMenuOpen:j=>{var W;return(W=o.onSubMenuOpen)==null?void 0:W.call(o,j)},onSubMenuClose:j=>{var W;return(W=o.onSubMenuClose)==null?void 0:W.call(o,j)}},e.createSlots({_:2},[o.children&&o.children.length>0?{name:"submenu",fn:e.withCtx(()=>[e.createVNode(r,{items:o.children,maxWidth:o.maxWidth,minWidth:o.minWidth,adjustPosition:o.adjustSubMenuPosition!==void 0?o.adjustSubMenuPosition:t.options.adjustPosition,direction:o.direction!==void 0?o.direction:t.options.direction},null,8,["items","maxWidth","minWidth","adjustPosition","direction"])]),key:"0"}:void 0]),1032,["clickHandler","disabled","hidden","icon","iconFontClass","svgIcon","svgProps","label","customRender","customClass","checked","shortcut","clickClose","clickableWhenHasChildren","preserveIconWidth","showRightArrow","hasChildren","rawMenuItem","onSubMenuOpen","onSubMenuClose"])),o.hidden!==!0&&(o.divided==="down"||o.divided===!0)?(e.openBlock(),e.createBlock(B,{key:3})):e.createCommentVNode("",!0)],64))),128)),t.overflow&&t.options.updownButtonSpaceholder?(e.openBlock(),e.createElementBlock("div",dt)):e.createCommentVNode("",!0)])],4),e.createElementVNode("div",ft,[e.withDirectives(e.createElementVNode("div",{ref:"upScrollButton",class:e.normalizeClass("mx-context-menu-updown mx-context-no-clickable up"+(t.overflow&&t.scrollValue<0?"":" disabled")),onClick:n[0]||(n[0]=o=>t.onScroll(!1)),onWheel:n[1]||(n[1]=(...o)=>t.onMouseWhellMx&&t.onMouseWhellMx(...o))},[e.createVNode(C)],34),[[e.vShow,t.overflow]]),e.withDirectives(e.createElementVNode("div",{class:e.normalizeClass("mx-context-menu-updown mx-context-no-clickable down"+(t.overflow&&t.scrollValue>-t.scrollHeight?"":" disabled")),onClick:n[2]||(n[2]=o=>t.onScroll(!0)),onWheel:n[3]||(n[3]=(...o)=>t.onMouseWhellMx&&t.onMouseWhellMx(...o))},[e.createVNode(C)],34),[[e.vShow,t.overflow]])],512)],38)}const Se=ie(ut,[["render",mt]]),vt={class:"mx-menu-ghost-host"},De=e.defineComponent({__name:"ContextSubMenuWrapper",props:{options:{type:Object,default:null},show:{type:Object,default:null},container:{type:Object,default:null},isFullScreenContainer:{type:Boolean,default:!0}},emits:["close","closeAnimFinished"],setup(t,{expose:n,emit:s}){const d=t,v=s,p=e.useSlots(),B=e.ref(),{options:r,show:g,container:C}=e.toRefs(d);e.onMounted(()=>{g.value&&j()}),e.onBeforeUnmount(()=>{y()}),e.watch(g,m=>{m?j():(ke(o),y())});const o={closeMenu:W,isClosed:K,getMenuRef:()=>B.value,getMenuDimensions:()=>{var m;return((m=B.value)==null?void 0:m.getMenuDimensions())??{width:0,height:0}}};let S=!1;function j(){D(),ge(o)}function W(m){S=!0,v("close",m),r.value.menuTransitionProps||v("closeAnimFinished"),ke(o)}function K(){return S}function D(){setTimeout(()=>{document.addEventListener("click",x,!0),document.addEventListener("contextmenu",x,!0),document.addEventListener("scroll",k,!0),!d.isFullScreenContainer&&C.value&&C.value.addEventListener("scroll",k,!0),r.value.keyboardControl!==!1&&document.addEventListener("keydown",f)},50)}function y(){document.removeEventListener("contextmenu",x,!0),document.removeEventListener("click",x,!0),document.removeEventListener("scroll",k,!0),!d.isFullScreenContainer&&C.value&&C.value.removeEventListener("scroll",k,!0),r.value.keyboardControl!==!1&&document.removeEventListener("keydown",f)}const a=e.ref();e.provide("globalSetCurrentSubMenu",m=>a.value=m);function f(m){var M,R,Z,X,se,A,b,V,Q,te,re,ue,w;let ne=!0;switch(m.key){case"Escape":{((M=a.value)==null?void 0:M.isTopLevel())===!1?(R=a.value)==null||R.closeCurrentSubMenu():W();break}case"ArrowDown":(Z=a.value)==null||Z.moveCurrentItemDown();break;case"ArrowUp":(X=a.value)==null||X.moveCurrentItemUp();break;case"Home":(se=a.value)==null||se.moveCurrentItemFirst();break;case"End":(A=a.value)==null||A.moveCurrentItemLast();break;case"ArrowLeft":{(b=a.value)!=null&&b.closeSelfAndActiveParent()||(Q=(V=r.value).onKeyFocusMoveLeft)==null||Q.call(V);break}case"ArrowRight":(te=a.value)!=null&&te.openCurrentItemSubMenu()||(ue=(re=r.value).onKeyFocusMoveRight)==null||ue.call(re);break;case"Enter":(w=a.value)==null||w.triggerCurrentItemClick(m);break;default:ne=!1;break}ne&&a.value&&(m.stopPropagation(),m.preventDefault())}function k(){r.value.closeWhenScroll!==!1&&W()}function x(m){T(m.target,m)}function T(m,M){for(var R,Z;m;){if(m.classList&&m.classList.contains("mx-menu-host"))return;m=m.parentNode}r.value.clickCloseOnOutside!==!1?(y(),W()):(Z=(R=r.value).onClickOnOutside)==null||Z.call(R,M)}return e.provide("globalOptions",r),e.provide("globalCloseMenu",W),e.provide("globalIsFullScreenContainer",d.isFullScreenContainer),e.provide("globalHasSlot",m=>p[m]!==void 0),e.provide("globalRenderSlot",(m,M)=>e.renderSlot(p,m,{...M},()=>[e.h("span","Render slot failed")],!1)),e.provide("menuContext",{zIndex:r.value.zIndex||_.defaultZindex,container:C.value,adjustPadding:{x:0,y:0},getParentAbsY:()=>r.value.x,getParentAbsX:()=>r.value.y,getZoom:()=>r.value.zoom||_.defaultZoom,getParentX:()=>0,getParentY:()=>0,getParentWidth:()=>0,getParentHeight:()=>0,getPositon:()=>[r.value.x,r.value.y],closeOtherSubMenuWithTimeOut:()=>{},checkCloseOtherSubMenuTimeOut:()=>!1,addOpenedSubMenu:()=>{},closeOtherSubMenu:()=>{},getParentContext:()=>null,getSubMenuInstanceContext:()=>null,getElement:()=>null,addChildMenuItem:()=>{},removeChildMenuItem:()=>{},markActiveMenuItem:()=>{},markThisOpenedByKeyBoard:()=>{},isOpenedByKeyBoardFlag:()=>!1,isMenuItemDataCollectedFlag:()=>!1}),n(o),(m,M)=>(e.openBlock(),e.createElementBlock("div",vt,[e.unref(r).menuTransitionProps?(e.openBlock(),e.createBlock(e.Transition,e.mergeProps({key:0,appear:""},e.unref(r).menuTransitionProps,{onAfterLeave:M[0]||(M[0]=R=>v("closeAnimFinished"))}),{default:e.withCtx(()=>[e.unref(g)?(e.openBlock(),e.createBlock(Se,{key:0,ref_key:"submenuInstance",ref:B,class:"mx-menu-host",items:e.unref(r).items,adjustPosition:e.unref(r).adjustPosition,maxWidth:e.unref(r).maxWidth||e.unref(_).defaultMaxWidth,minWidth:e.unref(r).minWidth||e.unref(_).defaultMinWidth,direction:e.unref(r).direction||e.unref(_).defaultDirection},{default:e.withCtx(()=>[e.renderSlot(m.$slots,"default")]),_:3},8,["items","adjustPosition","maxWidth","minWidth","direction"])):e.createCommentVNode("",!0)]),_:3},16)):e.unref(g)?(e.openBlock(),e.createBlock(Se,{key:1,ref_key:"submenuInstance",ref:B,class:"mx-menu-host",items:e.unref(r).items,adjustPosition:e.unref(r).adjustPosition,maxWidth:e.unref(r).maxWidth||e.unref(_).defaultMaxWidth,minWidth:e.unref(r).minWidth||e.unref(_).defaultMinWidth,direction:e.unref(r).direction||e.unref(_).defaultDirection},{default:e.withCtx(()=>[e.renderSlot(m.$slots,"default")]),_:3},8,["items","adjustPosition","maxWidth","minWidth","direction"])):e.createCommentVNode("",!0)]))}}),$e=e.defineComponent({name:"ContextMenu",emits:["update:show","close"],props:{options:{type:Object,default:null},show:{type:Boolean,default:!1}},setup(t,n){const{options:s,show:d}=e.toRefs(t),v=e.ref(null);return n.expose({closeMenu:()=>n.emit("update:show",!1),isClosed:()=>!d.value,getMenuRef:()=>{var p;return(p=v.value)==null?void 0:p.getMenuRef()},getMenuDimensions:()=>{var p;return((p=v.value)==null?void 0:p.getMenuDimensions())??{width:0,height:0}}}),()=>{const{isNew:p,container:B,eleId:r}=Ce(s.value);return[e.h(e.Teleport,{to:`#${r}`},[e.h(De,{ref:v,options:s,show:d,container:B,isFullScreenContainer:!p,onClose:g=>{var C,o;n.emit("update:show",!1),n.emit("close"),(o=(C=s.value).onClose)==null||o.call(C,g)}},n.slots)])]}}}),Ke=e.defineComponent({name:"ContextMenuGroup",props:{disabled:{type:Boolean,default:!1},hidden:{type:Boolean,default:!1},clickHandler:{type:Function,default:null},label:{type:String,default:""},icon:{type:String,default:""},iconFontClass:{type:String,default:"iconfont"},checked:{type:Boolean,default:!1},shortcut:{type:String,default:""},svgIcon:{type:String,default:""},svgProps:{type:Object,default:null},preserveIconWidth:{type:Boolean,default:!0},showRightArrow:{type:Boolean,default:!1},clickClose:{type:Boolean,default:!0},adjustSubMenuPosition:{type:Boolean,default:void 0},maxWidth:{type:[String,Number],default:0},minWidth:{type:[String,Number],default:0}},setup(t,n){const s=e.inject("globalOptions"),{adjustSubMenuPosition:d,maxWidth:v,minWidth:p}=e.toRefs(t),B=typeof d.value<"u"?d.value:s.value.adjustPosition,r=e.ref(),g=e.ref();return n.expose({getSubMenuRef:()=>r.value,getMenuItemRef:()=>g.value}),()=>e.h(ye,{...t,ref:g,showRightArrow:!0,maxWidth:void 0,minWidth:void 0,adjustSubMenuPosition:void 0,hasChildren:typeof n.slots.default!==void 0},n.slots.default?{submenu:()=>e.h(Se,{ref:r,maxWidth:v.value,minWidth:p.value,adjustPosition:B},{default:n.slots.default})}:void 0)}});function pt(t,n,s,d){const v=e.ref(!0),p=e.h(De,{options:t,show:v,container:n,isFullScreenContainer:!s,onCloseAnimFinished:()=>{e.render(null,n)},onClose:B=>{var r;(r=t.onClose)==null||r.call(t,B),v.value=!1}},d);return e.render(p,n),p.component}function Ze(t,n){const s=Ce(t);return pt(t,s.container,s.isNew,n).exposed}const je={install(t){t.config.globalProperties.$contextmenu=Ze,t.component("ContextMenu",$e),t.component("ContextMenuItem",ye),t.component("ContextMenuGroup",Ke),t.component("ContextMenuSperator",Me),t.component("ContextMenuSeparator",Me),t.component("ContextSubMenu",Se)},showContextMenu(t,n){return Ze(t,n)},isAnyContextMenuOpen(){return H()},closeContextMenu:$,transformMenuPosition:le},ht={},bt={class:"mx-menu-bar-icon-menu",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"200",height:"200"},gt=[e.createElementVNode("path",{d:"M133.310936 296.552327l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949 0-19.781623-15.997312-35.950949-35.950949-35.950949L133.310936 224.650428c-19.781623 0-35.950949 16.169326-35.950949 35.950949C97.359987 280.383 113.529313 296.552327 133.310936 296.552327z"},null,-1),e.createElementVNode("path",{d:"M890.51705 476.135058 133.310936 476.135058c-19.781623 0-35.950949 16.169326-35.950949 35.950949 0 19.781623 16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-16.169326 35.950949-35.950949C926.467999 492.304384 910.298673 476.135058 890.51705 476.135058z"},null,-1),e.createElementVNode("path",{d:"M890.51705 727.447673 133.310936 727.447673c-19.781623 0-35.950949 15.997312-35.950949 35.950949s16.169326 35.950949 35.950949 35.950949l757.206115 0c19.781623 0 35.950949-15.997312 35.950949-35.950949S910.298673 727.447673 890.51705 727.447673z"},null,-1)];function kt(t,n){return e.openBlock(),e.createElementBlock("svg",bt,gt)}const Ct=ie(ht,[["render",kt]]),xt=["onClick","onMouseenter"],yt=e.defineComponent({__name:"MenuBar",props:{options:{type:Object,default:null}},setup(t){const n=t,s=e.ref(),d=e.ref(!1),v=e.ref([]),p=e.ref(null);function B(){d.value=!0}function r(){d.value=!1}e.onMounted(()=>{v.value=n.options.items||[]}),e.watch(()=>n.options,()=>{v.value=n.options.items||[]});let g=null,C=-1;function o(){C<v.value.length-1?C++:C=0,W(C,v.value[C])}function S(){C>0?C--:C=v.value.length-1,W(C,v.value[C])}function j(a){const f=n.options.barPopDirection??"bl";let k=0,x=0;return f.startsWith("b")?x=P(a)+a.offsetHeight:f.startsWith("t")?x=P(a):x=P(a)+a.offsetHeight/2,f.endsWith("l")?k=q(a):f.startsWith("r")?k=q(a)+a.offsetWidth:k=q(a)+a.offsetWidth/2,{x:k,y:x}}function W(a,f){var k;if(C=a,!f.children)return;g&&(g.closeMenu(),g=null,d.value=!0),p.value=f;const x=(k=s.value)==null?void 0:k.children[a];if(x){const{x:T,y:m}=j(x);g=je.showContextMenu({...n.options,items:f.children,x:T,y:m,onKeyFocusMoveLeft(){S()},onKeyFocusMoveRight(){o()},onClose(){p.value==f&&(d.value=!1,p.value=null)}})}}function K(){C=0;const a=s.value;if(a){const{x:f,y:k}=j(a);g=je.showContextMenu({...n.options,x:f,y:k})}}function D(a,f){f?(d.value=!0,W(a,f),f.onClick&&(f.clickableWhenHasChildren===!0&&f.children&&f.children.length>0||!f.children||f.children.length===0)&&f.onClick()):K()}function y(a,f){d.value&&W(a,f)}return(a,f)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["mx-menu-bar",t.options.theme??"",t.options.mini?"mini":""]),onFocus:B,onBlur:r},[e.renderSlot(a.$slots,"prefix"),t.options.mini?(e.openBlock(),e.createElementBlock("div",{key:0,ref_key:"menuBarContent",ref:s,class:"mx-menu-bar-content"},[e.createElementVNode("div",{class:"mx-menu-bar-item",onClick:f[0]||(f[0]=k=>D(0,null))},[e.createVNode(Ct)])],512)):(e.openBlock(),e.createElementBlock("div",{key:1,ref_key:"menuBarContent",ref:s,class:"mx-menu-bar-content"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(v.value,(k,x)=>(e.openBlock(),e.createElementBlock("div",{key:x,class:e.normalizeClass(["mx-menu-bar-item",k==p.value?"active":""]),onClick:T=>D(x,k),onMouseenter:T=>y(x,k)},e.toDisplayString(k.label),43,xt))),128))],512)),e.renderSlot(a.$slots,"suffix")],34))}});E.ContextMenu=$e,E.ContextMenuGroup=Ke,E.ContextMenuItem=ye,E.ContextMenuSeparator=Me,E.MenuBar=yt,E.default=je,Object.defineProperties(E,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})})(ze,ze.exports);var tn=ze.exports;const nn=It(tn),on={class:"tabbar-container"},ln=["data-index","title","onClick","onDblclick","onContextmenu"],an={class:"tab-content"},sn=["onClick"],rn=["onClick"],un=Wt({name:"Tabbar",__name:"index",setup(ot){Ot(c=>({"1840d91a":I(We),"17da0652":I(Ce)}));const Ie=Nt(),E=Rt(),e=Et(),h=jt(),H=Qt(),ge=en(),ke=Xt({reactive:!0}),{t:$}=Tt(),{generateI18nTitle:_}=Vt(),P=we(()=>H.getId()),q=we(()=>h.list.length>1&&(H.checkCloseOtherSide()||H.checkCloseLeftSide()||H.checkCloseRightSide())),le=Ge(),ae=Xe("tabContainerRef"),ee=Xe("tabRef"),We=we(()=>{var l,N,u,L,Y;const c=h.list.findIndex(J=>J.tabId===P.value);return e.settings.app.direction==="ltr"?`${((N=(l=ee.value)==null?void 0:l.find(J=>Number.parseInt(J.dataset.index)===c))==null?void 0:N.offsetLeft)||0}px`:`${(((u=le.value)==null?void 0:u.offsetWidth)??0)-(((Y=(L=ee.value)==null?void 0:L.find(J=>Number.parseInt(J.dataset.index)===c))==null?void 0:Y.getBoundingClientRect().right)||0)}px`}),Ce=we(()=>{var l,N;const c=h.list.findIndex(u=>u.tabId===P.value);return`${((N=(l=ee.value)==null?void 0:l.find(u=>Number.parseInt(u.dataset.index)===c))==null?void 0:N.offsetWidth)||0}px`}),ce=Ge(!1);let F;qe(()=>{var c;F=new qt((c=ae.value)==null?void 0:c.$el,{animation:200,ghostClass:"tab-ghost",draggable:".tab",handle:".drag-handle",onStart:()=>{ce.value=!0},onEnd:()=>{ce.value=!1},onMove:l=>l.dragged.classList.contains("pinned")?l.related.classList.contains("pinned"):!l.related.classList.contains("pinned"),onUpdate:l=>{l.newIndex!==void 0&&l.oldIndex!==void 0&&h.sort(l.newIndex,l.oldIndex)}})}),Je([()=>e.mode,()=>e.settings.app.direction],c=>{Ht(()=>{F==null||F.option("disabled",c[0]==="mobile"||c[1]==="rtl")})},{immediate:!0}),Je(()=>Ie,c=>{e.settings.tabbar.enable&&h.add(c).then(()=>{const l=h.list.findIndex(N=>N.tabId===P.value);l!==-1&&(ee.value&&Ne(ee.value[l].offsetLeft),ie())})},{immediate:!0,deep:!0});function ie(){var c,l;((c=ae.value)==null?void 0:c.$el.clientWidth)>(((l=le.value)==null?void 0:l.clientWidth)??0)&&!Qe.local.has("tabbarScrollTip")&&(Qe.local.set("tabbarScrollTip",""),Lt.info("标签栏数量超过展示区域范围，可以将鼠标移到标签栏上，通过鼠标滚轮滑动浏览",{title:"温馨提示",duration:5e3,closable:!0,zIndex:2e3}))}function Oe(c){var l;(l=le.value)==null||l.scrollBy({left:c.deltaY||c.detail})}function Ne(c){var l;(l=le.value)==null||l.scrollTo({left:c-50,behavior:"smooth"})}function Re(c){switch(e.settings.tabbar.dblclickAction){case"reload":ge.reload();break;case"close":H.closeById(c.tabId);break;case"pin":c.isPin?h.unPin(c.tabId):h.pin(c.tabId);break;case"maximize":e.setMainPageMaximize();break;case"window":window.open(E.resolve(c.fullPath).href,"_blank");break}}function Ee(c,l){c.preventDefault(),nn.showContextMenu({x:c.x,y:c.y,zIndex:1050,iconFontClass:"",customClass:"tabbar-contextmenu",items:[{label:$("app.tabbar.reload"),icon:"i-ri:refresh-line",disabled:l.tabId!==P.value,onClick:()=>{ge.reload()}},{label:$("app.tabbar.close"),icon:"i-ri:close-line",disabled:h.list.length<=1||l.isPin||l.isPermanent,divided:!0,onClick:()=>{H.closeById(l.tabId)}},{label:l.isPin?$("app.tabbar.unpin"):$("app.tabbar.pin"),icon:l.isPin?"i-lucide:pin-off":"i-lucide:pin",disabled:l.fullPath===e.settings.home.fullPath||l.isPermanent,onClick:()=>{l.isPin?h.unPin(l.tabId):h.pin(l.tabId)}},{label:$("app.tabbar.maximize"),icon:"i-ri:picture-in-picture-exit-line",onClick:()=>{l.tabId!==P.value&&E.push(l.fullPath),e.setMainPageMaximize()}},{label:$("app.tabbar.newWindow"),icon:"i-ci:window",divided:!0,onClick:()=>{window.open(E.resolve(l.fullPath).href,"_blank")}},{label:$("app.tabbar.closeOtherSide"),disabled:!H.checkCloseOtherSide(l.tabId),onClick:()=>{H.closeOtherSide(l.tabId)}},{label:$("app.tabbar.closeLeftSide"),disabled:!H.checkCloseLeftSide(l.tabId),onClick:()=>{H.closeLeftSide(l.tabId)}},{label:$("app.tabbar.closeRightSide"),disabled:!H.checkCloseRightSide(l.tabId),onClick:()=>{H.closeRightSide(l.tabId)}}]})}function xe(c,l,N){let u;return!c&&l||c&&!N?u=l:c&&N&&(u=N),u}return qe(()=>{et("alt+left,alt+right,alt+w,alt+1,alt+2,alt+3,alt+4,alt+5,alt+6,alt+7,alt+8,alt+9,alt+0",(c,l)=>{var N,u;if(e.settings.tabbar.enable&&e.settings.tabbar.enableHotkeys)switch(c.preventDefault(),l.key){case"alt+left":if(h.list[0].tabId!==P.value){const L=h.list.findIndex(Y=>Y.tabId===P.value);E.push(h.list[L-1].fullPath)}break;case"alt+right":if(((N=h.list.at(-1))==null?void 0:N.tabId)!==P.value){const L=h.list.findIndex(Y=>Y.tabId===P.value);E.push(h.list[L+1].fullPath)}break;case"alt+w":H.closeById(P.value);break;case"alt+1":case"alt+2":case"alt+3":case"alt+4":case"alt+5":case"alt+6":case"alt+7":case"alt+8":case"alt+9":{const L=Number(l.key.split("+")[1]);(u=h.list[L-1])!=null&&u.fullPath&&E.push(h.list[L-1].fullPath);break}case"alt+0":E.push(h.list[h.list.length-1].fullPath);break}})}),_t(()=>{et.unbind("alt+left,alt+right,alt+w,alt+1,alt+2,alt+3,alt+4,alt+5,alt+6,alt+7,alt+8,alt+9,alt+0")}),(c,l)=>{const N=Ut;return oe(),fe("div",on,[me("div",{ref_key:"tabsRef",ref:le,class:Fe(["tabs scrollbar-none",{"tabs-ontop":I(e).settings.topbar.switchTabbarAndToolbar,[`tabs-${I(e).settings.tabbar.style}`]:I(e).settings.tabbar.style!==""}]),onWheel:be(Oe,["prevent"])},[_e(Zt,{ref_key:"tabContainerRef",ref:ae,name:I(ce)?void 0:"tabbar",tag:"div",class:Fe(["tab-container",{dragging:I(ce)}])},{default:Ft(()=>[(oe(!0),fe(At,null,zt(I(h).list,(u,L)=>{var Y,J;return oe(),fe("div",{key:I(e).settings.tabbar.mergeTabsBy==="routeName"&&u.routeName?u.routeName:u.tabId,ref_for:!0,ref_key:"tabRef",ref:ee,"data-index":L,class:Fe(["tab",{"tab-ontop":I(e).settings.topbar.switchTabbarAndToolbar,actived:u.tabId===I(P),pinned:u.isPermanent||u.isPin}]),title:((Y=u.customTitleList.find(G=>G.fullPath===u.fullPath))==null?void 0:Y.title)||I(_)(u.title),onClick:G=>I(E).push(u.fullPath),onDblclick:G=>Re(u),onContextmenu:G=>Ee(G,u)},[l[3]||(l[3]=me("div",{class:"tab-dividers"},null,-1)),l[4]||(l[4]=me("div",{class:"tab-background"},null,-1)),me("div",an,[(oe(),fe("div",{key:u.tabId,class:"title"},[I(e).settings.tabbar.enableIcon&&xe(u.tabId===I(P),u.icon,u.activeIcon)?(oe(),tt(N,{key:0,name:xe(u.tabId===I(P),u.icon,u.activeIcon),class:"icon"},null,8,["name"])):Ae("",!0),Dt(" "+nt(((J=u.customTitleList.find(G=>G.fullPath===u.fullPath))==null?void 0:J.title)||I(_)(u.title)),1)])),!u.isPermanent&&u.isPin?(oe(),fe("div",{key:0,class:"action-icon",onClick:be(G=>I(h).unPin(u.tabId),["stop"]),onDblclick:l[0]||(l[0]=be(()=>{},["stop"]))},[_e(N,{name:"i-ri:pushpin-2-fill"})],40,sn)):!u.isPermanent&&I(h).list.length>1?(oe(),fe("div",{key:1,class:"action-icon",onClick:be(G=>I(H).closeById(u.tabId),["stop"]),onDblclick:l[1]||(l[1]=be(()=>{},["stop"]))},[_e(N,{name:"i-ri:close-fill"})],40,rn)):Ae("",!0),$t(me("div",{class:"hotkey-number"},nt(L+1),513),[[Kt,I(ke).alt&&L<9]]),l[2]||(l[2]=me("div",{class:"drag-handle"},null,-1))])],42,ln)}),128))]),_:1},8,["name","class"])],34),I(q)?(oe(),tt(Jt,{key:0,class:"more-action"})):Ae("",!0)])}}}),kn=Yt(un,[["__scopeId","data-v-2a964994"]]);export{kn as default};