<template>
  <div>
    <headercomponent></headercomponent>
    <div id="page-contents">
      <div class="container">
        <div class="row">
          <div class="profile-card">
            <h3 class="text-white text-center"><strong style="text-transform:uppercase;">{{$route.params.name}}</strong></h3>
            <h4 class="text-green text-center">Dept. of <strong style="text-transform:uppercase;">{{$route.params.dept}}</strong></h4>
          </div>
          <div class="col-md-3 static">
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

          <div class="col-md-7">
            <div class="friend-list">
              <div class="row">
                <div class="col-md-12">
                  <div v-for="user in getDatas.user" :key="user.id">
                      <div v-if="userData == user.department && $route.params.name == user.batch">

                        <div class="friend-card col-md-6 col-sm-6" v-for="avtr in user.avatar" :key="avtr.id">
                            <img style="height: 105px;width: 100%;background-color: #ca9f9f59;" v-if="avtr.cover_photo" :src="ourImage(avtr.cover_photo)" alt="profile-cover" class="img-responsive cover" />
                            <div class="card-info">
                                <img v-if="avtr.avatar" :src="ourImage(avtr.avatar)" alt="user" class="profile-photo-lg" />
                                <div class="friend-info">
                                    <router-link v-if="user.first_name"
                                        title="View Details"
                                        :to="{name: 'timeline', params:{
                                            name: user.first_name
                                        },}" style="line-height: 0 !important;
                                        padding-bottom: 0 !important;
                                        padding-top: 0 !important;
                                        padding-left: 5px !important;
                                        padding-right: 5px !important;" class="btn btn-info btn-sm pull-right" href="profile.html">
                                    <i style="font-size: 30px;" class = "icon icon ion-ios-eye"></i>
                                    </router-link>
                                    <h5>
                                    <router-link v-if="user.first_name"
                                        :title="user.first_name"
                                        :to="{name: 'timeline', params:{
                                                name: user.first_name
                                            },}" class="profile-link">{{ user.first_name }}</router-link>
                                    </h5>
                                    <p>{{ user.batch }}</p>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2 static">
            <div class="suggestions" id="sticky-sidebar">
              <h4 class="grey">Join Club</h4>
              <div class="follow-user">
                <img
                  src="images/group-icon/group-1.jpg"
                  alt
                  class="profile-photo-xs xs-shadow pull-left"
                />
                <div>
                  <h5>
                    <a href="timeline.html">Programming Club</a>
                  </h5>
                  <p class="text-green">60 Members</p>
                </div>
              </div>
              <div class="follow-user">
                <img
                  src="images/group-icon/group-1.jpg"
                  alt
                  class="profile-photo-xs xs-shadow pull-left"
                />
                <div>
                  <h5>
                    <a href="timeline.html">Cultural Club</a>
                  </h5>
                  <p class="text-green">55 Members</p>
                </div>
              </div>
              <div class="follow-user">
                <img
                  src="images/group-icon/group-1.jpg"
                  alt
                  class="profile-photo-xs xs-shadow pull-left"
                />
                <div>
                  <h5>
                    <a href="timeline.html">Cricet Club</a>
                  </h5>
                  <p class="text-green">80 Members</p>
                </div>
              </div>
              <div class="follow-user">
                <img
                  src="images/group-icon/group-1.jpg"
                  alt
                  class="profile-photo-xs xs-shadow pull-left"
                />
                <div>
                  <h5>
                    <a href="timeline.html">English Club</a>
                  </h5>
                  <p class="text-green">40 Members</p>
                </div>
              </div>
              <div class="follow-user">
                <img
                  src="images/group-icon/group-1.jpg"
                  alt
                  class="profile-photo-xs xs-shadow pull-left"
                />
                <div>
                  <h5>
                    <a href="timeline.html">Debating Club</a>
                  </h5>
                  <p class="text-green">65 Members</p>
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
  name: "batch",
  components:{
      headercomponent,
      footercomponent
  },
  data(){
      return{
          userData:""
      }
  },
    mounted(){
        this.userData = this.$route.params.dept;
        this.$store.dispatch("userAction");
    },
    computed: {
        getDatas() {
            return this.$store.getters.getUser;
        }
    },
    methods:{
        ourImage(img) {
            return "/images/" + img;
        }
    }
}
</script>

<style>
</style>
