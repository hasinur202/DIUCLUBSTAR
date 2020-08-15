<template>
  <header id="header">
    <nav class="navbar navbar-default navbar-fixed-top menu" style="border-bottom: 1px solid #ddd;background: #FAFAFA !important">
      <div class="container">
        <div class="navbar-header" v-for="logo in getSettings.settings" :key="logo.id">

          <a v-if="logo.logo" class="navbar-brand" href="#" @click.prevent="showHome()">
            <img :src="ourImage(logo.logo)" alt="logo" />
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right main-menu">
            <li>
              <router-link to="/home" title="Home">
                <!-- <img src="images/group-icon/home.jpg" alt="Home" class="profile-photo-xs" /> -->
                <i style="font-size:30px;color:#000;" class="icon ion-ios-home"></i>
              </router-link>
            </li>
            <li>
              <router-link
                v-if="getDatas.users"
                :title="getDatas.users.first_name"
                :to="{name: 'timeline', params:{
                      name: getDatas.users.first_name
                  },}"
              >
                <div v-for="pf_avtr in getDatas.avatars" :key="pf_avtr.if">
                    <img v-if="pf_avtr.avatar" :src="ourImage(pf_avtr.avatar)" alt="Profile" class="profile-photo-xs" />
                    <img v-else style="background-color: #ddd;" :src="ourImage(pf_avtr.avatar)" alt="Profile" class="profile-photo-xs" />
                </div>
                <i v-if="getDatas.avatars == null" style="font-size:30px;color:#fff;" class="icon ion-ios-person"></i>
              </router-link>
            </li>
            <li class="dropdown">
              <a
                title="Friend Request"
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i v-show="!count_req_style" style="color: #000;
                    font-size: 30px;
                    opacity: .3;" class="icon ion-ios-people"></i>
                <i v-show="count_req_style" style="color: #000;
                    font-size: 30px;" class="icon ion-ios-people"></i>
                <div v-for="count in getFriendRequests.frinedships" :key="count.id">
                  <span
                    v-if="count.requested_id == getAuthUserId &&
                      count.status == 0"
                    class="noti-dot"
                  >
                    <input type="text" v-show="getCountFriendReq(count)" hidden>
                  </span>
                </div>
              </a>
              <ul class="dropdown-menu login friend-request-ul">
                <div v-for="request in getFriendRequests.frinedships" :key="request.id">
                  <li
                    class="friend-request-li"
                    v-if="request.requested_id == getAuthUserId &&
                      request.status == 0"
                  >
                    <div class="pull-left friend-request-left-li">
                      <img
                        v-for="avtr in request.user.avatar"
                        :key="avtr.id"
                        :src="ourImage(avtr.avatar)"
                        alt="Login-logout-register"
                        class="profile-photo-xs friend-request-left-li-avatar"
                      />
                      <a href="#">
                        {{ request.user.first_name }}
                        <span
                          class="span"
                        >{{ request.user.department }}-{{ request.user.batch }}</span>
                      </a>
                    </div>
                    <div class="pull-right friend-request-right-li">
                      <form @click.prevent="accept(request)">
                        <a type="submit" class="accept-btn" href="#">Confirm</a>
                      </form>
                      <form @click.prevent="reject(request)">
                        <a type="submit" href="#">Reject</a>
                      </form>
                    </div>
                  </li>
                </div>
              </ul>
            </li>
            <li class="dropdown" v-if="athrDt.author_id == getAuthUserId">
              <a
                title="Prticipants Request"
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <!-- <img
                  src="images/partici-req.PNG"
                  alt="Login-logout-register"
                  class="profile-photo-xs hasNoti"
                /> -->
                <i v-show="!countSkillStyle" style="font-size:30px;color:#000;opacity: .3;" class="icon ion-pull-request"></i>
                <i v-show="countSkillStyle" style="font-size:30px;color:#000;" class="icon ion-pull-request"></i>
                <div>
                  <span
                    v-if="getSkills.count_skill"
                    class="noti-dot"
                  >
                    <input type="text" v-show="getCountSkill(getSkills)">
                    {{getSkills.count_skill}}
                  </span>
                </div>
              </a>
              <ul class="dropdown-menu login friend-request-ul">
                <div v-for="partici_skill in getSkills.skill" :key="partici_skill.id">
                  <li
                    class="friend-request-li"
                    v-if="partici_skill.status == 0"
                  >
                    <div class="pull-left friend-request-left-li">
                      <img
                        v-for="skill_user_avtr in partici_skill.user.avatar"
                        :key="skill_user_avtr.id"
                        :src="ourImage(skill_user_avtr.avatar)"
                        alt="Login-logout-register"
                        class="profile-photo-xs friend-request-left-li-avatar"
                      />
                      <router-link
                        v-if="partici_skill.club.club_name"
                        :to="{name: 'club', params:{
                            name: partici_skill.club.club_name,
                            cl_id:partici_skill.club.id
                        },}"
                      >
                        {{ partici_skill.user.first_name }} requested to participate {{ partici_skill.club_event.name }} event.

                      </router-link>
                    </div>
                  </li>
                </div>
              </ul>
            </li>
            <li class="dropdown" v-if="$route.name !== 'club' && athrDt.author_id !== getAuthUserId">
              <a
                @click="updateStatus(getNotis)"
                title="Notification"
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span>
                  <i v-show="!notiCountStyle" style="font-size: 30px;
                    color: #000;
                    transition: transform .2s;
                    opacity: .3;" class="icon ion-android-notifications"></i>
                  <i v-show="notiCountStyle" style="font-size: 30px;
                    color: #000;
                    transition: transform .2s;" class="icon ion-android-notifications"></i>
                </span>
                <div v-if="getNotis.notiCount">
                  <span class="noti-dot">{{ getNotis.notiCount }}</span>
                  <input type="text" v-show="getNotiCount(getNotis)">
                </div>
              </a>
              <ul class="dropdown-menu login friend-request-ul">
                <li v-for="not in getNotis.noti"
                :key="not.id" class="noti-unread-li">
                  <a v-if="not.status == 1"
                    href="#"
                    style="background-color: #ddd;padding: 10px;border-radius: 5px;"
                  >{{not.noti | shortLength(30,"...") }}</a>
                  <a v-if="not.status == 0"
                    href="#"
                    style="background-color: rgb(71, 108, 243);padding: 10px;border-radius: 5px;"
                  >{{not.noti | shortLength(30,"...") }}</a>

                </li>
              </ul>
            </li>

            <!-- <li>
              <a title="Talent Hunt" href="#">
                <img src="images/clubs.png" alt="Talent Hunt" class="profile-photo-xs" />
              </a>
            </li>-->
            <!-- <li v-if="$route.path == '/avatar'">
              <a title="Contact" href="contact.html">
                <img src="images/group-icon/contact.jpg" alt="Contact" class="profile-photo-xs" />
              </a>
            </li>-->
            <!-- <li class="dropdown" v-if="$route.name !== 'club'">
              <a
                title="Notification"
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  src="images/notify.png"
                  alt="Login-logout-register"
                  class="profile-photo-xs hasNoti"
                />
                <div v-for="count in getFriendRequests.frinedships" :key="count.id">
                  <span
                    v-if="count.requested_id == getAuthUserId &&
                      count.status == 0"
                    class="noti-dot"
                  >New</span>
                </div>
              </a>
              <ul class="dropdown-menu login friend-request-ul">
                <div v-for="request in getFriendRequests.frinedships" :key="request.id">
                  <li
                    class="friend-request-li"
                    v-if="request.requested_id == getAuthUserId &&
                      request.status == 0"
                  >
                    <div class="pull-left friend-request-left-li">
                      <img
                        v-for="avtr in request.user.avatar"
                        :key="avtr.id"
                        :src="ourImage(avtr.avatar)"
                        alt="Login-logout-register"
                        class="profile-photo-xs friend-request-left-li-avatar"
                      />
                      <a href="#">
                        {{ request.user.first_name }}
                        <span
                          class="span"
                        >{{ request.user.department }}-{{ request.user.batch }}</span>
                      </a>
                    </div>
                    <div class="pull-right friend-request-right-li">
                      <form @click.prevent="accept(request)">
                        <a type="submit" class="accept-btn" href="#">Confirm</a>
                      </form>
                      <form @click.prevent="reject(request)">
                        <a type="submit" href="#">Reject</a>
                      </form>
                    </div>
                  </li>
                </div>
              </ul>
            </li> -->
            <li
                class="dropdown"
                v-if="$route.name=='club' && athrDt.author_id == getAuthUserId"
             >
                <a
                    title="Notification"
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <span>
                        <i v-show="!notiCountReqStyle" style="font-size: 30px;
                            color: #000;
                            transition: transform .2s;
                            opacity: .3;" class="icon ion-android-notifications"></i>
                        <i v-show="notiCountReqStyle" style="font-size: 30px;
                            color: #000;
                            transition: transform .2s;" class="icon ion-android-notifications"></i>
                    </span>
                    <div>

                        <span
                            v-if="count_member_request"
                            class="noti-dot"
                        >{{count_member_request}}</span>
                    </div>
                </a>
                <ul class="dropdown-menu login friend-request-ul">
                    <div v-for="member in getClubMembers.all_members" :key="member.id">
                    <input type="text" v-show="getCountReq(member)">
                    <li
                        class="friend-request-li"
                        v-if="member.club_id == $route.params.cl_id &&
                        member.status == 0"
                    >
                        <div class="pull-left friend-request-left-li">

                        <img
                            v-for="avtr in member.user.avatar"
                            :key="avtr.id"
                            :src="ourImage(avtr.avatar)"
                            alt="Login-logout-register"
                            class="profile-photo-xs friend-request-left-li-avatar"
                        />
                        <a href="#">
                            {{ member.user.first_name }}
                            <span
                            class="span"
                            >{{ member.user.department }}-{{ member.user.batch }}</span>
                        </a>
                        </div>
                        <div class="pull-right friend-request-right-li">
                        <form @click.prevent="approve(member)">
                            <a type="submit" class="accept-btn" href="#">Approve</a>
                        </form>
                        <form @click.prevent="dismis(member)">
                            <a type="submit" href="#">Dismis</a>
                        </form>
                        </div>
                    </li>
                    </div>
                </ul>
            </li>

            <li class="dropdown">
              <a
                title="Logout"
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <!-- <img
                  src="images/logo-logout.jpg"
                  alt="Login-logout-register"
                  class="profile-photo-xs"
                /> -->
                <i style="color: #000;
                    font-size: 30px;" class="icon ion-log-out"></i>
              </a>
              <ul class="dropdown-menu login">
                <li>
                  <a @click.prevent="logout()" href="#">
                    Logout
                    <i class="icon ion-log-out pull-right"></i>
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <form class="navbar-form navbar-right hidden-sm">
            <div class="form-group">
              <a href="#" @click.prevent="searchData()" type="submit">
                <i class="icon ion-android-search" style="font-size: 15px;
                    color: #000;
                    margin-top: 7px;
                    margin-left: 85%;"></i>
              </a>

              <input
                style="background: #fff !important;min-width: 307px !important;
                border: 1px solid #ddd;margin-top: 7px;color:#000"
                type="text"
                v-model="search"
                @keyup.prevent="searchData()"
                class="form-control"
                placeholder="Search friends"
              />
            </div>
            <div class="option search-result" v-show="getSesrchValue">
              <ul style="margin: 0px;padding-left: 10px;padding-right: 10px;
                background-color: #FAFAFA;"
               >
                <li style="list-style:none;border-bottom: 1px solid #ddd;display:inline-flex;
                width: 100%;padding-bottom: 4px;" v-for="val in searchValue" :key="val.id">
                   <img
                        v-for="searchUserAvtr in val.avatar"
                        :key="searchUserAvtr.id"
                        :src="ourImage(searchUserAvtr.avatar)"
                        alt="profile picture"
                        class="profile-photo-xs"
                        style="margin-top: 3px !important;margin-right: 5px;!important;
                        height: 40px !important;
                        width: 40px !important;"
                    />
                  <div>
                      <router-link v-if="val"
                        style="color:#000;font-size: 13px !important;"
                        :title="val.first_name"
                        :to="{name: 'timeline', params:{
                            name: val.first_name
                        },}">

                        {{ val.first_name }} {{ val.last_name }}
                      </router-link>
                      <span style="color:#000;" class="search-span">{{ val.department }}-{{ val.batch }}</span>
                  </div>


                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import _ from "lodash";
