module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 881:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(314);

exports.__esModule = true;
exports.routes = exports.assets = void 0;

var _path = _interopRequireDefault(__webpack_require__(622));

const getRoute = global.GET_ROUTE;
const browserEnvs = global.BROWSER_ENVS;

const assets =  true && __webpack_require__(495)( // eslint-disable-next-line
_path.default.join(require.resolve("."), "..", "assets"), {
  setHeaders(res) {
    if (!res.getHeader("Cache-Control")) {
      res.setHeader("Cache-Control", ["public, max-age=31536000", "public, max-age=31536000, immutable"]);
      res.setHeader("Expires", new Date(Date.now() + 31536000000).toUTCString());
    }
  }

});

exports.assets = assets;

const routes = global.MARKO_MIDDLEWARE || ((req, res, notFound) => {
  res.setHeader("content-type", "text/html; charset=utf-8");
  const [pathname, query] = req.url.split("?");
  const route = getRoute(pathname);

  if (route) {
    if (route.redirect) {
      res.statusCode = 301;
      res.setHeader("location", route.path);
      res.end(`Redirecting to <a href=${JSON.stringify(route.path)}>${route.path}</a>`);
    } else {
      const userAgent = req.headers["user-agent"] || "";
      route.template.render({
        $global: {
          buildName: `Browser-${browserEnvs.find(({
            test
          }) => !test || test.test(userAgent)).env}`
        },
        params: route.params,
        query,
        pathname
      }, res);
    }
  } else {
    notFound();
  }
});

exports.routes = routes;

/***/ }),

/***/ 80:
/***/ ((module) => {

module.exports = function getAnchorName(title, out) {
  var anchorCache = out.global.anchorCache || (out.global.anchorCache = {});
  var anchorName = title.replace(/[ \-]+/g, "-").replace(/[^A-Z0-9\-]+/gi, "").toLowerCase();
  var repeat = anchorCache[anchorName] != null ? ++anchorCache[anchorName] : anchorCache[anchorName] = 0;

  if (repeat) {
    anchorName += "_" + repeat;
  }

  return anchorName;
};

/***/ }),

/***/ 627:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const gh = __webpack_require__(273);

module.exports = function getContributorsForFile(repo, repoFilePath) {
  var contributors = {};
  return gh(`repos/${repo}/commits?path=${repoFilePath}`).then(res => {
    res.body.forEach(contribution => {
      var author = contribution.author || contribution.commit.author;

      if (author) {
        contributors[author.login] = {
          username: author.login,
          photo: author.avatar_url,
          profile: author.html_url,
          commits: `https://github.com/${repo}/commits?path=${repoFilePath}&author=${author.login}`
        };
      }
    });
    return Object.keys(contributors).sort().map(k => contributors[k]);
  }).catch(err => {
    var message = err.response && err.response.body && err.response.body.message || "";

    if (err.statusCode === 403 && /rate limit/i.test(message)) {
      console.error("GitHub API rate limit exceeded.  You can set the GITHUB_TOKEN environment variable for a higher limit. https://github.com/settings/tokens");
      if (true) process.exit(1);
    } else {
      throw err;
    }
  });
};

/***/ }),

/***/ 130:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const formatSlug = __webpack_require__(174);

module.exports = function createOverviewTree(structure, nestedTitle) {
  let familyTree = {};

  for (let i = 0; i < structure.length; i++) {
    const section = structure[i];

    for (let j = 0; j < section.docs.length; j++) {
      const doc = section.docs[j];

      if (typeof doc === "object") {
        const overviewTitle = `${formatSlug(section.title)}-${formatSlug(doc.title)}-overview`;
        const nestedList = createOverviewTree([doc], overviewTitle);
        familyTree = Object.assign({}, familyTree, nestedList);
      } else if (typeof doc === "string") {
        const key = formatSlug(doc.toUpperCase());
        familyTree[key] = {};

        if (nestedTitle) {
          familyTree[key][nestedTitle] = true;
        } else {
          familyTree[key][`${formatSlug(section.title.toUpperCase())}-overview`] = true;
        }
      }
    }
  }

  return familyTree;
};

/***/ }),

/***/ 174:
/***/ ((module) => {

module.exports = name => {
  return name.replace(/[^\w\d\s\.-]/g, "").replace(/[\s\.]+/g, "-").toLowerCase();
};

/***/ }),

/***/ 158:
/***/ (() => {

global.BROWSER_ENVS = [{ 
                  env: "production", 
                  test: null 
                }]

/***/ }),

/***/ 535:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ../../examples/examples/color-picker/README.md
var README_namespaceObject = {};
__webpack_require__.r(README_namespaceObject);
__webpack_require__.d(README_namespaceObject, {
  "default": () => (README)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/10-awesome-marko-features.md
var _10_awesome_marko_features_namespaceObject = {};
__webpack_require__.r(_10_awesome_marko_features_namespaceObject);
__webpack_require__.d(_10_awesome_marko_features_namespaceObject, {
  "default": () => (_10_awesome_marko_features)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/body-content.md
var body_content_namespaceObject = {};
__webpack_require__.r(body_content_namespaceObject);
__webpack_require__.d(body_content_namespaceObject, {
  "default": () => (body_content)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/class-components.md
var class_components_namespaceObject = {};
__webpack_require__.r(class_components_namespaceObject);
__webpack_require__.d(class_components_namespaceObject, {
  "default": () => (class_components)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/compiler.md
var compiler_namespaceObject = {};
__webpack_require__.r(compiler_namespaceObject);
__webpack_require__.d(compiler_namespaceObject, {
  "default": () => (compiler)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/concise.md
var concise_namespaceObject = {};
__webpack_require__.r(concise_namespaceObject);
__webpack_require__.d(concise_namespaceObject, {
  "default": () => (concise)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/conditionals-and-lists.md
var conditionals_and_lists_namespaceObject = {};
__webpack_require__.r(conditionals_and_lists_namespaceObject);
__webpack_require__.d(conditionals_and_lists_namespaceObject, {
  "default": () => (conditionals_and_lists)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/core-tags.md
var core_tags_namespaceObject = {};
__webpack_require__.r(core_tags_namespaceObject);
__webpack_require__.d(core_tags_namespaceObject, {
  "default": () => (core_tags)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/custom-tags.md
var custom_tags_namespaceObject = {};
__webpack_require__.r(custom_tags_namespaceObject);
__webpack_require__.d(custom_tags_namespaceObject, {
  "default": () => (custom_tags)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/editor-plugins.md
var editor_plugins_namespaceObject = {};
__webpack_require__.r(editor_plugins_namespaceObject);
__webpack_require__.d(editor_plugins_namespaceObject, {
  "default": () => (editor_plugins)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/events.md
var events_namespaceObject = {};
__webpack_require__.r(events_namespaceObject);
__webpack_require__.d(events_namespaceObject, {
  "default": () => (events)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/express.md
var express_namespaceObject = {};
__webpack_require__.r(express_namespaceObject);
__webpack_require__.d(express_namespaceObject, {
  "default": () => (express)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/fastify.md
var fastify_namespaceObject = {};
__webpack_require__.r(fastify_namespaceObject);
__webpack_require__.d(fastify_namespaceObject, {
  "default": () => (fastify)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/getting-started.md
var getting_started_namespaceObject = {};
__webpack_require__.r(getting_started_namespaceObject);
__webpack_require__.d(getting_started_namespaceObject, {
  "default": () => (getting_started)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/http.md
var http_namespaceObject = {};
__webpack_require__.r(http_namespaceObject);
__webpack_require__.d(http_namespaceObject, {
  "default": () => (http)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/installing.md
var installing_namespaceObject = {};
__webpack_require__.r(installing_namespaceObject);
__webpack_require__.d(installing_namespaceObject, {
  "default": () => (installing)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/koa.md
var koa_namespaceObject = {};
__webpack_require__.r(koa_namespaceObject);
__webpack_require__.d(koa_namespaceObject, {
  "default": () => (koa)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/lasso.md
var lasso_namespaceObject = {};
__webpack_require__.r(lasso_namespaceObject);
__webpack_require__.d(lasso_namespaceObject, {
  "default": () => (lasso)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/marko-5-upgrade.md
var marko_5_upgrade_namespaceObject = {};
__webpack_require__.r(marko_5_upgrade_namespaceObject);
__webpack_require__.d(marko_5_upgrade_namespaceObject, {
  "default": () => (marko_5_upgrade)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/marko-json.md
var marko_json_namespaceObject = {};
__webpack_require__.r(marko_json_namespaceObject);
__webpack_require__.d(marko_json_namespaceObject, {
  "default": () => (marko_json)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/marko-vs-react.md
var marko_vs_react_namespaceObject = {};
__webpack_require__.r(marko_vs_react_namespaceObject);
__webpack_require__.d(marko_vs_react_namespaceObject, {
  "default": () => (marko_vs_react)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/redux.md
var redux_namespaceObject = {};
__webpack_require__.r(redux_namespaceObject);
__webpack_require__.d(redux_namespaceObject, {
  "default": () => (redux)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/rendering.md
var rendering_namespaceObject = {};
__webpack_require__.r(rendering_namespaceObject);
__webpack_require__.d(rendering_namespaceObject, {
  "default": () => (rendering)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/rollup.md
var rollup_namespaceObject = {};
__webpack_require__.r(rollup_namespaceObject);
__webpack_require__.d(rollup_namespaceObject, {
  "default": () => (rollup)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/server-side-rendering.md
var server_side_rendering_namespaceObject = {};
__webpack_require__.r(server_side_rendering_namespaceObject);
__webpack_require__.d(server_side_rendering_namespaceObject, {
  "default": () => (server_side_rendering)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/state.md
var state_namespaceObject = {};
__webpack_require__.r(state_namespaceObject);
__webpack_require__.d(state_namespaceObject, {
  "default": () => (state)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/styles.md
var styles_namespaceObject = {};
__webpack_require__.r(styles_namespaceObject);
__webpack_require__.d(styles_namespaceObject, {
  "default": () => (styles)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/syntax.md
var syntax_namespaceObject = {};
__webpack_require__.r(syntax_namespaceObject);
__webpack_require__.d(syntax_namespaceObject, {
  "default": () => (syntax)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/webpack.md
var webpack_namespaceObject = {};
__webpack_require__.r(webpack_namespaceObject);
__webpack_require__.d(webpack_namespaceObject, {
  "default": () => (webpack)
});

// NAMESPACE OBJECT: ../../node_modules/marko/docs/why-is-marko-fast.md
var why_is_marko_fast_namespaceObject = {};
__webpack_require__.r(why_is_marko_fast_namespaceObject);
__webpack_require__.d(why_is_marko_fast_namespaceObject, {
  "default": () => (why_is_marko_fast)
});

;// CONCATENATED MODULE: ../../node_modules/@marko/build/dist/files/parent-dir.png
/* harmony default export */ const parent_dir = ("/assets/3486dd39.png");
;// CONCATENATED MODULE: ../../node_modules/@marko/build/dist/files/dir.png
/* harmony default export */ const files_dir = ("/assets/bbafa975.png");
;// CONCATENATED MODULE: ../../node_modules/@marko/build/dist/files/file.png
/* harmony default export */ const files_file = ("/assets/6a44b7bf.png");
;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/escape-xml"
const escape_xml_namespaceObject = require("marko/dist/runtime/html/helpers/escape-xml");;
;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/attr"
const attr_namespaceObject = require("marko/dist/runtime/html/helpers/attr");;
var attr_default = /*#__PURE__*/__webpack_require__.n(attr_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/components/init-components-tag.js"
const init_components_tag_js_namespaceObject = require("marko/dist/core-tags/components/init-components-tag.js");;
var init_components_tag_js_default = /*#__PURE__*/__webpack_require__.n(init_components_tag_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/render-tag"
const render_tag_namespaceObject = require("marko/dist/runtime/helpers/render-tag");;
var render_tag_default = /*#__PURE__*/__webpack_require__.n(render_tag_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/core/await/reorderer-renderer.js"
const reorderer_renderer_js_namespaceObject = require("marko/dist/core-tags/core/await/reorderer-renderer.js");;
var reorderer_renderer_js_default = /*#__PURE__*/__webpack_require__.n(reorderer_renderer_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/core-tags/components/preferred-script-location-tag.js"
const preferred_script_location_tag_js_namespaceObject = require("marko/dist/core-tags/components/preferred-script-location-tag.js");;
var preferred_script_location_tag_js_default = /*#__PURE__*/__webpack_require__.n(preferred_script_location_tag_js_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/components/renderer"
const renderer_namespaceObject = require("marko/dist/runtime/components/renderer");;
var renderer_default = /*#__PURE__*/__webpack_require__.n(renderer_namespaceObject);
;// CONCATENATED MODULE: external "marko/dist/runtime/html"
const html_namespaceObject = require("marko/dist/runtime/html");;
;// CONCATENATED MODULE: ../../node_modules/@marko/build/dist/files/dir-index.marko
const _marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const dir_index_marko = (_marko_template);











const _marko_componentType = "C1oCC1Si",
      _marko_component = {};
_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<!DOCTYPE html><html lang=en><head><meta charset=UTF-8><meta name=viewport content="width=device-width, initial-scale=1.0"><meta http-equiv=X-UA-Compatible content=ie=edge><title>Index of ${(0,escape_xml_namespaceObject.x)(input.pathname)}</title>`);
  out.___renderAssets && out.___renderAssets();
  out.w("</head><body>");
  {
    out.w("<h1>Index of <nav>");
    {
      let _i = 0;
      const all = input.pathname.replace(/^\/|\/$/, "").split("/");

      for (const part of all) {
        let i = _i++;
        const _keyScope = `[${i}]`;

        if (i === 0 && part) {
          out.w("<a href=/ >/</a>");
        }

        const _tagName = i < all.length - 1 ? "a" : null;

        if (_tagName) out.w(`<${_tagName}${attr_default()("href", `/${all.slice(0, i + 1).join("/")}`)}>`);else out.bf(`f_${"10" + _keyScope}`, component);
        out.w(`${(0,escape_xml_namespaceObject.x)(part)}/`);
        if (_tagName) out.w(`</${_tagName}>`);else out.ef();
      }
    }
    out.w("</nav></h1>");
    const root = input.pathname.replace(/\/$/, "");
    out.w("<main>");
    {
      if (root) {
        out.w(`<a href=.><img${attr_default()("src", parent_dir)}><span>Parent Directory</span></a>`);
      }

      let _keyValue = 0;

      for (const dir of input.params.dirs) {
        const _keyScope2 = `[${_keyValue++}]`;
        out.w(`<a${attr_default()("href", `${root}/${dir}`)}${attr_default()("title", `${dir}/`)}><img${attr_default()("src", files_dir)}><span>${(0,escape_xml_namespaceObject.x)(dir)}/</span></a>`);
      }

      let _keyValue2 = 0;

      for (const file of input.params.files) {
        const _keyScope3 = `[${_keyValue2++}]`;
        out.w(`<a${attr_default()("href", `${root}/${file}`)}${attr_default()("title", `${file}.marko`)}><img${attr_default()("src", files_file)}><span>${(0,escape_xml_namespaceObject.x)(file)}.marko</span></a>`);
      }

      let _keyValue3 = 0;

      for (let _steps = (4 - 0) / 1, _step = 0; _step <= _steps; _step++) {
        const _keyScope4 = `[${_keyValue3++}]`;
        out.w("<span></span>");
      }
    }
    out.w("</main><footer>Icons by <a href=https://icons8.com>icons8</a></footer>");

    render_tag_default()((init_components_tag_js_default()), {}, out, _component, "24");

    render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "25");

    render_tag_default()((preferred_script_location_tag_js_default()), {}, out, _component, "26");
  }
  out.w("</body></html>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
;// CONCATENATED MODULE: ../../node_modules/@marko/webpack/dist/loader/index.js!?manifest
/* harmony default export */ const index_js_manifest = ({
  getAssets(entry) {
    return this.build[entry];
  },
  build: {":name_z0HT":{"css":["c4742120.css"],"js":["211.6b63e88c.js","616.a8b84c3a.js"]},"code-block-marko_UUum":{"css":["c1911498.css"],"js":["211.6b63e88c.js","598.78c2c04c.js"]},"dir-index_C1oC":{"css":["233f4f6c.css"],"js":["450.6d63a152.js"]},"index_WEBG":{"css":["2eef411a.css"],"js":["211.6b63e88c.js","779.7616f926.js","117.b8223f90.js"]},"try-online_gkPN":{"css":["3dc0d470.css"],"js":["211.6b63e88c.js","779.7616f926.js","748.d64d27e9.js"]}}
});
;// CONCATENATED MODULE: ../../node_modules/@marko/build/dist/files/dir-index.marko?server-entry
const dir_index_marko_server_entry_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const dir_index_marko_server_entry = ((/* unused pure expression or super */ null && (dir_index_marko_server_entry_marko_template)));




function renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    if (assets.js) {
      const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
      assets.js.forEach(js => {
        this.write(`<script src=${JSON.stringify(__webpack_require__.p + js)}${nonceAttr} async></script>`);
      });
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(`<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + css)}>`);
      });
    }
  }
}

function outFlushOverride() {
  this.___renderAssets();

  this.flush();
}

function outEndOverride(data, encoding, callback) {
  this.___renderAssets();

  this.end(data, encoding, callback);
}






const dir_index_marko_server_entry_marko_componentType = "C1oCC1Si",
      dir_index_marko_server_entry_marko_component = {};
dir_index_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const curAssets = out.___assets;
  const newAssets = index_js_manifest.getAssets("dir-index_C1oC", out.global.buildName);

  if (curAssets) {
    if (newAssets.js) {
      if (curAssets.js) {
        for (const js of newAssets.js) {
          if (!curAssets.js.includes(js)) {
            curAssets.js.push(js);
          }
        }
      } else {
        curAssets.js = newAssets.js;
      }
    }

    if (newAssets.css) {
      if (curAssets.css) {
        for (const css of newAssets.css) {
          if (!curAssets.css.includes(css)) {
            curAssets.css.push(css);
          }
        }
      } else {
        curAssets.css = newAssets.css;
      }
    }
  } else {
    out.___flush = out.flush;
    out.___end = out.end;
    out.___renderAssets = renderAssets;
    out.___assets = newAssets;
    out.flush = outFlushOverride;
    out.end = outEndOverride;
  }

  render_tag_default()(dir_index_marko, input, out, _component, "0");

  render_tag_default()((init_components_tag_js_default()), {}, out, _component, "1");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "2");
}, {
  t: dir_index_marko_server_entry_marko_componentType,
  i: true
}, dir_index_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ../logos/marko.svg
/* harmony default export */ const marko = ("/assets/91bc26e5.svg");
;// CONCATENATED MODULE: ./index/components/home-hero/marko-text.svg
/* harmony default export */ const marko_text = ("/assets/04290fd9.svg");
;// CONCATENATED MODULE: external "marko/dist/runtime/html/helpers/data-marko"
const data_marko_namespaceObject = require("marko/dist/runtime/html/helpers/data-marko");;
var data_marko_default = /*#__PURE__*/__webpack_require__.n(data_marko_namespaceObject);
;// CONCATENATED MODULE: ../logos/github.svg
/* harmony default export */ const github = ("/assets/a828017a.svg");
;// CONCATENATED MODULE: ./index/components/home-hero/components/github-link/index.marko
const index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const index_marko = (index_marko_marko_template);





const index_marko_marko_componentType = "oilsSSYQ",
      index_marko_marko_component = {};
index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<a href=https://github.com/marko-js/marko class=github-link><img${attr_default()("src", github)} alt><span class=text>GitHub</span><span${data_marko_default()(out, _component, 0, "@star-count", _component)} class=stars></span></a>`);
}, {
  t: index_marko_marko_componentType,
  s: true
}, index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-hero/index.marko
const home_hero_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_hero_index_marko = (home_hero_index_marko_marko_template);








const home_hero_index_marko_marko_componentType = "HStp62jU",
      home_hero_index_marko_marko_component = {};
home_hero_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<header class=home-header><img${attr_default()("src", marko)} alt class=logo><div class=header-content><img${attr_default()("src", marko_text)} alt=Marko class=logo-text><h1${data_marko_default()(out, _component, 0, "@tagline", _component)}><span>A declarative, HTML-based language<br>that makes building web apps fun</span></h1><div class=actions><a href=/docs/getting-started/  class="button get-started"><span>Get started</span></a>`);

  render_tag_default()(index_marko, {}, out, _component, "9");

  out.w("</div></div></header>");
}, {
  t: home_hero_index_marko_marko_componentType,
  s: true
}, home_hero_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-features/index.marko
const home_features_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_features_index_marko = (home_features_index_marko_marko_template);


const home_features_index_marko_marko_componentType = "FS1oMByu",
      home_features_index_marko_marko_component = {};
home_features_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<header class=home-features><div class=feature><h2 class=blue>Familiar</h2><p>If you know HTML, CSS, and Javascript, you know Marko</p></div><div class=feature><h2 class=red>Performant</h2><p>Streaming, partial hydration, an optimizing compiler, & a small runtime</p></div><div class=feature><h2 class=yellow>Scalable</h2><p>Start with simple HTML templates and add powerful components as needed</p></div><div class=feature><h2 class=green>Trusted</h2><p>Marko is powering high-traffic websites like ebay.com</p></div></header>");
}, {
  t: home_features_index_marko_marko_componentType,
  i: true
}, home_features_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-language/components/counter-example/index.marko
const counter_example_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const counter_example_index_marko = (counter_example_index_marko_marko_template);



const counter_example_index_marko_marko_componentType = "UC5EWL3e",
      counter_example_index_marko_marko_component = {
  onCreate() {
    this.state = {
      count: 0
    };
  },

  increment() {
    this.state.count++;
  }

};
counter_example_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<div>${(0,escape_xml_namespaceObject.x)(state.count)}</div><button>Click me!</button>`);
}, {
  t: counter_example_index_marko_marko_componentType
}, counter_example_index_marko_marko_component);
// EXTERNAL MODULE: ../components/heading/getAnchorName.js
var getAnchorName = __webpack_require__(80);
var getAnchorName_default = /*#__PURE__*/__webpack_require__.n(getAnchorName);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/dynamic-tag"
const dynamic_tag_namespaceObject = require("marko/dist/runtime/helpers/dynamic-tag");;
var dynamic_tag_default = /*#__PURE__*/__webpack_require__.n(dynamic_tag_namespaceObject);
;// CONCATENATED MODULE: ../components/heading/index.marko
const heading_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const heading_index_marko = (heading_index_marko_marko_template);






const heading_index_marko_marko_componentType = "yiZmRPfF",
      heading_index_marko_marko_component = {};
heading_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  var className = input['class'];
  var text = input.text;
  var anchorName = input.anchorName || getAnchorName_default()(text, out);

  dynamic_tag_default()(out, input.tag, () => ({
    "class": ['heading', className]
  }), out => {
    out.w(`<a${attr_default()("name", anchorName)} class=anchor${attr_default()("href", `#${anchorName}`)}><span class=header-link></span></a>`);

    if (text) {
      out.w((0,escape_xml_namespaceObject.x)(text));
    } else {
      dynamic_tag_default()(out, input.renderBody, null, null, null, null, _component, "3");
    }
  }, null, null, _component, "0");
}, {
  t: heading_index_marko_marko_componentType,
  i: true
}, heading_index_marko_marko_component);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/class-value"
const class_value_namespaceObject = require("marko/dist/runtime/helpers/class-value");;
var class_value_default = /*#__PURE__*/__webpack_require__.n(class_value_namespaceObject);
;// CONCATENATED MODULE: ./index/components/home-feature-block/index.marko
const home_feature_block_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_feature_block_index_marko = (home_feature_block_index_marko_marko_template);








const home_feature_block_index_marko_marko_componentType = "jphCNwO4",
      home_feature_block_index_marko_marko_component = {};
home_feature_block_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<section${attr_default()("class", class_value_default()([input.class, input.align && `home-feature-block-${input.align}`, !input.action && `home-feature-block-actionless`, "home-feature-block"]))}><div class=home-feature-block-container><div class=home-feature-block-content>`);

  render_tag_default()(heading_index_marko, {
    "tag": "h1",
    "class": "home-feature-block-title",
    ...input.title
  }, out, _component, "3");

  out.w("<div class=home-feature-block-content-body>");

  dynamic_tag_default()(out, input.content, null, null, null, null, _component, "5");

  out.w(`</div></div><div${attr_default()("class", class_value_default()(["home-feature-block-visual", input.visual.class]))}>`);

  dynamic_tag_default()(out, input.visual, null, null, null, null, _component, "7");

  out.w("</div>");

  if (input.action) {
    out.w(`<div class=home-feature-block-action><a${attr_default()("class", class_value_default()(input.action.class))}${attr_default()("href", input.action.href)}>${(0,escape_xml_namespaceObject.x)(input.action.text || "Learn More")}</a></div>`);
  }

  out.w("</div>");

  dynamic_tag_default()(out, input.breakout, null, null, null, null, _component, "10");

  out.w("</section>");
}, {
  t: home_feature_block_index_marko_marko_componentType,
  i: true
}, home_feature_block_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-language/index.marko
const home_language_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_language_index_marko = (home_language_index_marko_marko_template);





const home_language_index_marko_marko_componentType = "Mj2y1EJW",
      home_language_index_marko_marko_component = {};
home_language_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(home_feature_block_index_marko, {
    "class": "home-language",
    "title": {
      "text": "HTML Reimagined",
      "anchorName": "language"
    },
    "content": {
      "renderBody": out => {
        out.w("<p>Marko is HTML re-imagined as a language for building dynamic and reactive user interfaces. Just about any valid HTML is valid Marko, but Marko extends the HTML language to allow building modern applications in a declarative way.</p>");
      }
    },
    "visual": {
      "class": "home-language__examples",
      "renderBody": out => {
        out.w("<figure><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n&lt;<span style=color:#FF4185>html</span>>\n&lt;<span style=color:#FF4185>head</span>>\n    &lt;<span style=color:#FF4185>title</span>><span style=color:#FFF066>Hello Marko</span>&lt;/<span style=color:#FF4185>title</span>>\n&lt;/<span style=color:#FF4185>head</span>>\n&lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>My favorite colors</span>&lt;/<span style=color:#FF4185>h1</span>>\n    &lt;<span style=color:#FF4185>ul</span>>\n        &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]>\n            &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>`color:</span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>>\n<span style=color:#FFF066>                </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n            &lt;/<span style=color:#FF4185>li</span>>\n        &lt;/<span style=color:#66D9EF>for</span>>\n    &lt;/<span style=color:#FF4185>ul</span>>\n    &lt;<span style=color:#FF4185>shared-footer</span>/>\n&lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre><figcaption>HTML Templates, Custom Tags, & Javascript Expressions</figcaption></figure><figure><div class=home-language__interactive-container><div class=home-language__interactive-example>");

        render_tag_default()(counter_example_index_marko, {}, out, _component, "11");

        out.w("</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCreate</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n  }\n  <span style=color:#A6E22E>increment</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n  }\n}\n&lt;<span style=color:#FF4185>div</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>)>\n<span style=color:#FFF066>  Click me!</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre></div><figcaption>Interactive Logic & Reactive Values</figcaption></figure>");
      }
    }
  }, out, _component, "0");
}, {
  t: home_language_index_marko_marko_componentType,
  i: true
}, home_language_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-demo-page/product.png
/* harmony default export */ const product = ("/assets/cffcd01c.png");
;// CONCATENATED MODULE: ./index/components/home-demo-page/x.svg
/* harmony default export */ const x = ("/assets/e7ceda8d.svg");
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/style-value"
const style_value_namespaceObject = require("marko/dist/runtime/helpers/style-value");;
var style_value_default = /*#__PURE__*/__webpack_require__.n(style_value_namespaceObject);
;// CONCATENATED MODULE: ./index/components/home-demo-page/index.marko
const home_demo_page_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_demo_page_index_marko = (home_demo_page_index_marko_marko_template);








const home_demo_page_index_marko_marko_componentType = "z630EEW4",
      home_demo_page_index_marko_marko_component = {};
home_demo_page_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const progress = input.buffered ? Math.floor(input.progress / 0.9) : input.progress / 0.9;
  out.w(`<div${attr_default()("class", class_value_default()(["demo-page-wrapper", input.class]))} role=img${attr_default()("aria-label", input.label)}> <div aria-hidden=true${attr_default()("class", class_value_default()(["demo-page-container", {
    "demo-page-hydrate-all": input.hydrateAll,
    "demo-page-hydrate-partial": input.hydratePartial
  }]))}>`);

  if (input.progress >= 0) {
    out.w(`<div${attr_default()("style", style_value_default()({
      width: `${100 * Math.min(1, input.progress * (input.buffered ? 1 : 1 / 0.9))}%`
    }))} class=demo-page-progress></div>`);
  }

  out.w(`<div${attr_default()("class", class_value_default()(["demo-page-header demo-page-delay-1", {
    "demo-page-loading": progress < 0.1
  }]))}><div class="demo-page-link demo-page-delay-2">All Products</div><div class="demo-page-logo demo-page-delay-3">BuyItNow</div><div class="demo-page-cart demo-page-delay-4 demo-page-hydrated">Cart (0)</div></div><div${attr_default()("class", class_value_default()(["demo-page-product demo-page-delay-5", {
    "demo-page-loading": progress < 0.4
  }]))}><img${attr_default()("class", class_value_default()(["demo-page-image", {
    "demo-page-lowres": progress < 0.6 || input.buffered && input.progress < 1
  }]))}${attr_default()("src", product)}><div class="demo-page-description demo-page-delay-6"><span class=demo-page-description-title>Google Home - $79</span><div class="demo-page-description-button demo-page-delay-7 demo-page-hydrated">Add to Cart</div><span class=demo-page-description-text>Hands-free help around the house. Google Home is a smart speaker with the Google Assistant built in. So whenever you need help, it's by your side</span></div></div><div${attr_default()("class", class_value_default()(["demo-page-review demo-page-delay-8", {
    "demo-page-loading": progress < 0.8
  }]))}><div class="demo-page-rating demo-page-delay-9">\u2605\u2605\u2605\u2605\u2606</div><span class=demo-page-description-text><strong>Cool gadget</strong> Google has created a nice device that provides music and information by voice control. The microphone is very good and will usually pick up commands from across the room. The speakers sound surprisingly good for such a small device. I wish it had tone control though.</span></div><div${attr_default()("class", class_value_default()(["demo-page-review demo-page-delay-10", {
    "demo-page-loading": progress < 1
  }]))}><div class="demo-page-rating demo-page-delay-11">\u2605\u2605\u2605\u2605\u2605</div><span class=demo-page-description-text><strong>Incredible sound profile!</strong> Easy setup, great sound for any room size. Adjustable bass and treble. Currently have two paired up for better whole house sound. </span></div><div${attr_default()("class", class_value_default()(["demo-page-footer demo-page-delay-12", {
    "demo-page-loading": progress < 0.1
  }]))}><div class=demo-page-delay-13>About</div><div class=demo-page-delay-14>Security</div><div class=demo-page-delay-15>Policies</div><div class=demo-page-delay-16>Help</div><div class=demo-page-delay-17>Sitemap</div></div></div>`);

  if (input.buffered || input.hydrateAll) {
    out.w(`<div class=demo-page-other><div class=demo-page-icon-inner><img${attr_default()("src", x)} alt></div></div>`);
  } else {
    out.w(`<div class=demo-page-marko><div class=demo-page-icon-inner><img${attr_default()("src", marko)} alt></div></div>`);
  }

  out.w("</div>");
}, {
  t: home_demo_page_index_marko_marko_componentType,
  i: true
}, home_demo_page_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-streaming/components/scroll-locked-stream-example/index.marko
const scroll_locked_stream_example_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const scroll_locked_stream_example_index_marko = (scroll_locked_stream_example_index_marko_marko_template);






const scroll_locked_stream_example_index_marko_marko_componentType = "O2xM2/Zw",
      scroll_locked_stream_example_index_marko_marko_component = {
  onCreate() {
    this.state = {
      progress: 0.1
    };
  },

  onMount() {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].intersectionRatio <= 0) {
        this.cleanProgress();
      } else {
        this.initProgress();
      }
    });
    this.observer.observe(this.getEl("root"));
  },

  onDestroy() {
    this.cleanProgress();
    this.observer.disconnect();
  },

  initProgress() {
    const updateProgress = () => {
      this.state.progress = (this.state.progress + 0.004) % 1.5;
      this.frame = requestAnimationFrame(updateProgress);
    };

    this.frame = requestAnimationFrame(updateProgress);
  },

  cleanProgress() {
    cancelAnimationFrame(this.frame);
  }

};
scroll_locked_stream_example_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<div${attr_default()("class", class_value_default()(["scroll-locked-stream-example", input.class]))}>`);

  render_tag_default()(home_demo_page_index_marko, {
    "progress": state.progress,
    "buffered": true,
    "label": "Buffered pages don't show content as it loads"
  }, out, _component, "0");

  render_tag_default()(home_demo_page_index_marko, {
    "progress": state.progress,
    "label": "Streaming pages show content incrementally",
    "class": "scroll-locked-progressive"
  }, out, _component, "1");

  out.w("</div>");
}, {
  t: scroll_locked_stream_example_index_marko_marko_componentType
}, scroll_locked_stream_example_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-streaming/index.marko
const home_streaming_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_streaming_index_marko = (home_streaming_index_marko_marko_template);





const home_streaming_index_marko_marko_componentType = "oXi1CFEM",
      home_streaming_index_marko_marko_component = {};
home_streaming_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(home_feature_block_index_marko, {
    "align": "left",
    "class": "home-streaming",
    "title": {
      "text": "Progressive Rendering",
      "anchorName": "streaming"
    },
    "content": {
      "renderBody": out => {
        out.w("<p>Marko streams content to your users as soon as it\u2019s ready. No waiting for client side JavaScript bundles or data requests to start rendering. HTML, assets, and images are loaded as soon as possible with asynchronous data loading in as it completes. </p>");
      }
    },
    "visual": {
      "renderBody": out => {
        render_tag_default()(scroll_locked_stream_example_index_marko, {
          "class": "home-streaming-example"
        }, out, _component, "5");
      }
    },
    "action": {
      "href": "https://dev.to/ryansolid/server-rendering-in-javascript-optimizing-performance-1jnk"
    }
  }, out, _component, "0");
}, {
  t: home_streaming_index_marko_marko_componentType,
  i: true
}, home_streaming_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-hydration/index.marko
const home_hydration_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_hydration_index_marko = (home_hydration_index_marko_marko_template);





const home_hydration_index_marko_marko_componentType = "Vzg+UK9V",
      home_hydration_index_marko_marko_component = {};
home_hydration_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(home_feature_block_index_marko, {
    "align": "right",
    "class": "home-hydration",
    "title": {
      "text": "Code Elimination",
      "anchorName": "hydration"
    },
    "content": {
      "renderBody": out => {
        out.w("<p>Marko only sends the code for interactive components to the browser. Its compiler automatically detects which components only need to be rendered on the server. This means less to download and less to execute. Your users can enjoy top tier performance regardless of their devices or networks.</p>");
      }
    },
    "visual": {
      "renderBody": out => {
        render_tag_default()(home_demo_page_index_marko, {
          "hydrateAll": true,
          "label": "Traditional hydration sends and re-excutes the code for all components",
          "class": "home-hydration-example"
        }, out, _component, "5");

        render_tag_default()(home_demo_page_index_marko, {
          "hydratePartial": true,
          "label": "Marko's hydration only sends the code for interactive components",
          "class": "home-hydration-example"
        }, out, _component, "6");
      }
    },
    "action": {
      "href": "https://medium.com/@mlrawlings/maybe-you-dont-need-that-spa-f2c659bc7fec"
    }
  }, out, _component, "0");
}, {
  t: home_hydration_index_marko_marko_componentType,
  i: true
}, home_hydration_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-performance/arrow.svg
/* harmony default export */ const arrow = ("/assets/d8c2123a.svg");
;// CONCATENATED MODULE: ./index/components/home-performance/index.marko
const home_performance_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_performance_index_marko = (home_performance_index_marko_marko_template);






const home_performance_index_marko_marko_componentType = "fgCxEVmZ",
      home_performance_index_marko_marko_component = {};
home_performance_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(home_feature_block_index_marko, {
    "class": "home-performance",
    "title": {
      "text": "Tailored Performance",
      "anchorName": "performance"
    },
    "content": {
      "renderBody": out => {
        out.w("<p>Marko's compiler generates code tailored to where it is going to run. You write your code once and it is optimized for both the server and browser. This is especially apparent on the server where Marko is several times faster than other popular solutions.</p>");
      }
    },
    "visual": {
      "renderBody": out => {
        out.w(`<div role=img aria-label="Marko templates are compiled to generate HTML Strings on the server and VDOM Nodes in the browser" class=home-performance-example><div role=presentation class=home-performance-input><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>h2</span>><span style=color:#FFF066>Images</span>&lt;/<span style=color:#FF4185>h2</span>>\n  &lt;<span style=color:#FF4185>div</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>item</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>items</span>>\n      &lt;<span style=color:#FF4185>div</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#A6E22E>alert</span>(<span style=color:#FFFFFF>item</span>.<span style=color:#FFFFFF>title</span>), <span style=color:#FFFFFF>item</span>)>\n        &lt;<span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>item</span>.<span style=color:#FFFFFF>img</span> />\n      &lt;/<span style=color:#FF4185>div</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n  &lt;/<span style=color:#FF4185>div</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre></div><div class=home-performance-arrow><img${attr_default()("src", arrow)} alt></div><div role=presentation class=home-performance-outputs><div class=home-performance-html><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>write</span>(<span style=color:#FFF066>"&lt;div>&lt;h2>Images&lt;/h2>&lt;div>"</span>);\n<span style=color:#FF4185>for</span> (<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>item</span> <span style=color:#FF4185>of</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>items</span>) {\n  <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>write</span>(<span style=color:#FFF066>\`&lt;div>&lt;img</span><span style=color:#66D9EF>\${</span><span style=color:#A6E22E>_marko_attr</span><span style=color:#FFF066>(</span><span style=color:#FFF066>"src"</span><span style=color:#FFF066>, </span><span style=color:#FFFFFF>item</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>img</span><span style=color:#FFF066>)</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>>&lt;/div>\`</span>);\n}\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>write</span>(<span style=color:#FFF066>"&lt;/div>&lt;/div>"</span>);\n</pre><div class=home-performance-output-overlay>HTML Strings <small>on the server</small></div></div><div class=home-performance-vdom><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>beginElement</span>(<span style=color:#FFF066>"div"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#FFF066>"0"</span>, <span style=color:#FFFFFF>component</span>);\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>beginElement</span>(<span style=color:#FFF066>"h2"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#FFF066>"1"</span>, <span style=color:#FFFFFF>component</span>);\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>text</span>(<span style=color:#FFF066>"Images"</span>, <span style=color:#FFFFFF>component</span>);\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>endElement</span>();\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>beginElement</span>(<span style=color:#FFF066>"div"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#FFF066>"2"</span>, <span style=color:#FFFFFF>component</span>);\n{\n  <span style=color:#66D9EF;font-style:italic>let</span> <span style=color:#FFFFFF>_keyValue</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n  <span style=color:#FF4185>for</span> (<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>item</span> <span style=color:#FF4185>of</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>items</span>) {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>_keyScope</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\`[</span><span style=color:#66D9EF>\${</span><span style=color:#FFFFFF>_keyValue</span><span style=color:#FF4185>++</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>]\`</span>;\n    <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>beginElement</span>(<span style=color:#FFF066>"div"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#FFF066>"3"</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>_keyScope</span>, <span style=color:#FFFFFF>component</span>, <span style=color:#AE81FF>null</span>, <span style=color:#AE81FF>0</span>, {\n      onclick: <span style=color:#FFFFFF>_component</span>.<span style=color:#A6E22E>d</span>(<span style=color:#FFF066>"click"</span>, <span style=color:#FFF066>"onBannerClick"</span>, <span style=color:#AE81FF>false</span>, [<span style=color:#FFFFFF>item</span>]),\n    });\n    <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>element</span>(<span style=color:#FFF066>"img"</span>, { src: <span style=color:#FFFFFF>item</span>.<span style=color:#FFFFFF>img</span> }, <span style=color:#FFF066>"4"</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>_keyScope</span>, <span style=color:#FFFFFF>component</span>, <span style=color:#AE81FF>0</span>);\n    <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>endElement</span>();\n  }\n}\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>endElement</span>();\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>endElement</span>();\n</pre><div class=home-performance-output-overlay>VDOM Nodes <small>in the browser</small></div></div></div></div>`);
      }
    },
    "action": {
      "href": "https://github.com/marko-js/isomorphic-ui-benchmarks",
      "text": "See the Benchmarks"
    }
  }, out, _component, "0");
}, {
  t: home_performance_index_marko_marko_componentType,
  i: true
}, home_performance_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/components/home-tooling/screen.png
/* harmony default export */ const screen = ("/assets/2f2fa042.png");
;// CONCATENATED MODULE: ./index/components/home-tooling/index.marko
const home_tooling_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_tooling_index_marko = (home_tooling_index_marko_marko_template);






const home_tooling_index_marko_marko_componentType = "2dXGayo5",
      home_tooling_index_marko_marko_component = {};
home_tooling_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(home_feature_block_index_marko, {
    "align": "right",
    "class": "home-tooling",
    "title": {
      "text": "Editor Support",
      "anchorName": "tooling"
    },
    "content": {
      "renderBody": out => {
        out.w("<p>Marko provides <a href=https://marketplace.visualstudio.com/items?itemName=Marko-JS.marko-vscode alt=\"Marko VSCode Extension\">first-class support</a> for the VSCode editor including syntax highlighting, Autocompletion, Hyperclick to quickly jump to referenced files, and Pretty printing to keep your code readable.</p><p>Community plugins also provide syntax highlighting for Sublime, Atom, Webstorm &amp; others!</p>");
      }
    },
    "visual": {
      "class": "home-tooling__screenshot-window",
      "renderBody": out => {
        out.w(`<div class=home-tooling__screenshot-title><div class=red></div><div class=yellow></div><div class=green></div></div><div class=home-tooling__screenshot-screen><img${attr_default()("src", screen)} alt></div>`);
      }
    },
    "action": {
      "href": "/docs/editor-plugins",
      "text": "View editor plugins"
    }
  }, out, _component, "0");
}, {
  t: home_tooling_index_marko_marko_componentType,
  i: true
}, home_tooling_index_marko_marko_component);
// EXTERNAL MODULE: external "gh-got"
var external_gh_got_ = __webpack_require__(273);
var external_gh_got_default = /*#__PURE__*/__webpack_require__.n(external_gh_got_);
;// CONCATENATED MODULE: ../logos/stackoverflow.svg
/* harmony default export */ const stackoverflow = ("/assets/a90d0773.svg");
;// CONCATENATED MODULE: ../logos/discord.svg
/* harmony default export */ const discord = ("/assets/3b47f103.svg");
;// CONCATENATED MODULE: ../logos/twitter.svg
/* harmony default export */ const twitter = ("/assets/f7a67758.svg");
;// CONCATENATED MODULE: external "marko/dist/core-tags/core/await/renderer.js"
const renderer_js_namespaceObject = require("marko/dist/core-tags/core/await/renderer.js");;
var renderer_js_default = /*#__PURE__*/__webpack_require__.n(renderer_js_namespaceObject);
;// CONCATENATED MODULE: ./index/components/home-community/index.marko
const home_community_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const home_community_index_marko = (home_community_index_marko_marko_template);











const home_community_index_marko_marko_componentType = "nqj++zlY",
      home_community_index_marko_marko_component = {};
home_community_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(home_feature_block_index_marko, {
    "colors": ["#fff"],
    "title": {
      "text": "Join the Community",
      "anchorName": "community",
      "class": "home-community__title"
    },
    "content": {
      "renderBody": out => {
        out.w("<p>Need help? Want to contribute? Get involved in the Marko Community!</p>");
      }
    },
    "visual": {
      "renderBody": out => {
        out.w(`<div class=home-community__locations><div class=home-community__location><a href=https://stackoverflow.com/questions/tagged/marko class=home-community__logo><img${attr_default()("src", stackoverflow)} alt=StackOverflow></a><span>Ask & answer StackOverflow questions with the <a href=https://stackoverflow.com/questions/tagged/marko>marko tag</a></span></div><div class=home-community__location><a href=https://discord.gg/marko class=home-community__logo><img${attr_default()("src", discord)} alt=Discord></a><span>Hang out in our <a href=https://discord.gg/marko>Discord server</a>, ask questions, & discuss project direction</span></div><div class=home-community__location><a href=https://twitter.com/search?q=%23markojs%20OR%20%40markodevteam&f=live class=home-community__logo><img${attr_default()("src", twitter)} alt=Twitter></a><span>Tweet to <a href=https://twitter.com/MarkoDevTeam>@MarkoDevTeam</a> or with the <a href=https://twitter.com/search?q=%23markojs%20OR%20%40markodevteam&f=live>#markojs</a> hashtag</span></div><div class=home-community__location><a href=https://github.com/marko-js/marko class=home-community__logo><img${attr_default()("src", github)} alt=GitHub></a><span>Browse the code, open issues, & make pull requests on the <a href=https://github.com/marko-js/marko>GitHub repo</a></span></div></div>`);
      }
    },
    "breakout": {
      "renderBody": out => {
        out.w("<div class=home-community__contributors>");

        render_tag_default()((renderer_js_default()), {
          "_provider": external_gh_got_default()('/repos/marko-js/marko/contributors?per_page=100'),
          "_name": "ghGot('/repos/marko-js/marko/contributors?per_page=100')",
          "then": {
            "renderBody": (out, {
              body
            }) => {
              let _keyValue = 0;

              for (const contributor of body) {
                const _keyScope = `[${_keyValue++}]`;
                out.w(`<img${attr_default()("src", `${contributor.avatar_url}&s=64`)}${attr_default()("alt", contributor.login)} loading=lazy>`);
              }
            }
          }
        }, out, _component, "29");

        out.w("</div>");
      }
    }
  }, out, _component, "0");
}, {
  t: home_community_index_marko_marko_componentType,
  i: true
}, home_community_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/app-layout/favicon.png
/* harmony default export */ const favicon = ("/assets/64c1e059.png");
;// CONCATENATED MODULE: ../components/app-layout/components/layout-search/search.png
/* harmony default export */ const search = ("/assets/e213de74.png");
;// CONCATENATED MODULE: ../components/app-layout/components/layout-search/index.marko
const layout_search_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const layout_search_index_marko = (layout_search_index_marko_marko_template);






const layout_search_index_marko_marko_componentType = "HkYzEWAp",
      layout_search_index_marko_marko_component = {};
layout_search_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<form${data_marko_default()(out, _component, {
    "onclick": _component.d("click", 'focus', false),
    "onsubmit": _component.d("submit", 'search', false)
  })}${attr_default()("class", class_value_default()(["site-search", input.class]))}><img${attr_default()("src", search)} alt><input${data_marko_default()(out, _component, {
    "onblur": _component.d("blur", 'shrink', false),
    "onfocus": _component.d("focus", 'grow', false)
  }, "@input", _component)} type=search placeholder="search the docs..."></form>`);
}, {
  t: layout_search_index_marko_marko_componentType,
  s: true
}, layout_search_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/app-layout/components/layout-header/index.marko
const layout_header_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const layout_header_index_marko = (layout_header_index_marko_marko_template);







const layout_header_index_marko_marko_componentType = "OIKmBXjW",
      layout_header_index_marko_marko_component = {};
layout_header_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<header${data_marko_default()(out, _component, 0, "@header", _component)} class=site-header><div class=content><a href=/ ><img${attr_default()("src", marko)} alt="Marko Home" class=site-logo></a><div class=stuff><nav class=site-menu><a href=/docs/getting-started/ >Docs</a><a href=/try-online>Try Online</a><a href=https://github.com/marko-js/marko>GitHub</a>`);

  render_tag_default()(layout_search_index_marko, {
    "class": "search"
  }, out, _component, "8");

  out.w(`</nav><button${data_marko_default()(out, _component, {
    "onclick": _component.d("click", "toggleMenu", false)
  })} class=menu>&#9776;</button></div></div></header>`);
}, {
  t: layout_header_index_marko_marko_componentType,
  s: true
}, layout_header_index_marko_marko_component);
;// CONCATENATED MODULE: external "marko/docs/structure.json"
const structure_json_namespaceObject = require("marko/docs/structure.json");;
var structure_json_default = /*#__PURE__*/__webpack_require__.n(structure_json_namespaceObject);
// EXTERNAL MODULE: ../utils/format-slug.js
var format_slug = __webpack_require__(174);
var format_slug_default = /*#__PURE__*/__webpack_require__.n(format_slug);
// EXTERNAL MODULE: ../utils/create-overview-tree.js
var create_overview_tree = __webpack_require__(130);
var create_overview_tree_default = /*#__PURE__*/__webpack_require__.n(create_overview_tree);
;// CONCATENATED MODULE: external "marko/dist/runtime/helpers/to-string"
const to_string_namespaceObject = require("marko/dist/runtime/helpers/to-string");;
var to_string_default = /*#__PURE__*/__webpack_require__.n(to_string_namespaceObject);
;// CONCATENATED MODULE: external "marko/package.json"
const package_json_namespaceObject = require("marko/package.json");;
;// CONCATENATED MODULE: ../components/app-layout/components/layout-sidebar/components/version-switcher/index.marko
const version_switcher_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const version_switcher_index_marko = (version_switcher_index_marko_marko_template);





const version_switcher_index_marko_marko_componentType = "07hv1F0+",
      version_switcher_index_marko_marko_component = {};
version_switcher_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<select${data_marko_default()(out, _component, {
    "onchange": _component.d("change", 'switchVersion', false)
  })}><option value=current selected>${(0,escape_xml_namespaceObject.x)(package_json_namespaceObject.version)}</option><option value=http://marko-v4.github.io/docs/ >4.x</option><option value=http://v3.markojs.com/docs/ >3.x</option><option value=http://marko-v2.github.io/docs/ >2.x</option></select>`);
}, {
  t: version_switcher_index_marko_marko_componentType,
  s: true
}, version_switcher_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/app-layout/components/layout-sidebar/index.marko
const layout_sidebar_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const layout_sidebar_index_marko = (layout_sidebar_index_marko_marko_template);



const parentTree = create_overview_tree_default()((structure_json_default()));

function getDocData(currentDoc, section, doc) {
  let docSlug;
  let selected;
  let docTitle = doc;

  if (typeof doc === 'object') {
    docTitle = doc.title;
    let sectionTitleSlug = format_slug_default()(section.title);
    let titleSlug = format_slug_default()(docTitle);
    docSlug = `${sectionTitleSlug}-${titleSlug}-overview`;
    selected = parentTree[currentDoc] && parentTree[currentDoc][docSlug] || docSlug === currentDoc;
  } else {
    docSlug = format_slug_default()(docTitle);
    selected = docSlug === currentDoc;
  }

  docSlug += '/';
  return {
    docTitle,
    docSlug,
    selected
  };
}












const layout_sidebar_index_marko_marko_componentType = "mFesaajv",
      layout_sidebar_index_marko_marko_component = {};
layout_sidebar_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  function _sidebarOverview(out, {
    structure,
    isNested
  }) {
    let _keyValue = 0;

    for (const section of structure) {
      const _keyScope = `[${_keyValue++}]`;
      out.w(`<ul${attr_default()("class", class_value_default()(isNested ? "toc toc-level1" : "toc-level0"))}>`);
      {
        if (!isNested) {
          out.w("<li class=section>");
          {
            let title = section.title.toUpperCase();
            let overviewSlug = format_slug_default()(title);
            out.w(`<a${attr_default()("href", `/docs/${overviewSlug}-overview/`)}>${(0,escape_xml_namespaceObject.x)(title)}</a>`);
          }
          out.w("</li>");
        }

        let _keyValue2 = 0;

        for (const doc of section.docs) {
          const _keyScope2 = `[${_keyValue2++ + _keyScope}]`;
          out.w("<li>");
          {
            let {
              docTitle,
              docSlug,
              selected
            } = getDocData(input.currentDoc, section, doc);
            out.w(`<a${attr_default()("class", class_value_default()({
              selected
            }))}${attr_default()("href", `/docs/${docSlug}`)}>${(0,escape_xml_namespaceObject.x)(docTitle)}</a>`);

            if (selected) {
              if (typeof doc === 'object') {
                dynamic_tag_default()(out, _sidebarOverview, () => ({
                  "structure": [doc],
                  "isNested": true
                }), null, null, null, _component, "6" + _keyScope2);
              } else if (typeof doc === 'string') {
                out.w(to_string_default()(input.toc));
              }
            }
          }
          out.w("</li>");
        }
      }
      out.w("</ul>");
    }
  }

  out.w(`<div${data_marko_default()(out, _component, 0, "@sidebar", _component)}${attr_default()("class", class_value_default()(["doc-sidebar", input.class]))}><button${data_marko_default()(out, _component, {
    "onclick": _component.d("click", 'hide', false)
  })} class=close>&#10005;</button><h1>Marko `);

  render_tag_default()(version_switcher_index_marko, {}, out, _component, "9");

  out.w("</h1>");

  render_tag_default()(layout_search_index_marko, {
    "class": "search"
  }, out, _component, "10");

  dynamic_tag_default()(out, _sidebarOverview, () => ({
    "structure": (structure_json_default())
  }), null, null, null, _component, "11");

  out.w("</div>");
}, {
  t: layout_sidebar_index_marko_marko_componentType,
  s: true
}, layout_sidebar_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/app-footer/openjsf.png
/* harmony default export */ const openjsf = ("/assets/f9c991e7.png");
;// CONCATENATED MODULE: ../components/app-footer/osi.png
/* harmony default export */ const osi = ("/assets/4dab80b0.png");
;// CONCATENATED MODULE: ../components/app-footer/ebay.svg
/* harmony default export */ const ebay = ("/assets/0b079e0f.svg");
;// CONCATENATED MODULE: ../components/app-footer/index.marko
const app_footer_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const app_footer_index_marko = (app_footer_index_marko_marko_template);







const app_footer_index_marko_marko_componentType = "TUdiMyv1",
      app_footer_index_marko_marko_component = {};
app_footer_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<footer${attr_default()("class", class_value_default()(["site-footer", input.class]))}><a href=https://openjsf.org/  class=openjsf><img${attr_default()("src", openjsf)} alt> <span><span class=bold>OpenJS</span>&nbsp;<span class=light>Foundation</span></span></a><div class=separator></div><a href=https://github.com/marko-js/marko/blob/master/LICENSE class=osi><img${attr_default()("src", osi)} alt> MIT&nbsp;License</a><div class=separator></div><a href=https://github.com/eBay class=ebay><img${attr_default()("src", ebay)} alt=eBay> open&nbsp;source</a></footer>`);
}, {
  t: app_footer_index_marko_marko_componentType,
  i: true
}, app_footer_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/app-layout/components/google-analytics/index.marko
const google_analytics_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const google_analytics_index_marko = (google_analytics_index_marko_marko_template);



const google_analytics_index_marko_marko_componentType = "gYe4sOI0",
      google_analytics_index_marko_marko_component = {};
google_analytics_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const {
    trackingId,
    domain
  } = input;

  if (trackingId && domain) {
    out.w(`<script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n    ga('create', '${to_string_default()(trackingId)}', '${to_string_default()(domain)}');\n    ga('send', 'pageview');\n  </script>`);
  }
}, {
  t: google_analytics_index_marko_marko_componentType,
  i: true
}, google_analytics_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/discord-link/index.marko
const discord_link_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const discord_link_index_marko = (discord_link_index_marko_marko_template);




const discord_link_index_marko_marko_componentType = "AsCwjfza",
      discord_link_index_marko_marko_component = {};
discord_link_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<a href=https://discord.gg/marko target=_blank class=discord-button><img${attr_default()("src", discord)} alt="Chat in Marko's Discord Server"></a>`);
}, {
  t: discord_link_index_marko_marko_componentType,
  i: true
}, discord_link_index_marko_marko_component);
;// CONCATENATED MODULE: ../components/app-layout/index.marko
const app_layout_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const app_layout_index_marko = (app_layout_index_marko_marko_template);
















const app_layout_index_marko_marko_componentType = "Z1tTMg7Q",
      app_layout_index_marko_marko_component = {};
app_layout_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<!doctype html><html lang=en><head><meta charset=UTF-8><title>${(0,escape_xml_namespaceObject.x)(input.title ? input.title + " | Marko" : "Marko")}</title><link rel=icon type=image/png sizes=32x32${attr_default()("href", favicon)}><meta name=viewport content="width=device-width, initial-scale=1"><meta name=Description content="Marko is a friendly (and fast!) UI library that makes building web apps fun.">`);
  out.___renderAssets && out.___renderAssets();
  out.w(`</head><body${attr_default()("class", class_value_default()(input.class))}>`);

  render_tag_default()(layout_header_index_marko, {}, out, _component, "8");

  render_tag_default()(layout_sidebar_index_marko, {
    "currentDoc": input.currentDoc,
    "toc": input.toc
  }, out, _component, "9");

  out.w("<main class=content>");

  dynamic_tag_default()(out, input.renderBody, null, null, null, null, _component, "11");

  out.w("</main>");

  if (input.footer !== false) {
    render_tag_default()(app_footer_index_marko, {}, out, _component, "12");
  }

  render_tag_default()(google_analytics_index_marko, {
    "trackingId": "UA-66854919-1",
    "domain": "markojs.com"
  }, out, _component, "13");

  if (input.discord !== false) {
    render_tag_default()(discord_link_index_marko, {}, out, _component, "14");
  }

  render_tag_default()((init_components_tag_js_default()), {}, out, _component, "15");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "16");

  render_tag_default()((preferred_script_location_tag_js_default()), {}, out, _component, "17");

  out.w("</body></html>");
}, {
  t: app_layout_index_marko_marko_componentType,
  i: true
}, app_layout_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/index.marko
const index_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const index_index_marko = (index_index_marko_marko_template);












const index_index_marko_marko_componentType = "WEBG6A5X",
      index_index_marko_marko_component = {};
index_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(app_layout_index_marko, {
    "class": "home",
    "renderBody": out => {
      render_tag_default()(home_hero_index_marko, {}, out, _component, "1");

      render_tag_default()(home_features_index_marko, {}, out, _component, "2");

      render_tag_default()(home_language_index_marko, {}, out, _component, "3");

      render_tag_default()(home_streaming_index_marko, {}, out, _component, "4");

      render_tag_default()(home_hydration_index_marko, {}, out, _component, "5");

      render_tag_default()(home_performance_index_marko, {}, out, _component, "6");

      render_tag_default()(home_tooling_index_marko, {}, out, _component, "7");

      render_tag_default()(home_community_index_marko, {}, out, _component, "8");
    }
  }, out, _component, "0");
}, {
  t: index_index_marko_marko_componentType,
  i: true
}, index_index_marko_marko_component);
;// CONCATENATED MODULE: ./index/index.marko?server-entry
const index_marko_server_entry_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const index_marko_server_entry = (index_marko_server_entry_marko_template);




function index_marko_server_entry_renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    if (assets.js) {
      const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
      assets.js.forEach(js => {
        this.write(`<script src=${JSON.stringify(__webpack_require__.p + js)}${nonceAttr} async></script>`);
      });
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(`<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + css)}>`);
      });
    }
  }
}

function index_marko_server_entry_outFlushOverride() {
  this.___renderAssets();

  this.flush();
}

function index_marko_server_entry_outEndOverride(data, encoding, callback) {
  this.___renderAssets();

  this.end(data, encoding, callback);
}






const index_marko_server_entry_marko_componentType = "WEBG6A5X",
      index_marko_server_entry_marko_component = {};
index_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const curAssets = out.___assets;
  const newAssets = index_js_manifest.getAssets("index_WEBG", out.global.buildName);

  if (curAssets) {
    if (newAssets.js) {
      if (curAssets.js) {
        for (const js of newAssets.js) {
          if (!curAssets.js.includes(js)) {
            curAssets.js.push(js);
          }
        }
      } else {
        curAssets.js = newAssets.js;
      }
    }

    if (newAssets.css) {
      if (curAssets.css) {
        for (const css of newAssets.css) {
          if (!curAssets.css.includes(css)) {
            curAssets.css.push(css);
          }
        }
      } else {
        curAssets.css = newAssets.css;
      }
    }
  } else {
    out.___flush = out.flush;
    out.___end = out.end;
    out.___renderAssets = index_marko_server_entry_renderAssets;
    out.___assets = newAssets;
    out.flush = index_marko_server_entry_outFlushOverride;
    out.end = index_marko_server_entry_outEndOverride;
  }

  render_tag_default()(index_index_marko, input, out, _component, "0");

  render_tag_default()((init_components_tag_js_default()), {}, out, _component, "1");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "2");
}, {
  t: index_marko_server_entry_marko_componentType,
  i: true
}, index_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ../../node_modules/@marko-tags/subscribe/index.marko
const subscribe_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const subscribe_index_marko = (subscribe_index_marko_marko_template);


const subscribe_index_marko_marko_componentType = "ywutLLeS",
      subscribe_index_marko_marko_component = {
  onMount() {
    this.listen(this.input);
  },

  onInput(input) {
    if (this.target && this.target !== input.to) {
      this.onDestroy();
      this.listen(input);
    }
  },

  onDestroy() {
    this.subscription.removeAllListeners();
  },

  listen(input) {
    var target = this.target = input.to;
    var subscription = this.subscription = this.subscribeTo(target);
    var events = input.__events;
    var len = events.length;

    for (var i = 0; i < len; i += 2) {
      var method = events[i];
      var name = events[i + 1];
      subscription[method](name, this.emit.bind(this, name));
    }
  }

};
subscribe_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {}, {
  t: subscribe_index_marko_marko_componentType
}, subscribe_index_marko_marko_component);
;// CONCATENATED MODULE: ./try-online/components/loader/index.marko
const loader_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const loader_index_marko = (loader_index_marko_marko_template);





const loader_index_marko_marko_componentType = "kW7iJzWN",
      loader_index_marko_marko_component = {
  onCreate() {
    this.state = {
      component: undefined,
      show: false
    };
  },

  async onMount() {
    const rootComponent =  false && (0);
    await rootComponent.loading;
    this.state.component = rootComponent;
    this.checkIfLargeEnough();
  },

  checkIfLargeEnough() {
    var windowSize = document.body.innerWidth || document.body.clientWidth;
    this.state.show = windowSize > 1000;
  }

};
loader_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  if (state.component) {
    if (state.show) {
      dynamic_tag_default()(out, state.component, () => ({
        "examples": input.examples
      }), null, null, null, _component, "0");
    } else {
      render_tag_default()(subscribe_index_marko, {
        "to": window,
        "__events": ["on", "resize"],
        "__events": ["on", "resize"]
      }, out, _component, "1", [["resize", "checkIfLargeEnough", false]]);

      out.w("<div class=too-small><div class=overlay><h1>Screen width too small</h1><h2>Please increase the window size or rotate to load.</h2><h3>If you are on a mobile phone, please open on a desktop</h3><h4><a href=/docs/getting-started/ >View Docs</a></h4></div></div>");
    }
  } else {
    out.w("<div class=try-loader-container><div class=try-loader><span class=green-loader></span></div></div>");
  }
}, {
  t: loader_index_marko_marko_componentType
}, loader_index_marko_marko_component);
;// CONCATENATED MODULE: ./try-online/index.marko
const try_online_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const try_online_index_marko = (try_online_index_marko_marko_template);





const try_online_index_marko_marko_componentType = "gkPNJYwS",
      try_online_index_marko_marko_component = {};
try_online_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  render_tag_default()(app_layout_index_marko, {
    "title": "Try online",
    "footer": false,
    "discord": false,
    "renderBody": out => {
      render_tag_default()(loader_index_marko, {}, out, _component, "1");
    }
  }, out, _component, "0");
}, {
  t: try_online_index_marko_marko_componentType,
  i: true
}, try_online_index_marko_marko_component);
;// CONCATENATED MODULE: ./try-online/index.marko?server-entry
const try_online_index_marko_server_entry_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const try_online_index_marko_server_entry = (try_online_index_marko_server_entry_marko_template);




function try_online_index_marko_server_entry_renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    if (assets.js) {
      const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
      assets.js.forEach(js => {
        this.write(`<script src=${JSON.stringify(__webpack_require__.p + js)}${nonceAttr} async></script>`);
      });
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(`<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + css)}>`);
      });
    }
  }
}

function try_online_index_marko_server_entry_outFlushOverride() {
  this.___renderAssets();

  this.flush();
}

function try_online_index_marko_server_entry_outEndOverride(data, encoding, callback) {
  this.___renderAssets();

  this.end(data, encoding, callback);
}






const try_online_index_marko_server_entry_marko_componentType = "gkPNJYwS",
      try_online_index_marko_server_entry_marko_component = {};
try_online_index_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const curAssets = out.___assets;
  const newAssets = index_js_manifest.getAssets("try-online_gkPN", out.global.buildName);

  if (curAssets) {
    if (newAssets.js) {
      if (curAssets.js) {
        for (const js of newAssets.js) {
          if (!curAssets.js.includes(js)) {
            curAssets.js.push(js);
          }
        }
      } else {
        curAssets.js = newAssets.js;
      }
    }

    if (newAssets.css) {
      if (curAssets.css) {
        for (const css of newAssets.css) {
          if (!curAssets.css.includes(css)) {
            curAssets.css.push(css);
          }
        }
      } else {
        curAssets.css = newAssets.css;
      }
    }
  } else {
    out.___flush = out.flush;
    out.___end = out.end;
    out.___renderAssets = try_online_index_marko_server_entry_renderAssets;
    out.___assets = newAssets;
    out.flush = try_online_index_marko_server_entry_outFlushOverride;
    out.end = try_online_index_marko_server_entry_outEndOverride;
  }

  render_tag_default()(try_online_index_marko, input, out, _component, "0");

  render_tag_default()((init_components_tag_js_default()), {}, out, _component, "1");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "2");
}, {
  t: try_online_index_marko_server_entry_marko_componentType,
  i: true
}, try_online_index_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ../components/code-block-marko/index.marko
const code_block_marko_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const code_block_marko_index_marko = (code_block_marko_index_marko_marko_template);




const code_block_marko_index_marko_marko_componentType = "UUumdCIE",
      code_block_marko_index_marko_marko_component = {};
code_block_marko_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<div class=marko-code-block><button${data_marko_default()(out, _component, {
    "onclick": _component.d("click", 'changeSyntax', false)
  })} title="Switch Syntax" class=switch-syntax>\u21C4</button><div class="code html">${to_string_default()(input.html)}</div><div class="code concise">${to_string_default()(input.concise)}</div></div>`);
}, {
  t: code_block_marko_index_marko_marko_componentType,
  s: true
}, code_block_marko_index_marko_marko_component);
;// CONCATENATED MODULE: ../utils/toc-registry.js
/* harmony default export */ const toc_registry = (new Map());
;// CONCATENATED MODULE: ../components/code-block-marko/index.marko?server-entry
const code_block_marko_index_marko_server_entry_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const code_block_marko_index_marko_server_entry = (code_block_marko_index_marko_server_entry_marko_template);




function code_block_marko_index_marko_server_entry_renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    if (assets.js) {
      const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
      assets.js.forEach(js => {
        this.write(`<script src=${JSON.stringify(__webpack_require__.p + js)}${nonceAttr} async></script>`);
      });
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(`<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + css)}>`);
      });
    }
  }
}

function code_block_marko_index_marko_server_entry_outFlushOverride() {
  this.___renderAssets();

  this.flush();
}

function code_block_marko_index_marko_server_entry_outEndOverride(data, encoding, callback) {
  this.___renderAssets();

  this.end(data, encoding, callback);
}






const code_block_marko_index_marko_server_entry_marko_componentType = "UUumdCIE",
      code_block_marko_index_marko_server_entry_marko_component = {};
code_block_marko_index_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const curAssets = out.___assets;
  const newAssets = index_js_manifest.getAssets("code-block-marko_UUum", out.global.buildName);

  if (curAssets) {
    if (newAssets.js) {
      if (curAssets.js) {
        for (const js of newAssets.js) {
          if (!curAssets.js.includes(js)) {
            curAssets.js.push(js);
          }
        }
      } else {
        curAssets.js = newAssets.js;
      }
    }

    if (newAssets.css) {
      if (curAssets.css) {
        for (const css of newAssets.css) {
          if (!curAssets.css.includes(css)) {
            curAssets.css.push(css);
          }
        }
      } else {
        curAssets.css = newAssets.css;
      }
    }
  } else {
    out.___flush = out.flush;
    out.___end = out.end;
    out.___renderAssets = code_block_marko_index_marko_server_entry_renderAssets;
    out.___assets = newAssets;
    out.flush = code_block_marko_index_marko_server_entry_outFlushOverride;
    out.end = code_block_marko_index_marko_server_entry_outEndOverride;
  }

  render_tag_default()(code_block_marko_index_marko, input, out, _component, "0");

  render_tag_default()((init_components_tag_js_default()), {}, out, _component, "1");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "2");
}, {
  t: code_block_marko_index_marko_server_entry_marko_componentType,
  s: true
}, code_block_marko_index_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ../../examples/examples/color-picker/README.md
const README_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const README = (README_marko_template);

toc_registry.set("../../examples/examples/color-picker/README.md", "<ul class=\"toc toc-level1\"><li><a href=\"#introduction\">Introduction</a></li><li><a href=\"#getting-started\">Getting Started</a></li><li><a href=\"#creating-components\">Creating Components</a><ul class=\"toc toc-level2\"><li><a href=\"#child-components\">Child Components</a></li></ul></li><li><a href=\"#importing-modules\">Importing Modules</a></li><li><a href=\"#testing\">Testing</a></li><li><a href=\"#conclusion\">Conclusion</a></li><li><a href=\"#additional-resources\">Additional Resources</a></li></ul>");




const README_marko_componentType = "sXfupxKz",
      README_marko_component = {};
README_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=building-a-color-picker-component><a name=building-a-color-picker-component class=anchor href=#building-a-color-picker-component><span class=header-link></span></a>Building a Color Picker Component</h1><p align=center><img width=100% src=https://user-images.githubusercontent.com/3771924/26844826-b2334098-4ac2-11e7-81ac-ca2280ef3bbd.png></p><h2 id=introduction><a name=introduction class=anchor href=#introduction><span class=header-link></span></a>Introduction</h2><p>Marko makes building UI components extremely easy and fun! Today we are going to build a color picker component from scratch. We are going to learn how to:</p><ul><li>Create a project using <a href=https://github.com/marko-js/cli>marko-cli</a></li><li>Create a basic and customizable color picker component</li></ul><p>Our final goal for today is create this component:</p><p align=center><img src=https://image.ibb.co/gcmLFk/color_picker_complete.png></p><p><a href=/try-online/?example=Color+Picker>Try Online</a></p><h2 id=getting-started><a name=getting-started class=anchor href=#getting-started><span class=header-link></span></a>Getting Started</h2><p>The quickest way to get up and running with Marko is to use the <a href=https://github.com/marko-js/cli/blob/master/packages/create/README.md><code>@marko/create</code> cli</a>.</p><p>For this tutorial lets tell <code>@marko/create</code> to give us a basic boilerplate by running the following command:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npx @marko/create --template basic --name color-picker-tutorial\n</pre><p>Once the create command has finished, we can move into our new directory and get a development server up and running like so:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>cd</span> ./color-picker-tutorial\nnpm run dev\n</pre><p>This should open your default browser automatically.</p><h2 id=creating-components><a name=creating-components class=anchor href=#creating-components><span class=header-link></span></a>Creating Components</h2><blockquote class=null><p>NOTE: For a more detailed documentation of components, please see the <a href=/docs/class-components/ >markojs.com components documentation</a></p></blockquote><p>In our new project, components are located in the <code>color-picker-tutorial/src/components/</code> directory. Next we need to create our component in the <code>components/</code> directory, which should look like this:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>color-picker-tutorial/\n  src/\n    components/\n      color-picker/\n        index.marko\n</pre><p>Marko also supports creating components using the file name. For example, the following is a valid directory structure:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>color-picker-tutorial/\n  src/  \n    components/\n      color-picker.marko\n</pre><p>Creating nested component directories is not required, but we recommend isolating most components in their own directories. Many components will contain additional files and tests that live alongside the component. Too many components living in a single directory will become very untidy and difficult to manage.</p><p>Let&#39;s begin by adding some initial component code to the <code>color-picker</code>.</p><p><strong>components/color-picker/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ul</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>>\n    &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{color: <span style=color:#FFFFFF>color</span>}>\n<span style=color:#FFF066>      </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n            color: <span style=color:#FFFFFF>color</span>\n        <span style=color:#F8F8F0;background-color:#FF4185>}</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "44");

  out.w("<p><code>input</code> in a Marko component is the input data that is passed to the component when it is being rendered. Let&#39;s modify our <code>index</code> route to demonstrate how a parent component can use our <code>color-picker</code>:</p><p><strong>src/pages/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>html</span>>\n  &lt;<span style=color:#FF4185>head</span>>\n    &lt;<span style=color:#FF4185>title</span>><span style=color:#FFF066>Welcome | Marko Demo</span>&lt;/<span style=color:#FF4185>title</span>>\n  &lt;/<span style=color:#FF4185>head</span>>\n  &lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Welcome to Marko!</span>&lt;/<span style=color:#FF4185>h1</span>>\n    &lt;<span style=color:#FF4185>color-picker</span> <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span>[\n      <span style=color:#FFF066>'#333745'</span>,\n      <span style=color:#FFF066>'#E63462'</span>,\n      <span style=color:#FFF066>'#FE5F55'</span>,\n      <span style=color:#FFF066>'#C7EFCF'</span>,\n      <span style=color:#FFF066>'#EEF5DB'</span>,\n      <span style=color:#FFF066>'#00B4A6'</span>,\n      <span style=color:#FFF066>'#007DB6'</span>,\n      <span style=color:#FFF066>'#FFE972'</span>,\n      <span style=color:#FFF066>'#9C7671'</span>,\n      <span style=color:#FFF066>'#0C192B'</span>\n    ]/>\n  &lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>html</span>\n    <span style=color:#FF4185>head</span>\n        <span style=color:#FF4185>title</span> --<span style=color:#FFF066> Welcome | Marko Demo</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Welcome to Marko!</span>\n        <span style=color:#FF4185>color-picker</span> <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span>[\n            <span style=color:#FFF066>\"#333745\"</span>,\n            <span style=color:#FFF066>\"#E63462\"</span>,\n            <span style=color:#FFF066>\"#FE5F55\"</span>,\n            <span style=color:#FFF066>\"#C7EFCF\"</span>,\n            <span style=color:#FFF066>\"#EEF5DB\"</span>,\n            <span style=color:#FFF066>\"#00B4A6\"</span>,\n            <span style=color:#FFF066>\"#007DB6\"</span>,\n            <span style=color:#FFF066>\"#FFE972\"</span>,\n            <span style=color:#FFF066>\"#9C7671\"</span>,\n            <span style=color:#FFF066>\"#0C192B\"</span>\n        <span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "51");

  out.w("<p>Our dev server will indicate that the changes are being compiled and our browser will refresh for us once the process completes. The page should now display an unordered list with list items for each of the colors that we passed as <code>input</code> to our component.</p><p align=center><img src=https://user-images.githubusercontent.com/3771924/26837085-83315144-4aaa-11e7-8a08-2863a6448134.png></p><h3 id=child-components><a name=child-components class=anchor href=#child-components><span class=header-link></span></a>Child Components</h3><p>We&#39;ve created our first component! This component will eventually have nested components. When creating components, it&#39;s strongly recommended to consider how components can be broken down into multiple components. Each component can then be independently developed and tested.</p><p>Let&#39;s split our component into the following components:</p><ul><li><code>&lt;color-picker-header&gt;</code>: The header will have the selected background color from the color picker and show the selected color&#39;s hex value</li></ul><p align=center><img src=https://image.ibb.co/kybsT5/color_picker_header.png></p><ul><li><code>&lt;color-picker-footer&gt;</code>: The footer will contain a palette of colors and an input field for changing the hex value of the header</li></ul><p align=center><img src=https://image.ibb.co/kjiT1Q/color_picker_footer.png></p><p><code>&lt;color-picker-selection&gt;</code>: The selection component is responsible for displaying an individual color box and handling the associated click events</p><p align=center><img src=https://image.ibb.co/nRvxvk/color_picker_selection.png></p><p>Marko automatically registers all components in nested <code>components/</code> directories. Our new directory structure should look like this:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n  color-picker/\n    index.marko\n  color-picker-footer/\n    index.marko\n  color-picker-header/\n    index.marko\n  color-picker-selection/\n    index.marko\n</pre><p>Let&#39;s start with with the <code>&lt;color-picker-header&gt;</code> component. We&#39;ve already determined that the header should have a specific background color and display the value of that background color in text. The color to display should be passed in as part of the input.</p><p><strong>src/components/color-picker-header/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Inline styles!</span>\n<span style=color:#66D9EF;font-style:italic>style</span> {\n  <span style=color:#A6E22E>.color-picker-header</span> {\n    <span style=color:#66D9EF;font-style:italic>width</span>: <span style=color:#AE81FF>200</span><span style=color:#FF4185>px</span>;\n    <span style=color:#66D9EF;font-style:italic>height</span>: <span style=color:#AE81FF>100</span><span style=color:#FF4185>px</span>;\n    <span style=color:#66D9EF;font-style:italic>border-radius</span>: <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span> <span style=color:#AE81FF>0</span>;\n    <span style=color:#66D9EF;font-style:italic>font</span>: <span style=color:#AE81FF>30</span><span style=color:#FF4185>px</span> <span style=color:#66D9EF>Arial</span>;\n    <span style=color:#66D9EF;font-style:italic>display</span>: <span style=color:#66D9EF>flex</span>;\n    <span style=color:#66D9EF;font-style:italic>flex-direction</span>: <span style=color:#66D9EF>column</span>;\n    <span style=color:#66D9EF;font-style:italic>text-align</span>: <span style=color:#66D9EF>center</span>;\n    <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>white</span>;\n  }\n  <span style=color:#A6E22E>.color-picker-header</span> <span style=color:#FF4185>></span> <span style=color:#FF4185>p</span> {\n    <span style=color:#66D9EF;font-style:italic>padding-top</span>: <span style=color:#AE81FF>1.15</span><span style=color:#FF4185>em</span>;\n    <span style=color:#66D9EF;font-style:italic>margin</span>: <span style=color:#AE81FF>0</span>;\n  }\n}\n\n<span style=color:#8F8F9E>// In Marko, we immediately start writing a single JavaScript statement by using</span>\n<span style=color:#8F8F9E>// `$`. For multiple JavaScript statements, use `$ { /* JavaScript here */ }</span>\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>color</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>color</span>;\n\n<span style=color:#8F8F9E>&lt;!-- Our markup! --></span>\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-header</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{backgroundColor: <span style=color:#FFFFFF>color</span>}>\n  &lt;<span style=color:#FF4185>p</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Inline styles!</span>\n<span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#A6E22E>.color-picker-header</span> {\n        <span style=color:#66D9EF;font-style:italic>width</span>: <span style=color:#AE81FF>200</span><span style=color:#FF4185>px</span>;\n        <span style=color:#66D9EF;font-style:italic>height</span>: <span style=color:#AE81FF>100</span><span style=color:#FF4185>px</span>;\n        <span style=color:#66D9EF;font-style:italic>border-radius</span>: <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span> <span style=color:#AE81FF>0</span>;\n        <span style=color:#66D9EF;font-style:italic>font</span>: <span style=color:#AE81FF>30</span><span style=color:#FF4185>px</span> <span style=color:#66D9EF>Arial</span>;\n        <span style=color:#66D9EF;font-style:italic>display</span>: <span style=color:#66D9EF>flex</span>;\n        <span style=color:#66D9EF;font-style:italic>flex-direction</span>: <span style=color:#66D9EF>column</span>;\n        <span style=color:#66D9EF;font-style:italic>text-align</span>: <span style=color:#66D9EF>center</span>;\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>white</span>;\n    }\n    <span style=color:#A6E22E>.color-picker-header</span> <span style=color:#FF4185>></span> <span style=color:#FF4185>p</span> {\n        <span style=color:#66D9EF;font-style:italic>padding-top</span>: <span style=color:#AE81FF>1.15</span><span style=color:#FF4185>em</span>;\n        <span style=color:#66D9EF;font-style:italic>margin</span>: <span style=color:#AE81FF>0</span>;\n    }\n}\n\n<span style=color:#8F8F9E>// In Marko, we immediately start writing a single JavaScript statement by using</span>\n<span style=color:#8F8F9E>// `$`. For multiple JavaScript statements, use `$ { /* JavaScript here */ }</span>\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>color</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>color</span>;\n<span style=color:#8F8F9E>// Our markup!</span>\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-header</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n    backgroundColor: <span style=color:#FFFFFF>color</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "81");

  out.w("<p>That&#39;s it! Our <code>&lt;color-picker-header&gt;</code> is complete with styles and component logic. This component is small enough to be contained in a single file, but as components grow larger, we should split out the markup, component logic, and styling. We will see an example of this soon.</p><p>Now let&#39;s look at what&#39;s going on. Marko has several <a href=/docs/class-components/#lifecycle-events>lifecycle methods</a> including <code>onInput</code>, which contains a single parameter <code>input</code>. As we discussed before <code>input</code> is the data that is passed to a Marko component upon initialization. We can use inline javascript easily with <code>&#36;</code> (for a single statement) or <code>&#36; { /* ... */ }</code> (for multiple statements), which is great for creating variables that can be accessed inside of your template. Additionally, single file components support inline styles, so the component can truly be contained as a single unit if it&#39;s small enough.</p><p>Now we need to revisit our parent component and add the <code>&lt;color-picker-header&gt;</code> tag to it, so it will be rendered.</p><p><strong>src/components/color-picker/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>;\n\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      selectedColor: <span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>],\n      <span style=color:#FFFFFF>colors</span>\n    };\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>color-picker-header</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span>/>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n        <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>;\n\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            selectedColor: <span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>],\n            <span style=color:#FFFFFF>colors</span>\n        };\n    }\n}\n\n<span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>color-picker-header</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span>\n</pre>"
  }, out, _component, "95");

  out.w("<p>Marko will automatically watch the <code>state</code> object for changes using getters and setters, and if the state changes then the UI component will be re-rendered and the DOM will automatically be updated.</p><p>We should now see see the rendered <code>&lt;color-picker-header&gt;</code> with a gray background like so:</p><p align=center><img src=https://image.ibb.co/kybsT5/color_picker_header.png></p><p>Now let&#39;s create the <code>&lt;color-picker-selection&gt;</code> component, which will be used inside of the <code>&lt;color-picker-footer&gt;</code>:</p><p><strong>src/components/color-picker-selection/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>handleColorSelected</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'color-selected'</span>);\n  }\n}\n\n<span style=color:#66D9EF;font-style:italic>style</span> {\n  <span style=color:#A6E22E>.color-picker-selection</span> {\n    <span style=color:#66D9EF;font-style:italic>width</span>: <span style=color:#AE81FF>25</span><span style=color:#FF4185>px</span>;\n    <span style=color:#66D9EF;font-style:italic>height</span>: <span style=color:#AE81FF>25</span><span style=color:#FF4185>px</span>;\n    <span style=color:#66D9EF;font-style:italic>border-radius</span>: <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span>;\n    <span style=color:#66D9EF;font-style:italic>display</span>: <span style=color:#66D9EF>flex</span>;\n    <span style=color:#66D9EF;font-style:italic>flex-direction</span>: <span style=color:#66D9EF>column</span>;\n    <span style=color:#66D9EF;font-style:italic>margin</span>: <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span>;\n    <span style=color:#66D9EF;font-style:italic>float</span>: <span style=color:#66D9EF>left</span>;\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-selection</span>\n  <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'handleColorSelected'</span>)\n  <span style=color:#66D9EF;font-style:italic>on-touchstart</span>(<span style=color:#FFF066>'handleColorSelected'</span>)\n  <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n    backgroundColor: <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>color</span>\n  }/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>handleColorSelected</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"color-selected\"</span>);\n    }\n}\n\n<span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#A6E22E>.color-picker-selection</span> {\n        <span style=color:#66D9EF;font-style:italic>width</span>: <span style=color:#AE81FF>25</span><span style=color:#FF4185>px</span>;\n        <span style=color:#66D9EF;font-style:italic>height</span>: <span style=color:#AE81FF>25</span><span style=color:#FF4185>px</span>;\n        <span style=color:#66D9EF;font-style:italic>border-radius</span>: <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span>;\n        <span style=color:#66D9EF;font-style:italic>display</span>: <span style=color:#66D9EF>flex</span>;\n        <span style=color:#66D9EF;font-style:italic>flex-direction</span>: <span style=color:#66D9EF>column</span>;\n        <span style=color:#66D9EF;font-style:italic>margin</span>: <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span>;\n        <span style=color:#66D9EF;font-style:italic>float</span>: <span style=color:#66D9EF>left</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-selection</span> [\n    <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"handleColorSelected\"</span>)\n    <span style=color:#66D9EF;font-style:italic>on-touchstart</span>(<span style=color:#FFF066>\"handleColorSelected\"</span>)\n    <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n        backgroundColor: <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>color</span>\n    }\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "107");

  out.w("<p>In this component, we&#39;ve introduced <code>on-click</code> and <code>on-touchstart</code> listeners and a single event handler function. <a href=/docs/events/ >Marko components inherit from EventEmitter</a>. When this color is selected, it will emit a <code>click</code> event and get handled by the <code>handleColorSelected</code> function. The handler then emits a <code>color-selected</code> event to be handled by its parent. We will eventually write code to relay this information back to the <code>&lt;color-picker-header&gt;</code>, so its background color and text can be changed.</p><p>We are ready to create our final component, <code>&lt;color-picker-footer&gt;</code>. This component is going to contain a bit more logic than the other components, so let&#39;s split it out into multiple files:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n  color-picker/\n    components/\n      color-picker-footer/\n        component.js\n        index.marko\n        style.css\n      ...\n    ...\n</pre><p><strong>src/components/color-picker-footer/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>;\n\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-footer</span>>\n  &lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-selection-container</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>>\n      &lt;<span style=color:#FF4185>div</span>>\n<span style=color:#8F8F9E>        &lt;!--</span>\n<span style=color:#8F8F9E>        Listen for the `color-selected` event emitted from the</span>\n<span style=color:#8F8F9E>        &lt;color-picker-selection> component and handle it in this</span>\n<span style=color:#8F8F9E>        component's `handleColorSelected` method.</span>\n<span style=color:#8F8F9E>        NOTE: We pass along the `color` to the event handler method</span>\n<span style=color:#8F8F9E>        --></span>\n        &lt;<span style=color:#FF4185>color-picker-selection</span>\n          <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>color</span>\n          <span style=color:#66D9EF;font-style:italic>on-color-selected</span>(<span style=color:#FFF066>'handleColorSelected'</span>, <span style=color:#FFFFFF>color</span>)/>\n      &lt;/<span style=color:#FF4185>div</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n    &lt;<span style=color:#FF4185>input</span>\n       <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"hexInput\"</span>\n       <span style=color:#A6E22E>placeholder</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Hex value\"</span>\n       <span style=color:#66D9EF;font-style:italic>on-input</span>(<span style=color:#FFF066>'handleHexInput'</span>)/>\n  &lt;/<span style=color:#FF4185>div</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>;\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-footer</span>\n    <span style=color:#FF4185>div</span><span style=color:#A6E22E>.color-picker-selection-container</span>\n        <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n            <span style=color:#FF4185>div</span>\n<span style=color:#8F8F9E>                &lt;!--</span>\n<span style=color:#8F8F9E>                Listen for the `color-selected` event emitted from the</span>\n<span style=color:#8F8F9E>                &lt;color-picker-selection> component and handle it in this</span>\n<span style=color:#8F8F9E>                component's `handleColorSelected` method.</span>\n<span style=color:#8F8F9E>                NOTE: We pass along the `color` to the event handler method</span>\n<span style=color:#8F8F9E>                --></span>\n                <span style=color:#FF4185>color-picker-selection</span> [\n                    <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>color</span>\n                    <span style=color:#66D9EF;font-style:italic>on-color-selected</span>(<span style=color:#FFF066>\"handleColorSelected\"</span>, <span style=color:#FFFFFF>color</span>)\n                <span style=color:#F8F8F0;background-color:#FF4185>]</span>\n        <span style=color:#FF4185>input</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"hexInput\"</span> <span style=color:#A6E22E>placeholder</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Hex value\"</span> <span style=color:#66D9EF;font-style:italic>on-input</span>(<span style=color:#FFF066>\"handleHexInput\"</span>)\n</pre>"
  }, out, _component, "120");

  out.w("<p>In the <code>&lt;color-picker-footer&gt;</code> component we need to iterate over each color that was passed as input in <code>colors</code>. For each color, we create a <code>&lt;color-picker-selection&gt;</code> component and pass the color using the <code>color</code> attribute. Additionally, we are listening for the <code>color-selected</code> event emitted from the <code>&lt;color-picker-selection&gt;</code> component and handling it in our own <code>handleColorSelected</code> method. We provide the <code>color</code> as the second argument so that it will be available to the event handler method. We also have added an <code>input</code> field and a <code>on-input</code> listener, which will trigger a change to the selected color when the user manually enters a hex color value.</p><p><strong>src/components/color-picker-footer/component.js</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>handleColorSelected</span> (<span style=color:#FFAC4D;font-style:italic>color</span>) {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'color-selected'</span>, <span style=color:#FFFFFF>color</span>);\n  }\n  <span style=color:#A6E22E>handleHexInput</span> () {\n    <span style=color:#66D9EF;font-style:italic>let</span> <span style=color:#FFFFFF>hexInput</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getEl</span>(<span style=color:#FFF066>'hexInput'</span>).<span style=color:#FFFFFF>value</span>;\n\n    <span style=color:#FF4185>if</span> (<span style=color:#FF4185>!</span><span style=color:#FFFFFF>hexInput</span>.<span style=color:#A6E22E>startsWith</span>(<span style=color:#FFF066>'#'</span>)) {\n      <span style=color:#FFFFFF>hexInput</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>'#'</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>hexInput</span>;\n    }\n\n    <span style=color:#FF4185>if</span> (<span style=color:#FF4185>!</span><span style=color:#A6E22E>isValidHexValue</span>(<span style=color:#FFFFFF>hexInput</span>)) {\n      <span style=color:#FFFFFF>hexInput</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>];\n    }\n\n    <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'colorSelected'</span>, <span style=color:#FFFFFF>hexInput</span>);\n  }\n};\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>isValidHexValue</span> (<span style=color:#FFAC4D;font-style:italic>hexValue</span>) {\n  <span style=color:#FF4185>return</span><span style=color:#FFF066> /</span><span style=color:#FF4185>^</span><span style=color:#FFF066>#</span><span style=color:#AE81FF>[0-9A-F]</span><span style=color:#FF4185>{6}$</span><span style=color:#FFF066>/</span><span style=color:#FF4185>i</span>.<span style=color:#A6E22E>test</span>(<span style=color:#FFFFFF>hexValue</span>);\n}\n</pre><p>When the component logic is split out from the <code>index.marko</code> it needs to be exported like a standard JavaScript module. We have an <code>handleColorSelected</code> event handler, which is going to emit the event back up to the parent <code>&lt;color-picker-header&gt;</code> component. We also have an <code>handleHexInput</code> event handler with some basic validation logic. <code>handleHexInput</code> also emits <code>color-selected</code>, which will be handled the same way as the <code>color-selected</code> event when it reaches <code>&lt;color-picker-header&gt;</code>.</p><p><strong>src/components/color-picker-footer/style.css</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#A6E22E>.color-picker-footer</span> {\n  <span style=color:#66D9EF;font-style:italic>width</span>: <span style=color:#AE81FF>200</span><span style=color:#FF4185>px</span>;\n  <span style=color:#66D9EF;font-style:italic>height</span>: <span style=color:#AE81FF>100</span><span style=color:#FF4185>px</span>;\n  <span style=color:#66D9EF;font-style:italic>border-radius</span>: <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span>;\n  <span style=color:#66D9EF;font-style:italic>font</span>: <span style=color:#AE81FF>30</span><span style=color:#FF4185>px</span> <span style=color:#66D9EF>Arial</span>;\n  <span style=color:#66D9EF;font-style:italic>display</span>: <span style=color:#66D9EF>flex</span>;\n  <span style=color:#66D9EF;font-style:italic>flex-direction</span>: <span style=color:#66D9EF>column</span>;\n  <span style=color:#66D9EF;font-style:italic>text-align</span>: <span style=color:#66D9EF>center</span>;\n  <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>white</span>;\n  <span style=color:#66D9EF;font-style:italic>box-shadow</span>: <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>3</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>#888888</span>;\n}\n<span style=color:#A6E22E>.color-picker-selection-container</span> {\n  <span style=color:#66D9EF;font-style:italic>width</span>: <span style=color:#AE81FF>75</span><span style=color:#FF4185>%</span>;\n  <span style=color:#66D9EF;font-style:italic>margin</span>: <span style=color:#AE81FF>5</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>20</span><span style=color:#FF4185>px</span>;\n}\n<span style=color:#A6E22E>.color-picker-selection-container</span> <span style=color:#FF4185>input</span> {\n  <span style=color:#66D9EF;font-style:italic>margin-top</span>: <span style=color:#AE81FF>8</span><span style=color:#FF4185>px</span>;\n  <span style=color:#66D9EF;font-style:italic>border-radius</span>: <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span>;\n  <span style=color:#66D9EF;font-style:italic>border-width</span>: <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>1</span><span style=color:#FF4185>px</span> <span style=color:#AE81FF>0</span><span style=color:#FF4185>px</span>;\n  <span style=color:#66D9EF;font-style:italic>outline</span>: <span style=color:#66D9EF>none</span>;\n  <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#AE81FF>#A9A9A9</span>;\n}\n</pre><p>We can now finalize our component! Let&#39;s revisit the parent <code>&lt;color-picker&gt;</code> component and add the <code>&lt;color-picker-footer&gt;</code>:</p><p><strong>src/components/color-picker/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>;\n\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      selectedColor: <span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>],\n      <span style=color:#FFFFFF>colors</span>\n    };\n  }\n\n  <span style=color:#A6E22E>handleColorSelected</span>(<span style=color:#FFAC4D;font-style:italic>color</span>) {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>color</span>;\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>color-picker-header</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span>/>\n  &lt;<span style=color:#FF4185>color-picker-footer</span> <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>colors</span> <span style=color:#66D9EF;font-style:italic>on-color-selected</span>(<span style=color:#FFF066>'handleColorSelected'</span>)/>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n        <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span>;\n\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            selectedColor: <span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>],\n            <span style=color:#FFFFFF>colors</span>\n        };\n    }\n\n    <span style=color:#A6E22E>handleColorSelected</span>(<span style=color:#FFAC4D;font-style:italic>color</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>color</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>color-picker-header</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span>\n    <span style=color:#FF4185>color-picker-footer</span> <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>colors</span> <span style=color:#66D9EF;font-style:italic>on-color-selected</span>(<span style=color:#FFF066>\"handleColorSelected\"</span>)\n</pre>"
  }, out, _component, "150");

  out.w("<p>Finally, we&#39;ve added our <code>&lt;color-picker-footer&gt;</code>, passed the <code>state.colors</code> as <code>input</code> to it, added a <code>handleColorSelected</code> event handler for the <code>color-selected</code> event emitted from <code>&lt;color-picker-footer&gt;</code>. When we handle this event, we update the <code>state</code> of the <code>&lt;color-picker&gt;</code> component, which is passed to the <code>&lt;color-picker-header&gt;</code>.</p><p>Congratulations! You have finished your first fully reactive Marko UI component!</p><p>Our finished product:</p><p align=center><img src=https://image.ibb.co/gcmLFk/color_picker_complete.png></p><hr><p>Now let&#39;s talk about some additional topics that will turn you into a Marko pro!</p><h2 id=importing-modules><a name=importing-modules class=anchor href=#importing-modules><span class=header-link></span></a>Importing Modules</h2><p>Marko also supports importing modules. We can easily import a module using the familiar ES2015 <code>import</code> syntax for single file components.</p><p>Let&#39;s create a new helper module for generating the default colors:</p><p><strong>src/util/getDefaultColors.js</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>getDefaultColors</span> () {\n  <span style=color:#FF4185>return</span> [\n    <span style=color:#FFF066>\"#1ABC9C\"</span>,\n    <span style=color:#FFF066>\"#2ECC71\"</span>,\n    <span style=color:#FFF066>\"#3498DB\"</span>,\n    <span style=color:#FFF066>\"#9B59B6\"</span>,\n    <span style=color:#FFF066>\"#34495E\"</span>,\n    <span style=color:#FFF066>\"#16A085\"</span>,\n    <span style=color:#FFF066>\"#27AE60\"</span>,\n    <span style=color:#FFF066>\"#2980B9\"</span>,\n    <span style=color:#FFF066>\"#8E44AD\"</span>,\n    <span style=color:#FFF066>\"#2C3E50\"</span>\n  ];\n};\n</pre><p>We can import our helper module into the <code>color-picker</code> and use the generated colors as the default when none are passed as part of the <code>input</code>:</p><p><strong>components/color-picker/index.marko</strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>getDefaultColors</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./util/getDefaultColors'</span>;\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span> <span style=color:#FF4185>||</span> <span style=color:#A6E22E>getDefaultColors</span>();\n\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      selectedColor: <span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>],\n      <span style=color:#FFFFFF>colors</span>\n    };\n  }\n\n  <span style=color:#A6E22E>handleColorSelected</span>(<span style=color:#FFAC4D;font-style:italic>color</span>) {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>color</span>;\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>color-picker-header</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span>/>\n  &lt;<span style=color:#FF4185>color-picker-footer</span> <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>colors</span> <span style=color:#66D9EF;font-style:italic>on-color-selected</span>(<span style=color:#FFF066>'handleColorSelected'</span>)/>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>getDefaultColors</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./util/getDefaultColors'</span>\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n        <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>colors</span> <span style=color:#FF4185>||</span> <span style=color:#A6E22E>getDefaultColors</span>();\n\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            selectedColor: <span style=color:#FFFFFF>colors</span>[<span style=color:#AE81FF>0</span>],\n            <span style=color:#FFFFFF>colors</span>\n        };\n    }\n\n    <span style=color:#A6E22E>handleColorSelected</span>(<span style=color:#FFAC4D;font-style:italic>color</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>color</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>color-picker-header</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>selectedColor</span>\n    <span style=color:#FF4185>color-picker-footer</span> <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>colors</span> <span style=color:#66D9EF;font-style:italic>on-color-selected</span>(<span style=color:#FFF066>\"handleColorSelected\"</span>)\n</pre>"
  }, out, _component, "180");

  out.w("<p>If we do not pass <code>colors</code> to the <code>&lt;color-picker&gt;</code>, the colors will default to the colors obtained our <code>getDefaultColors</code> helper.</p><p><a href=/try-online/?example=Color+Picker>Try Online: marko-color-picker</a></p><h2 id=testing><a name=testing class=anchor href=#testing><span class=header-link></span></a>Testing</h2><p>For testing Marko components we recommend using <a href=https://github.com/marko-js/testing-library>Marko Testing Library</a></p><h2 id=conclusion><a name=conclusion class=anchor href=#conclusion><span class=header-link></span></a>Conclusion</h2><p>Developing Marko UI components is fun and easy! As you&#39;re developing components, you should consider how a component can be split into multiple components. This makes developing, managing, and testing components significantly easier.</p><p>Marko gives you the tools to easily develop awesome UI components. Get started today!</p><h2 id=additional-resources><a name=additional-resources class=anchor href=#additional-resources><span class=header-link></span></a>Additional Resources</h2><ul><li><a href=https://github.com/marko-js/examples/tree/master/examples/color-picker>GitHub: marko-color-picker</a></li><li><a href=/try-online/?example=Color+Picker>Try Online: Color Picker</a></li><li><a href=https://github.com/marko-js/cli>marko-cli</a></li><li><a href=https://github.com/marko-js/testing-library>Marko Testing Library</a></li></ul><hr><blockquote class=null><p>Special thanks to <a href=https://github.com/newyork-anthonyng>Anthony Ng</a> for helping with this tutorial!</p></blockquote>");
}, {
  t: README_marko_componentType,
  i: true
}, README_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/10-awesome-marko-features.md
const _10_awesome_marko_features_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const _10_awesome_marko_features = (_10_awesome_marko_features_marko_template);

toc_registry.set("../../node_modules/marko/docs/10-awesome-marko-features.md", "<ul class=\"toc toc-level1\"><li><ul class=\"toc toc-level2\"><li><ul class=\"toc toc-level3\"><li><a href=\"#1-shorthand-attributes\">1. Shorthand Attributes</a></li><li><a href=\"#2-all-attribute-values-are-just-javascript\">2. All attribute values are Just JavaScript™</a></li><li><a href=\"#3-isomorphic-ui-components-made-easy\">3. Isomorphic UI components made easy</a></li><li><a href=\"#4-concise-syntax\">4. Concise syntax</a></li><li><a href=\"#5-import-javascript-modules\">5. Import JavaScript modules</a></li><li><a href=\"#6-no-need-to-import-custom-tags-its-a-good-thing-trust-me\">6. No need to import custom tags</a></li><li><a href=\"#7-use-javascript-to-set-css-classes-and-styles\">7. Use JavaScript to set CSS classes and styles</a></li><li><a href=\"#8-inline-javascript-statements\">8. Inline JavaScript Statements</a></li><li><a href=\"#9-async-rendering-with-the-await-tag\">9. Async rendering with the &lt;await&gt; tag</a></li><li><a href=\"#10-server-side-rendering-is-easy\">10. Server side rendering is easy</a></li><li><a href=\"#bonus-friendly-compile-time-errors\">Bonus: Friendly compile-time errors</a></li></ul></li></ul></li></ul>");




const _10_awesome_marko_features_marko_componentType = "zcKdZiRa",
      _10_awesome_marko_features_marko_component = {};
_10_awesome_marko_features_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<a href=#><img src=https://cdn-images-1.medium.com/max/1000/1*Cmy6UutD5-ogL8dr1DySMQ.png alt=\"Marko logo\" width=100%></a><br><blockquote class=null><p>This article was published in August 2017. You can find the original <a href=https://medium.com/@austinkelleher/10-awesome-marko-features-afba9d094d42>&quot;10 Awesome Marko Features&quot; article here</a>!</p></blockquote><h1 id=10-awesome-marko-features><a name=10-awesome-marko-features class=anchor href=#10-awesome-marko-features><span class=header-link></span></a>10 Awesome Marko Features</h1><p><a href=/ >Marko</a> is a friendly and super fast UI library that makes building web apps<br> fun! In celebration of rapidly approaching <a href=https://github.com/marko-js/marko>5,000 stars on GitHub</a> (the ultimate open source vanity metric), here are 10 features that will make you more productive in no particular order...</p><h4 id=1-shorthand-attributes><a name=1-shorthand-attributes class=anchor href=#1-shorthand-attributes><span class=header-link></span></a>1. Shorthand Attributes</h4><p>Tired of constantly typing out <code>class</code> and <code>id</code> attributes? No need with Marko. Simply utilize the shorthand based on CSS selectors:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span> {\n  <span style=color:#A6E22E>.count</span> {\n    <span style=color:#66D9EF;font-style:italic>color</span>:<span style=color:#AE81FF>#09c</span>;\n  }\n}\n\n<span style=color:#8F8F9E>// Equivalent to &lt;div class=\"count\"/></span>\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>/>\n\n<span style=color:#8F8F9E>// Equivalent to &lt;span id=\"my-id\"/></span>\n&lt;<span style=color:#FF4185>span</span><span style=color:#A6E22E>#my-id</span>/>\n\n<span style=color:#8F8F9E>// Combined</span>\n&lt;<span style=color:#FF4185>button</span><span style=color:#A6E22E>#submit.primary</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#A6E22E>.count</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#AE81FF>#09c</span>;\n    }\n}\n\n<span style=color:#8F8F9E>// Equivalent to &lt;div class=\"count\"/></span>\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>\n<span style=color:#8F8F9E>// Equivalent to &lt;span id=\"my-id\"/></span>\n<span style=color:#FF4185>span</span><span style=color:#A6E22E>#my-id</span>\n<span style=color:#8F8F9E>// Combined</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>#submit.primary</span>\n</pre>"
  }, out, _component, "20");

  out.w("<h4 id=2-all-attribute-values-are-just-javascript><a name=2-all-attribute-values-are-just-javascript class=anchor href=#2-all-attribute-values-are-just-javascript><span class=header-link></span></a>2. All attribute values are Just JavaScript\u2122</h4><p>Unlike with HTML, you are not limited to string attribute values when using Marko. Attributes can have types, which makes it really easy to pass data to custom tags and it works for standard HTML tags too:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>myClassName</span>/>\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>isChecked</span>/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myString</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Hello\"</span>/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myNumber</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1</span>/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myTemplateString</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>`Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myBoolean</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myArray</span><span style=color:#FFFFFF>=</span>[<span style=color:#AE81FF>1</span>, <span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>]/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myObject</span><span style=color:#FFFFFF>=</span>{hello: <span style=color:#FFF066>'world'</span>}/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myVariable</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>name</span>/>\n&lt;<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myFunctionCall</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>foo</span>()/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>myClassName</span>\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>isChecked</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myString</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Hello\"</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myNumber</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myTemplateString</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>`Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myBoolean</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myArray</span><span style=color:#FFFFFF>=</span>[<span style=color:#AE81FF>1</span>, <span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>]\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myObject</span><span style=color:#FFFFFF>=</span>{\n    hello: <span style=color:#FFF066>\"world\"</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myVariable</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>name</span>\n<span style=color:#FF4185>awesome-component</span> <span style=color:#A6E22E>myFunctionCall</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>foo</span>()\n</pre>"
  }, out, _component, "25");

  out.w("<h4 id=3-isomorphic-ui-components-made-easy><a name=3-isomorphic-ui-components-made-easy class=anchor href=#3-isomorphic-ui-components-made-easy><span class=header-link></span></a>3. Isomorphic UI components made easy</h4><p>Tired of boilerplate code and trouble managing component input and state? Marko makes it a breeze to develop self-contained and individually testable components. Changing state is completely synchronous, so there won\u2019t be any headaches. You can also use inline styles making it very easy to develop small components quickly.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      count: <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>||</span> <span style=color:#AE81FF>0</span>\n    };\n  }\n  <span style=color:#A6E22E>increment</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n  }\n}\n\n<span style=color:#66D9EF;font-style:italic>style</span> {\n  <span style=color:#A6E22E>.count</span> {\n    <span style=color:#66D9EF;font-style:italic>color</span>:<span style=color:#AE81FF>#09c</span>;\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)>\n<span style=color:#FFF066>  Click me!</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            count: <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>||</span> <span style=color:#AE81FF>0</span>\n        };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n<span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#A6E22E>.count</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#AE81FF>#09c</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> Click me!</span>\n</pre>"
  }, out, _component, "30");

  out.w("<p>Do you see references to \u201CMarko\u201D in the snippet above? Yeah, me neither.</p><p>Is your component becoming too large? Do you prefer separating your CSS, JavaScript, and markup code? No problem. You can easily <a href=/docs/class-components/#multi-file-components>rip out your code into multiple files</a>:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n  click-counter/\n    component.js\n    index.marko\n    style.css\n</pre><h4 id=4-concise-syntax><a name=4-concise-syntax class=anchor href=#4-concise-syntax><span class=header-link></span></a>4. Concise syntax</h4><p>The DOM is just a tree structure. Indentation is a great way to describe a DOM tree without having to worry about matching up beginning and ending tags. Marko lets you choose between a concise, indentation-based syntax, and a familiar HTML syntax:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Count our clicks! --></span>\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>>\n  &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>Count: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>button</span><span style=color:#A6E22E>.example-button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)>\n<span style=color:#FFF066>  Click me!</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Count our clicks!</span>\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Count: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>.example-button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> Click me!</span>\n</pre>"
  }, out, _component, "38");

  out.w("<p>Here\u2019s the same thing with the concise syntax:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Count our clicks!</span>\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>\n  <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Count: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>.example-button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>) --<span style=color:#FFF066> Click me!</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Count our clicks!</span>\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span>\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Count: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>.example-button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> Click me!</span>\n</pre>"
  }, out, _component, "40");

  out.w("<p>Can\u2019t make up your mind or just want to paste in that code snippet from StackOverflow? HTML syntax can be used within in the concise syntax. You\u2019ll come back and make it consistent\u2026<em>one day</em>.</p><h4 id=5-import-javascript-modules><a name=5-import-javascript-modules class=anchor href=#5-import-javascript-modules><span class=header-link></span></a>5. Import JavaScript modules</h4><p>Do you have some helper JavaScript functions that you need to use in your views? Marko let\u2019s you import any JavaScript module into your template using the same syntax as the JavaScript <code>import</code> statement without using Babel or any other build tool. No need for problematic globals (you could do that too, but please don\u2019t or your coworkers will hate you).</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>sum</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./utils/sum'</span>;\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>The sum of 2 + 3 is </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>sum</span>(<span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>)<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>sum</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./utils/sum'</span>\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> The sum of 2 + 3 is </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>sum</span>(<span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>)<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "48");

  out.w("<h4 id=6-no-need-to-import-custom-tags-its-a-good-thing-trust-me><a name=6-no-need-to-import-custom-tags-its-a-good-thing-trust-me class=anchor href=#6-no-need-to-import-custom-tags-its-a-good-thing-trust-me><span class=header-link></span></a>6. No need to import custom tags (it\u2019s a good thing, trust me)</h4><p>Marko uses your directory structure as a method for automatically registering custom tags. This means that Marko can implicitly import tags based on where the template is located on disk. Marko will search up the directory looking for custom tags in <code>components/</code>directories similar to how Node.js discovers modules in <code>node_modules/</code> directories.</p><p>Given the following directory structure:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n  fancy-button/\n    index.marko\n  fancy-container/\n    index.marko\n</pre><p>If <code>fancy-button</code> is used inside of <code>fancy-container</code>, it will be implicitly<br> imported:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- No need to use `require` or `import` because it will implicitly import custom tags --></span>\n&lt;<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>fancy-button</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>buttonColor</span>/>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// No need to use `require` or `import` because it will implicitly import custom tags</span>\n<span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>fancy-button</span> <span style=color:#A6E22E>color</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>buttonColor</span>\n</pre>"
  }, out, _component, "60");

  out.w("<h4 id=7-use-javascript-to-set-css-classes-and-styles><a name=7-use-javascript-to-set-css-classes-and-styles class=anchor href=#7-use-javascript-to-set-css-classes-and-styles><span class=header-link></span></a>7. Use JavaScript to set CSS classes and styles</h4><p>Setting CSS classes and styles is made easy using JavaScript! Marko will happily accept simple strings, JavaScript objects and arrays (<em>falsy values will be ignored).</em></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>fontColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>color</span> <span style=color:#FF4185>||</span> <span style=color:#FFF066>'blue'</span>;\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>isActive</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>active</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>true</span>;\n\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>'person'</span>, <span style=color:#FFFFFF>isActive</span> <span style=color:#FF4185>&&</span> <span style=color:#FFF066>'active'</span>]\n  <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{color: <span style=color:#FFFFFF>fontColor</span>} />\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>fontColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>color</span> <span style=color:#FF4185>||</span> <span style=color:#FFF066>\"blue\"</span>;\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>isActive</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>active</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>true</span>;\n<span style=color:#FF4185>div</span> [\n    <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>\"person\"</span>, <span style=color:#FFFFFF>isActive</span> <span style=color:#FF4185>&&</span> <span style=color:#FFF066>\"active\"</span>]\n    <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n        color: <span style=color:#FFFFFF>fontColor</span>\n    }\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "66");

  out.w("<h4 id=8-inline-javascript-statements><a name=8-inline-javascript-statements class=anchor href=#8-inline-javascript-statements><span class=header-link></span></a>8. Inline JavaScript Statements</h4><p>Marko takes HTML and makes it more like JavaScript. You can exit out of HTML mode to embed a JavaScript statement by starting the line with a <code>&#36;</code>. You can use this feature to embed JavaScript variables, functions, etc. where they are needed (take that, \u201Cseparation of concerns\u201D).</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>randomNumber</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>Math</span>.<span style=color:#66D9EF>random</span>();\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> {\n  name: <span style=color:#FFF066>'Frank'</span>,\n  age: <span style=color:#AE81FF>32</span>\n};\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Random number: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>randomNumber</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>div</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> years old</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>randomNumber</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>Math</span>.<span style=color:#66D9EF>random</span>();\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> {\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    age: <span style=color:#AE81FF>32</span>\n};\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> Random number: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>randomNumber</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> years old</span>\n</pre>"
  }, out, _component, "72");

  out.w("<p>If you want to combine multiple JavaScript statements you can do that too:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> {\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>randomNumber</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>Math</span>.<span style=color:#66D9EF>random</span>();\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> {\n    name: <span style=color:#FFF066>'Frank'</span>,\n    age: <span style=color:#AE81FF>32</span>\n  };\n}\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Random number: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>randomNumber</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>div</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> years old</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>randomNumber</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>Math</span>.<span style=color:#66D9EF>random</span>();\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> {\n        name: <span style=color:#FFF066>\"Frank\"</span>,\n        age: <span style=color:#AE81FF>32</span>\n    };\n}\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> Random number: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>randomNumber</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> years old</span>\n</pre>"
  }, out, _component, "74");

  out.w("<h4 id=9-async-rendering-with-the-await-tag><a name=9-async-rendering-with-the-await-tag class=anchor href=#9-async-rendering-with-the-await-tag><span class=header-link></span></a>9. Async rendering with the <code>&lt;await&gt;</code> tag</h4><p>Node.js is asynchronous. Browsers are asynchronous. Why should rendering be synchronous? Pass your promise along to your template and Marko will asynchronously render parts of your view. Turns out, <a href=http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/ >this is good for performance</a>.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>searchResultsPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>searchService</span>.<span style=color:#A6E22E>performSearch</span>(<span style=color:#FFFFFF>keywords</span>);\n\n&lt;<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>searchResultsPromise</span>)>\n  &lt;<span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|>\n<span style=color:#FFF066>    Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n  &lt;/<span style=color:#A6E22E>@then</span>>\n  &lt;<span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>err</span>|>\n<span style=color:#FFF066>    The error was: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n  &lt;/<span style=color:#A6E22E>@catch</span>>\n&lt;/<span style=color:#66D9EF>await</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>searchResultsPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>searchService</span>.<span style=color:#A6E22E>performSearch</span>(<span style=color:#FFFFFF>keywords</span>);\n<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>searchResultsPromise</span>)\n    <span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n    <span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>err</span>| --<span style=color:#FFF066> The error was: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n</pre>"
  }, out, _component, "81");

  out.w("<h4 id=10-server-side-rendering-is-easy><a name=10-server-side-rendering-is-easy class=anchor href=#10-server-side-rendering-is-easy><span class=header-link></span></a>10. Server side rendering is easy</h4><p>Can\u2019t decide if you want to do server-side rendering or client-side rendering? Why are we even talking about this in 2017? It doesn\u2019t matter. Seriously, just do both. Marko makes this a no-brainer since you can render a Marko template directly to a stream (oh, and Marko will <a href=/docs/server-side-rendering/ >automatically mount UI components</a> rendered on the server when the page loads in the browser):</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/node-require\"</span>).<span style=color:#A6E22E>install</span>(); <span style=color:#8F8F9E>// require .marko files!</span>\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>http</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"http\"</span>);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./template\"</span>);\n\n<span style=color:#FFFFFF>http</span>\n  .<span style=color:#A6E22E>createServer</span>()\n  .<span style=color:#A6E22E>on</span>(<span style=color:#FFF066>\"request\"</span>, (<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>res</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n    <span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>render</span>(\n      {\n        name: <span style=color:#FFF066>\"Frank\"</span>,\n        count: <span style=color:#AE81FF>30</span>,\n        colors: [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n      },\n      <span style=color:#FFFFFF>res</span>\n    );\n  })\n  .<span style=color:#A6E22E>listen</span>(<span style=color:#AE81FF>8080</span>);\n</pre><h4 id=bonus-friendly-compile-time-errors><a name=bonus-friendly-compile-time-errors class=anchor href=#bonus-friendly-compile-time-errors><span class=header-link></span></a>Bonus: Friendly compile-time errors</h4><p>We all make mistakes <em>every now and then</em>. Typo in your custom tag? Forgot an ending tag? No worries! Marko will give you a friendly error message and point you right to the problematic code.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Ahhhh typo! This should be &lt;fancy-button/> --></span>\n&lt;<span style=color:#FF4185>fancy-buttn</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Ahhhh typo! This should be &lt;fancy-button/></span>\n<span style=color:#FF4185>fancy-buttn</span>\n</pre>"
  }, out, _component, "92");

  out.w("<p>You may have missed it, but it was obvious to Marko:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>Unrecognized tag: fancy-buttn \u2014 More details: https://github.com/marko-js/marko/wiki/Error:-Unrecognized-Tag at line 2 col 1\n</pre><p>Coming soon: auto correction and autonomous coding</p><hr><p>_Cover image credit: _<a href=https://commons.wikimedia.org/wiki/File:Amanhecer_no_Hercules_--.jpg>Wikipedia</a></p>");
}, {
  t: _10_awesome_marko_features_marko_componentType,
  i: true
}, _10_awesome_marko_features_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/body-content.md
const body_content_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const body_content = (body_content_marko_template);

toc_registry.set("../../node_modules/marko/docs/body-content.md", "<ul class=\"toc toc-level1\"><li><a href=\"#rendering-body-content\">Rendering body content</a></li><li><a href=\"#passing-attributes-to-body-content\">Passing attributes to body content</a></li><li><a href=\"#named-body-content\">Named body content</a><ul class=\"toc toc-level2\"><li><a href=\"#repeated-attribute-tags\">Repeated attribute tags</a></li><li><a href=\"#attributes-on-attribute-tags\">Attributes on attribute tags</a></li><li><a href=\"#nested-attribute-tags\">Nested attribute tags</a></li><li><a href=\"#dynamic-attribute-tags\">Dynamic attribute tags</a></li></ul></li></ul>");




const body_content_marko_componentType = "MNBSZIb1",
      body_content_marko_component = {};
body_content_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=body-content><a name=body-content class=anchor href=#body-content><span class=header-link></span></a>Body content</h1><p>We&#39;re used to passing body content to HTML tags. When you do this, the tag has control over where and when this content is rendered. A good example of this is the <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details>HTML <code>&lt;details&gt;</code> element</a>:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>details</span>>\n  &lt;<span style=color:#FF4185>summary</span>>Hello &lt;<span style=color:#FF4185>strong</span>>World&lt;/<span style=color:#FF4185>strong</span>>&lt;/<span style=color:#FF4185>summary</span>> This is some\n  &lt;<span style=color:#FF4185>em</span>>content&lt;/<span style=color:#FF4185>em</span>> that can be toggled.\n&lt;/<span style=color:#FF4185>details</span>>\n</pre><p>This is what it renders (try clicking it):</p><hr><details><summary>Hello <strong>World</strong></summary> This is some <em>content</em> that can be toggled.</details><hr><p>Custom tags can also receive content in the same way. This allows a component to give its user full control over <em>how</em> some section of the content is rendered, but control <em>where</em>, <em>when</em>, and with <em>what</em> data it is rendered. This feature is necessary to build composable components like overlays, layouts, dropdowns, etc. Imagine a <code>&lt;table&gt;</code> that didn&#39;t give you control over how its cells were rendered. That would be pretty limited!</p><h2 id=rendering-body-content><a name=rendering-body-content class=anchor href=#rendering-body-content><span class=header-link></span></a>Rendering body content</h2><p>When a custom tag is passed body content, it is received as a special <code>renderBody</code> property on the component&#39;s <code>input</code>. You can include this content anywhere in your component by using the <a href=/docs/syntax/#dynamic-tagname><code>&lt;&#36;{dynamic}&gt;</code> syntax</a>.</p><div class=code-block-filename>components/fancy-container.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"container fancy\"</span>>\n    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"container fancy\"</span>\n    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n</pre>"
  }, out, _component, "29");

  out.w("<p>If we were to use this tag like this:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>fancy-container</span>>\n    &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>Content goes here...</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#FF4185>fancy-container</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>fancy-container</span>\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Content goes here...</span>\n</pre>"
  }, out, _component, "32");

  out.w("<p>The rendered output would be:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"container fancy\"</span>>&lt;<span style=color:#FF4185>p</span>>Content goes here...&lt;/<span style=color:#FF4185>p</span>>&lt;/<span style=color:#FF4185>div</span>>\n</pre><p>This is a pretty basic example, but you can imagine how this could be incorporated into a more advanced component to render passed content where/when needed.</p><blockquote class=protip><p><strong>ProTip:</strong> Body content can be rendered multiple times. Or not at all.</p></blockquote><h2 id=passing-attributes-to-body-content><a name=passing-attributes-to-body-content class=anchor href=#passing-attributes-to-body-content><span class=header-link></span></a>Passing attributes to body content</h2><p>When rendering body content with <code>&lt;&#36;{dynamic}&gt;</code>, attributes may also be passed:</p><div class=code-block-filename>components/random-value.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- heh, it's not actually random --></span>\n&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> <span style=color:#A6E22E>number</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1337</span> />\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// heh, it's not actually random</span>\n&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> <span style=color:#A6E22E>number</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1337</span>/>\n</pre>"
  }, out, _component, "45");

  out.w("<p>These attribute values can be received as a <a href=/docs/syntax/#parameters>tag parameter</a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>random-value</span>|{ <span style=color:#FFAC4D;font-style:italic>number</span> }|>\n<span style=color:#FFF066>    The number is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>number</span><span style=color:#66D9EF>}</span>\n&lt;/<span style=color:#FF4185>random-value</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>random-value</span>|{ <span style=color:#FFAC4D;font-style:italic>number</span> }| --<span style=color:#FFF066> The number is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>number</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "48");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> Some tags (like the above tag) may not render anything except their body content with some data. This can be quite useful, just look at the <code>&lt;for&gt;</code> and <code>&lt;await&gt;</code> tags!</p></blockquote><h2 id=named-body-content><a name=named-body-content class=anchor href=#named-body-content><span class=header-link></span></a>Named body content</h2><p>You can also pass named content sections to a tag using <a href=/docs/syntax/#attribute-tag>attribute tags</a> which are denoted by the <code>@</code> prefix.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>layout</span>>\n    &lt;<span style=color:#A6E22E>@heading</span>>\n        &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello Marko</span>&lt;/<span style=color:#FF4185>h1</span>>\n    &lt;/<span style=color:#A6E22E>@heading</span>>\n    &lt;<span style=color:#A6E22E>@content</span>>\n        &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>...</span>&lt;/<span style=color:#FF4185>p</span>>\n    &lt;/<span style=color:#A6E22E>@content</span>>\n&lt;/<span style=color:#FF4185>layout</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>layout</span>\n    <span style=color:#A6E22E>@heading</span>\n        <span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello Marko</span>\n    <span style=color:#A6E22E>@content</span>\n        <span style=color:#FF4185>p</span> --<span style=color:#FFF066> ...</span>\n</pre>"
  }, out, _component, "60");

  out.w("<p>Like attributes, these attribute tags are received as <code>input.heading</code> and <code>input.content</code>, but they each have a <code>renderBody</code> property which we can now use:</p><div class=code-block-filename>components/layout.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n&lt;<span style=color:#FF4185>html</span>>\n    &lt;<span style=color:#FF4185>body</span>>\n        &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>heading</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n        &lt;<span style=color:#FF4185>hr</span>/>\n        &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>content</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n    &lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n<span style=color:#FF4185>html</span>\n    <span style=color:#FF4185>body</span>\n        &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>heading</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n        <span style=color:#FF4185>hr</span>\n        &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>content</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n</pre>"
  }, out, _component, "66");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> The <code>renderBody</code> property can be omitted. You could use <code>&lt;&#36;{input.heading}/&gt;</code>, for example.</p></blockquote><h3 id=repeated-attribute-tags><a name=repeated-attribute-tags class=anchor href=#repeated-attribute-tags><span class=header-link></span></a>Repeated attribute tags</h3><p>It is sometimes useful to allow multiple of the same attribute tag to be passed. This would allow us to, for example, build a custom table component which would allow its user to specify any number of columns, while still giving ther user control over how each column is rendered:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>fancy-table</span> <span style=color:#A6E22E>data</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>people</span>>\n    &lt;<span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|>\n<span style=color:#FFF066>        Name: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#A6E22E>@column</span>>\n    &lt;<span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|>\n<span style=color:#FFF066>        Age: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#A6E22E>@column</span>>\n&lt;/<span style=color:#FF4185>fancy-table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>fancy-table</span> <span style=color:#A6E22E>data</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>people</span>\n    <span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| --<span style=color:#FFF066> Name: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    <span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| --<span style=color:#FFF066> Age: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "77");

  out.w("<p>In order to receive multiple of the same attribute tag, you need to specify that the attribute tag can be repeated in a <a href=/docs/marko-json/#single-component-definition><code>marko-tag.json</code></a> file.</p><div class=code-block-filename>components/fancy-table/marko-tag.json</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n    <span style=color:#FFF066>\"@data\"</span>: <span style=color:#FFF066>\"array\"</span>,\n    <span style=color:#FFF066>\"&lt;column>\"</span>: {\n        <span style=color:#FFF066>\"is-repeated\"</span>: <span style=color:#AE81FF>true</span>\n    }\n}\n</pre><p>We can then use the <code>&lt;for&gt;</code> tag to render the body content into table, passing the row data to each column&#39;s body.</p><div class=code-block-filename>components/fancy-table/index.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy\"</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>row</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>data</span>>\n        &lt;<span style=color:#FF4185>tr</span>>\n<div class=line-highlight>            &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>></div><div class=line-highlight>                &lt;<span style=color:#FF4185>td</span>></div><div class=line-highlight>                    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> ...<span style=color:#FFFFFF>row</span>/></div><div class=line-highlight>                &lt;/<span style=color:#FF4185>td</span>></div><div class=line-highlight>            &lt;/<span style=color:#66D9EF>for</span>></div>        &lt;/<span style=color:#FF4185>tr</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy\"</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>row</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>data</span>\n        <span style=color:#FF4185>tr</span>\n            <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>\n                <span style=color:#FF4185>td</span>\n                    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> ...<span style=color:#FFFFFF>row</span>/>\n</pre>"
  }, out, _component, "85");

  out.w("<p>We now have a working <code>&lt;fancy-table&gt;</code>. Let&#39;s see what it renders:</p><div class=code-block-filename>Example Data</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>[\n  {\n    name: <span style=color:#FFF066>\"Patrick\"</span>,\n    age: <span style=color:#AE81FF>63</span>\n  },\n  {\n    name: <span style=color:#FFF066>\"Austin\"</span>,\n    age: <span style=color:#AE81FF>12</span>\n  }\n];\n</pre><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"fancy\"</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>td</span>>Name: Patrick&lt;/<span style=color:#FF4185>td</span>>\n    &lt;<span style=color:#FF4185>td</span>>Age: 63&lt;/<span style=color:#FF4185>td</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>td</span>>Name: Austin&lt;/<span style=color:#FF4185>td</span>>\n    &lt;<span style=color:#FF4185>td</span>>Age: 12&lt;/<span style=color:#FF4185>td</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre><h3 id=attributes-on-attribute-tags><a name=attributes-on-attribute-tags class=anchor href=#attributes-on-attribute-tags><span class=header-link></span></a>Attributes on attribute tags</h3><p>If you look at our previous example, we had to prefix each cell with the column label. It would be better if we could give a name to each column instead and only render that once.</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>fancy-table</span>>\n    &lt;<span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| <span style=color:#A6E22E>heading</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Name\"</span>>\n<span style=color:#FFF066>        </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#A6E22E>@column</span>>\n    &lt;<span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| <span style=color:#A6E22E>heading</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Age\"</span>>\n<span style=color:#FFF066>        </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#A6E22E>@column</span>>\n&lt;/<span style=color:#FF4185>fancy-table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>fancy-table</span>\n    <span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| <span style=color:#A6E22E>heading</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Name\"</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    <span style=color:#A6E22E>@column</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| <span style=color:#A6E22E>heading</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Age\"</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "95");

  out.w("<p>Now, each object in the <code>input.column</code> array will contain a <code>heading</code> property in addition to its <code>renderBody</code>. We can use another <code>&lt;for&gt;</code> and render the headings in <code>&lt;th&gt;</code> tags:</p><div class=code-block-filename>components/fancy-table/index.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy\"</span>>\n    &lt;<span style=color:#FF4185>tr</span>>\n<div class=line-highlight>        &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>></div><div class=line-highlight>            &lt;<span style=color:#FF4185>th</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>heading</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>th</span>></div><div class=line-highlight>        &lt;/<span style=color:#66D9EF>for</span>></div>    &lt;/<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>row</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>data</span>>\n        &lt;<span style=color:#FF4185>tr</span>>\n            &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>>\n                &lt;<span style=color:#FF4185>td</span>>\n                    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> ...<span style=color:#FFFFFF>row</span>/>\n                &lt;/<span style=color:#FF4185>td</span>>\n            &lt;/<span style=color:#66D9EF>for</span>>\n        &lt;/<span style=color:#FF4185>tr</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy\"</span>\n    <span style=color:#FF4185>tr</span>\n        <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>\n            <span style=color:#FF4185>th</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>heading</span><span style=color:#66D9EF>}</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>row</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>data</span>\n        <span style=color:#FF4185>tr</span>\n            <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>\n                <span style=color:#FF4185>td</span>\n                    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> ...<span style=color:#FFFFFF>row</span>/>\n</pre>"
  }, out, _component, "103");

  out.w("<p>We&#39;ll now get a row of headings when we render our <code>&lt;fancy-table&gt;</code></p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"fancy\"</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>th</span>>Name&lt;/<span style=color:#FF4185>th</span>>\n    &lt;<span style=color:#FF4185>th</span>>Age&lt;/<span style=color:#FF4185>th</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>td</span>>Patrick&lt;/<span style=color:#FF4185>td</span>>\n    &lt;<span style=color:#FF4185>td</span>>63&lt;/<span style=color:#FF4185>td</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>td</span>>Austin&lt;/<span style=color:#FF4185>td</span>>\n    &lt;<span style=color:#FF4185>td</span>>12&lt;/<span style=color:#FF4185>td</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre><h3 id=nested-attribute-tags><a name=nested-attribute-tags class=anchor href=#nested-attribute-tags><span class=header-link></span></a>Nested attribute tags</h3><p>Continuing to build on our example, what if we want to add some custom content or even components into the column headings? In this case, we can extend our <code>&lt;fancy-table&gt;</code> to use nested attribute tags. We&#39;ll now have <code>&lt;@heading&gt;</code> and <code>&lt;@cell&gt;</code> tags nested under <code>&lt;@column&gt;</code>. This gives users of our tag full control over how to render both column headings and the cells within the column!</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>fancy-table</span>>\n    &lt;<span style=color:#A6E22E>@column</span>>\n<div class=line-highlight>        &lt;<span style=color:#A6E22E>@heading</span>></div><div class=line-highlight>            &lt;<span style=color:#FF4185>app-icon</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"profile\"</span>/><span style=color:#FFF066> Name</span></div><div class=line-highlight>        &lt;/<span style=color:#A6E22E>@heading</span>></div><div class=line-highlight>        &lt;<span style=color:#A6E22E>@cell</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|></div><div class=line-highlight><span style=color:#FFF066>            </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span></div><div class=line-highlight>        &lt;/<span style=color:#A6E22E>@cell</span>></div>    &lt;/<span style=color:#A6E22E>@column</span>>\n    &lt;<span style=color:#A6E22E>@column</span>>\n        &lt;<span style=color:#A6E22E>@heading</span>>\n            &lt;<span style=color:#FF4185>app-icon</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"calendar\"</span>/><span style=color:#FFF066> Age</span>\n        &lt;/<span style=color:#A6E22E>@heading</span>>\n        &lt;<span style=color:#A6E22E>@cell</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|>\n<span style=color:#FFF066>            </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span>\n        &lt;/<span style=color:#A6E22E>@cell</span>>\n    &lt;/<span style=color:#A6E22E>@column</span>>\n&lt;/<span style=color:#FF4185>fancy-table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>fancy-table</span>\n    <span style=color:#A6E22E>@column</span>\n        <span style=color:#A6E22E>@heading</span>\n            <span style=color:#FF4185>app-icon</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"profile\"</span>\n            --<span style=color:#FFF066>  Name</span>\n        <span style=color:#A6E22E>@cell</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    <span style=color:#A6E22E>@column</span>\n        <span style=color:#A6E22E>@heading</span>\n            <span style=color:#FF4185>app-icon</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"calendar\"</span>\n            --<span style=color:#FFF066>  Age</span>\n        <span style=color:#A6E22E>@cell</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>age</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "116");

  out.w("<p>Now instead of rendering the heading as text, we&#39;ll render the heading&#39;s body content.</p><div class=code-block-filename>components/fancy-table/index.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy\"</span>>\n    &lt;<span style=color:#FF4185>tr</span>>\n        &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>>\n            &lt;<span style=color:#FF4185>th</span>>\n<div class=line-highlight>                &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>heading</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/></div>            &lt;/<span style=color:#FF4185>th</span>>\n        &lt;/<span style=color:#66D9EF>for</span>>\n    &lt;/<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>row</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>data</span>>\n        &lt;<span style=color:#FF4185>tr</span>>\n            &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>>\n                &lt;<span style=color:#FF4185>td</span>>\n                    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>cell</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> ...<span style=color:#FFFFFF>row</span>/>\n                &lt;/<span style=color:#FF4185>td</span>>\n            &lt;/<span style=color:#66D9EF>for</span>>\n        &lt;/<span style=color:#FF4185>tr</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy\"</span>\n    <span style=color:#FF4185>tr</span>\n        <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>\n            <span style=color:#FF4185>th</span>\n                &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>heading</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>row</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>data</span>\n        <span style=color:#FF4185>tr</span>\n            <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>column</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>column</span>\n                <span style=color:#FF4185>td</span>\n                    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>column</span>.<span style=color:#FFFFFF>cell</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span> ...<span style=color:#FFFFFF>row</span>/>\n</pre>"
  }, out, _component, "119");

  out.w("<p>Our headings can now include icons (and anything else)!</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>table</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"fancy\"</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>th</span>>&lt;<span style=color:#FF4185>img</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"icon\"</span> <span style=color:#A6E22E>src</span>=<span style=color:#FFF066>\"profile.svg\"</span> /> Name&lt;/<span style=color:#FF4185>th</span>>\n    &lt;<span style=color:#FF4185>th</span>>&lt;<span style=color:#FF4185>img</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"icon\"</span> <span style=color:#A6E22E>src</span>=<span style=color:#FFF066>\"calendar.svg\"</span> /> Age&lt;/<span style=color:#FF4185>th</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>td</span>>Patrick&lt;/<span style=color:#FF4185>td</span>>\n    &lt;<span style=color:#FF4185>td</span>>63&lt;/<span style=color:#FF4185>td</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n  &lt;<span style=color:#FF4185>tr</span>>\n    &lt;<span style=color:#FF4185>td</span>>Austin&lt;/<span style=color:#FF4185>td</span>>\n    &lt;<span style=color:#FF4185>td</span>>12&lt;/<span style=color:#FF4185>td</span>>\n  &lt;/<span style=color:#FF4185>tr</span>>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre><h3 id=dynamic-attribute-tags><a name=dynamic-attribute-tags class=anchor href=#dynamic-attribute-tags><span class=header-link></span></a>Dynamic attribute tags</h3><p>The flexibility of the <code>&lt;fancy-table&gt;</code> is great if you want to render columns differently or have columns that display the data in a special way (such as displaying an age derived from a date of birth). However, if all columns are basically the same, the user might feel they&#39;re repeating themselves. As you might expect, you can use <code>&lt;for&gt;</code> (and <code>&lt;if&gt;</code>) to dynamically render attribute tags.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>columns</span> <span style=color:#FFFFFF>=</span> [{\n    property: <span style=color:#FFF066>\"name\"</span>,\n    title: <span style=color:#FFF066>\"Name\"</span>,\n    icon: <span style=color:#FFF066>\"profile\"</span>\n}, {\n    property: <span style=color:#FFF066>\"age\"</span>,\n    title: <span style=color:#FFF066>\"Age\"</span>,\n    icon: <span style=color:#FFF066>\"calendar\"</span>\n}]\n\n&lt;<span style=color:#FF4185>fancy-table</span>>\n    &lt;<span style=color:#66D9EF>for</span>|{ <span style=color:#FFAC4D;font-style:italic>property</span>, <span style=color:#FFAC4D;font-style:italic>title</span>, <span style=color:#FFAC4D;font-style:italic>icon</span> }|>\n        &lt;<span style=color:#A6E22E>@column</span>>\n            &lt;<span style=color:#A6E22E>@heading</span>>\n                &lt;<span style=color:#FF4185>app-icon</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>icon</span>/><span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>title</span><span style=color:#66D9EF>}</span>\n            &lt;/<span style=color:#A6E22E>@heading</span>>\n            &lt;<span style=color:#A6E22E>@cell</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|>\n<span style=color:#FFF066>                </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>[<span style=color:#FFFFFF>property</span>]<span style=color:#66D9EF>}</span>\n            &lt;/<span style=color:#A6E22E>@cell</span>>\n        &lt;/<span style=color:#A6E22E>@column</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>fancy-table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>columns</span> <span style=color:#FFFFFF>=</span> [\n    {\n        property: <span style=color:#FFF066>\"name\"</span>,\n        title: <span style=color:#FFF066>\"Name\"</span>,\n        icon: <span style=color:#FFF066>\"profile\"</span>\n    },\n    {\n        property: <span style=color:#FFF066>\"age\"</span>,\n        title: <span style=color:#FFF066>\"Age\"</span>,\n        icon: <span style=color:#FFF066>\"calendar\"</span>\n    }\n];\n<span style=color:#FF4185>fancy-table</span>\n    <span style=color:#66D9EF>for</span>|{ <span style=color:#FFAC4D;font-style:italic>property</span>, <span style=color:#FFAC4D;font-style:italic>title</span>, <span style=color:#FFAC4D;font-style:italic>icon</span> }|\n        <span style=color:#A6E22E>@column</span>\n            <span style=color:#A6E22E>@heading</span>\n                ---\n                &lt;<span style=color:#FF4185>app-icon</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>icon</span>/><span style=color:#FFF066> </span>\n<span style=color:#FFF066>                 </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>title</span><span style=color:#66D9EF>}</span>\n<span style=color:#FFF066>                </span>---\n            <span style=color:#A6E22E>@cell</span>|<span style=color:#FFAC4D;font-style:italic>person</span>| --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>[<span style=color:#FFFFFF>property</span>]<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "129");
}, {
  t: body_content_marko_componentType,
  i: true
}, body_content_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/component-diagram.svg
/* harmony default export */ const component_diagram = ("/assets/ac0aede9.svg");
;// CONCATENATED MODULE: ../../node_modules/marko/docs/class-components.md
const class_components_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const class_components = (class_components_marko_template);

toc_registry.set("../../node_modules/marko/docs/class-components.md", "<ul class=\"toc toc-level1\"><li><a href=\"#ui-component-diagram\">UI component diagram</a></li><li><a href=\"#component-structure\">Component structure</a></li><li><a href=\"#server-side-rendering\">Server-side rendering</a></li><li><a href=\"#single-file-components\">Single-file components</a><ul class=\"toc toc-level2\"><li><a href=\"#styles\">Styles</a></li></ul></li><li><a href=\"#multi-file-components\">Multi-file components</a><ul class=\"toc toc-level2\"><li><a href=\"#supporting-files\">Supporting files</a></li><li><a href=\"#components-with-plain-objects\">Components with plain objects</a></li></ul></li><li><a href=\"#split-components\">Split components</a><ul class=\"toc toc-level2\"><li><a href=\"#usage\">Usage</a></li><li><a href=\"#example\">Example</a></li></ul></li><li><a href=\"#event-handling\">Event handling</a><ul class=\"toc toc-level2\"><li><a href=\"#attaching-dom-event-listeners\">Attaching DOM event listeners</a></li><li><a href=\"#attaching-custom-event-listeners\">Attaching custom event listeners</a></li></ul></li><li><a href=\"#attributes\">Attributes</a><ul class=\"toc toc-level2\"><li><a href=\"#on-eventmethodnamefunction-args\">on-[event]()</a></li><li><a href=\"#once-eventmethodnamefunction-args\">once-[event]()</a></li><li><a href=\"#key\">key</a><ul class=\"toc toc-level3\"><li><a href=\"#referencing-nested-html-elements-and-components\">Referencing nested HTML elements and components</a></li><li><a href=\"#keyed-matching\">Keyed matching</a></li><li><a href=\"#scoped\">*:scoped</a></li></ul></li><li><a href=\"#no-update\">no-update</a></li><li><a href=\"#no-update-if\">no-update-if</a></li><li><a href=\"#no-update-body\">no-update-body</a></li><li><a href=\"#no-update-body-if\">no-update-body-if</a></li><li><a href=\"#no-update_1\">:no-update</a></li></ul></li><li><a href=\"#properties\">Properties</a><ul class=\"toc toc-level2\"><li><a href=\"#thisid\">this.id</a></li><li><a href=\"#thisstate\">this.state</a></li><li><a href=\"#thisinput\">this.input</a></li></ul></li><li><a href=\"#variables\">Variables</a><ul class=\"toc toc-level2\"><li><a href=\"#component\">component</a></li><li><a href=\"#input\">input</a></li><li><a href=\"#state\">state</a></li></ul></li><li><a href=\"#methods\">Methods</a><ul class=\"toc toc-level2\"><li><a href=\"#destroyoptions\">destroy()</a></li><li><a href=\"#forceupdate\">forceUpdate()</a></li><li><a href=\"#getelkey-index\">getEl()</a></li><li><a href=\"#getelskey\">getEls()</a></li><li><a href=\"#getelidkey-index\">getElId()</a></li><li><a href=\"#getcomponentkey-index\">getComponent()</a></li><li><a href=\"#getcomponentskey-index\">getComponents()</a></li><li><a href=\"#isdestroyed\">isDestroyed()</a></li><li><a href=\"#isdirty\">isDirty()</a></li><li><a href=\"#replacestatenewstate\">replaceState()</a></li><li><a href=\"#rerenderinput\">rerender()</a></li><li><a href=\"#setstatename-value\">setState()</a></li><li><a href=\"#setstatenewstate\">setState()</a></li><li><a href=\"#setstatedirtyname-value\">setStateDirty()</a><ul class=\"toc toc-level3\"><li><a href=\"#more-details\">More details</a></li></ul></li><li><a href=\"#subscribetoemitter\">subscribeTo()</a></li><li><a href=\"#update\">update()</a></li></ul></li><li><a href=\"#event-methods\">Event methods</a><ul class=\"toc toc-level2\"><li><a href=\"#emiteventname-args\">emit()</a></li><li><a href=\"#oneventname-handler\">on()</a></li><li><a href=\"#onceeventname-handler\">once()</a></li></ul></li><li><a href=\"#lifecycle-events\">Lifecycle events</a><ul class=\"toc toc-level2\"><li><a href=\"#lifecycle-event-methods\">Lifecycle event methods</a></li><li><a href=\"#oncreateinput-out\">onCreate()</a></li><li><a href=\"#oninputinput-out\">onInput()</a></li><li><a href=\"#onrenderout\">onRender()</a></li><li><a href=\"#onmount\">onMount()</a></li><li><a href=\"#onupdate\">onUpdate()</a></li><li><a href=\"#ondestroy\">onDestroy()</a></li></ul></li><li><a href=\"#dom-manipulation-methods\">DOM manipulation methods</a><ul class=\"toc toc-level2\"><li><a href=\"#appendtotargetel\">appendTo()</a></li><li><a href=\"#insertaftertargetel\">insertAfter()</a></li><li><a href=\"#insertbeforetargetel\">insertBefore()</a></li><li><a href=\"#prependtotargetel\">prependTo()</a></li><li><a href=\"#replacetargetel\">replace()</a></li><li><a href=\"#replacechildrenoftargetel\">replaceChildrenOf()</a></li></ul></li></ul>");






const class_components_marko_componentType = "lgBH+uxO",
      class_components_marko_component = {};
class_components_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<h1 id=class-components><a name=class-components class=anchor href=#class-components><span class=header-link></span></a>Class Components</h1><p>Marko makes it easy to create user interface components to use as building blocks for web pages and applications of any complexity.</p><p>Marko promotes self-contained components that:</p><ul><li>Are independently testable</li><li>Encapsulate the view, client-side behavior (like event handling) and styling</li><li>Can easily be combined to create composite UI components.</li></ul><p>Marko components compile into small, efficient JavaScript modules that hide implementation details from consumers. Components can be published to <a href=https://www.npmjs.com>npm</a> for reuse across applications.</p><h2 id=ui-component-diagram><a name=ui-component-diagram class=anchor href=#ui-component-diagram><span class=header-link></span></a>UI component diagram</h2><p><img${attr_default()("src", component_diagram)} alt="Component diagram" style=max-width:100%></p><p>In Marko, the DOM output of a UI component is based on <em>input properties</em> and optional <em>internal state</em> used to control the view.</p><p>If Marko detects changes to <code>input</code> or the internal <code>state</code>, then the view (that is, the DOM) will automatically update to reflect the new input and state. Internally, Marko uses virtual DOM diffing/patching to update the view, but that\u2019s an implementation detail that could change at any time.</p><h2 id=component-structure><a name=component-structure class=anchor href=#component-structure><span class=header-link></span></a>Component structure</h2><p>Marko makes it easy to keep your component\u2019s class and styles next to the HTML view that they correspond to. The following are the key parts of any UI component:</p><ul><li><strong>View</strong> - The HTML template for your UI component. Receives input properties and states, and renders to either server-side HTML or browser-side virtual DOM nodes.</li><li><strong>Client-side behavior</strong> - A JavaScript <code>class</code> with methods and properties for initialization, event handling (including DOM events, custom events and lifecycle events), and state management.</li><li><strong>Styles</strong> - Cascading StyleSheets, including support for CSS preprocessors like <a href=http://lesscss.org/ >Less</a> or <a href=https://sass-lang.com/ >Sass</a>.</li></ul><h2 id=server-side-rendering><a name=server-side-rendering class=anchor href=#server-side-rendering><span class=header-link></span></a>Server-side rendering</h2><p>A UI component can be rendered on the server or in the browser, but stateful component instances will be automatically mounted to the DOM in the browser for both. If a UI component tree is rendered on the server, then Marko will recreate the UI component tree in the browser with no extra code required. For more details, please see <a href=/docs/server-side-rendering/ >Server-side rendering</a>.</p><h2 id=single-file-components><a name=single-file-components class=anchor href=#single-file-components><span class=header-link></span></a>Single-file components</h2><p>Marko lets you define a <code>class</code> for a component right in the <code>.marko</code> file, and call that class\u2019s methods with <code>on-*</code> attributes:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>`);

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            count: <span style=color:#AE81FF>0</span>\n        };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>label</span>><span style=color:#FFF066>The current count is</span> &lt;<span style=color:#FF4185>output</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>output</span>>&lt;/<span style=color:#FF4185>label</span>>\n&lt;<span style=color:#FF4185>p</span>>&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)><span style=color:#FFF066>+1</span>&lt;/<span style=color:#FF4185>button</span>>&lt;/<span style=color:#FF4185>p</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            count: <span style=color:#AE81FF>0</span>\n        };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n<span style=color:#FF4185>label</span>\n    --<span style=color:#FFF066> The current count is</span>\n    <span style=color:#FF4185>output</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>p</span>\n    <span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> +1</span>\n</pre>"
  }, out, _component, "49");

  out.w("<h3 id=styles><a name=styles class=anchor href=#styles><span class=header-link></span></a>Styles</h3><p>Adding styles in your view is also made easy:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#A6E22E>.primary</span> {\n        <span style=color:#66D9EF;font-style:italic>background</span>: <span style=color:#AE81FF>#09c</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>label</span>><span style=color:#FFF066>The current count is</span> &lt;<span style=color:#FF4185>output</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>output</span>>&lt;/<span style=color:#FF4185>label</span>>\n&lt;<span style=color:#FF4185>p</span>>&lt;<span style=color:#FF4185>button</span><span style=color:#A6E22E>.primary</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)><span style=color:#FFF066>+1</span>&lt;/<span style=color:#FF4185>button</span>>&lt;/<span style=color:#FF4185>p</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#A6E22E>.primary</span> {\n        <span style=color:#66D9EF;font-style:italic>background</span>: <span style=color:#AE81FF>#09c</span>;\n    }\n}\n\n<span style=color:#FF4185>label</span>\n    --<span style=color:#FFF066> The current count is</span>\n    <span style=color:#FF4185>output</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>p</span>\n    <span style=color:#FF4185>button</span><span style=color:#A6E22E>.primary</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> +1</span>\n</pre>"
  }, out, _component, "54");

  out.w("<p>These styles aren\u2019t output in a <code>&lt;style&gt;</code> tag as inline styles usually are, but are externalized to deduplicate them across multiple component instances on a page.</p><p>If you use a CSS preprocessor, you can add its file extension on <code>style</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#A6E22E>.primary</span> {\n        <span style=color:#66D9EF;font-style:italic>background</span>: <span style=color:#FFFFFF>@primaryColor</span>;\n    }\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#A6E22E>.primary</span> {\n        <span style=color:#66D9EF;font-style:italic>background</span>: <span style=color:#FFFFFF>@primaryColor</span>;\n    }\n}\n</pre>"
  }, out, _component, "59");

  out.w("<blockquote class=note><p><strong>Note:</strong> The code in the <code>style</code> section is processed in a context separate from the rest of the template, so you can\u2019t use JavaScript variables inside it. If you need variables in your CSS, use a CSS preprocessor that supports them.</p></blockquote><h2 id=multi-file-components><a name=multi-file-components class=anchor href=#multi-file-components><span class=header-link></span></a>Multi-file components</h2><p>You might prefer to keep your component\u2019s class and styles in separate files from the view \u2014 the classical separation of HTML, CSS, and JavaScript. Marko makes this possible with a filename-based convention.</p><blockquote class=protip><p><strong>ProTip:</strong> If your\u2019re moving the component\u2019s class and styles to separate files is because the code is getting too large, consider splitting the component into smaller, more manageable components.</p></blockquote><h3 id=supporting-files><a name=supporting-files class=anchor href=#supporting-files><span class=header-link></span></a>Supporting files</h3><p>Marko discovers supporting files in the same directory as a Marko view. For example, if you have a view named <code>counter.marko</code>, Marko will automatically look for <code>counter.component.js</code> and <code>counter.style.css</code>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>counter.marko\ncounter.component.js\ncounter.style.css\n</pre><p>Marko also handles views named <code>index.marko</code> specially. It will look for <code>component.js</code> and <code>style.css</code> in addition to <code>index.component.js</code> and <code>index.style.css</code>. This allows easily grouping component files into a directory:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>counter/\n    index.marko\n    component.js\n    style.css\n</pre><p>In your <code>component.js</code> file, export the component\u2019s class:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCreate</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      count: <span style=color:#AE81FF>0</span>\n    };\n  }\n  <span style=color:#A6E22E>increment</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n  }\n};\n</pre><p>In your <code>index.marko</code> file, you can reference methods from that class with <code>on-*</code> attributes:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>label</span>><span style=color:#FFF066>The current count is</span> &lt;<span style=color:#FF4185>output</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>output</span>>&lt;/<span style=color:#FF4185>label</span>>\n&lt;<span style=color:#FF4185>p</span>>&lt;<span style=color:#FF4185>button</span><span style=color:#A6E22E>.primary</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)><span style=color:#FFF066>+1</span>&lt;/<span style=color:#FF4185>button</span>>&lt;/<span style=color:#FF4185>p</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>label</span>\n    --<span style=color:#FFF066> The current count is</span>\n    <span style=color:#FF4185>output</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>p</span>\n    <span style=color:#FF4185>button</span><span style=color:#A6E22E>.primary</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> +1</span>\n</pre>"
  }, out, _component, "89");

  out.w("<p>And in your <code>style.css</code>, define the styles:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#A6E22E>.primary</span> {\n  <span style=color:#66D9EF;font-style:italic>background</span>: <span style=color:#AE81FF>#09c</span>;\n}\n</pre><blockquote class=protip><p><strong>ProTip:</strong> Marko actually looks any filenames with the pattern <code>[name].style.*</code>, so it will pick up any CSS preprocessor file extensions you use: <code>.less</code>, <code>.stylus</code>, <code>.scss</code>, etc.</p></blockquote><h3 id=components-with-plain-objects><a name=components-with-plain-objects class=anchor href=#components-with-plain-objects><span class=header-link></span></a>Components with plain objects</h3><p>If you target browsers that does not support classes, a plain object of methods can be exported:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> {\n  <span style=color:#A6E22E>onCreate</span>: <span style=color:#66D9EF;font-style:italic>function</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      count: <span style=color:#AE81FF>0</span>\n    };\n  },\n  <span style=color:#A6E22E>increment</span>: <span style=color:#66D9EF;font-style:italic>function</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n  }\n};\n</pre><h2 id=split-components><a name=split-components class=anchor href=#split-components><span class=header-link></span></a>Split components</h2><p>Split components optimize for when a component renders on the server, and doesn\u2019t need to dynamically rerender in the browser. As a result, its template and logic aren\u2019t sent to the browser, reducing load time and download size.</p><blockquote class=note><p><strong>Note:</strong> If a split component is the child of a stateful component, its full rendering logic will still be sent because the parent may pass new input to the split component and rerender it.</p></blockquote><p>Additionally, if <em>all</em> components rendered on a page are split components, Marko\u2019s VDOM and rendering runtime is unnecessary, and therefore not sent to the browser.</p><blockquote class=protip><p><strong>ProTip:</strong> Don\u2019t over-optimize. If your component really doesn\u2019t need rerendering, go ahead and split, but don\u2019t forgo stateful rerendering when it would make your code more maintainable.</p></blockquote><h3 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h3><p>Marko discovers split components similarly to how it discovers an external component class. For example, if you have a view named <code>button.marko</code>, it will automatically look for <code>button.component-browser.js</code>. If your view is named <code>index.marko</code>, it will look for <code>component-browser.js</code> in addition to <code>index.component-browser.js</code>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>counter/\n    index.marko\n    component-browser.js\n</pre><p>A split component might need to do some setup as part of its initial render. In this case, the component may define a second component class to use the <code>onCreate</code>, <code>onInput</code>, and <code>onRender</code> <a href=#lifecycle-events>lifecycle methods</a>.</p><p>This class can be exported from <code>component.js</code>, or defined right in the template as a single-file components. In this case, your component folder may contain a <code>component.js</code> file, and must contain a <code>component-browser.js</code>. The following <a href=#lifecycle-events>lifecycle methods</a> can go inside the <code>component.js</code> file:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>class {\n  onCreate(input, out) { }\n  onInput(input, out) { }\n  onRender(out) { }\n  onDestroy() { }\n}\n</pre><p>And the following <a href=#lifecycle-events>lifecycle methods</a> can go inside the <code>component-browser.js</code> file:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>class {\n  onMount() { }\n  onUpdate() { }\n}\n</pre><p>Any JavaScript code related to the DOM or browser should also be inside <code>component-browser.js</code>.</p><h3 id=example><a name=example class=anchor href=#example><span class=header-link></span></a>Example</h3><p><code>index.marko</code></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>number</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>123</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'shout'</span>)><span style=color:#FFF066>What\u2019s my favorite number?</span>&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>number</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>123</span>;\n    }\n}\n\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"shout\"</span>) --<span style=color:#FFF066> What\u2019s my favorite number?</span>\n</pre>"
  }, out, _component, "145");

  out.w("<p><code>component-browser.js</code></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> {\n  <span style=color:#A6E22E>shout</span>() {\n    <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`My favorite number is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>this</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>number</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n  }\n};\n</pre><h2 id=event-handling><a name=event-handling class=anchor href=#event-handling><span class=header-link></span></a>Event handling</h2><p>The <code>on-[event](methodName|function, ...args)</code> attributes allow event listeners to be attached for either:</p><ul><li>A native DOM event, when used on a native DOM element such as a <code>&lt;button&gt;</code></li><li>Or a UI component event, when used on a custom tag for a UI component such as <code>&lt;my-component&gt;</code></li></ul><p>The <code>on-*</code> attributes are used to associate event handler methods with an event name. Event handlers may be specified by <code>&#39;methodName&#39;</code> \u2014 a string that matches a method on the component instance, or they may be a <code>function</code>. Attaching listeners for native DOM events and UI component custom events is explained in more detail in the sections below.</p><p>You may also use the <code>once-[event](methodName|function, ...args)</code> syntax, which will listen for only the first event, and then remove the listener.</p><h3 id=attaching-dom-event-listeners><a name=attaching-dom-event-listeners class=anchor href=#attaching-dom-event-listeners><span class=header-link></span></a>Attaching DOM event listeners</h3><p>The code below illustrates how to attach an event listener for native DOM events:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onButtonClick</span>(<span style=color:#FFAC4D;font-style:italic>name</span>, <span style=color:#FFAC4D;font-style:italic>event</span>, <span style=color:#FFAC4D;font-style:italic>el</span>) {\n    <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n  }\n}\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>fadeIn</span>(<span style=color:#FFAC4D;font-style:italic>event</span>, <span style=color:#FFAC4D;font-style:italic>el</span>) {\n  <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>hidden</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>false</span>;\n  <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>style</span>.<span style=color:#FFFFFF>opacity</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n  <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>style</span>.<span style=color:#FFFFFF>transition</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>'opacity 1s'</span>;\n  <span style=color:#66D9EF>setTimeout</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>style</span>.<span style=color:#FFFFFF>opacity</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>1</span>);\n}\n\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'onButtonClick'</span>, <span style=color:#FFF066>'Frank'</span>)>\n<span style=color:#FFF066>  Say Hello to Frank</span>\n&lt;/<span style=color:#FF4185>button</span>>\n\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'onButtonClick'</span>, <span style=color:#FFF066>'John'</span>)>\n<span style=color:#FFF066>  Say Hello to John</span>\n&lt;/<span style=color:#FF4185>button</span>>\n\n&lt;<span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>'foo.jpg'</span> <span style=color:#66D9EF;font-style:italic>once-load</span>(<span style=color:#FFFFFF>fadeIn</span>) <span style=color:#A6E22E>hidden</span> />\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onButtonClick</span>(<span style=color:#FFAC4D;font-style:italic>name</span>, <span style=color:#FFAC4D;font-style:italic>event</span>, <span style=color:#FFAC4D;font-style:italic>el</span>) {\n        <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n    }\n}\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>fadeIn</span>(<span style=color:#FFAC4D;font-style:italic>event</span>, <span style=color:#FFAC4D;font-style:italic>el</span>) {\n    <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>hidden</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>false</span>;\n    <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>style</span>.<span style=color:#FFFFFF>opacity</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n    <span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>style</span>.<span style=color:#FFFFFF>transition</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"opacity 1s\"</span>;\n    <span style=color:#66D9EF>setTimeout</span>(() <span style=color:#66D9EF;font-style:italic>=></span> (<span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>style</span>.<span style=color:#FFFFFF>opacity</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>1</span>));\n}\n\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"onButtonClick\"</span>, <span style=color:#FFF066>\"Frank\"</span>) --<span style=color:#FFF066> Say Hello to Frank</span>\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"onButtonClick\"</span>, <span style=color:#FFF066>\"John\"</span>) --<span style=color:#FFF066> Say Hello to John</span>\n<span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"foo.jpg\"</span> <span style=color:#66D9EF;font-style:italic>once-load</span>(<span style=color:#FFFFFF>fadeIn</span>) <span style=color:#A6E22E>hidden</span>\n</pre>"
  }, out, _component, "168");

  out.w("<p>The following arguments are passed to the event handler when the event occurs:</p><ol><li><code>...args</code> - Any extra bound arguments are <em>prepended</em> to the arguments passed to the component\u2019s handler method. For example: <code>on-click(&#39;onButtonClick&#39;, arg1, arg2)</code> \u2192 <code>onButtonClick(arg1, arg2, event, el)</code></li><li> <code>event</code> - The native DOM event object.</li><li> <code>el</code> - The DOM element that the event listener was attached to.</li></ol><p>When using the <code>on-*</code> or <code>once-*</code> attributes to attach event listeners, Marko uses event delegation that is more efficient than direct attachment of <code>el.addEventListener()</code>. Please see <a href=/docs/why-is-marko-fast/#event-delegation>Why is Marko Fast? \xA7 Event delegation</a> for more details.</p><p><a id=declarative-custom-events></a></p><h3 id=attaching-custom-event-listeners><a name=attaching-custom-event-listeners class=anchor href=#attaching-custom-event-listeners><span class=header-link></span></a>Attaching custom event listeners</h3><p>The code below illustrates how to attach an event listener for a UI component\u2019s custom event:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCounterChange</span>(<span style=color:#FFAC4D;font-style:italic>newValue</span>, <span style=color:#FFAC4D;font-style:italic>el</span>) {\n    <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`New value: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>newValue</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n  }\n  <span style=color:#A6E22E>onCounterMax</span>(<span style=color:#FFAC4D;font-style:italic>max</span>) {\n    <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`It reached the max: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>max</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n  }\n}\n\n&lt;<span style=color:#FF4185>counter</span> <span style=color:#66D9EF;font-style:italic>on-change</span>(<span style=color:#FFF066>'onCounterChange'</span>) <span style=color:#66D9EF;font-style:italic>once-max</span>(<span style=color:#FFF066>'onCounterMax'</span>) />\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCounterChange</span>(<span style=color:#FFAC4D;font-style:italic>newValue</span>, <span style=color:#FFAC4D;font-style:italic>el</span>) {\n        <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`New value: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>newValue</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n    }\n    <span style=color:#A6E22E>onCounterMax</span>(<span style=color:#FFAC4D;font-style:italic>max</span>) {\n        <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>`It reached the max: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>max</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!`</span>);\n    }\n}\n\n<span style=color:#FF4185>counter</span> <span style=color:#66D9EF;font-style:italic>on-change</span>(<span style=color:#FFF066>\"onCounterChange\"</span>) <span style=color:#66D9EF;font-style:italic>once-max</span>(<span style=color:#FFF066>\"onCounterMax\"</span>)\n</pre>"
  }, out, _component, "191");

  out.w("<p>The following arguments are passed to the event handler when the event occurs:</p><ol><li> <code>...args</code> - Any extra bound arguments are <em>prepended</em> to the arguments passed to the component\u2019s handler method.</li><li> <code>...eventArgs</code> - The arguments passed to <code>this.emit()</code> by the target UI component.</li><li> <code>component</code> - The component instance that the event listener was attached to.</li></ol><p>The following code illustrates how the UI component for <code>&lt;counter&gt;</code> might emit its <code>change</code> event:</p><p><code>counter/index.marko</code></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCreate</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>max</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>50</span>;\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n  }\n  <span style=color:#A6E22E>increment</span>() {\n    <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>max</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'change'</span>, <span style=color:#FF4185>++</span><span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>);\n    }\n    <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>max</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'max'</span>, <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>);\n    }\n  }\n}\n\n\n&lt;<span style=color:#FF4185>button</span><span style=color:#A6E22E>.example-button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)>\n<span style=color:#FFF066>  Increment</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>max</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>50</span>;\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>max</span>) {\n            <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"change\"</span>, <span style=color:#FF4185>++</span><span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>);\n        }\n        <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>max</span>) {\n            <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"max\"</span>, <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>);\n        }\n    }\n}\n\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>.example-button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> Increment</span>\n</pre>"
  }, out, _component, "207");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> Unlike native DOM events, UI component custom events may be emitted with multiple arguments. For example:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"foo\"</span>, <span style=color:#FFF066>\"bar\"</span>, <span style=color:#FFF066>\"baz\"</span>);\n</pre></blockquote><h2 id=attributes><a name=attributes class=anchor href=#attributes><span class=header-link></span></a>Attributes</h2><h3 id=on-eventmethodnamefunction-args><a name=on-eventmethodnamefunction-args class=anchor href=#on-eventmethodnamefunction-args><span class=header-link></span></a><code>on-[event](methodName|function, ...args)</code></h3><p>The <code>on-*</code> attribute syntax attaches an event listener to either a native DOM event or a UI component event. The <code>on-*</code> attribute associates an event handler method with an event name. Please see the <a href=#event-handling>Event handling</a> section above for details.</p><h3 id=once-eventmethodnamefunction-args><a name=once-eventmethodnamefunction-args class=anchor href=#once-eventmethodnamefunction-args><span class=header-link></span></a><code>once-[event](methodName|function, ...args)</code></h3><p>The same as the <code>on-*</code> attribut,e except that its listener is only invoked for the first event, and then removed from memory. Please see the <a href=#event-handling>Event handling</a> section above for more details.</p><h3 id=key><a name=key class=anchor href=#key><span class=header-link></span></a><code>key</code></h3><p>The <code>key</code> property does 2 things in Marko:</p><ul><li>Obtains references to nested HTML elements and nested UI components.</li><li>Matches corresponding elements together when DOM diffing/patching after a rerender. When updating the DOM, keyed elements/components are matched up and reused rather than discarded and recreated.</li></ul><p>Internally, Marko assigns a unique key to all HTML elements and UI components in a <code>.marko</code> file, based on the order they appear in the file. If you have repeated elements or elements that move between locations in the DOM, then you likely want to assign a custom <code>key</code> by adding a <code>key</code> attribute. The <code>key</code> attribute can be applied to both HTML elements and custom tags.</p><h4 id=referencing-nested-html-elements-and-components><a name=referencing-nested-html-elements-and-components class=anchor href=#referencing-nested-html-elements-and-components><span class=header-link></span></a>Referencing nested HTML elements and components</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onMount</span>() {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>headerElement</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getEl</span>(<span style=color:#FFF066>'header'</span>);\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colorListItems</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getEls</span>(<span style=color:#FFF066>'colors'</span>);\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>myFancyButton</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getComponent</span>(<span style=color:#FFF066>'myFancyButton'</span>);\n  }\n}\n\n&lt;<span style=color:#FF4185>h1</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"header\"</span>><span style=color:#FFF066>Hello</span>&lt;/<span style=color:#FF4185>h1</span>>\n\n&lt;<span style=color:#FF4185>ul</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>'red'</span>, <span style=color:#FFF066>'green'</span>, <span style=color:#FFF066>'blue'</span>]>\n      &lt;<span style=color:#FF4185>li</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"colors[]\"</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n\n&lt;<span style=color:#FF4185>fancy-button</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"myFancyButton\"</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>headerElement</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getEl</span>(<span style=color:#FFF066>\"header\"</span>);\n        <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colorListItems</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getEls</span>(<span style=color:#FFF066>\"colors\"</span>);\n        <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>myFancyButton</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getComponent</span>(<span style=color:#FFF066>\"myFancyButton\"</span>);\n    }\n}\n\n<span style=color:#FF4185>h1</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"header\"</span> --<span style=color:#FFF066> Hello</span>\n<span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n        <span style=color:#FF4185>li</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"colors[]\"</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>fancy-button</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"myFancyButton\"</span>\n</pre>"
  }, out, _component, "246");

  out.w("<blockquote class=note><p><strong>Note:</strong> The <code>[]</code> suffix (e.g. <code>key=&quot;colors[]&quot;</code>) lets Marko know that the element will be repeated multiple times with the same key.</p></blockquote><h4 id=keyed-matching><a name=keyed-matching class=anchor href=#keyed-matching><span class=header-link></span></a>Keyed matching</h4><p>The <code>key</code> attribute can pair an HTML element or UI component that moves to a new location in the DOM. For example:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCreate</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n      swapped: <span style=color:#AE81FF>false</span>\n    }\n  }\n}\n\n&lt;<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>swapped</span>)>\n  &lt;<span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"b\"</span>><span style=color:#FFF066>B</span>&lt;/<span style=color:#FF4185>p</span>>\n  &lt;<span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"a\"</span>><span style=color:#FFF066>A</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#66D9EF>if</span>>\n&lt;<span style=color:#66D9EF>else</span>>\n  &lt;<span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"a\"</span>><span style=color:#FFF066>A</span>&lt;/<span style=color:#FF4185>p</span>>\n  &lt;<span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"b\"</span>><span style=color:#FFF066>B</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#66D9EF>else</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            swapped: <span style=color:#AE81FF>false</span>\n        };\n    }\n}\n\n<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>swapped</span>)\n    <span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"b\"</span> --<span style=color:#FFF066> B</span>\n    <span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"a\"</span> --<span style=color:#FFF066> A</span>\n<span style=color:#66D9EF>else</span>\n    <span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"a\"</span> --<span style=color:#FFF066> A</span>\n    <span style=color:#FF4185>p</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"b\"</span> --<span style=color:#FFF066> B</span>\n</pre>"
  }, out, _component, "257");

  out.w("<p>The <code>key</code> attribute can be used to pair HTML elements or UI components that are repeated:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ul</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>user</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>users</span>>\n      &lt;<span style=color:#FF4185>li</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>id</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>user</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>users</span>\n        <span style=color:#FF4185>li</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>id</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "260");

  out.w("<p>This way, if the order of <code>input.users</code> changes, the DOM will be rerendered more efficiently.</p><h4 id=scoped><a name=scoped class=anchor href=#scoped><span class=header-link></span></a><code>*:scoped</code></h4><p>The <code>:scoped</code> attribute modifier results in the attribute value getting prefixed with a unique ID associated with the current UI component. <code>:scoped</code> attribute modifiers can be used to assign a globally unique attribute value from a value that only needs to be unique to the current UI component.</p><p>Here\u2019s a use-case: certain HTML attributes reference the <code>id</code> of other elements on the page. For example, the <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label>HTML <code>&lt;label&gt;</code></a> <code>for</code> attribute takes an <code>id</code> as its value. Many <code>ARIA</code> attributes like <a href=https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute><code>aria-describedby</code></a> also take an <code>id</code> as their value.</p><p>The <code>:scoped</code> modifier on an attribute allows you to reference another element without fear of duplicate <code>id</code>s, as shown in the following examples:</p><p><strong><code>for:scoped</code></strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>label</span> <span style=color:#A6E22E>for</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"name\"</span>><span style=color:#FFF066>Name</span>&lt;/<span style=color:#FF4185>label</span>>\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>id</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"name\"</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Frank\"</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>label</span> <span style=color:#A6E22E>for</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"name\"</span> --<span style=color:#FFF066> Name</span>\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>id</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"name\"</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Frank\"</span>\n</pre>"
  }, out, _component, "286");

  out.w("<p>The above code will output HTML similar to the following:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>label</span> <span style=color:#A6E22E>for</span>=<span style=color:#FFF066>\"c0-name\"</span>>Name&lt;/<span style=color:#FF4185>label</span>> &lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"c0-name\"</span> <span style=color:#A6E22E>value</span>=<span style=color:#FFF066>\"Frank\"</span> />\n</pre><p><strong><code>aria-describedby:scoped</code></strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span>\n   <span style=color:#A6E22E>aria-describedby</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"closeDisclaimer\"</span>\n   <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'closeDialog'</span>)><span style=color:#FFF066>Close</span>&lt;/<span style=color:#FF4185>button</span>>\n\n&lt;<span style=color:#FF4185>p</span> <span style=color:#A6E22E>id</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"closeDisclaimer\"</span>>\n<span style=color:#FFF066>   Closing this window will discard any entered information and return you to the main page.</span>\n&lt;/<span style=color:#FF4185>p</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>button</span> <span style=color:#A6E22E>aria-describedby</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"closeDisclaimer\"</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"closeDialog\"</span>) --<span style=color:#FFF066> Close</span>\n<span style=color:#FF4185>p</span> <span style=color:#A6E22E>id</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"closeDisclaimer\"</span>\n    --<span style=color:#FFF066> Closing this window will discard any entered information and return you to the main page.</span>\n</pre>"
  }, out, _component, "291");

  out.w("<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span> <span style=color:#A6E22E>aria-describedby</span>=<span style=color:#FFF066>\"c0-closeDisclaimer\"</span>>Close&lt;/<span style=color:#FF4185>button</span>>\n\n&lt;<span style=color:#FF4185>p</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"c0-closeDisclaimer\"</span>>\n  Closing this window will discard any entered information and return you to the\n  main page.\n&lt;/<span style=color:#FF4185>p</span>>\n</pre><p><strong><code>href:scoped</code></strong></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"#anchor\"</span>><span style=color:#FFF066>Jump to section</span>&lt;/<span style=color:#FF4185>a</span>>\n&lt;<span style=color:#FF4185>section</span> <span style=color:#A6E22E>id</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"anchor\"</span>>&lt;/<span style=color:#FF4185>section</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"#anchor\"</span> --<span style=color:#FFF066> Jump to section</span>\n<span style=color:#FF4185>section</span> <span style=color:#A6E22E>id</span><span style=color:#66D9EF>:scoped</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"anchor\"</span>\n</pre>"
  }, out, _component, "295");

  out.w("<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span>=<span style=color:#FFF066>\"#c0-anchor\"</span>>Jump to section&lt;/<span style=color:#FF4185>a</span>>\n&lt;<span style=color:#FF4185>section</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"c0-anchor\"</span>>&lt;/<span style=color:#FF4185>section</span>>\n</pre><h3 id=no-update><a name=no-update class=anchor href=#no-update><span class=header-link></span></a><code>no-update</code></h3><p>Preserves the DOM subtree associated with the element or component, so it won\u2019t be modified when rerendering.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Never rerender this table --></span>\n&lt;<span style=color:#FF4185>table</span> <span style=color:#66D9EF;font-style:italic>no-update</span>>\n<span style=color:#FFF066>  \u2026</span>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Never rerender this table</span>\n<span style=color:#FF4185>table</span> <span style=color:#66D9EF;font-style:italic>no-update</span> --<span style=color:#FFF066> \u2026</span>\n</pre>"
  }, out, _component, "301");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- N ever rerender this UI component --></span>\n&lt;<span style=color:#FF4185>app-map</span> <span style=color:#66D9EF;font-style:italic>no-update</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// N ever rerender this UI component</span>\n<span style=color:#FF4185>app-map</span> <span style=color:#66D9EF;font-style:italic>no-update</span>\n</pre>"
  }, out, _component, "302");

  out.w("<p>This is most useful when other JavaScript modifies the DOM tree of an element, like for embeds.</p><h3 id=no-update-if><a name=no-update-if class=anchor href=#no-update-if><span class=header-link></span></a><code>no-update-if</code></h3><p>Similar to <a href=#no-update>no-update</a>, except that the DOM subtree is <em>conditionally</em> preserved:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Don\u2019t re-render this table without table data --></span>\n&lt;<span style=color:#FF4185>table</span> <span style=color:#66D9EF;font-style:italic>no-update-if</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>tableData</span> <span style=color:#FF4185>==</span> <span style=color:#AE81FF>null</span>)>\n<span style=color:#FFF066>  \u2026</span>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Don\u2019t re-render this table without table data</span>\n<span style=color:#FF4185>table</span> <span style=color:#66D9EF;font-style:italic>no-update-if</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>tableData</span> <span style=color:#FF4185>==</span> <span style=color:#AE81FF>null</span>) --<span style=color:#FFF066> \u2026</span>\n</pre>"
  }, out, _component, "311");

  out.w("<h3 id=no-update-body><a name=no-update-body class=anchor href=#no-update-body><span class=header-link></span></a><code>no-update-body</code></h3><p>Similar to <a href=#no-update>no-update</a>, except that only the descendant DOM nodes are preserved:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Never rerender any nested DOM elements --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#66D9EF;font-style:italic>no-update-body</span>>\n<span style=color:#FFF066>  \u2026</span>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Never rerender any nested DOM elements</span>\n<span style=color:#FF4185>div</span> <span style=color:#66D9EF;font-style:italic>no-update-body</span> --<span style=color:#FFF066> \u2026</span>\n</pre>"
  }, out, _component, "318");

  out.w("<h3 id=no-update-body-if><a name=no-update-body-if class=anchor href=#no-update-body-if><span class=header-link></span></a><code>no-update-body-if</code></h3><p>Similar to <a href=#no-update-body>no-update-body</a>, except that its descendant DOM nodes are <em>conditionally</em> preserved:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Never rerender any nested DOM elements without table data --></span>\n&lt;<span style=color:#FF4185>table</span> <span style=color:#66D9EF;font-style:italic>no-update-body-if</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>tableData</span> <span style=color:#FF4185>==</span> <span style=color:#AE81FF>null</span>)>\n<span style=color:#FFF066>  \u2026</span>\n&lt;/<span style=color:#FF4185>table</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Never rerender any nested DOM elements without table data</span>\n<span style=color:#FF4185>table</span> <span style=color:#66D9EF;font-style:italic>no-update-body-if</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>tableData</span> <span style=color:#FF4185>==</span> <span style=color:#AE81FF>null</span>) --<span style=color:#FFF066> \u2026</span>\n</pre>"
  }, out, _component, "326");

  out.w("<h3 id=no-update_1><a name=no-update_1 class=anchor href=#no-update_1><span class=header-link></span></a><code>:no-update</code></h3><p>Prevents certain attributes from being modified during a rerender. The attribute(s) that should not be modified should have a <code>:no-update</code> modifier:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Never modify the `class` attribute --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#66D9EF>:no-update</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>className</span>>\n<span style=color:#FFF066>  \u2026</span>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Never modify the `class` attribute</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#66D9EF>:no-update</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>className</span> --<span style=color:#FFF066> \u2026</span>\n</pre>"
  }, out, _component, "333");

  out.w("<h2 id=properties><a name=properties class=anchor href=#properties><span class=header-link></span></a>Properties</h2><h3 id=thisid><a name=thisid class=anchor href=#thisid><span class=header-link></span></a><code>this.id</code></h3><p>A string identifier for the root HTML element that the component is bound to. (Not the <code>id</code> attribute.)</p><h3 id=thisstate><a name=thisstate class=anchor href=#thisstate><span class=header-link></span></a><code>this.state</code></h3><p>The current state for the component. Changing <code>this.state</code> or its direct properties will cause the component to rerender.</p><p>Only properties that exist when <code>this.state</code> is first defined will be watched for changes. If you don\u2019t need a property initially, you can set its value to <code>null</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            data: <span style=color:#AE81FF>null</span>,\n            error: <span style=color:#AE81FF>null</span>\n        }\n    }\n    <span style=color:#A6E22E>getData</span>() {\n        <span style=color:#A6E22E>fetch</span>(<span style=color:#FFF066>'/endpoint'</span>)\n            .<span style=color:#A6E22E>then</span>(<span style=color:#FFAC4D;font-style:italic>data</span> <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>data</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>data</span>)\n            .<span style=color:#A6E22E>catch</span>(<span style=color:#FFAC4D;font-style:italic>error</span> <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>error</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>error</span>);\n    }\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            data: <span style=color:#AE81FF>null</span>,\n            error: <span style=color:#AE81FF>null</span>\n        };\n    }\n    <span style=color:#A6E22E>getData</span>() {\n        <span style=color:#A6E22E>fetch</span>(<span style=color:#FFF066>\"/endpoint\"</span>)\n            .<span style=color:#A6E22E>then</span>(<span style=color:#FFAC4D;font-style:italic>data</span> <span style=color:#66D9EF;font-style:italic>=></span> (<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>data</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>data</span>))\n            .<span style=color:#A6E22E>catch</span>(<span style=color:#FFAC4D;font-style:italic>error</span> <span style=color:#66D9EF;font-style:italic>=></span> (<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>error</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>error</span>));\n    }\n}\n</pre>"
  }, out, _component, "352");

  out.w("<p>Beware: setting a <code>state</code> property only <em>nominates</em> the component for a possible rerender, and properties are only watched one level deep. Thus, the component is only rerendered if at least one of the component state properties changed (<code>oldValue !== newValue</code>).</p><p>If none of the properties changed (because the new value is identical, or no difference is detected by a shallow comparison), the assignment is considered a no-operation (great for performance).</p><p>We recommend using <a href=https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/ >immutable data structures</a>, but if you want to mutate a state property (perhaps push a new item into an array), you can mark it as dirty with <code>setStateDirty</code>:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>numbers</span>.<span style=color:#A6E22E>push</span>(<span style=color:#FFFFFF>num</span>);\n\n<span style=color:#8F8F9E>// Mark numbers as dirty, because a `push`</span>\n<span style=color:#8F8F9E>// won\u2019t be automatically detected by Marko</span>\n<span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setStateDirty</span>(<span style=color:#FFF066>\"numbers\"</span>);\n</pre><h3 id=thisinput><a name=thisinput class=anchor href=#thisinput><span class=header-link></span></a><code>this.input</code></h3><p>The current input for the component. Setting <code>this.input</code> will rerender the component. If a <code>&#36;global</code> property is set, <code>out.global</code> will also be updated during the rerender, otherwise the existing <code>&#36;global</code> is used.</p><h2 id=variables><a name=variables class=anchor href=#variables><span class=header-link></span></a>Variables</h2><p>When a Marko component is compiled, some additional variables are available to the rendering function. These variables are described below.</p><h3 id=component><a name=component class=anchor href=#component><span class=header-link></span></a><code>component</code></h3><p>The <code>component</code> variable refers to the instance of the currently rendering UI component. This variable can be used to call methods on the UI component instance:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>getFullName</span>() {\n        <span style=color:#66D9EF;font-style:italic>const</span> { <span style=color:#FFFFFF>person</span> } <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>input</span>;\n        <span style=color:#FF4185>return</span> <span style=color:#FFF066>`</span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>firstName</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>lastName</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>component</span>.<span style=color:#A6E22E>getFullName</span>()<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>getFullName</span>() {\n        <span style=color:#66D9EF;font-style:italic>const</span> { <span style=color:#FFFFFF>person</span> } <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>input</span>;\n        <span style=color:#FF4185>return</span> <span style=color:#FFF066>`</span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>firstName</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>lastName</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>;\n    }\n}\n\n<span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>component</span>.<span style=color:#A6E22E>getFullName</span>()<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "380");

  out.w("<h3 id=input><a name=input class=anchor href=#input><span class=header-link></span></a><code>input</code></h3><p>The <code>input</code> variable refers to the <code>input</code> object, and is equivalent to <code>component.input</code>|<code>this.input</code>.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "390");

  out.w("<h3 id=state><a name=state class=anchor href=#state><span class=header-link></span></a><code>state</code></h3><p>The <code>state</code> variable refers to the UI component\u2019s <code>state</code> object, and is the <em>unwatched</em> equivalent of <code>component.state</code>|<code>this.state</code>.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "401");

  out.w("<h2 id=methods><a name=methods class=anchor href=#methods><span class=header-link></span></a>Methods</h2><h3 id=destroyoptions><a name=destroyoptions class=anchor href=#destroyoptions><span class=header-link></span></a><code>destroy([options])</code></h3><table class=markdown-table><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>removeNode</code></td><td><code>Boolean</code></td><td><code>true</code></td><td><code>false</code> will keep the component in the DOM while unsubscribing all events from it</td></tr><tr><td><code>recursive</code></td><td><code>Boolean</code></td><td><code>true</code></td><td><code>false</code> will prevent child components from being destroyed</td></tr></tbody></table><p>Destroys the component by unsubscribing from all listeners made using the <code>subscribeTo</code> method, and then detaching the component\u2019s root element from the DOM. All nested components (discovered by querying the DOM) are also destroyed.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>component</span>.<span style=color:#A6E22E>destroy</span>({\n  removeNode: <span style=color:#AE81FF>false</span>, <span style=color:#8F8F9E>// true by default</span>\n  recursive: <span style=color:#AE81FF>false</span> <span style=color:#8F8F9E>// true by default</span>\n});\n</pre><h3 id=forceupdate><a name=forceupdate class=anchor href=#forceupdate><span class=header-link></span></a><code>forceUpdate()</code></h3><p>Queue the component to re-render and skip all checks to see if it actually needs it.</p><blockquote class=null><p>When using <code>forceUpdate()</code> the updating of the DOM will be queued up. If you want to immediately update the DOM then call <code>this.update()</code> after calling <code>this.forceUpdate()</code>.</p></blockquote><h3 id=getelkey-index><a name=getelkey-index class=anchor href=#getelkey-index><span class=header-link></span></a><code>getEl([key, index])</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>String</code></td><td><em>optional</em> \u2014 the scoped identifier for the element</td></tr><tr><td><code>index</code></td><td><code>Number</code></td><td><em>optional</em> \u2014 the index of the component, if <code>key</code> references a repeated component</td></tr><tr><td>return value</td><td><code>HTMLElement</code></td><td>The element matching the key, or <code>this.el</code> if no key is provided</td></tr></tbody></table><p>Returns a nested DOM element by prefixing the provided <code>key</code> with the component\u2019s ID. For Marko, nested DOM elements should be assigned an ID with the <code>key</code> attribute.</p><h3 id=getelskey><a name=getelskey class=anchor href=#getelskey><span class=header-link></span></a><code>getEls(key)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>String</code></td><td>The scoped identifier for the element</td></tr><tr><td>return value</td><td><code>Array&lt;HTMLElement&gt;</code></td><td>An array of <em>repeated</em> DOM elements for the given key</td></tr></tbody></table><p>Repeated DOM elements must have a value for the <code>key</code> attribute that ends with <code>[]</code>. For example, <code>key=&quot;items[]&quot;</code>.</p><h3 id=getelidkey-index><a name=getelidkey-index class=anchor href=#getelidkey-index><span class=header-link></span></a><code>getElId([key, index])</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>String</code></td><td><em>optional</em> \u2014 The scoped identifier for the element</td></tr><tr><td><code>index</code></td><td><code>Number</code></td><td><em>optional</em> \u2014 The index of the component, if <code>key</code> references a repeated component</td></tr><tr><td>return value</td><td><code>String</code></td><td>The element ID matching the key, or <code>this.el.id</code> if <code>key</code> is undefined</td></tr></tbody></table><p>Similar to <code>getEl</code>, but only returns the String ID of the nested DOM element instead of the actual DOM element.</p><h3 id=getcomponentkey-index><a name=getcomponentkey-index class=anchor href=#getcomponentkey-index><span class=header-link></span></a><code>getComponent(key[, index])</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>String</code></td><td>The scoped identifier for the element</td></tr><tr><td><code>index</code></td><td><code>Number</code></td><td><em>optional</em> \u2014 The index of the component, if <code>key</code> references a repeated component</td></tr><tr><td>return value</td><td><code>Component</code></td><td>A reference to a nested <code>Component</code> for the given key. If an <code>index</code> is provided and the target component is a repeated component (i.e. <code>key=&quot;items[]&quot;</code>), then the component at the given index will be returned.</td></tr></tbody></table><p>For example, given the following component,</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>app-main</span>>\n  &lt;<span style=color:#FF4185>app-child</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"child\"</span>/>\n&lt;/<span style=color:#FF4185>app-main</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>app-main</span>\n    <span style=color:#FF4185>app-child</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"child\"</span>\n</pre>"
  }, out, _component, "578");

  out.w("<p>The following code can be used to get the <code>&lt;app-child/&gt;</code> component:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>childComponent</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>getComponent</span>(<span style=color:#FFF066>\"child\"</span>);\n</pre><h3 id=getcomponentskey-index><a name=getcomponentskey-index class=anchor href=#getcomponentskey-index><span class=header-link></span></a><code>getComponents(key, [, index])</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>key</code></td><td><code>String</code></td><td>The scoped identifier for the element</td></tr><tr><td><code>index</code></td><td><code>Number</code></td><td><em>optional</em> \u2014 The index of the component, if <code>key</code> references a repeated component</td></tr><tr><td>return value</td><td><code>Array&lt;Component&gt;</code></td><td>An array of <em>repeated</em> <code>Component</code> instances for the given key</td></tr></tbody></table><p>Repeated components must have a value for the <code>key</code> attribute that ends with <code>[]</code>, like <code>key=&quot;items[]&quot;</code>.</p><h3 id=isdestroyed><a name=isdestroyed class=anchor href=#isdestroyed><span class=header-link></span></a><code>isDestroyed()</code></h3><p>Returns <code>true</code> if a component has been destroyed using <a href=#ondestroy><code>component.destroy()</code></a>, otherwise <code>false</code>.</p><h3 id=isdirty><a name=isdirty class=anchor href=#isdirty><span class=header-link></span></a><code>isDirty()</code></h3><p>Returns <code>true</code> if the component needs a bath.</p><h3 id=replacestatenewstate><a name=replacestatenewstate class=anchor href=#replacestatenewstate><span class=header-link></span></a><code>replaceState(newState)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>newState</code></td><td><code>Object</code></td><td>A new state object to replace the previous state</td></tr></tbody></table><p>Replaces the state with an entirely new state. Equivalent to <code>this.state = newState</code>.</p><blockquote class=note><p><strong>Note:</strong> While <code>setState()</code> is additive and will not remove properties that are in the old state but not in the new state, <code>replaceState()</code> <em>will</em> add the new state and remove the old state properties that are not found in the new state. Thus, if <code>replaceState()</code> is used, consider possible side effects if the new state contains less or other properties than the replaced state.</p></blockquote><h3 id=rerenderinput><a name=rerenderinput class=anchor href=#rerenderinput><span class=header-link></span></a><code>rerender([input])</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td><em>optional</em> \u2014 New input data to use when rerendering</td></tr></tbody></table><p>Rerenders the component using its <code>renderer</code>, and either supplied <code>input</code> or internal <code>input</code> and <code>state</code>.</p><h3 id=setstatename-value><a name=setstatename-value class=anchor href=#setstatename-value><span class=header-link></span></a><code>setState(name, value)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>String</code></td><td>The name of the <code>state</code> property to update</td></tr><tr><td><code>value</code></td><td><code>Any</code></td><td>The new value for the <code>state</code> property</td></tr></tbody></table><p>Changes the value of a single <code>state</code> property. Equivalent to <code>this.state[name] = value</code>, except it will also work for adding new properties to the component state.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setState</span>(<span style=color:#FFF066>\"disabled\"</span>, <span style=color:#AE81FF>true</span>);\n</pre><h3 id=setstatenewstate><a name=setstatenewstate class=anchor href=#setstatenewstate><span class=header-link></span></a><code>setState(newState)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>newState</code></td><td><code>Object</code></td><td>A new state object to merge into the previous state</td></tr></tbody></table><p>Changes the value of multiple state properties:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setState</span>({\n  disabled: <span style=color:#AE81FF>true</span>,\n  size: <span style=color:#FFF066>\"large\"</span>\n});\n</pre><h3 id=setstatedirtyname-value><a name=setstatedirtyname-value class=anchor href=#setstatedirtyname-value><span class=header-link></span></a><code>setStateDirty(name[, value])</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>name</code></td><td><code>String</code></td><td>The name of the <code>state</code> property to mark as dirty</td></tr><tr><td><code>value</code></td><td><code>Any</code></td><td><em>optional</em> \u2014 A new value for the <code>state</code> property</td></tr></tbody></table><p>Forces a state property change, even if the value is equal to the old value. This is helpful in cases where a change occurs to a complex object that would not be detected by a shallow compare. Invoking this function completely circumvents all property equality checks (shallow compares) and always rerenders the component.</p><h4 id=more-details><a name=more-details class=anchor href=#more-details><span class=header-link></span></a>More details</h4><p>The first parameter, <code>name</code>, is used to allow update handlers (e.g. <code>update_foo(newValue)</code>) to handle the state transition for the specific state property that was marked dirty.</p><p>The second parameter, <code>value</code>, is used as the new value that is given to update handlers. Because <code>setStateDirty()</code> always bypasses all property equality checks, this parameter is optional. If not given or equal to the old value, the old value will be used for the update handler.</p><p>Important: the given parameters do not affect how or if <code>setStateDirty()</code> rerenders a component; they are only considered as additional information to update handlers.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Because this does not create a new array, the change</span>\n<span style=color:#8F8F9E>// would not be detected by a shallow property comparison</span>\n<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>colors</span>.<span style=color:#A6E22E>push</span>(<span style=color:#FFF066>\"red\"</span>);\n\n<span style=color:#8F8F9E>// Force that particular state property to be considered dirty so</span>\n<span style=color:#8F8F9E>// that it will trigger the component's view to be updated</span>\n<span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setStateDirty</span>(<span style=color:#FFF066>\"colors\"</span>);\n</pre><h3 id=subscribetoemitter><a name=subscribetoemitter class=anchor href=#subscribetoemitter><span class=header-link></span></a><code>subscribeTo(emitter)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code>emitter</code></td><td>A <a href=https://nodejs.org/api/events.html#events_class_eventemitter>Node.js <code>EventEmitter</code></a> or DOM object that emits events (<code>window</code>, <code>document</code>, etc.)</td></tr><tr><td>return value</td><td>A tracked subscription</td></tr></tbody></table><p>When a component is destroyed, it is necessary to remove any listeners that were attached by the component to prevent memory leaks. By using <code>subscribeTo</code>, Marko will automatically track and remove any listeners you attach when the component is destroyed.</p><p>Marko uses <a href=https://github.com/patrick-steele-idem/listener-tracker><code>listener-tracker</code></a> to provide this feature.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>subscribeTo</span>(<span style=color:#FFFFFF>window</span>).<span style=color:#A6E22E>on</span>(<span style=color:#FFF066>\"scroll\"</span>, () <span style=color:#66D9EF;font-style:italic>=></span>\n  <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"The user scrolled the window!\"</span>)\n);\n</pre><h3 id=update><a name=update class=anchor href=#update><span class=header-link></span></a><code>update()</code></h3><p>Immediately executes any pending updates to the DOM, rather than following the normal queued update mechanism for rendering.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setState</span>(<span style=color:#FFF066>\"foo\"</span>, <span style=color:#FFF066>\"bar\"</span>);\n<span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>update</span>(); <span style=color:#8F8F9E>// Force the DOM to update</span>\n<span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setState</span>(<span style=color:#FFF066>\"hello\"</span>, <span style=color:#FFF066>\"world\"</span>);\n<span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>update</span>(); <span style=color:#8F8F9E>// Force the DOM to update</span>\n</pre><h2 id=event-methods><a name=event-methods class=anchor href=#event-methods><span class=header-link></span></a>Event methods</h2><p>Marko components inherit from <a href=https://nodejs.org/api/events.html#events_class_eventemitter><code>EventEmitter</code></a>. Below are a few commonly used methods \u2014 view the Node.js docs for the full list.</p><h3 id=emiteventname-args><a name=emiteventname-args class=anchor href=#emiteventname-args><span class=header-link></span></a><code>emit(eventName, ...args)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>eventName</code></td><td><code>String</code></td><td>Name of the event</td></tr><tr><td><code>...args</code></td><td><code>Any</code></td><td>All subsequent parameters are passed to the listeners</td></tr></tbody></table><p>Emits a UI component custom event. If a UI component attached a listener with the matching <code>eventName</code>, then the corresponding event listener method will be invoked. Event listeners can be attached using either the <a href=#declarative-custom-events><code>on-[event](methodName|function, ...args)</code></a> attribute syntax, or <code>targetComponent.on()</code>.</p><h3 id=oneventname-handler><a name=oneventname-handler class=anchor href=#oneventname-handler><span class=header-link></span></a><code>on(eventName, handler)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>eventName</code></td><td><code>String</code></td><td>Name of the event to listen for</td></tr><tr><td><code>handler</code></td><td><code>Function</code></td><td>The function to call when the event fires</td></tr></tbody></table><p>Adds the listener function to the end of the listeners array for the <code>eventName</code> event. Does not check to see if the listener has already been added. Multiple calls passing the same combination of <code>eventName</code> and <code>handler</code> will result in the listener being added and called multiple times.</p><h3 id=onceeventname-handler><a name=onceeventname-handler class=anchor href=#onceeventname-handler><span class=header-link></span></a><code>once(eventName, handler)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>eventName</code></td><td><code>String</code></td><td>Name of the event to listen for</td></tr><tr><td><code>handler</code></td><td><code>Function</code></td><td>Tthe function to call when the event fires</td></tr></tbody></table><p>Adds a one-time listener function for the <code>eventName</code> event. The next time <code>eventName</code> triggers, this listener is removed and then invoked.</p><h2 id=lifecycle-events><a name=lifecycle-events class=anchor href=#lifecycle-events><span class=header-link></span></a>Lifecycle events</h2><p>Marko defines six lifecycle events:</p><ul><li><code>create</code></li><li><code>input</code></li><li><code>render</code></li><li><code>mount</code></li><li><code>update</code></li><li><code>destroy</code></li></ul><p>These events are emitted at specific points over the lifecycle of a component, as shown below:</p><p><strong>First render</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'create'</span>)\xA0\u2192\xA0<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'input'</span>)\xA0\u2192\xA0<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'render'</span>)\xA0\u2192\xA0<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'mount'</span>)\n</pre><p><strong>New input</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'input'</span>)\xA0\u2192\xA0<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'render'</span>)\xA0\u2192\xA0<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'update'</span>)\n</pre><p><strong>Internal state change</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'render'</span>)\xA0\u2192\xA0<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>'update'</span>)\n</pre><p><strong>Destroy</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"destroy\"</span>);\n</pre><h3 id=lifecycle-event-methods><a name=lifecycle-event-methods class=anchor href=#lifecycle-event-methods><span class=header-link></span></a>Lifecycle event methods</h3><p>Each lifecycle event has a corresponding component lifecycle method that can listen for the event:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCreate</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) { }\n  <span style=color:#A6E22E>onInput</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) { }\n  <span style=color:#A6E22E>onRender</span>(<span style=color:#FFAC4D;font-style:italic>out</span>) { }\n  <span style=color:#A6E22E>onMount</span>() { }\n  <span style=color:#A6E22E>onUpdate</span>() { }\n  <span style=color:#A6E22E>onDestroy</span>() { }\n}\n</pre><blockquote class=protip><p><strong>ProTip:</strong> When a lifecycle event occurs in the browser, the corresponding event is emitted on the component instance. A parent component, or other code that has access to the component instance, can listen for these events. For example:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>component</span>.<span style=color:#A6E22E>on</span>(<span style=color:#FFF066>\"input\"</span>, <span style=color:#66D9EF;font-style:italic>function</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#8F8F9E>// The component received an input</span>\n});\n</pre></blockquote><h3 id=oncreateinput-out><a name=oncreateinput-out class=anchor href=#oncreateinput-out><span class=header-link></span></a><code>onCreate(input, out)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code>input</code></td><td>The input data used to render the component for the first time</td></tr><tr><td><code>out</code></td><td>The async <code>out</code> used to render the component for the first time</td></tr></tbody></table><p>The <code>create</code> event is emitted (and <code>onCreate</code> is called) when the component is first created.</p><p><code>onCreate</code> is typically used to set the initial state for stateful components:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>initialCount</span> };\n    }\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>(<span style=color:#FFAC4D;font-style:italic>input</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>initialCount</span> };\n    }\n}\n</pre>"
  }, out, _component, "940");

  out.w("<h3 id=oninputinput-out><a name=oninputinput-out class=anchor href=#oninputinput-out><span class=header-link></span></a><code>onInput(input, out)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code>input</code></td><td>The new input data</td></tr></tbody></table><p>The <code>input</code> event is emitted (and <code>onInput</code> is called) when the component receives input: both the initial input, and for any subsequent updates to its input.</p><h3 id=onrenderout><a name=onrenderout class=anchor href=#onrenderout><span class=header-link></span></a><code>onRender(out)</code></h3><table class=markdown-table><thead><tr><th>Signature</th><th>Description</th></tr></thead><tbody><tr><td><code>out</code></td><td>The async <code>out</code> for the current render</td></tr></tbody></table><p>The <code>render</code> event is emitted (and <code>onRender</code> is called) when the component is about to render or rerender.</p><h3 id=onmount><a name=onmount class=anchor href=#onmount><span class=header-link></span></a><code>onMount()</code></h3><p>The <code>mount</code> event is emitted (and <code>onMount</code> is called) when the component is first mounted to the DOM. For server-rendered components, this is the first event that is emitted only in the browser.</p><p>This is the first point at which <code>this.el</code> and <code>this.els</code> are defined. <code>onMount</code> is commonly used to attach third-party JavaScript to the newly-mounted DOM.</p><p>For example, attaching a library that monitors if the component is in the viewport:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>scrollmonitor</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'scrollmonitor'</span>;\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>scrollmonitor</span>.<span style=color:#A6E22E>create</span>(<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>el</span>);\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>enterViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>'I have entered the viewport'</span>));\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>exitViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>'I have left the viewport'</span>));\n    }\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>scrollmonitor</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'scrollmonitor'</span>\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>scrollmonitor</span>.<span style=color:#A6E22E>create</span>(<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>el</span>);\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>enterViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span>\n            <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"I have entered the viewport\"</span>)\n        );\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>exitViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span>\n            <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"I have left the viewport\"</span>)\n        );\n    }\n}\n</pre>"
  }, out, _component, "988");

  out.w("<h3 id=onupdate><a name=onupdate class=anchor href=#onupdate><span class=header-link></span></a><code>onUpdate()</code></h3><p>The <code>update</code> event is emitted (and <code>onUpdate</code> is called) when the component is called after a component rerenders and the DOM has been updated. If a rerender does not update the DOM (nothing changed), this event will not fire.</p><h3 id=ondestroy><a name=ondestroy class=anchor href=#ondestroy><span class=header-link></span></a><code>onDestroy()</code></h3><p>The <code>destroy</code> event is emitted (and <code>onDestroy</code> is called) when the component is about to unmount from the DOM and cleaned up. <code>onDestroy</code> should be used to do any additional cleanup beyond what Marko handles itself.</p><p>For example, cleaning up from our <code>scrollmonitor</code> example in <a href=#onmount><code>onMount</code></a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>scrollmonitor</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'scrollmonitor'</span>;\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>scrollmonitor</span>.<span style=color:#A6E22E>create</span>(<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>el</span>);\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>enterViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>'Entered the viewport'</span>));\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>exitViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>'Left the viewport'</span>));\n    }\n    <span style=color:#A6E22E>onDestroy</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>destroy</span>();\n    }\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>scrollmonitor</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'scrollmonitor'</span>\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>scrollmonitor</span>.<span style=color:#A6E22E>create</span>(<span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>el</span>);\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>enterViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"Entered the viewport\"</span>));\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>exitViewport</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"Left the viewport\"</span>));\n    }\n    <span style=color:#A6E22E>onDestroy</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>watcher</span>.<span style=color:#A6E22E>destroy</span>();\n    }\n}\n</pre>"
  }, out, _component, "1008");

  out.w("<h2 id=dom-manipulation-methods><a name=dom-manipulation-methods class=anchor href=#dom-manipulation-methods><span class=header-link></span></a>DOM manipulation methods</h2><p>The following methods move the component\u2019s root DOM node(s) from the current parent element to a new parent element (or out of the DOM in the case of <code>detach</code>).</p><h3 id=appendtotargetel><a name=appendtotargetel class=anchor href=#appendtotargetel><span class=header-link></span></a><code>appendTo(targetEl)</code></h3><p>Moves the UI component\u2019s DOM elements into the position after the target element\u2019s last child.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n</pre><h3 id=insertaftertargetel><a name=insertaftertargetel class=anchor href=#insertaftertargetel><span class=header-link></span></a><code>insertAfter(targetEl)</code></h3><p>Moves the UI component\u2019s DOM elements into the position after the target DOM element.</p><h3 id=insertbeforetargetel><a name=insertbeforetargetel class=anchor href=#insertbeforetargetel><span class=header-link></span></a><code>insertBefore(targetEl)</code></h3><p>Moves the UI component\u2019s DOM elements into the position before the target DOM element.</p><h3 id=prependtotargetel><a name=prependtotargetel class=anchor href=#prependtotargetel><span class=header-link></span></a><code>prependTo(targetEl)</code></h3><p>Moves the UI component\u2019s DOM elements into the position before the target element\u2019s first child.</p><h3 id=replacetargetel><a name=replacetargetel class=anchor href=#replacetargetel><span class=header-link></span></a><code>replace(targetEl)</code></h3><p>Replaces the target element with the UI component\u2019s DOM elements.</p><h3 id=replacechildrenoftargetel><a name=replacechildrenoftargetel class=anchor href=#replacechildrenoftargetel><span class=header-link></span></a><code>replaceChildrenOf(targetEl)</code></h3><p>Replaces the target element\u2019s children with the UI component\u2019s DOM elements.</p>");
}, {
  t: class_components_marko_componentType,
  i: true
}, class_components_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/compiler-hooks.png
/* harmony default export */ const compiler_hooks = ("/assets/e6d9b930.png");
;// CONCATENATED MODULE: ../../node_modules/marko/docs/compiler.md
const compiler_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const compiler = (compiler_marko_template);

toc_registry.set("../../node_modules/marko/docs/compiler.md", "<ul class=\"toc toc-level1\"><li><a href=\"#compile-api\">Compile API</a><ul class=\"toc toc-level2\"><li><a href=\"#compilerconfigureoptions-compileoptions\">compiler.configure()</a></li><li><a href=\"#compilercompilesrc-string-filename-string-options-compileoptions-promisecompileresult\">compiler.compile(): Promise&lt;CompileResult&gt;</a></li><li><a href=\"#compilercompilesyncsrc-string-filename-string-options-compileoptions-compileresult\">compiler.compileSync(): CompileResult</a></li><li><a href=\"#compilercompilefilefilename-string-options-compileoptions-promisecompileresult\">compiler.compileFile(): Promise&lt;CompileResult&gt;</a></li><li><a href=\"#compilercompilefilesyncfilename-string-options-compileoptions-compileresult\">compiler.compileFileSync(): CompileResult</a></li></ul></li><li><a href=\"#hooks\">Hooks</a><ul class=\"toc toc-level2\"><li><a href=\"#parse\">Parse</a></li><li><a href=\"#migrate\">Migrate</a></li><li><a href=\"#transform\">Transform</a></li><li><a href=\"#translate\">Translate</a></li></ul></li><li><a href=\"#utilities\">Utilities</a></li><li><a href=\"#marko-ast\">Marko AST</a></li></ul>");






const compiler_marko_componentType = "VyISE2bz",
      compiler_marko_component = {};
compiler_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<h1 id=compiler><a name=compiler class=anchor href=#compiler><span class=header-link></span></a>Compiler</h1><p>The Marko compiler tries its best to get out of your way and for the most part you will only see references to it in the various Marko ecosystem plugins for tools like webpack, Rollup, and others.</p><p>The compiler also provides a series of hooks you can tap into to bend the Marko language to your will.</p><blockquote class=note><p><strong>Note:</strong> It is best to use existing official plugins, and the standard tag library when possible.</p></blockquote><h2 id=compile-api><a name=compile-api class=anchor href=#compile-api><span class=header-link></span></a>Compile API</h2><p>The compile API is relatively straightforward and always you to take any Marko file and turn it into executable JavaScript.</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>import * as compiler from "@marko/compiler";\n\ntype CompileOptions = typeof import("@marko/compiler/src/config.js");\n\ntype CompileResult = {\n  meta: Record&lt;string, unknown>; // Meta data gathered while compiling.\n  map?: SourceMap; // A sourcemap.\n  code: string; // The translated code.\n};\n</pre><h3 id=compilerconfigureoptions-compileoptions><a name=compilerconfigureoptions-compileoptions class=anchor href=#compilerconfigureoptions-compileoptions><span class=header-link></span></a><code>compiler.configure(options: CompileOptions)</code></h3><p>The <code>configure</code> API will override the default compiler options. For the list of options (applicable to all <code>compile*</code> functions) <a href=https://github.com/marko-js/marko/tree/master/packages/compiler/src/config.js>see the source code</a>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>compiler</span>.<span style=color:#A6E22E>configure</span>({ output: <span style=color:#FFF066>"dom"</span> });\n</pre><h3 id=compilercompilesrc-string-filename-string-options-compileoptions-promisecompileresult><a name=compilercompilesrc-string-filename-string-options-compileoptions-promisecompileresult class=anchor href=#compilercompilesrc-string-filename-string-options-compileoptions-promisecompileresult><span class=header-link></span></a><code>compiler.compile(src: string, filename: string, options?: CompileOptions): Promise&lt;CompileResult&gt;</code></h3><h3 id=compilercompilesyncsrc-string-filename-string-options-compileoptions-compileresult><a name=compilercompilesyncsrc-string-filename-string-options-compileoptions-compileresult class=anchor href=#compilercompilesyncsrc-string-filename-string-options-compileoptions-compileresult><span class=header-link></span></a><code>compiler.compileSync(src: string, filename: string, options?: CompileOptions): CompileResult</code></h3><p>Both the <code>compile</code> and <code>compileSync</code> APIs will translate the provided Marko source code into JavaScript. The only difference between the two (as the names likely suggest) is that <code>compile</code> will use async APIs under the hood while <code>compileSync</code> will use sync APIs.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>asyncResult</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>await</span> <span style=color:#FFFFFF>compiler</span>.<span style=color:#A6E22E>compile</span>(\n  <span style=color:#FFF066>"&lt;h1>Hello!&lt;/>"</span>,\n  <span style=color:#FFF066>"./src/index.marko"</span>,\n  { modules: <span style=color:#FFF066>"cjs"</span> }\n);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>syncResult</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>compiler</span>.<span style=color:#A6E22E>compileSync</span>(<span style=color:#FFF066>"&lt;h1>Hello!&lt;/>"</span>, <span style=color:#FFF066>"./src/index.marko"</span>, {\n  modules: <span style=color:#FFF066>"cjs"</span>\n});\n</pre><h3 id=compilercompilefilefilename-string-options-compileoptions-promisecompileresult><a name=compilercompilefilefilename-string-options-compileoptions-promisecompileresult class=anchor href=#compilercompilefilefilename-string-options-compileoptions-promisecompileresult><span class=header-link></span></a><code>compiler.compileFile(filename: string, options?: CompileOptions): Promise&lt;CompileResult&gt;</code></h3><h3 id=compilercompilefilesyncfilename-string-options-compileoptions-compileresult><a name=compilercompilefilesyncfilename-string-options-compileoptions-compileresult class=anchor href=#compilercompilefilesyncfilename-string-options-compileoptions-compileresult><span class=header-link></span></a><code>compiler.compileFileSync(filename: string, options?: CompileOptions): CompileResult</code></h3><p><code>compileFile</code> and <code>compileFileSync</code> act the same as their counterparts <code>compile</code> and <code>compileSync</code> with the exception being that you do not need to pass in the source content. Instead, these APIs will load the file from disk for you automatically.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>asyncResult</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>await</span> <span style=color:#FFFFFF>compiler</span>.<span style=color:#A6E22E>compileFile</span>(<span style=color:#FFF066>"./src/index.marko"</span>, {\n  modules: <span style=color:#FFF066>"cjs"</span>\n});\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>syncResult</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>compiler</span>.<span style=color:#A6E22E>compileFileSync</span>(<span style=color:#FFF066>"./src/index.marko"</span>, {\n  modules: <span style=color:#FFF066>"cjs"</span>\n});\n</pre><h2 id=hooks><a name=hooks class=anchor href=#hooks><span class=header-link></span></a>Hooks</h2><p><img${attr_default()("src", compiler_hooks)} alt="Marko compiler hooks" style=max-width:100%></p><p>The Marko compiler runs through a series of stages to produce the final JavaScript output. These stages are intended for different aspects of processing the template and can be hooked into using <a href=/docs/marko-json/ ><code>marko.json</code></a> configuration.</p><p>All compiler hooks must export a visitor which will receive a <a href=https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#paths>babel NodePath</a> with a <code>MarkoTag</code> node.</p><p>The hook will also receive a <code>types</code> object that matches the <a href=https://babeljs.io/docs/en/babel-types>@babel/types</a> API extended with the <a href=#marko-ast>Marko AST types</a>. You can also get a reference to this by importing the <code>@marko/babel-types</code> module.</p><p>Here is an example hook:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> (<span style=color:#FFAC4D;font-style:italic>tag</span>, <span style=color:#FFAC4D;font-style:italic>t</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>t</span>.<span style=color:#A6E22E>isStringLiteral</span>(<span style=color:#FFFFFF>tag</span>.<span style=color:#FFFFFF>node</span>.<span style=color:#FFFFFF>name</span>)) {\n    <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\`Found a tag called </span><span style=color:#66D9EF>\${</span><span style=color:#FFFFFF>tag</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>node</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>name</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>value</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>\`</span>);\n    <span style=color:#FFFFFF>tag</span>.<span style=color:#A6E22E>remove</span>();\n  }\n};\n</pre><p>Hooks can also export an <code>enter</code> (alias of <code>default</code>) and an <code>exit</code> function. These map to <a href=https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#babel-traverse>@babel/traverse&#39;s</a> <code>enter</code> and <code>exit</code> methods.</p><h3 id=parse><a name=parse class=anchor href=#parse><span class=header-link></span></a>Parse</h3><p>The first step to Marko&#39;s compilation is to take the raw text of your Marko template and convert it into an &quot;Abstract Syntax Tree&quot;. If you&#39;ve not heard the term before, put simply it is just an object representation of your code.</p>`);

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello!</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello!</span>\n</pre>"
  }, out, _component, "75");

  out.w("<p>Will roughly become</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"MarkoTag\"</span>,\n  <span style=color:#FFF066>\"name\"</span>: {\n    <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"StringLiteral\"</span>,\n    <span style=color:#FFF066>\"value\"</span>: <span style=color:#FFF066>\"h1\"</span>\n  },\n  <span style=color:#FFF066>\"body\"</span>: {\n    <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"MarkoTagBody\"</span>,\n    <span style=color:#FFF066>\"body\"</span>: [\n      {\n        <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"MarkoText\"</span>,\n        <span style=color:#FFF066>\"value\"</span>: <span style=color:#FFF066>\"Hello!\"</span>\n      }\n    ]\n  }\n}\n</pre><p>This might look a bit verbose, but we are aiming for completeness, not terseness in this output.</p><p>Marko takes a two-step parsing approach to remain flexible with the ever-changing syntax of JavaScript. The first pass of parsing happens in our very own <a href=https://github.com/marko-js/htmljs-parser>htmljs-parser</a>, which understands the HTML parts of your template.</p><p>For JavaScript expressions, Marko defers to <a href=https://babeljs.io/docs/en/babel-parser>@babel/parser</a>. The <a href=#marko-ast>Marko AST</a> above is a superset of what would be returned from <code>@babel/parser</code>.</p><p>To hook into the <code>parse</code> stage you can use the <code>parse</code> option in the <code>marko.json</code> file. The <code>parse</code> hook deviates from the rest of the compiler hooks in that it does not support the <code>enter</code> &amp; <code>exit</code> API and you <em>must return</em> a replacement AST node.</p><h3 id=migrate><a name=migrate class=anchor href=#migrate><span class=header-link></span></a>Migrate</h3><p>That&#39;s right, Marko has _ first-class_ support for migrations. This compiler hook allows for translating outdated APIs into their modern counterparts, leaving the rest of the compilation non the wiser. These migrations run automatically in the background and can be written to disk when users are ready by running the <a href=https://github.com/marko-js/cli/blob/master/packages/migrate/README.md><code>@marko/migrate</code> CLI command</a>.</p><p>To hook into the <code>migrate</code> stage you can use the <code>migrate</code> option in the <code>marko.json</code> file.</p><h3 id=transform><a name=transform class=anchor href=#transform><span class=header-link></span></a>Transform</h3><p>The transform stage of the compiler is meant for userland transformations of Marko code, into other Marko code. Think of it like <a href=https://babeljs.io/docs/en/babel-core#transform>babel.transform</a> for Marko templates. At this stage, you are given a fully parsed and migrated AST to do what you will with.</p><p>To hook into the <code>transform</code> stage you can use the <code>transform</code> option in the <code>marko.json</code> file.</p><h3 id=translate><a name=translate class=anchor href=#translate><span class=header-link></span></a>Translate</h3><p>Finally, we have the translation stage. This stage is Marko&#39;s &quot;Rosetta Stone&quot; and is responsible for turning your beautiful Marko code into the optimized JavaScript you&#39;d rather avoid writing.</p><p>To hook into the <code>translate</code> stage you can use the <code>translate</code> option in the <code>marko.json</code> file.</p><h2 id=utilities><a name=utilities class=anchor href=#utilities><span class=header-link></span></a>Utilities</h2><p>The <a href=https://github.com/marko-js/marko/tree/master/packages/babel-types/index.d.ts><code>@marko/babel-utils</code></a> package exposes a handful of utilities for performing various tasks on the <a href=#marko-ast>Marko AST</a>.</p><h2 id=marko-ast><a name=marko-ast class=anchor href=#marko-ast><span class=header-link></span></a>Marko AST</h2><p>You can check out the AST extensions that Marko makes <a href=https://github.com/marko-js/marko/tree/master/packages/babel-types/src/types/definitions.js>in the source code</a>. For AST creation and assertion utilities you can also import Marko&#39;s superset of <code>@babel/types</code> through the <code>@marko/babel-types module</code>.</p>");
}, {
  t: compiler_marko_componentType,
  i: true
}, compiler_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/concise.md
const concise_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const concise = (concise_marko_template);

toc_registry.set("../../node_modules/marko/docs/concise.md", "<ul class=\"toc toc-level1\"><li><a href=\"#shorthand-attributes\">Shorthand attributes</a></li><li><a href=\"#text\">Text</a><ul class=\"toc toc-level2\"><li><a href=\"#root-level-text\">Root level text</a></li></ul></li></ul>");




const concise_marko_componentType = "xuCUt7Rv",
      concise_marko_component = {};
concise_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=concise-syntax><a name=concise-syntax class=anchor href=#concise-syntax><span class=header-link></span></a>Concise syntax</h1><p>Marko&#39;s concise syntax is very similar to the HTML syntax, except it&#39;s more... concise. Essentially, you take an HTML tag, remove the angle brackets (<code>&lt;&gt;</code>) and use indentation rather than a closing tag:</p><div class=code-block-filename>input.marko</div><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"thumbnail\"</span>\n    <span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"https://example.com/thumb.png\"</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"thumbnail\"</span>\n    <span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"https://example.com/thumb.png\"</span>\n</pre>"
  }, out, _component, "7");

  out.w("<div class=code-block-filename>output.html</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"thumbnail\"</span>>&lt;<span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span>=<span style=color:#FFF066>\"https://example.com/thumb.png\"</span> />&lt;/<span style=color:#FF4185>div</span>>\n</pre><h2 id=shorthand-attributes><a name=shorthand-attributes class=anchor href=#shorthand-attributes><span class=header-link></span></a>Shorthand attributes</h2><p>Marko provides a shorthand for declaring classes and ids on an element:</p><div class=code-block-filename>input.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span><span style=color:#A6E22E>.my-class</span>\n<span style=color:#FF4185>span</span><span style=color:#A6E22E>#my-id</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>#submit.primary.large</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span><span style=color:#A6E22E>.my-class</span>\n<span style=color:#FF4185>span</span><span style=color:#A6E22E>#my-id</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>#submit.primary.large</span>\n</pre>"
  }, out, _component, "14");

  out.w("<p>Yields this HTML:</p><div class=code-block-filename>output.html</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"my-class\"</span>>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>span</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"my-id\"</span>>&lt;/<span style=color:#FF4185>span</span>> &lt;<span style=color:#FF4185>button</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"submit\"</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"primary large\"</span>>&lt;/<span style=color:#FF4185>button</span>>\n</pre><blockquote class=protip><p><strong>ProTip:</strong> These shorthand attributes are available within the HTML syntax as well</p></blockquote><h2 id=text><a name=text class=anchor href=#text><span class=header-link></span></a>Text</h2><p>Text in concise mode is denoted by two or more dashes (<code>--</code>).</p><p>If there is text on the same line following <code>--</code>, it is single-line text:</p><div class=code-block-filename>single-line-text.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>--<span style=color:#FFF066> Hello world</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>--<span style=color:#FFF066> Hello world</span>\n</pre>"
  }, out, _component, "28");

  out.w("<p>The dashes can also follow an element to give it a single text node as a child</p><div class=code-block-filename>single-line-text.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello world</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello world</span>\n</pre>"
  }, out, _component, "31");

  out.w("<p>If there is a line break immediately following <code>--</code>, everything following the <code>--</code> at the current indentation is parsed as multi-line line text.</p><div class=code-block-filename>multi-line-text.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    --\n<span style=color:#FFF066>    Hello world</span>\n<span style=color:#FFF066>    this text</span>\n<span style=color:#FFF066>    is multi-line</span>\n\n<span style=color:#FF4185>div</span>\n    --\n<span style=color:#FFF066>    this is more</span>\n<span style=color:#FFF066>    text</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    ---\n<span style=color:#FFF066>    Hello world</span>\n<span style=color:#FFF066>    this text</span>\n<span style=color:#FFF066>    is multi-line</span>\n<span style=color:#FFF066>    </span>---\n<span style=color:#FF4185>div</span>\n    ---\n<span style=color:#FFF066>    this is more</span>\n<span style=color:#FFF066>    text</span>\n<span style=color:#FFF066>    </span>---\n</pre>"
  }, out, _component, "36");

  out.w("<p>A multi-line text block can be ended by the same number of dashes that opened it. This allows it to have siblings:</p><div class=code-block-filename>multi-line-text.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"https://example.com/photo.png\"</span>\n    --\n<span style=color:#FFF066>    Hello world</span>\n<span style=color:#FFF066>    this text</span>\n<span style=color:#FFF066>    is multi-line</span>\n<span style=color:#FFF066>    </span>--\n    <span style=color:#FF4185>span</span> --<span style=color:#FFF066> text after</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    ---\n    &lt;<span style=color:#FF4185>img</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"https://example.com/photo.png\"</span>/><span style=color:#FFF066>Hello world</span>\n<span style=color:#FFF066>    this text</span>\n<span style=color:#FFF066>    is multi-line</span>&lt;<span style=color:#FF4185>span</span>><span style=color:#FFF066>text after</span>&lt;/<span style=color:#FF4185>span</span>>\n<span style=color:#FFF066>    </span>---\n</pre>"
  }, out, _component, "39");

  out.w("<h3 id=root-level-text><a name=root-level-text class=anchor href=#root-level-text><span class=header-link></span></a>Root level text</h3><p>There is one &quot;gotcha&quot; that you need to be aware of. The Marko parser starts out in the concise mode. Therefore, given the following template:</p><div class=code-block-filename>input.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>Hello</span> <span style=color:#A6E22E>World</span>\n<span style=color:#FF4185>Welcome</span> <span style=color:#A6E22E>to</span> <span style=color:#A6E22E>Marko</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>Hello</span> <span style=color:#A6E22E>World</span>\n<span style=color:#FF4185>Welcome</span> <span style=color:#A6E22E>to</span> <span style=color:#A6E22E>Marko</span>\n</pre>"
  }, out, _component, "45");

  out.w("<p>The output would be the following:</p><div class=code-block-filename>output.html</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#F8F8F0;background-color:#FF4185>Hello</span> <span style=color:#A6E22E>World</span>>&lt;/<span style=color:#F8F8F0;background-color:#FF4185>Hello</span>> &lt;<span style=color:#F8F8F0;background-color:#FF4185>Welcome</span> <span style=color:#A6E22E>to</span> <span style=color:#A6E22E>Marko</span>>&lt;/<span style=color:#F8F8F0;background-color:#FF4185>Welcome</span>>\n</pre><p>Instead, prefix the lines with <code>--</code> so they are parsed as text:</p><div class=code-block-filename>input.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>--<span style=color:#FFF066> Hello World</span>\n--<span style=color:#FFF066> Welcome to Marko</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>--<span style=color:#FFF066> Hello WorldWelcome to Marko</span>\n</pre>"
  }, out, _component, "51");
}, {
  t: concise_marko_componentType,
  i: true
}, concise_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/conditionals-and-lists.md
const conditionals_and_lists_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const conditionals_and_lists = (conditionals_and_lists_marko_template);

toc_registry.set("../../node_modules/marko/docs/conditionals-and-lists.md", "<ul class=\"toc toc-level1\"><li><a href=\"#conditionals\">Conditionals</a></li><li><a href=\"#lists\">Lists</a><ul class=\"toc toc-level2\"><li><a href=\"#always-set-a-key\">Always set a key</a></li></ul></li></ul>");




const conditionals_and_lists_marko_componentType = "NOuOFSJa",
      conditionals_and_lists_marko_component = {};
conditionals_and_lists_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=conditionals-and-lists><a name=conditionals-and-lists class=anchor href=#conditionals-and-lists><span class=header-link></span></a>Conditionals and Lists</h1><p>While HTML itself does not support conditionally displaying elements or repeating elements, it is a critical part of building any web application. In Marko, this functionality is provided by the <code>&lt;if&gt;</code> and <code>&lt;for&gt;</code> tags.</p><h2 id=conditionals><a name=conditionals class=anchor href=#conditionals><span class=header-link></span></a>Conditionals</h2><p>The <code>&lt;if&gt;</code> tag recieves an <a href=/docs/syntax/#arguments>argument</a> which is used to determine if its body content should be present.</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>loggedOut</span>)>\n    &lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"/login\"</span>><span style=color:#FFF066>Log in</span>&lt;/<span style=color:#FF4185>a</span>>\n&lt;/<span style=color:#66D9EF>if</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>loggedOut</span>)\n    <span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"/login\"</span> --<span style=color:#FFF066> Log in</span>\n</pre>"
  }, out, _component, "13");

  out.w("<p>As you might expect, there are also <code>&lt;else&gt;</code> and <code>&lt;else-if&gt;</code> tags as well:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>loggedOut</span>)>\n    &lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"/login\"</span>><span style=color:#FFF066>Log in</span>&lt;/<span style=color:#FF4185>a</span>>\n&lt;/<span style=color:#66D9EF>if</span>>\n&lt;<span style=color:#66D9EF>else-if</span>(<span style=color:#FF4185>!</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>trappedForever</span>)>\n    &lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"/logout\"</span>><span style=color:#FFF066>Log out</span>&lt;/<span style=color:#FF4185>a</span>>\n&lt;/<span style=color:#66D9EF>else-if</span>>\n&lt;<span style=color:#66D9EF>else</span>>\n<span style=color:#FFF066>    Hey </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n&lt;/<span style=color:#66D9EF>else</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>loggedOut</span>)\n    <span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"/login\"</span> --<span style=color:#FFF066> Log in</span>\n<span style=color:#66D9EF>else-if</span>(<span style=color:#FF4185>!</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>trappedForever</span>)\n    <span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"/logout\"</span> --<span style=color:#FFF066> Log out</span>\n<span style=color:#66D9EF>else</span> --<span style=color:#FFF066> Hey </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "17");

  out.w("<h2 id=lists><a name=lists class=anchor href=#lists><span class=header-link></span></a>Lists</h2><p>If you have a list of data and need to represent it in the UI, the <code>&lt;for&gt;</code> tag is probably what you&#39;re looking for. The <code>&lt;for&gt;</code> tag passes each item and its index to its body as <a href=/docs/syntax/#parameters>parameters</a>.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ul</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>, <span style=color:#FFAC4D;font-style:italic>index</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>>\n        &lt;<span style=color:#FF4185>li</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>index</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>, <span style=color:#FFAC4D;font-style:italic>index</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>index</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "25");

  out.w("<p>The <code>&lt;for&gt;</code> tag actually support 3 different flavors:</p><ul><li><a href=/docs/core-tags/#iterating-over-a-list><code>&lt;for|item, index, array| of=array&gt;</code></a> renders its body for each item of an array. It&#39;s similar to the JavaScript <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of><code>for...of</code></a> loop.</li><li><a href=/docs/core-tags/#iterating-over-an-objects-properties><code>&lt;for|key, value| in=object&gt;</code></a> renders its body for each property in an object. It&#39;s similar to the JavaScript <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in><code>for...in</code></a> loop.</li><li><a href=/docs/core-tags/#iterating-between-a-range-of-numbers><code>&lt;for|value| from=first to=last step=increment&gt;</code></a> renders its body for each value in between and including <code>from</code> and <code>to</code>.</li></ul><h3 id=always-set-a-key><a name=always-set-a-key class=anchor href=#always-set-a-key><span class=header-link></span></a>Always set a <code>key</code></h3><p>Marko automatically keeps your UI in sync with the state behind it, but one place where it needs a little extra help is repeated content. Specifying keys gives Marko a way to identify items in a list and keep track of which items have been changed, added, or removed.</p><p>A key should be a string or number that uniquely identifies an item in the list and differentiates it from its siblings. The same key value should never be used twice! Often, you will use something like an <code>id</code> property.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>user</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>users</span>>\n    &lt;<span style=color:#FF4185>user-card</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>id</span> <span style=color:#A6E22E>data</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>/>\n&lt;/<span style=color:#66D9EF>for</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>user</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>users</span>\n    <span style=color:#FF4185>user-card</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>id</span> <span style=color:#A6E22E>data</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>\n</pre>"
  }, out, _component, "51");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> If you have multiple tags underneath <code>&lt;for&gt;</code>, you can key only the first tag and that is enough to properly identify its siblings as well</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>dl</span>>\n    &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>entry</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>entries</span>>\n<span style=color:#8F8F9E>        &lt;!-- only the first tag needs a key --></span>\n        &lt;<span style=color:#FF4185>dt</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>entry</span>.<span style=color:#FFFFFF>id</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>entry</span>.<span style=color:#FFFFFF>word</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>dt</span>>\n<span style=color:#8F8F9E>        &lt;!-- This key can be omitted --></span>\n        &lt;<span style=color:#FF4185>dd</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>entry</span>.<span style=color:#FFFFFF>definition</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>dd</span>>\n    &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>dl</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>dl</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>entry</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>entries</span>\n        <span style=color:#8F8F9E>// only the first tag needs a key</span>\n        <span style=color:#FF4185>dt</span> <span style=color:#66D9EF;font-style:italic>key</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>entry</span>.<span style=color:#FFFFFF>id</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>entry</span>.<span style=color:#FFFFFF>word</span><span style=color:#66D9EF>}</span>\n        <span style=color:#8F8F9E>// This key can be omitted</span>\n        <span style=color:#FF4185>dd</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>entry</span>.<span style=color:#FFFFFF>definition</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "56");

  out.w("</blockquote><blockquote class=note><p><strong>Note:</strong> If a key is not set, Marko will use the index of an item as its key. However this only works perfectly if items are only ever added or removed at the end of a list. Here&#39;s an example where things break down: if we have a list of <code>[&quot;A&quot;, &quot;B&quot;, &quot;C&quot;]</code> and reverse the order, index keys would cause &quot;A&quot; to be transformed into &quot;C&quot; (and &quot;C&quot; into &quot;A&quot;), rather than just swapping them. Additionally if these components contained state, the new &quot;C&quot; would contain the state from the old &quot;A&quot; (and vice-versa). Be aware, stateful components include tags like the native <code>&lt;input&gt;</code> element. For this reason <strong>it is always recommended to set a <code>key</code> on tags in a <code>&lt;for&gt;</code>.</strong></p></blockquote>");
}, {
  t: conditionals_and_lists_marko_componentType,
  i: true
}, conditionals_and_lists_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/core-tags.md
const core_tags_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const core_tags = (core_tags_marko_template);

toc_registry.set("../../node_modules/marko/docs/core-tags.md", "<ul class=\"toc toc-level1\"><li><a href=\"#if-else-if-else\">&lt;if&gt;, &lt;else-if&gt;, &lt;else&gt;</a></li><li><a href=\"#for\">&lt;for&gt;</a><ul class=\"toc toc-level2\"><li><a href=\"#iterating-over-a-list\">Iterating over a list</a></li><li><a href=\"#iterating-over-an-objects-properties\">Iterating over an object’s properties</a></li><li><a href=\"#iterating-between-a-range-of-numbers\">Iterating between a range of numbers</a></li></ul></li><li><a href=\"#while\">&lt;while&gt;</a></li><li><a href=\"#macro\">&lt;macro&gt;</a></li><li><a href=\"#await\">&lt;await&gt;</a></li><li><a href=\"#include-text\">&lt;include-text&gt;</a></li><li><a href=\"#include-html\">&lt;include-html&gt;</a></li><li><a href=\"#html-comment\">&lt;html-comment&gt;</a></li></ul>");




const core_tags_marko_componentType = "EcgozHmc",
      core_tags_marko_component = {};
core_tags_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=core-tags-and-attributes><a name=core-tags-and-attributes class=anchor href=#core-tags-and-attributes><span class=header-link></span></a>Core tags and attributes</h1><p>Much like <a href=https://developer.mozilla.org/en-US/docs/Web/HTML/Element>HTML has its own native tags</a>, Marko includes <strong>core tags</strong> and <strong>global attributes</strong> for declaratively building modern applications.</p><h2 id=if-else-if-else><a name=if-else-if-else class=anchor href=#if-else-if-else><span class=header-link></span></a><code>&lt;if&gt;</code>, <code>&lt;else-if&gt;</code>, <code>&lt;else&gt;</code></h2><p>Like the <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else>equivalent JavaScript statements</a>, these tags render <a href=/docs/conditionals-and-lists/#conditionals>conditional content</a>:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>arriving</span>)>\n<span style=color:#FFF066>  Hey there</span>\n&lt;/<span style=color:#66D9EF>if</span>>\n&lt;<span style=color:#66D9EF>else-if</span>(<span style=color:#FFFFFF>leaving</span>)>\n<span style=color:#FFF066>  Bye now</span>\n&lt;/<span style=color:#66D9EF>else-if</span>>\n&lt;<span style=color:#66D9EF>else</span>>\n<span style=color:#FFF066>  What\u2019s up?</span>\n&lt;/<span style=color:#66D9EF>else</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>arriving</span>) --<span style=color:#FFF066> Hey there</span>\n<span style=color:#66D9EF>else-if</span>(<span style=color:#FFFFFF>leaving</span>) --<span style=color:#FFF066> Bye now</span>\n<span style=color:#66D9EF>else</span> --<span style=color:#FFF066> What\u2019s up?</span>\n</pre>"
  }, out, _component, "17");

  out.w("<p>They support any JavaScript expression in their <a href=/docs/syntax/#arguments>tag arguments</a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>if</span>(<span style=color:#66D9EF>Math</span>.<span style=color:#66D9EF>random</span>() <span style=color:#FF4185>></span> <span style=color:#AE81FF>0.5</span>)>\n  &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>50% chance to see this</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#66D9EF>if</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>if</span>(<span style=color:#66D9EF>Math</span>.<span style=color:#66D9EF>random</span>() <span style=color:#FF4185>></span> <span style=color:#AE81FF>0.5</span>)\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> 50% chance to see this</span>\n</pre>"
  }, out, _component, "20");

  out.w("<h2 id=for><a name=for class=anchor href=#for><span class=header-link></span></a><code>&lt;for&gt;</code></h2><p>The <code>&lt;for&gt;</code> tag iterates over <a href=#iterating-over-a-list>arrays/array-likes</a>, <a href=#iterating-over-an-objects-properties>object properties</a>, and <a href=#iterating-between-a-range-of-numbers>ranges of numbers</a>.</p><h3 id=iterating-over-a-list><a name=iterating-over-a-list class=anchor href=#iterating-over-a-list><span class=header-link></span></a>Iterating over a list</h3><p>Like the <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of>JavaScript <code>for...of</code> loop statement</a>, giving <code>&lt;for&gt;</code>\u2019s <code>of</code> attribute a value will loop over that value as an array or iterable.</p><p>The current <strong>item</strong>, <strong>index</strong>, and the <strong>iterating list</strong> are provided as <a href=/docs/syntax/#parameters>tag parameters</a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>];\n&lt;<span style=color:#FF4185>ol</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>, <span style=color:#FFAC4D;font-style:italic>index</span>, <span style=color:#FFAC4D;font-style:italic>colorList</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>>\n    &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>index</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ol</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>colors</span> <span style=color:#FFFFFF>=</span> [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>];\n<span style=color:#FF4185>ol</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>, <span style=color:#FFAC4D;font-style:italic>index</span>, <span style=color:#FFAC4D;font-style:italic>colorList</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>index</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "43");

  out.w("<p>The output HTML would be:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ol</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span>=<span style=color:#FFF066>\"0\"</span>>red&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span>=<span style=color:#FFF066>\"1\"</span>>green&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span>=<span style=color:#FFF066>\"2\"</span>>blue&lt;/<span style=color:#FF4185>li</span>>\n&lt;/<span style=color:#FF4185>ol</span>>\n</pre><blockquote class=null><p><strong>Pro Tip</strong>: <code>&lt;for&gt;</code>\u2019s <code>of</code> attribute can loop over any iterable, just like JavaScript\u2019s <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of><code>for...of</code></a>. This includes strings, <code>NodeList</code>s, <code>Set</code>s\u2026 any object with zero-indexed numeric properties and a <code>.length</code>, basically.</p></blockquote><h3 id=iterating-over-an-objects-properties><a name=iterating-over-an-objects-properties class=anchor href=#iterating-over-an-objects-properties><span class=header-link></span></a>Iterating over an object\u2019s properties</h3><p>Like <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in>JavaScript\u2019s <code>for...in</code> loop statement</a>, giving <code>&lt;for&gt;</code> an object as its <code>in</code> attribute will loop over that object\u2019s properties.</p><p>The current <strong>property name</strong> and <strong>property value</strong> are provided as <a href=/docs/syntax/#parameters>tag parameters</a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>settings</span> <span style=color:#FFFFFF>=</span> {\n  <span style=color:#FFF066>\"Dark Mode\"</span>: <span style=color:#AE81FF>false</span>,\n  <span style=color:#FFF066>\"Fullscreen\"</span>: <span style=color:#AE81FF>true</span>\n};\n\n&lt;<span style=color:#FF4185>dl</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>name</span>, <span style=color:#FFAC4D;font-style:italic>enabled</span>| <span style=color:#A6E22E>in</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>settings</span>>\n    &lt;<span style=color:#FF4185>dt</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>:</span>&lt;/<span style=color:#FF4185>dt</span>>\n    &lt;<span style=color:#FF4185>dd</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>enabled</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"on\"</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"off\"</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>dd</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>dl</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>settings</span> <span style=color:#FFFFFF>=</span> {\n    <span style=color:#FFF066>\"Dark Mode\"</span>: <span style=color:#AE81FF>false</span>,\n    Fullscreen: <span style=color:#AE81FF>true</span>\n};\n<span style=color:#FF4185>dl</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>name</span>, <span style=color:#FFAC4D;font-style:italic>enabled</span>| <span style=color:#A6E22E>in</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>settings</span>\n        <span style=color:#FF4185>dt</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>:</span>\n        <span style=color:#FF4185>dd</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>enabled</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"on\"</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"off\"</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "67");

  out.w("<p>The output HTML would be:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>dl</span>>\n  &lt;<span style=color:#FF4185>dt</span>>Dark Mode:&lt;/<span style=color:#FF4185>dt</span>>\n  &lt;<span style=color:#FF4185>dd</span>>off&lt;/<span style=color:#FF4185>dd</span>>\n  &lt;<span style=color:#FF4185>dt</span>>Fullscreen:&lt;/<span style=color:#FF4185>dt</span>>\n  &lt;<span style=color:#FF4185>dd</span>>on&lt;/<span style=color:#FF4185>dd</span>>\n&lt;/<span style=color:#FF4185>dl</span>>\n</pre><h3 id=iterating-between-a-range-of-numbers><a name=iterating-between-a-range-of-numbers class=anchor href=#iterating-between-a-range-of-numbers><span class=header-link></span></a>Iterating between a range of numbers</h3><p>The final <code>&lt;for&gt;</code> variant loops between two numbers, by providing <code>from</code> and <code>to</code> attributes. The current number in the range will be provided as a <a href=/docs/syntax/#parameters>tag parameter</a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ol</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"I\"</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>i</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>0</span> <span style=color:#A6E22E>to</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>10</span>>\n    &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>i</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>i</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ol</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ol</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"I\"</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>i</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>0</span> <span style=color:#A6E22E>to</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>10</span>\n        <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>i</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>i</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "77");

  out.w("<p>You can also pass an optional <code>step</code> attribute, which defaults to 1 otherwise. <code>step</code> lets you increment by a specific amount:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ol</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"I\"</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>i</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>0</span> <span style=color:#A6E22E>to</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>10</span> <span style=color:#A6E22E>step</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>2</span>>\n    &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>i</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>i</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ol</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ol</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"I\"</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>i</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>0</span> <span style=color:#A6E22E>to</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>10</span> <span style=color:#A6E22E>step</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>2</span>\n        <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>i</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>i</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "81");

  out.w("<p>\u2026becomes:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ol</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"I\"</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"0\"</span>><span style=color:#FFF066>0</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"2\"</span>><span style=color:#FFF066>2</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"4\"</span>><span style=color:#FFF066>4</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"6\"</span>><span style=color:#FFF066>6</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"8\"</span>><span style=color:#FFF066>8</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;<span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"10\"</span>><span style=color:#FFF066>10</span>&lt;/<span style=color:#FF4185>li</span>>\n&lt;/<span style=color:#FF4185>ol</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ol</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"I\"</span>\n    <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"0\"</span> --<span style=color:#FFF066> 0</span>\n    <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"2\"</span> --<span style=color:#FFF066> 2</span>\n    <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"4\"</span> --<span style=color:#FFF066> 4</span>\n    <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"6\"</span> --<span style=color:#FFF066> 6</span>\n    <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"8\"</span> --<span style=color:#FFF066> 8</span>\n    <span style=color:#FF4185>li</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"10\"</span> --<span style=color:#FFF066> 10</span>\n</pre>"
  }, out, _component, "83");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> This syntax is for generating numbers from nothing. Don\u2019t use it to iterate over an object, like so:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- Inefficient code, do not copy --></span>\n&lt;<span style=color:#FF4185>ul</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>i</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>0</span> <span style=color:#A6E22E>to</span><span style=color:#FFFFFF>=</span>(<span style=color:#FFFFFF>myArray</span>.length <span style=color:#FF4185>-</span> <span style=color:#AE81FF>1</span>)>\n    &lt;<span style=color:#FF4185>li</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>myArray</span>[<span style=color:#FFFFFF>i</span>]<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Inefficient code, do not copy</span>\n<span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>i</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>0</span> <span style=color:#A6E22E>to</span><span style=color:#FFFFFF>=</span>(<span style=color:#FFFFFF>myArray</span>.length <span style=color:#FF4185>-</span> <span style=color:#AE81FF>1</span>)\n        <span style=color:#FF4185>li</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>myArray</span>[<span style=color:#FFFFFF>i</span>]<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "87");

  out.w("<p>Use <a href=#iterating-over-a-list><code>&lt;for of&gt;</code></a> instead.</p></blockquote><h2 id=while><a name=while class=anchor href=#while><span class=header-link></span></a><code>&lt;while&gt;</code></h2><blockquote class=warning><p><strong>Warning:</strong> Using <code>&lt;while&gt;</code> is not recommended. Instead, replicate it with <a href=#iterating-over-a-list>an iterable and <code>&lt;for&gt;</code></a>.</p><p>In the future, Marko may restrict value mutation during rendering, for runtime optimizations.</p></blockquote><p>You can repeat a chunk of markup <em>until a condition is met</em> with the <code>while</code> tag:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>let</span> <span style=color:#FFFFFF>n</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n\n&lt;<span style=color:#66D9EF>while</span>(<span style=color:#FFFFFF>n</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>4</span>)>\n  &lt;<span style=color:#FF4185>p</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>n</span><span style=color:#FF4185>++</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#66D9EF>while</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>let</span> <span style=color:#FFFFFF>n</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n<span style=color:#66D9EF>while</span>(<span style=color:#FFFFFF>n</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>4</span>)\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>n</span><span style=color:#FF4185>++</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "105");

  out.w("<p>\u2026becomes:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>p</span>>0&lt;/<span style=color:#FF4185>p</span>>\n&lt;<span style=color:#FF4185>p</span>>1&lt;/<span style=color:#FF4185>p</span>>\n&lt;<span style=color:#FF4185>p</span>>2&lt;/<span style=color:#FF4185>p</span>>\n&lt;<span style=color:#FF4185>p</span>>3&lt;/<span style=color:#FF4185>p</span>>\n</pre><h2 id=macro><a name=macro class=anchor href=#macro><span class=header-link></span></a><code>&lt;macro&gt;</code></h2><p>Macros create reusable markup fragments for later use in the same template they were defined in.</p><p>The <code>&lt;macro&gt;</code> tag defines a macro as a tag via the <code>name</code> attribute. For example, the following macro is registered as the <code>&lt;greeting&gt;</code> tag:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>macro</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"greeting\"</span>>\n  &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>Welcome!</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#66D9EF>macro</span>>\n\n&lt;<span style=color:#FF4185>greeting</span>/>\n&lt;<span style=color:#FF4185>greeting</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>macro</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"greeting\"</span>\n    <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Welcome!</span>\n<span style=color:#FF4185>greeting</span>\n<span style=color:#FF4185>greeting</span>\n</pre>"
  }, out, _component, "116");

  out.w("<p>\u2026the output HTML would be:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>p</span>>Welcome!&lt;/<span style=color:#FF4185>p</span>>\n&lt;<span style=color:#FF4185>p</span>>Welcome!&lt;/<span style=color:#FF4185>p</span>>\n</pre><p>Macros become more useful with <a href=/docs/syntax/#parameters>tag parameters</a>, allowing complex templates. In this next example, <code>&lt;greeting&gt;</code> can now receive <code>firstName</code> and <code>count</code> parameters from its parent:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>macro</span>|{ <span style=color:#FFAC4D;font-style:italic>firstName</span>, <span style=color:#FFAC4D;font-style:italic>count</span> }| <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"greeting\"</span>>\n  &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>firstName</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n    &lt;<span style=color:#FF4185>output</span>><span style=color:#FFF066>You have </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> new messages.</span>&lt;/<span style=color:#FF4185>output</span>>\n  &lt;/<span style=color:#FF4185>p</span>>\n&lt;/<span style=color:#66D9EF>macro</span>>\n\n&lt;<span style=color:#FF4185>greeting</span> <span style=color:#A6E22E>firstName</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Frank\"</span> <span style=color:#A6E22E>count</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>20</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>macro</span>|{ <span style=color:#FFAC4D;font-style:italic>firstName</span>, <span style=color:#FFAC4D;font-style:italic>count</span> }| <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"greeting\"</span>\n    <span style=color:#FF4185>p</span>\n        ---\n<span style=color:#FFF066>        Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>firstName</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n        &lt;<span style=color:#FF4185>output</span>><span style=color:#FFF066>You have </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> new messages.</span>&lt;/<span style=color:#FF4185>output</span>>\n<span style=color:#FFF066>        </span>---\n<span style=color:#FF4185>greeting</span> <span style=color:#A6E22E>firstName</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Frank\"</span> <span style=color:#A6E22E>count</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>20</span>\n</pre>"
  }, out, _component, "123");

  out.w("<p>\u2026the output HTML would be:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>p</span>>\n  Hello Frank!\n  &lt;<span style=color:#FF4185>output</span>>You have 20 new messages.&lt;/<span style=color:#FF4185>output</span>>\n&lt;/<span style=color:#FF4185>p</span>>\n</pre><p>Macros receive input like components do, including <a href=/docs/body-content/ >a <code>renderBody</code> for provided body content</a>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>macro</span>|{ <span style=color:#FFAC4D;font-style:italic>renderBody</span> }| <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"special-heading\"</span>>\n  &lt;<span style=color:#FF4185>h1</span>>\n    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/><span style=color:#FFF066>!</span>\n  &lt;/<span style=color:#FF4185>h1</span>>\n&lt;/<span style=color:#66D9EF>macro</span>>\n\n&lt;<span style=color:#FF4185>special-heading</span>>\n<span style=color:#FFF066>  Hello</span>\n&lt;/<span style=color:#FF4185>special-heading</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>macro</span>|{ <span style=color:#FFAC4D;font-style:italic>renderBody</span> }| <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"special-heading\"</span>\n    <span style=color:#FF4185>h1</span>\n        -- &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/><span style=color:#FFF066>!</span>\n<span style=color:#FF4185>special-heading</span> --<span style=color:#FFF066> Hello</span>\n</pre>"
  }, out, _component, "128");

  out.w("<p>\u2026the output HTML would be:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>>Hello!&lt;/<span style=color:#FF4185>h1</span>>\n</pre><blockquote class=protip><p><strong>ProTip:</strong> You can use a macro inside itself for recursive layouts, like displaying directory contents.</p></blockquote><h2 id=await><a name=await class=anchor href=#await><span class=header-link></span></a><code>&lt;await&gt;</code></h2><p>The <code>&lt;await&gt;</code> tag <strong>renders markup asynchronously using a <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise>Promise</a></strong>.</p><ul><li>Its <code>&lt;@then&gt;</code> <a href=/docs/syntax/#attribute-tag>attribute tag</a> displays when the Promise <em>resolves</em>, optionally receiving the resolved value as a <a href=/docs/syntax/#parameters>tag parameter</a>.</li><li>Its <code>&lt;@catch&gt;</code> attribute tag displays when the Promise <em>rejects</em>, optionally receiving the rejected value as a tag parameter.</li><li>Its optional <code>&lt;@placeholder&gt;</code> attribute tag displays while the Promise is pending.</li></ul>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>personPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>new</span> Promise((<span style=color:#FFAC4D;font-style:italic>resolve</span>, <span style=color:#FFAC4D;font-style:italic>reject</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#66D9EF>setTimeout</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#A6E22E>resolve</span>({ name: <span style=color:#FFF066>'Frank'</span> }), <span style=color:#AE81FF>1000</span>);\n});\n\n&lt;<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>personPromise</span>) <span style=color:#A6E22E>client-reorder</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>>\n  &lt;<span style=color:#A6E22E>@placeholder</span>>\n<span style=color:#8F8F9E>    &lt;!-- Displays while promise is pending --></span>\n    &lt;<span style=color:#FF4185>label</span>><span style=color:#FFF066>Loading\u2026</span>\n      &lt;<span style=color:#FF4185>progress</span>>&lt;/<span style=color:#FF4185>progress</span>>\n    &lt;/<span style=color:#FF4185>label</span>>\n  &lt;/<span style=color:#A6E22E>@placeholder</span>>\n\n  &lt;<span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|>\n<span style=color:#8F8F9E>    &lt;!-- Displays if promise resolves --></span>\n    &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>&lt;/<span style=color:#FF4185>p</span>>\n  &lt;/<span style=color:#A6E22E>@then</span>>\n\n  &lt;<span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>err</span>|>\n<span style=color:#8F8F9E>    &lt;!-- Displays if promise rejects --></span>\n<span style=color:#FFF066>    </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> error: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span>\n  &lt;/<span style=color:#A6E22E>@catch</span>>\n&lt;/<span style=color:#66D9EF>await</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>personPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>new</span> Promise((<span style=color:#FFAC4D;font-style:italic>resolve</span>, <span style=color:#FFAC4D;font-style:italic>reject</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n    <span style=color:#66D9EF>setTimeout</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#A6E22E>resolve</span>({ name: <span style=color:#FFF066>\"Frank\"</span> }), <span style=color:#AE81FF>1000</span>);\n});\n<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>personPromise</span>) <span style=color:#A6E22E>client-reorder</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n    <span style=color:#A6E22E>@placeholder</span>\n        <span style=color:#8F8F9E>// Displays while promise is pending</span>\n        <span style=color:#FF4185>label</span>\n            --<span style=color:#FFF066> Loading\u2026</span>\n            <span style=color:#FF4185>progress</span>\n    <span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>person</span>|\n        <span style=color:#8F8F9E>// Displays if promise resolves</span>\n        <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n    <span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>err</span>|\n<span style=color:#8F8F9E>        &lt;!-- Displays if promise rejects --></span> <span style=color:#A6E22E>$</span><span style=color:#F8F8F0;background-color:#FF4185>{err.name}</span> <span style=color:#A6E22E>error</span><span style=color:#F8F8F0;background-color:#FF4185>:</span> <span style=color:#A6E22E>$</span><span style=color:#F8F8F0;background-color:#FF4185>{err.message}</span>\n</pre>"
  }, out, _component, "152");

  out.w("<p>Optional attributes for <code>&lt;await&gt;</code>:</p><table class=markdown-table><thead><tr><th align=right>Attribute</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td align=right><code>timeout</code></td><td>integer</td><td>An optional timeout. If reached, rejects the promise with a <code>TimeoutError</code>.</td></tr><tr><td align=right><code>name</code></td><td>string</td><td>Improves debugging and ensures ordering with the <code>show-after</code> attribute.</td></tr><tr><td align=right><code>show-after</code></td><td>string</td><td>Another <code>&lt;await&gt;</code> tag\u2019s <code>name</code>. With <code>client-reorder</code>, ensures that the current <code>&lt;await&gt;</code> block will always show after the named <code>&lt;await&gt;</code>.</td></tr><tr><td align=right><code>client-reorder</code></td><td>boolean</td><td>If true, anything after this <code>&lt;await&gt;</code> will be server-rendered before the Promise completes, then the fulfilled Promise\u2019s result will be updated with client-side JavaScript.</td></tr></tbody></table><blockquote class=null><p><strong>Pro Tip</strong>: When using <code>timeout</code>, you can distinguish between <code>TimeoutError</code>s and promise rejections by checking the error\u2019s <code>name</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>slowPromise</span>) <span style=color:#A6E22E>timeout</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>5000</span>>\n  &lt;<span style=color:#A6E22E>@then</span>><span style=color:#FFF066>Done</span>&lt;/<span style=color:#A6E22E>@then</span>>\n  &lt;<span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>err</span>|>\n    &lt;<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>name</span> <span style=color:#FF4185>===</span> <span style=color:#FFF066>\"TimeoutError\"</span>)>\n<span style=color:#FFF066>      Took too long to fetch the data!</span>\n    &lt;/<span style=color:#66D9EF>if</span>>\n    &lt;<span style=color:#66D9EF>else</span>>\n<span style=color:#FFF066>      Promise failed with </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n    &lt;/<span style=color:#66D9EF>else</span>>\n  &lt;/<span style=color:#A6E22E>@catch</span>>\n&lt;/<span style=color:#66D9EF>await</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>slowPromise</span>) <span style=color:#A6E22E>timeout</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>5000</span>\n    <span style=color:#A6E22E>@then</span> --<span style=color:#FFF066> Done</span>\n    <span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>err</span>|\n        <span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>name</span> <span style=color:#FF4185>===</span> <span style=color:#FFF066>\"TimeoutError\"</span>) --<span style=color:#FFF066> Took too long to fetch the data!</span>\n        <span style=color:#66D9EF>else</span> --<span style=color:#FFF066> Promise failed with </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>err</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n</pre>"
  }, out, _component, "196");

  out.w("</blockquote><h2 id=include-text><a name=include-text class=anchor href=#include-text><span class=header-link></span></a><code>&lt;include-text&gt;</code></h2><p><code>&lt;include-text&gt;</code> inlines text files into a template, escaping HTML syntax characters (<code>&lt;</code>, <code>&quot;</code>, etc.).</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>include-text</span>(<span style=color:#FFF066>'./foo.txt'</span>)/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>include-text</span>(<span style=color:#FFF066>\"./foo.txt\"</span>)\n</pre>"
  }, out, _component, "205");

  out.w("<p>If you do not want escaping, use <a href=#include-html><code>&lt;include-html&gt;</code></a> instead.</p><h2 id=include-html><a name=include-html class=anchor href=#include-html><span class=header-link></span></a><code>&lt;include-html&gt;</code></h2><p>Like <code>&lt;include-text&gt;</code>, <code>&lt;include-html&gt;</code> inlines the contents of a file. However, this tag <strong>does <em>not</em> escape</strong> special HTML characters.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>include-html</span>(<span style=color:#FFF066>'./foo.html'</span>)/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>include-html</span>(<span style=color:#FFF066>\"./foo.html\"</span>)\n</pre>"
  }, out, _component, "218");

  out.w("<h2 id=html-comment><a name=html-comment class=anchor href=#html-comment><span class=header-link></span></a><code>&lt;html-comment&gt;</code></h2><p>Marko removes HTML comment tags from its output. But if you need comments in the output, that\u2019s what <code>&lt;html-comment&gt;</code> is for:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;html-comment>[if IE]>&lt;script src=\"html-shiv.js\">&lt;/script>&lt;![endif]&lt;/html-comment></span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>html-comment</span> --<span style=color:#FFF066> [if IE]></span>&lt;<span style=color:#FF4185>script</span> <span style=color:#A6E22E>src</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"html-shiv.js\"</span>>&lt;/<span style=color:#FF4185>script</span>><span style=color:#8F8F9E>&lt;![endif]</span>\n</pre>"
  }, out, _component, "225");

  out.w("<p>\u2026becomes:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!--[if IE]>&lt;script src=\"html-shiv.js\">&lt;/script>&lt;![endif]--></span>\n</pre>");
}, {
  t: core_tags_marko_componentType,
  i: true
}, core_tags_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/custom-tags.md
const custom_tags_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const custom_tags = (custom_tags_marko_template);

toc_registry.set("../../node_modules/marko/docs/custom-tags.md", "<ul class=\"toc toc-level0\"><li><a href=\"#custom-tags\">Custom tags</a><ul class=\"toc toc-level1\"><li><a href=\"#your-first-custom-tag\">Your first custom tag</a></li><li><a href=\"#how-tags-are-discovered\">How tags are discovered</a></li><li><a href=\"#tag-directories\">Tag directories</a></li><li><a href=\"#using-tags-from-npm\">Using tags from npm</a></li><li><a href=\"#publishing-tags-to-npm\">Publishing tags to npm</a></li></ul></li><li><a href=\"#macros\">Macros</a></li></ul>");




const custom_tags_marko_componentType = "RDvYHi8Y",
      custom_tags_marko_component = {};
custom_tags_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=custom-tags><a name=custom-tags class=anchor href=#custom-tags><span class=header-link></span></a>Custom tags</h1><p>Custom tags allow you to break up your application UI into encapsulated, reusable components.</p><h2 id=your-first-custom-tag><a name=your-first-custom-tag class=anchor href=#your-first-custom-tag><span class=header-link></span></a>Your first custom tag</h2><p>Let&#39;s say we have a page with the following content:</p><div class=code-block-filename>page.marko</div><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n&lt;<span style=color:#FF4185>html</span>>\n&lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello World!</span>&lt;/<span style=color:#FF4185>h1</span>>\n&lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n<span style=color:#FF4185>html</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello World!</span>\n</pre>"
  }, out, _component, "10");

  out.w("<p>However, this page is getting pretty complex and unmaintainable. Let&#39;s split out the content into a separate component. To do this, we&#39;ll create a <code>components/</code> folder and inside it a <code>hello.marko</code> file:</p><div class=code-block-filename>components/hello.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello World!</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello World!</span>\n</pre>"
  }, out, _component, "15");

  out.w("<p>Marko <a href=#how-tags-are-discovered>automatically discovers</a> <code>.marko</code> files under a <code>components/</code> directory, so we can now use the <code>&lt;hello&gt;</code> tag in our page:</p><div class=code-block-filename>page.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n&lt;<span style=color:#FF4185>html</span>>\n&lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>hello</span>/>\n&lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n<span style=color:#FF4185>html</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#FF4185>hello</span>\n</pre>"
  }, out, _component, "22");

  out.w("<p>Now this <code>&lt;hello&gt;</code> tag can be used multiple times, and even on multiple pages. But what if we don&#39;t only want to say hello to the world? Let&#39;s pass some attributes.</p><div class=code-block-filename>page.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n&lt;<span style=color:#FF4185>html</span>>\n&lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>hello</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"World\"</span>/>\n&lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n<span style=color:#FF4185>html</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#FF4185>hello</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"World\"</span>\n</pre>"
  }, out, _component, "26");

  out.w("<p>The component will receive these attributes as <code>input</code>:</p><div class=code-block-filename>components/hello.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "30");

  out.w("<p>Nice.</p><h2 id=how-tags-are-discovered><a name=how-tags-are-discovered class=anchor href=#how-tags-are-discovered><span class=header-link></span></a>How tags are discovered</h2><p>Marko discovers components relative to the <code>.marko</code> file where a custom tag is used. From this file, Marko walks up directories until it finds a <code>components/</code> folder which contains a component matching the name of the custom tag. If it reaches the project root without finding anything, it will then check installed packages for the component.</p><p>Let&#39;s take a look at an example directory structure to better understand this:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n    app-header.marko\n    app-footer.marko\npages/\n    about/\n        components/\n            team-members.marko\n        page.marko\n    home/\n        components/\n            home-banner.marko\n        page.marko\n</pre><p>The file <code>pages/home/page.marko</code> can use the following tags:</p><ul><li><code>&lt;app-header&gt;</code></li><li><code>&lt;app-footer&gt;</code></li><li><code>&lt;home-banner&gt;</code></li></ul><p>And the file <code>pages/about/page.marko</code> can use the following tags:</p><ul><li><code>&lt;app-header&gt;</code></li><li><code>&lt;app-footer&gt;</code></li><li><code>&lt;team-members&gt;</code></li></ul><p>The home page can&#39;t see <code>&lt;team-members&gt;</code> and the about page can&#39;t see <code>&lt;home-banner&gt;</code>. By using nested <code>component/</code> directories, we&#39;ve scoped our page-specific components to their respective pages.</p><h2 id=tag-directories><a name=tag-directories class=anchor href=#tag-directories><span class=header-link></span></a>Tag directories</h2><p>In addition to a Marko template, the children of <code>components/</code> can be a directory with an <code>index.marko</code> template:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n    app-header/\n        index.marko\n        logo.png\n        style.css\n    app-footer/\n        index.marko\n</pre><p>Or a directory with a template whose name matches its parent directory:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n    app-header/\n        app-header.marko\n        app-header.style.css\n        logo.png\n    app-footer/\n        app-footer.marko\n</pre><p>This allows you to create components that have other files associated with them and keep those files together in the directory structure.</p><blockquote class=protip><p><strong>ProTip:</strong> You can take advantage of nested <code>components/</code> directories to create &quot;subcomponents&quot; that are only available to the component that contains them.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>components/\n    app-header/\n        components/\n            navigation.marko\n            user-info.marko\n        app-header.marko\n    app-footer/\n        app-footer.marko\n</pre></blockquote><h2 id=using-tags-from-npm><a name=using-tags-from-npm class=anchor href=#using-tags-from-npm><span class=header-link></span></a>Using tags from npm</h2><p>To use <a href=https://www.npmjs.com/search?q=keywords%3Amarko%20components>tags from npm</a>, ensure that the package is installed and listed in your <code>package.json</code> dependencies:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install --save @marko/match-media\n</pre><p>Marko discover tags from packages defined in your <code>package.json</code>, so you can start using them right away:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n    &lt;<span style=color:#FF4185>match-media</span>|{ <span style=color:#FFAC4D;font-style:italic>mobile</span> }| <span style=color:#A6E22E>mobile</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"max-width:30em\"</span>>\n<span style=color:#8F8F9E>        &lt;!-- nice --></span>\n    &lt;/<span style=color:#FF4185>match-media</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>match-media</span>|{ <span style=color:#FFAC4D;font-style:italic>mobile</span> }| <span style=color:#A6E22E>mobile</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"max-width:30em\"</span>\n<span style=color:#8F8F9E>        &lt;!-- nice --></span>\n</pre>"
  }, out, _component, "81");

  out.w("<h2 id=publishing-tags-to-npm><a name=publishing-tags-to-npm class=anchor href=#publishing-tags-to-npm><span class=header-link></span></a>Publishing tags to npm</h2><p>We saw above that tags from npm are automatically discovered. In order to make this work, your package must include a <a href=/docs/marko-json/ ><code>marko.json</code></a> at the root.</p><div class=code-block-filename>marko.json</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"tags-dir\"</span>: <span style=color:#FFF066>\"./dist/components\"</span>\n}\n</pre><p>This example file tells Marko to expose all components directly under the <code>dist/components/</code> directory to the application using your package.</p><p>We recommend adding the <code>marko</code> and <code>components</code> keywords to your <code>package.json</code> so others can find your components. Then <code>npm publish</code>!</p><h1 id=macros><a name=macros class=anchor href=#macros><span class=header-link></span></a>Macros</h1><p>The <a href=/docs/core-tags/#macro><code>&lt;macro&gt;</code></a> tag allows you to create custom tags in the same file that they are used in.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>macro</span>|{ <span style=color:#FFAC4D;font-style:italic>name</span> }| <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"welcome-message\"</span>>\n    &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>&lt;/<span style=color:#FF4185>h1</span>>\n&lt;/<span style=color:#66D9EF>macro</span>>\n\n&lt;<span style=color:#FF4185>welcome-message</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Patrick\"</span>/>\n&lt;<span style=color:#FF4185>welcome-message</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Austin\"</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>macro</span>|{ <span style=color:#FFAC4D;font-style:italic>name</span> }| <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"welcome-message\"</span>\n    <span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n<span style=color:#FF4185>welcome-message</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Patrick\"</span>\n<span style=color:#FF4185>welcome-message</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Austin\"</span>\n</pre>"
  }, out, _component, "102");
}, {
  t: custom_tags_marko_componentType,
  i: true
}, custom_tags_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/editor-plugins.md
const editor_plugins_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const editor_plugins = (editor_plugins_marko_template);

toc_registry.set("../../node_modules/marko/docs/editor-plugins.md", "<ul class=\"toc toc-level1\"><li><a href=\"#visual-studio-code\">Visual Studio Code</a></li><li><a href=\"#atom\">Atom</a></li><li><a href=\"#sublime\">Sublime</a></li><li><a href=\"#webstorm\">WebStorm</a></li><li><a href=\"#textmate\">TextMate</a></li><li><a href=\"#codemirror\">CodeMirror</a></li></ul>");


const editor_plugins_marko_componentType = "WYSTRK0v",
      editor_plugins_marko_component = {};
editor_plugins_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=editor-plugins><a name=editor-plugins class=anchor href=#editor-plugins><span class=header-link></span></a>Editor Plugins</h1><h2 id=visual-studio-code><a name=visual-studio-code class=anchor href=#visual-studio-code><span class=header-link></span></a>Visual Studio Code</h2><p><a href=https://marketplace.visualstudio.com/items?itemName=Marko-JS.marko-vscode>Documentation</a></p><ul><li>Syntax highlighting</li><li>Tag matching</li><li>Tag, attribute and css autocompletion</li><li>Hyperclick (clickable tags and attributes)</li><li>Surfaces errors within the templates.</li><li>Prettyprinting (<a href=https://github.com/marko-js/marko-prettyprint>marko-prettyprint</a> is used internally)</li></ul><h2 id=atom><a name=atom class=anchor href=#atom><span class=header-link></span></a>Atom</h2><p><a href=https://atom.io/packages/language-marko>Documentation</a></p><ul><li>Syntax highlighting</li><li>Tag matching</li><li>Tag and attribute autocompletion</li><li>Code snippets</li><li>Hyperclick (clickable tags and attributes)</li><li>Prettyprinting (<a href=https://github.com/marko-js/marko-prettyprint>marko-prettyprint</a> is used internally)</li></ul><h2 id=sublime><a name=sublime class=anchor href=#sublime><span class=header-link></span></a>Sublime</h2><p><a href=https://github.com/merwan7/sublime-marko>Documentation</a></p><ul><li>Syntax highlighting</li></ul><h2 id=webstorm><a name=webstorm class=anchor href=#webstorm><span class=header-link></span></a>WebStorm</h2><p><a href=https://github.com/marko-js/marko-tmbundle>Documentation</a></p><ul><li>Syntax highlighting</li></ul><h2 id=textmate><a name=textmate class=anchor href=#textmate><span class=header-link></span></a>TextMate</h2><p><a href=https://github.com/marko-js/marko-tmbundle>Documentation</a></p><ul><li>Syntax highlighting</li></ul><h2 id=codemirror><a name=codemirror class=anchor href=#codemirror><span class=header-link></span></a>CodeMirror</h2><p><a href=https://github.com/patrick-steele-idem/codemirror-atom-modes>codemirror-atom-modes</a> + <a href=https://github.com/marko-js/atom-language-marko>atom-language-marko</a></p>");
}, {
  t: editor_plugins_marko_componentType,
  i: true
}, editor_plugins_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/events.md
const events_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const events = (events_marko_template);

toc_registry.set("../../node_modules/marko/docs/events.md", "<ul class=\"toc toc-level1\"><li><a href=\"#listening-to-events\">Listening to events</a><ul class=\"toc toc-level2\"><li><a href=\"#function-handler\">Function handler</a></li><li><a href=\"#method-handler\">Method handler</a></li><li><a href=\"#binding-additional-arguments\">Binding additional arguments</a></li></ul></li><li><a href=\"#emitting-custom-events\">Emitting custom events</a></li></ul>");




const events_marko_componentType = "+OA5kpUq",
      events_marko_component = {};
events_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=events><a name=events class=anchor href=#events><span class=header-link></span></a>Events</h1><p>Marko\u2019s event API supports:</p><ul><li><a href=https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events>Browser events</a> on native tags</li><li>Custom events from <a href=/docs/custom-tags/ >custom tags</a></li></ul><p>Note that <strong>you can\u2019t mix event targets and event types</strong>: custom tags can only listen for custom events, and native tags can only listen for native events.</p><h2 id=listening-to-events><a name=listening-to-events class=anchor href=#listening-to-events><span class=header-link></span></a>Listening to events</h2><p>Both kinds of events are received with an <code>on-*</code> attribute and the <a href=/docs/syntax/#arguments>attribute arguments syntax</a>:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span>\n  <span style=color:#66D9EF;font-style:italic>on-change</span>(<span style=color:#FFAC4D;font-style:italic>event</span> <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>info</span>(<span style=color:#FFF066>`Checked? </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>event</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>target</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>checked</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>))\n/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>input</span> [\n    <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span>\n    <span style=color:#66D9EF;font-style:italic>on-change</span>(<span style=color:#FFAC4D;font-style:italic>event</span> <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>info</span>(<span style=color:#FFF066>`Checked? </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>event</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>target</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>checked</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>))\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "18");

  out.w("<p>The <a href=#function-handler>first argument for the attribute can be a function</a>, or <a href=#method-handler>a string matching a method name</a> on the <a href=/docs/class-components/ >component\u2019s <code>class</code> declaration</a>.</p><h3 id=function-handler><a name=function-handler class=anchor href=#function-handler><span class=header-link></span></a>Function handler</h3><p>If you provide a function as the first argument of the <code>on-*</code> attribute, the function is called whenever the event fires, like standard event listeners.</p><p>Below we use the <a href=/docs/syntax/#static-javascript><code>static</code> prefix</a> to define a function, then use it as a <code>click</code> handler:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>handleClick</span>(<span style=color:#FFAC4D;font-style:italic>event</span>) {\n  <span style=color:#FFFFFF>event</span>.<span style=color:#A6E22E>preventDefault</span>();\n  <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"Clicked!\"</span>);\n}\n\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>handleClick</span>)>\n<span style=color:#FFF066>  Log click</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>handleClick</span>(<span style=color:#FFAC4D;font-style:italic>event</span>) {\n    <span style=color:#FFFFFF>event</span>.<span style=color:#A6E22E>preventDefault</span>();\n    <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"Clicked!\"</span>);\n}\n\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>handleClick</span>) --<span style=color:#FFF066> Log click</span>\n</pre>"
  }, out, _component, "33");

  out.w("<p>In the above example, any time the <code>&lt;button&gt;</code> is clicked the <code>handleClick</code> function is called.</p><p>You can also use an inline arrow function:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>\"Clicked! \uD83C\uDF89\"</span>))>\n<span style=color:#FFF066>  Celebrate click</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(() <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>\"Clicked! \uD83C\uDF89\"</span>)) --<span style=color:#FFF066> Celebrate click</span>\n</pre>"
  }, out, _component, "38");

  out.w("<p>\u2026or anything that evaluates to a function:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#A6E22E>handler</span> <span style=color:#FFFFFF>=</span> (\n  <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>dontBreakMyApp</span> <span style=color:#FF4185>?</span>\n    () <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>error</span>(<span style=color:#FFF066>\"Clicked!\"</span>) <span style=color:#FF4185>:</span>\n    () <span style=color:#66D9EF;font-style:italic>=></span> { <span style=color:#FF4185>throw</span> <span style=color:#66D9EF;font-style:italic>Error</span>(<span style=color:#FFF066>\"Clicked!\"</span>) }\n);\n\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>handler</span>)>\n<span style=color:#FFF066>  Do not click</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>handler</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>dontBreakMyApp</span>\n        <span style=color:#FF4185>?</span> () <span style=color:#66D9EF;font-style:italic>=></span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>error</span>(<span style=color:#FFF066>\"Clicked!\"</span>)\n        <span style=color:#FF4185>:</span> () <span style=color:#66D9EF;font-style:italic>=></span> {\n              <span style=color:#FF4185>throw</span> <span style=color:#66D9EF;font-style:italic>Error</span>(<span style=color:#FFF066>\"Clicked!\"</span>);\n          };\n}\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>handler</span>) --<span style=color:#FFF066> Do not click</span>\n</pre>"
  }, out, _component, "40");

  out.w("<h3 id=method-handler><a name=method-handler class=anchor href=#method-handler><span class=header-link></span></a>Method handler</h3><p>When a string is the first argument, Marko calls a matching method on the component&#39;s <code>class</code>.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>logChange</span>(<span style=color:#FFAC4D;font-style:italic>newTab</span>) {\n    <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>`changed to: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>newTab</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>);\n  }\n}\n\n&lt;<span style=color:#FF4185>my-tabs</span> <span style=color:#66D9EF;font-style:italic>on-switch-tab</span>(<span style=color:#FFF066>\"logChange\"</span>)>\n<span style=color:#FFF066>  \u2026</span>\n&lt;/<span style=color:#FF4185>my-tabs</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>logChange</span>(<span style=color:#FFAC4D;font-style:italic>newTab</span>) {\n        <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>`changed to: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>newTab</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>);\n    }\n}\n\n<span style=color:#FF4185>my-tabs</span> <span style=color:#66D9EF;font-style:italic>on-switch-tab</span>(<span style=color:#FFF066>\"logChange\"</span>) --<span style=color:#FFF066> \u2026</span>\n</pre>"
  }, out, _component, "46");

  out.w("<p>When <code>&lt;my-tabs&gt;</code> emits the <code>switch-tab</code> event, it will call its <code>logChange</code> method.</p><p>Within the handler you can access the current component instance, read data, emit events, update state, etc.</p><h3 id=binding-additional-arguments><a name=binding-additional-arguments class=anchor href=#binding-additional-arguments><span class=header-link></span></a>Binding additional arguments</h3><p>Arguments after the handler are prepended when the handler is called:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>removeFriend</span>(<span style=color:#FFAC4D;font-style:italic>friendId</span>, <span style=color:#FFAC4D;font-style:italic>event</span>) {\n  <span style=color:#FFFFFF>event</span>.<span style=color:#A6E22E>preventDefault</span>();\n  <span style=color:#FFFFFF>window</span>.<span style=color:#FFFFFF>myAPI</span>.<span style=color:#A6E22E>unfriend</span>(<span style=color:#FFFFFF>friendId</span>);\n}\n\n&lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>friend</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>friends</span>>\n  &lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>removeFriend</span>, <span style=color:#FFFFFF>friend</span>.<span style=color:#FFFFFF>id</span>)>\n<span style=color:#FFF066>    Unfriend </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>friend</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n  &lt;/<span style=color:#FF4185>button</span>>\n&lt;/<span style=color:#66D9EF>for</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>removeFriend</span>(<span style=color:#FFAC4D;font-style:italic>friendId</span>, <span style=color:#FFAC4D;font-style:italic>event</span>) {\n    <span style=color:#FFFFFF>event</span>.<span style=color:#A6E22E>preventDefault</span>();\n    <span style=color:#FFFFFF>window</span>.<span style=color:#FFFFFF>myAPI</span>.<span style=color:#A6E22E>unfriend</span>(<span style=color:#FFFFFF>friendId</span>);\n}\n\n<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>friend</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>friends</span>\n    <span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>removeFriend</span>, <span style=color:#FFFFFF>friend</span>.<span style=color:#FFFFFF>id</span>) --<span style=color:#FFF066> Unfriend </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>friend</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "56");

  out.w("<p>Here we share the logic for <code>removeFriend()</code> with each <code>friend</code> in the <code>friends</code> array. When the <code>&lt;button&gt;</code> is clicked, the <code>id</code> of the removed <code>friend</code> is passed to the <code>removeFriend()</code>, handler followed by the DOM <code>click</code> event.</p><h2 id=emitting-custom-events><a name=emitting-custom-events class=anchor href=#emitting-custom-events><span class=header-link></span></a>Emitting custom events</h2><p>The recommended way for a <a href=/docs/custom-tags/ >custom tag</a> to communicate with its parent is through <strong>custom events</strong>.</p><p>All components implement a <a href=https://nodejs.org/api/events.html#events_class_eventemitter>Node.js-style event emitter</a> to send events to parent components.</p><div class=code-block-filename>email-input.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>handleChange</span>(<span style=color:#FFAC4D;font-style:italic>event</span>) {\n    <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>event</span>.<span style=color:#FFFFFF>target</span>.<span style=color:#FFFFFF>validity</span>.<span style=color:#FFFFFF>valid</span>) {\n      <span style=color:#8F8F9E>// Only emit email-changes if they are valid.</span>\n      <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"email-change\"</span>, { email: <span style=color:#FFFFFF>event</span>.<span style=color:#FFFFFF>target</span>.<span style=color:#FFFFFF>value</span> });\n    }\n  }\n}\n\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"email\"</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span> <span style=color:#66D9EF;font-style:italic>on-change</span>(<span style=color:#FFF066>\"handleChange\"</span>)/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>handleChange</span>(<span style=color:#FFAC4D;font-style:italic>event</span>) {\n        <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>event</span>.<span style=color:#FFFFFF>target</span>.<span style=color:#FFFFFF>validity</span>.<span style=color:#FFFFFF>valid</span>) {\n            <span style=color:#8F8F9E>// Only emit email-changes if they are valid.</span>\n            <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>emit</span>(<span style=color:#FFF066>\"email-change\"</span>, { email: <span style=color:#FFFFFF>event</span>.<span style=color:#FFFFFF>target</span>.<span style=color:#FFFFFF>value</span> });\n        }\n    }\n}\n\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"email\"</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span> <span style=color:#66D9EF;font-style:italic>on-change</span>(<span style=color:#FFF066>\"handleChange\"</span>)\n</pre>"
  }, out, _component, "75");

  out.w("<p>The above code listens to native <code>change</code> events from the <code>&lt;input&gt;</code> element, and then emits its own <code>email-change</code> event if the change was valid.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>form</span>>\n  &lt;<span style=color:#FF4185>email-input</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"email\"</span> <span style=color:#66D9EF;font-style:italic>on-email-change</span>(<span style=color:#FF4185>...</span>)/>\n&lt;/<span style=color:#FF4185>form</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>form</span>\n    <span style=color:#FF4185>email-input</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"email\"</span> <span style=color:#66D9EF;font-style:italic>on-email-change</span>(<span style=color:#FF4185>...</span>)\n</pre>"
  }, out, _component, "80");

  out.w("<blockquote class=note><p><strong>Note:</strong> Events are not received as <code>input</code>; you cannot access <code>input.onEmailChange</code>. Instead, they set up subscriptions.</p></blockquote>");
}, {
  t: events_marko_componentType,
  i: true
}, events_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/express.md
const express_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const express = (express_marko_template);

toc_registry.set("../../node_modules/marko/docs/express.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#skip-the-view-engine\">Skip the view engine</a></li><li><a href=\"#usage\">Usage</a></li></ul>");


const express_marko_componentType = "bkiCRt13",
      express_marko_component = {};
express_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=express-marko><a name=express-marko class=anchor href=#express-marko><span class=header-link></span></a>Express + Marko</h1><p>See the <a href=https://github.com/marko-js/examples/tree/master/examples/lasso-express>marko-express</a> sample project for a working example.</p><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install express --save\nnpm install marko --save\n</pre><h2 id=skip-the-view-engine><a name=skip-the-view-engine class=anchor href=#skip-the-view-engine><span class=header-link></span></a>Skip the view engine</h2><p>The built in view engine for express may be asynchronous, but it doesn&#39;t support streaming (check out <a href=http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/ >Rediscovering Progressive HTML Rendering</a> to see why this is so important). So instead we&#39;ll <a href=https://strongloop.com/strongblog/bypassing-express-view-rendering-for-speed-and-modularity/ >bypass the view engine</a>.</p><h2 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h2><p>Marko provides a submodule (<code>marko/express</code>) to add a <code>res.marko</code> method to the express response object. This function works much like <code>res.render</code>, but doesn&#39;t impose the restrictions of the express view engine and allows you to take full advantage of Marko&#39;s streaming and modular approach to templates.</p><p>By using <code>res.marko</code> you&#39;ll automatically have access to <code>req</code>, <code>res</code>, <code>app</code>, <code>app.locals</code>, and <code>res.locals</code> from within your Marko template and custom tags. These values are added to <code>out.global</code>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/node-require\"</span>); <span style=color:#8F8F9E>// Allow Node.js to require and load `.marko` files</span>\n\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>express</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"express\"</span>);\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>markoExpress</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/express\"</span>);\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./template\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>app</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>express</span>();\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>use</span>(<span style=color:#A6E22E>markoExpress</span>()); <span style=color:#8F8F9E>//enable res.marko(template, data)</span>\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>get</span>(<span style=color:#FFF066>\"/\"</span>, <span style=color:#66D9EF;font-style:italic>function</span>(<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>res</span>) {\n  <span style=color:#FFFFFF>res</span>.<span style=color:#A6E22E>marko</span>(<span style=color:#FFFFFF>template</span>, {\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    count: <span style=color:#AE81FF>30</span>,\n    colors: [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n  });\n});\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>listen</span>(<span style=color:#AE81FF>8080</span>);\n</pre>");
}, {
  t: express_marko_componentType,
  i: true
}, express_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/fastify.md
const fastify_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const fastify = (fastify_marko_template);

toc_registry.set("../../node_modules/marko/docs/fastify.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#usage\">Usage</a></li></ul>");


const fastify_marko_componentType = "hs5SeyN3",
      fastify_marko_component = {};
fastify_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=fastify-marko><a name=fastify-marko class=anchor href=#fastify-marko><span class=header-link></span></a>Fastify + Marko</h1><p>See the <a href=https://github.com/marko-js/examples/tree/master/examples/lasso-fastify>lasso-fastify</a> sample project for a fully-working example.</p><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install fastify --save\nnpm install point-of-view --save\nnpm install marko --save\n</pre><h2 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h2><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>fastify</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"fastify\"</span>)();\n\n<span style=color:#FFFFFF>fastify</span>.<span style=color:#A6E22E>register</span>(<span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"point-of-view\"</span>), {\n  engine: {\n    marko: <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko\"</span>)\n  }\n});\n\n<span style=color:#FFFFFF>fastify</span>.<span style=color:#A6E22E>get</span>(<span style=color:#FFF066>\"/\"</span>, (<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>reply</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>reply</span>.<span style=color:#A6E22E>view</span>(<span style=color:#FFF066>\"/index.marko\"</span>, {\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    count: <span style=color:#AE81FF>30</span>,\n    colors: [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n  });\n});\n\n<span style=color:#FFFFFF>fastify</span>.<span style=color:#A6E22E>listen</span>(<span style=color:#AE81FF>8080</span>, <span style=color:#FFAC4D;font-style:italic>err</span> <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>err</span>) <span style=color:#FF4185>throw</span> <span style=color:#FFFFFF>err</span>;\n  <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>`Server listening on </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>fastify</span><span style=color:#FFF066>.</span><span style=color:#FFFFFF>server</span><span style=color:#FFF066>.</span><span style=color:#A6E22E>address</span><span style=color:#FFF066>().</span><span style=color:#FFFFFF>port</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>);\n});\n</pre>");
}, {
  t: fastify_marko_componentType,
  i: true
}, fastify_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/getting-started.md
const getting_started_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const getting_started = (getting_started_marko_template);

toc_registry.set("../../node_modules/marko/docs/getting-started.md", "<ul class=\"toc toc-level1\"><li><a href=\"#hello-world\">Hello world</a></li><li><a href=\"#a-simple-component\">A simple component</a><ul class=\"toc toc-level2\"><li><a href=\"#adding-state\">Adding state</a></li></ul></li></ul>");




const getting_started_marko_componentType = "1jE5AvzX",
      getting_started_marko_component = {};
getting_started_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=getting-started><a name=getting-started class=anchor href=#getting-started><span class=header-link></span></a>Getting started</h1><p>The easiest way to get started with Marko is to use the <a href=/try-online>Try Online</a> feature. You can just open it in another tab and follow along. If you&#39;d rather develop locally, check out the <a href=/docs/installing/ >Installation</a> page.</p><h2 id=hello-world><a name=hello-world class=anchor href=#hello-world><span class=header-link></span></a>Hello world</h2><p>Marko makes it easy to represent your UI using a <a href=/docs/syntax/ >syntax</a> that is like HTML:</p><div class=code-block-filename>hello.marko</div><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello World</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello World</span>\n</pre>"
  }, out, _component, "13");

  out.w("<p>In fact, Marko is so much like HTML, that you can use it as a replacement for a templating language like handlebars, mustache, or pug:</p><div class=code-block-filename>template.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n&lt;<span style=color:#FF4185>html</span>>\n&lt;<span style=color:#FF4185>head</span>>\n    &lt;<span style=color:#FF4185>title</span>><span style=color:#FFF066>Hello World</span>&lt;/<span style=color:#FF4185>title</span>>\n&lt;/<span style=color:#FF4185>head</span>>\n&lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello World</span>&lt;/<span style=color:#FF4185>h1</span>>\n&lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!doctype html></span>\n<span style=color:#FF4185>html</span>\n    <span style=color:#FF4185>head</span>\n        <span style=color:#FF4185>title</span> --<span style=color:#FFF066> Hello World</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello World</span>\n</pre>"
  }, out, _component, "16");

  out.w("<p>However, Marko is much more than a templating language. It&#39;s a language that allows you to declaratively build an application by describing how the application view changes over time and in response to user actions.</p><p>In the browser, when the data representing your UI changes, Marko will automatically and efficiently update the DOM to reflect the changes.</p><h2 id=a-simple-component><a name=a-simple-component class=anchor href=#a-simple-component><span class=header-link></span></a>A simple component</h2><p>Let&#39;s say we want to perform an action once a <code>&lt;button&gt;</code> is clicked:</p><div class=code-block-filename>button.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span>><span style=color:#FFF066>Click me!</span>&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>button</span> --<span style=color:#FFF066> Click me!</span>\n</pre>"
  }, out, _component, "25");

  out.w("<p>Marko makes this really easy, allowing you to define a <code>class</code> for a component right in the <code>.marko</code> view and call methods of that class with <code>on-</code> attributes:</p><div class=code-block-filename>button.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>sayHi</span>() {\n        <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>\"Hi!\"</span>);\n    }\n}\n\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"sayHi\"</span>)><span style=color:#FFF066>Click me!</span>&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>sayHi</span>() {\n        <span style=color:#A6E22E>alert</span>(<span style=color:#FFF066>\"Hi!\"</span>);\n    }\n}\n\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"sayHi\"</span>) --<span style=color:#FFF066> Click me!</span>\n</pre>"
  }, out, _component, "31");

  out.w("<h3 id=adding-state><a name=adding-state class=anchor href=#adding-state><span class=header-link></span></a>Adding state</h3><p>Alerting when a button is clicked is great, but what about updating your UI in response to an action? Marko&#39;s stateful components make this easy. All you need to do is set <code>this.state</code> from inside your component&#39;s class. This makes a new <code>state</code> variable available to your view. When a value in <code>this.state</code> is changed, the view will automatically re-render and only update the part of the DOM that changed.</p><div class=code-block-filename>counter.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            count: <span style=color:#AE81FF>0</span>\n        };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>The current count is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>)><span style=color:#FFF066>Click me!</span>&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> {\n            count: <span style=color:#AE81FF>0</span>\n        };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> The current count is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> Click me!</span>\n</pre>"
  }, out, _component, "40");
}, {
  t: getting_started_marko_componentType,
  i: true
}, getting_started_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/http.md
const http_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const http = (http_marko_template);

toc_registry.set("../../node_modules/marko/docs/http.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#usage\">Usage</a></li></ul>");


const http_marko_componentType = "RfMkcjbp",
      http_marko_component = {};
http_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=marko-http-server><a name=marko-http-server class=anchor href=#marko-http-server><span class=header-link></span></a>Marko + HTTP Server</h1><p>See the <a href=https://github.com/marko-js/examples/tree/master/examples/http>marko-http</a> sample project for a working example.</p><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install marko --save\n</pre><h2 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h2><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/node-require\"</span>).<span style=color:#A6E22E>install</span>();\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>http</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"http\"</span>);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>server</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>http</span>.<span style=color:#A6E22E>createServer</span>();\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>port</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>8080</span>;\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>indexTemplate</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./index.marko\"</span>);\n\n<span style=color:#FFFFFF>server</span>.<span style=color:#A6E22E>on</span>(<span style=color:#FFF066>\"request\"</span>, (<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>res</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>indexTemplate</span>.<span style=color:#A6E22E>render</span>(\n    {\n      name: <span style=color:#FFF066>\"Frank\"</span>,\n      count: <span style=color:#AE81FF>30</span>,\n      colors: [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n    },\n    <span style=color:#FFFFFF>res</span>\n  );\n});\n\n<span style=color:#FFFFFF>server</span>.<span style=color:#A6E22E>listen</span>(<span style=color:#FFFFFF>port</span>, () <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>`Successfully started server on port </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>port</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>);\n});\n</pre>");
}, {
  t: http_marko_componentType,
  i: true
}, http_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/installing.md
const installing_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const installing = (installing_marko_template);

toc_registry.set("../../node_modules/marko/docs/installing.md", "<ul class=\"toc toc-level1\"><li><a href=\"#trying-out-marko\">Trying out Marko</a></li><li><a href=\"#creating-new-apps-recommended\">Creating new apps</a></li><li><a href=\"#custom-bundling\">Custom Bundling</a><ul class=\"toc toc-level2\"><li><a href=\"#webpack\">Webpack</a></li><li><a href=\"#lasso\">Lasso</a></li><li><a href=\"#rollup\">Rollup</a></li></ul></li></ul>");


const installing_marko_componentType = "c0Zzii6A",
      installing_marko_component = {};
installing_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h1><h2 id=trying-out-marko><a name=trying-out-marko class=anchor href=#trying-out-marko><span class=header-link></span></a>Trying out Marko</h2><p>If you just want to play around with Marko in the browser, head on over to our <a href=/try-online>Try Online</a> feature. You&#39;ll be able to develop a Marko application right in your browser.</p><h2 id=creating-new-apps-recommended><a name=creating-new-apps-recommended class=anchor href=#creating-new-apps-recommended><span class=header-link></span></a>Creating new apps (Recommended)</h2><p>If you&#39;re starting from scratch, you can use Marko&#39;s <a href=https://github.com/marko-js/cli>CLI</a> commands to quickly create a starter app:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npx @marko/create\n</pre><p>This will use an interactive <a href=https://github.com/marko-js/cli>CLI</a> to automatically create a project for you using the pre-made starter template of your choosing. The <code>basic</code> template is the most minimal and the easiest way to get started. It uses our batteries-included <code>@marko/build</code> and <code>@marko/serve</code> tools that handle building, bundling, and serving your web application. These projects are config-free with built-in file based routing and automatic code reloading.</p><h2 id=custom-bundling><a name=custom-bundling class=anchor href=#custom-bundling><span class=header-link></span></a>Custom Bundling</h2><p>Marko relies on JavaScript bundlers to package your code on both the client and the server. This is because Marko&#39;s client and server bundling works closely together to optimize the smallest client bundles and handle shared assets properly.</p><p>Using the CLI is still the easiest way to get started even when you want to get your hands dirty tweaking every last part of your config files. Marko currently supports Webpack, Lasso, and Rollup.</p><h3 id=webpack><a name=webpack class=anchor href=#webpack><span class=header-link></span></a>Webpack</h3><p><a href=/docs/webpack/ >Webpack Integration Docs</a></p><p><a href=https://github.com/marko-js/webpack>Marko Webpack Plugin</a></p><p><a href=https://github.com/marko-js/examples/tree/master/examples/webpack-express>Webpack Example</a></p><p>CLI Command: <code>npx @marko/create --template webpack-express</code></p><h3 id=lasso><a name=lasso class=anchor href=#lasso><span class=header-link></span></a>Lasso</h3><p><a href=/docs/lasso/ >Lasso Integration Docs</a></p><p><a href=https://github.com/lasso-js/lasso-marko>Marko Lasso Plugin</a></p><p><a href=https://github.com/marko-js/examples/tree/master/examples/lasso-express>Lasso Example</a></p><p>CLI Command: <code>npx @marko/create --template lasso-express</code></p><h3 id=rollup><a name=rollup class=anchor href=#rollup><span class=header-link></span></a>Rollup</h3><p><a href=/docs/rollup/ >Rollup Integration Docs</a></p><p><a href=https://github.com/marko-js/rollup>Marko Rollup Plugin</a></p>");
}, {
  t: installing_marko_componentType,
  i: true
}, installing_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/koa.md
const koa_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const koa = (koa_marko_template);

toc_registry.set("../../node_modules/marko/docs/koa.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#usage\">Usage</a></li></ul>");


const koa_marko_componentType = "EU4D6oex",
      koa_marko_component = {};
koa_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=koa-marko><a name=koa-marko class=anchor href=#koa-marko><span class=header-link></span></a>Koa + Marko</h1><p>See <a href=https://github.com/marko-js/examples/tree/master/examples/lasso-koa>the <code>marko-koa</code> sample project</a> for a fully-working example.</p><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install koa marko --save\n</pre><h2 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h2><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/node-require\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>Koa</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"koa\"</span>);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>app</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>new</span> Koa();\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./index.marko\"</span>);\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>use</span>((<span style=color:#FFAC4D;font-style:italic>ctx</span>, <span style=color:#FFAC4D;font-style:italic>next</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>ctx</span>.<span style=color:#FFFFFF>type</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"html\"</span>;\n  <span style=color:#FFFFFF>ctx</span>.<span style=color:#FFFFFF>body</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>stream</span>({\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    count: <span style=color:#AE81FF>30</span>,\n    colors: [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n  });\n});\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>listen</span>(<span style=color:#AE81FF>8080</span>);\n</pre><p>You may also easily add <code>gzip</code> streaming support without additional dependencies:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/node-require\"</span>);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>zlib</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"zlib\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>Koa</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"koa\"</span>);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>app</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>new</span> Koa();\n\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./index.marko\"</span>);\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>use</span>((<span style=color:#FFAC4D;font-style:italic>ctx</span>, <span style=color:#FFAC4D;font-style:italic>next</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>ctx</span>.<span style=color:#FFFFFF>type</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"html\"</span>;\n  <span style=color:#FFFFFF>ctx</span>.<span style=color:#FFFFFF>body</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>stream</span>({\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    count: <span style=color:#AE81FF>30</span>,\n    colors: [<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n  });\n\n  <span style=color:#FFFFFF>ctx</span>.<span style=color:#A6E22E>vary</span>(<span style=color:#FFF066>\"Accept-Encoding\"</span>);\n  <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>ctx</span>.<span style=color:#A6E22E>acceptsEncodings</span>(<span style=color:#FFF066>\"gzip\"</span>)) {\n    <span style=color:#FFFFFF>ctx</span>.<span style=color:#A6E22E>set</span>(<span style=color:#FFF066>\"Content-Encoding\"</span>, <span style=color:#FFF066>\"gzip\"</span>);\n    <span style=color:#FFFFFF>ctx</span>.<span style=color:#FFFFFF>body</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>ctx</span>.<span style=color:#FFFFFF>body</span>.<span style=color:#A6E22E>pipe</span>(\n      <span style=color:#FFFFFF>zlib</span>.<span style=color:#A6E22E>createGzip</span>({ flush: <span style=color:#FFFFFF>zlib</span>.<span style=color:#FFFFFF>constants</span>.<span style=color:#FFFFFF>Z_PARTIAL_FLUSH</span> })\n    );\n  }\n});\n\n<span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>listen</span>(<span style=color:#AE81FF>8080</span>);\n</pre>");
}, {
  t: koa_marko_componentType,
  i: true
}, koa_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/lasso.md
const lasso_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const lasso = (lasso_marko_template);

toc_registry.set("../../node_modules/marko/docs/lasso.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#registering-the-plugin\">Registering the plugin</a></li><li><a href=\"#lasso-custom-tags\">Lasso custom tags</a></li><li><a href=\"#client-side-rendering\">Client-side rendering</a></li><li><a href=\"#server-side-rendering\">Server-side rendering</a></li><li><a href=\"#browser-refresh\">Browser refresh</a></li><li><a href=\"#lasso-package-types-commonly-used-with-marko\">Lasso package types commonly used with Marko</a><ul class=\"toc toc-level2\"><li><ul class=\"toc toc-level3\"><li><a href=\"#marko-dependencies-provided-by-lasso-marko\">marko-dependencies <em>()</em></a></li><li><a href=\"#marko-hydrate-provided-by-lasso-marko\">marko-hydrate <em>()</em></a></li><li><a href=\"#package\">package</a></li><li><a href=\"#require\">require</a></li><li><a href=\"#require-and-run\">require and run</a></li></ul></li></ul></li></ul>");




const lasso_marko_componentType = "JmwluJsV",
      lasso_marko_component = {};
lasso_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=marko-lasso><a name=marko-lasso class=anchor href=#marko-lasso><span class=header-link></span></a>Marko + Lasso</h1><p>The <a href=https://github.com/lasso-js/lasso-marko>lasso-marko</a> plugin for <a href=https://github.com/lasso-js/lasso>Lasso.js</a> will automatically compile all imported Marko templates during bundling. In addition, the <code>lasso-marko</code> plugin will automatically bundle any template dependencies (including required CSS).</p><p>Lasso.js provides Marko custom tags for injecting JavaScript and CSS bundles, images and other resources.</p><p>The sample <a href=https://github.com/marko-js/examples/tree/master/examples/lasso-express>lasso-express</a> app demonstrates how to build a production-ready web application using Marko and Lasso. Run <code>npx @marko/create --template lasso-express</code> to use this sample as a starting point for a new app.</p><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install lasso-marko --save\n</pre><h2 id=registering-the-plugin><a name=registering-the-plugin class=anchor href=#registering-the-plugin><span class=header-link></span></a>Registering the plugin</h2><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>'lasso'</span>).<span style=color:#A6E22E>configure</span>({\n    <span style=color:#FFF066>\"plugins\"</span>: [\n        <span style=color:#FF4185>...</span>\n        <span style=color:#FFF066>\"lasso-marko\"</span>\n    ]\n    <span style=color:#FF4185>...</span>\n});\n</pre><h2 id=lasso-custom-tags><a name=lasso-custom-tags class=anchor href=#lasso-custom-tags><span class=header-link></span></a>Lasso custom tags</h2><p>To inject the required JavaScript and CSS into the page you will want to use the <code>&lt;lasso-page&gt;</code>, <code>&lt;lasso-head&gt;</code> and <code>&lt;lasso-body&gt;</code> tags.</p><p>If you are using lasso@^3 (latest), make sure to install the <a href=https://github.com/lasso-js/lasso-marko-taglib>lasso-marko-taglib</a>, so that you can use the lasso custom tags.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install lasso-marko\nnpm install @lasso/marko-taglib\n</pre><p>After installing, the lasso custom tags can be used in your templates:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;!<span style=color:#FF4185>DOCTYPE</span> <span style=color:#A6E22E>html</span>>\n&lt;<span style=color:#FF4185>html</span> <span style=color:#A6E22E>lang</span>=<span style=color:#FFF066>\"en\"</span>>\n  &lt;<span style=color:#FF4185>head</span>>\n    &lt;<span style=color:#FF4185>meta</span> <span style=color:#A6E22E>charset</span>=<span style=color:#FFF066>\"UTF-8\"</span> />\n    &lt;<span style=color:#FF4185>title</span>>Marko + Lasso&lt;/<span style=color:#FF4185>title</span>>\n    &lt;<span style=color:#FF4185>lasso-head</span> />\n  &lt;/<span style=color:#FF4185>head</span>>\n  &lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>lasso-body</span> />\n  &lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre><p>Lasso.js will automatically bundle up transitive dependencies by building and walking a dependency graph.</p><h2 id=client-side-rendering><a name=client-side-rendering class=anchor href=#client-side-rendering><span class=header-link></span></a>Client-side rendering</h2><p>Marko templates can be imported and rendered by any JavaScript module. The code below shows how to render a top-level UI component and have it be mounted to the DOM as a child <code>document.body</code>:</p><div class=code-block-filename>client.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./components/app/index.marko\"</span>)\n  .<span style=color:#A6E22E>renderSync</span>({})\n  .<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n</pre><p>When Lasso.js bundles up the code above it will automatically bundle up the required <code>./components/app/index.marko</code> file.</p><h2 id=server-side-rendering><a name=server-side-rendering class=anchor href=#server-side-rendering><span class=header-link></span></a>Server-side rendering</h2><p>If you are rendering the initial UI on the server then it is necessary to make sure that all UI components are bundled and sent to the browser so that UI components can be mounted in the browser. For example:</p><div class=code-block-filename>about-me/index.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!DOCTYPE html></span>\n&lt;<span style=color:#FF4185>html</span> <span style=color:#A6E22E>lang</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"en\"</span>>\n    &lt;<span style=color:#FF4185>head</span>>\n        &lt;<span style=color:#FF4185>meta</span> <span style=color:#A6E22E>charset</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"UTF-8\"</span>>\n        &lt;<span style=color:#FF4185>title</span>><span style=color:#FFF066>Marko + Lasso</span>&lt;/<span style=color:#FF4185>title</span>>\n\n<span style=color:#8F8F9E>        &lt;!-- CSS will be inserted here --></span>\n        &lt;<span style=color:#FF4185>lasso-head</span>/>\n    &lt;/<span style=color:#FF4185>head</span>>\n    &lt;<span style=color:#FF4185>body</span>>\n<span style=color:#8F8F9E>        &lt;!-- Top-level UI component: --></span>\n        &lt;<span style=color:#FF4185>app</span>/>\n\n<span style=color:#8F8F9E>        &lt;!-- JS will be inserted here --></span>\n        &lt;<span style=color:#FF4185>lasso-body</span>/>\n    &lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!DOCTYPE html></span>\n<span style=color:#FF4185>html</span> <span style=color:#A6E22E>lang</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"en\"</span>\n    <span style=color:#FF4185>head</span>\n        <span style=color:#FF4185>meta</span> <span style=color:#A6E22E>charset</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"UTF-8\"</span>\n        <span style=color:#FF4185>title</span> --<span style=color:#FFF066> Marko + Lasso</span>\n        <span style=color:#8F8F9E>// CSS will be inserted here</span>\n        <span style=color:#FF4185>lasso-head</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#8F8F9E>// Top-level UI component:</span>\n        <span style=color:#FF4185>app</span>\n        <span style=color:#8F8F9E>// JS will be inserted here</span>\n        <span style=color:#FF4185>lasso-body</span>\n</pre>"
  }, out, _component, "42");

  out.w("<h2 id=browser-refresh><a name=browser-refresh class=anchor href=#browser-refresh><span class=header-link></span></a>Browser refresh</h2><p><a href=https://github.com/patrick-steele-idem/browser-refresh>browser-refresh</a> is recommended in development for instant page refreshes and hot reloading of Marko templates, styles and other resources. <code>browser-refresh</code> works well with Lasso and Marko and is very easy to use as a drop-in replacement for <code>node</code>:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>browser-refresh server.js\n</pre><h2 id=lasso-package-types-commonly-used-with-marko><a name=lasso-package-types-commonly-used-with-marko class=anchor href=#lasso-package-types-commonly-used-with-marko><span class=header-link></span></a>Lasso package types commonly used with Marko</h2><p>For many use cases, the combination of <code>lasso-marko</code> and <code>@lasso/marko-taglib</code> is sufficient to render and bundle components without the need for explicit <code>browser.json</code> files. For more advanced use cases, the following bundle types may be defined in a <code>browser.json</code> for Lasso.</p><h4 id=marko-dependencies-provided-by-lasso-marko><a name=marko-dependencies-provided-by-lasso-marko class=anchor href=#marko-dependencies-provided-by-lasso-marko><span class=header-link></span></a><code>marko-dependencies</code> <em>(provided by <code>lasso-marko</code>)</em></h4><p>Includes all the dependencies needed by template and the code to register all components that would be rendered by the template. It does not automatically initialize the component, so is most useful if you need to initialize components manually.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"marko-dependencies\"</span>,\n  <span style=color:#FFF066>\"path\"</span>: <span style=color:#FFF066>\"src/ui-modules/outdated-browser-banner/index.marko\"</span>\n}\n</pre><p><strong>Note:</strong> To initialize the server rendered components, there are 2 steps:</p><p><strong>Step 1:</strong> Manually <em>retrieve</em> server rendered components, shipped via <code>marko-dependencies</code>.</p><p>To retrieve the list of server rendered components, do:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>render</span>(<span style=color:#FFFFFF>data</span>, (<span style=color:#FFAC4D;font-style:italic>err</span>, <span style=color:#FFAC4D;font-style:italic>output</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>renderedComponentsList</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/components\"</span>).<span style=color:#A6E22E>getRenderedComponents</span>(\n    <span style=color:#FFFFFF>output</span>.<span style=color:#FFFFFF>out</span>\n  );\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>html</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>output</span>.<span style=color:#A6E22E>getOutput</span>();\n});\n<span style=color:#FFFFFF>res</span>.<span style=color:#A6E22E>json</span>({\n  <span style=color:#FFFFFF>renderedComponentsList</span>,\n  <span style=color:#FFFFFF>html</span>\n});\n</pre><p><strong>Step 2:</strong> Manually <em>initialize</em> server rendered components, shipped via <code>marko-dependencies</code>.</p><p>To initialize the list of server rendered components, do:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// from the response received, retrieve as</span>\n<span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/components\"</span>).<span style=color:#A6E22E>init</span>(<span style=color:#FFFFFF>response</span>.<span style=color:#FFFFFF>renderedComponentsList</span>);\n</pre><p><strong>Note:</strong> Ensure Step 2 is inside a DOM-ready wrapper, for the legacy widgets layer to load (if there are widgets built out of Marko 3, that is being used inside a Marko 4 component.)</p><h4 id=marko-hydrate-provided-by-lasso-marko><a name=marko-hydrate-provided-by-lasso-marko class=anchor href=#marko-hydrate-provided-by-lasso-marko><span class=header-link></span></a><code>marko-hydrate</code> <em>(provided by <code>lasso-marko</code>)</em></h4><p>Includes all the dependencies needed by template and the code to register all components that would be rendered by the template. This also includes the code to initialize the rendered components. Including this bundle on the page will automatically hydrate server rendered components.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"marko-hydrate\"</span>,\n  <span style=color:#FFF066>\"path\"</span>: <span style=color:#FFF066>\"src/ui-modules/outdated-browser-banner/index.marko\"</span>\n}\n</pre><p><strong>Note:</strong> <code>marko-hydrate</code> will initialize the component if its defined on the global <code>window.&#36;components</code> which is inserted by <code>Marko</code> when it sees a <code>&lt;body&gt;</code> tag. Else, if you are just rendering out and lasso-ing the a portion of a page with a set of components, include <code>&lt;init-components/&gt;</code> at the end of the associated <code>template.marko</code> file that builds out the page fragment.</p><h4 id=package><a name=package class=anchor href=#package><span class=header-link></span></a><code>package</code></h4><p>A collection of dependencies. <code>browser.json</code> is the most common package type. It could be used to point to another <code>browser.json</code> from within one component&#39;s <code>browser.json</code>. Typically also used when the dependencies of the referred <code>browser.json</code> have to be packaged inline.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"package\"</span>,\n  <span style=color:#FFF066>\"path\"</span>: <span style=color:#FFF066>\"src/ui-modules/show-diag/browser.json\"</span>\n}\n</pre><h4 id=require><a name=require class=anchor href=#require><span class=header-link></span></a><code>require</code></h4><p>If a javascript file has to be wrapped over for its common JS syntax, to a browser understandable format.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"require\"</span>,\n  <span style=color:#FFF066>\"path\"</span>: <span style=color:#FFF066>\"src/ui-modules/dynamic-module-loader/dynamic-init-client.js\"</span>\n}\n</pre><h4 id=require-and-run><a name=require-and-run class=anchor href=#require-and-run><span class=header-link></span></a><code>require</code> and <code>run</code></h4><p>If a javascript file has to be wrapped over for its common JS syntax, to a browser understandable format and be executed immediately.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"run\"</span>: <span style=color:#AE81FF>true</span>,\n  <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"require\"</span>,\n  <span style=color:#FFF066>\"path\"</span>: <span style=color:#FFF066>\"src/ui-modules/my-module/init.js\"</span>\n}\n</pre>");
}, {
  t: lasso_marko_componentType,
  i: true
}, lasso_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/marko-5-upgrade.md
const marko_5_upgrade_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const marko_5_upgrade = (marko_5_upgrade_marko_template);

toc_registry.set("../../node_modules/marko/docs/marko-5-upgrade.md", "<ul class=\"toc toc-level1\"><li><a href=\"#step-0-ensure-youre-in-a-working-state\">Step 0 - Ensure you&#39;re in a working state</a></li><li><a href=\"#step-1-upgrade-to-latest-4x\">Step 1 - Upgrade to latest 4.x</a></li><li><a href=\"#step-2-deal-with-deprecations\">Step 2 - Deal with deprecations</a></li><li><a href=\"#step-3-upgrade-dependencies\">Step 3 - Upgrade dependencies</a></li><li><a href=\"#step-4-upgrade-marko\">Step 4 - Upgrade marko</a></li></ul>");


const marko_5_upgrade_marko_componentType = "/ngz6Jyh",
      marko_5_upgrade_marko_component = {};
marko_5_upgrade_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=upgrading-to-marko-5><a name=upgrading-to-marko-5 class=anchor href=#upgrading-to-marko-5><span class=header-link></span></a>Upgrading to Marko 5</h1><p>The following guide will help you get through the upgrade process quickly and smoothly. This guide covers upgrading from Marko 4. If you are upgrading to Marko 5 from a previous version follow those docs first. After any given step you should have a working application.</p><p>This means you should complete a step and get it merged back into master fairly quickly. You shouldn&#39;t need to have a <code>marko-5-upgrade</code> branch for your project that lives in limbo for a couple of weeks falling behind the other changes that are being merged into master.</p><p>If you do decide to pause and later jump in where you left off, be sure to repeat Step 0 first \uD83D\uDE09.</p><h2 id=step-0-ensure-youre-in-a-working-state><a name=step-0-ensure-youre-in-a-working-state class=anchor href=#step-0-ensure-youre-in-a-working-state><span class=header-link></span></a>Step 0 - Ensure you&#39;re in a working state</h2><p>Run your application and tests to ensure your project is in a working state. There&#39;s little worse than finding an issue after you&#39;ve started the upgrade process only to figure out the issue existed beforehand.</p><h2 id=step-1-upgrade-to-latest-4x><a name=step-1-upgrade-to-latest-4x class=anchor href=#step-1-upgrade-to-latest-4x><span class=header-link></span></a>Step 1 - Upgrade to latest 4.x</h2><p>Before we start, you&#39;ll want to make sure that you are already on the latest <code>4.x</code> release of <code>marko</code>.</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install marko@^4\n</pre><p>or</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>yarn upgrade marko@^4\n</pre><blockquote class=null><p>Note: Do NOT run <code>npm install marko</code> (without the <code>@^4</code>). This will put you on Marko 5 and we&#39;re not quite there yet.</p></blockquote><h2 id=step-2-deal-with-deprecations><a name=step-2-deal-with-deprecations class=anchor href=#step-2-deal-with-deprecations><span class=header-link></span></a>Step 2 - Deal with deprecations</h2><p>Run your application and tests and ensure that there are no deprecation warnings logged to the console. If there are, you should follow the instructions in the deprecation messages to avoid the deprecated pattern and migrate to the recommended pattern.</p><p>Additionally, any deprecation warnings that start with <code>MIGRATION</code> are automatically migratable by <a href=https://github.com/marko-js/cli/blob/master/packages/migrate/README.md><code>marko migrate</code></a>. Most migrations are 100% safe and will run automatically. However, there are a few migrations which are considered unsafe: they may only get you 90% of the way there. These migrations will prompt and ask if you want to run the migration. It is highly recommended to run these only on a single component at a time and then finish the migration manually using the guide below so that your app is always in a working state.</p><h2 id=step-3-upgrade-dependencies><a name=step-3-upgrade-dependencies class=anchor href=#step-3-upgrade-dependencies><span class=header-link></span></a>Step 3 - Upgrade dependencies</h2><p>Before upgrading to Marko 5, it is recommended to make sure that your Marko-related dependencies are up-to-date. Many packages have versions that support both Marko 4 and Marko 5. If one of your dependencies doesn&#39;t have a version that supports both, you&#39;ll need to wait to upgrade it until you&#39;re upgrading Marko.</p><p>After upgrading, run your application and tests to ensure that everything is still working as intended. If there are any issues, please refer to the changelogs of the modules you just upgraded to see if you need to make any changes within your app to accommodate the new versions.</p><h2 id=step-4-upgrade-marko><a name=step-4-upgrade-marko class=anchor href=#step-4-upgrade-marko><span class=header-link></span></a>Step 4 - Upgrade marko</h2><p>Phew! With all the prep out of the way we&#39;re finally ready to upgrade <code>marko</code>!</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install marko@^5\n</pre><p>or</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>yarn upgrade marko@^5\n</pre><blockquote class=null><p><strong>Note</strong>: Marko 5 has changed to using ES Modules. This means if you are using CJS modules to <code>require</code> a Marko template you will need to use the default property exported.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./template.marko\"</span>);\n\n<span style=color:#8F8F9E>// Should become</span>\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./template.marko\"</span>).<span style=color:#FFFFFF>default</span>;\n\n<span style=color:#8F8F9E>// If you are already using es modules things remain the same</span>\n<span style=color:#FF4185>import</span> <span style=color:#FFFFFF>template</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"./template.marko\"</span>;\n</pre></blockquote>");
}, {
  t: marko_5_upgrade_marko_componentType,
  i: true
}, marko_5_upgrade_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/marko-json.md
const marko_json_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const marko_json = (marko_json_marko_template);

toc_registry.set("../../node_modules/marko/docs/marko-json.md", "<ul class=\"toc toc-level1\"><li><a href=\"#single-component-definition\">Single component definition</a><ul class=\"toc toc-level2\"><li><a href=\"#options\">Options</a></li><li><a href=\"#attributes\">Attributes</a></li><li><a href=\"#paths\">Paths</a></li></ul></li><li><a href=\"#tag-library-definition\">Tag library definition</a><ul class=\"toc toc-level2\"><li><a href=\"#options_1\">Options</a></li></ul></li><li><a href=\"#shorthands\">Shorthands</a></li></ul>");


const marko_json_marko_componentType = "L+j/Qhzy",
      marko_json_marko_component = {};
marko_json_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=markojson-marko-tagjson><a name=markojson-marko-tagjson class=anchor href=#markojson-marko-tagjson><span class=header-link></span></a><code>marko.json</code> &amp; <code>marko-tag.json</code></h1><p>Marko supports configuration files for validation, enabling experimental features, and custom paths for component files.</p><p>These configuration files are automatically found with <a href=/docs/custom-tags/#how-tags-are-discovered>the same discovery mechanism as custom tags</a>.</p><p>There are 2 types of configuration files:</p><ol><li><code>marko.json</code> describes an entire suite of components.</li><li><code>marko-tag.json</code> describes a single component.</li></ol><h2 id=single-component-definition><a name=single-component-definition class=anchor href=#single-component-definition><span class=header-link></span></a>Single component definition</h2><p><code>marko-tag.json</code> configures a single component. It\u2019s automatically discovered if placed inside a <a href=/docs/custom-tags/#tag-directories>tag directory</a>.</p><h3 id=options><a name=options class=anchor href=#options><span class=header-link></span></a>Options</h3><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"html\"</span>: <span style=color:#AE81FF>true</span>, <span style=color:#8F8F9E>// Treat as a native HTML tag, not a custom tag.</span>\n  <span style=color:#FFF066>\"htmlType\"</span>: <span style=color:#FFF066>\"svg\"</span>, <span style=color:#8F8F9E>// Optimizes for specific types of native tags (currently only `svg` and `html`).</span>\n  <span style=color:#FFF066>\"open-tag-only\"</span>: <span style=color:#AE81FF>true</span>, <span style=color:#8F8F9E>// Forbids passing body content to this tag.</span>\n  <span style=color:#FFF066>\"featureFlags\"</span>: [ <span style=color:#FFF066>\"feature-a\"</span> ], <span style=color:#8F8F9E>// Enable beta features by passing feature flags.</span>\n  <span style=color:#FFF066>\"nested-tags\"</span>: { <span style=color:#8F8F9E>// This section configures attribute tags.</span>\n    <span style=color:#FFF066>\"tab\"</span>: {\n      <span style=color:#FFF066>\"target-property\"</span>: <span style=color:#FFF066>\"tabs\"</span>, <span style=color:#8F8F9E>// Puts `&lt;@tab>` tags into `input.tabs`.</span>\n      <span style=color:#FFF066>\"is-repeated\"</span>: <span style=color:#AE81FF>true</span>,  <span style=color:#8F8F9E>// Allow more than one nested `&lt;@tab>`.</span>\n      <span style=color:#FFF066>\"attributes\"</span>: {\n        <span style=color:#8F8F9E>// Same as the \u201CAttributes\u201D section below.</span>\n      }\n    }\n  }\n}\n</pre><h3 id=attributes><a name=attributes class=anchor href=#attributes><span class=header-link></span></a>Attributes</h3><p>One commonly-used feature of this config file is compile-time checks for attributes.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"attributes\"</span>: {\n    <span style=color:#FFF066>\"heading\"</span>: <span style=color:#FFF066>\"string\"</span>\n  }\n}\n</pre><p>The above code ensures that the <code>heading</code> attribute is the <em>only</em> attribute supplied to this tag.</p><p>The <code>string</code> value is used as documentation for the custom tag. It may be picked up by tooling, like Marko\u2019s editor plugins, to provide hints to the user.</p><p>The recommended list of attribute types are as follows:</p><ul><li><code>expression</code> (any JavaScript expression)</li><li><code>string</code></li><li><code>number</code></li><li><code>boolean</code></li><li><code>regexp</code></li><li><code>date</code></li><li><code>object</code></li><li><code>array</code></li><li><code>function</code></li></ul><p>You can also provide an object for an attribute definition\u2019s value for additional options:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"attributes\"</span>: {\n    <span style=color:#FFF066>\"heading\"</span>: {\n      <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"string\"</span>, <span style=color:#8F8F9E>// Same as setting \"string\" above.</span>\n      <span style=color:#FFF066>\"default-value\"</span>: <span style=color:#AE81FF>0</span>, <span style=color:#8F8F9E>// The attribute will default to this value.</span>\n      <span style=color:#FFF066>\"required\"</span>: <span style=color:#AE81FF>true</span>, <span style=color:#8F8F9E>// Error during compilation if this attribute is undefined. (Mutually exclusive with \"default-value\"</span>\n      <span style=color:#FFF066>\"preserve-name\"</span>: <span style=color:#AE81FF>true</span>, <span style=color:#8F8F9E>// By default component attributes are camelCased; this disables that feature.</span>\n      <span style=color:#FFF066>\"remove-dashes\"</span>: <span style=color:#AE81FF>true</span>, <span style=color:#8F8F9E>// By default native tag attributes are dash-cased; this disables that feature.</span>\n\n      <span style=color:#8F8F9E>// The following attributes do nothing, but are picked up by tooling.</span>\n      <span style=color:#FFF066>\"deprecated\"</span>: <span style=color:#AE81FF>true</span>,\n      <span style=color:#FFF066>\"description\"</span>: <span style=color:#FFF066>\"The component\u2019s heading text\"</span> <span style=color:#8F8F9E>// Describes the attribute\u2019s purpose.</span>\n    }\n  }\n}\n</pre><p>We can also describe a <em>pattern</em> of attributes to match a definition:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n    <span style=color:#FFF066>\"attributes\"</span>: {\n        <span style=color:#FFF066>\"data-*\"</span>: {\n          <span style=color:#FFF066>\"type\"</span>: <span style=color:#FFF066>\"string\"</span>,\n          <span style=color:#FFF066>\"pattern\"</span>: <span style=color:#AE81FF>true</span>\n        }\n    }\n}\n</pre><p>In the above, all attributes prefixed with <code>data-</code> are configured to be a <code>string</code>.</p><blockquote class=note><p><strong>Note:</strong> Future Marko versions will describe these definitions/types in the component itself, reducing the need for this configuration file.</p></blockquote><h3 id=paths><a name=paths class=anchor href=#paths><span class=header-link></span></a>Paths</h3><p>There are several options that override the default discovery of component files, such as the template.</p><p>Typically, you should let Marko find these files automatically, but here is a reference in case you encounter these settings in the wild.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"template\"</span>: <span style=color:#FFF066>\"./template.marko\"</span>, <span style=color:#8F8F9E>// Custom path to the `.marko` template.</span>\n  <span style=color:#FFF066>\"renderer\"</span>: <span style=color:#FFF066>\"./renderer.js\"</span>, <span style=color:#8F8F9E>// Custom path to the `renderer.js` file.</span>\n\n  <span style=color:#8F8F9E>// Compiler file hooks</span>\n  <span style=color:#FFF066>\"parse\"</span>: <span style=color:#FFF066>\"./parse.js\"</span>, <span style=color:#8F8F9E>// Used to augment parsing.</span>\n  <span style=color:#FFF066>\"migrate\"</span>: <span style=color:#FFF066>\"./migrate.js\"</span>, <span style=color:#8F8F9E>// Used for migrating deprecated features.</span>\n  <span style=color:#FFF066>\"transform\"</span>: <span style=color:#FFF066>\"./transform.js\"</span>, <span style=color:#8F8F9E>// Used to modify the AST before generating it.</span>\n  <span style=color:#FFF066>\"translate\"</span>: <span style=color:#FFF066>\"./translate.js\"</span> <span style=color:#8F8F9E>// Used to generate custom JS.</span>\n}\n</pre><p>For more information about the compiler hooks <a href=/docs/compiler/#hooks>jump over here</a>.</p><h2 id=tag-library-definition><a name=tag-library-definition class=anchor href=#tag-library-definition><span class=header-link></span></a>Tag library definition</h2><p>Along with configuring a single component, you can use a <code>marko.json</code> file to configure an <em>entire library of components</em>.</p><p>Similar to <a href=#single-component-definition><code>marko-tag.json</code></a>, this file is discovered if placed within a <a href=/docs/custom-tags/#tag-directories>tag directory</a>. It will also be discovered at the root directory of a project, or <a href=/docs/custom-tags/#publishing-tags-to-npm>in a <code>node_module</code> package</a>.</p><h3 id=options_1><a name=options_1 class=anchor href=#options_1><span class=header-link></span></a>Options</h3><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"taglib-id\"</span>: <span style=color:#FFF066>\"my-custom-tag-library\"</span>, <span style=color:#8F8F9E>// Names the component library, for better errors.</span>\n  <span style=color:#FFF066>\"tags-dir\"</span>: <span style=color:#FFF066>\"./ui-modules\"</span>, <span style=color:#8F8F9E>// What directory to crawl to autodiscover components. Default:`./components/`</span>\n  <span style=color:#FFF066>\"taglib-imports\"</span>: [<span style=color:#FFF066>\"./some-folder/marko.json\"</span>, <span style=color:#FFF066>\"./other-folder/marko.json\"</span>], <span style=color:#8F8F9E>// Creates a _combined_ tag library by referencing others.</span>\n\n  <span style=color:#FFF066>\"tags\"</span>: { <span style=color:#8F8F9E>// Definitions for individial tags.</span>\n    <span style=color:#FFF066>\"my-tag\"</span>: {\n      <span style=color:#8F8F9E>// Same options as \u201Cmarko-tag.json\u201D.</span>\n    }\n  },\n\n  <span style=color:#FFF066>\"attributes\"</span>: {\n    <span style=color:#8F8F9E>// Defines attributes on all tags.</span>\n    <span style=color:#8F8F9E>// Options are the same as the \u201Cattributes\u201D section in \u201Cmarko-tag.json\u201D.</span>\n  },\n\n  <span style=color:#8F8F9E>// Compiler file hooks (run on all templates)</span>\n  <span style=color:#FFF066>\"migrator\"</span>: <span style=color:#FFF066>\"./migrator.js\"</span>, <span style=color:#8F8F9E>// Hooks into the migration stage for migrating deprecated features.</span>\n  <span style=color:#FFF066>\"transformer\"</span>: <span style=color:#FFF066>\"./transformer.js\"</span>, <span style=color:#8F8F9E>// Used to modify the AST before generating it.</span>\n  <span style=color:#FFF066>\"text-transformer\"</span>: <span style=color:#FFF066>\"./text-transformer.js\"</span>, <span style=color:#8F8F9E>// Used to transform all static text in the template.</span>\n}\n</pre><blockquote class=null><p><strong>\u26A0\uFE0F Note:</strong> Compiler hooks are currently undocumented: avoid using them. The compiler API is overhauled in Marko 5, and will be documented once that transition is complete.</p></blockquote><h2 id=shorthands><a name=shorthands class=anchor href=#shorthands><span class=header-link></span></a>Shorthands</h2><p>Both configuration files support <em>shorthands</em> for defining <code>tags</code> and <code>attributes</code>. For example, take this <code>marko.json</code> file:</p><div class=code-block-filename>marko.json</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"taglib-id\"</span>: <span style=color:#FFF066>\"my-custom-tag-library\"</span>,\n  <span style=color:#FFF066>\"tags\"</span>: {\n    <span style=color:#FFF066>\"my-layout\"</span>: {\n      <span style=color:#FFF066>\"attributes\"</span>: {\n        <span style=color:#FFF066>\"name\"</span>: <span style=color:#FFF066>\"string\"</span>,\n        <span style=color:#FFF066>\"age\"</span>: <span style=color:#FFF066>\"number\"</span>\n      },\n      <span style=color:#FFF066>\"nested-tags\"</span>: {\n        <span style=color:#FFF066>\"heading\"</span>: {\n          <span style=color:#FFF066>\"attributes\"</span>: {\n            <span style=color:#FFF066>\"color\"</span>: <span style=color:#FFF066>\"string\"</span>\n          }\n        },\n        <span style=color:#FFF066>\"body\"</span>: {\n          <span style=color:#FFF066>\"attributes\"</span>: {\n            <span style=color:#FFF066>\"color\"</span>: <span style=color:#FFF066>\"string\"</span>\n          }\n        }\n      }\n    }\n  }\n}\n</pre><p>As a shorthand, anywhere <code>tags</code> or <code>nested-tags</code> is used, you can remove the outer object and wrap the individual tags in <code>&lt;angle-brackets&gt;</code>.</p><p>For <code>attributes</code>, you can remove the outer object and prefix the attributes with an <code>@</code>.</p><p>The above example using the shorthand syntax would become:</p><div class=code-block-filename>marko.json</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"taglib-id\"</span>: <span style=color:#FFF066>\"my-custom-tag-library\"</span>,\n  <span style=color:#FFF066>\"&lt;my-layout>\"</span>: {\n    <span style=color:#FFF066>\"@name\"</span>: <span style=color:#FFF066>\"string\"</span>,\n    <span style=color:#FFF066>\"@age\"</span>: <span style=color:#FFF066>\"number\"</span>,\n    <span style=color:#FFF066>\"&lt;heading>\"</span>: {\n      <span style=color:#FFF066>\"@color\"</span>: <span style=color:#FFF066>\"string\"</span>\n    },\n    <span style=color:#FFF066>\"&lt;body>\"</span>: {\n      <span style=color:#FFF066>\"@color\"</span>: <span style=color:#FFF066>\"string\"</span>\n    }\n  }\n}\n</pre><p>For <code>nested-tags</code>, there is also a shorthand for <code>is-repeated</code> (a postfix of <code>[]</code>) and <code>target-property</code> (a prefix of <code>@newName</code>):</p><div class=code-block-filename>marko.json</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"&lt;my-layout>\"</span>: {\n    <span style=color:#FFF066>\"@sections &lt;section>[]\"</span>: {\n      <span style=color:#FFF066>\"@color\"</span>: <span style=color:#FFF066>\"string\"</span>\n    }\n  }\n}\n</pre><p>Is equivalent to:</p><div class=code-block-filename>marko.json</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n  <span style=color:#FFF066>\"tags\"</span>: {\n    <span style=color:#FFF066>\"my-layout\"</span>: {\n      <span style=color:#FFF066>\"nested-tags\"</span>: {\n        <span style=color:#FFF066>\"section\"</span>: {\n          <span style=color:#FFF066>\"target-property\"</span>: <span style=color:#FFF066>\"sections\"</span>,\n          <span style=color:#FFF066>\"is-repeated\"</span>: <span style=color:#AE81FF>true</span>,\n          <span style=color:#FFF066>\"attributes\"</span>: {\n            <span style=color:#FFF066>\"color\"</span>: <span style=color:#FFF066>\"string\"</span>\n          }\n        }\n      }\n    }\n  }\n}\n</pre>");
}, {
  t: marko_json_marko_componentType,
  i: true
}, marko_json_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/marko-vs-react.md
const marko_vs_react_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const marko_vs_react = (marko_vs_react_marko_template);

toc_registry.set("../../node_modules/marko/docs/marko-vs-react.md", "<ul class=\"toc toc-level1\"><li><ul class=\"toc toc-level2\"><li><a href=\"#example\">Example</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx\">React JSX</a></li><li><a href=\"#marko\">Marko</a></li></ul></li><li><a href=\"#similarities\">Similarities</a></li><li><a href=\"#differences\">Differences</a><ul class=\"toc toc-level3\"><li><a href=\"#differences-in-rendering\">Differences in rendering</a></li><li><a href=\"#differences-in-syntax\">Differences in syntax</a></li><li><a href=\"#differences-in-compilation\">Differences in compilation</a></li><li><a href=\"#differences-in-ui-components\">Differences in UI components</a></li><li><a href=\"#differences-in-event-systems\">Differences in event systems</a></li><li><a href=\"#differences-in-compatibility\">Differences in compatibility</a></li></ul></li><li><a href=\"#syntax\">Syntax</a></li><li><a href=\"#syntax-attributes\">Syntax: attributes</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_1\">React JSX</a></li><li><a href=\"#marko_1\">Marko</a></li></ul></li><li><a href=\"#syntax-inline-javascript\">Syntax: inline JavaScript</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_2\">React JSX</a></li><li><a href=\"#marko_2\">Marko</a></li></ul></li><li><a href=\"#syntax-html-support\">Syntax: HTML support</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_3\">React JSX</a></li><li><a href=\"#marko_3\">Marko</a></li></ul></li><li><a href=\"#syntax-conditionals\">Syntax: conditionals</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_4\">React JSX</a></li><li><a href=\"#marko_4\">Marko</a></li></ul></li><li><a href=\"#syntax-looping\">Syntax: looping</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_5\">React JSX</a></li><li><a href=\"#marko_5\">Marko</a></li></ul></li><li><a href=\"#syntax-html-shorthand\">Syntax: HTML shorthand</a></li><li><a href=\"#syntax-concise\">Syntax: concise</a><ul class=\"toc toc-level3\"><li><a href=\"#marko-html-syntax\">Marko HTML syntax</a></li><li><a href=\"#marko-concise-syntax\">Marko concise syntax</a></li><li><a href=\"#marko-mixed-syntax\">Marko mixed syntax</a></li><li><a href=\"#react-jsx_6\">React JSX</a></li></ul></li><li><a href=\"#components\">Components</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_7\">React JSX</a></li><li><a href=\"#marko_6\">Marko</a></li></ul></li><li><a href=\"#api\">API</a></li><li><a href=\"#custom-tags\">Custom tags</a><ul class=\"toc toc-level3\"><li><a href=\"#react-jsx_8\">React JSX</a></li><li><a href=\"#marko_7\">Marko</a></li></ul></li><li><a href=\"#async\">Async</a></li><li><a href=\"#compiler\">Compiler</a><ul class=\"toc toc-level3\"><li><a href=\"#compiled-for-the-server\">Compiled for the server:</a></li><li><a href=\"#compiled-for-the-browser\">Compiled for the browser:</a></li></ul></li><li><a href=\"#compile-time-code-transforms\">Compile-time code transforms</a></li><li><a href=\"#tools\">Tools</a><ul class=\"toc toc-level3\"><li><a href=\"#ide-and-editor-support\">IDE and editor support</a></li></ul></li><li><a href=\"#why-marko\">Why Marko?</a></li></ul></li></ul>");




const marko_vs_react_marko_componentType = "0ryaxSBU",
      marko_vs_react_marko_component = {};
marko_vs_react_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=marko-vs-react-an-in-depth-look><a name=marko-vs-react-an-in-depth-look class=anchor href=#marko-vs-react-an-in-depth-look><span class=header-link></span></a>Marko vs React: An In-depth Look</h1><a href=https://hackernoon.com/marko-vs-react-an-in-depth-look-767de0a5f9a6><img src=https://cdn-images-1.medium.com/max/2000/1*4BP6tPQtwImj6_QseeybwQ.png alt=\"Marko logo\" width=100%></a><br><blockquote class=null><p>This article was published March 2017. Both frameworks have gone through several updates since. You can find the original <a href=https://hackernoon.com/marko-vs-react-an-in-depth-look-767de0a5f9a6>&quot;Marko vs React: An In-depth Look&quot; article here</a>!</p></blockquote><p>In this article we will take an in-depth look at the differences and similarities between <a href=/ >Marko</a> and React from the perspective of the maintainers of Marko.</p><p>On the surface, Marko and React have a lot in common and both are trying to solve very similar problems. Specifically, both Marko and React allow developers to build web applications based on UI components and both free developers from having to write code to manually update the DOM. While many of the features in Marko were inspired by React, Marko and React offer very different usability and performance characteristics. Marko was designed to avoid almost all boilerplate and is more closely aligned with HTML. In almost all cases, a Marko UI component will require less lines of code than its React JSX equivalent while maintaining readability and allowing the same expressiveness as JSX. In addition, Marko is highly optimized for use on the server and in the browser and has a much smaller weight:</p><p><img src=https://cdn-images-1.medium.com/max/1600/1*a9hL_pfNrRq1UU3Mxkf3Jg.png alt=\"Marko logo\" width=100%><br></p><p>Because the Marko JavaScript library is much smaller than React, it will require less time to load and parse and this will drastically improve page load times on slow connections or on older devices. Based on <a href=/#benchmarks>our benchmarks</a>, Marko consistently outperforms React by a significant margin on both the server and in the browser.</p><h3 id=example><a name=example class=anchor href=#example><span class=header-link></span></a>Example</h3><p>The following code highlights some of the differences between Marko and React JSX using a somewhat contrived UI component as an example:</p><h4 id=react-jsx><a name=react-jsx class=anchor href=#react-jsx><span class=header-link></span></a>React JSX</h4><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> Counter <span style=color:#FF4185>extends</span> React.<span style=color:#A6E22E;font-style:italic;font-decoration:underline>Component</span> {\n  <span style=color:#66D9EF;font-style:italic>constructor</span>(<span style=color:#FFAC4D;font-style:italic>props</span>) {\n    <span style=color:#FFFFFF>super</span>(<span style=color:#FFFFFF>props</span>);\n\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n  }\n\n  <span style=color:#A6E22E>increment</span>(<span style=color:#FFAC4D;font-style:italic>delta</span>) {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setState</span>({ count: <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>delta</span> });\n  }\n\n  <span style=color:#A6E22E>render</span>() {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>;\n    <span style=color:#66D9EF;font-style:italic>let</span> <span style=color:#FFFFFF>countClassName</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"count\"</span>;\n\n    <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>0</span>) {\n      <span style=color:#FFFFFF>countClassName</span> <span style=color:#FFFFFF>+=</span> <span style=color:#FFF066>\" positive\"</span>;\n    } <span style=color:#FF4185>else</span> <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>) {\n      <span style=color:#FFFFFF>countClassName</span> <span style=color:#FFFFFF>+=</span> <span style=color:#FFF066>\" negative\"</span>;\n    }\n\n    <span style=color:#FF4185>return</span> (\n      <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span> <span style=color:#FFFFFF>className=</span><span style=color:#FFF066>\"click-count\"</span><span style=color:#FF4185>></span>\n        <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span> <span style=color:#FFFFFF>className=</span>{<span style=color:#FFFFFF>countClassName</span>}<span style=color:#FF4185>></span>{<span style=color:#FFFFFF>count</span>}<span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n        <span style=color:#FF4185>&lt;</span><span style=color:#FFAC4D;font-style:italic>button</span>\n          <span style=color:#FFFFFF>onClick=</span>{() => {\n            this.increment(-<span style=color:#AE81FF>1</span>);\n          }}\n        <span style=color:#FF4185>></span>\n          <span style=color:#FF4185>-</span><span style=color:#AE81FF>1</span>\n        <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>button</span><span style=color:#FF4185>></span>\n        <span style=color:#FF4185>&lt;</span><span style=color:#FFAC4D;font-style:italic>button</span>\n          <span style=color:#FFFFFF>onClick=</span>{() => {\n            this.increment(<span style=color:#AE81FF>1</span>);\n          }}\n        <span style=color:#FF4185>></span>\n          <span style=color:#FF4185>+</span><span style=color:#AE81FF>1</span>\n        <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>button</span><span style=color:#FF4185>></span>\n      <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n    );\n  }\n}\n</pre><p><span class=figcaption_hack><a href=http://codepen.io/mlrawlings/pen/wJXOWR?editors=0010>\u25B6 Try Online</a></span></p><h4 id=marko><a name=marko class=anchor href=#marko><span class=header-link></span></a>Marko</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onCreate</span>() {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n  }\n  <span style=color:#A6E22E>increment</span>(<span style=color:#FFAC4D;font-style:italic>delta</span>) {\n    <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>+=</span> <span style=color:#FFFFFF>delta</span>;\n  }\n}\n\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>;\n\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.click-count</span>>\n  &lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>{\n      positive: <span style=color:#FFFFFF>count</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>0</span>,\n      negative: <span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>\n    }>\n<span style=color:#FFF066>    </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n  &lt;/<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>, <span style=color:#FF4185>-</span><span style=color:#AE81FF>1</span>)>\n<span style=color:#FFF066>    -1</span>\n  &lt;/<span style=color:#FF4185>button</span>>\n  &lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>, <span style=color:#AE81FF>1</span>)>\n<span style=color:#FFF066>    +1</span>\n  &lt;/<span style=color:#FF4185>button</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n    }\n    <span style=color:#A6E22E>increment</span>(<span style=color:#FFAC4D;font-style:italic>delta</span>) {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>+=</span> <span style=color:#FFFFFF>delta</span>;\n    }\n}\n\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span>;\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.click-count</span>\n    <span style=color:#FF4185>div</span><span style=color:#A6E22E>.count</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>{\n        positive: <span style=color:#FFFFFF>count</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>0</span>,\n        negative: <span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>}</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n    <span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>, <span style=color:#FF4185>-</span><span style=color:#AE81FF>1</span>) --<span style=color:#FFF066> -1</span>\n    <span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>, <span style=color:#AE81FF>1</span>) --<span style=color:#FFF066> +1</span>\n</pre>"
  }, out, _component, "31");

  out.w("<p><span class=figcaption_hack><a href=/try-online/?gist=8fe46bc5866605aca0dfeec202604011>\u25B6 Try Online</a></span></p><h3 id=similarities><a name=similarities class=anchor href=#similarities><span class=header-link></span></a>Similarities</h3><p>Marko and React have the following in common:</p><ul><li>UI component-based</li><li>JavaScript and HTML markup can be intertwined</li><li>No restrictions on JavaScript (use ES5 or ES2015+, your choice)</li><li>Virtual DOM rendering in the browser</li><li>DOM diffing/patching is used to reconcile views</li><li>Both support keyed element matching</li><li>UI components can have input properties</li><li>UI components can have internal state</li><li>Changes to state trigger an asynchronous update to the DOM</li><li>Updates to the DOM are batched</li><li>Compatible with central application state stores such as Redux and MobX</li><li>UI components can be embedded using custom tags</li><li>Declarative event binding (no <code>domEl.addEventListener()</code> needed)</li><li>Support for all DOM events</li><li>Event delegation utilized internally for DOM events that bubble</li><li>IE9+ support</li><li>Similar lifecycle events for UI components</li><li>JSX and Marko both compile to JavaScript</li></ul><h3 id=differences><a name=differences class=anchor href=#differences><span class=header-link></span></a>Differences</h3><p>At a high level here are some differences:</p><h4 id=differences-in-rendering><a name=differences-in-rendering class=anchor href=#differences-in-rendering><span class=header-link></span></a>Differences in rendering</h4><ul><li><strong>Improved performance:</strong> Marko renders to a virtual DOM in the browser and directly to an HTML stream on the server (Marko supports multiple compilation targets).</li><li><strong>Improved performance:</strong> Marko supports asynchronous rendering with <a href=http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/ >early flushing of HTML</a> for improvements in actual and perceived page load times.</li><li><strong>Improved performance:</strong> React requires an additional client-side re-render if a page is initially rendered on the server while Marko does not.</li><li><strong>Improved ease of use:</strong> Marko automatically serializes UI component state and input down to the browser so that the browser can pick up right where the server left off.</li><li><strong>Improved ease of use:</strong> Marko is suitable for rendering an entire HTML page on the server with support for tags such as <code>&lt;doctype&gt;</code> and <code>&lt;html&gt;</code></li></ul><h4 id=differences-in-syntax><a name=differences-in-syntax class=anchor href=#differences-in-syntax><span class=header-link></span></a>Differences in syntax</h4><ul><li><strong>Improved ease of use:</strong> Marko uses the <a href=/docs/syntax/ >HTML-JS</a> syntax and the <a href=https://facebook.github.io/react/docs/jsx-in-depth.html>JSX</a> syntax is offered for React.</li><li><strong>Improved ease of use:</strong> Marko supports both a concise syntax and a familiar HTML syntax.</li><li><strong>Improved ease of use:</strong> JSX requires strict XML while Marko aligns with less strict HTML that web developers are used to.</li><li><strong>Improved ease of use:</strong> With Marko, <em>all</em> HTML attribute values are parsed as JavaScript expressions.</li><li><strong>Improved ease of use:</strong> Marko supports simple directives for conditionals, looping, etc.</li><li><strong>JSX limitation:</strong> JSX is \u201Cjust JavaScript\u201D but requires expressions that preclude the usage of JavaScript statements such as in certain places.</li></ul><h4 id=differences-in-compilation><a name=differences-in-compilation class=anchor href=#differences-in-compilation><span class=header-link></span></a>Differences in compilation</h4><ul><li><strong>Improved performance:</strong> Marko supports multiple compilation outputs (Marko VDOM and HTML streaming are currently supported).</li><li><strong>Improved ease of use:</strong> Marko compiles UI components to JavaScript modules that export a rendering API.</li><li><strong>Expanded capabilities:</strong> Marko supports a robust API for controlling how custom tags and custom attributes get compiled and it supports compile-time transforms based on a friendly Abstract Syntax Tree (AST).</li><li><strong>Improved performance:</strong> JSX is just syntactic sugar that translates elements to <code>createElement()</code> function calls while the Marko compiler has full control over how things are compiled and optimized.</li><li><strong>Improved ease of use:</strong> React requires all UI components to be explicitly imported before they can be used as custom tags while Marko supports both explicit importing and implicit importing.</li><li><strong>Improved performance:</strong> Marko has a modular runtime and the compiler generates code that only imports the parts of the Marko runtime that are needed for much smaller builds.</li><li><strong>Improved ease of use:</strong> Marko supports optional compile-time checks to ensure that only allowed attributes are passed to custom tags. (React <code>PropTypes</code> only provide validation at render-time)</li><li><strong>Improved ease of use:</strong> Marko validates <em>all</em> tag names at compile-time.</li><li><strong>Improved ease of use:</strong> Marko provides its own compiler that integrates with Node.js and JavaScript module bundlers while React JSX requires babel and custom babel transforms.</li></ul><h4 id=differences-in-ui-components><a name=differences-in-ui-components class=anchor href=#differences-in-ui-components><span class=header-link></span></a>Differences in UI components</h4><ul><li><strong>Reduced boilerplate:</strong> No explicit extending of JavaScript classes in Marko (in contrast to <code>class Counter extends React.Component</code> in React).</li><li><strong>Improved ease of use:</strong> Modifications to UI component state are synchronous with Marko while <a href=https://facebook.github.io/react/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous>the rules for React are more complicated</a>.</li><li><strong>Improved ease of use:</strong> Marko watches UI component state objects to allow state to be modified directly (e.g., <code>this.state.count++</code>).</li><li><strong>Improved ease of use:</strong> Marko supports single-file UI components combining JavaScript behavior, CSS styling (with support for CSS preprocessors) and HTML markup. (React requires using one of the many <a href=https://github.com/MicheleBertoli/css-in-js>CSS in JS solutions</a> if you want styles in the same file as your component and there is no standard in the community)</li><li><strong>Improved maintainability:</strong> Marko supports a seamless transition from a single-file UI component to a multi-file UI component.</li><li><strong>Improved performance:</strong> Marko assumes UI components are pure by default and skips re-rendering when input properties and state are unchanged (React requires extending <a href=https://facebook.github.io/react/docs/react-api.html#react.purecomponent>React.PureComponent</a>).</li></ul><h4 id=differences-in-event-systems><a name=differences-in-event-systems class=anchor href=#differences-in-event-systems><span class=header-link></span></a>Differences in event systems</h4><ul><li><strong>Reduced complexity:</strong> React utilizes <a href=https://facebook.github.io/react/docs/events.html>synthetic events</a> while Marko utilizes real DOM events.</li><li><strong>Improved ease of use:</strong> Custom events are emitted using the <a href=https://nodejs.org/api/events.html>EventEmitter API</a> in Marko (e.g., <code>this.emit(&#39;myCustomEvent&#39;, arg1, arg2)</code>).</li><li><strong>Improved ease of use:</strong> Marko has a consistent approach for listening to both native DOM events and custom events.</li><li><strong>Improved ease of use:</strong> React requires passing around <code>Function</code> references for custom events while Marko automatically delegates emitted custom events to event handler methods on components.</li><li><strong>Improved ease of use:</strong> Marko provides a simple mechanism for binding additional arguments to event handler methods and <code>this</code> will be the component instance.</li></ul><h4 id=differences-in-compatibility><a name=differences-in-compatibility class=anchor href=#differences-in-compatibility><span class=header-link></span></a>Differences in compatibility</h4><ul><li><strong>Marko limitation:</strong> Marko has no support for native mobile similar to React Native (although with Marko VDOM rendering, this is possible).</li><li><strong>Marko limitation:</strong> Marko requires a JavaScript module bundler (such as <a href=/docs/lasso/ >Lasso</a>, <a href=/docs/webpack/ >Webpack</a>, <a href=/docs/rollup/ >Rollup</a> since Marko UI components compile down to JavaScript modules. (we consider using a JavaScript module bundler a best practice)</li></ul><hr><p>In the sections below we will take a closer look at some of the differences between Marko and React.</p><h3 id=syntax><a name=syntax class=anchor href=#syntax><span class=header-link></span></a>Syntax</h3><p>Both Marko and React JSX allow HTML markup and JavaScript to be combined into a single file and both support building web applications based on UI components. Marko utilizes an <a href=/docs/syntax/ >HTML-JS syntax</a> while most React apps use the JSX syntax.</p><blockquote class=null><p>React JSX makes JavaScript more like HTML and Marko makes HTML more like JavaScript.</p></blockquote><p>In the end, both Marko and React allow JavaScript and HTML to be intertwined.</p><h3 id=syntax-attributes><a name=syntax-attributes class=anchor href=#syntax-attributes><span class=header-link></span></a>Syntax: attributes</h3><h4 id=react-jsx_1><a name=react-jsx_1 class=anchor href=#react-jsx_1><span class=header-link></span></a>React JSX</h4><p>In React JSX, all attribute values are parsed as string values unless <code>{}</code> is used.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>MyComponent</span>\n  <span style=color:#FFFFFF>name=</span><span style=color:#FFF066>\"Frank\"</span>\n  <span style=color:#FFFFFF>messageCount=</span>{<span style=color:#AE81FF>30</span>}\n  <span style=color:#FFFFFF>visible=</span>{<span style=color:#FFFFFF>true</span>}\n  <span style=color:#FFFFFF>person=</span>{{ firstName: <span style=color:#FFF066>'John'</span>, lastName: <span style=color:#FFF066>'Doe'</span> }}\n  <span style=color:#FFFFFF>colors=</span>{[<span style=color:#FFF066>'red'</span>, <span style=color:#FFF066>'green'</span>, <span style=color:#FFF066>'blue'</span>]} />\n\n&lt;div id=\"content\" className=\"foo\">Hello&lt;/div>\n</pre><h4 id=marko_1><a name=marko_1 class=anchor href=#marko_1><span class=header-link></span></a>Marko</h4><p>With Marko, <em>all</em> attribute values are parsed as JavaScript expressions. The following Marko code is equivalent to the React JSX code above:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>my-component</span>\n  <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Frank\"</span>\n  <span style=color:#A6E22E>message-count</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>30</span>\n  <span style=color:#A6E22E>visible</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n  <span style=color:#A6E22E>person</span><span style=color:#FFFFFF>=</span>{ firstName: <span style=color:#FFF066>'John'</span>, lastName: <span style=color:#FFF066>'Doe'</span> }\n  <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>'red'</span>, <span style=color:#FFF066>'green'</span>, <span style=color:#FFF066>'blue'</span>] />\n\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"content\"</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"foo\"</span>><span style=color:#FFF066>Hello</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>my-component</span> [\n    <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Frank\"</span>\n    <span style=color:#A6E22E>message-count</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>30</span>\n    <span style=color:#A6E22E>visible</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n    <span style=color:#A6E22E>person</span><span style=color:#FFFFFF>=</span>{\n        firstName: <span style=color:#FFF066>\"John\"</span>,\n        lastName: <span style=color:#FFF066>\"Doe\"</span>\n    }\n    <span style=color:#A6E22E>colors</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>\"red\"</span>, <span style=color:#FFF066>\"green\"</span>, <span style=color:#FFF066>\"blue\"</span>]\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"content\"</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"foo\"</span> --<span style=color:#FFF066> Hello</span>\n</pre>"
  }, out, _component, "198");

  out.w("<h3 id=syntax-inline-javascript><a name=syntax-inline-javascript class=anchor href=#syntax-inline-javascript><span class=header-link></span></a>Syntax: inline JavaScript</h3><h4 id=react-jsx_2><a name=react-jsx_2 class=anchor href=#react-jsx_2><span class=header-link></span></a>React JSX</h4><p>React JSX starts with JavaScript and allows XML elements to be inlined as shown below:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> { <span style=color:#FFFFFF>formatDate</span> } <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"./util\"</span>;\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>formatName</span>(<span style=color:#FFAC4D;font-style:italic>person</span>) {\n  <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>firstName</span> <span style=color:#FF4185>+</span> <span style=color:#FFF066>\" \"</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>lastName</span>.<span style=color:#A6E22E>charAt</span>(<span style=color:#AE81FF>0</span>) <span style=color:#FF4185>+</span> <span style=color:#FFF066>\".\"</span>;\n}\n\n<span style=color:#FF4185>export</span> <span style=color:#FF4185>default</span> <span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>HelloMessage</span>(<span style=color:#FFAC4D;font-style:italic>props</span>) {\n  <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>props</span>.<span style=color:#FFFFFF>person</span>;\n\n  <span style=color:#FF4185>return</span> (\n    <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n      <span style=color:#FFFFFF>Hello</span> {<span style=color:#FFAC4D;font-style:italic>formatName</span>(<span style=color:#FFAC4D;font-style:italic>person</span>)}<span style=color:#FF4185>!</span>\n      <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>span</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>You</span> <span style=color:#FFFFFF>were</span> <span style=color:#FFFFFF>born</span> <span style=color:#FFFFFF>on</span> {<span style=color:#FFAC4D;font-style:italic>formatDate</span>(<span style=color:#FFAC4D;font-style:italic>person</span>.<span style=color:#FFAC4D;font-style:italic>birthday</span>)}.<span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>span</span><span style=color:#FF4185>></span>\n    <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n  );\n}\n</pre><h4 id=marko_2><a name=marko_2 class=anchor href=#marko_2><span class=header-link></span></a>Marko</h4><p>Marko starts out in HTML, but it allows JavaScript to be inlined in a clean and maintainable way. Unlike other template languages, Marko aims to allow the full power of JavaScript. The following Marko code is equivalent to the React JSX code above:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> { <span style=color:#FFFFFF>formatDate</span> } <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./util'</span>;\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>formatName</span>(<span style=color:#FFAC4D;font-style:italic>person</span>) {\n    <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>firstName</span> <span style=color:#FF4185>+</span> <span style=color:#FFF066>' '</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>lastName</span>.<span style=color:#A6E22E>charAt</span>(<span style=color:#AE81FF>0</span>) <span style=color:#FF4185>+</span> <span style=color:#FFF066>'.'</span>;\n}\n\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>person</span>;\n\n&lt;<span style=color:#FF4185>div</span>>\n<span style=color:#FFF066>    Hello </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>formatName</span>(<span style=color:#FFFFFF>person</span>)<span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n    &lt;<span style=color:#FF4185>span</span>>\n<span style=color:#FFF066>      You were born on </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>formatDate</span>(<span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>birthday</span>)<span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n    &lt;/<span style=color:#FF4185>span</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> { <span style=color:#FFFFFF>formatDate</span> } <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./util'</span>\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>formatName</span>(<span style=color:#FFAC4D;font-style:italic>person</span>) {\n    <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>firstName</span> <span style=color:#FF4185>+</span> <span style=color:#FFF066>\" \"</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>lastName</span>.<span style=color:#A6E22E>charAt</span>(<span style=color:#AE81FF>0</span>) <span style=color:#FF4185>+</span> <span style=color:#FFF066>\".\"</span>;\n}\n\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>person</span>;\n<span style=color:#FF4185>div</span>\n    ---\n<span style=color:#FFF066>    Hello </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>formatName</span>(<span style=color:#FFFFFF>person</span>)<span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n    &lt;<span style=color:#FF4185>span</span>><span style=color:#FFF066>You were born on </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>formatDate</span>(<span style=color:#FFFFFF>person</span>.<span style=color:#FFFFFF>birthday</span>)<span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>&lt;/<span style=color:#FF4185>span</span>>\n<span style=color:#FFF066>    </span>---\n</pre>"
  }, out, _component, "210");

  out.w("<p>Lines prefixed with <code>&#36;</code> are directly added to the compiled JavaScript output inside the compiled <code>render()</code> function (for JavaScript code that should run for every render). Lines prefixed with <code>static</code> are directly added to the compiled JavaScript output outside the <code>render()</code> function (for code that should only run <em>once</em> when the template is loaded).</p><h3 id=syntax-html-support><a name=syntax-html-support class=anchor href=#syntax-html-support><span class=header-link></span></a>Syntax: HTML support</h3><p>With Marko any valid HTML markup can be used inside a Marko template. This is not the case with React. The following quote is from the <a href=https://facebook.github.io/react/docs/introducing-jsx.html#specifying-children-with-jsx>React documentation</a>:</p><blockquote class=caveat><p><strong>Caveat:</strong></p></blockquote><blockquote class=null><p>Since JSX is closer to JavaScript than HTML, React DOM uses <code>camelCase</code> property naming convention instead of HTML attribute names.</p></blockquote><blockquote class=null><p>For example, <code>class</code> becomes <code>className</code> in JSX, and <code>tabindex</code> becomes <code>tabIndex</code>.</p></blockquote><p>As a result of this caveat for React, <a href=http://magic.reactjs.net/htmltojsx.htm>tools for converting HTML to JSX exist</a>.</p><h4 id=react-jsx_3><a name=react-jsx_3 class=anchor href=#react-jsx_3><span class=header-link></span></a>React JSX</h4><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span> <span style=color:#FFFFFF>id=</span><span style=color:#FFF066>\"content\"</span> <span style=color:#FFFFFF>className=</span><span style=color:#FFF066>\"my-component\"</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Hello</span><span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n\n<span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>input</span> <span style=color:#FFFFFF>type=</span><span style=color:#FFF066>\"text\"</span> <span style=color:#FFFFFF>name=</span><span style=color:#FFF066>\"firstName\"</span> <span style=color:#FFFFFF>value=</span><span style=color:#FFF066>\"John\"</span> <span style=color:#FF4185>/></span>\n</pre><h4 id=marko_3><a name=marko_3 class=anchor href=#marko_3><span class=header-link></span></a>Marko</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"content\"</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"my-component\"</span>><span style=color:#FFF066>Hello</span>&lt;/<span style=color:#FF4185>div</span>>\n\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"text\"</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"firstName\"</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"John\"</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"content\"</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"my-component\"</span> --<span style=color:#FFF066> Hello</span>\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"text\"</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"firstName\"</span> <span style=color:#A6E22E>value</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"John\"</span>\n</pre>"
  }, out, _component, "242");

  out.w("<h3 id=syntax-conditionals><a name=syntax-conditionals class=anchor href=#syntax-conditionals><span class=header-link></span></a>Syntax: conditionals</h3><p>JSX is syntactic sugar on top of JavaScript, but it requires expressions, so simple things like an <code>if/else/for</code> statement don\u2019t work on their own within a JSX element. As a result, you must either use a ternary expression, an immediately invoked function expression, function call expression, or the experimental <code>do {}</code> expression (stage 0 at the time of writing). This is not an issue for Marko, and tags such as <code>if()</code> and <code>for</code> can be used anywhere as shown below:</p><h4 id=react-jsx_4><a name=react-jsx_4 class=anchor href=#react-jsx_4><span class=header-link></span></a>React JSX</h4><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>counterMessage</span>(<span style=color:#FFAC4D;font-style:italic>count</span>) {\n  <span style=color:#FF4185>return</span> (\n    <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span> <span style=color:#FFFFFF>className=</span><span style=color:#FFF066>\"counter-message\"</span><span style=color:#FF4185>></span>\n      (<span style=color:#66D9EF;font-style:italic>function</span>() {\n        <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>) {\n          <span style=color:#FF4185>return</span> <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Count</span> <span style=color:#FFFFFF>is</span> <span style=color:#FFFFFF>negative</span><span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n        } <span style=color:#FF4185>else</span> <span style=color:#FF4185>if</span> (<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>0</span>) {\n          <span style=color:#FF4185>return</span> <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Count</span> <span style=color:#FFFFFF>is</span> <span style=color:#FFFFFF>zero</span><span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n        } <span style=color:#FF4185>else</span> {\n          <span style=color:#FF4185>return</span> <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Count</span> <span style=color:#FFFFFF>is</span> <span style=color:#FFFFFF>positive</span><span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n        }\n      }())\n    <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n  )\n}\n</pre><h4 id=marko_4><a name=marko_4 class=anchor href=#marko_4><span class=header-link></span></a>Marko</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.counter-message</span>>\n  &lt;<span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>)>\n    &lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Count is negative</span>&lt;/<span style=color:#FF4185>div</span>>\n  &lt;/<span style=color:#66D9EF>if</span>>\n  &lt;<span style=color:#66D9EF>else</span> <span style=color:#A6E22E>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>0</span>)>\n    &lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Count is zero</span>&lt;/<span style=color:#FF4185>div</span>>\n  &lt;/<span style=color:#66D9EF>else</span>>\n  &lt;<span style=color:#66D9EF>else</span>>\n    &lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Count is positive</span>&lt;/<span style=color:#FF4185>div</span>>\n  &lt;/<span style=color:#66D9EF>else</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span><span style=color:#A6E22E>.counter-message</span>\n    <span style=color:#66D9EF>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>)\n        <span style=color:#FF4185>div</span> --<span style=color:#FFF066> Count is negative</span>\n    <span style=color:#66D9EF>else</span> <span style=color:#A6E22E>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>0</span>)\n        <span style=color:#FF4185>div</span> --<span style=color:#FFF066> Count is zero</span>\n    <span style=color:#66D9EF>else</span>\n        <span style=color:#FF4185>div</span> --<span style=color:#FFF066> Count is positive</span>\n</pre>"
  }, out, _component, "257");

  out.w("<p>Marko also allows directives to be used as attributes for a more condensed template:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.counter-message</span>>\n  &lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>)><span style=color:#FFF066>Count is negative</span>&lt;/<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>0</span>)><span style=color:#FFF066>Count is zero</span>&lt;/<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>else</span>><span style=color:#FFF066>Count is positive</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span><span style=color:#A6E22E>.counter-message</span>\n    <span style=color:#FF4185>div</span> <span style=color:#A6E22E>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>&lt;</span> <span style=color:#AE81FF>0</span>) --<span style=color:#FFF066> Count is negative</span>\n    <span style=color:#FF4185>div</span> <span style=color:#A6E22E>if</span>(<span style=color:#FFFFFF>count</span> <span style=color:#FF4185>===</span> <span style=color:#AE81FF>0</span>) --<span style=color:#FFF066> Count is zero</span>\n    <span style=color:#FF4185>div</span> <span style=color:#A6E22E>else</span> --<span style=color:#FFF066> Count is positive</span>\n</pre>"
  }, out, _component, "259");

  out.w("<h3 id=syntax-looping><a name=syntax-looping class=anchor href=#syntax-looping><span class=header-link></span></a>Syntax: looping</h3><h4 id=react-jsx_5><a name=react-jsx_5 class=anchor href=#react-jsx_5><span class=header-link></span></a>React JSX</h4><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>renderColors</span>(<span style=color:#FFAC4D;font-style:italic>colors</span>) {\n  <span style=color:#FF4185>return</span> (\n    <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>ul</span><span style=color:#FF4185>></span>\n      {<span style=color:#FFAC4D;font-style:italic>colors</span>.<span style=color:#FFAC4D;font-style:italic>map</span>(<span style=color:#FFAC4D;font-style:italic>color</span> <span style=color:#FFFFFF>=</span><span style=color:#FF4185>></span> (\n        <span style=color:#FF4185>&lt;</span><span style=color:#FFAC4D;font-style:italic>li</span>\n          <span style=color:#FFFFFF>className=</span><span style=color:#FFF066>\"color\"</span>\n          <span style=color:#FFFFFF>style=</span>{{\n            backgroundColor: <span style=color:#FFFFFF>color</span>\n          }}\n        <span style=color:#FF4185>></span>\n          {<span style=color:#FFAC4D;font-style:italic>color</span>}\n        <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>li</span><span style=color:#FF4185>></span>\n      ))}\n    <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>ul</span><span style=color:#FF4185>></span>\n  );\n}\n</pre><h4 id=marko_5><a name=marko_5 class=anchor href=#marko_5><span class=header-link></span></a>Marko</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ul</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>>\n    &lt;<span style=color:#FF4185>li</span><span style=color:#A6E22E>.color</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{ backgroundColor: <span style=color:#FFFFFF>color</span> }>\n<span style=color:#FFF066>        </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span><span style=color:#A6E22E>.color</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n            backgroundColor: <span style=color:#FFFFFF>color</span>\n        <span style=color:#F8F8F0;background-color:#FF4185>}</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "269");

  out.w("<h3 id=syntax-html-shorthand><a name=syntax-html-shorthand class=anchor href=#syntax-html-shorthand><span class=header-link></span></a>Syntax: HTML shorthand</h3>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"content\"</span>/>\n&lt;<span style=color:#FF4185>h1</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"subheader\"</span>/>\n&lt;<span style=color:#FF4185>h1</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"pageTitle\"</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"foo bar\"</span>/>\n\n<span style=color:#8F8F9E>&lt;!-- Shorthand equivalent: --></span>\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>#content</span>/>\n&lt;<span style=color:#FF4185>h1</span><span style=color:#A6E22E>.subheader</span>/>\n&lt;<span style=color:#FF4185>h1</span><span style=color:#A6E22E>#pageTitle.foo.bar</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"content\"</span>\n<span style=color:#FF4185>h1</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"subheader\"</span>\n<span style=color:#FF4185>h1</span> <span style=color:#A6E22E>id</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"pageTitle\"</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"foo bar\"</span>\n<span style=color:#8F8F9E>// Shorthand equivalent:</span>\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>#content</span>\n<span style=color:#FF4185>h1</span><span style=color:#A6E22E>.subheader</span>\n<span style=color:#FF4185>h1</span><span style=color:#A6E22E>#pageTitle.foo.bar</span>\n</pre>"
  }, out, _component, "273");

  out.w("<p>Marko supports a shorthand based on CSS selectors for less code.</p><p>React does not support these helpful shorthands.</p><h3 id=syntax-concise><a name=syntax-concise class=anchor href=#syntax-concise><span class=header-link></span></a>Syntax: concise</h3><p>Marko supports a concise syntax that drops angled brackets and ending tags in favor of indentation. Here\u2019s how the Marko syntax options compare:</p><h4 id=marko-html-syntax><a name=marko-html-syntax class=anchor href=#marko-html-syntax><span class=header-link></span></a>Marko HTML syntax</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>ul</span>>\n  &lt;<span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>>\n    &lt;<span style=color:#FF4185>li</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n  &lt;/<span style=color:#66D9EF>for</span>>\n&lt;/<span style=color:#FF4185>ul</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "283");

  out.w("<h4 id=marko-concise-syntax><a name=marko-concise-syntax class=anchor href=#marko-concise-syntax><span class=header-link></span></a>Marko concise syntax</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n  <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n    <span style=color:#FF4185>li</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "287");

  out.w("<h4 id=marko-mixed-syntax><a name=marko-mixed-syntax class=anchor href=#marko-mixed-syntax><span class=header-link></span></a>Marko mixed syntax</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n  <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n    &lt;<span style=color:#FF4185>li</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>li</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>ul</span>\n    <span style=color:#66D9EF>for</span>|<span style=color:#FFAC4D;font-style:italic>color</span>| <span style=color:#A6E22E>of</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>colors</span>\n        <span style=color:#FF4185>li</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>color</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "291");

  out.w("<p>The HTML syntax and the concise syntax can be used together:</p><h4 id=react-jsx_6><a name=react-jsx_6 class=anchor href=#react-jsx_6><span class=header-link></span></a>React JSX</h4><p>React does not offer a concise syntax.</p><h3 id=components><a name=components class=anchor href=#components><span class=header-link></span></a>Components</h3><p>Marko starts with simple HTML and allows UI component logic to easily be layered on top.</p><h4 id=react-jsx_7><a name=react-jsx_7 class=anchor href=#react-jsx_7><span class=header-link></span></a>React JSX</h4><p>A React UI component is typically implemented as a class that extends <code>ReactComponent</code>:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> HelloMessage <span style=color:#FF4185>extends</span> React.<span style=color:#A6E22E;font-style:italic;font-decoration:underline>Component</span> {\n  <span style=color:#A6E22E>render</span>() {\n    <span style=color:#FF4185>return</span> <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Hello</span> {this.props.name.toUpperCase()}<span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>;\n  }\n}\n</pre><p>React also supports a more concise functional component:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>HelloMessage</span>(<span style=color:#FFAC4D;font-style:italic>props</span>) {\n  <span style=color:#FF4185>return</span> <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Hello</span> {props.name.toUpperCase()}<span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>;\n}\n</pre><p>However, if state or lifecycle events are needed then a functional UI component must be converted to a class component:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> HelloMessage <span style=color:#FF4185>extends</span> React.<span style=color:#A6E22E;font-style:italic;font-decoration:underline>Component</span> {\n  <span style=color:#A6E22E>componentDidMount</span>() {\n    <span style=color:#8F8F9E>// ...</span>\n  }\n  <span style=color:#A6E22E>render</span>() {\n    <span style=color:#FF4185>return</span> <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span><span style=color:#FFFFFF>Hello</span> {this.props.name.toUpperCase()}<span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>;\n  }\n}\n</pre><h4 id=marko_6><a name=marko_6 class=anchor href=#marko_6><span class=header-link></span></a>Marko</h4><p>Here is the same component in Marko:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "312");

  out.w("<p>Behavior can easily be added to any Marko UI component:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onMount</span>() {\n    <span style=color:#8F8F9E>// ...</span>\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#8F8F9E>// ...</span>\n    }\n}\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "314");

  out.w("<p>Marko also allows JavaScript behavior, CSS styling and HTML markup to be embedded in the Marko template as a single file UI component:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onMount</span>() {\n    <span style=color:#8F8F9E>// ...</span>\n  }\n}\n\n<span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n  <span style=color:#A6E22E>.hello</span> {\n    <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>red</span>;\n  }\n}\n\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.hello</span>>\n<span style=color:#FFF066>  Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#8F8F9E>// ...</span>\n    }\n}\n\n<span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#A6E22E>.hello</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>red</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.hello</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "316");

  out.w("<h3 id=api><a name=api class=anchor href=#api><span class=header-link></span></a>API</h3><p>Marko compiles component to JavaScript modules that export an API for rendering the component as shown below:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./components/greeting\"</span>)\n  .<span style=color:#A6E22E>renderSync</span>({ name: <span style=color:#FFF066>\"Frank\"</span> })\n  .<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n</pre><p>The same UI component can be rendered to a stream such as a writable HTTP response stream:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./components/hello\"</span>).<span style=color:#A6E22E>render</span>({ name: <span style=color:#FFF066>\"John\"</span> }, <span style=color:#FFFFFF>res</span>);\n</pre><blockquote class=null><p>The user\u2019s of a Marko UI component do not need to know that the component was implemented using Marko.</p></blockquote><p>Contrast this with React as an example:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>ReactDOM</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"react-dom\"</span>;\n\n<span style=color:#FFFFFF>ReactDOM</span>.<span style=color:#A6E22E>render</span>(\n  <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>HelloMessage</span> <span style=color:#FFFFFF>name=</span><span style=color:#FFF066>\"John\"</span> <span style=color:#FF4185>/></span>,\n  <span style=color:#FFFFFF>document</span>.<span style=color:#A6E22E>getElementById</span>(<span style=color:#FFF066>\"container\"</span>)\n);\n</pre><p>On top of that, React requires that a different module be imported to render the exact same UI component on the server:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>ReactDOMServer</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"react-dom/server\"</span>;\n\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>html</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>ReactDOMServer</span>.<span style=color:#A6E22E>renderToString</span>(<span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>HelloMessage</span> <span style=color:#FFFFFF>name=</span><span style=color:#FFF066>\"John\"</span> <span style=color:#FF4185>/></span>);\n</pre><h3 id=custom-tags><a name=custom-tags class=anchor href=#custom-tags><span class=header-link></span></a>Custom tags</h3><h4 id=react-jsx_8><a name=react-jsx_8 class=anchor href=#react-jsx_8><span class=header-link></span></a>React JSX</h4><p>With React, all custom tags for UI components must be explicitly imported:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>Hello</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"./components/Hello\"</span>;\n<span style=color:#FF4185>import</span> <span style=color:#FFFFFF>GoodBye</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"./components/GoodBye\"</span>;\n\n<span style=color:#FF4185>export</span> <span style=color:#FF4185>default</span> <span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>HelloGoodBye</span>(<span style=color:#FFAC4D;font-style:italic>props</span>) {\n  <span style=color:#FF4185>return</span> (\n    <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n      <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>Hello</span> <span style=color:#FFFFFF>name=</span>{props.<span style=color:#FFFFFF>name</span>} <span style=color:#FF4185>/></span>\n      <span style=color:#FF4185>&lt;</span><span style=color:#FFFFFF>GoodBye</span> <span style=color:#FFFFFF>name=</span>{props.<span style=color:#FFFFFF>name</span>} <span style=color:#FF4185>/></span>\n    <span style=color:#FF4185>&lt;/</span><span style=color:#FFFFFF>div</span><span style=color:#FF4185>></span>\n  );\n}\n</pre><h4 id=marko_7><a name=marko_7 class=anchor href=#marko_7><span class=header-link></span></a>Marko</h4><p>Marko supports a mechanism for <a href=/docs/custom-tags/#discovering-tags>automatically discovering custom tags</a> for UI components based on the project directory structure. Marko walks up the directory tree to discover all directories and it will also automatically discover custom tags exported by installed packages. This approach negates the need for explicitly importing a custom tag to reduce the amount of code needed in a Marko template. For example given the following directory structure:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>.\n\u251C\u2500\u2500 components/\n\u2502   \u251C\u2500\u2500 hello.marko\n\u2502   \u2514\u2500\u2500 good-bye.marko\n\u2514\u2500\u2500 index.marko\n</pre><p>The <code>&lt;hello&gt;</code> tag and the <code>&lt;good-bye&gt;</code> tag nested below the <code>components/</code> directory will automatically be made available to the <code>index.marko</code> at the root:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n  &lt;<span style=color:#FF4185>hello</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span> />\n  &lt;<span style=color:#FF4185>good-bye</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span> />\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    <span style=color:#FF4185>hello</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>\n    <span style=color:#FF4185>good-bye</span> <span style=color:#A6E22E>name</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>\n</pre>"
  }, out, _component, "343");

  out.w("<p>This approach also allows editors and IDEs to offer autocompletion for custom tags.</p><h3 id=async><a name=async class=anchor href=#async><span class=header-link></span></a>Async</h3><p>Even after rendering has started, Marko allows parts of the view to be rendered asynchronously using the <a href=/docs/core-tags#await><code>&lt;await&gt;</code></a> tag as shown in the following Marko template:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>fsp</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'fs-promise'</span>;\n\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>filePath</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>__dirname</span> <span style=color:#FF4185>+</span> <span style=color:#FFF066>'/hello.txt'</span>;\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>readPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>fsp</span>.<span style=color:#A6E22E>readFile</span>(<span style=color:#FFFFFF>filePath</span>, {encoding: <span style=color:#FFF066>'utf8'</span>});\n\n&lt;<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>readPromise</span>)>\n  &lt;<span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>helloText</span>|>\n    &lt;<span style=color:#FF4185>p</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>helloText</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>p</span>>\n  &lt;/<span style=color:#A6E22E>@then</span>>\n&lt;/<span style=color:#66D9EF>await</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>fsp</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'fs-promise'</span>\n\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>filePath</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>__dirname</span> <span style=color:#FF4185>+</span> <span style=color:#FFF066>\"/hello.txt\"</span>;\n<span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>readPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>fsp</span>.<span style=color:#A6E22E>readFile</span>(<span style=color:#FFFFFF>filePath</span>, { encoding: <span style=color:#FFF066>\"utf8\"</span> });\n<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>readPromise</span>)\n    <span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>helloText</span>|\n        <span style=color:#FF4185>p</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>helloText</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "351");

  out.w("<h3 id=compiler><a name=compiler class=anchor href=#compiler><span class=header-link></span></a>Compiler</h3><p>Marko compiles a template differently based on whether or not it will be used on the server or in the browser. For example, given the following template:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "356");

  out.w("<h4 id=compiled-for-the-server><a name=compiled-for-the-server class=anchor href=#compiled-for-the-server><span class=header-link></span></a>Compiled for the server:</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>var</span> <span style=color:#A6E22E>marko_template</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>require</span>(<span style=color:#FFF066>\"marko/html\"</span>).<span style=color:#FFFFFF>t</span>(<span style=color:#FFFFFF>__filename</span>),\n    <span style=color:#A6E22E>marko_helpers</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>require</span>(<span style=color:#FFF066>\"marko/runtime/html/helpers\"</span>),\n    <span style=color:#A6E22E>marko_escapeXml</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>marko_helpers</span>.<span style=color:#FFFFFF>x</span><span style=color:#F8F8F0;background-color:#FF4185>;</span>\n\n<span style=color:#FF4185>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFFFFF>input</span>, <span style=color:#FFFFFF>out</span>) <span style=color:#F8F8F0;background-color:#FF4185>{</span>\n  <span style=color:#FF4185>out</span><span style=color:#A6E22E>.w</span>(<span style=color:#FFF066>\"&lt;div>Hello \"</span> <span style=color:#FF4185>+</span>\n    <span style=color:#A6E22E>marko_escapeXml</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>) <span style=color:#FF4185>+</span>\n    <span style=color:#FFF066>\"!&lt;/div>\"</span>)<span style=color:#F8F8F0;background-color:#FF4185>;</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>var</span> [\n    <span style=color:#A6E22E>marko_template</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>require</span>(<span style=color:#FFF066>\"marko/html\"</span>).<span style=color:#FFFFFF>t</span>(<span style=color:#FFFFFF>__filename</span>)\n    <span style=color:#A6E22E>marko_helpers</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>require</span>(<span style=color:#FFF066>\"marko/runtime/html/helpers\"</span>)\n    <span style=color:#A6E22E>marko_escapeXml</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>marko_helpers</span>.<span style=color:#FFFFFF>x</span>\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n<span style=color:#FF4185>function</span> [\n    <span style=color:#A6E22E>render</span>(<span style=color:#FFFFFF>input</span>, <span style=color:#FFFFFF>out</span>)\n    <span style=color:#F8F8F0;background-color:#FF4185>{</span>\n  <span style=color:#A6E22E>out</span><span style=color:#F8F8F0;background-color:#FF4185>.w(\"&lt;div>Hello</span> <span style=color:#F8F8F0;background-color:#FF4185>\"</span> <span style=color:#F8F8F0;background-color:#FF4185>+</span>\n    <span style=color:#A6E22E>marko_escapeXml</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>) <span style=color:#F8F8F0;background-color:#FF4185>+</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>\"!&lt;/div>\");</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "360");

  out.w("<h4 id=compiled-for-the-browser><a name=compiled-for-the-browser class=anchor href=#compiled-for-the-browser><span class=header-link></span></a>Compiled for the browser:</h4>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>var</span> <span style=color:#A6E22E>marko_template</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>require</span>(<span style=color:#FFF066>\"marko/vdom\"</span>).<span style=color:#FFFFFF>t</span>(<span style=color:#FFFFFF>__filename</span>)<span style=color:#F8F8F0;background-color:#FF4185>;</span>\n\n<span style=color:#FF4185>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFFFFF>input</span>, <span style=color:#FFFFFF>out</span>) <span style=color:#F8F8F0;background-color:#FF4185>{</span>\n  <span style=color:#FF4185>out</span><span style=color:#A6E22E>.e</span>(<span style=color:#FFF066>\"DIV\"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#AE81FF>3</span>)\n    <span style=color:#F8F8F0;background-color:#FF4185>.t(\"Hello</span> <span style=color:#F8F8F0;background-color:#FF4185>\")</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>.t(input.name)</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>.t(\"!\");</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>var</span> <span style=color:#A6E22E>marko_template</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>require</span>(<span style=color:#FFF066>\"marko/vdom\"</span>).<span style=color:#FFFFFF>t</span>(<span style=color:#FFFFFF>__filename</span>)\n<span style=color:#FF4185>function</span> [\n    <span style=color:#A6E22E>render</span>(<span style=color:#FFFFFF>input</span>, <span style=color:#FFFFFF>out</span>)\n    <span style=color:#F8F8F0;background-color:#FF4185>{</span>\n  <span style=color:#A6E22E>out</span><span style=color:#F8F8F0;background-color:#FF4185>.e(\"DIV\"</span>, <span style=color:#A6E22E>null</span>, <span style=color:#A6E22E>3</span><span style=color:#F8F8F0;background-color:#FF4185>)</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>.t(\"Hello</span> <span style=color:#F8F8F0;background-color:#FF4185>\")</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>.t(input.name)</span>\n    <span style=color:#F8F8F0;background-color:#FF4185>.t(\"!\");</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "364");

  out.w("<h3 id=compile-time-code-transforms><a name=compile-time-code-transforms class=anchor href=#compile-time-code-transforms><span class=header-link></span></a>Compile-time code transforms</h3><p>The Marko compiler was built to support compile-time code generators for custom tags and it also provides support for compile-time transforms. While Babel allows code transformations of JavaScript, the Marko compiler provides support for resolving custom tags declaratively and the Marko AST provides for very powerful and simple transformations as shown in the following code for rendering Markdown to HTML at <em>compile-time</em>:</p><p><strong>components/markdown/code-generator.js:</strong></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>marked</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"marked\"</span>;\n<span style=color:#FF4185>import</span> { <span style=color:#FFFFFF>removeIndentation</span> } <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"./util\"</span>;\n\n<span style=color:#FF4185>export</span> <span style=color:#FF4185>default</span> <span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>generateCode</span>(<span style=color:#FFAC4D;font-style:italic>el</span>, <span style=color:#FFAC4D;font-style:italic>codegen</span>) {\n  <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>bodyText</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>removeIndentation</span>(<span style=color:#FFFFFF>el</span>.<span style=color:#FFFFFF>bodyText</span>);\n  <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>html</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>marked</span>(<span style=color:#FFFFFF>bodyText</span>);\n  <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>builder</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>codegen</span>.<span style=color:#FFFFFF>builder</span>;\n  <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>builder</span>.<span style=color:#A6E22E>html</span>(<span style=color:#FFFFFF>builder</span>.<span style=color:#A6E22E>literal</span>(<span style=color:#FFFFFF>html</span>));\n}\n</pre><p>The <code>&lt;markdown&gt;</code> tag can then be used as shown below:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>markdown</span>>\n\n<span style=color:#FFF066>> This section demonstrates Markdown in Marko</span>\n\n<span style=color:#FFF066># Marko is awesome!</span>\n\n<span style=color:#FFF066>- High performance</span>\n<span style=color:#FFF066>- Small</span>\n<span style=color:#FFF066>- Intuitive</span>\n\n&lt;/<span style=color:#FF4185>markdown</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>markdown</span>\n    ---\n<span style=color:#FFF066>    > This section demonstrates Markdown in Marko</span>\n\n<span style=color:#FFF066>    # Marko is awesome!</span>\n\n<span style=color:#FFF066>    - High performance</span>\n<span style=color:#FFF066>    - Small</span>\n<span style=color:#FFF066>    - Intuitive</span>\n<span style=color:#FFF066>    </span>---\n</pre>"
  }, out, _component, "374");

  out.w("<p>In this example, after the template is compiled, the <a href=https://github.com/chjj/marked>marked</a> library is no longer needed at render-time.</p><h3 id=tools><a name=tools class=anchor href=#tools><span class=header-link></span></a>Tools</h3><p>Marko and React offer a variety of developer tools. The <a href=https://github.com/marko-js/marko-devtools>Marko developer tools</a> are constantly evolving, but Marko currently provides tools for unit testing UI components, precompiling <code>.marko</code> files and generating configuration-less apps (similar to <a href=https://github.com/facebookincubator/create-react-app>create-react-app</a>). Currently, there are no Marko developer tools that integrate with the browser, but this is something we would like to see in the future. We will go into more detail on the Marko developer tools in a future post.</p><h4 id=ide-and-editor-support><a name=ide-and-editor-support class=anchor href=#ide-and-editor-support><span class=header-link></span></a>IDE and editor support</h4><p>Marko offers syntax highlighting across all major IDEs and editors, as well as on GitHub. Marko provides first-class support for the Atom editor with syntax highlighting, <a href=https://github.com/marko-js/atom-language-marko#autocomplete>Autocomplete</a> for both HTML and custom tags, <a href=https://github.com/marko-js/atom-language-marko#hyperclick>Hyperclick</a> to quickly jump to referenced files and methods, and <a href=https://github.com/marko-js/atom-language-marko#prettyprint>Pretty printing</a> to keep your code readable.</p><hr><h3 id=why-marko><a name=why-marko class=anchor href=#why-marko><span class=header-link></span></a>Why Marko?</h3><p>Here are just a few reasons you should consider using <a href=/ >Marko</a> over React:</p><ul><li>Marko requires much less boilerplate.</li><li>Marko has much better performance based on our benchmarks.</li><li>Marko offers a clean and powerful syntax that aligns with HTML while also allowing the full power of JavaScript.</li><li>Marko has much less complexity and a very small runtime.</li><li>Marko has a much lower page weight for faster page loads.</li><li>Marko has strong integrations with Node.js.</li><li>Marko allows for extremely powerful IDE and editor plugins (see the <a href=https://github.com/marko-js/atom-language-marko>Marko plugin for Atom</a> as an example).</li><li>Marko has a powerful compiler that allows new features to be added without introducing bloat.</li><li>eBay relies heavily on Marko and it is being used to build ebay.com (including the mobile web).</li><li>Marko has a strong and growing community on <a href=https://github.com/marko-js/marko>GitHub</a> and in <a href=https://discord.gg/RFGxYGs>Discord</a>.</li></ul><p>Interested in learning more about Marko? If so, you can get additional information on the <a href=/ >Marko website</a>. Join the conversation and contribute on <a href=https://github.com/marko-js/marko>GitHub</a> and follow us on <a href=https://twitter.com/MarkoDevTeam>Twitter</a>.</p>");
}, {
  t: marko_vs_react_marko_componentType,
  i: true
}, marko_vs_react_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/redux.md
const redux_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const redux = (redux_marko_template);

toc_registry.set("../../node_modules/marko/docs/redux.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#usage\">Usage</a><ul class=\"toc toc-level2\"><li><a href=\"#countermarko\">counter.marko</a></li><li><a href=\"#reducerjs\">reducer.js</a></li><li><a href=\"#storejs\">store.js</a></li></ul></li></ul>");




const redux_marko_componentType = "q/mjxLoE",
      redux_marko_component = {};
redux_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=redux-marko><a name=redux-marko class=anchor href=#redux-marko><span class=header-link></span></a>Redux + Marko</h1><p>See the <a href=https://github.com/marko-js/examples/tree/master/examples/redux><code>marko-redux</code> sample project</a> for a fully-working example.</p><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><p>First, save the <a href=https://www.npmjs.com/package/marko><code>marko</code></a> and <a href=https://www.npmjs.com/package/redux><code>redux</code></a> packages to your project\u2019s dependencies:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm i marko redux\n</pre><h2 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h2><p>The partial code below shows how a Marko UI component can connect to a Redux store, using Redux\u2019s <code>store.subscribe()</code> method and Marko\u2019s <code>forceUpdate()</code> method:</p><h3 id=countermarko><a name=countermarko class=anchor href=#countermarko><span class=header-link></span></a><code>counter.marko</code></h3>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>store</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./store'</span>;\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n  <span style=color:#A6E22E>onMount</span> () {\n    <span style=color:#FFFFFF>store</span>.<span style=color:#A6E22E>subscribe</span>(() <span style=color:#66D9EF;font-style:italic>=></span> {\n      <span style=color:#8F8F9E>// Force this UI component to rerender</span>\n      <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>forceUpdate</span>();\n\n      <span style=color:#8F8F9E>// The UI component will rerender with the new</span>\n      <span style=color:#8F8F9E>// state returned by `store.getState()`</span>\n      <span style=color:#8F8F9E>//</span>\n      <span style=color:#8F8F9E>// You could also force an update like this:</span>\n      <span style=color:#8F8F9E>// this.input = store.getState();</span>\n    });\n  }\n}\n\n&lt;<span style=color:#FF4185>counter</span>(<span style=color:#FFFFFF>store</span>.<span style=color:#A6E22E>getState</span>()) />\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>store</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./store'</span>\n\n<span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onMount</span>() {\n        <span style=color:#FFFFFF>store</span>.<span style=color:#A6E22E>subscribe</span>(() <span style=color:#66D9EF;font-style:italic>=></span> {\n            <span style=color:#8F8F9E>// Force this UI component to rerender</span>\n            <span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>forceUpdate</span>();\n\n            <span style=color:#8F8F9E>// The UI component will rerender with the new</span>\n            <span style=color:#8F8F9E>// state returned by `store.getState()`</span>\n            <span style=color:#8F8F9E>//</span>\n            <span style=color:#8F8F9E>// You could also force an update like this:</span>\n            <span style=color:#8F8F9E>// this.input = store.getState();</span>\n        });\n    }\n}\n\n<span style=color:#FF4185>counter</span>(<span style=color:#FFFFFF>store</span>.<span style=color:#A6E22E>getState</span>())\n</pre>"
  }, out, _component, "25");

  out.w("<h3 id=reducerjs><a name=reducerjs class=anchor href=#reducerjs><span class=header-link></span></a><code>reducer.js</code></h3><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF;font-style:italic>function</span>(<span style=color:#FFAC4D;font-style:italic>state</span>, <span style=color:#FFAC4D;font-style:italic>action</span>) {\n  <span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>state</span> <span style=color:#FF4185>||</span> { value: <span style=color:#AE81FF>0</span> };\n\n  <span style=color:#8F8F9E>// Additional reducer logic here\u2026</span>\n\n  <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>state</span>;\n};\n</pre><h3 id=storejs><a name=storejs class=anchor href=#storejs><span class=header-link></span></a><code>store.js</code></h3><p>In <code>counter.marko</code>, the imported store module exports a Redux store created with the following code:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>redux</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"redux\"</span>);\n<span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>counter</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./reducer\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>redux</span>.<span style=color:#A6E22E>createStore</span>(<span style=color:#FFFFFF>counter</span>);\n</pre>");
}, {
  t: redux_marko_componentType,
  i: true
}, redux_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/rendering.md
const rendering_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const rendering = (rendering_marko_template);

toc_registry.set("../../node_modules/marko/docs/rendering.md", "<ul class=\"toc toc-level1\"><li><a href=\"#rendering-methods\">Rendering methods</a><ul class=\"toc toc-level2\"><li><a href=\"#rendersyncinput\">renderSync()</a></li><li><a href=\"#renderinput\">render()</a></li><li><a href=\"#renderinput-callback\">render()</a></li><li><a href=\"#renderinput-stream\">render()</a></li><li><a href=\"#renderinput-out\">render()</a></li><li><a href=\"#rendertostringinput\">renderToString()</a></li><li><a href=\"#rendertostringinput-callback\">renderToString()</a></li><li><a href=\"#streaminput\">stream()</a></li></ul></li><li><a href=\"#renderresult\">RenderResult</a><ul class=\"toc toc-level2\"><li><a href=\"#getcomponent\">getComponent()</a></li><li><a href=\"#getcomponentsselector\">getComponents()</a></li><li><a href=\"#afterinsertdoc\">afterInsert()</a></li><li><a href=\"#getnodedoc\">getNode()</a></li><li><a href=\"#getoutput\">getOutput()</a></li><li><a href=\"#appendtotargetel\">appendTo()</a></li><li><a href=\"#insertaftertargetel\">insertAfter()</a></li><li><a href=\"#insertbeforetargetel\">insertBefore()</a></li><li><a href=\"#prependtotargetel\">prependTo()</a></li><li><a href=\"#replacetargetel\">replace()</a></li><li><a href=\"#replacechildrenoftargetel\">replaceChildrenOf()</a></li></ul></li><li><a href=\"#global-data\">Global data</a></li></ul>");




const rendering_marko_componentType = "PWX2QuXG",
      rendering_marko_component = {};
rendering_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=rendering><a name=rendering class=anchor href=#rendering><span class=header-link></span></a>Rendering</h1><p>To render a Marko view, you need to <code>require</code> it.</p><div class=code-block-filename>example.js</div><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>fancyButton</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./components/fancy-button\"</span>);\n</pre><blockquote class=note><p><strong>Note:</strong> If you are targeting node.js, you will need to enable the <a href=/docs/installing/#require-marko-views>require extension</a> in order to require <code>.marko</code> files or you will need to precompile all of your templates using <a href=https://github.com/marko-js/cli>Marko CLI</a>. If you are targeting the browser, you will need to use a bundler like <a href=/docs/lasso/ ><code>lasso</code></a>, <a href=/docs/webpack/ ><code>webpack</code></a> or <a href=/docs/rollup/ ><code>rollup</code></a>.</p></blockquote><p>Once you have a view, you can pass input data and render it:</p><div class=code-block-filename>example.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>button</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./components/fancy-button\"</span>);\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>html</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>button</span>.<span style=color:#A6E22E>renderToString</span>({ label: <span style=color:#FFF066>\"Click me!\"</span> });\n\n<span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFFFFF>html</span>);\n</pre><p>The input data becomes available as <code>input</code> within a view, so if <code>fancy-button.marko</code> looked like this:</p><div class=code-block-filename>./components/fancy-button.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>label</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>button</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>label</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "25");

  out.w("<p>The output HTML would be:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span>>Click me!&lt;/<span style=color:#FF4185>button</span>>\n</pre><h2 id=rendering-methods><a name=rendering-methods class=anchor href=#rendering-methods><span class=header-link></span></a>Rendering methods</h2><p>We used the <code>renderToString</code> method above to render the view, but there are a number of different method signatures that can be used to render.</p><p>Many of these methods return a <a href=#renderresult><code>RenderResult</code></a> which is an object with helper methods for working with the rendered output.</p><h3 id=rendersyncinput><a name=rendersyncinput class=anchor href=#rendersyncinput><span class=header-link></span></a><code>renderSync(input)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td>return value</td><td><a href=#renderresult><code>RenderResult</code></a></td><td>The result of the render</td></tr></tbody></table><p>Using <code>renderSync</code> forces the render to complete synchronously. If a tag attempts to run asynchronously, an error will be thrown.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>result</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>renderSync</span>({});\n\n<span style=color:#FFFFFF>result</span>.<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n</pre><h3 id=renderinput><a name=renderinput class=anchor href=#renderinput><span class=header-link></span></a><code>render(input)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td>return value</td><td><code>AsyncStream</code>/<code>AsyncVDOMBuilder</code></td><td>the async <code>out</code> render target</td></tr></tbody></table><p>The <code>render</code> method returns an async <code>out</code> which is used to generate HTML on the server or a virtual DOM in the browser. In either case, the async <code>out</code> has a <code>then</code> method that follows the Promises/A+ spec, so it can be used as if it were a Promise. This promise resolves to a <a href=#renderresult><code>RenderResult</code></a>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>resultPromise</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>render</span>({});\n\n<span style=color:#FFFFFF>resultPromise</span>.<span style=color:#A6E22E>then</span>(<span style=color:#FFAC4D;font-style:italic>result</span> <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>result</span>.<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n});\n</pre><h3 id=renderinput-callback><a name=renderinput-callback class=anchor href=#renderinput-callback><span class=header-link></span></a><code>render(input, callback)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td><code>callback</code></td><td><code>Function</code></td><td>a function to call when the render is complete</td></tr><tr><td>callback value</td><td><a href=#renderresult><code>RenderResult</code></a></td><td>The result of the render</td></tr><tr><td>return value</td><td><code>AsyncStream</code>/<code>AsyncVDOMBuilder</code></td><td>the async <code>out</code> render target</td></tr></tbody></table><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n\n<span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>render</span>({}, (<span style=color:#FFAC4D;font-style:italic>err</span>, <span style=color:#FFAC4D;font-style:italic>result</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>result</span>.<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n});\n</pre><h3 id=renderinput-stream><a name=renderinput-stream class=anchor href=#renderinput-stream><span class=header-link></span></a><code>render(input, stream)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td><code>stream</code></td><td><code>WritableStream</code></td><td>a writeable stream</td></tr><tr><td>return value</td><td><code>AsyncStream</code>/<code>AsyncVDOMBuilder</code></td><td>the async <code>out</code> render target</td></tr></tbody></table><p>The HTML output is written to the passed <code>stream</code>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>http</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"http\"</span>);\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n\n<span style=color:#FFFFFF>http</span>.<span style=color:#A6E22E>createServer</span>((<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>res</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>res</span>.<span style=color:#A6E22E>setHeader</span>(<span style=color:#FFF066>\"content-type\"</span>, <span style=color:#FFF066>\"text/html\"</span>);\n  <span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>render</span>({}, <span style=color:#FFFFFF>res</span>);\n});\n</pre><h3 id=renderinput-out><a name=renderinput-out class=anchor href=#renderinput-out><span class=header-link></span></a><code>render(input, out)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td><code>out</code></td><td><code>AsyncStream</code>/<code>AsyncVDOMBuilder</code></td><td>The async <code>out</code> to render to</td></tr><tr><td>return value</td><td><code>AsyncStream</code>/<code>AsyncVDOMBuilder</code></td><td>The <code>out</code> that was passed</td></tr></tbody></table><p>The <code>render</code> method also allows passing an existing async <code>out</code>. If you do this, <code>render</code> will not automatically end the async <code>out</code> (this allows rendering a view in the middle of another view). If the async <code>out</code> won&#39;t be ended by other means, you are responsible for ending it.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>out</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>createOut</span>();\n\n<span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>render</span>({}, <span style=color:#FFFFFF>out</span>);\n\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>on</span>(<span style=color:#FFF066>\"finish\"</span>, () <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>getOutput</span>());\n});\n\n<span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>end</span>();\n</pre><h3 id=rendertostringinput><a name=rendertostringinput class=anchor href=#rendertostringinput><span class=header-link></span></a><code>renderToString(input)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td>return value</td><td><code>String</code></td><td>The HTML string produced by the render</td></tr></tbody></table><p>Returns an HTML string and forces the render to complete synchronously. If a tag attempts to run asynchronously, an error will be thrown.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>html</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>renderToString</span>({});\n\n<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>.<span style=color:#FFFFFF>innerHTML</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>html</span>;\n</pre><h3 id=rendertostringinput-callback><a name=rendertostringinput-callback class=anchor href=#rendertostringinput-callback><span class=header-link></span></a><code>renderToString(input, callback)</code></h3><table class=markdown-table><thead><tr><th>params</th><th>type</th><th>description</th></tr></thead><tbody><tr><td><code>input</code></td><td><code>Object</code></td><td>the input data used to render the view</td></tr><tr><td>callback value</td><td><code>String</code></td><td>The HTML string produced by the render</td></tr><tr><td>return value</td><td><code>undefined</code></td><td>N/A</td></tr></tbody></table><p>An HTML string is passed to the callback.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n\n<span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>renderToString</span>({}, (<span style=color:#FFAC4D;font-style:italic>err</span>, <span style=color:#FFAC4D;font-style:italic>html</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>.<span style=color:#FFFFFF>innerHTML</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>html</span>;\n});\n</pre><h3 id=streaminput><a name=streaminput class=anchor href=#streaminput><span class=header-link></span></a><code>stream(input)</code></h3><p>The <code>stream</code> method returns a node.js style stream of the output HTML. This method is available on the server, but is not available by default in the browser. If you need to use streams in the browser, you may <code>require(&#39;marko/stream&#39;)</code> as part of your client-side bundle.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>fs</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"fs\"</span>);\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>view</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./view\"</span>); <span style=color:#8F8F9E>// Import `./view.marko`</span>\n<span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>writeStream</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>fs</span>.<span style=color:#A6E22E>createWriteStream</span>(<span style=color:#FFF066>\"output.html\"</span>);\n\n<span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>stream</span>({}).<span style=color:#A6E22E>pipe</span>(<span style=color:#FFFFFF>writeStream</span>);\n</pre><h2 id=renderresult><a name=renderresult class=anchor href=#renderresult><span class=header-link></span></a>RenderResult</h2><h3 id=getcomponent><a name=getcomponent class=anchor href=#getcomponent><span class=header-link></span></a><code>getComponent()</code></h3><h3 id=getcomponentsselector><a name=getcomponentsselector class=anchor href=#getcomponentsselector><span class=header-link></span></a><code>getComponents(selector)</code></h3><h3 id=afterinsertdoc><a name=afterinsertdoc class=anchor href=#afterinsertdoc><span class=header-link></span></a><code>afterInsert(doc)</code></h3><h3 id=getnodedoc><a name=getnodedoc class=anchor href=#getnodedoc><span class=header-link></span></a><code>getNode(doc)</code></h3><h3 id=getoutput><a name=getoutput class=anchor href=#getoutput><span class=header-link></span></a><code>getOutput()</code></h3><h3 id=appendtotargetel><a name=appendtotargetel class=anchor href=#appendtotargetel><span class=header-link></span></a><code>appendTo(targetEl)</code></h3><h3 id=insertaftertargetel><a name=insertaftertargetel class=anchor href=#insertaftertargetel><span class=header-link></span></a><code>insertAfter(targetEl)</code></h3><h3 id=insertbeforetargetel><a name=insertbeforetargetel class=anchor href=#insertbeforetargetel><span class=header-link></span></a><code>insertBefore(targetEl)</code></h3><h3 id=prependtotargetel><a name=prependtotargetel class=anchor href=#prependtotargetel><span class=header-link></span></a><code>prependTo(targetEl)</code></h3><h3 id=replacetargetel><a name=replacetargetel class=anchor href=#replacetargetel><span class=header-link></span></a><code>replace(targetEl)</code></h3><h3 id=replacechildrenoftargetel><a name=replacechildrenoftargetel class=anchor href=#replacechildrenoftargetel><span class=header-link></span></a><code>replaceChildrenOf(targetEl)</code></h3><h2 id=global-data><a name=global-data class=anchor href=#global-data><span class=header-link></span></a>Global data</h2><p>If you need to make data available globally to all views that are rendered as the result of a call to one of the above render methods, you can pass the data as a <code>&#36;global</code> property on the input data object. This object will be removed from <code>input</code> and merged into the <code>out.global</code> property.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>view</span>.<span style=color:#A6E22E>render</span>({\n  $global: {\n    flags: [<span style=color:#FFF066>\"mobile\"</span>]\n  }\n});\n</pre><p>To prevent sensitive data to be accidentally shipped to the browser, by default <strong>none of the keys</strong> in <code>out.global</code> is going to be sent to the browser. If you want the data to be serialized and ship to the frontend you need to specify it in <code>serializedGlobals</code> inside the <code>&#36;global</code> object and they persist across re-renderings. The values need to be serializable.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>app</span>.<span style=color:#A6E22E>get</span>(<span style=color:#FFF066>\"/\"</span>, (<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>res</span>) <span style=color:#66D9EF;font-style:italic>=></span> {\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>ua</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>req</span>.<span style=color:#A6E22E>get</span>(<span style=color:#FFF066>\"User-Agent\"</span>);\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>isIos</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>!!</span><span style=color:#FFFFFF>ua</span>.<span style=color:#A6E22E>match</span>(<span style=color:#FFF066>/iPad</span><span style=color:#FF4185>|</span><span style=color:#FFF066>iPhone/</span>);\n  <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>isAndroid</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>!!</span><span style=color:#FFFFFF>ua</span>.<span style=color:#A6E22E>match</span>(<span style=color:#FFF066>/Android/</span>);\n\n  <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./index.marko\"</span>).<span style=color:#A6E22E>render</span>(\n    {\n      $global: {\n        <span style=color:#FFFFFF>isIos</span>, <span style=color:#8F8F9E>// isPad is serialized and available on the server and the browser in out.global.isPad</span>\n        <span style=color:#FFFFFF>isAndroid</span>, <span style=color:#8F8F9E>// isAndroid is serialized and available on the server and the browser in out.global.isAndroid</span>\n        <span style=color:#FFFFFF>req</span>, <span style=color:#8F8F9E>// req is going to be available only server side and will not be serialized because in not present in serializedGlobals below</span>\n\n        serializedGlobals: {\n          isIos: <span style=color:#AE81FF>true</span>, <span style=color:#8F8F9E>// Tell marko to serialize isIos above</span>\n          isAndroid: <span style=color:#AE81FF>true</span> <span style=color:#8F8F9E>// Tell marko to serialize isAndroid above</span>\n        }\n      }\n    },\n    <span style=color:#FFFFFF>res</span>\n  );\n});\n</pre><p>Use <code>&#36;global</code> with judgement. It is global and visible in any component.</p><p>Check <a href=https://github.com/marko-js/marko/pull/672>this PR</a> for more details.</p>");
}, {
  t: rendering_marko_componentType,
  i: true
}, rendering_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/rollup.md
const rollup_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const rollup = (rollup_marko_template);

toc_registry.set("../../node_modules/marko/docs/rollup.md", "<ul class=\"toc toc-level1\"><li><a href=\"#manual-installation\">Manual Installation</a></li><li><a href=\"#configuration\">Configuration</a></li><li><a href=\"#usage\">Usage</a></li></ul>");


const rollup_marko_componentType = "eTKtoIxH",
      rollup_marko_component = {};
rollup_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=marko-rollup><a name=marko-rollup class=anchor href=#marko-rollup><span class=header-link></span></a>Marko + Rollup</h1><p>The <a href=https://github.com/marko-js/rollup>@marko/rollup</a> transform can be used in conjunction with <a href=https://github.com/rollup/rollup>rollup</a> to automatically compile Marko templates that are required by other modules.</p><h2 id=manual-installation><a name=manual-installation class=anchor href=#manual-installation><span class=header-link></span></a>Manual Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install rollup rollup-plugin-commonjs rollup-plugin-node-resolve @marko/rollup --save-dev\n</pre><h2 id=configuration><a name=configuration class=anchor href=#configuration><span class=header-link></span></a>Configuration</h2><p>The following is the minimal recommend configuration to use Rollup with Marko:</p><div class=code-block-filename>rollup.config.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>nodeResolve</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"@rollup/plugin-node-resolve\"</span>;\n<span style=color:#FF4185>import</span> <span style=color:#FFFFFF>commonjs</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"@rollup/plugin-commonjs\"</span>;\n<span style=color:#FF4185>import</span> <span style=color:#FFFFFF>marko</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"@marko/rollup\"</span>;\n\n<span style=color:#FF4185>export</span> <span style=color:#FF4185>default</span> {\n  <span style=color:#FF4185>...</span>,\n  plugins: [\n    <span style=color:#A6E22E>marko</span>(),\n    <span style=color:#A6E22E>nodeResolve</span>({\n      browser: <span style=color:#AE81FF>true</span>,\n      extensions: [<span style=color:#FFF066>\".js\"</span>, <span style=color:#FFF066>\".marko\"</span>]\n    }),\n    <span style=color:#8F8F9E>// NOTE: Marko 4 compiles to commonjs, this plugin is also required.</span>\n    <span style=color:#A6E22E>commonjs</span>({\n      extensions: [<span style=color:#FFF066>\".js\"</span>, <span style=color:#FFF066>\".marko\"</span>]\n    }),\n    <span style=color:#8F8F9E>// If using `style` blocks with Marko you must use an appropriate plugin.</span>\n    <span style=color:#A6E22E>postcss</span>({\n      external: <span style=color:#AE81FF>true</span>\n    })\n  ]\n};\n</pre><h2 id=usage><a name=usage class=anchor href=#usage><span class=header-link></span></a>Usage</h2><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E># Development:</span>\nrollup -c rollup.config.js\n\n<span style=color:#8F8F9E># Production:</span>\nNODE_ENV=production rollup -c rollup.config.js\n</pre>");
}, {
  t: rollup_marko_componentType,
  i: true
}, rollup_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/server-side-rendering.md
const server_side_rendering_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const server_side_rendering = (server_side_rendering_marko_template);

toc_registry.set("../../node_modules/marko/docs/server-side-rendering.md", "<ul class=\"toc toc-level0\"><li><a href=\"#server-side-rendering\">Server-side rendering</a><ul class=\"toc toc-level1\"><li><a href=\"#ui-bootstrapping\">UI Bootstrapping</a></li><li><a href=\"#bootstrapping-components\">Bootstrapping Components</a><ul class=\"toc toc-level2\"><li><a href=\"#bootstrapping-lasso\">Bootstrapping: Lasso</a></li><li><a href=\"#bootstrapping-non-lasso\">Bootstrapping: Non-Lasso</a></li></ul></li></ul></li><li><a href=\"#serialization\">Serialization</a></li><li><a href=\"#caveats\">Caveats</a><ul class=\"toc toc-level1\"><li><a href=\"#serializing-globals\">Serializing globals</a></li></ul></li></ul>");




const server_side_rendering_marko_componentType = "a1W04LAJ",
      server_side_rendering_marko_component = {};
server_side_rendering_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=server-side-rendering><a name=server-side-rendering class=anchor href=#server-side-rendering><span class=header-link></span></a>Server-side rendering</h1><p>Marko allows any Marko template/UI component to be rendered on the server or in the browser. A page can be rendered to a <code>Writable</code> stream such as an HTTP response stream as shown below:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./template\"</span>); <span style=color:#8F8F9E>// Import ./template.marko</span>\n\n<span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF;font-style:italic>function</span>(<span style=color:#FFAC4D;font-style:italic>req</span>, <span style=color:#FFAC4D;font-style:italic>res</span>) {\n  <span style=color:#FFFFFF>res</span>.<span style=color:#A6E22E>setHeader</span>(<span style=color:#FFF066>\"Content-Type\"</span>, <span style=color:#FFF066>\"text/html; charset=utf-8\"</span>);\n  <span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>render</span>({ name: <span style=color:#FFF066>\"Frank\"</span> }, <span style=color:#FFFFFF>res</span>);\n};\n</pre><p>Marko can also provide you with a <code>Readable</code> stream.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./template\"</span>); <span style=color:#8F8F9E>// Import ./template.marko</span>\n\n<span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF;font-style:italic>function</span>(<span style=color:#FFAC4D;font-style:italic>req</span>) {\n  <span style=color:#8F8F9E>// Return a Readable stream for someone to do something with:</span>\n  <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>stream</span>({ name: <span style=color:#FFF066>\"Frank\"</span> });\n};\n</pre><blockquote class=protip><p><strong>ProTip:</strong> Marko also provides server-side framework integrations:</p><ul><li><a href=/docs/express/ >express</a></li><li><a href=/docs/koa/ >koa</a></li><li><a href=/docs/fastify/ >fastify</a></li></ul></blockquote><h2 id=ui-bootstrapping><a name=ui-bootstrapping class=anchor href=#ui-bootstrapping><span class=header-link></span></a>UI Bootstrapping</h2><p>When a page is rendered on the server, additional code is added to the output HTML to allow the UI to instantly boot in the browser. This additional code allows UI components rendered on the server to be mounted in the browser automatically. For each <em>top-level</em> UI component, Marko will serialize the component&#39;s data (including <code>input</code> and <code>state</code> and any properties added to the UI component instance) so that each top-level UI component can be re-rendered and mounted when the page loads in the browser. Only a &quot;partial&quot; re-render is done for each top-level UI component. That is, when doing the partial re-render in the browser, the DOM is not updated and no virtual DOM is actually produced.</p><p>Marko encodes required information into attributes of rendered HTML elements and it also generates <code>&lt;script&gt;</code> tags that will cause UI components to be mounted. The code inside the <code>&lt;script&gt;</code> simply registers UI components and when the Marko runtime finally loads, all of the registered UI components will then be mounted. This allows the Marko runtime to be loaded at anytime without causing JavaScript errors.</p><h2 id=bootstrapping-components><a name=bootstrapping-components class=anchor href=#bootstrapping-components><span class=header-link></span></a>Bootstrapping Components</h2><p>When a server-rendered page loads in the browser it&#39;s possible for marko to automatically detect UI components rendered on the server and create and mount them with the correct <code>state</code> and <code>input</code> in the browser.</p><h3 id=bootstrapping-lasso><a name=bootstrapping-lasso class=anchor href=#bootstrapping-lasso><span class=header-link></span></a>Bootstrapping: Lasso</h3><p>If you are using <a href=https://github.com/lasso-js/lasso>Lasso.js</a> then the bootstrapping will happen automatically as long as the JavaScript bundles for your page are included via the <code>&lt;lasso-body&gt;</code> tag. A typical HTML page structure will be the following:</p><div class=code-block-filename>routes/index/template.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!DOCTYPE html></span>\n&lt;<span style=color:#FF4185>html</span> <span style=color:#A6E22E>lang</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"en\"</span>>\n    &lt;<span style=color:#FF4185>head</span>>\n        &lt;<span style=color:#FF4185>meta</span> <span style=color:#A6E22E>charset</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"UTF-8\"</span>>\n        &lt;<span style=color:#FF4185>title</span>><span style=color:#FFF066>Marko + Lasso</span>&lt;/<span style=color:#FF4185>title</span>>\n\n<span style=color:#8F8F9E>        &lt;!-- CSS includes --></span>\n        &lt;<span style=color:#FF4185>lasso-head</span>/>\n    &lt;/<span style=color:#FF4185>head</span>>\n    &lt;<span style=color:#FF4185>body</span>>\n<span style=color:#8F8F9E>        &lt;!-- Top-level UI component: --></span>\n        &lt;<span style=color:#FF4185>app</span>/>\n\n<span style=color:#8F8F9E>        &lt;!-- JS includes --></span>\n        &lt;<span style=color:#FF4185>lasso-body</span>/>\n    &lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!DOCTYPE html></span>\n<span style=color:#FF4185>html</span> <span style=color:#A6E22E>lang</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"en\"</span>\n    <span style=color:#FF4185>head</span>\n        <span style=color:#FF4185>meta</span> <span style=color:#A6E22E>charset</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"UTF-8\"</span>\n        <span style=color:#FF4185>title</span> --<span style=color:#FFF066> Marko + Lasso</span>\n        <span style=color:#8F8F9E>// CSS includes</span>\n        <span style=color:#FF4185>lasso-head</span>\n    <span style=color:#FF4185>body</span>\n        <span style=color:#8F8F9E>// Top-level UI component:</span>\n        <span style=color:#FF4185>app</span>\n        <span style=color:#8F8F9E>// JS includes</span>\n        <span style=color:#FF4185>lasso-body</span>\n</pre>"
  }, out, _component, "41");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> We have provided some sample apps to help you get started with Marko + Lasso</p><ul><li><a href=https://github.com/marko-js/examples/tree/master/examples/lasso-express>marko-lasso</a></li><li><a href=https://github.com/marko-js/examples/tree/master/examples/ui-components-playground>ui-components-playground</a></li></ul></blockquote><h3 id=bootstrapping-non-lasso><a name=bootstrapping-non-lasso class=anchor href=#bootstrapping-non-lasso><span class=header-link></span></a>Bootstrapping: Non-Lasso</h3><p>If a JavaScript module bundler other than Lasso is being used then you will need to add some client-side code to bootstrap your application in the browser by doing the following:</p><ol><li> Load/import/require all of the UI components that were rendered on the server (loading the top-level UI component is typically sufficient)</li><li> Call <code>require(&#39;marko/components&#39;).init()</code></li></ol><p>For example, if <code>client.js</code> is the entry point for your client-side application:</p><div class=code-block-filename>routes/index/client.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// Load the top-level UI component:</span>\n<span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"./components/app/index\"</span>);\n\n<span style=color:#8F8F9E>// Now that all of the JavaScript modules for the UI component have been</span>\n<span style=color:#8F8F9E>// loaded and registered we can tell marko to bootstrap/initialize the app</span>\n\n<span style=color:#8F8F9E>// Initialize and mount all of the server-rendered UI components:</span>\n<span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/components\"</span>).<span style=color:#A6E22E>init</span>();\n</pre><blockquote class=protip><p><strong>ProTip:</strong> We have provided some sample apps to help you get started:</p><ul><li><a href=https://github.com/marko-js/examples/tree/master/examples/webpack-express>marko-webpack</a></li></ul></blockquote><h1 id=serialization><a name=serialization class=anchor href=#serialization><span class=header-link></span></a>Serialization</h1><p>For each <em>top-level</em> UI component, Marko will serialize the component&#39;s data (including <code>input</code> and <code>state</code> and any properties added to the UI component instance) down to the browser. You can control which data gets serialized by implementing <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify><code>toJSON</code></a> or by reassigning <code>this.input</code> in the UI component&#39;s <code>onInput(input, out)</code> lifecycle method as shown below:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onInput</span>() {\n        <span style=color:#8F8F9E>// Do not serialize any input:</span>\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>input</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>null</span>;\n\n        <span style=color:#8F8F9E>// Serialize a new object instead of the provided input:</span>\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>input</span> <span style=color:#FFFFFF>=</span> {\n            foo: <span style=color:#FFF066>'bar'</span>\n        };\n    }\n}\n</pre><blockquote class=null><p>NOTE: Marko does allow cycles in serialized objects and Duplicate objects will only be serialized once</p></blockquote><h1 id=caveats><a name=caveats class=anchor href=#caveats><span class=header-link></span></a>Caveats</h1><p>There are some caveats associated with rendering a page on the server:</p><ul><li>The UI component data for top-level UI components must be serializable:<ul><li>Only simple objects, numbers, strings, booleans, arrays and <code>Date</code> objects are serializable</li><li>Functions are not serializable</li></ul></li><li>Care should be taken to avoid having Marko serialize too much data</li><li>None of the data in <code>out.global</code> is serialized by default, but this can be changed as shown below</li></ul><h2 id=serializing-globals><a name=serializing-globals class=anchor href=#serializing-globals><span class=header-link></span></a>Serializing globals</h2><p>If there are specific properties on the <code>out.global</code> object that need to be serialized then they must be whitelisted when the top-level page is rendered on the server. For example, to have the <code>out.global.apiKey</code> and the <code>out.global.locale</code> properties serialized you would do the following:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>template</span>.<span style=color:#A6E22E>render</span>(\n  {\n    $global: {\n      serializedGlobals: {\n        apiKey: <span style=color:#AE81FF>true</span>,\n        locale: <span style=color:#AE81FF>true</span>\n      }\n    }\n  },\n  <span style=color:#FFFFFF>res</span>\n);\n</pre>");
}, {
  t: server_side_rendering_marko_componentType,
  i: true
}, server_side_rendering_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/state.md
const state_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const state = (state_marko_template);

toc_registry.set("../../node_modules/marko/docs/state.md", "<ul class=\"toc toc-level1\"><li><a href=\"#initializing-state\">Initializing state</a></li><li><a href=\"#updating-state\">Updating state</a><ul class=\"toc toc-level2\"><li><a href=\"#how-updates-work\">How updates work</a></li></ul></li><li><a href=\"#cross-component-state-management\">Cross component state management</a><ul class=\"toc toc-level2\"><li><a href=\"#globalsubtree\">Global/Subtree</a></li><li><a href=\"#when-to-use-a-redux-like-pattern\">When to use a Redux like pattern</a></li></ul></li></ul>");




const state_marko_componentType = "lsY18efc",
      state_marko_component = {};
state_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=state><a name=state class=anchor href=#state><span class=header-link></span></a>State</h1><p>The output of a component is based on input properties passed from its parent as attributes. However, a component may also maintain internal state that it uses to control its view. If Marko detects a change to either input or to the internal state, the view will automatically be updated.</p><blockquote class=protip><p><strong>ProTip:</strong> Only data that is owned and modified by the component should go into its <code>state</code>. State should be exclusively used for data that triggers rerenders. Parents control <code>input</code> the component controls its own <code>state</code>.</p></blockquote><h2 id=initializing-state><a name=initializing-state class=anchor href=#initializing-state><span class=header-link></span></a>Initializing state</h2><p>To use <code>state</code> in Marko, you must first create a <a href=/docs/class-components/ >class component</a> and initialize the state within the <a href=/docs/class-components/#oncreateinput-out><code>onCreate</code></a> method. In class methods, <code>this.state</code> may be used and within the template section, a <code>state</code> variable is available.</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n    }\n}\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>The count is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n    }\n}\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> The count is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "21");

  out.w("<blockquote class=note><p><strong>Note:</strong> Only properties that exist when <code>this.state</code> is first defined will be watched for changes. If you don&#39;t need a property initially, you can set it to <code>null</code>.</p></blockquote><h2 id=updating-state><a name=updating-state class=anchor href=#updating-state><span class=header-link></span></a>Updating state</h2><p>You can update <code>state</code> in response to DOM events, browser events, ajax calls, etc. When a property on the state changes, the view will be updated to match.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>The count is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>'increment'</span>)><span style=color:#FFF066>Increment</span>&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>class</span> {\n    <span style=color:#A6E22E>onCreate</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span> <span style=color:#FFFFFF>=</span> { count: <span style=color:#AE81FF>0</span> };\n    }\n    <span style=color:#A6E22E>increment</span>() {\n        <span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#FF4185>++</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> The count is </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>count</span><span style=color:#66D9EF>}</span>\n<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"increment\"</span>) --<span style=color:#FFF066> Increment</span>\n</pre>"
  }, out, _component, "32");

  out.w("<p>We&#39;ve extended our example above to add a button with an <a href=/docs/events/ >event handler</a>, so that, when clicked, the <code>state.count</code> value is incremented.</p><blockquote class=note><p><strong>Note:</strong> When browsing existing code, you may see <code>this.setState(&#39;name&#39;, value)</code> being used. This is equivalent to <code>this.state.name = value</code>.</p></blockquote><h3 id=how-updates-work><a name=how-updates-work class=anchor href=#how-updates-work><span class=header-link></span></a>How updates work</h3><p>When a property on <code>state</code> is set, the component will be scheduled for an update if the property has changed. All updates are batched together for performance. This means you can update multiple state properties at the same time without causing multiple updates.</p><blockquote class=protip><p><strong>ProTip:</strong> If you need to know when the update has been applied, you can use <code>this.once(&#39;update&#39;, fn)</code> within a component method.</p></blockquote><blockquote class=note><p><strong>Note:</strong> The state object only watches its properties one level deep. This means updates to nested properites on the state (e.g. <code>this.state.object.something = newValue</code>) will not be detected.</p><p>Using <a href=https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/ >immutable</a> data structures is recommended, but if you want to mutate a state property (perhaps push a new item into an array) you can let Marko know it changed using <code>setStateDirty</code>.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FFFFFF>this</span>.<span style=color:#FFFFFF>state</span>.<span style=color:#FFFFFF>numbers</span>.<span style=color:#A6E22E>push</span>(<span style=color:#FFFFFF>num</span>);\n\n<span style=color:#8F8F9E>// mark numbers as dirty, because a `push`</span>\n<span style=color:#8F8F9E>// won't be automatically detected by Marko</span>\n<span style=color:#FFFFFF>this</span>.<span style=color:#A6E22E>setStateDirty</span>(<span style=color:#FFF066>\"numbers\"</span>);\n</pre></blockquote><h2 id=cross-component-state-management><a name=cross-component-state-management class=anchor href=#cross-component-state-management><span class=header-link></span></a>Cross component state management</h2><p>There are various tools available to manage state outside of a single component. Here are some basic guidelines.</p><p>Typically we recommend using <code>attributes</code> to pass data in to a child component, and children can <a href=/docs/events/#emitting-custom-events>emit events</a> to communicate back up to their parents. In some cases this can become cumbersome with deeply nested data dependencies or global state.</p><h3 id=globalsubtree><a name=globalsubtree class=anchor href=#globalsubtree><span class=header-link></span></a>Global/Subtree</h3><p>For passing state throughout a component tree without explicit attribute setting throughout the entire app, you can leverage the <a href=https://github.com/marko-js/tags/tree/master/tags/context><code>&lt;context&gt;</code></a> tag. This tag can be <a href=/docs/custom-tags/#using-tags-from-npm>installed from npm</a>.</p><p>This tag allows you to pull state from any level above in the tree and can also be used to pass global state throughout your app. Context providers can register event handlers that any child in the tree can trigger similar to the <a href=/docs/events/ >events API</a>.</p><div class=code-block-filename>fancy-form.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>context</span> <span style=color:#A6E22E>coupon</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>coupon</span> <span style=color:#66D9EF;font-style:italic>on-buy</span>(<span style=color:#FFFFFF>handleBuy</span>)>\n<span style=color:#8F8F9E>    &lt;!-- Somewhere nested in the container will be the buy button --></span>\n    &lt;<span style=color:#FF4185>fancy-container</span>/>\n&lt;/<span style=color:#FF4185>context</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>context</span> <span style=color:#A6E22E>coupon</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>coupon</span> <span style=color:#66D9EF;font-style:italic>on-buy</span>(<span style=color:#FFFFFF>handleBuy</span>)\n    <span style=color:#8F8F9E>// Somewhere nested in the container will be the buy button</span>\n    <span style=color:#FF4185>fancy-container</span>\n</pre>"
  }, out, _component, "74");

  out.w("<div class=code-block-filename>fancy-save-button.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>context</span>|{ <span style=color:#FFAC4D;font-style:italic>coupon</span> }, <span style=color:#FFAC4D;font-style:italic>emit</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy-form\"</span>>\n<span style=color:#FFF066>    Coupon: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>coupon</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n    &lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>emit</span>, <span style=color:#FFF066>\"buy\"</span>)><span style=color:#FFF066>Buy</span>&lt;/<span style=color:#FF4185>button</span>>\n&lt;/<span style=color:#FF4185>context</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>context</span>|{ <span style=color:#FFAC4D;font-style:italic>coupon</span> }, <span style=color:#FFAC4D;font-style:italic>emit</span>| <span style=color:#A6E22E>from</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"fancy-form\"</span>\n    ---\n<span style=color:#FFF066>    Coupon: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>coupon</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>.</span>\n    &lt;<span style=color:#FF4185>button</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFFFFF>emit</span>, <span style=color:#FFF066>\"buy\"</span>)><span style=color:#FFF066>Buy</span>&lt;/<span style=color:#FF4185>button</span>>\n<span style=color:#FFF066>    </span>---\n</pre>"
  }, out, _component, "76");

  out.w("<blockquote class=note><p><strong>Note:</strong> Context <em>couples</em> tags together and can limit reuse of components.</p></blockquote><h3 id=when-to-use-a-redux-like-pattern><a name=when-to-use-a-redux-like-pattern class=anchor href=#when-to-use-a-redux-like-pattern><span class=header-link></span></a>When to use a Redux like pattern</h3><p>Often the above two approaches are enough, and many people <a href=https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367>jump to this part far too quickly</a>. Like <code>&lt;context&gt;</code>, often anything stored in redux is <code>global</code>. This means that it can (if abused) create components that are hard to reuse, reason about and test. However it is important to understand when a tool like <code>redux</code> is useful in any UI library.</p><p>Redux provides indirection to updating any state that it controls. This is useful if you need the following:</p><ul><li>Single state update, multiple actions (eg: logging, computed data, etc).</li><li>Time travel debugging and other <a href=https://redux.js.org/introduction/ecosystem>redux-specific tooling</a>.</li></ul>");
}, {
  t: state_marko_componentType,
  i: true
}, state_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/styles.md
const styles_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const styles = (styles_marko_template);

toc_registry.set("../../node_modules/marko/docs/styles.md", "<ul class=\"toc toc-level1\"><li><a href=\"#preprocessors\">Preprocessors</a></li></ul>");




const styles_marko_componentType = "ywcg2wvN",
      styles_marko_component = {};
styles_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=styles><a name=styles class=anchor href=#styles><span class=header-link></span></a>Styles</h1><p>Both HTML and Marko provide support for <code>&lt;style&gt;</code> tags. However, Marko also provides a special syntax (called a style <em>block</em>) which adds support for CSS preprocessors and acts as a hint to bundlers to extract this static css from your templates into a common bundle.</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#FF4185>div</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>green</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Hello World</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span> {\n    <span style=color:#FF4185>div</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#66D9EF>green</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello World</span>\n</pre>"
  }, out, _component, "7");

  out.w("<p>These blocks add global css to the page. The above example will not style just the <code>&lt;div&gt;</code> in the component, but all divs on the page. Because of this we recommend following a naming convention such as <a href=http://getbem.com/introduction/ >BEM</a>. Marko will likely provide a way to automatically scope these styles to the current component <a href=https://github.com/marko-js/marko/issues/666>in the future</a>.</p><blockquote class=note><p><strong>Note:</strong> Style blocks (unlike <code>&lt;style&gt;</code> tags) do not support <code>&#36;{placeholders}</code> and must be static.</p></blockquote><h2 id=preprocessors><a name=preprocessors class=anchor href=#preprocessors><span class=header-link></span></a>Preprocessors</h2><p>If you use a css preprocessor, you can add the extension right on <code>style</code>. This will cause your bundler of choice to run the contents of the style block through the appropriate processor.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#FF4185>button</span><span style=color:#A6E22E>.primary</span> {\n        <span style=color:#66D9EF;font-style:italic>background-color</span>: <span style=color:#FFFFFF>@primaryColor</span>;\n    }\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#FF4185>button</span><span style=color:#A6E22E>.primary</span> {\n        <span style=color:#66D9EF;font-style:italic>background-color</span>: <span style=color:#FFFFFF>@primaryColor</span>;\n    }\n}\n</pre>"
  }, out, _component, "22");
}, {
  t: styles_marko_componentType,
  i: true
}, styles_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/syntax.md
const syntax_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const syntax = (syntax_marko_template);

toc_registry.set("../../node_modules/marko/docs/syntax.md", "<ul class=\"toc toc-level1\"><li><a href=\"#tags\">Tags</a></li><li><a href=\"#dynamic-text\">Dynamic text</a></li><li><a href=\"#attributes\">Attributes</a><ul class=\"toc toc-level2\"><li><a href=\"#complex-expressions\">Complex expressions</a></li><li><a href=\"#boolean-attributes\">Boolean attributes</a></li><li><a href=\"#dynamic-attributes\">Dynamic attributes</a></li><li><a href=\"#style-attribute\">Style attribute</a></li><li><a href=\"#class-attribute\">Class attribute</a></li><li><a href=\"#shorthand-attributes\">Shorthand attributes</a></li></ul></li><li><a href=\"#parameters\">Parameters</a></li><li><a href=\"#arguments\">Arguments</a></li><li><a href=\"#dynamic-tagname\">Dynamic tagname</a><ul class=\"toc toc-level2\"><li><a href=\"#dynamic-components\">Dynamic components</a></li><li><a href=\"#dynamic-body-content\">Dynamic body content</a></li></ul></li><li><a href=\"#attribute-tag\">Attribute Tag</a></li><li><a href=\"#inline-javascript\">Inline JavaScript</a><ul class=\"toc toc-level2\"><li><a href=\"#static-javascript\">Static JavaScript</a></li><li><a href=\"#importing-external-files\">Importing external files</a></li></ul></li><li><a href=\"#comments\">Comments</a></li></ul>");




const syntax_marko_componentType = "q+pKF3wQ",
      syntax_marko_component = {};
syntax_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=syntax><a name=syntax class=anchor href=#syntax><span class=header-link></span></a>Syntax</h1><p>Marko is HTML <em>re-imagined</em> as a language for building dynamic and reactive user interfaces. Just about any valid HTML is valid Marko, but Marko extends the HTML language to allow building modern applications in a declarative way.</p><blockquote class=protip><p><strong>ProTip:</strong> Marko also supports a <a href=/docs/concise/ >beautiful concise syntax</a>. If you&#39;d prefer to see the documentation using this syntax, just click the <code>switch syntax</code> button in the corner of any Marko code sample.</p></blockquote><blockquote class=note><p><strong>Note:</strong> Text at the root of a template (outside any tags) must be prefixed with the <a href=/docs/concise/#text>concise syntax&#39;s <code>--</code></a> to denote it is text. The parser starts in concise mode and would otherwise try to parse what you meant to be text as a concise tag declaration.</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>--<span style=color:#FFF066> Root level text</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>--<span style=color:#FFF066> Root level text</span>\n</pre>"
  }, out, _component, "16");

  out.w("</blockquote><h2 id=tags><a name=tags class=anchor href=#tags><span class=header-link></span></a>Tags</h2><p>As you might expect, Marko supports all native HTML/SVG/whatever tags and attributes. In addition to these, it also comes with a set of useful <a href=/docs/core-tags/ >core tags</a>. Beyond this, you can also build your own <a href=/docs/custom-tags/ >custom tags</a> and <a href=/docs/custom-tags/#using-tags-from-npm>install third-party tags</a> from <code>npm</code>.</p><p>All of these types of tags use the same syntax:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>my-tag-name</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>my-tag-name</span>\n</pre>"
  }, out, _component, "26");

  out.w("<p>You don&#39;t need to import tags. Marko discovers them based on the folder structure\u2014similar to how you don&#39;t specify a full path when referencing a module in <code>node_modules/</code>. Marko looks in <a href=/docs/custom-tags/#how-tags-are-discovered><code>components/</code></a> by default and this directory can be configured in <a href=/docs/marko-json/ ><code>marko.json</code></a>.</p><h2 id=dynamic-text><a name=dynamic-text class=anchor href=#dynamic-text><span class=header-link></span></a>Dynamic text</h2><p>You can use placeholders (<code>&#36;{}</code>) to insert a value into the template: Placeholders accept any JavaScript expression and the result of the expression will be inserted into the HTML output:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n<span style=color:#FFF066>    Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFF066>\"world\"</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFF066>\"world\"</span>.<span style=color:#A6E22E>toUpperCase</span>()<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "38");

  out.w("<p>These values are automatically escaped so you don&#39;t accidentally insert malicious code. If you do need to pass unescaped HTML, you can use <code>&#36;!{}</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n<span style=color:#FFF066>    Hello </span><span style=color:#66D9EF>$!{</span><span style=color:#FFF066>\"&lt;b>World&lt;/b>\"</span><span style=color:#66D9EF>}</span>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello</span> &lt;<span style=color:#FF4185>b</span>><span style=color:#FFF066>World</span>&lt;/<span style=color:#FF4185>b</span>>\n</pre>"
  }, out, _component, "41");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> If necessary, you can escape <code>&#36;</code> using a backslash to have it be treated as text instead of a placeholder token:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n<span style=color:#FFF066>    Placeholder example:</span> &lt;<span style=color:#FF4185>code</span>><span style=color:#FFF066>\\${someValue}</span>&lt;/<span style=color:#FF4185>code</span>>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    --<span style=color:#FFF066>  Placeholder example:</span>\n    <span style=color:#FF4185>code</span> --<span style=color:#FFF066> \\${someValue}</span>\n</pre>"
  }, out, _component, "46");

  out.w("</blockquote><h2 id=attributes><a name=attributes class=anchor href=#attributes><span class=header-link></span></a>Attributes</h2><p>In marko attributes are parsed as JavaScript expressions (instead of just strings).</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>myClassName</span>/>\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>isChecked</span>/>\n\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>string</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Hello\"</span>/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>number</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1</span>/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>template-string</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>`Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>boolean</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>array</span><span style=color:#FFFFFF>=</span>[<span style=color:#AE81FF>1</span>, <span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>]/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>object</span><span style=color:#FFFFFF>=</span>{ hello: <span style=color:#FFF066>\"world\"</span> }/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>variable</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>name</span>/>\n&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>function-call</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>getName</span>()/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>myClassName</span>\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>isChecked</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>string</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"Hello\"</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>number</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>template-string</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>`Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>`</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>boolean</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>array</span><span style=color:#FFFFFF>=</span>[<span style=color:#AE81FF>1</span>, <span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>]\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>object</span><span style=color:#FFFFFF>=</span>{\n    hello: <span style=color:#FFF066>\"world\"</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>variable</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>name</span>\n<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>function-call</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>user</span>.<span style=color:#FFFFFF>getName</span>()\n</pre>"
  }, out, _component, "51");

  out.w("<p>Attributes that are passed to a custom tag are received as it&#39;s <a href=/docs/class-components/#input><code>input</code></a>.</p><blockquote class=note><p><strong>Note:</strong> Although in most cases you won&#39;t see a difference, strings are parsed as JavaScript strings, not HTML strings. Where this comes up most often is using the <code>pattern</code> attribute with the <code>&lt;input&gt;</code> tag: you need to &quot;double escape&quot; your regex escape sequences much like you were passing a string to the <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp><code>RegExp</code> constructor</a> (or you can use a literal <code>/regex/</code>).</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>pattern</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"</span><span style=color:#AE81FF>\\\\</span><span style=color:#FFF066>w+\"</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"text\"</span>/>\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>pattern</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>/</span><span style=color:#AE81FF>\\w</span><span style=color:#FF4185>+</span><span style=color:#FFF066>/</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"text\"</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>input</span> <span style=color:#A6E22E>pattern</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"</span><span style=color:#AE81FF>\\\\</span><span style=color:#FFF066>w+\"</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"text\"</span>\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>pattern</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>/</span><span style=color:#AE81FF>\\w</span><span style=color:#FF4185>+</span><span style=color:#FFF066>/</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"text\"</span>\n</pre>"
  }, out, _component, "64");

  out.w("<div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>pattern</span>=<span style=color:#FFF066>\"\\w+\"</span> <span style=color:#A6E22E>type</span>=<span style=color:#FFF066>\"text\"</span> />\n</pre></blockquote><h3 id=complex-expressions><a name=complex-expressions class=anchor href=#complex-expressions><span class=header-link></span></a>Complex expressions</h3><p>Any JavaScript expression is a valid attribute value, provided it meets the following criteria:</p><p><em>It does not contain any spaces</em></p><p><em>It does not contain any right angle brackets (<code>&gt;</code>)</em></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1</span><span style=color:#FF4185>+</span><span style=color:#AE81FF>2</span> <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>3</span><span style=color:#FF4185>-</span><span style=color:#AE81FF>4</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>+</span> <span style=color:#AE81FF>2</span>) <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>3</span> <span style=color:#FF4185>-</span> <span style=color:#AE81FF>4</span>)\n</pre>"
  }, out, _component, "75");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>1</span><span style=color:#FF4185>+</span><span style=color:#AE81FF>2</span> <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>3</span><span style=color:#FF4185>-</span><span style=color:#AE81FF>4</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>+</span> <span style=color:#AE81FF>2</span>) <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>3</span> <span style=color:#FF4185>-</span> <span style=color:#AE81FF>4</span>)\n</pre>"
  }, out, _component, "76");

  out.w("<p><em>Spaces and <code>&gt;</code> are contained within matching <code>()</code>, <code>[]</code>, <code>{}</code>, strings and regexps</em></p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>+</span> <span style=color:#AE81FF>2</span>) <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>3</span> <span style=color:#FF4185>-</span> <span style=color:#AE81FF>4</span>) <span style=color:#A6E22E>greater</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>2</span>)/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>+</span> <span style=color:#AE81FF>2</span>) <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>3</span> <span style=color:#FF4185>-</span> <span style=color:#AE81FF>4</span>) <span style=color:#A6E22E>greater</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>2</span>)\n</pre>"
  }, out, _component, "83");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>+</span> <span style=color:#AE81FF>2</span>) <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>3</span> <span style=color:#FF4185>-</span> <span style=color:#AE81FF>4</span>) <span style=color:#A6E22E>greater</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>2</span>)\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> <span style=color:#A6E22E>sum</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>+</span> <span style=color:#AE81FF>2</span>) <span style=color:#A6E22E>difference</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>3</span> <span style=color:#FF4185>-</span> <span style=color:#AE81FF>4</span>) <span style=color:#A6E22E>greater</span><span style=color:#FFFFFF>=</span>(<span style=color:#AE81FF>1</span> <span style=color:#FF4185>></span> <span style=color:#AE81FF>2</span>)\n</pre>"
  }, out, _component, "84");

  out.w("<h3 id=boolean-attributes><a name=boolean-attributes class=anchor href=#boolean-attributes><span class=header-link></span></a>Boolean attributes</h3><p>HTML defines the following rules for <a href=https://www.w3.org/TR/2008/WD-html5-20080610/semantics.html#boolean>boolean attributes</a>:</p><blockquote class=null><p>The presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.</p></blockquote><p>In Marko when an attribute value evaluates to <code>false</code>, <code>null</code>, or <code>undefined</code>, the attribute is not included in the output. If an attribute value is <code>true</code>, only the attribute name is included in the output.</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>>\n&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>false</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>false</span>\n</pre>"
  }, out, _component, "98");

  out.w("<p>Renders the following HTML:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span>=<span style=color:#FFF066>\"checkbox\"</span> <span style=color:#A6E22E>checked</span> /> &lt;<span style=color:#FF4185>input</span> <span style=color:#A6E22E>type</span>=<span style=color:#FFF066>\"checkbox\"</span> />\n</pre><p>Similarly, when only an attribute name is defined, it is equivalent to specifying the attribute with a value of <code>true</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- These are equivalent --></span>\n&lt;<span style=color:#FF4185>custom-menu</span> <span style=color:#A6E22E>expanded</span>/>\n&lt;<span style=color:#FF4185>custom-menu</span> <span style=color:#A6E22E>expanded</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// These are equivalent</span>\n<span style=color:#FF4185>custom-menu</span> <span style=color:#A6E22E>expanded</span>\n<span style=color:#FF4185>custom-menu</span> <span style=color:#A6E22E>expanded</span><span style=color:#FFFFFF>=</span><span style=color:#AE81FF>true</span>\n</pre>"
  }, out, _component, "103");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> You can take advantage of the way Marko handles boolean attributes to conditionally render attributes:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>(<span style=color:#FFFFFF>active</span> <span style=color:#FF4185>&&</span> <span style=color:#FFF066>\"tab-active\"</span>)><span style=color:#FFF066>Hello</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>(<span style=color:#FFFFFF>active</span> <span style=color:#FF4185>&&</span> <span style=color:#FFF066>\"tab-active\"</span>) --<span style=color:#FFF066> Hello</span>\n</pre>"
  }, out, _component, "108");

  out.w("<p>With a value of <code>true</code> for <code>active</code>, the output would be the following:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"tab-active\"</span>>Hello&lt;/<span style=color:#FF4185>div</span>>\n</pre><p>With a value of <code>false</code> for <code>active</code>, the output would be the following:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>Hello&lt;/<span style=color:#FF4185>div</span>>\n</pre></blockquote><h3 id=dynamic-attributes><a name=dynamic-attributes class=anchor href=#dynamic-attributes><span class=header-link></span></a>Dynamic attributes</h3><p>The spread syntax (<code>...</code>) can be used to merge in an object as attributes to a tag:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>a</span> ...<span style=color:#FFFFFF>attrs</span> <span style=color:#A6E22E>target</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"_blank\"</span>><span style=color:#FFF066>eBay</span>&lt;/<span style=color:#FF4185>a</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>a</span> ...<span style=color:#FFFFFF>attrs</span> <span style=color:#A6E22E>target</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"_blank\"</span> --<span style=color:#FFF066> eBay</span>\n</pre>"
  }, out, _component, "123");

  out.w("<p>With <code>attrs</code> as the following value:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>{\n    class: <span style=color:#FFF066>\"active\"</span>,\n    href: <span style=color:#FFF066>\"https://ebay.com/\"</span>\n}\n</pre><p>would output the following HTML:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"active\"</span> <span style=color:#A6E22E>href</span>=<span style=color:#FFF066>\"https://ebay.com/\"</span> <span style=color:#A6E22E>target</span>=<span style=color:#FFF066>\"_blank\"</span>>eBay&lt;/<span style=color:#FF4185>a</span>>\n</pre><blockquote class=protip><p><strong>ProTip:</strong> With spread attributes order matters. You can take advantage of this to implement both default attributes, and enforced attributes.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>custom-tag</span> ...<span style=color:#FFFFFF>defaults</span> ...<span style=color:#FFFFFF>userSupplied</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"overridden\"</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>custom-tag</span> ...<span style=color:#FFFFFF>defaults</span> ...<span style=color:#FFFFFF>userSupplied</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"overridden\"</span>\n</pre>"
  }, out, _component, "131");

  out.w("</blockquote><blockquote class=protip><p><strong>ProTip:</strong> You can provide <code>undefined</code> to a spread attribute which will output nothing.</p></blockquote><h3 id=style-attribute><a name=style-attribute class=anchor href=#style-attribute><span class=header-link></span></a>Style attribute</h3><p>You can pass a string as the value of <code>style</code> just as you would in HTML, in addition Marko supports passing an object or array as the value of the <code>style</code> attribute:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- string: --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"display:block;margin-right:16px\"</span>/>\n\n<span style=color:#8F8F9E>&lt;!-- object: --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{ display: <span style=color:#FFF066>\"block\"</span>, color: <span style=color:#AE81FF>false</span>, marginRight: <span style=color:#AE81FF>16</span> }/>\n\n<span style=color:#8F8F9E>&lt;!-- array: --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>\"display:block\"</span>, <span style=color:#AE81FF>null</span>, { marginRight: <span style=color:#AE81FF>16</span> }]/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// string:</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"display:block;margin-right:16px\"</span>\n<span style=color:#8F8F9E>// object:</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n    display: <span style=color:#FFF066>\"block\"</span>,\n    color: <span style=color:#AE81FF>false</span>,\n    marginRight: <span style=color:#AE81FF>16</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n<span style=color:#8F8F9E>// array:</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>[\n    <span style=color:#FFF066>\"display:block\"</span>,\n    <span style=color:#AE81FF>null</span>,\n    {\n        marginRight: <span style=color:#AE81FF>16</span>\n    }\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "143");

  out.w("<p>In all cases, the output will be the same:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span>=<span style=color:#FFF066>\"</span><span style=color:#FFF066>display:block;margin-right:16px;</span><span style=color:#FFF066>\"</span>>&lt;/<span style=color:#FF4185>div</span>>\n</pre><h3 id=class-attribute><a name=class-attribute class=anchor href=#class-attribute><span class=header-link></span></a>Class attribute</h3><p>The <code>class</code> attribute also supports receiving an object or array (in addition to a string) as shown below:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- string: --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"a c\"</span>/>\n\n<span style=color:#8F8F9E>&lt;!-- object: --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>{ a:<span style=color:#AE81FF>true</span>, b:<span style=color:#AE81FF>false</span>, c:<span style=color:#AE81FF>true</span> }/>\n\n<span style=color:#8F8F9E>&lt;!-- array: --></span>\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>[<span style=color:#FFF066>\"a\"</span>, <span style=color:#AE81FF>null</span>, { c:<span style=color:#AE81FF>true</span> }]/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// string:</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"a c\"</span>\n<span style=color:#8F8F9E>// object:</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>{\n    a: <span style=color:#AE81FF>true</span>,\n    b: <span style=color:#AE81FF>false</span>,\n    c: <span style=color:#AE81FF>true</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n<span style=color:#8F8F9E>// array:</span>\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span>[\n    <span style=color:#FFF066>\"a\"</span>,\n    <span style=color:#AE81FF>null</span>,\n    {\n        c: <span style=color:#AE81FF>true</span>\n    }\n<span style=color:#F8F8F0;background-color:#FF4185>]</span>\n</pre>"
  }, out, _component, "152");

  out.w("<p>In all cases, the output will be the same:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"a c\"</span>>&lt;/<span style=color:#FF4185>div</span>>\n</pre><h3 id=shorthand-attributes><a name=shorthand-attributes class=anchor href=#shorthand-attributes><span class=header-link></span></a>Shorthand attributes</h3><p>Marko provides a shorthand for declaring classes and ids on an element:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.my-class</span>/>\n&lt;<span style=color:#FF4185>span</span><span style=color:#A6E22E>#my-id</span>/>\n&lt;<span style=color:#FF4185>button</span><span style=color:#A6E22E>#submit.primary.large</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span><span style=color:#A6E22E>.my-class</span>\n<span style=color:#FF4185>span</span><span style=color:#A6E22E>#my-id</span>\n<span style=color:#FF4185>button</span><span style=color:#A6E22E>#submit.primary.large</span>\n</pre>"
  }, out, _component, "160");

  out.w("<p>Renders the following HTML:</p><p><em>HTML Output:</em></p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"my-class\"</span>>&lt;/<span style=color:#FF4185>div</span>>\n&lt;<span style=color:#FF4185>span</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"my-id\"</span>>&lt;/<span style=color:#FF4185>span</span>>\n&lt;<span style=color:#FF4185>button</span> <span style=color:#A6E22E>id</span>=<span style=color:#FFF066>\"submit\"</span> <span style=color:#A6E22E>class</span>=<span style=color:#FFF066>\"primary large\"</span>>&lt;/<span style=color:#FF4185>button</span>>\n</pre><h2 id=parameters><a name=parameters class=anchor href=#parameters><span class=header-link></span></a>Parameters</h2><p>When a tag renders its body content, it may provide data which can be received by defining parameters after the tagname. Parameters are available to the tag&#39;s body content.</p><p>This is a powerful feature that allows components to provide functionality and data while giving you full control over what gets rendered.</p><p>In the following example, <code>&lt;mouse&gt;</code> provides a parameter which we have named <code>position</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>mouse</span>|<span style=color:#FFAC4D;font-style:italic>position</span>|>\n<span style=color:#FFF066>   The mouse is at </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>position</span>.<span style=color:#FFFFFF>x</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>position</span>.<span style=color:#FFFFFF>y</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n&lt;/<span style=color:#FF4185>mouse</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>mouse</span>|<span style=color:#FFAC4D;font-style:italic>position</span>| --<span style=color:#FFF066> The mouse is at </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>position</span>.<span style=color:#FFFFFF>x</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>position</span>.<span style=color:#FFFFFF>y</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "172");

  out.w("<blockquote class=null><p><code>&lt;mouse&gt;</code> would <a href=/docs/body-content/ >render its body</a> and provide the position similar to this: <code>&lt;&#36;{input.renderBody} x=0 y=0/&gt;</code>.</p></blockquote><blockquote class=protip><p><strong>ProTip:</strong> Tag <code>|parameters|</code> are treated as regular JavaScript function parameters. This means you can destructure, set default values, etc.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>mouse</span>|{ <span style=color:#FFAC4D;font-style:italic>x</span>, <span style=color:#FFAC4D;font-style:italic>y</span> }|>\n<span style=color:#FFF066>  The mouse is at </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>x</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>y</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n&lt;/<span style=color:#FF4185>mouse</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>mouse</span>|{ <span style=color:#FFAC4D;font-style:italic>x</span>, <span style=color:#FFAC4D;font-style:italic>y</span> }| --<span style=color:#FFF066> The mouse is at </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>x</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>y</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "182");

  out.w("</blockquote><blockquote class=note><p><strong>Note:</strong> Parameters are not available to attributes, only to the tag body.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>mouse</span>|<span style=color:#FFAC4D;font-style:italic>position</span>| <span style=color:#A6E22E>something</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>position</span>>\n<span style=color:#FFF066>  ReferenceError when setting the \"something\" attribute</span>\n&lt;/<span style=color:#FF4185>mouse</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>mouse</span>|<span style=color:#FFAC4D;font-style:italic>position</span>| <span style=color:#A6E22E>something</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>position</span>\n    --<span style=color:#FFF066> ReferenceError when setting the \"something\" attribute</span>\n</pre>"
  }, out, _component, "186");

  out.w("</blockquote><p>Parameters are used by some of Marko&#39;s <a href=/docs/core-tags/ >core tags</a> like the <a href=/docs/core-tags/#for><code>&lt;for&gt;</code></a> and <a href=/docs/core-tags/#await><code>&lt;await&gt;</code></a> tags.</p><h2 id=arguments><a name=arguments class=anchor href=#arguments><span class=header-link></span></a>Arguments</h2><p>Some tags and attributes accept javascript style <code>arguments</code>. Arguments are denoted by parenthesis following the tag or attribute name. Arguments provide a way to pass unnamed data to a tag.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>if</span>(<span style=color:#AE81FF>true</span>)>\n    &lt;<span style=color:#FF4185>strong</span>><span style=color:#FFF066>Marko is awesome</span>&lt;/<span style=color:#FF4185>strong</span>>\n&lt;/<span style=color:#66D9EF>if</span>>\n\n&lt;<span style=color:#FF4185>h1</span> <span style=color:#A6E22E>body-only-if</span>(<span style=color:#FFFFFF>skipHeading</span>)>\n<span style=color:#FFF066>    Conditional display heading, but always show content!</span>\n&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>if</span>(<span style=color:#AE81FF>true</span>)\n    -- &lt;<span style=color:#FF4185>strong</span>><span style=color:#FFF066>Marko is awesome</span>&lt;/<span style=color:#FF4185>strong</span>>\n<span style=color:#FF4185>h1</span> <span style=color:#A6E22E>body-only-if</span>(<span style=color:#FFFFFF>skipHeading</span>)\n    --<span style=color:#FFF066> Conditional display heading, but always show content!</span>\n</pre>"
  }, out, _component, "198");

  out.w("<p>Arguments are used by some of Marko&#39;s <a href=/docs/core-tags/ >core tags</a> like the <a href=/docs/core-tags/#if-else-if-else><code>&lt;if&gt;</code></a> tag and <a href=/docs/core-tags/#body-only-if><code>body-only-if</code></a> attribute displayed above.</p><p>Previously you could also use them in your own <a href=/docs/custom-tags/ >custom tags</a> however it is now recommended to use <a href=#dynamic-attributes>dynamic attributes</a>.</p><h2 id=dynamic-tagname><a name=dynamic-tagname class=anchor href=#dynamic-tagname><span class=header-link></span></a>Dynamic tagname</h2><p>The <code>&lt;&#36;{dynamic}&gt;</code> syntax is used to render a tag or component that isn&#39;t determined until runtime. It can also be used within a <a href=/docs/custom-tags/ >custom tag</a> to render body content that was passed to that tag.</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>href</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>'a'</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>'button'</span><span style=color:#66D9EF>}</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>href</span>>\n<span style=color:#FFF066>    Click me!</span>\n&lt;/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>href</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"a\"</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"button\"</span><span style=color:#66D9EF>}</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>href</span>><span style=color:#FFF066>Click me!</span>&lt;/>\n</pre>"
  }, out, _component, "215");

  out.w("<p>With <code>href</code> as <code>https://ebay.com</code> would output the following HTML:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span>=<span style=color:#FFF066>\"https://ebay.com\"</span>>Click me!&lt;/<span style=color:#FF4185>a</span>>\n</pre><p>And with <code>href</code> as <code>undefined</code> would output the following HTML:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span>>Click me!&lt;/<span style=color:#FF4185>button</span>>\n</pre><blockquote class=protip><p><strong>ProTip:</strong> If you find that you have a wrapper element that is conditional, but whose body should always be rendered then you can use a null dynamic tag. For example, to only render a wrapping <code>&lt;a&gt;</code> tag if there is a valid URL then you could do the following:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>linkUrl</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"a\"</span> <span style=color:#FF4185>:</span> <span style=color:#AE81FF>null</span><span style=color:#66D9EF>}</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>linkUrl</span> >\n<span style=color:#FFF066>   Some body content</span>\n&lt;/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>linkUrl</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"a\"</span> <span style=color:#FF4185>:</span> <span style=color:#AE81FF>null</span><span style=color:#66D9EF>}</span> <span style=color:#A6E22E>href</span><span style=color:#FFFFFF>=</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>linkUrl</span>><span style=color:#FFF066>Some body content</span>&lt;/>\n</pre>"
  }, out, _component, "229");

  out.w("<p>Given a value of <code>&quot;http://localhost/&quot;</code> for the <code>input.linkUrl</code> variable: , the output would be the following:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>a</span> <span style=color:#A6E22E>href</span>=<span style=color:#FFF066>\"http://localhost/\"</span>> Some body content &lt;/<span style=color:#FF4185>a</span>>\n</pre><p>Given a value of <code>undefined</code> for the <code>input.linkUrl</code> variable: , the output would be the following:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>Some body content\n</pre></blockquote><h3 id=dynamic-components><a name=dynamic-components class=anchor href=#dynamic-components><span class=header-link></span></a>Dynamic components</h3><p>Instead of just strings, the dynamic tagname can also be a component:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>componentA</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;component-a>\"</span>;\n<span style=color:#FF4185>import</span> <span style=color:#FFFFFF>componentB</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;component-b>\"</span>;\n\n&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>useA</span> <span style=color:#FF4185>?</span> <span style=color:#FFFFFF>componentA</span> <span style=color:#FF4185>:</span> <span style=color:#FFFFFF>componentB</span><span style=color:#66D9EF>}</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>componentA</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;component-a>\"</span>\n<span style=color:#FF4185>import</span> <span style=color:#FFFFFF>componentB</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;component-b>\"</span>\n\n&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>useA</span> <span style=color:#FF4185>?</span> <span style=color:#FFFFFF>componentA</span> <span style=color:#FF4185>:</span> <span style=color:#FFFFFF>componentB</span><span style=color:#66D9EF>}</span>/>\n</pre>"
  }, out, _component, "242");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> You can also switch between a normal HTML tag and a component:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>FancyButton</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;fancy-button>\"</span>;\n\n&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>isFancy</span> <span style=color:#FF4185>?</span> <span style=color:#FFFFFF>FancyButton</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>'button'</span><span style=color:#66D9EF>}</span>>\n<span style=color:#FFF066>    Button text</span>\n&lt;/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>FancyButton</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;fancy-button>\"</span>\n\n&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>isFancy</span> <span style=color:#FF4185>?</span> <span style=color:#FFFFFF>FancyButton</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"button\"</span><span style=color:#66D9EF>}</span>><span style=color:#FFF066>Button text</span>&lt;/>\n</pre>"
  }, out, _component, "246");

  out.w("</blockquote><blockquote class=note><p><strong>Note:</strong> You cannot reference a Marko custom tag using a name string:</p><div class=code-block-filename>Marko Source</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>isFancy</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>'fancy-button'</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>'button'</span><span style=color:#66D9EF>}</span>>\n<span style=color:#FFF066>    Button text</span>\n&lt;/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>isFancy</span> <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"fancy-button\"</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"button\"</span><span style=color:#66D9EF>}</span>><span style=color:#FFF066>Button text</span>&lt;/>\n</pre>"
  }, out, _component, "251");

  out.w("<p>With <code>isFancy</code> as <code>true</code> would output the following HTML:</p><div class=code-block-filename>HTML Output</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>fancy-button</span>>Button text&lt;/<span style=color:#FF4185>fancy-button</span>>\n</pre></blockquote><h3 id=dynamic-body-content><a name=dynamic-body-content class=anchor href=#dynamic-body-content><span class=header-link></span></a>Dynamic body content</h3><p>When a custom tag receives <a href=/docs/body-content/ >body content</a>, it is passed as a <code>renderBody</code> property. To render this content you can pass the <code>renderBody</code> as the dynamic tagname.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"container\"</span>>\n    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> <span style=color:#A6E22E>class</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"container\"</span>\n    &lt;<span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>renderBody</span><span style=color:#66D9EF>}</span>/>\n</pre>"
  }, out, _component, "263");

  out.w("<h2 id=attribute-tag><a name=attribute-tag class=anchor href=#attribute-tag><span class=header-link></span></a>Attribute Tag</h2><p>As the name implies, <code>&lt;@attribute-tags&gt;</code> are special attributes that take the form of tags. They allow you to pass named body sections to a <a href=/docs/custom-tags/ >custom tag</a>.</p><p>The core <code>&lt;await&gt;</code> tag allows you to pass multiple body sections that it will conditionally render based on the state of the promise.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>somePromise</span>)>\n    &lt;<span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>result</span>|>\n<span style=color:#FFF066>        The promise resolved: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>result</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#A6E22E>@then</span>>\n    &lt;<span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>error</span>|>\n<span style=color:#FFF066>        The promise rejected: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>error</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span>\n    &lt;/<span style=color:#A6E22E>@catch</span>>\n&lt;/<span style=color:#66D9EF>await</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF>await</span>(<span style=color:#FFFFFF>somePromise</span>)\n    <span style=color:#A6E22E>@then</span>|<span style=color:#FFAC4D;font-style:italic>result</span>| --<span style=color:#FFF066> The promise resolved: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>result</span><span style=color:#66D9EF>}</span>\n    <span style=color:#A6E22E>@catch</span>|<span style=color:#FFAC4D;font-style:italic>error</span>| --<span style=color:#FFF066> The promise rejected: </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>error</span>.<span style=color:#FFFFFF>message</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "272");

  out.w("<p>These body sections are also commonly used to create layouts:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>page-layout</span>>\n    &lt;<span style=color:#A6E22E>@heading</span>>\n        &lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello</span>&lt;/<span style=color:#FF4185>h1</span>>\n    &lt;/<span style=color:#A6E22E>@heading</span>>\n    &lt;<span style=color:#A6E22E>@body</span>>\n        &lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>Lorem ipsum....</span>&lt;/<span style=color:#FF4185>p</span>>\n    &lt;/<span style=color:#A6E22E>@body</span>>\n&lt;/<span style=color:#FF4185>page-layout</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>page-layout</span>\n    <span style=color:#A6E22E>@heading</span>\n        <span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello</span>\n    <span style=color:#A6E22E>@body</span>\n        <span style=color:#FF4185>p</span> --<span style=color:#FFF066> Lorem ipsum....</span>\n</pre>"
  }, out, _component, "274");

  out.w("<p>These tags are passed to the custom tag as objects with a <code>renderBody</code>, it can then <a href=/docs/body-content/ >render its body content</a>.</p><blockquote class=note><p><strong>Note:</strong> Attribute tags can have their own parameters, but like attributes, they cannot access the parameters of their parent tag:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>list</span>|<span style=color:#FFAC4D;font-style:italic>item</span>|>\n<span style=color:#FFF066>  </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>item</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n  &lt;<span style=color:#A6E22E>@separator</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>item</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> (oops, ReferenceError)</span>&lt;/<span style=color:#A6E22E>@separator</span>>\n&lt;/<span style=color:#FF4185>list</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>list</span>|<span style=color:#FFAC4D;font-style:italic>item</span>|\n    --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>item</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>&lt;<span style=color:#A6E22E>@separator</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>item</span><span style=color:#66D9EF>}</span><span style=color:#FFF066> (oops, ReferenceError)</span>&lt;/<span style=color:#A6E22E>@separator</span>>\n</pre>"
  }, out, _component, "281");

  out.w("</blockquote><h2 id=inline-javascript><a name=inline-javascript class=anchor href=#inline-javascript><span class=header-link></span></a>Inline JavaScript</h2><p>To execute JavaScript in your template you can insert a Javascript statement using the <code>&#36; &lt;code&gt;</code> syntax.</p><p>A line that starts with a <code>&#36;</code> followed by a space will execute the code that follows.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>name</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"World\"</span>;\n\n&lt;<span style=color:#FF4185>div</span>>\n<span style=color:#FFF066>    Hello, </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    <span style=color:#FF4185>$</span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"The value rendered was\"</span>, <span style=color:#FFFFFF>name</span>);\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>name</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"World\"</span>;\n<span style=color:#FF4185>div</span>\n    --<span style=color:#FFF066>  Hello, </span>\n    --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n    <span style=color:#FF4185>$</span> <span style=color:#FFFFFF>console</span>.<span style=color:#A6E22E>log</span>(<span style=color:#FFF066>\"The value rendered was\"</span>, <span style=color:#FFFFFF>name</span>);\n</pre>"
  }, out, _component, "289");

  out.w("<p>A statement may continue onto subsequent lines if new lines are bounded by <code>{}</code>, <code>[]</code>, <code>()</code>, <code>``</code>, or <code>/**/</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> {\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    age: <span style=color:#AE81FF>32</span>\n};\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>person</span> <span style=color:#FFFFFF>=</span> {\n    name: <span style=color:#FFF066>\"Frank\"</span>,\n    age: <span style=color:#AE81FF>32</span>\n};\n</pre>"
  }, out, _component, "296");

  out.w("<p>Multiple statements or an unbounded statement may be used by wrapping the statement(s) in a block:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>bgColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>getRandomColor</span>();\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>textColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>isLight</span>(<span style=color:#FFFFFF>bgColor</span>)\n        <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"black\"</span>\n        <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"white\"</span>;\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> {\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>bgColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>getRandomColor</span>();\n    <span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>textColor</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>isLight</span>(<span style=color:#FFFFFF>bgColor</span>) <span style=color:#FF4185>?</span> <span style=color:#FFF066>\"black\"</span> <span style=color:#FF4185>:</span> <span style=color:#FFF066>\"white\"</span>;\n}\n</pre>"
  }, out, _component, "298");

  out.w("<blockquote class=protip><p><strong>ProTip:</strong> Any JavaScript statement can be used here, even <code>debugger</code>:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>>\n<span style=color:#FFF066>    </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>textColor</span><span style=color:#66D9EF>}</span>\n    <span style=color:#FF4185>$</span> <span style=color:#FF4185>debugger</span>; <span style=color:#8F8F9E>// Quickly debug `textColor`</span>\n&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>textColor</span><span style=color:#66D9EF>}</span>\n    <span style=color:#FF4185>$</span> <span style=color:#FF4185>debugger</span>; <span style=color:#8F8F9E>// Quickly debug `textColor`</span>\n</pre>"
  }, out, _component, "303");

  out.w("</blockquote><blockquote class=protip><p><strong>ProTip:</strong> If necessary, you can escape <code>&#36;</code> using a backslash to have it be treated as text instead of a placeholder token:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>p</span>><span style=color:#FFF066>You can run JS in a Marko template like this:</span>&lt;/<span style=color:#FF4185>p</span>>\n&lt;<span style=color:#FF4185>code</span>>\n<span style=color:#FFF066>    \\$ var num = 123;</span>\n&lt;/<span style=color:#FF4185>code</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>p</span> --<span style=color:#FFF066> You can run JS in a Marko template like this:</span>\n<span style=color:#FF4185>code</span> --<span style=color:#FFF066> \\\\$ var num = 123;</span>\n</pre>"
  }, out, _component, "308");

  out.w("</blockquote><blockquote class=protip><p><strong>ProTip:</strong> If you find yourself writing a lot of inline JS, consider moving it out to an external file and then <a href=#importing-external-files><code>import</code></a> it.</p></blockquote><h3 id=static-javascript><a name=static-javascript class=anchor href=#static-javascript><span class=header-link></span></a>Static JavaScript</h3><p>Inline JavaScript will run each time your template is rendered, but the JavaScript code that follows <code>static</code> will only run once when the template is loaded. It must be declared at the top level and does not have access to values passed in at render time.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>formatter</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>new</span> Formatter();\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>sum</span>(<span style=color:#FFAC4D;font-style:italic>a</span>, <span style=color:#FFAC4D;font-style:italic>b</span>) {\n    <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>a</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>b</span>;\n};\n\n&lt;<span style=color:#FF4185>div</span>><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>formatter</span>.<span style=color:#A6E22E>format</span>(<span style=color:#A6E22E>sum</span>(<span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>))<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>count</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>0</span>;\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>formatter</span> <span style=color:#FFFFFF>=</span> <span style=color:#FF4185>new</span> Formatter();\n\n<span style=color:#FF4185>static </span><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>sum</span>(<span style=color:#FFAC4D;font-style:italic>a</span>, <span style=color:#FFAC4D;font-style:italic>b</span>) {\n    <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>a</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>b</span>;\n}\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>formatter</span>.<span style=color:#A6E22E>format</span>(<span style=color:#A6E22E>sum</span>(<span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>))<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "319");

  out.w("<p>Like inline Javascript, multiple statements or an unbounded statement may be used by wrapping the statement(s) in a block:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span>{\n    <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>base</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>2</span>;\n    <span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>sum</span>(<span style=color:#FFAC4D;font-style:italic>a</span>, <span style=color:#FFAC4D;font-style:italic>b</span>) {\n        <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>base</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>a</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>b</span>;\n    };\n}\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>static </span>{\n    <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>base</span> <span style=color:#FFFFFF>=</span> <span style=color:#AE81FF>2</span>;\n    <span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>sum</span>(<span style=color:#FFAC4D;font-style:italic>a</span>, <span style=color:#FFAC4D;font-style:italic>b</span>) {\n        <span style=color:#FF4185>return</span> <span style=color:#FFFFFF>base</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>a</span> <span style=color:#FF4185>+</span> <span style=color:#FFFFFF>b</span>;\n    }\n}\n</pre>"
  }, out, _component, "321");

  out.w("<h3 id=importing-external-files><a name=importing-external-files class=anchor href=#importing-external-files><span class=header-link></span></a>Importing external files</h3><p>The <code>import</code> statement is used to access data and functions from external files. It follows the same syntax as the <a href=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import>JavaScript <code>import</code> statement</a>.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>sum</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./utils/sum'</span>;\n&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>The sum of 2 + 3 is </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>sum</span>(<span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>)<span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>sum</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>'./utils/sum'</span>\n\n<span style=color:#FF4185>div</span> --<span style=color:#FFF066> The sum of 2 + 3 is </span><span style=color:#66D9EF>${</span><span style=color:#A6E22E>sum</span>(<span style=color:#AE81FF>2</span>, <span style=color:#AE81FF>3</span>)<span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "329");

  out.w("<p>As a shorthand you can also import components by providing it&#39;s html tag name wrapped in angle brackets, eg:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>MyComponent</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;my-component>\"</span>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>MyComponent</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"&lt;my-component>\"</span>\n</pre>"
  }, out, _component, "331");

  out.w("<p>This is especially useful with the <a href=%22#dynamic-tagname%22>dynamic tag name syntax</a> and uses the same <a href=/docs/custom-tags/#how-tags-are-discovered>component discovery</a> as if the tag was used in the template.</p><h2 id=comments><a name=comments class=anchor href=#comments><span class=header-link></span></a>Comments</h2><p>Standard HTML comments can be used and will be stripped out of the rendered output. At the top level of the template JavaScript comments (<code>// comment</code> and <code>/** comment */</code>) can also be used.</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>&lt;!-- This is a comment that will not be rendered --></span>\n\n&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>// This is a comment that will not be rendered</span>\n<span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello</span>\n</pre>"
  }, out, _component, "341");

  out.w("<p>If you would like for your HTML comment to show up in the final output then you can use the <a href=/docs/core-tags/#html-comment><code>html-comment</code> core tag</a>.</p>");
}, {
  t: syntax_marko_componentType,
  i: true
}, syntax_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/webpack.md
const webpack_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const webpack = (webpack_marko_template);

toc_registry.set("../../node_modules/marko/docs/webpack.md", "<ul class=\"toc toc-level1\"><li><a href=\"#installation\">Installation</a></li><li><a href=\"#client-rendering\">Client rendering</a></li><li><a href=\"#using-css-pre-processors\">Using CSS pre-processors</a></li><li><a href=\"#extracting-css\">Extracting CSS</a></li></ul>");




const webpack_marko_componentType = "3IUkWdJg",
      webpack_marko_component = {};
webpack_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=marko-webpack><a name=marko-webpack class=anchor href=#marko-webpack><span class=header-link></span></a>Marko + Webpack</h1><p>The <a href=https://github.com/marko-js/webpack>@marko/webpack/loader</a> loader for <a href=https://webpack.github.io/ >Webpack</a> will automatically compile all imported Marko templates during bundling. In addition, it will automatically bundle any template dependencies (including required CSS).</p><blockquote class=null><p><strong>ProTip</strong>: Want to see it in action? Check out the <a href=https://github.com/marko-js/examples/tree/master/examples/webpack-express><code>marko-webpack</code></a> demo repository. Or run <code>npx @marko/create --template webpack-express</code> to use this sample as a starting point for a new app.</p></blockquote><h2 id=installation><a name=installation class=anchor href=#installation><span class=header-link></span></a>Installation</h2><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install marko\nnpm install webpack @marko/webpack --save-dev\n</pre><h2 id=client-rendering><a name=client-rendering class=anchor href=#client-rendering><span class=header-link></span></a>Client rendering</h2><p>Let&#39;s say we have a simple view that we want to render in the browser: <code>hello.marko</code></p><div class=code-block-filename>hello.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>h1</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>&lt;/<span style=color:#FF4185>h1</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>h1</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span>\n</pre>"
  }, out, _component, "22");

  out.w("<p>First, let&#39;s create a <code>client.js</code> that requires the view and renders it to the body:</p><div class=code-block-filename>client.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>import</span> <span style=color:#FFFFFF>MyTemplate</span> <span style=color:#FF4185>from</span> <span style=color:#FFF066>\"./hello.marko\"</span>;\n\n<span style=color:#FFFFFF>MyTemplate</span>.<span style=color:#A6E22E>renderSync</span>({ name: <span style=color:#FFF066>\"Marko\"</span> }).<span style=color:#A6E22E>appendTo</span>(<span style=color:#FFFFFF>document</span>.<span style=color:#FFFFFF>body</span>);\n</pre><p>Now, let&#39;s configure <code>webpack</code> to compile the <code>client.js</code> file and use <code>@marko/webpack/loader</code> for any <code>*.marko</code> files:</p><div class=code-block-filename>webpack.config.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> {\n  entry: <span style=color:#FFF066>\"./client.js\"</span>,\n  output: {\n    path: <span style=color:#FFFFFF>__dirname</span>,\n    filename: <span style=color:#FFF066>\"static/bundle.js\"</span>\n  },\n  resolve: {\n    extensions: [<span style=color:#FFF066>\".js\"</span>, <span style=color:#FFF066>\".marko\"</span>]\n  },\n  module: {\n    rules: [\n      {\n        test:<span style=color:#FFF066> /</span><span style=color:#AE81FF>\\.</span><span style=color:#FFF066>marko</span><span style=color:#FF4185>$</span><span style=color:#FFF066>/</span>,\n        loader: <span style=color:#FFF066>\"@marko/webpack/loader\"</span>\n      }\n    ]\n  }\n};\n</pre><p>Run <code>webpack</code> from your terminal and you&#39;ll have a new <code>static/bundle.js</code> file created. Reference that from an html file and you&#39;re good to go.</p><div class=code-block-filename>index.html</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;!<span style=color:#FF4185>DOCTYPE</span> <span style=color:#A6E22E>html</span>>\n&lt;<span style=color:#FF4185>html</span>>\n  &lt;<span style=color:#FF4185>body</span>>\n    &lt;<span style=color:#FF4185>script</span> <span style=color:#A6E22E>src</span>=<span style=color:#FFF066>\"static/bundle.js\"</span>>&lt;/<span style=color:#FF4185>script</span>>\n  &lt;/<span style=color:#FF4185>body</span>>\n&lt;/<span style=color:#FF4185>html</span>>\n</pre><p>Load up that page in your browser and you should see <code>Hello Marko</code> staring back at you.</p><h2 id=using-css-pre-processors><a name=using-css-pre-processors class=anchor href=#using-css-pre-processors><span class=header-link></span></a>Using CSS pre-processors</h2><p>If you&#39;re using inline css with pre-processors, you must configure the appropriate loader.</p><div class=code-block-filename>pretty.marko</div>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#A6E22E>.pretty</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>:<span style=color:#FFFFFF>@pretty-color</span>;\n    }\n}\n\n&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.pretty</span>/>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>style</span>.<span style=color:#FF4185>less</span> {\n    <span style=color:#A6E22E>.pretty</span> {\n        <span style=color:#66D9EF;font-style:italic>color</span>: <span style=color:#FFFFFF>@pretty-color</span>;\n    }\n}\n\n<span style=color:#FF4185>div</span><span style=color:#A6E22E>.pretty</span>\n</pre>"
  }, out, _component, "43");

  out.w("<div class=code-block-filename>webpack.config.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#8F8F9E>//...</span>\nmodule: {\n  rules: [\n    <span style=color:#8F8F9E>//...</span>\n    {\n      test:<span style=color:#FFF066> /</span><span style=color:#AE81FF>\\.</span><span style=color:#FFF066>less</span><span style=color:#FF4185>$</span><span style=color:#FFF066>/</span>, <span style=color:#8F8F9E>// matches style.less { ... } from our template</span>\n      use: [<span style=color:#FFF066>\"style-loader\"</span>, <span style=color:#FFF066>\"css-loader\"</span>, <span style=color:#FFF066>\"less-loader\"</span>]\n    }\n    <span style=color:#8F8F9E>//...</span>\n  ];\n}\n<span style=color:#8F8F9E>//...</span>\n</pre><h2 id=extracting-css><a name=extracting-css class=anchor href=#extracting-css><span class=header-link></span></a>Extracting CSS</h2><p>It is recommended to configure the <a href=https://webpack.js.org/plugins/mini-css-extract-plugin><code>MiniCSSExtractPlugin</code></a> so that you get a separate css bundle rather than it being included in the JavaScript bundle.</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034>npm install mini-css-extract-plugin --save-dev\n</pre><div class=code-block-filename>webpack.config.js</div><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>const</span> <span style=color:#FFFFFF>CSSExtractPlugin</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"mini-css-extract-plugin\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>module</span>.<span style=color:#66D9EF;font-style:italic>exports</span> <span style=color:#FFFFFF>=</span> {\n  entry: <span style=color:#FFF066>\"./client.js\"</span>,\n  resolve: {\n    extensions: [<span style=color:#FFF066>\".js\"</span>, <span style=color:#FFF066>\".marko\"</span>]\n  },\n  module: {\n    rules: [\n      {\n        test:<span style=color:#FFF066> /</span><span style=color:#AE81FF>\\.</span><span style=color:#FFF066>marko</span><span style=color:#FF4185>$</span><span style=color:#FFF066>/</span>,\n        loader: <span style=color:#FFF066>\"@marko/webpack/loader\"</span>\n      },\n      {\n        test:<span style=color:#FFF066> /</span><span style=color:#AE81FF>\\.</span><span style=color:#FFF066>(less</span><span style=color:#FF4185>|</span><span style=color:#FFF066>css)</span><span style=color:#FF4185>$</span><span style=color:#FFF066>/</span>,\n        use: [<span style=color:#FFFFFF>CSSExtractPlugin</span>.<span style=color:#FFFFFF>loader</span>, <span style=color:#FFF066>\"css-loader\"</span>, <span style=color:#FFF066>\"less-loader\"</span>]\n      }\n    ]\n  },\n  plugins: [\n    <span style=color:#8F8F9E>// Write out CSS bundle to its own file:</span>\n    <span style=color:#FF4185>new</span> CSSExtractPlugin({\n      filename: <span style=color:#FFF066>\"[name].css\"</span>\n    })\n  ]\n};\n</pre>");
}, {
  t: webpack_marko_componentType,
  i: true
}, webpack_marko_component);
;// CONCATENATED MODULE: ../../node_modules/marko/docs/why-is-marko-fast.md
const why_is_marko_fast_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const why_is_marko_fast = (why_is_marko_fast_marko_template);

toc_registry.set("../../node_modules/marko/docs/why-is-marko-fast.md", "<ul class=\"toc toc-level1\"><li><ul class=\"toc toc-level2\"><li><a href=\"#multiple-compilation-outputs\">Multiple Compilation Outputs</a><ul class=\"toc toc-level3\"><li><a href=\"#compiled-for-the-server\">Compiled for the server</a></li><li><a href=\"#compiled-for-the-browser\">Compiled for the browser</a></li></ul></li><li><a href=\"#modular-runtime\">Modular Runtime</a></li><li><a href=\"#high-performance-server-side-rendering\">High performance server-side rendering</a></li><li><a href=\"#compile-time-optimization-of-static-sub-trees\">Compile-time optimization of static sub-trees</a></li><li><a href=\"#compile-time-optimization-of-static-attributes\">Compile-time optimization of static attributes</a></li><li><a href=\"#smart-compiler\">Smart compiler</a></li><li><a href=\"#event-delegation\">Event delegation</a></li></ul></li></ul>");




const why_is_marko_fast_marko_componentType = "eylgXNGa",
      why_is_marko_fast_marko_component = {};
why_is_marko_fast_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w("<h1 id=why-is-marko-fast><a name=why-is-marko-fast class=anchor href=#why-is-marko-fast><span class=header-link></span></a>Why is Marko Fast?</h1><a href=https://medium.com/@psteeleidem/why-is-marko-fast-a20796cb8ae3><img src=https://user-images.githubusercontent.com/1958812/28104838-d0182f48-6691-11e7-808d-d1ae2d0fed6d.png alt=\"Marko logo\" width=100%></a><br><blockquote class=null><p>This article was published in May 2017. You can find the original <a href=https://medium.com/@psteeleidem/why-is-marko-fast-a20796cb8ae3>&quot;Why is Marko Fast?&quot; article here</a>!</p></blockquote><p>At eBay we are using <a href=/ >Marko</a> to render over a billion requests every day and this has required us to finely tune Marko, our open source UI library. We have heavily optimized Marko for fast rendering, <a href=http://www.ebaytechblog.com/2014/12/08/async-fragments-rediscovering-progressive-html-rendering-with-marko/ >advanced performance techniques</a> and to achieve a minimal page weight (~10kb gzipped). Performance is only one concern because we have also had to scale Marko to support development across hundreds of teams in a way that allows developers to efficiently create maintainable and robust web apps.</p><p>We have created <a href=https://github.com/marko-js/isomorphic-ui-benchmarks>our own benchmarks</a> and we have <a href=https://github.com/raxjs/server-side-rendering-comparison/pull/11>added Marko to other benchmarks</a>, but benchmarks cannot always be trusted. While we make every effort to be fair with our benchmarks, what matters most is performance in real world applications as opposed to focusing on micro benchmarks. This is one reason that the V8 team has switched to <a href=https://v8project.blogspot.com/2016/12/how-v8-measures-real-world-performance.html>a new methodology to measure and understand real-world JavaScript performance</a>.</p><p>Similarly, we\u2019ve taken a look at how our developers are <em>actually</em> writing their Marko components and have found patterns that could be further optimized. Instead of focusing on benchmarks in this article, I want to focus on the details of optimizations that we have applied to Marko.</p><h3 id=multiple-compilation-outputs><a name=multiple-compilation-outputs class=anchor href=#multiple-compilation-outputs><span class=header-link></span></a>Multiple Compilation Outputs</h3><p>Marko is an isomorphic UI library that runs on both the server and in the browser. As <a href=https://medium.com/@mlrawlings>Michael Rawlings</a> mentioned in \u201C<a href=https://hackernoon.com/server-side-rendering-shootout-with-marko-preact-rax-react-and-vue-25e1ae17800f>Server-side Rendering Shootout</a>\u201D, when rendering on the server, Marko renders directly to a string representation of the document (HTML) that can be sent as the HTTP response.</p><p>When rendering in the browser, an HTML string would have to be parsed in order to update the DOM. For this reason, Marko compiles a view to a program that renders directly to a virtual document (VDOM) tree that can be used to efficiently update the real DOM when targeting the browser.</p><p>Given the following template:</p><script>if(localStorage.getItem('markojs-website:syntax') === 'concise'){document.body.classList.add('concise')}</script>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "27");

  out.w("<h4 id=compiled-for-the-server><a name=compiled-for-the-server class=anchor href=#compiled-for-the-server><span class=header-link></span></a>Compiled for the server</h4><p>The compiled output is optimized for streaming HTML output on the server:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>marko_template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/html\"</span>).<span style=color:#A6E22E>t</span>(<span style=color:#FFFFFF>__filename</span>),\n  <span style=color:#FFFFFF>marko_helpers</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/runtime/html/helpers\"</span>),\n  <span style=color:#FFFFFF>marko_escapeXml</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFFFFF>marko_helpers</span>.<span style=color:#FFFFFF>x</span>;\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>w</span>(<span style=color:#FFF066>\"&lt;div>Hello \"</span> <span style=color:#FF4185>+</span> <span style=color:#A6E22E>marko_escapeXml</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>) <span style=color:#FF4185>+</span> <span style=color:#FFF066>\"!&lt;/div>\"</span>);\n}\n</pre><h4 id=compiled-for-the-browser><a name=compiled-for-the-browser class=anchor href=#compiled-for-the-browser><span class=header-link></span></a>Compiled for the browser</h4><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>marko_template</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/vdom\"</span>).<span style=color:#A6E22E>t</span>(<span style=color:#FFFFFF>__filename</span>);\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#FFFFFF>out</span>\n    .<span style=color:#A6E22E>e</span>(<span style=color:#FFF066>\"DIV\"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#AE81FF>3</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\"Hello \"</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\"!\"</span>);\n}\n</pre><p>The compiled output is optimized for virtual DOM rendering in the browser:</p><h3 id=modular-runtime><a name=modular-runtime class=anchor href=#modular-runtime><span class=header-link></span></a>Modular Runtime</h3><p>The Marko runtime is not distributed as a single JavaScript file. Instead, the Marko compiler generates a JavaScript module that will only import the parts of the runtime that are actually needed. This allows us to add new features to Marko without bloating existing applications. For example, given the following template:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>color</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>'red'</span>;\n&lt;<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{backgroundColor: <span style=color:#FFFFFF>color</span>}>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>$</span> <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>color</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"red\"</span>;\n<span style=color:#FF4185>div</span> <span style=color:#A6E22E>style</span><span style=color:#FFFFFF>=</span>{\n    backgroundColor: <span style=color:#FFFFFF>color</span>\n<span style=color:#F8F8F0;background-color:#FF4185>}</span>\n</pre>"
  }, out, _component, "40");

  out.w("<p>In the above example, extra runtime code is needed to render the <code>style</code> attribute based on the JavaScript object that is provided. The compiled code that imports the <code>styleAttr</code> helper is shown below:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>marko_styleAttr</span> <span style=color:#FFFFFF>=</span> <span style=color:#66D9EF>require</span>(<span style=color:#FFF066>\"marko/runtime/vdom/helper-styleAttr\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>color</span> <span style=color:#FFFFFF>=</span> <span style=color:#FFF066>\"red\"</span>;\n  <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>e</span>(\n    <span style=color:#FFF066>\"DIV\"</span>,\n    {\n      style: <span style=color:#A6E22E>marko_styleAttr</span>({\n        backgroundColor: <span style=color:#FFFFFF>color</span>\n      })\n    },\n    <span style=color:#AE81FF>0</span>,\n    <span style=color:#AE81FF>4</span>\n  );\n}\n</pre><h3 id=high-performance-server-side-rendering><a name=high-performance-server-side-rendering class=anchor href=#high-performance-server-side-rendering><span class=header-link></span></a>High performance server-side rendering</h3><p>Compared to solutions based on JSX that exclusively do virtual DOM rendering, Marko has a huge advantage for server-side rendering. When rendering to a virtual DOM tree on the server it\u2019s a two-step process to render HTML:</p><ul><li>First pass to produce an entire virtual DOM tree in memory</li><li>Second pass to serialize the virtual DOM tree to an HTML string that can then be sent over the wire (this requires traversing the entire tree structure)</li></ul><p>In contrast, Marko renders directly to an HTML stream in a single pass. There is no intermediate tree data structure.</p><h3 id=compile-time-optimization-of-static-sub-trees><a name=compile-time-optimization-of-static-sub-trees class=anchor href=#compile-time-optimization-of-static-sub-trees><span class=header-link></span></a>Compile-time optimization of static sub-trees</h3><p>Given the following template:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span>><span style=color:#FFF066>This is a</span> &lt;<span style=color:#FF4185>strong</span>><span style=color:#FFF066>static</span>&lt;/<span style=color:#FF4185>strong</span>><span style=color:#FFF066> node</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span>\n    --<span style=color:#FFF066> This is a</span> &lt;<span style=color:#FF4185>strong</span>><span style=color:#FFF066>static</span>&lt;/<span style=color:#FF4185>strong</span>><span style=color:#FFF066> node</span>\n</pre>"
  }, out, _component, "56");

  out.w("<p>Marko will recognize that the template fragment produces the same output every time and it will thus create the virtual DOM node once as shown in the following compiled output:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>marko_node0</span> <span style=color:#FFFFFF>=</span> <span style=color:#A6E22E>marko_createElement</span>(<span style=color:#FFF066>\"DIV\"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#AE81FF>3</span>, <span style=color:#FF4185>...</span>)\n  .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\"This is a \"</span>)\n  .<span style=color:#A6E22E>e</span>(<span style=color:#FFF066>\"STRONG\"</span>, <span style=color:#AE81FF>null</span>, <span style=color:#AE81FF>1</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\"static\"</span>)\n  .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\" node\"</span>);\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>n</span>(<span style=color:#FFFFFF>marko_node0</span>);\n}\n</pre><p>Rendering a static sub-tree has virtually zero cost. In addition, Marko will skip diffing/patching static sub-trees.</p><p>Similarly, on the server, Marko will merge static parts of the template into a single string:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#FFFFFF>out</span>.<span style=color:#A6E22E>w</span>(<span style=color:#FFF066>\"&lt;div>This is a &lt;strong>static&lt;/strong> node&lt;/div>\"</span>);\n}\n</pre><h3 id=compile-time-optimization-of-static-attributes><a name=compile-time-optimization-of-static-attributes class=anchor href=#compile-time-optimization-of-static-attributes><span class=header-link></span></a>Compile-time optimization of static attributes</h3><p>Marko will also optimize static attributes on dynamic elements.</p><p>Given the following template:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>div</span><span style=color:#A6E22E>.hello</span>><span style=color:#FFF066>Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>&lt;/<span style=color:#FF4185>div</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>div</span><span style=color:#A6E22E>.hello</span> --<span style=color:#FFF066> Hello </span><span style=color:#66D9EF>${</span><span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span><span style=color:#66D9EF>}</span><span style=color:#FFF066>!</span>\n</pre>"
  }, out, _component, "65");

  out.w("<p>Marko will produce the following compiled output:</p><pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#66D9EF;font-style:italic>var</span> <span style=color:#FFFFFF>marko_attrs0</span> <span style=color:#FFFFFF>=</span> {\n  class: <span style=color:#FFF066>\"hello\"</span>\n};\n\n<span style=color:#66D9EF;font-style:italic>function</span> <span style=color:#A6E22E>render</span>(<span style=color:#FFAC4D;font-style:italic>input</span>, <span style=color:#FFAC4D;font-style:italic>out</span>) {\n  <span style=color:#FFFFFF>out</span>\n    .<span style=color:#A6E22E>e</span>(<span style=color:#FFF066>\"DIV\"</span>, <span style=color:#FFFFFF>marko_attrs0</span>, <span style=color:#AE81FF>3</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\"Hello \"</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFFFFF>input</span>.<span style=color:#FFFFFF>name</span>)\n    .<span style=color:#A6E22E>t</span>(<span style=color:#FFF066>\"!\"</span>);\n}\n</pre><p>Notice that the attributes object is only created once and it is used for every render. In addition, no diffing/patching will happen for static attributes.</p><h3 id=smart-compiler><a name=smart-compiler class=anchor href=#smart-compiler><span class=header-link></span></a>Smart compiler</h3><p>With Marko we favor doing as much at compile-time as possible. This has made our compiler more complex, but it gives us significant gains at runtime. We have ~90% code coverage and over 2,000 tests to ensure that the compiler is working correctly. In addition, in many cases the Marko compiler provides hints to the runtime for a given template so that the runtime can optimize for specific patterns. For example, Marko recognizes if an HTML element only has <code>class</code>/<code>id</code>/<code>style</code> defined and the runtime optimizes for these virtual DOM nodes when doing diffing/patching (the Marko compiler generates code that flags simple virtual DOM nodes for targeted diffing/patching logic).</p><h3 id=event-delegation><a name=event-delegation class=anchor href=#event-delegation><span class=header-link></span></a>Event delegation</h3><p>If you are building a UI component you will likely need to write code to handle various DOM events (<code>click</code>, <code>submit</code>, etc.). It is common for developers to write code that adds DOM event listeners using <code>dom.addEventListener(...)</code> or using a library such as jQuery. You can still do that when building UI components using Marko, but there is overhead in attaching listeners when lots of components are being initialized. Instead, Marko recommends using declarative event binding as shown below:</p>");

  render_tag_default()(code_block_marko_index_marko_server_entry, {
    "html": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034>&lt;<span style=color:#FF4185>button</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"button\"</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"handleClick\"</span>)>\n<span style=color:#FFF066>  Click Me</span>\n&lt;/<span style=color:#FF4185>button</span>>\n</pre>",
    "concise": "<pre class=highlighted style=color:#D0D0E0;background-color:#202034><span style=color:#FF4185>button</span> <span style=color:#A6E22E>type</span><span style=color:#FFFFFF>=</span><span style=color:#FFF066>\"button\"</span> <span style=color:#66D9EF;font-style:italic>on-click</span>(<span style=color:#FFF066>\"handleClick\"</span>) --<span style=color:#FFF066> Click Me</span>\n</pre>"
  }, out, _component, "82");

  out.w("<p>When using declarative event binding, no DOM event listeners are actually attached for events that bubble. Instead, Marko attaches a single listener on the root DOM element of the page for each DOM event that bubbles (done at startup). When Marko receives an event at the root it handles delegating the event to the appropriate components that are interested in that event. This is done by looking at the <code>event.target</code> property to see where the event originated and then walking up the tree to find components that need to be notified. As a result, there is slightly more work that is done when a DOM event is captured at the root, but this approach uses much less memory and reduces the amount of work that is done during initialization. The extra overhead of delegating events to components will not be noticeable so it is a very beneficial optimization.</p><p><em>Cover image credit: <a href=https://thenounproject.com/search/?q=superhero&amp;i=690775>Superhero by Gan Khoon Lay from the Noun Project</a></em></p>");
}, {
  t: why_is_marko_fast_marko_componentType,
  i: true
}, why_is_marko_fast_marko_component);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
;// CONCATENATED MODULE: ../utils/document-lookup.js


































const documentLookup = {};
const docsByRepo = {
  "marko-js/marko": {
    trim: "../../node_modules/",
    prefix: "packages/",
    docs: {
      "../../node_modules/marko/docs/10-awesome-marko-features.md": _10_awesome_marko_features_namespaceObject,
      "../../node_modules/marko/docs/body-content.md": body_content_namespaceObject,
      "../../node_modules/marko/docs/class-components.md": class_components_namespaceObject,
      "../../node_modules/marko/docs/compiler.md": compiler_namespaceObject,
      "../../node_modules/marko/docs/concise.md": concise_namespaceObject,
      "../../node_modules/marko/docs/conditionals-and-lists.md": conditionals_and_lists_namespaceObject,
      "../../node_modules/marko/docs/core-tags.md": core_tags_namespaceObject,
      "../../node_modules/marko/docs/custom-tags.md": custom_tags_namespaceObject,
      "../../node_modules/marko/docs/editor-plugins.md": editor_plugins_namespaceObject,
      "../../node_modules/marko/docs/events.md": events_namespaceObject,
      "../../node_modules/marko/docs/express.md": express_namespaceObject,
      "../../node_modules/marko/docs/fastify.md": fastify_namespaceObject,
      "../../node_modules/marko/docs/getting-started.md": getting_started_namespaceObject,
      "../../node_modules/marko/docs/http.md": http_namespaceObject,
      "../../node_modules/marko/docs/installing.md": installing_namespaceObject,
      "../../node_modules/marko/docs/koa.md": koa_namespaceObject,
      "../../node_modules/marko/docs/lasso.md": lasso_namespaceObject,
      "../../node_modules/marko/docs/marko-5-upgrade.md": marko_5_upgrade_namespaceObject,
      "../../node_modules/marko/docs/marko-json.md": marko_json_namespaceObject,
      "../../node_modules/marko/docs/marko-vs-react.md": marko_vs_react_namespaceObject,
      "../../node_modules/marko/docs/redux.md": redux_namespaceObject,
      "../../node_modules/marko/docs/rendering.md": rendering_namespaceObject,
      "../../node_modules/marko/docs/rollup.md": rollup_namespaceObject,
      "../../node_modules/marko/docs/server-side-rendering.md": server_side_rendering_namespaceObject,
      "../../node_modules/marko/docs/state.md": state_namespaceObject,
      "../../node_modules/marko/docs/styles.md": styles_namespaceObject,
      "../../node_modules/marko/docs/syntax.md": syntax_namespaceObject,
      "../../node_modules/marko/docs/webpack.md": webpack_namespaceObject,
      "../../node_modules/marko/docs/why-is-marko-fast.md": why_is_marko_fast_namespaceObject
    }
  },
  "marko-js/examples": {
    trim: "../../examples/",
    docs: {
      "../../examples/examples/color-picker/README.md": README_namespaceObject
    }
  }
};
Object.keys(docsByRepo).forEach(repo => {
  const {
    trim,
    prefix = "",
    docs
  } = docsByRepo[repo];
  Object.keys(docs).forEach(filePath => {
    const slug = fileNameToSlug(filePath);
    const doc = docs[filePath];
    const repoPath = filePath.replace(trim, prefix);
    documentLookup[slug] = {
      repo,
      repoPath,
      template: doc.default,
      toc: toc_registry.get(filePath)
    };
  });
});

function fileNameToSlug(file) {
  let slug;

  do {
    slug = external_path_default().basename(file, ".md");
    file = external_path_default().dirname(file);
  } while (slug === "README");

  return slug;
}

structure_json_default().forEach(doc => {
  addOverviewDoc(doc);

  function addOverviewDoc(doc, parentSlug) {
    const {
      title,
      docs
    } = doc;
    const titleSlug = format_slug_default()(title);
    docs.forEach(childDoc => {
      if (typeof childDoc === "object") {
        addOverviewDoc(childDoc, titleSlug);
      }
    });
    let docName;

    if (parentSlug) {
      docName = `${parentSlug}-${titleSlug}-overview`;
    } else {
      docName = `${titleSlug}-overview`;
    }

    documentLookup[docName] = {
      overview: true,
      title,
      docs
    };
  }
});
/* harmony default export */ const document_lookup = (documentLookup);
;// CONCATENATED MODULE: ./docs/:name/components/edit-on-github/github.svg
/* harmony default export */ const edit_on_github_github = ("/assets/a828017a.svg");
;// CONCATENATED MODULE: ./docs/:name/components/edit-on-github/index.marko
const edit_on_github_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const edit_on_github_index_marko = (edit_on_github_index_marko_marko_template);




const edit_on_github_index_marko_marko_componentType = "hgU/jCDT",
      edit_on_github_index_marko_marko_component = {};
edit_on_github_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<a${attr_default()("href", `https://github.com/${input.repo}/blob/master/${input.repoPath}`)} class=edit-on-github>EDIT <img${attr_default()("src", edit_on_github_github)}></a>`);
}, {
  t: edit_on_github_index_marko_marko_componentType,
  i: true
}, edit_on_github_index_marko_marko_component);
// EXTERNAL MODULE: ./docs/:name/components/contributors/get-contributors.js
var get_contributors = __webpack_require__(627);
var get_contributors_default = /*#__PURE__*/__webpack_require__.n(get_contributors);
;// CONCATENATED MODULE: ./docs/:name/components/contributors/index.marko
const contributors_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const contributors_index_marko = (contributors_index_marko_marko_template);







const contributors_index_marko_marko_componentType = "WRyonJqx",
      contributors_index_marko_marko_component = {};
contributors_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  var editPath = `https://github.com/${input.repo}/blob/master/${input.repoPath}`;

  render_tag_default()((renderer_js_default()), {
    "_provider": get_contributors_default()(input.repo, input.repoPath),
    "_name": "getContributors(input.repo, input.repoPath)",
    "then": {
      "renderBody": (out, contributors) => {
        out.w(`<h2 id=contributors><a name=contributors class=anchor href=#contributors><span class=header-link></span></a> Contributors</h2><p>Helpful? You can thank these awesome people! You can also <a${attr_default()("href", editPath)}>edit this doc</a> if you see any issues or want to improve it.</p><div class=contributors>`);
        {
          let _keyValue = 0;

          for (const contributor of contributors) {
            const _keyScope = `[${_keyValue++}]`;
            out.w(`<a${attr_default()("href", contributor.profile)} class=contributor><img${attr_default()("src", contributor.photo)} class=photo><span class=name>${(0,escape_xml_namespaceObject.x)(contributor.username)}</span></a>`);
          }

          out.w(`<a${attr_default()("href", editPath)} class="contributor you"><div class=photo><span class=icon>+</span></div><span class=name>You?</span></a>`);
        }
        out.w("</div>");
      }
    }
  }, out, _component, "0");
}, {
  t: contributors_index_marko_marko_componentType,
  i: true
}, contributors_index_marko_marko_component);
;// CONCATENATED MODULE: ./docs/:name/components/document-overview/index.marko
const document_overview_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const document_overview_index_marko = (document_overview_index_marko_marko_template);






const document_overview_index_marko_marko_componentType = "QtGwyV7P",
      document_overview_index_marko_marko_component = {};
document_overview_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  out.w(`<h1>${(0,escape_xml_namespaceObject.x)(input.title)}</h1>`);

  dynamic_tag_default()(out, _docList, () => input, null, null, null, _component, "1");

  function _docList(out, {
    title,
    docs
  }) {
    out.w("<ul>");
    {
      let _keyValue = 0;

      for (const doc of docs) {
        const _keyScope = `[${_keyValue++}]`;
        out.w("<li>");

        if (typeof doc === 'object') {
          out.w(`<a${attr_default()("href", `/docs/${format_slug_default()(title)}-${format_slug_default()(doc.title)}-overview/`)}>${(0,escape_xml_namespaceObject.x)(doc.title)}</a>`);

          dynamic_tag_default()(out, _docList, () => doc, null, null, null, _component, "6" + _keyScope);
        } else {
          out.w(`<a${attr_default()("href", `/docs/${format_slug_default()(doc)}/`)}>${(0,escape_xml_namespaceObject.x)(doc)}</a>`);
        }

        out.w("</li>");
      }
    }
    out.w("</ul>");
  }
}, {
  t: document_overview_index_marko_marko_componentType,
  i: true
}, document_overview_index_marko_marko_component);
;// CONCATENATED MODULE: ./docs/:name/index.marko
const _name_index_marko_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const _name_index_marko = (_name_index_marko_marko_template);











const _name_index_marko_marko_componentType = "z0HTdCn8",
      _name_index_marko_marko_component = {};
_name_index_marko_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const {
    params
  } = input;
  const doc = document_lookup[params.name];

  render_tag_default()(app_layout_index_marko, {
    "title": doc.title,
    "currentDoc": params.name,
    "toc": doc.toc,
    "footer": false,
    "class": "docs",
    "renderBody": out => {
      out.w("<div class=doc-layout><div class=doc-container><div class=doc-content>");

      if (!doc.overview) {
        dynamic_tag_default()(out, doc.template, null, null, null, null, _component, "4");

        render_tag_default()(edit_on_github_index_marko, doc, out, _component, "5");

        render_tag_default()(contributors_index_marko, doc, out, _component, "6");
      } else {
        render_tag_default()(document_overview_index_marko, doc, out, _component, "7");
      }

      render_tag_default()(app_footer_index_marko, {
        "class": "doc-footer"
      }, out, _component, "8");

      out.w("</div></div></div>");
    }
  }, out, _component, "0");
}, {
  t: _name_index_marko_marko_componentType,
  i: true
}, _name_index_marko_marko_component);
;// CONCATENATED MODULE: ./docs/:name/index.marko?server-entry
const _name_index_marko_server_entry_marko_template = (0,html_namespaceObject.t)();

/* harmony default export */ const _name_index_marko_server_entry = (_name_index_marko_server_entry_marko_template);




function _name_index_marko_server_entry_renderAssets() {
  const assets = this.___assets;
  const nonce = this.global.cspNonce;
  this.___renderAssets = this.___assets = undefined;
  this.flush = this.___flush;
  this.end = this.___end;

  if (assets) {
    if (assets.js) {
      const nonceAttr = nonce ? ` nonce=${JSON.stringify(nonce)}` : "";
      assets.js.forEach(js => {
        this.write(`<script src=${JSON.stringify(__webpack_require__.p + js)}${nonceAttr} async></script>`);
      });
    }

    if (assets.css) {
      assets.css.forEach(css => {
        this.write(`<link rel="stylesheet" href=${JSON.stringify(__webpack_require__.p + css)}>`);
      });
    }
  }
}

function _name_index_marko_server_entry_outFlushOverride() {
  this.___renderAssets();

  this.flush();
}

function _name_index_marko_server_entry_outEndOverride(data, encoding, callback) {
  this.___renderAssets();

  this.end(data, encoding, callback);
}






const _name_index_marko_server_entry_marko_componentType = "z0HTdCn8",
      _name_index_marko_server_entry_marko_component = {};
_name_index_marko_server_entry_marko_template._ = renderer_default()(function (input, out, _component, component, state) {
  const curAssets = out.___assets;
  const newAssets = index_js_manifest.getAssets(":name_z0HT", out.global.buildName);

  if (curAssets) {
    if (newAssets.js) {
      if (curAssets.js) {
        for (const js of newAssets.js) {
          if (!curAssets.js.includes(js)) {
            curAssets.js.push(js);
          }
        }
      } else {
        curAssets.js = newAssets.js;
      }
    }

    if (newAssets.css) {
      if (curAssets.css) {
        for (const css of newAssets.css) {
          if (!curAssets.css.includes(css)) {
            curAssets.css.push(css);
          }
        }
      } else {
        curAssets.css = newAssets.css;
      }
    }
  } else {
    out.___flush = out.flush;
    out.___end = out.end;
    out.___renderAssets = _name_index_marko_server_entry_renderAssets;
    out.___assets = newAssets;
    out.flush = _name_index_marko_server_entry_outFlushOverride;
    out.end = _name_index_marko_server_entry_outEndOverride;
  }

  render_tag_default()(_name_index_marko, input, out, _component, "0");

  render_tag_default()((init_components_tag_js_default()), {}, out, _component, "1");

  render_tag_default()((reorderer_renderer_js_default()), {}, out, _component, "2");
}, {
  t: _name_index_marko_server_entry_marko_componentType,
  i: true
}, _name_index_marko_server_entry_marko_component);
;// CONCATENATED MODULE: ../../node_modules/webpack-inject-plugin/dist/webpack-inject-plugin.loader.js?id=webpack-inject-module-2!







function getRoute(url) {
  const normalized = url.replace(/^\/|(\/|(\/index)?(\.marko|\.html)?)$/g, '');
  const pathParts = normalized === '' ? [] : normalized.split('/');

  if ('/' + normalized !== url) {
    return {
      redirect:true,
      path: '/' + normalized
    }
  }

  const params = {};

  const part_0 = pathParts[0];
  if (part_0 === undefined) {
    return { params, template:index_marko_server_entry };
  } else if (part_0 === "docs") {
    const part_1 = pathParts[1];
    if (true) {
      params["name"] = part_1;
      const part_2 = pathParts[2];
      if (part_2 === undefined) {
        return { params, template:_name_index_marko_server_entry };
      }
    } else {}
  } else if (part_0 === "try-online") {
    const part_1 = pathParts[1];
    if (part_1 === undefined) {
      return { params, template:try_online_index_marko_server_entry };
    }
  }
}

global.GET_ROUTE = getRoute;


/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/interopRequireDefault");;

/***/ }),

/***/ 495:
/***/ ((module) => {

"use strict";
module.exports = require("connect-gzip-static");;

/***/ }),

/***/ 273:
/***/ ((module) => {

"use strict";
module.exports = require("gh-got");;

/***/ }),

/***/ 622:
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/assets/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__(158);
/******/ 	__webpack_require__(535);
/******/ 	return __webpack_require__(881);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZS5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL0BtYXJrby9idWlsZC9kaXN0L2ZpbGVzL21pZGRsZXdhcmUuanMiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9oZWFkaW5nL2dldEFuY2hvck5hbWUuanMiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvZG9jcy86bmFtZS9jb21wb25lbnRzL2NvbnRyaWJ1dG9ycy9nZXQtY29udHJpYnV0b3JzLmpzIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3V0aWxzL2NyZWF0ZS1vdmVydmlldy10cmVlLmpzIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3V0aWxzL2Zvcm1hdC1zbHVnLmpzIiwiIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL0BtYXJrby9idWlsZC9kaXN0L2ZpbGVzL3BhcmVudC1kaXIucG5nIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL0BtYXJrby9idWlsZC9kaXN0L2ZpbGVzL2Rpci5wbmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvQG1hcmtvL2J1aWxkL2Rpc3QvZmlsZXMvZmlsZS5wbmciLCJleHRlcm5hbCBcIm1hcmtvL2Rpc3QvcnVudGltZS9odG1sL2hlbHBlcnMvZXNjYXBlLXhtbFwiIiwiZXh0ZXJuYWwgXCJtYXJrby9kaXN0L3J1bnRpbWUvaHRtbC9oZWxwZXJzL2F0dHJcIiIsImV4dGVybmFsIFwibWFya28vZGlzdC9jb3JlLXRhZ3MvY29tcG9uZW50cy9pbml0LWNvbXBvbmVudHMtdGFnLmpzXCIiLCJleHRlcm5hbCBcIm1hcmtvL2Rpc3QvcnVudGltZS9oZWxwZXJzL3JlbmRlci10YWdcIiIsImV4dGVybmFsIFwibWFya28vZGlzdC9jb3JlLXRhZ3MvY29yZS9hd2FpdC9yZW9yZGVyZXItcmVuZGVyZXIuanNcIiIsImV4dGVybmFsIFwibWFya28vZGlzdC9jb3JlLXRhZ3MvY29tcG9uZW50cy9wcmVmZXJyZWQtc2NyaXB0LWxvY2F0aW9uLXRhZy5qc1wiIiwiZXh0ZXJuYWwgXCJtYXJrby9kaXN0L3J1bnRpbWUvY29tcG9uZW50cy9yZW5kZXJlclwiIiwiZXh0ZXJuYWwgXCJtYXJrby9kaXN0L3J1bnRpbWUvaHRtbFwiIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL0BtYXJrby9idWlsZC9kaXN0L2ZpbGVzL2Rpci1pbmRleC5tYXJrbyIsIj9tYW5pZmVzdCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9sb2dvcy9tYXJrby5zdmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLWhlcm8vbWFya28tdGV4dC5zdmciLCJleHRlcm5hbCBcIm1hcmtvL2Rpc3QvcnVudGltZS9odG1sL2hlbHBlcnMvZGF0YS1tYXJrb1wiIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL2xvZ29zL2dpdGh1Yi5zdmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLWhlcm8vY29tcG9uZW50cy9naXRodWItbGluay9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtaGVyby9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtZmVhdHVyZXMvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLWxhbmd1YWdlL2NvbXBvbmVudHMvY291bnRlci1leGFtcGxlL2luZGV4Lm1hcmtvIiwiZXh0ZXJuYWwgXCJtYXJrby9kaXN0L3J1bnRpbWUvaGVscGVycy9keW5hbWljLXRhZ1wiIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL2NvbXBvbmVudHMvaGVhZGluZy9pbmRleC5tYXJrbyIsImV4dGVybmFsIFwibWFya28vZGlzdC9ydW50aW1lL2hlbHBlcnMvY2xhc3MtdmFsdWVcIiIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtZmVhdHVyZS1ibG9jay9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtbGFuZ3VhZ2UvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLWRlbW8tcGFnZS9wcm9kdWN0LnBuZyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtZGVtby1wYWdlL3guc3ZnIiwiZXh0ZXJuYWwgXCJtYXJrby9kaXN0L3J1bnRpbWUvaGVscGVycy9zdHlsZS12YWx1ZVwiIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3BhZ2VzL2luZGV4L2NvbXBvbmVudHMvaG9tZS1kZW1vLXBhZ2UvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLXN0cmVhbWluZy9jb21wb25lbnRzL3Njcm9sbC1sb2NrZWQtc3RyZWFtLWV4YW1wbGUvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLXN0cmVhbWluZy9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtaHlkcmF0aW9uL2luZGV4Lm1hcmtvIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3BhZ2VzL2luZGV4L2NvbXBvbmVudHMvaG9tZS1wZXJmb3JtYW5jZS9hcnJvdy5zdmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLXBlcmZvcm1hbmNlL2luZGV4Lm1hcmtvIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3BhZ2VzL2luZGV4L2NvbXBvbmVudHMvaG9tZS10b29saW5nL3NjcmVlbi5wbmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvY29tcG9uZW50cy9ob21lLXRvb2xpbmcvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvbG9nb3Mvc3RhY2tvdmVyZmxvdy5zdmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvbG9nb3MvZGlzY29yZC5zdmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvbG9nb3MvdHdpdHRlci5zdmciLCJleHRlcm5hbCBcIm1hcmtvL2Rpc3QvY29yZS10YWdzL2NvcmUvYXdhaXQvcmVuZGVyZXIuanNcIiIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9pbmRleC9jb21wb25lbnRzL2hvbWUtY29tbXVuaXR5L2luZGV4Lm1hcmtvIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL2NvbXBvbmVudHMvYXBwLWxheW91dC9mYXZpY29uLnBuZyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2FwcC1sYXlvdXQvY29tcG9uZW50cy9sYXlvdXQtc2VhcmNoL3NlYXJjaC5wbmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9hcHAtbGF5b3V0L2NvbXBvbmVudHMvbGF5b3V0LXNlYXJjaC9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2FwcC1sYXlvdXQvY29tcG9uZW50cy9sYXlvdXQtaGVhZGVyL2luZGV4Lm1hcmtvIiwiZXh0ZXJuYWwgXCJtYXJrby9kb2NzL3N0cnVjdHVyZS5qc29uXCIiLCJleHRlcm5hbCBcIm1hcmtvL2Rpc3QvcnVudGltZS9oZWxwZXJzL3RvLXN0cmluZ1wiIiwiZXh0ZXJuYWwgXCJtYXJrby9wYWNrYWdlLmpzb25cIiIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2FwcC1sYXlvdXQvY29tcG9uZW50cy9sYXlvdXQtc2lkZWJhci9jb21wb25lbnRzL3ZlcnNpb24tc3dpdGNoZXIvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9hcHAtbGF5b3V0L2NvbXBvbmVudHMvbGF5b3V0LXNpZGViYXIvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9hcHAtZm9vdGVyL29wZW5qc2YucG5nIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL2NvbXBvbmVudHMvYXBwLWZvb3Rlci9vc2kucG5nIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL2NvbXBvbmVudHMvYXBwLWZvb3Rlci9lYmF5LnN2ZyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2FwcC1mb290ZXIvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvY29tcG9uZW50cy9hcHAtbGF5b3V0L2NvbXBvbmVudHMvZ29vZ2xlLWFuYWx5dGljcy9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2Rpc2NvcmQtbGluay9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2FwcC1sYXlvdXQvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvaW5kZXgvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvQG1hcmtvLXRhZ3Mvc3Vic2NyaWJlL2luZGV4Lm1hcmtvIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3BhZ2VzL3RyeS1vbmxpbmUvY29tcG9uZW50cy9sb2FkZXIvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvdHJ5LW9ubGluZS9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9jb21wb25lbnRzL2NvZGUtYmxvY2stbWFya28vaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvdXRpbHMvdG9jLXJlZ2lzdHJ5LmpzIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvZXhhbXBsZXMvZXhhbXBsZXMvY29sb3ItcGlja2VyL1JFQURNRS5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzLzEwLWF3ZXNvbWUtbWFya28tZmVhdHVyZXMubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9ib2R5LWNvbnRlbnQubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9jb21wb25lbnQtZGlhZ3JhbS5zdmciLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9jbGFzcy1jb21wb25lbnRzLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvY29tcGlsZXItaG9va3MucG5nIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvY29tcGlsZXIubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9jb25jaXNlLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvY29uZGl0aW9uYWxzLWFuZC1saXN0cy5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL2NvcmUtdGFncy5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL2N1c3RvbS10YWdzLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvZWRpdG9yLXBsdWdpbnMubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9ldmVudHMubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9leHByZXNzLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvZmFzdGlmeS5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL2dldHRpbmctc3RhcnRlZC5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL2h0dHAubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9pbnN0YWxsaW5nLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3Mva29hLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvbGFzc28ubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9tYXJrby01LXVwZ3JhZGUubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9tYXJrby1qc29uLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3MvbWFya28tdnMtcmVhY3QubWQiLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9ub2RlX21vZHVsZXMvbWFya28vZG9jcy9yZWR1eC5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL3JlbmRlcmluZy5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL3JvbGx1cC5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL3NlcnZlci1zaWRlLXJlbmRlcmluZy5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL3N0YXRlLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3Mvc3R5bGVzLm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3Mvc3ludGF4Lm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvbm9kZV9tb2R1bGVzL21hcmtvL2RvY3Mvd2VicGFjay5tZCIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL25vZGVfbW9kdWxlcy9tYXJrby9kb2NzL3doeS1pcy1tYXJrby1mYXN0Lm1kIiwiL1VzZXJzL21pcmF3bGluZ3MvV29ya3NwYWNlL21hcmtvL3dlYnNpdGUvc3JjL3V0aWxzL2RvY3VtZW50LWxvb2t1cC5qcyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9kb2NzLzpuYW1lL2NvbXBvbmVudHMvZWRpdC1vbi1naXRodWIvZ2l0aHViLnN2ZyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9kb2NzLzpuYW1lL2NvbXBvbmVudHMvZWRpdC1vbi1naXRodWIvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvZG9jcy86bmFtZS9jb21wb25lbnRzL2NvbnRyaWJ1dG9ycy9pbmRleC5tYXJrbyIsIi9Vc2Vycy9taXJhd2xpbmdzL1dvcmtzcGFjZS9tYXJrby93ZWJzaXRlL3NyYy9wYWdlcy9kb2NzLzpuYW1lL2NvbXBvbmVudHMvZG9jdW1lbnQtb3ZlcnZpZXcvaW5kZXgubWFya28iLCIvVXNlcnMvbWlyYXdsaW5ncy9Xb3Jrc3BhY2UvbWFya28vd2Vic2l0ZS9zcmMvcGFnZXMvZG9jcy86bmFtZS9pbmRleC5tYXJrbyIsIndlYnBhY2s6Ly8vPzg1M2YiLCJleHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIiLCJleHRlcm5hbCBcImNvbm5lY3QtZ3ppcC1zdGF0aWNcIiIsImV4dGVybmFsIFwiZ2gtZ290XCIiLCJleHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjay9zdGFydHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0REE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25DQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTs7QUNBQTs7QUNBQTs7QUNBQTs7QUNBQTs7O0FDQUE7OztBQ0FBOzs7QUNBQTs7O0FDQUE7OztBQ0FBOzs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3FFQTs7OztBQVNBOzs7QUFHQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7OztBQUtBOztBQUNBOzs7OztBQUtBOztBQUNBOzs7OztBQUtBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FEQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7OztBRXBGQTs7QUNBQTs7QUNBQTs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7Ozs7Ozs7O0FDUkE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFDQTtBQUNBO0FBa0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUpBO0FBSkE7Ozs7OztBQ3ZDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQXdCQTtBQUNBO0FBaENBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUNBQTs7QUNBQTs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN1TkE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFPQTtBQUFBO0FBU0E7QUFBQTtBQVNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQVFBO0FBUkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDclFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQWtDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXBDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7O0FDRkE7O0FDQUE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7Ozs7Ozs7QUNaQTs7Ozs7Ozs7O0FDQUE7OztBQ0FBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBQ0E7QUFEQTtBQUFBO0FBWUE7QUFaQTtBQWFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFEQTtBQUpBO0FBbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUErQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7O0FDeEVBOztBQ0FBOztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQzBDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTs7QUFZQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBUkE7QUFBQTs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBTEE7QUFEQTtBQW1CQTtBQW5CQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUFBO0FBQUE7Ozs7OztBQ0FBOzs7OztBREFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7QUVwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBZ0RBO0FBQ0E7Ozs7OztBQXNCQTtBQUNBOzs7Ozs7QUErRUE7QUFDQTs7Ozs7O0FBMkJBO0FBQ0E7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7QUFzQ0E7QUFDQTs7Ozs7O0FBdUVBO0FBQ0E7Ozs7OztBQXNEQTs7Ozs7Ozs7O0FDL1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7OztBQXdCQTtBQUNBOzs7Ozs7QUFXQTtBQUNBOzs7Ozs7QUF3QkE7QUFDQTs7Ozs7O0FBaUJBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7Ozs7OztBQWNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQVVBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7Ozs7OztBQVlBO0FBQ0E7Ozs7OztBQTBCQTs7Ozs7Ozs7O0FDcExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7OztBQWdCQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFFQTtBQUNBOzs7Ozs7QUFTQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7QUFTQTtBQUNBOzs7Ozs7QUFrQkE7QUFDQTs7Ozs7O0FBNkJBO0FBQ0E7Ozs7OztBQWdCQTtBQUNBOzs7Ozs7QUFpQ0E7QUFDQTs7Ozs7O0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7QUN4TEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUpBO0FBQ0E7Ozs7OztBQThCQTtBQUNBOzs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFLQTtBQUNBOzs7Ozs7QUFxQkE7QUFDQTs7Ozs7O0FBdUNBO0FBQ0E7Ozs7OztBQWlDQTtBQUNBOzs7Ozs7QUFrQkE7QUFDQTs7Ozs7O0FBeUJBO0FBQ0E7Ozs7OztBQXdCQTtBQUNBOzs7Ozs7QUFnQkE7QUFDQTs7Ozs7O0FBSUE7QUFDQTs7Ozs7O0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTtBQUNBOzs7Ozs7QUFJQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7QUFjQTtBQUNBOzs7Ozs7QUFnQkE7QUFDQTs7Ozs7O0FBQUE7QUFDQTs7Ozs7O0FBQUE7QUFDQTs7Ozs7O0FBeUdBO0FBQ0E7Ozs7OztBQXFOQTtBQUNBOzs7Ozs7QUE0QkE7QUFDQTs7Ozs7O0FBYUE7Ozs7OztBQ3JxQkE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUpBO0FBQ0E7Ozs7OztBQTRDQTs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFVQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQVFBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUNBOzs7Ozs7QUFTQTtBQUNBOzs7Ozs7QUFFQTtBQUNBOzs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFpQkE7QUFDQTs7Ozs7O0FBVUE7QUFDQTs7Ozs7O0FBSUE7QUFDQTs7Ozs7O0FBT0E7QUFDQTs7Ozs7O0FBS0E7QUFDQTs7Ozs7O0FBT0E7QUFDQTs7Ozs7O0FBVUE7QUFDQTs7Ozs7O0FBUUE7QUFDQTs7Ozs7O0FBWUE7QUFDQTs7Ozs7O0FBNEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7O0FBQUE7Ozs7Ozs7OztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUNBOzs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUF3REE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUFBOzs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7QUFTQTtBQUNBOzs7Ozs7QUFHQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7QUFXQTtBQUNBOzs7Ozs7QUFZQTtBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQUE7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQUE7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBOENBOzs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFBQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBNEZBO0FBQ0E7Ozs7OztBQXdKQTtBQUNBOzs7Ozs7QUFpQ0E7QUFDQTs7Ozs7O0FBaUJBO0FBQ0E7Ozs7OztBQTZCQTtBQUNBOzs7Ozs7QUFLQTtBQUNBOzs7Ozs7QUFvQkE7QUFDQTs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBT0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTs7Ozs7O0FBcUJBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7Ozs7OztBQWVBO0FBQ0E7Ozs7OztBQTRDQTtBQUNBOzs7Ozs7QUFhQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFPQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7QUF5QkE7Ozs7Ozs7OztBQzVnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBbUJBOzs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBU0E7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQUE7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7OztBQXNDQTs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUZBO0FBQ0E7Ozs7OztBQVNBO0FBQ0E7Ozs7OztBQVdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUNBOzs7Ozs7QUFNQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUtBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7Ozs7OztBQUlBO0FBQ0E7Ozs7OztBQUVBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7Ozs7O0FBVUE7QUFDQTs7Ozs7O0FBS0E7QUFDQTs7Ozs7O0FBU0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQUNBOzs7Ozs7QUFLQTtBQUNBOzs7Ozs7QUFRQTtBQUNBOzs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTs7Ozs7O0FBUUE7QUFDQTs7Ozs7O0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7Ozs7OztBQUdBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7Ozs7OztBQUtBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7Ozs7OztBQUFBO0FBQ0E7Ozs7OztBQUlBOzs7Ozs7Ozs7QUN0T0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRkE7QUFDQTs7Ozs7O0FBc0NBO0FBQ0E7Ozs7OztBQXFCQTtBQUNBOzs7Ozs7QUEyQkE7QUFDQTs7Ozs7O0FBa0JBO0FBQ0E7Ozs7OztBQTZCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0lBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFOQTtBQVlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFFQTs7QUMxRUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUpBO0FBQ0E7QUF5Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWlCQTtBQWpCQTtBQUNBO0FBcUJBO0FBdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBUEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFOQTtBQUNBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUNwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1Q0E7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNOQTs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QSIsInNvdXJjZVJvb3QiOiIifQ==