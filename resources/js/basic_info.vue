<template>
  <div>
    <headercomponent></headercomponent>
    <div id="page-contents">
      <div class="container">
        <div class="row">
          <div class="col-md-3 static">
            <div v-for="data in getDatas.avatars" :key="data.id" style="text-align: center;">
              <img :src="ourImage(data.avatar)" alt class="prof_size" />
              <h3 v-if="getDatas.users">{{getDatas.users.first_name}}</h3>
              <p class="text-muted">Creative Director</p>
            </div>
            <div class="line"></div>

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
                <li>
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
                  <router-link to="/basic-info">Basic Information</router-link>
                </li>
                <li>
                  <i class="icon ion-ios-locked-outline"></i>
                  <a href="#">Change Password</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-7 tab-content">
            <div id="edit-profile">
              <div class="edit-profile-container">
                <div class="block-title">
                  <h4 class="grey">
                    <i class="icon ion-android-checkmark-circle"></i>Edit basic information
                  </h4>
                  <div class="line"></div>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                  <div class="line"></div>
                </div>
                <div class="edit-block">
                  <form
                    class="form-inline"
                    @keypress="type()"
                  >
                    <div class="row">
                      <div class="form-group col-xs-6">
                        <label for="name">My name</label>
                        <input
                          class="form-control input-group-lg"
                          type="text"
                          name="first_name"
                          placeholder="first name"
                          v-model="form.first_name"
                          :class="{ 'is-invalid': form.errors.has('first_name') }"
                        />
                        <has-error :form="form" field="first_name"></has-error>
                      </div>
                      <div class="form-group col-xs-6">
                        <label for="email">Last Name</label>
                        <input
                          class="form-control input-group-lg"
                          type="text"
                          name="last_name"
                          title="Enter last name"
                          placeholder="last name"
                          v-model="form.last_name"
                          :class="{ 'is-invalid': form.errors.has('last_name') }"
                        />
                        <has-error :form="form" field="last_name"></has-error>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-6">
                        <label for="id_number">Id Number</label>
                        <input
                          class="form-control input-group-lg"
                          type="text"
                          name="id_number"
                          title="id number"
                          placeholder="id number"
                          v-model="form.id_number"
                          :class="{ 'is-invalid': form.errors.has('id_number') }"
                        />
                        <has-error :form="form" field="id_number"></has-error>
                      </div>

                      <div class="form-group col-xs-6">
                        <label for="email">Email</label>
                        <input
                          class="form-control input-group-lg"
                          type="email"
                          name="email"
                          title="Enter email"
                          placeholder="email"
                          v-model="form.email"
                          :class="{ 'is-invalid': form.errors.has('email') }"
                        />
                        <has-error :form="form" field="email"></has-error>
                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group col-xs-6">
                        <label for="birth_date">Date of Birth</label>
                        <input
                          type="date"
                          v-model="form.birth_date"
                          class="form-control input-group-lg"
                          name="birth_date"
                          :class="{ 'is-invalid': form.errors.has('birth_date') }"
                        />
                        <has-error :form="form" field="birth_date"></has-error>
                      </div>
                      <div class="form-group gender col-xs-6">
                        <label for="gender">Gender</label>
                        <span class="custom-label">
                          <strong>I am a:</strong>
                        </span>
                        <label class="radio-inline">
                          <input
                            type="radio"
                            v-model="form.gender"
                            value="male"
                            name="gender"
                            :class="{ 'is-invalid': form.errors.has('gender') }"
                          />Male
                        </label>
                        <label class="radio-inline">
                          <input
                            type="radio"
                            v-model="form.gender"
                            value="female"
                            name="gender"
                            :class="{ 'is-invalid': form.errors.has('gender') }"
                          />
                          Female
                          <has-error :form="form" field="gender"></has-error>
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-6">
                        <label for="department">Department</label>
                        <input
                          class="form-control input-group-lg"
                          type="text"
                          name="department"
                          title="Department"
                          placeholder="department"
                          v-model="form.department"
                          :class="{ 'is-invalid': form.errors.has('department') }"
                        />
                        <has-error :form="form" field="department"></has-error>
                      </div>

                      <div class="form-group col-xs-6">
                        <label for="batch">Batch</label>
                        <input
                          class="form-control input-group-lg"
                          type="text"
                          name="batch"
                          title="Enter batch"
                          placeholder="batch"
                          v-model="form.batch"
                          :class="{ 'is-invalid': form.errors.has('batch') }"
                        />
                        <has-error :form="form" field="batch"></has-error>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-6">
                        <label for="city">My city</label>
                        <input
                          class="form-control input-group-lg"
                          type="text"
                          name="city"
                          v-model="form.city"
                          title="Enter city"
                          placeholder="Your city"
                          :class="{ 'is-invalid': form.errors.has('city') }"
                        />
                        <has-error :form="form" field="city"></has-error>
                      </div>
                      <div class="form-group col-xs-6">
                        <label for="country">My country</label>
                        <select
                          name="country"
                          v-model="form.country"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('country') }"
                        >
                          <option value="country">Country</option>
                          <option value="AFG">Afghanistan</option>
                          <option value="ALA">Ƭand Islands</option>
                          <option value="ALB">Albania</option>
                          <option value="DZA">Algeria</option>
                          <option value="ASM">American Samoa</option>
                          <option value="AND">Andorra</option>
                          <option value="AGO">Angola</option>
                          <option value="AIA">Anguilla</option>
                          <option value="ATA">Antarctica</option>
                          <option value="ATG">Antigua and Barbuda</option>
                          <option value="ARG">Argentina</option>
                          <option value="ARM">Armenia</option>
                          <option value="ABW">Aruba</option>
                          <option value="AUS">Australia</option>
                          <option value="AUT">Austria</option>
                          <option value="AZE">Azerbaijan</option>
                          <option value="BHS">Bahamas</option>
                          <option value="BHR">Bahrain</option>
                          <option value="BGD" selected>Bangladesh</option>
                          <option value="BRB">Barbados</option>
                          <option value="BLR">Belarus</option>
                          <option value="BEL">Belgium</option>
                          <option value="BLZ">Belize</option>
                          <option value="BEN">Benin</option>
                          <option value="BMU">Bermuda</option>
                          <option value="BTN">Bhutan</option>
                          <option value="BOL">Bolivia, Plurinational State of</option>
                          <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                          <option value="BIH">Bosnia and Herzegovina</option>
                          <option value="BWA">Botswana</option>
                          <option value="BVT">Bouvet Island</option>
                          <option value="BRA">Brazil</option>
                          <option value="IOT">British Indian Ocean Territory</option>
                          <option value="BRN">Brunei Darussalam</option>
                          <option value="BGR">Bulgaria</option>
                          <option value="BFA">Burkina Faso</option>
                          <option value="BDI">Burundi</option>
                          <option value="KHM">Cambodia</option>
                          <option value="CMR">Cameroon</option>
                          <option value="CAN">Canada</option>
                          <option value="CPV">Cape Verde</option>
                          <option value="CYM">Cayman Islands</option>
                          <option value="CAF">Central African Republic</option>
                          <option value="TCD">Chad</option>
                          <option value="CHL">Chile</option>
                          <option value="CHN">China</option>
                          <option value="CXR">Christmas Island</option>
                          <option value="CCK">Cocos (Keeling) Islands</option>
                          <option value="COL">Colombia</option>
                          <option value="COM">Comoros</option>
                          <option value="COG">Congo</option>
                          <option value="COD">Congo, the Democratic Republic of the</option>
                          <option value="COK">Cook Islands</option>
                          <option value="CRI">Costa Rica</option>
                          <option value="CIV">C𴥠d'Ivoire</option>
                          <option value="HRV">Croatia</option>
                          <option value="CUB">Cuba</option>
                          <option value="CUW">Cura袯</option>
                          <option value="CYP">Cyprus</option>
                          <option value="CZE">Czech Republic</option>
                          <option value="DNK">Denmark</option>
                          <option value="DJI">Djibouti</option>
                          <option value="DMA">Dominica</option>
                          <option value="DOM">Dominican Republic</option>
                          <option value="ECU">Ecuador</option>
                          <option value="EGY">Egypt</option>
                          <option value="SLV">El Salvador</option>
                          <option value="GNQ">Equatorial Guinea</option>
                          <option value="ERI">Eritrea</option>
                          <option value="EST">Estonia</option>
                          <option value="ETH">Ethiopia</option>
                          <option value="FLK">Falkland Islands (Malvinas)</option>
                          <option value="FRO">Faroe Islands</option>
                          <option value="FJI">Fiji</option>
                          <option value="FIN">Finland</option>
                          <option value="FRA">France</option>
                          <option value="GUF">French Guiana</option>
                          <option value="PYF">French Polynesia</option>
                          <option value="ATF">French Southern Territories</option>
                          <option value="GAB">Gabon</option>
                          <option value="GMB">Gambia</option>
                          <option value="GEO">Georgia</option>
                          <option value="DEU">Germany</option>
                          <option value="GHA">Ghana</option>
                          <option value="GIB">Gibraltar</option>
                          <option value="GRC">Greece</option>
                          <option value="GRL">Greenland</option>
                          <option value="GRD">Grenada</option>
                          <option value="GLP">Guadeloupe</option>
                          <option value="GUM">Guam</option>
                          <option value="GTM">Guatemala</option>
                          <option value="GGY">Guernsey</option>
                          <option value="GIN">Guinea</option>
                          <option value="GNB">Guinea-Bissau</option>
                          <option value="GUY">Guyana</option>
                          <option value="HTI">Haiti</option>
                          <option value="HMD">Heard Island and McDonald Islands</option>
                          <option value="VAT">Holy See (Vatican City State)</option>
                          <option value="HND">Honduras</option>
                          <option value="HKG">Hong Kong</option>
                          <option value="HUN">Hungary</option>
                          <option value="ISL">Iceland</option>
                          <option value="IND">India</option>
                          <option value="IDN">Indonesia</option>
                          <option value="IRN">Iran, Islamic Republic of</option>
                          <option value="IRQ">Iraq</option>
                          <option value="IRL">Ireland</option>
                          <option value="IMN">Isle of Man</option>
                          <option value="ISR">Israel</option>
                          <option value="ITA">Italy</option>
                          <option value="JAM">Jamaica</option>
                          <option value="JPN">Japan</option>
                          <option value="JEY">Jersey</option>
                          <option value="JOR">Jordan</option>
                          <option value="KAZ">Kazakhstan</option>
                          <option value="KEN">Kenya</option>
                          <option value="KIR">Kiribati</option>
                          <option value="PRK">Korea, Democratic People's Republic of</option>
                          <option value="KOR">Korea, Republic of</option>
                          <option value="KWT">Kuwait</option>
                          <option value="KGZ">Kyrgyzstan</option>
                          <option value="LAO">Lao People's Democratic Republic</option>
                          <option value="LVA">Latvia</option>
                          <option value="LBN">Lebanon</option>
                          <option value="LSO">Lesotho</option>
                          <option value="LBR">Liberia</option>
                          <option value="LBY">Libya</option>
                          <option value="LIE">Liechtenstein</option>
                          <option value="LTU">Lithuania</option>
                          <option value="LUX">Luxembourg</option>
                          <option value="MAC">Macao</option>
                          <option value="MKD">Macedonia, the former Yugoslav Republic of</option>
                          <option value="MDG">Madagascar</option>
                          <option value="MWI">Malawi</option>
                          <option value="MYS">Malaysia</option>
                          <option value="MDV">Maldives</option>
                          <option value="MLI">Mali</option>
                          <option value="MLT">Malta</option>
                          <option value="MHL">Marshall Islands</option>
                          <option value="MTQ">Martinique</option>
                          <option value="MRT">Mauritania</option>
                          <option value="MUS">Mauritius</option>
                          <option value="MYT">Mayotte</option>
                          <option value="MEX">Mexico</option>
                          <option value="FSM">Micronesia, Federated States of</option>
                          <option value="MDA">Moldova, Republic of</option>
                          <option value="MCO">Monaco</option>
                          <option value="MNG">Mongolia</option>
                          <option value="MNE">Montenegro</option>
                          <option value="MSR">Montserrat</option>
                          <option value="MAR">Morocco</option>
                          <option value="MOZ">Mozambique</option>
                          <option value="MMR">Myanmar</option>
                          <option value="NAM">Namibia</option>
                          <option value="NRU">Nauru</option>
                          <option value="NPL">Nepal</option>
                          <option value="NLD">Netherlands</option>
                          <option value="NCL">New Caledonia</option>
                          <option value="NZL">New Zealand</option>
                          <option value="NIC">Nicaragua</option>
                          <option value="NER">Niger</option>
                          <option value="NGA">Nigeria</option>
                          <option value="NIU">Niue</option>
                          <option value="NFK">Norfolk Island</option>
                          <option value="MNP">Northern Mariana Islands</option>
                          <option value="NOR">Norway</option>
                          <option value="OMN">Oman</option>
                          <option value="PAK">Pakistan</option>
                          <option value="PLW">Palau</option>
                          <option value="PSE">Palestinian Territory, Occupied</option>
                          <option value="PAN">Panama</option>
                          <option value="PNG">Papua New Guinea</option>
                          <option value="PRY">Paraguay</option>
                          <option value="PER">Peru</option>
                          <option value="PHL">Philippines</option>
                          <option value="PCN">Pitcairn</option>
                          <option value="POL">Poland</option>
                          <option value="PRT">Portugal</option>
                          <option value="PRI">Puerto Rico</option>
                          <option value="QAT">Qatar</option>
                          <option value="REU">R궮ion</option>
                          <option value="ROU">Romania</option>
                          <option value="RUS">Russian Federation</option>
                          <option value="RWA">Rwanda</option>
                          <option value="BLM">Saint Barthꭥmy</option>
                          <option value="SHN">Saint Helena, Ascension and Tristan da Cunha</option>
                          <option value="KNA">Saint Kitts and Nevis</option>
                          <option value="LCA">Saint Lucia</option>
                          <option value="MAF">Saint Martin (French part)</option>
                          <option value="SPM">Saint Pierre and Miquelon</option>
                          <option value="VCT">Saint Vincent and the Grenadines</option>
                          <option value="WSM">Samoa</option>
                          <option value="SMR">San Marino</option>
                          <option value="STP">Sao Tome and Principe</option>
                          <option value="SAU">Saudi Arabia</option>
                          <option value="SEN">Senegal</option>
                          <option value="SRB">Serbia</option>
                          <option value="SYC">Seychelles</option>
                          <option value="SLE">Sierra Leone</option>
                          <option value="SGP">Singapore</option>
                          <option value="SXM">Sint Maarten (Dutch part)</option>
                          <option value="SVK">Slovakia</option>
                          <option value="SVN">Slovenia</option>
                          <option value="SLB">Solomon Islands</option>
                          <option value="SOM">Somalia</option>
                          <option value="ZAF">South Africa</option>
                          <option value="SGS">South Georgia and the South Sandwich Islands</option>
                          <option value="SSD">South Sudan</option>
                          <option value="ESP">Spain</option>
                          <option value="LKA">Sri Lanka</option>
                          <option value="SDN">Sudan</option>
                          <option value="SUR">Suriname</option>
                          <option value="SJM">Svalbard and Jan Mayen</option>
                          <option value="SWZ">Swaziland</option>
                          <option value="SWE">Sweden</option>
                          <option value="CHE">Switzerland</option>
                          <option value="SYR">Syrian Arab Republic</option>
                          <option value="TWN">Taiwan, Province of China</option>
                          <option value="TJK">Tajikistan</option>
                          <option value="TZA">Tanzania, United Republic of</option>
                          <option value="THA">Thailand</option>
                          <option value="TLS">Timor-Leste</option>
                          <option value="TGO">Togo</option>
                          <option value="TKL">Tokelau</option>
                          <option value="TON">Tonga</option>
                          <option value="TTO">Trinidad and Tobago</option>
                          <option value="TUN">Tunisia</option>
                          <option value="TUR">Turkey</option>
                          <option value="TKM">Turkmenistan</option>
                          <option value="TCA">Turks and Caicos Islands</option>
                          <option value="TUV">Tuvalu</option>
                          <option value="UGA">Uganda</option>
                          <option value="UKR">Ukraine</option>
                          <option value="ARE">United Arab Emirates</option>
                          <option value="GBR">United Kingdom</option>
                          <option value="USA">United States</option>
                          <option value="UMI">United States Minor Outlying Islands</option>
                          <option value="URY">Uruguay</option>
                          <option value="UZB">Uzbekistan</option>
                          <option value="VUT">Vanuatu</option>
                          <option value="VEN">Venezuela, Bolivarian Republic of</option>
                          <option value="VNM">Viet Nam</option>
                          <option value="VGB">Virgin Islands, British</option>
                          <option value="VIR">Virgin Islands, U.S.</option>
                          <option value="WLF">Wallis and Futuna</option>
                          <option value="ESH">Western Sahara</option>
                          <option value="YEM">Yemen</option>
                          <option value="ZMB">Zambia</option>
                          <option value="ZWE">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="department">Password</label>
                        <input
                          class="form-control input-group-lg"
                          type="password"
                          name="password"
                          title="password"
                          placeholder="password"
                          v-model="form.password"
                          :class="{ 'is-invalid': form.errors.has('password') }"
                        />
                        <has-error :form="form" field="password"></has-error>
                      </div>
                    </div>
                    <div class="row">
                      <div class="form-group col-xs-12">
                        <label for="my-info">About me</label>
                        <textarea
                          name="about_me"
                          class="form-control"
                          placeholder="Some texts about me"
                          v-model="form.about_me"
                          rows="4"
                          cols="400"
                          :class="{ 'is-invalid': form.errors.has('about_me') }"
                        ></textarea>
                        <has-error :form="form" field="about_me"></has-error>
                      </div>
                    </div>

                    <button @click.prevent="update()" class="btn btn-primary" type="submit">Update</button>
                  </form>
                </div>
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
  name: "basic_info",
  components:{
      headercomponent,
      footercomponent
  },
  data() {
    return {
      typing:true,
      form: new Form({
        id: "",
        first_name: "",
        last_name: "",
        id_number: "",
        email: "",
        password: "",
        birth_date: "",
        gender: "",
        department: "",
        batch: "",
        about_me: "",
        city: "",
        country: ""
      })
    };
  },
  mounted() {
      setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    this.$store.dispatch("userAction");
  },
  created() {
    if (this.getDatas.users) {
      this.form.id = this.getDatas.users.id;
      this.form.first_name = this.getDatas.users.first_name;
      this.form.last_name = this.getDatas.users.last_name;
      this.form.id_number = this.getDatas.users.id_number;
      this.form.email = this.getDatas.users.email;
      this.form.birth_date = this.getDatas.users.birth_date;
      this.form.gender = this.getDatas.users.gender;
      this.form.department = this.getDatas.users.department;
      this.form.batch = this.getDatas.users.batch;
      this.form.about_me = this.getDatas.users.about_me;
      this.form.city = this.getDatas.users.city;
      this.form.country = this.getDatas.users.country;
    }
  },
  computed: {
    getDatas() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    type() {
        if(this.typing == true){
            Toast.fire({
                icon: "info",
                title: `${authUser.first_name} typing...`
            });
            setTimeout(() => {
                this.typing = false;
            }, 2000);
        }

    },
    update(){
        this.typing = false
        if(this.form.password==''){
            Toast.fire({
                icon: "warning",
                title: "Enter current password for update any information."
            });
        }else{
            this.form.post("/update/" + this.form.id)
            .then(response => {
                Toast.fire({
                    icon: "success",
                    title: "Updated successfully"
                });
            })
            .catch(()=>{
                Toast.fire({
                    icon: "warning",
                    title: "Wrong Cridentials."
                });
            });
        }

    },
    ourImage(img) {
      return "/images/" + img;
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
  margin-top: 25px;
  float: left;
  margin-left: -60px;
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
</style>
