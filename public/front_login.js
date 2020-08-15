(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["front_login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "login",
  data: function data() {
    return {
      showContact: false,
      showLogin: true,
      user: new Form({
        email: "",
        password: "",
        remember_me: false
      })
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("getSettingAction");
  },
  computed: {
    getClubEvents: function getClubEvents() {
      return this.$store.getters.getClubEvent;
    },
    getSettings: function getSettings() {
      return this.$store.getters.getSetting;
    }
  },
  methods: {
    visibleContact: function visibleContact() {
      this.showContact = true;
      this.showLogin = false;
    },
    hideContent: function hideContent() {
      this.showContact = false;
      this.showLogin = true;
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    },
    login: function login(user) {
      var _this = this;

      this.user.post("/").then(function (response) {
        var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.sign({
          user: user
        }, "@diu#pro$book%day&40!sss&2020@Final#PrOjeCt"); //   var auth = `${authUser}`;

        localStorage.setItem("diu-pro-book-sss", token); //   localStorage.setItem("diu-pro-book-sssAuth", auth);

        window.location.reload(function () {
          _this.$router.push("/home");
        });
        Toast.fire({
          icon: "success",
          title: "Login Successfull."
        });
      })["catch"](function (error) {
        Toast.fire({
          icon: "warning",
          title: "Wrong Cridentials."
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.flash-news:after {\n  content: \"\";\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 0) 0%,\n    rgba(255, 255, 255, 1) 100%\n  );\n  right: 0px;\n  width: 30px;\n  height: 38px;\n  top: 1px;\n  z-index: 2;\n  position: absolute;\n}\n.flash-news {\n  float: left;\n  position: relative;\n  width: calc(100% - 350px);\n  overflow: hidden;\n}\n.flash-news-header:after {\n  content: \"\";\n  background: linear-gradient(\n    90deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(255, 255, 255, 0) 100%\n  );\n  right: -30px;\n  width: 30px;\n  height: 38px;\n  top: 1px;\n  z-index: 999;\n  display: inline-block;\n  position: absolute;\n}\n.flash-news-header {\n  background-color: #ee4930;\n  float: left;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n}\n.flash-news-title {\n  color: #fff;\n  height: 40px;\n  margin: 0;\n  padding: 12px 15px 14px;\n  text-transform: uppercase;\n  font-size: 14px;\n}\n.marquee:before {\n  background-color: #333;\n  content: \"\";\n  width: 100%;\n  top: 0;\n  bottom: 0;\n}\n.marquee {\n  /*background-color: #fff;*/\n  /*border: 1px solid #e7e7e7;*/\n  height: 40px;\n  overflow: hidden;\n  width: 100%;\n}\n.marquee .news-post-img img {\n  border-radius: 5px;\n  height: 50px;\n  width: 60px;\n  margin-right: 3px;\n}\n.marquee .news-post-title {\n  margin-right: 5px;\n  display: inline-block;\n  background-color: #51262a;\n  padding-right: 5px;\n}\n.marquee .news-post-title h3 {\n  display: inline-block;\n  font-size: 22px;\n  font-weight: 400;\n  margin: 0;\n  color: #fff;\n  letter-spacing: 0.2px;\n}\n.dinvv {\n  -webkit-animation: 46.67s linear 0s infinite normal none running\n    marqueeAnimation-1458147;\n          animation: 46.67s linear 0s infinite normal none running\n    marqueeAnimation-1458147;\n  transform: translateX(0px);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=template&id=83f3b392&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/frontend/login.vue?vue&type=template&id=83f3b392& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("header", { attrs: { id: "header-inverse" } }, [
      _c(
        "nav",
        { staticClass: "navbar navbar-default navbar-fixed-top menu" },
        [
          _c("div", { staticClass: "container" }, [
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
                    _c("li", [
                      _c(
                        "a",
                        {
                          attrs: { title: "Contact", href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.visibleContact()
                            }
                          }
                        },
                        [
                          _c("img", {
                            staticClass: "profile-photo-xs",
                            attrs: {
                              src: "images/group-icon/contact.jpg",
                              alt: "Contact"
                            }
                          })
                        ]
                      )
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { attrs: { id: "lp-register" } }, [
      _c("div", { staticClass: "container wrapper" }, [
        _c(
          "div",
          {
            staticClass: "flash-news",
            staticStyle: {
              width: "100%",
              "margin-bottom": "30px",
              "margin-top": "-65px"
            }
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "marquee" },
              [
                _c(
                  "marquee",
                  {
                    staticClass: "dinvv",
                    attrs: {
                      behavior: "scroll",
                      direction: "left",
                      onmouseover: "this.stop();",
                      onmouseout: "this.start();"
                    }
                  },
                  _vm._l(_vm.getClubEvents.events, function(event) {
                    return _c(
                      "div",
                      { key: event.id, staticClass: "news-post-title dingu" },
                      [
                        _c("a", [
                          _c("span", { staticClass: "news-post-img" }, [
                            event.photo
                              ? _c("img", {
                                  attrs: { src: _vm.ourImage(event.photo) }
                                })
                              : _vm._e()
                          ]),
                          _vm._v(" "),
                          _c("h3", [
                            _vm._v(
                              "Event of " + _vm._s(event.name) + " going on"
                            )
                          ])
                        ])
                      ]
                    )
                  }),
                  0
                )
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showContact,
                expression: "showContact"
              }
            ],
            staticClass: "row",
            staticStyle: { "margin-top": "140px !important" }
          },
          [
            _c("div", { staticClass: "col-md-10 col-md-offset-1" }, [
              _c("div", { staticClass: "contact-us" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "pull-right",
                        staticStyle: {
                          "margin-top": "-35px",
                          "margin-right": "-20px"
                        }
                      },
                      [
                        _c(
                          "a",
                          {
                            staticClass: "badge badge-danger",
                            staticStyle: { "font-size": "15px !important" },
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.hideContent()
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                              x\n                          "
                            )
                          ]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(1),
                    _vm._v(" "),
                    _vm._l(_vm.getSettings.settings, function(set) {
                      return _c(
                        "div",
                        { key: set.id, staticClass: "col-md-4 col-sm-5" },
                        [
                          _c("h4", { staticClass: "grey" }, [
                            _vm._v("Reach Us")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "reach" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c("p", [_vm._v("+88" + _vm._s(set.phn_number))])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "reach" }, [
                            _vm._m(3, true),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(set.email))])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "reach" }, [
                            _vm._m(4, true),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(set.location))])
                          ])
                        ]
                      )
                    })
                  ],
                  2
                )
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showLogin,
                expression: "showLogin"
              }
            ],
            staticClass: "row"
          },
          [
            _vm._m(5),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 col-sm-offset-1" }, [
              _c("div", { staticClass: "reg-form-container" }, [
                _c("div", { staticClass: "reg-options" }, [
                  _c("ul", { staticClass: "nav nav-tabs" }, [
                    _vm._m(6),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c("router-link", { attrs: { to: "/signUp" } }, [
                          _vm._v("Register")
                        ])
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "tab-content" }, [
                  _c(
                    "div",
                    { staticClass: "tab-pane active", attrs: { id: "login" } },
                    [
                      _c("h3", [_vm._v("Login")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Log into your account")
                      ]),
                      _vm._v(" "),
                      _c(
                        "form",
                        {
                          staticClass: "row",
                          attrs: { name: "Login_form", id: "Login_form" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.login()
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "sr-only",
                                  attrs: { for: "my-email" }
                                },
                                [_vm._v("Email")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.email,
                                    expression: "user.email"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.user.errors.has("email")
                                },
                                attrs: {
                                  id: "my-email",
                                  type: "email",
                                  name: "email",
                                  title: "Enter Email",
                                  placeholder: "Your Email"
                                },
                                domProps: { value: _vm.user.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.user, field: "email" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-md-12" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "sr-only",
                                  attrs: { for: "my-password" }
                                },
                                [_vm._v("Password")]
                              ),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.user.password,
                                    expression: "user.password"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.user.errors.has("password")
                                },
                                attrs: {
                                  id: "my-password",
                                  type: "password",
                                  name: "password",
                                  title: "Enter password",
                                  placeholder: "Password"
                                },
                                domProps: { value: _vm.user.password },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.user,
                                      "password",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.user, field: "password" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "col-8",
                              staticStyle: { "margin-left": "11px" }
                            },
                            [
                              _c("div", { staticClass: "icheck-primary" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.user.remember_me,
                                      expression: "user.remember_me"
                                    }
                                  ],
                                  attrs: {
                                    type: "checkbox",
                                    id: "remember",
                                    name: "remember_me"
                                  },
                                  domProps: {
                                    checked: Array.isArray(_vm.user.remember_me)
                                      ? _vm._i(_vm.user.remember_me, null) > -1
                                      : _vm.user.remember_me
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = _vm.user.remember_me,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              _vm.user,
                                              "remember_me",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              _vm.user,
                                              "remember_me",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(_vm.user, "remember_me", $$c)
                                      }
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "remember" } }, [
                                  _vm._v("Remember Me")
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              staticStyle: { "margin-left": "11px" },
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Login Now")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm._m(7)
                    ]
                  )
                ])
              ])
            ])
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flash-news-header" }, [
      _c("h4", { staticClass: "flash-news-title" }, [_vm._v("Running Events")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-8 col-sm-7" }, [
      _c("h4", { staticClass: "grey" }, [_vm._v("Leave a Message")]),
      _vm._v(" "),
      _c("form", { staticClass: "contact-form" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("i", { staticClass: "icon ion-person" }),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              disabled: "",
              id: "contact-name",
              type: "text",
              name: "name",
              placeholder: "Enter your name *",
              required: "required",
              "data-error": "Name is required."
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("i", { staticClass: "icon ion-email" }),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              disabled: "",
              id: "contact-email",
              type: "text",
              name: "email",
              placeholder: "Enter your email *",
              required: "required",
              "data-error": "Email is required."
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("i", { staticClass: "icon ion-android-call" }),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: {
              disabled: "",
              id: "contact-phone",
              type: "text",
              name: "phone",
              placeholder: "Enter your phone *",
              required: "required",
              "data-error": "Phone is required."
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-group" }, [
          _c("textarea", {
            staticClass: "form-control",
            attrs: {
              disabled: "",
              id: "form-message",
              name: "message",
              placeholder: "Leave a message for us *",
              rows: "3",
              required: "required"
            }
          })
        ])
      ]),
      _vm._v(" "),
      _c("button", { staticClass: "btn-primary", attrs: { disabled: "" } }, [
        _vm._v("Send a Message")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "phone-icon" }, [
      _c("i", { staticClass: "icon ion-android-call" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "phone-icon" }, [
      _c("i", { staticClass: "icon ion-email" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "phone-icon" }, [
      _c("i", { staticClass: "icon ion-ios-location" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm-5" }, [
      _c("div", { staticClass: "intro-texts" }, [
        _c("h1", [
          _vm._v("\n              Welcome to\n              "),
          _c("strong", { staticClass: "text-green" }, [_vm._v("DIU Club Star")])
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "text-magenta" }, [
          _vm._v("Publish Your Creativity !!!")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "\n              'Diu Club Star' helps to you as a eligible participants to participate ‍any\n              club related program/event of Dhaka International University\n              via testing and selecting your creativity.\n              "
          ),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v("Why are you waiting for? Participate now.\n            ")
        ]),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { disabled: "" } },
          [_vm._v("Learn More")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "active" }, [
      _c("a", { attrs: { href: "#login", "data-toggle": "tab" } }, [
        _vm._v("Login")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _c("a", { attrs: { href: "#" } }, [_vm._v("Forgot Password?")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/frontend/login.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/frontend/login.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_vue_vue_type_template_id_83f3b392___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=83f3b392& */ "./resources/js/components/frontend/login.vue?vue&type=template&id=83f3b392&");
/* harmony import */ var _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_vue_vue_type_template_id_83f3b392___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_vue_vue_type_template_id_83f3b392___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/frontend/login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/frontend/login.vue?vue&type=template&id=83f3b392&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/frontend/login.vue?vue&type=template&id=83f3b392& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_83f3b392___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=83f3b392& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/frontend/login.vue?vue&type=template&id=83f3b392&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_83f3b392___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_83f3b392___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);