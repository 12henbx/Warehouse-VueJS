<template>
    <div class="container">
        <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss">
    @import "src/styles/basics/variables";
    @import "styles/basics/layout";
    @import "src/styles/basics/fonts";
</style>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'App',
    computed: {
      ...mapState({
        alert: state => state.alert,
      }),
    },
    methods: {
      ...mapActions({
        clearAlert: 'alert/userclear',
      }),
    },
    watch: {
      // eslint-disable-next-line no-unused-vars
      $route(to, from) {
        // clear alert
        this.clearAlert();
      },
    },
  };
</script>
