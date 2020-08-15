<template>
  <footer id="footer" style="background: #FAFAFA !important;">
    <div class="container">
      <div class="row">
        <div class="footer-wrapper">
          <div class="col-md-3 col-sm-3">
            <div v-for="logo in getSettings.settings" :key="logo.id">
                <a href="#" @click.prevent="showHome()" v-if="logo.logo">
                    <img :src="ourImage(logo.logo)" alt />
                </a>
            </div>

            <ul class="list-inline social-icons">
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
            </ul>
          </div>

          <div class="col-md-2 col-sm-2">
            <h5>About</h5>
            <ul class="footer-links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Language settings</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3">
            <h5>Contact Us</h5>
            <ul class="contact">
              <li>
                <i class="icon ion-ios-telephone-outline"></i>+880 1773-078 995
              </li>
              <li>
                <i class="icon ion-ios-email-outline"></i>diu.probook@gmail.com
              </li>
              <li>
                <i class="icon ion-ios-location-outline"></i>Green Road, Dhaka
              </li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-2">
            <h5>Project Team</h5>
            <ul class="contact">
              <li>
                <img src="images/users/user-11.jpg" alt class="team_image" title="Hasinur Rahman" />
                <img src="images/users/user-12.jpg" alt class="team_image" title="Sazzad Hossain" />
                <img src="images/users/user-13.jpg" alt class="team_image" title="Iqbal Ahmed" />
              </li>
              <li>
                <img src="images/users/user-14.jpg" alt class="team_image" title="Faruk Ahmed" />
                <img src="images/users/user-16.jpg" alt class="team_image" title="Tahmina Tania" />
              </li>
            </ul>
          </div>

          <div class="col-md-2 col-sm-2">
            <h5>Project Supervisor</h5>
            <ul class="contact">
              <li>
                <img src="images/users/user-17.png" alt class="supv_img" title="Tahzib-Ul Islam" />
              </li>
              <li>
                <p style="font-weight: bold; font-size: 14px; color: #39393B;">Tahzib-Ul Islam</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>DIU pro-Book © 2020. All rights reserved</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer",
  data(){
      return{

      }
  },
  mounted(){
      this.$store.dispatch("getSettingAction");
  },
  computed:{
    getSettings() {
        return this.$store.getters.getSetting;
    }
  },
  methods:{
    showHome(){
        this.$router.push('/home');
    },
      ourImage(img) {
        return "/images/" + img;
    }
  }

};
</script>

<style>
</style>
