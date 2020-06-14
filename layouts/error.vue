<template>
  <div class="error">
    <img class="error__image" src="../static/error.svg" alt="">
    <nuxt-link to="/"><el-button type="primary" plain  icon="el-icon-arrow-left">Back home</el-button></nuxt-link>

  </div>
</template>

<script>
  export default {
    name: "error"
  }
</script>

<style scoped lang="scss">
  .error {
    text-align: center;
    padding: 0 10px;

    &__image {
      max-width: 450px;
      display: block;
      margin: 10px auto;
    }
  }
</style>
