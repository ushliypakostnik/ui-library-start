<template>
  <div class="test">
    <img class="test__logo" alt="Vue logo" src="../assets/logo.png" />

    <br />
    <br />

    <h1>Start project for UI Library Starter</h1>

    <br />
    <br />

    <div>
      <Link path="https://www.npmjs.com/package/ui-library-starter"
        >Library package on NPM</Link
      >
    </div>
    <br />
    <div>
      <Link path="https://ui-library-starter.netlify.app"
        >Library deploy on Netlify</Link
      >
    </div>

    <br />
    <br />

    <div class="test__wrapper-inner">
      <div>Resize javasript mixin test:</div>
      <div v-if="isDesktop">
        The block is present in the DOM only on desktops
      </div>
      <div v-if="isTablet">The block is present in the DOM only on tablets</div>
      <div v-if="isMobile">The block is present in the DOM only on mobiles</div>
    </div>

    <div class="test__components">
      <h3>Test components:</h3>
      <br />
      <TestColors />
    </div>
  </div>
</template>

<script>
import resize from 'ui-library-starter/src/mixins/resize.js';

export default {
  name: 'Test',

  mixins: [resize],
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.test
  padding 100px 0
  text-align center

  +$mobile()
   padding 60px 0

  &__logo
    max-width 120px
    margin 0 auto

    +$mobile()
      max-width 80px

  &__components
    margin-top 50px

  &__wrapper-inner
    +$mobile()
      padding 0 20px

h1
  $text("elena")

  +$tablet()
    padding 0 40px
    $text("olga")

  +$mobile()
    padding 0 20px
    $text("anna")
</style>
