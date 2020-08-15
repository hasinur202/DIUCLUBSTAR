(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["club"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/add_club_info.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'add_club_info',
  data: function data() {
    return {
      add_author: false,
      getSesrchValue: false,
      searchBar: true,
      searchValue: "",
      search: "",
      form: new Form({
        id: '',
        club_name: "",
        dept: "",
        cover: "",
        about: ""
      }),
      author: {
        author_name: '',
        club_id: '',
        author_id: '',
        designation: ''
      }
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubInfoAction"); // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)

    this.getClubs.clubs.forEach(function (club) {
      if (_this.$route.params.name == club.club_name) {
        _this.form.fill(club);
      }
    });
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests: function getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getClubs: function getClubs() {
      return this.$store.getters.getClub;
    }
  },
  methods: {
    blankInpt: function blankInpt() {
      if (this.author.author_name == "") {
        this.author.author_id;
        this.searchBar = true;
        this.getSesrchValue = false;
      } else {
        this.searchBar = false;
        this.getSesrchValue = false;
      }
    },
    getVal: function getVal(val) {
      this.searchBar = false;
      this.author.author_name = val.first_name + ' ' + val.last_name;
      this.author.author_id = val.id;
      this.search = "";
    },
    searchData: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.debounce(function () {
      var _this2 = this;

      if (this.search !== "") {
        axios.get("/home?q=" + this.search).then(function (response) {
          _this2.searchValue = response.data.user;
          _this2.getSesrchValue = true; // console.log(response.data.user);
        });
      } else {
        this.getSesrchValue = false;
        this.search = "";
      }
    }, 300),
    addAuthor: function addAuthor() {
      this.add_author = true;
    },
    update: function update() {
      var _this3 = this;

      this.form.post('/club-update/' + this.form.id).then(function (response) {
        _this3.$store.dispatch("getClubInfoAction");

        Toast.fire({
          icon: "success",
          title: 'Club information updated'
        });
      });
    },
    add: function add() {
      var _this4 = this;

      this.getClubs.clubs.forEach(function (club) {
        if (_this4.$route.params.name == club.club_name) {
          _this4.author.club_id = club.id;
          axios.post('/author-store', {
            club_id: _this4.author.club_id,
            author_id: _this4.author.author_id,
            designation: _this4.author.designation
          }).then(function (response) {
            Toast.fire({
              icon: "success",
              title: 'Create Author successfull.'
            });
          });
        }
      });
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    },
    updateCover: function updateCover() {
      if (this.form.cover == '') {
        var img = this.form.cover;

        if (img) {
          return this.form.cover;
        } else {
          return "/images/" + this.form.cover;
        }
      } else {
        var _img = this.form.cover;

        if (_img.length > 100) {
          return this.form.cover;
        } else {
          return "/images/" + this.form.cover;
        }
      }
    },
    changePhoto: function changePhoto(event) {
      var _this5 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this5.form.cover = event.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/club.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layouts/header.vue */ "./resources/js/components/layouts/header.vue");
/* harmony import */ var _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layouts/footer.vue */ "./resources/js/components/layouts/footer.vue");
/* harmony import */ var _add_club_info_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_club_info.vue */ "./resources/js/add_club_info.vue");
/* harmony import */ var _create_event_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create_event.vue */ "./resources/js/create_event.vue");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "club",
  components: {
    headercomponent: _components_layouts_header_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    footercomponent: _components_layouts_footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    addClubInfoComponent: _add_club_info_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    createEventComponent: _create_event_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    var _ref;

    return _ref = {
      addClubInfoComponent: false,
      clubMembers: false,
      createEventComponent: false,
      showPost: false,
      discussion: true,
      btn: false
    }, _defineProperty(_ref, "showPost", false), _defineProperty(_ref, "showSelectPhoto", false), _defineProperty(_ref, "showSelectVideo", false), _defineProperty(_ref, "showComment", false), _defineProperty(_ref, "replyInputShow", false), _defineProperty(_ref, "showComment", false), _defineProperty(_ref, "userTimeline", false), _defineProperty(_ref, "liked", false), _defineProperty(_ref, "participate", false), _defineProperty(_ref, "userSkill", false), _defineProperty(_ref, "album", false), _defineProperty(_ref, "clubPost", {
      club_id: "",
      text: "",
      image1: "",
      image2: "",
      image3: "",
      video: "",
      status: "0"
    }), _defineProperty(_ref, "form", new Form({
      author_id: "",
      club_id: "",
      photo: "",
      name: "",
      location: "",
      frequency: "Occurs Once",
      starting_date: "",
      starting_time: "",
      ending_date: "",
      ending_time: "",
      category: "Select Category",
      description: "",
      ticket_url: "www.ticket.com",
      sponsor: "",
      guest: "",
      status: "0"
    })), _defineProperty(_ref, "skill", {
      id: "",
      user_id: "",
      club_id: "",
      event_id: "",
      image1: "",
      image2: "",
      image3: "",
      video: "",
      status: "1",
      noti: ""
    }), _defineProperty(_ref, "pickEventId", ""), _defineProperty(_ref, "postComment", {
      club_post_id: "",
      club_id: "",
      comment: []
    }), _defineProperty(_ref, "clubPostCommentReply", {
      avatar_id: "",
      club_id: "",
      club_post_id: "",
      club_post_comment_id: "",
      reply: ""
    }), _defineProperty(_ref, "like", {
      club_post_id: "",
      status: "1"
    }), _defineProperty(_ref, "clubData", {}), _defineProperty(_ref, "authorData", {}), _defineProperty(_ref, "clubMember", {
      id: "",
      club_id: "",
      status: ""
    }), _defineProperty(_ref, "status", ""), _defineProperty(_ref, "clId", []), _defineProperty(_ref, "countMember", []), _defineProperty(_ref, "userSkillData", {}), _defineProperty(_ref, "join", true), _defineProperty(_ref, "showPending", false), _defineProperty(_ref, "showLink", false), _defineProperty(_ref, "joined", false), _defineProperty(_ref, "clubMemberId", ""), _defineProperty(_ref, "editMode", false), _defineProperty(_ref, "clubAuthorId", ""), _defineProperty(_ref, "clubId", ""), _defineProperty(_ref, "getAuthUserId", ""), _defineProperty(_ref, "getAuthUserName", ""), _ref;
  },
  mounted: function mounted() {
    var _this = this;

    this.getAuthUserId = "".concat(authUser.id);
    this.getAuthUserName = "".concat(authUser.first_name); // setInterval(()=>{
    //     this.getAuthUserId = `${authUser.id}`;
    // },500);

    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 100);
    axios.get("/check").then(function (response) {
      _this.clId = response.data.data;
    });
    axios.get("/countClubMember/" + this.$route.params.cl_id).then(function (response) {
      _this.countMember = response.data.get;
    });
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubInfoAction");
    this.$store.dispatch("getAuthorAction");
    this.$store.dispatch("getClubMemberAction");
    this.$store.dispatch("getCheckAction");
    this.$store.dispatch("getClubPostAction");
    this.$store.dispatch("getClubPostCommentAction");
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("getSkillAction"); // this.$store.dispatch("getShowClubAction");
    // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)

    Echo.channel("Author").listen("AuthorEvent", function (e) {
      _this.$store.dispatch("getAuthorAction");
    });
    Echo.channel("ClubMember").listen("ClubMemberEvent", function (e) {
      _this.$store.dispatch("getClubMemberAction");
    });
    Echo.channel("ClubPostComment").listen("ClubPostCommentEvent", function (e) {
      _this.$store.dispatch("getClubPostCommentAction");
    });
    Echo.channel("ApproveParticipate").listen("ParticipateRequestApprovalEvent", function (e) {
      _this.$store.dispatch("getSkillAction");
    });
    Echo.channel("ClubPostCommentReply").listen("ClubPostCommentReplyEvent", function (e) {
      _this.$store.dispatch("getClubPostCommentAction");
    });
    this.visibleLink();
  },
  created: function created() {
    var _this2 = this;

    // this.autoload();
    this.getClubs.clubs.forEach(function (club) {
      if (_this2.$route.params.name == club.club_name) {
        // console.log(club);
        _this2.clubData = club;
        _this2.authorData = club;
      }
    });
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests: function getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getClubs: function getClubs() {
      return this.$store.getters.getClub;
    },
    getAuthors: function getAuthors() {
      return this.$store.getters.getAuthor;
    },
    getClubMembers: function getClubMembers() {
      return this.$store.getters.getClubMember;
    },
    getChecks: function getChecks() {
      return this.$store.getters.getCheck;
    },
    getClubPosts: function getClubPosts() {
      return this.$store.getters.getClubPost;
    },
    getClubPostComments: function getClubPostComments() {
      return this.$store.getters.getClubPostComment;
    },
    getClubEvents: function getClubEvents() {
      return this.$store.getters.getClubEvent;
    },
    getSkills: function getSkills() {
      return this.$store.getters.getSkill;
    } // getShowClubs(){
    //     return this.$store.getters.getShowClub;
    // }

  },
  methods: _defineProperty({
    showAlbum: function showAlbum() {
      this.album = true;
      this.discussion = false;
    },
    store_like: function store_like(cl_post) {
      var _this3 = this;

      this.like.club_post_id = cl_post.id;
      axios.post("/store-club-post-like", {
        club_post_id: this.like.club_post_id,
        status: this.like.status
      }).then(function (response) {
        if (response.data.status = "unlike") {
          _this3.$store.dispatch("getClubPostAction");

          _this3.liked = true;
        } else if (response.data.status = "like") {
          _this3.$store.dispatch("getClubPostAction");

          _this3.liked = false;
        }
      });
    },
    visibleLink: function visibleLink() {
      // console.log(this.clubAuthorId == this.getAuthUserId);
      // console.log(this.clubAuthorId);
      // console.log(this.getAuthUserId);
      if (this.clubAuthorId == this.getAuthUserId && this.clubId == this.$route.params.cl_id || this.getAuthUserName == 'Master') {
        this.showLink = true;
      }
    },
    getAuthorId: function getAuthorId(author) {
      if (author.author_id == this.getAuthUserId) {
        this.clubId = author.club_id;
        this.clubAuthorId = author.author_id;

        if (this.clubAuthorId == this.getAuthUserId && this.clubId == this.$route.params.cl_id || this.getAuthUserName == 'Master') {
          this.showLink = true;
        }
      }
    },
    showUserSkill: function showUserSkill(participate) {
      if (this.userSkill == false) {
        this.userSkillData = participate;
        this.userSkill = true;
        this.participate = false;
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = false;
      } else if (this.userSkill == true) {
        this.discussion = true;
        this.userSkill = false;
      }
    },
    showSelectedUserSkill: function showSelectedUserSkill(selected) {
      if (this.userSkill == false) {
        this.userSkillData = selected;
        this.userSkill = true;
        this.participate = false;
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = false;
      } else if (this.userSkill == true) {
        this.discussion = true;
        this.userSkill = false;
      }
    },
    showParticipants: function showParticipants() {
      if (this.participate == false) {
        this.participate = true;
        this.userSkill = false;
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = false;
      } else if (this.participate == true) {
        this.discussion = true;
        this.participate = false;
      }
    },
    delete_event: function delete_event(event) {
      var _this4 = this;

      this.pickEventId = event.id;
      axios.post('/delete-event/' + this.pickEventId).then(function () {
        _this4.$store.dispatch("getClubEventAction");

        Toast.fire({
          icon: "success",
          title: 'Event deleted successfull.'
        });
      });
    },
    updateEvent: function updateEvent() {
      var _this5 = this;

      this.form.post('/update-event/' + this.pickEventId).then(function () {
        _this5.$store.dispatch("getClubEventAction");

        Toast.fire({
          icon: "success",
          title: 'Event update successfull.'
        });
      });
    },
    edit_event: function edit_event(event) {
      if (this.createEventComponent == false) {
        this.editMode = true;
        this.form.fill(event);
        this.pickEventId = event.id;
        this.createEventComponent = true;
        this.clubMembers = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = false;
      } else if (this.createEventComponent == true) {
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = true;
      }
    },
    changePhoto: function changePhoto(event) {
      var _this6 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this6.form.photo = event.target.result;
      };

      reader.readAsDataURL(file);
    },
    updatePhoto: function updatePhoto() {
      if (this.form.photo == '') {
        var img = this.form.photo;

        if (img) {
          return this.form.photo;
        } else {
          return "/images/" + this.form.photo;
        }
      } else {
        var _img = this.form.photo;

        if (_img.length > 100) {
          return this.form.photo;
        } else {
          return "/images/" + this.form.photo;
        }
      }
    },
    add_event: function add_event(getDatas, getAuthors) {
      var _this7 = this;

      //   console.log(getDatas.users.id);
      getAuthors.authors.forEach(function (el) {
        if (getDatas.users.id == el.author.id) {
          _this7.form.author_id = el.author.id;
        }
      });
      this.form.club_id = this.$route.params.cl_id;
      this.form.post('/create-event').then(function (response) {
        _this7.$store.dispatch("getClubEventAction");

        _this7.form = [], Toast.fire({
          icon: "success",
          title: 'Event created successfull.'
        });
      });
    },
    approveMember: function approveMember(participate) {
      var _this8 = this;

      this.skill.id = participate.id;
      this.skill.user_id = participate.user_id;
      this.skill.club_id = participate.club_id;
      this.skill.event_id = participate.event_id;
      this.skill.image1 = participate.image1;
      this.skill.image2 = participate.image2;
      this.skill.image3 = participate.image3;
      this.skill.video = participate.video;
      this.skill.noti = participate.club_event.name + " event participate request approved.";
      axios.post("/approve-user/" + this.skill.id, {
        user_id: this.skill.user_id,
        club_id: this.skill.club_id,
        event_id: this.skill.event_id,
        image1: this.skill.image1,
        image2: this.skill.image2,
        image3: this.skill.image3,
        video: this.skill.video,
        status: this.skill.status,
        noti: this.skill.noti
      }).then(function () {
        _this8.$store.dispatch("getSkillAction");

        Toast.fire({
          icon: "success",
          title: "Member Approved"
        });
      });
    },
    memberBlock: function memberBlock(participate) {
      var _this9 = this;

      this.skill.id = participate.id;
      axios.post("/reject-user/" + this.skill.id).then(function () {
        _this9.$store.dispatch("getSkillAction");

        Toast.fire({
          icon: "success",
          title: "Member Rejected"
        });
      });
    },
    storeClubPostCommentReply: function storeClubPostCommentReply() {
      var _this10 = this;

      axios.post("/store-club-post-comment-reply", {
        avatar_id: this.clubPostCommentReply.avatar_id,
        club_post_id: this.clubPostCommentReply.club_post_id,
        club_id: this.clubPostCommentReply.club_id,
        club_post_comment_id: this.clubPostCommentReply.club_post_comment_id,
        reply: this.clubPostCommentReply.reply
      }).then(function (response) {
        _this10.clubPostCommentReply.reply = "";
        _this10.replyInputShow = false;
        _this10.showComment = true;
      });
    },
    club_post_comment_reply: function club_post_comment_reply(data, cl_post, postComment) {
      this.replyInputShow = true;
      this.clubPostCommentReply.avatar_id = data.id;
      this.clubPostCommentReply.club_post_id = cl_post.id;
      this.clubPostCommentReply.club_id = cl_post.club_id;
      this.clubPostCommentReply.club_post_comment_id = postComment.id;
    },
    storeComment: function storeComment(cl_post) {
      var _this11 = this;

      this.postComment.club_id = this.$route.params.cl_id;
      this.postComment.club_post_id = cl_post.id;
      axios.post("/store-comment", {
        comment: this.postComment.comment,
        club_id: this.postComment.club_id,
        club_post_id: this.postComment.club_post_id
      }).then(function (response) {
        _this11.postComment.comment = "";
        _this11.postComment.club_id = "";
        _this11.postComment.club_post_id = "";
        _this11.showComment = true;
      });
    },
    visibleComment: function visibleComment() {
      if (this.showComment == false) {
        this.showComment = true;
      } else if (this.showComment == true) {
        this.showComment = false;
        this.postComment.comment = "";
        this.postComment.club_id = "";
        this.postComment.club_post_id = "";
        this.clubPostCommentReply.reply = "";
        this.clubPostCommentReply.club_post_id = "";
        this.clubPostCommentReply.club_post_comment_id = "";
      }
    },
    showBtn: function showBtn() {
      this.btn = true;
    },
    SelectPhoto: function SelectPhoto() {
      this.showSelectPhoto = true;
    },
    SelectVideo: function SelectVideo() {
      this.showSelectVideo = true;
    },
    showContent: function showContent() {
      this.showPost = true;
      this.clubPost.club_id = this.$route.params.cl_id;
    },
    hideContent: function hideContent() {
      this.showPost = false;
      this.btn = false;
      this.clubPost.club_id = "";
      this.clubPost.text = "";
      this.clubPost.image1 = "";
      this.clubPost.image2 = "";
      this.clubPost.image3 = "";
      this.clubPost.video = "";
    },
    ourImage: function ourImage(img) {
      return "/images/" + img;
    },
    changePhoto1: function changePhoto1(event) {
      var _this12 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this12.clubPost.image1 = event.target.result;
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
    changePhoto2: function changePhoto2(event) {
      var _this13 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this13.clubPost.image2 = event.target.result;
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
    changePhoto3: function changePhoto3(event) {
      var _this14 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this14.clubPost.image3 = event.target.result;
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
    changeVideo: function changeVideo(e) {
      this.clubPost.video = e.target.files[0];

      if (this.btn == false) {
        this.btn = true;
      } else if (this.btn == true) {
        this.btn = true;
      } else {
        this.btn = false;
      }
    },
    uploadPost: function uploadPost(e) {
      e.preventDefault();
      var currentObj = this;
      var config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };
      var formData = new FormData();
      formData.append("club_id", this.clubPost.club_id);
      formData.append("text", this.clubPost.text);
      formData.append("image1", this.clubPost.image1);
      formData.append("image2", this.clubPost.image2);
      formData.append("image3", this.clubPost.image3);
      formData.append("video", this.clubPost.video);
      formData.append("status", this.clubPost.status);
      axios.post("/club-post", formData, config).then(function (response) {
        //   currentObj.success = response.data.success;
        this.clubPost.club_id = "";
        this.clubPost.text = "";
        this.clubPost.image1 = "";
        this.clubPost.image2 = "";
        this.clubPost.image3 = "";
        this.clubPost.video = "";
        this.$store.dispatch("getClubPostAction");
        Toast.fire({
          icon: "success",
          title: "Post Upload successfully"
        });
        this.showPost = false;
      })["catch"](function (error) {
        currentObj.output = error;
      });
    },
    disableJoin: function disableJoin(t) {
      if (t.status == 1 && t.user_id == this.getDatas.users.id && t.club_id == this.$route.params.cl_id) {
        this.join = false;
        this.joined = true;
        this.showPending = false;
      }
    },
    visiblePending: function visiblePending(t) {
      if (t.status == 0 && t.user_id == this.getDatas.users.id && t.club_id == this.$route.params.cl_id) {
        this.showPending = true;
        this.join = false;
        this.joined = false;
      }
    },
    addMember: function addMember(clubData) {
      var _this15 = this;

      this.clubMember.club_id = clubData.id;
      this.clubMember.status = 0;
      axios.post("/add-member", {
        club_id: this.clubMember.club_id,
        status: this.clubMember.status
      }).then(function (response) {
        if (response.data.club_member.club_id == _this15.$route.params.cl_id && _this15.getDatas.users.id == response.data.club_member.user_id && response.data.club_member.status == 0) {
          _this15.showPending = true;
          _this15.join = false;
          _this15.joined = false;
        }

        Toast.fire({
          icon: "success",
          title: "Send joining request successfully"
        });
      });
    },
    memberReject: function memberReject(member) {
      var _this16 = this;

      this.clubMember.id = member.id;
      axios.post("/member-reject/" + this.clubMember.id).then(function (response) {
        _this16.$store.dispatch("getClubMemberAction");

        Toast.fire({
          icon: "success",
          title: "Member Blocked"
        });
      });
      axios.get("/countClubMember/" + this.$route.params.cl_id).then(function (response) {
        _this16.countMember = response.data.get;
      });
    },
    showDiscussion: function showDiscussion() {
      if (this.discussion == false) {
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.userSkill = false;
        this.participate = false;
        this.discussion = true;
      } else if (this.discussion == true) {
        this.discussion = true;
      }
    },
    showUpdateClub: function showUpdateClub() {
      if (this.addClubInfoComponent == false) {
        this.clubMembers = false;
        this.participate = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = true;
        this.discussion = false;
      } else if (this.addClubInfoComponent == true) {
        this.clubMembers = false;
        this.participate = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = true;
      }
    },
    showCreateEventComponent: function showCreateEventComponent() {
      if (this.createEventComponent == false) {
        this.form.reset();
        this.createEventComponent = true;
        this.clubMembers = false;
        this.participate = false;
        this.addClubInfoComponent = false;
        this.discussion = false;
      } else if (this.createEventComponent == true) {
        this.clubMembers = false;
        this.participate = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = true;
      }
    },
    showClubMembers: function showClubMembers() {
      if (this.clubMembers == false) {
        this.clubMembers = true;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = false;
      } else if (this.clubMembers == true) {
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = true;
      }
    }
  }, "ourImage", function ourImage(img) {
    return "/images/" + img;
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/create_event.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'create_event',
  data: function data() {
    return {
      form: new Form({
        author_id: "",
        club_id: "",
        photo: "",
        name: "",
        location: "",
        frequency: "Occurs Once",
        starting_date: "",
        starting_time: "",
        ending_date: "",
        ending_time: "",
        category: "Select Category",
        description: "",
        ticket_url: "www.ticket.com",
        sponsor: "",
        guest: "",
        status: "0"
      })
    };
  },
  mounted: function mounted() {
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getAuthorAction"); // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
    // this.gettest()
  },
  computed: {
    getDatas: function getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests: function getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getAuthors: function getAuthors() {
      return this.$store.getters.getAuthor;
    }
  },
  methods: {
    add_event: function add_event(getDatas, getAuthors) {
      var _this = this;

      //   console.log(getDatas.users.id);
      getAuthors.authors.forEach(function (el) {
        if (getDatas.users.id == el.author.id) {
          _this.form.author_id = el.author.id;
        }
      });
      this.form.club_id = this.$route.params.cl_id;
      this.form.post('/create-event').then(function (response) {
        _this.form = [], Toast.fire({
          icon: "success",
          title: 'Event created successfull.'
        });
      });
    },
    // updatePhoto(){
    //     if(this.form.photo == ''){
    //         let img = this.form.photo
    //         if (img) {
    //             return this.form.photo
    //         }else{
    //             return "/images/"+this.form.photo
    //         }
    //     }else{
    //         let img = this.form.photo
    //         if (img.length>100) {
    //             return this.form.photo
    //         }else{
    //             return "/images/"+this.form.photo
    //         }
    //     }
    // },
    changePhoto: function changePhoto(event) {
      var _this2 = this;

      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (event) {
        _this2.form.photo = event.target.result;
      };

      reader.readAsDataURL(file);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.badge-skip{\n    float: right;\n    margin-top: 5px;\n}\n.img-thumbnail{\n    width: 594px !important;\n    height: 200px !important;\n    background-color: #777;\n}\n.cover-size{\n    margin-left: 95px;\n    position: absolute;\n    margin-top: -110px;\n    font-size: 36px;\n    color: #ddd;\n    opacity: .08;\n}\n.cover-img-input{\n    width: 92px;\n    display: inline-flex !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/club.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.follow-user div div {\n  margin-left: 45px !important;\n  position: relative !important;\n}\n.club-event-edit {\n  margin-left: 6px;\n  color: #ec6d6d;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/create_event.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.badge-skip{\n    float: right;\n    margin-top: 5px;\n}\n.img-thumbnail{\n    width: 594px !important;\n    height: 200px !important;\n    background-color: #777;\n}\n.cover-size{\n    margin-left: 95px;\n    position: absolute;\n    margin-top: -110px;\n    font-size: 36px;\n    color: #ddd;\n    opacity: .08;\n}\n.cover-img-input{\n    width: 92px;\n    display: inline-flex !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./add_club_info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/club.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./club.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/create_event.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./create_event.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=template&id=8ddec32a&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/add_club_info.vue?vue&type=template&id=8ddec32a& ***!
  \*****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "edit-profile-container" }, [
    _c("div", { staticClass: "block-title" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "pull-right btn btn-primary",
          staticStyle: { "margin-top": "-40px" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.addAuthor()
            }
          }
        },
        [_vm._v("Add Author")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "line" }),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "If you are changes this, your group cover photo will be change and everybody can see that changes."
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.add_author,
            expression: "add_author"
          }
        ],
        staticClass: "edit-block"
      },
      [
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.searchBar,
                  expression: "searchBar"
                }
              ],
              staticClass: "navbar-form navbar-right hidden-sm",
              staticStyle: { width: "100%" }
            },
            [
              _c("label", { attrs: { for: "country" } }, [
                _vm._v("Select Author")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "form-group", staticStyle: { width: "100%" } },
                [
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
                          position: "absolute",
                          "z-index": "9999",
                          "margin-left": "88%",
                          "margin-top": "15px"
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
                      position: "relative",
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
                      value: _vm.getSesrchValue,
                      expression: "getSesrchValue"
                    }
                  ],
                  staticClass: "option search-result",
                  staticStyle: {
                    width: "95% !important",
                    "overflow-y": "scroll",
                    "margin-top": "-15px",
                    height: "200px"
                  }
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
                          _c("div", [
                            val
                              ? _c(
                                  "a",
                                  {
                                    staticStyle: {
                                      color: "#000",
                                      "font-size": "13px !important"
                                    },
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.getVal(val)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\n                                " +
                                        _vm._s(val.first_name) +
                                        " " +
                                        _vm._s(val.last_name) +
                                        "\n                            "
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
                          ])
                        ],
                        2
                      )
                    }),
                    0
                  )
                ]
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
                  value: !_vm.searchBar,
                  expression: "!searchBar"
                }
              ]
            },
            [
              _c("div", { staticClass: "form-group col-xs-6" }, [
                _c("label", { attrs: { for: "country" } }, [
                  _vm._v("Authority")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-danger badge-skip" }, [
                  _vm._v("skip")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.author.author_name,
                      expression: "author.author_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text" },
                  domProps: { value: _vm.author.author_name },
                  on: {
                    keydown: function($event) {
                      return _vm.blankInpt()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.author, "author_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.author.author_id,
                      expression: "author.author_id"
                    }
                  ],
                  staticClass: "form-control",
                  staticStyle: { display: "none" },
                  attrs: { type: "text" },
                  domProps: { value: _vm.author.author_id },
                  on: {
                    keydown: function($event) {
                      return _vm.blankInpt()
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.author, "author_id", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-xs-6" }, [
                _c("label", { attrs: { for: "country" } }, [
                  _vm._v("Designation")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "badge badge-danger badge-skip" }, [
                  _vm._v("skip")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.author.designation,
                        expression: "author.designation"
                      }
                    ],
                    staticClass: "form-control",
                    class: { "is-invalid": _vm.form.errors.has("designation") },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.author,
                          "designation",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "Moderator" } }, [
                      _vm._v("Moderator")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "President" } }, [
                      _vm._v("President")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Secretary" } }, [
                      _vm._v("Secretary")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "Admin" } }, [
                      _vm._v("Admin")
                    ])
                  ]
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
                      return _vm.add()
                    }
                  }
                },
                [_vm._v("Submit")]
              )
            ]
          )
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
            value: !_vm.add_author,
            expression: "!add_author"
          }
        ],
        staticClass: "edit-block"
      },
      [
        _c("img", {
          staticClass: "img-thumbnail",
          attrs: { src: _vm.updateCover() }
        }),
        _vm._v(" "),
        _c("p", { staticClass: "cover-size" }, [
          _vm._v("Cover photo size 820 x 312")
        ]),
        _vm._v(" "),
        _c("form", [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-12" }, [
              _c(
                "label",
                { staticClass: "custom-file-label", attrs: { for: "image" } },
                [_vm._v("Input File")]
              ),
              _vm._v(" "),
              _c("input", {
                staticClass: "cover-img-input",
                attrs: { type: "file", name: "cover" },
                on: {
                  change: function($event) {
                    return _vm.changePhoto($event)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "form-group col-xs-6" },
              [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Club Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.club_name,
                      expression: "form.club_name"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("club_name") },
                  attrs: {
                    type: "text",
                    name: "club_name",
                    placeholder: "club name"
                  },
                  domProps: { value: _vm.form.club_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "club_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "club_name" }
                })
              ],
              1
            ),
            _vm._v(" "),
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
                      value: _vm.form.dept,
                      expression: "form.dept"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("dept") },
                  attrs: {
                    type: "text",
                    name: "dept",
                    title: "Department",
                    placeholder: "department"
                  },
                  domProps: { value: _vm.form.dept },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "dept", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", { attrs: { form: _vm.form, field: "dept" } })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-12" }, [
              _c("label", { attrs: { for: "my-info" } }, [
                _vm._v("Club About")
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "badge badge-danger",
                  staticStyle: { float: "right", "margin-top": "5px" }
                },
                [_vm._v("skip")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.about,
                    expression: "form.about"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "about",
                  placeholder: "Some texts club about...",
                  rows: "4",
                  cols: "400"
                },
                domProps: { value: _vm.form.about },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "about", $event.target.value)
                  }
                }
              })
            ])
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
            [_vm._v("Submit")]
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
    return _c("h4", { staticClass: "grey" }, [
      _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
      _vm._v("Add Club Information")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=template&id=48b4f734&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/club.vue?vue&type=template&id=48b4f734& ***!
  \********************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "timeline-cover" }, [
                _c("img", {
                  staticClass: "timeline-nav-bar",
                  attrs: { src: _vm.ourImage(_vm.clubData.cover) }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "timeline-nav-bar hidden-sm hidden-xs" },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-12" }, [
                        _c(
                          "ul",
                          { staticClass: "list-inline profile-menu" },
                          [
                            _c(
                              "li",
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticStyle: { "font-size": "22px" },
                                    attrs: {
                                      to: {
                                        name: "club",
                                        params: {
                                          name: _vm.clubData.club_name
                                        }
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.clubData.club_name))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.clId, function(t) {
                              return _c("div", { key: t.id }, [
                                t.status == 0 &&
                                t.user_id == _vm.getDatas.users.id &&
                                t.club_id == _vm.$route.params.cl_id &&
                                _vm.visiblePending(t)
                                  ? _c("span", {
                                      staticClass: "badge badge-success",
                                      staticStyle: { "margin-top": "-20px" }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                t.status == 1 &&
                                t.user_id == _vm.getDatas.users.id &&
                                t.club_id == _vm.$route.params.cl_id &&
                                _vm.disableJoin(t)
                                  ? _c("span", {
                                      staticClass: "badge badge-success",
                                      staticStyle: { "margin-top": "-20px" }
                                    })
                                  : _vm._e()
                              ])
                            })
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "ul",
                          {
                            staticClass: "follow-me list-inline",
                            staticStyle: {
                              display: "inline-flex",
                              "margin-top": "8px"
                            }
                          },
                          [
                            _vm.countMember
                              ? _c("li", [
                                  _vm._v(_vm._s(_vm.countMember) + " Member's")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("li", [
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.showPending && !_vm.joined,
                                      expression: "showPending && !joined"
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
                                      value: !_vm.join && _vm.joined,
                                      expression: "!join && joined"
                                    }
                                  ],
                                  staticClass: "badge badge-success",
                                  staticStyle: {
                                    "background-color": "#5cb85c !important"
                                  }
                                },
                                [_vm._v("Joined")]
                              ),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.join,
                                      expression: "join"
                                    }
                                  ],
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.addMember(_vm.clubData)
                                    }
                                  }
                                },
                                [_vm._m(0)]
                              )
                            ])
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-3 static" }, [
                _c(
                  "div",
                  {
                    staticClass: "suggestions",
                    attrs: { id: "sticky-sidebar" }
                  },
                  [
                    _c("ul", { staticClass: "nav-news-feed" }, [
                      _c("li", [
                        _c("i", { staticClass: "icon ion-ios-paper" }),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.showDiscussion($event)
                                }
                              }
                            },
                            [_vm._v("Discussion")]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showLink,
                              expression: "showLink"
                            }
                          ]
                        },
                        [
                          _c("i", { staticClass: "icon ion-ios-paper" }),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showUpdateClub()
                                  }
                                }
                              },
                              [_vm._v("Update Club Information")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showLink,
                              expression: "showLink"
                            }
                          ]
                        },
                        [
                          _c("i", { staticClass: "icon ion-ios-people" }),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showClubMembers()
                                  }
                                }
                              },
                              [_vm._v("All Members")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showLink,
                              expression: "showLink"
                            }
                          ]
                        },
                        [
                          _c("i", { staticClass: "fa fa-list-alt" }),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showParticipants()
                                  }
                                }
                              },
                              [
                                _vm._v("Participants Request "),
                                _c(
                                  "span",
                                  { staticClass: "badge badge-danger" },
                                  [_vm._v(_vm._s(_vm.getSkills.count_skill))]
                                )
                              ]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "li",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.showLink,
                              expression: "showLink"
                            }
                          ]
                        },
                        [
                          _c("i", { staticClass: "icon ion-edit" }),
                          _vm._v(" "),
                          _c("div", [
                            _c(
                              "a",
                              {
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.showCreateEventComponent()
                                  }
                                }
                              },
                              [_vm._v("Create Event")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c("li", [
                        _c("i", { staticClass: "icon ion-album" }),
                        _vm._v(" "),
                        _c("div", [
                          _c(
                            "a",
                            {
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
                        ])
                      ])
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _vm._l(_vm.getDatas.avatars, function(data) {
                return _c(
                  "div",
                  { key: data.id, staticClass: "col-md-7 tab-content" },
                  [
                    _c("add-club-info-component", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.addClubInfoComponent,
                          expression: "addClubInfoComponent"
                        }
                      ]
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.createEventComponent,
                            expression: "createEventComponent"
                          }
                        ],
                        staticClass: "edit-profile-container"
                      },
                      [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _c("div", { staticClass: "edit-block" }, [
                          _c("img", {
                            staticClass: "img-thumbnail",
                            attrs: {
                              src: _vm.editMode
                                ? _vm.updatePhoto()
                                : _vm.form.photo
                            }
                          }),
                          _vm._v(" "),
                          _c("p", { staticClass: "cover-size" }, [
                            _vm._v("Cover photo size 820 x 312")
                          ]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  _vm.editMode
                                    ? _vm.updateEvent()
                                    : _vm.add_event(
                                        _vm.getDatas,
                                        _vm.getAuthors
                                      )
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-12" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "custom-file-label",
                                        attrs: { for: "image" }
                                      },
                                      [_vm._v("Input File")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      staticClass: "cover-img-input",
                                      attrs: { type: "file", name: "photo" },
                                      on: {
                                        change: function($event) {
                                          return _vm.changePhoto($event)
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-12" },
                                  [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Event Name")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.name,
                                          expression: "form.name"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "name"
                                        )
                                      },
                                      attrs: {
                                        type: "text",
                                        name: "name",
                                        placeholder:
                                          "event name,short,unique,meaningfull"
                                      },
                                      domProps: { value: _vm.form.name },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "name",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: { form: _vm.form, field: "name" }
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
                                    _c(
                                      "label",
                                      { attrs: { for: "loacation" } },
                                      [_vm._v("Loacation")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.location,
                                          expression: "form.location"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "location"
                                        )
                                      },
                                      attrs: {
                                        type: "text",
                                        name: "location",
                                        title: "Location",
                                        placeholder: "event location"
                                      },
                                      domProps: { value: _vm.form.location },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "location",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "location"
                                      }
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
                                    _c(
                                      "label",
                                      { attrs: { for: "frequency" } },
                                      [_vm._v("Frequency")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.frequency,
                                            expression: "form.frequency"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "frequency"
                                          )
                                        },
                                        attrs: { name: "frequency" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "frequency",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              selected: "",
                                              value: "Occurs Once"
                                            }
                                          },
                                          [_vm._v("Occurs Once")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Daily" } },
                                          [_vm._v("Daily")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Weekly" } },
                                          [_vm._v("Weekly")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "Monthly" } },
                                          [_vm._v("Monthly")]
                                        )
                                      ]
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
                                    _c(
                                      "label",
                                      { attrs: { for: "birth_date" } },
                                      [_vm._v("Starting Date")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.starting_date,
                                          expression: "form.starting_date"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "starting_date"
                                        )
                                      },
                                      attrs: {
                                        type: "date",
                                        name: "starting_date"
                                      },
                                      domProps: {
                                        value: _vm.form.starting_date
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "starting_date",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "starting_date"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-6" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "birth_date" } },
                                      [_vm._v("Starting time")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.starting_time,
                                          expression: "form.starting_time"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "starting_time"
                                        )
                                      },
                                      attrs: {
                                        type: "time",
                                        name: "starting_date"
                                      },
                                      domProps: {
                                        value: _vm.form.starting_time
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "starting_time",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "starting_time"
                                      }
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
                                    _c(
                                      "label",
                                      { attrs: { for: "birth_date" } },
                                      [_vm._v("Ending Date")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.ending_date,
                                          expression: "form.ending_date"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "ending_date"
                                        )
                                      },
                                      attrs: {
                                        type: "date",
                                        name: "ending_date"
                                      },
                                      domProps: { value: _vm.form.ending_date },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "ending_date",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "ending_date"
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-6" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "birth_date" } },
                                      [_vm._v("Ending Time")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.ending_time,
                                          expression: "form.ending_time"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "ending_time"
                                        )
                                      },
                                      attrs: {
                                        type: "time",
                                        name: "ending_time"
                                      },
                                      domProps: { value: _vm.form.ending_time },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "ending_time",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "ending_time"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm._m(2, true),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-4" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "category" } },
                                      [_vm._v("Category")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.category,
                                            expression: "form.category"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "category"
                                          )
                                        },
                                        attrs: { name: "category" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "category",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: {
                                              selected: "",
                                              value: "Select Category"
                                            }
                                          },
                                          [_vm._v("Select Category")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "programing" } },
                                          [_vm._v("Programing")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          {
                                            attrs: { value: "skil development" }
                                          },
                                          [_vm._v("Skill Development")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-12" },
                                  [
                                    _c("label", { attrs: { for: "my-info" } }, [
                                      _vm._v("Description")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-danger",
                                        staticStyle: {
                                          float: "right",
                                          "margin-top": "5px"
                                        }
                                      },
                                      [_vm._v("skip")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.description,
                                          expression: "form.description"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "description",
                                        placeholder: "event description...",
                                        rows: "4",
                                        cols: "400"
                                      },
                                      domProps: { value: _vm.form.description },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "description",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm._m(3, true),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-12" },
                                  [
                                    _c("label", { attrs: { for: "name" } }, [
                                      _vm._v("Ticket")
                                    ]),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.ticket_url,
                                          expression: "form.ticket_url"
                                        }
                                      ],
                                      staticClass:
                                        "form-control input-group-lg",
                                      class: {
                                        "is-invalid": _vm.form.errors.has(
                                          "ticket_url"
                                        )
                                      },
                                      attrs: {
                                        readonly: "",
                                        type: "text",
                                        name: "ticket",
                                        placeholder: "www.ticket.com"
                                      },
                                      domProps: { value: _vm.form.ticket_url },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "ticket_url",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("has-error", {
                                      attrs: {
                                        form: _vm.form,
                                        field: "ticket_url"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _vm._m(4, true),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-12" },
                                  [
                                    _c("label", { attrs: { for: "my-info" } }, [
                                      _vm._v("Sponsor")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-danger",
                                        staticStyle: {
                                          float: "right",
                                          "margin-top": "5px"
                                        }
                                      },
                                      [_vm._v("skip")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.sponsor,
                                          expression: "form.sponsor"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "sponsor",
                                        placeholder: "event sponsor...",
                                        rows: "4",
                                        cols: "400"
                                      },
                                      domProps: { value: _vm.form.sponsor },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "sponsor",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-12" },
                                  [
                                    _c("label", { attrs: { for: "my-info" } }, [
                                      _vm._v("Guest")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        staticClass: "badge badge-danger",
                                        staticStyle: {
                                          float: "right",
                                          "margin-top": "5px"
                                        }
                                      },
                                      [_vm._v("skip")]
                                    ),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.form.guest,
                                          expression: "form.guest"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "guest",
                                        placeholder: "event guest...",
                                        rows: "4",
                                        cols: "400"
                                      },
                                      domProps: { value: _vm.form.guest },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.form,
                                            "guest",
                                            $event.target.value
                                          )
                                        }
                                      }
                                    })
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("hr"),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-xs-2" },
                                  [
                                    _c("label", { attrs: { for: "status" } }, [
                                      _vm._v("Publish")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: _vm.form.status,
                                            expression: "form.status"
                                          }
                                        ],
                                        staticClass: "form-control",
                                        class: {
                                          "is-invalid": _vm.form.errors.has(
                                            "status"
                                          )
                                        },
                                        attrs: { name: "status" },
                                        on: {
                                          change: function($event) {
                                            var $$selectedVal = Array.prototype.filter
                                              .call(
                                                $event.target.options,
                                                function(o) {
                                                  return o.selected
                                                }
                                              )
                                              .map(function(o) {
                                                var val =
                                                  "_value" in o
                                                    ? o._value
                                                    : o.value
                                                return val
                                              })
                                            _vm.$set(
                                              _vm.form,
                                              "status",
                                              $event.target.multiple
                                                ? $$selectedVal
                                                : $$selectedVal[0]
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "option",
                                          {
                                            attrs: { selected: "", value: "0" }
                                          },
                                          [_vm._v("Public")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "option",
                                          { attrs: { value: "1" } },
                                          [_vm._v("Private")]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.editMode,
                                      expression: "!editMode"
                                    }
                                  ],
                                  staticClass: "btn btn-primary",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Submit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.editMode,
                                      expression: "editMode"
                                    }
                                  ],
                                  staticClass: "btn btn-success",
                                  attrs: { type: "submit" }
                                },
                                [_vm._v("Update")]
                              )
                            ]
                          )
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
                            value: _vm.clubMembers,
                            expression: "clubMembers"
                          }
                        ]
                      },
                      [
                        _c("div", { staticClass: "people-nearby" }, [
                          _c(
                            "div",
                            { staticClass: "nearby-user" },
                            _vm._l(_vm.getClubMembers.all_members, function(
                              member
                            ) {
                              return _c(
                                "div",
                                {
                                  key: member.id,
                                  staticClass: "row",
                                  staticStyle: { "padding-left": "100px" }
                                },
                                [
                                  member.club_id == _vm.$route.params.cl_id &&
                                  member.status == 1
                                    ? _c(
                                        "div",
                                        [
                                          _vm._l(member.user.avatar, function(
                                            member_avatar
                                          ) {
                                            return _c(
                                              "div",
                                              {
                                                key: member_avatar.id,
                                                staticClass:
                                                  "col-md-2 col-sm-2",
                                                staticStyle: { width: "55px" }
                                              },
                                              [
                                                member_avatar.avatar
                                                  ? _c("img", {
                                                      staticClass:
                                                        "profile-photo-md",
                                                      attrs: {
                                                        src: _vm.ourImage(
                                                          member_avatar.avatar
                                                        ),
                                                        alt: "user"
                                                      }
                                                    })
                                                  : _vm._e()
                                              ]
                                            )
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-md-6 col-sm-7"
                                            },
                                            [
                                              _c(
                                                "h5",
                                                [
                                                  member.user.first_name
                                                    ? _c(
                                                        "router-link",
                                                        {
                                                          staticClass:
                                                            "profile-link",
                                                          attrs: {
                                                            to: {
                                                              name: "timeline",
                                                              params: {
                                                                name:
                                                                  member.user
                                                                    .first_name
                                                              }
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            _vm._s(
                                                              member.user
                                                                .first_name
                                                            )
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "h6",
                                                { staticClass: "text-green" },
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            {
                                              staticClass: "col-md-4 col-sm-3"
                                            },
                                            [
                                              _c(
                                                "form",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.memberReject(
                                                        member
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-primary",
                                                      staticStyle: {
                                                        "margin-top": "12px"
                                                      },
                                                      attrs: {
                                                        type: "submit",
                                                        href: "#"
                                                      }
                                                    },
                                                    [_vm._v("Block")]
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ],
                                        2
                                      )
                                    : _vm._e()
                                ]
                              )
                            }),
                            0
                          )
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
                            value: _vm.userSkill,
                            expression: "userSkill"
                          }
                        ]
                      },
                      [
                        _c("h4", { staticStyle: { color: "#000" } }, [
                          _vm._v("Images")
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticStyle: { "margin-top": "5px" } }),
                        _vm._v(" "),
                        _c("ul", { staticClass: "album-photos" }, [
                          _c("li", [
                            _c(
                              "div",
                              {
                                staticClass: "img-wrapper",
                                attrs: {
                                  "data-toggle": "modal",
                                  "data-target": "#photo"
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    src: _vm.ourImage(_vm.userSkillData.image1),
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
                                  "margin-top": "61px",
                                  display: "none",
                                  opacity: "1"
                                },
                                attrs: {
                                  id: "photo",
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
                                      { staticClass: "modal-content" },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "modal-body",
                                            staticStyle: {
                                              "margin-top": "70px"
                                            }
                                          },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: _vm.ourImage(
                                                  _vm.userSkillData.image1
                                                ),
                                                alt: "photo"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  ]
                                )
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticStyle: { "margin-bottom": "5px" } }),
                        _vm._v(" "),
                        _c("h4", { staticStyle: { color: "#000" } }, [
                          _vm._v("Videos")
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticStyle: { "margin-top": "5px" } }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "tab-pane", attrs: { id: "videos" } },
                          [
                            _c("div", { staticClass: "media" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "row js-masonry",
                                  attrs: {
                                    "data-masonry":
                                      '{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "grid-item col-md-6 col-sm-6"
                                    },
                                    [
                                      _c("div", { staticClass: "media-grid" }, [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "img-wrapper",
                                            attrs: {
                                              "data-toggle": "modal",
                                              "data-target": ".modal-1"
                                            }
                                          },
                                          [
                                            _c(
                                              "video",
                                              { attrs: { controls: "" } },
                                              [
                                                _c("source", {
                                                  attrs: {
                                                    src: _vm.ourImage(
                                                      _vm.userSkillData.video
                                                    ),
                                                    type: "video/mp4"
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
                                            staticClass: "modal fade modal-1",
                                            staticStyle: {
                                              "margin-top": "61px",
                                              display: "none",
                                              opacity: "1"
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
                                              {
                                                staticClass:
                                                  "modal-dialog modal-lg"
                                              },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "modal-content"
                                                  },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "post-content"
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "video-wrapper"
                                                          },
                                                          [
                                                            _c(
                                                              "video",
                                                              {
                                                                attrs: {
                                                                  controls: ""
                                                                }
                                                              },
                                                              [
                                                                _c("source", {
                                                                  attrs: {
                                                                    src: _vm.ourImage(
                                                                      _vm
                                                                        .userSkillData
                                                                        .video
                                                                    ),
                                                                    type:
                                                                      "video/mp4"
                                                                  }
                                                                })
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      ]
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
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c("hr")
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
                            value: _vm.participate,
                            expression: "participate"
                          }
                        ]
                      },
                      [
                        _c("div", { staticClass: "people-nearby" }, [
                          _c("div", { staticClass: "nearby-user" }, [
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c(
                                  "h4",
                                  {
                                    staticStyle: {
                                      color: "#000",
                                      "font-weight": "700",
                                      margin: "0px"
                                    }
                                  },
                                  [_vm._v("Member Request")]
                                ),
                                _vm._v(" "),
                                _c("hr", {
                                  staticStyle: {
                                    "margin-top": "10px",
                                    "margin-bottom": "10px"
                                  }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.getSkills.skill, function(
                                  participate
                                ) {
                                  return _c(
                                    "div",
                                    { key: participate.id, staticClass: "row" },
                                    [
                                      participate.status == 0 &&
                                      participate.club_id ==
                                        _vm.$route.params.cl_id
                                        ? _c(
                                            "div",
                                            [
                                              _vm._l(
                                                participate.user.avatar,
                                                function(candidate_avatar) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: candidate_avatar.id,
                                                      staticClass:
                                                        "col-md-2 col-sm-2",
                                                      staticStyle: {
                                                        width: "55px"
                                                      }
                                                    },
                                                    [
                                                      candidate_avatar.avatar
                                                        ? _c("img", {
                                                            staticClass:
                                                              "profile-photo-md",
                                                            attrs: {
                                                              src: _vm.ourImage(
                                                                candidate_avatar.avatar
                                                              ),
                                                              alt: "user"
                                                            }
                                                          })
                                                        : _vm._e()
                                                    ]
                                                  )
                                                }
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-md-6 col-sm-7"
                                                },
                                                [
                                                  _c(
                                                    "h5",
                                                    [
                                                      participate.user
                                                        ? _c(
                                                            "router-link",
                                                            {
                                                              staticClass:
                                                                "profile-link",
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "timeline",
                                                                  params: {
                                                                    name:
                                                                      participate
                                                                        .user
                                                                        .first_name
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                      " +
                                                                  _vm._s(
                                                                    participate
                                                                      .user
                                                                      .first_name
                                                                  ) +
                                                                  "\n                                  "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h6",
                                                    {
                                                      staticClass: "text-green"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          participate.user
                                                            .department
                                                        ) +
                                                          "-" +
                                                          _vm._s(
                                                            participate.user
                                                              .batch
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-md-4 col-sm-3",
                                                  staticStyle: {
                                                    display: "inline-flex",
                                                    "margin-left": "30px"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "badge badge-info",
                                                      staticStyle: {
                                                        "margin-top":
                                                          "12px !important",
                                                        "background-color":
                                                          "#5bc0de !important",
                                                        "padding-right":
                                                          "10px !important",
                                                        "margin-left":
                                                          "-35px !important",
                                                        "margin-right":
                                                          "5px !important",
                                                        "padding-bottom":
                                                          "0 !important"
                                                      },
                                                      attrs: {
                                                        title: "view data",
                                                        type: "submit",
                                                        href: "#"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.showUserSkill(
                                                            participate
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "icon icon ion-ios-eye",
                                                        staticStyle: {
                                                          "font-size": "30px",
                                                          "margin-left": "4px"
                                                        }
                                                      })
                                                    ]
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "form",
                                                    {
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.approveMember(
                                                            participate
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-primary",
                                                          staticStyle: {
                                                            "margin-top":
                                                              "12px",
                                                            "margin-right":
                                                              "5px",
                                                            "padding-left":
                                                              "10px !important",
                                                            "padding-right":
                                                              "10px !important",
                                                            "border-radius":
                                                              "5px !important"
                                                          },
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
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.memberBlock(
                                                            participate
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "a",
                                                        {
                                                          staticClass:
                                                            "btn btn-danger",
                                                          staticStyle: {
                                                            "margin-top": "12px"
                                                          },
                                                          attrs: {
                                                            type: "submit",
                                                            href: "#"
                                                          }
                                                        },
                                                        [_vm._v("Reject")]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            2
                                          )
                                        : _vm._e()
                                    ]
                                  )
                                })
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "row" },
                              [
                                _c("hr", {
                                  staticStyle: {
                                    "margin-top": "5px",
                                    "margin-bottom": "5px"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "h4",
                                  {
                                    staticStyle: {
                                      color: "#000",
                                      "font-weight": "700",
                                      margin: "0px"
                                    }
                                  },
                                  [_vm._v("Selected Member")]
                                ),
                                _vm._v(" "),
                                _c("hr", {
                                  staticStyle: {
                                    "margin-top": "5px",
                                    "margin-bottom": "5px"
                                  }
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.getSkills.skill, function(selected) {
                                  return _c(
                                    "div",
                                    { key: selected.id, staticClass: "row" },
                                    [
                                      selected.status == 1 &&
                                      selected.club_id ==
                                        _vm.$route.params.cl_id
                                        ? _c(
                                            "div",
                                            [
                                              _vm._l(
                                                selected.user.avatar,
                                                function(selected_avatar) {
                                                  return _c(
                                                    "div",
                                                    {
                                                      key: selected_avatar.id,
                                                      staticClass:
                                                        "col-md-2 col-sm-2",
                                                      staticStyle: {
                                                        width: "55px"
                                                      }
                                                    },
                                                    [
                                                      selected_avatar.avatar
                                                        ? _c("img", {
                                                            staticClass:
                                                              "profile-photo-md",
                                                            attrs: {
                                                              src: _vm.ourImage(
                                                                selected_avatar.avatar
                                                              ),
                                                              alt: "user"
                                                            }
                                                          })
                                                        : _vm._e()
                                                    ]
                                                  )
                                                }
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-md-6 col-sm-7"
                                                },
                                                [
                                                  _c(
                                                    "h5",
                                                    [
                                                      selected.user
                                                        ? _c(
                                                            "router-link",
                                                            {
                                                              staticClass:
                                                                "profile-link",
                                                              attrs: {
                                                                to: {
                                                                  name:
                                                                    "timeline",
                                                                  params: {
                                                                    name:
                                                                      selected
                                                                        .user
                                                                        .first_name
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  selected.user
                                                                    .first_name
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "h6",
                                                    {
                                                      staticClass: "text-green"
                                                    },
                                                    [
                                                      _vm._v(
                                                        _vm._s(
                                                          selected.user
                                                            .department
                                                        ) +
                                                          "-" +
                                                          _vm._s(
                                                            selected.user.batch
                                                          )
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "col-md-4 col-sm-3"
                                                },
                                                [
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "badge badge-danger",
                                                      staticStyle: {
                                                        "margin-top": "12px",
                                                        "background-color":
                                                          "#2FAAE1"
                                                      },
                                                      attrs: {
                                                        title: "view data",
                                                        type: "submit",
                                                        href: "#"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.showSelectedUserSkill(
                                                            selected
                                                          )
                                                        }
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
                                                  ),
                                                  _vm._v(" "),
                                                  _c(
                                                    "a",
                                                    {
                                                      staticClass:
                                                        "btn btn-success",
                                                      staticStyle: {
                                                        "margin-top": "12px"
                                                      },
                                                      attrs: { type: "submit" }
                                                    },
                                                    [_vm._v("Approved")]
                                                  )
                                                ]
                                              )
                                            ],
                                            2
                                          )
                                        : _vm._e()
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
                            value: _vm.discussion,
                            expression: "discussion"
                          }
                        ]
                      },
                      [
                        _c(
                          "div",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.showLink,
                                expression: "showLink"
                              }
                            ],
                            staticClass: "create-post"
                          },
                          [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.showPost,
                                      expression: "!showPost"
                                    }
                                  ],
                                  staticClass: "col-md-7 col-sm-7",
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.showContent($event)
                                    }
                                  }
                                },
                                [
                                  _c("div", { staticClass: "form-group" }, [
                                    data.avatar
                                      ? _c("img", {
                                          staticClass: "profile-photo-md",
                                          attrs: {
                                            src: _vm.ourImage(data.avatar)
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c("textarea", {
                                      staticClass: "form-control",
                                      attrs: {
                                        name: "texts",
                                        cols: "30",
                                        rows: "1",
                                        placeholder: "Write what you wish"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.showContent()
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
                                      value: !_vm.showPost,
                                      expression: "!showPost"
                                    }
                                  ],
                                  staticClass: "col-md-5 col-sm-5"
                                },
                                [
                                  _c("div", { staticClass: "tools" }, [
                                    _c(
                                      "ul",
                                      {
                                        staticClass:
                                          "publishing-tools list-inline"
                                      },
                                      [
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.showContent()
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "ion-images"
                                              })
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("li", [
                                          _c(
                                            "a",
                                            {
                                              attrs: { href: "#" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  return _vm.showContent()
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "ion-ios-videocam"
                                              })
                                            ]
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary pull-right",
                                        attrs: { type: "submit" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            return _vm.showContent()
                                          }
                                        }
                                      },
                                      [_vm._v("Publish")]
                                    )
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  attrs: { enctype: "multipart/form-data" },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.uploadPost($event)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.showPost,
                                          expression: "showPost"
                                        }
                                      ],
                                      staticClass: "col-md-12 col-sm-12"
                                    },
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
                                              return _vm.hideContent($event)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "span",
                                            {
                                              attrs: { "aria-hidden": "true" }
                                            },
                                            [_vm._v("×")]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group",
                                          staticStyle: {
                                            width: "100%",
                                            height: "100px"
                                          }
                                        },
                                        [
                                          _c("textarea", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.clubPost.text,
                                                expression: "clubPost.text"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "texts",
                                              id: "exampleTextarea",
                                              cols: "30",
                                              rows: "1",
                                              placeholder: "Write what you wish"
                                            },
                                            domProps: {
                                              value: _vm.clubPost.text
                                            },
                                            on: {
                                              keypress: function($event) {
                                                return _vm.showBtn()
                                              },
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  _vm.clubPost,
                                                  "text",
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
                                          value: _vm.showPost,
                                          expression: "showPost"
                                        }
                                      ],
                                      staticClass: "col-md-12 col-sm-12"
                                    },
                                    [
                                      _c("div", { staticClass: "tools" }, [
                                        _c(
                                          "ul",
                                          {
                                            staticClass:
                                              "publishing-tools list-inline"
                                          },
                                          [
                                            _c("li", [
                                              _c(
                                                "button",
                                                {
                                                  staticClass:
                                                    "btn btn-primary",
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
                                                  staticClass:
                                                    "btn btn-primary",
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
                                            ]),
                                            _vm._v(" "),
                                            _c("li", [
                                              _c(
                                                "div",
                                                {
                                                  staticClass:
                                                    "form-row align-items-center"
                                                },
                                                [
                                                  _c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "col-auto my-1"
                                                    },
                                                    [
                                                      _c(
                                                        "label",
                                                        {
                                                          staticClass:
                                                            "mr-sm-2",
                                                          attrs: {
                                                            for:
                                                              "inlineFormCustomSelect"
                                                          }
                                                        },
                                                        [_vm._v("Publish")]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "select",
                                                        {
                                                          directives: [
                                                            {
                                                              name: "model",
                                                              rawName:
                                                                "v-model",
                                                              value:
                                                                _vm.clubPost
                                                                  .status,
                                                              expression:
                                                                "clubPost.status"
                                                            }
                                                          ],
                                                          staticClass:
                                                            "custom-select mr-sm-2",
                                                          attrs: {
                                                            id:
                                                              "inlineFormCustomSelect"
                                                          },
                                                          on: {
                                                            change: function(
                                                              $event
                                                            ) {
                                                              var $$selectedVal = Array.prototype.filter
                                                                .call(
                                                                  $event.target
                                                                    .options,
                                                                  function(o) {
                                                                    return o.selected
                                                                  }
                                                                )
                                                                .map(function(
                                                                  o
                                                                ) {
                                                                  var val =
                                                                    "_value" in
                                                                    o
                                                                      ? o._value
                                                                      : o.value
                                                                  return val
                                                                })
                                                              _vm.$set(
                                                                _vm.clubPost,
                                                                "status",
                                                                $event.target
                                                                  .multiple
                                                                  ? $$selectedVal
                                                                  : $$selectedVal[0]
                                                              )
                                                            }
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "0",
                                                                selected: ""
                                                              }
                                                            },
                                                            [_vm._v("Public")]
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "option",
                                                            {
                                                              attrs: {
                                                                value: "1"
                                                              }
                                                            },
                                                            [_vm._v("Private")]
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
                                          staticClass:
                                            "publishing-tools list-inline"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("img", {
                                                staticClass: "img-style",
                                                attrs: {
                                                  src: _vm.clubPost.image1
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "control-file",
                                                attrs: {
                                                  name: "image1",
                                                  type: "file"
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.changePhoto1(
                                                      $event
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("img", {
                                                staticClass: "img-style",
                                                attrs: {
                                                  src: _vm.clubPost.image2
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "control-file",
                                                attrs: {
                                                  name: "image2",
                                                  type: "file"
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.changePhoto2(
                                                      $event
                                                    )
                                                  }
                                                }
                                              })
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "form-group" },
                                            [
                                              _c("img", {
                                                staticClass: "img-style",
                                                attrs: {
                                                  src: _vm.clubPost.image3
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("input", {
                                                staticClass: "control-file",
                                                attrs: {
                                                  name: "image3",
                                                  type: "file"
                                                },
                                                on: {
                                                  change: function($event) {
                                                    return _vm.changePhoto3(
                                                      $event
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
                                              value: _vm.showSelectVideo,
                                              expression: "showSelectVideo"
                                            }
                                          ],
                                          staticClass: "form-group"
                                        },
                                        [
                                          _vm._m(5, true),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "video-file",
                                            attrs: {
                                              name: "video",
                                              type: "file"
                                            },
                                            on: { change: _vm.changeVideo }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      directives: [
                                        {
                                          name: "show",
                                          rawName: "v-show",
                                          value: _vm.btn,
                                          expression: "btn"
                                        }
                                      ],
                                      staticClass: "btn btn-primary post-btn",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Publish")]
                                  )
                                ]
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(_vm.getClubPosts.club_posts, function(cl_post) {
                          return _c(
                            "div",
                            { key: cl_post.id, staticClass: "post-content" },
                            [
                              cl_post.club_id == _vm.$route.params.cl_id
                                ? _c(
                                    "div",
                                    { staticClass: "post-container" },
                                    [
                                      _vm._l(cl_post.author.avatar, function(
                                        cl_aut_avtr
                                      ) {
                                        return _c("img", {
                                          key: cl_aut_avtr.id,
                                          staticClass:
                                            "profile-photo-md pull-left",
                                          attrs: {
                                            src: _vm.ourImage(
                                              cl_aut_avtr.avatar
                                            ),
                                            alt: "user"
                                          }
                                        })
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "user-info",
                                          staticStyle: {
                                            "margin-top": "-5px !important"
                                          }
                                        },
                                        [
                                          _c(
                                            "h5",
                                            [
                                              _c(
                                                "a",
                                                {
                                                  staticClass: "profile-link",
                                                  attrs: { href: "#" }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      cl_post.author.first_name
                                                    )
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _vm._l(
                                                cl_post.author.author,
                                                function(deg) {
                                                  return _c(
                                                    "div",
                                                    { key: deg.id },
                                                    [
                                                      _vm.$route.params.cl_id ==
                                                        deg.club_id &&
                                                      cl_post.author.id ==
                                                        deg.author_id &&
                                                      deg.author_id ==
                                                        _vm.getAuthUserId
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "badge badge-danger",
                                                              staticStyle: {
                                                                "font-size":
                                                                  "10px",
                                                                "margin-left":
                                                                  "0px !important",
                                                                "margin-top":
                                                                  "5px"
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                              " +
                                                                  _vm._s(
                                                                    deg.designation
                                                                  ) +
                                                                  "\n                          "
                                                              )
                                                            ]
                                                          )
                                                        : _vm._e()
                                                    ]
                                                  )
                                                }
                                              )
                                            ],
                                            2
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "text-muted" },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm._f("postTime")(
                                                    cl_post.created_at
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "post-detail" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "post-text" },
                                            [
                                              _c("p", [
                                                _vm._v(
                                                  "\n                      " +
                                                    _vm._s(cl_post.text) +
                                                    "\n                      "
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          cl_post.image1 != null &&
                                          cl_post.image2 == null &&
                                          cl_post.image3 == null
                                            ? _c("div", [
                                                _c("img", {
                                                  staticClass:
                                                    "img-responsive post-image",
                                                  attrs: {
                                                    src: _vm.ourImage(
                                                      cl_post.image1
                                                    ),
                                                    alt: "post-image"
                                                  }
                                                })
                                              ])
                                            : _c(
                                                "div",
                                                {
                                                  staticClass: "row col-md-12",
                                                  staticStyle: {
                                                    "margin-bottom":
                                                      "10px !important"
                                                  }
                                                },
                                                [
                                                  cl_post.image1
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c("img", {
                                                            staticClass:
                                                              "img-responsive post-image",
                                                            staticStyle: {
                                                              "max-height":
                                                                "155px !important"
                                                            },
                                                            attrs: {
                                                              src: _vm.ourImage(
                                                                cl_post.image1
                                                              ),
                                                              alt: "post-image"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  cl_post.image2
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6"
                                                        },
                                                        [
                                                          _c("img", {
                                                            staticClass:
                                                              "img-responsive post-image",
                                                            staticStyle: {
                                                              "max-height":
                                                                "155px !important"
                                                            },
                                                            attrs: {
                                                              src: _vm.ourImage(
                                                                cl_post.image2
                                                              ),
                                                              alt: "post-image"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  cl_post.image3
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                          staticStyle: {
                                                            "margin-top": "10px"
                                                          }
                                                        },
                                                        [
                                                          _c("img", {
                                                            staticClass:
                                                              "img-responsive post-image",
                                                            staticStyle: {
                                                              "max-height":
                                                                "155px !important"
                                                            },
                                                            attrs: {
                                                              src: _vm.ourImage(
                                                                cl_post.image3
                                                              ),
                                                              alt: "post-image"
                                                            }
                                                          })
                                                        ]
                                                      )
                                                    : _vm._e(),
                                                  _vm._v(" "),
                                                  cl_post.video
                                                    ? _c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "video-wrapper col-md-6",
                                                          staticStyle: {
                                                            "margin-top": "10px"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "video",
                                                            {
                                                              attrs: {
                                                                controls: ""
                                                              }
                                                            },
                                                            [
                                                              _c("source", {
                                                                attrs: {
                                                                  src: _vm.ourImage(
                                                                    cl_post.video
                                                                  ),
                                                                  type:
                                                                    "video/mp4"
                                                                }
                                                              })
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    : _vm._e()
                                                ]
                                              ),
                                          _vm._v(" "),
                                          _c("hr", {
                                            staticStyle: {
                                              width: "100% !important"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "reaction" },
                                            [
                                              _c(
                                                "form",
                                                {
                                                  on: {
                                                    click: function($event) {
                                                      $event.preventDefault()
                                                      return _vm.store_like(
                                                        cl_post
                                                      )
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
                                                      staticClass:
                                                        "btn text-red",
                                                      attrs: { type: "submit" }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-thumbs-up"
                                                      }),
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            cl_post
                                                              .club_post_likes
                                                              .length
                                                          ) +
                                                          "\n                        Like\n                      "
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
                                                      staticClass:
                                                        "btn text-green",
                                                      staticStyle: {
                                                        "font-weight": "700"
                                                      },
                                                      attrs: { type: "submit" }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fa fa-thumbs-up"
                                                      }),
                                                      _vm._v(
                                                        "\n                        " +
                                                          _vm._s(
                                                            cl_post
                                                              .club_post_likes
                                                              .length
                                                          ) +
                                                          "\n                        Like\n                      "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
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
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("hr", {
                                            staticStyle: {
                                              width: "100% !important"
                                            }
                                          }),
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
                                            _vm._l(
                                              _vm.getClubPostComments
                                                .club_post_comments,
                                              function(postComment) {
                                                return _c(
                                                  "div",
                                                  {
                                                    key: postComment.id,
                                                    staticClass: "post-comment"
                                                  },
                                                  [
                                                    postComment
                                                      ? _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "parent-comment"
                                                          },
                                                          [
                                                            _vm._l(
                                                              postComment
                                                                .club_author
                                                                .avatar,
                                                              function(
                                                                postCommentAvtr
                                                              ) {
                                                                return _c(
                                                                  "img",
                                                                  {
                                                                    key:
                                                                      postCommentAvtr.id,
                                                                    staticClass:
                                                                      "profile-photo-sm",
                                                                    attrs: {
                                                                      src: _vm.ourImage(
                                                                        postCommentAvtr.avatar
                                                                      ),
                                                                      alt: ""
                                                                    }
                                                                  }
                                                                )
                                                              }
                                                            ),
                                                            _vm._v(" "),
                                                            _c(
                                                              "p",
                                                              {
                                                                staticClass:
                                                                  "comment-bg"
                                                              },
                                                              [
                                                                _c(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "profile-link",
                                                                    attrs: {
                                                                      href: "#"
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      _vm._s(
                                                                        postComment
                                                                          .club_author
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
                                                                      _vm._s(
                                                                        postComment.comment
                                                                      )
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          2
                                                        )
                                                      : _vm._e(),
                                                    _vm._v(" "),
                                                    _c(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "reply-link",
                                                        attrs: { href: "#" },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.club_post_comment_reply(
                                                              data,
                                                              cl_post,
                                                              postComment
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [_vm._v("Reply")]
                                                    ),
                                                    _vm._v(" "),
                                                    _vm._l(
                                                      postComment.club_post_comment_reply,
                                                      function(
                                                        cl_post_com_rep
                                                      ) {
                                                        return _c(
                                                          "div",
                                                          {
                                                            key:
                                                              cl_post_com_rep.id,
                                                            staticClass:
                                                              "comment-reply"
                                                          },
                                                          [
                                                            cl_post_com_rep.reply
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
                                                                            "-5px"
                                                                        }
                                                                      },
                                                                      [
                                                                        cl_post_com_rep.avatar
                                                                          ? _c(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "profile-photo-sm reply-comment-profile-photo",
                                                                                attrs: {
                                                                                  src: _vm.ourImage(
                                                                                    cl_post_com_rep
                                                                                      .avatar
                                                                                      .avatar
                                                                                  ),
                                                                                  alt:
                                                                                    ""
                                                                                }
                                                                              }
                                                                            )
                                                                          : _vm._e(),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "a",
                                                                          {
                                                                            staticClass:
                                                                              "profile-link reply-comment-profile-link",
                                                                            attrs: {
                                                                              href:
                                                                                "#"
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
                                                                                cl_post_com_rep
                                                                                  .club_author
                                                                                  .first_name
                                                                              )
                                                                            )
                                                                          ]
                                                                        ),
                                                                        _vm._v(
                                                                          " "
                                                                        ),
                                                                        _c(
                                                                          "span",
                                                                          {
                                                                            staticClass:
                                                                              "reply-comment-text",
                                                                            staticStyle: {
                                                                              "margin-left":
                                                                                "1px !important",
                                                                              "margin-top":
                                                                                "-5px !important"
                                                                            }
                                                                          },
                                                                          [
                                                                            _vm._v(
                                                                              _vm._s(
                                                                                cl_post_com_rep.reply
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
                                                                    attrs: {
                                                                      href: "#"
                                                                    },
                                                                    on: {
                                                                      click: function(
                                                                        $event
                                                                      ) {
                                                                        $event.preventDefault()
                                                                        return _vm.club_post_comment_reply(
                                                                          data,
                                                                          cl_post,
                                                                          postComment
                                                                        )
                                                                      }
                                                                    }
                                                                  },
                                                                  [
                                                                    _vm._v(
                                                                      "Reply"
                                                                    )
                                                                  ]
                                                                )
                                                              ]
                                                            )
                                                          ]
                                                        )
                                                      }
                                                    )
                                                  ],
                                                  2
                                                )
                                              }
                                            ),
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
                                                        !$event.type.indexOf(
                                                          "key"
                                                        ) &&
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
                                                      return _vm.storeComment(
                                                        cl_post
                                                      )
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._l(
                                                    cl_post.author.avatar,
                                                    function(cl_aut_avtr) {
                                                      return _c("img", {
                                                        key: cl_aut_avtr.id,
                                                        staticClass:
                                                          "profile-photo-sm",
                                                        attrs: {
                                                          src: _vm.ourImage(
                                                            cl_aut_avtr.avatar
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    }
                                                  ),
                                                  _vm._v(" "),
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm.postComment
                                                            .comment,
                                                        expression:
                                                          "postComment.comment"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "form-control comment-input",
                                                    attrs: {
                                                      type: "text",
                                                      placeholder:
                                                        "Write your comment"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.postComment.comment
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.postComment,
                                                          "comment",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ],
                                                2
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
                                                        !$event.type.indexOf(
                                                          "key"
                                                        ) &&
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
                                                      return _vm.storeClubPostCommentReply()
                                                    }
                                                  }
                                                },
                                                [
                                                  _vm._l(
                                                    cl_post.author.avatar,
                                                    function(cl_aut_avtr) {
                                                      return _c("img", {
                                                        key: cl_aut_avtr.id,
                                                        staticClass:
                                                          "profile-photo-sm",
                                                        attrs: {
                                                          src: _vm.ourImage(
                                                            cl_aut_avtr.avatar
                                                          ),
                                                          alt: ""
                                                        }
                                                      })
                                                    }
                                                  ),
                                                  _vm._v(" "),
                                                  _c("textarea", {
                                                    directives: [
                                                      {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value:
                                                          _vm
                                                            .clubPostCommentReply
                                                            .reply,
                                                        expression:
                                                          "clubPostCommentReply.reply"
                                                      }
                                                    ],
                                                    staticClass:
                                                      "form-control comment-input",
                                                    attrs: {
                                                      type: "text",
                                                      placeholder:
                                                        "Write your reply"
                                                    },
                                                    domProps: {
                                                      value:
                                                        _vm.clubPostCommentReply
                                                          .reply
                                                    },
                                                    on: {
                                                      input: function($event) {
                                                        if (
                                                          $event.target
                                                            .composing
                                                        ) {
                                                          return
                                                        }
                                                        _vm.$set(
                                                          _vm.clubPostCommentReply,
                                                          "reply",
                                                          $event.target.value
                                                        )
                                                      }
                                                    }
                                                  })
                                                ],
                                                2
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ],
                                    2
                                  )
                                : _vm._e()
                            ]
                          )
                        })
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("div", [
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
                        _vm._l(_vm.getClubPosts.club_posts, function(
                          cl_post_pic
                        ) {
                          return _c("li", { key: cl_post_pic.id }, [
                            cl_post_pic.club_id == _vm.$route.params.cl_id
                              ? _c("div", [
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
                                      cl_post_pic.image1
                                        ? _c("img", {
                                            staticStyle: {
                                              width: "250px",
                                              height: "150px"
                                            },
                                            attrs: {
                                              src: _vm.ourImage(
                                                cl_post_pic.image1
                                              ),
                                              alt: "photo"
                                            }
                                          })
                                        : _vm._e()
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
                                        {
                                          staticClass: "modal-dialog modal-lg"
                                        },
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
                                              cl_post_pic.image1
                                                ? _c("img", {
                                                    attrs: {
                                                      src: _vm.ourImage(
                                                        cl_post_pic.image1
                                                      ),
                                                      alt: "photo"
                                                    }
                                                  })
                                                : _vm._e()
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
                                        "data-target": "#photo-2"
                                      }
                                    },
                                    [
                                      cl_post_pic.image2
                                        ? _c("img", {
                                            staticStyle: {
                                              width: "250px",
                                              height: "150px"
                                            },
                                            attrs: {
                                              src: _vm.ourImage(
                                                cl_post_pic.image2
                                              ),
                                              alt: "photo"
                                            }
                                          })
                                        : _vm._e()
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
                                        id: "photo-2",
                                        tabindex: "-1",
                                        role: "dialog",
                                        "aria-hidden": "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "modal-dialog modal-lg"
                                        },
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
                                              cl_post_pic.image2
                                                ? _c("img", {
                                                    attrs: {
                                                      src: _vm.ourImage(
                                                        cl_post_pic.image2
                                                      ),
                                                      alt: "photo"
                                                    }
                                                  })
                                                : _vm._e()
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
                                        "data-target": "#photo-3"
                                      }
                                    },
                                    [
                                      cl_post_pic.image3
                                        ? _c("img", {
                                            staticStyle: {
                                              width: "250px",
                                              height: "150px"
                                            },
                                            attrs: {
                                              src: _vm.ourImage(
                                                cl_post_pic.image3
                                              ),
                                              alt: "photo"
                                            }
                                          })
                                        : _vm._e()
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
                                        id: "photo-3",
                                        tabindex: "-1",
                                        role: "dialog",
                                        "aria-hidden": "true"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "modal-dialog modal-lg"
                                        },
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
                                              cl_post_pic.image3
                                                ? _c("img", {
                                                    attrs: {
                                                      src: _vm.ourImage(
                                                        cl_post_pic.image3
                                                      ),
                                                      alt: "photo"
                                                    }
                                                  })
                                                : _vm._e()
                                            ]
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
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-2 static" },
                [
                  _c("h4", { staticClass: "grey" }, [_vm._v("Club Authority")]),
                  _vm._v(" "),
                  _vm._l(_vm.getAuthors.authors, function(author) {
                    return _c(
                      "div",
                      { key: author.id, staticClass: "follow-user" },
                      [
                        author.club_id == _vm.authorData.id
                          ? _c(
                              "div",
                              {
                                staticStyle: { "margin-left": "0px !important" }
                              },
                              [
                                _vm._l(author.author.avatar, function(
                                  author_avtr
                                ) {
                                  return _c("img", {
                                    key: author_avtr.id,
                                    staticClass: "profile-photo-sm pull-left",
                                    attrs: {
                                      src: _vm.ourImage(author_avtr.avatar),
                                      alt: ""
                                    }
                                  })
                                }),
                                _vm._v(" "),
                                _c("div", [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.getAuthorId(author),
                                        expression: "getAuthorId(author)"
                                      }
                                    ],
                                    attrs: { hidden: "", type: "text" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "h5",
                                    { staticStyle: { "margin-bottom": "3px" } },
                                    [
                                      author.author.first_name
                                        ? _c(
                                            "router-link",
                                            {
                                              attrs: {
                                                title: author.author.first_name,
                                                to: {
                                                  name: "timeline",
                                                  params: {
                                                    name:
                                                      author.author.first_name
                                                  }
                                                }
                                              }
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(author.author.first_name)
                                              )
                                            ]
                                          )
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-green" }, [
                                    _vm._v(_vm._s(author.designation))
                                  ])
                                ])
                              ],
                              2
                            )
                          : _vm._e()
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "div",
                    { attrs: { id: "chat-block" } },
                    [
                      _c("div", { staticClass: "title" }, [
                        _vm._v("Running Event")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.getClubEvents.events, function(event) {
                        return _c(
                          "div",
                          { key: event.id, staticClass: "feed-item" },
                          [
                            event.club_id == _vm.$route.params.cl_id
                              ? _c(
                                  "div",
                                  {
                                    staticClass: "live-activity",
                                    staticStyle: { display: "inline-flex" }
                                  },
                                  [
                                    _c("p", { staticClass: "text-muted" }, [
                                      _c(
                                        "a",
                                        {
                                          staticClass: "profile-link",
                                          attrs: { href: "#" }
                                        },
                                        [_vm._v(_vm._s(event.name))]
                                      ),
                                      _vm._v(
                                        " event going on\n                "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    (_vm.clubAuthorId ==
                                      _vm.getDatas.users.id &&
                                      _vm.clubId == _vm.$route.params.cl_id) ||
                                    _vm.getAuthUserName == "Master"
                                      ? _c(
                                          "div",
                                          { staticClass: "club-event-edit" },
                                          [
                                            _c(
                                              "li",
                                              {
                                                staticClass: "dropdown",
                                                staticStyle: {
                                                  "margin-top": "-8px",
                                                  "list-style": "none"
                                                }
                                              },
                                              [
                                                _c(
                                                  "a",
                                                  {
                                                    staticClass:
                                                      "dropdown-toggle",
                                                    staticStyle: {
                                                      "font-size": "30px",
                                                      "text-decoration": "none"
                                                    },
                                                    attrs: {
                                                      title: "Log on-off",
                                                      href: "#",
                                                      "data-toggle": "dropdown",
                                                      role: "button",
                                                      "aria-haspopup": "true",
                                                      "aria-expanded": "false"
                                                    }
                                                  },
                                                  [_vm._v("...")]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "ul",
                                                  {
                                                    staticClass:
                                                      "dropdown-menu login",
                                                    staticStyle: {
                                                      "min-width": "90px"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "li",
                                                      {
                                                        staticStyle: {
                                                          "list-style": "none"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "#"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.edit_event(
                                                                  event
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          Edit\n                          "
                                                            ),
                                                            _c("i", {
                                                              staticClass:
                                                                "icon ion-edit pull-left",
                                                              staticStyle: {
                                                                "margin-left":
                                                                  "-15px",
                                                                "margin-right":
                                                                  "5px"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "li",
                                                      {
                                                        staticStyle: {
                                                          "list-style": "none"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href: "#"
                                                            },
                                                            on: {
                                                              click: function(
                                                                $event
                                                              ) {
                                                                $event.preventDefault()
                                                                return _vm.delete_event(
                                                                  event
                                                                )
                                                              }
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                          Delete\n                          "
                                                            ),
                                                            _c("i", {
                                                              staticClass:
                                                                "icon ion-log-out pull-left",
                                                              staticStyle: {
                                                                "margin-left":
                                                                  "-15px",
                                                                "margin-right":
                                                                  "5px"
                                                              }
                                                            })
                                                          ]
                                                        )
                                                      ]
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
                              : _vm._e()
                          ]
                        )
                      })
                    ],
                    2
                  )
                ],
                2
              )
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
    return _c("a", { attrs: { href: "#", type: "submit" } }, [
      _c(
        "span",
        {
          staticClass: "badge badge-success",
          staticStyle: { "background-color": "#d9534f !important" }
        },
        [_vm._v("Join")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Add Event Information")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [
          _vm._v(
            "If you are changes this, your group cover photo will be change and everybody can see that changes."
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Details")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [_vm._v("Let people know what type of event you are hosting...")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Tickets")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [_vm._v("Let people know where they can get tickets for your event...")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Options")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [_vm._v("Let people know your event guests and sponsors...")]
      )
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=template&id=445b7d95&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/create_event.vue?vue&type=template&id=445b7d95& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "edit-profile-container" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "edit-block" }, [
      _c("img", {
        staticClass: "img-thumbnail",
        attrs: { src: _vm.form.photo }
      }),
      _vm._v(" "),
      _c("p", { staticClass: "cover-size" }, [
        _vm._v("Cover photo size 820 x 312")
      ]),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.add_event(_vm.getDatas, _vm.getAuthors)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "form-group col-xs-12" },
              [
                _c(
                  "label",
                  { staticClass: "custom-file-label", attrs: { for: "image" } },
                  [_vm._v("Input File")]
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "cover-img-input",
                  class: { "is-invalid": _vm.form.errors.has("photo") },
                  attrs: { type: "file", name: "photo" },
                  on: {
                    change: function($event) {
                      return _vm.changePhoto($event)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", { attrs: { form: _vm.form, field: "photo" } })
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
                _c("label", { attrs: { for: "name" } }, [_vm._v("Event Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.name,
                      expression: "form.name"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("name") },
                  attrs: {
                    type: "text",
                    name: "name",
                    placeholder: "event name,short,unique,meaningfull"
                  },
                  domProps: { value: _vm.form.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", { attrs: { form: _vm.form, field: "name" } })
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
                _c("label", { attrs: { for: "loacation" } }, [
                  _vm._v("Loacation")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.location,
                      expression: "form.location"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("location") },
                  attrs: {
                    type: "text",
                    name: "location",
                    title: "Location",
                    placeholder: "event location"
                  },
                  domProps: { value: _vm.form.location },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "location", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "location" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-12" }, [
              _c("label", { attrs: { for: "frequency" } }, [
                _vm._v("Frequency")
              ]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.frequency,
                      expression: "form.frequency"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.form.errors.has("frequency") },
                  attrs: { name: "frequency" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "frequency",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "", value: "Occurs Once" } },
                    [_vm._v("Occurs Once")]
                  ),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "Daily" } }, [
                    _vm._v("Daily")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "Weekly" } }, [
                    _vm._v("Weekly")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "Monthly" } }, [
                    _vm._v("Monthly")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "form-group col-xs-6" },
              [
                _c("label", { attrs: { for: "birth_date" } }, [
                  _vm._v("Starting Date")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.starting_date,
                      expression: "form.starting_date"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("starting_date") },
                  attrs: { type: "date", name: "starting_date" },
                  domProps: { value: _vm.form.starting_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "starting_date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "starting_date" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group col-xs-6" },
              [
                _c("label", { attrs: { for: "birth_date" } }, [
                  _vm._v("Starting time")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.starting_time,
                      expression: "form.starting_time"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("starting_time") },
                  attrs: { type: "time", name: "starting_date" },
                  domProps: { value: _vm.form.starting_time },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "starting_time", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "starting_time" }
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
                  _vm._v("Ending Date")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.ending_date,
                      expression: "form.ending_date"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("ending_date") },
                  attrs: { type: "date", name: "ending_date" },
                  domProps: { value: _vm.form.ending_date },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "ending_date", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "ending_date" }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group col-xs-6" },
              [
                _c("label", { attrs: { for: "birth_date" } }, [
                  _vm._v("Ending Time")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.ending_time,
                      expression: "form.ending_time"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("ending_time") },
                  attrs: { type: "time", name: "ending_time" },
                  domProps: { value: _vm.form.ending_time },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "ending_time", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "ending_time" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-4" }, [
              _c("label", { attrs: { for: "category" } }, [_vm._v("Category")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.category,
                      expression: "form.category"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.form.errors.has("category") },
                  attrs: { name: "category" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "category",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c(
                    "option",
                    { attrs: { selected: "", value: "Select Category" } },
                    [_vm._v("Select Category")]
                  ),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "programing" } }, [
                    _vm._v("Programing")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "skil development" } }, [
                    _vm._v("Skill Development")
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-12" }, [
              _c("label", { attrs: { for: "my-info" } }, [
                _vm._v("Description")
              ]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "badge badge-danger",
                  staticStyle: { float: "right", "margin-top": "5px" }
                },
                [_vm._v("skip")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.description,
                    expression: "form.description"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "description",
                  placeholder: "event description...",
                  rows: "4",
                  cols: "400"
                },
                domProps: { value: _vm.form.description },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "description", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "form-group col-xs-12" },
              [
                _c("label", { attrs: { for: "name" } }, [_vm._v("Ticket")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.ticket_url,
                      expression: "form.ticket_url"
                    }
                  ],
                  staticClass: "form-control input-group-lg",
                  class: { "is-invalid": _vm.form.errors.has("ticket_url") },
                  attrs: {
                    readonly: "",
                    type: "text",
                    name: "ticket",
                    placeholder: "www.ticket.com"
                  },
                  domProps: { value: _vm.form.ticket_url },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.form, "ticket_url", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("has-error", {
                  attrs: { form: _vm.form, field: "ticket_url" }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-12" }, [
              _c("label", { attrs: { for: "my-info" } }, [_vm._v("Sponsor")]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "badge badge-danger",
                  staticStyle: { float: "right", "margin-top": "5px" }
                },
                [_vm._v("skip")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.sponsor,
                    expression: "form.sponsor"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "sponsor",
                  placeholder: "event sponsor...",
                  rows: "4",
                  cols: "400"
                },
                domProps: { value: _vm.form.sponsor },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "sponsor", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-12" }, [
              _c("label", { attrs: { for: "my-info" } }, [_vm._v("Guest")]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "badge badge-danger",
                  staticStyle: { float: "right", "margin-top": "5px" }
                },
                [_vm._v("skip")]
              ),
              _vm._v(" "),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.form.guest,
                    expression: "form.guest"
                  }
                ],
                staticClass: "form-control",
                attrs: {
                  name: "guest",
                  placeholder: "event guest...",
                  rows: "4",
                  cols: "400"
                },
                domProps: { value: _vm.form.guest },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.form, "guest", $event.target.value)
                  }
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "form-group col-xs-2" }, [
              _c("label", { attrs: { for: "status" } }, [_vm._v("Publish")]),
              _vm._v(" "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.form.status,
                      expression: "form.status"
                    }
                  ],
                  staticClass: "form-control",
                  class: { "is-invalid": _vm.form.errors.has("status") },
                  attrs: { name: "status" },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.form,
                        "status",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { selected: "", value: "0" } }, [
                    _vm._v("Public")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "1" } }, [_vm._v("Private")])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "button",
            { staticClass: "btn btn-primary", attrs: { type: "submit" } },
            [_vm._v("Submit")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Add Event Information")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [
          _vm._v(
            "If you are changes this, your group cover photo will be change and everybody can see that changes."
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "line" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Details")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [_vm._v("Let people know what type of event you are hosting...")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Tickets")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [_vm._v("Let people know where they can get tickets for your event...")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "block-title" }, [
      _c("h4", { staticClass: "grey" }, [
        _c("i", { staticClass: "icon ion-android-checkmark-circle" }),
        _vm._v("Options")
      ]),
      _vm._v(" "),
      _c(
        "p",
        {
          staticStyle: {
            "margin-top": "-15px",
            "margin-bottom": "25px",
            color: "cadetblue"
          }
        },
        [_vm._v("Let people know your event guests and sponsors...")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/add_club_info.vue":
/*!****************************************!*\
  !*** ./resources/js/add_club_info.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_club_info_vue_vue_type_template_id_8ddec32a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add_club_info.vue?vue&type=template&id=8ddec32a& */ "./resources/js/add_club_info.vue?vue&type=template&id=8ddec32a&");
/* harmony import */ var _add_club_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add_club_info.vue?vue&type=script&lang=js& */ "./resources/js/add_club_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add_club_info.vue?vue&type=style&index=0&lang=css& */ "./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _add_club_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _add_club_info_vue_vue_type_template_id_8ddec32a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _add_club_info_vue_vue_type_template_id_8ddec32a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/add_club_info.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/add_club_info.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/add_club_info.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./add_club_info.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./add_club_info.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/add_club_info.vue?vue&type=template&id=8ddec32a&":
/*!***********************************************************************!*\
  !*** ./resources/js/add_club_info.vue?vue&type=template&id=8ddec32a& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_template_id_8ddec32a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./add_club_info.vue?vue&type=template&id=8ddec32a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/add_club_info.vue?vue&type=template&id=8ddec32a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_template_id_8ddec32a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_add_club_info_vue_vue_type_template_id_8ddec32a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/club.vue":
/*!*******************************!*\
  !*** ./resources/js/club.vue ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _club_vue_vue_type_template_id_48b4f734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club.vue?vue&type=template&id=48b4f734& */ "./resources/js/club.vue?vue&type=template&id=48b4f734&");
/* harmony import */ var _club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club.vue?vue&type=script&lang=js& */ "./resources/js/club.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./club.vue?vue&type=style&index=0&lang=css& */ "./resources/js/club.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _club_vue_vue_type_template_id_48b4f734___WEBPACK_IMPORTED_MODULE_0__["render"],
  _club_vue_vue_type_template_id_48b4f734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/club.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/club.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./resources/js/club.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./club.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/club.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************!*\
  !*** ./resources/js/club.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./club.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/club.vue?vue&type=template&id=48b4f734&":
/*!**************************************************************!*\
  !*** ./resources/js/club.vue?vue&type=template&id=48b4f734& ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_template_id_48b4f734___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./club.vue?vue&type=template&id=48b4f734& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/club.vue?vue&type=template&id=48b4f734&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_template_id_48b4f734___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_club_vue_vue_type_template_id_48b4f734___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/create_event.vue":
/*!***************************************!*\
  !*** ./resources/js/create_event.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_event_vue_vue_type_template_id_445b7d95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_event.vue?vue&type=template&id=445b7d95& */ "./resources/js/create_event.vue?vue&type=template&id=445b7d95&");
/* harmony import */ var _create_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_event.vue?vue&type=script&lang=js& */ "./resources/js/create_event.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_event.vue?vue&type=style&index=0&lang=css& */ "./resources/js/create_event.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_event_vue_vue_type_template_id_445b7d95___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_event_vue_vue_type_template_id_445b7d95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/create_event.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/create_event.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/create_event.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--4-0!../../node_modules/vue-loader/lib??vue-loader-options!./create_event.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/create_event.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/create_event.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/style-loader!../../node_modules/css-loader??ref--6-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/vue-loader/lib??vue-loader-options!./create_event.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/create_event.vue?vue&type=template&id=445b7d95&":
/*!**********************************************************************!*\
  !*** ./resources/js/create_event.vue?vue&type=template&id=445b7d95& ***!
  \**********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_template_id_445b7d95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./create_event.vue?vue&type=template&id=445b7d95& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/create_event.vue?vue&type=template&id=445b7d95&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_template_id_445b7d95___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_event_vue_vue_type_template_id_445b7d95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);