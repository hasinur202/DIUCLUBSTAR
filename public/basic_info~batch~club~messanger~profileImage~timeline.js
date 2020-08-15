(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic_info~batch~club~messanger~profileImage~timeline"],{

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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      count_req_style: false,
      notiCountStyle: false,
      notiCountReqStyle: false,
      countSkillStyle: false,
      addFriendData: {
        id: "",
        requested_id: "",
        requester_id: "",
        status: ""
      },
      authorData: [],
      memberApprove: _defineProperty({
        id: "",
        club_id: "",
        user_id: "",
        status: ""
      }, "id", ""),
      updateNoti: {
        id: "",
        status: "",
        user_id: "",
        club_id: "",
        event_id: "",
        noti: ""
      },
      search: "",
      searchValue: "",
      getSesrchValue: false,
      getAuthUserId: "",
      count_member_request: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.fetchAuthor();
    axios.get('/count-club-member-request/' + this.$route.params.cl_id).then(function (response) {
      _this.count_member_request = response.data.count_request;
    });
    this.getAuthUserId = "".concat(authUser.id);
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubMemberAction");
    this.$store.dispatch("getAuthorAction");
    this.$store.dispatch("getCheckAction");
    this.$store.dispatch("getNotiAction");
    this.$store.dispatch("getSkillAction"); // if (authUser) {
    //   Echo.private(`ApproveParticipateNoti.${authUser.id}`).listen("ParticipateRequestApprovalNotiEvent", e => {
    //     this.$store.dispatch("getNotiAction");
    //   });
    // }

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
    },
    getNotis: function getNotis() {
      return this.$store.getters.getNoti;
    },
    getSkills: function getSkills() {
      return this.$store.getters.getSkill;
    }
  },
  methods: {
    getCountSkill: function getCountSkill(getSkills) {
      if (getSkills.count_skill !== null) {
        this.countSkillStyle = true;
      }
    },
    getCountReq: function getCountReq(member) {
      // this.$store.dispatch("getClubMemberAction");
      if (member.club_id == this.$route.params.cl_id && member.status == 0) {
        this.notiCountReqStyle = true;
      }
    },
    getNotiCount: function getNotiCount(getNotis) {
      if (getNotis.notiCount !== null) {
        this.notiCountStyle = true;
      }
    },
    getCountFriendReq: function getCountFriendReq(count) {
      if (count !== null) {
        this.count_req_style = true;
      }
    },
    updateStatus: function updateStatus(getNotis) {
      var _this2 = this;

      getNotis.noti.forEach(function (el) {
        if (el.user_id == "".concat(authUser.id)) {
          _this2.updateNoti.id = el.id;
          _this2.updateNoti.user_id = el.user_id;
          _this2.updateNoti.club_id = el.club_id;
          _this2.updateNoti.event_id = el.event_id;
          _this2.updateNoti.noti = el.noti;
          _this2.updateNoti.notiStatus = 1;
          axios.post('/update-noti/' + _this2.updateNoti.id, {
            status: _this2.updateNoti.notiStatus,
            user_id: _this2.updateNoti.user_id,
            club_id: _this2.updateNoti.club_id,
            event_id: _this2.updateNoti.event_id,
            noti: _this2.updateNoti.noti
          }).then(function (response) {
            setTimeout(function () {}, 6000);

            _this2.$store.dispatch("getNotiAction");
          });
        }
      });
    },
    // searchUserTimeline(val){
    // },
    searchData: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      var _this3 = this;

      if (this.search !== "") {
        axios.get("/home?q=" + this.search).then(function (response) {
          _this3.searchValue = response.data.user;
          _this3.getSesrchValue = true; // console.log(response.data.user);
        });
      } else {
        this.getSesrchValue = false;
        this.search = "";
      }
    }, 300),
    approve: function approve(member) {
      var _this4 = this;

      this.memberApprove.id = member.id;
      this.memberApprove.user_id = member.user_id;
      this.memberApprove.status = 1;
      this.memberApprove.club_id = member.club_id;
      axios.post("/approve/" + this.memberApprove.id, {
        user_id: this.memberApprove.user_id = member.user_id,
        status: this.memberApprove.status = 1,
        club_id: this.memberApprove.club_id = member.club_id
      }).then(function (response) {
        _this4.$store.dispatch("getCheckAction");

        _this4.$store.dispatch("getClubMemberAction");

        Toast.fire({
          icon: "success",
          title: "Approve Successfull."
        });
      });
    },
    dismis: function dismis(member) {
      var _this5 = this;

      this.memberApprove.id = member.id;
      axios.post("/dismis/" + this.memberApprove.id).then(function (response) {
        _this5.$store.dispatch("getCheckAction");

        _this5.$store.dispatch("getClubMemberAction");

        Toast.fire({
          icon: "success",
          title: "Join request dismised."
        });
      });
    },
    fetchAuthor: function fetchAuthor() {
      var _this6 = this;

      axios.get("/get-author").then(function (response) {
        response.data.authors.forEach(function (el) {
          _this6.authorData = el;
        });
      });
    },
    logout: function logout() {
      var _this7 = this;

      axios.get("/logout").then(function (response) {
        localStorage.removeItem("diu-pro-book-sss"); //   localStorage.removeItem("diu-pro-book-sssAuth");

        _this7.$router.push("/"); //   window.location.reload();


        Toast.fire({
          icon: "success",
          title: "Logout Successfull."
        });
      })["catch"](function () {});
    },
    accept: function accept(request) {
      var _this8 = this;

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
        _this8.$store.dispatch("getFriendRequestAction");

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
exports.push([module.i, "\n.noti-dot {\n    background: #42B72A;\n    height: 15px;\n    width: 15px;\n    border-radius: 10px;\n    position: absolute;\n    bottom: 35px;\n    border: 2px solid #fff;\n    left: 0;\n    right: -20px;\n    margin: auto;\n    font-size: 10px;\n    line-height: 1.2;\n    text-align: center;\n    top: 6px;\n}\n.noti-unread-li{\n    padding: 5px 5px 5px 5px !important;\n    border-bottom: 0px !important;\n    border-bottom: 1px solid rgb(0, 255, 255, 0.3) !important;\n    margin: 5px;\n}\n/* .noti-read-li{\n    padding: 5px 10px 5px 10px !important;\n    border-bottom: 0px !important;\n    border-bottom: 1px solid rgb(0, 255, 255, 0.3) !important;\n} */\n.hasNoti {\n  position: relative;\n}\n.friend-request-ul::before {\n  border-right: 10px solid #27aae1 !important;\n}\n.friend-request-ul::after {\n  border-left: 10px solid #27aae1 !important;\n}\n.search-result {\n  position: absolute !important;\n  margin-top: 20px;\n  background-color: #ddd !important;\n  width: 17.2%;\n  height: auto;\n}\n.search-span{\n    display: block;\n    font-size: 70%;\n    margin-top: -5px;\n}\na::hover{\n    text-decoration: none;\n}\n", ""]);

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
    return _c(
      "footer",
      {
        staticStyle: { background: "#FAFAFA !important" },
        attrs: { id: "footer" }
      },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "footer-wrapper" }, [
              _c("div", { staticClass: "col-md-3 col-sm-3" }, [
                _c("a", { attrs: { href: "#" } }, [
                  _c("img", { attrs: { src: "images/logo.png", alt: "" } })
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
                    _c("a", { attrs: { href: "#" } }, [
                      _vm._v("Privacy Policy")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Terms")])
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c("a", { attrs: { href: "#" } }, [_vm._v("Help")])
                  ]),
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
      ]
    )
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
    _c(
      "nav",
      {
        staticClass: "navbar navbar-default navbar-fixed-top menu",
        staticStyle: {
          "border-bottom": "1px solid #ddd",
          background: "#FAFAFA !important"
        }
      },
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
                        { attrs: { to: "/home", title: "Home" } },
                        [
                          _c("i", {
                            staticClass: "icon ion-ios-home",
                            staticStyle: { "font-size": "30px", color: "#000" }
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
                                to: {
                                  name: "timeline",
                                  params: {
                                    name: _vm.getDatas.users.first_name
                                  }
                                }
                              }
                            },
                            [
                              _vm._l(_vm.getDatas.avatars, function(pf_avtr) {
                                return _c("div", { key: pf_avtr.if }, [
                                  pf_avtr.avatar
                                    ? _c("img", {
                                        staticClass: "profile-photo-xs",
                                        attrs: {
                                          src: _vm.ourImage(pf_avtr.avatar),
                                          alt: "Profile"
                                        }
                                      })
                                    : _vm._e()
                                ])
                              }),
                              _vm._v(" "),
                              _vm.getDatas.avatars == null
                                ? _c("i", {
                                    staticClass: "icon ion-ios-person",
                                    staticStyle: {
                                      "font-size": "30px",
                                      color: "#fff"
                                    }
                                  })
                                : _vm._e()
                            ],
                            2
                          )
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown" }, [
                    _c(
                      "a",
                      {
                        staticClass: "dropdown-toggle",
                        attrs: {
                          title: "Friend Request",
                          href: "#",
                          "data-toggle": "dropdown",
                          role: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: !_vm.count_req_style,
                              expression: "!count_req_style"
                            }
                          ],
                          staticClass: "icon ion-ios-people",
                          staticStyle: {
                            color: "#000",
                            "font-size": "30px",
                            opacity: ".3"
                          }
                        }),
                        _vm._v(" "),
                        _c("i", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.count_req_style,
                              expression: "count_req_style"
                            }
                          ],
                          staticClass: "icon ion-ios-people",
                          staticStyle: { color: "#000", "font-size": "30px" }
                        }),
                        _vm._v(" "),
                        _vm._l(_vm.getFriendRequests.frinedships, function(
                          count
                        ) {
                          return _c("div", { key: count.id }, [
                            count.requested_id == _vm.getAuthUserId &&
                            count.status == 0
                              ? _c("span", { staticClass: "noti-dot" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.getCountFriendReq(count),
                                        expression: "getCountFriendReq(count)"
                                      }
                                    ],
                                    attrs: { type: "text", hidden: "" }
                                  })
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
                          request.requested_id == _vm.getAuthUserId &&
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
                  ]),
                  _vm._v(" "),
                  _vm.authorData.author_id == _vm.getAuthUserId
                    ? _c("li", { staticClass: "dropdown" }, [
                        _c(
                          "a",
                          {
                            staticClass: "dropdown-toggle",
                            attrs: {
                              title: "Prticipants Request",
                              href: "#",
                              "data-toggle": "dropdown",
                              role: "button",
                              "aria-haspopup": "true",
                              "aria-expanded": "false"
                            }
                          },
                          [
                            _c("i", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.countSkillStyle,
                                  expression: "!countSkillStyle"
                                }
                              ],
                              staticClass: "icon ion-pull-request",
                              staticStyle: {
                                "font-size": "30px",
                                color: "#000",
                                opacity: ".3"
                              }
                            }),
                            _vm._v(" "),
                            _c("i", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.countSkillStyle,
                                  expression: "countSkillStyle"
                                }
                              ],
                              staticClass: "icon ion-pull-request",
                              staticStyle: {
                                "font-size": "30px",
                                color: "#000"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _vm.getSkills.count_skill
                                ? _c("span", { staticClass: "noti-dot" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.getCountSkill(
                                            _vm.getSkills
                                          ),
                                          expression: "getCountSkill(getSkills)"
                                        }
                                      ],
                                      attrs: { type: "text" }
                                    }),
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(_vm.getSkills.count_skill) +
                                        "\n                "
                                    )
                                  ])
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass: "dropdown-menu login friend-request-ul"
                          },
                          _vm._l(_vm.getSkills.skill, function(partici_skill) {
                            return _c("div", { key: partici_skill.id }, [
                              partici_skill.status == 0
                                ? _c(
                                    "li",
                                    { staticClass: "friend-request-li" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "pull-left friend-request-left-li"
                                        },
                                        [
                                          _vm._l(
                                            partici_skill.user.avatar,
                                            function(skill_user_avtr) {
                                              return _c("img", {
                                                key: skill_user_avtr.id,
                                                staticClass:
                                                  "profile-photo-xs friend-request-left-li-avatar",
                                                attrs: {
                                                  src: _vm.ourImage(
                                                    skill_user_avtr.avatar
                                                  ),
                                                  alt: "Login-logout-register"
                                                }
                                              })
                                            }
                                          ),
                                          _vm._v(" "),
                                          partici_skill.club.club_name
                                            ? _c(
                                                "router-link",
                                                {
                                                  attrs: {
                                                    to: {
                                                      name: "club",
                                                      params: {
                                                        name:
                                                          partici_skill.club
                                                            .club_name,
                                                        cl_id:
                                                          partici_skill.club.id
                                                      }
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                      " +
                                                      _vm._s(
                                                        partici_skill.user
                                                          .first_name
                                                      ) +
                                                      " requested to participate " +
                                                      _vm._s(
                                                        partici_skill.club_event
                                                          .name
                                                      ) +
                                                      " event.\n\n                    "
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.name !== "club" &&
                  _vm.authorData.author_id !== _vm.getAuthUserId
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
                            },
                            on: {
                              click: function($event) {
                                return _vm.updateStatus(_vm.getNotis)
                              }
                            }
                          },
                          [
                            _c("span", [
                              _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.notiCountStyle,
                                    expression: "!notiCountStyle"
                                  }
                                ],
                                staticClass: "icon ion-android-notifications",
                                staticStyle: {
                                  "font-size": "30px",
                                  color: "#000",
                                  transition: "transform .2s",
                                  opacity: ".3"
                                }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.notiCountStyle,
                                    expression: "notiCountStyle"
                                  }
                                ],
                                staticClass: "icon ion-android-notifications",
                                staticStyle: {
                                  "font-size": "30px",
                                  color: "#000",
                                  transition: "transform .2s"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _vm.getNotis.notiCount
                              ? _c("div", [
                                  _c("span", { staticClass: "noti-dot" }, [
                                    _vm._v(_vm._s(_vm.getNotis.notiCount))
                                  ]),
                                  _vm._v(" "),
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.getNotiCount(_vm.getNotis),
                                        expression: "getNotiCount(getNotis)"
                                      }
                                    ],
                                    attrs: { type: "text" }
                                  })
                                ])
                              : _vm._e()
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass: "dropdown-menu login friend-request-ul"
                          },
                          _vm._l(_vm.getNotis.noti, function(not) {
                            return _c(
                              "li",
                              { key: not.id, staticClass: "noti-unread-li" },
                              [
                                not.status == 1
                                  ? _c(
                                      "a",
                                      {
                                        staticStyle: {
                                          "background-color": "#ddd",
                                          padding: "10px",
                                          "border-radius": "5px"
                                        },
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("shortLength")(
                                              not.noti,
                                              30,
                                              "..."
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                not.status == 0
                                  ? _c(
                                      "a",
                                      {
                                        staticStyle: {
                                          "background-color":
                                            "rgb(71, 108, 243)",
                                          padding: "10px",
                                          "border-radius": "5px"
                                        },
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm._f("shortLength")(
                                              not.noti,
                                              30,
                                              "..."
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.$route.name == "club" &&
                  _vm.authorData.author_id == _vm.getAuthUserId
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
                            _c("span", [
                              _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.notiCountReqStyle,
                                    expression: "!notiCountReqStyle"
                                  }
                                ],
                                staticClass: "icon ion-android-notifications",
                                staticStyle: {
                                  "font-size": "30px",
                                  color: "#000",
                                  transition: "transform .2s",
                                  opacity: ".3"
                                }
                              }),
                              _vm._v(" "),
                              _c("i", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.notiCountReqStyle,
                                    expression: "notiCountReqStyle"
                                  }
                                ],
                                staticClass: "icon ion-android-notifications",
                                staticStyle: {
                                  "font-size": "30px",
                                  color: "#000",
                                  transition: "transform .2s"
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _vm.count_member_request
                                ? _c("span", { staticClass: "noti-dot" }, [
                                    _vm._v(_vm._s(_vm.count_member_request))
                                  ])
                                : _vm._e()
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass: "dropdown-menu login friend-request-ul"
                          },
                          _vm._l(_vm.getClubMembers.all_members, function(
                            member
                          ) {
                            return _c("div", { key: member.id }, [
                              _c("input", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.getCountReq(member),
                                    expression: "getCountReq(member)"
                                  }
                                ],
                                attrs: { type: "text" }
                              }),
                              _vm._v(" "),
                              member.club_id == _vm.$route.params.cl_id &&
                              member.status == 0
                                ? _c(
                                    "li",
                                    { staticClass: "friend-request-li" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "pull-left friend-request-left-li"
                                        },
                                        [
                                          _vm._l(member.user.avatar, function(
                                            avtr
                                          ) {
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
                                              "\n                          " +
                                                _vm._s(member.user.first_name) +
                                                "\n                          "
                                            ),
                                            _c(
                                              "span",
                                              { staticClass: "span" },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    member.user.department
                                                  ) +
                                                    "-" +
                                                    _vm._s(member.user.batch)
                                                )
                                              ]
                                            )
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
                                                  attrs: {
                                                    type: "submit",
                                                    href: "#"
                                                  }
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
                                                  attrs: {
                                                    type: "submit",
                                                    href: "#"
                                                  }
                                                },
                                                [_vm._v("Dismis")]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          }),
                          0
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("li", { staticClass: "dropdown" }, [
                    _vm._m(1),
                    _vm._v(" "),
                    _c("ul", { staticClass: "dropdown-menu login" }, [
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
              _c(
                "form",
                { staticClass: "navbar-form navbar-right hidden-sm" },
                [
                  _c("div", { staticClass: "form-group" }, [
                    _c(
                      "a",
                      {
                        attrs: { href: "#", type: "submit" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.searchData()
                          }
                        }
                      },
                      [
                        _c("i", {
                          staticClass: "icon ion-android-search",
                          staticStyle: {
                            "font-size": "15px",
                            color: "#000",
                            "margin-top": "7px",
                            "margin-left": "85%"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.search,
                          expression: "search"
                        }
                      ],
                      staticClass: "form-control",
                      staticStyle: {
                        background: "#fff !important",
                        "min-width": "307px !important",
                        border: "1px solid #ddd",
                        "margin-top": "7px",
                        color: "#000"
                      },
                      attrs: { type: "text", placeholder: "Search friends" },
                      domProps: { value: _vm.search },
                      on: {
                        keyup: function($event) {
                          $event.preventDefault()
                          return _vm.searchData()
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.search = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.getSesrchValue,
                          expression: "getSesrchValue"
                        }
                      ],
                      staticClass: "option search-result"
                    },
                    [
                      _c(
                        "ul",
                        {
                          staticStyle: {
                            margin: "0px",
                            "padding-left": "10px",
                            "padding-right": "10px",
                            "background-color": "#FAFAFA"
                          }
                        },
                        _vm._l(_vm.searchValue, function(val) {
                          return _c(
                            "li",
                            {
                              key: val.id,
                              staticStyle: {
                                "list-style": "none",
                                "border-bottom": "1px solid #ddd",
                                display: "inline-flex",
                                width: "100%",
                                "padding-bottom": "4px"
                              }
                            },
                            [
                              _vm._l(val.avatar, function(searchUserAvtr) {
                                return _c("img", {
                                  key: searchUserAvtr.id,
                                  staticClass: "profile-photo-xs",
                                  staticStyle: {
                                    "margin-top": "3px !important",
                                    "margin-right": "5px",
                                    height: "40px !important",
                                    width: "40px !important"
                                  },
                                  attrs: {
                                    src: _vm.ourImage(searchUserAvtr.avatar),
                                    alt: "profile picture"
                                  }
                                })
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  val
                                    ? _c(
                                        "router-link",
                                        {
                                          staticStyle: {
                                            color: "#000",
                                            "font-size": "13px !important"
                                          },
                                          attrs: {
                                            title: val.first_name,
                                            to: {
                                              name: "timeline",
                                              params: {
                                                name: val.first_name
                                              }
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n\n                      " +
                                              _vm._s(val.first_name) +
                                              " " +
                                              _vm._s(val.last_name) +
                                              "\n                    "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass: "search-span",
                                      staticStyle: { color: "#000" }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(val.department) +
                                          "-" +
                                          _vm._s(val.batch)
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            2
                          )
                        }),
                        0
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ])
      ]
    )
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
        _c("img", { attrs: { src: "images/logo.png", alt: "logo" } })
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
          title: "Logout",
          href: "#",
          "data-toggle": "dropdown",
          role: "button",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _c("i", {
          staticClass: "icon ion-log-out",
          staticStyle: { color: "#000", "font-size": "30px" }
        })
      ]
    )
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