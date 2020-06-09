<template>
  <div>
    <el-page-header title="Назад" @back="$router.push({name: 'poems'})" />

    <h1>Create a new poem</h1>

    <a-poem-update />

  </div>
</template>

<script>
  import aPoemUpdate from '~/components/poem/a-poem-update'

  export default {
    name: "new",
    components: {
      aPoemUpdate
    }
  }
</script>

<style lang="scss">

</style>
