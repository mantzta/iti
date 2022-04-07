<template>

<side-menu :red="this.store.red" :green="this.store.green" :blue="this.store.blue"></side-menu>

<input v-model="store.ip" />

<div>
  <router-link :to="'/start-fire/' + this.store.red + '/' + this.store.green + '/' + this.store.blue">
    <button @click="triggerWood">Receive wood from Sarah</button>
  </router-link>
</div>
  
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import { store } from '../store'

export default {
  name: 'OurSettings',

  components: {
    SideMenu,
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    triggerWood() {
      console.log("trigger wood")
      this.store.triggerWood = true;
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  margin-top: 30px;
}
</style>
