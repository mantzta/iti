<template>
  <side-menu :red="this.store.red" :green="this.store.green" :blue="this.store.blue"></side-menu>
  <div>
    <h3>How do you feel?</h3>
    <div class="fire"><img alt="fire" src="../assets/flame.svg"></div>
    
    <div class="bottom">
      <div class="row">
        <router-link :to="'/start-fire/' + this.store.happy.red + '/' + this.store.happy.green + '/' + this.store.happy.blue" @click="changeFeeling('happy')">
          <div class="feeling" @click="changeFire">
            
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30.5" cy="30.5" r="27.5" fill="#FFEEEE" :stroke="'rgb(' + this.store.happy.red + ',' + this.store.happy.green + ',' + this.store.happy.blue + ')'" stroke-opacity="0.2" stroke-width="5"/>
              <circle cx="30.5" cy="31" r="25" fill="#FFEEEE" :stroke="'rgb(' + this.store.happy.red + ',' + this.store.happy.green + ',' + this.store.happy.blue + ')'" stroke-width="2"/>
              <circle cx="24" cy="25" r="2" fill="black"/>
              <circle cx="35" cy="25" r="2" fill="black"/>
              <path d="M21 33C23.0007 41.0414 33.8297 41.3628 39 33" stroke="black"/>
            </svg>

            <div>Happy</div>
          </div>
        </router-link>

        <router-link :to="'/start-fire/' + this.store.sad.red + '/' + this.store.sad.green + '/' + this.store.sad.blue" @click="changeFeeling('sad')">
          <div class="feeling">
            
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30.5" cy="30.5" r="27.5" fill="#FFEEEE" :stroke="'rgb(' + this.store.sad.red + ',' + this.store.sad.green + ',' + this.store.sad.blue + ')'" stroke-opacity="0.2" stroke-width="5"/>
              <circle cx="30.5" cy="31" r="25" fill="#FFEEEE" :stroke="'rgb(' + this.store.sad.red + ',' + this.store.sad.green + ',' + this.store.sad.blue + ')'" stroke-width="2"/>
              <circle cx="24" cy="25" r="2" fill="black"/>
              <circle cx="35" cy="25" r="2" fill="black"/>
              <path d="M21 39.1521C23.0007 31.1107 33.8297 30.7893 39 39.1521" stroke="black"/>
            </svg>

            <div>Sad</div>
          </div>
        </router-link>
      </div>

      <div class="row">
        <router-link :to="'/start-fire/' + this.store.surprised.red + '/' + this.store.surprised.green + '/' + this.store.surprised.blue" @click="changeFeeling('surprised')">
          <div class="feeling">
            
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30.5" cy="30.5" r="27.5" fill="#FFEEEE" :stroke="'rgb(' + this.store.surprised.red + ',' + this.store.surprised.green + ',' + this.store.surprised.blue + ')'" stroke-opacity="0.2" stroke-width="5"/>
              <circle cx="30.5" cy="31" r="25" fill="#FFEEEE" :stroke="'rgb(' + this.store.surprised.red + ',' + this.store.surprised.green + ',' + this.store.surprised.blue + ')'" stroke-width="2"/>
              <circle cx="24" cy="25" r="2" fill="black"/>
              <circle cx="35" cy="25" r="2" fill="black"/>
              <path d="M37.5 40C37.5 42.9392 34.4759 45.5 30.5 45.5C26.5241 45.5 23.5 42.9392 23.5 40C23.5 37.0608 26.5241 34.5 30.5 34.5C34.4759 34.5 37.5 37.0608 37.5 40Z" stroke="black"/>
            </svg>

            <div>Surprised</div>
          </div>
        </router-link>

        <router-link :to="'/start-fire/' + this.store.annoyed.red + '/' + this.store.annoyed.green + '/' + this.store.annoyed.blue" @click="changeFeeling('annoyed')">
          <div class="feeling">
            
            <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30.5" cy="30.5" r="27.5" fill="#FFEEEE" :stroke="'rgb(' + this.store.annoyed.red + ',' + this.store.annoyed.green + ',' + this.store.annoyed.blue + ')'" stroke-opacity="0.2" stroke-width="5"/>
              <circle cx="30.5" cy="31" r="25" fill="#FFEEEE" :stroke="'rgb(' + this.store.annoyed.red + ',' + this.store.annoyed.green + ',' + this.store.annoyed.blue + ')'" stroke-width="2"/>
              <circle cx="24" cy="25" r="2" fill="black"/>
              <circle cx="35" cy="25" r="2" fill="black"/>
              <path d="M23 37H37" stroke="black"/>
            </svg>

            <div>Annoyed</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import SideMenu from '../components/SideMenu.vue'
import { store } from '../store'

export default {
  name: 'ChooseFeeling',
  components: {
    SideMenu,
  },
  data() {
    return {
      on: false,
      errors: [],
      store,
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
    changeFeeling(feeling) {
      this.store.feeling = feeling
      
      if (feeling == "happy") {
        this.store.red = this.store.happy.red
        this.store.green = this.store.happy.green
        this.store.blue = this.store.happy.blue
      }

      if (feeling == "sad") {
        this.store.red = this.store.sad.red
        this.store.green = this.store.sad.green
        this.store.blue = this.store.sad.blue
      }

      if (feeling == "surprised") {
        this.store.red = this.store.surprised.red
        this.store.green = this.store.surprised.green
        this.store.blue = this.store.surprised.blue
      }

      if (feeling == "annoyed") {
        this.store.red = this.store.annoyed.red
        this.store.green = this.store.annoyed.green
        this.store.blue = this.store.annoyed.blue
      }

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
