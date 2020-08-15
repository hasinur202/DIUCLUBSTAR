<template>
  <div class="register-box col-md-4 offset-4" style="margin-top:20px">
        <div class="register-logo">
            <h1><b>Admin</b></h1>
        </div>

        <div class="card">
            <div class="card-body register-card-body">
            <p class="login-box-msg">Register a new membership</p>

            <form enctype="multipart/form-data" @submit.prevent="add()" @keydown="form.onKeydown($event)">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="name" v-model="form.name" placeholder="Full name" :class="{ 'is-invalid': form.errors.has('name') }">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                    </div>
                    <has-error :form="form" field="name"></has-error>
                </div>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" name="id_number" v-model="form.id_number" placeholder="Id Number" :class="{ 'is-invalid': form.errors.has('id_number') }">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-id-card"></span>
                        </div>
                    </div>
                    <has-error :form="form" field="id_number"></has-error>
                </div>
                <div class="input-group mb-3">
                    <input type="email" class="form-control" name="email" v-model="form.email" placeholder="Email" :class="{ 'is-invalid': form.errors.has('email') }">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                    </div>
                    <has-error :form="form" field="email"></has-error>
                </div>
                <div class="input-group mb-3">
                    <input type="password" class="form-control" name="password" v-model="form.password" placeholder="Password" :class="{ 'is-invalid': form.errors.has('password') }">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                    <has-error :form="form" field="password"></has-error>
                </div>

                <div class="row">
                    <div class="col-12">
                        <div class="icheck-primary">
                            <input type="checkbox" id="agreeTerms" name="terms" value="agree">
                            <label for="agreeTerms">
                            I agree to the <a href="#">terms</a>
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary btn-block">Register</button>
                    </div>
                </div>
            </form>
            <router-link to="/admin" class="text-center">I already have a membership</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'register',
    data(){
        return{
            form: new Form({
                name     :'',
                id_number:'',
                email    :'',
                password :''
            })
        }
    },
    methods:{
        add(){
            this.form.post('/register')
            .then((response)=>{
                console.log(response.data);
                this.$router.push('/dashboard');
                this.form.reset();
                Toast.fire({
					icon: 'success',
					title: 'Registration Successfull.'
				})
            })
            .catch(()=>{
                Toast.fire({
					icon: 'warning',
					title: 'Please fillup all input field.'
				})
            })
        }
    }
}
</script>

<style>

</style>
