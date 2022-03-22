<template>
  <side-menu :red="this.store.red" :green="this.store.green" :blue="this.store.blue"></side-menu>
  <div>
    <div>
      <input type="text" />
    </div>
    <button class="add-friends">Add friends</button>
  </div>

  <router-link to="/add-wood">
    <div class="friend">
      <img class="friend-pic" alt="friend-pic" src="../assets/friend-pic.svg">

      <div class="friend-name">Sarah</div>

      <img class="friend-flame" alt="friend-flame" src="../assets/friend-flame.svg">
    </div>
  </router-link>

  <div class="friend" v-for="friend in friends" :key="friend.key">
    <img class="friend-pic" alt="friend-pic" src="../assets/friend-pic.svg">

    <div class="friend-name">{{ friend.name }}</div>

    <img class="friend-flame" alt="friend-flame" src="../assets/friend-flame-off.svg">
  </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import { store } from '../store'

export default {
  name: 'FriendsFires',
   components: {
    SideMenu,
  },
  data() {
    return {
      friends: [
        { name: 'Noah', key: 1 },
        { name: 'Leon', key: 2 },
        { name: 'Jasmine', key: 3 },
        { name: 'Mia', key: 4 },
      ],
      store,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  padding-left: 50px;
  background: url("../assets/search-icon.svg") no-repeat left;
  background-size: 40px;
  border: #E8505B 1px solid;
  border-radius: 8px;
  height: 35px;
  width: 50vw;
  background-color: #FFFBFB;
}

.friend {
  display: flex;
  margin-left: calc(35vw - 100px);
  margin-top: 50px;
}

.friend-pic {
  margin-right: 20px;
}

.friend-name {
  text-align: left;
  padding-top: 20px;
  width: 30vw;
  font-size: 20px;
}

.friend-flame {
  padding-top: 10px;
}

.add-friends {
  margin-top: 20px;
  width: calc(50vw + 50px);
  padding: 5px;
}

router-link, a {
  text-decoration: none;
}

</style>
