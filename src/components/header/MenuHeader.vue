<template>
  <nav class="nav-bar">
      <span @click="navigateRouter('home')" v-bind:class="{ active: activeMenu === 'home' }" class="nav-item">
          <font-awesome-icon v-bind:class="{ 'active-icon': activeMenu === 'home', 'nav-icon': activeMenu !== 'home'}"
                             :icon="['fas', 'th-large']" />
      </span>
      <span @click="navigateRouter('notifications')" v-bind:class="{ active: activeMenu === 'notification' }" class="nav-item">
          <font-awesome-icon v-bind:class="{ 'active-icon': activeMenu === 'notification', 'nav-icon': activeMenu !== 'notification'}"
                             :icon="['fas', 'bell']" />
      </span>
      <span @click="navigateRouter('statistics')" v-bind:class="{ active: activeMenu === 'statistics' }" class="nav-item">
          <font-awesome-icon v-bind:class="{ 'active-icon': activeMenu === 'statistics', 'nav-icon': activeMenu !== 'statistics'}"
                             :icon="['fas', 'percentage']" />
      </span>
  </nav>
<!--    <a href="#" @click='goTo("foo")'>Foo</a>-->
</template>

<script>
import router from "../../router";

export default {
    name: 'Menu',
    props: {
        activeMenu: String,
    },
    methods: {
        navigateRouter(name){
            router.push({ name })
        }
    }
}
</script>

<style scoped lang="scss">
    @import "src/styles/basics/variables";
    .nav-bar {
        display: flex;
        justify-content: space-between;
        top: 0;
        width: 100%;
        height: 50px;
        max-width: $max-phone-width;
        border-bottom: 1px solid #adadad;
    }

    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 28px;
        margin: auto auto;
        width: 30%;
    }

    .nav-bar span.nav-item:hover {
        border-bottom: 3px solid $active-blue-color;
    }

    .nav-bar .active {
        border-bottom: 3px solid $active-blue-color;
    }

    .active-icon {
        color: $active-blue-color;
    }

    .nav-icon {
        color: #65676B;
    }
</style>
