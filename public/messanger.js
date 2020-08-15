(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messanger"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/messanger.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "messanger",
  components: {
    headercomponent: _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    footercomponent: _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      avatar_id: "",
      message: "",
      typing: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);

    if (authUser) {
      Echo["private"]("Chat.".concat(authUser.id)).listen("SendMessage", function (e) {
        _this.selectUser(e.messages.from); // console.log("ok");

      });
      Echo["private"]("typingEvent").listenForWhisper("typing", function (e) {
        if (e.user.id == _this.getUserMessages.user.id && e.userId == authUser.id) {
          _this.typing = e.user.first_name;
          setTimeout(function () {
            _this.typing = "";
          }, 2000);
        }
      });
    }

    this.$store.dispatch("userAction");
    this.$store.dispatch("onlineUserAction");
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    },
    getUsers: function getUsers() {
      return this.$store.getters.getOnlineUser;
    },
    getUserMessages: function getUserMessages() {
      return this.$store.getters.getUserMessage;
    }
  },
  methods: {
    send: function send(data) {
      var _this2 = this;

      this.avatar_id = data.id;

      if (this.message !== "") {
        axios.post("/send", {
          avatar_id: this.avatar_id,
          message: this.message,
          user_id: this.getUserMessages.user.id
        }).then(function (response) {
          _this2.message = "";

          _this2.selectUser(_this2.getUserMessages.user.id);
        });
      }
    },
    selectUser: function selectUser(userId) {
      this.$store.dispatch("userMessageAction", userId);
    },
    typingEvent: function typingEvent(userId) {
      Echo["private"]("typingEvent").whisper("typing", {
        user: authUser,
        typing: this.message,
        userId: userId
      });
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/messanger.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.chat-room .chat-body ul.chat-message li.right .chat-item::after {\n    border-left: 8px solid rgb(10, 128, 255) !important;\n}\n.chat-room .chat-body ul.chat-message li.right .chat-item::before {\n    border-right: 8px solid #0A80FF !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/messanger.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./messanger.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=template&id=7441e501&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/messanger.vue?vue&type=template&id=7441e501& ***!
  \*************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        {
          staticStyle: { "background-color": "#1a2236 !important" },
          attrs: { id: "page-contents" }
        },
        [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-md-10 tab-content" }, [
                _c(
                  "div",
                  { staticClass: "chat-room" },
                  _vm._l(_vm.getDatas.avatars, function(data) {
                    return _c("div", { key: data.id, staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-4" }, [
                        _c("div", { staticClass: "profile-card" }, [
                          _c("img", {
                            staticClass: "cover-photo",
                            attrs: {
                              src: _vm.ourImage(data.cover_photo),
                              alt: "user"
                            }
                          }),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "profile-photo",
                            attrs: {
                              src: _vm.ourImage(data.avatar),
                              alt: "user"
                            }
                          }),
                          _vm._v(" "),
                          _c("h5", [
                            _vm.getDatas.users
                              ? _c(
                                  "a",
                                  {
                                    staticClass: "text-white",
                                    staticStyle: {
                                      color: "#000",
                                      "font-weight": "700"
                                    },
                                    attrs: { href: "#" }
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.getDatas.users.first_name)
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass:
                              "nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer"
                          },
                          _vm._l(_vm.getUsers, function(user) {
                            return _c(
                              "li",
                              {
                                key: user.id,
                                staticClass: "active",
                                staticStyle: {
                                  "border-bottom": "1px solid #293145",
                                  "margin-bottom": "5px !important"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.selectUser(user.id)
                                  }
                                }
                              },
                              [
                                _vm._l(user.friendship, function(friend) {
                                  return _c("div", { key: friend.id }, [
                                    user.id == friend.requested_id &&
                                    friend.status == 1
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "#",
                                              "data-toggle": "tab"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "contact" },
                                              [
                                                _vm._l(user.avatar, function(
                                                  avatar
                                                ) {
                                                  return _c(
                                                    "div",
                                                    { key: avatar.id },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "profile-photo-sm pull-left",
                                                        attrs: {
                                                          src: _vm.ourImage(
                                                            avatar.avatar
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  )
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "msg-preview",
                                                    staticStyle: {
                                                      display: "inline-block"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "h5",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px",
                                                          "margin-bottom":
                                                            "0px",
                                                          color:
                                                            "rgba(255,255,255,.75)"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.first_name
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px !important",
                                                          "font-size": "12px",
                                                          color: "#767676"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.department
                                                          ) +
                                                            "-" +
                                                            _vm._s(user.batch)
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    user.id == friend.requester_id &&
                                    friend.status == 1
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "#",
                                              "data-toggle": "tab"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "contact" },
                                              [
                                                _vm._l(user.avatar, function(
                                                  avataru
                                                ) {
                                                  return _c(
                                                    "div",
                                                    { key: avataru.id },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "profile-photo-sm pull-left",
                                                        attrs: {
                                                          src: _vm.ourImage(
                                                            avataru.avatar
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  )
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "msg-preview",
                                                    staticStyle: {
                                                      display: "inline-block"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "h5",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px",
                                                          "margin-bottom":
                                                            "0px",
                                                          color:
                                                            "rgba(255,255,255,.75)"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.first_name
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px !important",
                                                          "font-size": "12px",
                                                          color: "#767676"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.department
                                                          ) +
                                                            "-" +
                                                            _vm._s(user.batch)
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                }),
                                _vm._v(" "),
                                _vm._l(user.friendship_requested, function(
                                  friend_req
                                ) {
                                  return _c("div", { key: friend_req.id }, [
                                    user.id == friend_req.requested_id &&
                                    friend_req.status == 1
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "#",
                                              "data-toggle": "tab"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "contact" },
                                              [
                                                _vm._l(user.avatar, function(
                                                  avatar
                                                ) {
                                                  return _c(
                                                    "div",
                                                    { key: avatar.id },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "profile-photo-sm pull-left",
                                                        attrs: {
                                                          src: _vm.ourImage(
                                                            avatar.avatar
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  )
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "msg-preview",
                                                    staticStyle: {
                                                      display: "inline-block"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "h5",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px",
                                                          "margin-bottom":
                                                            "0px",
                                                          color:
                                                            "rgba(255,255,255,.75)"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.first_name
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px !important",
                                                          "font-size": "12px",
                                                          color: "#767676"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.department
                                                          ) +
                                                            "-" +
                                                            _vm._s(user.batch)
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    user.id == friend_req.requester_id &&
                                    friend_req.status == 1
                                      ? _c(
                                          "a",
                                          {
                                            attrs: {
                                              href: "#",
                                              "data-toggle": "tab"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "contact" },
                                              [
                                                _vm._l(user.avatar, function(
                                                  avatarrq
                                                ) {
                                                  return _c(
                                                    "div",
                                                    { key: avatarrq.id },
                                                    [
                                                      _c("img", {
                                                        staticClass:
                                                          "profile-photo-sm pull-left",
                                                        attrs: {
                                                          src: _vm.ourImage(
                                                            avatarrq.avatar
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    ]
                                                  )
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "msg-preview",
                                                    staticStyle: {
                                                      display: "inline-block"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "h5",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px",
                                                          "margin-bottom":
                                                            "0px",
                                                          color:
                                                            "rgba(255,255,255,.75)"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.first_name
                                                          )
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "span",
                                                      {
                                                        staticStyle: {
                                                          "margin-left":
                                                            "-40px !important",
                                                          "font-size": "12px",
                                                          color: "#767676"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            user.department
                                                          ) +
                                                            "-" +
                                                            _vm._s(user.batch)
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ],
                                              2
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                })
                              ],
                              2
                            )
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-8" }, [
                        _c("div", [
                          _vm.getUserMessages.user
                            ? _c("h5", [
                                _vm._v(
                                  _vm._s(_vm.getUserMessages.user.first_name)
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("hr"),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            directives: [
                              { name: "chat-scroll", rawName: "v-chat-scroll" }
                            ],
                            staticClass:
                              "tab-content scrollbar-wrapper wrapper scrollbar-outer",
                            staticStyle: { height: "300px !important" }
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "tab-pane active",
                                attrs: { id: "contact-1" }
                              },
                              [
                                _c(
                                  "div",
                                  { staticClass: "chat-body" },
                                  _vm._l(_vm.getUserMessages.messages, function(
                                    message
                                  ) {
                                    return _c(
                                      "ul",
                                      {
                                        key: message.id,
                                        staticClass: "chat-message"
                                      },
                                      [
                                        message.type == 1
                                          ? _c(
                                              "li",
                                              {
                                                staticClass: "left",
                                                staticStyle: {
                                                  width: "65% !important"
                                                }
                                              },
                                              [
                                                message.avatar
                                                  ? _c("img", {
                                                      staticClass:
                                                        "profile-photo-sm pull-left",
                                                      attrs: {
                                                        src: _vm.ourImage(
                                                          message.avatar.avatar
                                                        ),
                                                        alt: ""
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "chat-item",
                                                    staticStyle: {
                                                      color:
                                                        "rgb(255, 255, 255) !important",
                                                      background: "#293145"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "chat-item-header"
                                                      },
                                                      [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "rgba(255,255,255,.75) !important"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                message.user
                                                                  .first_name
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "small",
                                                          {
                                                            staticClass:
                                                              "text-muted",
                                                            staticStyle: {
                                                              color:
                                                                "rgba(255,255,255,.75) !important"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                _vm._f(
                                                                  "postTime"
                                                                )(
                                                                  message.user
                                                                    .created_at
                                                                )
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticStyle: {
                                                          color:
                                                            "rgba(255,255,255,.75) !important"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                              " +
                                                            _vm._s(
                                                              message.message
                                                            ) +
                                                            "\n                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        message.type == 0
                                          ? _c(
                                              "li",
                                              {
                                                staticClass: "right",
                                                staticStyle: {
                                                  width: "65% !important",
                                                  "margin-left": "33%"
                                                }
                                              },
                                              [
                                                message.avatar
                                                  ? _c("img", {
                                                      staticClass:
                                                        "profile-photo-sm pull-right",
                                                      attrs: {
                                                        src: _vm.ourImage(
                                                          message.avatar.avatar
                                                        ),
                                                        alt: ""
                                                      }
                                                    })
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "chat-item",
                                                    staticStyle: {
                                                      "background-color":
                                                        "#0A80FF !important"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "chat-item-header"
                                                      },
                                                      [
                                                        _c(
                                                          "h5",
                                                          {
                                                            staticStyle: {
                                                              color:
                                                                "#fff !important"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                message.user
                                                                  .first_name
                                                              )
                                                            )
                                                          ]
                                                        ),
                                                        _vm._v(" "),
                                                        _c(
                                                          "small",
                                                          {
                                                            staticClass:
                                                              "text-muted",
                                                            staticStyle: {
                                                              color:
                                                                "#fff !important"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              _vm._s(
                                                                message.user
                                                                  .created_at
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "p",
                                                      {
                                                        staticStyle: {
                                                          color:
                                                            "#fff !important"
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          _vm._s(
                                                            message.message
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  }),
                                  0
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _vm._m(0, true),
                            _vm._v(" "),
                            _vm._m(1, true),
                            _vm._v(" "),
                            _vm._m(2, true),
                            _vm._v(" "),
                            _vm._m(3, true),
                            _vm._v(" "),
                            _vm._m(4, true)
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "send-message" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _vm.typing
                              ? _c("p", [
                                  _vm._v(_vm._s(_vm.typing) + " typing...")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.getUserMessages.user
                              ? _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.message,
                                      expression: "message"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    type: "text",
                                    placeholder: "Type your message"
                                  },
                                  domProps: { value: _vm.message },
                                  on: {
                                    keydown: [
                                      function($event) {
                                        return _vm.typingEvent(
                                          _vm.getUserMessages.user.id
                                        )
                                      },
                                      function($event) {
                                        if (
                                          !$event.type.indexOf("key") &&
                                          _vm._k(
                                            $event.keyCode,
                                            "enter",
                                            13,
                                            $event.key,
                                            "Enter"
                                          )
                                        ) {
                                          return null
                                        }
                                        return _vm.send(data)
                                      }
                                    ],
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.message = $event.target.value
                                    }
                                  }
                                })
                              : _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.message,
                                      expression: "message"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    disabled: "",
                                    type: "text",
                                    placeholder: "Type your message"
                                  },
                                  domProps: { value: _vm.message },
                                  on: {
                                    keydown: function($event) {
                                      if (
                                        !$event.type.indexOf("key") &&
                                        _vm._k(
                                          $event.keyCode,
                                          "enter",
                                          13,
                                          $event.key,
                                          "Enter"
                                        )
                                      ) {
                                        return null
                                      }
                                      return _vm.send($event)
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.message = $event.target.value
                                    }
                                  }
                                }),
                            _vm._v(" "),
                            _c("span", { staticClass: "input-group-btn" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-default",
                                  attrs: { type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.send(data)
                                    }
                                  }
                                },
                                [_vm._v("Send")]
                              )
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "clearfix" })
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _vm._m(5)
            ])
          ])
        ]
      ),
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
    return _c("div", { staticClass: "tab-pane", attrs: { id: "contact-2" } }, [
      _c("div", { staticClass: "chat-body" }, [
        _c("ul", { staticClass: "chat-message" }, [
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-10.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Julia Cox")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("a day ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Hi")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "right" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-right",
              attrs: { src: "images/users/user-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Sarah Cruiz")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("a day ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("hellow")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-10.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Julia Cox")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("an hour ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("good")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "right" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-right",
              attrs: { src: "images/users/user-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Sarah Cruiz")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("an hour ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("see you soon")])
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
    return _c("div", { staticClass: "tab-pane", attrs: { id: "contact-3" } }, [
      _c("div", { staticClass: "chat-body" }, [
        _c("ul", { staticClass: "chat-message" }, [
          _c("li", { staticClass: "right" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-right",
              attrs: { src: "images/users/user-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Sarah")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-3.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Sophia Lee")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("a day ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "right" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-right",
              attrs: { src: "images/users/user-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Sarah Cruiz")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("13 hours ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Okay fine. thank you")])
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
    return _c("div", { staticClass: "tab-pane", attrs: { id: "contact-4" } }, [
      _c("div", { staticClass: "chat-body" }, [
        _c("ul", { staticClass: "chat-message" }, [
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-4.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("a day ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-4.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("John Doe")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("a day ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("hey anybody there")])
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
    return _c("div", { staticClass: "tab-pane", attrs: { id: "contact-5" } }, [
      _c("div", { staticClass: "chat-body" }, [
        _c("ul", { staticClass: "chat-message" }, [
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-9.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Anna Young")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores"
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-9.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Anna Young")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "right" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-right",
              attrs: { src: "images/users/user-1.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Sarah Cruiz")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("I gotta go")])
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
    return _c("div", { staticClass: "tab-pane", attrs: { id: "contact-6" } }, [
      _c("div", { staticClass: "chat-body" }, [
        _c("ul", { staticClass: "chat-message" }, [
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-8.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Richard Bell")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Hello")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-8.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Richard Bell")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Hi")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-8.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Richard Bell")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Hey")])
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "left" }, [
            _c("img", {
              staticClass: "profile-photo-sm pull-left",
              attrs: { src: "images/users/user-8.jpg", alt: "" }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "chat-item" }, [
              _c("div", { staticClass: "chat-item-header" }, [
                _c("h5", [_vm._v("Richard Bell")]),
                _vm._v(" "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("2 days ago")
                ])
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("Hey there")])
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/messanger.vue":
/*!************************************!*\
  !*** ./resources/js/messanger.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messanger_vue_vue_type_template_id_7441e501___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messanger.vue?vue&type=template&id=7441e501& */ "./resources/js/messanger.vue?vue&type=template&id=7441e501&");
/* harmony import */ var _messanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messanger.vue?vue&type=script&lang=js& */ "./resources/js/messanger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messanger.vue?vue&type=style&index=0&lang=css& */ "./resources/js/messanger.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _messanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messanger_vue_vue_type_template_id_7441e501___WEBPACK_IMPORTED_MODULE_0__["render"],
  _messanger_vue_vue_type_template_id_7441e501___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/messanger.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/messanger.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/messanger.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./messanger.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/messanger.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************!*\
  !*** ./resources/js/messanger.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./messanger.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/messanger.vue?vue&type=template&id=7441e501&":
/*!*******************************************************************!*\
  !*** ./resources/js/messanger.vue?vue&type=template&id=7441e501& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_template_id_7441e501___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./messanger.vue?vue&type=template&id=7441e501& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/messanger.vue?vue&type=template&id=7441e501&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_template_id_7441e501___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_messanger_vue_vue_type_template_id_7441e501___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);