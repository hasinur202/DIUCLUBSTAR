//components import
const front_login = () => import(/* webpackChunkName: "front_login" */ './components/frontend/login')
const back_login = () => import(/* webpackChunkName: "back_login" */ './components/backend/login')
const back_register = () => import(/* webpackChunkName: "back_register" */ './components/backend/register')
const back_home = () => import(/* webpackChunkName: "back_home" */ './components/backend/home')
// const front_home = () => import(/* webpackChunkName: "front_home" */ './components/frontend/home.vue')
import front_home from './home'
const front_register = () => import(/* webpackChunkName: "front_register" */ './components/frontend/RegisterComponent')
const messanger = () => import(/* webpackChunkName: "messanger" */ './messanger')
const timeline = () => import(/* webpackChunkName: "timeline" */ './timeline')
const profileImage = () => import(/* webpackChunkName: "profileImage" */ './profileImage')
const basic_info = () => import(/* webpackChunkName: "basic_info" */ './basic_info')
const club = () => import(/* webpackChunkName: "club" */ './club')
const batch = () => import(/* webpackChunkName: "batch" */ './batch')

export default[
  {
      path:'/',
      component:front_login,
      name:'front_login',
      beforeEnter(to,from,next){
        if(!localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/home');
        }
    }
  },
  {
    path:'/signUp',
    component:front_register,
    name:'front_register'
  },
  {
    path:'/admin',
    component:back_login,
    name:'back_login',
  },
  {
    path:'/register',
    component:back_register,
    name: 'back_register'
  },

  {
    path:'/dashboard',
    component:back_home,
    name :'back_home',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/admin');
        }
    }
  },
  {
    path:'/home',
    component:front_home,
    name :'front_home',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  },
  {
    path:'/messanger',
    component:messanger,
    name :'messanger',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  },

{
    path:'/timeline/:name',
    component:timeline,
    name :'timeline',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }


},

  {
    path:'/avatar',
    component:profileImage,
    name :'profileImage',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  },
  {
    path:'/basic-info',
    component:basic_info,
    name :'basic_info',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  },
  {
    path:'/club/:cl_id/:name',
    component:club,
    name :'club',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  },
  {
    path:'/club/:name',
    component:club,
    name :'club',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  },
  {
    path:'/batch/:dept-:name',
    component:batch,
    name :'batch',
    beforeEnter(to,from,next){
        if(localStorage.getItem('diu-pro-book-sss'))
        {
            next();
        }else{
            next('/');
        }
    }
  }

]
