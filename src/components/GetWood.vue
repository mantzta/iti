<template>

<div class="success" :class="{'visible':store.triggerWood, 'hidden':!store.triggerWood}">
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
    },
  },

  async created() {
    if (store.triggerWood) {
      this.sendWood()
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
