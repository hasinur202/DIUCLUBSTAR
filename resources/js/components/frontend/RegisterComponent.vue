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
        <div class="row" v-show="showRegister">
          <div class="col-sm-5">
            <div class="intro-texts">
              <h1>
                Welcome to
                <strong class="text-green">DIU Club Star</strong>
              </h1>

              <h3 class="text-magenta">Publish Your Creativity !!!</h3>
              <p>
                'Diu Club Star' helps to you as a eligible participants to participate ‍any club related program/event of Dhaka International University via testing and selecting your creativity.
                <br />
                <br />Why are you waiting for? Participate now.
              </p>
              <button disabled class="btn btn-primary">Learn More</button>
            </div>
          </div>
          <div class="col-sm-6 col-sm-offset-1">
            <div class="reg-form-container">
              <div class="reg-options">
                <ul class="nav nav-tabs">
                  <li>
                    <router-link to="/">Login</router-link>
                  </li>
                  <li class="active">
                    <a href="#login" data-toggle="tab">Register</a>
                  </li>
                </ul>
              </div>

              <div class="tab-content">
                <div class="tab-pane active" id="register">
                  <h3>Register Now !!!</h3>
                  <p class="text-muted">Be cool and join today. Meet millions</p>

                  <form
                    name="registration_form"
                    id="registration_form"
                    class="form-inline row"
                    @submit.prevent="register"
                  >
                    <div class="col-md-12">
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="first_name" class="sr-only">First Name</label>
                          <input
                            v-model="form.first_name"
                            id="first_name"
                            class="form-control"
                            type="text"
                            name="first_name"
                            title="Enter first name"
                            placeholder="First name"
                            :class="{ 'is-invalid': form.errors.has('first_name') }"
                          />
                          <has-error :form="form" field="first_name"></has-error>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="lastname" class="sr-only">Last Name</label>
                          <input
                            v-model="form.last_name"
                            id="last_name"
                            class="form-control"
                            type="text"
                            name="last_name"
                            title="Enter last name"
                            placeholder="Last name"
                            :class="{ 'is-invalid': form.errors.has('last_name') }"
                          />
                          <has-error :form="form" field="last_name"></has-error>
                        </div>
                      </div>
                    </div>

                    <div class="form-group col-md-12">
                      <label for="email" class="sr-only">Email</label>
                      <input
                        v-model="form.email"
                        id="email"
                        class="form-control"
                        type="email"
                        name="Email"
                        title="Enter Email"
                        placeholder="Your Email"
                        :class="{ 'is-invalid': form.errors.has('email') }"
                      />
                      <has-error :form="form" field="email"></has-error>
                    </div>
                    <div class="form-group col-md-12">
                      <label for="id_number" class="sr-only">Id_Number</label>
                      <input
                        v-model="form.id_number"
                        id="id_number"
                        class="form-control"
                        type="text"
                        name="id_number"
                        title="Enter id_number"
                        placeholder="enter registration number  cs-d/e-session year-batch-1xxxx"
                        :class="{ 'is-invalid': form.errors.has('id_number') }"
                      />
                      <has-error :form="form" field="id_number"></has-error>
                    </div>
                    <div class="form-group col-md-12">
                      <label for="password" class="sr-only">Password</label>
                      <input
                        v-model="form.password"
                        id="password"
                        class="form-control"
                        type="password"
                        name="password"
                        title="Enter password"
                        placeholder="Password"
                        :class="{ 'is-invalid': form.errors.has('password') }"
                      />
                      <has-error :form="form" field="password"></has-error>
                    </div>
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-6">
                          <p style="margin-left:0px" class="birth">
                            <strong>Date of Birth</strong>
                          </p>
                        </div>
                        <div class="col-md-6">
                            <p style="margin-left:0px" class="birth">
                                <strong>Gender</strong>
                            </p>
                          </div>
                        <div class="form-group col-md-6">
                          <input
                            type="date"
                            v-model="form.birth_date"
                            id="birthday"
                            class="form-control"
                            name="birth_date"
                            :class="{ 'is-invalid': form.errors.has('birth_date') }"
                          />
                          <has-error :form="form" field="birth_date"></has-error>
                        </div>
                        <div class="form-group gender col-md-6">

                          <label class="radio-inline">
                            <input
                              type="radio"
                              v-model="form.gender"
                              value="male"
                              name="gender"
                              checked
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
                    </div>

                    <div class="col-md-12">
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="city" class="sr-only">City</label>
                          <input
                            id="city"
                            class="form-control input-group-lg reg_name"
                            type="text"
                            name="city"
                            v-model="form.city"
                            title="Enter city"
                            placeholder="Your city"
                            :class="{ 'is-invalid': form.errors.has('city') }"
                          />
                          <has-error :form="form" field="city"></has-error>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="country" class="sr-only"></label>
                          <select
                            name="country"
                            v-model="form.country"
                            class="form-control"
                            :class="{ 'is-invalid': form.errors.has('country') }"
                          >
                            <!-- <has-error :form="form" field="country"></has-error> -->
                            <option disabled value="country" selected>Country</option>
                            <option value="AFG">Afghanistan</option>
                            <option value="ALA">land Islands</option>
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
                            <option value="BGD">Bangladesh</option>
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
                            <option value="CIV">C�te d'Ivoire</option>
                            <option value="HRV">Croatia</option>
                            <option value="CUB">Cuba</option>
                            <option value="CUW">Cura�ao</option>
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
                            <option value="REU">R�union</option>
                            <option value="ROU">Romania</option>
                            <option value="RUS">Russian Federation</option>
                            <option value="RWA">Rwanda</option>
                            <option value="BLM">Saint Barth�lemy</option>
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
                    </div>
                    <div col-md-12>
                        <div class="form-group col-md-6">
                            <label style="margin-left: 20px;" for="idCardFrontImage">Id Card Frontside Photo</label>
                            <img :src="form.image1" class="img-style" />
                            <input
                            style="margin-left: 55px !important;"
                            name="image1"
                            @change="changePhoto1($event)"
                            type="file"
                            class="control-file"
                            />
                        </div>
                      <div class="form-group col-md-6">
                        <label style="margin-left: 20px;" for="idCardBackImage">Id Card Backside Photo</label>
                        <img :src="form.image2" class="img-style" />
                        <input
                          style="float: right !important;
                            margin-right: 40px;"
                          name="image2"
                          @change="changePhoto2($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                    </div>

                    <button
                      v-show="btn"
                      type="submit"
                      style="width: 93%;margin-left: 14px;"
                      class="btn btn-primary"
                    >Register Now</button>
                  </form>
                  <p>
                    <a href="#" @click.prevent="haveAccount()">Already have an account?</a>
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
export default {
  name: "RegisterComponent",
  data() {
    return {
      showContact: false,
      showRegister:true,
      btn:false,
      form: new Form({
        first_name: "",
        last_name: "",
        id_number: "",
        email: "",
        password: "",
        birth_date: "",
        gender: "",
        city: "",
        country: "country",
        image1:"",
        image2:"",
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
    haveAccount(){
        this.$router.push('/');
    },
    changePhoto1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.form.image1 = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    changePhoto2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.form.image2 = event.target.result;
      };
      reader.readAsDataURL(file);
      if (this.btn == false) {
        this.btn = true;
      } else if (this.btn == true) {
        this.btn = true;
      } else {
        this.btn = false;
      }
    },
    visibleContact() {
      this.showContact = true;
      this.showRegister = false;
    },
    ourImage(img) {
      return "/images/" + img;
    },
    hideContent(){
        this.showContact = false;
        this.showRegister = true;
    },
    register() {
      this.form
        .post("/signUp")
        .then(response => {
          //   console.log(response.data);
          this.$router.push("/");
          this.form.reset();
          Swal.fire({
            icon: "success",
            title: "Registration Successfull.",
            text: "You can't login at this moment.Please wait 24hours for approving your account."
          });
        })
        .catch(() => {
          Toast.fire({
            icon: "warning",
            title: "Please fillup all input field."
          });
        });
    }
  }
};
</script>

<style>
.img-style {
  width: 150px;
  height: 140px;
  margin-bottom: 5px;
  margin-top: 0px;
  float: left;
  margin-left: 25px;
  border: dashed 1.5px blue;
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
}
.control-file {
  margin-top: 170px;
  /* margin-left: 84px; */
  width: 91px;
}
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
