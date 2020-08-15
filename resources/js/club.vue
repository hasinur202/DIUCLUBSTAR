<template>
  <div>
    <headercomponent></headercomponent>
    <div id="page-contents">
      <div class="container">
        <div class="row">
          <div class="timeline-cover">
            <img class="timeline-nav-bar" :src="ourImage(clubData.cover)" />
            <div class="timeline-nav-bar hidden-sm hidden-xs">
              <div class="row">
                <div class="col-md-12">
                  <ul class="list-inline profile-menu">
                    <li>
                      <router-link
                        style="font-size: 22px;"
                        :to="{name: 'club', params:{
                                                name: clubData.club_name
                                            },}"
                      >{{ clubData.club_name }}</router-link>
                    </li>
                    <div v-for="t in clId" :key="t.id">
                      <span
                        v-if="t.status == 0 && t.user_id == getDatas.users.id &&
                                                    t.club_id == $route.params.cl_id && visiblePending(t)"
                        style="margin-top: -20px;"
                        class="badge badge-success"
                      ></span>

                      <span
                        v-if="t.status == 1 && t.user_id == getDatas.users.id &&
                                                    t.club_id == $route.params.cl_id && disableJoin(t)"
                        style="margin-top: -20px;"
                        class="badge badge-success"
                      ></span>
                    </div>
                  </ul>
                  <ul class="follow-me list-inline" style="display: inline-flex;margin-top: 8px;">
                    <li v-if="countMember">{{ countMember }} Member's</li>
                    <li>
                      <span
                        style="background-color: #f0ad4e !important;"
                        class="badge badge-success"
                        v-show="showPending && !joined"
                      >Pending</span>
                      <span
                        style="background-color: #5cb85c !important;"
                        class="badge badge-success"
                        v-show="!join && joined"
                      >Joined</span>
                      <form @click.prevent="addMember(clubData)" v-show="join">
                        <a href="#" type="submit">
                          <span
                            style="background-color: #d9534f !important;"
                            class="badge badge-success"
                          >Join</span>
                        </a>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 static">
            <div class="suggestions" id="sticky-sidebar">
              <ul class="nav-news-feed">
                <li>
                  <i class="icon ion-ios-paper"></i>
                  <div>
                    <a @click.prevent="showDiscussion" href="#">Discussion</a>
                  </div>
                </li>
                <li v-show="showLink">
                  <i class="icon ion-ios-paper"></i>
                  <div>
                    <a @click.prevent="showUpdateClub()" href="#">Update Club Information</a>
                  </div>
                </li>
                <li v-show="showLink">
                  <i class="icon ion-ios-people"></i>
                  <div>
                    <a @click.prevent="showClubMembers()" href="#">All Members</a>
                  </div>
                </li>
                <li v-show="showLink">
                  <i class="fa fa-list-alt"></i>
                  <div>
                    <a @click.prevent="showParticipants()" href="#">Participants Request <span class="badge badge-danger">{{ getSkills.count_skill }}</span> </a>
                  </div>
                </li>
                <li v-show="showLink">
                  <i class="icon ion-edit"></i>
                  <div>
                    <a @click.prevent="showCreateEventComponent()" href="#">Create Event</a>
                  </div>
                </li>
                <li>
                  <i class="icon ion-album"></i>
                  <div>
                    <a @click.prevent="showAlbum()" href="#">Album</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-md-7 tab-content" v-for="data in getDatas.avatars" :key="data.id">
            <add-club-info-component v-show="addClubInfoComponent"></add-club-info-component>
            <!-- <create-event-component ></create-event-component> -->
            <!-- {{ getSkills.skill }} -->
            <div v-show="createEventComponent" class="edit-profile-container">
                <div class="block-title">
                    <h4 class="grey"><i class="icon ion-android-checkmark-circle"></i>Add Event Information</h4>
                    <p style="margin-top: -15px;margin-bottom: 25px;color: cadetblue;">If you are changes this, your group cover photo will be change and everybody can see that changes.</p>
                    <div class="line"></div>
                </div>
                <div class="edit-block">
                    <img :src="editMode ? updatePhoto():form.photo" class="img-thumbnail">
                    <p class="cover-size">Cover photo size 820 x 312</p>
                    <form @submit.prevent="editMode ? updateEvent():add_event(getDatas,getAuthors)">
                        <div class="row">
                            <div class="form-group col-xs-12">
                                <label class="custom-file-label" for="image">Input File</label>
                                <input type="file" class="cover-img-input" @change="changePhoto($event)" name="photo">
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
                        <button v-show="!editMode" type="submit" class="btn btn-primary">Submit</button>
                        <button v-show="editMode" type="submit" class="btn btn-success">Update</button>
                    </form>
                </div>
            </div>
            <div v-show="clubMembers">
              <div class="people-nearby">
                <div class="nearby-user">
                  <div
                    class="row"
                    style="padding-left: 100px;"
                    v-for="member in getClubMembers.all_members"
                    :key="member.id"
                  >
                    <div v-if="member.club_id == $route.params.cl_id && member.status == 1">
                      <div
                        class="col-md-2 col-sm-2"
                        style="width: 55px;"
                        v-for="member_avatar in member.user.avatar"
                        :key="member_avatar.id"
                      >
                        <img
                          v-if="member_avatar.avatar"
                          :src="ourImage(member_avatar.avatar)"
                          alt="user"
                          class="profile-photo-md"
                        />
                      </div>
                      <div class="col-md-6 col-sm-7">
                        <h5>
                          <router-link  v-if="member.user.first_name"
                            :to="{name: 'timeline', params:{
                                name: member.user.first_name
                            },}" class="profile-link">{{ member.user.first_name }}</router-link>
                        </h5>
                        <h6 class="text-green">{{ member.user.department }}-{{ member.user.batch }}</h6>
                      </div>
                      <div class="col-md-4 col-sm-3">
                        <form @click.prevent="memberReject(member)">
                          <a
                            class="btn btn-primary"
                            type="submit"
                            style="margin-top: 12px;"
                            href="#"
                          >Block</a>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-show="userSkill">
              <h4 style="color:#000">Images</h4>
              <hr style="margin-top:5px;">
              <ul class="album-photos">
                <li>
                  <div class="img-wrapper" data-toggle="modal" data-target="#photo">
                    <img :src="ourImage(userSkillData.image1)" alt="photo" />
                  </div>
                  <div id="photo" class="modal fade" style="margin-top: 61px;display:none;opacity:1;" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content">
                          <div class="modal-body" style="margin-top:70px;">
                              <img :src="ourImage(userSkillData.image1)" alt="photo" />
                          </div>

                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <hr style="margin-bottom:5px;">
               <h4 style="color:#000">Videos</h4>
              <hr style="margin-top:5px;">
                <div class="tab-pane" id="videos">
                    <div class="media">
                        <div class="row js-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'>

                            <div class="grid-item col-md-6 col-sm-6">
                                <div class="media-grid">
                                    <div class="img-wrapper" data-toggle="modal" data-target=".modal-1">
                                        <video controls>
                                            <source :src="ourImage(userSkillData.video)" type="video/mp4">
                                        </video>
                                    </div>

                                    <div class="modal fade modal-1" style="margin-top: 61px;display:none;opacity:1;" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog modal-lg">
                                            <div class="modal-content">
                                                <div class="post-content">
                                                    <div class="video-wrapper">
                                                        <video controls>
                                                            <source :src="ourImage(userSkillData.video)" type="video/mp4">
                                                        </video>
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
              <hr>
            </div>
            <div v-show="participate">
              <div class="people-nearby">
                <div class="nearby-user">
                  <div class="row">
                    <h4 style="color: #000;font-weight: 700;margin: 0px;">Member Request</h4>
                    <hr style="margin-top: 10px;margin-bottom: 10px;">
                    <div class="row" v-for="participate in getSkills.skill"
                     :key="participate.id">
                        <div v-if="participate.status == 0 && participate.club_id == $route.params.cl_id">
                            <div
                                class="col-md-2 col-sm-2"
                                style="width: 55px;"
                                v-for="candidate_avatar in participate.user.avatar"
                                :key="candidate_avatar.id"
                              >
                                <img
                                v-if="candidate_avatar.avatar"
                                :src="ourImage(candidate_avatar.avatar)"
                                alt="user"
                                class="profile-photo-md"
                                />
                            </div>
                            <div class="col-md-6 col-sm-7">
                                <h5>
                                    <router-link v-if="participate.user"
                                        :to="{name: 'timeline', params:{
                                            name: participate.user.first_name
                                        },}"  class="profile-link">
                                        {{ participate.user.first_name }}
                                    </router-link>
                                </h5>
                                <h6 class="text-green">{{ participate.user.department }}-{{ participate.user.batch }}</h6>
                            </div>
                            <div class="col-md-4 col-sm-3" style="display: inline-flex;margin-left: 30px;">
                                <a
                                    @click.prevent ="showUserSkill(participate)"
                                    class="badge badge-info"
                                    title="view data"
                                    type="submit"
                                    style="margin-top: 12px !important;
                                        background-color: #5bc0de !important;
                                        padding-right: 10px !important;
                                        margin-left: -35px !important;
                                        margin-right: 5px !important;
                                        padding-bottom: 0 !important;"

                                    href="#"
                                ><i style="font-size: 30px;
                                    margin-left: 4px;" class = "icon icon ion-ios-eye"></i></a>
                                <form @click.prevent="approveMember(participate)">
                                <a
                                    class="btn btn-primary"
                                    type="submit"
                                    style="margin-top: 12px;margin-right: 5px;padding-left: 10px !important;
                                        padding-right: 10px !important;border-radius: 5px !important;"
                                    href="#"
                                >Approve</a>
                                </form>
                                <form @click.prevent="memberBlock(participate)">
                                <a
                                    class="btn btn-danger"
                                    type="submit"
                                    style="margin-top: 12px;"
                                    href="#"
                                >Reject</a>
                                </form>
                            </div>
                        </div>
                    </div>

                  </div>

                  <div class="row">
                    <hr style="margin-top: 5px;margin-bottom: 5px;">
                        <h4 style="color: #000;font-weight: 700;margin: 0px;">Selected Member</h4>
                    <hr style="margin-top: 5px;margin-bottom: 5px;">

                    <div class="row" v-for="selected in getSkills.skill"
                     :key="selected.id">
                        <div v-if="selected.status == 1 && selected.club_id == $route.params.cl_id">
                            <div
                                class="col-md-2 col-sm-2"
                                style="width: 55px;"
                                v-for="selected_avatar in selected.user.avatar"
                                :key="selected_avatar.id"
                            >
                                <img
                                v-if="selected_avatar.avatar"
                                :src="ourImage(selected_avatar.avatar)"
                                alt="user"
                                class="profile-photo-md"
                                />
                            </div>
                            <div class="col-md-6 col-sm-7">
                                <h5>
                                <router-link v-if="selected.user"
                                        :to="{name: 'timeline', params:{
                                            name: selected.user.first_name
                                        },}" class="profile-link">{{ selected.user.first_name }}</router-link>
                                </h5>
                                <h6 class="text-green">{{ selected.user.department }}-{{ selected.user.batch }}</h6>
                            </div>
                            <div class="col-md-4 col-sm-3">
                                <a
                                    @click.prevent ="showSelectedUserSkill(selected)"
                                    class="badge badge-danger"
                                    title="view data"
                                    type="submit"
                                    style="margin-top: 12px;background-color: #2FAAE1;"
                                    href="#"
                                ><i style="font-size:30px;" class = "icon icon ion-ios-eye"></i></a>
                                <a
                                    class="btn btn-success"
                                    type="submit"
                                    style="margin-top: 12px;"
                                >Approved</a>
                            </div>
                        </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div v-show="discussion">
              <div class="create-post" v-show="showLink">
                <div class="row">
                  <div v-show="!showPost" @click.prevent="showContent" class="col-md-7 col-sm-7">
                    <div class="form-group">
                      <img v-if="data.avatar" :src="ourImage(data.avatar)" class="profile-photo-md" />
                      <textarea
                        @click.prevent="showContent()"
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
                          <a href="#" @click.prevent="showContent()">
                            <i class="ion-images"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" @click.prevent="showContent()">
                            <i class="ion-ios-videocam"></i>
                          </a>
                        </li>
                      </ul>
                      <button
                        type="submit"
                        @click.prevent="showContent()"
                        class="btn btn-primary pull-right"
                      >Publish</button>
                    </div>
                  </div>
                  <!-- v-if="getDatas.users.first_name == 'Master'" -->
                  <form enctype="multipart/form-data" @submit.prevent="uploadPost">
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
                          @keypress="showBtn()"
                          v-model="clubPost.text"
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
                                  v-model="clubPost.status"
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
                          <img :src="clubPost.image1" class="img-style" />
                          <input
                            name="image1"
                            @change="changePhoto1($event)"
                            type="file"
                            class="control-file"
                          />
                        </div>
                        <div class="form-group">
                          <img :src="clubPost.image2" class="img-style" />
                          <input
                            name="image2"
                            @change="changePhoto2($event)"
                            type="file"
                            class="control-file"
                          />
                        </div>
                        <div class="form-group">
                          <img :src="clubPost.image3" class="img-style" />
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
                    <button type="submit" v-show="btn" class="btn btn-primary post-btn">Publish</button>
                  </form>
                </div>
              </div>

              <!-- <div class="post-content" v-for="cl_post in getClubPosts.club_posts" :key="cl_post.id">

                <div class="post-container">
                  <img src="images/users/user-16.jpg" alt="user" class="profile-photo-md pull-left" />
                  <div class="post-detail">
                    <div class="user-info">
                      <h5>
                        <a href="timeline.html" class="profile-link">{{ cl_post.author.first_name }}</a>
                        <span class="following">following</span>
                      </h5>
                      <p class="text-muted">{{ cl_post.created_at }}</p>
                    </div>

                    <div class="reaction">
                      <a class="btn text-green">
                        <i class="fa fa-thumbs-up"></i> 13
                      </a>
                      <a class="btn text-red">
                        <i class="fa fa-thumbs-down"></i> 0
                      </a>
                    </div>
                    <div class="line-divider"></div>
                    <div class="post-text">
                      <p>
                        {{cl_post.text}}
                        <i class="em em-anguished"></i>
                        <i class="em em-anguished"></i>
                        <i class="em em-anguished"></i>
                      </p>
                    </div>
                    <img
                        src="images/post-images/03.png"
                        alt="post-image"
                        class="img-responsive post-image"
                    />
                    <div class="line-divider"></div>
                    <div class="post-comment">
                      <img src="images/users/user-12.jpg" alt class="profile-photo-sm" />
                      <p>
                        <a href="timeline.html" class="profile-link">Sazzad Hossain</a>
                        <i class="em em-laughing"></i> Lorem ipsum d
                      </p>
                    </div>
                    <div class="post-comment">
                      <img src="images/users/user-13.jpg" alt class="profile-photo-sm" />
                      <p>
                        <a href="timeline.html" class="profile-link">Iqbal Ahmed</a> Lorem ipsum dolor sit amet
                      </p>
                    </div>
                    <div class="post-comment">
                      <img src="images/users/user-16.jpg" alt class="profile-photo-sm" />
                      <input type="text" class="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>-->
              <div
                class="post-content"
                v-for="cl_post in getClubPosts.club_posts"
                :key="cl_post.id"
               >
                <div class="post-container" v-if="cl_post.club_id == $route.params.cl_id">
                  <img
                    v-for="cl_aut_avtr in cl_post.author.avatar"
                    :key="cl_aut_avtr.id"
                    :src="ourImage(cl_aut_avtr.avatar)"
                    alt="user"
                    class="profile-photo-md pull-left"
                  />
                  <div class="user-info" style="margin-top: -5px !important;">
                    <h5>
                      <a href="#" class="profile-link">{{ cl_post.author.first_name }}</a>
                      <div v-for="deg in cl_post.author.author" :key="deg.id">
                            <span style="font-size: 10px;margin-left: 0px !important;margin-top: 5px;" v-if="$route.params.cl_id == deg.club_id && cl_post.author.id == deg.author_id && deg.author_id== getAuthUserId" class="badge badge-danger">
                                {{ deg.designation }}
                            </span>
                      </div>
                    </h5>
                    <p class="text-muted">{{ cl_post.created_at | postTime}}</p>
                  </div>
                  <div class="post-detail">
                    <div class="post-text">
                      <p>
                        {{ cl_post.text }}
                        <i class="em em-anguished"></i>
                        <i class="em em-anguished"></i>
                        <i class="em em-anguished"></i>
                      </p>
                    </div>
                    <div v-if="cl_post.image1 !=null && cl_post.image2==null && cl_post.image3==null">
                        <img
                        :src="ourImage(cl_post.image1)"
                        alt="post-image"
                        class="img-responsive post-image"
                        />
                    </div>

                    <div v-else class="row col-md-12" style="margin-bottom: 10px !important;">
                        <div class="col-md-6" v-if="cl_post.image1">
                            <img
                            style="max-height: 155px !important;"
                            :src="ourImage(cl_post.image1)"
                            alt="post-image"
                            class="img-responsive post-image"
                            />
                        </div>
                        <div class="col-md-6" v-if="cl_post.image2">
                            <img
                            style="max-height: 155px !important;"
                            :src="ourImage(cl_post.image2)"
                            alt="post-image"
                            class="img-responsive post-image"
                            />
                        </div>
                        <div style="margin-top: 10px;" class="col-md-6" v-if="cl_post.image3">
                            <img
                            style="max-height: 155px !important;"
                            :src="ourImage(cl_post.image3)"
                            alt="post-image"
                            class="img-responsive post-image"
                            />
                        </div>
                        <div style="margin-top: 10px;" class="video-wrapper col-md-6" v-if="cl_post.video">

                            <video controls>
                                <source :src="ourImage(cl_post.video)" type="video/mp4">
                            </video>
                        </div>

                    </div>

                    <hr style="width: 100% !important;" />
                    <div class="reaction">
                      <form @click.prevent="store_like(cl_post)">
                        <a v-show="!liked" class="btn text-red" type="submit">
                          <i class="fa fa-thumbs-up"></i>
                          {{cl_post.club_post_likes.length}}
                          Like
                        </a>
                        <a v-show="liked" class="btn text-green" style="font-weight:700" type="submit">
                          <i class="fa fa-thumbs-up"></i>
                          {{cl_post.club_post_likes.length}}
                          Like
                        </a>
                      </form>
                      <a href="#" @click.prevent="visibleComment()" class="comment-link">Comment</a>
                    </div>
                    <hr style="width: 100% !important;" />
                    <div v-show="showComment" class="post-comment-scroll" v-chat-scroll>
                      <div
                        class="post-comment"
                        v-for="postComment in getClubPostComments.club_post_comments"
                        :key="postComment.id"
                      >
                        <div class="parent-comment" v-if="postComment">
                          <img
                            v-for="postCommentAvtr in postComment.club_author.avatar"
                            :key="postCommentAvtr.id"
                            :src="ourImage(postCommentAvtr.avatar)"
                            alt
                            class="profile-photo-sm"
                          />
                          <p class="comment-bg">
                            <a
                              href="#"
                              class="profile-link"
                            >{{ postComment.club_author.first_name }}</a>
                            <span class="comment-text">{{ postComment.comment }}</span>
                          </p>
                        </div>
                        <a
                          href="#"
                          @click.prevent="club_post_comment_reply(data,cl_post,postComment)"
                          class="reply-link"
                        >Reply</a>
                        <div
                          class="comment-reply"
                          v-for="cl_post_com_rep in postComment.club_post_comment_reply"
                          :key="cl_post_com_rep.id"
                        >
                          <div class="comment-reply-text" v-if="cl_post_com_rep.reply">
                            <p style="margin-top: -5px;">
                              <img
                                v-if="cl_post_com_rep.avatar"
                                :src="ourImage(cl_post_com_rep.avatar.avatar)"
                                alt
                                class="profile-photo-sm reply-comment-profile-photo"
                              />

                              <a
                                href="#"
                                @click.prevent="timeline()"
                                class="profile-link reply-comment-profile-link"
                              >{{cl_post_com_rep.club_author.first_name}}</a>
                              <span style="margin-left: 1px !important;
                                margin-top: -5px !important;" class="reply-comment-text">{{ cl_post_com_rep.reply }}</span>
                            </p>
                          </div>
                          <div class="comment-reply-link">
                            <a
                              href="#"
                              @click.prevent="club_post_comment_reply(data,cl_post,postComment)"
                            >Reply</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-show="!replyInputShow" class="post-comment-input">
                      <form class="comment-form" @keydown.enter.prevent="storeComment(cl_post)">
                        <img
                          v-for="cl_aut_avtr in cl_post.author.avatar"
                          :key="cl_aut_avtr.id"
                          :src="ourImage(cl_aut_avtr.avatar)"
                          alt
                          class="profile-photo-sm"
                        />
                        <textarea
                          type="text"
                          v-model="postComment.comment"
                          class="form-control comment-input"
                          placeholder="Write your comment"
                        ></textarea>
                      </form>
                    </div>
                    <div v-show="replyInputShow" class="post-comment-input">
                      <form
                        class="comment-form"
                        @keydown.enter.prevent="storeClubPostCommentReply()"
                      >
                        <img
                          v-for="cl_aut_avtr in cl_post.author.avatar"
                          :key="cl_aut_avtr.id"
                          :src="ourImage(cl_aut_avtr.avatar)"
                          alt
                          class="profile-photo-sm"
                        />
                        <textarea
                          type="text"
                          v-model="clubPostCommentReply.reply"
                          class="form-control comment-input"
                          placeholder="Write your reply"
                        ></textarea>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <ul class="album-photos" v-show="album">

                <li v-for="cl_post_pic in getClubPosts.club_posts" :key="cl_post_pic.id">
                    <div v-if="cl_post_pic.club_id == $route.params.cl_id">
                        <div style="margin-top:3px" class="img-wrapper" data-toggle="modal" data-target="#photo-1">
                            <img style="width:250px;height:150px;" v-if="cl_post_pic.image1" :src="ourImage(cl_post_pic.image1)" alt="photo" />
                        </div>

                        <div class="modal fade" id="photo-1" style="padding-right: 17px;opacity: 1;margin-top: 60px;" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content" style="margin-top: 95px;padding: 20px;">
                                    <img v-if="cl_post_pic.image1" :src="ourImage(cl_post_pic.image1)" alt="photo" />
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:3px" class="img-wrapper" data-toggle="modal" data-target="#photo-2">
                            <img style="width:250px;height:150px;" v-if="cl_post_pic.image2" :src="ourImage(cl_post_pic.image2)" alt="photo" />
                        </div>

                        <div class="modal fade" id="photo-2" style="padding-right: 17px;opacity: 1;margin-top: 60px;" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content" style="margin-top: 95px;padding: 20px;">
                                    <img v-if="cl_post_pic.image2" :src="ourImage(cl_post_pic.image2)" alt="photo" />
                                </div>
                            </div>
                        </div>
                        <div style="margin-top:3px" class="img-wrapper" data-toggle="modal" data-target="#photo-3">
                            <img style="width:250px;height:150px;" v-if="cl_post_pic.image3" :src="ourImage(cl_post_pic.image3)" alt="photo" />
                        </div>

                        <div class="modal fade" id="photo-3" style="padding-right: 17px;opacity: 1;margin-top: 60px;" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content" style="margin-top: 95px;padding: 20px;">
                                    <img v-if="cl_post_pic.image3" :src="ourImage(cl_post_pic.image3)" alt="photo" />
                                </div>
                            </div>
                        </div>
                    </div>

                  <!-- <div style="margin-top:3px" class="img-wrapper" data-toggle="modal" data-target=".photo-2">
                    <img style="width:250px;height:150px;" :src="ourImage(gal.cover_photo)" alt="photo" />
                  </div>
                  <div style="padding-right: 17px;opacity: 1;margin-top: 60px;" class="modal fade photo-2" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                      <div class="modal-content" style="margin-top: 250px;padding: 20px;">
                        <img :src="ourImage(gal.cover_photo)" alt="photo" />
                      </div>
                    </div>
                  </div> -->
                </li>
              </ul>
            </div>


          </div>

          <div class="col-md-2 static">
            <h4 class="grey">Club Authority</h4>
            <div class="follow-user" v-for="author in getAuthors.authors" :key="author.id">
              <div style="margin-left: 0px !important" v-if="author.club_id == authorData.id">
                <img
                  v-for="author_avtr in author.author.avatar"
                  :key="author_avtr.id"
                  :src="ourImage(author_avtr.avatar)"
                  alt
                  class="profile-photo-sm pull-left"
                />
                <div>
                  <input hidden type="text" v-show="getAuthorId(author)">
                  <h5 style="margin-bottom: 3px;">
                    <router-link v-if="author.author.first_name"
                        :title="author.author.first_name"
                        :to="{name: 'timeline', params:{
                            name: author.author.first_name
                        },}" >{{ author.author.first_name }}</router-link>
                  </h5>
                  <p class="text-green">{{ author.designation }}</p>
                </div>
              </div>
            </div>

            <div id="chat-block">
              <div class="title">Running Event</div>

              <div class="feed-item" v-for="event in getClubEvents.events" :key="event.id">
                <div
                  class="live-activity"
                  style="display:inline-flex;"
                  v-if="event.club_id == $route.params.cl_id"
                 >
                  <p class="text-muted">
                    <a href="#" class="profile-link">{{ event.name }}</a> event going on
                  </p>
                  <div class="club-event-edit" v-if="clubAuthorId == getDatas.users.id && clubId == $route.params.cl_id || getAuthUserName == 'Master'">
                    <li class="dropdown" style="margin-top: -8px;list-style:none;">
                      <a
                        title="Log on-off"
                        href="#"
                        class="dropdown-toggle"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                        style="font-size: 30px;text-decoration: none;"
                      >...</a>
                      <ul class="dropdown-menu login" style="min-width: 90px;">
                        <li style="list-style:none;">
                          <a href="#" @click.prevent="edit_event(event)">
                            Edit
                            <i
                              style="margin-left: -15px;margin-right: 5px;"
                              class="icon ion-edit pull-left"
                            ></i>
                          </a>
                        </li>
                        <li style="list-style:none;">
                          <a href="#" @click.prevent="delete_event(event)">
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

