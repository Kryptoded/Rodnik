import{_ as _e,o as ne,a as ue,d as Ke,e as q,f as G,g as ft,h as D,n as fe,u as me,p as Xe,i as Ye,j as mt,k as ht,l as xe,m as g,q as te,t as Ge,w as gt,R as bt,s as p,v as re,x as _t,y as yt,Q as be,z as Je,A as ae,B as pt,C as wt,D as oe,E as Ct,F as Ze,G as ke,H as Fe,I as Te,J as Oe,K as H,L as xt,M as Tt,N as St,O as ce,P as ye,S as qt,T as L,U as ee,V as Pt,W as kt,X as ie,Y as $t,Z as he,$ as Se,a0 as Ve,a1 as qe,a2 as It,a3 as At,a4 as Rt,a5 as Lt,a6 as Bt,a7 as He,a8 as Et,a9 as Mt,aa as Dt,ab as Nt,ac as se,c as zt}from"./index.aa53b499.js";const Ft={},Ot={class:"page"};function Vt(e,t){return ne(),ue("div",Ot,[Ke(e.$slots,"default")])}var Ht=_e(Ft,[["render",Vt]]),ge="/assets/layer-1.38b7a230.jpg",jt="/assets/layer-2.efb1f835.png",Wt="/assets/layer-5.dafeb7a3.png",Qt="/assets/layer-6.9076d4c2.png";const Ut=e=>(Xe("data-v-95ce5408"),e=e(),Ye(),e),Kt={class:"layers"},Xt={class:"layers__container"},Yt=Ut(()=>D("div",{class:"layers__item layer-3"},[D("div",{class:"hero-content"},[D("h1",null,[mt(" \u0421\u041D\u0422 "),D("span",null,' "\u0420\u043E\u0434\u043D\u0438\u043A" ')])])],-1)),Gt={class:"layers__item layer-4"},Jt={__name:"MainComponent",setup(e){function t(a){Object.assign(document.documentElement,{style:`
		--move-x: ${(a.clientX-window.innerWidth/2)*-.005}deg;
		--move-y: ${(a.clientY-window.innerHeight/2)*.01}deg;
		`})}const i=q(null);function l(){let a=i.value;a.width=window.innerWidth,a.height=window.innerHeight;let n=a.getContext("2d");function s(c,C){return Math.floor(Math.random()*c)+C}function f(c,C,_,y,T){this.x=c,this.y=C,this.endy=_,this.velocity=y,this.opacity=T,this.draw=function(){n.beginPath(),n.moveTo(this.x,this.y),n.lineTo(this.x,this.y-this.endy),n.lineWidth=1,n.strokeStyle="rgba(255, 255, 255, "+this.opacity+")",n.stroke()},this.update=function(){let I=window.innerHeight+100;this.y>=I?this.y=this.endy-100:this.y=this.y+this.velocity,this.draw()}}let m=[];for(let c=0;c<140;c++){let C=Math.floor(Math.random()*window.innerWidth)+1,_=Math.random()*-500,y=s(10,2),T=s(20,.2),I=Math.random()*.55;m.push(new f(C,_,y,T,I))}function h(){requestAnimationFrame(h),n.clearRect(0,0,window.innerWidth,window.innerHeight);for(let c=0;c<m.length;c++)m[c].update()}h()}return G(()=>{document.addEventListener("mousemove",t),l()}),ft(()=>{document.removeEventListener("mousemove",t)}),(a,n)=>(ne(),ue("section",Kt,[Ke(a.$slots,"default",{},void 0,!0),D("div",Xt,[D("div",{class:"layers__item layer-1",style:fe(`background-image: url(${me(ge)});`)},null,4),D("div",{class:"layers__item layer-2",style:fe(`background-image: url(${me(jt)});`)},null,4),Yt,D("div",Gt,[D("canvas",{class:"rain",ref_key:"rain",ref:i},null,512)]),D("div",{class:"layers__item layer-5",style:fe(`background-image: url(${me(Wt)});`)},null,4),D("div",{class:"layers__item layer-6",style:fe(`background-image: url(${me(Qt)});`)},null,4)])]))}};var Zt=_e(Jt,[["__scopeId","data-v-95ce5408"]]);let en=0;const tn=["click","keydown"],nn={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${en++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function an(e,t,i,l){const a=ht(Ge,xe);if(a===xe)return console.error("QTab/QRouteTab component needs to be child of QTabs"),xe;const{proxy:n}=ae(),s=q(null),f=q(null),m=q(null),h=g(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),c=g(()=>a.currentModel.value===e.name),C=g(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(c.value===!0?" q-tab--active"+(a.tabProps.value.activeClass?" "+a.tabProps.value.activeClass:"")+(a.tabProps.value.activeColor?` text-${a.tabProps.value.activeColor}`:"")+(a.tabProps.value.activeBgColor?` bg-${a.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&a.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||a.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),_=g(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(a.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),y=g(()=>e.disable===!0||a.hasFocus.value===!0||c.value===!1&&a.hasActiveTab.value===!0?-1:e.tabindex||0);function T(d,A){if(A!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&re(d);return}if(l===void 0){a.updateModel({name:e.name}),i("click",d);return}if(l.hasRouterLink.value===!0){const B=(S={})=>{let P;const M=S.to===void 0||pt(S.to,e.to)===!0?a.avoidRouteWatcher=wt():null;return l.navigateToRouterLink(d,{...S,returnRouterError:!0}).catch(F=>{P=F}).then(F=>{if(M===a.avoidRouteWatcher&&(a.avoidRouteWatcher=!1,P===void 0&&(F===void 0||F.message!==void 0&&F.message.startsWith("Avoided redundant navigation")===!0)&&a.updateModel({name:e.name})),S.returnRouterError===!0)return P!==void 0?Promise.reject(P):F})};i("click",d,B),d.defaultPrevented!==!0&&B();return}i("click",d)}function I(d){_t(d,[13,32])?T(d,!0):yt(d)!==!0&&d.keyCode>=35&&d.keyCode<=40&&d.altKey!==!0&&d.metaKey!==!0&&a.onKbdNavigate(d.keyCode,n.$el)===!0&&re(d),i("keydown",d)}function N(){const d=a.tabProps.value.narrowIndicator,A=[],B=p("div",{ref:m,class:["q-tab__indicator",a.tabProps.value.indicatorClass]});e.icon!==void 0&&A.push(p(be,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&A.push(p("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&A.push(e.alertIcon!==void 0?p(be,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):p("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),d===!0&&A.push(B);const S=[p("div",{class:"q-focus-helper",tabindex:-1,ref:s}),p("div",{class:_.value},Je(t.default,A))];return d===!1&&S.push(B),S}const O={name:g(()=>e.name),rootRef:f,tabIndicatorRef:m,routeData:l};te(()=>{a.unregisterTab(O)}),G(()=>{a.registerTab(O)});function j(d,A){const B={ref:f,class:C.value,tabindex:y.value,role:"tab","aria-selected":c.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:T,onKeydown:I,...A};return gt(p(d,B,N()),[[bt,h.value]])}return{renderTab:j,$tabs:a}}var Y=oe({name:"QTab",props:nn,emits:tn,setup(e,{slots:t,emit:i}){const{renderTab:l}=an(e,t,i);return()=>l("div")}});function on(){const e=q(!Ct.value);return e.value===!1&&G(()=>{e.value=!0}),{isHydrated:e}}const et=typeof ResizeObserver!="undefined",je=et===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ln=oe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let i=null,l,a={width:-1,height:-1};function n(m){m===!0||e.debounce===0||e.debounce==="0"?s():i===null&&(i=setTimeout(s,e.debounce))}function s(){if(i!==null&&(clearTimeout(i),i=null),l){const{offsetWidth:m,offsetHeight:h}=l;(m!==a.width||h!==a.height)&&(a={width:m,height:h},t("resize",a))}}const{proxy:f}=ae();if(f.trigger=n,et===!0){let m;const h=c=>{l=f.$el.parentNode,l?(m=new ResizeObserver(n),m.observe(l),s()):c!==!0&&ke(()=>{h(!0)})};return G(()=>{h()}),te(()=>{i!==null&&clearTimeout(i),m!==void 0&&(m.disconnect!==void 0?m.disconnect():l&&m.unobserve(l))}),Ze}else{let c=function(){i!==null&&(clearTimeout(i),i=null),h!==void 0&&(h.removeEventListener!==void 0&&h.removeEventListener("resize",n,Fe.passive),h=void 0)},C=function(){c(),l&&l.contentDocument&&(h=l.contentDocument.defaultView,h.addEventListener("resize",n,Fe.passive),s())};const{isHydrated:m}=on();let h;return G(()=>{ke(()=>{l=f.$el,l&&C()})}),te(c),()=>{if(m.value===!0)return p("object",{class:"q--avoid-card-border",style:je.style,tabindex:-1,type:"text/html",data:je.url,"aria-hidden":"true",onLoad:C})}}}});let tt=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,tt=e.scrollLeft>=0,e.remove()}function rn(e,t,i){const l=i===!0?["left","right"]:["top","bottom"];return`absolute-${t===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const sn=["left","center","right","justify"];var un=oe({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>sn.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:i}){const{proxy:l}=ae(),{$q:a}=l,{registerTick:n}=Te(),{registerTick:s}=Te(),{registerTick:f}=Te(),{registerTimeout:m,removeTimeout:h}=Oe(),{registerTimeout:c,removeTimeout:C}=Oe(),_=q(null),y=q(null),T=q(e.modelValue),I=q(!1),N=q(!0),O=q(!1),j=q(!1),d=[],A=q(0),B=q(!1);let S=null,P=null,M;const F=g(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:rn(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),R=g(()=>{const o=A.value,r=T.value;for(let v=0;v<o;v++)if(d[v].name.value===r)return!0;return!1}),W=g(()=>`q-tabs__content--align-${I.value===!0?"left":j.value===!0?"justify":e.align}`),X=g(()=>`q-tabs row no-wrap items-center q-tabs--${I.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),u=g(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+W.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),w=g(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),E=g(()=>e.vertical!==!0&&a.lang.rtl===!0),V=g(()=>tt===!1&&E.value===!0);H(E,Z),H(()=>e.modelValue,o=>{pe({name:o,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,de);function pe({name:o,setCurrent:r,skipEmit:v}){T.value!==o&&(v!==!0&&e["onUpdate:modelValue"]!==void 0&&i("update:modelValue",o),(r===!0||e["onUpdate:modelValue"]===void 0)&&(nt(T.value,o),T.value=o))}function de(){n(()=>{Ae({width:_.value.offsetWidth,height:_.value.offsetHeight})})}function Ae(o){if(w.value===void 0||y.value===null)return;const r=o[w.value.container],v=Math.min(y.value[w.value.scroll],Array.prototype.reduce.call(y.value.children,($,x)=>$+(x[w.value.content]||0),0)),k=r>0&&v>r;I.value=k,k===!0&&s(Z),j.value=r<parseInt(e.breakpoint,10)}function nt(o,r){const v=o!=null&&o!==""?d.find($=>$.name.value===o):null,k=r!=null&&r!==""?d.find($=>$.name.value===r):null;if(v&&k){const $=v.tabIndicatorRef.value,x=k.tabIndicatorRef.value;S!==null&&(clearTimeout(S),S=null),$.style.transition="none",$.style.transform="none",x.style.transition="none",x.style.transform="none";const b=$.getBoundingClientRect(),z=x.getBoundingClientRect();x.style.transform=e.vertical===!0?`translate3d(0,${b.top-z.top}px,0) scale3d(1,${z.height?b.height/z.height:1},1)`:`translate3d(${b.left-z.left}px,0,0) scale3d(${z.width?b.width/z.width:1},1,1)`,f(()=>{S=setTimeout(()=>{S=null,x.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",x.style.transform="none"},70)})}k&&I.value===!0&&J(k.rootRef.value)}function J(o){const{left:r,width:v,top:k,height:$}=y.value.getBoundingClientRect(),x=o.getBoundingClientRect();let b=e.vertical===!0?x.top-k:x.left-r;if(b<0){y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(b),Z();return}b+=e.vertical===!0?x.height-$:x.width-v,b>0&&(y.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(b),Z())}function Z(){const o=y.value;if(o===null)return;const r=o.getBoundingClientRect(),v=e.vertical===!0?o.scrollTop:Math.abs(o.scrollLeft);E.value===!0?(N.value=Math.ceil(v+r.width)<o.scrollWidth-1,O.value=v>0):(N.value=v>0,O.value=e.vertical===!0?Math.ceil(v+r.height)<o.scrollHeight:Math.ceil(v+r.width)<o.scrollWidth)}function Re(o){P!==null&&clearInterval(P),P=setInterval(()=>{it(o)===!0&&U()},5)}function Le(){Re(V.value===!0?Number.MAX_SAFE_INTEGER:0)}function Be(){Re(V.value===!0?0:Number.MAX_SAFE_INTEGER)}function U(){P!==null&&(clearInterval(P),P=null)}function at(o,r){const v=Array.prototype.filter.call(y.value.children,z=>z===r||z.matches&&z.matches(".q-tab.q-focusable")===!0),k=v.length;if(k===0)return;if(o===36)return J(v[0]),v[0].focus(),!0;if(o===35)return J(v[k-1]),v[k-1].focus(),!0;const $=o===(e.vertical===!0?38:37),x=o===(e.vertical===!0?40:39),b=$===!0?-1:x===!0?1:void 0;if(b!==void 0){const z=E.value===!0?-1:1,Q=v.indexOf(r)+b*z;return Q>=0&&Q<k&&(J(v[Q]),v[Q].focus({preventScroll:!0})),!0}}const ot=g(()=>V.value===!0?{get:o=>Math.abs(o.scrollLeft),set:(o,r)=>{o.scrollLeft=-r}}:e.vertical===!0?{get:o=>o.scrollTop,set:(o,r)=>{o.scrollTop=r}}:{get:o=>o.scrollLeft,set:(o,r)=>{o.scrollLeft=r}});function it(o){const r=y.value,{get:v,set:k}=ot.value;let $=!1,x=v(r);const b=o<x?-1:1;return x+=b*5,x<0?($=!0,x=0):(b===-1&&x<=o||b===1&&x>=o)&&($=!0,x=o),k(r,x),Z(),$}function Ee(o,r){for(const v in o)if(o[v]!==r[v])return!1;return!0}function lt(){let o=null,r={matchedLen:0,queryDiff:9999,hrefLen:0};const v=d.filter(b=>b.routeData!==void 0&&b.routeData.hasRouterLink.value===!0),{hash:k,query:$}=l.$route,x=Object.keys($).length;for(const b of v){const z=b.routeData.exact.value===!0;if(b.routeData[z===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:Q,query:we,matched:dt,href:vt}=b.routeData.resolvedLink.value,Ce=Object.keys(we).length;if(z===!0){if(Q!==k||Ce!==x||Ee($,we)===!1)continue;o=b.name.value;break}if(Q!==""&&Q!==k||Ce!==0&&Ee(we,$)===!1)continue;const K={matchedLen:dt.length,queryDiff:x-Ce,hrefLen:vt.length-Q.length};if(K.matchedLen>r.matchedLen){o=b.name.value,r=K;continue}else if(K.matchedLen!==r.matchedLen)continue;if(K.queryDiff<r.queryDiff)o=b.name.value,r=K;else if(K.queryDiff!==r.queryDiff)continue;K.hrefLen>r.hrefLen&&(o=b.name.value,r=K)}o===null&&d.some(b=>b.routeData===void 0&&b.name.value===T.value)===!0||pe({name:o,setCurrent:!0})}function rt(o){if(h(),B.value!==!0&&_.value!==null&&o.target&&typeof o.target.closest=="function"){const r=o.target.closest(".q-tab");r&&_.value.contains(r)===!0&&(B.value=!0,I.value===!0&&J(r))}}function st(){m(()=>{B.value=!1},30)}function ve(){De.avoidRouteWatcher===!1?c(lt):C()}function Me(){if(M===void 0){const o=H(()=>l.$route.fullPath,ve);M=()=>{o(),M=void 0}}}function ut(o){d.push(o),A.value++,de(),o.routeData===void 0||l.$route===void 0?c(()=>{if(I.value===!0){const r=T.value,v=r!=null&&r!==""?d.find(k=>k.name.value===r):null;v&&J(v.rootRef.value)}}):(Me(),o.routeData.hasRouterLink.value===!0&&ve())}function ct(o){d.splice(d.indexOf(o),1),A.value--,de(),M!==void 0&&o.routeData!==void 0&&(d.every(r=>r.routeData===void 0)===!0&&M(),ve())}const De={currentModel:T,tabProps:F,hasFocus:B,hasActiveTab:R,registerTab:ut,unregisterTab:ct,verifyRouteModel:ve,updateModel:pe,onKbdNavigate:at,avoidRouteWatcher:!1};xt(Ge,De);function Ne(){S!==null&&clearTimeout(S),U(),M!==void 0&&M()}let ze;return te(Ne),Tt(()=>{ze=M!==void 0,Ne()}),St(()=>{ze===!0&&Me(),de()}),()=>p("div",{ref:_,class:X.value,role:"tablist",onFocusin:rt,onFocusout:st},[p(ln,{onResize:Ae}),p("div",{ref:y,class:u.value,onScroll:Z},ce(t.default)),p(be,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(N.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||a.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Le,onTouchstartPassive:Le,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U}),p(be,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(O.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||a.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Be,onTouchstartPassive:Be,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U})])}});const $e=e=>(Xe("data-v-28e690af"),e=e(),Ye(),e),cn=$e(()=>D("div",{class:"menu-icon-item"},null,-1)),dn=$e(()=>D("div",{class:"menu-icon-item"},null,-1)),vn=$e(()=>D("div",{class:"menu-icon-item"},null,-1)),fn=[cn,dn,vn],mn=ye({__name:"MenuIcon",props:{active:{type:Boolean}},setup(e){const t=e;return(i,l)=>(ne(),ue("div",{class:qt(["column justify-between menu-icon",{active:t.active}])},fn,2))}});var hn=_e(mn,[["__scopeId","data-v-28e690af"]]);const gn={class:"header"},bn=ye({__name:"AppHeader",setup(e){const t=q(),i=q(!1);function l(){i.value=!i.value}return H(i,a=>{a&&t.value?t.value.style.maxHeight=t.value.scrollHeight+"px":t.value&&(t.value.style.maxHeight="50px")}),(a,n)=>(ne(),ue("div",gn,[L(un,{"inline-label":"",class:"text-white shadow-2"},{default:ee(()=>[D("div",{class:"tabs-wrapper",ref_key:"test",ref:t,style:{width:"100%"}},[L(hn,{onClick:l,active:i.value,class:"menu-icon"},null,8,["active"]),L(Y,{name:"home",icon:"home",label:"\u0413\u043B\u0430\u0432\u043D\u0430\u044F",class:"first-tab"}),L(Y,{label:"\u0412\u043E\u0439\u0442\u0438",icon:"login",name:"login",class:"tab-login"}),L(Y,{name:"charter",icon:"book",label:"\u0423\u0441\u0442\u0430\u0432"}),L(Y,{name:"meet",icon:"group",label:"\u0421\u043E\u0431\u0440\u0430\u043D\u0438\u0435"}),L(Y,{name:"policy",icon:"policy",label:"\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0440\u0433\u0430\u043D\u044B"}),L(Y,{name:"documents",icon:"description",label:"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"}),L(Y,{name:"reactions",icon:"add_reaction",label:"\u041C\u043D\u0435\u043D\u0438\u044F"})],512)]),_:1})]))}}),Ie={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},_n=Object.keys(Ie);Ie.all=!0;function We(e){const t={};for(const i of _n)e[i]===!0&&(t[i]=!0);return Object.keys(t).length===0?Ie:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const yn=["INPUT","TEXTAREA"];function Qe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&yn.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function pn(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),Pt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function wn(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((i,l)=>{const a=parseFloat(i);a&&(t[l]=a)}),t}var Cn=kt({name:"touch-swipe",beforeMount(e,{value:t,arg:i,modifiers:l}){if(l.mouse!==!0&&ie.has.touch!==!0)return;const a=l.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:wn(i),direction:We(l),noop:Ze,mouseStart(s){Qe(s,n)&&$t(s)&&(he(n,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(s,!0))},touchStart(s){if(Qe(s,n)){const f=s.target;he(n,"temp",[[f,"touchmove","move","notPassiveCapture"],[f,"touchcancel","end","notPassiveCapture"],[f,"touchend","end","notPassiveCapture"]]),n.start(s)}},start(s,f){ie.is.firefox===!0&&Se(e,!0);const m=Ve(s);n.event={x:m.left,y:m.top,time:Date.now(),mouse:f===!0,dir:!1}},move(s){if(n.event===void 0)return;if(n.event.dir!==!1){re(s);return}const f=Date.now()-n.event.time;if(f===0)return;const m=Ve(s),h=m.left-n.event.x,c=Math.abs(h),C=m.top-n.event.y,_=Math.abs(C);if(n.event.mouse!==!0){if(c<n.sensitivity[1]&&_<n.sensitivity[1]){n.end(s);return}}else if(window.getSelection().toString()!==""){n.end(s);return}else if(c<n.sensitivity[2]&&_<n.sensitivity[2])return;const y=c/f,T=_/f;n.direction.vertical===!0&&c<_&&c<100&&T>n.sensitivity[0]&&(n.event.dir=C<0?"up":"down"),n.direction.horizontal===!0&&c>_&&_<100&&y>n.sensitivity[0]&&(n.event.dir=h<0?"left":"right"),n.direction.up===!0&&c<_&&C<0&&c<100&&T>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&c<_&&C>0&&c<100&&T>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&c>_&&h<0&&_<100&&y>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&c>_&&h>0&&_<100&&y>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(re(s),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),pn(),n.styleCleanup=I=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const N=()=>{document.body.classList.remove("no-pointer-events--children")};I===!0?setTimeout(N,50):N()}),n.handler({evt:s,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:f,distance:{x:c,y:_}})):n.end(s)},end(s){n.event!==void 0&&(qe(n,"temp"),ie.is.firefox===!0&&Se(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),s!==void 0&&n.event.dir!==!1&&re(s),n.event=void 0)}};if(e.__qtouchswipe=n,l.mouse===!0){const s=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";he(n,"main",[[e,"mousedown","mouseStart",`passive${s}`]])}ie.has.touch===!0&&he(n,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const i=e.__qtouchswipe;i!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&i.end(),i.handler=t.value),i.direction=We(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(qe(t,"main"),qe(t,"temp"),ie.is.firefox===!0&&Se(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function xn(){let e=Object.create(null);return{getCache:(t,i)=>e[t]===void 0?e[t]=typeof i=="function"?i():i:e[t],setCache(t,i){e[t]=i},hasCache(t){return e.hasOwnProperty(t)},clearCache(t){t!==void 0?delete e[t]:e={}}}}const Tn={name:{required:!0},disable:Boolean},Ue={setup(e,{slots:t}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},ce(t.default))}},Sn={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},qn=["update:modelValue","beforeTransition","transition"];function Pn(){const{props:e,emit:t,proxy:i}=ae(),{getCache:l}=xn();let a,n;const s=q(null),f=q(null);function m(u){const w=e.vertical===!0?"up":"left";P((i.$q.lang.rtl===!0?-1:1)*(u.direction===w?1:-1))}const h=g(()=>[[Cn,m,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),c=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),C=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),_=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),y=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),T=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),I=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);H(()=>e.modelValue,(u,w)=>{const E=d(u)===!0?A(u):-1;n!==!0&&S(E===-1?0:E<A(w)?-1:1),s.value!==E&&(s.value=E,t("beforeTransition",u,w),ke(()=>{t("transition",u,w)}))});function N(){P(1)}function O(){P(-1)}function j(u){t("update:modelValue",u)}function d(u){return u!=null&&u!==""}function A(u){return a.findIndex(w=>w.props.name===u&&w.props.disable!==""&&w.props.disable!==!0)}function B(){return a.filter(u=>u.props.disable!==""&&u.props.disable!==!0)}function S(u){const w=u!==0&&e.animated===!0&&s.value!==-1?"q-transition--"+(u===-1?c.value:C.value):null;f.value!==w&&(f.value=w)}function P(u,w=s.value){let E=w+u;for(;E!==-1&&E<a.length;){const V=a[E];if(V!==void 0&&V.props.disable!==""&&V.props.disable!==!0){S(u),n=!0,t("update:modelValue",V.props.name),setTimeout(()=>{n=!1});return}E+=u}e.infinite===!0&&a.length!==0&&w!==-1&&w!==a.length&&P(u,u===-1?a.length:-1)}function M(){const u=A(e.modelValue);return s.value!==u&&(s.value=u),!0}function F(){const u=d(e.modelValue)===!0&&M()&&a[s.value];return e.keepAlive===!0?[p(Rt,T.value,[p(I.value===!0?l(y.value,()=>({...Ue,name:y.value})):Ue,{key:y.value,style:_.value},()=>u)])]:[p("div",{class:"q-panel scroll",style:_.value,key:y.value,role:"tabpanel"},[u])]}function R(){if(a.length!==0)return e.animated===!0?[p(It,{name:f.value},F)]:F()}function W(u){return a=At(ce(u.default,[])).filter(w=>w.props!==null&&w.props.slot===void 0&&d(w.props.name)===!0),a.length}function X(){return a}return Object.assign(i,{next:N,previous:O,goTo:j}),{panelIndex:s,panelDirectives:h,updatePanelsList:W,updatePanelIndex:M,getPanelContent:R,getEnabledPanels:B,getPanels:X,isValidPanelName:d,keepAliveProps:T,needsUniqueKeepAliveWrapper:I,goToPanelByOffset:P,goToPanel:j,nextPanel:N,previousPanel:O}}var Pe=oe({name:"QCarouselSlide",props:{...Tn,imgSrc:String},setup(e,{slots:t}){const i=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:i.value},ce(t.default))}}),kn=oe({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:t}){const i=g(()=>`q-carousel__control absolute absolute-${e.position}`),l=g(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>p("div",{class:i.value,style:l.value},ce(t.default))}});let le=0;const $n={fullscreen:Boolean,noRouteFullscreenExit:Boolean},In=["update:fullscreen","fullscreen"];function An(){const e=ae(),{props:t,emit:i,proxy:l}=e;let a,n,s;const f=q(!1);Lt(e)===!0&&H(()=>l.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&c()}),H(()=>t.fullscreen,C=>{f.value!==C&&m()}),H(f,C=>{i("update:fullscreen",C),i("fullscreen",C)});function m(){f.value===!0?c():h()}function h(){f.value!==!0&&(f.value=!0,s=l.$el.parentNode,s.replaceChild(n,l.$el),document.body.appendChild(l.$el),le++,le===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:c},He.add(a))}function c(){f.value===!0&&(a!==void 0&&(He.remove(a),a=void 0),s.replaceChild(l.$el,n),f.value=!1,le=Math.max(0,le-1),le===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return Bt(()=>{n=document.createElement("span")}),G(()=>{t.fullscreen===!0&&h()}),te(c),Object.assign(l,{toggleFullscreen:m,setFullscreen:h,exitFullscreen:c}),{inFullscreen:f,toggleFullscreen:m}}const Rn=["top","right","bottom","left"],Ln=["regular","flat","outline","push","unelevated"];var Bn=oe({name:"QCarousel",props:{...Et,...Sn,...$n,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Ln.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Rn.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...In,...qn],setup(e,{slots:t}){const{proxy:{$q:i}}=ae(),l=Mt(e,i);let a=null,n;const{updatePanelsList:s,getPanelContent:f,panelDirectives:m,goToPanel:h,previousPanel:c,nextPanel:C,getEnabledPanels:_,panelIndex:y}=Pn(),{inFullscreen:T}=An(),I=g(()=>T.value!==!0&&e.height!==void 0?{height:e.height}:{}),N=g(()=>e.vertical===!0?"vertical":"horizontal"),O=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(T.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${N.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${B.value}`:"")),j=g(()=>{const R=[e.prevIcon||i.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||i.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&i.lang.rtl===!0?R.reverse():R}),d=g(()=>e.navigationIcon||i.iconSet.carousel.navigationIcon),A=g(()=>e.navigationActiveIcon||d.value),B=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),S=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));H(()=>e.modelValue,()=>{e.autoplay&&P()}),H(()=>e.autoplay,R=>{R?P():a!==null&&(clearTimeout(a),a=null)});function P(){const R=Nt(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,R>=0?C():c()},R)}G(()=>{e.autoplay&&P()}),te(()=>{a!==null&&clearTimeout(a)});function M(R,W){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${R} q-carousel__navigation--${B.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},_().map(W))])}function F(){const R=[];if(e.navigation===!0){const W=t["navigation-icon"]!==void 0?t["navigation-icon"]:u=>p(se,{key:"nav"+u.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${u.active===!0?"":"in"}active`,...u.btnProps,onClick:u.onClick}),X=n-1;R.push(M("buttons",(u,w)=>{const E=u.props.name,V=y.value===w;return W({index:w,maxIndex:X,name:E,active:V,btnProps:{icon:V===!0?A.value:d.value,size:"sm",...S.value},onClick:()=>{h(E)}})}))}else if(e.thumbnails===!0){const W=e.controlColor!==void 0?` text-${e.controlColor}`:"";R.push(M("thumbnails",X=>{const u=X.props;return p("img",{key:"tmb#"+u.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${u.name===e.modelValue?"":"in"}active`+W,src:u.imgSrc||u["img-src"],onClick:()=>{h(u.name)}})}))}return e.arrows===!0&&y.value>=0&&((e.infinite===!0||y.value>0)&&R.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${N.value} absolute flex flex-center`},[p(se,{icon:j.value[0],...S.value,onClick:c})])),(e.infinite===!0||y.value<n-1)&&R.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${N.value} absolute flex flex-center`},[p(se,{icon:j.value[1],...S.value,onClick:C})]))),Je(t.control,R)}return()=>(n=s(t),p("div",{class:O.value,style:I.value},[Dt("div",{class:"q-carousel__slides-container"},f(),"sl-cont",e.swipeable,()=>m.value)].concat(F())))}});const En={class:"slider-section"},Mn=D("div",{class:"text-h4 text-center",style:{"font-family":"lighthaus"}}," \u041D\u0430\u0448 \u0421\u041D\u0422 ",-1),Dn=ye({__name:"SliderSection",setup(e){const t=q(!1),i=q(1);return(l,a)=>(ne(),ue("section",En,[Mn,L(Bn,{swipeable:"",animated:"",arrows:"",infinite:"",modelValue:i.value,"onUpdate:modelValue":a[1]||(a[1]=n=>i.value=n),fullscreen:t.value,"onUpdate:fullscreen":a[2]||(a[2]=n=>t.value=n)},{control:ee(()=>[L(kn,{position:"bottom-right",offset:[18,18]},{default:ee(()=>[L(se,{push:"",round:"",dense:"",color:"white","text-color":"primary",icon:t.value?"fullscreen_exit":"fullscreen",onClick:a[0]||(a[0]=n=>t.value=!t.value)},null,8,["icon"])]),_:1})]),default:ee(()=>[L(Pe,{name:1,"img-src":ge}),L(Pe,{name:2,"img-src":ge}),L(Pe,{name:3,"img-src":ge})]),_:1},8,["modelValue","fullscreen"])]))}});const Nn=ye({__name:"IndexPage",setup(e){const t=q();function i(){var a;const l=(a=t.value)==null?void 0:a.$el.offsetTop;window.scrollTo({top:l-40,behavior:"smooth"})}return(l,a)=>(ne(),zt(Ht,null,{default:ee(()=>[L(bn),L(Zt,null,{default:ee(()=>[L(se,{icon:"expand_more",flat:"",color:"white",round:"",size:"lg",class:"test",onClick:i})]),_:1}),L(Dn,{ref_key:"sliderSection",ref:t},null,512)]),_:1}))}});var Fn=_e(Nn,[["__scopeId","data-v-7ef07bdf"]]);export{Fn as default};
