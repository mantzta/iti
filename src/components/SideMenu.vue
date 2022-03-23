<template>
  <div :class="{ 'menu-open': showMenu, 'menu-closed': !showMenu }" class="side-menu">
    <div class="margin">
      <i :class="{ 'closebtn-visible': showMenu, 'closebtn-hidden': !showMenu }" class="material-icons menu closebtn" @click="closeMenu">close</i>

      <ul class="menu-content">
          <li><router-link :to="'/start-fire/' + this.red + '/' + this.green + '/' + this.blue" @click="closeMenu">My fire</router-link></li>
          <li><router-link to="/friends-fires" @click="closeMenu">Friends' fires</router-link></li>
          <li :class="{'hide': !store.on}"><router-link to="/fire-settings" @click="closeMenu">Fire settings</router-link></li>
          <li><router-link to="/settings" @click="closeMenu">Settings</router-link></li>
          <li><router-link to="/" @click="closeMenu">Logout</router-link></li>
      </ul>
    </div>
  </div>

  <i class="material-icons menu open" @click="openMenu">menu</i>
</template>

<script>
import { store } from '../store'

export default {
  name: 'SideMenu',

  props: {
    red: Number,
    green: Number,
    blue: Number,
  },

  data() {
    return {
      showMenu: false,
      store,
    };
  },

  methods: {
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-menu {
  text-align: left;
}

i.open {
  position: fixed;
  top: 0;
  left: 0;
  margin: 20px;
}

.hide {
  display: none;
}
</style>
