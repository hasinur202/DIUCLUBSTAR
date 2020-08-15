<template>
  <div>
    <headercomponent></headercomponent>
    <div id="page-contents" v-if="getAuthUserId">
      <div class="container">
        <div class="row">
          <div class="col-md-3 static">
            <ul class="nav-news-feed">
              <li>
                <i class="icon ion-ios-paper"></i>
                <div>
                  <a href="home" @click.prevent="showHomeDiscussion()">NewsFeed</a>
                </div>
              </li>
              <li>
                <i class="icon ion-ios-people"></i>
                <div>
                  <a href="#" @click.prevent="showBatches()">All Batches</a>
                </div>
              </li>
              <li v-show="loading">
                  <i class="icon ion-ios-people-outline"></i>
                  <div>
                    <p>Loading...</p>
                  </div>

              </li>

                <input type="text" v-show="disableLoading(fetchSingleAd)" hidden>
                <li v-if="fetchSingleAd.author_id == getAuthUserId || getAuthUserName == 'Master' && !loading">
                  <i class="icon ion-ios-people-outline"></i>
                  <div>
                    <a href="#" @click.prevent="showCreateClub()">Create Club</a>
                  </div>
                </li>
                <li v-if="getAuthUserName == 'Master' && !loading">
                    <i class="icon ion-settings"></i>
                    <div>
                    <a href="#" @click.prevent="showSetting()">Setting</a>
                    </div>
                </li>
                <li v-if="getAuthUserName == 'Master' && !loading">
                    <i class="icon ion-ios-people"></i>
                    <div>
                        <a href="#" @click.prevent="showAllUser()">All User</a>
                    </div>
                </li>

              <li>
                <i class="icon ion-chatboxes"></i>
                <div>
                  <router-link to="/messanger">Messenger</router-link>
                </div>
              </li>
            </ul>
            <div id="chat-block">
              <div class="title">
                Running Event
                <span class="badge badge-danger">{{getClubEvents.count_event}}</span>
              </div>

              <div class="feed-item" v-for="event in getClubEvents.events" :key="event.id">
                <div class="live-activity" v-if="event">
                  <p class="text-muted" data-toggle="modal" data-target="#event">
                    <a
                      href="#"
                      @click.prevent="getEvent(event)"
                      class="profile-link"
                    >{{ event.name }}</a> event going on
                  </p>
                  <p class="text-red">
                    Participate
                    <a
                      class="btn btn-danger btn-xs"
                      @click.prevent="showSendSkillForm(event,getClubs,getDatas)"
                      href="#"
                    >Now</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-7" v-show="visibleCreateClub">
            <createclubcomponent></createclubcomponent>
          </div>
          <div class="col-md-7" v-show="visibleBatches">
            <batchcomponent></batchcomponent>
          </div>
          <div class="col-md-7" v-show="visibleSetting">
            <settingcomponent></settingcomponent>
          </div>
          <div class="col-md-7" v-show="allRegisterUser">
                <allUserComponent></allUserComponent>
          </div>
          <div class="col-md-7" v-show="sendSkillForm">
            <div class="create-post">
              <div class="row">
                <p v-show="form">
                  If you perform of this event,please
                  <a @click="showForm()" href="#">Click Here</a> and send your demo performance.
                </p>
                <p v-show="cuppon">
                  If you only participate not preform of this event,please
                  <a
                    @click="showCuppon(getDatas)"
                    href="#"
                  >Click Here</a> and collect cuppon code.
                </p>
                <form
                  v-show="showSkillForm"
                  enctype="multipart/form-data"
                  @submit.prevent="uploadSkill()"
                >
                  <div class="col-md-12 col-sm-12">
                    <button
                      type="button"
                      @click.prevent="hideContent()"
                      class="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="col-md-12 col-sm-12">
                    <div class="tools">
                      <ul class="publishing-tools list-inline">
                        <li>
                          <button
                            type="button"
                            @click.prevent="SelectPhoto()"
                            class="btn btn-primary"
                          >Upload Photo</button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click.prevent="SelectVideo()"
                            class="btn btn-primary"
                          >Upload Video</button>
                        </li>
                      </ul>
                    </div>
                    <div v-show="showSelectPhoto" class="publishing-tools list-inline">
                      <div class="form-group">
                        <img :src="skill.image1" class="img-style" />
                        <input
                          name="image1"
                          @change="changeSkill1($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                      <div class="form-group">
                        <img :src="skill.image2" class="img-style" />
                        <input
                          name="image2"
                          @change="changeSkill2($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                      <div class="form-group">
                        <img :src="skill.image3" class="img-style" />
                        <input
                          name="image3"
                          @change="changeSkill3($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                    </div>
                    <div v-show="showSelectVideo" class="form-group">
                      <div class="video-wrapper">
                        <video class="video" controls>
                          <source src="#" type="video/mp4" />
                        </video>
                      </div>
                      <input name="video" @change="changeSkillVideo" type="file" class="video-file" />
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary post-btn">Send Request</button>
                </form>
                <div v-show="getCuppon">
                  <div>
                    <p
                      class="cuppon-code"
                    >@{{ authUserName }}@{{ randomNumber() }}${{ authUserDept }}$SSS%{{ authUserBatch }}%</p>
                    <p>
                      If you miss this code you can't enter/participate the event.So keep it safe.
                      <strong>Now Enjoy</strong>
                    </p>
                    <a
                      href="#"
                      type="button"
                      class="btn btn-primary"
                      @click.prevent="print()"
                    >Print Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-md-7"
            v-show="HomeDiscussion"
            v-for="data in getDatas.avatars"
            :key="data.id"
           >
            <div v-show="showEventDetails">
              <ul class="album-photos">
                <li>
                  <div
                    id="event"
                    class="modal fade"
                    style="margin-top: 75px;display:none;opacity:1;"
                    tabindex="-1"
                    role="dialog"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-body" style="margin-top:126px;overflow-y: scroll;
                            height: 500px;border-top: 1px solid #ddd;">
                          <div class="card">
                            <img
                              class="card-img-top"
                              :src="ourImage(eventDetails.photo)"
                              alt="Card image cap"
                            />
                            <div
                              class="card-body"
                              style="display: inline-block !important;width: 95% !important;"
                            >
                              <h4
                                class="card-title"
                                style="float:left;width: 100%;text-align: left;"
                              >
                                <span style="font-size: 30px;color: #4b4f56;">{{ eventDetails.name }}</span>

                                <p
                                  class="card-text"
                                  style="font-size: 12px;
                                    color: #000;
                                    margin-top: 5px;"
                                >
                                  <i style="margin-right: 5px;" class="icon ion-location"></i>Location:
                                  <span>{{ eventDetails.location }}</span>
                                </p>
                              </h4>
                              <div
                                class="block-title"
                                style="float: left !important;
                                    margin-left: 0px !important;
                                    margin-top: -23px !important;"
                              >
                                <h4
                                  class="grey"
                                  style="float: left !important;margin-bottom: 0px !important;margin-top: 20px;"
                                >
                                  <i
                                    style="margin-right: 5px;"
                                    class="icon ion-android-checkmark-circle"
                                  ></i>Datetime
                                </h4>
                                <hr style="margin-top: 45px;" />
                                <div
                                  style="display: inline-flex;display: inline-flex;margin-left: -99%;"
                                >
                                  <p style="font-size: 15px;" class="card-text">
                                    <strong>Starting Date:</strong>
                                    <span>{{ eventDetails.starting_date }}</span>
                                    <i style="margin-left: 10px;" class="icon ion-arrow-right-a"></i>
                                    <i style="margin-left: 10px;" class="icon ion-arrow-right-a"></i>
                                    <i
                                      style="margin-left: 10px;margin-right: 10px;"
                                      class="icon ion-arrow-right-a"
                                    ></i>
                                  </p>
                                  <p style="font-size: 15px;" class="card-text">
                                    <strong>Starting Time:</strong>
                                    <span>{{ eventDetails.starting_time }}</span>
                                  </p>
                                </div>
                                <div
                                  style="display: inline-flex;overflow: hidden;
                                    float: left;
                                    margin-top: 35px;"
                                >
                                  <p style="font-size: 15px;" class="card-text">
                                    <strong>Ending Date:</strong>
                                    <span>{{ eventDetails.ending_date }}</span>
                                    <i style="margin-left: 10px;" class="icon ion-arrow-right-a"></i>
                                    <i style="margin-left: 10px;" class="icon ion-arrow-right-a"></i>
                                    <i
                                      style="margin-left: 10px;margin-right: 10px;"
                                      class="icon ion-arrow-right-a"
                                    ></i>
                                  </p>
                                  <p style="font-size: 15px;" class="card-text">
                                    <strong>Ending Time:</strong>
                                    <span>{{ eventDetails.ending_time }}</span>
                                  </p>
                                </div>
                                <h4
                                  v-if="eventDetails.sponsor"
                                  class="grey"
                                  style="margin-left: -73%;float: left !important;margin-bottom: 0px !important;margin-top: 70px;"
                                >
                                  <i
                                    style="margin-right: 5px;"
                                    class="icon ion-android-checkmark-circle"
                                  ></i>Sponsor
                                </h4>
                                <hr v-if="eventDetails.sponsor" style="margin-top: 65px;" />
                                <div v-if="eventDetails.sponsor">
                                  <p style="font-size: 15px;float: left;">
                                    <strong>{{ eventDetails.sponsor }}</strong>
                                  </p>
                                </div>
                                <div>
                                  <h4
                                    v-if="eventDetails.guest"
                                    class="grey"
                                    style="margin-left: 0%;float: left !important;margin-bottom: 0px !important;margin-top: -22px;"
                                  >
                                    <i
                                      style="margin-right: 5px;"
                                      class="icon ion-android-checkmark-circle"
                                    ></i>Guest
                                  </h4>
                                  <hr v-if="eventDetails.guest" style="margin-top: 80px;" />
                                  <div v-if="eventDetails.guest">
                                    <p style="font-size: 15px;float: left;">
                                      <strong>{{ eventDetails.guest }}</strong>
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <h4
                                    v-if="eventDetails.description"
                                    class="grey"
                                    style="margin-left: 0%;float: left !important;margin-bottom: 0px !important;margin-top: -22px;"
                                  >
                                    <i
                                      style="margin-right: 5px;"
                                      class="icon ion-android-checkmark-circle"
                                    ></i>Description
                                  </h4>
                                  <hr v-if="eventDetails.description" style="margin-top: 80px;" />
                                  <div v-if="eventDetails.description">
                                    <p
                                      style="font-size: 15px;float: left;"
                                    >{{ eventDetails.description }}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- <hr style="margin-bottom:5px;">
               <h4 style="color:#000">Videos</h4>
              <hr style="margin-top:5px;">
                <div class="tab-pane" id="videos">
                    <div class="media">
                        <div class="row js-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'>

                            <div class="grid-item col-md-6 col-sm-6">
                                <div class="media-grid">
                                    <div class="img-wrapper" data-toggle="modal" data-target=".modal-1">
                                        <video controls>
                                            <source src="videos/3.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                    <div class="media-info">
                                        <div class="reaction">
                                            <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 46</a>
                                            <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 11</a>
                                        </div>
                                    </div>

                                    <div class="modal fade modal-1" style="margin-top: 61px;display:none;opacity:1;" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                            <div class="post-content">
                                                <div class="video-wrapper">
                                                <video controls>
                                                    <source src="videos/3.mp4" type="video/mp4">
                                                </video>
                                                </div>
                                                <div class="post-container">
                                                <img src="images/users/user-5.jpg" alt="user" class="profile-photo-md pull-left" />
                                                <div class="post-detail">
                                                    <div class="user-info">
                                                    <h5><a href="timeline.html" class="profile-link">Alexis Clark</a> <span class="following">following</span></h5>
                                                    <p class="text-muted">Published a photo about 3 mins ago</p>
                                                    </div>
                                                    <div class="reaction">
                                                    <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 13</a>
                                                    <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 0</a>
                                                    </div>
                                                    <div class="line-divider"></div>
                                                    <div class="post-text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                                                    </div>
                                                    <div class="line-divider"></div>
                                                    <div class="post-comment">
                                                    <img src="images/users/user-11.jpg" alt="" class="profile-photo-sm" />
                                                    <p><a href="timeline.html" class="profile-link">Diana </a><i class="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                                    </div>
                                                    <div class="post-comment">
                                                    <img src="images/users/user-4.jpg" alt="" class="profile-photo-sm" />
                                                    <p><a href="timeline.html" class="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                                    </div>
                                                    <div class="post-comment">
                                                    <img src="images/users/user-1.jpg" alt="" class="profile-photo-sm" />
                                                    <input type="text" class="form-control" placeholder="Post a comment">
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              <hr>-->
            </div>
            <div class="create-post">
              <div class="row">
                <div v-show="!showPost" @click.prevent="showContent" class="col-md-7 col-sm-7">
                  <div class="form-group">
                    <img v-if="data.avatar" :src="ourImage(data.avatar)" class="profile-photo-md" />
                    <img v-else src="#" style="background-color: #ddd;" class="profile-photo-md" alt="image" />
                    <textarea
                      @click.prevent="showContent(data)"
                      name="texts"
                      cols="30"
                      rows="1"
                      class="form-control"
                      placeholder="Write what you wish"
                    ></textarea>
                  </div>
                </div>
                <div v-show="!showPost" class="col-md-5 col-sm-5">
                  <div class="tools">
                    <ul class="publishing-tools list-inline">
                      <li>
                        <a href="#" @click.prevent="showContent(data)">
                          <i class="ion-images"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" @click.prevent="showContent(data)">
                          <i class="ion-ios-videocam"></i>
                        </a>
                      </li>
                    </ul>
                    <button
                      type="submit"
                      @click.prevent="showContent(data)"
                      class="btn btn-primary pull-right"
                    >Publish</button>
                  </div>
                </div>
                <!-- v-if="getDatas.users.first_name == 'Master'" -->
                <form enctype="multipart/form-data">
                  <div v-show="showPost" class="col-md-12 col-sm-12">
                    <button
                      type="button"
                      @click.prevent="hideContent"
                      class="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="form-group" style="width:100%;height:100px;">
                      <textarea
                        name="texts"
                        id="exampleTextarea"
                        cols="30"
                        rows="1"
                        @keypress="showBtn(data)"
                        v-model="post.text"
                        class="form-control"
                        placeholder="Write what you wish"
                      ></textarea>
                    </div>
                  </div>
                  <div v-show="showPost" class="col-md-12 col-sm-12">
                    <div class="tools">
                      <ul class="publishing-tools list-inline">
                        <li>
                          <button
                            type="button"
                            @click.prevent="SelectPhoto()"
                            class="btn btn-primary"
                          >Upload Photo</button>
                        </li>
                        <li>
                          <button
                            type="button"
                            @click.prevent="SelectVideo()"
                            class="btn btn-primary"
                          >Upload Video</button>
                        </li>
                        <li>
                          <div class="form-row align-items-center">
                            <div class="col-auto my-1">
                              <label class="mr-sm-2" for="inlineFormCustomSelect">Publish</label>
                              <select
                                v-model="post.status"
                                class="custom-select mr-sm-2"
                                id="inlineFormCustomSelect"
                              >
                                <option value="0" selected>Public</option>
                                <option value="1">Private</option>
                              </select>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div v-show="showSelectPhoto" class="publishing-tools list-inline">
                      <div class="form-group">
                        <img :src="post.image1" class="img-style" />
                        <input
                          name="image1"
                          @change="changePhoto1($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                      <div class="form-group">
                        <img :src="post.image2" class="img-style" />
                        <input
                          name="image2"
                          @change="changePhoto2($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                      <div class="form-group">
                        <img :src="post.image3" class="img-style" />
                        <input
                          name="image3"
                          @change="changePhoto3($event)"
                          type="file"
                          class="control-file"
                        />
                      </div>
                    </div>
                    <div v-show="showSelectVideo" class="form-group">
                      <div class="video-wrapper">
                        <video class="video" controls>
                          <source src="#" type="video/mp4" />
                        </video>
                      </div>
                      <input name="video" @change="changeVideo" type="file" class="video-file" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    @click.prevent="uploadPost"
                    v-show="btn"
                    class="btn btn-primary post-btn"
                  >Publish</button>
                </form>
              </div>
            </div>
            <div class="post-content" v-for="post in getPosts.posts" :key="post.id">
              <div class="post-container" v-if="post.status == 0">
                <img
                  v-if="post.user_id == data.user_id"
                  :src="ourImage(data.avatar)"
                  alt="user"
                  class="profile-photo-md pull-left"
                />
                <img
                  v-if="post.avatar && post.user_id != data.user_id"
                  :src="ourImage(post.avatar.avatar)"
                  alt="user"
                  class="profile-photo-md pull-left"
                />
                <div class="user-info">
                  <h5>
                    <router-link
                      :to="{name: 'timeline', params:{
                            name: post.user.first_name
                        },}"
                      class="profile-link"
                    >{{ post.user.first_name }}</router-link>
                    <span class="following">following</span>
                  </h5>
                  <p class="text-muted">{{ post.created_at | postTime }}</p>
                </div>
                <div
                  style="float: right;margin-top: -60px;"
                  v-if="post.user_id == getDatas.users.id"
                  >
                  <li class="dropdown" style="margin-top: -8px;list-style:none;">
                    <a
                      title="Edit/Delete"
                      href="#"
                      class="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style="font-size: 30px;text-decoration: none;"
                    >...</a>
                    <ul class="dropdown-menu login" style="min-width: 90px;margin-left: -60px;">
                      <li style="list-style:none;" data-toggle="modal" data-target="#post-details">
                        <a href="#" @click.prevent="edit_post(post)">
                          Edit
                          <i
                            style="margin-left: -15px;margin-right: 5px;"
                            class="icon ion-edit pull-left"
                          ></i>
                        </a>
                      </li>
                      <li style="list-style:none;">
                        <a href="#" @click.prevent="hide_post(post)">
                          Delete
                          <i
                            style="margin-left: -15px;margin-right: 5px;"
                            class="icon ion-log-out pull-left"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                <div v-show="showPostDetails">
                  <ul class="album-photos">
                    <li>
                      <div
                        id="post-details"
                        class="modal fade"
                        style="margin-top: 75px;display:none;opacity:1;"
                        tabindex="-1"
                        role="dialog"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-lg">
                          <div class="modal-content">
                            <div
                              class="modal-body"
                              style="margin-top:70px;padding-left: 150px;padding-right: 150px;overflow-y: scroll;height: 550px;"
                            >
                              <form enctype="multipart/form-data">
                                <div class="col-md-12 col-sm-12">
                                  <button
                                    type="button"
                                    @click.prevent="hideContent"
                                    class="close"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="col-md-12 col-sm-12">
                                  <div
                                    class="publishing-tools list-inline"
                                    style="display: inline-flex;"
                                   >
                                    <div class="form-group">
                                      <img :src="editUpdatePhoto1()" class="img-style" />
                                      <input
                                        name="image1"
                                        @change="editChangePhoto1($event)"
                                        type="file"
                                        class="control-file"
                                        style="margin-left: 77px;font-size: 14px;"
                                      />
                                    </div>
                                    <div class="form-group">
                                      <img :src="editUpdatePhoto2()" class="img-style" />
                                      <input
                                        name="image2"
                                        @change="editChangePhoto2($event)"
                                        type="file"
                                        class="control-file"
                                        style="margin-left: 80px;font-size: 14px;"
                                      />
                                    </div>
                                    <div class="form-group">
                                      <img :src="editUpdatePhoto3()" class="img-style" />
                                      <input
                                        name="image3"
                                        @change="editChangePhoto3($event)"
                                        type="file"
                                        style="margin-left: 80px;font-size: 14px;"
                                        class="control-file"
                                      />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="video-wrapper">
                                      <video style="width: 100% !important;
                                        height: 200px !important;margin-left: 0px !important;
                                        margin-top: 15px !important;" class="video" controls>
                                        <source :src="editUpdateVideo()" type="video/mp4" />
                                      </video>
                                    </div>
                                    <input
                                      style="margin-top: 0px !important;
                                        margin-left: 0px !important;
                                        width: 262px !important;
                                        font-size: 15px !important;"
                                      name="video"
                                      @change="editChangeVideo"
                                      type="file"
                                      class="video-file"
                                    />
                                  </div>
                                </div>
                                <div></div>
                                <div
                                  class="form-group col-md-12"
                                  style="width:100%;height:100px;margin-left: 7px;"
                                >
                                  <textarea
                                    style="height: 100px;padding: 5px;"
                                    name="texts"
                                    id="exampleTextarea"
                                    cols="30"
                                    rows="1"
                                    v-model="editPost.text"
                                    class="form-control"
                                    placeholder="Write what you wish"
                                  ></textarea>
                                </div>
                                <div class="tools" style="float: left;margin-left: 15px;">
                                  <ul class="publishing-tools list-inline">
                                    <li>
                                      <div class="form-row align-items-center">
                                        <div class="col-auto my-1">
                                          <label
                                            class="mr-sm-2"
                                            for="inlineFormCustomSelect"
                                          >Publish</label>
                                          <select
                                            style="margin-left: 5px;font-size: 12px;color: #000;"
                                            v-model="editPost.status"
                                            class="custom-select mr-sm-2"
                                            id="inlineFormCustomSelect"
                                          >
                                            <option
                                              style="font-size: 12px;color: #000;"
                                              value="0"
                                              selected
                                            >Public</option>
                                            <option
                                              style="font-size: 12px;color: #000;"
                                              value="1"
                                            >Private</option>
                                          </select>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <button
                                  type="submit"
                                  @click.prevent="editPostUpload()"
                                  class="btn btn-primary post-btn"
                                >Publish</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <!-- <hr style="margin-bottom:5px;">
                    <h4 style="color:#000">Videos</h4>
                    <hr style="margin-top:5px;">
                        <div class="tab-pane" id="videos">
                            <div class="media">
                                <div class="row js-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'>

                                    <div class="grid-item col-md-6 col-sm-6">
                                        <div class="media-grid">
                                            <div class="img-wrapper" data-toggle="modal" data-target=".modal-1">
                                                <video controls>
                                                    <source src="videos/3.mp4" type="video/mp4">
                                                </video>
                                            </div>
                                            <div class="media-info">
                                                <div class="reaction">
                                                    <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 46</a>
                                                    <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 11</a>
                                                </div>
                                            </div>

                                            <div class="modal fade modal-1" style="margin-top: 61px;display:none;opacity:1;" tabindex="-1" role="dialog" aria-hidden="true">
                                                <div class="modal-dialog modal-lg">
                                                    <div class="modal-content">
                                                    <div class="post-content">
                                                        <div class="video-wrapper">
                                                        <video controls>
                                                            <source src="videos/3.mp4" type="video/mp4">
                                                        </video>
                                                        </div>
                                                        <div class="post-container">
                                                        <img src="images/users/user-5.jpg" alt="user" class="profile-photo-md pull-left" />
                                                        <div class="post-detail">
                                                            <div class="user-info">
                                                            <h5><a href="timeline.html" class="profile-link">Alexis Clark</a> <span class="following">following</span></h5>
                                                            <p class="text-muted">Published a photo about 3 mins ago</p>
                                                            </div>
                                                            <div class="reaction">
                                                            <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 13</a>
                                                            <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 0</a>
                                                            </div>
                                                            <div class="line-divider"></div>
                                                            <div class="post-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                                                            </div>
                                                            <div class="line-divider"></div>
                                                            <div class="post-comment">
                                                            <img src="images/users/user-11.jpg" alt="" class="profile-photo-sm" />
                                                            <p><a href="timeline.html" class="profile-link">Diana </a><i class="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                                            </div>
                                                            <div class="post-comment">
                                                            <img src="images/users/user-4.jpg" alt="" class="profile-photo-sm" />
                                                            <p><a href="timeline.html" class="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                                                            </div>
                                                            <div class="post-comment">
                                                            <img src="images/users/user-1.jpg" alt="" class="profile-photo-sm" />
                                                            <input type="text" class="form-control" placeholder="Post a comment">
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                  <hr>-->
                </div>
                <div class="post-detail">
                  <div class="post-text">
                    <p>
                      {{ post.text }}
                      <i class="em em-anguished"></i>
                      <i class="em em-anguished"></i>
                      <i class="em em-anguished"></i>
                    </p>
                  </div>
                  <div v-if="post.image1 !=null && post.image2==null && post.image3==null">
                      <img
                        :src="ourImage(post.image1)"
                        alt="post-image"
                        class="img-responsive post-image"
                      />
                  </div>

                  <div v-else class="row col-12" style="margin-bottom: 10px !important;">
                      <div class="col-md-6" v-if="post.image1">
                          <img
                            style="max-height: 155px !important;"
                            :src="ourImage(post.image1)"
                            alt="post-image"
                            class="img-responsive post-image"
                          />
                      </div>
                      <div class="col-md-6" v-if="post.image2">
                          <img
                            style="max-height: 155px !important;"
                            :src="ourImage(post.image2)"
                            alt="post-image"
                            class="img-responsive post-image"
                          />
                      </div>
                      <div style="margin-top: 10px;" class="col-md-6" v-if="post.image3">
                          <img
                            style="max-height: 155px !important;"
                            :src="ourImage(post.image3)"
                            alt="post-image"
                            class="img-responsive post-image"
                          />
                      </div>
                      <div style="margin-top: 10px;" class="col-md-6" v-if="post.video">
                          <video controls style="height: 159px;margin-top: -4px;" >
                                <source :src="ourImage(post.video)" type="video/mp4">
                            </video>
                      </div>
                  </div>
                  <hr style="width: 100% !important;" />
                  <div class="reaction">
                    <form
                      @click.prevent="storeLike(post)"
                      style="display: inline-flex;margin-top: 8px;"
                    >
                      {{post.likes.length}}
                      <a
                        style="padding:0px;"
                        v-if="post.likes == ''"
                        class="btn text-red"
                        type="submit"
                      >
                        <img
                          style="height:15px;margin-top: -9px;
                              margin-left: 5px;margin-right: -24px;"
                          src="/images/thumbs-up.PNG"
                          alt="LIKE"
                        />
                        <!-- <i class="icon ion-thumbsup"></i> -->
                      </a>
                      <div v-for="like in post.likes" :key="like.id">
                        <a
                          style="padding:0px;"
                          v-if="like.user_id !== getDatas.users.id"
                          class="btn text-red"
                          type="submit"
                        >
                          <img
                            style="height:15px;margin-top: -11px;margin-right: -24px;"
                            src="/images/thumbs-up.PNG"
                            alt="LIKE"
                          />
                          <!-- <i class="icon ion-thumbsup"></i> -->
                        </a>
                        <a
                          style="padding:0px;"
                          v-if="like.user_id == getDatas.users.id"
                          class="btn text-green"
                          type="submit"
                        >
                          <img
                            style="height:15px;margin-top: -11px;margin-right: -20px;"
                            src="/images/liked.png"
                            alt="LIKE"
                          />
                        </a>
                      </div>
                    </form>
                    <a
                      style="margin-left: 25px;"
                      href="#"
                      v-if="post.comments"
                      @click.prevent="visibleComment()"
                      class="comment-link"
                    >Comment</a>
                  </div>
                  <hr style="width: 100% !important;" />
                  <div v-show="showComment" class="post-comment-scroll" v-chat-scroll>
                    <div class="post-comment" v-for="comment in post.comments" :key="comment.id">
                      <div class="parent-comment">
                        <img :src="ourImage(comment.avatar.avatar)" alt class="profile-photo-sm" />
                        <p class="comment-bg">
                          <a
                            href="#"
                            @click.prevent="timeline()"
                            class="profile-link"
                          >{{ comment.user.first_name }}</a>
                          <span class="comment-text">{{ comment.comment }}</span>
                        </p>
                      </div>
                      <a href="#" @click.prevent="reply(post,comment,data)" class="reply-link">Reply</a>
                      <div
                        class="comment-reply"
                        v-for="commentReply in comment.reply"
                        :key="commentReply.id"
                      >
                        <div v-if="commentReply.reply" class="comment-reply-text">
                          <p style="margin-top: -13px;">
                            <img
                              :src="ourImage(commentReply.avatar.avatar)"
                              alt
                              class="profile-photo-sm reply-comment-profile-photo"
                            />
                            <a
                              href="#"
                              @click.prevent="timeline()"
                              class="profile-link reply-comment-profile-link"
                            >{{ commentReply.user.first_name }}</a>
                            <span class="reply-comment-text">{{ commentReply.reply }}</span>
                          </p>
                        </div>
                        <div class="comment-reply-link">
                          <a href="#" @click.prevent="reply(post,comment,data)">Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-show="!replyInputShow" class="post-comment-input">
                    <form class="comment-form" @keydown.enter.prevent="comment()">
                      <img :src="ourImage(data.avatar)" alt class="profile-photo-sm" />
                      <textarea
                        @keypress="pickId(post,data)"
                        type="text"
                        v-model="form.comment"
                        class="form-control comment-input"
                        placeholder="Write your comment"
                      ></textarea>
                    </form>
                  </div>
                  <div v-show="replyInputShow" class="post-comment-input">
                    <form class="comment-form" @keydown.enter.prevent="storeCommentReply()">
                      <img :src="ourImage(data.avatar)" alt class="profile-photo-sm" />
                      <textarea
                        type="text"
                        v-model="commentReply.reply"
                        class="form-control comment-input"
                        placeholder="Write your reply"
                      ></textarea>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2 static">
            <div class="suggestions" id="sticky-sidebar">
              <h4 class="grey">Join Club</h4>
              <div v-for="club in getClubs.clubs" :key="club.id">
                <div class="follow-user">
                  <img
                    src="images/group-icon/group-1.jpg"
                    alt
                    class="profile-photo-xs xs-shadow pull-left"
                  />
                  <div>
                    <h5 style="margin-bottom: 3px">
                      <router-link
                        :to="{name: 'club', params:{
                                    name: club.club_name,
                                    cl_id:club.id
                                },}"
                      >{{ club.club_name }}</router-link>
                    </h5>
                    <p class="text-green">Show Details</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="chat-block">
                {{ onUser }}
              <div class="title">
                Chat online
                <!-- <span
                  class="badge badge-danger"
                  v-if="totalOnlineUser"
                >{{totalOnlineUser}}</span> -->
              </div>
              <ul v-for="list in getFriendRequests.frinedships"
                    :key="list.id">
                <div v-for="onUser in isOnline" :key="onUser.id">
                  <li style="list-style: none;width: 60px;" v-if="list.requested_id == onUser.id && onUser.id != getAuthUserId">
                      <a href="#" :title="onUser.first_name">

                          <div v-for="user_pf in getDatas.pf" :key="user_pf.id">
                              <img
                                style="border: 4px solid #8DC63F;"
                                v-if="user_pf.user_id == onUser.id"
                                :src="ourImage(user_pf.avatar)"
                                alt="user"
                                class="img-responsive profile-photo"
                              />
                              <span class="badge badge-danger"></span>
                          </div>
                      </a>
                  </li>
                   <li style="list-style: none;width: 60px;" v-if="list.requester_id == onUser.id && onUser.id != getAuthUserId">
                      <a href="#" :title="onUser.first_name">
                          <div v-for="user_pf1 in getDatas.pf" :key="user_pf1.id">
                              <img
                                style="border: 4px solid #8DC63F;"
                                v-if="user_pf1.user_id == onUser.id"
                                :src="ourImage(user_pf1.avatar)"
                                alt="user"
                                class="img-responsive profile-photo"
                              />
                              <span class="online-dot"></span>
                          </div>
                      </a>
                    </li>
                </div>
              </ul>

              <!-- <ul
                class="online-users list-inline"
                v-for="list in getFriendRequests.frinedships"
                :key="list.id"
               >
                <li v-if="list.requested_id == getAuthUserId && list.status == 1">

                    <a
                        href="#"
                        :title="list.user.first_name"
                    >
                    {{ list.user }}
                        <img
                        v-for="avtr in list.user.avatar"
                        :key="avtr.id"
                        :src="ourImage(avtr.avatar)"
                        alt="user"
                        class="img-responsive profile-photo"
                        />
                        <span class="online-dot"></span>
                    </a>

                </li>
                <li v-if="list.requester_id == getAuthUserId && list.status == 1">
                  <a
                    href="#"
                    :title="list.requested_user.first_name"
                  >
                    <img
                      v-for="avtr in list.requested_user.avatar"
                      :key="avtr.id"
                      :src="ourImage(avtr.avatar)"
                      alt="user"
                      class="img-responsive profile-photo"
                    />
                    <span class="online-dot"></span>
                  </a>
                </li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <footercomponent></footercomponent>
  </div>
