<template>
  <div>
    <headercomponent></headercomponent>
    <div id="page-contents">
      <div class="container">
        <div class="row">
          <div class="col-md-3 static" v-for="data in getDatas.avatars" :key="data.id">
            <div style="text-align: center;">
              <img :src="ourImage(data.avatar)" alt class="prof_size" />
              <h3 v-if="getDatas.users">{{getDatas.users.first_name}}</h3>
              <p class="text-muted">Creative Director</p>
            </div>
            <div class="line"></div>
            <input type="text" v-show="edit(data)" hidden>
            <div class="suggestions" id="sticky-sidebar">
              <ul class="nav-news-feed">
                <li>
                  <i class="icon ion-ios-paper"></i>
                  <div>
                    <a href="#">My Newfeed</a>
                  </div>
                </li>
                <li>
                  <i class="icon ion-chatboxes"></i>
                  <div>
                    <router-link to="/messanger">Messenger</router-link>
                  </div>
                </li>
                <li v-if="data.avatar == ''">
                  <i class="icon ion-images"></i>
                  <div>
                    <router-link to="/avatar">Update Profile</router-link>
                  </div>
                </li>
                <li v-if="data.avatar">
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
                  <a href="#" to="/basic-info">Basic Information</a>
                </li>
                <li>
                  <i class="icon ion-ios-locked-outline"></i>
                  <a href="#">Change Password</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-7 tab-content">
            <div id="profilephoto">
              <div class="edit-profile-container">
                <div class="block-title">
                  <h4 class="grey">
                    <i class="icon ion-android-checkmark-circle"></i>Upload Profile Picture...
                  </h4>
                  <div class="line"></div>
                  <p>If you are changes this, your profile and cover photo will be change and everybody can see that changes.</p>
                  <div class="line"></div>
                </div>

                <div class="edit-block">
                  <form class="form-inline"
                    @submit.prevent="editMode ? updateImage():uploadImage()"
                    enctype="multipart/form-data">

                    <div class="form-group">
                      <div style="margin-left: 35px;">
                        <label style="float: left;color:#767676;font-size: 15px;" class="label" for="exampleInputFile">Profile Picture</label>

                      </div>

                      <img :src="editMode ? updateAvatar():form.avatar" class="img-style" />
                      <input
                        name="avatar"
                        @change="changeProfileImage($event)"
                        type="file"
                        class="control-file"
                      />
                    </div>
                    <div class="form-group">
                      <div style="float: right;color:#767676;margin-top: -205px;margin-right: 158px;">
                        <label for="exampleInputFile">Cover Photo</label>

                      </div>
                      <img :src="editMode ? updateCoverPhoto():form.cover_photo" class="cover-img-style" />
                      <input
                        name="cover_photo"
                        @change="changeProfileImage1($event)"
                        type="file"
                        class="control-file cover-control-file"
                      />
                    </div>
                    <div>
                      <button class="btn btn-primary" type="submit">Upload</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div id="album">
              <nav class="nav nav-pills flex-column flex-sm-row">
                <!-- <a class="tab-btn" @click.prevent="showAvatars()" href="#">Profile Photo</a> -->
                <a class="tab-btn" @click.prevent="showAlbum()" href="#">Album</a>
              </nav>
              <hr>
              <!-- <ul class="album-photos"
                v-show="avatars"
                v-if="getDatas.photos"
                >
                <li v-for="dataPhoto in getDatas.photos"
                  :key="dataPhoto.id">
                  <div class="img-wrapper" data-toggle="modal" data-target=".photo-1">
                    <img :src="ourImage(dataPhoto.avatar)" alt="photo" />
                  </div>
                  <div class="modal fade photo-1" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                        <img :src="ourImage(dataPhoto.avatar)" alt="photo" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul> -->
              <ul class="album-photos" v-show="album">

                <li v-for="gal in getDatas.gallery" :key="gal.id">
                  <div style="margin-top:3px" class="img-wrapper" data-toggle="modal" data-target="#photo-1">
                    <img style="width:250px;height:150px;" :src="ourImage(gal.avatar)" alt="photo" />
                  </div>

                  <div class="modal fade" id="photo-1" style="padding-right: 17px;opacity: 1;margin-top: 60px;" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" style="margin-top: 95px;padding: 20px;">
                        <img :src="ourImage(gal.avatar)" alt="photo" />
                      </div>
                    </div>
                  </div>
                  <div style="margin-top:3px" class="img-wrapper" data-toggle="modal" data-target=".photo-2">
                    <img style="width:250px;height:150px;" :src="ourImage(gal.cover_photo)" alt="photo" />
                  </div>
                  <div style="padding-right: 17px;opacity: 1;margin-top: 60px;" class="modal fade photo-2" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" style="margin-top: 250px;padding: 20px;">
                        <img :src="ourImage(gal.cover_photo)" alt="photo" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
  name: "profileImage",
  components:{
      headercomponent,
      footercomponent
  },
  data() {
    return {
    //   activeMethod:true,
      avatars:true,
      editMode:false,
      album:false,
      form: new Form({
        avatar     :"",
        cover_photo:""
      }),
      getId:""
    };
  },
  mounted() {
      setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    this.$store.dispatch("userAction");

  },
  created(){
    // if(this.form.avatar != '' || this.form.cover_photo != ''){
    //     this.edit()
    // }else{
    //     this.add()
    // }
  },
  computed: {
    getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    edit(data){
        this.editMode = true;
        this.form.fill(data);
        this.getId = data.id;
    },
    add(){
        this.editMode = false;
        this.form.reset();
    },
    updateAvatar(){

        var img = this.form.avatar
        if (img.length>100) {
            return this.form.avatar
        }else{
            return "/images/"+this.form.avatar
        }
    },
    updateCoverPhoto(){

        let img = this.form.cover_photo
        if (img.length>100) {
            return this.form.cover_photo
        }else{
            return "/images/"+this.form.cover_photo
        }
    },
    showAvatars(){
      this.avatars = true;
      this.album = false;
    },
    showAlbum(){
      this.avatars = false;
      this.album = true;
    },

    uploadImage(){
        if(this.form.avatar != ''){
            this.form.post('/avatar_store')
            .then((response)=>{
                Toast.fire({
                    icon: 'success',
                    title: 'Image added in successfully'
                })
            })
            .catch(()=>{

            })
        }else if(this.form.cover_photo != ''){
            this.form.post('/avatar_store')
            .then((response)=>{
                Toast.fire({
                    icon: 'success',
                    title: 'Image added in successfully'
                })
            })
            .catch(()=>{

            })
        }

    },
    updateImage(){
        this.form.post('/avatar_update/'+this.getId)
        .then((response)=>{
            Toast.fire({
                icon: 'success',
                title: 'Profile update successfully'
            })
        })
        .catch(()=>{

        })
    },

    changeProfileImage(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.form.avatar = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    changeProfileImage1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.form.cover_photo = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    ourImage(img){
        return "/images/"+img;
    }
  }
};
</script>

<style scoped>
.imgStyle {
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
  float: left;
  margin-right: 5px;
  width: 40px;
  height: 50px;
}
.btn.btn-primary {
  padding-right: 8px;
}
.btn.btn-danger {
  padding-right: 10px;
}
.img-style {
  width: 150px;
  height: 140px;
  margin-bottom: 5px;
  margin-top: -3px;
  float: left;
  margin-left: 18px;
  border: dashed 1.5px blue;
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
}

.cover-img-style {
  width: 310px;
  height: 140px;
  margin-bottom: 5px;
      margin-top: -182px;
    float: right;
    margin-right: 45px;
  border: dashed 1.5px blue;
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
}

.label {
  float: left;
}
.control-file {
  margin-top: 170px;
  margin-left: 52px;
  width: 91px;
}
.cover-control-file {
     margin-top: -38px;
    width: 91px;
    margin-left: 340px;
}
.tab-btn{
    float: left;
    height: 0px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 45px;
    text-decoration: none;
}
</style>
