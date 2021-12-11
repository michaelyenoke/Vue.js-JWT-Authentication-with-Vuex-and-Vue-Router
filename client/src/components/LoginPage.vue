<template>
  <v-card max-width="450" class="mx-auto">
    <!--上半部的bar-->
    <v-toolbar color="cyan" dark>
      <v-toolbar-title>Login</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!--  List 的部分 -->
    <v-list three-line>
      <template>
        <div class="container">
          <v-layout>
            <v-flex sm-12>
              <div title="Login">
                <form name="tab-tracker-form" autocomplete="off">
                  <v-text-field 
                    label="Email" 
                    v-model="email"
                  ></v-text-field>
                  <p>{{ email }}</p>
                  <br />
                  <v-text-field
                    label="Password"
                    type="password"
                    v-model="password"
                    autocomplete="new-password"
                  ></v-text-field>
                  <p>{{ password }}</p>
                </form>
                <br />
                <div class="danger-alert" v-html="error" />
                <br />
                <v-btn dark class="cyan" @click="login"> Login </v-btn>
              </div>
              <!--test-->
              <div>      
                        <p> token ! </p>
                        <p>{{ $store.state.token }}</p>
                        <p> user ! </p>
                        <p>{{ $store.state.user }}</p>
                        <p>{{ colorCode }}</p>
                
                    <div 
                        :style="{color: $store.state.colorCode}"
                        > 
                        <p> {{ $store.state.test }} </p>
                        <p> {{ $store.state.test }} </p> 
            
                    </div>  
                    <div>
                    <input 
                        v-model = "colorCode"
                        placeholder="Enter The Color Code" 
                        type="text">
                        <br/>  
                    </div>
              </div>
              <!--test-->
            </v-flex>
          </v-layout>
        </div>

        
      </template>
    </v-list>
  </v-card>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
import { mapState } from 'vuex'

export default {
  name:'LoginPage',
  data:() => ({
    email: "",
    password: "",
    error: null,
  }),
  
  
  // methods -> 函式
  methods: {  //computed get set? v-model? -> password & email
    async login() {
      try {
        var response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
          })
        // 查看 const response 改成 var
        console.log('check_zero')
        console.log(response.data)
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
   },
   // computed -> 用起來像函式,結果是一個值
   computed:{
    colorCode:{
      get(){
            return this.$store.state.colorCode
          },
      set(newValue){
            console.log(newValue)
            this.$store.dispatch('setColorCode', newValue)
          }
      }
    }
}
  
  




  
   
  // 這裡的 v-model 是 email 和 password 所以不會觸發 token ＆ user
  // button 也沒有連結
  // 要放在 login 裡面？
  // 放在 actions 中 用 axios
  

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.danger-alert {
  color: red;
}
</style>
