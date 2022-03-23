<template>
  <side-menu :red="this.store.red" :green="this.store.green" :blue="this.store.blue"></side-menu>

  <get-wood></get-wood>

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

      <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28.5" cy="28.5" r="28.5" fill="#FFEEEE"/>
        <path d="M29.0215 45.1721C31.2931 44.8867 33.4845 44.1493 35.4666 43.0034C37.4486 41.8575 39.1812 40.3264 40.562 38.5002C43.5801 34.5686 43.8579 29.2998 42.4124 24.6949C41.7475 22.4411 40.6451 20.3404 39.1683 18.5126C38.0288 17.1848 35.3779 16.1584 35.2273 14.1949C35.2273 14.1949 34.6952 7.27817 26.3894 0.0977141C26.3347 0.0507079 26.2684 0.0191879 26.1974 0.0064051C26.1264 -0.00637769 26.0532 4.6856e-05 25.9855 0.0250132C25.9178 0.0499795 25.858 0.0925793 25.8123 0.148409C25.7666 0.204238 25.7366 0.271265 25.7255 0.342558C25.2547 3.42191 22.9805 15.518 17.2926 18.9223C17.2295 18.9582 17.1579 18.9767 17.0853 18.9759C17.0126 18.975 16.9415 18.9549 16.8792 18.9175C16.817 18.8801 16.7657 18.8269 16.7308 18.7632C16.6959 18.6995 16.6785 18.6276 16.6805 18.555C16.6945 18.1461 16.7691 17.7414 16.9018 17.3543C16.9313 17.2735 16.9343 17.1853 16.9103 17.1027C16.8862 17.02 16.8365 16.9471 16.7683 16.8946C16.7001 16.8422 16.6169 16.8128 16.5308 16.8108C16.4448 16.8088 16.3603 16.8342 16.2897 16.8835C15.9855 17.0897 15.7031 17.3263 15.4469 17.5898C14.6173 18.4779 13.9311 19.4898 13.4128 20.5891C10.9314 25.8296 11.9061 32.9771 14.8772 37.8033C17.8482 42.6295 23.2536 45.7937 29.0215 45.1721Z"
          :fill="'rgb(' + this.store.happy.red + ',' + this.store.happy.green + ',' + this.store.happy.blue + ',' + '1)'"/>
      </svg>
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
import GetWood from '../components/GetWood.vue'

export default {
  name: 'FriendsFires',
   components: {
    SideMenu,
    GetWood,
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
