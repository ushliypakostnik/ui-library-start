<template>
  <div class="test">
    <img alt="Vue logo" src="../assets/logo.png" />

    <h1>Start project for UI Library Starter</h1>

    <p>
      <a href="https://www.npmjs.com/package/ui-library-starter" target="_blank"
        >Library package on NPM</a
      >
    </p>
    <p>
      <a href="https://ui-library-starter.netlify.app" target="_blank"
        >Library deploy on Netlify</a
      >
    </p>

    <div class="test__components">
      <h3>Test components:</h3>
      <TestColors />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
};
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

.test
  padding 100px 0
  text-align center

  &__components
    margin-top 50px

// Test глобального препроцессора
h1
  $text("elena")
</style>
