(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["timeline"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/timeline.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/header.vue */ "./resources/js/components/layouts/header.vue");
/* harmony import */ var _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/footer.vue */ "./resources/js/components/layouts/footer.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "timeline",
  components: {
    headercomponent: _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    footercomponent: _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      showFriendList: false,
      discussion: true,
      liked: false,
      replyInputShow: false,
      showComment: false,
      hideAFbtn: true,
      requestPending: false,
      friend: false,
      sendSkillForm: false,
      showSkillForm: false,
      showSelectPhoto: false,
      showSelectVideo: false,
      form: false,
      cuppon: false,
      getCuppon: false,
      authUserName: "",
      authUserDept: "",
      authUserBatch: "",
      memberValidityId: "",
      skill: {
        club_id: "",
        event_id: "",
        image1: "",
        image2: "",
        image3: "",
        video: ""
      },
      addFriendData: {
        id: "",
        requested_id: "",
        requester_id: "",
        status: ""
      }
    }, _defineProperty(_ref, "form", new Form({
      post_id: "",
      avatar_id: "",
      comment: []
    })), _defineProperty(_ref, "commentReply", {
      avatar_id: "",
      post_id: "",
      comment_id: "",
      reply: ""
    }), _defineProperty(_ref, "like", {
      post_id: "",
      status: "1"
    }), _defineProperty(_ref, "DATA", ""), _defineProperty(_ref, "avatar", ""), _defineProperty(_ref, "posts", ""), _ref;
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100); //
    //php artisan passport:client --personal

    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("userPostAction");
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("postCommentAction");
    this.$store.dispatch("getClubInfoAction");
    this.$store.dispatch("getAuthorAction");
    Echo.channel("Comment").listen("CommentEvent", function (e) {
      _this.$store.dispatch("userPostAction");
    });
    Echo.channel("Reply").listen("CommentReplyEvent", function (e) {
      _this.$store.dispatch("userPostAction");
    });
    Echo.channel("Like").listen("LikeEvent", function (e) {
      _this.$store.dispatch("userPostAction");
    });
    Echo.channel("AfterUnlike").listen("AfterUnlikeEvent", function (e) {
      _this.$store.dispatch("userPostAction");
    }); // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests: function getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getPosts: function getPosts() {
      return this.$store.getters.getUserPost;
    },
    getClubEvents: function getClubEvents() {
      return this.$store.getters.getClubEvent;
    },
    getPostComments: function getPostComments() {
      return this.$store.getters.getPostComments;
    },
    getClubs: function getClubs() {
      return this.$store.getters.getClub;
    },
    getAuthors: function getAuthors() {
      return this.$store.getters.getAuthor;
    }
  },
  methods: {
    hideContent: function hideContent() {
      this.sendSkillForm = false;
      this.getCuppon = false;
      this.showSkillForm = false;
      this.discussion = true;
    },
    SelectPhoto: function SelectPhoto() {
      this.showSelectPhoto = true;
    },
    SelectVideo: function SelectVideo() {
      this.showSelectVideo = true;
    },
    print: function print() {
      window.print();
    },
    randomNumber: function randomNumber() {
      return Math.random() * 10000;
    },
    showCuppon: function showCuppon(getDatas) {
      this.showSkillForm = false;
      this.cuppon = false;
      this.form = false;
      this.getCuppon = true;
      this.authUserName = getDatas.users.first_name;
      this.authUserDept = getDatas.users.department;
      this.authUserBatch = getDatas.users.batch;
      this.randomNumber();
    },
    showForm: function showForm() {
      this.showSkillForm = true;
      this.cuppon = false;
      this.form = false;
    },
    changeSkill1: function changeSkill1(event) {
      var _this2 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this2.skill.image1 = event.target.result;
      };

      reader.readAsDataURL(file);

      if (this.btn == false) {
        this.btn = true;
      } else if (this.btn == true) {
        this.btn = true;
      } else {
        this.btn = false;
      }
    },
    changeSkill2: function changeSkill2(event) {
      var _this3 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this3.skill.image2 = event.target.result;
      };

      reader.readAsDataURL(file);

      if (this.btn == false) {
        this.btn = true;
      } else if (this.btn == true) {
        this.btn = true;
      } else {
        this.btn = false;
      }
    },
    changeSkill3: function changeSkill3(event) {
      var _this4 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this4.skill.image3 = event.target.result;
      };

      reader.readAsDataURL(file);

      if (this.btn == false) {
        this.btn = true;
      } else if (this.btn == true) {
        this.btn = true;
      } else {
        this.btn = false;
      }
    },
    changeSkillVideo: function changeSkillVideo(e) {
      this.skill.video = e.target.files[0];

      if (this.skill.video["size"] <= 2097152) {
        if (this.btn == false) {
          this.btn = true;
        } else if (this.btn == true) {
          this.btn = true;
        } else {
          this.btn = false;
        }
      } else {
        this.skill.video = "";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File size maximum 2mb."
        });
      }
    },
    uploadSkill: function uploadSkill() {
      if (this.skill.image1 !== "" || this.skill.image2 !== "" || this.skill.image3 !== "" || this.skill.video !== "") {
        var currentObj = this;
        var config = {
          headers: {
            "content-type": "multipart/form-data"
          }
        };
        var formData = new FormData();
        formData.append("club_id", this.skill.club_id);
        formData.append("event_id", this.skill.event_id);
        formData.append("image1", this.skill.image1);
        formData.append("image2", this.skill.image2);
        formData.append("image3", this.skill.image3);
        formData.append("video", this.skill.video);
        axios.post("/skill-store", formData, config).then(function (response) {
          //   currentObj.success = response.data.success;
          Toast.fire({
            icon: "success",
            title: "Request send successfully"
          });
          this.skill.club_id = "";
          this.skill.event_id = "";
          this.skill.image1 = "";
          this.skill.image2 = "";
          this.skill.image3 = "";
          this.skill.video = "";
          this.showPost = false;
        })["catch"](function (error) {//   currentObj.output = error;
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'please select your image or video!'
        });
      }
    },
    showSendSkillForm: function showSendSkillForm(event, getClubs, getDatas) {
      var _this5 = this;

      getClubs.clubs.forEach(function (el) {
        if (el.id == event.club.id) {
          el.club_members.forEach(function (mem) {
            //   this.memberValidityId = mem.user.id;
            if (mem.user.id == getDatas.users.id) {
              _this5.memberValidityId = mem.user.id;

              if (_this5.memberValidityId !== "") {
                _this5.skill.club_id = event.club_id;
                _this5.skill.event_id = event.id;
                _this5.discussion = false;
                _this5.getCuppon = false;
                _this5.showSkillForm = false;
                _this5.sendSkillForm = true;
                _this5.form = true;
                _this5.cuppon = true; // this.visibleCreateClub = false;
                // this.visibleBatches = false;
              }
            } else if (mem.user.id !== getDatas.users.id) {
              _this5.memberValidityId = mem.user.id;

              if (_this5.memberValidityId !== "") {
                Toast.fire({
                  icon: "warning",
                  title: "Before participate you must have to be join this club."
                });
              }
            }
          });
        }
      });
    },
    showFriend: function showFriend() {
      this.hideAFbtn = false;
      this.friend = true;
    },
    addFriendPending: function addFriendPending() {
      this.hideAFbtn = false;
      this.friend = false;
    },
    sendRequest: function sendRequest(dt) {
      var _this6 = this;

      this.addFriendData.requested_id = dt.id;
      axios.post("/send-request", {
        requested_id: this.addFriendData.requested_id
      }).then(function (response) {
        _this6.hideAFbtn = false;
        _this6.friend = false;
        Toast.fire({
          icon: "success",
          title: "Friend Request Send Successfull."
        });
      });
    },
    getUserAvtr: function getUserAvtr(dtAvtr, dt) {
      this.avatar = dtAvtr;
      this.posts = dt;
    },
    getUserDatas: function getUserDatas(getDatas) {
      this.DATA = getDatas.user;
    },
    showDiscussion: function showDiscussion() {
      this.discussion = true;
      this.showFriendList = false;
      this.sendSkillForm = false;
    },
    storeLike: function storeLike(dtPost) {
      var _this7 = this;

      this.like.post_id = dtPost.id;
      axios.post("/store-like", {
        post_id: this.like.post_id,
        status: this.like.status
      }).then(function (response) {
        if (response.data.status = "unlike") {
          _this7.liked = true;
        } else if (response.data.status = "like") {
          _this7.liked = false;
        }
      });
    },
    storeCommentReply: function storeCommentReply() {
      var _this8 = this;

      axios.post("/store-reply", {
        avatar_id: this.commentReply.avatar_id,
        post_id: this.commentReply.post_id,
        comment_id: this.commentReply.comment_id,
        reply: this.commentReply.reply
      }).then(function (response) {
        _this8.commentReply.reply = [];
        _this8.replyInputShow = false;
        _this8.showComment = true;
      });
    },
    getAvatarId: function getAvatarId(dt) {
      this.post.avatar_id = dt.id;
    },
    visibleComment: function visibleComment() {
      if (this.showComment == false) {
        this.showComment = true;
      } else if (this.showComment == true) {
        this.showComment = false;
      }
    },
    reply: function reply(dtPost, comment, avatar) {
      var _this9 = this;

      this.replyInputShow = true;
      this.commentReply.post_id = dtPost.id;
      this.commentReply.avatar_id = avatar.id;
      this.commentReply.comment_id = comment.id;
      setTimeout(function () {
        _this9.replyInputShow = false;
        _this9.commentReply.avatar_id = "";
        _this9.commentReply.post_id = "";
        _this9.commentReply.comment_id = "";
      }, 60000);
    },
    pickId: function pickId(dtPost, avatar) {
      this.form.post_id = dtPost.id;
      this.form.avatar_id = avatar.id;
    },
    comment: function comment() {
      var _this10 = this;

      this.form.post("/postComment").then(function (response) {
        _this10.form.comment = [];
        _this10.showComment = true;
      });
    },
    unfriend: function unfriend(request) {
      var id = request.id;
      axios.post("/reject/" + id).then(function (response) {
        Toast.fire({
          icon: "warning",
          title: "Unfriend Successfull."
        });
      });
    },
    friendList: function friendList() {
      if (this.showFriendList == false) {
        this.showFriendList = true;
        this.discussion = false;
        this.sendSkillForm = false;
      } else if (this.showFriendList == true) {
        this.showFriendList = false;
        this.discussion = true;
      }
    },
    timelineFeed: function timelineFeed() {
      var _this11 = this;

      this.getDatas.allUser.forEach(function (element) {
        console.log(element);

        _this11.$router.push("/timeline/:element");
      });
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.friendInfo[data-v-944af382] {\n  display: inline-flex;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.friendInfo a[data-v-944af382]:hover {\n  text-decoration: none;\n}\n.friend-list-span[data-v-944af382] {\n  display: block;\n  margin-left: -21px;\n  font-size: 10px;\n  margin-top: 20px;\n}\n.friendList-content[data-v-944af382] {\n  background: #f8f8f8;\n  border-radius: 4px;\n  width: 100%;\n  border-bottom: 1px solid #f1f2f2;\n  overflow: hidden;\n  padding: 0px 20px;\n}\n.friend-avatar[data-v-944af382] {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.unfriend[data-v-944af382] {\n  float: right;\n  margin-top: 15px;\n}\n.unfriendBtn[data-v-944af382] {\n  color: #fff;\n  font-weight: 700;\n  padding: 10px;\n  background-color: #2faae1;\n  border-radius: 5px;\n}\n.unfriend a[data-v-944af382]:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #204d74;\n  transition: 0.7s;\n}\n.frindList[data-v-944af382] {\n  padding: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=template&id=944af382&scoped=true&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/timeline.vue?vue&type=template&id=944af382&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c("input", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.getUserDatas(_vm.getDatas),
                expression: "getUserDatas(getDatas)"
              }
            ],
            attrs: { type: "text", hidden: "" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-md-3 static" },
              [
                _vm._l(_vm.DATA, function(dt) {
                  return _c(
                    "div",
                    { key: dt.id, staticStyle: { "text-align": "center" } },
                    [
                      dt.first_name == _vm.$route.params.name
                        ? _c(
                            "div",
                            [
                              _vm._l(dt.avatar, function(dtAvtr) {
                                return _c("div", { key: dtAvtr.id }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.getUserAvtr(dtAvtr, dt),
                                        expression: "getUserAvtr(dtAvtr,dt)"
                                      }
                                    ],
                                    attrs: { hidden: "", type: "text" }
                                  }),
                                  _vm._v(" "),
                                  dtAvtr.avatar
                                    ? _c("img", {
                                        staticClass: "prof_size",
                                        attrs: {
                                          src: _vm.ourImage(dtAvtr.avatar),
                                          alt: ""
                                        }
                                      })
                                    : _vm._e()
                                ])
                              }),
                              _vm._v(" "),
                              _c("h3", [_vm._v(_vm._s(dt.first_name))]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "text-muted" },
                                [
                                  _vm._v(
                                    "Creative Director\n                  "
                                  ),
                                  _vm._l(_vm.getAuthors.authorsdt, function(
                                    author
                                  ) {
                                    return _c("span", { key: author.id }, [
                                      author.author_id == _vm.getDatas.users.id
                                        ? _c("p", [
                                            _c("strong", [
                                              _vm._v(
                                                "Author of " +
                                                  _vm._s(author.club.club_name)
                                              )
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "badge badge-danger"
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(author.designation)
                                                )
                                              ]
                                            )
                                          ])
                                        : _vm._e()
                                    ])
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    [
                                      _c(
                                        "form",
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value:
                                                _vm.hideAFbtn && !_vm.friend,
                                              expression: "hideAFbtn && !friend"
                                            }
                                          ],
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.sendRequest(dt)
                                            }
                                          }
                                        },
                                        [
                                          _vm.$route.params.name !==
                                          _vm.getDatas.users.first_name
                                            ? _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href: "#",
                                                    type: "submit"
                                                  }
                                                },
                                                [_vm._v("Add Friend")]
                                              )
                                            : _vm._e()
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _vm._l(
                                        _vm.getFriendRequests.frinedships,
                                        function(test) {
                                          return _c("div", { key: test.id }, [
                                            test.requested_id ===
                                            _vm.getDatas.users.id
                                              ? _c("div", [
                                                  test.requester_id === dt.id &&
                                                  test.requested_id ===
                                                    _vm.getDatas.users.id &&
                                                  test.status === 1 &&
                                                  _vm.showFriend()
                                                    ? _c("a", {
                                                        attrs: {
                                                          href: "#",
                                                          type: "button"
                                                        }
                                                      })
                                                    : _vm._e()
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            test.requester_id ===
                                            _vm.getDatas.users.id
                                              ? _c("div", [
                                                  test.requester_id ===
                                                    _vm.getDatas.users.id &&
                                                  test.requested_id === dt.id &&
                                                  test.status === 1 &&
                                                  _vm.showFriend()
                                                    ? _c("a", {
                                                        attrs: {
                                                          href: "#",
                                                          type: "button"
                                                        }
                                                      })
                                                    : _vm._e()
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            test.requested_id ===
                                            _vm.getDatas.users.id
                                              ? _c("div", [
                                                  test.requester_id == dt.id &&
                                                  test.requested_id ==
                                                    _vm.getDatas.users.id &&
                                                  test.status == 0 &&
                                                  _vm.addFriendPending()
                                                    ? _c("a", {
                                                        attrs: {
                                                          href: "#",
                                                          type: "button"
                                                        }
                                                      })
                                                    : _vm._e()
                                                ])
                                              : _vm._e(),
                                            _vm._v(" "),
                                            test.requester_id ===
                                            _vm.getDatas.users.id
                                              ? _c("div", [
                                                  test.requester_id ===
                                                    _vm.getDatas.users.id &&
                                                  test.requested_id === dt.id &&
                                                  test.status === 0 &&
                                                  _vm.addFriendPending()
                                                    ? _c("a", {
                                                        attrs: {
                                                          href: "#",
                                                          type: "button"
                                                        }
                                                      })
                                                    : _vm._e()
                                                ])
                                              : _vm._e()
                                          ])
                                        }
                                      )
                                    ],
                                    2
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !_vm.friend && !_vm.hideAFbtn,
                                          expression: "!friend && !hideAFbtn"
                                        }
                                      ],
                                      staticClass: "badge badge-success",
                                      staticStyle: {
                                        "background-color": "#f0ad4e !important"
                                      }
                                    },
                                    [_vm._v("Pending")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.friend && !_vm.hideAFbtn,
                                          expression: "friend && !hideAFbtn"
                                        }
                                      ],
                                      staticClass: "badge badge-success",
                                      staticStyle: {
                                        "background-color": "#5cb85c !important"
                                      }
                                    },
                                    [_vm._v("Friend")]
                                  )
                                ],
                                2
                              )
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  )
                }),
                _vm._v(" "),
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticStyle: {
                      "background-color": "#f5f6f7",
                      padding: "10px"
                    }
                  },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("hr", {
                      staticStyle: { "margin-top": "0px !important" }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.DATA, function(dt_user) {
                      return _c("div", { key: dt_user.id }, [
                        dt_user.first_name == _vm.$route.params.name
                          ? _c("div", [
                              _c(
                                "div",
                                { staticStyle: { display: "inline-flex" } },
                                [
                                  _c("i", {
                                    staticClass: "icon ion-android-people",
                                    staticStyle: { "font-size": "17px" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        "margin-left": "5px",
                                        color: "#385898",
                                        "font-size": "14px",
                                        "line-height": "16px"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticStyle: { color: "#4b4f56" } },
                                        [
                                          _vm._v(
                                            "\n                              Full Name\n                              "
                                          )
                                        ]
                                      ),
                                      _vm._v(
                                        " " +
                                          _vm._s(dt_user.first_name) +
                                          "\n                          "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { display: "inline-flex" } },
                                [
                                  _c("i", {
                                    staticClass: "icon ion-university",
                                    staticStyle: { "font-size": "17px" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        "margin-left": "5px",
                                        color: "#385898",
                                        "font-size": "14px",
                                        "line-height": "16px"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticStyle: { color: "#4b4f56" } },
                                        [
                                          _vm._v("Study at department of"),
                                          _c(
                                            "span",
                                            {
                                              staticStyle: { color: "#4b4f56" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                  " +
                                                  _vm._s(dt_user.department) +
                                                  ","
                                              )
                                            ]
                                          ),
                                          _vm._v(" batch")
                                        ]
                                      ),
                                      _vm._v(
                                        "\n                              " +
                                          _vm._s(dt_user.batch) +
                                          "\n                          "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { display: "inline-flex" } },
                                [
                                  _c("i", {
                                    staticClass: "icon ion-ios-star",
                                    staticStyle: { "font-size": "17px" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        "margin-left": "5px",
                                        color: "#385898",
                                        "font-size": "14px",
                                        "line-height": "16px"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticStyle: { color: "#4b4f56" } },
                                        [_vm._v("Registration number")]
                                      ),
                                      _vm._v(" " + _vm._s(dt_user.id_number))
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { display: "inline-flex" } },
                                [
                                  _c("i", {
                                    staticClass: "icon ion-ios-email-outline",
                                    staticStyle: { "font-size": "17px" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        "margin-left": "5px",
                                        color: "#385898",
                                        "font-size": "14px",
                                        "line-height": "16px"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticStyle: { color: "#4b4f56" } },
                                        [_vm._v("Email")]
                                      ),
                                      _vm._v(" " + _vm._s(dt_user.email))
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { display: "inline-flex" } },
                                [
                                  _c("i", {
                                    staticClass: "icon ion-ios-home",
                                    staticStyle: { "font-size": "17px" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        "margin-left": "5px",
                                        color: "#385898",
                                        "font-size": "14px",
                                        "line-height": "16px"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { staticStyle: { color: "#4b4f56" } },
                                        [_vm._v("Present Address")]
                                      ),
                                      _vm._v(" " + _vm._s(dt_user.city))
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticStyle: { display: "inline-flex" } },
                                [
                                  _c("i", {
                                    staticClass: "icon ion-ios-information",
                                    staticStyle: { "font-size": "17px" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticStyle: {
                                        "margin-left": "5px",
                                        color: "#385898",
                                        "font-size": "12px",
                                        "line-height": "16px"
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          staticStyle: {
                                            color: "#4b4f56",
                                            "font-size": "14px"
                                          }
                                        },
                                        [_vm._v("About me:")]
                                      ),
                                      _vm._v(" " + _vm._s(dt_user.about_me))
                                    ]
                                  )
                                ]
                              )
                            ])
                          : _vm._e()
                      ])
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c("div", { staticClass: "line" }),
                _vm._v(" "),
                _vm.getDatas.users.first_name == _vm.$route.params.name
                  ? _c(
                      "div",
                      {
                        staticClass: "suggestions",
                        attrs: { id: "sticky-sidebar" }
                      },
                      [
                        _c("ul", { staticClass: "nav-news-feed" }, [
                          _c("li", [
                            _c("i", {
                              staticClass: "icon ion-ios-information"
                            }),
                            _vm._v(" "),
                            _c("div", [
                              _c(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showDiscussion()
                                    }
                                  }
                                },
                                [_vm._v("My Newsfeed")]
                              )
                            ])
                          ]),
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
                          _c("li", [
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
                              _c(
                                "router-link",
                                { attrs: { to: "/basic-info" } },
                                [_vm._v("Basic Information")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._m(2),
                          _vm._v(" "),
                          _c("li", [
                            _c("i", {
                              staticClass: "icon ion-ios-locked-outline"
                            }),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.friendList()
                                  }
                                }
                              },
                              [_vm._v("Friend List")]
                            )
                          ])
                        ])
                      ]
                    )
                  : _vm._e()
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-7 tab-content" }, [
              _c(
                "div",
                { staticClass: "active", attrs: { id: "discussion" } },
                [
                  _c("div", { staticClass: "create-post" }, [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-7 col-sm-7" }, [
                        _c("div", { staticClass: "form-group" }, [
                          _c("img", {
                            staticClass: "profile-photo-md",
                            attrs: {
                              src: _vm.ourImage(_vm.avatar.avatar),
                              alt: ""
                            }
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
                        ])
                      ]),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.sendSkillForm,
                          expression: "sendSkillForm"
                        }
                      ],
                      staticClass: "create-post"
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.form,
                                expression: "form"
                              }
                            ]
                          },
                          [
                            _vm._v(
                              "\n                      If you perform of this event,please\n                      "
                            ),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.showForm()
                                  }
                                }
                              },
                              [_vm._v("Click Here")]
                            ),
                            _vm._v(
                              " and send your demo performance.\n                      "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "p",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.cuppon,
                                expression: "cuppon"
                              }
                            ]
                          },
                          [
                            _vm._v(
                              "\n                      If you only participate not preform of this event,please\n                      "
                            ),
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    return _vm.showCuppon(_vm.getDatas)
                                  }
                                }
                              },
                              [_vm._v("Click Here")]
                            ),
                            _vm._v(
                              " and collect cuppon code.\n                      "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.showSkillForm,
                                expression: "showSkillForm"
                              }
                            ],
                            attrs: { enctype: "multipart/form-data" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.uploadSkill()
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "col-md-12 col-sm-12" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "close",
                                  attrs: {
                                    type: "button",
                                    "aria-label": "Close"
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.hideContent()
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { attrs: { "aria-hidden": "true" } },
                                    [_vm._v("×")]
                                  )
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-12 col-sm-12" }, [
                              _c("div", { staticClass: "tools" }, [
                                _c(
                                  "ul",
                                  {
                                    staticClass: "publishing-tools list-inline"
                                  },
                                  [
                                    _c("li", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.SelectPhoto()
                                            }
                                          }
                                        },
                                        [_vm._v("Upload Photo")]
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "button",
                                        {
                                          staticClass: "btn btn-primary",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.SelectVideo()
                                            }
                                          }
                                        },
                                        [_vm._v("Upload Video")]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showSelectPhoto,
                                      expression: "showSelectPhoto"
                                    }
                                  ],
                                  staticClass: "publishing-tools list-inline"
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("img", {
                                      staticClass: "img-style",
                                      attrs: { src: _vm.skill.image1 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "control-file",
                                      attrs: { name: "image1", type: "file" },
                                      on: {
                                        change: function($event) {
                                          return _vm.changeSkill1($event)
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("img", {
                                      staticClass: "img-style",
                                      attrs: { src: _vm.skill.image2 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "control-file",
                                      attrs: { name: "image2", type: "file" },
                                      on: {
                                        change: function($event) {
                                          return _vm.changeSkill2($event)
                                        }
                                      }
                                    })
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "form-group" }, [
                                    _c("img", {
                                      staticClass: "img-style",
                                      attrs: { src: _vm.skill.image3 }
                                    }),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "control-file",
                                      attrs: { name: "image3", type: "file" },
                                      on: {
                                        change: function($event) {
                                          return _vm.changeSkill3($event)
                                        }
                                      }
                                    })
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
                                      value: _vm.showSelectVideo,
                                      expression: "showSelectVideo"
                                    }
                                  ],
                                  staticClass: "form-group"
                                },
                                [
                                  _vm._m(4),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "video-file",
                                    attrs: { name: "video", type: "file" },
                                    on: { change: _vm.changeSkillVideo }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-primary post-btn",
                                attrs: { type: "submit" }
                              },
                              [_vm._v("Send Request")]
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
                                value: _vm.getCuppon,
                                expression: "getCuppon"
                              }
                            ]
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                { staticClass: "col-md-12 col-sm-12" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "close",
                                      attrs: {
                                        type: "button",
                                        "aria-label": "Close"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.hideContent()
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "span",
                                        { attrs: { "aria-hidden": "true" } },
                                        [_vm._v("×")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "cuppon-code" }, [
                                _vm._v(
                                  "@" +
                                    _vm._s(_vm.authUserName) +
                                    "@" +
                                    _vm._s(_vm.randomNumber()) +
                                    "$" +
                                    _vm._s(_vm.authUserDept) +
                                    "$SSS%" +
                                    _vm._s(_vm.authUserBatch) +
                                    "%"
                                )
                              ]),
                              _vm._v(" "),
                              _vm._m(5),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-primary",
                                  attrs: { href: "#", type: "button" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.print()
                                    }
                                  }
                                },
                                [_vm._v("Print Code")]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.posts.posts, function(dtPost) {
                    return _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.discussion,
                            expression: "discussion"
                          }
                        ],
                        key: dtPost.id
                      },
                      [
                        dtPost
                          ? _c("div", { staticClass: "post-content" }, [
                              _c("div", { staticClass: "post-container" }, [
                                _vm.avatar.avatar
                                  ? _c("img", {
                                      staticClass: "profile-photo-md pull-left",
                                      attrs: {
                                        src: _vm.ourImage(_vm.avatar.avatar),
                                        alt: "user"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("div", { staticClass: "user-info" }, [
                                  _c("h5", [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "profile-link",
                                        attrs: { href: "#" }
                                      },
                                      [_vm._v(_vm._s(_vm.posts.first_name))]
                                    ),
                                    _vm._v(" "),
                                    _c("span", { staticClass: "following" }, [
                                      _vm._v("following")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      _vm._s(
                                        _vm._f("postTime")(_vm.posts.created_at)
                                      )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "post-detail" }, [
                                  _c("div", { staticClass: "post-text" }, [
                                    _c("p", [
                                      _vm._v(
                                        "\n                          " +
                                          _vm._s(dtPost.text) +
                                          "\n                          "
                                      ),
                                      _c("i", {
                                        staticClass: "em em-anguished"
                                      }),
                                      _vm._v(" "),
                                      _c("i", {
                                        staticClass: "em em-anguished"
                                      }),
                                      _vm._v(" "),
                                      _c("i", {
                                        staticClass: "em em-anguished"
                                      })
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  dtPost.image1
                                    ? _c("img", {
                                        staticClass:
                                          "img-responsive post-image",
                                        attrs: {
                                          src: _vm.ourImage(dtPost.image1),
                                          alt: "post-image"
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("hr"),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "reaction" }, [
                                    _c(
                                      "form",
                                      {
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.storeLike(dtPost)
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !_vm.liked,
                                                expression: "!liked"
                                              }
                                            ],
                                            staticClass: "btn text-red",
                                            attrs: { type: "submit" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-thumbs-up"
                                            }),
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(dtPost.likes.length) +
                                                "\n                              Like\n                          "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "a",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: _vm.liked,
                                                expression: "liked"
                                              }
                                            ],
                                            staticClass: "btn text-green",
                                            staticStyle: {
                                              "font-weight": "700"
                                            },
                                            attrs: { type: "submit" }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fa fa-thumbs-up"
                                            }),
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(dtPost.likes.length) +
                                                "\n                              Like\n                          "
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    dtPost.comments
                                      ? _c(
                                          "a",
                                          {
                                            staticClass: "comment-link",
                                            attrs: { href: "#" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.visibleComment()
                                              }
                                            }
                                          },
                                          [_vm._v("Comment")]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("hr"),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.showComment,
                                          expression: "showComment"
                                        },
                                        {
                                          name: "chat-scroll",
                                          rawName: "v-chat-scroll"
                                        }
                                      ],
                                      staticClass: "post-comment-scroll"
                                    },
                                    _vm._l(dtPost.comments, function(comment) {
                                      return _c(
                                        "div",
                                        {
                                          key: comment.id,
                                          staticClass: "post-comment"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "parent-comment" },
                                            [
                                              _c("img", {
                                                staticClass: "profile-photo-sm",
                                                attrs: {
                                                  src: _vm.ourImage(
                                                    comment.avatar.avatar
                                                  ),
                                                  alt: ""
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "p",
                                                { staticClass: "comment-bg" },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "profile-link",
                                                      attrs: { href: "#" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.timeline()
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          comment.user
                                                            .first_name
                                                        )
                                                      )
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "comment-text"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(comment.comment)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a",
                                            {
                                              staticClass: "reply-link",
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.reply(
                                                    dtPost,
                                                    comment,
                                                    _vm.avatar
                                                  )
                                                }
                                              }
                                            },
                                            [_vm._v("Reply")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(comment.reply, function(
                                            commentReply
                                          ) {
                                            return _c(
                                              "div",
                                              {
                                                key: commentReply.id,
                                                staticClass: "comment-reply"
                                              },
                                              [
                                                commentReply.reply
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "comment-reply-text"
                                                      },
                                                      [
                                                        _c(
                                                          "p",
                                                          {
                                                            staticStyle: {
                                                              "margin-top":
                                                                "-13px"
                                                            }
                                                          },
                                                          [
                                                            _c("img", {
                                                              staticClass:
                                                                "profile-photo-sm reply-comment-profile-photo",
                                                              attrs: {
                                                                src: _vm.ourImage(
                                                                  commentReply
                                                                    .avatar
                                                                    .avatar
                                                                ),
                                                                alt: ""
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "a",
                                                              {
                                                                staticClass:
                                                                  "profile-link reply-comment-profile-link",
                                                                attrs: {
                                                                  href: "#"
                                                                },
                                                                on: {
                                                                  click: function(
                                                                    $event
                                                                  ) {
                                                                    $event.preventDefault()
                                                                    return _vm.timeline()
                                                                  }
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    commentReply
                                                                      .user
                                                                      .first_name
                                                                  )
                                                                )
                                                              ]
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "reply-comment-text"
                                                              },
                                                              [
                                                                _vm._v(
                                                                  _vm._s(
                                                                    commentReply.reply
                                                                  )
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e(),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "comment-reply-link"
                                                  },
                                                  [
                                                    _c(
                                                      "a",
                                                      {
                                                        attrs: { href: "#" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.reply(
                                                              dtPost,
                                                              comment,
                                                              _vm.avatar
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Reply")]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          })
                                        ],
                                        2
                                      )
                                    }),
                                    0
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: !_vm.replyInputShow,
                                          expression: "!replyInputShow"
                                        }
                                      ],
                                      staticClass: "post-comment-input"
                                    },
                                    [
                                      _c(
                                        "form",
                                        {
                                          staticClass: "comment-form",
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
                                              $event.preventDefault()
                                              return _vm.comment()
                                            }
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "profile-photo-sm",
                                            attrs: {
                                              src: _vm.ourImage(
                                                _vm.avatar.avatar
                                              ),
                                              alt: ""
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.form.comment,
                                                expression: "form.comment"
                                              }
                                            ],
                                            staticClass:
                                              "form-control comment-input",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Write your comment"
                                            },
                                            domProps: {
                                              value: _vm.form.comment
                                            },
                                            on: {
                                              keypress: function($event) {
                                                return _vm.pickId(
                                                  dtPost,
                                                  _vm.avatar
                                                )
                                              },
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.form,
                                                  "comment",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
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
                                          value: _vm.replyInputShow,
                                          expression: "replyInputShow"
                                        }
                                      ],
                                      staticClass: "post-comment-input"
                                    },
                                    [
                                      _c(
                                        "form",
                                        {
                                          staticClass: "comment-form",
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
                                              $event.preventDefault()
                                              return _vm.storeCommentReply()
                                            }
                                          }
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "profile-photo-sm",
                                            attrs: {
                                              src: _vm.ourImage(
                                                _vm.avatar.avatar
                                              ),
                                              alt: ""
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.commentReply.reply,
                                                expression: "commentReply.reply"
                                              }
                                            ],
                                            staticClass:
                                              "form-control comment-input",
                                            attrs: {
                                              type: "text",
                                              placeholder: "Write your reply"
                                            },
                                            domProps: {
                                              value: _vm.commentReply.reply
                                            },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.commentReply,
                                                  "reply",
                                                  $event.target.value
                                                )
                                              }
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ])
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.getFriendRequests.frinedships, function(request) {
                    return _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showFriendList,
                            expression: "showFriendList"
                          }
                        ],
                        key: request.id,
                        staticClass: "friendList-content"
                      },
                      [
                        request.requester_id == _vm.getDatas.users.id &&
                        request.requested_id == request.requested_user.id &&
                        request.status == 1
                          ? _c("div", { staticClass: "friendList" }, [
                              _c(
                                "div",
                                { staticClass: "friendInfo" },
                                [
                                  _vm._l(
                                    request.requested_user.avatar,
                                    function(avtr) {
                                      return _c("img", {
                                        key: avtr.id,
                                        staticClass: "friend-avatar",
                                        attrs: {
                                          src: _vm.ourImage(avtr.avatar),
                                          alt: "Login-logout-register"
                                        }
                                      })
                                    }
                                  ),
                                  _vm._v(" "),
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v(
                                      _vm._s(request.requested_user.first_name)
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "friend-list-span" },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          request.requested_user.department
                                        ) +
                                          "-" +
                                          _vm._s(request.requested_user.batch)
                                      )
                                    ]
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "unfriend" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.unfriend(request)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "unfriendBtn",
                                        attrs: { type: "submit", href: "#" }
                                      },
                                      [_vm._v("Unfriend")]
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        request.requested_id == _vm.getDatas.users.id &&
                        request.requester_id == request.user.id &&
                        request.status == 1
                          ? _c("div", { staticClass: "friendList" }, [
                              _c(
                                "div",
                                { staticClass: "friendInfo" },
                                [
                                  _vm._l(request.user.avatar, function(avtr) {
                                    return _c("img", {
                                      key: avtr.id,
                                      staticClass: "friend-avatar",
                                      attrs: {
                                        src: _vm.ourImage(avtr.avatar),
                                        alt: "Login-logout-register"
                                      }
                                    })
                                  }),
                                  _vm._v(" "),
                                  _c("a", { attrs: { href: "#" } }, [
                                    _vm._v(_vm._s(request.user.first_name))
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "friend-list-span" },
                                    [
                                      _vm._v(
                                        _vm._s(request.user.department) +
                                          "-" +
                                          _vm._s(request.user.batch)
                                      )
                                    ]
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "unfriend" }, [
                                _c(
                                  "form",
                                  {
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.unfriend(request)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "unfriendBtn",
                                        attrs: { type: "submit", href: "#" }
                                      },
                                      [_vm._v("Unfriend")]
                                    )
                                  ]
                                )
                              ])
                            ])
                          : _vm._e()
                      ]
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 static" }, [
              _c(
                "div",
                { attrs: { id: "chat-block" } },
                [
                  _c("div", { staticClass: "title" }, [
                    _vm._v("\n              Running Event\n              "),
                    _c("span", { staticClass: "badge badge-danger" }, [
                      _vm._v(_vm._s(_vm.getClubEvents.count_event))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.getClubEvents.events, function(event) {
                    return _c(
                      "div",
                      { key: event.id, staticClass: "feed-item" },
                      [
                        event
                          ? _c("div", { staticClass: "live-activity" }, [
                              _c("p", { staticClass: "text-muted" }, [
                                _c(
                                  "a",
                                  {
                                    staticClass: "profile-link",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v(_vm._s(event.name))]
                                ),
                                _vm._v(" event going on\n                ")
                              ]),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "btn btn-danger btn-xs",
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showSendSkillForm(
                                        event,
                                        _vm.getClubs,
                                        _vm.getDatas
                                      )
                                    }
                                  }
                                },
                                [_vm._v("Now")]
                              )
                            ])
                          : _vm._e()
                      ]
                    )
                  })
                ],
                2
              )
            ])
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
    return _c(
      "div",
      { staticStyle: { "text-align": "center", "font-size": "18px" } },
      [
        _c("a", { staticStyle: { color: "#4b4f56" }, attrs: { href: "#" } }, [
          _vm._v("Short Biodata")
        ])
      ]
    )
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
    return _c("div", { staticClass: "video-wrapper" }, [
      _c("video", { staticClass: "video", attrs: { controls: "" } }, [
        _c("source", { attrs: { src: "#", type: "video/mp4" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v(
        "\n                          If you miss this code you can't enter/participate the event.So keep it safe.\n                          "
      ),
      _c("strong", [_vm._v("Now Enjoy")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/timeline.vue":
/*!***********************************!*\
  !*** ./resources/js/timeline.vue ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeline_vue_vue_type_template_id_944af382_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.vue?vue&type=template&id=944af382&scoped=true& */ "./resources/js/timeline.vue?vue&type=template&id=944af382&scoped=true&");
/* harmony import */ var _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline.vue?vue&type=script&lang=js& */ "./resources/js/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css& */ "./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timeline_vue_vue_type_template_id_944af382_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timeline_vue_vue_type_template_id_944af382_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "944af382",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/timeline.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/timeline.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./resources/js/timeline.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=style&index=0&id=944af382&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_style_index_0_id_944af382_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/timeline.vue?vue&type=template&id=944af382&scoped=true&":
/*!******************************************************************************!*\
  !*** ./resources/js/timeline.vue?vue&type=template&id=944af382&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_944af382_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./timeline.vue?vue&type=template&id=944af382&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/timeline.vue?vue&type=template&id=944af382&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_944af382_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_timeline_vue_vue_type_template_id_944af382_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);