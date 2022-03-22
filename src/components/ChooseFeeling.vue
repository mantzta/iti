<template>
  <div>
    <h3>How do you feel?</h3>
    <div class="fire"><img alt="fire" src="../assets/flame.svg"></div>
    
    <div class="bottom">
      <div class="row">
        <div class="feeling" @click="changeFire">
          <img alt="happy" src="../assets/happy.svg">
          <div>Happy</div>
        </div>
        <div class="feeling">
          <img alt="sad" src="../assets/sad.svg">
          <div>Sad</div>
        </div>
      </div>

      <div class="row">
        <div class="feeling">
          <img alt="surprised" src="../assets/surprised.svg">
          <div>Surprised</div>
        </div>
        <div class="feeling">
          <img alt="annoyed" src="../assets/annoyed.svg">
          <div>Annoyed</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChooseFeeling',
  data() {
    return {
      on: false,
      errors: [],
      postBody: {
        v: true,
        seg: [
          {
            "start": 0,
            "stop": 5,
            "col": [
              [255, 160, 0, 0],
              [0, 0, 0, 0],
              [0, 0, 0, 0]
            ],
          },
        ],
      }
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
  margin-top: 100px;
}

.row {
  display: inline-block;
}

.feeling {
  margin: 20px;
  cursor:pointer;
}

</style>