</template>

<script>
import _ from "lodash";
import headercomponent from "./components/layouts/header.vue";
import footercomponent from "./components/layouts/footer.vue";
import createclubcomponent from "./create_club.vue";
import batchcomponent from "./batches.vue";
import settingcomponent from "./setting.vue";
import allUserComponent from "./allUser.vue";
export default {
  name: "home",
  components: {
    headercomponent,
    footercomponent,
    createclubcomponent,
    batchcomponent,
    settingcomponent,
    allUserComponent
  },
  data() {
    return {
      master: "Master",
      // showCreateClubLink:false,
      visibleCreateClub: false,
      visibleSetting:false,
      showtimeline: false,
      allRegisterUser:false,
      btn: false,
      showPost: false,
      showSelectPhoto: false,
      showSelectVideo: false,
      replyInputShow: false,
      showComment: false,
      userTimeline: false,
      sendSkillForm: false,
      HomeDiscussion: true,
      form: false,
      cuppon: false,
      showSkillForm: false,
      getCuppon: false,
      visibleBatches: false,
      showEventDetails: false,
      loading:true,
      getAuthUserId: "",
      getAuthUserName:"",
      post: {
        avatar_id: "",
        text: "",
        image1: "",
        image2: "",
        image3: "",
        video: "",
        status: "0"
      },
      getPostId: "",
      showPostDetails: false,
      editPost: {
        id: "",
        avatar_id: "",
        text: "",
        image1: "",
        image2: "",
        image3: "",
        video: "",
        status: "0"
      },
      skill: {
        club_id: "",
        event_id: "",
        image1: "",
        image2: "",
        image3: "",
        video: ""
      },
      form: new Form({
        post_id: "",
        avatar_id: "",
        comment: []
      }),
      commentReply: {
        avatar_id: "",
        post_id: "",
        comment_id: "",
        reply: ""
      },
      like: {
        post_id: "",
        status: "1"
      },
      isOnline: [],
      onUser:"",
      online: [],
      clubMember: {
        club_id: ""
      },
      totalOnlineUser: "",
      memberValidityId: "0",
      authUserName: "",
      authUserDept: "",
      authUserBatch: "",
      authorData: [],
      eventDetails: {},
      fetchSingleAd:{}
    };
  },
  mounted() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    this.fetchAuthor();
    // this.getAuthUserId = `${authUser.id}`;

    this.$store.dispatch("userAction");
    this.$store.dispatch("userPostAction");
    this.$store.dispatch("postCommentAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubInfoAction");
    this.$store.dispatch("getClubMemberAction");
    this.$store.dispatch("getClubEventAction");

    Echo.channel("Comment").listen("CommentEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("Reply").listen("CommentReplyEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("Like").listen("LikeEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("AfterUnlike").listen("AfterUnlikeEvent", e => {
      this.$store.dispatch("userPostAction");
    });
    Echo.channel("Club").listen("ClubEvent", e => {
      this.$store.dispatch("getClubInfoAction");
    });
    // this.showLink();
  },
  created() {
    setInterval(() => {
      this.getAuthUserId = `${authUser.id}`;
      this.getAuthUserName = `${authUser.first_name}`;
    }, 500);

    Echo.join("onlineUser")
      .here(users => {
        var test = users.length - `${authUser.id}`;
        this.isOnline = users;
        // this.isOnline.forEach(el => {
        //     this.onUser = el;
        // });
        // console.log(this.dd);
        this.totalOnlineUser = test;
      })
      .joining(user => {
        this.online = user.id;
        this.totalOnlineUser += 1;
        Toast.fire({
          icon: "success",
          title: `${user.first_name} in now online.`
        });
      })
      .leaving(user => {
        this.online = user.id;
        this.totalOnlineUser -= 1;
        Toast.fire({
          icon: "warning",
          title: `${user.first_name} in now offline.`
        });
      });

    // this.memberValidity();
  },
  computed: {
    getDatas() {
      return this.$store.getters.getUser;
    },
    getPosts() {
      return this.$store.getters.getUserPost;
    },
    getPostComments() {
      return this.$store.getters.getPostComments;
    },
    getFriendRequests() {
      return this.$store.getters.getFriendRequest;
    },
    getClubs() {
      return this.$store.getters.getClub;
    },
    getClubMembers() {
      return this.$store.getters.getClubMember;
    },
    getClubEvents() {
      return this.$store.getters.getClubEvent;
    }
  },
  methods: {
    showAllUser(){
        if(this.allRegisterUser == false){
            this.allRegisterUser = true;
            this.HomeDiscussion = false;
            this.sendSkillForm = false;
            this.getCuppon = false;
            this.visibleCreateClub = false;
            this.visibleBatches = false;
        }else if(this.allRegisterUser == true){
            this.allRegisterUser = false;
            this.HomeDiscussion = true;
        }
    },
    showSetting(){
        this.allRegisterUser = false;
        this.HomeDiscussion = false;
        this.sendSkillForm = false;
        this.getCuppon = false;
        this.visibleCreateClub = false;
        this.visibleBatches = false;
        this.visibleSetting = true;
    },
    disableLoading(fetchSingleAd){
        if(fetchSingleAd.author_id == this.getAuthUserId || this.getAuthUserName == 'Master'){
            this.loading = false;

        }
    },
    editPostUpload() {
      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();
      formData.append("avatar_id", this.editPost.avatar_id);
      formData.append("text", this.editPost.text);
      formData.append("image1", this.editPost.image1);
      formData.append("image2", this.editPost.image2);
      formData.append("image3", this.editPost.image3);
      formData.append("video", this.editPost.video);
      formData.append("status", this.editPost.status);

      axios
        .post("/edit-post/" + this.getPostId, formData, config)
        .then((response)=>{
          this.$store.dispatch("userPostAction");
          Toast.fire({
            icon: "success",
            title: "Post Update successfully"
          });
        });
    },
    editUpdatePhoto1() {
      if (this.editPost.image1 !== null) {
        let img = this.editPost.image1;
        if (img.length > 100) {
          return this.editPost.image1;
        } else {
          return "/images/" + this.editPost.image1;
        }
      }
    },
    editUpdatePhoto2() {
      if (this.editPost.image2 !== null) {
        let img = this.editPost.image2;
        if (img.length > 100) {
          return this.editPost.image2;
        } else {
          return "/images/" + this.editPost.image2;
        }
      }
    },
    editUpdatePhoto3() {
      if (this.editPost.image3 !== null) {
        let img = this.editPost.image3;
        if (img.length > 100) {
          return this.editPost.image3;
        } else {
          return "/images/" + this.editPost.image3;
        }
      }
    },
    editUpdateVideo() {
      if (this.editPost.video !== null) {
        if (this.editPost.video["size"] > 2097152) {
          return this.editPost.video;
        } else {
          return "/images/" + this.editPost.video;
        }
      }
    },
    editChangeVideo(e) {
      this.editPost.video = e.target.files[0];

      if (this.editPost.video["size"] > 2097152) {
        this.editPost.video = "";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File size maximum 2mn."
        });
      }
    },
    editChangePhoto1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.editPost.image1 = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    editChangePhoto2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.editPost.image2 = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    editChangePhoto3(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.editPost.image3 = event.target.result;
      };
      reader.readAsDataURL(file);
    },
    edit_post(post) {
      this.showPostDetails = true;
      this.getPostId = post.id;
      this.editPost.avatar_id = post.avatar_id;
      this.editPost.text = post.text;
      this.editPost.image1 = post.image1;
      this.editPost.image2 = post.image2;
      this.editPost.image3 = post.image3;
      this.editPost.video = post.video;
      this.editPost.status = 0;
    },
    hide_post(post) {
      this.getPostId = post.id;
      this.post.avatar_id = post.avatar_id;
      this.post.text = post.text;
      this.post.image1 = post.image1;
      this.post.image2 = post.image2;
      this.post.image3 = post.image3;
      this.post.video = post.video;
      this.post.status = 1;
      axios
        .post("/hide-post/" + this.getPostId, {
          avatar_id: this.post.avatar_id,
          text: this.post.text,
          image1: this.post.image1,
          image2: this.post.image2,
          image3: this.post.image3,
          video: this.post.video,
          status: this.post.status
        })
        .then(response => {
          this.$store.dispatch("userPostAction");
          Toast.fire({
            icon: "success",
            title: "Post deleted successfull."
          });
        });
    },
    getEvent(event) {
      this.eventDetails = event;
      this.showEventDetails = true;
    },
    fetchAuthor() {
      axios.get("/get-author").then(response => {
        this.authorData = response.data.authors;
        //   console.log(this.authorData)
        response.data.authorsdt.forEach(resEl => {
            this.fetchSingleAd = resEl;
        });
      });
    },
    showBatches() {
      this.HomeDiscussion = false;
      this.visibleSetting = false;
      this.sendSkillForm = false;
      this.allRegisterUser = false;
      this.visibleCreateClub = false;
      this.visibleBatches = true;
    },
    showHomeDiscussion() {
      this.HomeDiscussion = true;
      this.sendSkillForm = false;
      this.allRegisterUser = false;
      this.visibleSetting = false;
      this.getCuppon = false;
      this.visibleCreateClub = false;
      this.visibleBatches = false;
    },
    print() {
      window.print();
    },
    randomNumber() {
      return Math.random() * 10000;
    },
    showCuppon(getDatas) {
      this.showSkillForm = false;
      this.visibleSetting = false;
      this.cuppon = false;
      this.form = false;
      this.getCuppon = true;
      this.authUserName = getDatas.users.first_name;
      this.authUserDept = getDatas.users.department;
      this.authUserBatch = getDatas.users.batch;
      this.randomNumber();
    },
    showForm() {
      this.showSkillForm = true;
      this.cuppon = false;
      this.form = false;
    },
    uploadSkill() {
      if (
        this.skill.image1 !== "" ||
        this.skill.image2 !== "" ||
        this.skill.image3 !== "" ||
        this.skill.video !== ""
      ) {
        let currentObj = this;

        const config = {
          headers: { "content-type": "multipart/form-data" }
        };

        let formData = new FormData();
        formData.append("club_id", this.skill.club_id);
        formData.append("event_id", this.skill.event_id);
        formData.append("image1", this.skill.image1);
        formData.append("image2", this.skill.image2);
        formData.append("image3", this.skill.image3);
        formData.append("video", this.skill.video);

        axios
          .post("/skill-store", formData, config)
          .then(function(response) {
            //   currentObj.success = response.data.success;
            Toast.fire({
              icon: "success",
              title: "Request send successfully"
            });
            this.skill.club_id = "";
            this.skill.event_id = "";
            this.skill.image1 = "";
            this.skill.image2 = "";
            this.skill.image3 = "";
            this.skill.video = "";
            this.showPost = false;
          })
          .catch(function(error) {
            //   currentObj.output = error;
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "please select your image or video!"
        });
      }
    },
    showSendSkillForm(event, getClubs, getDatas) {
      getClubs.clubs.forEach(el => {
        if (el.id == event.club.id) {
          el.club_members.forEach(mem => {
            //   this.memberValidityId = mem.user.id;
            if (mem.user.id == getDatas.users.id) {
              this.memberValidityId = mem.user.id;
              if (this.memberValidityId !== "") {
                this.skill.club_id = event.club_id;
                this.skill.event_id = event.id;
                this.sendSkillForm = true;
                this.form = true;
                this.cuppon = true;
                this.visibleCreateClub = false;
                this.HomeDiscussion = false;
                this.visibleBatches = false;
              }
            } else if (mem.user.id !== getDatas.users.id) {
              this.memberValidityId = mem.user.id;
              if (this.memberValidityId !== "") {
                Toast.fire({
                  icon: "warning",
                  title:
                    "Before participate you must have to be join this club."
                });
              }
            }
          });
        }
      });
    },
    showFriend() {
      this.hideAFbtn = false;
      this.friend = true;
    },
    addFriendPending() {
      this.hideAFbtn = false;
      this.friend = false;
      // this.requestPending = true;
    },
    showCreateClub() {
      this.visibleCreateClub = true;
      this.HomeDiscussion = false;
      this.visibleBatches = false;
      this.visibleSetting = false;
    },
    // liveUser(list) {
    //   if (list.user) {
    //     return _.find(this.users, { id: list.user.id });
    //   }
    //   if (list.requested_user) {
    //     return _.find(this.users, { id: list.requested_user.id });
    //   }
    // },
    storeLike(post) {
      this.like.post_id = post.id;
      axios
        .post("/store-like", {
          post_id: this.like.post_id,
          status: this.like.status
        })
        .then(response => {
          if ((response.data.status = "unlike")) {
            this.liked = true;
          } else if ((response.data.status = "like")) {
            this.liked = false;
          }
        });
    },
    storeCommentReply() {
      axios
        .post("/store-reply", {
          avatar_id: this.commentReply.avatar_id,
          post_id: this.commentReply.post_id,
          comment_id: this.commentReply.comment_id,
          reply: this.commentReply.reply
        })
        .then(response => {
          this.commentReply.reply = [];
          this.replyInputShow = false;
          this.showComment = true;
        });
    },
    // getAvatarId(data) {
    //   this.post.avatar_id = data.id;
    // },
    visibleComment() {
      if ((this.showComment = false)) {
        this.showComment = true;
      } else if (this.showComment == true) {
        this.showComment = false;
      }
    },
    reply(post, comment, data) {
      this.replyInputShow = true;
      this.commentReply.post_id = post.id;
      this.commentReply.avatar_id = data.id;
      this.commentReply.comment_id = comment.id;
      setTimeout(() => {
        this.replyInputShow = false;
        this.commentReply.avatar_id = "";
        this.commentReply.post_id = "";
        this.commentReply.comment_id = "";
      }, 60000);
    },
    pickId(post, data) {
      this.form.post_id = post.id;
      this.form.avatar_id = data.id;
    },
    comment() {
      this.form.post("/postComment").then(response => {
        this.form.comment = [];
        this.showComment = true;
      });
    },
    showBtn(data) {
      this.btn = true;
      this.post.avatar_id = data.id;
    },
    SelectPhoto() {
      this.showSelectPhoto = true;
    },
    SelectVideo() {
      this.showSelectVideo = true;
    },
    showContent(data) {
      this.showPost = true;
      this.post.avatar_id = data.id;
    },
    hideContent() {
      this.showPost = false;
      this.sendSkillForm = false;
      this.showSkillForm = false;
      this.getCuppon = false;
      this.HomeDiscussion = true;
      this.btn = false;
      this.post.avatar_id = "";
      this.post.text = "";
      this.post.image1 = "";
      this.post.image2 = "";
      this.post.image3 = "";
      this.post.video = "";
    },

    ourImage(img) {
      return "/images/" + img;
    },
    changePhoto1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.post.image1 = event.target.result;
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
    changePhoto2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.post.image2 = event.target.result;
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
    changePhoto3(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.post.image3 = event.target.result;
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
    changeVideo(e) {
      this.post.video = e.target.files[0];

      if (this.post.video["size"] <= 2097152) {
        if (this.btn == false) {
          this.btn = true;
        } else if (this.btn == true) {
          this.btn = true;
        } else {
          this.btn = false;
        }
      } else {
        this.post.video = "";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File size maximum 2mn."
        });
      }
    },
    changeSkill1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.skill.image1 = event.target.result;
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
    changeSkill2(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.skill.image2 = event.target.result;
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
    changeSkill3(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.skill.image3 = event.target.result;
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
    changeSkillVideo(e) {
      this.skill.video = e.target.files[0];

      if (this.skill.video["size"] <= 2097152) {
        if (this.btn == false) {
          this.btn = true;
        } else if (this.btn == true) {
          this.btn = true;
        } else {
          this.btn = false;
        }
      } else {
        this.skill.video = "";
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File size maximum 2mn."
        });
      }
    },
    uploadPost(e) {
      e.preventDefault();
      let currentObj = this;

      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();
      formData.append("avatar_id", this.post.avatar_id);
      formData.append("text", this.post.text);
      formData.append("image1", this.post.image1);
      formData.append("image2", this.post.image2);
      formData.append("image3", this.post.image3);
      formData.append("video", this.post.video);
      formData.append("status", this.post.status);

      axios
        .post("/post", formData, config)
        .then(response => {
          this.$store.dispatch("userPostAction");
          //   currentObj.success = response.data.success;
          Toast.fire({
            icon: "success",
            title: "Post Upload successfully"
          });
          this.post.avatar_id = "";
          this.post.text = "";
          this.post.image1 = "";
          this.post.image2 = "";
          this.post.image3 = "";
          this.post.video = "";
          this.showPost = false;
          this.btn = false;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    }
  }
};
</script>