export default {
  name: "header",
  data() {
    return {
      count_req_style:false,
      notiCountStyle:false,
      notiCountReqStyle:false,
      countSkillStyle:false,
      addFriendData: {
        id: "",
        requested_id: "",
        requester_id: "",
        status: ""
      },
      authorData: [],
      memberApprove: {
        id: "",
        club_id: "",
        user_id: "",
        status: "",
        id: ""
      },
      updateNoti:{
        id:"",
        status  :"",
        user_id :"",
        club_id :"",
        event_id:"",
        noti    :""
      },
      search: "",
      searchValue: "",
      getSesrchValue: false,
      getAuthUserId:"",
      count_member_request:"",
      athrDt:""
    };
  },
  mounted() {

    this.fetchAuthor();
    axios.get('/count-club-member-request/'+this.$route.params.cl_id)
    .then((response)=>{
        this.count_member_request = response.data.count_request;
    });
    this.getAuthUserId = `${authUser.id}`;
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubMemberAction");
    this.$store.dispatch("getAuthorAction");
    this.$store.dispatch("getCheckAction");
    this.$store.dispatch("getNotiAction");
    this.$store.dispatch("getSkillAction");
    this.$store.dispatch("getSettingAction");
    // if (authUser) {
    //   Echo.private(`ApproveParticipateNoti.${authUser.id}`).listen("ParticipateRequestApprovalNotiEvent", e => {
    //     this.$store.dispatch("getNotiAction");
    //   });
    // }
    if (authUser) {
      Echo.private(`AddFriend.${authUser.id}`).listen("AddFriendEvent", e => {
        this.$store.dispatch("getFriendRequestAction");
      });
    }
  },
  created() {},
  computed: {
    getSettings() {
        return this.$store.getters.getSetting;
    },
    getDatas() {
      return this.$store.getters.getUser;
    },
    getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getClubMembers() {
      return this.$store.getters.getClubMember;
    },
    getAuthors() {
      return this.$store.getters.getAuthor;
    },
    getChecks() {
      return this.$store.getters.getCheck;
    },
    getNotis() {
      return this.$store.getters.getNoti;
    },
    getSkills() {
      return this.$store.getters.getSkill;
    }
  },
  methods: {
    showHome(){
        this.$router.push('/home');
    },
    getCountSkill(getSkills){
        if(getSkills.count_skill !== null){
            this.countSkillStyle = true;
        }
    },
    getCountReq(member){
        // this.$store.dispatch("getClubMemberAction");
        if(member.club_id == this.$route.params.cl_id && member.status == 0){
            this.notiCountReqStyle = true;
        }
    },
    getNotiCount(getNotis){
        if(getNotis.notiCount !== null){
            this.notiCountStyle = true;
        }
    },
    getCountFriendReq(count){
        if(count !== null){
            this.count_req_style = true;

        }
    },
    updateStatus(getNotis){

        getNotis.noti.forEach(el => {
            if(el.user_id == `${authUser.id}`){
                this.updateNoti.id = el.id;
                this.updateNoti.user_id = el.user_id;
                this.updateNoti.club_id = el.club_id;
                this.updateNoti.event_id = el.event_id;
                this.updateNoti.noti = el.noti;
                this.updateNoti.notiStatus = 1;
                axios.post('/update-noti/'+this.updateNoti.id,{
                    status:this.updateNoti.notiStatus,
                    user_id:this.updateNoti.user_id,
                    club_id:this.updateNoti.club_id,
                    event_id:this.updateNoti.event_id,
                    noti:this.updateNoti.noti
                })
                .then((response)=>{
                    setTimeout(()=>{},6000);
                    this.$store.dispatch("getNotiAction");

                })
            }
        });
    },
    // searchUserTimeline(val){

    // },
    searchData: _.debounce(function() {
      if (this.search !== "") {
        axios.get("/home?q=" + this.search).then(response => {
          this.searchValue = response.data.user;
          this.getSesrchValue = true;
          // console.log(response.data.user);
        });
      } else {
        this.getSesrchValue = false;
        this.search = "";
      }
    }, 300),

    approve(member) {
      this.memberApprove.id = member.id;
      this.memberApprove.user_id = member.user_id;
      this.memberApprove.status = 1;
      this.memberApprove.club_id = member.club_id;
      axios
        .post("/approve/" + this.memberApprove.id, {
          user_id: (this.memberApprove.user_id = member.user_id),
          status: (this.memberApprove.status = 1),
          club_id: (this.memberApprove.club_id = member.club_id)
        })
        .then(response => {
          this.$store.dispatch("getCheckAction");
          this.$store.dispatch("getClubMemberAction");
          Toast.fire({
            icon: "success",
            title: "Approve Successfull."
          });
        });
    },
    dismis(member) {
      this.memberApprove.id = member.id;
      axios.post("/dismis/" + this.memberApprove.id).then(response => {
        this.$store.dispatch("getCheckAction");
        this.$store.dispatch("getClubMemberAction");
        Toast.fire({
          icon: "success",
          title: "Join request dismised."
        });
      });
    },
    fetchAuthor() {
      axios.get("/get-author").then(response => {
          response.data.authors.forEach(el => {
              this.authorData = el;
          });
        //   response.data.authorsdt;
          response.data.authorsdt.forEach(adt => {
              this.athrDt = adt;
          });
      });
    },

    logout() {
      axios
        .get("/logout")
        .then(response => {
          localStorage.removeItem("diu-pro-book-sss");
        //   localStorage.removeItem("diu-pro-book-sssAuth");
          this.$router.push("/");
        //   window.location.reload();
          Toast.fire({
            icon: "success",
            title: "Logout Successfull."
          });
        })
        .catch(() => {});
    },
    accept(request) {
      this.addFriendData.id = request.id;
      this.addFriendData.requested_id = request.requested_id;
      this.addFriendData.requester_id = request.requester_id;
      this.addFriendData.status = 1;

      axios
        .post("/accept/" + this.addFriendData.id, {
          id: this.addFriendData.id,
          requested_id: this.addFriendData.requested_id,
          requester_id: this.addFriendData.requester_id,
          status: this.addFriendData.status
        })
        .then(response => {
          this.$store.dispatch("getFriendRequestAction");

          Toast.fire({
            icon: "success",
            title: "Requested Accepted."
          });
        });
    },
    reject(request) {
      this.addFriendData.id = request.id;
      axios.post("/reject/" + this.addFriendData.id).then(response => {
        Toast.fire({
          icon: "warning",
          title: "Requested Rejected."
        });
      });
    },
    ourImage(img) {
      return "/images/" + img;
    }
  }
};
</script>

