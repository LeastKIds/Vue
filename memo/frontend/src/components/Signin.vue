<template>
  <div
  class="mt-5">
    <center>

    <img
        :src="require('@/assets/images/LoGo.png')"
        class="mb-5"/>

    <v-col
    cols="12"
    sm="6">
    <v-text-field
        label="아이디"
        :rules="rules"
        hide-details="auto"
        v-model="email"
    ></v-text-field>
      <v-text-field
          v-model="password"
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
          color="primary"
          @click="onSubmit(email,password)"
          style="display: inline"
      >
        로그인
      </v-btn>

      <v-btn
          class="ma-2"
          color="warning"
          style="display: inline"
          @click="register"
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
export default {
  name: "Signin",
  data () {
    return {
      email : '',
      password : '',
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
    onSubmit(email, password) {
      this.$store.dispatch('signin', {email, password})
        .then( () => {
          this.$router.push('/');
        }). catch( () => {
          console.log('err')
          this.message='Signin Failed';
      });
    },
    register() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

.MeMO {
  text-align: center;
}

</style>