<template>
  <div class="sign-in">
    <h1>Sign In</h1>
    <div>
      <input type="text" placeholder="Username" v-model="username" @input="checkInputs" />
      <input type="password" placeholder="Password" v-model="password" @input="checkInputs" />
    </div>
    <router-link :to="'/start-fire/' + this.store.red + '/' + this.store.green + '/' + this.store.blue"><button class="sign-button" :disabled="!enableButton">Sign me in!</button></router-link>
    <div class="forgot"><a href="#">Forgot password?</a></div>
  </div>
</template>

<script>
import { store } from '../store'

export default {
  name: 'SignIn',
  data() {
    return {
      username: "",
      password: "",
      enableButton: false,
      store,
    }
  },

  methods: {
    checkInputs() {
      if (this.username != null && this.username != "" && this.password != null && this.password != "") {
        this.enableButton = true;
      } else {
        this.enableButton = false;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 30vh;
  margin-bottom: 15vh;
  margin-left: 12.5vw;
  color:#FFFBFB;
  font-weight: 800;
  text-align: left;
}

.sign-in {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #E8505B;
  z-index: 1000;
}

input {
  border: #FFFBFB 1px solid;
  border-radius: 8px;
  height: 50px;
  width: 75vw;
  background-color: #E8505B;
  padding-left: 10px;
  color:#FFFBFB;
}

input:last-child {
  margin-top: 20px;
  margin-bottom: 10vh;
}

input::placeholder {
  color:#F9A8AE;
}

.sign-button {
  margin-top: 20px;
  background-color: #FFFBFB;
  border-radius: 10px;
  color: #E8505B;
  width: 76vw;
  font-weight: 800;
}

.sign-button:hover {
  background-color: #F9A8AE;
}

.sign-button:disabled {
  background-color: #F9A8AE;
}

.forgot {
  margin-top: 10px;
}

.forgot a {
  color: #FFFBFB;
}

</style>
