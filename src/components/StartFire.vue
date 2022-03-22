<template>
  <div>
    <div :class="{'show':!on, 'hidden':on}">
      <h3>Your fire is turned off!</h3>
      <div class="fire" @click="toggleFire"><img alt="fire" src="../assets/flame-off.svg"></div>
    </div>

    <div :class="{'show':on, 'hidden':!on}">
      <h3>Your fire is turned on</h3>
      <div class="fire" @click="toggleFire"><img alt="fire" src="../assets/flame-on.svg"></div>
      <router-link to="/choose-feeling">Choose other feeling</router-link>
    </div>
    
    <div class="bottom">
      <div>1 friend has lit their fire</div>
      <router-link to="/add-wood"><button>Add wood to a friend's fire</button></router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StartFire',
  data() {
    return {
      on: true,
      errors: [],
    }
  },

  methods: {
    toggleFire() {
      console.log("toggle fire")
      axios.post(`http://[WLED-IP]/json/state`, {
        body: { "on": !this.on },
      })
      .then(response => {
        this.on = response.on
      })
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

.show {
  display: block;
}

.hidden {
  display: none;
}

.fire {
  cursor:pointer;
}
</style>
