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
      show: false,
    }
  },

  methods: {
    sendWood() {
      console.log("sends wood now to fire")
      const postBody = {
        v: true,
        seg: [
          {
              start: 0,
              stop: 15,
              bri: 255,
              fx: 102,
              col: [
                [this.store.red, this.store.green, this.store.blue, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ],
            },
            {
              start: 16,
              stop: 30,
              bri: 255,
              fx: 102,
              col: [
                [255, 255, 255, 1],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ],
            },
          ],
      }

      axios.post("http://" + store.ip + "/json/state", postBody)
      .then(() => {
        setTimeout(() => {
          const postBody = {
            v: true,
            seg: [
              {
                start: 0,
                stop: 15,
                bri: 50,
                fx: 102,
                col: [
                  [this.store.red, this.store.green, this.store.blue, 1],
                  [0, 0, 0, 0],
                  [0, 0, 0, 0]
                ],
              },
              {
              start: 16,
              stop: 30,
              bri: 50,
              fx: 102,
              col: [
                [0, 0, 0, 0],
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
      this.show = false
    },
  },

  async created() {
    if (store.triggerWood) {
      setTimeout(() => {
        this.show = true
        this.store.triggerWood = false

        this.sendWood()
      }, 1000)
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
