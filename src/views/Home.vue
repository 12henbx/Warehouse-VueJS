<template>
  <div class="container-home">
    <LogoHeader></LogoHeader>
    <MenuHeader v-bind:activeMenu="activeMenu"></MenuHeader>
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import LogoHeader from "../components/header/LogoHeader";
import MenuHeader from "../components/header/MenuHeader";

export default {
  name: 'Home',
  components: {
    // HelloWorld
    LogoHeader,
    MenuHeader
  },
  data() {
    return {
      activeMenu: 'home'
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/styles/basics/variables";
  @import "src/styles/page/home";
  @import "src/styles/basics/fonts";
  /*@import "src/styles/basics/layout";*/
</style>
