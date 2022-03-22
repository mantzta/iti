<template>
  <div>
    <h3>Your fire settings</h3>
    <div
      class="fire"
    ><img alt="fire" src="../assets/flame.svg"></div>
    
    <div class="bottom">
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'FireSettings',
  data() {
    return {
      on: false,
      errors: [],
      postBody: {
        v: true,
        "col": [
          [255, 160, 0, 0],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ],
      },
    }
  },

  methods: {
    changeFire() {
      console.log("change fire")
      axios.post(`http://[WLED-IP]/json/state`, {
        body: this.postBody,
      })
      .then()
      .catch(e => {
        this.errors.push(e)
      })
    },
  },

  async created() {
    try {
      const response = await axios.get(`http://[WLED-IP]/json/state`)
      this.on = response.on
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0;
}

.bottom{
  margin-top: 20px;
}

</style>
