<template>
    <div class="edit-profile-container">
        <div class="block-title">
            <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Create Setting</h4>
            <div class="line"></div>
            <p>Add app settings information...</p>
            <div class="line"></div>
        </div>
        <!-- <input type="text" v-show="settingData(getSettings)" hidden> -->
        <div class="edit-block">
            <img :src="editMode ? updateImage():form.logo" class="logo-img">
            <p class="logo-size">Cover photo size 131 x 40</p>
            <form>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <label class="custom-file-label" for="image">Input File</label>
                        <input type="file" class="cover-img-input" @change="changeClubCover($event)" name="logo"
                            :class="{ 'is-invalid': form.errors.has('logo') }"
                        />

                        <has-error :form="form" field="logo"></has-error>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-6">
                        <label for="name">Email</label>
                        <input
                            class="form-control input-group-lg"
                            type="text"
                            name="email"
                            @keypress="showBtn()"
                            placeholder="unique email"
                            v-model="form.email"
                            :class="{ 'is-invalid': form.errors.has('email') }"
                        />

                        <has-error :form="form" field="email"></has-error>
                    </div>
                    <div class="form-group col-xs-6">
                        <label for="department">Phone Number</label>
                        <input
                            class="form-control input-group-lg"
                            type="text"
                            name="phn_number"
                            title="Phone Number"
                            placeholder="phone number"
                            v-model="form.phn_number"
                            :class="{ 'is-invalid': form.errors.has('phn_number') }"
                        />
                        <has-error :form="form" field="phn_number"></has-error>
                    </div>
                    <div class="form-group col-xs-6" style="width: 100%;">
                        <label for="department">Location</label>
                        <input
                            class="form-control input-group-lg"
                            type="text"
                            name="location"
                            title="Location"
                            placeholder="location"
                            v-model="form.location"
                            :class="{ 'is-invalid': form.errors.has('location') }"
                        />
                        <has-error :form="form" field="location"></has-error>
                    </div>
                </div>
                <button type="submit" v-show="visibelSubmitBtn" @click.prevent="editMode ? update():add()" class="btn btn-primary">Submit</button>
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
      editMode:false,
      setData:"",
      form: new Form({
          logo:"",
          email:"",
          phn_number:"",
          location:""
      })
    }
  },
  mounted() {
    axios.get('/get-setting')
    .then((response)=>{
        response.data.settings.forEach(element => {
            this.editMode = true;
            this.setData = element;
            this.form.logo = this.setData.logo;
            this.form.email = this.setData.email;
            this.form.phn_number = this.setData.phn_number;
            this.form.location = this.setData.location;
        });
    });

  },
  computed: {
    getDatas() {
        return this.$store.getters.getUser;
    },

  },
  methods:{
    showBtn(){
        this.visibelSubmitBtn = true;
    },
    add(){
      this.form.post('/setting')
      .then((response)=>{
          this.$store.dispatch("getSettingAction");
          this.visibelSubmitBtn = false,
          Toast.fire({
              icon: "success",
              title: 'Information upload successfull.'
          });

          this.form.logo = "",
          this.form.email = "",
          this.form.phn_number = "",
          this.form.location = ""

      })
    },
    update(){
        this.form.post('/update-setting/'+this.setData.id)
        .then((response)=>{
            this.$store.dispatch("getSettingAction");
            Toast.fire({
                icon: 'success',
                title: 'Update successfully'
            })
        });
    },
    changeClubCover(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = event => {
            this.form.logo = event.target.result;
        };
        reader.readAsDataURL(file);
    },
    updateImage(){

        let img = this.form.logo
        if (img.length>100) {
            return this.form.logo
        }else{
            return "/images/"+this.form.logo
        }
    },
    ourImage(img){
        return "/images/"+img;
    }
  }
}
</script>

<style>
    .badge-skip{
        float: right;
        margin-top: 5px;
    }
    .logo-img{
        width: 150px !important;
        height: 100px !important;
        background-color: #777;
        margin-left: 220px;
    }
    .logo-size{
        margin-left: -103px;
        position: absolute;
        margin-top: -56px;
        font-size: 20px;
        color: #ddd;
        opacity: .08;
    }
    .cover-img-input{
        width: 92px;
        display: inline-flex !important;
        margin-left: 220px;
    }
</style>
