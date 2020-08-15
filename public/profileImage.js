(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profileImage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/profileImage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "profileImage",
  components: {
    headercomponent: _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    footercomponent: _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      //   activeMethod:true,
      avatars: true,
      editMode: false,
      album: false,
      form: new Form({
        avatar: "",
        cover_photo: ""
      }),
      getId: ""
    };
  },
  mounted: function mounted() {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
    this.$store.dispatch("userAction");
  },
  created: function created() {// if(this.form.avatar != '' || this.form.cover_photo != ''){
    //     this.edit()
    // }else{
    //     this.add()
    // }
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    edit: function edit(data) {
      this.editMode = true;
      this.form.fill(data);
      this.getId = data.id;
    },
    add: function add() {
      this.editMode = false;
      this.form.reset();
    },
    updateAvatar: function updateAvatar() {
      var img = this.form.avatar;

      if (img.length > 100) {
        return this.form.avatar;
      } else {
        return "/images/" + this.form.avatar;
      }
    },
    updateCoverPhoto: function updateCoverPhoto() {
      var img = this.form.cover_photo;

      if (img.length > 100) {
        return this.form.cover_photo;
      } else {
        return "/images/" + this.form.cover_photo;
      }
    },
    showAvatars: function showAvatars() {
      this.avatars = true;
      this.album = false;
    },
    showAlbum: function showAlbum() {
      this.avatars = false;
      this.album = true;
    },
    uploadImage: function uploadImage() {
      if (this.form.avatar != '') {
        this.form.post('/avatar_store').then(function (response) {
          Toast.fire({
            icon: 'success',
            title: 'Image added in successfully'
          });
        })["catch"](function () {});
      } else if (this.form.cover_photo != '') {
        this.form.post('/avatar_store').then(function (response) {
          Toast.fire({
            icon: 'success',
            title: 'Image added in successfully'
          });
        })["catch"](function () {});
      }
    },
    updateImage: function updateImage() {
      this.form.post('/avatar_update/' + this.getId).then(function (response) {
        Toast.fire({
          icon: 'success',
          title: 'Profile update successfully'
        });
      })["catch"](function () {});
    },
    changeProfileImage: function changeProfileImage(event) {
      var _this = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this.form.avatar = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    changeProfileImage1: function changeProfileImage1(event) {
      var _this2 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this2.form.cover_photo = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imgStyle[data-v-26e180a0] {\n  background-image: repeating-linear-gradient(45deg, black, transparent 100px);\n  float: left;\n  margin-right: 5px;\n  width: 40px;\n  height: 50px;\n}\n.btn.btn-primary[data-v-26e180a0] {\n  padding-right: 8px;\n}\n.btn.btn-danger[data-v-26e180a0] {\n  padding-right: 10px;\n}\n.img-style[data-v-26e180a0] {\n  width: 150px;\n  height: 140px;\n  margin-bottom: 5px;\n  margin-top: -3px;\n  float: left;\n  margin-left: 18px;\n  border: dashed 1.5px blue;\n  background-image: repeating-linear-gradient(45deg, black, transparent 100px);\n}\n.cover-img-style[data-v-26e180a0] {\n  width: 310px;\n  height: 140px;\n  margin-bottom: 5px;\n      margin-top: -182px;\n    float: right;\n    margin-right: 45px;\n  border: dashed 1.5px blue;\n  background-image: repeating-linear-gradient(45deg, black, transparent 100px);\n}\n.label[data-v-26e180a0] {\n  float: left;\n}\n.control-file[data-v-26e180a0] {\n  margin-top: 170px;\n  margin-left: 52px;\n  width: 91px;\n}\n.cover-control-file[data-v-26e180a0] {\n     margin-top: -38px;\n    width: 91px;\n    margin-left: 340px;\n}\n.tab-btn[data-v-26e180a0]{\n    float: left;\n    height: 0px;\n    padding: 15px 15px;\n    font-size: 18px;\n    line-height: 45px;\n    text-decoration: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=template&id=26e180a0&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/profileImage.vue?vue&type=template&id=26e180a0&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("headercomponent"),
      _vm._v(" "),
      _c("div", { attrs: { id: "page-contents" } }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "row" },
            [
              _vm._l(_vm.getDatas.avatars, function(data) {
                return _c(
                  "div",
                  { key: data.id, staticClass: "col-md-3 static" },
                  [
                    _c("div", { staticStyle: { "text-align": "center" } }, [
                      _c("img", {
                        staticClass: "prof_size",
                        attrs: { src: _vm.ourImage(data.avatar), alt: "" }
                      }),
                      _vm._v(" "),
                      _vm.getDatas.users
                        ? _c("h3", [
                            _vm._v(_vm._s(_vm.getDatas.users.first_name))
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Creative Director")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "line" }),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.edit(data),
                          expression: "edit(data)"
                        }
                      ],
                      attrs: { type: "text", hidden: "" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "suggestions",
                        attrs: { id: "sticky-sidebar" }
                      },
                      [
                        _c("ul", { staticClass: "nav-news-feed" }, [
                          _vm._m(0, true),
                          _vm._v(" "),
                          _c("li", [
                            _c("i", { staticClass: "icon ion-chatboxes" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "router-link",
                                  { attrs: { to: "/messanger" } },
                                  [_vm._v("Messenger")]
                                )
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          data.avatar == ""
                            ? _c("li", [
                                _c("i", { staticClass: "icon ion-images" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: "/avatar" } },
                                      [_vm._v("Update Profile")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          data.avatar
                            ? _c("li", [
                                _c("i", { staticClass: "icon ion-images" }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c(
                                      "router-link",
                                      { attrs: { to: "/avatar" } },
                                      [_vm._v("Profile Photo")]
                                    )
                                  ],
                                  1
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._m(1, true),
                          _vm._v(" "),
                          _vm._m(2, true),
                          _vm._v(" "),
                          _vm._m(3, true)
                        ])
                      ]
                    )
                  ]
                )
              }),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-7 tab-content" }, [
                _c("div", { attrs: { id: "profilephoto" } }, [
                  _c("div", { staticClass: "edit-profile-container" }, [
                    _vm._m(4),
                    _vm._v(" "),
                    _c("div", { staticClass: "edit-block" }, [
                      _c(
                        "form",
                        {
                          staticClass: "form-inline",
                          attrs: { enctype: "multipart/form-data" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              _vm.editMode
                                ? _vm.updateImage()
                                : _vm.uploadImage()
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(5),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "img-style",
                              attrs: {
                                src: _vm.editMode
                                  ? _vm.updateAvatar()
                                  : _vm.form.avatar
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "control-file",
                              attrs: { name: "avatar", type: "file" },
                              on: {
                                change: function($event) {
                                  return _vm.changeProfileImage($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _vm._m(6),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "cover-img-style",
                              attrs: {
                                src: _vm.editMode
                                  ? _vm.updateCoverPhoto()
                                  : _vm.form.cover_photo
                              }
                            }),
                            _vm._v(" "),
                            _c("input", {
                              staticClass: "control-file cover-control-file",
                              attrs: { name: "cover_photo", type: "file" },
                              on: {
                                change: function($event) {
                                  return _vm.changeProfileImage1($event)
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm._m(7)
                        ]
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { attrs: { id: "album" } }, [
                  _c(
                    "nav",
                    { staticClass: "nav nav-pills flex-column flex-sm-row" },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "tab-btn",
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.showAlbum()
                            }
                          }
                        },
                        [_vm._v("Album")]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c(
                    "ul",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.album,
                          expression: "album"
                        }
                      ],
                      staticClass: "album-photos"
                    },
                    _vm._l(_vm.getDatas.gallery, function(gal) {
                      return _c("li", { key: gal.id }, [
                        _c(
                          "div",
                          {
                            staticClass: "img-wrapper",
                            staticStyle: { "margin-top": "3px" },
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": "#photo-1"
                            }
                          },
                          [
                            _c("img", {
                              staticStyle: { width: "250px", height: "150px" },
                              attrs: {
                                src: _vm.ourImage(gal.avatar),
                                alt: "photo"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade",
                            staticStyle: {
                              "padding-right": "17px",
                              opacity: "1",
                              "margin-top": "60px"
                            },
                            attrs: {
                              id: "photo-1",
                              tabindex: "-1",
                              role: "dialog",
                              "aria-hidden": "true"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "modal-dialog modal-lg" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "modal-content",
                                    staticStyle: {
                                      "margin-top": "95px",
                                      padding: "20px"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.ourImage(gal.avatar),
                                        alt: "photo"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "img-wrapper",
                            staticStyle: { "margin-top": "3px" },
                            attrs: {
                              "data-toggle": "modal",
                              "data-target": ".photo-2"
                            }
                          },
                          [
                            _c("img", {
                              staticStyle: { width: "250px", height: "150px" },
                              attrs: {
                                src: _vm.ourImage(gal.cover_photo),
                                alt: "photo"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "modal fade photo-2",
                            staticStyle: {
                              "padding-right": "17px",
                              opacity: "1",
                              "margin-top": "60px"
                            },
                            attrs: {
                              tabindex: "-1",
                              role: "dialog",
                              "aria-hidden": "true"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "modal-dialog modal-lg" },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "modal-content",
                                    staticStyle: {
                                      "margin-top": "250px",
                                      padding: "20px"
                                    }
                                  },
                                  [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.ourImage(gal.cover_photo),
                                        alt: "photo"
                                      }
                                    })
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    }),
                    0
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(8)
            ],
            2
          )
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
    return _c("li", [
      _c("i", { staticClass: "icon ion-ios-paper" }),
      _vm._v(" "),
      _c("div", [_c("a", { attrs: { href: "#" } }, [_vm._v("My Newfeed")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("i", { staticClass: "icon ion-ios-videocam" }),
      _vm._v(" "),
      _c("div", [_c("a", { attrs: { href: "#" } }, [_vm._v("Videos")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("i", { staticClass: "icon ion-ios-information-outline" }),
      _vm._v(" "),
      _c("a", { attrs: { href: "#", to: "/basic-info" } }, [
        _vm._v("Basic Information")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("i", { staticClass: "icon ion-ios-locked-outline" }),
      _vm._v(" "),
      _c("a", { attrs: { href: "#" } }, [_vm._v("Change Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Upload Profile Picture...\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "If you are changes this, your profile and cover photo will be change and everybody can see that changes."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { "margin-left": "35px" } }, [
      _c(
        "label",
        {
          staticClass: "label",
          staticStyle: { float: "left", color: "#767676", "font-size": "15px" },
          attrs: { for: "exampleInputFile" }
        },
        [_vm._v("Profile Picture")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticStyle: {
          float: "right",
          color: "#767676",
          "margin-top": "-205px",
          "margin-right": "158px"
        }
      },
      [
        _c("label", { attrs: { for: "exampleInputFile" } }, [
          _vm._v("Cover Photo")
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Upload")]
      )
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

/***/ "./resources/js/profileImage.vue":
/*!***************************************!*\
  !*** ./resources/js/profileImage.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profileImage_vue_vue_type_template_id_26e180a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profileImage.vue?vue&type=template&id=26e180a0&scoped=true& */ "./resources/js/profileImage.vue?vue&type=template&id=26e180a0&scoped=true&");
/* harmony import */ var _profileImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profileImage.vue?vue&type=script&lang=js& */ "./resources/js/profileImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css& */ "./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _profileImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profileImage_vue_vue_type_template_id_26e180a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profileImage_vue_vue_type_template_id_26e180a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26e180a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/profileImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/profileImage.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/profileImage.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./profileImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=style&index=0&id=26e180a0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_style_index_0_id_26e180a0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/profileImage.vue?vue&type=template&id=26e180a0&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/profileImage.vue?vue&type=template&id=26e180a0&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_template_id_26e180a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./profileImage.vue?vue&type=template&id=26e180a0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/profileImage.vue?vue&type=template&id=26e180a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_template_id_26e180a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profileImage_vue_vue_type_template_id_26e180a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);