<template>
<side-menu :red="store.red" :green="store.green" :blue="store.blue"></side-menu>
  <div>
    <component :is="'style'">
    :root {
      --flame: rgb({{ red.value || store.red }}, {{ green.value || store.green }}, {{ blue.value || store.blue }});
      --flame-circle: rgb({{ red.value || store.red }}, {{ green.value || store.green }}, {{ blue.value || store.blue }}, 0.2);
    }
    </component>
    <h3>Your fire settings for feeling {{ store.feeling }}</h3>
    <div
      class="fire"
    >
    <svg width="285" height="251" viewBox="0 0 285 251" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="142" cy="125" r="125" fill="#FFEEEE"/>
      <path d="M146.849 249.829C154.836 248.826 162.542 246.233 169.511 242.204C176.48 238.175 182.571 232.791 187.427 226.37C198.039 212.546 199.015 194.021 193.933 177.829C191.595 169.905 187.719 162.519 182.526 156.092C178.52 151.423 169.199 147.814 168.669 140.911C168.669 140.911 166.798 116.591 137.595 91.3436C137.402 91.1783 137.169 91.0675 136.919 91.0225C136.67 90.9776 136.412 91.0002 136.174 91.0879C135.936 91.1757 135.726 91.3255 135.565 91.5218C135.405 91.7181 135.299 91.9538 135.26 92.2045C133.605 103.032 125.608 145.563 105.609 157.532C105.387 157.659 105.136 157.724 104.88 157.721C104.625 157.718 104.375 157.647 104.156 157.516C103.937 157.384 103.757 157.197 103.634 156.973C103.511 156.749 103.45 156.496 103.457 156.241C103.506 154.803 103.769 153.381 104.235 152.019C104.339 151.735 104.349 151.425 104.265 151.134C104.18 150.844 104.006 150.588 103.766 150.403C103.526 150.219 103.233 150.115 102.931 150.108C102.628 150.101 102.331 150.191 102.083 150.364C101.013 151.089 100.02 151.921 99.1196 152.847C96.2028 155.97 93.7899 159.528 91.9676 163.393C83.2429 181.819 86.6699 206.951 97.1164 223.92C107.563 240.889 126.569 252.015 146.849 249.829Z" 
      fill="#E8505B"/>
    </svg>
    </div>
    
    <div class="bottom">
      <div class="flame-slider">
        <Slider v-model="store.red" v-bind="red" @change="changeColor('red', $event)"  class="slider slider-red" />
        <div class="color-text">red</div>
      </div>

      <div class="flame-slider">
        <Slider v-model="store.green" v-bind="green" @change="changeColor('green', $event)" class="slider" />
        <div class="color-text green">green</div>
      </div>

      <div class="flame-slider">
        <Slider v-model="store.blue" v-bind="blue" @change="changeColor('blue', $event)" class="slider slider-blue" />
        <div class="color-text blue">blue</div>
      </div>
    </div>

    <!--<router-link :to="'/start-fire/' + store.red + '/' + store.green + '/' + store.blue">
        <button @click="changeFire">Change color</button>
      </router-link>-->
  </div>
</template>

<script>
import axios from 'axios';
import Slider from '@vueform/slider'
import SideMenu from '../components/SideMenu.vue'
import { store } from '../store'

export default {
  name: 'FireSettings',
  components: {
    Slider,
    SideMenu,
  },
  data() {
    return {
      red: {
        value: null,
        orientation: 'vertical',
        direction: 'rtl',
        max: 255,
      },
      green: {
        value: null,
        orientation: 'vertical',
        direction: 'rtl',
        max: 255,
      },
      blue: {
        value: null,
        orientation: 'vertical',
        direction: 'rtl',
        max: 255,
      },
      on: false,
      errors: [],
      store,
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
      this.store.red = this.red.value || this.store.red
      this.store.green = this.green.value || this.store.green
      this.store.blue = this.blue.value || this.store.blue

      this.postBody.col = [
        [this.store.red, this.store.green, this.store.blue, 1],
        [this.store.red, this.store.green, this.store.blue, 1],
        [this.store.red, this.store.green, this.store.blue, 1],
      ]

      if (this.store.feeling == "happy") {
        this.store.happy.red = this.store.red
        this.store.happy.green = this.store.green
        this.store.happy.blue = this.store.blue
      }

      if (this.store.feeling == "sad") {
        this.store.sad.red = this.store.red
        this.store.sad.green = this.store.green
        this.store.sad.blue = this.store.blue
      }

      if (this.store.feeling == "surprised") {
        this.store.surprised.red = this.store.red
        this.store.surprised.green = this.store.green
        this.store.surprised.blue = this.store.blue
      }

      if (this.store.feeling == "annoyed") {
        this.store.annoyed.red = this.store.red
        this.store.annoyed.green = this.store.green
        this.store.annoyed.blue = this.store.blue
      }

      axios.post("http://" + store.ip + "/json/state", {
        body: this.postBody,
      })
      .then()
      .catch(e => {
        this.errors.push(e)
      })
    },
    changeColor(color, event) {

      if (color == "red") {
        this.red.value = event
      }

      if (color == "green") {
        this.green.value = event
      }

      if (color == "blue") {
        this.blue.value = event
      }

      console.log("change fire",color,event)
      this.changeFire()
    },
  },

  async created() {
    try {
      const response = await axios.get("http://" + store.ip + "/json/state")
      this.on = response.on
    } catch (e) {
      this.errors.push(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
h3 {
  margin: 40px 0;
}

.bottom{
  margin-top: 20px;
}

.flame-slider {
  margin-right: 100px;
  display: inline-block;
}

.color-text {
  margin-top: 20px;
  margin-left: -10px;
}

.color-text.green {
  color: green;
}

.color-text.blue {
  color: #3B82F6;
}

.bottom .flame-slider:last-of-type {
  margin-right: 0;
}

.slider {
  height: 200px;
}

.slider-red {
  --slider-connect-bg: #EF4444;
  --slider-tooltip-bg: #EF4444;
  --slider-handle-ring-color: #EF444430;
}

.slider-blue {
  --slider-connect-bg: #3B82F6;
  --slider-tooltip-bg: #3B82F6;
  --slider-handle-ring-color: #3B82F630;
}

svg > circle {
  fill: var(--flame-circle);
}

svg > path {
  fill: var(--flame);
}

button {
  margin-top: 20px;
  width: 50vw;
}

</style>
