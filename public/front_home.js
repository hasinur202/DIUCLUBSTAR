(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front_home"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/home.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "home",
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.$store.dispatch("userAction");
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      axios.get("/logout").then(function (response) {
        localStorage.removeItem("diu-pro-book-sss");

        _this.$router.push("/");

        Toast.fire({
          icon: "success",
          title: "Logout Successfull."
        });
      })["catch"](function () {});
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.team_image {\n  width: 45px;\n  height: 40px;\n  padding-right: 5px;\n  box-shadow: 5px 5px 5px 5px #ddd;\n  transition: transform 0.2s;\n  margin: 0 auto;\n  border-radius: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=template&id=3ef8d081&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/home.vue?vue&type=template&id=3ef8d081& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("header", { attrs: { id: "header" } }, [
      _c(
        "nav",
        { staticClass: "navbar navbar-default navbar-fixed-top menu" },
        [
          _c("div", { staticClass: "container" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "collapse navbar-collapse",
                attrs: { id: "bs-example-navbar-collapse-1" }
              },
              [
                _c(
                  "ul",
                  { staticClass: "nav navbar-nav navbar-right main-menu" },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          { attrs: { title: "Home", to: "/home" } },
                          [
                            _c("img", {
                              staticClass: "profile-photo-xs",
                              attrs: {
                                src: "images/group-icon/home.jpg",
                                alt: "Home"
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _vm.getDatas.users
                          ? _c(
                              "router-link",
                              {
                                attrs: {
                                  title: _vm.getDatas.users.first_name,
                                  to: "/timeline"
                                }
                              },
                              [
                                _c("img", {
                                  staticClass: "profile-photo-xs",
                                  attrs: {
                                    src: "images/group-icon/profile.jpg",
                                    alt: "Profile"
                                  }
                                })
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._m(2),
                    _vm._v(" "),
                    _vm._m(3),
                    _vm._v(" "),
                    _c("li", { staticClass: "dropdown" }, [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("ul", { staticClass: "dropdown-menu login" }, [
                        _vm._m(5),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  return _vm.logout()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                    Logout\n                    "
                              ),
                              _c("i", {
                                staticClass: "icon ion-log-out pull-right"
                              })
                            ]
                          )
                        ])
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(6)
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "page-contents" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-3 static" }, [
            _c("ul", { staticClass: "nav-news-feed" }, [
              _c("li", [
                _c("i", { staticClass: "icon ion-ios-paper" }),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("router-link", { attrs: { to: "/timeline" } }, [
                      _vm._v("My Timeline")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _vm._m(8),
              _vm._v(" "),
              _c("li", [
                _c("i", { staticClass: "icon ion-chatboxes" }),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("router-link", { attrs: { to: "/messanger" } }, [
                      _vm._v("Messenger")
                    ])
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(9)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-md-7" }, [
            _c("div", { staticClass: "create-post" }, [
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-md-7 col-sm-7" },
                  _vm._l(_vm.getDatas.avatars, function(data) {
                    return _c(
                      "div",
                      { key: data.id, staticClass: "form-group" },
                      [
                        _c("img", {
                          staticClass: "profile-photo-md",
                          attrs: { src: _vm.ourImage(data.avatar) }
                        }),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: {
                            name: "texts",
                            id: "exampleTextarea",
                            cols: "30",
                            rows: "1",
                            placeholder: "Write what you wish"
                          }
                        })
                      ]
                    )
                  }),
                  0
                ),
                _vm._v(" "),
                _vm._m(10)
              ])
            ]),
            _vm._v(" "),
            _vm._m(11)
          ]),
          _vm._v(" "),
          _vm._m(12)
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(13)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-header" }, [
      _c(
        "button",
        {
          staticClass: "navbar-toggle collapsed",
          attrs: {
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#bs-example-navbar-collapse-1",
            "aria-expanded": "false"
          }
        },
        [
          _c("span", { staticClass: "sr-only" }, [_vm._v("Toggle navigation")]),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" }),
          _vm._v(" "),
          _c("span", { staticClass: "icon-bar" })
        ]
      ),
      _vm._v(" "),
      _c("a", { staticClass: "navbar-brand", attrs: { href: "index.html" } }, [
        _c("img", {
          staticClass: "logoimg",
          attrs: { src: "images/logo-2.png", alt: "logo" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "dropdown" }, [
      _c(
        "a",
        {
          staticClass: "dropdown-toggle",
          attrs: {
            title: "Groups",
            href: "#",
            "data-toggle": "dropdown",
            role: "button",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [
          _c("span", [
            _c("img", {
              staticClass: "profile-photo-xs",
              attrs: { src: "images/group-icon/02.jpg", alt: "Group" }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c("ul", { staticClass: "dropdown-menu newsfeed-home" }, [
        _c("li", [
          _c("a", { attrs: { href: "programming.html" } }, [
            _vm._v("\n                    DIU Club\n                    "),
            _c("i", { staticClass: "icon ion-ios-people pull-right" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "batch.html" } }, [
            _vm._v("\n                    All Batch\n                    "),
            _c("i", { staticClass: "icon ion-ios-people-outline pull-right" })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { title: "Talent Hunt", href: "#" } }, [
        _c("img", {
          staticClass: "profile-photo-xs",
          attrs: { src: "images/group-icon/talent.jpg", alt: "Talent Hunt" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { title: "Contact", href: "contact.html" } }, [
        _c("img", {
          staticClass: "profile-photo-xs",
          attrs: { src: "images/group-icon/contact.jpg", alt: "Contact" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "dropdown-toggle",
        attrs: {
          title: "Log on-off",
          href: "#",
          "data-toggle": "dropdown",
          role: "button",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("img", {
          staticClass: "profile-photo-xs",
          attrs: {
            src: "images/group-icon/option.jpg",
            alt: "Login-logout-register"
          }
        })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "index.html" } }, [
        _vm._v("\n                    Create group\n                    "),
        _c("i", { staticClass: "icon ion-android-create pull-right" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "navbar-form navbar-right hidden-sm" }, [
      _c("div", { staticClass: "form-group" }, [
        _c("i", { staticClass: "icon ion-android-search" }),
        _vm._v(" "),
        _c("input", {
          staticClass: "form-control",
          attrs: { type: "text", placeholder: "Search friends, photos, videos" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("i", { staticClass: "icon ion-ios-people" }),
      _vm._v(" "),
      _c("div", [
        _c("a", { attrs: { href: "batch.html" } }, [_vm._v("All Batches")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("i", { staticClass: "icon ion-ios-people-outline" }),
      _vm._v(" "),
      _c("div", [
        _c("a", { attrs: { href: "programming.html" } }, [_vm._v("All Clubs")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "chat-block" } }, [
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-5 col-sm-5" }, [
      _c("div", { staticClass: "tools" }, [
        _c("ul", { staticClass: "publishing-tools list-inline" }, [
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "ion-compose" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "ion-images" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "ion-ios-videocam" })
            ])
          ]),
          _vm._v(" "),
          _c("li", [
            _c("a", { attrs: { href: "#" } }, [
              _c("i", { staticClass: "ion-map" })
            ])
          ])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "btn btn-primary pull-right" }, [
          _vm._v("Publish")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "post-content" }, [
      _c("div", { staticClass: "post-content" }, [
        _c("img", {
          staticClass: "img-responsive post-image",
          attrs: { src: "images/post-images/02.jpg", alt: "post-image" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "post-container" }, [
          _c("img", {
            staticClass: "profile-photo-md pull-left",
            attrs: { src: "images/users/user-12.jpg", alt: "user" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "post-detail" }, [
            _c("div", { staticClass: "user-info" }, [
              _c("h5", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Sazzad Hossain")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "following" }, [_vm._v("following")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted" }, [
                _vm._v("Published a photo about 3 mins ago")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "reaction" }, [
              _c("a", { staticClass: "btn text-green" }, [
                _c("i", { staticClass: "fa fa-thumbs-up" }),
                _vm._v(" 13\n                    ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "btn text-red" }, [
                _c("i", { staticClass: "fa fa-thumbs-down" }),
                _vm._v(" 0\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "post-text" }, [
              _c("p", [
                _vm._v(
                  "\n                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.\n                      "
                ),
                _c("i", { staticClass: "em em-anguished" }),
                _vm._v(" "),
                _c("i", { staticClass: "em em-anguished" }),
                _vm._v(" "),
                _c("i", { staticClass: "em em-anguished" })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-16.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Tahmina Tania")]
                ),
                _vm._v(" "),
                _c("i", { staticClass: "em em-laughing" }),
                _vm._v(" Lorem ipsum d\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-13.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Iqbal Ahmed")]
                ),
                _vm._v(" Lorem ipsum dolor sit amet\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-11.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Post a comment" }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "post-content" }, [
        _c("div", { staticClass: "video-wrapper" }, [
          _c("video", { staticClass: "post-video", attrs: { controls: "" } }, [
            _c("source", { attrs: { src: "videos/8.mp4", type: "video/mp4" } })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "post-container" }, [
          _c("img", {
            staticClass: "profile-photo-md pull-left",
            attrs: { src: "images/users/user-14.jpg", alt: "user" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "post-detail" }, [
            _c("div", { staticClass: "user-info" }, [
              _c("h5", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Faruk Ahmed")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "following" }, [_vm._v("following")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted" }, [
                _vm._v("Updated her status about 33 mins ago")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "reaction" }, [
              _c("a", { staticClass: "btn text-green" }, [
                _c("i", { staticClass: "fa fa-thumbs-up" }),
                _vm._v(" 75\n                    ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "btn text-red" }, [
                _c("i", { staticClass: "fa fa-thumbs-down" }),
                _vm._v(" 8\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "post-text" }, [
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-13.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Iqbal Ahmed")]
                ),
                _vm._v(" Lorem ipsum dolor sit a.\n                      "),
                _c("i", { staticClass: "em em-anguished" }),
                _vm._v(
                  " Ut enim ad minim veniam, quis nostrud\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-11.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Hasinur Rahman")]
                ),
                _vm._v(" Lorem ipsum dolor sit amet.\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-11.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Post a comment" }
              })
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "post-content" }, [
        _c("img", {
          staticClass: "img-responsive post-image",
          attrs: { src: "images/post-images/2.jpg", alt: "post-image" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "post-container" }, [
          _c("img", {
            staticClass: "profile-photo-md pull-left",
            attrs: { src: "images/users/user-13.jpg", alt: "user" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "post-detail" }, [
            _c("div", { staticClass: "user-info" }, [
              _c("h5", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Iqbal Ahmed")]
                ),
                _vm._v(" "),
                _c("span", { staticClass: "following" }, [_vm._v("following")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "text-muted" }, [
                _vm._v("Published a photo about 2 hour ago")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "reaction" }, [
              _c("a", { staticClass: "btn text-green" }, [
                _c("i", { staticClass: "fa fa-thumbs-up" }),
                _vm._v(" 39\n                    ")
              ]),
              _vm._v(" "),
              _c("a", { staticClass: "btn text-red" }, [
                _c("i", { staticClass: "fa fa-thumbs-down" }),
                _vm._v(" 2\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "post-text" }, [
              _c("p", [
                _vm._v(
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "line-divider" }),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-12.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Sazzad Hossain")]
                ),
                _vm._v(
                  "Sed ut perspiciatis unde omnis iste chitecto beatae vitae dicta sunt explicabo.\n                    "
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-16.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("p", [
                _c(
                  "a",
                  {
                    staticClass: "profile-link",
                    attrs: { href: "timeline.html" }
                  },
                  [_vm._v("Tahmina Tania")]
                ),
                _vm._v(" Lorem ipsum dolor sit amet.\n                    ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "post-comment" }, [
              _c("img", {
                staticClass: "profile-photo-sm",
                attrs: { src: "images/users/user-11.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("input", {
                staticClass: "form-control",
                attrs: { type: "text", placeholder: "Post a comment" }
              })
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
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { attrs: { id: "footer" } }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "footer-wrapper" }, [
            _c("div", { staticClass: "col-md-3 col-sm-3" }, [
              _c("a", { attrs: { href: "#" } }, [
                _c("img", {
                  staticClass: "logoimg",
                  attrs: { src: "images/logo-2.png", alt: "" }
                })
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline social-icons" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon ion-social-facebook" })
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon ion-social-twitter" })
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon ion-social-googleplus" })
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon ion-social-pinterest" })
                  ])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _c("i", { staticClass: "icon ion-social-linkedin" })
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-2" }, [
              _c("h5", [_vm._v("About")]),
              _vm._v(" "),
              _c("ul", { staticClass: "footer-links" }, [
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("About us")])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Contact us")])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Privacy Policy")])
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [_vm._v("Terms")])
                ]),
                _vm._v(" "),
                _c("li", [_c("a", { attrs: { href: "#" } }, [_vm._v("Help")])]),
                _vm._v(" "),
                _c("li", [
                  _c("a", { attrs: { href: "#" } }, [
                    _vm._v("Language settings")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-3 col-sm-3" }, [
              _c("h5", [_vm._v("Contact Us")]),
              _vm._v(" "),
              _c("ul", { staticClass: "contact" }, [
                _c("li", [
                  _c("i", { staticClass: "icon ion-ios-telephone-outline" }),
                  _vm._v("+880 1773-078 995\n              ")
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "icon ion-ios-email-outline" }),
                  _vm._v("diu.probook@gmail.com\n              ")
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "icon ion-ios-location-outline" }),
                  _vm._v("Green Road, Dhaka\n              ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-2" }, [
              _c("h5", [_vm._v("Project Team")]),
              _vm._v(" "),
              _c("ul", { staticClass: "contact" }, [
                _c("li", [
                  _c("img", {
                    staticClass: "team_image",
                    attrs: {
                      src: "images/users/user-11.jpg",
                      alt: "",
                      title: "Hasinur Rahman"
                    }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "team_image",
                    attrs: {
                      src: "images/users/user-12.jpg",
                      alt: "",
                      title: "Sazzad Hossain"
                    }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "team_image",
                    attrs: {
                      src: "images/users/user-13.jpg",
                      alt: "",
                      title: "Iqbal Ahmed"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("img", {
                    staticClass: "team_image",
                    attrs: {
                      src: "images/users/user-14.jpg",
                      alt: "",
                      title: "Faruk Ahmed"
                    }
                  }),
                  _vm._v(" "),
                  _c("img", {
                    staticClass: "team_image",
                    attrs: {
                      src: "images/users/user-16.jpg",
                      alt: "",
                      title: "Tahmina Tania"
                    }
                  })
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-sm-2" }, [
              _c("h5", [_vm._v("Project Supervisor")]),
              _vm._v(" "),
              _c("ul", { staticClass: "contact" }, [
                _c("li", [
                  _c("img", {
                    staticClass: "supv_img",
                    attrs: {
                      src: "images/users/user-17.png",
                      alt: "",
                      title: "Tahzib-Ul Islam"
                    }
                  })
                ]),
                _vm._v(" "),
                _c("li", [
                  _c(
                    "p",
                    {
                      staticStyle: {
                        "font-weight": "bold",
                        "font-size": "14px",
                        color: "#39393B"
                      }
                    },
                    [_vm._v("Tahzib-Ul Islam")]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "copyright" }, [
        _c("p", [_vm._v("DIU pro-Book © 2020. All rights reserved")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/frontend/home.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/frontend/home.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_vue_vue_type_template_id_3ef8d081___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.vue?vue&type=template&id=3ef8d081& */ "./resources/js/components/frontend/home.vue?vue&type=template&id=3ef8d081&");
/* harmony import */ var _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _home_vue_vue_type_template_id_3ef8d081___WEBPACK_IMPORTED_MODULE_0__["render"],
  _home_vue_vue_type_template_id_3ef8d081___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/home.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/frontend/home.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/frontend/home.vue?vue&type=template&id=3ef8d081&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/frontend/home.vue?vue&type=template&id=3ef8d081& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_3ef8d081___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./home.vue?vue&type=template&id=3ef8d081& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/home.vue?vue&type=template&id=3ef8d081&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_3ef8d081___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_home_vue_vue_type_template_id_3ef8d081___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);