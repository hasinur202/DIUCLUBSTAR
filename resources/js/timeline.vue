<template>
  <div>
    <headercomponent></headercomponent>
    <div id="page-contents">
      <div class="container">
        <input type="text" v-show="getUserDatas(getDatas)" hidden />
        <div class="row">
          <div class="col-md-3 static">
            <div style="text-align: center;" v-for="dt in DATA" :key="dt.id">
              <div v-if="dt.first_name == $route.params.name">
                <div v-for="dtAvtr in dt.avatar" :key="dtAvtr.id">
                  <input hidden type="text" v-show="getUserAvtr(dtAvtr,dt)" />
                  <img v-if="dtAvtr.avatar" :src="ourImage(dtAvtr.avatar)" alt class="prof_size" />
                </div>
                <h3>{{dt.first_name}}</h3>
                <p class="text-muted">Creative Director
                    <span v-for="author in getAuthors.authorsdt" :key="author.id">
                        <p v-if="author.author_id == getDatas.users.id">
                            <strong>Author of {{ author.club.club_name }}</strong>
                            <span class="badge badge-danger">{{ author.designation }}</span>
                        </p>
                    </span>
                    <span>
                        <form
                            v-show="hideAFbtn && !friend"
                            @click.prevent="sendRequest(dt)"
                         >
                            <a v-if="$route.params.name !== getDatas.users.first_name" href="#" type="submit">Add Friend</a>
                        </form>
                        <div v-for="test in getFriendRequests.frinedships" :key="test.id">
                            <div v-if="test.requested_id === getDatas.users.id">
                            <a
                                href="#"
                                v-if="test.requester_id === dt.id
                                    && test.requested_id === getDatas.users.id &&
                                    test.status === 1 && showFriend()"
                                type="button"
                            ></a>
                            </div>
                            <div v-if="test.requester_id === getDatas.users.id">
                            <a
                                href="#"
                                v-if="test.requester_id === getDatas.users.id
                                    && test.requested_id === dt.id &&
                                    test.status === 1 && showFriend()"
                                type="button"
                            ></a>
                            </div>

                            <div v-if="test.requested_id === getDatas.users.id">
                            <a
                                href="#"
                                v-if="test.requester_id == dt.id
                                    && test.requested_id == getDatas.users.id &&
                                    test.status == 0 && addFriendPending()"
                                type="button"
                            ></a>
                            </div>
                            <div v-if="test.requester_id === getDatas.users.id">
                            <a
                                href="#"
                                v-if="test.requester_id === getDatas.users.id
                                    && test.requested_id === dt.id &&
                                    test.status === 0 && addFriendPending()"
                                type="button"
                            ></a>
                            </div>
                        </div>
                    </span>
                <span style="background-color: #f0ad4e !important;"
                        class="badge badge-success"
                         v-show="!friend && !hideAFbtn">Pending</span>
                <span style="background-color: #5cb85c !important;"
                        class="badge badge-success"
                         v-show="friend && !hideAFbtn">Friend</span>
                </p>
              </div>
            </div>
            <div class="line"></div>
            <div style="background-color: #f5f6f7;padding: 10px;">
                  <div style="text-align: center;font-size: 18px;">
                    <a style="color:#4b4f56;" href="#">Short Biodata</a>
                  </div>
                  <hr style="margin-top:0px !important;">
                  <div v-for="dt_user in DATA" :key="dt_user.id">
                    <div v-if="dt_user.first_name == $route.params.name">
                        <div style="display:inline-flex;">
                            <i style="font-size: 17px;" class="icon ion-android-people"></i>
                            <p style="margin-left:5px;color:#385898;font-size: 14px;line-height: 16px;">
                                <span style="color: #4b4f56;">
                                Full Name
                                </span> {{ dt_user.first_name }}
                            </p>
                        </div>
                        <div style="display:inline-flex;">
                            <i style="font-size: 17px;" class="icon ion-university"></i>
                            <p style="margin-left:5px;color:#385898;font-size: 14px;line-height: 16px;">
                                <span style="color: #4b4f56">Study at department of<span style="color: #4b4f56">
                                    {{ dt_user.department }},</span> batch</span>
                                {{ dt_user.batch }}
                            </p>
                        </div>
                        <div style="display:inline-flex;">
                            <i style="font-size: 17px;" class="icon ion-ios-star"></i>
                            <p style="margin-left:5px;color:#385898;font-size: 14px;line-height: 16px;">
                                <span style="color: #4b4f56">Registration number</span> {{ dt_user.id_number }}</p>
                        </div>
                        <div style="display:inline-flex;">
                            <i style="font-size: 17px;" class="icon ion-ios-email-outline"></i>
                            <p style="margin-left:5px;color:#385898;font-size: 14px;line-height: 16px;">
                                <span style="color: #4b4f56">Email</span> {{ dt_user.email }}</p>
                        </div>
                        <div style="display:inline-flex;">
                            <i style="font-size: 17px;" class="icon ion-ios-home"></i>
                            <p style="margin-left:5px;color:#385898;font-size: 14px;line-height: 16px;">
                                <span style="color: #4b4f56">Present Address</span> {{ dt_user.city }}</p>
                        </div>
                        <div style="display:inline-flex;">
                            <i style="font-size: 17px;" class="icon ion-ios-information"></i>
                            <p style="margin-left:5px;color:#385898;font-size: 12px;line-height: 16px;">
                                <span style="color: #4b4f56;font-size: 14px;">About me:</span> {{ dt_user.about_me }}</p>
                        </div>

                    </div>
                  </div>
            </div>
            <div class="line"></div>
            <div class="suggestions" id="sticky-sidebar" v-if="getDatas.users.first_name == $route.params.name">
              <ul class="nav-news-feed">
                <li>
                  <i class="icon ion-ios-information"></i>
                  <div>
                    <a href="#" @click.prevent="showDiscussion()">My Newsfeed</a>
                  </div>
                </li>
                <li>
                  <i class="icon ion-chatboxes"></i>
                  <div>
                    <router-link to="/messanger">Messenger</router-link>
                  </div>
                </li>
                <li>
                  <i class="icon ion-images"></i>
                  <div>
                    <router-link to="/avatar">Profile Photo</router-link>
                  </div>
                </li>
                <li>
                  <i class="icon ion-ios-videocam"></i>
                  <div>
                    <a href="#">Videos</a>
                  </div>
                </li>
                <li>
                  <i class="icon ion-ios-information-outline"></i>
                  <router-link to="/basic-info">Basic Information</router-link>
                </li>
                <li>
                  <i class="icon ion-ios-locked-outline"></i>
                  <a href="#">Change Password</a>
                </li>
                <li>
                  <i class="icon ion-ios-locked-outline"></i>
                  <a href="#" @click.prevent="friendList()">Friend List</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-7 tab-content">
            <div class="active" id="discussion">
                <div class="create-post">
                    <div class="row">
                    <div class="col-md-7 col-sm-7">
                        <div class="form-group">
                        <img :src="ourImage(avatar.avatar)" alt class="profile-photo-md" />
                        <textarea
                            name="texts"
                            id="exampleTextarea"
                            cols="30"
                            rows="1"
                            class="form-control"
                            placeholder="Write what you wish"
                        ></textarea>
                        </div>
                    </div>
                    <div class="col-md-5 col-sm-5">
                        <div class="tools">
                        <ul class="publishing-tools list-inline">
                            <li>
                            <a href="#">
                                <i class="ion-compose"></i>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i class="ion-images"></i>
                            </a>
                            </li>
                            <li>
                            <a href="#">
                                <i class="ion-ios-videocam"></i>
                            </a>
                            </li>
                        </ul>
                        <button class="btn btn-primary pull-right">Publish</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="create-post" v-show="sendSkillForm">
                    <div class="row">
                        <p v-show="form">
                        If you perform of this event,please
                        <a @click="showForm()" href="#">Click Here</a> and send your demo performance.
                        </p>
                        <p v-show="cuppon">
                        If you only participate not preform of this event,please
                        <a @click="showCuppon(getDatas)" href="#">Click Here</a> and collect cuppon code.
                        </p>
                        <form
                        v-show="showSkillForm"
                        enctype="multipart/form-data"
                        @submit.prevent="uploadSkill()"
                        >
                        <div class="col-md-12 col-sm-12">
                            <button
                            type="button"
                            @click.prevent="hideContent()"
                            class="close"
                            aria-label="Close"
                            >
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-md-12 col-sm-12">
                            <div class="tools">
                            <ul class="publishing-tools list-inline">
                                <li>
                                <button
                                    type="button"
                                    @click.prevent="SelectPhoto()"
                                    class="btn btn-primary"
                                >Upload Photo</button>
                                </li>
                                <li>
                                <button
                                    type="button"
                                    @click.prevent="SelectVideo()"
                                    class="btn btn-primary"
                                >Upload Video</button>
                                </li>
                            </ul>
                            </div>
                            <div v-show="showSelectPhoto" class="publishing-tools list-inline">
                            <div class="form-group">
                                <img :src="skill.image1" class="img-style" />
                                <input
                                name="image1"
                                @change="changeSkill1($event)"
                                type="file"
                                class="control-file"
                                />
                            </div>
                            <div class="form-group">
                                <img :src="skill.image2" class="img-style" />
                                <input
                                name="image2"
                                @change="changeSkill2($event)"
                                type="file"
                                class="control-file"
                                />
                            </div>
                            <div class="form-group">
                                <img :src="skill.image3" class="img-style" />
                                <input
                                name="image3"
                                @change="changeSkill3($event)"
                                type="file"
                                class="control-file"
                                />
                            </div>
                            </div>
                            <div v-show="showSelectVideo" class="form-group">
                            <div class="video-wrapper">
                                <video class="video" controls>
                                <source src="#" type="video/mp4" />
                                </video>
                            </div>
                            <input name="video" @change="changeSkillVideo" type="file" class="video-file" />
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary post-btn">Send Request</button>
                        </form>
                        <div v-show="getCuppon">
                        <div>
                            <div class="col-md-12 col-sm-12">
                                <button
                                type="button"
                                @click.prevent="hideContent()"
                                class="close"
                                aria-label="Close"
                                >
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <p
                            class="cuppon-code"
                            >@{{ authUserName }}@{{ randomNumber() }}${{ authUserDept }}$SSS%{{ authUserBatch }}%</p>
                            <p>
                            If you miss this code you can't enter/participate the event.So keep it safe.
                            <strong>Now Enjoy</strong>
                            </p>
                            <a
                            href="#"
                            type="button"
                            class="btn btn-primary"
                            @click.prevent="print()"
                            >Print Code</a>
                        </div>
                        </div>
                    </div>
                </div>
                <div v-show="discussion" v-for="dtPost in posts.posts" :key="dtPost.id">
                    <div class="post-content" v-if="dtPost">
                    <div class="post-container">
                        <img
                        v-if="avatar.avatar"
                        :src="ourImage(avatar.avatar)"
                        alt="user"
                        class="profile-photo-md pull-left"
                        />
                        <div class="user-info">
                        <h5>
                            <a href="#" class="profile-link">{{ posts.first_name }}</a>
                            <span class="following">following</span>
                        </h5>
                        <p class="text-muted">{{ posts.created_at | postTime}}</p>
                        </div>
                        <div class="post-detail">
                        <div class="post-text">
                            <p>
                            {{ dtPost.text }}
                            <i class="em em-anguished"></i>
                            <i class="em em-anguished"></i>
                            <i class="em em-anguished"></i>
                            </p>
                        </div>
                        <img
                            v-if="dtPost.image1"
                            :src="ourImage(dtPost.image1)"
                            alt="post-image"
                            class="img-responsive post-image"
                        />
                        <hr />
                        <div class="reaction">
                            <form @click.prevent="storeLike(dtPost)">
                            <a v-show="!liked" class="btn text-red" type="submit">
                                <i class="fa fa-thumbs-up"></i>
                                {{dtPost.likes.length}}
                                Like
                            </a>
                            <a
                                v-show="liked"
                                class="btn text-green"
                                style="font-weight:700"
                                type="submit"
                            >
                                <i class="fa fa-thumbs-up"></i>
                                {{dtPost.likes.length}}
                                Like
                            </a>
                            </form>
                            <a
                            href="#"
                            v-if="dtPost.comments"
                            @click.prevent="visibleComment()"
                            class="comment-link"
                            >Comment</a>
                        </div>
                        <hr />
                        <div v-show="showComment" class="post-comment-scroll" v-chat-scroll>
                            <div
                            class="post-comment"
                            v-for="comment in dtPost.comments"
                            :key="comment.id"
                            >
                            <div class="parent-comment">
                                <img
                                :src="ourImage(comment.avatar.avatar)"
                                alt
                                class="profile-photo-sm"
                                />
                                <p class="comment-bg">
                                <a
                                    href="#"
                                    @click.prevent="timeline()"
                                    class="profile-link"
                                >{{ comment.user.first_name }}</a>
                                <span class="comment-text">{{ comment.comment }}</span>
                                </p>
                            </div>
                            <a
                                href="#"
                                @click.prevent="reply(dtPost,comment,avatar)"
                                class="reply-link"
                            >Reply</a>
                            <div
                                class="comment-reply"
                                v-for="commentReply in comment.reply"
                                :key="commentReply.id"
                            >
                                <div v-if="commentReply.reply" class="comment-reply-text">
                                <p style="margin-top: -13px;">
                                    <img
                                    :src="ourImage(commentReply.avatar.avatar)"
                                    alt
                                    class="profile-photo-sm reply-comment-profile-photo"
                                    />
                                    <a
                                    href="#"
                                    @click.prevent="timeline()"
                                    class="profile-link reply-comment-profile-link"
                                    >{{ commentReply.user.first_name }}</a>
                                    <span class="reply-comment-text">{{ commentReply.reply }}</span>
                                </p>
                                </div>
                                <div class="comment-reply-link">
                                <a href="#" @click.prevent="reply(dtPost,comment,avatar)">Reply</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div v-show="!replyInputShow" class="post-comment-input">
                            <form class="comment-form" @keydown.enter.prevent="comment()">
                            <img :src="ourImage(avatar.avatar)" alt class="profile-photo-sm" />
                            <textarea
                                @keypress="pickId(dtPost,avatar)"
                                type="text"
                                v-model="form.comment"
                                class="form-control comment-input"
                                placeholder="Write your comment"
                            ></textarea>
                            </form>
                        </div>
                        <div v-show="replyInputShow" class="post-comment-input">
                            <form class="comment-form" @keydown.enter.prevent="storeCommentReply()">
                            <img :src="ourImage(avatar.avatar)" alt class="profile-photo-sm" />
                            <textarea
                                type="text"
                                v-model="commentReply.reply"
                                class="form-control comment-input"
                                placeholder="Write your reply"
                            ></textarea>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <!-- <div v-show="!showFriendList" class="post-content">
                                <div class="video-wrapper">
                                <video class="post-video" controls>
                                    <source src="videos/8.mp4" type="video/mp4" />
                                </video>
                                </div>
                                <div class="post-container">
                                <img src="images/users/user-14.jpg" alt="user" class="profile-photo-md pull-left" />
                                <div class="post-detail">
                                    <div class="user-info">
                                    <h5>
                                        <a href="timeline.html" class="profile-link">Faruk Ahmed</a>
                                        <span class="following">following</span>
                                    </h5>
                                    <p class="text-muted">Updated her status about 33 mins ago</p>
                                    </div>
                                    <div class="reaction">
                                    <a class="btn text-green">
                                        <i class="fa fa-thumbs-up"></i> 75
                                    </a>
                                    <a class="btn text-red">
                                        <i class="fa fa-thumbs-down"></i> 8
                                    </a>
                                    </div>
                                    <div class="line-divider"></div>
                                    <div class="post-text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                    </div>
                                    <div class="line-divider"></div>
                                    <div class="post-comment">
                                    <img src="images/users/user-13.jpg" alt class="profile-photo-sm" />
                                    <p>
                                        <a href="timeline.html" class="profile-link">Iqbal Ahmed</a> Lorem ipsum dolor sit a.
                                        <i class="em em-anguished"></i> Ut enim ad minim veniam, quis nostrud
                                    </p>
                                    </div>
                                    <div class="post-comment">
                                    <img src="images/users/user-11.jpg" alt class="profile-photo-sm" />
                                    <p>
                                        <a href="timeline.html" class="profile-link">Hasinur Rahman</a> Lorem ipsum dolor sit amet.
                                    </p>
                                    </div>
                                    <div class="post-comment">
                                    <img src="images/users/user-14.jpg" alt class="profile-photo-sm" />
                                    <input type="text" class="form-control" placeholder="Post a comment" />
                                    </div>
                                </div>
                                </div>
                </div>-->
                <div
                    v-show="showFriendList"
                    class="friendList-content"
                    v-for="request in getFriendRequests.frinedships"
                    :key="request.id"
                    >
                    <div
                    class="friendList"
                    v-if="request.requester_id == getDatas.users.id && request.requested_id == request.requested_user.id &&
                                    request.status == 1"
                    >
                    <div class="friendInfo">
                        <img
                        v-for="avtr in request.requested_user.avatar"
                        :key="avtr.id"
                        :src="ourImage(avtr.avatar)"
                        alt="Login-logout-register"
                        class="friend-avatar"
                        />
                        <a href="#">{{ request.requested_user.first_name }}</a>
                        <span
                        class="friend-list-span"
                        >{{ request.requested_user.department }}-{{ request.requested_user.batch }}</span>
                    </div>
                    <div class="unfriend">
                        <form @click.prevent="unfriend(request)">
                        <a type="submit" class="unfriendBtn" href="#">Unfriend</a>
                        </form>
                    </div>
                    </div>
                    <div
                    class="friendList"
                    v-if="request.requested_id == getDatas.users.id && request.requester_id == request.user.id &&
                                    request.status == 1"
                    >
                    <div class="friendInfo">
                        <img
                        v-for="avtr in request.user.avatar"
                        :key="avtr.id"
                        :src="ourImage(avtr.avatar)"
                        alt="Login-logout-register"
                        class="friend-avatar"
                        />
                        <a href="#">{{ request.user.first_name }}</a>
                        <span
                        class="friend-list-span"
                        >{{ request.user.department }}-{{ request.user.batch }}</span>
                    </div>
                    <div class="unfriend">
                        <form @click.prevent="unfriend(request)">
                        <a type="submit" class="unfriendBtn" href="#">Unfriend</a>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="col-md-2 static">
            <div id="chat-block">
              <div class="title">
                Running Event
                <span class="badge badge-danger">{{getClubEvents.count_event}}</span>
              </div>

              <div class="feed-item" v-for="event in getClubEvents.events" :key="event.id">
                <div class="live-activity" v-if="event">
                  <p class="text-muted">
                    <a href="#" class="profile-link">{{ event.name }}</a> event going on
                  </p>
                    <a
                      class="btn btn-danger btn-xs"
                      @click.prevent="showSendSkillForm(event,getClubs,getDatas)"
                      href="#"
                    >Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footercomponent></footercomponent>
  </div>
