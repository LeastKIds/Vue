<template>
<div>
  <center>

    <img
        :src="require('@/assets/images/register.png')"
        width="100px"
        class="mb-5 mt-15"/>
    <v-col
        cols="12"
        sm="6">
      <v-text-field
          label="아이디"
          :rules="rules"
          hide-details="auto"
          v-model="r_email"
      ></v-text-field>
      <v-text-field
          label="이름"
          :rules="rules"
          hide-details="auto"
          v-model="r_name"
      ></v-text-field>
      <v-text-field
          v-model="r_pwd"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="rules"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="비밀번호"
          hint="정확하게 입력"
          counter
          @click:append="show1 = !show1"
      ></v-text-field>


      <v-btn
          class="ma-2"
          color="warning"
          style="display: inline"
          @click="registerButton"
      >
        회원가입
      </v-btn>

      <v-alert
          type="warning"
          dismissible
          v-if="message"
          class="mt-10"
      >{{message}}</v-alert>

    </v-col>


  </center>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Signup",
  data () {
    return {
      r_email : '',
      r_name : '',
      r_pwd : '',
      message : '',

      rules: [
        value => !!value || 'Required.',
      ],
      show1: false,
      show2: true,
      show3: false,
      show4: false,

    }
  },
  methods: {
    registerButton() {
      // const data = new FormData();
      // data.append('userid',this.r_email);
      // data.append('name',this.r_name);
      // data.append('password',this.r_pwd);
      const data = {
        'userid' : this.r_email,
        'name' : this.r_name,
        'password' : this.r_pwd
      };


      axios.post('/api/users', data)
          .then(response => {
            console.log(response.status);
            alert('register successful');
            this.$router.push('/');

          })
          .catch(error => {
            console.log(error);
            console.log('register failed');
            this.message='register failed';
          });

    }
  }
}
</script>

<style scoped>

</style>