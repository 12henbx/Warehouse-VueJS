<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
          <font-awesome-icon :icon="['fas', 'th-large']" />
        <i class="fa fa-car"></i>
      </li>
      <li class="nav-item">
          <font-awesome-icon :icon="['fas', 'bell']" />
      </li>
      <li class="nav-item">
          <font-awesome-icon :icon="['fas', 'percentage']" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuHeader",
  data: function () {
    return {
      title: 'Menu Header'
    }
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: this.title
      }
    },
    link: [
      { rel: 'stylesheet', href: 'node_modules/@fortawesome/fontawesome-free/css/fontawesome.css' },
      { rel: 'stylesheet', href: 'node_modules/@fortawesome/fontawesome-free/css/brands.css' },
      { rel: 'stylesheet', href: 'node_modules/@fortawesome/fontawesome-free/css/solid.css' },
        { rel: 'stylesheet', href: 'node_modules/@fortawesome/fontawesome-free/css/all.css' },
      // with shorthand
      // { r: 'icon', h: 'path/to/icon-32.png', sz: '32x32', t: 'image/png' },
    ],
  },
}
</script>

<style scoped lang="scss">

</style>
