<template>
  <side-menu :red="this.redM || this.red" :green="this.greenM || this.green" :blue="this.blueM || this.blue"></side-menu>
  <div>
    <component :is="'style'">
    :root {
      --flame: rgb({{ redM || red }}, {{ greenM || green }}, {{ blueM || blue }}, 1);
      --flame-circle: rgb({{ red }}, {{ green }}, {{ blue }}, 0.2);
    }
    </component>
    <div :class="{'show':!store.on, 'hidden':store.on}">
      <h3>Your fire is turned off!</h3>

      <router-link to="/choose-feeling">
        <div class="fire" @click="toggleFire">
          <img alt="fire" src="../assets/flame-off.svg">
        </div>
      </router-link>
    </div>

    <div :class="{'show':store.on, 'hidden':!store.on}">
      <h3>You are feeling {{ store.feeling }}</h3>
      
      <div class="fire" @click="toggleFire">
        <svg width="349" height="306" viewBox="0 0 349 306" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="174" cy="153" r="125" fill="#FFEEEE"/>
          <path class="svg-flame" d="M180.289 277.407C190.07 276.179 199.505 273.005 208.039 268.074C216.573 263.142 224.033 256.552 229.979 248.693C242.974 231.773 244.17 209.097 237.946 189.279C235.083 179.58 230.336 170.539 223.978 162.673C219.072 156.958 207.658 152.541 207.009 144.091C207.009 144.091 204.718 114.323 168.956 83.4205C168.72 83.2182 168.435 83.0826 168.129 83.0276C167.823 82.9726 167.509 83.0002 167.217 83.1076C166.926 83.2151 166.668 83.3984 166.471 83.6387C166.274 83.879 166.145 84.1674 166.098 84.4743C164.07 97.7269 154.278 149.785 129.788 164.436C129.516 164.59 129.208 164.67 128.896 164.666C128.583 164.663 128.277 164.576 128.008 164.415C127.74 164.254 127.52 164.025 127.369 163.751C127.219 163.477 127.144 163.168 127.153 162.855C127.213 161.095 127.534 159.354 128.106 157.688C128.233 157.34 128.245 156.96 128.142 156.605C128.039 156.249 127.824 155.935 127.531 155.709C127.237 155.483 126.879 155.357 126.508 155.348C126.138 155.34 125.774 155.449 125.47 155.661C124.16 156.549 122.944 157.567 121.841 158.701C118.269 162.523 115.315 166.878 113.083 171.609C102.399 194.163 106.596 224.924 119.388 245.694C132.181 266.465 155.454 280.082 180.289 277.407Z" fill="#E8505B"/>
          <path d="M176.375 206.625H172.625V225.375H176.375V206.625ZM185.431 210.694L182.769 213.356C185.731 215.738 187.625 219.394 187.625 223.5C187.625 230.756 181.756 236.625 174.5 236.625C167.244 236.625 161.375 230.756 161.375 223.5C161.375 219.394 163.269 215.738 166.212 213.337L163.569 210.694C159.931 213.787 157.625 218.363 157.625 223.5C157.625 232.819 165.181 240.375 174.5 240.375C183.819 240.375 191.375 232.819 191.375 223.5C191.375 218.363 189.069 213.787 185.431 210.694Z" fill="white"/>
        </svg>
      </div>
      <router-link to="/choose-feeling">Choose other feeling</router-link>
    </div>
    
    <div class="bottom">
      <div>1 friend has lit their fire</div>
      <router-link to="/friends-fires"><button>Add wood to a friend's fire</button></router-link>
    </div>
  </div>

  <div class="success" :class="{'visible':showSuccess, 'hidden':!showSuccess}">
      <h3>Sarah added some wood to your fire for the next 10 minutes</h3>
      <button @click="hideSuccess">Great!</button>
  </div>
</template>

<script>
import axios from 'axios';
import SideMenu from '../components/SideMenu.vue'
import { store } from '../store'

export default {
  name: 'StartFire',
  components: {
    SideMenu,
  },
  props: {
    red: Number,
    green: Number,
    blue: Number,
  },

  data() {
    return {
      store,
      errors: [],
      redM: null,
      greenM: null,
      blueM: null,
      showSuccess: false,
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
    toggleFire() {
      console.log("toggle fire", this.red, this.green, this.blue)
      this.store.on = !this.store.on;
      axios.post(`http://[WLED-IP]/json/state`, {
        body: { "on": !this.store.on },
      })
      .then(response => {
        this.store.on = response.on
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    hideSuccess() {
      this.showSuccess = false
    },
  },

  async created() {
    try {
      const response = await axios.get(`http://[WLED-IP]/json/state`)
      this.store.on = response.on
    } catch (e) {
      this.errors.push(e)
    }

    setTimeout(() => {
      this.showSuccess = true;

      axios.post(`http://[WLED-IP]/json/state`, {
        body: this.postBody,
      })
      .then()
      .catch(e => {
        this.errors.push(e)
      })
    }, 20000)
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

svg > circle {
  fill: var(--flame-circle);
}

svg > .svg-flame {
  fill: var(--flame);
}
</style>
