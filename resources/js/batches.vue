<template>
    <div>
        <div v-for="dept in getDatas.dept" :key="dept.id">
            <hr>
            <h4 v-if="dept.department" style="color:#000;">Department- <strong style="text-transform:uppercase;">{{dept.department}}</strong>
            </h4>
            <hr>
            <div class="row" v-if="dept.department"
             style="
                margin-left: 0px;
                margin-right: 0px;"
             >
                <div v-for="user in getDatas.allUser" :key="user.id">
                    <div
                        style="background-color: rgb(103, 98, 98);
                        padding: 0px 15px;
                        border-bottom: 1px solid #fff;
                        margin-bottom: 5px;"
                        v-if="user.department == dept.department">
                        <h4 style="color:#000;display: inline-block;">
                            <router-link
                                style="color:#fff;float: left;"
                                :to="{name: 'batch', params:{
                                    name: user.batch,
                                    dept:user.department
                                },}"
                                >
                                {{user.batch}}

                            </router-link>
                            <span style="float: left;
                                margin-top: 20px;
                                margin-left: -40px;
                                font-size: 12px;
                                color: #fff;">Dept: {{ user.department }}</span>
                        </h4>
                        <router-link :to="{name: 'batch', params:{
                                    name: user.batch,
                                    dept:user.department
                                },}" style="margin-top: 12px;color:#fff" type="button" class="btn btn-primary pull-right">Details</router-link>
                    </div>
                </div>


            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.$store.dispatch("userAction");
    },
    computed: {
        getDatas() {
            return this.$store.getters.getUser;
        }
    },
    methods:{

    }
}
</script>

<style>

</style>
