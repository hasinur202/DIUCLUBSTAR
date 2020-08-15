<template>
  <div>
    <header id="header-inverse">
      <nav class="navbar navbar-default navbar-fixed-top menu">
        <div class="container">
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right main-menu">
              <li>
                <a title="Contact" href="#" @click.prevent="visibleContact()">
                  <img src="images/group-icon/contact.jpg" alt="Contact" class="profile-photo-xs" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <div id="lp-register">
      <div class="container wrapper">

        <div class="flash-news" style="width: 100%; margin-bottom: 30px;margin-top: -65px;">
          <div class="flash-news-header">
            <h4 class="flash-news-title">Running Events</h4>
          </div>
          <div class="marquee">
            <marquee
              class="dinvv"
              behavior="scroll"
              direction="left"
              onmouseover="this.stop();"
              onmouseout="this.start();"
            >
              <div
                class="news-post-title dingu"
                v-for="event in getClubEvents.events"
                :key="event.id"
              >
                <a>
                  <span class="news-post-img">
                    <img v-if="event.photo" :src="ourImage(event.photo)" />
                  </span>
                  <h3>Event of {{ event.name }} going on</h3>
                </a>
              </div>
            </marquee>
          </div>
        </div>
        <div class="row" v-show="showContact" style="margin-top: 140px !important;">
            <div class="col-md-10 col-md-offset-1">
                <div class="contact-us">
                    <div class="row">
                        <div class="pull-right" style="margin-top: -35px;margin-right: -20px;">
                            <a style="font-size:15px !important;" href="#" class="badge badge-danger" @click.prevent="hideContent()">
                                x
                            </a>
                        </div>
                        <div class="col-md-8 col-sm-7">
                            <h4 class="grey">Leave a Message</h4>
                            <form class="contact-form">
                                <div class="form-group">
                                <i class="icon ion-person"></i>
                                <input
                                    disabled
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Enter your name *"
                                    required="required"
                                    data-error="Name is required."
                                />
                                </div>
                                <div class="form-group">
                                <i class="icon ion-email"></i>
                                <input
                                    disabled
                                    id="contact-email"
                                    type="text"
                                    name="email"
                                    class="form-control"
                                    placeholder="Enter your email *"
                                    required="required"
                                    data-error="Email is required."
                                />
                                </div>
                                <div class="form-group">
                                <i class="icon ion-android-call"></i>
                                <input
                                    disabled
                                    id="contact-phone"
                                    type="text"
                                    name="phone"
                                    class="form-control"
                                    placeholder="Enter your phone *"
                                    required="required"
                                    data-error="Phone is required."
                                />
                                </div>

                                <div class="form-group">
                                <textarea
                                    disabled
                                    id="form-message"
                                    name="message"
                                    class="form-control"
                                    placeholder="Leave a message for us *"
                                    rows="3"
                                    required="required"
                                ></textarea>
                                </div>
                            </form>
                            <button disabled class="btn-primary">Send a Message</button>
                        </div>
                        <div class="col-md-4 col-sm-5" v-for="set in getSettings.settings" :key="set.id">
                            <h4 class="grey">Reach Us</h4>
                            <div class="reach">
                                <span class="phone-icon">
                                <i class="icon ion-android-call"></i>
                                </span>
                                <p>+88{{ set.phn_number }}</p>
                            </div>
                            <div class="reach">
                                <span class="phone-icon">
                                <i class="icon ion-email"></i>
                                </span>
                                <p>{{ set.email }}</p>
                            </div>
                            <div class="reach">
                                <span class="phone-icon">
                                <i class="icon ion-ios-location"></i>
                                </span>
                                <p>{{ set.location }}</p>
                            </div>
                            <!-- <ul class="list-inline social-icons">
                                <li>
                                <a href="#">
                                    <i class="icon ion-social-facebook"></i>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i class="icon ion-social-twitter"></i>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i class="icon ion-social-googleplus"></i>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i class="icon ion-social-pinterest"></i>
                                </a>
                                </li>
                                <li>
                                <a href="#">
                                    <i class="icon ion-social-linkedin"></i>
                                </a>
                                </li>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row" v-show="showLogin">
          <div class="col-sm-5">
            <div class="intro-texts">
              <h1>
                Welcome to
                <strong class="text-green">DIU Club Star</strong>
              </h1>

              <h3 class="text-magenta">Publish Your Creativity !!!</h3>
              <p>
                'Diu Club Star' helps to you as a eligible participants to participate ‍any
                club related program/event of Dhaka International University
                via testing and selecting your creativity.
                <br/>
                <br/>Why are you waiting for? Participate now.
              </p>
              <button disabled class="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div class="col-sm-6 col-sm-offset-1">
            <div class="reg-form-container">
              <div class="reg-options">
                <ul class="nav nav-tabs">
                  <li class="active">
                    <a href="#login" data-toggle="tab">Login</a>
                  </li>
                  <li>
                    <router-link to="/signUp">Register</router-link>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div class="tab-pane active" id="login">
                  <h3>Login</h3>
                  <p class="text-muted">Log into your account</p>

                  <form class="row" name="Login_form" id="Login_form" @submit.prevent="login()">
                    <div class="form-group col-md-12">
                      <label for="my-email" class="sr-only">Email</label>
                      <input
                        v-model="user.email"
                        id="my-email"
                        class="form-control"
                        type="email"
                        name="email"
                        title="Enter Email"
                        placeholder="Your Email"
                        :class="{ 'is-invalid': user.errors.has('email') }"
                      />
                      <has-error :form="user" field="email"></has-error>
                    </div>
                    <div class="form-group col-md-12">
                      <label for="my-password" class="sr-only">Password</label>
                      <input
                        v-model="user.password"
                        id="my-password"
                        class="form-control"
                        type="password"
                        name="password"
                        title="Enter password"
                        placeholder="Password"
                        :class="{ 'is-invalid': user.errors.has('password') }"
                      />
                      <has-error :form="user" field="password"></has-error>
                    </div>
                    <div class="col-8" style="margin-left: 11px;">
                      <div class="icheck-primary">
                        <input
                          type="checkbox"
                          id="remember"
                          name="remember_me"
                          v-model="user.remember_me"
                        />
                        <label for="remember">Remember Me</label>
                      </div>
                    </div>
                    <button
                      style="margin-left: 11px;"
                      type="submit"
                      class="btn btn-primary"
                    >Login Now</button>
                  </form>
                  <p>
                    <a href="#">Forgot Password?</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jwt from "jsonwebtoken";
