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
              start: 0,
              stop: 30,
              bri: 255,
              col: [
              [232, 80, 91, 1],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ],
            },
          ],
      },
      show: false,
    }
  },

  methods: {
    sendWood() {
      console.log("sends wood now to fire")
      axios.post("http://" + store.ip + "/json/state", this.postBody)
      .then(() => {
        setTimeout(() => {
          const postBody = {
            v: true,
            seg: [
              {
                start: 0,
                stop: 15,
                bri: 50,
                col: [
                  [this.store.red, this.store.green, this.store.blue, 1],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0]
                ],
              },
        ],
          }
          axios.post("http://" + store.ip + "/json/state", postBody)
        }, 60000)
      })
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
        this.show = true

        this.sendWood()
      }, 15000)
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
