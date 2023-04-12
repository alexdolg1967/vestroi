/*! For license information please see main.js.LICENSE.txt */
(()=>{var e={755:()=>{console.log("components")},951:()=>{"use strict";!function(){let e=[],t=document.querySelectorAll("[data-da]"),n=[],o=[];if(t.length>0){let c=0;for(let o=0;o<t.length;o++){const i=t[o],r=i.getAttribute("data-da");if(""!=r){const t=r.split(","),o=t[1]?t[1].trim():"last",d=t[2]?t[2].trim():"767",l="min"===t[3]?t[3].trim():"max",u=document.querySelector("."+t[0].trim());t.length>0&&u&&(i.setAttribute("data-da-index",c),e[c]={parent:i.parentNode,index:(a=i,s=void 0,s=Array.prototype.slice.call(a.parentNode.children),s.indexOf(a))},n[c]={element:i,destination:document.querySelector("."+t[0].trim()),place:o,breakpoint:d,type:l},c++)}}(i=n).sort((function(e,t){return e.breakpoint>t.breakpoint?-1:1})),i.sort((function(e,t){return e.place>t.place?1:-1}));for(let e=0;e<n.length;e++){const t=n[e],i=t.breakpoint,a=t.type;o.push(window.matchMedia("("+a+"-width: "+i+"px)")),o[e].addListener(r)}}var i,a,s;function r(e){for(let e=0;e<n.length;e++){const t=n[e],i=t.element,a=t.destination,s=t.place,r="_dynamic_adapt_"+t.breakpoint;if(o[e].matches){if(!i.classList.contains(r)){let e=d(a)[s];"first"===s?e=d(a)[0]:"last"===s&&(e=d(a)[d(a).length]),a.insertBefore(i,a.children[e]),i.classList.add(r)}}else i.classList.contains(r)&&(c(i),i.classList.remove(r))}}function c(t){const n=t.getAttribute("data-da-index"),o=e[n],i=o.parent,a=o.index,s=d(i,!0)[a];i.insertBefore(t,i.children[s])}function d(e,t){const n=e.children,o=[];for(let e=0;e<n.length;e++){const i=n[e];(t||null==i.getAttribute("data-da"))&&o.push(e)}return o}r()}()},598:()=>{function e(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function a(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){t=!1}function c(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(a(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),c())}),!0),c(),e.addEventListener("focus",(function(e){var n,o,r;a(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(r=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===r&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;a(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)},2:function(e,t,n){var o,i;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),o=this;do{for(t=n.length;0<=--t&&n.item(t)!==o;);}while(t<0&&(o=o.parentElement));return o}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var o=(new Date).getTime(),i=Math.max(0,16-(o-e)),a=window.setTimeout((function(){t(o+i)}),i);return e=o+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),i=void 0!==n.g?n.g:"undefined"!=typeof window?window:this,o=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}})),e},o=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,i=-1,a="",s=n.charCodeAt(0);++i<o;){if(0===(t=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=t&&t<=31||127==t||0===i&&48<=t&&t<=57||1===i&&48<=t&&t<=57&&45===s?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(i):"\\"+n.charAt(i)}return"#"+a},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(t,n,o){0===t&&document.body.focus(),o||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},s=function(t,n,o,i){if(n.emitEvents&&"function"==typeof e.CustomEvent){var a=new CustomEvent(t,{bubbles:!0,detail:{anchor:o,toggle:i}});document.dispatchEvent(a)}};return function(r,c){var d,l,u,m,h={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||s("scrollCancel",d)},animateScroll:function(o,r,c){h.cancelScroll();var l=n(d||t,c||{}),p="[object Number]"===Object.prototype.toString.call(o),f=p||!o.tagName?null:o;if(p||f){var v=e.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var y,g,b,E,w,L,A,S,O=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(u),x=p?o:function(t,n,o,a){var s=0;if(t.offsetParent)for(;s+=t.offsetTop,t=t.offsetParent;);return s=Math.max(s-n-o,0),a&&(s=Math.min(s,i()-e.innerHeight)),s}(f,O,parseInt("function"==typeof l.offset?l.offset(o,r):l.offset,10),l.clip),C=x-v,q=i(),_=0,k=(y=C,b=(g=l).speedAsDuration?g.speed:Math.abs(y/1e3*g.speed),g.durationMax&&b>g.durationMax?g.durationMax:g.durationMin&&b<g.durationMin?g.durationMin:parseInt(b,10)),T=function(t){var n,i,c;E||(E=t),_+=t-E,L=v+C*(i=w=1<(w=0===k?0:_/k)?1:w,"easeInQuad"===(n=l).easing&&(c=i*i),"easeOutQuad"===n.easing&&(c=i*(2-i)),"easeInOutQuad"===n.easing&&(c=i<.5?2*i*i:(4-2*i)*i-1),"easeInCubic"===n.easing&&(c=i*i*i),"easeOutCubic"===n.easing&&(c=--i*i*i+1),"easeInOutCubic"===n.easing&&(c=i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1),"easeInQuart"===n.easing&&(c=i*i*i*i),"easeOutQuart"===n.easing&&(c=1- --i*i*i*i),"easeInOutQuart"===n.easing&&(c=i<.5?8*i*i*i*i:1-8*--i*i*i*i),"easeInQuint"===n.easing&&(c=i*i*i*i*i),"easeOutQuint"===n.easing&&(c=1+--i*i*i*i*i),"easeInOutQuint"===n.easing&&(c=i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i),n.customEasing&&(c=n.customEasing(i)),c||i),e.scrollTo(0,Math.floor(L)),function(t,n){var i=e.pageYOffset;if(t==n||i==n||(v<n&&e.innerHeight+i)>=q)return h.cancelScroll(!0),a(o,n,p),s("scrollStop",l,o,r),!(m=E=null)}(L,x)||(m=e.requestAnimationFrame(T),E=t)};0===e.pageYOffset&&e.scrollTo(0,0),A=o,S=l,p||history.pushState&&S.updateURL&&history.pushState({smoothScroll:JSON.stringify(S),anchor:A.id},document.title,A===document.documentElement?"#top":"#"+A.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?a(o,Math.floor(x),!1):(s("scrollStart",l,o,r),h.cancelScroll(!0),e.requestAnimationFrame(T))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(l=t.target.closest(r))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(d.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var n,i;try{n=o(decodeURIComponent(l.hash))}catch(t){n=o(l.hash)}if("#"===n){if(!d.topOnEmptyHash)return;i=document.documentElement}else i=document.querySelector(n);(i=i||"#top"!==n?i:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(d),h.animateScroll(i,l))}},f=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(d)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(o(history.state.anchor)))||h.animateScroll(t,null,{updateURL:!1})}};return h.destroy=function(){d&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",f,!1),h.cancelScroll(),m=u=l=d=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";h.destroy(),d=n(t,c||{}),u=d.header?document.querySelector(d.header):null,document.addEventListener("click",p,!1),d.updateURL&&d.popstate&&e.addEventListener("popstate",f,!1)}(),h}}(i)}.apply(t,[]),void 0===o||(e.exports=o)}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";n(598),n(951);const e={windowEl:window,documentEl:document,htmlEl:document.documentElement,bodyEl:document.body},t=()=>{const t=document?.querySelectorAll(".fixed-block"),n=(document.body,parseInt(e.bodyEl.dataset.position,10));t.forEach((e=>{e.style.paddingRight="0px"})),e.bodyEl.style.paddingRight="0px",e.bodyEl.style.top="auto",e.bodyEl.classList.remove("dis-scroll"),window.scroll({top:n,left:0}),e.bodyEl.removeAttribute("data-position"),e.htmlEl.style.scrollBehavior="smooth"};!function(){const n=document?.querySelector("[data-burger]"),o=document?.querySelector("[data-menu]"),i=document?.querySelectorAll("[data-menu-item]"),a=document?.querySelector("[data-menu-overlay]");n?.addEventListener("click",(i=>{n?.classList.toggle("burger--active"),o?.classList.toggle("menu--active"),o?.classList.contains("menu--active")?(n?.setAttribute("aria-expanded","true"),n?.setAttribute("aria-label","Закрыть меню"),(()=>{const t=document?.querySelectorAll(".fixed-block"),n=window.scrollY,o=window.innerWidth-e.bodyEl.offsetWidth+"px";e.htmlEl.style.scrollBehavior="none",t.forEach((e=>{e.style.paddingRight=o})),e.bodyEl.style.paddingRight=o,e.bodyEl.classList.add("dis-scroll"),e.bodyEl.dataset.position=n,e.bodyEl.style.top=`-${n}px`})()):(n?.setAttribute("aria-expanded","false"),n?.setAttribute("aria-label","Открыть меню"),t())})),a?.addEventListener("click",(()=>{n?.setAttribute("aria-expanded","false"),n?.setAttribute("aria-label","Открыть меню"),n.classList.remove("burger--active"),o.classList.remove("menu--active"),t()})),i?.forEach((e=>{e.addEventListener("click",(()=>{n?.setAttribute("aria-expanded","false"),n?.setAttribute("aria-label","Открыть меню"),n.classList.remove("burger--active"),o.classList.remove("menu--active"),t()}))}))}();var o=n(2),i=n.n(o);new class{constructor(e){this.options=Object.assign({isOpen:()=>{},isClose:()=>{}},e),this.modal=document.querySelector(".graph-modal"),this.speed=300,this.animation="fade",this._reOpen=!1,this._nextContainer=!1,this.modalContainer=!1,this.isOpen=!1,this.previousActiveElement=!1,this._focusElements=["a[href]","input","select","textarea","button","iframe","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],this._fixBlocks=document.querySelectorAll(".fix-block"),this.events()}events(){this.modal&&(document.addEventListener("click",function(e){const t=e.target.closest("[data-graph-path]");if(t){let e=t.dataset.graphPath,n=t.dataset.graphAnimation,o=t.dataset.graphSpeed;return this.animation=n||"fade",this.speed=o?parseInt(o):300,this._nextContainer=document.querySelector(`[data-graph-target="${e}"]`),void this.open()}e.target.closest(".js-modal-close")&&this.close()}.bind(this)),window.addEventListener("keydown",function(e){27==e.keyCode&&this.isOpen&&this.close(),9==e.which&&this.isOpen&&this.focusCatch(e)}.bind(this)),document.addEventListener("click",function(e){e.target.classList.contains("graph-modal")&&e.target.classList.contains("is-open")&&this.close()}.bind(this)))}open(e){if(this.previousActiveElement=document.activeElement,this.isOpen)return this.reOpen=!0,void this.close();this.modalContainer=this._nextContainer,e&&(this.modalContainer=document.querySelector(`[data-graph-target="${e}"]`)),this.modalContainer.scrollTo(0,0),this.modal.style.setProperty("--transition-time",this.speed/1e3+"s"),this.modal.classList.add("is-open"),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.disableScroll(),this.modalContainer.classList.add("graph-modal-open"),this.modalContainer.classList.add(this.animation),setTimeout((()=>{this.options.isOpen(this),this.modalContainer.classList.add("animate-open"),this.isOpen=!0,this.focusTrap()}),this.speed)}close(){this.modalContainer&&(this.modalContainer.classList.remove("animate-open"),this.modalContainer.classList.remove(this.animation),this.modal.classList.remove("is-open"),this.modalContainer.classList.remove("graph-modal-open"),this.enableScroll(),document.body.style.scrollBehavior="auto",document.documentElement.style.scrollBehavior="auto",this.options.isClose(this),this.isOpen=!1,this.focusTrap(),this.reOpen&&(this.reOpen=!1,this.open()))}focusCatch(e){const t=this.modalContainer.querySelectorAll(this._focusElements),n=Array.prototype.slice.call(t),o=n.indexOf(document.activeElement);e.shiftKey&&0===o&&(n[n.length-1].focus(),e.preventDefault()),e.shiftKey||o!==n.length-1||(n[0].focus(),e.preventDefault())}focusTrap(){const e=this.modalContainer.querySelectorAll(this._focusElements);this.isOpen?e.length&&e[0].focus():this.previousActiveElement.focus()}disableScroll(){let e=window.scrollY;this.lockPadding(),document.body.classList.add("disable-scroll"),document.body.dataset.position=e,document.body.style.top=-e+"px"}enableScroll(){let e=parseInt(document.body.dataset.position,10);this.unlockPadding(),document.body.style.top="auto",document.body.classList.remove("disable-scroll"),window.scrollTo({top:e,left:0}),document.body.removeAttribute("data-position")}lockPadding(){let e=window.innerWidth-document.body.offsetWidth+"px";this._fixBlocks.forEach((t=>{t.style.paddingRight=e})),document.body.style.paddingRight=e}unlockPadding(){this._fixBlocks.forEach((e=>{e.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}},(()=>{const e=document?.querySelector(".header__wrapper").offsetHeight;document.querySelector(":root").style.setProperty("--header-height",`${e}px`)})(),new(i())('a[href*="#"]'),n(755);var a=window.navigator.userAgent,s=(a.indexOf("MSIE "),{Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return s.Android()||s.BlackBerry()||s.iOS()||s.Opera()||s.Windows()}});((a=navigator.userAgent).indexOf("MSIE ")>-1||a.indexOf("Trident/")>-1)&&document.querySelector("html").classList.add("ie"),s.any()&&document.querySelector("html").classList.add("_touch"),window.onload=function(){document.addEventListener("click",(function(e){const t=e.target;window.innerWidth>768&&s.any()&&(t.classList.contains("menu__arrow")&&t.closest(".menu__item").classList.toggle("_hover"),!t.closest(".menu__item")&&document.querySelectorAll(".menu__item._hover").length>0&&_removeClasses(document.querySelectorAll(".menu__item._hover"),"_hover"))}));const e=document.querySelector(".header");new IntersectionObserver((function(t,n){t[0].isIntersecting?e.classList.remove("_scroll"):e.classList.add("_scroll")})).observe(e)}})()})();