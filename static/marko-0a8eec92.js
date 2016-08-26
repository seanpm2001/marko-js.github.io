$_mod.main("/marko$3.10.0","runtime/marko-runtime");
$_mod.main("/marko$3.10.0/runtime","marko-runtime");
$_mod.remap("/marko$3.10.0/runtime/loader","/marko$3.10.0/runtime/loader_browser");
$_mod.def("/marko$3.10.0/runtime/loader_browser",function(r,o,e,n,t){e.exports=function(o){return r(o)}});
$_mod.def("/marko$3.10.0/runtime/deprecate",function(n,e,o,r,t){var a="undefined"!=typeof console&&console.warn&&console;o.exports=function(n,e,o){if(a){var r=n[e],t=20,c=0;n[e]=function(){return t>c&&(++c===t&&(n[e]=r),a.warn(o,"Stack: "+(new Error).stack)),r.apply(n,arguments)}}}});
$_mod.def("/marko$3.10.0/runtime/helpers",function(r,n,e,t,o){"use strict";function i(r,n){var e;if(r)if("string"==typeof r)n.push(r);else if("number"==typeof(e=r.length))for(var t=0;e>t;t++)i(r[t],n);else if("object"===("undefined"==typeof r?"undefined":c(r)))for(var o in r)if(r.hasOwnProperty(o)){var f=r[o];f&&n.push(o)}}function f(r){var n=[];return i(r,n),n.join(" ")}function u(r){function n(r,e){n.renderer(r,e)}return n.renderer=function(e,t){var o=r.renderer||r.render;if("function"!=typeof o)throw new Error("Invalid tag handler: "+r);n.renderer=o,o(e,t)},n}function a(r){var n=r.renderer;return n?n:"function"==typeof r?r:"function"==typeof(n=r.render)?n:u(r)}function s(r,n,e,t){this.getLength=r,this.isLast=n,this.isFirst=e,this.getIndex=t}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol?"symbol":typeof r},p=r("/raptor-util$2.0.0/escapeXml"),y=p.attr,d=r("/marko$3.10.0/runtime/marko-runtime"),l=r("/raptor-util$2.0.0/attr"),h=r("/marko$3.10.0/helpers/notEmpty"),m=Array.isArray,v="style",g="class",b=/<\//g;e.exports=n={s:function(r){return null==r?"":r},fv:function(r,n){if(r){r.forEach||(r=[r]);for(var e=0,t=r.length,o=new s(function(){return t},function(){return e===t-1},function(){return 0===e},function(){return e});t>e;e++){var i=r[e];n(i,o)}}},f:function(r,n){if(m(r))for(var e=0;e<r.length;e++)n(r[e]);else"function"==typeof r&&r(n)},fp:function(r,n){if(r)for(var e in r)r.hasOwnProperty(e)&&n(e,r[e])},e:function(r){return!h(r)},ne:h,x:p,xa:y,xs:function(r){return"string"==typeof r?r.replace(b,"\\u003C/"):r},a:l,as:function(r){if("object"===("undefined"==typeof r?"undefined":c(r))){var n="";for(var e in r)n+=l(e,r[e]);return n}return"string"==typeof r?r:""},sa:function(r){if(!r)return"";if("string"==typeof r)return l(v,r,!1);if("object"===("undefined"==typeof r?"undefined":c(r))){var n=[];for(var e in r)if(r.hasOwnProperty(e)){var t=r[e];t&&n.push(e+":"+t)}return n?l(v,n.join(";"),!1):""}return""},ca:function(r){return r?"string"==typeof r?l(g,r,!1):l(g,f(r),!1):""},l:function(r){return"string"==typeof r?d.load(r):r},t:function(r,n,e,t){return r&&(r=a(r)),n||t?function(t,o,i,f){if(f&&f(o,t),n)if(e){var u=i[n];u?u.push(t):i[n]=[t]}else i[n]=t;else r(t,o)}:r},i:function(r,n,e){if(n){if("function"!=typeof n.render)throw new Error("Invalid template: "+n);return n.render(e,r),this}},m:function(r,n){for(var e in n)n.hasOwnProperty(e)&&!r.hasOwnProperty(e)&&(r[e]=n[e]);return r},cl:function(){return f(arguments)}};var w=r("/marko$3.10.0/runtime/deprecate"),k="https://github.com/marko-js/marko/issues/357";w(n,"e","empty() helper is deprecated. See: "+k),w(n,"ne","notEmpty() helper is deprecated. See: "+k)});
$_mod.def("/marko$3.10.0/runtime/marko-runtime",function(e,t,r,n,i){"use strict";function o(e,t,r,n){var i=new p;return r&&m(i.global,r),e(t,i),i.end().on("finish",function(){n(null,i.getOutput(),i)}).once("error",n)}function u(e,t,r){this.path=e,this._=t,this._options=r&&r.buffer===!1?null:h}function s(e){return function(t,r){e._(t,r)}}function l(e,t){if(e.render)return e;var r=e.create||e,n=r.loaded;return n||(n=r.loaded=new u(t),n.c(r)),n}function a(e,t,r){if(!e)throw new Error('"templatePath" is required');if(1===arguments.length);else if(2===arguments.length){var n=arguments[arguments.length-1];"string"!=typeof n&&(r=arguments[1],t=void 0)}else if(3!==arguments.length)throw new Error("Illegal arguments");var i;return i="string"==typeof e?l(c(e,t,r),e):e.render?e:l(e),r&&null!=r.buffer&&(i=new u(i.path,s(i),r)),i}t.c=function(e){return new u(e)};var c,f,h={buffer:!0},d=e("/async-writer$1.4.2/src/index"),g=e("/marko$3.10.0/runtime/helpers"),p=d.AsyncWriter,m=e("/raptor-util$2.0.0/extend");t.AsyncWriter=p;var _,w,b="stream";try{w=e.resolve(b)}catch(y){}w&&(_=e(w)),u.prototype={c:function(e){this._=e(g)},renderSync:function(e){var t=e||{},r=new p;return r.sync(),t.$global&&(r.global=m(r.global,t.$global),delete t.$global),this._(t,r),r.getOutput()},render:function(e,t,r){var n,i,u=this._;if(e?(n=e,(i=e.$global)&&delete e.$global):n={},"function"==typeof t)return o(u,n,i,t);var s=t,l=!1;return 3===arguments.length?(s&&s.isAsyncWriter||(s=new p(s),l=!0),s.on("finish",function(){r(null,s.getOutput(),s)}).once("error",r)):s&&s.isAsyncWriter||(s=d.create(s,this._options),l=!0),i&&m(s.global,i),u(n,s),l?s.end():s},stream:function(e){if(!_)throw new Error("Module not found: stream");return new f(this,e,this._options)}},_&&(f=function(e,t,r){f.$super.call(this),this._t=e,this._d=t,this._options=r,this._rendered=!1},f.prototype={write:function(e){null!=e&&this.push(e)},end:function(){this.push(null)},_read:function(){if(!this._rendered){this._rendered=!0;var e=this._t,t=this._d,r=d.create(this,this._options);e.render(t,r),r.end()}}},e("/raptor-util$2.0.0/inherit")(f,_.Readable)),t.load=a,t.createWriter=function(e){return new p(e)},t.helpers=g,t.Template=u,c=e("/marko$3.10.0/runtime/loader_browser")});