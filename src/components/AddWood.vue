<template>
  <side-menu :red="this.store.red" :green="this.store.green" :blue="this.store.blue"></side-menu>
  <div>
    <h3>Add wood to the fire</h3>
    <div
      class="fire"
      :class="{'visible':!logInFire, 'hidden':logInFire}"
      @drop="onDrop()"
      @dragover.prevent
      @dragenter.prevent
    ><img alt="fire" src="../assets/friend-flame-blue.svg"></div>

    <div
      class="fire"
      :class="{'visible':logInFire, 'hidden':!logInFire}"
    ><img alt="fire" src="../assets/log-in-fire.svg">
    </div>

    <div class="drag-here" :class="{'visible':!logInFire, 'hidden':logInFire}">
      <img alt="drag here" src="../assets/drag-here.svg">
    </div>
    
    <div class="bottom" :class="{'visible':!logInFire, 'hidden':logInFire}">
      <img 
        alt="log"
        class="log"
        src="../assets/log.svg"
        draggable
        @dragstart="startDrag($event)"
      >
    </div>

    <div class="success" :class="{'visible':showSuccess, 'hidden':!showSuccess}">
      <h3>You successfully added wood to Sarahs fire for 10 minutes</h3>
      <button @click="hideSuccess">Great!</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SideMenu from '../components/SideMenu.vue'
import { store } from '../store'

export default {
  name: 'AddWood',
  components: {
    SideMenu,
  },
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
              "bri": 255,
            },
          ],
      },
      logInFire: false,
      showSuccess: false,
      store,
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
    startDrag(evt) {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
    },
    onDrop() {
      console.log("added log")
      this.logInFire = true

      setTimeout(() => {
        this.showSuccess = true
      }, 2000)
    },
    hideSuccess() {
      this.showSuccess = false
    }
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

.log {
  padding: 20px;
}

.drag-here {
  margin-top: 40px;
}

</style>