<style>
.cuppon-code {
  text-align: center;
  font-size: 20px;
  background: #ddd;
  padding: 50px;
  font-weight: 700;
  font-family: cursive;
  animation: 3s;
}
.user-info {
  margin-left: 55px;
  margin-top: -10px;
}
.team_image {
  width: 45px;
  height: 40px;
  padding-right: 5px;
  box-shadow: 5px 5px 5px 5px #ddd;
  transition: transform 0.2s;
  margin: 0 auto;
  border-radius: 5px;
}
.img-style {
  width: 150px;
  height: 140px;
  margin-bottom: 5px;
  margin-top: 25px;
  float: left;
  margin-left: 52px;
  border: dashed 1.5px blue;
  background-image: repeating-linear-gradient(45deg, black, transparent 100px);
}
.control-file {
  margin-top: 170px;
  margin-left: -120px;
  width: 91px;
}
.video-file {
  margin-top: 180px;
  margin-left: 117px;
  width: 262px;
}
.video {
  width: 160%;
  height: auto;
  margin-left: 180px;
  margin-top: 15px;
}
.post-btn {
  width: 100%;
  margin-top: 5px;
}
.comment-bg {
  background-color: #ddd;
  padding: 2px 5px;
  width: 100%;
  border-radius: 5px 5px 5px 5px;
}
.comment-text {
  float: left;
  width: 100%;
}
.comment-input {
  min-height: 40px;
  margin-left: 10px;
}
.comment-form {
  width: 100% !important;
  display: inline-flex;
  margin-top: 10px;
}
.parent-comment {
  display: inline-flex;
  width: 99.5%;
  margin-top: 5px;
}
.comment-reply {
  display: inline-flex;
  margin-left: 62px;
  background-color: aqua;
  width: 88%;
  border-radius: 0px 5px 5px 5px;
  position: relative;
  margin-bottom: 0px;
}
.comment-reply::after {
  border-left: 20px solid rgb(0, 255, 255, 2);
  border-top: 20px solid transparent;
  content: "";
  height: 20px;
  position: absolute;
  top: -20px;
  width: 0;
  left: 0px;
}
.reply-comment-text {
  float: left;
  width: 100%;
  margin-left: 35px;
  margin-top: -15px;
}
.comment-reply-text {
  background-color: aliceblue;
  border-radius: 5px 5px 5px 5px;
  padding: 5px;
  margin: 5px -40px 25px 10px;
  width: 100%;
}
.reply-comment-profile-photo {
  height: 30px !important;
  width: 30px !important;
  margin-right: 0px !important;
  margin-top: 13px !important;
}
.reply-comment-profile-link {
  margin-top: 10px;
}
.post-comment-input {
  margin-top: -20px;
  width: 100%;
}
.reply-link {
  float: right;
  margin-top: -10px;
  margin-right: 2px;
}
.post-comment-scroll {
  overflow-y: scroll;
  height: 300px;
  overflow-x: hidden;
  margin-top: -10px;
  margin-bottom: 15px;
}
.comment-link {
  float: right;
  margin-top: 7px;
}
.post-image {
  height: 300px !important;
}
/* .reply-comment-scroll{
    overflow-y: scroll;
    height: 100px;
    overflow-x: hidden;

} */
.comment-reply-link {
  margin-top: 70px;
  float: right;
  margin-right: 15px;
  margin-bottom: 3px;
}
.friend-request-ul {
  width: 400px !important;
  background-color: #27aae1 !important;
  margin-top: 12px !important;
  margin-right: 8px;
  border-radius: 5px;
}
.friend-request-ul::before {
  border-bottom: 0px solid transparent;
  /* border-right: 10px solid rgba(39, 170, 225, 2); */
  border-right: 10px solid #fff;
  border-top: 12px solid transparent;
  content: "";
  height: 0px !important;
  position: absolute;
  top: -12px;
  width: 0;
  right: 20px;
}
.friend-request-ul::after {
  border-bottom: 0px solid transparent;
  /* border-left: 10px solid rgba(39, 170, 225, 2); */
  border-left: 10px solid #fff;
  border-top: 12px solid transparent;
  content: "";
  height: 0;
  right: 10px;
  position: absolute;
  top: -12px;
  width: 0;
}
.friend-request-li {
  padding: 15px 10px 35px 10px !important;
  border-bottom: 0px !important;
  border-bottom: 1px solid rgb(0, 255, 255, 0.3) !important;
}
.friend-request-li:hover {
  background-color: #27aae1 !important;
}
.friend-request-right-li:hover {
  background-color: #27aae1 !important;
}
.friend-request-right-li {
  display: inline-flex;
  margin-top: -12px;
}

