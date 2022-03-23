<template>

<div class="success" :class="{'visible':show, 'hidden':!show}">
  <h3>Sarah added some wood to your fire for the next 10 minutes</h3>
  <button @click="hideSuccess">Great!</button>
</div>
  
</template>

<script>
import axios from 'axios';
import { store } from '../store'

export default {
  name: 'GetWood',

  data() {
    return {
      errors: [],
      store,
      postBody: {
        v: true,
        seg: [
            {
              "start": 0,
              "stop": 5,
              "bri": 255,
            },
          ],
      },
      show: false,
    }
  },

  methods: {
    sendWood() {
      console.log("sends wood now to fire")
      axios.post("http://" + store.ip + "/json/state", {
        body: this.postBody,
      })
      .then()
      .catch(e => {
        this.errors.push(e)
      })
    },
    hideSuccess() {
      this.store.triggerWood = false
      this.show = false
    },
  },

  async created() {
    if (store.triggerWood) {
      setTimeout(() => {
        this.sendWood()

        this.show = true
      }, 10000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 30px;
}
</style>
