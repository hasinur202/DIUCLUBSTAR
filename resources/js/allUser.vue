.<template>
  <div>
    <div v-show="showUsrData">
        <div>
            <ul>
                <li>First Name : {{ usrData.first_name}}</li>
                <li>Last Name : {{ usrData.Last_name}}</li>
                <li>Email : {{ usrData.email}}</li>
                <li>Reg Number : {{ usrData.id_number}}</li>
                <li>Birth Date : {{ usrData.birth_date}}</li>
                <li> Gender : {{ usrData.gender}}</li>
                <li>City : {{ usrData.city}}</li>
                <li>Country : {{ usrData.country}}</li>
            </ul>
            <div class="row col-md-12">
                <div class="col-md-6">
                    <img style="width: 100%;" :src="ourImage(usrData.image1)" alt="">
                </div>
                <div class="col-md-6">
                    <img style="width: 100%;" :src="ourImage(usrData.image2)" alt="">
                </div>
            </div>
        </div>
    </div>
    <div v-show="usrDatas">
      <h4 style="color:#000">Registered User</h4>
      <hr />

      <div class="friendList-content" v-for="usr in getDatas.allUsr" :key="usr.id">
        <div class="friendList" v-if="usr.status == 0">
          <div class="friendInfo">
            <div v-for="uAvtr in usr.avatar" :key="uAvtr.id">
              <img
                v-if="uAvtr.avatar"
                :src="ourImage(uAvtr.avatar)"
                alt="Approved-User"
                class="friend-avatar"
              />
            </div>
            <a href="#" @click.prevent="getUsr(usr)">{{ usr.first_name }}</a>
            <span class="friend-list-span">{{ usr.department }}-{{ usr.batch }}</span>
          </div>
          <div class="unfriend">
            <form>
              <a
                type="submit"
                @click.prevent="approveUser(usr)"
                class="unfriendBtn"
                href="#"
              >Approve</a>
              <a
                type="submit"
                @click.prevent="rejectUser(usr)"
                style="background-color: #D9534F !important;"
                class="unfriendBtn"
                href="#"
              >Reject</a>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div v-show="usrDatas">
      <hr />
      <h4 style="color:#000">Approved User</h4>
      <hr />

        <div class="friendList-content" v-for="us in getDatas.allUsr" :key="us.id">
            <div class="friendList" v-if="us.status == 1">
                <div class="friendInfo">
                <div v-for="uAvt in us.avatar" :key="uAvt.id">
                    <img
                    v-if="uAvt.avatar"
                    :src="ourImage(uAvt.avatar)"
                    alt="Login-logout-register"
                    class="friend-avatar"
                    />
                </div>

                <a href="#">{{ us.first_name }}</a>
                <span class="friend-list-span">{{ us.department }}-{{ us.batch }}</span>
                </div>
                <div class="unfriend">
                <form>
                    <a
                    type="submit"
                    @click.prevent="deleteUser(us)"
                    style="background-color: #D9534F !important;"
                    class="unfriendBtn"
                    href="#"
                    >Delete</a>
                </form>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "allUser",
  data() {
    return {
        showUsrData:false,
        usrDatas:true,
        usrData:"",
        form: new Form({
            id:"",
            first_name: "",
            last_name: "",
            id_number: "",
            email: "",
            password: "",
            birth_date: "",
            gender: "",
            city: "",
            country: "",
            image1:"",
            image2:"",
            status:""
        })
    };
  },
  mounted() {
    this.$store.dispatch("userAction");
  },
  created() {},
  computed: {
    getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    getUsr(usr){
        this.usrData = usr;
        this.showUsrData = true;
        this.usrDatas = false;
    },
    approveUser(usr) {
      this.form.id = usr.id;
      this.form.first_name = usr.first_name;
      this.form.last_name = usr.last_name;
      this.form.id_number = usr.id_number;
      this.form.email = usr.email;
      this.form.password = usr.password;
      this.form.birth_date = usr.birth_date;
      this.form.gender = usr.gender;
      this.form.city = usr.city;
      this.form.country = usr.country;
      this.form.image1 = usr.image1;
      this.form.image2 = usr.image2;
      this.form.status = 1;
      this.form
        .post("/approve-register-user/"+ this.form.id)
        .then(response => {
          this.$store.dispatch("userAction");
          Toast.fire({
            icon: "success",
            title: "User Approved Successfull."
          });
        });
    },
    rejectUser(usr) {
      this.form.id = usr.id;
      this.form
        .post("/reject-register-user/" + this.form.id)
        .then(response => {
          this.$store.dispatch("userAction");
          Toast.fire({
            icon: "warning",
            title: "User Rejected Successfull."
          });
        });
    },
    deleteUser(us) {
      this.form.id = us.id;
      this.form
        .post("/delete-register-user/" + this.form.id)
        .then(response => {
          this.$store.dispatch("userAction");
          Swal.fire({
            icon: "warning",
            title: "Are You Sure To Delete This User ???",
            text: "Please click ok"
          });
        });
    },
    ourImage(img) {
      return "/images/" + img;
    },
  }
};
</script>
<style>
</style>