.friend-request-right-li a:hover {
  border-bottom: none;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  color: #27aae1 !important;
  font-weight: 700;
  text-decoration: none !important;
  margin-left: 5px;
}
.friend-request-left-li {
  margin-top: -17px;
}
.friend-request-left-li a:hover {
  text-decoration: none !important;
  background-color: #27aae1 !important;
  padding: 0px !important;
  color: #fff !important;
  font-weight: 700;
  border-bottom: none;
}
.friend-request-left-li-avatar {
  margin-top: 10px !important;
}
.span {
  display: block;
  margin-left: 36px;
  font-size: 10px;
  margin-top: -12px;
  opacity: 0.8;
}
.accept-btn {
  margin-right: 5px;
}
.offline-dot {
  background: red;
  border: none;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  position: absolute;
  bottom: -6px;
  border: 2px solid #fff;
  left: 0;
  right: 0;
  margin: auto;
}
.follow-user div {
  margin-left: 35px !important;
  position: relative;
}
.friendInfo {
  display: inline-flex;
  margin-top: 5px;
  margin-bottom: 5px;
}
.friendInfo a:hover {
  text-decoration: none;
}
.friend-list-span {
  display: block;
  margin-left: -21px;
  font-size: 10px;
  margin-top: 20px;
}
.friendList-content {
  background: #f8f8f8;
  border-radius: 4px;
  width: 100%;
  border-bottom: 1px solid #f1f2f2;
  overflow: hidden;
  padding: 0px 20px;
}
.friend-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
.unfriend {
  float: right;
  margin-top: 15px;
}
.unfriendBtn {
  color: #fff;
  font-weight: 700;
  padding: 10px;
  background-color: #2faae1;
  border-radius: 5px;
}
.unfriend a:hover {
  color: #fff;
  text-decoration: none;
  background-color: #204d74;
  transition: 0.7s;
}
.frindList {
  padding: 20px;
}
</style>