</template>

<script>
import headercomponent from "./components/layouts/header.vue";
import footercomponent from "./components/layouts/footer.vue";
export default {
  name: "timeline",
  components: {
    headercomponent,
    footercomponent
  },
  data() {
    return {
      showFriendList: false,
      discussion: true,
      liked: false,
      replyInputShow: false,
      showComment: false,
      hideAFbtn: true,
      requestPending: false,
      friend: false,
      sendSkillForm:false,
      showSkillForm:false,
      showSelectPhoto:false,
      showSelectVideo:false,
      form:false,
      cuppon:false,
      getCuppon:false,
      authUserName:"",
      authUserDept:"",
      authUserBatch:"",
      memberValidityId:"",
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
      },
      form: new Form({
        post_id: "",
        avatar_id: "",
        comment: []
      }),
      commentReply: {
        avatar_id: "",
        post_id: "",
        comment_id: "",
        reply: ""
      },
      like: {
        post_id: "",
        status: "1"
      },
      DATA: "",
      avatar: "",
      posts: ""
    };
  },

  mounted() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    //
    //php artisan passport:client --personal
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("userPostAction");
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("postCommentAction");
    this.$store.dispatch("getClubInfoAction");
    this.$store.dispatch("getAuthorAction");

    Echo.channel("Comment").listen("CommentEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("Reply").listen("CommentReplyEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("Like").listen("LikeEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("AfterUnlike").listen("AfterUnlikeEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
  },
  computed: {
    getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getPosts() {
      return this.$store.getters.getUserPost;
    },
    getClubEvents() {
      return this.$store.getters.getClubEvent;
    },
    getPostComments() {
      return this.$store.getters.getPostComments;
    },
    getClubs() {
      return this.$store.getters.getClub;
    },
    getAuthors() {
      return this.$store.getters.getAuthor;
    },
  },
  methods: {
    hideContent(){
        this.sendSkillForm = false;
        this.getCuppon = false;
        this.showSkillForm = false;
        this.discussion = true;
    },
    SelectPhoto() {
      this.showSelectPhoto = true;
    },
    SelectVideo() {
      this.showSelectVideo = true;
    },
    print() {
      window.print();
    },
    randomNumber() {
      return Math.random() * 10000;
    },
    showCuppon(getDatas) {
      this.showSkillForm = false;
      this.cuppon = false;
      this.form = false;
      this.getCuppon = true;
      this.authUserName = getDatas.users.first_name;
      this.authUserDept = getDatas.users.department;
      this.authUserBatch = getDatas.users.batch;
      this.randomNumber();
    },
    showForm() {
      this.showSkillForm = true;
      this.cuppon = false;
      this.form = false;
    },
    changeSkill1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.skill.image1 = event.target.result;
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
    changeSkill2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.skill.image2 = event.target.result;
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
    changeSkill3(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.skill.image3 = event.target.result;
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
    changeSkillVideo(e) {
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
    uploadSkill() {
      if(
          this.skill.image1 !== "" ||
          this.skill.image2 !== "" ||
          this.skill.image3 !== "" ||
          this.skill.video !== ""
      ){

        let currentObj = this;

        const config = {
            headers: { "content-type": "multipart/form-data" }
        };

        let formData = new FormData();
        formData.append("club_id", this.skill.club_id);
        formData.append("event_id", this.skill.event_id);
        formData.append("image1", this.skill.image1);
        formData.append("image2", this.skill.image2);
        formData.append("image3", this.skill.image3);
        formData.append("video", this.skill.video);

        axios
            .post("/skill-store", formData, config)
            .then(function(response) {
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
            })
            .catch(function(error) {
            //   currentObj.output = error;
            });
      }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please select your image or video!'
        })
      }
    },
    showSendSkillForm(event, getClubs, getDatas) {
      getClubs.clubs.forEach(el => {
        if (el.id == event.club.id) {
          el.club_members.forEach(mem => {
            //   this.memberValidityId = mem.user.id;
            if (mem.user.id == getDatas.users.id) {
              this.memberValidityId = mem.user.id;
              if (this.memberValidityId !== "") {
                this.skill.club_id = event.club_id;
                this.skill.event_id = event.id;
                this.discussion = false;
                this.getCuppon = false;
                this.showSkillForm = false;
                this.sendSkillForm = true;
                this.form = true;
                this.cuppon = true;
                // this.visibleCreateClub = false;

                // this.visibleBatches = false;
              }
            } else if (mem.user.id !== getDatas.users.id) {
              this.memberValidityId = mem.user.id;
              if (this.memberValidityId !== "") {
                Toast.fire({
                  icon: "warning",
                  title:
                    "Before participate you must have to be join this club."
                });
              }
            }

          });
        }
      });
    },
    showFriend() {
      this.hideAFbtn = false;
      this.friend = true;
    },
    addFriendPending() {
      this.hideAFbtn = false;
      this.friend = false;
    },
    sendRequest(dt) {
      this.addFriendData.requested_id = dt.id;
      axios
        .post("/send-request", {
          requested_id: this.addFriendData.requested_id
        })
        .then(response => {
            this.hideAFbtn = false;
            this.friend = false;
            Toast.fire({
                icon: "success",
                title:"Friend Request Send Successfull."
            });
        });
    },
    getUserAvtr(dtAvtr, dt) {
      this.avatar = dtAvtr;
      this.posts = dt;
    },
    getUserDatas(getDatas) {
      this.DATA = getDatas.user;
    },
    showDiscussion() {
      this.discussion = true;
      this.showFriendList = false;
      this.sendSkillForm = false;

    },
    storeLike(dtPost) {
      this.like.post_id = dtPost.id;
      axios
        .post("/store-like", {
          post_id: this.like.post_id,
          status: this.like.status
        })
        .then(response => {
          if ((response.data.status = "unlike")) {
            this.liked = true;
          } else if ((response.data.status = "like")) {
            this.liked = false;
          }
        });
    },
    storeCommentReply() {
      axios
        .post("/store-reply", {
          avatar_id: this.commentReply.avatar_id,
          post_id: this.commentReply.post_id,
          comment_id: this.commentReply.comment_id,
          reply: this.commentReply.reply
        })
        .then(response => {
          this.commentReply.reply = [];
          this.replyInputShow = false;
          this.showComment = true;
        });
    },
    getAvatarId(dt) {
      this.post.avatar_id = dt.id;
    },
    visibleComment() {
      if (this.showComment == false) {
        this.showComment = true;
      } else if (this.showComment == true) {
        this.showComment = false;
      }
    },
    reply(dtPost, comment, avatar) {
      this.replyInputShow = true;
      this.commentReply.post_id = dtPost.id;
      this.commentReply.avatar_id = avatar.id;
      this.commentReply.comment_id = comment.id;
      setTimeout(() => {
        this.replyInputShow = false;
        this.commentReply.avatar_id = "";
        this.commentReply.post_id = "";
        this.commentReply.comment_id = "";
      }, 60000);
    },
    pickId(dtPost, avatar) {
      this.form.post_id = dtPost.id;
      this.form.avatar_id = avatar.id;
    },
    comment() {
      this.form.post("/postComment").then(response => {
        this.form.comment = [];
        this.showComment = true;
      });
    },
    unfriend(request) {
      var id = request.id;
      axios.post("/reject/" + id).then(response => {
        Toast.fire({
          icon: "warning",
          title: "Unfriend Successfull."
        });
      });
    },
    friendList() {
      if (this.showFriendList == false) {
        this.showFriendList = true;
        this.discussion = false;
        this.sendSkillForm = false;

      } else if (this.showFriendList == true) {
        this.showFriendList = false;
        this.discussion = true;
      }
    },

    timelineFeed() {
      this.getDatas.allUser.forEach(element => {
        console.log(element);
        this.$router.push("/timeline/:element");
      });
    },

    ourImage(img) {
      return "/images/" + img;
    }
  }
};
</script>

<style scoped>
.friendInfo {
  display: inline-flex;
  margin-top: 5px;
  margin-bottom: 5px;
}
.friendInfo a:hover {
  text-decoration: none;
}
.friend-list-span {
  display: block;
  margin-left: -21px;
  font-size: 10px;
  margin-top: 20px;
}
.friendList-content {
  background: #f8f8f8;
  border-radius: 4px;
  width: 100%;
  border-bottom: 1px solid #f1f2f2;
  overflow: hidden;
  padding: 0px 20px;
}
.friend-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
.unfriend {
  float: right;
  margin-top: 15px;
}
.unfriendBtn {
  color: #fff;
  font-weight: 700;
  padding: 10px;
  background-color: #2faae1;
  border-radius: 5px;
}
.unfriend a:hover {
  color: #fff;
  text-decoration: none;
  background-color: #204d74;
  transition: 0.7s;
}
.frindList {
  padding: 20px;
}
</style>
