<template>
    <div class="edit-profile-container">
        <div class="block-title">
            <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Create Club</h4>
            <div class="line"></div>
            <p>If you are changes this, your group cover photo will be change and everybody can see that changes.</p>
            <div class="line"></div>
        </div>

        <div class="edit-block">
            <img :src="form.cover" class="img-thumbnail">
            <p class="cover-size">Cover photo size 820 x 312</p>
            <form>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <label class="custom-file-label" for="image">Input File</label>
                        <input type="file" class="cover-img-input" @change="changeClubCover($event)" name="cover"
                            :class="{ 'is-invalid': form.errors.has('cover') }"
                        />

                    <has-error :form="form" field="cover"></has-error>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-6">
                    <label for="name">Club Name</label>
                    <input
                        class="form-control input-group-lg"
                        type="text"
                        name="club_name"
                        @keypress="showBtn()"
                        placeholder="club name must be unique"
                        v-model="form.club_name"
                        :class="{ 'is-invalid': form.errors.has('club_name') }"
                    />

                    <has-error :form="form" field="club_name"></has-error>
                    </div>
                    <div class="form-group col-xs-6">
                    <label for="department">Department</label>
                    <input
                        class="form-control input-group-lg"
                        type="text"
                        name="dept"
                        title="Department"
                        placeholder="department"
                        v-model="form.dept"
                        :class="{ 'is-invalid': form.errors.has('dept') }"
                    />
                    <has-error :form="form" field="dept"></has-error>
                    </div>
                </div>
                <!-- <div class="row">
                    <div class="form-group col-xs-6">
                    <label for="country">Authority</label>
                    <span class="badge badge-danger badge-skip">skip</span>
                    <select
                        v-model="form.author_id"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('author') }"
                        >
                        <option v-for="userName in getDatas.allUser"
                        :key="userName.id" :value="userName.id">{{ userName.first_name }}
                        </option>
                    </select>
                    </div>
                    <div class="form-group col-xs-6">
                    <label for="country">Designation</label>
                    <span class="badge badge-danger badge-skip">skip</span>
                    <select
                        v-model="form.designation"
                        class="form-control"
                        :class="{ 'is-invalid': form.errors.has('designation') }"
                        >
                        <option value="President">President</option>
                        <option value="Supervisior">Supervisior</option>
                        <option value="Publisher">Publisher</option>
                        <option value="Captin">Captin</option>
                    </select>
                    </div>
                </div> -->
                <div class="row">
                    <div class="form-group col-xs-12">
                    <label for="my-info">Club About</label>
                    <span style="float:right;margin-top:5px;" class="badge badge-danger">skip</span>
                    <textarea
                        name="about"
                        class="form-control"
                        placeholder="Some texts club about..."
                        v-model="form.about"
                        rows="4"
                        cols="400"
                    ></textarea>
                    </div>
                </div>
                <button type="submit" v-show="visibelSubmitBtn" @click.prevent="add()" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name:'create_club',
  data(){
    return{
      visibelSubmitBtn:false,
      form: new Form({
          club_name:"",
          dept:"",
          cover:"",
          about:""
      })
    }
  },
  mounted() {
    // this.$store.dispatch("userAction");
    // this.$store.dispatch("getFriendRequestAction");
    // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
  },
//   computed: {
//     getDatas() {
//     return this.$store.getters.getUser;
//     },
//     getFriendRequests() {
//     return this.$store.getters.getFriendRequest;
//     }
//   },
  methods:{
    showBtn(){
        this.visibelSubmitBtn = true;
    },
    add(){
      this.form.post('/club-info')
      .then((response)=>{
          this.visibelSubmitBtn = false,
          Toast.fire({
              icon: "success",
              title: 'Information upload successfull.'
          });

          this.form.club_name = "",
          this.form.dept = "",
          this.form.cover = "",
          this.form.about = ""

      })
    },
    changeClubCover(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = event => {
            this.form.cover = event.target.result;
        };
        reader.readAsDataURL(file);
    },
  }
}
</script>

<style>
    .badge-skip{
        float: right;
        margin-top: 5px;
    }
    .img-thumbnail{
        width: 594px !important;
        height: 200px !important;
        background-color: #777;
    }
    .cover-size{
        margin-left: 95px;
        position: absolute;
        margin-top: -110px;
        font-size: 36px;
        color: #ddd;
        opacity: .08;
    }
    .cover-img-input{
        width: 92px;
        display: inline-flex !important;
    }
</style>