<style>
.noti-dot {
    background: #42B72A;
    height: 15px;
    width: 15px;
    border-radius: 10px;
    position: absolute;
    bottom: 35px;
    border: 2px solid #fff;
    left: 0;
    right: -20px;
    margin: auto;
    font-size: 10px;
    line-height: 1.2;
    text-align: center;
    top: 6px;
}
.noti-unread-li{
    padding: 5px 5px 5px 5px !important;
    border-bottom: 0px !important;
    border-bottom: 1px solid rgb(0, 255, 255, 0.3) !important;
    margin: 5px;
}
/* .noti-read-li{
    padding: 5px 10px 5px 10px !important;
    border-bottom: 0px !important;
    border-bottom: 1px solid rgb(0, 255, 255, 0.3) !important;
} */
.hasNoti {
  position: relative;
}
.friend-request-ul::before {
  border-right: 10px solid #27aae1 !important;
}
.friend-request-ul::after {
  border-left: 10px solid #27aae1 !important;
}
.search-result {
  position: absolute !important;
  margin-top: 20px;
  background-color: #ddd !important;
  width: 17.2%;
  height: auto;
}
.search-span{
    display: block;
    font-size: 70%;
    margin-top: -5px;
}
a::hover{
    text-decoration: none;
}
a title {
    color:#42B72A;
}
</style>

