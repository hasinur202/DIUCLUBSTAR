
export default {

    state: {
        allUser    : [],
        onlineUser : [],
        userMessage: [],
        userPost   : [],
        comments   : [],
        request    : [],
        club       : [],
        authorState: [],
        memberState: [],
        checkState : [],
        clubPostState:[],
        clubPostCommentState:[],
        clubEventState:[],
        skillState:[],
        notiState:[],
        settingState:[]

    },

    getters: {

        getSetting(state) {
            return state.settingState
        },
        getUser(state) {
            return state.allUser
        },
        getOnlineUser(state) {
            return state.onlineUser
        },
        getUserMessage(state) {
            return state.userMessage
        },
        getUserPost(state) {
            return state.userPost
        },
        getPostComments(state) {
            return state.comments
        },
        getFriendRequest(state) {
            return state.request
        },
        getClub(state) {
            return state.club
        },
        getAuthor(state) {
            return state.authorState
        },
        getClubMember(state) {
            return state.memberState
        },
        getCheck(state) {
            return state.checkState
        },
        getClubPost(state) {
            return state.clubPostState
        },
        getClubPostComment(state) {
            return state.clubPostCommentState
        },
        getClubEvent(state) {
            return state.clubEventState
        },
        getSkill(state) {
            return state.skillState
        },
        getNoti(state) {
            return state.notiState
        }
    },

    actions: {
        userAction(context) {
            axios.get('/home')
                .then((response) => {
                    // console.log(response.data)
                    context.commit('datas', response.data)
                })
        },
        getSettingAction(context) {
            axios.get('/get-setting')
                .then((response) => {
                    // console.log(response.data)
                    context.commit('mutSetting', response.data)
                })
        },
        onlineUserAction(context) {
            axios.get('/online')
                .then((response) => {
                    context.commit('users', response.data.users)
                })
        },
        userMessageAction(context, payload) {
            axios.get('/messanger/' + payload)
                .then((response) => {
                    // console.log(response.data.messages)
                    context.commit('userMessages', response.data)
                })
        },
        userPostAction(context) {
            axios.get('/posts')
                .then((response) => {
                    // console.log(response.data.post)
                    context.commit('userPosts', response.data)
                })
        },
        postCommentAction(context, payload) {
            axios.get('/comments')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('postComments', response.data)
                })
        },
        getFriendRequestAction(context) {
            axios.get('/get-request')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('friendRequests', response.data)
                })
        },
        getClubInfoAction(context) {
            axios.get('/get-club-info')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('clubs', response.data)
                })
        },
        getAuthorAction(context) {
            axios.get('/get-author')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutAuthor', response.data)
                })
        },
        getClubMemberAction(context) {
            axios.get('/get-member')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutMember', response.data)
                })
        },
        getCheckAction(context) {
            axios.get('/check')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutCheck', response.data.data)
                })
        },

        getClubPostAction(context) {
            axios.get('/get-club-post')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutClubPost', response.data)
                })
        },
        getClubPostCommentAction(context) {
            axios.get('/get-club-post-comment')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutClubPostComment', response.data)
                })
        },
        getClubEventAction(context) {
            axios.get('/get-event')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutClubEvent', response.data)
                })
        },
        getSkillAction(context) {
            axios.get('/get-skill')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutSkill', response.data)
                })
        },
        getNotiAction(context) {
            axios.get('/get-noti')
                .then((response) => {
                    // console.log(response.data.comments)
                    context.commit('mutNoti', response.data)
                })
        }
    },
    mutations: {
        datas(state, payload) {
            return state.allUser = payload
        },
        users(state, payload) {
            return state.onlineUser = payload
        },
        userMessages(state, payload) {
            return state.userMessage = payload
        },
        userPosts(state, payload) {
            return state.userPost = payload
        },
        postComments(state, payload) {
            return state.comments = payload
        },
        friendRequests(state, payload) {
            return state.request = payload
        },
        clubs(state, payload) {
            return state.club = payload
        },
        mutAuthor(state, payload) {
            return state.authorState = payload
        },
        mutMember(state, payload) {
            return state.memberState = payload
        },
        mutCheck(state, payload) {
            return state.checkState = payload
        },
        mutClubPost(state, payload) {
            return state.clubPostState = payload
        },
        mutClubPostComment(state, payload) {
            return state.clubPostCommentState = payload
        },
        mutClubEvent(state, payload) {
            return state.clubEventState = payload
        },
        mutSkill(state, payload) {
            return state.skillState = payload
        },
        mutNoti(state, payload) {
            return state.notiState = payload
        },
        mutSetting(state, payload) {
            return state.settingState = payload
        }

    }


}
