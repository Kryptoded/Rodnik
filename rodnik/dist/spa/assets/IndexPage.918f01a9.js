import{_ as ke,o as te,a as se,d as vt,e as q,f as G,g as ft,h as V,n as ve,u as fe,p as Ke,i as Xe,j as mt,k as ht,l as Ce,m as g,q as ee,t as Ye,w as gt,R as bt,s as p,v as le,x as _t,y as yt,Q as be,z as Ge,A as ne,B as pt,C as wt,D as ae,E as Ct,F as Je,G as Pe,H as ze,I as xe,J as Fe,K as H,L as xt,M as Tt,N as qt,O as ue,P as _e,S as St,T as L,U as re,V as Pt,W as kt,X as oe,Y as $t,Z as me,$ as Te,a0 as Oe,a1 as qe,a2 as It,a3 as At,a4 as Rt,a5 as Lt,a6 as Bt,a7 as He,a8 as Et,a9 as Mt,aa as Dt,ab as Nt,ac as he,c as Vt}from"./index.f60973db.js";const zt={},Ft={class:"page"};function Ot(e,t){return te(),se("div",Ft,[vt(e.$slots,"default")])}var Ht=ke(zt,[["render",Ot]]),ge="/assets/layer-1.38b7a230.jpg",jt="/assets/layer-2.efb1f835.png",Wt="/assets/layer-5.dafeb7a3.png",Qt="/assets/layer-6.9076d4c2.png";const Ut=e=>(Ke("data-v-1f868082"),e=e(),Xe(),e),Kt={class:"layers"},Xt={class:"layers__container"},Yt=Ut(()=>V("div",{class:"layers__item layer-3"},[V("div",{class:"hero-content"},[V("h1",null,[mt(" \u0421\u041D\u0422 "),V("span",null,' "\u0420\u043E\u0434\u043D\u0438\u043A" ')])])],-1)),Gt={class:"layers__item layer-4"},Jt={__name:"MainComponent",setup(e){function t(a){Object.assign(document.documentElement,{style:`
		--move-x: ${(a.clientX-window.innerWidth/2)*-.005}deg;
		--move-y: ${(a.clientY-window.innerHeight/2)*.01}deg;
		`})}const i=q(null);function l(){let a=i.value;a.width=window.innerWidth,a.height=window.innerHeight;let n=a.getContext("2d");function s(c,C){return Math.floor(Math.random()*c)+C}function f(c,C,_,y,T){this.x=c,this.y=C,this.endy=_,this.velocity=y,this.opacity=T,this.draw=function(){n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x,this.y-this.endy),n.lineWidth=1,n.strokeStyle="rgba(255, 255, 255, "+this.opacity+")",n.stroke()},this.update=function(){let I=window.innerHeight+100;this.y>=I?this.y=this.endy-100:this.y=this.y+this.velocity,this.draw()}}let m=[];for(let c=0;c<140;c++){let C=Math.floor(Math.random()*window.innerWidth)+1,_=Math.random()*-500,y=s(10,2),T=s(20,.2),I=Math.random()*.55;m.push(new f(C,_,y,T,I))}function h(){requestAnimationFrame(h),n.clearRect(0,0,window.innerWidth,window.innerHeight);for(let c=0;c<m.length;c++)m[c].update()}h()}return G(()=>{document.addEventListener("mousemove",t),l()}),ft(()=>{document.removeEventListener("mousemove",t)}),(a,n)=>(te(),se("section",Kt,[V("div",Xt,[V("div",{class:"layers__item layer-1",style:ve(`background-image: url(${fe(ge)});`)},null,4),V("div",{class:"layers__item layer-2",style:ve(`background-image: url(${fe(jt)});`)},null,4),Yt,V("div",Gt,[V("canvas",{class:"rain",ref_key:"rain",ref:i},null,512)]),V("div",{class:"layers__item layer-5",style:ve(`background-image: url(${fe(Wt)});`)},null,4),V("div",{class:"layers__item layer-6",style:ve(`background-image: url(${fe(Qt)});`)},null,4)])]))}};var Zt=ke(Jt,[["__scopeId","data-v-1f868082"]]);let en=0;const tn=["click","keydown"],nn={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${en++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function an(e,t,i,l){const a=ht(Ye,Ce);if(a===Ce)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Ce;const{proxy:n}=ne(),s=q(null),f=q(null),m=q(null),h=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),c=g(()=>a.currentModel.value===e.name),C=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(c.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),_=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=g(()=>e.disable===!0||a.hasFocus.value===!0||c.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function T(d,A){if(A!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&le(d);return}if(l===void 0){a.updateModel({name:e.name}),i("click",d);return}if(l.hasRouterLink.value===!0){const B=(S={})=>{let P;const M=S.to===void 0||pt(S.to,e.to)===!0?a.avoidRouteWatcher=wt():null;return l.navigateToRouterLink(d,{...S,returnRouterError:!0}).catch(z=>{P=z}).then(z=>{if(M===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,P===void 0&&(z===void 0||z.message!==void 0&&z.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),S.returnRouterError===!0)return P!==void 0?Promise.reject(P):z})};i("click",d,B),d.defaultPrevented!==!0&&B();return}i("click",d)}function I(d){_t(d,[13,32])?T(d,!0):yt(d)!==!0&&d.keyCode>=35&&d.keyCode<=40&&d.altKey!==!0&&d.metaKey!==!0&&a.onKbdNavigate(d.keyCode,n.$el)===!0&&le(d),i("keydown",d)}function D(){const d=a.tabProps.value.narrowIndicator,A=[],B=p("div",{ref:m,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&A.push(p(be,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&A.push(p("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&A.push(e.alertIcon!==void 0?p(be,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):p("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),d===!0&&A.push(B);const S=[p("div",{class:"q-focus-helper",tabindex:-1,ref:s}),p("div",{class:_.value},Ge(t.default,A))];return d===!1&&S.push(B),S}const F={name:g(()=>e.name),rootRef:f,tabIndicatorRef:m,routeData:l};ee(()=>{a.unregisterTab(F)}),G(()=>{a.registerTab(F)});function j(d,A){const B={ref:f,class:C.value,tabindex:y.value,role:"tab","aria-selected":c.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:T,onKeydown:I,...A};return gt(p(d,B,D()),[[bt,h.value]])}return{renderTab:j,$tabs:a}}var Y=ae({name:"QTab",props:nn,emits:tn,setup(e,{slots:t,emit:i}){const{renderTab:l}=an(e,t,i);return()=>l("div")}});function on(){const e=q(!Ct.value);return e.value===!1&&G(()=>{e.value=!0}),{isHydrated:e}}const Ze=typeof ResizeObserver!="undefined",je=Ze===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ln=ae({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let i=null,l,a={width:-1,height:-1};function n(m){m===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),l){const{offsetWidth:m,offsetHeight:h}=l;(m!==a.width||h!==a.height)&&(a={width:m,height:h},t("resize",a))}}const{proxy:f}=ne();if(f.trigger=n,Ze===!0){let m;const h=c=>{l=f.$el.parentNode,l?(m=new ResizeObserver(n),m.observe(l),s()):c!==!0&&Pe(()=>{h(!0)})};return G(()=>{h()}),ee(()=>{i!==null&&clearTimeout(i),m!==void 0&&(m.disconnect!==void 0?m.disconnect():l&&m.unobserve(l))}),Je}else{let c=function(){i!==null&&(clearTimeout(i),i=null),h!==void 0&&(h.removeEventListener!==void 0&&h.removeEventListener("resize",n,ze.passive),h=void 0)},C=function(){c(),l&&l.contentDocument&&(h=l.contentDocument.defaultView,h.addEventListener("resize",n,ze.passive),s())};const{isHydrated:m}=on();let h;return G(()=>{Pe(()=>{l=f.$el,l&&C()})}),ee(c),()=>{if(m.value===!0)return p("object",{class:"q--avoid-card-border",style:je.style,tabindex:-1,type:"text/html",data:je.url,"aria-hidden":"true",onLoad:C})}}}});let et=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,et=e.scrollLeft>=0,e.remove()}function rn(e,t,i){const l=i===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const sn=["left","center","right","justify"];var un=ae({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>sn.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:i}){const{proxy:l}=ne(),{$q:a}=l,{registerTick:n}=xe(),{registerTick:s}=xe(),{registerTick:f}=xe(),{registerTimeout:m,removeTimeout:h}=Fe(),{registerTimeout:c,removeTimeout:C}=Fe(),_=q(null),y=q(null),T=q(e.modelValue),I=q(!1),D=q(!0),F=q(!1),j=q(!1),d=[],A=q(0),B=q(!1);let S=null,P=null,M;const z=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:rn(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),R=g(()=>{const o=A.value,r=T.value;for(let v=0;v<o;v++)if(d[v].name.value===r)return!0;return!1}),W=g(()=>`q-tabs__content--align-${I.value===!0?"left":j.value===!0?"justify":e.align}`),X=g(()=>`q-tabs row no-wrap items-center q-tabs--${I.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),u=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+W.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),E=g(()=>e.vertical!==!0&&a.lang.rtl===!0),O=g(()=>et===!1&&E.value===!0);H(E,Z),H(()=>e.modelValue,o=>{ye({name:o,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,ce);function ye({name:o,setCurrent:r,skipEmit:v}){T.value!==o&&(v!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",o),(r===!0||e["onUpdate:modelValue"]===void 0)&&(tt(T.value,o),T.value=o))}function ce(){n(()=>{Ae({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function Ae(o){if(w.value===void 0||y.value===null)return;const r=o[w.value.container],v=Math.min(y.value[w.value.scroll],Array.prototype.reduce.call(y.value.children,($,x)=>$+(x[w.value.content]||0),0)),k=r>0&&v>r;I.value=k,k===!0&&s(Z),j.value=r<parseInt(e.breakpoint,10)}function tt(o,r){const v=o!=null&&o!==""?d.find($=>$.name.value===o):null,k=r!=null&&r!==""?d.find($=>$.name.value===r):null;if(v&&k){const $=v.tabIndicatorRef.value,x=k.tabIndicatorRef.value;S!==null&&(clearTimeout(S),S=null),$.style.transition="none",$.style.transform="none",x.style.transition="none",x.style.transform="none";const b=$.getBoundingClientRect(),N=x.getBoundingClientRect();x.style.transform=e.vertical===!0?`translate3d(0,${b.top-N.top}px,0) scale3d(1,${N.height?b.height/N.height:1},1)`:`translate3d(${b.left-N.left}px,0,0) scale3d(${N.width?b.width/N.width:1},1,1)`,f(()=>{S=setTimeout(()=>{S=null,x.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",x.style.transform="none"},70)})}k&&I.value===!0&&J(k.rootRef.value)}function J(o){const{left:r,width:v,top:k,height:$}=y.value.getBoundingClientRect(),x=o.getBoundingClientRect();let b=e.vertical===!0?x.top-k:x.left-r;if(b<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),Z();return}b+=e.vertical===!0?x.height-$:x.width-v,b>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),Z())}function Z(){const o=y.value;if(o===null)return;const r=o.getBoundingClientRect(),v=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);E.value===!0?(D.value=Math.ceil(v+r.width)<o.scrollWidth-1,F.value=v>0):(D.value=v>0,F.value=e.vertical===!0?Math.ceil(v+r.height)<o.scrollHeight:Math.ceil(v+r.width)<o.scrollWidth)}function Re(o){P!==null&&clearInterval(P),P=setInterval(()=>{ot(o)===!0&&U()},5)}function Le(){Re(O.value===!0?Number.MAX_SAFE_INTEGER:0)}function Be(){Re(O.value===!0?0:Number.MAX_SAFE_INTEGER)}function U(){P!==null&&(clearInterval(P),P=null)}function nt(o,r){const v=Array.prototype.filter.call(y.value.children,N=>N===r||N.matches&&N.matches(".q-tab.q-focusable")===!0),k=v.length;if(k===0)return;if(o===36)return J(v[0]),v[0].focus(),!0;if(o===35)return J(v[k-1]),v[k-1].focus(),!0;const $=o===(e.vertical===!0?38:37),x=o===(e.vertical===!0?40:39),b=$===!0?-1:x===!0?1:void 0;if(b!==void 0){const N=E.value===!0?-1:1,Q=v.indexOf(r)+b*N;return Q>=0&&Q<k&&(J(v[Q]),v[Q].focus({preventScroll:!0})),!0}}const at=g(()=>O.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,r)=>{o.scrollLeft=-r}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,r)=>{o.scrollTop=r}}:{get:o=>o.scrollLeft,set:(o,r)=>{o.scrollLeft=r}});function ot(o){const r=y.value,{get:v,set:k}=at.value;let $=!1,x=v(r);const b=o<x?-1:1;return x+=b*5,x<0?($=!0,x=0):(b===-1&&x<=o||b===1&&x>=o)&&($=!0,x=o),k(r,x),Z(),$}function Ee(o,r){for(const v in o)if(o[v]!==r[v])return!1;return!0}function it(){let o=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const v=d.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:k,query:$}=l.$route,x=Object.keys($).length;for(const b of v){const N=b.routeData.exact.value===!0;if(b.routeData[N===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Q,query:pe,matched:ct,href:dt}=b.routeData.resolvedLink.value,we=Object.keys(pe).length;if(N===!0){if(Q!==k||we!==x||Ee($,pe)===!1)continue;o=b.name.value;break}if(Q!==""&&Q!==k||we!==0&&Ee(pe,$)===!1)continue;const K={matchedLen:ct.length,queryDiff:x-we,hrefLen:dt.length-Q.length};if(K.matchedLen>r.matchedLen){o=b.name.value,r=K;continue}else if(K.matchedLen!==r.matchedLen)continue;if(K.queryDiff<r.queryDiff)o=b.name.value,r=K;else if(K.queryDiff!==r.queryDiff)continue;K.hrefLen>r.hrefLen&&(o=b.name.value,r=K)}o===null&&d.some(b=>b.routeData===void 0&&b.name.value===T.value)===!0||ye({name:o,setCurrent:!0})}function lt(o){if(h(),B.value!==!0&&_.value!==null&&o.target&&typeof o.target.closest=="function"){const r=o.target.closest(".q-tab");r&&_.value.contains(r)===!0&&(B.value=!0,I.value===!0&&J(r))}}function rt(){m(()=>{B.value=!1},30)}function de(){De.avoidRouteWatcher===!1?c(it):C()}function Me(){if(M===void 0){const o=H(()=>l.$route.fullPath,de);M=()=>{o(),M=void 0}}}function st(o){d.push(o),A.value++,ce(),o.routeData===void 0||l.$route===void 0?c(()=>{if(I.value===!0){const r=T.value,v=r!=null&&r!==""?d.find(k=>k.name.value===r):null;v&&J(v.rootRef.value)}}):(Me(),o.routeData.hasRouterLink.value===!0&&de())}function ut(o){d.splice(d.indexOf(o),1),A.value--,ce(),M!==void 0&&o.routeData!==void 0&&(d.every(r=>r.routeData===void 0)===!0&&M(),de())}const De={currentModel:T,tabProps:z,hasFocus:B,hasActiveTab:R,registerTab:st,unregisterTab:ut,verifyRouteModel:de,updateModel:ye,onKbdNavigate:nt,avoidRouteWatcher:!1};xt(Ye,De);function Ne(){S!==null&&clearTimeout(S),U(),M!==void 0&&M()}let Ve;return ee(Ne),Tt(()=>{Ve=M!==void 0,Ne()}),qt(()=>{Ve===!0&&Me(),ce()}),()=>p("div",{ref:_,class:X.value,role:"tablist",onFocusin:lt,onFocusout:rt},[p(ln,{onResize:Ae}),p("div",{ref:y,class:u.value,onScroll:Z},ue(t.default)),p(be,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(D.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Le,onTouchstartPassive:Le,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U}),p(be,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(F.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Be,onTouchstartPassive:Be,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U})])}});const $e=e=>(Ke("data-v-28e690af"),e=e(),Xe(),e),cn=$e(()=>V("div",{class:"menu-icon-item"},null,-1)),dn=$e(()=>V("div",{class:"menu-icon-item"},null,-1)),vn=$e(()=>V("div",{class:"menu-icon-item"},null,-1)),fn=[cn,dn,vn],mn=_e({__name:"MenuIcon",props:{active:{type:Boolean}},setup(e){const t=e;return(i,l)=>(te(),se("div",{class:St(["column justify-between menu-icon",{active:t.active}])},fn,2))}});var hn=ke(mn,[["__scopeId","data-v-28e690af"]]);const gn={class:"header"},bn=_e({__name:"AppHeader",setup(e){const t=q(null),i=q(!1);function l(){i.value=!i.value}return H(i,(a,n)=>{a&&t.value!=null?(console.log(t.value),t.value.style.maxHeight=t.value.scrollHeight+"px"):t.value.style.maxHeight="50px"}),(a,n)=>(te(),se("div",gn,[L(un,{"inline-label":"",class:"text-white shadow-2"},{default:re(()=>[V("div",{class:"tabs-wrapper",ref_key:"test",ref:t,style:{width:"100%"}},[L(hn,{onClick:l,active:i.value,class:"menu-icon"},null,8,["active"]),L(Y,{name:"home",icon:"home",label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",class:"first-tab"}),L(Y,{label:"\u0412\u043E\u0439\u0442\u0438",icon:"login",name:"login",class:"tab-login"}),L(Y,{name:"charter",icon:"book",label:"\u0423\u0441\u0442\u0430\u0432"}),L(Y,{name:"meet",icon:"group",label:"\u0421\u043E\u0431\u0440\u0430\u043D\u0438\u0435"}),L(Y,{name:"policy",icon:"policy",label:"\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u044B"}),L(Y,{name:"documents",icon:"description",label:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"}),L(Y,{name:"reactions",icon:"add_reaction",label:"\u041C\u043D\u0435\u043D\u0438\u044F"})],512)]),_:1})]))}}),Ie={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_n=Object.keys(Ie);Ie.all=!0;function We(e){const t={};for(const i of _n)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?Ie:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const yn=["INPUT","TEXTAREA"];function Qe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&yn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function pn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function wn(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,l)=>{const a=parseFloat(i);a&&(t[l]=a)}),t}var Cn=kt({name:"touch-swipe",beforeMount(e,{value:t,arg:i,modifiers:l}){if(l.mouse!==!0&&oe.has.touch!==!0)return;const a=l.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:wn(i),direction:We(l),noop:Je,mouseStart(s){Qe(s,n)&&$t(s)&&(me(n,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(s,!0))},touchStart(s){if(Qe(s,n)){const f=s.target;me(n,"temp",[[f,"touchmove","move","notPassiveCapture"],[f,"touchcancel","end","notPassiveCapture"],[f,"touchend","end","notPassiveCapture"]]),n.start(s)}},start(s,f){oe.is.firefox===!0&&Te(e,!0);const m=Oe(s);n.event={x:m.left,y:m.top,time:Date.now(),mouse:f===!0,dir:!1}},move(s){if(n.event===void 0)return;if(n.event.dir!==!1){le(s);return}const f=Date.now()-n.event.time;if(f===0)return;const m=Oe(s),h=m.left-n.event.x,c=Math.abs(h),C=m.top-n.event.y,_=Math.abs(C);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&_<n.sensitivity[1]){n.end(s);return}}else if(window.getSelection().toString()!==""){n.end(s);return}else if(c<n.sensitivity[2]&&_<n.sensitivity[2])return;const y=c/f,T=_/f;n.direction.vertical===!0&&c<_&&c<100&&T>n.sensitivity[0]&&(n.event.dir=C<0?"up":"down"),n.direction.horizontal===!0&&c>_&&_<100&&y>n.sensitivity[0]&&(n.event.dir=h<0?"left":"right"),n.direction.up===!0&&c<_&&C<0&&c<100&&T>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<_&&C>0&&c<100&&T>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>_&&h<0&&_<100&&y>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>_&&h>0&&_<100&&y>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(le(s),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pn(),n.styleCleanup=I=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const D=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(D,50):D()}),n.handler({evt:s,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:f,distance:{x:c,y:_}})):n.end(s)},end(s){n.event!==void 0&&(qe(n,"temp"),oe.is.firefox===!0&&Te(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),s!==void 0&&n.event.dir!==!1&&le(s),n.event=void 0)}};if(e.__qtouchswipe=n,l.mouse===!0){const s=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";me(n,"main",[[e,"mousedown","mouseStart",`passive${s}`]])}oe.has.touch===!0&&me(n,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const i=e.__qtouchswipe;i!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&i.end(),i.handler=t.value),i.direction=We(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(qe(t,"main"),qe(t,"temp"),oe.is.firefox===!0&&Te(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function xn(){let e=Object.create(null);return{getCache:(t,i)=>e[t]===void 0?e[t]=typeof i=="function"?i():i:e[t],setCache(t,i){e[t]=i},hasCache(t){return e.hasOwnProperty(t)},clearCache(t){t!==void 0?delete e[t]:e={}}}}const Tn={name:{required:!0},disable:Boolean},Ue={setup(e,{slots:t}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},ue(t.default))}},qn={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Sn=["update:modelValue","beforeTransition","transition"];function Pn(){const{props:e,emit:t,proxy:i}=ne(),{getCache:l}=xn();let a,n;const s=q(null),f=q(null);function m(u){const w=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(u.direction===w?1:-1))}const h=g(()=>[[Cn,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),C=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),_=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),T=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);H(()=>e.modelValue,(u,w)=>{const E=d(u)===!0?A(u):-1;n!==!0&&S(E===-1?0:E<A(w)?-1:1),s.value!==E&&(s.value=E,t("beforeTransition",u,w),Pe(()=>{t("transition",u,w)}))});function D(){P(1)}function F(){P(-1)}function j(u){t("update:modelValue",u)}function d(u){return u!=null&&u!==""}function A(u){return a.findIndex(w=>w.props.name===u&&w.props.disable!==""&&w.props.disable!==!0)}function B(){return a.filter(u=>u.props.disable!==""&&u.props.disable!==!0)}function S(u){const w=u!==0&&e.animated===!0&&s.value!==-1?"q-transition--"+(u===-1?c.value:C.value):null;f.value!==w&&(f.value=w)}function P(u,w=s.value){let E=w+u;for(;E!==-1&&E<a.length;){const O=a[E];if(O!==void 0&&O.props.disable!==""&&O.props.disable!==!0){S(u),n=!0,t("update:modelValue",O.props.name),setTimeout(()=>{n=!1});return}E+=u}e.infinite===!0&&a.length!==0&&w!==-1&&w!==a.length&&P(u,u===-1?a.length:-1)}function M(){const u=A(e.modelValue);return s.value!==u&&(s.value=u),!0}function z(){const u=d(e.modelValue)===!0&&M()&&a[s.value];return e.keepAlive===!0?[p(Rt,T.value,[p(I.value===!0?l(y.value,()=>({...Ue,name:y.value})):Ue,{key:y.value,style:_.value},()=>u)])]:[p("div",{class:"q-panel scroll",style:_.value,key:y.value,role:"tabpanel"},[u])]}function R(){if(a.length!==0)return e.animated===!0?[p(It,{name:f.value},z)]:z()}function W(u){return a=At(ue(u.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&d(w.props.name)===!0),a.length}function X(){return a}return Object.assign(i,{next:D,previous:F,goTo:j}),{panelIndex:s,panelDirectives:h,updatePanelsList:W,updatePanelIndex:M,getPanelContent:R,getEnabledPanels:B,getPanels:X,isValidPanelName:d,keepAliveProps:T,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:P,goToPanel:j,nextPanel:D,previousPanel:F}}var Se=ae({name:"QCarouselSlide",props:{...Tn,imgSrc:String},setup(e,{slots:t}){const i=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:i.value},ue(t.default))}}),kn=ae({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const i=g(()=>`q-carousel__control absolute absolute-${e.position}`),l=g(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>p("div",{class:i.value,style:l.value},ue(t.default))}});let ie=0;const $n={fullscreen:Boolean,noRouteFullscreenExit:Boolean},In=["update:fullscreen","fullscreen"];function An(){const e=ne(),{props:t,emit:i,proxy:l}=e;let a,n,s;const f=q(!1);Lt(e)===!0&&H(()=>l.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),H(()=>t.fullscreen,C=>{f.value!==C&&m()}),H(f,C=>{i("update:fullscreen",C),i("fullscreen",C)});function m(){f.value===!0?c():h()}function h(){f.value!==!0&&(f.value=!0,s=l.$el.parentNode,s.replaceChild(n,l.$el),document.body.appendChild(l.$el),ie++,ie===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:c},He.add(a))}function c(){f.value===!0&&(a!==void 0&&(He.remove(a),a=void 0),s.replaceChild(l.$el,n),f.value=!1,ie=Math.max(0,ie-1),ie===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return Bt(()=>{n=document.createElement("span")}),G(()=>{t.fullscreen===!0&&h()}),ee(c),Object.assign(l,{toggleFullscreen:m,setFullscreen:h,exitFullscreen:c}),{inFullscreen:f,toggleFullscreen:m}}const Rn=["top","right","bottom","left"],Ln=["regular","flat","outline","push","unelevated"];var Bn=ae({name:"QCarousel",props:{...Et,...qn,...$n,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ln.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Rn.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...In,...Sn],setup(e,{slots:t}){const{proxy:{$q:i}}=ne(),l=Mt(e,i);let a=null,n;const{updatePanelsList:s,getPanelContent:f,panelDirectives:m,goToPanel:h,previousPanel:c,nextPanel:C,getEnabledPanels:_,panelIndex:y}=Pn(),{inFullscreen:T}=An(),I=g(()=>T.value!==!0&&e.height!==void 0?{height:e.height}:{}),D=g(()=>e.vertical===!0?"vertical":"horizontal"),F=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(T.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${D.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${B.value}`:"")),j=g(()=>{const R=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?R.reverse():R}),d=g(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),A=g(()=>e.navigationActiveIcon||d.value),B=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),S=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));H(()=>e.modelValue,()=>{e.autoplay&&P()}),H(()=>e.autoplay,R=>{R?P():a!==null&&(clearTimeout(a),a=null)});function P(){const R=Nt(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,R>=0?C():c()},R)}G(()=>{e.autoplay&&P()}),ee(()=>{a!==null&&clearTimeout(a)});function M(R,W){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${R} q-carousel__navigation--${B.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},_().map(W))])}function z(){const R=[];if(e.navigation===!0){const W=t["navigation-icon"]!==void 0?t["navigation-icon"]:u=>p(he,{key:"nav"+u.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${u.active===!0?"":"in"}active`,...u.btnProps,onClick:u.onClick}),X=n-1;R.push(M("buttons",(u,w)=>{const E=u.props.name,O=y.value===w;return W({index:w,maxIndex:X,name:E,active:O,btnProps:{icon:O===!0?A.value:d.value,size:"sm",...S.value},onClick:()=>{h(E)}})}))}else if(e.thumbnails===!0){const W=e.controlColor!==void 0?` text-${e.controlColor}`:"";R.push(M("thumbnails",X=>{const u=X.props;return p("img",{key:"tmb#"+u.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${u.name===e.modelValue?"":"in"}active`+W,src:u.imgSrc||u["img-src"],onClick:()=>{h(u.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&R.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${D.value} absolute flex flex-center`},[p(he,{icon:j.value[0],...S.value,onClick:c})])),(e.infinite===!0||y.value<n-1)&&R.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${D.value} absolute flex flex-center`},[p(he,{icon:j.value[1],...S.value,onClick:C})]))),Ge(t.control,R)}return()=>(n=s(t),p("div",{class:F.value,style:I.value},[Dt("div",{class:"q-carousel__slides-container"},f(),"sl-cont",e.swipeable,()=>m.value)].concat(z())))}});const En={class:"slider-section"},Mn=_e({__name:"SliderSection",setup(e){const t=q(!1),i=q(1);return(l,a)=>(te(),se("section",En,[L(Bn,{swipeable:"",animated:"",arrows:"",infinite:"",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=n=>i.value=n),fullscreen:t.value,"onUpdate:fullscreen":a[2]||(a[2]=n=>t.value=n)},{control:re(()=>[L(kn,{position:"bottom-right",offset:[18,18]},{default:re(()=>[L(he,{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:t.value?"fullscreen_exit":"fullscreen",onClick:a[0]||(a[0]=n=>t.value=!t.value)},null,8,["icon"])]),_:1})]),default:re(()=>[L(Se,{name:1,"img-src":ge}),L(Se,{name:2,"img-src":ge}),L(Se,{name:3,"img-src":ge})]),_:1},8,["modelValue","fullscreen"])]))}}),Nn=_e({__name:"IndexPage",setup(e){return q([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),q({totalCount:1200}),(t,i)=>(te(),Vt(Ht,null,{default:re(()=>[L(bn),L(Zt),L(Mn)]),_:1}))}});export{Nn as default};
