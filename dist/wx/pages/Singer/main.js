require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonParams; });
/* unused harmony export options */
/**
 * Created by xiaoqiang on 12/11/2018.
 */
// 公共参数
var commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
};

var options = {
  param: 'jsonpCallback',
  prefix: 'jp'
};

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "singer"
  }, _vm._l((_vm.singerList), function(group, index) {
    return _c('div', {
      key: index
    }, [_c('h3', {
      staticClass: "group-title"
    }, [_vm._v(_vm._s(group.title))]), _vm._v(" "), _vm._l((group.item), function(item, itemIndex) {
      return _c('div', {
        key: itemIndex,
        staticClass: "item",
        attrs: {
          "eventid": '0-' + index + '-' + itemIndex
        },
        on: {
          "click": function($event) {
            _vm.selectSinger(item)
          }
        }
      }, [_c('img', {
        staticClass: "img",
        attrs: {
          "src": item.img
        }
      }), _vm._v(" "), _c('span', {
        staticClass: "name"
      }, [_vm._v(_vm._s(item.name))])])
    })], 2)
  }))
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-620fdbe7", esExports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Singer__ = __webpack_require__(71);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__Singer__["a" /* default */]);

app.$mount();

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Singer_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_620fdbe7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Singer_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(72)
}
var normalizeComponent = __webpack_require__(10)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-620fdbe7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_Singer_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_620fdbe7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_Singer_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/Singer/Singer.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Singer.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-620fdbe7", Component.options)
  } else {
    hotAPI.reload("data-v-620fdbe7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 72:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_api__ = __webpack_require__(74);
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      singerList: []
    };
  },
  created: function created() {
    this.getSinger();
  },

  methods: {
    // 获取歌手列表
    getSinger: function getSinger() {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_0__utils_api__["a" /* getSingerList */])().then(function (res) {
        _this.singerList = _this.normalize(res.list);
        console.log(_this.singerList);
      });
    },

    // 格式化歌手接口数据
    normalize: function normalize(list) {
      var map = {
        hot: {
          title: '热',
          item: []
        }
      };
      list.forEach(function (item, index) {
        if (index < 10) {
          map.hot.item.push({
            name: item.Fsinger_name,
            id: item.Fsinger_mid,
            img: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000' + item.Fsinger_mid + '.jpg?max_age=2592000'
          });
        }
        if (!map[item.Findex]) {
          map[item.Findex] = {
            title: item.Findex,
            item: []
          };
        }
        map[item.Findex].item.push({
          name: item.Fsinger_name,
          id: item.Fsinger_mid,
          img: 'https://y.gtimg.cn/music/photo_new/T001R300x300M000' + item.Fsinger_mid + '.jpg?max_age=2592000'
        });
      });
      // console.log(map) 无序列表
      // 为了得到有序列表,需要处理map
      var usual = [];
      var hot = [];
      for (var key in map) {
        if (map[key].title.match(/[a-zA-Z]/)) {
          usual.push(map[key]);
        } else if (map[key].title === '热') {
          hot.push(map[key]);
        }
      }
      usual.sort(function (a, b) {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      return hot.concat(usual);
    },
    selectSinger: function selectSinger(item) {
      wx.navigateTo({
        url: '/pages/SingerDetail/main?id=' + item.id + '&name=' + item.name + '&img=' + item.img,
        success: function success() {
          console.log('success');
        }
      });
    }
  }
});

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSingerList;
/* unused harmony export getSingerDetail */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(103);


/**
 * Created by xiaoqiang on 12/11/2018.
 */

// 封装微信请求
function request(url, method, data) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    wx.request({
      data: data,
      method: method,
      url: url,
      success: function success(res) {
        if (res.data.code === 0) {
          resolve(res.data.data);
        } else {
          reject(res.data);
        }
      }
    });
  });
}
// 获取歌手列表
function getSingerList() {
  var url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';
  var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2__config__["a" /* commonParams */], {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  });
  return request(url, 'GET', data);
}
// 获取歌手详情
function getSingerDetail(singerId) {
  var url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg';
  var data = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, __WEBPACK_IMPORTED_MODULE_2__config__["a" /* commonParams */], {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  });

  return request(url, 'GET', data);
}

/***/ })

},[70]);
//# sourceMappingURL=main.js.map