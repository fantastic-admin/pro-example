
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * https://fantastic-admin.hurui.me
 */
  
import{B as e,C as t,O as n,St as r,wt as i,yt as a}from"./reactivity.esm-bundler-DQLEWij_.js";import{$ as o,D as s,E as c,Ft as l,Ht as u,J as d,Pt as f,Rt as p,Ut as m,_ as h,b as g,bt as _,ct as v,et as y,g as b,gt as x,it as S,k as C,mt as w,o as T,qt as E,tt as D,u as O,v as k,wt as A,xt as j,y as M}from"./runtime-core.esm-bundler-B5ds1qB8.js";import{Cn as ee,Ct as N,En as P,Mt as F,On as I,T as L,un as R}from"./src-XafWzjth.js";import{n as z}from"./vue-i18n.runtime-QoH7TMem.js";import"./examples-DXhZs5lg.js";import{t as B}from"./page-header-DeO2joBq.js";var te=Symbol(`mention-context`);function V(e){let t=d(te,null);if(!t)throw Error(`\`${e}\` must be used within \`MentionRoot\`.`);return t}var H=/[-_\s./\\|:;,]+/g,U=/[^\p{L}\p{N}\s]/gu;function W(e){if(!e)return``;try{return e.toLowerCase().normalize(`NFC`).replace(U,` `).replace(H,` `).trim().replace(/\s+/g,``)}catch{return e.toLowerCase().normalize(`NFC`).replace(/[^a-z0-9\s]/g,` `).trim().replace(/\s+/g,``)}}function ne(e,t,n,r){let i=e.map(e=>e.value);if(!t)return i;if(r)return r(i,t);let a=W(t);return a?e.filter(e=>{let t=W(e.label),r=W(e.value);return n?t===a||r===a:t.includes(a)||r.includes(a)}).map(e=>e.value):i}function G(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:{top:e?.top??0,right:e?.right??0,bottom:e?.bottom??0,left:e?.left??0}}function K(e,t){return e.filter(e=>e!==t)}function re(e,t){let n=[...t].sort((e,t)=>e.start-t.start);return e.filter(e=>!n.some(t=>t.value===e.value&&t.start===e.start)).map(e=>{let t=n.filter(t=>t.start<e.start).reduce((e,t)=>e+(t.end-t.start+1),0);return{...e,start:e.start-t,end:e.end-t}})}var q=[`id`,`data-state`,`dir`],J=C({inheritAttrs:!1,__name:`MentionContent`,props:{side:{default:`bottom`},sideOffset:{default:4},align:{default:`start`},alignOffset:{default:0},collisionPadding:{},avoidCollisions:{type:Boolean,default:!0},fitViewport:{type:Boolean,default:!1},hideWhenDetached:{type:Boolean,default:!1},forceMount:{type:Boolean,default:!1},trackAnchor:{type:Boolean,default:!0},strategy:{default:`fixed`},class:{type:[Boolean,null,String,Object,Array]},style:{type:[Boolean,null,String,Object,Array]},onEscapeKeyDown:{},onPointerDownOutside:{}},setup(t){let r=t,i=V(`MentionContent`),a=n(null),o=n({}),s=b(()=>i.dir.value===`rtl`?r.align===`start`?`end`:r.align===`end`?`start`:r.align:r.align);function c(e,t){return e instanceof Node&&e.contains(t)}function l(){let e=i.virtualAnchor.value,t=a.value;if(!e||!t)return;let n=e.getBoundingClientRect(),c=t.getBoundingClientRect(),l=G(r.collisionPadding),u=r.side,d=window.innerWidth,f=window.innerHeight;if(r.hideWhenDetached&&(n.bottom<0||n.top>f||n.right<0||n.left>d)){o.value={visibility:`hidden`};return}let p=e=>e===`top`||e===`bottom`?s.value===`center`?n.left+n.width/2-c.width/2+r.alignOffset:s.value===`end`?n.right-c.width+r.alignOffset:n.left+r.alignOffset:e===`left`?n.left-c.width-r.sideOffset:n.right+r.sideOffset,m=e=>e===`left`||e===`right`?s.value===`center`?n.top+n.height/2-c.height/2+r.alignOffset:s.value===`end`?n.bottom-c.height+r.alignOffset:n.top+r.alignOffset:e===`top`?n.top-c.height-r.sideOffset:n.bottom+r.sideOffset,h=p(u),g=m(u);r.avoidCollisions&&(u===`bottom`&&g+c.height>f-l.bottom&&n.top-c.height-r.sideOffset>=l.top?u=`top`:u===`top`&&g<l.top&&n.bottom+r.sideOffset+c.height<=f-l.bottom?u=`bottom`:u===`right`&&h+c.width>d-l.right&&n.left-c.width-r.sideOffset>=l.left?u=`left`:u===`left`&&h<l.left&&n.right+r.sideOffset+c.width<=d-l.right&&(u=`right`),h=p(u),g=m(u),h=Math.max(l.left,Math.min(d-c.width-l.right,h)),g=Math.max(l.top,Math.min(f-c.height-l.bottom,g)));let _=r.strategy===`absolute`?h+window.scrollX:h,v=r.strategy===`absolute`?g+window.scrollY:g,y={position:r.strategy,left:`${_}px`,top:`${v}px`,minWidth:`max-content`};r.fitViewport&&(y.maxWidth=`${d-l.left-l.right}px`,y.maxHeight=`${f-l.top-l.bottom}px`),!i.open.value&&r.forceMount&&(y.visibility=`hidden`),i.isPasting.value&&(y.opacity=`0`,y.pointerEvents=`none`),o.value=y}let d=0,f=null,p=null;function m(){if(f?.(),p?.(),!i.open.value)return;let e=e=>{let t=a.value,n=i.inputRef.value,o=i.rootRef.value,s=e.target;s&&(c(t,s)||c(n,s)||c(o,s)||(r.onPointerDownOutside?.(e),!e.defaultPrevented&&i.closeMenu()))},t=e=>{e.key===`Escape`&&(r.onEscapeKeyDown?.(e),!e.defaultPrevented&&i.closeMenu())};document.addEventListener(`pointerdown`,e),document.addEventListener(`keydown`,t),f=()=>document.removeEventListener(`pointerdown`,e),p=()=>document.removeEventListener(`keydown`,t)}function h(){if(cancelAnimationFrame(d),!i.open.value||!r.trackAnchor)return;let e=()=>{l(),d=requestAnimationFrame(e)};d=requestAnimationFrame(e)}return u(()=>i.open.value,async e=>{if(m(),e){await D(),l(),h();return}cancelAnimationFrame(d)},{immediate:!0}),u(()=>[i.virtualAnchor.value,i.searchTerm.value,i.highlightedId.value],()=>D(l)),v(()=>{i.listRef.value=a.value,D(l),h()}),S(()=>{f?.(),p?.(),cancelAnimationFrame(d),i.listRef.value===a.value&&(i.listRef.value=null)}),(t,n)=>r.forceMount||e(i).open.value?(w(),g(`div`,y({key:0,id:e(i).listId,ref_key:`contentRef`,ref:a,"data-slot":`mention-content`,role:`listbox`,"aria-orientation":`vertical`},t.$attrs,{"data-state":e(i).open.value?`open`:`closed`,dir:e(i).dir.value,style:[o.value,r.style],class:e(R)(`outline-hidden`,r.class)}),[j(t.$slots,`default`)],16,q)):M(``,!0)}}),Y=[`dir`],X=[`data-tag`],Z=C({__name:`MentionHighlighter`,setup(t){let o=V(`MentionHighlighter`),s=n(null),c=n(null),l={position:`absolute`,top:`0`,left:`0`,right:`0`,bottom:`0`,color:`transparent`,whiteSpace:`pre-wrap`,wordBreak:`break-word`,pointerEvents:`none`,userSelect:`none`,overflow:`hidden`,width:`100%`},d=b(()=>{let e=o.inputValue.value,t=[],n=0;for(let r of o.mentions.value)r.start>n&&t.push({key:`text-${n}`,text:e.slice(n,r.start),tag:!1}),t.push({key:`mention-${r.start}`,text:e.slice(r.start,r.end),tag:!0}),n=r.end;return n<e.length&&t.push({key:`text-end-${e.length}`,text:e.slice(n),tag:!1}),t.push({key:`space`,text:`\xA0`,tag:!1}),t}),f=b(()=>c.value?{...l,fontStyle:c.value.fontStyle,fontVariant:c.value.fontVariant,fontWeight:c.value.fontWeight,fontSize:c.value.fontSize,lineHeight:c.value.lineHeight,fontFamily:c.value.fontFamily,letterSpacing:c.value.letterSpacing,textTransform:c.value.textTransform,textIndent:c.value.textIndent,padding:c.value.padding,borderWidth:c.value.borderWidth,borderStyle:c.value.borderStyle,borderColor:`transparent`,borderRadius:c.value.borderRadius,boxSizing:c.value.boxSizing,overflowWrap:c.value.overflowWrap,direction:o.dir.value}:l),p=null,m=null,h=null;function y(){let e=o.inputRef.value;if(!e){c.value=null;return}c.value=window.getComputedStyle(e)}function x(){let e=o.inputRef.value,t=s.value;e&&t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft,t.style.height=`${e.offsetHeight}px`)}function C(){h?.(),p?.disconnect(),m?.disconnect();let e=o.inputRef.value;if(!e)return;let t=()=>x(),n=()=>{y(),x()};e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,n,{passive:!0}),p=new ResizeObserver(n),p.observe(e),m=new MutationObserver(e=>{e.some(e=>e.type===`attributes`&&e.attributeName===`class`)&&n()}),m.observe(e,{attributes:!0,attributeFilter:[`class`]}),h=()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,n)},n()}return u(()=>o.inputRef.value,()=>D(C),{immediate:!0}),u(()=>[o.inputValue.value,o.mentions.value.length],()=>D(x)),v(()=>{y(),D(x)}),S(()=>{h?.(),p?.disconnect(),m?.disconnect()}),(t,n)=>c.value?(w(),g(`div`,{key:0,ref_key:`highlighterRef`,ref:s,"data-slot":`mention-highlighter`,"aria-hidden":`true`,dir:e(o).dir.value,style:r(f.value)},[(w(!0),g(T,null,_(d.value,e=>(w(),g(`span`,{key:e.key,"data-tag":e.tag?``:void 0,class:a(e.tag?`rounded-sm bg-primary text-primary-foreground py-[1px]`:void 0)},i(e.text),11,X))),128))],12,Y)):M(``,!0)}}),ie={class:`relative`},ae=C({inheritAttrs:!1,__name:`MentionInput`,props:{as:{default:`textarea`},type:{default:`text`},rows:{default:4},class:{type:[Boolean,null,String,Object,Array]}},setup(t){let r=t,i=V(`MentionInput`),a=n(null),o=b(()=>r.as);function c(e,t){let n=window.getComputedStyle(t),r=document.createElement(`span`);r.style.cssText=`
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font: ${n.font};
    letter-spacing: ${n.letterSpacing};
    text-transform: ${n.textTransform};
  `,r.textContent=e,document.body.appendChild(r);let i=r.offsetWidth;return document.body.removeChild(r),i}function l(e){let t=window.getComputedStyle(e);return Number.parseInt(t.lineHeight,10)||e.offsetHeight}function u(e,t){let n=()=>{let n=e.getBoundingClientRect(),r=e.value.slice(0,t).split(`
`),a=r.length-1,o=c(r[a]??``,e),s=window.getComputedStyle(e),u=l(e),d=Number.parseFloat(s.getPropertyValue(`padding-left`)||`0`),f=Number.parseFloat(s.getPropertyValue(`padding-right`)||`0`),p=Number.parseFloat(s.getPropertyValue(`padding-top`)||`0`),m=Math.max(1,e.clientWidth-d-f),h=a+Math.floor(o/m),g=e.scrollTop,_=e.scrollLeft,v=o%m,y=i.dir.value===`rtl`?Math.min(n.right-f-v+_,n.right-10):Math.min(n.left+d+v-_,n.right-10),b=n.top+p+(h*u-g);return DOMRect.fromRect({x:y,y:b,width:0,height:u})};i.setVirtualAnchor({getBoundingClientRect:n,getClientRects(){let e=[n()];return e.item=t=>e[t],e}})}function d(){i.closeMenu()}function f(e,t=null){if(i.disabled.value||i.readonly.value)return!1;let n=t??e.selectionStart;if(n===null)return!1;let r=e.value,a=r.lastIndexOf(i.trigger.value,n);if(a===-1||i.mentions.value.some(e=>e.start<=a&&e.end>a))return d(),!1;let o=r.slice(0,a);if(/\S/.test(o)){let e=o.slice(-1);if(e!==` `&&e!==`
`)return d(),!1}let s=r.slice(a+1,n),c=!s.includes(` `),l=n>a,f=n===a+1,p=r.slice(n),m=p[0],h=!m||m===` `||m===`
`||m===i.trigger.value,g=i.mentions.value.some(e=>n>=e.start&&n<e.end);return p.length>0&&!h&&!g?(d(),!1):c&&(l||f)?(u(e,a),i.setSearchTerm(f?``:s),i.setOpen(!0),!0):(d(),!1)}function p(e){if(i.disabled.value||i.readonly.value)return;let t=e.target,n=t.value,r=t.selectionStart??0,a=i.inputValue.value,o=n.length-a.length;o!==0&&i.setMentions(e=>e.map(e=>e.start>=r-(o>0?o:0)?{...e,start:e.start+o,end:e.end+o}:e)),i.inputValue.value=n,f(t)}function m(e){f(e.currentTarget)}function h(e){if(i.disabled.value||i.readonly.value)return;let t=e.currentTarget,n=t.selectionStart??0,r=t.selectionEnd??n;if(n===r)return;let a=i.mentions.value.filter(e=>e.start>=n&&e.start<r||e.end>n&&e.end<=r);a.length!==0&&requestAnimationFrame(()=>{i.value.value=i.value.value.filter(e=>!a.some(t=>t.value===e)),i.removeMentions(a)})}function _(e){f(e.currentTarget)}function x(e){if(i.disabled.value||i.readonly.value)return;let t=e.currentTarget,n=t.selectionStart??0;if(e.inputType!==`deleteContentBackward`)return;let r=i.mentions.value.find(e=>n>e.start&&n<=e.end);if(!r)return;e.preventDefault();let a=t.value[r.end]===` `,o=t.value.slice(0,r.start)+t.value.slice(r.end+ +!!a);t.value=o,i.inputValue.value=o,i.value.value=K(i.value.value,r.value),i.removeMentions([r]),t.setSelectionRange(r.start,r.start)}function C(e){let t=e.currentTarget,n=t.selectionStart??0,r=t.selectionEnd??n,a=n!==r;if((e.key===`ArrowLeft`||e.key===`ArrowRight`)&&!a&&!e.shiftKey){let r=e.metaKey||e.ctrlKey,a=e.key===`ArrowLeft`,o=i.mentions.value.find(e=>{if(a){let i=t.value.slice(e.end,n),a=/^\s*$/.test(i);return r?n>e.start&&(n===e.end||n>e.end&&a):n===e.end||n>e.end&&n<=e.end+1&&a}let i=t.value.slice(n,e.start),o=/^\s*$/.test(i);return r?n>=e.start&&n<e.end||n<e.start&&o:n===e.start||n<e.start&&n>=e.start-1&&o});if(o){e.preventDefault();let i=r?a?o.start:o.end:a?n>o.end?o.end:o.start:n<o.start?o.start:o.end;t.setSelectionRange(i,i);return}}if((e.key===`Backspace`||e.key===`Delete`)&&a){let a=t.value.slice(0,n)+t.value.slice(r),o=i.mentions.value.filter(e=>e.start>=n&&e.start<r||e.end>n&&e.end<=r);if(o.length>0){e.preventDefault(),t.value=a,i.inputValue.value=a,i.value.value=i.value.value.filter(e=>!o.some(t=>t.value===e)),i.removeMentions(o),t.setSelectionRange(n,n);return}}if(e.key===`Backspace`&&!i.open.value&&!a){let r=e.metaKey||e.ctrlKey,a=i.mentions.value.find(e=>{if(!r)return n===e.end||n===e.end+1&&t.value[e.end]===` `||n>e.start&&n<=e.end;let i=t.value.slice(e.end,n);return e.end<=n&&/^\s*$/.test(i)});if(a){let n=t.value[a.end]===` `;e.preventDefault();let r=t.value.slice(0,a.start)+t.value.slice(a.end+ +!!n);t.value=r,i.inputValue.value=r,i.value.value=K(i.value.value,a.value),i.removeMentions([a]),t.setSelectionRange(a.start,a.start);return}}if(i.open.value)switch([`ArrowDown`,`ArrowUp`,`Enter`,`Escape`,`Tab`,`Home`,`End`].includes(e.key)&&e.key!==`Tab`&&e.preventDefault(),e.key){case`Enter`:if(i.highlightedItem.value){e.preventDefault();let r=t.value.lastIndexOf(i.trigger.value,n);r!==-1&&i.addMention(i.highlightedItem.value.value,r)}else d();break;case`Tab`:if(i.modal.value&&i.highlightedItem.value){e.preventDefault();let r=t.value.lastIndexOf(i.trigger.value,n);r!==-1&&i.addMention(i.highlightedItem.value.value,r)}else d();break;case`ArrowDown`:i.moveHighlight(i.highlightedItem.value?`next`:`first`);break;case`ArrowUp`:i.moveHighlight(i.highlightedItem.value?`prev`:`last`);break;case`Home`:!e.metaKey&&!e.ctrlKey&&i.moveHighlight(`first`);break;case`End`:!e.metaKey&&!e.ctrlKey&&i.moveHighlight(`last`);break;case`Escape`:d()}}function T(){if(i.disabled.value||i.readonly.value)return;let e=i.inputRef.value;e&&f(e)}function E(e){if(i.disabled.value||i.readonly.value)return;let t=e.currentTarget;if(!t.value.length)return;let n=t.getBoundingClientRect(),r=window.getComputedStyle(t),a=Number.parseFloat(r.paddingLeft||`0`),o=e.clientX-n.left-a,s=c(t.value,t)/t.value.length,l=Math.round(o/s),u=i.mentions.value.find(e=>l>=e.start&&l<e.end);u&&(e.preventDefault(),requestAnimationFrame(()=>{t.setSelectionRange(u.end,u.end)}))}function O(e){if(i.disabled.value||i.readonly.value)return;let t=e.currentTarget,n=e.clipboardData?.getData(`text`)??``,r=t.selectionStart??0,a=t.selectionEnd??r;if(n.indexOf(i.trigger.value)===-1)return;e.preventDefault();let o=n.split(i.trigger.value),s=o[0]??``;requestAnimationFrame(async()=>{i.isPasting.value=!0,i.setOpen(!0),await D();let e=i.getEnabledItems(),c=[],l=[...i.value.value],u=n.match(/\s+$/)?.[0]??``;for(let t=1;t<o.length;t++){let n=o[t];if(!n)continue;let a=n.split(/(\s+)/),d=``,f=``,p=``,m=!1;for(let t=a.length;t>0;t--){let n=a.slice(0,t).filter((e,t)=>t%2==0),r=n.join(` `).trim();if(!r||!e.find(e=>W(e.value)===W(r)))continue;d=r;let i=n.length*2-1,o=a[i],s=a[i+1];o&&/^\s+/.test(o)&&s?(f=o,p=a.slice(i+1).join(``)):p=a.slice(i).join(``),m=!0;break}let h=r+s.length;if(m){let n=e.find(e=>W(e.value)===W(d));if(n){let e=`${i.trigger.value}${n.label}`,r=t===o.length-1&&!p;s+=e+f+p+(r?u:``),l.push(n.value),c.push({value:n.value,label:n.label,start:h,end:h+e.length})}}else{let e=a[0]??``,n=a[1]??``;f=/^\s+/.test(n)?n:``,p=a.slice(2).join(``);let r=t===o.length-1;s+=`${i.trigger.value}${e}${f}${p}${r?u:``}`}}let d=t.value.slice(0,r)+s+t.value.slice(a);t.value=d,i.inputValue.value=d,c.length>0&&(i.value.value=l,i.setMentions(e=>[...e,...c]));let f=r+s.length;t.setSelectionRange(f,f),i.isPasting.value=!1,i.setOpen(!1)})}return v(()=>{i.inputRef.value=a.value}),S(()=>{i.inputRef.value===a.value&&(i.inputRef.value=null)}),(t,n)=>(w(),g(`div`,ie,[s(Z),(w(),k(A(o.value),y({id:e(i).inputId,ref_key:`inputRef`,ref:a},t.$attrs,{"data-slot":`mention-input`,role:`combobox`,autocomplete:`off`,"aria-expanded":e(i).open.value,"aria-controls":e(i).listId,"aria-labelledby":e(i).labelId,"aria-autocomplete":`list`,"aria-activedescendant":e(i).highlightedItem.value?.id,"aria-disabled":e(i).disabled.value,"aria-readonly":e(i).readonly.value,disabled:e(i).disabled.value,readonly:e(i).readonly.value,dir:e(i).dir.value,rows:r.as===`textarea`?r.rows:void 0,type:r.as===`input`?r.type:void 0,value:e(i).inputValue.value,class:e(R)(r.class),onBeforeinput:x,onInput:p,onClick:m,onCut:h,onFocus:_,onKeydown:C,onPaste:O,onPointerdown:E,onSelect:T}),null,16,[`id`,`aria-expanded`,`aria-controls`,`aria-labelledby`,`aria-activedescendant`,`aria-disabled`,`aria-readonly`,`disabled`,`readonly`,`dir`,`rows`,`type`,`value`,`class`]))]))}}),oe=C({__name:`MentionItem`,props:{value:{},label:{},disabled:{type:Boolean,default:!1},class:{type:[Boolean,null,String,Object,Array]},asChild:{type:Boolean},as:{default:`div`}},setup(t){let o=t,s=V(`MentionItem`),l=n(null),u=f(),d=b(()=>o.label??o.value),p=b(()=>o.disabled||s.disabled.value),h=b(()=>s.isItemVisible(o.value)),g=b(()=>s.highlightedId.value===u),_=b(()=>s.value.value.includes(o.value));m(()=>{if(!o.value)throw Error("`MentionItem` value cannot be an empty string");s.upsertItem({id:u,ref:l,value:o.value,label:d.value,disabled:p.value})}),S(()=>{s.removeItem(u)});function v(){if(p.value)return;let e=s.inputRef.value;if(!e)return;let t=e.selectionStart??0,n=e.value.lastIndexOf(s.trigger.value,t);n!==-1&&s.addMention(o.value,n)}function y(e){if(p.value)return;let t=e.target;t&&(t.hasPointerCapture?.(e.pointerId)&&t.releasePointerCapture(e.pointerId),e.button===0&&!e.ctrlKey&&e.preventDefault())}function x(){p.value||s.setHighlightedId(u)}return(n,s)=>(w(),k(e(F),{id:e(u),ref_key:`itemRef`,ref:l,"data-slot":`mention-item`,as:t.as,"as-child":t.asChild,role:`option`,"aria-selected":_.value,"data-selected":_.value?``:void 0,"data-highlighted":g.value?``:void 0,"data-disabled":p.value?``:void 0,class:a(e(R)(o.class)),style:r({display:h.value?void 0:`none`}),onClick:v,onPointerdown:y,onPointermove:x},{default:E(()=>[j(n.$slots,`default`,{},()=>[c(i(d.value),1)])]),_:3},8,[`id`,`as`,`as-child`,`aria-selected`,`data-selected`,`data-highlighted`,`data-disabled`,`class`,`style`]))}}),se=C({__name:`MentionLabel`,props:{for:{},asChild:{type:Boolean},as:{},class:{type:[Boolean,null,String,Object,Array]}},setup(t){let n=t,r=V(`MentionLabel`),i=I(n,`class`,`for`);return(t,a)=>(w(),k(e(N),y({id:e(r).labelId,"data-slot":`mention-label`,for:e(r).inputId},e(i),{class:e(R)(`flex items-center gap-2 text-sm leading-none font-medium select-none`,n.class)}),{default:E(()=>[j(t.$slots,`default`)]),_:3},16,[`id`,`for`,`class`]))}}),Q=C({__name:`MentionPortal`,props:{container:{}},setup(e){let t=e;return(e,n)=>(w(),k(O,{to:t.container??`body`},[j(e.$slots,`default`)],8,[`to`]))}}),ce=[`name`,`value`,`disabled`,`readonly`,`required`],le=C({__name:`MentionRoot`,props:{class:{type:[Boolean,null,String,Object,Array]},value:{},defaultValue:{},open:{type:Boolean},defaultOpen:{type:Boolean,default:!1},inputValue:{},trigger:{default:`@`},dir:{},disabled:{type:Boolean,default:!1},exactMatch:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},modal:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{},onFilter:{}},emits:[`update:value`,`update:open`,`update:inputValue`],setup(t,{emit:r}){let i=t,o=r,s=p(`rootRef`),c=n(null),l=n(null),d=n(null),m=n(``),h=n(null),v=n([]),y=n([]),S=n(!1),C=P(i,`open`,o,{passive:!0,defaultValue:i.defaultOpen}),D=P(i,`value`,o,{passive:!0,defaultValue:i.defaultValue?[...i.defaultValue]:[]}),O=P(i,`inputValue`,o,{passive:!0,defaultValue:``}),A=ee({observe:!0}),M=b(()=>i.dir??(A.value===`rtl`?`rtl`:`ltr`)),N=b(()=>i.disabled),I=b(()=>i.readonly),L=b(()=>i.loop),R=b(()=>i.modal),z=b(()=>i.trigger),B=f(),V=f(),H=f(),U=b(()=>new Set(ne(v.value,m.value,i.exactMatch,i.onFilter))),W=b(()=>v.value.filter(e=>U.value.has(e.value))),G=b(()=>W.value.filter(e=>!e.disabled)),K=b(()=>v.value.find(e=>e.id===h.value)??null);function q(){C.value=!1,h.value=null,d.value=null,m.value=``}function J(e){if(!(e&&m.value&&W.value.length===0)){if(C.value=e,e){h.value=G.value[0]?.id??null;return}h.value=null,d.value=null}}function Y(e){m.value=e}function X(e){d.value=e}function Z(e){h.value=e}function ie(e){let t=G.value;if(t.length===0){h.value=null;return}let n=t.findIndex(e=>e.id===h.value);if(e===`first`){h.value=t[0]?.id??null;return}if(e===`last`){h.value=t.at(-1)?.id??null;return}let r=e===`next`?0:t.length-1;if(n===-1){h.value=t[r]?.id??null;return}let i=n+(e===`next`?1:-1);i=L.value?(i+t.length)%t.length:Math.max(0,Math.min(t.length-1,i)),h.value=t[i]?.id??null}function ae(e){let t=v.value,n=t.findIndex(t=>t.id===e.id);if(n===-1){v.value=[...t,e];return}let r=t[n];r&&r.ref===e.ref&&r.value===e.value&&r.label===e.label&&r.disabled===e.disabled||(v.value=t.map((t,r)=>r===n?e:t))}function oe(e){v.value=v.value.filter(t=>t.id!==e)}function se(e){return U.value.has(e)}function Q(){return v.value.filter(e=>!e.disabled)}function le(e){y.value=typeof e==`function`?e(y.value):e}function ue(e){y.value=re(y.value,e)}function $(e,t){let n=c.value;if(!n)return;let r=Q().find(t=>t.value===e);if(!r)return;let i=r.label??e,a=`${z.value}${i}`,o=n.value.slice(0,t),s=n.selectionStart??t,l=`${o}${a} ${n.value.slice(s)}`,u=a.length+1,d={value:e,label:i,start:t,end:t+a.length};y.value=[...y.value.map(e=>e.start>=s?{...e,start:e.start+u,end:e.end+u}:e),d],n.value=l,O.value=l,D.value=[...D.value,e];let f=t+a.length+1;n.setSelectionRange(f,f),n.focus(),q()}return u(()=>C.value,e=>{if(!e){h.value=null,d.value=null;return}h.value=G.value[0]?.id??null}),u(()=>[m.value,W.value.length],([e,t])=>{C.value&&e&&t===0&&q()}),u(()=>G.value.map(e=>e.id).join(`,`),()=>{C.value&&(!h.value||!G.value.some(e=>e.id===h.value))&&(h.value=G.value[0]?.id??null)}),x(te,{open:C,value:D,inputValue:O,searchTerm:m,trigger:z,highlightedId:h,highlightedItem:K,mentions:y,visibleItems:W,visibleEnabledItems:G,dir:M,disabled:N,readonly:I,loop:L,modal:R,inputId:B,labelId:V,listId:H,rootRef:s,inputRef:c,listRef:l,virtualAnchor:d,isPasting:S,closeMenu:q,setOpen:J,setSearchTerm:Y,setVirtualAnchor:X,setHighlightedId:Z,moveHighlight:ie,upsertItem:ae,removeItem:oe,isItemVisible:se,getEnabledItems:Q,addMention:$,setMentions:le,removeMentions:ue}),(t,n)=>(w(),k(e(F),{ref_key:`rootRef`,ref:s,"data-slot":`mention-root`,as:`div`,class:a(i.class)},{default:E(()=>[j(t.$slots,`default`,{open:e(C),inputValue:e(O),value:e(D),searchTerm:m.value,visibleItems:W.value,highlightedItem:K.value}),(w(!0),g(T,null,_(e(D),(e,t)=>(w(),g(`input`,{key:`${e}-${t}`,type:`hidden`,name:i.name,value:e,disabled:N.value,readonly:I.value,required:i.required&&t===0},null,8,ce))),128))]),_:3},8,[`class`]))}}),ue={class:`truncate`},$=C({name:`BuiltInMention`,inheritAttrs:!1,__name:`index`,props:o({items:{},label:{},placeholder:{},rows:{default:4},inputAs:{default:`textarea`},class:{type:[Boolean,null,String,Object,Array]},labelClass:{type:[Boolean,null,String,Object,Array]},inputClass:{type:[Boolean,null,String,Object,Array]},contentClass:{type:[Boolean,null,String,Object,Array]},itemClass:{type:[Boolean,null,String,Object,Array]},trigger:{default:`@`},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{},exactMatch:{type:Boolean,default:!1},loop:{type:Boolean,default:!1},modal:{type:Boolean,default:!1},defaultOpen:{type:Boolean,default:!1}},{modelValue:{default:``},modelModifiers:{},value:{default:()=>[]},valueModifiers:{},open:{type:Boolean,default:!1},openModifiers:{}}),emits:[`update:modelValue`,`update:value`,`update:open`],setup(t){let n=t,r=l(t,`modelValue`),o=l(t,`value`),u=l(t,`open`);return(t,l)=>(w(),k(e(le),y(t.$attrs,{"input-value":r.value,"onUpdate:inputValue":l[0]||(l[0]=e=>r.value=e),value:o.value,"onUpdate:value":l[1]||(l[1]=e=>o.value=e),open:u.value,"onUpdate:open":l[2]||(l[2]=e=>u.value=e),trigger:n.trigger,disabled:n.disabled,readonly:n.readonly,required:n.required,name:n.name,"exact-match":n.exactMatch,loop:n.loop,modal:n.modal,"default-open":n.defaultOpen,class:e(R)(`grid gap-2`,n.class)}),{default:E(({highlightedItem:r})=>[t.$slots.label||n.label?(w(),k(e(se),{key:0,class:a(e(R)(`text-foreground`,n.labelClass))},{default:E(()=>[j(t.$slots,`label`,{},()=>[c(i(n.label),1)])]),_:3},8,[`class`])):M(``,!0),s(e(ae),{as:n.inputAs,rows:n.rows,placeholder:n.placeholder,class:a(e(R)(`border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 min-h-24 w-full resize-y rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-3 disabled:cursor-not-allowed disabled:opacity-50`,n.inputAs===`input`?`min-h-9 resize-none py-1.5`:``,n.inputClass))},null,8,[`as`,`rows`,`placeholder`,`class`]),s(e(Q),null,{default:E(()=>[s(e(J),{class:a(e(R)(`bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 z-2000 max-h-72 min-w-[12rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md`,n.contentClass))},{default:E(()=>[(w(!0),g(T,null,_(n.items,s=>(w(),k(e(oe),{key:s.value,value:s.value,label:s.label,disabled:s.disabled,class:a(e(R)(`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-[selected]:font-medium data-[disabled]:pointer-events-none data-[disabled]:opacity-50`,n.itemClass))},{default:E(()=>[j(t.$slots,`item`,{item:s,selected:o.value.includes(s.value),highlighted:r?.value===s.value,disabled:!!s.disabled},()=>[h(`span`,ue,i(s.label??s.value),1)])]),_:2},1032,[`value`,`label`,`disabled`,`class`]))),128))]),_:2},1032,[`class`])]),_:2},1024)]),_:3},16,[`input-value`,`value`,`open`,`trigger`,`disabled`,`readonly`,`required`,`name`,`exact-match`,`loop`,`modal`,`default-open`,`class`]))}}),de={class:`space-y-4`},fe={class:`p-4 border rounded-lg border-dashed bg-muted/20 space-y-3`},pe={class:`space-y-1`},me={class:`text-sm min-h-6`},he={class:`space-y-2`},ge={class:`flex flex-wrap gap-2`},_e={key:0,class:`text-sm text-muted-foreground`},ve=C({__name:`_basic`,setup(e){let n=t(``),r=t([]),a=[{value:`linyue`,label:`林岳`},{value:`olivia`,label:`Olivia Chen`},{value:`jayden`,label:`Jayden Wu`},{value:`cici`,label:`Cici Xu`},{value:`mika`,label:`Mika Tan`,disabled:!0}],o=b(()=>a.filter(e=>r.value.includes(e.value)));return(e,t)=>(w(),g(`div`,de,[s($,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),label:`项目讨论`,placeholder:`输入 @ 选择协作者，例如 @lin`,items:a},null,8,[`modelValue`,`value`]),h(`div`,fe,[h(`div`,pe,[t[2]||(t[2]=h(`div`,{class:`text-xs text-muted-foreground tracking-wide uppercase`},` 当前输入 `,-1)),h(`div`,me,i(n.value||`暂无内容`),1)]),h(`div`,he,[t[3]||(t[3]=h(`div`,{class:`text-xs text-muted-foreground tracking-wide uppercase`},` 命中的提及值 `,-1)),h(`div`,ge,[(w(!0),g(T,null,_(o.value,e=>(w(),g(`span`,{key:e.value,class:`text-xs text-secondary-foreground px-2 py-0.5 rounded-full bg-secondary inline-flex items-center`},i(e.label)+` · `+i(e.value),1))),128)),o.value.length===0?(w(),g(`span`,_e,` 还没有选择任何成员 `)):M(``,!0)])])])]))}}),ye=`<script setup lang="ts">
import { computed, ref } from 'vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaMention from '../index.vue'

const message = ref('')
const mentions = ref<string[]>([])

const people = [
  { value: 'linyue', label: '林岳' },
  { value: 'olivia', label: 'Olivia Chen' },
  { value: 'jayden', label: 'Jayden Wu' },
  { value: 'cici', label: 'Cici Xu' },
  { value: 'mika', label: 'Mika Tan', disabled: true },
]

const selectedPeople = computed(() => {
  return people.filter(item => mentions.value.includes(item.value))
})
<\/script>

<template>
  <div class="space-y-4">
    <FaMention
      v-model="message"
      v-model:value="mentions"
      label="项目讨论"
      placeholder="输入 @ 选择协作者，例如 @lin"
      :items="people"
    />
    <div class="p-4 border rounded-lg border-dashed bg-muted/20 space-y-3">
      <div class="space-y-1">
        <div class="text-xs text-muted-foreground tracking-wide uppercase">
          当前输入
        </div>
        <div class="text-sm min-h-6">
          {{ message || '暂无内容' }}
        </div>
      </div>
      <div class="space-y-2">
        <div class="text-xs text-muted-foreground tracking-wide uppercase">
          命中的提及值
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in selectedPeople"
            :key="item.value"
            class="text-xs text-secondary-foreground px-2 py-0.5 rounded-full bg-secondary inline-flex items-center"
          >
            {{ item.label }} · {{ item.value }}
          </span>
          <span
            v-if="selectedPeople.length === 0"
            class="text-sm text-muted-foreground"
          >
            还没有选择任何成员
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
`,be={class:`space-y-4`},xe={class:`flex gap-3 w-full items-center`},Se={class:`flex-1 min-w-0`},Ce={class:`text-sm font-medium truncate`},we={class:`text-xs text-muted-foreground truncate`},Te={key:0,class:`text-xs text-secondary-foreground px-2 py-0.5 rounded-full bg-secondary inline-flex items-center`},Ee=C({__name:`_custom-item`,setup(e){let n=t(``),r=t([]),o=[{value:`lucas`,label:`Lucas He`},{value:`nora`,label:`Nora Lin`},{value:`stella`,label:`Stella Yang`},{value:`harper`,label:`Harper Qiu`}],c={lucas:{email:`lucas.he@fantastic.dev`,role:`Frontend`},nora:{email:`nora.lin@fantastic.dev`,role:`Design`},stella:{email:`stella.yang@fantastic.dev`,role:`QA`},harper:{email:`harper.qiu@fantastic.dev`,role:`PM`}};function l(e){return e.split(/\s+/).slice(0,2).map(e=>e[0]?.toUpperCase()??``).join(``)}return(e,t)=>(w(),g(`div`,be,[s($,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),label:`Code Review`,placeholder:`在评论里 @ reviewer`,items:o},{item:E(({item:e,selected:t,highlighted:n})=>[h(`div`,xe,[h(`div`,{class:a([`text-[11px] font-semibold border rounded-full flex-center size-8 transition-colors`,n?`border-primary/40 bg-primary/12 text-primary`:`border-border bg-background text-foreground`])},i(l(e.label??e.value)),3),h(`div`,Se,[h(`div`,Ce,i(e.label??e.value),1),h(`div`,we,i(c[e.value]?.role)+` · `+i(c[e.value]?.email),1)]),t?(w(),g(`span`,Te,` 已选 `)):M(``,!0)])]),_:1},8,[`modelValue`,`value`]),t[2]||(t[2]=h(`div`,{class:`text-sm text-muted-foreground p-4 border rounded-lg bg-card`}," 自定义 `#item` 插槽后，可以保留基础键盘导航和插入逻辑，只重绘候选项外观。 ",-1))]))}}),De=`<script setup lang="ts">
import { ref } from 'vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaMention from '../index.vue'

const content = ref('')
const mentions = ref<string[]>([])

const reviewers = [
  { value: 'lucas', label: 'Lucas He' },
  { value: 'nora', label: 'Nora Lin' },
  { value: 'stella', label: 'Stella Yang' },
  { value: 'harper', label: 'Harper Qiu' },
]

const directory: Record<string, { email: string, role: string }> = {
  lucas: {
    email: 'lucas.he@fantastic.dev',
    role: 'Frontend',
  },
  nora: {
    email: 'nora.lin@fantastic.dev',
    role: 'Design',
  },
  stella: {
    email: 'stella.yang@fantastic.dev',
    role: 'QA',
  },
  harper: {
    email: 'harper.qiu@fantastic.dev',
    role: 'PM',
  },
}

function getInitials(label: string) {
  return label
    .split(/\\s+/)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('')
}
<\/script>

<template>
  <div class="space-y-4">
    <FaMention
      v-model="content"
      v-model:value="mentions"
      label="Code Review"
      placeholder="在评论里 @ reviewer"
      :items="reviewers"
    >
      <template #item="{ item, selected, highlighted }">
        <div class="flex gap-3 w-full items-center">
          <div
            class="text-[11px] font-semibold border rounded-full flex-center size-8 transition-colors"
            :class="highlighted ? 'border-primary/40 bg-primary/12 text-primary' : 'border-border bg-background text-foreground'"
          >
            {{ getInitials(item.label ?? item.value) }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium truncate">
              {{ item.label ?? item.value }}
            </div>
            <div class="text-xs text-muted-foreground truncate">
              {{ directory[item.value]?.role }} · {{ directory[item.value]?.email }}
            </div>
          </div>
          <span
            v-if="selected"
            class="text-xs text-secondary-foreground px-2 py-0.5 rounded-full bg-secondary inline-flex items-center"
          >
            已选
          </span>
        </div>
      </template>
    </FaMention>
    <div class="text-sm text-muted-foreground p-4 border rounded-lg bg-card">
      自定义 \`#item\` 插槽后，可以保留基础键盘导航和插入逻辑，只重绘候选项外观。
    </div>
  </div>
</template>
`,Oe={class:`space-y-4`},ke={class:`flex flex-wrap gap-2`},Ae={key:0,class:`text-sm text-muted-foreground`},je=[{title:`基础`,component:ve,componentRaw:ye},{title:`自定义候选项`,component:Ee,componentRaw:De},{title:`单行输入与自定义触发词`,component:C({__name:`_single-line-trigger`,setup(e){let n=t(``),r=t([]),a=[{value:`FE-128`,label:`FE-128 登录页联调`},{value:`FE-204`,label:`FE-204 权限菜单重构`},{value:`OPS-32`,label:`OPS-32 发布流水线巡检`},{value:`UX-19`,label:`UX-19 暗色主题验收`}];return(e,t)=>(w(),g(`div`,Oe,[s($,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),value:r.value,"onUpdate:value":t[1]||(t[1]=e=>r.value=e),"input-as":`input`,trigger:`#`,label:`更新标题`,placeholder:`输入 # 关联任务，例如 #FE`,items:a},null,8,[`modelValue`,`value`]),h(`div`,ke,[(w(!0),g(T,null,_(r.value,e=>(w(),g(`span`,{key:e,class:`text-xs text-foreground px-2 py-0.5 border rounded-full bg-background inline-flex items-center`},i(e),1))),128)),r.value.length===0?(w(),g(`span`,Ae,` 尚未关联任务 `)):M(``,!0)])]))}}),componentRaw:`<script setup lang="ts">
import { ref } from 'vue'
// 组件实际使用时无需手动导入，框架会自动导入
import FaMention from '../index.vue'

const subject = ref('')
const linkedIssues = ref<string[]>([])

const issues = [
  { value: 'FE-128', label: 'FE-128 登录页联调' },
  { value: 'FE-204', label: 'FE-204 权限菜单重构' },
  { value: 'OPS-32', label: 'OPS-32 发布流水线巡检' },
  { value: 'UX-19', label: 'UX-19 暗色主题验收' },
]
<\/script>

<template>
  <div class="space-y-4">
    <FaMention
      v-model="subject"
      v-model:value="linkedIssues"
      input-as="input"
      trigger="#"
      label="更新标题"
      placeholder="输入 # 关联任务，例如 #FE"
      :items="issues"
    />
    <div class="flex flex-wrap gap-2">
      <span
        v-for="issue in linkedIssues"
        :key="issue"
        class="text-xs text-foreground px-2 py-0.5 border rounded-full bg-background inline-flex items-center"
      >
        {{ issue }}
      </span>
      <span
        v-if="linkedIssues.length === 0"
        class="text-sm text-muted-foreground"
      >
        尚未关联任务
      </span>
    </div>
  </div>
</template>
`}],Me=C({__name:`mention`,setup(t){let{t:n}=z();return(t,r)=>{let i=B,a=L;return w(),g(`div`,null,[s(i,{title:e(n)(`route.componentPro.mention`),description:`FaMention`},null,8,[`title`]),(w(!0),g(T,null,_(e(je),e=>(w(),k(a,{key:e.title,code:e.componentRaw,title:e.title},{default:E(()=>[(w(),k(A(e.component)))]),_:2},1032,[`code`,`title`]))),128))])}}});export{Me as default};