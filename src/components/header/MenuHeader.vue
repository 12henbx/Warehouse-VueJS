<template>
  <nav class="nav-bar">
      <span v-bind:class="{ active: activeMenu === 'home' }" class="nav-item">
          <font-awesome-icon v-bind:class="{ 'active-icon': activeMenu === 'home', 'nav-icon': activeMenu !== 'home'}"
                             :icon="['fas', 'th-large']" />
      </span>
      <span v-bind:class="{ active: activeMenu === 'notification' }" class="nav-item">
          <font-awesome-icon v-bind:class="{ 'active-icon': activeMenu === 'notification', 'nav-icon': activeMenu !== 'home'}"
                             :icon="['fas', 'bell']" />
      </span>
      <span v-bind:class="{ active: activeMenu === 'detail' }" class="nav-item">
          <font-awesome-icon v-bind:class="{ 'active-icon': activeMenu === 'detail', 'nav-icon': activeMenu !== 'home'}"
                             :icon="['fas', 'percentage']" />
      </span>
  </nav>
</template>

<script>
export default {
    name: 'Menu',
    props: {
        activeMenu: String,
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
        border-bottom: 3px solid #2D8CFA;
    }

    .nav-bar .active {
        border-bottom: 3px solid #2D8CFA;
    }

    .active-icon {
        color: #2D8CFA;
    }

    .nav-icon {
        color: #65676B;
    }
</style>
