<template>
  <div :class="{ 'menu-open': showMenu, 'menu-closed': !showMenu }">
    <div class="margin">
      <i :class="{ 'closebtn-visible': showMenu, 'closebtn-hidden': !showMenu }" class="material-icons menu closebtn" @click="closeMenu">close</i>

      <ul class="menu-content">
          <li><router-link to="/" @click="closeMenu">My fire</router-link></li>
          <li><router-link to="/friends" @click="closeMenu">Friends' fires</router-link></li>
          <li><router-link to="/fire-settings" @click="closeMenu">Fire settings</router-link></li>
      </ul>
    </div>
  </div>
  <i class="material-icons menu" @click="openMenu">menu</i>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      showMenu: false
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

<style>
#app {
  padding: 20px;
}

.content {
  text-align: center;
}

.menu {
  cursor: pointer;
}

.menu-open {
  top: 0;
  left: 0;
  width: 50vw;
  height: 100vh;
  position: fixed;
  background-color: #E8505B;
  transition: 0.5s;
}

.menu-closed {
  top: 0;
  left: 0;
  width: 0;
  height: 100vh;
  position: fixed;
  overflow-y: hidden;
  transition: 0.5s;
}

.material-icons.closebtn {
  color: #ffffff;
}

.material-icons.closebtn-visible {
  opacity: 1;
  transition: 0.5s;
}

.material-icons.closebtn-hidden {
  opacity: 0;
  transition: 0.5s;
}

.menu-content {
  color: #ffffff;
}

.menu-content a {
  color: #ffffff;
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 30px 10px;
}

.margin {
  margin: 20px;
}
</style>
