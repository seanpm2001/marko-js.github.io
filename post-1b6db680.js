(function(){function a(J,K){var L=new Error('Cannot find module "'+J+'"'+(K?' from "'+K+'"':''));return L.code='MODULE_NOT_FOUND',L}function b(J){this.id=this.filename=J,this.loaded=!1,this.exports=void 0}function h(J){var K,L=0,M=J.length;for(K=0;K<M;K++){var N=J[K];'.'===N||('..'===N?L--:(J[L]=N,L++))}return 1==L?'/':(2<L&&0===J[L-1].length&&L--,J.length=L,J.join('/'))}function j(J,K){var L=K.split('/'),M='/'==J?['']:J.split('/');return h(M.concat(L))}function k(J){var K=J.lastIndexOf('.'),L;return-1===K||-1!==(L=J.lastIndexOf('/'))&&L>K?null:J.substring(0,K)}function l(J){J=J.substring(1);var K=J.indexOf('/');'@'===J.charAt(1)&&(K=J.indexOf('/',K+1));var L=-1===K?J.length:K;return[J.substring(0,L),J.substring(L)]}function m(J,K){'/'===J.charAt(J.length-1)&&(J=J.slice(0,-1));var L=B[J];if(L)return L;var M=l(K),N=M[0],O=J.indexOf('/'),P,Q;0>O?(P=J,Q=''):('@'===J.charAt(0)&&(O=J.indexOf('/',O+1)),P=J.substring(0,O),Q=J.substring(O));var R=A[N+'/'+P];if(R){var S='/'+P+'$'+R;return Q&&(S+=Q),S}}function n(J,K){var L;if('.'===J.charAt(0))L=j(K,J);else if('/'===J.charAt(0))L=h(J.split('/'));else{for(var M=w.length,N=0;N<M;N++){var O=w[N]+J,P=n(O,K);if(P)return P}L=m(J,K)}if(L){var Q;void 0!==(Q=C[L])&&(!Q&&(Q='index'),L=j(L,Q));var R=D[L];R&&(L=R);var S=v[L];if(void 0===S){var T;if(null===(T=k(L))||void 0===(S=v[T]))return;L=T}return[L,S]}}function o(J,K){if(!J)throw a('');var L=n(J,K);if(!L)throw a(J,K);var M=L[0],N=z[M];if(void 0!==N)return N;if(F.hasOwnProperty(M))return F[M];var O=L[1];return N=new b(M),z[M]=N,N.load(O),N}function p(J,K){var L=o(J,K);return L.exports}function q(J,K){var L=!K||!1!==K.wait;return L&&!x?y.push([J,K]):void p(J,'/')}function r(){x=!0;for(var J,K;J=y.length;){K=y,y=[];for(var M,L=0;L<J;L++)M=K[L],q(M[0],M[1]);if(!x)break}}var t;if('undefined'!=typeof window){if(t=window,t.$_mod)return;t.global=t}var u,v={},w=[],x=!1,y=[],z={},A={},B={},C={},D={},E={},F={};b.cache=z;var G=b.prototype;G.load=function(J){var K=this.id;if(J&&J.constructor===Function){var L=K.lastIndexOf('/'),M=K.substring(0,L),N=E[M]||(E[M]={}),O=function(P){var Q=N[P]||(N[P]=o(P,M));return Q.exports};O.resolve=function(P){if(!P)throw a('');var Q=n(P,M);if(!Q)throw a(P,M);return Q[0]},O.cache=z,O.runtime=u,this.exports={},J.call(this,O,this.exports,this,K,M)}else this.exports=J;this.loaded=!0};var H=0,I=function(){H--,H||r()};G.__runtime=u={def:function(J,K,L){var M=L&&L.globals;if(v[J]=K,M)for(var N=t||global,O=0;O<M.length;O++){var P=M[O],Q=F[J]=o(J);N[P]=Q.exports}},installed:function(J,K,L){A[J+'/'+K]=L},run:q,main:function(J,K){C[J]=K},remap:function(J,K){D[J]=K},builtin:function(J,K){B[J]=K},require:p,resolve:n,join:j,ready:r,searchPath:function(J){w.push(J)},loaderMetadata:function(J){G.__loaderMetadata=J},pending:function(){return x=!1,H++,{done:I}}},t?t.$_mod=u:module.exports=u})();
$_mod.def('/markojs-website$1.0.0/components/site-search/component-browser',function(a,b,c){c.exports={focus(g){var h=this.getEl('input');g.target!=h&&h.focus()},grow(){this.el.classList.add('large'),this.getEl('input').value=''},shrink(){this.el.classList.remove('large')},search(g){var h=this.getEl('input').value;h=encodeURIComponent(h.replace(/\s+/g,' ')).replace(/\%20/g,'+'),window.location.href='https://google.com/search?q='+h+'+site:markojs.com',g.preventDefault()}}});
$_mod.remap("/marko$4.0.0/components/index","/marko$4.0.0/components/index-browser");
$_mod.remap("/marko$4.0.0/components/init-components","/marko$4.0.0/components/init-components-browser");
$_mod.installed("marko$4.0.0","warp10","1.3.3");
$_mod.def('/warp10$1.3.3/src/finalize',function(a,b,c){function f(j,k,l){for(var m=j,n=0;n<l;n++)m=m[k[n]];return m}function g(j){if('Date'===j.type)return new Date(j.value);throw new Error('Bad type')}var h=Array.isArray;c.exports=function(k){if(!k)return k;var l=k.$$;if(l){var n,m=k.o;if(l&&(n=l.length))for(var o=0;o<n;o++){var r,p=l[o],q=p.r;r=h(q)?f(m,q,q.length):g(q);var s=p.l,t=s.length-1;if(-1==t){m=k.o=r;break}else{var u=f(m,s,t);u[s[t]]=r}}return l.length=0,null==m?null:m}return k}});
$_mod.def("/warp10$1.3.3/finalize",function(a,b,c){c.exports=a("/warp10$1.3.3/src/finalize")});
$_mod.remap("/marko$4.0.0/components/util","/marko$4.0.0/components/util-browser");
$_mod.def('/marko$4.0.0/components/util-browser',function(a,b){function h(r){var s=r._w;if(s)for(s.a(),r._w=null;s=s._;)s._=null,s.a()}function i(r){for(var s=r.firstChild;s;)1==s.nodeType&&(h(s),i(s)),s=s.nextSibling}var m=window.$MG||(window.$MG={uid:0}),n=m.uid++,p=document,q={};['create','render','update','mount','destroy'].forEach(function(r){q[r]='on'+r[0].toUpperCase()+r.substring(1)}),b.f=n,b.g={},b.i=function(r,s){if(r){var t='string'==typeof r?(s||p).getElementById(r):r;if(t){for(var v,u=t._w;u&&(v=u._,v);)u=v;return u}}},b.j=function(r,s,t,u){var v=r[q[s]];v&&v.call(r,t,u),r.emit(s,t,u)},b.k=h,b.l=i,b.m=function(){return'b'+m.uid++},b.o=function(r,s){return r.getElementById(s)},b.p=function(r,s,t){if(s){var u=r.id;return t?[s,u,t]:[s,u]}}});
$_mod.def('/marko$4.0.0/components/bubble',function(a,b,c){c.exports=['click','dblclick','mousedown','mouseup','dragstart','drag','drop','dragend','keydown','keypress','keyup','select','change','submit','reset','input','attach','detach']});
$_mod.def('/marko$4.0.0/components/event-delegation',function(a,b){function f(o,p){var q=o._vattrs;if(q)return q[p];var r=o.getAttribute(p);if(r){var s=r.split(' ');return 3==s.length&&(s[2]=parseInt(s[2],10)),s}}function g(o,p,q){var r=p[0],s=p[1],t=p[2],u=l[s];if(u){var v=u[r];if(!v)throw Error('Method not found: '+r);null!=t&&'number'==typeof t&&(t=u.q[t],!m(t)&&(t=[t])),t?v.apply(u,t.concat(q,o)):v.call(u,q,o)}}function h(o){var p=o.body;a('/marko$4.0.0/components/bubble').forEach(function(r){p.addEventListener(r,function(s){var t=!1,u=s.stopPropagation;s.stopPropagation=function(){u.call(s),t=!0};var v=s.target;if(v){var x;do if((x=f(v,'data-_on'+r))&&(g(v,x,s),t))break;while((v=v.parentNode)&&v.getAttribute)}})})}function i(){}var j=a('/marko$4.0.0/components/util-browser'),k=j.f,l=j.g,m=Array.isArray,n='$MED'+k;b.s=i,b.u=i,b.v=g,b.w=f,b.x=function(o){o[n]||(o[n]=!0,h(o))}});
$_mod.installed("marko$4.0.0","events-light","1.0.5");
$_mod.main("/events-light$1.0.5","src/index");
$_mod.def('/events-light$1.0.5/src/index',function(a,b,c){function f(n){return'function'==typeof n}function h(n){if(!f(n))throw TypeError('Invalid listener')}function j(n,o,p){switch(p.length){case 1:o.call(n);break;case 2:o.call(n,p[1]);break;case 3:o.call(n,p[1],p[2]);break;default:o.apply(n,m.call(p,1));}}function k(n,o,p,q){h(p);var r=n.$e||(n.$e={}),s=r[o];return s?f(s)?r[o]=q?[p,s]:[s,p]:q?s.unshift(p):s.push(p):r[o]=p,n}function l(){this.$e=this.$e||{}}var m=Array.prototype.slice;l.EventEmitter=l,l.prototype={$e:null,emit:function(n){var o=arguments,p=this.$e;if(p){var q=p&&p[n];if(!q){if('error'===n){var r=o[1];if(!(r instanceof Error)){var s=r;r=new Error('Error: '+s),r.context=s}throw r}return!1}if(f(q))j(this,q,o);else{q=m.call(q);for(var v,t=0,u=q.length;t<u;t++)v=q[t],j(this,v,o)}return!0}},on:function(n,o){return k(this,n,o,!1)},prependListener:function(n,o){return k(this,n,o,!0)},once:function(n,o){function p(){this.removeListener(n,p),o&&(o.apply(this,arguments),o=null)}return h(o),this.on(n,p),this},removeListener:function(n,o){h(o);var p=this.$e,q;if(p&&(q=p[n]))if(f(q))q===o&&delete p[n];else for(var r=q.length-1;0<=r;r--)q[r]===o&&q.splice(r,1);return this},removeAllListeners:function(n){var o=this.$e;o&&delete o[n]},listenerCount:function(n){var o=this.$e,p=o&&o[n];return p?f(p)?1:p.length:0}},c.exports=l});
$_mod.def("/marko$4.0.0/runtime/events",function(a,b,c){var f=a("/events-light$1.0.5/src/index");c.exports=new f});
$_mod.def('/marko$4.0.0/components/nextRepeatedId',function(a,b,c){var f='$rep';c.exports=function(h,i,j){var k=h.global[f]||(h.global[f]={}),l=i+'-'+j,m=k[l];return m=null==m?k[l]=0:++k[l],l.slice(0,-2)+'['+m+']'}});
$_mod.installed("marko$4.0.0","raptor-util","3.1.0");
$_mod.def("/raptor-util$3.1.0/extend",function(a,b,c){c.exports=function(g,h){if(g||(g={}),h)for(var i in h)h.hasOwnProperty(i)&&(g[i]=h[i]);return g}});
$_mod.remap("/marko$4.0.0/components/registry","/marko$4.0.0/components/registry-browser");
$_mod.remap("/marko$4.0.0/components/loadComponent","/marko$4.0.0/components/loadComponent-dynamic");
$_mod.def("/marko$4.0.0/components/loadComponent-dynamic",function(a,b,c){"use strict";c.exports=function(g){return a(g)}});
$_mod.def("/marko$4.0.0/components/State",function(a,b,c){function f(i,j){var k=i.constructor.prototype;j in k||Object.defineProperty(k,j,{get:function(){return this.y[j]},set:function(l){this.z(j,l,!1)}})}function g(i,j){if(this.A=i,this.y=j||{},this.B=!1,this.C=null,this.D=null,this.E=null,j)for(var k in j)f(this,k);Object.seal(this)}var h=a("/raptor-util$3.1.0/extend");g.prototype={F:function(){var i=this;i.B=!1,i.C=null,i.D=null,i.E=null},G:function(i){var j=this,k,l=this.y;for(k in l)k in i||j.z(k,void 0,!1,!1);for(k in i)j.z(k,i[k],!0,!1)},z:function(i,j,k,l){var m=this.y;if(k&&f(this,i),l){var n=this.E||(this.E={});n[i]=!0}else if(m[i]===j)return;this.B||(this.B=!0,this.C=m,this.y=m=h({},m),this.D={},this.A.H()),this.D[i]=j,void 0===j?delete m[i]:m[i]=j},toJSON:function(){return this.y}},c.exports=g});
$_mod.def('/marko$4.0.0/runtime/dom-insert',function(a,b,c){function f(l){if('string'==typeof l){var m=l;if(l=document.getElementById(m),!l)throw Error('Not found: '+m)}return l}function g(l){k(l),j(l)}var h=a('/raptor-util$3.1.0/extend'),i=a('/marko$4.0.0/components/util-browser'),j=i.k,k=i.l;c.exports=function(l,m,n){h(l,{appendTo:function(o){o=f(o);var p=m(this,o);return o.appendChild(p),n(this,o)},prependTo:function(o){o=f(o);var p=m(this,o);return o.insertBefore(p,o.firstChild||null),n(this,o)},replace:function(o){o=f(o);var p=m(this,o);return g(o),o.parentNode.replaceChild(p,o),n(this,o)},replaceChildrenOf:function(o){o=f(o);for(var r,p=m(this,o),q=o.firstChild;q;)r=q.nextSibling,1==q.nodeType&&g(q),q=r;return o.innerHTML='',o.appendChild(p),n(this,o)},insertBefore:function(o){o=f(o);var p=m(this,o);return o.parentNode.insertBefore(p,o),n(this,o)},insertAfter:function(o){o=f(o);var p=m(this,o);p=p;var q=o.nextSibling,r=o.parentNode;return q?r.insertBefore(p,q):r.appendChild(p),n(this,o)}})}});
$_mod.main("/marko$4.0.0","runtime/index");
$_mod.remap("/marko$4.0.0/runtime/env-init",!1);
$_mod.def("/marko$4.0.0/runtime/createOut",function(a,b,c){function g(i){return h(i)}var h;g.I=function(i){h=i},c.exports=g});
$_mod.main("/marko$4.0.0/runtime/loader","");
$_mod.remap("/marko$4.0.0/runtime/loader/index","/marko$4.0.0/runtime/loader/index-browser");
$_mod.remap("/marko$4.0.0/runtime/loader/index-browser","/marko$4.0.0/runtime/loader/index-browser-dynamic");
$_mod.def("/marko$4.0.0/runtime/loader/index-browser-dynamic",function(a,b,c){"use strict";c.exports=function(g){return a(g)}});
$_mod.def('/marko$4.0.0/runtime/index',function(a,b){'use strict';({}),b.createOut=a('/marko$4.0.0/runtime/createOut'),b.load=a('/marko$4.0.0/runtime/loader/index-browser-dynamic'),b.events=a('/marko$4.0.0/runtime/events')});
$_mod.def('/marko$4.0.0/runtime/RenderResult',function(a,b,c){function f(k){var l=k.J;if(0===l.length)throw Error('No component');return l}function g(k){this.out=this.K=k,this.J=void 0}var h=a('/marko$4.0.0/runtime/dom-insert'),i=[];c.exports=g;var j=g.prototype={getComponent:function(){return this.getComponents()[0]},getComponents:function(k){if(!this.J)throw Error('Not added to DOM');var l=f(this),m=[];return l.forEach(function(n){var o=n.A;(!k||k(o))&&m.push(o)}),m},afterInsert:function(k){var l=this.K,m=l.global.components;return m?(this.J=m.J,m.L(k)):this.J=i,this},getNode:function(k){return this.K.M(k)},getOutput:function(){return this.K.N()},toString:function(){return this.K.toString()},document:'undefined'!=typeof document&&document};h(j,function(l,m){return l.getNode(m.ownerDocument)},function(l,m){return l.afterInsert(m.ownerDocument)})});
$_mod.installed("marko$4.0.0","listener-tracker","2.0.0");
$_mod.main("/listener-tracker$2.0.0","lib/listener-tracker");
$_mod.def("/listener-tracker$2.0.0/lib/listener-tracker",function(a,b,c){function f(o){return!o.once}function g(o){this._=o,this.a=[],this.b=null}function h(o){this._=o}function j(){this.d=[]}var k=0,l=1,n="destroy";g.prototype={c:function(o,p){var q=this._,r=this.a;this.a=r.filter(function(v){var w=v[k],x=v[l],y=v[2];if(p){if(y&&o(w,y))return q.removeListener(w,y),!1;}else if(o(w,x))return q.removeListener(w,y||x),!1;return!0});var s=this.b;if(!this.a.length&&s){var t=this,u=s.d;s.d=u.filter(function(v){return v!==t})}},on:function(o,p){return this._.on(o,p),this.a.push([o,p]),this},once:function(o,p){var q=this,r=function(){q.c(function(s,t){return r===t},!0),p.apply(this,arguments)};return this._.once(o,r),this.a.push([o,p,r]),this},removeListener:function(o,p){return"function"==typeof o&&(p=o,o=null),p&&o?this.c(function(q,r){return o===q&&p===r}):p?this.c(function(q,r){return p===r}):o&&this.removeAllListeners(o),this},removeAllListeners:function(o){var p=this.a,q=this._;if(o)this.c(function(t){return o===t});else{for(var s,r=p.length-1;0<=r;r--)s=p[r],q.removeListener(s[k],s[l]);this.a.length=0}return this}},h.prototype={on:function(o,p){return this._.addEventListener(o,p),this},once:function(o,p){var q=this,r=function(){q._.removeEventListener(o,r),p()};return this._.addEventListener(o,r),this},removeListener:function(o,p){return this._.removeEventListener(o,p),this}},j.prototype={subscribeTo:function(o,p){for(var r,s,w,q=!p||!1!==p.addDestroyListener,t=this.d,u=0,v=t.length;u<v;u++)if(w=t[u],w._===o){r=w;break}return r||(f(o)&&(s=new h(o)),r=new g(s||o),q&&!s&&r.once(n,function(){r.removeAllListeners();for(var x=t.length-1;0<=x;x--)if(t[x]._===o){t.splice(x,1);break}}),r.b=this,t.push(r)),r},removeAllListeners:function(o,p){var q=this.d,r;if(o)for(r=q.length-1;0<=r;r--){var s=q[r];if(s._===o){s.removeAllListeners(p),s.a.length||q.splice(r,1);break}}else{for(r=q.length-1;0<=r;r--)q[r].removeAllListeners();q.length=0}}},b=c.exports=j,b.wrap=function(o){var p,q;return f(o)&&(p=new h(o)),q=new g(p||o),p||o.once(n,function(){q.a.length=0}),q},b.createTracker=function(){return new j}});
$_mod.def("/raptor-util$3.1.0/inherit",function(a,b,c){function f(g,h,j){var k=g.prototype,l=g.prototype=Object.create(h.prototype,{constructor:{value:g,writable:!0,configurable:!0}});if(k&&!1!==j)for(var m=Object.getOwnPropertyNames(k),n=0;n<m.length;n++){var o=m[n],p=Object.getOwnPropertyDescriptor(k,o);Object.defineProperty(l,o,p)}return g.$super=h,g.prototype=l,g}c.exports=f,f._inherit=f});
$_mod.def('/marko$4.0.0/components/update-manager',function(a,b){'use strict';function f(){if(n.length)try{h(n)}finally{l=!1}}function g(){l||(l=!0,p(f))}function h(s){for(var u,t=0;t<s.length;t++)u=s[t],u.O();s.length=0}var l=!1,m=[],n=[],o=window,p=o.setImmediate;if(!p)if(o.postMessage){var q=[],r='si';o.addEventListener('message',function(s){var t=s.source;if((t==o||!t&&s.data===r)&&(s.stopPropagation(),0<q.length)){var u=q.shift();u()}},!0),p=function(s){q.push(s),o.postMessage(r,'*')}}else p=setTimeout;b.Q=function(s){var t=m.length;if(t){var u=m[t-1];u.P?u.P.push(s):u.P=[s]}else g(),n.push(s)},b.R=function(s){var t={P:null};m.push(t);try{s()}finally{try{t.P&&h(t.P)}finally{m.length--}}}});
$_mod.def("/marko$4.0.0/runtime/vdom/VNode",function(a,b,c){function f(h,i){h.namespaceURI=i;for(var j=h.S;j;)j.T&&f(j,i),j=j.U}function g(){}g.prototype={V:function(h){this.W=h,this.X=0,this.S=void 0,this.Y=void 0,this.Z=void 0,this.U=void 0},get firstChild(){var h=this.S;if(h&&h.__){var i=h.firstChild;return i||h.nextSibling}return h},get nextSibling(){var h=this.U;if(!h){var j=this.Z;if(j&&j.__)return j.nextSibling}else if(h.__){var i=h.firstChild;return i||h.nextSibling}return h},_a:function(h){if(this.X++,!this._b){var j;h.T&&(j=this.namespaceURI)&&!h.namespaceURI&&f(h,j);var k=this.Y;h.Z=this,k?k.U=h:this.S=h,this.Y=h}else if(h._c){var i=h.nodeValue;this._d=(this._d||"")+i}else throw TypeError();return h},_e:function(){return this.X===this.W&&this.Z?this.Z._e():this}},c.exports=g});
$_mod.def('/marko$4.0.0/runtime/vdom/VElement',function(a,b,c){function f(v,w){var x=v['data-_noupdate'];return x&&(w&&(v=m({},v)),x.forEach(function(y){delete v[y]})),v}function g(v,w){return!0===w?'':'object'===v?JSON.stringify(w):w.toString()}function h(v){m(this,v),this.Z=void 0,this.U=void 0}function j(v,w,x,y){var z,A;'svg'===v?z='http://www.w3.org/2000/svg':'math'===v?z='http://www.w3.org/1998/Math/MathML':'textarea'===v||'TEXTAREA'===v?A=!0:void 0;this.V(x),y&&(!w&&(w={}),w[s]=y),this._f=w||r,this._b=A,this.namespaceURI=z,this.nodeName=v,this._d=void 0,this._g=y}var k=a('/marko$4.0.0/runtime/vdom/VNode'),l=a('/raptor-util$3.1.0/inherit'),m=a('/raptor-util$3.1.0/extend'),n=Object.defineProperty,o='http://www.w3.org/1999/xlink',p='xlink:href',q='href',r=Object.freeze({}),s='data-_mc',t=/^data-_/;j.prototype={_h:!0,nodeType:1,T:!0,_i:function(){return new h(this)},e:function(v,w,x,y){var z=this._a(new j(v,w,x,y));return 0===x?this._e():z},n:function(v){return this._a(v._i()),this._e()},actualize:function(v){var w,x=this.namespaceURI,y=this.nodeName;w=x?v.createElementNS(x,y):v.createElement(y);var z=this._f;for(var A in z){var B=z[A];if(!('_'==A[5]&&t.test(A))&&!1!==B&&null!=B){var C=typeof B;'string'!=C&&(B=g(C,B)),A==p?w.setAttributeNS(o,q,B):w.setAttribute(A,B)}}if(this._b)w.value=this._d;else for(var D=this.firstChild;D;)w.appendChild(D.actualize(v)),D=D.nextSibling;return w._vattrs=z,w},hasAttributeNS:function(v,w){var x=this._f[w];return null!=x&&!1!==x},getAttribute:function(v){return this._f[v]},isSameNode:function(v){if(1==v.nodeType){var w=this._g;if(w){var x,y=v.V?v._g:(x=v._vattrs)&&x[s];return w===y}}return!1}},l(j,k);var u=h.prototype=j.prototype;['checked','selected','disabled'].forEach(function(v){n(u,v,{get:function(){var w=this._f[v];return!1!==w&&null!=w}})}),n(u,'id',{get:function(){return this._f.id}}),n(u,'value',{get:function(){var v=this._d;return null==v&&(v=this._f.value),null==v?'':v.toString()}}),j._j=function(v,w){var y,z,x=w._f||w._vattrs,A=v._vattrs;if(A){if(A===x)return;A=f(A,!0)}else{A={};var B=v.attributes;for(z=B.length-1;0<=z;--z){var C=B[z];if(!1!==C.specified){y=C.name;var D=C.namespaceURI;D===o?A[p]=C.value:A[y]=C.value}}f(A,!1)}for(y in x=f(x,!0),x){var E=x[y];if(y==p)null==E||!1===E?v.removeAttributeNS(o,q):A[y]!=E&&v.setAttributeNS(o,q,E);else if(null==E||!1===E)v.removeAttribute(y);else if(A[y]!==E){if('_'==y[5]&&t.test(y))continue;var F=typeof E;'string'!=F&&(E=g(F,E)),v.setAttribute(y,E)}}for(y in A)y in x||(y==p?v.removeAttributeNS(o,q):v.removeAttribute(y));v._vattrs=x},c.exports=j});
$_mod.installed("marko$4.0.0","morphdom","2.3.1");
$_mod.def('/morphdom$2.3.1/dist/morphdom-factory',function(a,b,c){'use strict';function f(y){!o&&q.createRange&&(o=q.createRange(),o.selectNode(q.body));var z;return o&&o.createContextualFragment?z=o.createContextualFragment(y):(z=q.createElement('body'),z.innerHTML=y),z.childNodes[0]}function g(y,z){var A=y.nodeName,B=z.nodeName;return!(A!==B)||z.actualize&&91>A.charCodeAt(0)&&90<B.charCodeAt(0)&&A===B.toUpperCase()}function h(y,z){return z&&z!==p?q.createElementNS(z,y):q.createElement(y)}function j(y,z){for(var B,A=y.firstChild;A;)B=A.nextSibling,z.appendChild(A),A=B;return z}function k(y,z,A){y[A]!==z[A]&&(y[A]=z[A],y[A]?y.setAttribute(A,''):y.removeAttribute(A,''))}function l(){}function m(y){return y.id}var o,p='http://www.w3.org/1999/xhtml',q='undefined'==typeof document?void 0:document,r=q?q.body||q.createElement('div'):{},s;s=r.hasAttributeNS?function(y,z,A){return y.hasAttributeNS(z,A)}:r.hasAttribute?function(y,z,A){return y.hasAttribute(A)}:function(y,z,A){return null!=y.getAttributeNode(z,A)};var t=s,u={OPTION:function(y,z){k(y,z,'selected')},INPUT:function(y,z){k(y,z,'checked'),k(y,z,'disabled'),y.value!==z.value&&(y.value=z.value),t(z,null,'value')||y.removeAttribute('value')},TEXTAREA:function(y,z){var A=z.value;if(y.value!==A&&(y.value=A),y.firstChild){if(''===A&&y.firstChild.nodeValue===y.placeholder)return;y.firstChild.nodeValue=A}},SELECT:function(y,z){if(!t(z,null,'multiple')){for(var D,B=0,C=z.firstChild;C;){if(D=C.nodeName,D&&'OPTION'===D.toUpperCase()){if(t(C,null,'selected')){break}B++}C=C.nextSibling}y.selectedIndex=B}}},v=1,w=3,x=8;c.exports=function(y){return function(A,B,C){function D(_){U?U.push(_):U=[_]}function E(_,aa){if(_.nodeType===v)for(var ca,ba=_.firstChild;ba;)ca=void 0,aa&&(ca=K(ba))?D(ca):(Q(ba),ba.firstChild&&E(ba,aa)),ba=ba.nextSibling}function F(_,aa,ba){!1===P(_)||(aa&&aa.removeChild(_),Q(_),E(_,ba))}function G(_){if(_.nodeType===v)for(var ba,aa=_.firstChild;aa;)ba=K(aa),ba&&(T[ba]=aa),G(aa),aa=aa.nextSibling}function H(_){M(_);for(var aa=_.firstChild;aa;){var ba=aa.nextSibling,ca=K(aa);if(ca){var da=T[ca];da&&g(aa,da)&&(aa.parentNode.replaceChild(da,aa),I(da,aa))}H(aa),aa=ba}}function I(_,aa,ba){var da,ca=K(aa);if(ca&&delete T[ca],!(B.isSameNode&&B.isSameNode(A))){if(!ba){if(!1===N(_,aa))return;if(y(_,aa),O(_),!1===R(_,aa))return}if('TEXTAREA'!==_.nodeName){var ga,ha,ia,ja,ea=aa.firstChild,fa=_.firstChild;outer:for(;ea;){for(ia=ea.nextSibling,ga=K(ea);fa;){if(ha=fa.nextSibling,ea.isSameNode&&ea.isSameNode(fa)){ea=ia,fa=ha;continue outer}da=K(fa);var ka=fa.nodeType,la=void 0;if(ka===ea.nodeType&&(ka===v?(ga?ga!==da&&((ja=T[ga])?fa.nextSibling===ja?la=!1:(_.insertBefore(ja,fa),ha=fa.nextSibling,da?D(da):F(fa,_,!0),fa=ja):la=!1):da&&(la=!1),la=!1!==la&&g(fa,ea),la&&I(fa,ea)):(ka===w||ka==x)&&(la=!0,fa.nodeValue=ea.nodeValue)),la){ea=ia,fa=ha;continue outer}da?D(da):F(fa,_,!0),fa=ha}if(ga&&(ja=T[ga])&&g(ja,ea))_.appendChild(ja),I(ja,ea);else{var ma=L(ea);!1!==ma&&(ma&&(ea=ma),ea.actualize&&(ea=ea.actualize(_.ownerDocument||q)),_.appendChild(ea),H(ea))}ea=ia,fa=ha}for(;fa;)ha=fa.nextSibling,(da=K(fa))?D(da):F(fa,_,!0),fa=ha}var na=u[_.nodeName];na&&na(_,aa)}}if(C||(C={}),'string'==typeof B)if('#document'===A.nodeName||'HTML'===A.nodeName){var J=B;B=q.createElement('html'),B.innerHTML=J}else B=f(B);var U,K=C.getNodeKey||m,L=C.onBeforeNodeAdded||l,M=C.onNodeAdded||l,N=C.onBeforeElUpdated||l,O=C.onElUpdated||l,P=C.onBeforeNodeDiscarded||l,Q=C.onNodeDiscarded||l,R=C.onBeforeElChildrenUpdated||l,S=!0===C.childrenOnly,T={};G(A);var V=A,W=V.nodeType,X=B.nodeType;if(!S)if(W===v)X===v?!g(A,B)&&(Q(A),V=j(A,h(B.nodeName,B.namespaceURI))):V=B;else if(W===w||W===x){if(X===W)return V.nodeValue=B.nodeValue,V;V=B}if(V===B)Q(A);else if(I(V,B,S),U)for(var $,Y=0,Z=U.length;Y<Z;Y++)$=T[U[Y]],$&&F($,$.parentNode,!1);return!S&&V!==A&&A.parentNode&&(V.actualize&&(V=V.actualize(A.ownerDocument||q)),A.parentNode.replaceChild(V,A)),V}}});
$_mod.def("/morphdom$2.3.1/factory",function(a,b,c){c.exports=a("/morphdom$2.3.1/dist/morphdom-factory")});
$_mod.def('/marko$4.0.0/components/Component',function(a,b,c){'use strict';function f(N){N()}function g(N,O){for(var P=O._w;P;){var Q=P.id,R=N._k[Q];if(R&&P._l==R.A._l)break;var S=P._;if(S)P=S;else{P.a();break}}}function h(N,O,P,Q){P.push(N),Q&&(P=Q.concat(P));var R=t[N._m],S=R[O];if(!S)throw Error('Method not found: '+O);S.apply(R,P)}function j(N,O,P){var Q=N.id,R=null==O?Q:Q+'-'+O;return null!=P&&(R+='['+P+']'),R}function l(N,O,P){var Q,R;for(var S in O)if(O.hasOwnProperty(S)){if(Q=N['update_'+S],Q)(R||(R=[])).push([S,Q]);else return}return R&&(R.forEach(function(U){var W=U[0];Q=U[1];var X=O[W],Y=P[W];Q.call(N,X,Y)}),u(N,'update'),N.F()),!0}function m(N,O,P){if(O!=P){if(null==O||null==P)return!0;var Q=Object.keys(O),R=Object.keys(P),S=Q.length;if(S!==R.length)return!0;for(var U,T=0;T<S;T++)if(U=Q[T],O[U]!==P[U])return!0}return!1}function n(N){1==N.nodeType&&v(N)}function o(N){return G.u(N)}function p(N,O){y.call(this),this.id=N,this.el=this._n=this._o=this._p=this._q=this.q=this._r=this._m=this._s=null,this._t=this._u=this.B=this._v=!1,this._w=O}var q=a('/marko$4.0.0/runtime/dom-insert'),r=a('/marko$4.0.0/runtime/index'),s=a('/marko$4.0.0/components/util-browser'),t=s.g,u=s.j,v=s.k,w=s.l,x=s.o,y=a('/events-light$1.0.5/src/index'),z=a('/marko$4.0.0/runtime/RenderResult'),A=a('/listener-tracker$2.0.0/lib/listener-tracker'),B=a('/raptor-util$3.1.0/inherit'),C=a('/marko$4.0.0/components/update-manager'),D=a('/marko$4.0.0/runtime/vdom/VElement')._j,E=a('/morphdom$2.3.1/factory'),F=E(D),G=a('/marko$4.0.0/components/event-delegation'),H=Array.prototype.slice,I=!1,J,K={addDestroyListener:!1},L=y.prototype.emit,M;p.prototype=M={_x:!0,subscribeTo:function(N){if(!N)throw TypeError();var O=this._p||(this._p=new A),P=N._x?J:K;return O.subscribeTo(N,P)},emit:function(N){var O=this._r,P;if(O&&(P=O[N])){var Q=P[0],R=P[1],S=H.call(arguments,1);h(this,Q,S,R)}return this.listenerCount(N)?L.apply(this,arguments):void 0},getElId:function(N,O){return j(this,N,O)},getEl:function(N,O){var P=this._w;return null==N?this.el||x(P,j(this)):x(P,j(this,N,O))},getEls:function(N){for(var Q,O=[],P=0;Q=this.getEl(N,P);)O.push(Q),P++;return O},getComponent:function(N,O){return t[j(this,N,O)]},getComponents:function(N){for(var Q,O=[],P=0;Q=t[j(this,N,P)];)O.push(Q),P++;return O},destroy:function(){if(!this._t){var N=this.els;this.a();var O=this._y;O&&O.forEach(function(P){P._z()}),N.forEach(function(P){w(P);var Q=P.parentNode;Q&&Q.removeChild(P)})}},a:function(){if(!this._t){u(this,'destroy'),this._t=!0,this.el=null,this._A();var N=this._p;N&&(N.removeAllListeners(),this._p=null),delete t[this.id]}},isDestroyed:function(){return this._t},get state(){return this._n},set state(N){var O=this._n;(O||N)&&(!O&&(O=this._n=new this._B(this)),O.G(N||{}),O.B&&this.H(),!N&&(this._n=null))},setState:function(N,O){var P=this._n;if('object'==typeof N){var Q=N;for(var R in Q)Q.hasOwnProperty(R)&&P.z(R,Q[R],!0)}else P.z(N,O,!0)},setStateDirty:function(N,O){var P=this._n;1==arguments.length&&(O=P[N]),P.z(N,O,!0,!0)},replaceState:function(N){this._n.G(N)},get input(){return this._C},set input(N){this._v?this._C=N:this._D(N)},_D:function(N,O,P){O=O||this.onInput;var Q,R=this._C;return this._C=void 0,O&&(this._v=!0,Q=O.call(this,N||{},P),this._v=!1),N=this._s=Q||N,(this.B=m(this,R,N))&&this.H(),void 0===this._C&&(this._C=N),N},forceUpdate:function(){this.B=!0,this.H()},H:function(){this._u||C.Q(this)},update:function(){if(!this._t&&this._E){var N=this._C,O=this._n;!this.B&&O&&O.B&&l(this,O.D,O.C,O)&&(O.B=!1),this._E&&!1!==this.shouldUpdate(N,O)&&this._F(),this.F()}},get _E(){return this.B||this._n&&this._n.B},F:function(){this.B=!1,this._u=!1,this._s=null;var N=this._n;N&&N.F()},shouldUpdate:function(){return!0},j:function(N,O,P){u(this,N,O,P)},_F:function(N){N&&(this.input=N);var O=this,P=O._G;if(!P)throw TypeError();var Q={$w:O},R=O._H({}),S=O._w;N=this._s||this._C,C.R(function(){function T(da){var fa=da.id;if($&&fa){var ga=$._I[fa];if(ga&&!ga._J)return I;g($,da)}}function U(da){var ea=da.id;if($&&ea){var fa=$._I[ea];if(fa&&fa._J)return I}}function V(da){G.s(da,X)}var W=P.createOut||r.createOut,X=W(Q);X._w=O._w,P(N,X);for(var aa,ca,Y=new z(X),Z=X.N(),$=X.global.components,_={onBeforeNodeDiscarded:o,onNodeDiscarded:n,onNodeAdded:V,onBeforeElUpdated:T,onBeforeElChildrenUpdated:U},ba=Z.firstChild;ba;)ca=ba.id,ca&&(aa=R[ca],aa&&F(aa,ba,_)),ba=ba.nextSibling;Y.afterInsert(S),X.emit('_K')}),this.F()},_H:function(N){var O,P,Q=this.els;for(O=0,P=Q.length;O<P;O++){var R=Q[O];N[R.id]=R}var S=this._y;if(S)for(O=0,P=S.length;O<P;O++){var T=S[O];T._H(N)}return N},_A:function(){var N=this._q;N&&(N.forEach(f),this._q=null)},get _L(){var N=this._n;return N&&N.y},_M:function(N,O){if(N){var P=this._r={};this._m=O,N.forEach(function(Q){var R=Q[0],S=Q[1],T=Q[2];P[R]=[S,T]})}}},M.elId=M.getElId,M.O=M.update,M._z=M.destroy,q(M,function(O){var P=this.els,Q=P.length;if(1<Q){var R=O._w.createDocumentFragment();return P.forEach(function(S){R.appendChild(S)}),R}return P[0]},function(O){return O}),B(p,y),c.exports=p});
$_mod.def('/marko$4.0.0/components/defineComponent',function(a,b,c){'use strict';var f,g,h;c.exports=function(j,k){function l(p,q){g.call(this,p,q)}function m(){f.apply(this,arguments)}if(j._x)return j;var n,o;if('function'==typeof j)n=j,o=n.prototype;else if('object'==typeof j)n=function(){},o=n.prototype=j;else throw TypeError();return o._x||h(n,g),o=l.prototype=n.prototype,o.onCreate=o.onCreate||n,l._x=!0,h(m,f),o._B=m,o._G=k,l},f=a('/marko$4.0.0/components/State'),g=a('/marko$4.0.0/components/Component'),h=a('/raptor-util$3.1.0/inherit')});
$_mod.def('/marko$4.0.0/components/registry-browser',function(a,b){function g(o){var p=m[o];if(!p){if(p=l[o],p=p?p():j(o),!p)throw Error('Not found: '+o);m[o]=p}return p}function h(o){var p=n[o];return p?p:(p=g(o),p=p.Component||p,p._x||(p=k(p,p.renderer)),p.prototype._l=o,n[o]=p,p)}var j=a('/marko$4.0.0/components/loadComponent-dynamic'),k=a('/marko$4.0.0/components/defineComponent'),l={},m={},n={};b._N=function(o,p){return p(),l[o]=p,delete m[o],delete n[o],o},b._O=function(o,p){var q=h(o);return new q(p)}});
$_mod.def('/marko$4.0.0/components/ComponentDef',function(a,b,c){'use strict';function f(n,p,q,r,s){this.K=q,this._P=r,this._Q=s,this.A=n,this.id=p,this._o=this._R=this._S=this.q=void 0,this._T=!1,this._U=0}var g=a('/marko$4.0.0/components/nextRepeatedId'),h=/\[\]$/,i=a('/marko$4.0.0/components/util-browser'),j=i.m,k=i.p,l=a('/raptor-util$3.1.0/extend'),m=a('/marko$4.0.0/components/registry-browser');f.prototype={_V:function(){this._P.length=this._Q},_W:function(n){var p=this._R;p?p.push(n):this._R=[n]},elId:function(n){var p=this.id;return null==n?p:'string'==typeof n&&h.test(n)?g(this.K,p,n):p+'-'+n},e:function(n,p,q,r){p&&(this._S||(this._S=[])).push([n,p,q,r])},_X:function(){var n=this.id;return n?n+'-c'+this._U++:j(this.K)},d:function(n,p){return k(this,n,p)}},f._Y=function(n,p){var q=n[0],r=p[n[1]],s=n[2],t=n[3],u=t.s,v=t.w,w=r&&m._O(r,q);if(t.b&&(w.q=t.b),w._u=!0,u){var x=t.u;x&&x.forEach(function(A){u[A]=void 0}),w.state=u}w._C=s,v&&l(w,v);var y=t.p,z=t.e;return w._M(z,y),{A:w,_o:t.r,_S:t.d}},c.exports=f});
$_mod.def('/marko$4.0.0/components/init-components-browser',function(a,b){'use strict';function f(v,w,x){var y=v[w];if(!y)throw Error('Method not found: '+w);y.apply(v,x)}function g(v,w,x){return v.addEventListener(w,x,!1),function(){v.removeEventListener(w,x)}}function h(v,w,x,y,z,A){var B=g(w,x,function(C){var D=[C,w];z&&(D=z.concat(D)),f(v,y,D)});A.push(B)}function j(v,w){var x=v.A;if(x&&x._x){var y=v._S;x.F(),x._w=w;var z=v._T,A=x.id,B=v._o;if(B){var C,D=[];B.forEach(function(G){var H=A+'-'+G,I=s[H];if(I)I._=x,C?C.push(I):C=x._y=[I];else{var J=t(w,H);J&&(J._w=x,D.push(J))}}),x.el=D[0],x.els=D,s[A]=x}else if(!z){var E=t(w,A);E._w=x,x.el=E,x.els=[E],s[A]=x}if(z&&x._A(),y){var F=[];y.forEach(function(G){var H=G[0],I=G[1],J=t(w,G[2]),K=G[3];h(x,J,H,I,K,F)}),F.length&&(x._q=F)}z?x.j('update'):(q.emit('mountComponent',x),x.j('mount'))}}function k(v,w){n.x(w),w=w||p;for(var z,x=0,y=v.length;x<y;x++)z=v[x],z._R&&k(z._R,w),j(z,w)}function l(v,w){if(!v)return v=o.$components,void(v?v.forEach&&v.forEach(function(z){l(z,w)}):o.$components={concat:l});n.x(w||p),v=m(v);var x=v.w,y=v.t;x.forEach(function(z){z=u._Y(z,y),j(z,w||p)})}var m=a('/warp10$1.3.3/finalize'),n=a('/marko$4.0.0/components/event-delegation'),o=window,p=document,q=a('/marko$4.0.0/runtime/events'),r=a('/marko$4.0.0/components/util-browser'),s=r.g,t=r.o,u=a('/marko$4.0.0/components/ComponentDef');b._Z=k,b.a_=l});
$_mod.def("/marko$4.0.0/components/boot",function(a){a("/marko$4.0.0/components/init-components-browser").a_()});
$_mod.run("/marko$4.0.0/components/boot");
$_mod.def('/marko$4.0.0/components/ComponentsContext',function(a,b,c){'use strict';function f(j,k){k||(k=new g(null,null,j)),this.K=j,this._P=[k],this._I=i,this._k={}}var g=a('/marko$4.0.0/components/ComponentDef'),h=a('/marko$4.0.0/components/init-components-browser'),i={};f.prototype={get J(){return this._P[0]._R},aa:function(j){var k=this,l=k._P,m=l.length,n=l[m-1],o=j.id;o||(o=j.id=n._X());var p=new g(j,o,this.K,l,m);return this._k[o]=p,n._W(p),l.push(p),p},ab:function(){this._P=[new g(null,this.K)]},L:function(j){var k=this.J;k&&(h._Z(k,j),this.ab())},m:function(){var j=this._P,k=j[j.length-1];return k._X()},ac:function(j,k){var l=this._I;l===i&&(l=this._I={}),l[j]={_J:k}}},f.ad=function(j){var k=j.global;return j.data.components||k.components||(k.components=new f(j))},c.exports=f});
$_mod.def('/marko$4.0.0/components/renderer',function(a,b,c){function f(s,t,u){if('#'==t.charAt(0))return t.substring(1);var v;return v=n.test(t)?m(s,u,t):u+'-'+t,v}function g(s,t,u){var v=s._H({});for(var w in v){var x=v[w];t.element(x.tagName,{id:w}),u.ac(w)}return s.F(),!0}function h(s){var t=s.parentOut,u=s.out,v=u.global.components,w;if(v&&(w=v._P)){var x=new o(u,w[w.length-1]);u.data.components=x}u.data.$w=t.data.$w}function i(s,t,u){if('function'==typeof u){var v=u;u=u.prototype,u.onCreate=u.onCreate||v}u=u||{};var w=u.onInput,x=t.type,y=t.roots,z=t.id,A=t.split;return function(C,D){var E=D.global;D.isSync()||E[r]||(E[r]=!0,D.on('beginAsync',h));var I,J,K,F=E.$w,G=void 0!==F,H=z;if(F)H=F.id,I=!0,E.$w=null;else{var L=C&&C.$w||D.data.$w;if(L){K=L[0],K&&(K=K.id);var M=L[1];null!=M&&(M=M.toString()),H=H||f(D,M,K),J=L[2],delete C.$w}}var N=o.ad(D);if(H=H||N.m(),p.ae)F=p._O(u,H,C,D,x,J,K),C=F.af,F.af=void 0;else{if(!F&&(G&&(F=k[H],F&&F._l!==x&&(F=void 0)),F?I=!0:(I=!1,F=p._O(x,H),A&&(A=!1,q(F.constructor.prototype,u))),F._u=!0,F._M(J,K),I||l(F,'create',C,D),C=F._D(C,w,D),I&&(!F._E||!F.shouldUpdate(C,F._n))))return void g(F,D,N);l(F,'render',D)}var O=N.aa(F);O._o=y,O._T=I,s(C,D,O,F,F._L),O._V()}}var j=a('/marko$4.0.0/components/util-browser'),k=j.g,l=j.j,m=a('/marko$4.0.0/components/nextRepeatedId'),n=/\[\]$/,o=a('/marko$4.0.0/components/ComponentsContext'),p=a('/marko$4.0.0/components/registry-browser'),q=a('/raptor-util$3.1.0/extend'),r='$wa';c.exports=i,i.ag=f,i.ah=g,i.ai=h});
$_mod.def('/marko$4.0.0/components/index-browser',function(a,b){var g=a('/marko$4.0.0/runtime/events'),h=a('/marko$4.0.0/components/Component'),i=a('/marko$4.0.0/components/util-browser');b.onInitComponent=function(j){g.on('initComponent',j)},b.Component=h,b.getComponentForEl=i.i,b.init=a('/marko$4.0.0/components/init-components-browser').a_,b.c=a('/marko$4.0.0/components/defineComponent'),b.r=a('/marko$4.0.0/components/renderer'),b.rc=a('/marko$4.0.0/components/registry-browser')._N,window.aj=b});
$_mod.def('/markojs-website$1.0.0/components/site-header/component-browser',function(a,b,c){var f={base:'headspace',fixed:'headspace--fixed',hidden:'headspace--hidden'},g=(i)=>()=>window.requestAnimationFrame(i);c.exports={onMount(){var i=window.pageYOffset,j=this.el.offsetHeight,k=g(()=>{var l=window.pageYOffset;if(0>=l)this.reset();else if(!this.paused&&l>j){var m=Math.abs(l-i)>=3,n=l>i,o=i<=j;(m||n&&o)&&(l>i?this.hide():this.fix())}i=l});window.addEventListener('scroll',k)},reset(){this.removeClass(f.fixed),this.removeClass(f.hidden),this.emit('reset')},fix(){this.addClass(f.fixed),this.removeClass(f.hidden),this.emit('fix')},hide(){this.addClass(f.hidden),this.emit('hide')},addClass(i){this.el.classList.add(i)},removeClass(i){this.el.classList.remove(i)},pause(){this.paused=!0},resume(){setTimeout(()=>window.requestAnimationFrame(()=>{this.paused=!1}))}}});
$_mod.def('/markojs-website$1.0.0/components/doc-sidebar/components/version-switcher/component-browser',function(a,b,c){c.exports={switchVersion(g){var h=g.target.value;'current'!==h&&(g.target.value='current',window.location.href=h)}}});
$_mod.installed("markojs-website$1.0.0","marko","4.0.0");
$_mod.main("/marko$4.0.0/components","");
$_mod.def('/markojs-website$1.0.0/components/doc-sidebar/component-browser',function(b,c,d){var h=b('/marko$4.0.0/components/index-browser').getComponentForEl,i=[].forEach,j=[].filter,k=[].slice;d.exports={onMount(){this.preventOverscroll(),this.listenForHeaderChanges(),this.initScrollSpy()},initScrollSpy(){var l=[1,2,3,4,5,6].map((p)=>'.doc-content h'+p).join(','),m=k.call(document.querySelectorAll(l)),o=!1;m.length&&this.subscribeTo(window).on('scroll',()=>{o||(o=!0,setTimeout(()=>{var p=window.innerHeight/3,q,r;m.map((y)=>{var z=y.getBoundingClientRect().top;(null==r||z<p&&Math.abs(z)<Math.abs(r))&&(r=z,q=y)});var s=q.id,t=this.el.querySelector('a[href="#'+s+'"]')||this.el.querySelector('a.selected'),u=t,v=u.nextSibling;for(v&&i.call(v.querySelectorAll('a[href^=\\#]'),(y)=>y.classList.remove('selected'));u;){var w=u.closest('ul'),x=w&&j.call(w.querySelectorAll(':scope > li > a[href^=\\#]'),(y)=>y!==u);x&&x.forEach((y)=>y.classList.remove('selected')),u.classList.add('selected'),u=w&&w.previousSibling}this.scrollAnchorIntoView(t),o=!1},50))})},listenForHeaderChanges(){var l=h(document.querySelector('.site-header'));i.call(this.el.querySelectorAll('a[href^=\\#]'),(o)=>{this.subscribeTo(o).on('click',()=>{l.hide(),l.pause(),l.resume()})});var m=this.el.querySelector('a.selected');m&&this.subscribeTo(m).on('click',(o)=>{window.scrollTo(0,0),l.reset(),o.preventDefault()}),this.subscribeTo(l).on('reset',()=>{this.el.classList.remove('no-header'),this.el.classList.remove('fixed'),setTimeout(()=>this.el.classList.remove('transition'),0)}).on('fix',()=>{this.el.classList.remove('no-header'),this.el.classList.add('fixed'),setTimeout(()=>this.el.classList.add('transition'),0)}).on('hide',()=>{this.el.classList.add('no-header'),this.el.classList.add('fixed'),setTimeout(()=>this.el.classList.add('transition'),0)}).on('toggle-menu',()=>{this.el.classList.contains('show')?(this.el.classList.remove('show'),document.body.style.overflow=''):(this.el.classList.add('show'),document.body.style.overflow='hidden')}),window.pageYOffset>l.el.offsetHeight&&(this.el.classList.add('no-header'),this.el.classList.add('fixed'))},preventOverscroll(){var l=this.getEl('sidebar');this.subscribeTo(document.body).on('wheel',(m)=>{var o=m.deltaY,p=l.scrollTop+o,q=0,r=l.scrollHeight-l.offsetHeight,s=p<=q,t=p>=r;(0>o&&s||0<o&&t)&&(m.target===l||l.contains(m.target))&&(s&&l.scrollTop!=q?l.scrollTop=q:t&&l.scrollTop!=r&&(l.scrollTop=r),m.preventDefault())})},scrollAnchorIntoView(l){for(var t,m=this.getEl('sidebar'),o=l.offsetTop,p=m.scrollTop,q=m.offsetHeight,r=p+q,s=l.closest('li');t=s.parentNode.closest('ul'),t&&t.offsetHeight<q;)s=t;var u=s.offsetTop,v=s.offsetHeight;u>p&&u+v<r||(m.scrollTop=u+v/2-q/2)},hide(){this.el.classList.remove('show'),document.body.style.overflow=''}}});