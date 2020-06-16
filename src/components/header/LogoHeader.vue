<template>
  <header class="logo-bar"
       :class="{ 'logo-bar--hidden': !showLogoBar }">
<!--    <img alt="Vue logo" src="src/assets/logo.png">-->
    <h2>Warehouse</h2>
  </header>
</template>

<script>
export default {
  data() {
    return {
      showLogoBar: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onscroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    // eslint-disable-next-line consistent-return
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return 0;
      }
      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return 0;
      }
      this.showLogoBar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scoped lang="scss">
.logo-bar{
  height: 50px;
  width: 100%;
  background: hsl(200, 50%, 50%);
  box-shadow: 0 2px 15px rgba(71, 120, 120, 0.5);
  transform: translate3d(0, 0, 0);
  transition: 0.1s all ease-out;
}

.logo-bar.logo-bar--hidden{
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}

    h2{
        margin-left: 10px;
    }

</style>
