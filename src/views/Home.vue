<template>
  <div class="container-home">
    <LogoHeader></LogoHeader>
    <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
      <div>
          <ul :style="gridStyle" class="card-list">
            <li v-for="(menu, index) in menuList" :key="`menu-${index}`" class="button-item">
                <HomeMenu v-bind:textMenu="menu"></HomeMenu>
            </li>
          </ul>
      </div>

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
import HomeMenu from "../components/button/HomeMenu";

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
      activeMenu: 'home',
        menuList: [
            {name: 'ASN', new: 1, link: '/asn/index'},
            {name: 'Loading Dock', new: 0, link: 'loading-dock/index'},
            {name: 'Container Activity', new: 0, link: 'container-activity/index'},
            {name: 'Putaway', new: 1, link: 'putaway/index'}
        ] // Vue.set(vm.userProfile, 'age', 27)
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
</style>
