<template>
  <form class="container-sign-in">
    <h1>Log In</h1>
    <div class="username-box">
      <div class="highlight-bottom">
        <div class="text-user-box">
          <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'user']" /></span>
        </div>
        <div class="input-username-box">
          <input placeholder="Username" class="login-input" type="text">
        </div>
      </div>
    </div>
    <div class="password-box">
      <div class="highlight-bottom">
        <div class="text-user-box">
          <span class="text-user"><font-awesome-icon class="search-icon" :icon="['fas', 'lock']" /></span>
        </div>
        <div class="input-username-box">
          <input placeholder="Password" class="login-input" type="password">
        </div>
      </div>
    </div>
    <input type="submit" class="signin-btn" value="Login">
    <span class="bottom-text">Don't have an account? <a href="/signup">Sign Up</a></span>
  </form>
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
  @import "src/styles/basics/fonts";
  @import "src/styles/page/signin";
</style>