import headercomponent from "./components/layouts/header.vue";
import footercomponent from "./components/layouts/footer.vue";
import addClubInfoComponent from "./add_club_info.vue";
import createEventComponent from "./create_event.vue";
export default {
  name: "club",
  components: {
    headercomponent,
    footercomponent,
    addClubInfoComponent,
    createEventComponent
  },
  data() {
    return {
      addClubInfoComponent: false,
      clubMembers: false,
      createEventComponent: false,
      showPost: false,
      discussion: true,
      btn: false,
      showPost: false,
      showSelectPhoto: false,
      showSelectVideo: false,
      showComment: false,
      replyInputShow: false,
      showComment: false,
      userTimeline: false,
      liked: false,
      participate:false,
      userSkill:false,
      album:false,
      clubPost: {
        club_id: "",
        text: "",
        image1: "",
        image2: "",
        image3: "",
        video: "",
        status: "0"
      },
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

      }),
      skill:{
        id:"",
        user_id:"",
        club_id:"",
        event_id:"",
        image1:"",
        image2:"",
        image3:"",
        video:"",
        status:"1",
        noti:""
      },
      pickEventId:"",
      postComment: {
        club_post_id: "",
        club_id: "",
        comment: []
      },
      clubPostCommentReply: {
        avatar_id: "",
        club_id: "",
        club_post_id: "",
        club_post_comment_id: "",
        reply: ""
      },
        like: {
          club_post_id: "",
          status: "1"
        },
      clubData: {},
      authorData: {},
      clubMember: {
          id:"",
        club_id: "",
        status:""
      },
      status: "",
      clId: [],
      countMember: [],
      userSkillData:{},
      join: true,
      showPending: false,
      showLink:false,
      joined: false,
      clubMemberId: "",
      editMode:false,
      clubAuthorId:"",
      clubId:"",
      getAuthUserId:"",
      getAuthUserName:""
    };
  },
  mounted() {
    this.getAuthUserId = `${authUser.id}`;
    this.getAuthUserName = `${authUser.first_name}`;

    // setInterval(()=>{
    //     this.getAuthUserId = `${authUser.id}`;
    // },500);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
    axios.get("/check").then(response => {
      this.clId = response.data.data;
    });
    axios.get("/countClubMember/" + this.$route.params.cl_id).then(response => {
      this.countMember = response.data.get;
    });
    this.$store.dispatch("userAction");
    this.$store.dispatch("getFriendRequestAction");
    this.$store.dispatch("getClubInfoAction");
    this.$store.dispatch("getAuthorAction");
    this.$store.dispatch("getClubMemberAction");
    this.$store.dispatch("getCheckAction");
    this.$store.dispatch("getClubPostAction");
    this.$store.dispatch("getClubPostCommentAction");
    this.$store.dispatch("getClubEventAction");
    this.$store.dispatch("getSkillAction");

    // this.$store.dispatch("getShowClubAction");
    // setInterval(()=>{
    //         this.$store.dispatch("getFriendRequestAction");
    // },3000)
    Echo.channel("Author").listen("AuthorEvent", e => {
      this.$store.dispatch("getAuthorAction");
    });
    Echo.channel("ClubMember").listen("ClubMemberEvent", e => {
      this.$store.dispatch("getClubMemberAction");
    });
    Echo.channel("ClubPostComment").listen("ClubPostCommentEvent", e => {
      this.$store.dispatch("getClubPostCommentAction");
    });
    Echo.channel("ApproveParticipate").listen("ParticipateRequestApprovalEvent", e => {
      this.$store.dispatch("getSkillAction");
    });
    Echo.channel("ClubPostCommentReply").listen(
      "ClubPostCommentReplyEvent",
      e => {
        this.$store.dispatch("getClubPostCommentAction");
      }
    );
    this.visibleLink();
  },
  created() {
    // this.autoload();
    this.getClubs.clubs.forEach(club => {
      if (this.$route.params.name == club.club_name) {
        // console.log(club);
        this.clubData = club;
        this.authorData = club;
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
    getClubs() {
      return this.$store.getters.getClub;
    },
    getAuthors() {
      return this.$store.getters.getAuthor;
    },
    getClubMembers() {
      return this.$store.getters.getClubMember;
    },
    getChecks() {
      return this.$store.getters.getCheck;
    },
    getClubPosts() {
      return this.$store.getters.getClubPost;
    },
    getClubPostComments() {
      return this.$store.getters.getClubPostComment;
    },
    getClubEvents() {
      return this.$store.getters.getClubEvent;
    },
    getSkills() {
      return this.$store.getters.getSkill;
    }
    // getShowClubs(){
    //     return this.$store.getters.getShowClub;
    // }
  },
  methods: {
    showAlbum(){
        this.album = true;
        this.discussion = false;

    },
    store_like(cl_post) {
      this.like.club_post_id = cl_post.id;
      axios
        .post("/store-club-post-like", {
          club_post_id: this.like.club_post_id,
          status: this.like.status
        })
        .then(response => {
          if ((response.data.status = "unlike")) {
            this.$store.dispatch("getClubPostAction");
            this.liked = true;
          } else if ((response.data.status = "like")) {
            this.$store.dispatch("getClubPostAction");
            this.liked = false;
          }
        });
    },
    visibleLink(){
        // console.log(this.clubAuthorId == this.getAuthUserId);
        // console.log(this.clubAuthorId);
        // console.log(this.getAuthUserId);
        if(this.clubAuthorId == this.getAuthUserId && this.clubId == this.$route.params.cl_id || this.getAuthUserName == 'Master'){
            this.showLink = true;
        }
    },
    getAuthorId(author){
        if(author.author_id == this.getAuthUserId){
            this.clubId = author.club_id;
            this.clubAuthorId = author.author_id;
            if(this.clubAuthorId == this.getAuthUserId && this.clubId == this.$route.params.cl_id || this.getAuthUserName == 'Master'){
                this.showLink = true;
            }
        }


    },
    showUserSkill(participate){
        if (this.userSkill == false) {

            this.userSkillData = participate;
            this.userSkill = true;
            this.participate = false;
            this.clubMembers = false;
            this.createEventComponent = false;
            this.addClubInfoComponent = false;
            this.discussion = false;
        } else if (this.userSkill == true) {
            this.discussion = true;
            this.userSkill = false;
        }
    },
    showSelectedUserSkill(selected){
        if (this.userSkill == false) {

            this.userSkillData = selected;
            this.userSkill = true;
            this.participate = false;
            this.clubMembers = false;
            this.createEventComponent = false;
            this.addClubInfoComponent = false;
            this.discussion = false;
        } else if (this.userSkill == true) {
            this.discussion = true;
            this.userSkill = false;
        }
    },

    showParticipants(){
        if (this.participate == false) {
        this.participate = true;
        this.userSkill = false;
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = false;
        } else if (this.participate == true) {
            this.discussion = true;
            this.participate = false;
        }
    },
    delete_event(event){
      this.pickEventId = event.id;
      axios.post('/delete-event/'+this.pickEventId)
      .then(()=>{
        this.$store.dispatch("getClubEventAction");
        Toast.fire({
            icon: "success",
            title: 'Event deleted successfull.'
        });
      })
    },
    updateEvent(){
        this.form.post('/update-event/'+this.pickEventId)
        .then(()=>{
          this.$store.dispatch("getClubEventAction");
          Toast.fire({
              icon: "success",
              title: 'Event update successfull.'
          });
        });
    },
    edit_event(event){
      if (this.createEventComponent == false) {
        this.editMode = true;
        this.form.fill(event);
        this.pickEventId = event.id;
        this.createEventComponent = true;
        this.clubMembers = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = false;
      } else if (this.createEventComponent == true) {
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = true;

      }
    },
    changePhoto(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = event => {
            this.form.photo = event.target.result;
        };
        reader.readAsDataURL(file);
    },
    updatePhoto(){
        if(this.form.photo == ''){
            let img = this.form.photo
            if (img) {
                return this.form.photo
            }else{
                return "/images/"+this.form.photo
            }
        }else{
            let img = this.form.photo
            if (img.length>100) {
                return this.form.photo
            }else{
                return "/images/"+this.form.photo
            }

        }
    },
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
          this.$store.dispatch("getClubEventAction");
          this.form = [],
          Toast.fire({
              icon: "success",
              title: 'Event created successfull.'
          });
      })
    },

    approveMember(participate) {
        this.skill.id        = participate.id;
        this.skill.user_id   = participate.user_id;
        this.skill.club_id   = participate.club_id;
        this.skill.event_id  = participate.event_id;
        this.skill.image1    = participate.image1;
        this.skill.image2    = participate.image2;
        this.skill.image3    = participate.image3;
        this.skill.video     = participate.video;
        this.skill.noti      = participate.club_event.name +" event participate request approved.";

        axios.post("/approve-user/" + this.skill.id,{
                user_id  : this.skill.user_id,
                club_id  : this.skill.club_id,
                event_id : this.skill.event_id,
                image1   : this.skill.image1,
                image2   : this.skill.image2,
                image3   : this.skill.image3,
                video    : this.skill.video,
                status   : this.skill.status,
                noti     : this.skill.noti
        }).then(() => {
            this.$store.dispatch("getSkillAction");
            Toast.fire({
            icon: "success",
            title: "Member Approved"
            });
        });
    },
    memberBlock(participate) {
      this.skill.id = participate.id;
      axios.post("/reject-user/" + this.skill.id).then(() => {
        this.$store.dispatch("getSkillAction");
        Toast.fire({
          icon: "success",
          title: "Member Rejected"
        });
      });
    },
    storeClubPostCommentReply() {
      axios
        .post("/store-club-post-comment-reply", {
          avatar_id: this.clubPostCommentReply.avatar_id,
          club_post_id: this.clubPostCommentReply.club_post_id,
          club_id: this.clubPostCommentReply.club_id,
          club_post_comment_id: this.clubPostCommentReply.club_post_comment_id,
          reply: this.clubPostCommentReply.reply
        })
        .then(response => {
          this.clubPostCommentReply.reply = "";
          this.replyInputShow = false;
          this.showComment = true;
        });
    },
    club_post_comment_reply(data, cl_post, postComment) {
      this.replyInputShow = true;
      this.clubPostCommentReply.avatar_id = data.id;
      this.clubPostCommentReply.club_post_id = cl_post.id;
      this.clubPostCommentReply.club_id = cl_post.club_id;
      this.clubPostCommentReply.club_post_comment_id = postComment.id;
    },
    storeComment(cl_post) {
      this.postComment.club_id = this.$route.params.cl_id;
      this.postComment.club_post_id = cl_post.id;
      axios.post("/store-comment",{
            comment:this.postComment.comment,
            club_id:this.postComment.club_id,
            club_post_id:this.postComment.club_post_id
      }).then(response => {
        this.postComment.comment = "";
        this.postComment.club_id = "";
        this.postComment.club_post_id = "";
        this.showComment = true;
      });
    },
    visibleComment() {
      if (this.showComment == false) {
        this.showComment = true;
      } else if (this.showComment == true) {
        this.showComment = false;
        this.postComment.comment = "";
        this.postComment.club_id = "";
        this.postComment.club_post_id = "";
        this.clubPostCommentReply.reply = "";
        this.clubPostCommentReply.club_post_id = "";
        this.clubPostCommentReply.club_post_comment_id = "";
      }
    },
    showBtn() {
      this.btn = true;
    },
    SelectPhoto() {
      this.showSelectPhoto = true;
    },
    SelectVideo() {
      this.showSelectVideo = true;
    },
    showContent() {
      this.showPost = true;
      this.clubPost.club_id = this.$route.params.cl_id;
    },
    hideContent() {
      this.showPost = false;
      this.btn = false;
      this.clubPost.club_id = "";
      this.clubPost.text = "";
      this.clubPost.image1 = "";
      this.clubPost.image2 = "";
      this.clubPost.image3 = "";
      this.clubPost.video = "";
    },

    ourImage(img) {
      return "/images/" + img;
    },
    changePhoto1(event) {
      let file = event.target.files[0];
      let reader = new FileReader();
      reader.onload = event => {
        this.clubPost.image1 = event.target.result;
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
        this.clubPost.image2 = event.target.result;
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
        this.clubPost.image3 = event.target.result;
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
      this.clubPost.video = e.target.files[0];
      if (this.btn == false) {
        this.btn = true;
      } else if (this.btn == true) {
        this.btn = true;
      } else {
        this.btn = false;
      }
    },
    uploadPost(e) {
      e.preventDefault();
      let currentObj = this;

      const config = {
        headers: { "content-type": "multipart/form-data" }
      };

      let formData = new FormData();
      formData.append("club_id", this.clubPost.club_id);
      formData.append("text", this.clubPost.text);
      formData.append("image1", this.clubPost.image1);
      formData.append("image2", this.clubPost.image2);
      formData.append("image3", this.clubPost.image3);
      formData.append("video", this.clubPost.video);
      formData.append("status", this.clubPost.status);

      axios
        .post("/club-post", formData, config)
        .then(function(response) {
        //   currentObj.success = response.data.success;
          this.clubPost.club_id = "";
          this.clubPost.text = "";
          this.clubPost.image1 = "";
          this.clubPost.image2 = "";
          this.clubPost.image3 = "";
          this.clubPost.video = "";
          this.$store.dispatch("getClubPostAction");
          Toast.fire({
            icon: "success",
            title: "Post Upload successfully"
          });

          this.showPost = false;
        })
        .catch(function(error) {
          currentObj.output = error;
        });
    },
    disableJoin(t) {
      if (
        t.status == 1 &&
        t.user_id == this.getDatas.users.id &&
        t.club_id == this.$route.params.cl_id
      ) {
        this.join = false;
        this.joined = true;
        this.showPending = false;
      }
    },
    visiblePending(t) {
      if (
        t.status == 0 &&
        t.user_id == this.getDatas.users.id &&
        t.club_id == this.$route.params.cl_id
      ) {
        this.showPending = true;
        this.join = false;
        this.joined = false;
      }
    },
    addMember(clubData) {
      this.clubMember.club_id = clubData.id;
      this.clubMember.status = 0;
      axios
        .post("/add-member", {
          club_id: this.clubMember.club_id,
          status: this.clubMember.status
        })
        .then((response) => {
            if(response.data.club_member.club_id == this.$route.params.cl_id &&
             this.getDatas.users.id == response.data.club_member.user_id &&
              response.data.club_member.status == 0){
                    this.showPending = true;
                    this.join = false;
                    this.joined = false;
            }
          Toast.fire({
            icon: "success",
            title: "Send joining request successfully"
          });
        });
    },
    memberReject(member){
        this.clubMember.id = member.id;
        axios.post("/member-reject/" + this.clubMember.id)
        .then((response) => {
            this.$store.dispatch("getClubMemberAction");
            Toast.fire({
                icon: "success",
                title: "Member Blocked"
            });
        });
        axios.get("/countClubMember/" + this.$route.params.cl_id).then(response => {
            this.countMember = response.data.get;
        });
    },
    showDiscussion() {
      if (this.discussion == false) {
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.userSkill = false;
        this.participate = false;
        this.discussion = true;
      } else if (this.discussion == true) {
        this.discussion = true;
      }
    },
    showUpdateClub() {
      if (this.addClubInfoComponent == false) {
        this.clubMembers = false;
        this.participate = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = true;
        this.discussion = false;
      } else if (this.addClubInfoComponent == true) {
        this.clubMembers = false;
        this.participate = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = true;
      }
    },
    showCreateEventComponent() {
      if (this.createEventComponent == false) {
        this.form.reset();
        this.createEventComponent = true;
        this.clubMembers = false;
        this.participate = false;
        this.addClubInfoComponent = false;
        this.discussion = false;
      } else if (this.createEventComponent == true) {
        this.clubMembers = false;
        this.participate = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.discussion = true;
      }
    },
    showClubMembers() {
      if (this.clubMembers == false) {
        this.clubMembers = true;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = false;
      } else if (this.clubMembers == true) {
        this.clubMembers = false;
        this.createEventComponent = false;
        this.addClubInfoComponent = false;
        this.participate = false;
        this.discussion = true;
      }
    },
    ourImage(img) {
      return "/images/" + img;
    }
  }
};
</script>

<style>
.follow-user div div {
  margin-left: 45px !important;
  position: relative !important;
}
.club-event-edit {
  margin-left: 6px;
  color: #ec6d6d;
}
</style>
