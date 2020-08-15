<template>
  <div class="edit-profile-container">
        <div class="block-title">
            <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Add Event Information</h4>
            <p style="margin-top: -15px;margin-bottom: 25px;color: cadetblue;">If you are changes this, your group cover photo will be change and everybody can see that changes.</p>
            <div class="line"></div>
        </div>
        <div class="edit-block">
            <img :src="form.photo" class="img-thumbnail">
            <p class="cover-size">Cover photo size 820 x 312</p>
            <form @submit.prevent="add_event(getDatas,getAuthors)">
                <div class="row">
                    <div class="form-group col-xs-12">
                        <label class="custom-file-label" for="image">Input File</label>
                        <input type="file" class="cover-img-input" @change="changePhoto($event)" name="photo"
                            :class="{ 'is-invalid': form.errors.has('photo') }"
                        />

                        <has-error :form="form" field="photo"></has-error>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                    <label for="name">Event Name</label>
                    <input
                        class="form-control input-group-lg"
                        type="text"
                        name="name"
                        placeholder="event name,short,unique,meaningfull"
                        v-model="form.name"
                        :class="{ 'is-invalid': form.errors.has('name') }"
                    />

                    <has-error :form="form" field="name"></has-error>
                    </div>

                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <label for="loacation">Loacation</label>
                        <input
                            class="form-control input-group-lg"
                            type="text"
                            name="location"
                            title="Location"
                            placeholder="event location"
                            v-model="form.location"
                            :class="{ 'is-invalid': form.errors.has('location') }"
                        />
                        <has-error :form="form" field="location"></has-error>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                        <label for="frequency">Frequency</label>
                        <select
                          name="frequency"
                          v-model="form.frequency"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('frequency') }"
                         >
                          <option selected value="Occurs Once">Occurs Once</option>
                          <option value="Daily">Daily</option>
                          <option value="Weekly">Weekly</option>
                          <option value="Monthly">Monthly</option>
                        </select>
                      </div>
                </div>
                <div class="row">

                    <div class="form-group col-xs-6">
                        <label for="birth_date">Starting Date</label>
                        <input
                          type="date"
                          v-model="form.starting_date"
                          class="form-control input-group-lg"
                          name="starting_date"
                          :class="{ 'is-invalid': form.errors.has('starting_date') }"
                        />
                        <has-error :form="form" field="starting_date"></has-error>
                    </div>
                    <div class="form-group col-xs-6">
                        <label for="birth_date">Starting time</label>
                        <input
                          type="time"
                          v-model="form.starting_time"
                          class="form-control input-group-lg"
                          name="starting_date"
                          :class="{ 'is-invalid': form.errors.has('starting_time') }"
                        />
                        <has-error :form="form" field="starting_time"></has-error>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-6">
                        <label for="birth_date">Ending Date</label>
                        <input
                            type="date"
                            v-model="form.ending_date"
                            class="form-control input-group-lg"
                            name="ending_date"
                            :class="{ 'is-invalid': form.errors.has('ending_date') }"
                        />
                        <has-error :form="form" field="ending_date"></has-error>
                    </div>
                    <div class="form-group col-xs-6">
                        <label for="birth_date">Ending Time</label>
                        <input
                          type="time"
                          v-model="form.ending_time"
                          class="form-control input-group-lg"
                          name="ending_time"
                          :class="{ 'is-invalid': form.errors.has('ending_time') }"
                        />
                        <has-error :form="form" field="ending_time"></has-error>
                    </div>
                </div>
                <hr>
                <div class="block-title">
                    <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Details</h4>
                    <p style="margin-top: -15px;margin-bottom: 25px;color: cadetblue;">Let people know what type of event you are hosting...</p>
                </div>
                <div class="row">
                    <div class="form-group col-xs-4">
                        <label for="category">Category</label>
                        <select
                          name="category"
                          v-model="form.category"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('category') }"
                         >
                          <option selected value="Select Category">Select Category</option>
                          <option value="programing">Programing</option>
                          <option value="skil development">Skill Development</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                    <label for="my-info">Description</label>
                    <span style="float:right;margin-top:5px;" class="badge badge-danger">skip</span>
                    <textarea
                        name="description"
                        class="form-control"
                        placeholder="event description..."
                        v-model="form.description"
                        rows="4"
                        cols="400"
                    ></textarea>
                    </div>
                </div>
                <hr>
                <div class="block-title">
                    <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Tickets</h4>
                    <p style="margin-top: -15px;margin-bottom: 25px;color: cadetblue;">Let people know where they can get tickets for your event...</p>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                    <label for="name">Ticket</label>
                    <input
                        readonly
                        class="form-control input-group-lg"
                        type="text"
                        name="ticket"
                        placeholder="www.ticket.com"
                        v-model="form.ticket_url"
                        :class="{ 'is-invalid': form.errors.has('ticket_url') }"
                    />

                    <has-error :form="form" field="ticket_url"></has-error>
                    </div>
                </div>
                <hr>
                <div class="block-title">
                    <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Options</h4>
                    <p style="margin-top: -15px;margin-bottom: 25px;color: cadetblue;">Let people know your event guests and sponsors...</p>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                    <label for="my-info">Sponsor</label>
                    <span style="float:right;margin-top:5px;" class="badge badge-danger">skip</span>
                    <textarea
                        name="sponsor"
                        class="form-control"
                        placeholder="event sponsor..."
                        v-model="form.sponsor"
                        rows="4"
                        cols="400"
                    ></textarea>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group col-xs-12">
                    <label for="my-info">Guest</label>
                    <span style="float:right;margin-top:5px;" class="badge badge-danger">skip</span>
                    <textarea
                        name="guest"
                        class="form-control"
                        placeholder="event guest..."
                        v-model="form.guest"
                        rows="4"
                        cols="400"
                    ></textarea>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="form-group col-xs-2">
                        <label for="status">Publish</label>
                        <select
                          name="status"
                          v-model="form.status"
                          class="form-control"
                          :class="{ 'is-invalid': form.errors.has('status') }"
                        >
                          <option selected value="0">Public</option>
                          <option value="1">Private</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name:'create_event',
  data(){
    return{
      form: new Form({
          author_id:"",
          club_id:"",
          photo:"",
          name:"",
          location:"",
          frequency:"Occurs Once",
          starting_date:"",
          starting_time:"",
          ending_date:"",
          ending_time:"",
          category:"Select Category",
          description:"",
          ticket_url:"www.ticket.com",
          sponsor:"",
          guest:"",
          status:"0",

      })
    }
  },
  mounted() {
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getAuthorAction");


    // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
    // this.gettest()
  },
  computed: {
    getDatas() {
    return this.$store.getters.getUser;
    },
    getFriendRequests() {
    return this.$store.getters.getFriendRequest;
    },
    getAuthors() {
      return this.$store.getters.getAuthor;
    },

  },
  methods:{
    add_event(getDatas,getAuthors){
    //   console.log(getDatas.users.id);
      getAuthors.authors.forEach(el => {
          if(getDatas.users.id == el.author.id){
              this.form.author_id = el.author.id;
          }
      });
      this.form.club_id = this.$route.params.cl_id;
      this.form.post('/create-event')
      .then((response)=>{
          this.form = [],
          Toast.fire({
              icon: "success",
              title: 'Event created successfull.'
          });
      })
    },
    // updatePhoto(){
    //     if(this.form.photo == ''){
    //         let img = this.form.photo
    //         if (img) {
    //             return this.form.photo
    //         }else{
    //             return "/images/"+this.form.photo
    //         }
    //     }else{
    //         let img = this.form.photo
    //         if (img.length>100) {
    //             return this.form.photo
    //         }else{
    //             return "/images/"+this.form.photo
    //         }

    //     }
    // },
    changePhoto(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = event => {
            this.form.photo = event.target.result;
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
