<template>
  <div id="app">
    <Test />
  </div>
</template>

<script>
import Test from './components/Test.vue';

export default {
  name: 'App',

  components: {
    Test,
  },
};
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";

:root
  scroll-behavior smooth

body
  font-family $font-family, sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  color $colors.text
  overflow-x hidden
</style>
