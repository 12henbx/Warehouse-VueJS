<template>
  <div class="container-sign-in">
    <div class="inputb">
      <input type="text">
      <span data-placeholder="Username"></span>
    </div>
    <div class="inputb">
      <input type="password">
      <span data-placeholder="Password"></span>
    </div>
<!--    <div class="form-login">-->
<!--      <input type="text" name="field1" placeholder="Full Name" />-->
<!--      <input type="email" name="field2" placeholder="Email" />-->
<!--    </div>-->
  </div>
</template>

<script>
// TODO : check best pratice buat data, computed, dll
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      password: '',
      submitted: false,
    };
  },
  computed: {
    ...mapState('account', ['status']),
  },
  created() {
    // reset status login
    this.logout();
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    // eslint-disable-next-line no-unused-vars
    handleSubmit(e) {
      this.submitted = true;
      const { username, password } = this;
      if (username && password) {
        this.login({ username, password });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "src/styles/basics/variables";
  @import "src/styles/page/signin";
  @import "src/styles/basics/fonts";
</style>
