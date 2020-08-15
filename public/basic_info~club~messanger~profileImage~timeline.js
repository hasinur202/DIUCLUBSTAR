(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic_info~club~messanger~profileImage~timeline"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/footer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/footer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "footer"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/header.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "header",
  data: function data() {
    return {
      addFriendData: {
        id: "",
        requested_id: "",
        requester_id: "",
        status: ""
      },
      authorData: {},
      memberApprove: _defineProperty({
        id: '',
        club_id: '',
        user_id: '',
        status: ''
      }, "id", '')
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchAuthor();
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubMemberAction");
    this.$store.dispatch("getAuthorAction");
    this.$store.dispatch("getCheckAction");

    if (authUser) {
      Echo["private"]("AddFriend.".concat(authUser.id)).listen("AddFriendEvent", function (e) {
        _this.$store.dispatch("getFriendRequestAction");
      });
    }
  },
  created: function created() {},
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests: function getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getClubMembers: function getClubMembers() {
      return this.$store.getters.getClubMember;
    },
    getAuthors: function getAuthors() {
      return this.$store.getters.getAuthor;
    },
    getChecks: function getChecks() {
      return this.$store.getters.getCheck;
    }
  },
  methods: {
    approve: function approve(member) {
      var _this2 = this;

      this.memberApprove.id = member.id;
      this.memberApprove.user_id = member.user_id;
      this.memberApprove.status = 1;
      this.memberApprove.club_id = member.club_id;
      axios.post('/approve/' + this.memberApprove.id, {
        user_id: this.memberApprove.user_id = member.user_id,
        status: this.memberApprove.status = 1,
        club_id: this.memberApprove.club_id = member.club_id
      }).then(function (response) {
        _this2.$store.dispatch("getCheckAction");

        Toast.fire({
          icon: "success",
          title: "Approve Successfull."
        });
      });
    },
    dismis: function dismis(member) {
      var _this3 = this;

      this.memberApprove.id = member.id;
      axios.post('/dismis/' + this.memberApprove.id).then(function (response) {
        _this3.$store.dispatch("getCheckAction");

        Toast.fire({
          icon: "success",
          title: "Join request dismised."
        });
      });
    },
    fetchAuthor: function fetchAuthor() {
      var _this4 = this;

      axios.get('/get-author').then(function (response) {
        response.data.authors.forEach(function (el) {
          _this4.authorData = el; // console.log(this.authorData)
        });
      });
    },
    logout: function logout() {
      var _this5 = this;

      axios.get("/logout").then(function (response) {
        localStorage.removeItem("diu-pro-book-sss");
        localStorage.removeItem("diu-pro-book-sssAuth");

        _this5.$router.push("/");

        window.location.reload();
        Toast.fire({
          icon: "success",
          title: "Logout Successfull."
        });
      })["catch"](function () {});
    },
    accept: function accept(request) {
      var _this6 = this;

      this.addFriendData.id = request.id;
      this.addFriendData.requested_id = request.requested_id;
      this.addFriendData.requester_id = request.requester_id;
      this.addFriendData.status = 1;
      axios.post("/accept/" + this.addFriendData.id, {
        id: this.addFriendData.id,
        requested_id: this.addFriendData.requested_id,
        requester_id: this.addFriendData.requester_id,
        status: this.addFriendData.status
      }).then(function (response) {
        _this6.$store.dispatch("getFriendRequestAction");

        Toast.fire({
          icon: "success",
          title: "Requested Accepted."
        });
      });
    },
    reject: function reject(request) {
      this.addFriendData.id = request.id;
      axios.post("/reject/" + this.addFriendData.id).then(function (response) {
        Toast.fire({
          icon: "warning",
          title: "Requested Rejected."
        });
      });
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.noti-dot {\n  background: red;\n  height: 15px;\n  width: 30px;\n  border-radius: 5px;\n  position: absolute;\n  bottom: 37px;\n  border: 2px solid #fff;\n  left: 0;\n  right: -25px;\n  margin: auto;\n  font-size: 10px;\n  line-height: 1.2;\n  text-align: center;\n}\n.hasNoti {\n  position: relative;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/footer.vue?vue&type=template&id=380cc66c&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/footer.vue?vue&type=template&id=380cc66c& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
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
                  _vm._v("+880 1773-078 995\n            ")
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "icon ion-ios-email-outline" }),
                  _vm._v("diu.probook@gmail.com\n            ")
                ]),
                _vm._v(" "),
                _c("li", [
                  _c("i", { staticClass: "icon ion-ios-location-outline" }),
                  _vm._v("Green Road, Dhaka\n            ")
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=template&id=593f2a5e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/header.vue?vue&type=template&id=593f2a5e& ***!
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
  return _c("header", { attrs: { id: "header" } }, [
    _c("nav", { staticClass: "navbar navbar-default navbar-fixed-top menu" }, [
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
            _c("ul", { staticClass: "nav navbar-nav navbar-right main-menu" }, [
              _c(
                "li",
                [
                  _c("router-link", { attrs: { to: "/home", title: "Home" } }, [
                    _c("img", {
                      staticClass: "profile-photo-xs",
                      attrs: { src: "images/group-icon/home.jpg", alt: "Home" }
                    })
                  ])
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
                            to: {
                              name: "timeline",
                              params: {
                                name: _vm.getDatas.users.first_name
                              }
                            }
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
              _vm.$route.path == "/avatar" ? _c("li", [_vm._m(3)]) : _vm._e(),
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
                            $event.preventDefault()
                            return _vm.logout()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                  Logout\n                  "
                        ),
                        _c("i", { staticClass: "icon ion-log-out pull-right" })
                      ]
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm.$route.name !== "club"
                ? _c("li", { staticClass: "dropdown" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-toggle",
                        attrs: {
                          title: "Notification",
                          href: "#",
                          "data-toggle": "dropdown",
                          role: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "profile-photo-xs hasNoti",
                          attrs: {
                            src: "images/notify.png",
                            alt: "Login-logout-register"
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.getFriendRequests.frinedships, function(
                          count
                        ) {
                          return _c("div", { key: count.id }, [
                            count.requested_id == _vm.getDatas.users.id &&
                            count.status == 0
                              ? _c("span", { staticClass: "noti-dot" }, [
                                  _vm._v("New")
                                ])
                              : _vm._e()
                          ])
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "dropdown-menu login friend-request-ul" },
                      _vm._l(_vm.getFriendRequests.frinedships, function(
                        request
                      ) {
                        return _c("div", { key: request.id }, [
                          request.requested_id == _vm.getDatas.users.id &&
                          request.status == 0
                            ? _c("li", { staticClass: "friend-request-li" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "pull-left friend-request-left-li"
                                  },
                                  [
                                    _vm._l(request.user.avatar, function(avtr) {
                                      return _c("img", {
                                        key: avtr.id,
                                        staticClass:
                                          "profile-photo-xs friend-request-left-li-avatar",
                                        attrs: {
                                          src: _vm.ourImage(avtr.avatar),
                                          alt: "Login-logout-register"
                                        }
                                      })
                                    }),
                                    _vm._v(" "),
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(request.user.first_name) +
                                          "\n                      "
                                      ),
                                      _c("span", { staticClass: "span" }, [
                                        _vm._v(
                                          _vm._s(request.user.department) +
                                            "-" +
                                            _vm._s(request.user.batch)
                                        )
                                      ])
                                    ])
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "pull-right friend-request-right-li"
                                  },
                                  [
                                    _c(
                                      "form",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.accept(request)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "accept-btn",
                                            attrs: { type: "submit", href: "#" }
                                          },
                                          [_vm._v("Confirm")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "form",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.reject(request)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: { type: "submit", href: "#" }
                                          },
                                          [_vm._v("Reject")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$route.name == "club" &&
              _vm.authorData.author_id == _vm.getDatas.users.id
                ? _c("li", { staticClass: "dropdown" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-toggle",
                        attrs: {
                          title: "Notification test",
                          href: "#",
                          "data-toggle": "dropdown",
                          role: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c("img", {
                          staticClass: "profile-photo-xs hasNoti",
                          attrs: {
                            src: "images/notify.png",
                            alt: "Login-logout-register"
                          }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.getClubMembers, function(member) {
                          return _c("div", { key: member.id }, [
                            member.club_id == _vm.$route.params.cl_id &&
                            member.status == 0
                              ? _c("span", { staticClass: "noti-dot" }, [
                                  _vm._v("New")
                                ])
                              : _vm._e()
                          ])
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "dropdown-menu login friend-request-ul" },
                      _vm._l(_vm.getClubMembers, function(member) {
                        return _c("div", { key: member.id }, [
                          member.club_id == _vm.$route.params.cl_id &&
                          member.status == 0
                            ? _c("li", { staticClass: "friend-request-li" }, [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "pull-left friend-request-left-li"
                                  },
                                  [
                                    _vm._l(member.user.avatar, function(avtr) {
                                      return _c("img", {
                                        key: avtr.id,
                                        staticClass:
                                          "profile-photo-xs friend-request-left-li-avatar",
                                        attrs: {
                                          src: _vm.ourImage(avtr.avatar),
                                          alt: "Login-logout-register"
                                        }
                                      })
                                    }),
                                    _vm._v(" "),
                                    _c("a", { attrs: { href: "#" } }, [
                                      _vm._v(
                                        "\n                      " +
                                          _vm._s(member.user.first_name) +
                                          "\n                      "
                                      ),
                                      _c("span", { staticClass: "span" }, [
                                        _vm._v(
                                          _vm._s(member.user.department) +
                                            "-" +
                                            _vm._s(member.user.batch)
                                        )
                                      ])
                                    ])
                                  ],
                                  2
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "pull-right friend-request-right-li"
                                  },
                                  [
                                    _c(
                                      "form",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.approve(member)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            staticClass: "accept-btn",
                                            attrs: { type: "submit", href: "#" }
                                          },
                                          [_vm._v("Approve")]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "form",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.dismis(member)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            attrs: { type: "submit", href: "#" }
                                          },
                                          [_vm._v("Dismis")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      }),
                      0
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm._m(6)
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
            _vm._v("\n                  DIU Club\n                  "),
            _c("i", { staticClass: "icon ion-ios-people pull-right" })
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("a", { attrs: { href: "batch.html" } }, [
            _vm._v("\n                  All Batch\n                  "),
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
          attrs: { src: "images/clubs.png", alt: "Talent Hunt" }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { title: "Contact", href: "contact.html" } }, [
      _c("img", {
        staticClass: "profile-photo-xs",
        attrs: { src: "images/group-icon/contact.jpg", alt: "Contact" }
      })
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
          attrs: { src: "images/logo-logout.jpg", alt: "Login-logout-register" }
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
        _vm._v("\n                  Create group\n                  "),
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/footer.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/footer.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_380cc66c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=380cc66c& */ "./resources/js/components/layouts/footer.vue?vue&type=template&id=380cc66c&");
/* harmony import */ var _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_380cc66c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_380cc66c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/footer.vue?vue&type=template&id=380cc66c&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/footer.vue?vue&type=template&id=380cc66c& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_380cc66c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=380cc66c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/footer.vue?vue&type=template&id=380cc66c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_380cc66c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_380cc66c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/header.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/layouts/header.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_593f2a5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=593f2a5e& */ "./resources/js/components/layouts/header.vue?vue&type=template&id=593f2a5e&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_593f2a5e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_593f2a5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/layouts/header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/layouts/header.vue?vue&type=template&id=593f2a5e&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/header.vue?vue&type=template&id=593f2a5e& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_593f2a5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=593f2a5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/header.vue?vue&type=template&id=593f2a5e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_593f2a5e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_593f2a5e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);