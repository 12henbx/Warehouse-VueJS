<template>
  <div class="container-home">
    <LogoHeader></LogoHeader>
    <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
    <ul :style="gridStyle" class="card-list">
<!--      <li v-for="(card, index) in cards" class="card-item">-->
<!--        {{ index + 1 }}-->
<!--      </li>-->
      <li class="button-item">
        <HomeMenu></HomeMenu>
      </li>
        <li class="button-item">
            <HomeMenu></HomeMenu>
        </li>
    </ul>
<!--    <SearchBar></SearchBar>-->
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LogoHeader from "../components/header/LogoHeader";
import MenuHeader from "../components/header/MenuHeader";
import HomeMenu from "../components/HomeMenu";

export default {
  name: 'Home',
  components: {
    // HelloWorld
    LogoHeader,
    MenuHeader,
    HomeMenu,
  },
  data() {
    return {
      activeMenu: 'home'
    }
  },
    computed: {
        gridStyle() {
            return {
                gridTemplateColumns: 'repeat(2, 1fr)'
            }
        },
    },
}
</script>

<style scoped lang="scss">
  @import "src/styles/basics/variables";
  @import "src/styles/page/home";
  @import "src/styles/basics/fonts";
  /*@import "src/styles/basics/layout";*/
</style>
