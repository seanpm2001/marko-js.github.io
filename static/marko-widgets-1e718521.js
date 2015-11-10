$rmod.main("/marko-widgets@5.0.6","lib/marko-widgets");
$rmod.dep("","marko-widgets","5.0.6");
$rmod.def("/marko-widgets@5.0.6/lib/client-init",function(i,e,n,t,d){i("./init-widgets").initServerRendered()});
$rmod.run("/$/marko-widgets/lib/client-init");
$rmod.main("/marko-widgets@5.0.6/lib","marko-widgets");
$rmod.def("/marko-widgets@5.0.6/lib/Widget",function(t,e,r,i,n){function s(t){t.remove()}function o(t){v.forEachChildEl(t,function(t){var e=t.__widget;e&&l(e,!1,!1),o(t)})}function a(t,e,r){var i=t[C[e]];i&&i.call(t,r),t.emit(e,r)}function d(t){var e=t.__evHandles;e&&(e.forEach(s),t.__evHandles=null)}function l(t,e,r){if(!t.isDestroyed()){var i=t.getEl();a(t,"beforeDestroy"),t.__lifecycleState="destroyed",i&&(r&&o(i),e&&i.parentNode&&i.parentNode.removeChild(i),i.__widget=null),d(t),t.__subscriptions&&(t.__subscriptions.removeAllListeners(),t.__subscriptions=null),a(t,"destroy")}}function u(t,e,r,i,n){if("function"!=typeof r){if(null===r&&(r=void 0),i){var s=t.__dirtyState||(t.__dirtyState={});s[e]=!0}else if(t.state[e]===r)return;var o=!t.__dirty;if(o){var a=t.state;t.__dirty=!0,t.__oldState=a,t.state=S({},a),t.__stateChanges={}}t.__stateChanges[e]=r,null==r?delete t.state[e]:t.state[e]=r,o&&n!==!0&&$.queueWidgetUpdate(t)}}function h(t,e,r){var i;for(i in t.state)t.state.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&u(t,i,void 0,!1,r);for(i in e)e.hasOwnProperty(i)&&u(t,i,e[i],!1,r)}function f(t){t.__oldState=null,t.__dirty=!1,t.__stateChanges=null,t.__newProps=null,t.__dirtyState=null}function _(t,e){var r=e.id,i=t.getWidget(r);return i?e.__type===i.type:!1}function c(t){m.call(this),this.id=t,this.el=null,this.bodyEl=null,this.state=null,this.__subscriptions=null,this.__evHandles=null,this.__lifecycleState=null,this.__customEvents=null,this.__scope=null,this.__dirty=!1,this.__oldState=null,this.__stateChanges=null,this.__updateQueued=!1,this.__dirtyState=null}var p,g=t("/$/marko-widgets/$/raptor-util/inherit"),v=t("/$/marko-widgets/$/raptor-dom"),y=t("./"),E=t("/$/marko-widgets/$/raptor-renderer"),m=t("/$/marko-widgets/$/events").EventEmitter,w=t("/$/marko-widgets/$/listener-tracker"),b=t("/$/marko-widgets/$/raptor-util/arrayFromArguments"),S=t("/$/marko-widgets/$/raptor-util/extend"),$=t("./update-manager"),I=t("/$/marko-widgets/$/morphdom"),B=!1,P=null,U={addDestroyListener:!1},k=m.prototype.emit,W=/\#(\w+)( .*)?/,C={beforeDestroy:"onBeforeDestroy",destroy:"onDestroy",beforeUpdate:"onBeforeUpdate",update:"onUpdate",render:"onRender",beforeInit:"onBeforeInit",afterInit:"onAfterInit"};c.prototype=p={_isWidget:!0,subscribeTo:function(t){if(!t)throw new Error("target is required");var e=this.__subscriptions;e||(this.__subscriptions=e=w.createTracker());var r=t._isWidget?P:U;return e.subscribeTo(t,r)},emit:function(t){var e,r,i=this.__customEvents;if(i&&(e=i[t])){r=r||b(arguments,1),r.push(this);var n=y.getWidgetForEl(this.__scope),s=n[e];if(!s)throw new Error("Method not found for widget "+n.id+": "+e);s.apply(n,r)}return k.apply(this,arguments)},getElId:function(t,e){var r=null!=t?this.id+"-"+t:this.id;return null!=e&&(r+="["+e+"]"),r},getEl:function(t,e){return null!=t?document.getElementById(this.getElId(t,e)):this.el||document.getElementById(this.getElId())},getEls:function(t){for(var e=[],r=0;;){var i=this.getEl(t,r);if(!i)break;e.push(i),r++}return e},getWidget:function(t,e){var r=this.getElId(t,e);return y.getWidgetForEl(r)},getWidgets:function(t){for(var e=[],r=0;;){var i=this.getWidget(t,r);if(!i)break;e.push(i),r++}return e},destroy:function(t){t=t||{},l(this,t.removeNode!==!1,t.recursive!==!1)},isDestroyed:function(){return"destroyed"===this.__lifecycleState},getBodyEl:function(){return this.bodyEl},setState:function(t,e){if("object"!=typeof t)u(this,t,e);else{var r=t;for(var i in r)r.hasOwnProperty(i)&&u(this,i,r[i])}},setStateDirty:function(t,e){1===arguments.length&&(e=this.state[t]),u(this,t,e,!0)},_replaceState:function(t){h(this,t,!0)},_removeDOMEventListeners:function(){d(this)},replaceState:function(t){h(this,t)},setProps:function(t){if(this.getInitialState){this.getInitialProps&&(t=this.getInitialProps(t)||{});var e=this.getInitialState(t);return void this.replaceState(e)}this.__newProps||$.queueWidgetUpdate(this),this.__newProps=t},update:function(){var t=this.__newProps;return this.shouldUpdate(t,this.state)?t?(f(this),void this.rerender(t)):void(this.__dirty&&(this._processUpdateHandlers()||this.doUpdate(this.__stateChanges,this.__oldState),f(this))):void f(this)},isDirty:function(){return this.__dirty},_reset:function(){f(this)},_processUpdateHandlers:function(){var t,e,r,i=this.__stateChanges,n=this.__oldState,s=[];for(var o in i)if(i.hasOwnProperty(o)){if(e=i[o],r=n[o],r===e){var d=this.__dirtyState;if(null==d||!d.hasOwnProperty(o))continue}var l="update_"+o;if(t=this[l],!t)return!1;s.push([o,t])}if(!s.length)return!0;a(this,"beforeUpdate");for(var u=0,h=s.length;h>u;u++){var _=s[u],c=_[0];t=_[1],e=i[c],r=n[c],t.call(this,e,r)}return a(this,"update"),f(this),!0},shouldUpdate:function(t,e){return!0},doUpdate:function(t,e){this.rerender()},_emitLifecycleEvent:function(t,e){a(this,t,e)},rerender:function(t){var e=this;if(!e.renderer)throw new Error('Widget does not have a "renderer" property');var r=document.getElementById(e.id),i=e.renderer||e;e.__lifecycleState="rerender";var n=S({},t||e.state),s=n.$global={};s.__rerenderWidget=e,s.__rerenderEl=e.el,s.__rerender=!0,t||(s.__rerenderState=t?null:e.state),$.batchUpdate(function(){function s(t){var e=t.__widget;e&&l(e,!1,!1)}function o(t,e){var r,i=t.id;if(c&&i){if(c.isPreservedEl(i))return c.hasUnpreservedBody(i)&&(r=t.__widget,I(r.bodyEl,e,{childrenOnly:!0,onNodeDiscarded:s,onBeforeMorphEl:o,onBeforeMorphElChildren:a})),B;r=t.__widget,r&&!_(c,r)&&l(r,!1,!1)}}function a(t){return c&&t.id&&c.isPreservedBodyEl(t.id)?B:void 0}var d=E.render(i,n),u=d.getNode(),h=d.out,c=h.global.widgets;I(r,u,{onNodeDiscarded:s,onBeforeMorphEl:o,onBeforeMorphElChildren:a}),d.afterInsert(),e.__lifecycleState=null,t||f(e)})},detach:function(){v.detach(this.el)},appendTo:function(t){v.appendTo(this.el,t)},replace:function(t){v.replace(this.el,t)},replaceChildrenOf:function(t){v.replaceChildrenOf(this.el,t)},insertBefore:function(t){v.insertBefore(this.el,t)},insertAfter:function(t){v.insertAfter(this.el,t)},prependTo:function(t){v.prependTo(this.el,t)},ready:function(t){y.ready(t,this)},$:function(t){var e=y.$,r=arguments;if(1===r.length){if("function"==typeof t){var i=this;i.ready(function(){t.call(i)})}else if("string"==typeof t){var n=W.exec(t);if(null!=n){var s=n[1];return e(null==n[2]?this.getEl(s):"#"+this.getElId(s)+n[2])}var o=this.getEl();if(!o)throw new Error("Root element is not defined for widget");if(o)return e(t,o)}}else{if(2===r.length&&"string"==typeof r[1])return e(t,this.getEl(r[1]));if(0===r.length)return e(this.el)}return e.apply(window,arguments)}},p.elId=p.getElId,g(c,m),r.exports=c});
$rmod.remap("/marko-widgets@5.0.6/lib/init-widgets","init-widgets-browser");
$rmod.def("/marko-widgets@5.0.6/lib/init-widgets-browser",function(require,exports,module,__filename,__dirname){function invokeWidgetEventHandler(e,t,i){var r=e[t];if(!r)throw new Error("Widget "+e.id+' does not have method named "'+t+'"');r.apply(e,i)}function addDOMEventListener(e,t,i,r){return _addEventListener(t,i,function(i){invokeWidgetEventHandler(e,r,[i,t])})}function parseJSON(config){return eval("("+config+")")}function getNestedEl(e,t){return null==t?null:""===t?e.getEl():"string"==typeof t&&"#"===t.charAt(0)?document.getElementById(t.substring(1)):e.getEl(t)}function initWidget(e,t,i,r,n,d,o,a,g,l,s){var u,f,v,m,c;if(s||(s=document.getElementById(t)),l||(l=s.__widget),l&&l.__type!==e&&(l=null),l?(l._removeDOMEventListeners(),l._reset(),c=l):c=registry.createWidget(e,t),r)for(var w in r)if(r.hasOwnProperty(w)){var p=r[w];("function"==typeof p||null==p)&&delete r[w]}if(c.state=r||{},logger.isDebugEnabled()&&logger.debug("Creating widget: "+e+" ("+t+")"),i||(i={}),s.__widget=c,c._isWidget){if(c.el=s,c.bodyEl=getNestedEl(c,g),d){var E=[];for(u=0,f=d.length;f>u;u+=3){v=d[u],m=d[u+1];var y=d[u+2],b=getNestedEl(c,y),_=addDOMEventListener(c,b,v,m);E.push(_)}E.length&&(c.__evHandles=E)}if(o)for(c.__customEvents={},c.__scope=n,u=0,f=o.length;f>u;u+=2)v=o[u],m=o[u+1],c.__customEvents[v]=m;if(a)for(u=0,f=a.length;f>u;u++){var h=a[u];if(!l){var W=registry.load(h),A=W.extendWidget||W.extend;if("function"!=typeof A)throw new Error("extendWidget(widget, cfg) method missing: "+h);A(c)}}}else i.elId=t,i.el=s;if(l)c._emitLifecycleEvent("update"),c._emitLifecycleEvent("render",{});else{var k={widget:c,config:i};raptorPubsub.emit("marko-widgets/initWidget",k),c._emitLifecycleEvent("beforeInit",k),c.initWidget(i),c._emitLifecycleEvent("afterInit",k),c._emitLifecycleEvent("render",{firstRender:!0})}return c}function initWidgetFromEl(e){if(null==e.__widget){var t,i=e.id,r=e.getAttribute("data-widget");e.removeAttribute("data-widget");var n=e.getAttribute("data-w-config");n&&(n=parseJSON(n),e.removeAttribute("data-w-config"));var d=e.getAttribute("data-w-state");d&&(d=parseJSON(d),e.removeAttribute("data-w-state"));var o,a=e.getAttribute("data-w-on");if(a){var g=document.getElementById(i+"-$on");g&&(g.parentNode.removeChild(g),o=(g.getAttribute("data-on")||"").split(",")),e.removeAttribute("data-w-on")}var l=e.getAttribute("data-w-events");l&&(l=l.split(","),t=l[0],l=l.slice(1),e.removeAttribute("data-w-events"));var s=e.getAttribute("data-w-extend");s&&(s=s.split(","),e.removeAttribute("data-w-extend"));var u=e.getAttribute("data-w-body");initWidget(r,i,n,d,t,o,l,s,u,null,e)}}function initClientRendered(e){for(var t=0,i=e.length;i>t;t++){var r=e[t];r.children.length&&initClientRendered(r.children);var n=initWidget(r.type,r.id,r.config,r.state,r.scope,r.domEvents,r.customEvents,r.extend,r.bodyElId,r.existingWidget);r.widget=n}}require("/$/marko-widgets/$/raptor-polyfill/array/forEach"),require("/$/marko-widgets/$/raptor-polyfill/string/endsWith");var logger=require("/$/marko-widgets/$/raptor-logging").logger(module),raptorPubsub=require("/$/marko-widgets/$/raptor-pubsub"),ready=require("/$/marko-widgets/$/raptor-dom").ready,_addEventListener=require("./addEventListener"),registry=require("./registry");exports.initClientRendered=initClientRendered,exports.initServerRendered=function(e){function t(){if("string"!=typeof e){var t=document.getElementById("markoWidgets");if(!t)return;if(document.markoWidgetsInitialized===!0)return;document.markoWidgetsInitialized=!0,e=t?t.getAttribute("data-ids"):null}if(e)for(var i=e.split(","),r=i.length,n=0;r>n;n++){var d=i[n],o=document.getElementById(d);o?initWidgetFromEl(o):logger.error('DOM node for widget with ID "'+d+'" not found')}}"string"==typeof e?t():ready(t)}});
$rmod.def("/marko-widgets@5.0.6/lib/addEventListener",function(t,e,n,o,r){function i(t,e,n){this._info=[t,e,n]}function a(t,e,n){this._info=[t,e,n]}function c(){var t=window.event;return t.target=t.target||t.srcElement,t.preventDefault=t.preventDefault||function(){t.returnValue=!1},t.stopPropagation=t.stopPropagation||function(){t.cancelBubble=!0},t.key=(t.which+1||t.keyCode+1)-1||0,t}var u=document.body||document.createElement("div");i.prototype={remove:function(){var t=this._info,e=t[0],n=t[1],o=t[2];e.detachEvent(n,o)}},a.prototype={remove:function(){var t=this._info,e=t[0],n=t[1],o=t[2];e.removeEventListener(n,o)}},u.attachEvent?n.exports=function(t,e,n){function o(){var t=c();n(t)}return e="on"+e,t.attachEvent(e,o),new i(t,e,o)}:n.exports=function(t,e,n){return t.addEventListener(e,n,!1),new a(t,e,n)}});
$rmod.def("/marko-widgets@5.0.6/lib/update-manager",function(e,u,n,t,a){function l(){if(y.length)try{d(y)}finally{g=!1}}function r(){g||(g=!0,p.nextTick(l))}function i(e){r(),s||(s=new c),s.done(e)}function d(e){for(var u=0;u<e.length;u++){var n=e[u];n.__updateQueued=!1,n.update()}e.length=0}function f(e){var u=0===h.length,n={queue:null};h.push(n);try{e()}finally{try{n.queue&&d(n.queue)}finally{h.length--,u&&s&&(s.resolve(),s=null)}}}function o(e){if(!e.__updateQueued){e.__updateQueued=!0;var u=h.length;if(u){var n=h[u-1];n.queue?n.queue.push(e):n.queue=[e]}else r(),y.push(e)}}var p=e("process"),c=e("/$/marko-widgets/$/raptor-async/AsyncValue"),s=null,s=null,g=!1,h=[],y=[];u.queueWidgetUpdate=o,u.batchUpdate=f,u.onAfterUpdate=i});
$rmod.def("/marko-widgets@5.0.6/lib/repeated-id",function(e,t,n,o,d){function i(){this.nextIdLookup={}}i.prototype={nextId:function(e,t){var n=e+"-"+t,o=this.nextIdLookup[n];return o=null==o?this.nextIdLookup[n]=0:++this.nextIdLookup[n],n.slice(0,-2)+"["+o+"]"}},t.nextId=function(e,t,n){var o=e.global.__repeatedId;return null==o&&(o=e.global.__repeatedId=new i),o.nextId(t,n)}});
$rmod.def("/marko-widgets@5.0.6/lib/WidgetDef",function(t,s,i,e,n){function d(t,s,i){this.type=t.type,this.id=t.id,this.config=t.config,this.state=t.state,this.scope=t.scope,this.domEvents=null,this.customEvents=t.customEvents,this.bodyElId=t.bodyElId,this.children=[],this.end=s,this.extend=t.extend,this.out=i,this.hasDomEvents=t.hasDomEvents,this._nextId=0}t("/$/marko-widgets/$/raptor-polyfill/string/endsWith");var o=t("../lib/repeated-id");d.prototype={addChild:function(t){this.children.push(t)},elId:function(t){return null==t?this.id:"string"==typeof t&&t.endsWith("[]")?o.nextId(this.out,this.id,t):this.id+"-"+t},addDomEvent:function(t,s,i){this.domEvents||(this.domEvents=[]),this.domEvents.push(t),this.domEvents.push(s),this.domEvents.push(i)},getDomEventsAttr:function(){return this.domEvents?this.domEvents.join(","):void 0},nextId:function(){return this.id+"-w"+this._nextId++}},i.exports=d});
$rmod.remap("/marko-widgets@5.0.6/lib/uniqueId","uniqueId-browser");
$rmod.def("/marko-widgets@5.0.6/lib/uniqueId-browser",function(r,e,n,o,i){var t=0;n.exports=function(){return"wc"+t++}});
$rmod.def("/marko-widgets@5.0.6/lib/WidgetsContext",function(t,e,i,n,d){function s(t){h.call(this),this.out=t,this.widgets=[],this.widgetStack=[],this.preserved=null,this.reusableWidgets=null,this.reusableWidgetsById=null,this.widgetsById={}}var r=t("./WidgetDef"),g=t("./uniqueId"),u=t("./init-widgets"),h=t("/$/marko-widgets/$/events").EventEmitter,o=t("/$/marko-widgets/$/raptor-util/inherit"),a=1,c=2,l=4;s.prototype={getWidgets:function(){return this.widgets},getWidgetStack:function(){return this.widgetStack},getCurrentWidget:function(){return this.widgetStack.length?this.widgetStack[this.widgetStack.length-1]:void 0},beginWidget:function(t,e){function i(){d.length=s}var n=this,d=n.widgetStack,s=d.length,g=s?d[s-1]:null;t.id||(t.id=n._nextWidgetId()),t.parent=g;var u=new r(t,i,this.out);return this.widgetsById[t.id]=u,g?g.addChild(u):n.widgets.push(u),d.push(u),this.emit("beginWidget",u),u},getWidget:function(t){return this.widgetsById[t]},hasWidgets:function(){return 0!==this.widgets.length},clearWidgets:function(){this.widgets=[],this.widgetStack=[]},_nextWidgetId:function(){return g(this.out)},initWidgets:function(){var t=this.widgets;u.initClientRendered(t),this.clearWidgets()},onBeginWidget:function(t){this.on("beginWidget",t)},isPreservedEl:function(t){var e=this.preserved;return e&&e[t]&a},isPreservedBodyEl:function(t){var e=this.preserved;return e&&e[t]&c},hasUnpreservedBody:function(t){var e=this.preserved;return e&&e[t]&l},addPreservedDOMNode:function(t,e,i){var n=this.preserved||(this.preserved={}),d=e?c:a;i&&(d|=l),n[t.id]=d}},o(s,h),s.getWidgetsContext=function(t){var e=t.global;return t.data.widgets||e.widgets||(e.widgets=new s(t))},i.exports=s});
$rmod.def("/marko-widgets@5.0.6/lib/bubble",function(e,d,r,s,o){r.exports=["click","dblclick","mousedown","mouseup","dragstart","drag","drop","dragend","keydown","keypress","keyup","select","change","submit","reset"]});
$rmod.def("/marko-widgets@5.0.6/lib/registry",function(e,r,t,n,i){function d(r){var t=u[r];if(void 0===t&&(t=f[r],t||(t=e(r)),u[r]=t||null),null==t)throw new Error("Unable to load: "+r);return t}function o(e){var r=a[e];if(r)return r;r=d(e);var t;return r.Widget&&(r=r.Widget),r.renderer&&(t=g(r)),r=l(r,t),r.prototype.__type=e,a[e]=r,r}var f={},u={},a={};r.register=function(e,r){f[e]=r,delete u[e],delete a[e]},r.load=d,r.createWidget=function(e,r){var t,n=o(e);return"function"==typeof n?t=new n(r):n.initWidget&&(t=n),t};var l=e("./defineWidget"),g=e("./defineRenderer")});
$rmod.def("/marko-widgets@5.0.6/lib/defineComponent",function(e,r,n,t,d){n.exports=function(e){if(e._isWidget)return e;var r;if(!e.template&&!e.renderer)throw new Error('Expected "template" or "renderer"');return r=i(e),o(e,r)};var i=e("./defineRenderer"),o=e("./defineWidget")});
$rmod.def("/marko-widgets@5.0.6/lib/defineWidget",function(e,r,t,n,i){t.exports=function(e,r){function t(e){o.call(this,e)}if(e._isWidget)return e;var n=e.extendWidget;if(n)return{renderer:r,render:r.render,extendWidget:function(e){n(e),e.renderer=r}};var i,u;if("function"==typeof e){if(i=e,u=i.prototype,u.render&&2===u.render.length)throw new Error('"render(input, out)" is no longer supported. Use "renderer(input, out)" instead.')}else{if("object"!=typeof e)throw new Error("Invalid widget");i=e.init||function(){},u=i.prototype=e}return u._isWidget||d(i,o),u=t.prototype=i.prototype,u.initWidget=i,u.constructor=e.constructor=t,t._isWidget=!0,r&&(t.renderer=u.renderer=r,t.render=r.render),t};var o=e("./Widget"),d=e("/$/marko-widgets/$/raptor-util/inherit")});
$rmod.def("/marko-widgets@5.0.6/lib/defineRenderer",function(e,r,t,d,n){var i=e("/$/marko-widgets/$/marko"),a=e("/$/marko-widgets/$/raptor-renderer"),o=e("/$/marko-widgets/$/raptor-util/extend");t.exports=function(e){var r,t=e.template,d=e.getInitialProps,n=e.getTemplateData,g=e.getInitialState,_=e.getWidgetConfig,l=e.getInitialBody,f=e.extendWidget,s=e.renderer;return s||(s=function(e,a){var s=a.global,w=e;w||(w={}),r||(r=t.render?t:i.load(t));var p;if(g&&s.__rerenderWidget&&s.__rerenderState){var u=!s.__firstWidgetFound;if(!u||f)for(var m in s.__rerenderState)s.__rerenderState.hasOwnProperty(m)&&!e.hasOwnProperty(m)&&(w[m]=s.__rerenderState[m]);else p=e,w=null}p||(d&&(w=d(w,a)||{}),g&&(p=g(w,a))),s.__firstWidgetFound=!0;var v=n?n(p,w,a):p||w;v=v?o({},v):{},p&&(v.widgetState=p),w&&(v.widgetProps=w,l?v.widgetBody=l(w,a):v.widgetBody=w.renderBody,_&&(v.widgetConfig=_(w,a))),r.render(v,a)}),s.render=a.createRenderFunc(s),s}});
$rmod.remap("/marko-widgets@5.0.6/lib/marko-widgets","marko-widgets-browser");
$rmod.def("/marko-widgets@5.0.6/lib/marko-widgets-browser",function(e,t,r,n,i){function d(e){if(!e)return void 0;var t="string"==typeof e?document.getElementById(e):e;return t&&t.__widget||void 0}var o=e("/$/marko-widgets/$/raptor-pubsub"),a=e("/$/marko-widgets/$/raptor-dom").ready,g={},f=e("./Widget"),u=e("./init-widgets"),s=e("./addEventListener"),w=e("/$/marko-widgets/$/raptor-renderer"),c=e("./update-manager"),m=t.WidgetsContext=e("./WidgetsContext");t.getWidgetsContext=m.getWidgetsContext,t.Widget=f,t.ready=a,t.onInitWidget=function(e){o.on("marko-widgets/initWidget",e)},t.attrs=function(){return g},t.writeDomEventsEl=function(){},t.get=t.getWidgetForEl=d,t.initAllWidgets=function(){u.initServerRendered(!0)},o.on("dom/beforeRemove",function(e){var t=e.el,r=t.id?d(t):null;r&&r.destroy({removeNode:!1,recursive:!0})}).on("raptor-renderer/renderedToDOM",function(e){var t=e.out||e.context,r=t.global.widgets;r&&r.initWidgets()}),t.initWidgets=window.$markoWidgets=function(e){u.initServerRendered(e)};var b="jquery",v=window.$;if(!v)try{v=e(b)}catch(l){}t.$=v,a(function(){var t=document.body;e("./bubble").forEach(function(e){s(t,e,function(t){c.batchUpdate(function(){var r=t.target;if(r){var n,i,d="data-w-on"+e;do if(n=r.getAttribute(d)){var o=n.lastIndexOf("|"),a=n.substring(o+1);if(i=document.getElementById(a).__widget,!i)throw new Error("Widget not found: "+a);n=n.substring(0,o);var g=i[n];if(!g)throw new Error("Method not found on widget "+i.id+": "+n);i[n](t,r)}while((r=r.parentNode)&&r.getAttribute)}})})})}),t.registerWidget=e("./registry").register,t.makeRenderable=t.renderable=w.renderable,t.render=w.render,t.defineComponent=e("./defineComponent"),t.defineWidget=e("./defineWidget"),t.defineRenderer=e("./defineRenderer"),t.batchUpdate=c.batchUpdate,t.onAfterUpdate=c.onAfterUpdate,window.$MARKO_WIDGETS=t});