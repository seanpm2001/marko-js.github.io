(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[312],{"./playground/components/editor.marko":(e,o,s)=>{"use strict";s.r(o),s.d(o,{default:()=>v,loading:()=>b});var t=s("../../node_modules/marko/dist/runtime/vdom/index.js"),r=s("../utils/monaco.js"),n=s("../../node_modules/marko/dist/core-tags/components/preserve-tag/index-browser.js"),i=s.n(n),d=s("../../node_modules/marko/dist/runtime/helpers/render-tag.js"),a=s.n(d),m=s("../../node_modules/marko/dist/runtime/components/renderer.js"),l=s.n(m),c=s("../../node_modules/marko/dist/runtime/components/registry/index-browser.js"),u=s("../../node_modules/marko/dist/runtime/components/defineComponent.js"),h=s.n(u);const g="zhSmpe2J",p=(0,t.t)(g),v=p,b=(0,r.zD)();(0,c.r)(g,(()=>p));const j={onMount(){const e=this.getEl("editor");this.editor=(0,r.Jh)(e),this.resizeObserver=new ResizeObserver((e=>{this.editor.layout()})),this.resizeObserver.observe(e),this.sync()},onUpdate(){this.sync()},onDestroy(){this.editor.dispose(),this.resizeObserver.disconnect()},sync(){this.prevLanguage!==this.input.language?(this.model&&this.model.dispose(),this.model=(0,r.NY)(this.input.value,this.input.language),this.editor.setModel(this.model),this.editor.layout(),this.model.onDidChangeContent((()=>{const e=this.model.getValue();e!==this.prevValue&&(this.prevValue=e,this.input.valueChange(e)),this.hasErrorMarkers&&((0,r.c0)(this.model,null,[]),this.hasErrorMarkers=!1)}))):this.prevValue!==this.input.value&&this.model.setValue(this.input.value),this.prevLanguage=this.input.language,this.prevValue=this.input.value},focus(e,o){this.editor.focus(),this.editor.setPosition({lineNumber:e,column:o})},showError(e){let{line:o,column:s,message:t}=e;this.hasErrorMarkers=!0,(0,r.c0)(this.model,null,[{startLineNumber:o,startColumn:s,endLineNumber:o,endColumn:s,message:t,severity:8}])}};p._=l()((function(e,o,s,t,r){a()(i(),{n:!0,renderBody:e=>{e.e("div",{class:"editor"},"@editor",t,0,1)}},o,s,"@editor")}),{t:g},j),p.Component=h()(j,p._)},"../utils/monaco.js":(e,o,s)=>{s("../../node_modules/monaco-editor/esm/vs/editor/browser/controller/coreCommands.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/caretOperations/caretOperations.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/clipboard/clipboard.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/comment/comment.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/cursorUndo/cursorUndo.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/find/findController.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/folding/folding.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/links/links.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js"),s("../../node_modules/monaco-editor/esm/vs/editor/contrib/hover/hover.js");const{languages:t,editor:r}=s("../../node_modules/monaco-editor/esm/vs/editor/editor.api.js"),n=s("../../node_modules/monaco-editor/esm/vs/editor/editor.worker.js").Z,{load:i,getColorMap:d,getTokenizer:a,tmTheme:m,syntaxes:l}=s("../utils/language-registry/index.js"),c=s("../utils/lang-to-scope.js");let u=!1;o.c0=r.setModelMarkers,o.Jh=e=>{if(!u)throw new Error("You must call load() before using the editor.");return r.create(e,{autoIndent:"full",renderControlCharacters:!0,renderIndentGuides:!0,matchBrackets:!0,minimap:{enabled:!1}})},o.NY=(e,o)=>r.createModel(e,c(o)),o.zD=async()=>{s.g.MonacoEnvironment={getWorker:async()=>new n};for(const e of l)t.register({id:e.grammar.scopeName,extensions:e.grammar.fileTypes&&e.grammar.fileTypes.map((e=>`.${e}`))});await i({getEncodedLanguageId:t.getEncodedLanguageId});const e=m.name.replace(/[^a-z0-9\-]+/gi,"-"),o=[null,...d().slice(1)];r.defineTheme(e,{rules:[],base:"vs-dark",inherit:!1,encodedTokensColors:o,colors:{"editor.foreground":o[1],"editor.background":o[2]}}),r.setTheme(e);for(const e of l){const{scopeName:o}=e.grammar;t.setLanguageConfiguration(o,e.editorConfig),t.setTokensProvider(o,a(o))}u=!0}}}]);
//# sourceMappingURL=312.5d355f1f.js.map