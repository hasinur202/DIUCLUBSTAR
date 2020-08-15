<template>
    <div class="edit-profile-container">
        <div class="block-title">
            <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Add Club Information</h4>
            <a @click.prevent="addAuthor()" style="margin-top: -40px" class="pull-right btn btn-primary">Add Author</a>
            <div class="line"></div>
            <p>If you are changes this, your group cover photo will be change and everybody can see that changes.</p>
            <div class="line"></div>
        </div>
        <div v-show="add_author" class="edit-block">
            <div class="row">
                <form style="width: 100%;" class="navbar-form navbar-right hidden-sm" v-show="searchBar">
                    <label for="country">Select Author</label>
                    <div class="form-group" style="width: 100%;">
                        <a href="#" @click.prevent="searchData()" type="submit">
                            <i class="icon ion-android-search" style="font-size: 15px;
                                color: #000;
                                position: absolute;
                                z-index: 9999;
                                margin-left: 88%;
                                margin-top: 15px;">
                            </i>
                        </a>

                        <input
                            style="background: #fff !important;min-width: 307px !important;
                            border: 1px solid #ddd;position: relative;margin-top: 7px;color:#000"
                            type="text"
                            v-model="search"
                            @keyup.prevent="searchData()"
                            class="form-control"
                            placeholder="Search friends"
                        />
                    </div>
                    <div style="width: 95% !important;
                        overflow-y: scroll;
                        margin-top: -15px;
                        height: 200px;" class="option search-result" v-show="getSesrchValue">
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
                                <a v-if="val"
                                    style="color:#000;font-size: 13px !important;"
                                    href="#" @click.prevent ="getVal(val)">

                                    {{ val.first_name }} {{ val.last_name }}
                                </a>
                                <span style="color:#000;" class="search-span">{{ val.department }}-{{ val.batch }}</span>
                            </div>


                            </li>
                        </ul>
                    </div>
                </form>
                <form v-show="!searchBar">
                    <div class="form-group col-xs-6">
                        <label for="country">Authority</label>
                        <span class="badge badge-danger badge-skip">skip</span>
                        <!-- <select
                            v-model="author.author_id"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('author_id') }"
                            >
                            <option v-for="userName in getDatas.all"
                            :key="userName.id" :value="userName.id">{{ userName.first_name }}
                            </option>

                        </select> -->
                        <input type="text" v-model="author.author_name" @keydown="blankInpt()" class="form-control">
                        <input type="text" v-model="author.author_id" @keydown="blankInpt()" class="form-control" style="display:none;">
                    </div>
                    <div class="form-group col-xs-6">
                        <label for="country">Designation</label>
                        <span class="badge badge-danger badge-skip">skip</span>
                        <select
                            v-model="author.designation"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('designation') }"
                            >
                            <option value="Moderator">Moderator</option>
                            <option value="President">President</option>
                            <option value="Secretary">Secretary</option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>
                    <button type="submit" @click.prevent="add()" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
        <div class="edit-block" v-show="!add_author">
            <img :src="updateCover()" class="img-thumbnail">
            <p class="cover-size">Cover photo size 820 x 312</p>
            <form>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <label class="custom-file-label" for="image">Input File</label>
                        <input type="file" class="cover-img-input" @change="changePhoto($event)" name="cover">
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-6">
                    <label for="name">Club Name</label>
                    <input
                        class="form-control input-group-lg"
                        type="text"
                        name="club_name"
                        placeholder="club name"
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
                <button type="submit" @click.prevent="update()" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import _ from "lodash";
export default {
  name:'add_club_info',
  data(){
    return{
      add_author:false,
      getSesrchValue: false,
      searchBar:true,
      searchValue: "",
      search: "",
      form: new Form({
          id:'',
          club_name:"",
          dept:"",
          cover:"",
          about:""
      }),
      author:{
          author_name:'',
          club_id:'',
          author_id:'',
          designation:''
      }
    }
  },
  mounted() {
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubInfoAction");


    // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
    this.getClubs.clubs.forEach(club => {
        if(this.$route.params.name == club.club_name){
            this.form.fill(club)
        }
    });
  },
  computed: {
    getDatas() {
    return this.$store.getters.getUser;
    },
    getFriendRequests() {
    return this.$store.getters.getFriendRequest;
    },
    getClubs(){
        return this.$store.getters.getClub;
    }
  },
  methods:{
    blankInpt(){
        if(this.author.author_name == ""){
            this.author.author_id;
            this.searchBar = true;
            this.getSesrchValue = false;
        }else{
            this.searchBar = false;
            this.getSesrchValue = false;
        }
    },
    getVal(val){
        this.searchBar = false;
        this.author.author_name = val.first_name + ' ' + val.last_name;
        this.author.author_id = val.id;
        this.search = "";
    },
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
    addAuthor(){
        this.add_author = true;
    },
    update(){

        this.form.post('/club-update/'+this.form.id)
        .then((response)=>{
            this.$store.dispatch("getClubInfoAction");
            Toast.fire({
                icon: "success",
                title: 'Club information updated'
            });
        })

    },
    add(){
      this.getClubs.clubs.forEach(club => {
            if(this.$route.params.name == club.club_name){
                this.author.club_id = club.id
                axios.post('/author-store',{
                    club_id:this.author.club_id,
                    author_id:this.author.author_id,
                    designation:this.author.designation
                })
                .then((response)=>{

                    Toast.fire({
                        icon: "success",
                        title: 'Create Author successfull.'
                    });
                })
            }
        });

    },
    ourImage(img) {
        return "/images/" + img;
    },
    updateCover(){
        if(this.form.cover == ''){
            let img = this.form.cover
            if (img) {
                return this.form.cover
            }else{
                return "/images/"+this.form.cover
            }
        }else{
            let img = this.form.cover
            if (img.length>100) {
                return this.form.cover
            }else{
                return "/images/"+this.form.cover
            }

        }
    },
    changePhoto(event) {
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
