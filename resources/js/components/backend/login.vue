<template>
    <div class="login-box col-md-4 offset-4" style="margin-top:60px">
        <div class="login-logo">

            <h1><b>Admin</b></h1>
        </div>
        <!-- /.login-logo -->
        <div class="card">
            <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>

            <form @submit.prevent="login()" @keydown="form.onKeydown($event)">

                <div class="input-group mb-3">
                    <input type="email" name="email" v-model="form.email" class="form-control" placeholder="Email" :class="{ 'is-invalid': form.errors.has('email') }">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    <has-error :form="form" field="email"></has-error>
                </div>
                <div class="input-group mb-3">
                    <input type="password" name="password" v-model="form.password" class="form-control" placeholder="Password" :class="{ 'is-invalid': form.errors.has('password') }">
                    <div class="input-group-append">
                        <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    <has-error :form="form" field="password"></has-error>
                </div>
                <div class="row">
                    <div class="col-8">
                        <div class="icheck-primary">
                        <input type="checkbox" id="remember" name="remember_me" v-model="form.remember_me">
                        <label for="remember">
                            Remember Me
                        </label>
                        </div>
                    </div>
                    <!-- /.col -->
                    <div class="col-4">
                        <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                    </div>
                    <!-- /.col -->
                </div>
            </form>

            <div class="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" class="btn btn-block btn-primary">
                <i class="fab fa-facebook mr-2"></i> Sign in using Facebook
                </a>
                <a href="#" class="btn btn-block btn-danger login-danger-btn">
                <i class="fab fa-google-plus mr-2"></i> Sign in using Google+
                </a>
            </div>

            <p class="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p class="mb-0">
                <router-link to="/register" class="text-center">Register a new membership</router-link>
            </p>
            </div>
        </div>

    </div>

</template>

<script>
    import jwt from 'jsonwebtoken';
    export default {
        name:'login',
        data(){
            return{
                form : new Form({
                    email   :'',
                    password:'',
                    remember_me:false

                })

            }
        },
        methods:{
            login(form){
                this.form.post('/admin')
                .then((response)=>{
                    var token = jwt.sign({ form: form }, '@diu#pro$book%day&40!sss&2020@Final#PrOjeCt');
                    localStorage.setItem('diu-pro-book-sss',token);
                    this.$router.push('/dashboard');
                    Toast.fire({
					  icon: 'success',
					  title: 'Login Successfull.'
					})
                })
                .catch(()=>{
                    Toast.fire({
					  icon: 'warning',
					  title: 'Wrong Cridentials.'
					})
                })
            }

        }

    }
</script>

<style>
    .login-danger-btn{
        border-radius: 50px;
    }
</style>
