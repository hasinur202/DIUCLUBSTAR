(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic_info"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic_info.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "basic_info",
  components: {
    headercomponent: _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    footercomponent: _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      typing: true,
      form: new Form({
        id: "",
        first_name: "",
        last_name: "",
        id_number: "",
        email: "",
        password: "",
        birth_date: "",
        gender: "",
        department: "",
        batch: "",
        about_me: "",
        city: "",
        country: ""
      })
    };
  },
  mounted: function mounted() {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
    this.$store.dispatch("userAction");
  },
  created: function created() {
    if (this.getDatas.users) {
      this.form.id = this.getDatas.users.id;
      this.form.first_name = this.getDatas.users.first_name;
      this.form.last_name = this.getDatas.users.last_name;
      this.form.id_number = this.getDatas.users.id_number;
      this.form.email = this.getDatas.users.email;
      this.form.birth_date = this.getDatas.users.birth_date;
      this.form.gender = this.getDatas.users.gender;
      this.form.department = this.getDatas.users.department;
      this.form.batch = this.getDatas.users.batch;
      this.form.about_me = this.getDatas.users.about_me;
      this.form.city = this.getDatas.users.city;
      this.form.country = this.getDatas.users.country;
    }
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    type: function type() {
      var _this = this;

      if (this.typing == true) {
        Toast.fire({
          icon: "info",
          title: "".concat(authUser.first_name, " typing...")
        });
        setTimeout(function () {
          _this.typing = false;
        }, 2000);
      }
    },
    update: function update() {
      this.typing = false;

      if (this.form.password == '') {
        Toast.fire({
          icon: "warning",
          title: "Enter current password for update any information."
        });
      } else {
        this.form.post("/update/" + this.form.id).then(function (response) {
          Toast.fire({
            icon: "success",
            title: "Updated successfully"
          });
        })["catch"](function () {
          Toast.fire({
            icon: "warning",
            title: "Wrong Cridentials."
          });
        });
      }
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.imgStyle[data-v-b04830c6] {\n  background-image: repeating-linear-gradient(45deg, black, transparent 100px);\n  float: left;\n  margin-right: 5px;\n  width: 40px;\n  height: 50px;\n}\n.btn.btn-primary[data-v-b04830c6] {\n  padding-right: 8px;\n}\n.btn.btn-danger[data-v-b04830c6] {\n  padding-right: 10px;\n}\n.img-style[data-v-b04830c6] {\n  width: 150px;\n  height: 140px;\n  margin-bottom: 5px;\n  margin-top: 25px;\n  float: left;\n  margin-left: -60px;\n  border: dashed 1.5px blue;\n  background-image: repeating-linear-gradient(45deg, black, transparent 100px);\n}\n.cover-img-style[data-v-b04830c6] {\n  width: 310px;\n  height: 140px;\n  margin-bottom: 5px;\n  margin-top: -182px;\n  float: right;\n  margin-right: 45px;\n  border: dashed 1.5px blue;\n  background-image: repeating-linear-gradient(45deg, black, transparent 100px);\n}\n.label[data-v-b04830c6] {\n  float: left;\n}\n.control-file[data-v-b04830c6] {\n  margin-top: 170px;\n  margin-left: 52px;\n  width: 91px;\n}\n.cover-control-file[data-v-b04830c6] {\n  margin-top: -38px;\n  width: 91px;\n  margin-left: 340px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=template&id=b04830c6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/basic_info.vue?vue&type=template&id=b04830c6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "col-md-3 static" },
              [
                _vm._l(_vm.getDatas.avatars, function(data) {
                  return _c(
                    "div",
                    { key: data.id, staticStyle: { "text-align": "center" } },
                    [
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
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "suggestions",
                    attrs: { id: "sticky-sidebar" }
                  },
                  [
                    _c("ul", { staticClass: "nav-news-feed" }, [
                      _vm._m(0),
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
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("i", { staticClass: "icon ion-images" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("router-link", { attrs: { to: "/avatar" } }, [
                              _vm._v("Profile Photo")
                            ])
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "li",
                        [
                          _c("i", {
                            staticClass: "icon ion-ios-information-outline"
                          }),
                          _vm._v(" "),
                          _c("router-link", { attrs: { to: "/basic-info" } }, [
                            _vm._v("Basic Information")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm._m(2)
                    ])
                  ]
                )
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-7 tab-content" }, [
              _c("div", { attrs: { id: "edit-profile" } }, [
                _c("div", { staticClass: "edit-profile-container" }, [
                  _vm._m(3),
                  _vm._v(" "),
                  _c("div", { staticClass: "edit-block" }, [
                    _c(
                      "form",
                      {
                        staticClass: "form-inline",
                        on: {
                          keypress: function($event) {
                            return _vm.type()
                          }
                        }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "name" } }, [
                                _vm._v("My name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.first_name,
                                    expression: "form.first_name"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "first_name"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "first_name",
                                  placeholder: "first name"
                                },
                                domProps: { value: _vm.form.first_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "first_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "first_name" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "email" } }, [
                                _vm._v("Last Name")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.last_name,
                                    expression: "form.last_name"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has("last_name")
                                },
                                attrs: {
                                  type: "text",
                                  name: "last_name",
                                  title: "Enter last name",
                                  placeholder: "last name"
                                },
                                domProps: { value: _vm.form.last_name },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "last_name",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "last_name" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "id_number" } }, [
                                _vm._v("Id Number")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.id_number,
                                    expression: "form.id_number"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has("id_number")
                                },
                                attrs: {
                                  type: "text",
                                  name: "id_number",
                                  title: "id number",
                                  placeholder: "id number"
                                },
                                domProps: { value: _vm.form.id_number },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "id_number",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "id_number" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "email" } }, [
                                _vm._v("Email")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.email,
                                    expression: "form.email"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has("email")
                                },
                                attrs: {
                                  type: "email",
                                  name: "email",
                                  title: "Enter email",
                                  placeholder: "email"
                                },
                                domProps: { value: _vm.form.email },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "email",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "email" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "birth_date" } }, [
                                _vm._v("Date of Birth")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.birth_date,
                                    expression: "form.birth_date"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "birth_date"
                                  )
                                },
                                attrs: { type: "date", name: "birth_date" },
                                domProps: { value: _vm.form.birth_date },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "birth_date",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "birth_date" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group gender col-xs-6" },
                            [
                              _c("label", { attrs: { for: "gender" } }, [
                                _vm._v("Gender")
                              ]),
                              _vm._v(" "),
                              _vm._m(4),
                              _vm._v(" "),
                              _c("label", { staticClass: "radio-inline" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.form.gender,
                                      expression: "form.gender"
                                    }
                                  ],
                                  class: {
                                    "is-invalid": _vm.form.errors.has("gender")
                                  },
                                  attrs: {
                                    type: "radio",
                                    value: "male",
                                    name: "gender"
                                  },
                                  domProps: {
                                    checked: _vm._q(_vm.form.gender, "male")
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(
                                        _vm.form,
                                        "gender",
                                        "male"
                                      )
                                    }
                                  }
                                }),
                                _vm._v("Male\n                      ")
                              ]),
                              _vm._v(" "),
                              _c(
                                "label",
                                { staticClass: "radio-inline" },
                                [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.form.gender,
                                        expression: "form.gender"
                                      }
                                    ],
                                    class: {
                                      "is-invalid": _vm.form.errors.has(
                                        "gender"
                                      )
                                    },
                                    attrs: {
                                      type: "radio",
                                      value: "female",
                                      name: "gender"
                                    },
                                    domProps: {
                                      checked: _vm._q(_vm.form.gender, "female")
                                    },
                                    on: {
                                      change: function($event) {
                                        return _vm.$set(
                                          _vm.form,
                                          "gender",
                                          "female"
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(
                                    "\n                        Female\n                        "
                                  ),
                                  _c("has-error", {
                                    attrs: { form: _vm.form, field: "gender" }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "department" } }, [
                                _vm._v("Department")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.department,
                                    expression: "form.department"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has(
                                    "department"
                                  )
                                },
                                attrs: {
                                  type: "text",
                                  name: "department",
                                  title: "Department",
                                  placeholder: "department"
                                },
                                domProps: { value: _vm.form.department },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "department",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "department" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "batch" } }, [
                                _vm._v("Batch")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.batch,
                                    expression: "form.batch"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has("batch")
                                },
                                attrs: {
                                  type: "text",
                                  name: "batch",
                                  title: "Enter batch",
                                  placeholder: "batch"
                                },
                                domProps: { value: _vm.form.batch },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "batch",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "batch" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-6" },
                            [
                              _c("label", { attrs: { for: "city" } }, [
                                _vm._v("My city")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.city,
                                    expression: "form.city"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has("city")
                                },
                                attrs: {
                                  type: "text",
                                  name: "city",
                                  title: "Enter city",
                                  placeholder: "Your city"
                                },
                                domProps: { value: _vm.form.city },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "city",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "city" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group col-xs-6" }, [
                            _c("label", { attrs: { for: "country" } }, [
                              _vm._v("My country")
                            ]),
                            _vm._v(" "),
                            _c(
                              "select",
                              {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.country,
                                    expression: "form.country"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("country")
                                },
                                attrs: { name: "country" },
                                on: {
                                  change: function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.form,
                                      "country",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  }
                                }
                              },
                              [
                                _c("option", { attrs: { value: "country" } }, [
                                  _vm._v("Country")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AFG" } }, [
                                  _vm._v("Afghanistan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ALA" } }, [
                                  _vm._v("Ƭand Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ALB" } }, [
                                  _vm._v("Albania")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "DZA" } }, [
                                  _vm._v("Algeria")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ASM" } }, [
                                  _vm._v("American Samoa")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AND" } }, [
                                  _vm._v("Andorra")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AGO" } }, [
                                  _vm._v("Angola")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AIA" } }, [
                                  _vm._v("Anguilla")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ATA" } }, [
                                  _vm._v("Antarctica")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ATG" } }, [
                                  _vm._v("Antigua and Barbuda")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ARG" } }, [
                                  _vm._v("Argentina")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ARM" } }, [
                                  _vm._v("Armenia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ABW" } }, [
                                  _vm._v("Aruba")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AUS" } }, [
                                  _vm._v("Australia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AUT" } }, [
                                  _vm._v("Austria")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "AZE" } }, [
                                  _vm._v("Azerbaijan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BHS" } }, [
                                  _vm._v("Bahamas")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BHR" } }, [
                                  _vm._v("Bahrain")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "option",
                                  { attrs: { value: "BGD", selected: "" } },
                                  [_vm._v("Bangladesh")]
                                ),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BRB" } }, [
                                  _vm._v("Barbados")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BLR" } }, [
                                  _vm._v("Belarus")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BEL" } }, [
                                  _vm._v("Belgium")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BLZ" } }, [
                                  _vm._v("Belize")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BEN" } }, [
                                  _vm._v("Benin")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BMU" } }, [
                                  _vm._v("Bermuda")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BTN" } }, [
                                  _vm._v("Bhutan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BOL" } }, [
                                  _vm._v("Bolivia, Plurinational State of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BES" } }, [
                                  _vm._v("Bonaire, Sint Eustatius and Saba")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BIH" } }, [
                                  _vm._v("Bosnia and Herzegovina")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BWA" } }, [
                                  _vm._v("Botswana")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BVT" } }, [
                                  _vm._v("Bouvet Island")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BRA" } }, [
                                  _vm._v("Brazil")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IOT" } }, [
                                  _vm._v("British Indian Ocean Territory")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BRN" } }, [
                                  _vm._v("Brunei Darussalam")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BGR" } }, [
                                  _vm._v("Bulgaria")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BFA" } }, [
                                  _vm._v("Burkina Faso")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BDI" } }, [
                                  _vm._v("Burundi")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KHM" } }, [
                                  _vm._v("Cambodia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CMR" } }, [
                                  _vm._v("Cameroon")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CAN" } }, [
                                  _vm._v("Canada")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CPV" } }, [
                                  _vm._v("Cape Verde")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CYM" } }, [
                                  _vm._v("Cayman Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CAF" } }, [
                                  _vm._v("Central African Republic")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TCD" } }, [
                                  _vm._v("Chad")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CHL" } }, [
                                  _vm._v("Chile")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CHN" } }, [
                                  _vm._v("China")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CXR" } }, [
                                  _vm._v("Christmas Island")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CCK" } }, [
                                  _vm._v("Cocos (Keeling) Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "COL" } }, [
                                  _vm._v("Colombia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "COM" } }, [
                                  _vm._v("Comoros")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "COG" } }, [
                                  _vm._v("Congo")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "COD" } }, [
                                  _vm._v(
                                    "Congo, the Democratic Republic of the"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "COK" } }, [
                                  _vm._v("Cook Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CRI" } }, [
                                  _vm._v("Costa Rica")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CIV" } }, [
                                  _vm._v("C𴥠d'Ivoire")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "HRV" } }, [
                                  _vm._v("Croatia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CUB" } }, [
                                  _vm._v("Cuba")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CUW" } }, [
                                  _vm._v("Cura袯")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CYP" } }, [
                                  _vm._v("Cyprus")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CZE" } }, [
                                  _vm._v("Czech Republic")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "DNK" } }, [
                                  _vm._v("Denmark")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "DJI" } }, [
                                  _vm._v("Djibouti")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "DMA" } }, [
                                  _vm._v("Dominica")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "DOM" } }, [
                                  _vm._v("Dominican Republic")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ECU" } }, [
                                  _vm._v("Ecuador")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "EGY" } }, [
                                  _vm._v("Egypt")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SLV" } }, [
                                  _vm._v("El Salvador")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GNQ" } }, [
                                  _vm._v("Equatorial Guinea")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ERI" } }, [
                                  _vm._v("Eritrea")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "EST" } }, [
                                  _vm._v("Estonia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ETH" } }, [
                                  _vm._v("Ethiopia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "FLK" } }, [
                                  _vm._v("Falkland Islands (Malvinas)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "FRO" } }, [
                                  _vm._v("Faroe Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "FJI" } }, [
                                  _vm._v("Fiji")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "FIN" } }, [
                                  _vm._v("Finland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "FRA" } }, [
                                  _vm._v("France")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GUF" } }, [
                                  _vm._v("French Guiana")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PYF" } }, [
                                  _vm._v("French Polynesia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ATF" } }, [
                                  _vm._v("French Southern Territories")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GAB" } }, [
                                  _vm._v("Gabon")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GMB" } }, [
                                  _vm._v("Gambia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GEO" } }, [
                                  _vm._v("Georgia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "DEU" } }, [
                                  _vm._v("Germany")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GHA" } }, [
                                  _vm._v("Ghana")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GIB" } }, [
                                  _vm._v("Gibraltar")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GRC" } }, [
                                  _vm._v("Greece")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GRL" } }, [
                                  _vm._v("Greenland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GRD" } }, [
                                  _vm._v("Grenada")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GLP" } }, [
                                  _vm._v("Guadeloupe")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GUM" } }, [
                                  _vm._v("Guam")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GTM" } }, [
                                  _vm._v("Guatemala")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GGY" } }, [
                                  _vm._v("Guernsey")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GIN" } }, [
                                  _vm._v("Guinea")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GNB" } }, [
                                  _vm._v("Guinea-Bissau")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GUY" } }, [
                                  _vm._v("Guyana")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "HTI" } }, [
                                  _vm._v("Haiti")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "HMD" } }, [
                                  _vm._v("Heard Island and McDonald Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VAT" } }, [
                                  _vm._v("Holy See (Vatican City State)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "HND" } }, [
                                  _vm._v("Honduras")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "HKG" } }, [
                                  _vm._v("Hong Kong")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "HUN" } }, [
                                  _vm._v("Hungary")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ISL" } }, [
                                  _vm._v("Iceland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IND" } }, [
                                  _vm._v("India")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IDN" } }, [
                                  _vm._v("Indonesia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IRN" } }, [
                                  _vm._v("Iran, Islamic Republic of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IRQ" } }, [
                                  _vm._v("Iraq")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IRL" } }, [
                                  _vm._v("Ireland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "IMN" } }, [
                                  _vm._v("Isle of Man")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ISR" } }, [
                                  _vm._v("Israel")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ITA" } }, [
                                  _vm._v("Italy")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "JAM" } }, [
                                  _vm._v("Jamaica")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "JPN" } }, [
                                  _vm._v("Japan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "JEY" } }, [
                                  _vm._v("Jersey")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "JOR" } }, [
                                  _vm._v("Jordan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KAZ" } }, [
                                  _vm._v("Kazakhstan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KEN" } }, [
                                  _vm._v("Kenya")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KIR" } }, [
                                  _vm._v("Kiribati")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PRK" } }, [
                                  _vm._v(
                                    "Korea, Democratic People's Republic of"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KOR" } }, [
                                  _vm._v("Korea, Republic of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KWT" } }, [
                                  _vm._v("Kuwait")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KGZ" } }, [
                                  _vm._v("Kyrgyzstan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LAO" } }, [
                                  _vm._v("Lao People's Democratic Republic")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LVA" } }, [
                                  _vm._v("Latvia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LBN" } }, [
                                  _vm._v("Lebanon")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LSO" } }, [
                                  _vm._v("Lesotho")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LBR" } }, [
                                  _vm._v("Liberia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LBY" } }, [
                                  _vm._v("Libya")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LIE" } }, [
                                  _vm._v("Liechtenstein")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LTU" } }, [
                                  _vm._v("Lithuania")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LUX" } }, [
                                  _vm._v("Luxembourg")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MAC" } }, [
                                  _vm._v("Macao")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MKD" } }, [
                                  _vm._v(
                                    "Macedonia, the former Yugoslav Republic of"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MDG" } }, [
                                  _vm._v("Madagascar")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MWI" } }, [
                                  _vm._v("Malawi")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MYS" } }, [
                                  _vm._v("Malaysia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MDV" } }, [
                                  _vm._v("Maldives")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MLI" } }, [
                                  _vm._v("Mali")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MLT" } }, [
                                  _vm._v("Malta")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MHL" } }, [
                                  _vm._v("Marshall Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MTQ" } }, [
                                  _vm._v("Martinique")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MRT" } }, [
                                  _vm._v("Mauritania")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MUS" } }, [
                                  _vm._v("Mauritius")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MYT" } }, [
                                  _vm._v("Mayotte")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MEX" } }, [
                                  _vm._v("Mexico")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "FSM" } }, [
                                  _vm._v("Micronesia, Federated States of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MDA" } }, [
                                  _vm._v("Moldova, Republic of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MCO" } }, [
                                  _vm._v("Monaco")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MNG" } }, [
                                  _vm._v("Mongolia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MNE" } }, [
                                  _vm._v("Montenegro")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MSR" } }, [
                                  _vm._v("Montserrat")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MAR" } }, [
                                  _vm._v("Morocco")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MOZ" } }, [
                                  _vm._v("Mozambique")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MMR" } }, [
                                  _vm._v("Myanmar")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NAM" } }, [
                                  _vm._v("Namibia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NRU" } }, [
                                  _vm._v("Nauru")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NPL" } }, [
                                  _vm._v("Nepal")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NLD" } }, [
                                  _vm._v("Netherlands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NCL" } }, [
                                  _vm._v("New Caledonia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NZL" } }, [
                                  _vm._v("New Zealand")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NIC" } }, [
                                  _vm._v("Nicaragua")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NER" } }, [
                                  _vm._v("Niger")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NGA" } }, [
                                  _vm._v("Nigeria")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NIU" } }, [
                                  _vm._v("Niue")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NFK" } }, [
                                  _vm._v("Norfolk Island")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MNP" } }, [
                                  _vm._v("Northern Mariana Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "NOR" } }, [
                                  _vm._v("Norway")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "OMN" } }, [
                                  _vm._v("Oman")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PAK" } }, [
                                  _vm._v("Pakistan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PLW" } }, [
                                  _vm._v("Palau")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PSE" } }, [
                                  _vm._v("Palestinian Territory, Occupied")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PAN" } }, [
                                  _vm._v("Panama")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PNG" } }, [
                                  _vm._v("Papua New Guinea")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PRY" } }, [
                                  _vm._v("Paraguay")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PER" } }, [
                                  _vm._v("Peru")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PHL" } }, [
                                  _vm._v("Philippines")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PCN" } }, [
                                  _vm._v("Pitcairn")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "POL" } }, [
                                  _vm._v("Poland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PRT" } }, [
                                  _vm._v("Portugal")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "PRI" } }, [
                                  _vm._v("Puerto Rico")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "QAT" } }, [
                                  _vm._v("Qatar")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "REU" } }, [
                                  _vm._v("R궮ion")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ROU" } }, [
                                  _vm._v("Romania")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "RUS" } }, [
                                  _vm._v("Russian Federation")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "RWA" } }, [
                                  _vm._v("Rwanda")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "BLM" } }, [
                                  _vm._v("Saint Barthꭥmy")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SHN" } }, [
                                  _vm._v(
                                    "Saint Helena, Ascension and Tristan da Cunha"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "KNA" } }, [
                                  _vm._v("Saint Kitts and Nevis")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LCA" } }, [
                                  _vm._v("Saint Lucia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "MAF" } }, [
                                  _vm._v("Saint Martin (French part)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SPM" } }, [
                                  _vm._v("Saint Pierre and Miquelon")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VCT" } }, [
                                  _vm._v("Saint Vincent and the Grenadines")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "WSM" } }, [
                                  _vm._v("Samoa")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SMR" } }, [
                                  _vm._v("San Marino")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "STP" } }, [
                                  _vm._v("Sao Tome and Principe")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SAU" } }, [
                                  _vm._v("Saudi Arabia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SEN" } }, [
                                  _vm._v("Senegal")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SRB" } }, [
                                  _vm._v("Serbia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SYC" } }, [
                                  _vm._v("Seychelles")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SLE" } }, [
                                  _vm._v("Sierra Leone")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SGP" } }, [
                                  _vm._v("Singapore")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SXM" } }, [
                                  _vm._v("Sint Maarten (Dutch part)")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SVK" } }, [
                                  _vm._v("Slovakia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SVN" } }, [
                                  _vm._v("Slovenia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SLB" } }, [
                                  _vm._v("Solomon Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SOM" } }, [
                                  _vm._v("Somalia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ZAF" } }, [
                                  _vm._v("South Africa")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SGS" } }, [
                                  _vm._v(
                                    "South Georgia and the South Sandwich Islands"
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SSD" } }, [
                                  _vm._v("South Sudan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ESP" } }, [
                                  _vm._v("Spain")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "LKA" } }, [
                                  _vm._v("Sri Lanka")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SDN" } }, [
                                  _vm._v("Sudan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SUR" } }, [
                                  _vm._v("Suriname")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SJM" } }, [
                                  _vm._v("Svalbard and Jan Mayen")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SWZ" } }, [
                                  _vm._v("Swaziland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SWE" } }, [
                                  _vm._v("Sweden")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "CHE" } }, [
                                  _vm._v("Switzerland")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "SYR" } }, [
                                  _vm._v("Syrian Arab Republic")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TWN" } }, [
                                  _vm._v("Taiwan, Province of China")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TJK" } }, [
                                  _vm._v("Tajikistan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TZA" } }, [
                                  _vm._v("Tanzania, United Republic of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "THA" } }, [
                                  _vm._v("Thailand")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TLS" } }, [
                                  _vm._v("Timor-Leste")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TGO" } }, [
                                  _vm._v("Togo")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TKL" } }, [
                                  _vm._v("Tokelau")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TON" } }, [
                                  _vm._v("Tonga")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TTO" } }, [
                                  _vm._v("Trinidad and Tobago")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TUN" } }, [
                                  _vm._v("Tunisia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TUR" } }, [
                                  _vm._v("Turkey")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TKM" } }, [
                                  _vm._v("Turkmenistan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TCA" } }, [
                                  _vm._v("Turks and Caicos Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "TUV" } }, [
                                  _vm._v("Tuvalu")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "UGA" } }, [
                                  _vm._v("Uganda")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "UKR" } }, [
                                  _vm._v("Ukraine")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ARE" } }, [
                                  _vm._v("United Arab Emirates")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "GBR" } }, [
                                  _vm._v("United Kingdom")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "USA" } }, [
                                  _vm._v("United States")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "UMI" } }, [
                                  _vm._v("United States Minor Outlying Islands")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "URY" } }, [
                                  _vm._v("Uruguay")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "UZB" } }, [
                                  _vm._v("Uzbekistan")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VUT" } }, [
                                  _vm._v("Vanuatu")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VEN" } }, [
                                  _vm._v("Venezuela, Bolivarian Republic of")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VNM" } }, [
                                  _vm._v("Viet Nam")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VGB" } }, [
                                  _vm._v("Virgin Islands, British")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "VIR" } }, [
                                  _vm._v("Virgin Islands, U.S.")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "WLF" } }, [
                                  _vm._v("Wallis and Futuna")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ESH" } }, [
                                  _vm._v("Western Sahara")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "YEM" } }, [
                                  _vm._v("Yemen")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ZMB" } }, [
                                  _vm._v("Zambia")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "ZWE" } }, [
                                  _vm._v("Zimbabwe")
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-12" },
                            [
                              _c("label", { attrs: { for: "department" } }, [
                                _vm._v("Password")
                              ]),
                              _vm._v(" "),
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.password,
                                    expression: "form.password"
                                  }
                                ],
                                staticClass: "form-control input-group-lg",
                                class: {
                                  "is-invalid": _vm.form.errors.has("password")
                                },
                                attrs: {
                                  type: "password",
                                  name: "password",
                                  title: "password",
                                  placeholder: "password"
                                },
                                domProps: { value: _vm.form.password },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "password",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "password" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "form-group col-xs-12" },
                            [
                              _c("label", { attrs: { for: "my-info" } }, [
                                _vm._v("About me")
                              ]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.form.about_me,
                                    expression: "form.about_me"
                                  }
                                ],
                                staticClass: "form-control",
                                class: {
                                  "is-invalid": _vm.form.errors.has("about_me")
                                },
                                attrs: {
                                  name: "about_me",
                                  placeholder: "Some texts about me",
                                  rows: "4",
                                  cols: "400"
                                },
                                domProps: { value: _vm.form.about_me },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.form,
                                      "about_me",
                                      $event.target.value
                                    )
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("has-error", {
                                attrs: { form: _vm.form, field: "about_me" }
                              })
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.update()
                              }
                            }
                          },
                          [_vm._v("Update")]
                        )
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(5)
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
        _vm._v("Edit basic information\n                ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"
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
    return _c("span", { staticClass: "custom-label" }, [
      _c("strong", [_vm._v("I am a:")])
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

/***/ "./resources/js/basic_info.vue":
/*!*************************************!*\
  !*** ./resources/js/basic_info.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_info_vue_vue_type_template_id_b04830c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic_info.vue?vue&type=template&id=b04830c6&scoped=true& */ "./resources/js/basic_info.vue?vue&type=template&id=b04830c6&scoped=true&");
/* harmony import */ var _basic_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic_info.vue?vue&type=script&lang=js& */ "./resources/js/basic_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css& */ "./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _basic_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _basic_info_vue_vue_type_template_id_b04830c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _basic_info_vue_vue_type_template_id_b04830c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b04830c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/basic_info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/basic_info.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/basic_info.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./basic_info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=style&index=0&id=b04830c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_style_index_0_id_b04830c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/basic_info.vue?vue&type=template&id=b04830c6&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/basic_info.vue?vue&type=template&id=b04830c6&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_template_id_b04830c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./basic_info.vue?vue&type=template&id=b04830c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/basic_info.vue?vue&type=template&id=b04830c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_template_id_b04830c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_info_vue_vue_type_template_id_b04830c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);