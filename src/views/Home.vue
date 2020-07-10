<template>
  <div class="container-home">
    <LogoHeader></LogoHeader>
    <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
      <div>
          <h4>Inbound</h4>
          <ul :style="gridStyle" class="card-grid">
            <li v-for="(menu, index) in inboundList" :key="`menu-${index}`" class="button-item">
                <HomeMenu v-bind:textMenu="menu"></HomeMenu>
            </li>
          </ul>
          <h4>Outbound</h4>
          <ul :style="gridStyle" class="card-grid">
              <li v-for="(menu, index) in outboundList" :key="`menu-${index}`" class="button-item">
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
        inboundList: [
            {name: 'ASN', new: 1, link: 'assign loading dock', query: 'asn-9'},
            {name: 'Loading Dock', new: 0, link: 'assign loading dock', query: 'asn-9'},
            {name: 'Container Activity', new: 0, link: 'container activity', query: 'asn-9'},
            {name: 'Putaway', new: 1, link: 'putaway/index', query: 'asn-9'}
        ], // Vue.set(vm.userProfile, 'age', 27)
        outboundList: [
            {name: 'Sales Order', new: 1, link: 'sales order', query: 'so-9'},
            {name: 'Picking Sales Order', new: 0, link: 'picking sales order', query: 'asn-9'},
            {name: 'Putaway', new: 0, link: 'putaway', query: 'asn-9'}
        ]
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