export default {
  name: "login",
  data() {
    return {
      showContact:false,
      showLogin:true,
      user: new Form({
        email: "",
        password: "",
        remember_me: false
      })
    };
  },
  mounted() {
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("getSettingAction");

  },
  computed: {
    getClubEvents() {
      return this.$store.getters.getClubEvent;
    },
    getSettings() {
      return this.$store.getters.getSetting;
    }
  },
  methods: {
    visibleContact(){
        this.showContact = true;
        this.showLogin = false;
    },
    hideContent(){
        this.showContact = false;
        this.showLogin = true;
    },
    ourImage(img) {
      return "/images/" + img;
    },
    login(user) {
      this.user
        .post("/")
        .then(response => {


          var token = jwt.sign(
            { user: user },
            "@diu#pro$book%day&40!sss&2020@Final#PrOjeCt"
          );
          //   var auth = `${authUser}`;
          localStorage.setItem("diu-pro-book-sss", token);
          //   localStorage.setItem("diu-pro-book-sssAuth", auth);
          window.location.reload(()=>{
              this.$router.push("/home");
          });


          Toast.fire({
            icon: "success",
            title: "Login Successfull."
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "warning",
            title: "Wrong Cridentials."
          });
        });
    }
  }
};
</script>

<style>
.flash-news:after {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  right: 0px;
  width: 30px;
  height: 38px;
  top: 1px;
  z-index: 2;
  position: absolute;
}

.flash-news {
  float: left;
  position: relative;
  width: calc(100% - 350px);
  overflow: hidden;
}

.flash-news-header:after {
  content: "";
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  right: -30px;
  width: 30px;
  height: 38px;
  top: 1px;
  z-index: 999;
  display: inline-block;
  position: absolute;
}

.flash-news-header {
  background-color: #ee4930;
  float: left;
  z-index: 2;
  position: absolute;
  left: 0;
}

.flash-news-title {
  color: #fff;
  height: 40px;
  margin: 0;
  padding: 12px 15px 14px;
  text-transform: uppercase;
  font-size: 14px;
}

.marquee:before {
  background-color: #333;
  content: "";
  width: 100%;
  top: 0;
  bottom: 0;
}

.marquee {
  /*background-color: #fff;*/
  /*border: 1px solid #e7e7e7;*/
  height: 40px;
  overflow: hidden;
  width: 100%;
}

.marquee .news-post-img img {
  border-radius: 5px;
  height: 50px;
  width: 60px;
  margin-right: 3px;
}

.marquee .news-post-title {
  margin-right: 5px;
  display: inline-block;
  background-color: #51262a;
  padding-right: 5px;
}

.marquee .news-post-title h3 {
  display: inline-block;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  color: #fff;
  letter-spacing: 0.2px;
}

.dinvv {
  animation: 46.67s linear 0s infinite normal none running
    marqueeAnimation-1458147;
  transform: translateX(0px);
}
</style>
