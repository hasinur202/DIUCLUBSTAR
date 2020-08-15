<template>
  <div>
    <headercomponent></headercomponent>

    <div id="page-contents" style="background-color: #1a2236 !important">
      <div class="container">
        <div class="row">
          <div class="col-md-10 tab-content">
            <div class="chat-room">
              <div class="row" v-for="data in getDatas.avatars" :key="data.id">
                <div class="col-md-4">
                  <div class="profile-card">
                    <img :src="ourImage(data.cover_photo)" alt="user" class="cover-photo" />
                    <img :src="ourImage(data.avatar)" alt="user" class="profile-photo" />
                    <h5>
                      <a
                        style="color: #000;font-weight: 700;"
                        href="#"
                        class="text-white"
                        v-if="getDatas.users"
                      >{{getDatas.users.first_name}}</a>
                    </h5>
                  </div>
                  <ul class="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
                    <li
                      style="border-bottom: 1px solid #293145;
                        margin-bottom: 5px !important;"
                      class="active"
                      v-for="user in getUsers"
                      :key="user.id"
                      @click="selectUser(user.id)"
                      >
                      <div v-for="friend in user.friendship" :key="friend.id">
                          <a v-if="user.id == friend.requested_id && friend.status == 1" href="#" data-toggle="tab">
                            <div class="contact">
                                <div v-for="avatar in user.avatar" :key="avatar.id">
                                    <img :src="ourImage(avatar.avatar)" alt class="profile-photo-sm pull-left" />
                                </div>
                                <div class="msg-preview" style="display: inline-block;">
                                    <h5 style="margin-left: -40px;
                                        margin-bottom: 0px;color: rgba(255,255,255,.75);">{{ user.first_name }}</h5>
                                    <span style="margin-left: -40px !important;
                                        font-size: 12px;
                                        color: #767676;">{{ user.department }}-{{ user.batch }}</span>
                                    <!-- <div class="chat-alert">1</div> -->
                                </div>
                            </div>
                          </a>
                          <a v-if="user.id == friend.requester_id && friend.status == 1" href="#" data-toggle="tab">
                            <div class="contact">
                                <div v-for="avataru in user.avatar" :key="avataru.id">
                                    <img :src="ourImage(avataru.avatar)" alt class="profile-photo-sm pull-left" />
                                </div>
                                <div class="msg-preview" style="display: inline-block;">
                                    <h5 style="margin-left: -40px;
                                        margin-bottom: 0px;color: rgba(255,255,255,.75);">{{ user.first_name }}</h5>
                                    <span style="margin-left: -40px !important;
                                        font-size: 12px;
                                        color: #767676;">{{ user.department }}-{{ user.batch }}</span>
                                    <!-- <div class="chat-alert">1</div> -->
                                </div>
                            </div>
                          </a>
                      </div>
                      <div v-for="friend_req in user.friendship_requested" :key="friend_req.id">
                          <a v-if="user.id == friend_req.requested_id && friend_req.status == 1" href="#" data-toggle="tab">
                            <div class="contact">
                                <div v-for="avatar in user.avatar" :key="avatar.id">
                                    <img :src="ourImage(avatar.avatar)" alt class="profile-photo-sm pull-left" />
                                </div>
                                <div class="msg-preview" style="display: inline-block;">
                                    <h5 style="margin-left: -40px;
                                        margin-bottom: 0px;
                                        color: rgba(255,255,255,.75);">{{ user.first_name }}</h5>
                                    <span style="margin-left: -40px !important;
                                        font-size: 12px;
                                        color: #767676;">{{ user.department }}-{{ user.batch }}</span>
                                    <!-- <div class="chat-alert">1</div> -->
                                </div>
                            </div>
                          </a>
                          <a v-if="user.id == friend_req.requester_id && friend_req.status == 1" href="#" data-toggle="tab">
                            <div class="contact">
                                <div v-for="avatarrq in user.avatar" :key="avatarrq.id">
                                    <img :src="ourImage(avatarrq.avatar)" alt class="profile-photo-sm pull-left" />
                                </div>
                                <div class="msg-preview" style="display: inline-block;">
                                    <h5 style="margin-left: -40px;
                                        margin-bottom: 0px;
                                        color: rgba(255,255,255,.75);">{{ user.first_name }}</h5>
                                    <span style="margin-left: -40px !important;
                                        font-size: 12px;
                                        color: #767676;">{{ user.department }}-{{ user.batch }}</span>
                                    <!-- <div class="chat-alert">1</div> -->
                                </div>
                            </div>
                          </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="col-md-8">
                  <div>
                    <h5 v-if="getUserMessages.user">{{ getUserMessages.user.first_name}}</h5>
                  </div>
                  <hr />
                  <div style="height: 300px !important" class="tab-content scrollbar-wrapper wrapper scrollbar-outer"  v-chat-scroll>
                    <div class="tab-pane active" id="contact-1">
                      <div class="chat-body">
                        <ul
                          class="chat-message"
                          v-for="message in getUserMessages.messages"
                          :key="message.id"
                        >
                          <li style="width: 65% !important;" class="left" v-if="message.type==1">
                            <img
                              v-if="message.avatar"
                              :src="ourImage(message.avatar.avatar)"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item" style="color: rgb(255, 255, 255) !important;
                                background: #293145;">
                              <div class="chat-item-header">
                                <h5 style="color:rgba(255,255,255,.75) !important;">{{ message.user.first_name }}</h5>
                                <small style="color:rgba(255,255,255,.75) !important;" class="text-muted">{{ message.user.created_at | postTime }}</small>
                              </div>
                              <p style="color:rgba(255,255,255,.75) !important;">
                                {{ message.message }}
                              </p>
                            </div>
                          </li>
                          <li style="width: 65% !important;margin-left: 33%;" class="right" v-if="message.type==0">
                            <img
                              v-if="message.avatar"
                              :src="ourImage(message.avatar.avatar)"
                              alt
                              class="profile-photo-sm pull-right"
                            />
                            <div style="background-color: #0A80FF !important;" class="chat-item">
                              <div class="chat-item-header">
                                <h5 style="color:#fff !important;">{{ message.user.first_name }}</h5>
                                <small style="color:#fff !important;" class="text-muted">{{ message.user.created_at }}</small>
                              </div>
                              <p style="color:#fff !important;">{{ message.message }}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane" id="contact-2">
                      <div class="chat-body">
                        <ul class="chat-message">
                          <li class="left">
                            <img
                              src="images/users/user-10.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Julia Cox</h5>
                                <small class="text-muted">a day ago</small>
                              </div>
                              <p>Hi</p>
                            </div>
                          </li>
                          <li class="right">
                            <img
                              src="images/users/user-1.jpg"
                              alt
                              class="profile-photo-sm pull-right"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Sarah Cruiz</h5>
                                <small class="text-muted">a day ago</small>
                              </div>
                              <p>hellow</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-10.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Julia Cox</h5>
                                <small class="text-muted">an hour ago</small>
                              </div>
                              <p>good</p>
                            </div>
                          </li>
                          <li class="right">
                            <img
                              src="images/users/user-1.jpg"
                              alt
                              class="profile-photo-sm pull-right"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Sarah Cruiz</h5>
                                <small class="text-muted">an hour ago</small>
                              </div>
                              <p>see you soon</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane" id="contact-3">
                      <div class="chat-body">
                        <ul class="chat-message">
                          <li class="right">
                            <img
                              src="images/users/user-1.jpg"
                              alt
                              class="profile-photo-sm pull-right"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Sarah</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-3.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Sophia Lee</h5>
                                <small class="text-muted">a day ago</small>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                            </div>
                          </li>
                          <li class="right">
                            <img
                              src="images/users/user-1.jpg"
                              alt
                              class="profile-photo-sm pull-right"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Sarah Cruiz</h5>
                                <small class="text-muted">13 hours ago</small>
                              </div>
                              <p>Okay fine. thank you</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane" id="contact-4">
                      <div class="chat-body">
                        <ul class="chat-message">
                          <li class="left">
                            <img
                              src="images/users/user-4.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>John Doe</h5>
                                <small class="text-muted">a day ago</small>
                              </div>
                              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-4.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>John Doe</h5>
                                <small class="text-muted">a day ago</small>
                              </div>
                              <p>hey anybody there</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane" id="contact-5">
                      <div class="chat-body">
                        <ul class="chat-message">
                          <li class="left">
                            <img
                              src="images/users/user-9.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Anna Young</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-9.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Anna Young</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                            </div>
                          </li>
                          <li class="right">
                            <img
                              src="images/users/user-1.jpg"
                              alt
                              class="profile-photo-sm pull-right"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Sarah Cruiz</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>I gotta go</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="tab-pane" id="contact-6">
                      <div class="chat-body">
                        <ul class="chat-message">
                          <li class="left">
                            <img
                              src="images/users/user-8.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Richard Bell</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Hello</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-8.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Richard Bell</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Hi</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-8.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Richard Bell</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Hey</p>
                            </div>
                          </li>
                          <li class="left">
                            <img
                              src="images/users/user-8.jpg"
                              alt
                              class="profile-photo-sm pull-left"
                            />
                            <div class="chat-item">
                              <div class="chat-item-header">
                                <h5>Richard Bell</h5>
                                <small class="text-muted">2 days ago</small>
                              </div>
                              <p>Hey there</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="send-message">
                    <div class="input-group">
                      <p v-if="typing">{{typing}} typing...</p>
                      <textarea
                        v-if="getUserMessages.user"
                        type="text"
                        class="form-control"
                        v-model="message"
                        @keydown="typingEvent(getUserMessages.user.id)"
                        @keydown.enter="send(data)"
                        placeholder="Type your message"
                      />
                      <textarea
                        v-else
                        disabled
                        type="text"
                        class="form-control"
                        v-model="message"
                        @keydown.enter="send"
                        placeholder="Type your message"
                      />
                      <span class="input-group-btn">
                        <button class="btn btn-default" @click.prevent="send(data)" type="button">Send</button>
                      </span>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="col-md-2 static">
            <div id="chat-block">
              <div class="title">Running Event</div>
              <div class="feed-item">
                <div class="live-activity">
                  <p class="text-muted">
                    <a href="#" class="profile-link">Cicket Club</a> event going on
                  </p>
                  <p class="text-red">
                    Participate
                    <a class="btn btn-danger btn-xs" href="#">Now</a>
                  </p>
                </div>
              </div>
              <div class="feed-item">
                <div class="live-activity">
                  <p class="text-muted">
                    <a href="#" class="profile-link">Programming Club</a> event going on
                  </p>
                  <p class="text-red">
                    Participate
                    <a class="btn btn-danger btn-xs" href="#">Now</a>
                  </p>
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
import headercomponent from './components/layouts/header.vue'
import footercomponent from './components/layouts/footer.vue'
export default {
  name: "messanger",
  components:{
      headercomponent,
      footercomponent
  },
  data() {
    return {
      avatar_id:"",
      message: "",
      typing: ""
    };
  },
  mounted() {
      setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    if (authUser) {
      Echo.private(`Chat.${authUser.id}`).listen("SendMessage", e => {
        this.selectUser(e.messages.from);
        // console.log("ok");
      });
      Echo.private("typingEvent").listenForWhisper("typing", e => {
        if (
          e.user.id == this.getUserMessages.user.id &&
          e.userId == authUser.id
        ) {
          this.typing = e.user.first_name;
          setTimeout(() => {
            this.typing = "";
          }, 2000);
        }
      });
    }

    this.$store.dispatch("userAction");
    this.$store.dispatch("onlineUserAction");
  },

  computed: {
    getDatas() {
      return this.$store.getters.getUser;
    },
    getUsers() {
      return this.$store.getters.getOnlineUser;
    },
    getUserMessages() {
      return this.$store.getters.getUserMessage;
    }
  },
  methods: {
    send(data) {
      this.avatar_id = data.id;
      if (this.message !== "") {
        axios
          .post("/send", {
            avatar_id: this.avatar_id,
            message: this.message,
            user_id: this.getUserMessages.user.id
          })
          .then(response => {
            this.message = "";
            this.selectUser(this.getUserMessages.user.id);
          });
      }
    },
    selectUser(userId) {
      this.$store.dispatch("userMessageAction", userId);
    },
    typingEvent(userId) {
      Echo.private("typingEvent").whisper("typing", {
        user: authUser,
        typing: this.message,
        userId: userId
      });
    },
    ourImage(img) {
      return "/images/" + img;
    }
  }
};
</script>

<style>
    .chat-room .chat-body ul.chat-message li.right .chat-item::after {
        border-left: 8px solid rgb(10, 128, 255) !important;
    }
    .chat-room .chat-body ul.chat-message li.right .chat-item::before {
        border-right: 8px solid #0A80FF !important;
    }

</style>
