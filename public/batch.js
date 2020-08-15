(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["batch"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/batch.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/batch.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/header.vue */ "./resources/js/components/layouts/header.vue");
/* harmony import */ var _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/footer.vue */ "./resources/js/components/layouts/footer.vue");
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
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "batch",
  components: {
    headercomponent: _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    footercomponent: _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      userData: ""
    };
  },
  mounted: function mounted() {
    this.userData = this.$route.params.dept;
    this.$store.dispatch("userAction");
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/batch.vue?vue&type=template&id=da5062a8&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/batch.vue?vue&type=template&id=da5062a8& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headercomponent"),
      _vm._v(" "),
      _c("div", { attrs: { id: "page-contents" } }, [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "profile-card" }, [
              _c("h3", { staticClass: "text-white text-center" }, [
                _c(
                  "strong",
                  { staticStyle: { "text-transform": "uppercase" } },
                  [_vm._v(_vm._s(_vm.$route.params.name))]
                )
              ]),
              _vm._v(" "),
              _c("h4", { staticClass: "text-green text-center" }, [
                _vm._v("Dept. of "),
                _c(
                  "strong",
                  { staticStyle: { "text-transform": "uppercase" } },
                  [_vm._v(_vm._s(_vm.$route.params.dept))]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-7" }, [
              _c("div", { staticClass: "friend-list" }, [
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col-md-12" },
                    _vm._l(_vm.getDatas.user, function(user) {
                      return _c("div", { key: user.id }, [
                        _vm.userData == user.department &&
                        _vm.$route.params.name == user.batch
                          ? _c(
                              "div",
                              _vm._l(user.avatar, function(avtr) {
                                return _c(
                                  "div",
                                  {
                                    key: avtr.id,
                                    staticClass: "friend-card col-md-6 col-sm-6"
                                  },
                                  [
                                    avtr.cover_photo
                                      ? _c("img", {
                                          staticClass: "img-responsive cover",
                                          staticStyle: {
                                            height: "105px",
                                            width: "100%",
                                            "background-color": "#ca9f9f59"
                                          },
                                          attrs: {
                                            src: _vm.ourImage(avtr.cover_photo),
                                            alt: "profile-cover"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "card-info" }, [
                                      avtr.avatar
                                        ? _c("img", {
                                            staticClass: "profile-photo-lg",
                                            attrs: {
                                              src: _vm.ourImage(avtr.avatar),
                                              alt: "user"
                                            }
                                          })
                                        : _vm._e(),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "friend-info" },
                                        [
                                          user.first_name
                                            ? _c(
                                                "router-link",
                                                {
                                                  staticClass:
                                                    "btn btn-info btn-sm pull-right",
                                                  staticStyle: {
                                                    "line-height":
                                                      "0 !important",
                                                    "padding-bottom":
                                                      "0 !important",
                                                    "padding-top":
                                                      "0 !important",
                                                    "padding-left":
                                                      "5px !important",
                                                    "padding-right":
                                                      "5px !important"
                                                  },
                                                  attrs: {
                                                    title: "View Details",
                                                    to: {
                                                      name: "timeline",
                                                      params: {
                                                        name: user.first_name
                                                      }
                                                    },
                                                    href: "profile.html"
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "icon icon ion-ios-eye",
                                                    staticStyle: {
                                                      "font-size": "30px"
                                                    }
                                                  })
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          _c(
                                            "h5",
                                            [
                                              user.first_name
                                                ? _c(
                                                    "router-link",
                                                    {
                                                      staticClass:
                                                        "profile-link",
                                                      attrs: {
                                                        title: user.first_name,
                                                        to: {
                                                          name: "timeline",
                                                          params: {
                                                            name:
                                                              user.first_name
                                                          }
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(user.first_name)
                                                      )
                                                    ]
                                                  )
                                                : _vm._e()
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("p", [_vm._v(_vm._s(user.batch))])
                                        ],
                                        1
                                      )
                                    ])
                                  ]
                                )
                              }),
                              0
                            )
                          : _vm._e()
                      ])
                    }),
                    0
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(1)
          ])
        ])
      ]),
      _vm._v(" "),
      _c("footercomponent")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-3 static" }, [
      _c("div", { attrs: { id: "chat-block" } }, [
        _c("div", { staticClass: "title" }, [_vm._v("Running Event")]),
        _vm._v(" "),
        _c("div", { staticClass: "feed-item" }, [
          _c("div", { staticClass: "live-activity" }, [
            _c("p", { staticClass: "text-muted" }, [
              _c("a", { staticClass: "profile-link", attrs: { href: "#" } }, [
                _vm._v("Cicket Club")
              ]),
              _vm._v(" event going on\n                ")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-red" }, [
              _vm._v("\n                  Participate\n                  "),
              _c(
                "a",
                { staticClass: "btn btn-danger btn-xs", attrs: { href: "#" } },
                [_vm._v("Now")]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "feed-item" }, [
          _c("div", { staticClass: "live-activity" }, [
            _c("p", { staticClass: "text-muted" }, [
              _c("a", { staticClass: "profile-link", attrs: { href: "#" } }, [
                _vm._v("Programming Club")
              ]),
              _vm._v(" event going on\n                ")
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "text-red" }, [
              _vm._v("\n                  Participate\n                  "),
              _c(
                "a",
                { staticClass: "btn btn-danger btn-xs", attrs: { href: "#" } },
                [_vm._v("Now")]
              )
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 static" }, [
      _c(
        "div",
        { staticClass: "suggestions", attrs: { id: "sticky-sidebar" } },
        [
          _c("h4", { staticClass: "grey" }, [_vm._v("Join Club")]),
          _vm._v(" "),
          _c("div", { staticClass: "follow-user" }, [
            _c("img", {
              staticClass: "profile-photo-xs xs-shadow pull-left",
              attrs: { src: "images/group-icon/group-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", [
              _c("h5", [
                _c("a", { attrs: { href: "timeline.html" } }, [
                  _vm._v("Programming Club")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-green" }, [_vm._v("60 Members")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "follow-user" }, [
            _c("img", {
              staticClass: "profile-photo-xs xs-shadow pull-left",
              attrs: { src: "images/group-icon/group-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", [
              _c("h5", [
                _c("a", { attrs: { href: "timeline.html" } }, [
                  _vm._v("Cultural Club")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-green" }, [_vm._v("55 Members")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "follow-user" }, [
            _c("img", {
              staticClass: "profile-photo-xs xs-shadow pull-left",
              attrs: { src: "images/group-icon/group-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", [
              _c("h5", [
                _c("a", { attrs: { href: "timeline.html" } }, [
                  _vm._v("Cricet Club")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-green" }, [_vm._v("80 Members")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "follow-user" }, [
            _c("img", {
              staticClass: "profile-photo-xs xs-shadow pull-left",
              attrs: { src: "images/group-icon/group-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", [
              _c("h5", [
                _c("a", { attrs: { href: "timeline.html" } }, [
                  _vm._v("English Club")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-green" }, [_vm._v("40 Members")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "follow-user" }, [
            _c("img", {
              staticClass: "profile-photo-xs xs-shadow pull-left",
              attrs: { src: "images/group-icon/group-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", [
              _c("h5", [
                _c("a", { attrs: { href: "timeline.html" } }, [
                  _vm._v("Debating Club")
                ])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-green" }, [_vm._v("65 Members")])
            ])
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/batch.vue":
/*!********************************!*\
  !*** ./resources/js/batch.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _batch_vue_vue_type_template_id_da5062a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batch.vue?vue&type=template&id=da5062a8& */ "./resources/js/batch.vue?vue&type=template&id=da5062a8&");
/* harmony import */ var _batch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./batch.vue?vue&type=script&lang=js& */ "./resources/js/batch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _batch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _batch_vue_vue_type_template_id_da5062a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _batch_vue_vue_type_template_id_da5062a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/batch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/batch.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./resources/js/batch.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_batch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./batch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/batch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_batch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/batch.vue?vue&type=template&id=da5062a8&":
/*!***************************************************************!*\
  !*** ./resources/js/batch.vue?vue&type=template&id=da5062a8& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_batch_vue_vue_type_template_id_da5062a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./batch.vue?vue&type=template&id=da5062a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/batch.vue?vue&type=template&id=da5062a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_batch_vue_vue_type_template_id_da5062a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_batch_vue_vue_type_template_id_da5062a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);